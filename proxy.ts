import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Growthik Media: Technical SEO proxy
 * 1. Processes remaining legacy redirects
 * 2. Strips query params for AI/Search bots to prevent duplicate content
 * 3. Logs broken link hits for technical audit
 */
export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const userAgent = request.headers.get("user-agent") || "";
  const pathnameWithoutTrailingSlash =
    pathname !== "/" ? pathname.replace(/\/+$/, "") : pathname;

  const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(userAgent);

  if (isBot && pathname.startsWith("/blog") && searchParams.toString().length > 0) {
    const url = request.nextUrl.clone();
    url.search = "";
    if (url.pathname === "/blog") {
      url.pathname = "/blog/";
    }
    return NextResponse.redirect(url, 301);
  }

  const legacyMappings: Record<string, string> = {
    "/website-development-pune": "/services/website-development/",
    "/website-redesign-local": "/services/website-design-company-pune/",
    "/services/services/website-design-company-pune": "/services/website-design-company-pune/",
    "/services/services/seo": "/services/seo/",
    "/services/backlink-strategy": "/backlink-strategy/",
    "/services/development": "/services/website-development/",
    "/portfolio/awards": "/success-stories/awards/",
  };

  if (legacyMappings[pathnameWithoutTrailingSlash]) {
    return NextResponse.redirect(
      new URL(legacyMappings[pathnameWithoutTrailingSlash], request.url),
      301,
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
