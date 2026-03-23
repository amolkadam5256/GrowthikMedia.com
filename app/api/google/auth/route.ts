import { NextResponse } from "next/server";
import { google } from "googleapis";
import { db } from "@/lib/db";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URL // http://localhost:3000/api/google/callback for dev
);

const SCOPES = ["https://www.googleapis.com/auth/business.manage"];

export async function GET() {
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
    prompt: "consent", // Forces a new refresh token
  });

  return NextResponse.redirect(url);
}
