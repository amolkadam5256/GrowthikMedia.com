import { db } from "@/lib/db";
import { google } from "googleapis";
import { GoogleGenerativeAI } from "@google/generative-ai";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

/**
 * Gets a fresh, authorized Google client for a specific account.
 * Automatically refreshes the token if expired and updates the DB.
 */
export async function getAuthorizedClient(email: string) {
  const config = await db.googleConfig.findUnique({
    where: { email },
  });

  if (!config) {
    throw new Error(`Google configuration not found for email: ${email}`);
  }

  oauth2Client.setCredentials({
    access_token: config.accessToken,
    refresh_token: config.refreshToken,
    expiry_date: config.tokenExpiry.getTime(),
  });

  // Check if token is expired or expires in the next 5 minutes
  if (config.tokenExpiry.getTime() < Date.now() + 5 * 60 * 1000) {
    const { credentials } = await oauth2Client.refreshAccessToken();
    
    await db.googleConfig.update({
      where: { email },
      data: {
        accessToken: credentials.access_token!,
        tokenExpiry: new Date(credentials.expiry_date!),
      },
    });

    oauth2Client.setCredentials(credentials);
  }

  return oauth2Client;
}

/**
 * Fetches all unreplied reviews for a given Google location.
 */
export async function fetchUnrepliedReviews(auth: any, accountId: string, locationId: string) {
  const g: any = google;
  const mybusinessreviews = g.mybusinessreviews({ version: "v1", auth });
  const parent = `accounts/${accountId}/locations/${locationId}`;
  
  const response = await mybusinessreviews.accounts.locations.reviews.list({
    parent,
  });

  const reviews = response.data.reviews || [];
  return reviews.filter((review: any) => !review.reviewReply);
}

/**
 * Posts a reply to a Google review.
 */
export async function replyToReview(auth: any, reviewName: string, replyText: string) {
  const g: any = google;
  const mybusinessreviews = g.mybusinessreviews({ version: "v1", auth });
  
  await mybusinessreviews.accounts.locations.reviews.reply({
    name: reviewName,
    requestBody: {
      comment: replyText,
    },
  });
}

/**
 * Generates an AI response for a review based on its rating and comment.
 */
export async function generateAIResponse(rating: string, comment: string | null) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
    You are the manager of Growthik Media, a premium digital marketing agency. 
    Respond to the following Google review.
    
    Rating: ${rating} Stars
    Customer Comment: ${comment || "No comment provided."}
    
    Rules for response:
    - If 4-5 stars: Thank them warmly and mention we love helping businesses grow.
    - If 1-3 stars: Apologize sincerely, remain professional, and ask them to contact us at support@growthikmedia.com to resolve it.
    - Max 60 words.
    - Be human-like, not robotic.
    - No hashtags or placeholders.
    - Support English, Hindi, and Marathi depending on the review language if detected, otherwise default to professional English.
  `;

  const result = await model.generateContent(prompt);
  return result.response.text().trim();
}
