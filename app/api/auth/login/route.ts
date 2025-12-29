import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import {
  hashPassword,
  verifyPassword,
  createToken,
  validateEmail,
  validateMobile,
  validatePassword,
  generateOTP,
  getOTPExpiration,
  sendOTPEmail,
} from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, mobile, password, method } = body;

    // Validate input
    if (!method) {
      return NextResponse.json(
        { success: false, error: "Login method required (email/mobile/otp)" },
        { status: 400 }
      );
    }

    // ============ EMAIL/PASSWORD LOGIN ============
    if (method === "email") {
      if (!email || !password) {
        return NextResponse.json(
          { success: false, error: "Email and password required" },
          { status: 400 }
        );
      }

      if (!validateEmail(email)) {
        return NextResponse.json(
          { success: false, error: "Invalid email format" },
          { status: 400 }
        );
      }

      const user = await db.user.findUnique({
        where: { email },
      });

      if (!user || !user.password) {
        return NextResponse.json(
          { success: false, error: "Invalid credentials" },
          { status: 401 }
        );
      }

      if (user.role !== "ADMIN") {
        return NextResponse.json(
          {
            success: false,
            error: "Only admin users can login here",
          },
          { status: 403 }
        );
      }

      const passwordMatch = await verifyPassword(password, user.password);
      if (!passwordMatch) {
        return NextResponse.json(
          { success: false, error: "Invalid credentials" },
          { status: 401 }
        );
      }

      if (!user.isActive) {
        return NextResponse.json(
          { success: false, error: "Account is inactive" },
          { status: 403 }
        );
      }

      // Create token
      const token = await createToken({
        id: user.id,
        email: user.email,
        role: user.role,
      });

      // Create session
      const session = await db.session.create({
        data: {
          userId: user.id,
          token,
          expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
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
        maxAge: 7 * 24 * 60 * 60, // 7 days
      });

      return response;
    }

    // ============ OTP REQUEST (EMAIL/MOBILE) ============
    if (method === "otp-request") {
      if (!email && !mobile) {
        return NextResponse.json(
          { success: false, error: "Email or mobile required" },
          { status: 400 }
        );
      }

      let identifier = email || mobile;
      let type = email ? "email" : "mobile";

      if (email && !validateEmail(email)) {
        return NextResponse.json(
          { success: false, error: "Invalid email format" },
          { status: 400 }
        );
      }

      if (mobile && !validateMobile(mobile)) {
        return NextResponse.json(
          { success: false, error: "Invalid mobile format" },
          { status: 400 }
        );
      }

      // Check if user exists and is admin
      const user = await db.user.findFirst({
        where: {
          OR: [{ email: identifier }, { mobile: identifier }],
        },
      });

      if (!user || user.role !== "ADMIN") {
        return NextResponse.json(
          {
            success: false,
            error: "Only registered admin users can login",
          },
          { status: 401 }
        );
      }

      if (!user.isActive) {
        return NextResponse.json(
          { success: false, error: "Account is inactive" },
          { status: 403 }
        );
      }

      // Generate OTP
      const otp = generateOTP();
      const expiresAt = getOTPExpiration();

      // Delete old OTPs
      if (email) {
        await db.otp.deleteMany({
          where: { email, isUsed: false },
        });
      } else {
        await db.otp.deleteMany({
          where: { mobile, isUsed: false },
        });
      }

      // Create new OTP
      const otpRecord = await db.otp.create({
        data: {
          userId: user.id,
          email: email || null,
          mobile: mobile || null,
          code: otp,
          method: type,
          expires: expiresAt,
        },
      });

      // Send OTP via email
      if (email) {
        const sent = await sendOTPEmail(email, otp);
        if (!sent) {
          return NextResponse.json(
            { success: false, error: "Failed to send OTP email" },
            { status: 500 }
          );
        }
      }

      return NextResponse.json(
        {
          success: true,
          message: `OTP sent to ${type === "email" ? "email" : "phone"}`,
          identifier: identifier,
          type: type,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Invalid login method" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
