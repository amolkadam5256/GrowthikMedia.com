import { NextResponse } from "next/server";
import axios from "axios";
import nodemailer from "nodemailer";

/**
 * LIGHTWEIGHT GOOGLE REVIEWS AUTO-RESPONDER (NO DATABASE)
 * ------------------------------------------------------------------
 * 1. Fetches new reviews via Google My Business API
 * 2. Generates professional AI replies using Groq (Free tier)
 * 3. Posts replies to Google and sends thank-you emails
 * ------------------------------------------------------------------
 */

// --- 1. AI REPLY HELPER (Uses Groq for lightning-fast free AI) ---
async function generateAIReply(reviewerName: string, rating: number, comment: string | null) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return "Thank you for your feedback! We truly appreciate you sharing your experience with us.";

  const prompt = `
    Reviewer Name: ${reviewerName}
    Rating: ${rating} Stars
    Review Comment: ${comment || "No comment provided"}
    
    Task: Generate a professional, concise (50-80 words) reply to this Google Business review.
    - If 4 or 5 stars: Be appreciative and warm.
    - If 3 stars or less: Be professional, apologize for any dissatisfaction, and offer support.
    
    Response format: Only the reply text, no quotes or placeholders.
  `;

  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama3-8b-8192",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 150,
      },
      { headers: { Authorization: `Bearer ${apiKey}` } }
    );
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error("AI Generation Error:", error);
    return "Thank you for sharing your feedback with us. Your input is valuable as we continue to improve our services.";
  }
}

// --- 2. EMAIL HELPER (Uses Nodemailer) ---
async function sendThankYouEmail(reviewerName: string, aiReply: string) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, BUSINESS_NAME } = process.env;

  if (!SMTP_USER || !SMTP_PASS) {
    console.warn("SMTP credentials missing, skipping email.");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST || "smtp.gmail.com",
    port: parseInt(SMTP_PORT || "587"),
    secure: SMTP_PORT === "465",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; line-height: 1.6; color: #333;">
      <h2>Thank You for Your Feedback!</h2>
      <p>Hi ${reviewerName},</p>
      <p>Thank you for sharing your feedback with us on Google.</p>
      <blockquote style="background: #f9f9f9; padding: 15px; border-left: 5px solid #ccc;">
        ${aiReply}
      </blockquote>
      <p>We truly value your support. If you need further help, contact our support team anytime.</p>
      <p>Best regards,<br><strong>${BUSINESS_NAME || "Growthik Media Team"}</strong></p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"${BUSINESS_NAME}" <${SMTP_USER}>`,
      to: SMTP_USER, // Note: In a no-DB setup, we don't have the reviewer's private email; we send a bcc/notification or placeholder
      subject: "Thank You for Your Feedback!",
      html: emailHtml,
    });
    console.log(`Email notification sent for ${reviewerName}`);
  } catch (error) {
    console.error("Email Sending Error:", error);
  }
}

// --- 3. MAIN API ROUTE ---
export async function GET(req: Request) {
  const { ACCOUNT_ID, LOCATION_ID, GOOGLE_ACCESS_TOKEN } = process.env;

  if (!ACCOUNT_ID || !LOCATION_ID || !GOOGLE_ACCESS_TOKEN) {
    return NextResponse.json({ error: "Configuration missing." }, { status: 500 });
  }

  const baseUrl = `https://mybusiness.googleapis.com/v4/accounts/${ACCOUNT_ID}/locations/${LOCATION_ID}`;

  try {
    // A. Fetch Reviews
    const reviewsResp = await axios.get(`${baseUrl}/reviews`, {
      headers: { Authorization: `Bearer ${GOOGLE_ACCESS_TOKEN}` },
    });

    const reviews = reviewsResp.data.reviews || [];
    const unreplied = reviews.filter((r: any) => !r.reviewReply);

    if (unreplied.length === 0) {
      return NextResponse.json({ message: "No new reviews found." });
    }

    const processed = [];

    // B. Process Each Review
    for (const review of unreplied) {
      const reviewerName = review.reviewer.displayName;
      const starRating = parseInt(review.starRating.replace("STAR_RATING_UNSPECIFIED", "0").replace(/\D/g, "") || "0");
      
      // 1. Generate AI Reply
      const aiReply = await generateAIReply(reviewerName, starRating, review.comment);

      // 2. Post Reply back to Google
      try {
        await axios.put(
          `https://mybusiness.googleapis.com/v4/${review.name}/reply`,
          { comment: aiReply },
          { headers: { Authorization: `Bearer ${GOOGLE_ACCESS_TOKEN}` } }
        );
        
        // 3. Send Thank You Email (Notification/Placeholder)
        await sendThankYouEmail(reviewerName, aiReply);

        processed.push({ reviewer: reviewerName, status: "Replied" });
      } catch (err: any) {
        console.error(`Failed to reply to ${reviewerName}:`, err.response?.data || err.message);
        processed.push({ reviewer: reviewerName, status: "Failed", error: err.message });
      }
    }

    return NextResponse.json({ success: true, processed });

  } catch (error: any) {
    console.error("Main Process Error:", error.response?.data || error.message);
    return NextResponse.json({ error: "Failed to process reviews." }, { status: 500 });
  }
}
