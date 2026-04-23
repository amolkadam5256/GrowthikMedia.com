import { db } from "@/lib/db";
import { google } from "googleapis";
import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * Gets an authorized Google client using Service Account credentials.
 * This replaces OAuth2 user-based authentication for server-side automation.
 */
export async function getAuthorizedClient(email?: string) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ["https://www.googleapis.com/auth/business.manage"],
    });

    const authClient = await auth.getClient();
    return authClient;
  } catch (error: any) {
    console.error("Error creating Google Service Account client:", error.message);
    throw new Error(`Failed to authorize Google Service Account: ${error.message}`);
  }
}

/**
 * Fetches all unreplied reviews for a given Google location using v4 REST API.
 * Uses authClient.request() for a stable, long-term approach.
 */
export async function fetchUnrepliedReviews(authClient: any, accountId: string, locationId: string) {
  try {
    // Correct URL structure for v4 Reviews API
    // Note: accountId and locationId are joined to form the full location name
    const locationName = `accounts/${accountId}/locations/${locationId}`;
    const url = `https://mybusiness.googleapis.com/v4/${locationName}/reviews`;

    console.log(`Fetching reviews from: ${url}`);

    const response = await authClient.request({
      url,
      method: 'GET'
    });

    const reviews = response.data.reviews || [];

    // In v4, reviews without a reply don't have the 'reviewReply' property
    const unreplied = reviews.filter((review: any) => !review.reviewReply);

    console.log(`Found ${reviews.length} total reviews, ${unreplied.length} unreplied.`);
    return unreplied;
  } catch (error: any) {
    console.error("Error fetching reviews:", error.message);
    throw error;
  }
}

/**
 * Posts a reply to a Google review using v4 REST API.
 * Method: PUT
 * Endpoint: https://mybusiness.googleapis.com/v4/{reviewName}/reply
 */
export async function replyToReview(authClient: any, reviewName: string, replyText: string) {
  try {
    // In v4, reviewName is already in the format: accounts/*/locations/*/reviews/*
    const url = `https://mybusiness.googleapis.com/v4/${reviewName}/reply`;

    console.log(`Replying to review at: ${url}`);

    await authClient.request({
      url,
      method: "PUT",
      data: {
        comment: replyText,
      },
    });

    console.log("Reply posted successfully.");
  } catch (error: any) {
    console.error(`Error replying to review ${reviewName}:`, error.message);
    throw error;
  }
}

/**
 * Generates a professional, locally-aware AI response for a review.
 * Adapts tone based on rating and ensures Google Policy compliance.
 */
export async function generateAIResponse(rating: string, comment: string | null) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "AIzaSyAzNSIl2z-lBI5UZ5V8Yf0mi5fPFjiBp9k") {
    // This is the active key we just added
  } else if (!apiKey || apiKey === "PASTE_YOUR_GEMINI_KEY_HERE") {
    throw new Error("GEMINI_API_KEY is not configured or is using the placeholder.");
  }

  const genAI = new GoogleGenerativeAI(apiKey!);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 200,
    }
  });

  const prompt = `
You are the owner of Growthik Media, a Pune-based digital marketing and branding agency, replying to a Google review.

Your goal is to write a natural, human-like and positive response that reflects professionalism, local expertise and a strong brand presence.

---

🔒 Google Policy Rules (STRICT):
- Do NOT include promotional offers, discounts, or sales language
- Do NOT ask for personal contact details
- Do NOT include links or URLs
- Do NOT use misleading or exaggerated claims
- Do NOT ask the reviewer to change or remove their review
- Do NOT mention AI or automation

---

🌐 Brand Context:
Growthik Media is a digital marketing agency in Pune specializing in:
- SEO services in Pune
- digital marketing services
- branding and website development
- performance marketing and lead generation
- helping local businesses grow online

---

📍 Local SEO Focus (IMPORTANT):
- Naturally include Pune or local business context where relevant
- You may include ONE or TWO of these keywords naturally:
  - digital marketing agency in Pune
  - SEO services in Pune
  - Pune business growth
  - local marketing solutions
  - branding agency in Pune
  - online growth for businesses in Pune

- Do NOT force keywords
- Do NOT repeat keywords unnaturally

---

✍️ Writing Style:
- Natural, conversational and human
- Warm, polite and confident tone
- Keep response between 40–80 words
- Make each reply unique and non-repetitive
- Keep it simple and easy to read

---

🧠 Response Behavior:
- ALWAYS maintain a positive and respectful tone
- Focus on appreciation and professionalism
- Do NOT include apologies or negative language
- Do NOT highlight issues or complaints
- Keep response neutral-to-positive even if the review is unclear

---

💬 Personalization:
- Respond based on the review content
- If short → expand naturally
- If detailed → acknowledge key points briefly
- Keep it genuine and specific where possible

---

Customer Review:
"${comment || "No comment provided."}"

Rating: ${rating}

---

Write a natural, positive, locally-aware and Google policy-compliant reply as Growthik Media (Pune).

Reply:
`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();

    // Safety check: Ensure we didn't get an empty or broken response
    if (!text || text.length < 5) {
      throw new Error("AI generated an empty or too short response.");
    }

    return text;
  } catch (error: any) {
    console.error("Gemini Generation Error:", error.message);
    throw new Error(`AI Response Generation Failed: ${error.message}`);
  }
}
