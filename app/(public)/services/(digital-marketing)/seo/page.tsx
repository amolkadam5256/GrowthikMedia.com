import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  Globe2,
  LineChart,
  Link2,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import { SEO_FAQ } from "@/constants/faqData";
import { ServiceFAQ } from "@/components/PublicComponents/common/ServiceFAQ";

const canonicalUrl = `${CONTACT_INFO.website}/services/seo/`;
const title = "SEO Company in Pune for Sustainable Organic Growth | Growthik Media";
const description =
  "SEO services in Pune by Growthik Media: technical SEO, local SEO, content strategy, ecommerce SEO, SaaS/B2B SEO, audits and ROI measurement.";

const services = [
  {
    title: "Technical SEO",
    icon: ClipboardCheck,
    text: "Crawling, indexing, rendering, status codes, canonicals, redirects, XML sitemaps, robots.txt, JavaScript SEO, structured data, Core Web Vitals and URL architecture.",
  },
  {
    title: "On-Page SEO",
    icon: FileSearch,
    text: "Titles, meta descriptions, H1-H6 hierarchy, search intent alignment, entity relevance, content structure, image optimization and contextual internal linking.",
  },
  {
    title: "Keyword Research",
    icon: Search,
    text: "Commercial, informational, navigational and transactional intent research across long-tail queries, topic clusters and competitor content gaps.",
  },
  {
    title: "Content SEO",
    icon: Sparkles,
    text: "Pillar pages, supporting articles, entity coverage, semantic relationships and content refresh plans that build topical authority over time.",
  },
  {
    title: "Local SEO",
    icon: MapPin,
    text: "Google Business Profile support, local landing pages, NAP consistency, citations, reviews, neighborhood relevance and local-intent content.",
  },
  {
    title: "Ecommerce SEO",
    icon: Target,
    text: "Category pages, product pages, faceted navigation, crawl control, product structured data, internal links and ecommerce search intent mapping.",
  },
  {
    title: "SaaS & B2B SEO",
    icon: BarChart3,
    text: "Solution pages, use cases, comparison pages, integrations, problem-aware searches and bottom-of-funnel content for longer buying journeys.",
  },
  {
    title: "Healthcare SEO",
    icon: ShieldCheck,
    text: "Careful service discovery, local search, provider and service information, trust signals, author/entity clarity and sensitive-content review where applicable.",
  },
  {
    title: "Real Estate SEO",
    icon: Activity,
    text: "Property and service intent, location intent, project pages, local search, lead generation paths and content architecture for discovery and enquiries.",
  },
  {
    title: "International SEO",
    icon: Globe2,
    text: "Country targeting, language targeting, hreflang planning, international content and regional search-intent mapping when the business is ready to scale beyond India.",
  },
];

const auditSteps = [
  "Crawl analysis",
  "Indexability",
  "Technical architecture",
  "URL audit",
  "Canonical audit",
  "Redirect audit",
  "Sitemap audit",
  "Robots audit",
  "Keyword research",
  "Search intent mapping",
  "On-page optimization",
  "Internal linking",
  "Content and authority analysis",
  "Measurement and reporting",
];

const checklist = [
  "HTTP status",
  "HTTPS",
  "Canonical",
  "Robots directives",
  "XML sitemap",
  "Crawlability",
  "Indexability",
  "Redirects",
  "Duplicate URLs",
  "Trailing slash consistency",
  "JavaScript rendering",
  "Mobile usability",
  "Core Web Vitals",
  "Structured data",
  "Image SEO",
  "Pagination where applicable",
  "Orphan pages",
  "Broken links",
  "404 and 410 handling",
];

const industries = [
  ["SaaS", "Use-case pages, integration pages and comparison content help buyers understand fit before a demo conversation."],
  ["B2B", "Long-cycle buying needs educational pages, proof assets and internal links that support researchers, managers and decision makers."],
  ["Healthcare", "Healthcare SEO focuses on accurate service information, local discovery and trust. Medical claims need careful review."],
  ["Ecommerce", "Category architecture, product data, crawl controls and internal links help shoppers and search engines reach the right products."],
  ["Real Estate", "Location intent, project pages, amenity content and enquiry paths are mapped together instead of publishing duplicate locality text."],
  ["Startups", "Early-stage SEO prioritizes the pages most likely to generate qualified demand: problems, alternatives, use cases and service pages."],
  ["Local Businesses", "Local SEO connects service pages, Google Business Profile signals, reviews, citations and neighborhood relevance."],
];

const relatedServices = [
  ["Local SEO", "/services/local-seo/"],
  ["Google Ads", "/services/ppc-google-ads/"],
  ["Meta Ads", "/services/meta-ads/"],
  ["Performance Marketing", "/services/performance-marketing/"],
  ["Website Development", "/services/website-development/"],
  ["Lead Generation", "/services/lead-generation/"],
  ["Content Marketing", "/services/content-marketing/"],
];

const relatedResources = [
  ["What Is SEO? Complete Beginner Guide", "/blog/complete-beginner-guide-to-seo-2026/"],
  ["Local SEO Strategy for Pune Businesses", "/blog/local-seo-pune/"],
  ["Technical SEO Audit Checklist", "/blog/technical-seo-audit-checklist/"],
  ["Core Web Vitals Guide", "/blog/core-web-vitals-guide/"],
  ["Fix a High Bounce Rate", "/blog/fix-high-bounce-rate/"],
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: canonicalUrl,
    siteName: "Growthik Media",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function SEOCompanyPunePage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: canonicalUrl,
      isPartOf: { "@type": "WebSite", name: "Growthik Media", url: CONTACT_INFO.website },
      about: { "@type": "Service", name: "SEO Services" },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "SEO Services in Pune",
      serviceType: "Search Engine Optimization",
      provider: { "@id": `${CONTACT_INFO.website}/#localbusiness` },
      areaServed: [
        { "@type": "City", name: "Pune" },
        { "@type": "Country", name: "India" },
      ],
      url: canonicalUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${CONTACT_INFO.website}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${CONTACT_INFO.website}/services/` },
        { "@type": "ListItem", position: 3, name: "SEO", item: canonicalUrl },
      ],
    },
  ];

  return (
    <>
      <Script id="seo-hub-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-(--background) pt-24 text-(--text-primary)">
        <nav aria-label="Breadcrumb" className="border-b border-(--border) bg-(--surface) px-6 py-4 lg:px-12">
          <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 text-sm text-(--text-secondary)">
            <li><Link className="hover:text-(--color-primary)" href="/">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link className="hover:text-(--color-primary)" href="/services/">Services</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-bold text-(--text-primary)">SEO</li>
          </ol>
        </nav>

        <header className="px-6 py-20 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-wide text-(--color-primary)">SEO Services in Pune</p>
              <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight md:text-6xl">
                SEO Company in Pune for Sustainable Organic Growth
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-(--text-secondary)">
                Growthik Media helps Pune businesses, SaaS teams, ecommerce brands and service companies improve organic visibility through technical SEO, local SEO, content strategy, search-intent mapping and measurable conversion paths. Campaigns can support local, national and international goals when the business model calls for it.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/audit/" className="inline-flex items-center justify-center gap-2 bg-(--color-primary) px-6 py-4 font-bold text-white transition hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary)">
                  Get Your Free SEO Audit <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/contact/" className="inline-flex items-center justify-center gap-2 border border-(--border) bg-(--surface) px-6 py-4 font-bold transition hover:border-(--color-primary) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary)">
                  Book a Strategy Call
                </Link>
              </div>
            </div>
            <aside className="border border-(--border) bg-(--surface) p-6">
              <h2 className="mb-4 text-xl font-black">What SEO Should Improve</h2>
              <ul className="space-y-4 text-sm leading-6 text-(--text-secondary)">
                {["Qualified organic traffic", "Search visibility for relevant services", "Lead generation and conversion quality", "Technical health and crawl efficiency", "Content authority and internal link depth", "Local visibility across Pune search intent"].map((item) => (
                  <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-(--color-primary)" />{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </header>

        <section className="border-y border-(--border) bg-(--surface) px-6 py-16 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-4 text-3xl font-black">SEO Services</h2>
            <p className="mb-10 max-w-3xl text-(--text-secondary)">A useful SEO hub should explain the work clearly. These are the service areas Growthik can combine depending on your site, market and growth objective.</p>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map(({ title, text, icon: Icon }) => (
                <article key={title} className="border border-(--border) bg-(--background) p-6">
                  <Icon className="mb-4 h-7 w-7 text-(--color-primary)" />
                  <h3 className="mb-3 text-xl font-black">{title}</h3>
                  <p className="text-sm leading-6 text-(--text-secondary)">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="mb-4 text-3xl font-black">Our SEO Audit Process</h2>
              <p className="text-(--text-secondary)">The audit gives the campaign a factual starting point. We use these checks when they are relevant to the site and scope.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {auditSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-3 border border-(--border) bg-(--surface) p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-(--color-primary) text-sm font-black text-white">{index + 1}</span>
                  <span className="font-semibold">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-(--border) bg-(--surface) px-6 py-16 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-4 text-3xl font-black">How We Build Organic Growth</h2>
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <p className="mb-6 leading-7 text-(--text-secondary)">Keyword work is mapped to business intent, not volume alone: keyword to intent, intent to page, page to content, content to internal link, and internal link to conversion action. A search like “technical SEO audit” may need an audit page or section, while “SEO company in Pune” belongs on this service hub.</p>
                <p className="leading-7 text-(--text-secondary)">Topical authority comes from clear relationships: this pillar page links to service pages, industry pages, location pages and supporting articles. Blog posts then link back to the most relevant service page using natural anchor text.</p>
              </div>
              <div className="border border-(--border) bg-(--background) p-6">
                <h3 className="mb-4 text-xl font-black">Technical SEO Checklist</h3>
                <div className="grid grid-cols-1 gap-2 text-sm text-(--text-secondary)">
                  {checklist.map((item) => <span key={item} className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-(--color-primary)" />{item}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-2">
              <article>
                <h2 className="mb-4 text-3xl font-black">Local SEO in Pune</h2>
                <p className="leading-7 text-(--text-secondary)">For Pune campaigns, we map service intent across Pune, Baner, Wakad, Hinjewadi, Kothrud, Aundh, Hadapsar, Viman Nagar and PCMC without creating doorway-style duplicate pages. Local SEO work can include Google Business Profile improvements, NAP consistency, review visibility, citations, service-area relevance and content that reflects how customers actually search.</p>
              </article>
              <article>
                <h2 className="mb-4 text-3xl font-black">SEO for National and International Businesses</h2>
                <p className="leading-7 text-(--text-secondary)">The same fundamentals scale beyond Pune: crawlable architecture, focused page mapping, useful content, clean internal links and reliable measurement. National and international work may also include regional search intent, country targeting, language targeting and hreflang planning where needed.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-y border-(--border) bg-(--surface) px-6 py-16 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 text-3xl font-black">Industry SEO Solutions</h2>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {industries.map(([name, text]) => (
                <article key={name} className="border border-(--border) bg-(--background) p-6">
                  <h3 className="mb-3 text-xl font-black">{name}</h3>
                  <p className="text-sm leading-6 text-(--text-secondary)">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
            <article className="border border-(--border) bg-(--surface) p-6">
              <h2 className="mb-4 text-2xl font-black">GEO & AI Search Optimization</h2>
              <p className="leading-7 text-(--text-secondary)">AI-generated search experiences reward clear, crawlable and authoritative information. We improve entity clarity, structured content, FAQs, semantic relationships and answer-focused sections. Schema and strong content can support machine understanding, but they do not guarantee citations in Google AI results or ChatGPT.</p>
            </article>
            <article className="border border-(--border) bg-(--surface) p-6">
              <h2 className="mb-4 text-2xl font-black">Google Search Console</h2>
              <p className="leading-7 text-(--text-secondary)">GSC helps monitor indexing, queries, impressions, clicks, CTR, page performance, crawl or indexing problems and Core Web Vitals data where available. It is used to find opportunities and diagnose problems, not just export ranking screenshots.</p>
            </article>
            <article className="border border-(--border) bg-(--surface) p-6">
              <h2 className="mb-4 text-2xl font-black">Measuring SEO ROI</h2>
              <p className="leading-7 text-(--text-secondary)">GA4 and GTM connect organic traffic to landing-page engagement, leads, conversions and revenue where tracking exists. Useful SEO KPIs include clicks, impressions, CTR, rankings, non-branded traffic, qualified leads, conversion rate and assisted conversions.</p>
            </article>
          </div>
        </section>

        <section className="border-y border-(--border) bg-(--surface) px-6 py-16 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-black">Why Growthik Media</h2>
              <p className="mb-6 leading-7 text-(--text-secondary)">Growthik Media is a Pune-based digital marketing and web development team. The SEO advantage is practical: technical development capability, local SEO knowledge, content planning, performance-marketing context and measurement through analytics.</p>
              <p className="leading-7 text-(--text-secondary)">For pricing, we scope SEO after reviewing website size, competition, industry, location, technical complexity, content requirements and business objectives.</p>
            </div>
            <div className="border border-(--border) bg-(--background) p-6">
              <h3 className="mb-4 text-xl font-black">Engagement Process</h3>
              <ol className="space-y-3 text-sm text-(--text-secondary)">
                {["Discovery", "Technical audit", "Keyword and intent research", "Strategy", "Implementation", "Content and authority development", "Measurement", "Continuous optimization"].map((step) => (
                  <li key={step} className="flex gap-3"><LineChart className="h-4 w-4 shrink-0 text-(--color-primary)" />{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-4 text-3xl font-black">SEO Timeline</h2>
            <p className="max-w-4xl leading-7 text-(--text-secondary)">Technical improvements can often be implemented quickly, but indexing takes time, rankings fluctuate and competitive queries require sustained work. Meaningful organic growth usually takes months rather than days, especially when content authority and links need to be built carefully.</p>
          </div>
        </section>

        <section className="border-y border-(--border) bg-(--surface) px-6 py-16 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 text-3xl font-black">Related Services</h2>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map(([label, href]) => (
                <Link key={href} href={href} className="inline-flex items-center gap-2 border border-(--border) bg-(--background) px-5 py-3 font-bold transition hover:border-(--color-primary)">
                  {label} <Link2 className="h-4 w-4" />
                </Link>
              ))}
            </div>
            <h2 className="mb-8 mt-14 text-3xl font-black">Related Resources</h2>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {relatedResources.map(([label, href]) => (
                <Link key={href} href={href} className="border border-(--border) bg-(--background) p-5 font-bold transition hover:border-(--color-primary)">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ServiceFAQ
          faqs={SEO_FAQ}
          title="SEO FAQs"
          subtitle="Straight answers about SEO scope, timing, measurement and Growthik Media's process."
          schemaId="seo-faq-schema"
        />

        <section className="px-6 py-20 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mb-5 text-3xl font-black md:text-5xl">Ready to Build a Stronger Organic Growth Engine?</h2>
            <p className="mx-auto mb-8 max-w-2xl leading-7 text-(--text-secondary)">Start with a practical audit of your technical foundation, content opportunities, local visibility and conversion tracking.</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/audit/" className="inline-flex items-center justify-center gap-2 bg-(--color-primary) px-6 py-4 font-bold text-white transition hover:bg-black">Get Your Free SEO Audit <ArrowRight className="h-5 w-5" /></Link>
              <Link href="/contact/" className="inline-flex items-center justify-center gap-2 border border-(--border) bg-(--surface) px-6 py-4 font-bold transition hover:border-(--color-primary)">Book a Strategy Call</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
