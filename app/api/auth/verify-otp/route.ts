import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { createToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, code } = body; // Changed 'identifier' to 'email' to match login flow

    if (!email || !code) {
      return NextResponse.json(
        { success: false, error: "Email and OTP code required" },
        { status: 400 }
      );
    }

    // Find OTP record
    const otpRecord = await db.otp.findFirst({
      where: {
        email,
        code,
        isUsed: false,
        expires: {
          gt: new Date(),
        },
      },
    });

    if (!otpRecord) {
      return NextResponse.json(
        { success: false, error: "Invalid or expired OTP" },
        { status: 401 }
      );
    }

    // Verify Admin exists
    const admin = await db.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      return NextResponse.json(
        { success: false, error: "Admin account not found" },
        { status: 404 }
      );
    }

    // Mark OTP as used
    await db.otp.update({
      where: { id: otpRecord.id },
      data: { isUsed: true },
    });

    // Create JWT token
    const token = await createToken({
      id: admin.id,
      email: admin.email,
      role: "ADMIN",
    });

    const response = NextResponse.json(
      {
        success: true,
        message: "Login successful",
        user: {
          id: admin.id,
          email: admin.email,
          name: admin.name,
          role: "ADMIN",
        },
      },
      { status: 200 }
    );

    // Set cookie
    response.cookies.set("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error) {
    console.error("OTP verification error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
