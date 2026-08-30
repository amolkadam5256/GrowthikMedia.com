# Complete SEO + GEO + AEO Audit Report

Generated locally on 2026-08-30. No deployment, push, or commit was performed by this audit script.

## Executive Summary

GrowthikMedia.com is a Next.js App Router site with a large service footprint, blog content, local landing pages, portfolio pages, legal/trust pages, structured data usage, generated sitemap/robots, and public LLM knowledge files. The site has strong topical breadth for Pune digital marketing, SEO, paid media, web development, branding, local SEO, and AI/GEO content.

The highest-impact risks found locally are:

- P0: /services/video-production exists as a public page but the proxy returns 410 Gone for the same route.
- P1: sitemap.ts omits many discovered service and local dynamic URLs.
- P1: several generated/location/blog pages appear weakly linked or potentially orphaned by source href scan.
- P1/P2: many pages rely on imported components for key visible content, making source-only heading extraction incomplete.
- P2: programmatic local pages should be reviewed for near-duplicate content and differentiated local proof.
- P2: not every important service page exposes page-specific schema in a consistent, entity-linked way.

## Project Architecture

- Framework: Next.js App Router.
- Next version: package uses ^16.0.7; build output in prior validation reported 16.2.4.
- Routing: app directory with route groups under app/(public), static service pages, dynamic blog, dynamic portfolio, dynamic location pages, API routes, admin routes, and chat routes.
- SEO files: app/sitemap.ts, app/robots.ts, next.config.ts redirects, proxy.ts, public/llms.txt, public/llms-full.txt.
- Content sources: page.tsx files, constants/contact.ts, constants/faqData.ts, constants/locationData.ts, lib/blog/data.ts, lib/blog/content.tsx, lib/data/portfolio.ts, navigation/footer components.

## Complete URL Inventory

Total discovered/audited public URLs: 100

- / | 200 expected/build generated | mixed | (public)/page.tsx
- /about | 200 expected/build generated | mixed | (public)/about/page.tsx
- /audit | 200 expected/build generated | mixed | (public)/audit/page.tsx
- /backlink-strategy | 200 expected/build generated | mixed | (public)/backlink-strategy/page.tsx
- /blog | 200 expected/build generated | mixed | (public)/blog/page.tsx
- /blog/b2b-content-marketing-india | 200 expected/build generated | informational | lib/blog/data.ts
- /blog/cockroach-janta-party-viral-marketing-case-study-2026 | 200 expected/build generated | informational | lib/blog/data.ts
- /blog/complete-beginner-guide-to-seo-2026 | 200 expected/build generated | informational | lib/blog/data.ts
- /blog/core-web-vitals-guide | 200 expected/build generated | informational | lib/blog/data.ts
- /blog/fix-high-bounce-rate | 200 expected/build generated | informational | lib/blog/data.ts
- /blog/google-ads-vs-meta-ads | 200 expected/build generated | informational | lib/blog/data.ts
- /blog/how-to-choose-website-design-company | 200 expected/build generated | informational | lib/blog/data.ts
- /blog/local-seo-pune | 200 expected/build generated | informational | lib/blog/data.ts
- /blog/raja-shivaji-marathi-movie-bookings-pune-marketing-trend | 200 expected/build generated | informational | lib/blog/data.ts
- /blog/rcb-vs-gt-ipl-2026-marketing-lessons-pune | 200 expected/build generated | informational | lib/blog/data.ts
- /blog/search-engine-submission-guide-pune | 200 expected/build generated | informational | lib/blog/data.ts
- /blog/seo-for-real-estate-pune-guide | 200 expected/build generated | informational | lib/blog/data.ts
- /blog/technical-seo-audit-checklist | 200 expected/build generated | informational | lib/blog/data.ts
- /blog/website-cost-in-pune | 200 expected/build generated | informational | lib/blog/data.ts
- /blog/what-is-marketing-guide-pune | 200 expected/build generated | informational | lib/blog/data.ts
- /blog/why-seo-is-important | 200 expected/build generated | informational | lib/blog/data.ts
- /contact | 200 expected/build generated | mixed | (public)/contact/page.tsx
- /portfolio | 200 expected/build generated | mixed | (public)/portfolio/page.tsx
- /portfolio/ads-performance | 200 expected/build generated | mixed | (public)/portfolio/ads-performance/page.tsx
- /portfolio/branding-work | 200 expected/build generated | mixed | (public)/portfolio/branding-work/page.tsx
- /portfolio/case-studies | 200 expected/build generated | mixed | (public)/portfolio/case-studies/page.tsx
- /portfolio/demo-project | 200 expected/build generated | mixed | lib/data/portfolio.ts
- /portfolio/digital-campaigns | 200 expected/build generated | mixed | (public)/portfolio/digital-campaigns/page.tsx
- /portfolio/social-media-creatives | 200 expected/build generated | mixed | (public)/portfolio/social-media-creatives/page.tsx
- /portfolio/website-projects | 200 expected/build generated | mixed | (public)/portfolio/website-projects/page.tsx
- /privacy-policy | 200 expected/build generated | trust/legal | (public)/privacy-policy/page.tsx
- /refund-policy | 200 expected/build generated | trust/legal | (public)/refund-policy/page.tsx
- /seo-company-hinjewadi | 200 expected/build generated | mixed | constants/locationData.ts
- /services | 200 expected/build generated | mixed | (public)/services/page.tsx
- /services/application-maintenance | 200 expected/build generated | commercial/local | (public)/services/(technology-services)/application-maintenance/page.tsx
- /services/brand-identity | 200 expected/build generated | commercial/local | (public)/services/(branding-creative)/brand-identity/page.tsx
- /services/brand-marketing-communications | 200 expected/build generated | commercial/local | (public)/services/(branding-creative)/brand-marketing-communications/page.tsx
- /services/brand-name | 200 expected/build generated | commercial/local | (public)/services/(branding-creative)/brand-name/page.tsx
- /services/brand-strategy | 200 expected/build generated | commercial/local | (public)/services/(branding-creative)/brand-strategy/page.tsx
- /services/branding-consulting | 200 expected/build generated | commercial/local | (public)/services/(branding-creative)/branding-consulting/page.tsx
- /services/branding-design | 200 expected/build generated | commercial/local | (public)/services/(branding-creative)/branding-design/page.tsx
- /services/brochure-design | 200 expected/build generated | commercial/local | (public)/services/(branding-creative)/brochure-design/page.tsx
- /services/business-card-design | 200 expected/build generated | commercial/local | (public)/services/(branding-creative)/business-card-design/page.tsx
- /services/content-marketing | 200 expected/build generated | commercial/local | (public)/services/(digital-marketing)/content-marketing/page.tsx
- /services/digital-marketing | 200 expected/build generated | commercial/local | (public)/services/(digital-marketing)/digital-marketing/page.tsx
- /services/ecommerce-development | 200 expected/build generated | commercial/local | (public)/services/(technology-services)/ecommerce-development/page.tsx
- /services/ecommerce-website-development | 200 expected/build generated | commercial/local | (public)/services/(technology-services)/ecommerce-website-development/page.tsx
- /services/educational-website-development | 200 expected/build generated | commercial/local | (public)/services/(technology-services)/educational-website-development/page.tsx
- /services/email-marketing | 200 expected/build generated | commercial/local | (public)/services/(digital-marketing)/email-marketing/page.tsx
- /services/influencer-management | 200 expected/build generated | commercial/local | (public)/services/(digital-marketing)/influencer-management/page.tsx
- /services/lead-generation | 200 expected/build generated | commercial/local | (public)/services/(digital-marketing)/lead-generation/page.tsx
- /services/letterhead-design | 200 expected/build generated | commercial/local | (public)/services/(branding-creative)/letterhead-design/page.tsx
- /services/local-seo | 200 expected/build generated | commercial/local | (public)/services/(digital-marketing)/local-seo/page.tsx
- /services/logo-design | 200 expected/build generated | commercial/local | (public)/services/(branding-creative)/logo-design/page.tsx
- /services/media-planning-buying | 200 expected/build generated | commercial/local | (public)/services/(digital-marketing)/media-planning-buying/page.tsx
- /services/meta-ads | 200 expected/build generated | commercial/local | (public)/services/(digital-marketing)/meta-ads/page.tsx
- /services/mobile-app-development | 200 expected/build generated | commercial/local | (public)/services/(technology-services)/mobile-app-development/page.tsx
- /services/performance-marketing | 200 expected/build generated | commercial/local | (public)/services/(digital-marketing)/performance-marketing/page.tsx
- /services/political-digital-marketing | 200 expected/build generated | commercial/local | (public)/services/(digital-marketing)/political-digital-marketing/page.tsx
- /services/ppc-google-ads | 200 expected/build generated | commercial/local | (public)/services/(digital-marketing)/ppc-google-ads/page.tsx
- /services/real-estate-website-development | 200 expected/build generated | commercial/local | (public)/services/(technology-services)/real-estate-website-development/page.tsx
- /services/seo | 200 expected/build generated | commercial/local | (public)/services/(digital-marketing)/seo/page.tsx
- /services/seo-company-hinjewadi | 200 expected/build generated | commercial/local | constants/locationData.ts
- /services/sms-marketing | 200 expected/build generated | commercial/local | (public)/services/(digital-marketing)/sms-marketing/page.tsx
- /services/social-media-marketing | 200 expected/build generated | commercial/local | (public)/services/(digital-marketing)/social-media-marketing/page.tsx
- /services/social-media-promotions | 200 expected/build generated | commercial/local | (public)/services/(digital-marketing)/social-media-promotions/page.tsx
- /services/software-development | 200 expected/build generated | commercial/local | (public)/services/(technology-services)/software-development/page.tsx
- /services/video-production | 200 expected/build generated | commercial/local | (public)/services/(branding-creative)/video-production/page.tsx
- /services/web-application | 200 expected/build generated | commercial/local | (public)/services/(technology-services)/web-application/page.tsx
- /services/website-design | 200 expected/build generated | commercial/local | (public)/services/(technology-services)/website-design/page.tsx
- /services/website-design-company-aundh | 200 expected/build generated | commercial/local | constants/locationData.ts
- /services/website-design-company-baner | 200 expected/build generated | commercial/local | constants/locationData.ts
- /services/website-design-company-hadapsar | 200 expected/build generated | commercial/local | constants/locationData.ts
- /services/website-design-company-kothrud | 200 expected/build generated | commercial/local | constants/locationData.ts
- /services/website-design-company-pcmc | 200 expected/build generated | commercial/local | constants/locationData.ts
- /services/website-design-company-pune | 200 expected/build generated | commercial/local | (public)/services/(technology-services)/website-design-company-pune/page.tsx
- /services/website-design-company-viman-nagar | 200 expected/build generated | commercial/local | constants/locationData.ts
- /services/website-design-company-wakad | 200 expected/build generated | commercial/local | constants/locationData.ts
- /services/website-development | 200 expected/build generated | commercial/local | (public)/services/(technology-services)/website-development/page.tsx
- /services/website-development/full-stack | 200 expected/build generated | commercial/local | (public)/services/(technology-services)/website-development/full-stack/page.tsx
- /services/website-development/nextjs | 200 expected/build generated | commercial/local | (public)/services/(technology-services)/website-development/nextjs/page.tsx
- /services/website-development/react | 200 expected/build generated | commercial/local | (public)/services/(technology-services)/website-development/react/page.tsx
- /services/website-maintenance | 200 expected/build generated | commercial/local | (public)/services/(technology-services)/website-maintenance/page.tsx
- /services/whatsapp-marketing | 200 expected/build generated | commercial/local | (public)/services/(digital-marketing)/whatsapp-marketing/page.tsx
- /services/wordpress-development | 200 expected/build generated | commercial/local | (public)/services/(technology-services)/wordpress-development/page.tsx
- /services/youtube-seo | 200 expected/build generated | commercial/local | (public)/services/(digital-marketing)/youtube-seo/page.tsx
- /shipping-policy | 200 expected/build generated | trust/legal | (public)/shipping-policy/page.tsx
- /success-stories | 200 expected/build generated | mixed | success-stories/page.tsx
- /success-stories/awards | 200 expected/build generated | mixed | success-stories/awards/page.tsx
- /success-stories/media | 200 expected/build generated | mixed | success-stories/media/page.tsx
- /success-stories/testimonials | 200 expected/build generated | mixed | success-stories/testimonials/page.tsx
- /terms | 200 expected/build generated | mixed | (public)/terms/page.tsx
- /website-design-company-aundh | 200 expected/build generated | mixed | constants/locationData.ts
- /website-design-company-baner | 200 expected/build generated | mixed | constants/locationData.ts
- /website-design-company-hadapsar | 200 expected/build generated | mixed | constants/locationData.ts
- /website-design-company-kothrud | 200 expected/build generated | mixed | constants/locationData.ts
- /website-design-company-pcmc | 200 expected/build generated | mixed | constants/locationData.ts
- /website-design-company-pune | 200 expected/build generated | mixed | constants/locationData.ts
- /website-design-company-viman-nagar | 200 expected/build generated | mixed | constants/locationData.ts
- /website-design-company-wakad | 200 expected/build generated | mixed | constants/locationData.ts

## Indexability Matrix

- /: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/
- /about: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/about/
- /audit: 200 expected/build generated; indexable=true; canonical=${CONTACT_INFO.website}/audit/
- /backlink-strategy: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/backlink-strategy/
- /blog: 200 expected/build generated; indexable=true; canonical=/blog/
- /blog/b2b-content-marketing-india: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/blog/b2b-content-marketing-india/
- /blog/cockroach-janta-party-viral-marketing-case-study-2026: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/blog/cockroach-janta-party-viral-marketing-case-study-2026/
- /blog/complete-beginner-guide-to-seo-2026: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/blog/complete-beginner-guide-to-seo-2026/
- /blog/core-web-vitals-guide: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/blog/core-web-vitals-guide/
- /blog/fix-high-bounce-rate: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/blog/fix-high-bounce-rate/
- /blog/google-ads-vs-meta-ads: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/blog/google-ads-vs-meta-ads/
- /blog/how-to-choose-website-design-company: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/blog/how-to-choose-website-design-company/
- /blog/local-seo-pune: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/blog/local-seo-pune/
- /blog/raja-shivaji-marathi-movie-bookings-pune-marketing-trend: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/blog/raja-shivaji-marathi-movie-bookings-pune-marketing-trend/
- /blog/rcb-vs-gt-ipl-2026-marketing-lessons-pune: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/blog/rcb-vs-gt-ipl-2026-marketing-lessons-pune/
- /blog/search-engine-submission-guide-pune: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/blog/search-engine-submission-guide-pune/
- /blog/seo-for-real-estate-pune-guide: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/blog/seo-for-real-estate-pune-guide/
- /blog/technical-seo-audit-checklist: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/blog/technical-seo-audit-checklist/
- /blog/website-cost-in-pune: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/blog/website-cost-in-pune/
- /blog/what-is-marketing-guide-pune: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/blog/what-is-marketing-guide-pune/
- /blog/why-seo-is-important: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/blog/why-seo-is-important/
- /contact: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/contact/
- /portfolio: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/portfolio/
- /portfolio/ads-performance: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/portfolio/ads-performance/
- /portfolio/branding-work: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/portfolio/branding-work/
- /portfolio/case-studies: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/portfolio/case-studies/
- /portfolio/demo-project: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/portfolio/demo-project/
- /portfolio/digital-campaigns: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/portfolio/digital-campaigns/
- /portfolio/social-media-creatives: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/portfolio/social-media-creatives/
- /portfolio/website-projects: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/portfolio/website-projects/
- /privacy-policy: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/privacy-policy/
- /refund-policy: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/refund-policy/
- /seo-company-hinjewadi: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/seo-company-hinjewadi/
- /services: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/
- /services/application-maintenance: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/application-maintenance/
- /services/brand-identity: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/brand-marketing-communications: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/brand-name: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/brand-strategy: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/branding-consulting: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/branding-design: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/brochure-design: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/business-card-design: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/business-card-design/
- /services/content-marketing: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/digital-marketing: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/ecommerce-development: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/ecommerce-website-development: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/educational-website-development: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/educational-website-development/
- /services/email-marketing: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/email-marketing/
- /services/influencer-management: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/influencer-management/
- /services/lead-generation: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/letterhead-design: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/letterhead-design/
- /services/local-seo: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/logo-design: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/media-planning-buying: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/media-planning-buying/
- /services/meta-ads: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/mobile-app-development: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/performance-marketing: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/performance-marketing/
- /services/political-digital-marketing: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/political-digital-marketing/
- /services/ppc-google-ads: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/real-estate-website-development: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/real-estate-website-development/
- /services/seo: 200 expected/build generated; indexable=true; canonical=/services/seo/
- /services/seo-company-hinjewadi: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/seo-company-hinjewadi/
- /services/sms-marketing: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/sms-marketing/
- /services/social-media-marketing: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/social-media-promotions: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/social-media-promotions/
- /services/software-development: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/video-production: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/web-application: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/web-application/
- /services/website-design: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/website-design-company-aundh: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/website-design-company-aundh/
- /services/website-design-company-baner: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/website-design-company-baner/
- /services/website-design-company-hadapsar: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/website-design-company-hadapsar/
- /services/website-design-company-kothrud: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/website-design-company-kothrud/
- /services/website-design-company-pcmc: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/website-design-company-pcmc/
- /services/website-design-company-pune: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/website-design-company-pune/
- /services/website-design-company-viman-nagar: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/website-design-company-viman-nagar/
- /services/website-design-company-wakad: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/website-design-company-wakad/
- /services/website-development: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/website-development/full-stack: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/website-development/full-stack/
- /services/website-development/nextjs: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/website-development/nextjs/
- /services/website-development/react: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/website-development/react/
- /services/website-maintenance: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/website-maintenance/
- /services/whatsapp-marketing: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/whatsapp-marketing/
- /services/wordpress-development: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/${slug}/
- /services/youtube-seo: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/services/youtube-seo/
- /shipping-policy: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/shipping-policy/
- /success-stories: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/success-stories/
- /success-stories/awards: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/success-stories/awards/
- /success-stories/media: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/success-stories/media/
- /success-stories/testimonials: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/success-stories/testimonials/
- /terms: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/terms/
- /website-design-company-aundh: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/website-design-company-aundh/
- /website-design-company-baner: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/website-design-company-baner/
- /website-design-company-hadapsar: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/website-design-company-hadapsar/
- /website-design-company-kothrud: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/website-design-company-kothrud/
- /website-design-company-pcmc: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/website-design-company-pcmc/
- /website-design-company-pune: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/website-design-company-pune/
- /website-design-company-viman-nagar: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/website-design-company-viman-nagar/
- /website-design-company-wakad: 200 expected/build generated; indexable=true; canonical=https://www.growthikmedia.com/website-design-company-wakad/

## Metadata Audit

- Metadata issues: 38
- Duplicate/thin metadata patterns are concentrated in template-generated pages and pages whose metadata is assembled from reusable variables.
- Long titles should be tightened where over 65 characters while preserving local/service intent.

## H1-H6 Audit

- Pages using imported hero components may not expose literal H1s inside page.tsx, so rendered-browser validation should be used before changing headings.
- Source scan found pages with no literal H1 in route files; these are flagged in seo-audit.json.
- Recommendation: maintain one clear H1 per rendered page and use H2/H3 for service details, FAQs, process, benefits, and local relevance.

## Content Audit

- Strong coverage exists for SEO, local SEO, Google Ads, Meta Ads, social media, content, web development, WordPress, eCommerce, software, mobile apps, branding, and Pune locations.
- Risks: location pages and generic service templates can become near-duplicate if not enriched with local proof, examples, FAQs, unique intro copy, and internal links.
- Blog content supports SEO/local/digital marketing topics well, but should link more consistently to matching commercial service pages.

## Semantic SEO And Entity Audit

Core entities found: Growthik Media, Pune, Warje, SEO, Local SEO, Google Ads, Meta Ads, Next.js, React, WordPress, web development, branding, content marketing, WhatsApp, YouTube, AEO/GEO.

Entity consistency risks:
- Contact constants include public social links, GST/CIN placeholders, and map iframe placeholder. Avoid surfacing placeholder legal/map values in public schema unless verified.
- Some claims in product marketing context are stronger than visible proof and should not be used as public SEO copy without evidence.

## Internal Linking Audit

- Internal link issues: 86
- Header/footer link many core pages, but source scan indicates several generated/dynamic URLs depend on sitemap/static params rather than contextual in-body links.
- High-priority matrix:
  - Homepage -> services, SEO, Google Ads, web development, portfolio, contact.
  - Service pages -> related services, matching FAQs, blog support content, contact/audit.
  - Blog posts -> one primary service CTA and 2-3 related educational posts.
  - Local pages -> parent service page, nearby location pages, contact/audit.

## Canonical Audit

- Canonical issues found locally: 2
- next.config.ts uses trailingSlash: true; canonical URLs should consistently include trailing slash.
- Watch template literal canonicals in source extraction; browser-rendered metadata should be spot-checked.

## Sitemap Audit

- app/sitemap.ts includes homepage, core pages, selected services, and blog posts.
- It does not include all 44 discovered service pages or the location dynamic URLs.
- This is a high-impact crawl/discovery gap.

## Robots Audit

- app/robots.ts allows all user agents globally and disallows admin/login/api/dashboard/profile.
- Googlebot disallows admin/api only.
- Important public assets are not blocked.
- AI crawler-specific rules are not present; no explicit AI bot blocking found.

## Structured Data Audit

- Structured data appears in lib/seo/schema.ts, structured-data components, and many service pages.
- Risks: inconsistent Service schema depth, missing/weak @id relationships on some page-level schema, placeholder legal/map fields in constants, and video-production schema on a route that proxy marks 410.

## GEO + AEO + LLM Discoverability

- public/llms.txt and public/llms-full.txt exist.
- The chatbot knowledge system is now present under lib/ai/knowledge and covers public pages.
- GEO strengths: clear service/entity vocabulary, FAQs, local pages, contact data, blog guides.
- GEO gaps: stronger concise answer blocks, visible author credentials, citations/stat sources, and proof tied to claims.
- AEO gaps: add answer-ready "What is included", "Who is this for", "How much", "Process", and "Limitations" blocks to priority service pages.

## Image SEO

- next/image optimization is enabled with AVIF/WebP.
- Remote images are allowed broadly with hostname "**"; this is flexible but weak governance.
- Audit flags pages where image tags lack obvious alt/dimensions in source. Rendered inspection should confirm imported component images.

## Accessibility + Semantic HTML

- The app uses semantic layout components, navigation, footer, forms, and skip/focus-related components.
- Risks: imported/client components need rendered checks for H1 uniqueness, keyboard focus, button labels, form labels, and contrast.

## Performance / Core Web Vitals

No live CWV measurement was performed by this script. Implementation-level risks:
- Many client-side interactive components and framer-motion can affect INP/TBT.
- Large hero/media assets can affect LCP.
- Broad remote image allowlist can allow oversized images.
- Fonts and animation libraries should be monitored.
- Build previously completed successfully, indicating static generation is healthy for many routes.

## Mobile And JavaScript SEO

- App Router static generation supports crawlability for most public pages.
- Important content in client-only widgets, accordions, or imported components should be browser-rendered checked.
- Mobile navigation contains major services, but desktop/mobile parity should be reviewed when adding new pages.

## Local SEO

- Strong Pune/local targeting across Warje, Baner, Aundh, Hinjewadi, Wakad, Kothrud, Hadapsar, PCMC, and Viman Nagar.
- NAP source exists in constants/contact.ts.
- Risk: map iframe and GST/CIN placeholders should be verified or removed from public structured data.

## E-E-A-T / Trust

- About, contact, policies, portfolio, testimonials, awards/media pages support trust.
- Portfolio source contains a demo project; avoid presenting it as client proof unless clearly labeled.
- Add visible author bios and proof/citations on strategic guides.

## Cannibalization And Duplicate/Thin Content

- Potential cannibalization: /services/website-design and /services/website-design-company-pune; root location pages and /services/[seoStrategy] variants; /services/ecommerce-development and /services/ecommerce-website-development.
- Duplicate issues flagged: 66
- Thin/template issues flagged: 36

## Priority Issues

- P1 | / | No literal H1 found in page source; may be inside imported component |  | (public)/page.tsx
- P1 | /about | No literal H1 found in page source; may be inside imported component |  | (public)/about/page.tsx
- P1 | /audit | Potential orphan page based on source href scan |  | (public)/audit/page.tsx
- P1 | /backlink-strategy | Potential orphan page based on source href scan |  | (public)/backlink-strategy/page.tsx
- P1 | /blog | No literal H1 found in page source; may be inside imported component |  | (public)/blog/page.tsx
- P1 | /blog | Canonical host mismatch | /blog/ | (public)/blog/page.tsx
- P1 | /blog/b2b-content-marketing-india | Potential orphan page based on source href scan |  | lib/blog/data.ts
- P1 | /blog/cockroach-janta-party-viral-marketing-case-study-2026 | Potential orphan page based on source href scan |  | lib/blog/data.ts
- P1 | /blog/complete-beginner-guide-to-seo-2026 | Potential orphan page based on source href scan |  | lib/blog/data.ts
- P1 | /blog/core-web-vitals-guide | Potential orphan page based on source href scan |  | lib/blog/data.ts
- P1 | /blog/fix-high-bounce-rate | Potential orphan page based on source href scan |  | lib/blog/data.ts
- P1 | /blog/google-ads-vs-meta-ads | Potential orphan page based on source href scan |  | lib/blog/data.ts
- P1 | /blog/how-to-choose-website-design-company | Potential orphan page based on source href scan |  | lib/blog/data.ts
- P1 | /blog/local-seo-pune | Potential orphan page based on source href scan |  | lib/blog/data.ts
- P1 | /blog/raja-shivaji-marathi-movie-bookings-pune-marketing-trend | Potential orphan page based on source href scan |  | lib/blog/data.ts
- P1 | /blog/rcb-vs-gt-ipl-2026-marketing-lessons-pune | Potential orphan page based on source href scan |  | lib/blog/data.ts
- P1 | /blog/search-engine-submission-guide-pune | Potential orphan page based on source href scan |  | lib/blog/data.ts
- P1 | /blog/seo-for-real-estate-pune-guide | Potential orphan page based on source href scan |  | lib/blog/data.ts
- P1 | /blog/technical-seo-audit-checklist | Potential orphan page based on source href scan |  | lib/blog/data.ts
- P1 | /blog/website-cost-in-pune | Potential orphan page based on source href scan |  | lib/blog/data.ts
- P1 | /blog/what-is-marketing-guide-pune | Potential orphan page based on source href scan |  | lib/blog/data.ts
- P1 | /blog/why-seo-is-important | Potential orphan page based on source href scan |  | lib/blog/data.ts
- P1 | /contact | No literal H1 found in page source; may be inside imported component |  | (public)/contact/page.tsx
- P1 | /portfolio/ads-performance | No literal H1 found in page source; may be inside imported component |  | (public)/portfolio/ads-performance/page.tsx
- P1 | /portfolio/branding-work | No literal H1 found in page source; may be inside imported component |  | (public)/portfolio/branding-work/page.tsx
- P1 | /portfolio/case-studies | No literal H1 found in page source; may be inside imported component |  | (public)/portfolio/case-studies/page.tsx
- P1 | /portfolio/demo-project | Potential orphan page based on source href scan |  | lib/data/portfolio.ts
- P1 | /portfolio/digital-campaigns | No literal H1 found in page source; may be inside imported component |  | (public)/portfolio/digital-campaigns/page.tsx
- P1 | /portfolio/social-media-creatives | No literal H1 found in page source; may be inside imported component |  | (public)/portfolio/social-media-creatives/page.tsx
- P1 | /portfolio/website-projects | No literal H1 found in page source; may be inside imported component |  | (public)/portfolio/website-projects/page.tsx
- P1 | /refund-policy | Potential orphan page based on source href scan |  | (public)/refund-policy/page.tsx
- P1 | /seo-company-hinjewadi | Potential orphan page based on source href scan |  | constants/locationData.ts
- P1 | /services/digital-marketing | Potential orphan page based on source href scan |  | (public)/services/(digital-marketing)/digital-marketing/page.tsx
- P1 | /services/ecommerce-website-development | Potential orphan page based on source href scan |  | (public)/services/(technology-services)/ecommerce-website-development/page.tsx
- P1 | /services/educational-website-development | Potential orphan page based on source href scan |  | (public)/services/(technology-services)/educational-website-development/page.tsx
- P1 | /services/mobile-app-development | Potential orphan page based on source href scan |  | (public)/services/(technology-services)/mobile-app-development/page.tsx
- P1 | /services/real-estate-website-development | Potential orphan page based on source href scan |  | (public)/services/(technology-services)/real-estate-website-development/page.tsx
- P1 | /services/seo | Canonical host mismatch | /services/seo/ | (public)/services/(digital-marketing)/seo/page.tsx
- P1 | /services/seo-company-hinjewadi | Service URL appears missing from app sitemap staticRoutes |  | constants/locationData.ts
- P1 | /services/seo-company-hinjewadi | Potential orphan page based on source href scan |  | constants/locationData.ts
- P1 | /services/video-production | Potential orphan page based on source href scan |  | (public)/services/(branding-creative)/video-production/page.tsx
- P1 | /services/website-design | Potential orphan page based on source href scan |  | (public)/services/(technology-services)/website-design/page.tsx
- P1 | /services/website-design-company-aundh | Service URL appears missing from app sitemap staticRoutes |  | constants/locationData.ts
- P1 | /services/website-design-company-aundh | Potential orphan page based on source href scan |  | constants/locationData.ts
- P1 | /services/website-design-company-baner | Service URL appears missing from app sitemap staticRoutes |  | constants/locationData.ts
- P1 | /services/website-design-company-baner | Potential orphan page based on source href scan |  | constants/locationData.ts
- P1 | /services/website-design-company-hadapsar | Service URL appears missing from app sitemap staticRoutes |  | constants/locationData.ts
- P1 | /services/website-design-company-hadapsar | Potential orphan page based on source href scan |  | constants/locationData.ts
- P1 | /services/website-design-company-kothrud | Service URL appears missing from app sitemap staticRoutes |  | constants/locationData.ts
- P1 | /services/website-design-company-kothrud | Potential orphan page based on source href scan |  | constants/locationData.ts
- P1 | /services/website-design-company-pcmc | Service URL appears missing from app sitemap staticRoutes |  | constants/locationData.ts
- P1 | /services/website-design-company-pcmc | Potential orphan page based on source href scan |  | constants/locationData.ts
- P1 | /services/website-design-company-viman-nagar | Service URL appears missing from app sitemap staticRoutes |  | constants/locationData.ts
- P1 | /services/website-design-company-viman-nagar | Potential orphan page based on source href scan |  | constants/locationData.ts
- P1 | /services/website-design-company-wakad | Service URL appears missing from app sitemap staticRoutes |  | constants/locationData.ts
- P1 | /services/website-design-company-wakad | Potential orphan page based on source href scan |  | constants/locationData.ts
- P1 | /shipping-policy | Potential orphan page based on source href scan |  | (public)/shipping-policy/page.tsx
- P1 | /success-stories | No literal H1 found in page source; may be inside imported component |  | success-stories/page.tsx
- P1 | /success-stories/awards | No literal H1 found in page source; may be inside imported component |  | success-stories/awards/page.tsx
- P1 | /success-stories/media | No literal H1 found in page source; may be inside imported component |  | success-stories/media/page.tsx
- P1 | /success-stories/testimonials | No literal H1 found in page source; may be inside imported component |  | success-stories/testimonials/page.tsx
- P1 | /website-design-company-aundh | Potential orphan page based on source href scan |  | constants/locationData.ts
- P1 | /website-design-company-baner | Potential orphan page based on source href scan |  | constants/locationData.ts
- P1 | /website-design-company-hadapsar | Potential orphan page based on source href scan |  | constants/locationData.ts
- P1 | /website-design-company-kothrud | Potential orphan page based on source href scan |  | constants/locationData.ts
- P1 | /website-design-company-pcmc | Potential orphan page based on source href scan |  | constants/locationData.ts
- P1 | /website-design-company-pune | Potential orphan page based on source href scan |  | constants/locationData.ts
- P1 | /website-design-company-viman-nagar | Potential orphan page based on source href scan |  | constants/locationData.ts
- P1 | /website-design-company-wakad | Potential orphan page based on source href scan |  | constants/locationData.ts
- P2 | / | Thin extractable source text or content hidden in components | 189 words extracted | (public)/page.tsx
- P2 | /about | Weak/dead-end internal linking in page file |  | (public)/about/page.tsx
- P2 | /audit | Weak/dead-end internal linking in page file |  | (public)/audit/page.tsx
- P2 | /audit | Thin extractable source text or content hidden in components | 139 words extracted | (public)/audit/page.tsx
- P2 | /blog | Weak/dead-end internal linking in page file |  | (public)/blog/page.tsx
- P2 | /blog | Thin extractable source text or content hidden in components | 182 words extracted | (public)/blog/page.tsx
- P2 | /blog/b2b-content-marketing-india | Weak/dead-end internal linking in page file |  | lib/blog/data.ts
- P2 | /blog/b2b-content-marketing-india | Duplicate title | Cockroach Janta Party Viral Marketing Case Study 2026 | lib/blog/data.ts
- P2 | /blog/b2b-content-marketing-india | Duplicate meta description |  | lib/blog/data.ts
- P2 | /blog/cockroach-janta-party-viral-marketing-case-study-2026 | Weak/dead-end internal linking in page file |  | lib/blog/data.ts
- P2 | /blog/cockroach-janta-party-viral-marketing-case-study-2026 | Duplicate title | Cockroach Janta Party Viral Marketing Case Study 2026 | lib/blog/data.ts

## Recommended Roadmap

1. Fix the /services/video-production 410 conflict or remove/noindex the page intentionally.
2. Regenerate sitemap from the same source used by route discovery/llms generation.
3. Add contextual internal links from service and blog pages to priority money pages.
4. Normalize canonical trailing slashes and rendered metadata checks.
5. Standardize Service/FAQ/Breadcrumb schema with entity-linked @id values.
6. Differentiate location pages with local proof, nearby service context, and unique FAQs.
7. Add answer-ready blocks for GEO/AEO on priority service pages.
8. Verify placeholder legal/map data before using in public schema.
9. Run browser-based rendered audits for headings, links, schemas, images, and mobile layout.
10. Measure real CWV with Lighthouse/PageSpeed/Web Vitals rather than relying on static inspection.

## Final Summary Counts

```text
TOTAL PAGES DISCOVERED: 100
TOTAL PAGES AUDITED: 100
TOTAL INDEXABLE: 100
TOTAL NON-INDEXABLE: 0
TOTAL ORPHAN: 45
TOTAL BROKEN: 0
TOTAL DUPLICATE: 66
TOTAL THIN: 36
TOTAL METADATA ISSUES: 38
TOTAL CANONICAL ISSUES: 2
TOTAL STRUCTURED DATA ISSUES: 11
TOTAL INTERNAL LINK ISSUES: 86
TOTAL SEMANTIC ISSUES: 6
TOTAL GEO ISSUES: 9
TOTAL AEO ISSUES: 8
TOTAL PERFORMANCE ISSUES: 6
TOTAL CRITICAL: 0
TOTAL HIGH: 69
TOTAL MEDIUM: 185
TOTAL LOW: 0
```

Git:
Commit: NO
Push: NO
Deploy: NO
