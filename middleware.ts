import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key-change-in-production"
);

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get("authToken")?.value;

  // Admin route protection
  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    try {
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || "your-secret-key-change-in-production"
      );
      const verified = await jwtVerify(token, secret);
      const user = verified.payload as any;

      // Check if user is admin
      if (user.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/", request.url));
      }

      // Continue with request
      const response = NextResponse.next();
      response.headers.set("x-user-id", user.id);
      response.headers.set("x-user-role", user.role);
      return response;
    } catch (error) {
      // Invalid token
      const response = NextResponse.redirect(new URL("/auth/login", request.url));
      response.cookies.delete("authToken");
      return response;
    }
  }

  // Auth route - redirect if already logged in
  if (pathname.startsWith("/auth") && token) {
    try {
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || "your-secret-key-change-in-production"
      );
      await jwtVerify(token, secret);
      return NextResponse.redirect(new URL("/admin", request.url));
    } catch (error) {
      // Token invalid, allow access to login
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};
