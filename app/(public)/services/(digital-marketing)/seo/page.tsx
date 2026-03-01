import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import {
  CheckCircle2,
  Monitor,
  Smartphone,
  Zap,
  LayoutTemplate,
  Shield,
  Search,
  Settings,
  Target,
  Users,
  Award,
  TrendingUp,
  MapPin,
  ChevronDown,
  ArrowRight,
  Code,
  Globe,
  LineChart,
  BarChart,
  Link as LinkIcon,
  ShoppingBag,
  Map,
} from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import { images } from "@/app/assets/images/images";

// ────────────────────────────
// STEP 1-3: METADATA & TECHNICAL SEO
// ────────────────────────────
export const metadata: Metadata = {
  title: "Best SEO Company in Pune | Top SEO Agency & Services",
  description:
    "Looking for the best SEO company in Pune? Growthik Media provides data-driven Local SEO, Technical SEO, and E-Commerce SEO services to guarantee top rankings. Free Audit!",
  keywords:
    "SEO Company in Pune, Best SEO Agency Pune, Local SEO Services Pune, Search Engine Optimization Expert Pune, E-Commerce SEO Pune, Technical SEO",
  alternates: {
    canonical: `${CONTACT_INFO.website}/services/seo-company-in-pune`, // Recommended URL slug implementation
  },
  openGraph: {
    title: "Best SEO Company in Pune | Top SEO Agency & Services",
    description:
      "Looking for the best SEO company in Pune? Growthik Media provides data-driven Local SEO, Technical SEO, and E-Commerce SEO services to guarantee top rankings.",
    url: `${CONTACT_INFO.website}/services/seo-company-in-pune`,
    siteName: "Growthik Media",
    images: [
      {
        url: "/og-seo.png",
        width: 1200,
        height: 630,
        alt: "SEO Company in Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best SEO Company in Pune",
    description:
      "Data-driven SEO services to dominate Google rankings in Pune.",
    images: ["/og-seo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function SeoServicesPunePage() {
  return (
    <>
      {/* ──────────────────────────── */}
      {/* STEP 3 & 4: ADVANCED SCHEMA MARKUP (JSON-LD) */}
      {/* ──────────────────────────── */}
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": `${CONTACT_INFO.website}/#localbusiness`,
                name: "Growthik Media",
                image: `${CONTACT_INFO.website}/logo.png`,
                description:
                  "Top-rated SEO Company in Pune offering Local, Technical, and E-commerce SEO.",
                url: CONTACT_INFO.website,
                telephone: CONTACT_INFO.phone.primary,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Baner",
                  addressLocality: "Pune",
                  addressRegion: "Maharashtra",
                  postalCode: "411045",
                  addressCountry: "IN",
                },
                priceRange: "$$",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "84",
                },
              },
              {
                "@type": "Service",
                serviceType: "Search Engine Optimization (SEO)",
                provider: { "@id": `${CONTACT_INFO.website}/#localbusiness` },
                areaServed: {
                  "@type": "City",
                  name: "Pune",
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: CONTACT_INFO.website,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Digital Marketing",
                    item: `${CONTACT_INFO.website}/services`,
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "SEO Company in Pune",
                    item: `${CONTACT_INFO.website}/services/seo`,
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Why is Growthik Media the best SEO company in Pune?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We combine technical SEO, localized content strategies (targeting Baner, Wakad, Hinjewadi, etc.), and high-authority link building to ensure sustainable ROI and top 3 Google rankings.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <main className="bg-(--background) min-h-screen pt-24 overflow-hidden text-(--text-primary) font-sans">
        {/* ──────────────────────────── */}
        {/* 1. HERO SECTION (Keyword Optimized H1 & Initial CRO) */}
        {/* ──────────────────────────── */}
        <header className="relative px-6 lg:px-12 py-20 lg:py-32 flex flex-col items-center text-center bg-(--surface) overflow-hidden border-b border-(--border)">
          {/* Abstract SEO Background Elements */}
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-(--color-primary)/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto">
            {/* EEAT Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--background) border border-(--border) shadow-sm mb-6 text-sm font-bold text-(--color-primary) tracking-wide">
              <Award className="w-4 h-4" />
              #1 Rated SEO Agency in Pune | 7+ Years Experience
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tighter leading-[1.1] uppercase text-(--text-primary)">
              Best SEO Company in Pune: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-(--color-primary) to-blue-500">
                Dominate Google Rankings & Drive Sales
              </span>
            </h1>

            <p className="text-lg md:text-xl text-(--text-secondary) font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
              Stop losing customers to your competitors. As Pune's leading{" "}
              <strong>Search Engine Optimization Agency</strong>, we engineer
              data-driven SEO strategies that generate high-intent traffic,
              build EEAT authority, and multiply your revenue without relying
              entirely on paid ads.
            </p>

            {/* CRO: Urgent CTA & Social Proof stacking */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/contact"
                className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg shadow-(--color-primary)/30 flex items-center justify-center gap-2 w-full sm:w-auto transform hover:-translate-y-1"
              >
                Get Your Free SEO Audit <Search className="w-5 h-5" />
              </Link>
              <Link
                href={`tel:${CONTACT_INFO.phone.primary.replace(/\s+/g, "")}`}
                className="px-8 py-4 bg-(--background) text-(--text-primary) font-bold rounded-xl border-2 border-(--border) hover:border-(--color-primary) transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Speak to an Expert
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm font-bold text-(--text-secondary) uppercase tracking-wider flex-wrap">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Guaranteed
                ROI
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> No Spammy
                Link Building
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Enterprise
                Level Strategies
              </span>
            </div>
          </div>
        </header>

        {/* ──────────────────────────── */}
        {/* 2. SERVICE OVERVIEW (Problem + Solution) */}
        {/* ──────────────────────────── */}
        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight text-(--text-primary)">
                Why Most SEO Services in Pune Fail (And How We Fix It)
              </h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>

              <p className="text-(--text-secondary) font-medium text-lg mb-6 leading-relaxed">
                Many businesses in Pune waste thousands of rupees on "cheap SEO
                packages" that rely on outdated tricks, keyword stuffing, and
                spammy backlinks. This doesn't just waste your money—it actively
                harms your domain ranking.
              </p>

              <div className="bg-(--surface) border-l-4 border-(--color-primary) p-6 rounded-r-xl shadow-sm">
                <p className="text-xl text-(--text-primary) font-bold">
                  The Solution: Semantic Search & Entity-Based SEO
                </p>
                <p className="mt-2 text-(--text-secondary) font-medium">
                  We don't just target keywords; we build topical authority. By
                  aligning your website with Google's EEAT (Experience,
                  Expertise, Authoritativeness, Trustworthiness) guidelines, we
                  turn your brand into the undeniable industry leader in Pune.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: LineChart,
                  title: "High-Intent Traffic",
                  desc: "Attract users exactly when they are searching to buy.",
                },
                {
                  icon: Shield,
                  title: "EEAT Authority",
                  desc: "Establish unwavering trust with search engines.",
                },
                {
                  icon: Monitor,
                  title: "Technical SEO",
                  desc: "Lightning fast loads & zero crawl errors.",
                },
                {
                  icon: Map,
                  title: "Local Dominance",
                  desc: "Rank #1 for Pune-specific geography searches.",
                },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-(--surface) p-6 rounded-2xl border border-(--border)"
                >
                  <benefit.icon className="w-10 h-10 text-(--color-primary) mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-(--text-primary)">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-(--text-secondary) font-medium">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────── */}
        {/* 3. KEYWORD-MAPPED SUB-SERVICES CLUSTER */}
        {/* ──────────────────────────── */}
        <section className="px-6 lg:px-12 py-20 bg-(--surface) border-y border-(--border)">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
                Specialized SEO Services We Offer
              </h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mx-auto mb-6"></div>
              <p className="text-(--text-secondary) font-medium text-lg max-w-2xl mx-auto">
                As a comprehensive SEO agency in Pune, we structure custom
                campaigns based on your exact business model.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Code,
                  title: "Technical SEO & Core Web Vitals",
                  desc: "We fix site architecture, improve LCP/CLS metrics, deploy advanced schema markup, and ensure your site is perfectly indexable.",
                },
                {
                  icon: MapPin,
                  title: "Local SEO Services (Pune)",
                  desc: "Dominate the Google Local Pack (Maps). We optimize your GMB profile to capture hyper-local leads from Baner, Hinjewadi, and beyond.",
                },
                {
                  icon: ShoppingBag,
                  title: "E-Commerce SEO Optimization",
                  desc: "Scale your Shopify or WooCommerce store. We optimize product pages, category architectures, and facet navigation for massive sales.",
                },
                {
                  icon: LayoutTemplate,
                  title: "On-Page Content SEO",
                  desc: "Keyword clustering, NLP (Natural Language Processing) optimization, and semantic HTML structuring to perfectly answer user intent.",
                },
                {
                  icon: LinkIcon,
                  title: "High-Authority Link Building",
                  desc: "We acquire powerful, white-hat backlinks through digital PR, guest posting, and unlinked brand mentions to skyrocket Domain Authority.",
                },
                {
                  icon: Target,
                  title: "Enterprise SEO",
                  desc: "For large websites with 10k+ pages. We handle complex crawl budget optimization, advanced siloing, and log file analysis.",
                },
              ].map((service, idx) => (
                <article
                  key={idx}
                  className="bg-(--background) p-8 rounded-none border border-(--border) hover:border-(--color-primary) hover:shadow-2xl hover:shadow-(--color-primary)/10 hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 mb-6 bg-(--surface) border-2 border-(--border) group-hover:border-(--color-primary) flex items-center justify-center text-(--text-primary) group-hover:text-(--color-primary) font-black text-2xl transition-colors relative">
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-(--color-primary) rounded-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-(--text-primary)">
                    {service.title}
                  </h3>
                  <p className="text-(--text-secondary) font-medium text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────── */}
        {/* 4. LOCAL SEO DOMINATION (PUNE GEO-MODIFIERS) */}
        {/* ──────────────────────────── */}
        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-block bg-(--surface) border border-(--border) px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest text-(--color-primary) mb-6">
                Local SEO Expert Pune
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight text-(--text-primary)">
                We Help Businesses Dominate Pune’s Digital Space
              </h2>
              <p className="text-(--text-secondary) font-medium mb-8 leading-relaxed">
                If your business operates physically in Pune, ranking for "near
                me" or specific localities is non-negotiable. Our localized
                keyword strategies ensure your phone rings before your
                competitors'.
              </p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {[
                  "SEO Check Baner",
                  "Digital Marketing Wakad",
                  "Tech SEO Hinjewadi",
                  "Local SEO Aundh",
                  "E-Comm SEO Kothrud",
                  "B2B SEO Hadapsar",
                  "Agencies Viman Nagar",
                  "Consulting PCMC",
                ].map((loc, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 font-bold text-sm text-(--text-secondary)"
                  >
                    <MapPin className="w-4 h-4 text-(--color-primary)" /> {loc}
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 relative">
              {/* Decorative map representation */}
              <div className="aspect-square w-full rounded-3xl bg-(--surface) border border-(--border) overflow-hidden relative shadow-2xl flex items-center justify-center p-8">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at center, var(--color-primary) 2px, transparent 2px)",
                    backgroundSize: "24px 24px",
                  }}
                ></div>
                <div className="text-center relative z-10 bg-(--background) p-8 rounded-2xl border border-(--border) shadow-xl">
                  <Globe className="w-16 h-16 mx-auto text-(--color-primary) mb-4 animate-pulse" />
                  <h3 className="font-black text-2xl uppercase tracking-widest text-(--text-primary) mb-2">
                    Growthik Media
                  </h3>
                  <p className="text-(--text-secondary) font-bold text-sm">
                    #1 Ranked Map Pack Visibility in Pune
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────── */}
        {/* 5. EEAT & PROVEN RESULTS (CASE STUDIES) */}
        {/* ──────────────────────────── */}
        <section className="px-6 lg:px-12 py-24 bg-(--surface) border-y border-(--border)">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
              Proven SEO Results & KPIs
            </h2>
            <div className="w-20 h-1.5 bg-(--color-primary) mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  metric: "+310%",
                  label: "Organic Traffic Growth (Retail Client)",
                  icon: TrendingUp,
                },
                {
                  metric: "-45%",
                  label: "Reduction in CPA (B2B SaaS)",
                  icon: BarChart,
                },
                {
                  metric: "Top 3",
                  label: "Rankings for 50+ High-Volume Keywords",
                  icon: Award,
                },
              ].map((res, i) => (
                <div
                  key={i}
                  className="bg-(--background) p-8 rounded-none border-l-4 border-(--color-primary) border-y border-r border-(--border) shadow-xl text-left"
                >
                  <res.icon className="w-10 h-10 text-(--color-primary) mb-6" />
                  <div className="text-5xl font-black mb-2 text-(--text-primary)">
                    {res.metric}
                  </div>
                  <p className="text-(--text-secondary) font-bold text-sm tracking-wide uppercase">
                    {res.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/portfolio/case-studies"
              className="inline-flex items-center gap-3 font-bold text-(--color-primary) hover:text-white hover:bg-(--color-primary) transition-all duration-300 rounded-none border-2 border-(--color-primary) px-8 py-4 uppercase tracking-widest text-sm"
            >
              View Full SEO Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ──────────────────────────── */}
        {/* 6. OUR SEO PROCESS */}
        {/* ──────────────────────────── */}
        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
                Our Search Engine Optimization Process
              </h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Comprehensive Audit",
                  desc: "We perform a 150-point technical, content, and backlink audit.",
                },
                {
                  step: "02",
                  title: "Keyword Clustering",
                  desc: "Mapping high-intent keywords to specific semantic clusters.",
                },
                {
                  step: "03",
                  title: "Structural Optimization",
                  desc: "Fixing architecture, speed, internal linking, and schemas.",
                },
                {
                  step: "04",
                  title: "Content & Link Building",
                  desc: "Deploying high-value topical content and acquiring PR links.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative p-8 bg-(--surface) border border-(--border) hover:border-(--color-primary) transition-colors group"
                >
                  <div className="text-6xl font-black text-(--background) style-stroke-primary opacity-20 absolute top-4 right-4 pointer-events-none transition-opacity group-hover:opacity-40">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-(--text-primary) relative z-10 mt-8">
                    {item.title}
                  </h3>
                  <p className="text-(--text-secondary) font-medium text-sm relative z-10">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────── */}
        {/* 7. FAQs (Optimized for Featured Snippets) */}
        {/* ──────────────────────────── */}
        <section className="px-6 lg:px-12 py-20 bg-(--surface) border-t border-(--border)">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
                SEO Frequently Asked Questions
              </h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mx-auto"></div>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Why is Growthik Media considered the best SEO company in Pune?",
                  a: "We ignore vanity metrics and focus purely on revenue-driving rankings. We combine enterprise-level technical SEO, localized content strategies targeting exact Pune demographics, and strict white-hat link building to ensure sustainable ROI.",
                },
                {
                  q: "How long does it take for SEO to show results?",
                  a: "While technical fixes (speed, schema) can show immediate indexing improvements within days, comprehensive keyword ranking and traffic growth typically compound significantly between months 3 to 6.",
                },
                {
                  q: "What is the average cost of SEO services in Pune?",
                  a: "SEO packages pricing in Pune varies widely based on competition and site size. We avoid one-size-fits-all packages. After a free audit, we provide a custom quote based strictly on the resources required to beat your competitors.",
                },
                {
                  q: "Do you guarantee #1 rankings on Google?",
                  a: "No ethical SEO agency guarantees a #1 spot due to Google's dynamic algorithm. However, we guarantee our proven process, transparent reporting, and historic track record of moving clients into the top 3 positions for high-intent keywords.",
                },
              ].map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-(--background) p-6 rounded-none border border-(--border) cursor-pointer [&_summary::-webkit-details-marker]:hidden transition-all hover:border-(--color-primary)/50"
                >
                  <summary className="flex justify-between items-center font-bold text-lg outline-none text-(--text-primary)">
                    {faq.q}
                    <span className="transition group-open:rotate-180 bg-(--surface) p-2 rounded-full border border-(--border)">
                      <ChevronDown className="w-4 h-4 text-(--color-primary)" />
                    </span>
                  </summary>
                  <p className="text-(--text-secondary) font-medium mt-4 leading-relaxed bg-(--surface) p-6 border-l-2 border-(--color-primary)">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────── */}
        {/* 8. HIGH CONVERSION CTA SECTION (Fixed Background Parallax) */}
        {/* ──────────────────────────── */}
        <section
          className="px-6 lg:px-12 py-24 relative overflow-hidden border-t border-(--border) bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${images.bg.src})` }}
        >
          <div className="absolute inset-0 bg-(--background)/90 pointer-events-none z-0"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-(--color-primary)/20 blur-[100px] rounded-full pointer-events-none z-0"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10 bg-(--surface) p-10 md:p-16 border border-(--border) shadow-2xl">
            <div className="inline-block bg-(--color-primary) text-white px-6 py-2 rounded-none font-black text-sm tracking-widest mb-6 animate-pulse">
              LIMITED TIME: FREE SEO & COMPETITOR AUDIT
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-(--text-primary) mb-6 uppercase tracking-tight">
              Ready to Rank #1 on Google?
            </h2>
            <p className="text-xl text-(--text-secondary) font-medium mb-12 max-w-2xl mx-auto">
              Partner with Pune's premier SEO experts. Get a massive edge over
              your competitors with a data-driven strategy.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
              <Link
                href={`tel:${CONTACT_INFO.phone.primary.replace(/\s+/g, "")}`}
                className="flex items-center justify-center w-full sm:w-auto gap-3 px-8 py-5 bg-(--text-primary) text-(--background) font-black text-lg hover:bg-(--color-primary) hover:text-white transition-colors border-2 border-transparent"
              >
                Call: {CONTACT_INFO.phone.primary}
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center w-full sm:w-auto gap-3 px-8 py-5 bg-(--background) text-(--text-primary) font-black text-lg hover:border-(--color-primary) transition-colors border-2 border-(--border)"
              >
                Claim Free Audit
              </Link>
            </div>
          </div>
        </section>

        {/* ──────────────────────────── */}
        {/* 9. INTERNAL LINKING ARCHITECTURE (Silo Structuring) */}
        {/* ──────────────────────────── */}
        <aside className="px-6 lg:px-12 py-8 bg-(--surface) text-center text-xs font-bold uppercase tracking-widest border-t border-(--border)">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-3">
            <Link
              href="/services/content-marketing"
              className="text-(--text-secondary) hover:text-(--color-primary) transition-colors"
            >
              Content Marketing Services
            </Link>
            <span className="text-(--border)">•</span>
            <Link
              href="/services/ppc-google-ads"
              className="text-(--text-secondary) hover:text-(--color-primary) transition-colors"
            >
              PPC & Google Ads Agency
            </Link>
            <span className="text-(--border)">•</span>
            <Link
              href="/services/website-design-company-pune"
              className="text-(--text-secondary) hover:text-(--color-primary) transition-colors"
            >
              Technical Website Design
            </Link>
            <span className="text-(--border)">•</span>
            <Link
              href="/services/ecommerce-development"
              className="text-(--text-secondary) hover:text-(--color-primary) transition-colors"
            >
              E-Commerce SEO
            </Link>
            <span className="text-(--border)">•</span>
            <Link
              href="/blog/importance-of-seo"
              className="text-(--text-secondary) hover:text-(--color-primary) transition-colors"
            >
              Why SEO Matters
            </Link>
          </div>
        </aside>

        {/* CSS for custom stroke effect on numbers */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .style-stroke-primary {
            -webkit-text-stroke: 2px var(--color-primary);
            color: transparent;
          }
        `,
          }}
        />
      </main>
    </>
  );
}
