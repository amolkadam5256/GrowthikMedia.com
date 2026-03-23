import { NextResponse } from "next/server";
import { google } from "googleapis";
import { db } from "@/lib/db";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URL
);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Missing authorization code" }, { status: 400 });
  }

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Get user info to save by email
    const oauth2 = google.oauth2({ version: "v2", auth: oauth2Client });
    const userInfoResponse = await oauth2.userinfo.get();
    const email = userInfoResponse.data.email;

    if (!email) {
      return NextResponse.json({ error: "No email associated with Google account." }, { status: 400 });
    }

    // Try to fetch location/account info automatically
    const mybusinessaccountmanagement = google.mybusinessaccountmanagement({ version: "v1", auth: oauth2Client });
    const accountsResponse = await mybusinessaccountmanagement.accounts.list();
    const accounts = accountsResponse.data.accounts || [];
    const accountId = accounts[0]?.name?.split("/")[1] || "";

    const mybusinessbusinessinformation = google.mybusinessbusinessinformation({ version: "v1", auth: oauth2Client });
    const locationsResponse = await mybusinessbusinessinformation.accounts.locations.list({
      parent: `accounts/${accountId}`,
    });
    const locations = locationsResponse.data.locations || [];
    const locationId = locations[0]?.name?.split("/")[1] || "";
    const businessName = locations[0]?.title || "";

    // Store in DB
    await db.googleConfig.upsert({
      where: { email },
      create: {
        email,
        accessToken: tokens.access_token!,
        refreshToken: tokens.refresh_token!,
        tokenExpiry: new Date(tokens.expiry_date!),
        accountId,
        locationId,
        businessName,
      },
      update: {
        accessToken: tokens.access_token!,
        refreshToken: tokens.refresh_token || undefined,
        tokenExpiry: new Date(tokens.expiry_date!),
        accountId,
        locationId,
        businessName,
      },
    });

    return NextResponse.json({ success: true, message: "Google account successfully linked!", email, businessName });
  } catch (error: any) {
    console.error("Google Auth Callback Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
