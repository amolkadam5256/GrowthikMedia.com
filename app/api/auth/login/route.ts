import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { cookies } from "next/headers";

// Important: Use a consistent secret strategy
const JWT_SECRET_STR =
  process.env.NEXTAUTH_SECRET || "growthik_media_secret_secure_key_2024";
const JWT_SECRET = new TextEncoder().encode(JWT_SECRET_STR);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required" },
        { status: 400 },
      );
    }

    console.log("[Login API] Attempt for:", email);

    // Check if Admin exists
    const admin = await db.admin.findUnique({
      where: { email },
    });

    if (!admin || !admin.password) {
      console.log("[Login API] User not found:", email);
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 },
      );
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, admin.password);
    if (!passwordMatch) {
      console.log("[Login API] Password mismatch for:", email);
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 },
      );
    }

    if (!admin.isActive) {
      return NextResponse.json(
        { success: false, error: "Account is disabled" },
        { status: 403 },
      );
    }

    // Generate JWT
    const token = await new SignJWT({
      id: admin.id,
      email: admin.email,
      role: admin.role,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("24h")
      .sign(JWT_SECRET);

    console.log("[Login API] Token generated, setting cookie...");

    // Set cookie
    const cookieStore = await cookies();
    cookieStore.set("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Login successful",
      },
      { status: 200 },
    );
  } catch (error: unknown) {
    console.error(
      "[Login API] Fatal error:",
      error instanceof Error ? error.message : String(error),
    );
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
