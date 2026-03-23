import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Helper to initialize Google Client
const getGoogleAuth = () => {
    return new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        'https://developers.google.com/oauthplayground' // Redirect URI
    );
};

export async function GET(request: Request) {
    // Basic security: only allow requests with a specific authorization header (if triggering manually or via CRON)
    const authHeader = request.headers.get('authorization');
    if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET || !process.env.GOOGLE_REFRESH_TOKEN || !process.env.GOOGLE_ACCOUNT_ID || !process.env.GOOGLE_LOCATION_ID || !process.env.GEMINI_API_KEY) {
        return NextResponse.json({ error: 'Missing required environment variables.' }, { status: 500 });
    }

    try {
        const oauth2Client = getGoogleAuth();
        oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

        // Initialize My Business API
        const mybusinessbusinessinformation = google.mybusinessbusinessinformation({ version: 'v1', auth: oauth2Client });
        // Instead of mybusinessbusinessinformation, reviews API is under mybusinessreviews
        // googleapis v100+ supports mybusinessreviews_v1
        const mybusinessreviews = google.mybusinessreviews({ version: 'v1', auth: oauth2Client });

        const accountId = process.env.GOOGLE_ACCOUNT_ID;
        const locationId = process.env.GOOGLE_LOCATION_ID;
        const parent = `accounts/${accountId}/locations/${locationId}`;

        // 1. Fetch unreplied reviews
        const reviewsResponse = await mybusinessreviews.accounts.locations.reviews.list({
            parent: parent,
        });

        const reviews = reviewsResponse.data.reviews || [];
        const unrepliedReviews = reviews.filter((review) => !review.reviewReply);

        if (unrepliedReviews.length === 0) {
            return NextResponse.json({ message: 'No unreplied reviews found.' }, { status: 200 });
        }

        const stats = { totalUnreplied: unrepliedReviews.length, successfullyReplied: 0, errors: 0 };
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        // 2. Loop through each review and process
        for (const review of unrepliedReviews) {
            try {
                // Determine sentiment/context from rating
                let promptContext = `You are the owner of Growthik Media, a digital marketing agency. Respond to this Google Review professionally, amiably, and concisely (1-3 sentences max). Do not include any placeholder text.`;
                
                if (review.starRating === 'FIVE' || review.starRating === 'FOUR') {
                    promptContext += ` The review is positive (${review.starRating} stars). Be appreciative and warm.`;
                } else {
                    promptContext += ` The review is negative or neutral (${review.starRating} stars). Be polite, apologize for their experience, and offer to resolve it privately.`;
                }

                if (review.comment) {
                    promptContext += ` The user said: "${review.comment}"`;
                } else {
                    promptContext += ` The user didn't leave a comment, just a rating.`;
                }

                // 3. Generate Reply via Gemini
                const result = await model.generateContent(promptContext);
                const replyText = result.response.text().trim();

                // 4. Post Reply back to Google
                await mybusinessreviews.accounts.locations.reviews.reply({
                    name: review.name, // The unique name of the review, e.g., accounts/{accountId}/locations/{locationId}/reviews/{reviewId}
                    requestBody: {
                        comment: replyText
                    }
                });

                stats.successfullyReplied++;
            } catch (err: any) {
                console.error(`Error processing review ${review.name}:`, err.message);
                stats.errors++;
            }
        }

        return NextResponse.json({ 
            message: 'Auto-reply process completed.',
            stats 
        }, { status: 200 });

    } catch (error: any) {
        console.error('Error in Auto-responder API:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
