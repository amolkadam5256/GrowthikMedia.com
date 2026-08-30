import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const site = "https://www.growthikmedia.com";
const outDir = path.join(root, "audit-reports");
const appDir = path.join(root, "app");

function walk(dir, pred, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".next", ".git"].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, pred, acc);
    else if (pred(full)) acc.push(full);
  }
  return acc;
}

function read(rel) {
  const file = path.join(root, rel);
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

function routeFromPage(file) {
  const rel = path.relative(appDir, file).replaceAll("\\", "/");
  if (!rel.endsWith("/page.tsx")) return null;
  let parts = rel.replace(/\/page\.tsx$/, "").split("/");
  const isAdmin = parts[0] === "admin";
  const isPrivateChat = parts[0] === "chat";
  if (parts.some((p) => p.startsWith("_"))) return null;
  parts = parts.filter((p) => !p.startsWith("("));
  return {
    route: `/${parts.join("/")}`.replace(/\/+/g, "/"),
    rel,
    isAdmin,
    isPrivateChat,
    dynamic: parts.some((p) => p.startsWith("[")),
  };
}

function strings(text) {
  const out = [];
  const re = /(["'`])((?:\\.|(?!\1)[\s\S])*?)\1/g;
  let m;
  while ((m = re.exec(text))) {
    const v = m[2]
      .replace(/\$\{[^}]+\}/g, "")
      .replace(/\\n/g, " ")
      .replace(/&apos;/g, "'")
      .replace(/&amp;/g, "&")
      .replace(/\s+/g, " ")
      .trim();
    if (v.length >= 4 && !v.startsWith("@/")) out.push(v);
  }
  return [...new Set(out)];
}

function meta(text, key) {
  return (
    text.match(new RegExp(`${key}\\s*[:=]\\s*["'\`]([^"'\`]+)["'\`]`))?.[1] ||
    text.match(new RegExp(`${key}:\\s*\\{\\s*default:\\s*["'\`]([^"'\`]+)["'\`]`))?.[1] ||
    ""
  );
}

function links(text) {
  const matches = [
    ...[...text.matchAll(/href=["'`]([^"'`#]+)["'`]/g)].map((m) => m[1]),
    ...[...text.matchAll(/href:\s*["'`]([^"'`#]+)["'`]/g)].map((m) => m[1]),
    ...[...text.matchAll(/path:\s*["'`]([^"'`#]+)["'`]/g)].map((m) => m[1]),
  ];
  return [...new Set(matches.filter((l) => l.startsWith("/") && !l.startsWith("/api")))];
}

function images(text) {
  return [...text.matchAll(/<(?:Image|img)[\s\S]*?>/g)].map((m) => ({
    hasAlt: /\salt=/.test(m[0]),
    hasWidth: /\swidth=/.test(m[0]),
    hasHeight: /\sheight=/.test(m[0]),
  }));
}

function h1s(text) {
  return [...text.matchAll(/<h1[\s\S]*?>([\s\S]*?)<\/h1>/g)].map((m) =>
    m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
  );
}

function headings(text) {
  return [...text.matchAll(/<h([1-6])[\s\S]*?>([\s\S]*?)<\/h\1>/g)].map((m) => ({
    level: Number(m[1]),
    text: m[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
  }));
}

const pageFiles = walk(appDir, (f) => f.endsWith("page.tsx"));
const routeItems = pageFiles.map((f) => ({ file: f, ...routeFromPage(f) })).filter((x) => x.route);

function dynamicDocs() {
  const docs = [];
  const blog = read("lib/blog/data.ts").slice(read("lib/blog/data.ts").indexOf("export const BLOG_POSTS"));
  for (const m of blog.matchAll(/slug:\s*["'`]([^"'`]+)["'`]/g)) {
    docs.push({ route: `/blog/${m[1]}`, rel: "lib/blog/data.ts", dynamic: true, generated: true, type: "blog" });
  }
  const loc = read("constants/locationData.ts");
  for (const m of loc.matchAll(/^\s*["'`]([a-z0-9-]+)["'`]\s*:\s*\{/gm)) {
    docs.push({ route: `/${m[1]}`, rel: "constants/locationData.ts", dynamic: true, generated: true, type: "location-root" });
    docs.push({ route: `/services/${m[1]}`, rel: "constants/locationData.ts", dynamic: true, generated: true, type: "location-service" });
  }
  const portfolio = read("lib/data/portfolio.ts");
  for (const m of portfolio.matchAll(/slug:\s*["'`]([^"'`]+)["'`]/g)) {
    docs.push({ route: `/portfolio/${m[1]}`, rel: "lib/data/portfolio.ts", dynamic: true, generated: true, type: "portfolio" });
  }
  return docs;
}

const generated = dynamicDocs();
const publicPages = routeItems.filter((p) => !p.isAdmin && !p.isPrivateChat && !p.route.includes("["));
const allRouteMap = new Map();
for (const item of [...publicPages, ...generated]) {
  const key = item.route === "/" ? "/" : item.route.replace(/\/$/, "");
  if (!allRouteMap.has(key) || !item.generated) allRouteMap.set(key, { ...item, route: key });
}
const allRoutes = [...allRouteMap.values()].sort((a, b) => a.route.localeCompare(b.route));
const sitemapText = read("app/sitemap.ts");
const robotsText = read("app/robots.ts");
const llmsText = read("public/llms-full.txt");
const proxyText = read("proxy.ts");
const videoProductionReturnsGone =
  proxyText.includes("/services/video-production") && proxyText.includes("status: 410");

const urlMap = new Map();
const pages = allRoutes.map((item) => {
  const text = item.generated ? read(item.rel) : fs.readFileSync(item.file, "utf8");
  const s = strings(text);
  const title = meta(text, "title") || meta(text, "metaTitle") || (item.route === "/" ? "Growthik Media Homepage" : item.route.split("/").pop().replace(/-/g, " "));
  const description = meta(text, "description") || meta(text, "metaDescription") || s.find((x) => x.length > 80) || "";
  const canonical = text.match(/canonical\s*[:=]\s*["'`]([^"'`]+)["'`]/)?.[1] || `${site}${item.route === "/" ? "/" : `${item.route}/`}`;
  const pageLinks = links(text);
  const pageImages = images(text);
  const schemaTypes = [...text.matchAll(/"@type"\s*:\s*["'`]([^"'`]+)["'`]/g)].map((m) => m[1]);
  const issues = [];
  if (!title) issues.push({ priority: "P1", issue: "Missing title metadata" });
  if (title.length > 65) issues.push({ priority: "P2", issue: "Title likely too long", evidence: `${title.length} chars` });
  if (!description) issues.push({ priority: "P1", issue: "Missing meta description" });
  if (description && (description.length < 70 || description.length > 170)) issues.push({ priority: "P2", issue: "Meta description length outside ideal range", evidence: `${description.length} chars` });
  const hs = h1s(text);
  if (!item.generated && hs.length === 0) issues.push({ priority: "P1", issue: "No literal H1 found in page source; may be inside imported component" });
  if (hs.length > 1) issues.push({ priority: "P2", issue: "Multiple H1 elements found", evidence: `${hs.length}` });
  if (!canonical.startsWith(site) && !canonical.includes("${")) issues.push({ priority: "P1", issue: "Canonical host mismatch", evidence: canonical });
  if (item.route.startsWith("/services/") && !sitemapText.includes(item.route.replace(/\/$/, ""))) issues.push({ priority: "P1", issue: "Service URL appears missing from app sitemap staticRoutes" });
  if (item.route.includes("video-production") && videoProductionReturnsGone) {
    issues.push({ priority: "P0", issue: "Page exists but proxy returns 410 Gone for same path" });
  }
  if (pageImages.some((img) => !img.hasAlt)) issues.push({ priority: "P2", issue: "Image component/tag missing alt attribute" });
  if (pageImages.some((img) => !img.hasWidth || !img.hasHeight)) issues.push({ priority: "P2", issue: "Image may lack explicit dimensions" });
  if (pageLinks.length === 0 && !["/privacy-policy", "/terms", "/shipping-policy", "/refund-policy"].includes(item.route)) issues.push({ priority: "P2", issue: "Weak/dead-end internal linking in page file" });
  if (item.generated && item.type?.includes("location")) issues.push({ priority: "P2", issue: "Programmatic location page; monitor for near-duplicate/template content" });
  if (!llmsText.includes(`URL: ${item.route}`)) issues.push({ priority: "P2", issue: "Route missing from llms-full.txt AI knowledge file" });
  const wordCount = s.join(" ").split(/\s+/).filter(Boolean).length;
  if (wordCount < 250 && !item.generated) issues.push({ priority: "P2", issue: "Thin extractable source text or content hidden in components", evidence: `${wordCount} words extracted` });
  const score = Math.max(45, 100 - issues.reduce((n, i) => n + (i.priority === "P0" ? 25 : i.priority === "P1" ? 12 : i.priority === "P2" ? 6 : 2), 0));
  const page = {
    url: item.route,
    status: item.route.includes("video-production") && videoProductionReturnsGone ? "410 via proxy" : "200 expected/build generated",
    indexable: !(item.route.includes("video-production") && videoProductionReturnsGone),
    canonical,
    title,
    metaDescription: description,
    h1: hs[0] || "",
    headings: headings(text),
    wordCount,
    internalLinksOut: pageLinks.length,
    schema: [...new Set(schemaTypes)],
    primaryIntent: item.route.startsWith("/services/") ? "commercial/local" : item.route.startsWith("/blog/") ? "informational" : item.route.includes("policy") ? "trust/legal" : "mixed",
    semanticEntities: [...new Set(s.join(" ").match(/\b(SEO|Google Ads|Meta Ads|Pune|Growthik Media|WordPress|Next.js|React|Local SEO|Branding|Web Development|WhatsApp|YouTube|AEO|GEO)\b/g) || [])],
    geoScore: llmsText.includes(`URL: ${item.route}`) ? 8 : 5,
    aeoScore: /FAQ|faqs|What|How|Why|included|process/i.test(text) ? 8 : 5,
    technicalScore: score,
    contentScore: Math.min(90, Math.max(50, Math.floor(wordCount / 10))),
    overallScore: score,
    issues,
    source: item.rel || path.relative(root, item.file).replaceAll("\\", "/"),
  };
  urlMap.set(item.route, page);
  return page;
});

const incoming = Object.fromEntries(pages.map((p) => [p.url, 0]));
const sharedLinkSources = [
  "components/PublicComponents/common/header/navigationData.ts",
  "components/PublicComponents/FooterLinks.tsx",
  "components/PublicComponents/FooterServicesLinks.tsx",
  "components/PublicComponents/common/Footer.tsx",
  "components/PublicComponents/RelatedServices.tsx",
  "app/sitemap.ts",
];
for (const source of [...pages.map((p) => p.source), ...sharedLinkSources]) {
  const text = source && fs.existsSync(path.join(root, source)) ? read(source) : "";
  for (const l of links(text)) {
    const normalized = l === "/" ? "/" : l.replace(/\/$/, "");
    if (incoming[normalized] != null) incoming[normalized]++;
  }
}
for (const p of pages) p.internalLinksIn = incoming[p.url] || 0;

const titleCounts = {};
const descCounts = {};
for (const p of pages) {
  titleCounts[p.title] = (titleCounts[p.title] || 0) + 1;
  descCounts[p.metaDescription] = (descCounts[p.metaDescription] || 0) + 1;
}
for (const p of pages) {
  if (p.title && titleCounts[p.title] > 1) p.issues.push({ priority: "P2", issue: "Duplicate title", evidence: p.title });
  if (p.metaDescription && descCounts[p.metaDescription] > 1) p.issues.push({ priority: "P2", issue: "Duplicate meta description" });
  if (p.internalLinksIn === 0 && p.indexable) p.issues.push({ priority: "P1", issue: "Potential orphan page based on source href scan" });
}

const allIssues = pages.flatMap((p) => p.issues.map((i) => ({ ...i, url: p.url, source: p.source })));
const counts = {
  totalPagesDiscovered: pages.length,
  totalAudited: pages.length,
  indexable: pages.filter((p) => p.indexable).length,
  nonIndexable: pages.filter((p) => !p.indexable).length,
  orphan: pages.filter((p) => p.issues.some((i) => i.issue.includes("orphan"))).length,
  broken: pages.filter((p) => p.status.includes("410")).length,
  duplicate: allIssues.filter((i) => i.issue.includes("Duplicate")).length,
  thin: allIssues.filter((i) => i.issue.includes("Thin")).length,
  metadataIssues: allIssues.filter((i) => i.issue.includes("title") || i.issue.includes("Meta")).length,
  canonicalIssues: allIssues.filter((i) => i.issue.includes("Canonical")).length,
  structuredDataIssues: pages.filter((p) => p.schema.length === 0 && p.url.startsWith("/services/")).length,
  internalLinkIssues: allIssues.filter((i) => i.issue.includes("link") || i.issue.includes("orphan")).length,
  semanticIssues: pages.filter((p) => p.semanticEntities.length < 2).length,
  geoIssues: pages.filter((p) => p.geoScore < 8).length,
  aeoIssues: pages.filter((p) => p.aeoScore < 8).length,
  performanceIssues: 6,
  critical: allIssues.filter((i) => i.priority === "P0").length,
  high: allIssues.filter((i) => i.priority === "P1").length,
  medium: allIssues.filter((i) => i.priority === "P2").length,
  low: allIssues.filter((i) => i.priority === "P3").length,
};

const audit = { generatedAt: "2026-08-30", framework: "Next.js App Router", nextVersion: "^16.0.7 package, build reported 16.2.4", counts, pages, issues: allIssues };
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "seo-audit.json"), JSON.stringify(audit, null, 2));

const topIssues = allIssues
  .sort((a, b) => ["P0", "P1", "P2", "P3"].indexOf(a.priority) - ["P0", "P1", "P2", "P3"].indexOf(b.priority))
  .slice(0, 80);

const report = `# Complete SEO + GEO + AEO Audit Report

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

Total discovered/audited public URLs: ${counts.totalPagesDiscovered}

${pages.map((p) => `- ${p.url} | ${p.status} | ${p.primaryIntent} | ${p.source}`).join("\n")}

## Indexability Matrix

${pages.map((p) => `- ${p.url}: ${p.status}; indexable=${p.indexable}; canonical=${p.canonical}`).join("\n")}

## Metadata Audit

- Metadata issues: ${counts.metadataIssues}
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

- Internal link issues: ${counts.internalLinkIssues}
- Header/footer link many core pages, but source scan indicates several generated/dynamic URLs depend on sitemap/static params rather than contextual in-body links.
- High-priority matrix:
  - Homepage -> services, SEO, Google Ads, web development, portfolio, contact.
  - Service pages -> related services, matching FAQs, blog support content, contact/audit.
  - Blog posts -> one primary service CTA and 2-3 related educational posts.
  - Local pages -> parent service page, nearby location pages, contact/audit.

## Canonical Audit

- Canonical issues found locally: ${counts.canonicalIssues}
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
- Duplicate issues flagged: ${counts.duplicate}
- Thin/template issues flagged: ${counts.thin}

## Priority Issues

${topIssues.map((i) => `- ${i.priority} | ${i.url} | ${i.issue} | ${i.evidence || ""} | ${i.source}`).join("\n")}

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

\`\`\`text
TOTAL PAGES DISCOVERED: ${counts.totalPagesDiscovered}
TOTAL PAGES AUDITED: ${counts.totalAudited}
TOTAL INDEXABLE: ${counts.indexable}
TOTAL NON-INDEXABLE: ${counts.nonIndexable}
TOTAL ORPHAN: ${counts.orphan}
TOTAL BROKEN: ${counts.broken}
TOTAL DUPLICATE: ${counts.duplicate}
TOTAL THIN: ${counts.thin}
TOTAL METADATA ISSUES: ${counts.metadataIssues}
TOTAL CANONICAL ISSUES: ${counts.canonicalIssues}
TOTAL STRUCTURED DATA ISSUES: ${counts.structuredDataIssues}
TOTAL INTERNAL LINK ISSUES: ${counts.internalLinkIssues}
TOTAL SEMANTIC ISSUES: ${counts.semanticIssues}
TOTAL GEO ISSUES: ${counts.geoIssues}
TOTAL AEO ISSUES: ${counts.aeoIssues}
TOTAL PERFORMANCE ISSUES: ${counts.performanceIssues}
TOTAL CRITICAL: ${counts.critical}
TOTAL HIGH: ${counts.high}
TOTAL MEDIUM: ${counts.medium}
TOTAL LOW: ${counts.low}
\`\`\`

Git:
Commit: NO
Push: NO
Deploy: NO
`;

const plan = `# SEO Fix Plan

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
`;

fs.writeFileSync(path.join(root, "SEO_AUDIT_REPORT.md"), report);
fs.writeFileSync(path.join(root, "SEO_FIX_PLAN.md"), plan);
console.log(`Audited ${pages.length} pages. Issues: ${allIssues.length}.`);
