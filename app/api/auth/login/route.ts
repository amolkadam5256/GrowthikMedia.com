import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import {
  generateOTP,
  getOTPExpiration,
  sendOTPEmail,
  validateEmail,
} from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if Admin exists
    const admin = await db.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      // Security: Don't reveal if admin exists, but here we can return 401 for clarity in this specific admin-portal context
      return NextResponse.json(
        { success: false, error: "Access denied. Not an admin." },
        { status: 403 }
      );
    }

    // Generate OTP (Dummy for now)
    const otp = "123456";
    const expiresAt = getOTPExpiration();

    // Invalidate old OTPs for this email
    await db.otp.deleteMany({
      where: { email, isUsed: false },
    });

    // Create new OTP
    await db.otp.create({
      data: {
        email,
        code: otp,
        expires: expiresAt,
      },
    });

    // Try to send email but don't fail if it fails (since we are using dummy OTP)
    try {
      await sendOTPEmail(email, otp);
    } catch (e) {
      console.warn("Email sending failed but continuing with dummy OTP flow");
    }

    return NextResponse.json(
      {
        success: true,
        message: "OTP sent (Dummy: 123456)",
        type: "email",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login OTP Request error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
