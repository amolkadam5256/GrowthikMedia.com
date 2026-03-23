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
    return NextResponse.json({ message: 'Auto-reply process deactivated.' }, { status: 200 });
}
