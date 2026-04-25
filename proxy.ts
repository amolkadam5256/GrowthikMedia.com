import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Growthik Media: Technical SEO proxy
 * 1. Handles 410 Gone for deactivated services
 * 2. Processes remaining legacy redirects
 * 3. Strips query params for AI/Search bots to prevent duplicate content
 * 4. Logs broken link hits for technical audit
 */
export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const userAgent = request.headers.get("user-agent") || "";
  const pathnameWithoutTrailingSlash =
    pathname !== "/" ? pathname.replace(/\/+$/, "") : pathname;

  const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(userAgent);

  const stripRouteGroups = pathname.replace(/\/\([^/]+\)/g, "");
  if (stripRouteGroups !== pathname) {
    const url = request.nextUrl.clone();
    url.pathname = stripRouteGroups;
    return NextResponse.redirect(url, 301);
  }

  if (pathname.startsWith("/services/video-production")) {
    console.warn(`[SEO-AUDIT] 410 Gone hit: ${pathname}`);
    return new NextResponse(null, { status: 410 });
  }

  if (isBot && pathname.startsWith("/blog") && searchParams.toString().length > 0) {
    const url = request.nextUrl.clone();
    url.search = "";
    if (url.pathname === "/blog") {
      url.pathname = "/blog/";
    }
    return NextResponse.redirect(url, 301);
  }

  const legacyMappings: Record<string, string> = {
    "/seo-services-pune": "/services/seo/",
    "/google-ads-pune": "/services/ppc-google-ads/",
    "/website-development-pune": "/services/website-development/",
    "/seo-company-in-hinjewadi": "/services/seo/",
    "/website-redesign-local": "/services/website-design-company-pune/",
    "/services/services/website-design-company-pune": "/services/website-design-company-pune/",
    "/services/services/seo": "/services/seo/",
    "/services/backlink-strategy": "/backlink-strategy/",
    "/services/development": "/services/website-development/",
    "/portfolio/awards": "/success-stories/awards/",
    "/portfolio/client-stories": "/success-stories/",
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
  matcher: [
    "/services/:path*",
    "/portfolio/:path*",
    "/blog/:path*",
    "/seo-services-pune",
    "/google-ads-pune",
    "/website-development-pune",
    "/seo-company-in-hinjewadi",
    "/website-redesign-local",
  ],
};
