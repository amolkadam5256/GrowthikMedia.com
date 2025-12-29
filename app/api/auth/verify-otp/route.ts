import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { createToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { identifier, code } = body;

    if (!identifier || !code) {
      return NextResponse.json(
        { success: false, error: "Identifier and OTP code required" },
        { status: 400 }
      );
    }

    // Find OTP record
    const otpRecord = await db.otp.findFirst({
      where: {
        code,
        isUsed: false,
        expires: {
          gt: new Date(),
        },
        OR: [{ email: identifier }, { mobile: identifier }],
      },
    });

    if (!otpRecord) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid or expired OTP",
        },
        { status: 401 }
      );
    }

    // Check attempt limit
    if (otpRecord.attempts >= 3) {
      await db.otp.delete({ where: { id: otpRecord.id } });
      return NextResponse.json(
        {
          success: false,
          error: "Too many attempts. Please request a new OTP",
        },
        { status: 429 }
      );
    }

    // Get user
    const user = await db.user.findUnique({
      where: { id: otpRecord.userId! },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    if (!user.isActive) {
      return NextResponse.json(
        { success: false, error: "Account is inactive" },
        { status: 403 }
      );
    }

    // Mark OTP as used
    await db.otp.update({
      where: { id: otpRecord.id },
      data: { isUsed: true },
    });

    // Create JWT token
    const token = await createToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    // Create session
    await db.session.create({
      data: {
        userId: user.id,
        token,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        userAgent: request.headers.get("user-agent") || undefined,
        ipAddress: request.ip || undefined,
      },
    });

    // Update lastLogin
    await db.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });

    const response = NextResponse.json(
      {
        success: true,
        message: "Login successful",
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      },
      { status: 200 }
    );

    response.cookies.set("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60,
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
