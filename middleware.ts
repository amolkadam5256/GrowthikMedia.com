import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key-change-in-production"
);

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get("authToken")?.value;

  // Define public paths that should NEVER redirect
  const isPublicAdminPath =
    pathname === "/admin" || pathname.startsWith("/admin/login");

  // Only run logic for /admin paths
  if (pathname.startsWith("/admin")) {
    // If it's a public path, just allow it
    if (isPublicAdminPath) {
      return NextResponse.next();
    }

    // For all other admin paths (protected), check token
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    try {
      const verified = await jwtVerify(token, JWT_SECRET);
      const user = verified.payload as any;

      if (user.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/admin/login", request.url));
      }

      const response = NextResponse.next();
      response.headers.set("x-user-id", user.id);
      response.headers.set("x-user-role", user.role);
      return response;
    } catch (error) {
      const response = NextResponse.redirect(
        new URL("/admin/login", request.url)
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
