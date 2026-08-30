# SEO Fix Plan

## Phase 1 - Critical Indexability/Crawl Problems

1. Resolve /services/video-production conflict: either remove the public page and sitemap references or remove the proxy 410 if the service should be live.
2. Generate sitemap from discovered public route/content sources so every canonical indexable service, blog, portfolio, and location URL is included.
3. Verify robots.txt after build and ensure public pages/assets remain crawlable.

## Phase 2 - Technical SEO

1. Browser-test rendered canonical tags, status codes, trailing slash redirects, and duplicate URL behavior.
2. Add route validation for sitemap URLs against built routes.
3. Tighten remote image patterns instead of allowing every HTTPS hostname.

## Phase 3 - Metadata/H1/Content

1. Review all P1/P2 metadata issues from audit-reports/seo-audit.json.
2. Ensure every rendered page has one descriptive H1.
3. Shorten overly long titles and improve thin descriptions.

## Phase 4 - Internal Linking + Semantic Architecture

1. Add contextual links from blog posts to matching service pages.
2. Add related-service modules across service pages.
3. Link location pages to parent service pages and nearby locations.

## Phase 5 - Structured Data

1. Standardize Organization, LocalBusiness, WebSite, BreadcrumbList, Service, FAQPage, and BlogPosting schema.
2. Remove placeholder legal/map values from schema unless verified.
3. Use stable @id relationships between organization, pages, services, and breadcrumbs.

## Phase 6 - GEO/AEO

1. Add concise answer blocks to priority service pages.
2. Add "what is included", "who it is for", "process", "pricing guidance", and "limitations" where supported by current content.
3. Keep public llms files generated from source content.

## Phase 7 - Performance

1. Measure real Lighthouse/PageSpeed scores for homepage and top service pages.
2. Audit framer-motion/client components for INP/TBT impact.
3. Confirm hero images have priority, dimensions, and responsive sizes.

## Phase 8 - Content Expansion

1. Differentiate near-duplicate location pages with local proof and unique FAQs.
2. Build support clusters around SEO, website development, Google Ads, Meta Ads, Local SEO, and branding.
3. Add verifiable case studies beyond demo data.
