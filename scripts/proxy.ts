import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET_STR =
  process.env.NEXTAUTH_SECRET || "growthik_media_secret_secure_key_2024";
const JWT_SECRET = new TextEncoder().encode(JWT_SECRET_STR);

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get("authToken")?.value;

  const normalizedPath = pathname.replace(/\/$/, "");

  // Only run logic for /admin paths, but IGNORE the root /admin page and /admin/login
  // because we handle those in the page.tsx files to prevent redirect loops.
  if (
    normalizedPath.startsWith("/admin") &&
    normalizedPath !== "/admin" &&
    normalizedPath !== "/admin/login"
  ) {
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    try {
      const { payload } = await jwtVerify(token, JWT_SECRET);

      if (payload.role !== "ADMIN" && payload.role !== "SUPER_ADMIN") {
        return NextResponse.redirect(new URL("/admin/login", request.url));
      }

      return NextResponse.next();
    } catch {
      const response = NextResponse.redirect(
        new URL("/admin/login", request.url),
      );
      response.cookies.delete("authToken");
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
