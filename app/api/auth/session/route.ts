import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET_STR =
  process.env.NEXTAUTH_SECRET || "growthik_media_secret_secure_key_2024";
const JWT_SECRET = new TextEncoder().encode(JWT_SECRET_STR);

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("authToken")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Not authenticated" },
        { status: 401 },
      );
    }

    const verified = await jwtVerify(token, JWT_SECRET);
    const user = verified.payload as {
      id: string;
      email: string;
      role: string;
    };

    return NextResponse.json(
      {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Session invalid" },
      { status: 401 },
    );
  }
}
