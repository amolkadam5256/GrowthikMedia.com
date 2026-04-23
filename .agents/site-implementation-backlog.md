# Growthik Media Non-UI Implementation Backlog

Date: 2026-04-23

Goal:
- Turn the site-wide audit into a file-by-file execution plan
- Focus on SEO, AI SEO, schema, tracking, proof structure and content quality
- Avoid UI redesign work

## Batch 1: Foundation and Tracking

Status:
- In progress

Files:
- [x] `constants/contact.ts`
- [x] `components/PublicComponents/comman/SEO.tsx`
- [x] `components/PublicComponents/structured-data/LocalBusinessSchema.tsx`
- [x] `components/PublicComponents/comman/PageViewTracker.tsx`
- [x] `components/PublicComponents/comman/AuditRequestForm.tsx`
- [x] `components/PublicComponents/ContactPage/ContactForm.tsx`
- [x] `app/(public)/about/page.tsx`
- [x] `app/(public)/contact/page.tsx`
- [x] `app/(public)/privacy-policy/page.tsx`
- [x] `app/(public)/terms/page.tsx`
- [x] `public/ai-audit.json`
- [x] `public/llms.txt`
- [x] `public/sitemap-pages.xml`
- [x] `lib/analytics.ts`

What landed:
- standardized entity IDs and business facts
- improved event tracking and page-group attribution
- fixed canonical issues on legal pages
- removed visible encoding artifacts from key machine-readable files

## Batch 2: Portfolio, Proof and Collection Schema

Status:
- In progress

Files:
- [x] `app/(public)/portfolio/page.tsx`
- [x] `app/(public)/portfolio/[slug]/page.tsx`
- [x] `app/(public)/portfolio/ads-performance/page.tsx`
- [x] `app/(public)/portfolio/branding-work/page.tsx`
- [x] `app/(public)/portfolio/case-studies/page.tsx`
- [x] `app/(public)/portfolio/digital-campaigns/page.tsx`
- [x] `app/(public)/portfolio/social-media-creatives/page.tsx`
- [x] `app/(public)/portfolio/website-projects/page.tsx`
- [x] `app/success-stories/page.tsx`
- [x] `lib/data/portfolio.ts`
- [x] `lib/seo/collectionSchema.ts`

What landed:
- collection and item list schema for portfolio hubs
- stronger case-study schema for portfolio detail pages
- success-stories collection schema
- cleaned encoding artifacts in portfolio content

## Batch 3: Services Hub and Service Template Consistency

Status:
- In progress

Files:
- [x] `app/(public)/services/page.tsx`
- [ ] `app/(public)/services/(digital-marketing)/*/page.tsx`
- [ ] `app/(public)/services/(technology-services)/*/page.tsx`
- [ ] `app/(public)/services/(branding-creative)/*/page.tsx`
- [ ] `app/(public)/services/_programmatic/page.tsx`

What to finish:
- standardize service schema providers
- normalize first-paragraph definitions
- add stronger deliverable and proof semantics
- clean any remaining encoding artifacts
- tighten FAQ answer quality

## Batch 4: Blog Quality and AI-Citable Content

Status:
- Pending

Files:
- [ ] `app/(public)/blog/page.tsx`
- [ ] `app/(public)/blog/[slug]/page.tsx`
- [ ] `lib/blog/content.tsx`

What to do:
- audit thin posts
- improve article schema consistency
- add clearer direct-answer intros
- add more source-backed stats and updated signals
- strengthen blog-to-service conversion paths

## Batch 5: Site Architecture and Internal Linking

Status:
- Pending

Files:
- [ ] `app/(public)/page.tsx`
- [ ] `app/(public)/services/page.tsx`
- [ ] `app/(public)/portfolio/page.tsx`
- [ ] `app/success-stories/page.tsx`
- [ ] `app/(public)/blog/page.tsx`
- [ ] `public/sitemap-pages.xml`

What to do:
- improve supporting links between services, portfolio and blog
- make page intent cleaner by route type
- reconcile sitemap coverage against all indexable routes

## Batch 6: Comparison, Benchmark and Programmatic Expansion

Status:
- Pending

Files:
- [ ] new comparison pages
- [ ] new pricing guide pages
- [ ] new benchmark/report pages
- [ ] location-page support content

What to do:
- build comparison intent coverage
- create stronger AI citation assets
- support local/programmatic SEO with better uniqueness and proof
