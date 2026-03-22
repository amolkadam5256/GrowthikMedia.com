import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Growthik Media: Technical SEO Middleware
 * 1. Handles 410 Gone for deactivated services
 * 2. Processes remaining legacy redirects
 * 3. Strips query params for AI/Search bots to prevent duplicate content
 * 4. Logs broken link hits for technical audit
 */

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl
  const userAgent = request.headers.get('user-agent') || ''
  
  // Define bot patterns
  const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(userAgent)

  // 1. Deliverable 3: 410 Gone Handling
  if (pathname.startsWith('/services/video-production')) {
    console.warn(`[SEO-AUDIT] 410 Gone hit: ${pathname}`)
    return new NextResponse(null, { status: 410 })
  }

  // 2. Query Param Stripping for Bots (Canonical Preservation)
  // If a bot hits /blog/?category=seo, redirect them to /blog/
  if (isBot && pathname === '/blog/' && searchParams.toString().length > 0) {
    const url = request.nextUrl.clone()
    url.search = ''
    return NextResponse.redirect(url, 301)
  }

  // 3. Legacy Redirects (Fallback)
  const legacyMappings: Record<string, string> = {
    '/seo-services-pune': '/services/seo/',
    '/google-ads-pune': '/services/ppc-google-ads/',
    '/website-development-pune': '/services/website-development/',
  }

  if (legacyMappings[pathname]) {
    return NextResponse.redirect(new URL(legacyMappings[pathname], request.url), 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/services/video-production/:path*',
    '/blog/',
    '/seo-services-pune',
    '/google-ads-pune',
    '/website-development-pune',
  ],
}
