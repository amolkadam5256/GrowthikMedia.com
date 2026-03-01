import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import {
  CheckCircle2,
  PhoneCall,
  Mail,
  Target,
  Users,
  TrendingUp,
  MapPin,
  ChevronDown,
  ArrowRight,
  Filter,
  BarChart,
  Megaphone,
  Briefcase,
  LineChart,
  Globe,
  Award,
} from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import { images } from "@/app/assets/images/images";

// ────────────────────────────
// STEP 1-3: METADATA & TECHNICAL SEO
// ────────────────────────────
export const metadata: Metadata = {
  title: "Best Lead Generation Company in Pune | B2B & B2C Qualified Leads",
  description:
    "Stop chasing cold prospects. Growthik Media is Pune's leading lead generation agency building predictable revenue engines and delivering Sales-Qualified Leads (SQLs). Book a Strategy Call!",
  keywords:
    "Lead Generation Company in Pune, B2B Lead Generation Agency Pune, B2C Lead Generation Experts, Qualified Sales Leads Pune, Reduce CPL, Digital Lead Gen Agency",
  alternates: {
    canonical: `${CONTACT_INFO.website}/services/lead-generation-company-in-pune`, // Recommended URL slug implementation
  },
  openGraph: {
    title: "Best Lead Generation Company in Pune | B2B & B2C Qualified Leads",
    description:
      "Stop chasing cold prospects. Growthik Media is Pune's leading lead generation agency building predictable revenue engines.",
    url: `${CONTACT_INFO.website}/services/lead-generation-company-in-pune`,
    siteName: "Growthik Media",
    images: [
      {
        url: "/og-lead-gen.png",
        width: 1200,
        height: 630,
        alt: "Lead Generation Company in Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Lead Generation Company in Pune",
    description:
      "Build predictable revenue pipelines with Pune's top lead generation experts.",
    images: ["/og-lead-gen.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function LeadGenerationPunePage() {
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
                  "Top-rated Lead Generation Company in Pune specializing in B2B and B2C Sales-Qualified Leads (SQLs).",
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
                  ratingValue: "4.8",
                  reviewCount: "67",
                },
              },
              {
                "@type": "Service",
                serviceType: "Lead Generation Services",
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
                    name: "Lead Generation Company in Pune",
                    item: `${CONTACT_INFO.website}/services/lead-generation`,
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Do you generate B2B or B2C leads?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We serve both, but utilize completely different strategies. For B2B, we focus on Account-Based Marketing (ABM) and hyper-targeted LinkedIn/Email outreach. For B2C, we leverage high-converting Paid Social and Search funnels.",
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
          {/* Abstract Growth Background Elements */}
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-(--color-primary)/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto">
            {/* EEAT Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--background) border border-(--border) shadow-sm mb-6 text-sm font-bold text-(--color-primary) tracking-wide">
              <Award className="w-4 h-4" />
              Top Rated B2B & B2C Lead Generation Agency in Pune
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tighter leading-[1.1] uppercase text-(--text-primary)">
              Best Lead Generation Company in Pune: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-(--color-primary) to-emerald-500">
                Stop Chasing. Start Scaling.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-(--text-secondary) font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
              Tired of paying for clicks that never convert? We engineer
              automated, high-intent <strong>Lead Generation Systems</strong>{" "}
              that deliver <em>Sales-Qualified Leads (SQLs)</em> directly to
              your CRM. We don't just generate traffic; we build predictable
              revenue pipelines.
            </p>

            {/* CRO: Urgent CTA & Social Proof stacking */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/contact"
                className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg shadow-(--color-primary)/30 flex items-center justify-center gap-2 w-full sm:w-auto transform hover:-translate-y-1"
              >
                Get Your Free Strategy Session <Filter className="w-5 h-5" />
              </Link>
              <Link
                href={`tel:${CONTACT_INFO.phone.primary.replace(/\s+/g, "")}`}
                className="px-8 py-4 bg-(--background) text-(--text-primary) font-bold rounded-xl border-2 border-(--border) hover:border-(--color-primary) transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Speak to a Growth Expert
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm font-bold text-(--text-secondary) uppercase tracking-wider flex-wrap">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Guaranteed
                SQLs
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Reduced CPL
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Omni-Channel
                Funnels
              </span>
            </div>
          </div>
        </header>

        {/* ──────────────────────────── */}
        {/* 2. QUALITY OVER QUANTITY (Helpful Content Update Alignment) */}
        {/* ──────────────────────────── */}
        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight text-(--text-primary)">
                The Problem: Clicks Don't Pay Your Bills, Qualified Leads Do.
              </h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>

              <p className="text-(--text-secondary) font-medium text-lg mb-6 leading-relaxed">
                Most marketing agencies in Pune focus entirely on "traffic" and
                "impressions." They celebrate low Cost-Per-Click (CPC) while
                your sales team starves for actual, ready-to-buy prospects. This
                vanity-metric approach actively drains your marketing budget.
              </p>

              <div className="bg-(--surface) border-l-4 border-emerald-500 p-6 rounded-r-xl shadow-sm">
                <p className="text-xl text-(--text-primary) font-bold">
                  The Solution: Intent-Based Lead Generation
                </p>
                <p className="mt-2 text-(--text-secondary) font-medium">
                  We reverse-engineer your perfect customer. By combining
                  high-intent search data, hyper-targeted social advertising,
                  and rigorous pre-qualification funnels, we filter out the
                  noise and deliver only Sales-Qualified Leads (SQLs) with
                  absolute buying intent.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Filter,
                  title: "Rigorous Pre-Qualification",
                  desc: "No more fake phone numbers or window shoppers. We use multi-step funnels to qualify intent.",
                },
                {
                  icon: TrendingUp,
                  title: "Predictable Revenue",
                  desc: "Know exactly how much revenue $1 of ad spend will generate next month.",
                },
                {
                  icon: Briefcase,
                  title: "B2B & B2C Mastery",
                  desc: "Distinct, proven playbooks whether you're selling enterprise SaaS or local services.",
                },
                {
                  icon: MapPin,
                  title: "Pune Local Dominance",
                  desc: "Capture hyper-local market share before your competitors even know what happened.",
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
        {/* 3. KEYWORD-MAPPED STRATEGIES CLUSTER */}
        {/* ──────────────────────────── */}
        <section className="px-6 lg:px-12 py-20 bg-(--surface) border-y border-(--border)">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
                Omnichannel Lead Generation Services
              </h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mx-auto mb-6"></div>
              <p className="text-(--text-secondary) font-medium text-lg max-w-2xl mx-auto">
                We don't rely on a single platform. We build robust,
                multi-channel engines to surround your target audience anywhere
                they go online.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: "B2B Account-Based Marketing (ABM)",
                  desc: "We identify your exact dream clients in Pune (or globally) and surround their decision-makers with hyper-personalized ads, emails, and LinkedIn outreach.",
                },
                {
                  icon: Megaphone,
                  title: "High-Intent Google Ads (PPC)",
                  desc: "Capture users at the exact moment they search for your services. We write ruthless ad copy and build high-converting landing pages to lower Cost-Per-Acquisition.",
                },
                {
                  icon: Users,
                  title: "Social Media Lead Ads",
                  desc: "Leverage Facebook, Instagram, and LinkedIn data to generate massive volume at scale. We use advanced lookalike audiences to find your best buyers.",
                },
                {
                  icon: Search,
                  title: "Organic Inbound Engines (SEO)",
                  desc: "Rank at the top of Google for highly lucrative searches. Inbound leads have the highest close rates and the lowest long-term acquisition costs.",
                },
                {
                  icon: Mail,
                  title: "Cold Email & Automation",
                  desc: "Ethical, highly-deliverable cold email infrastructure that lands in the primary inbox, bypasses spam, and books sales appointments on autopilot.",
                },
                {
                  icon: BarChart,
                  title: "CRO & Landing Page Design",
                  desc: "Traffic is useless if your website leaks. We design aggressively optimized landing pages that force users to take action and multiply your conversion rates.",
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
                Pune Market Specialists
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight text-(--text-primary)">
                We Generate High-Quality Local Leads in Pune
              </h2>
              <p className="text-(--text-secondary) font-medium mb-8 leading-relaxed">
                Whether you are a SaaS startup in Hinjewadi, a Real Estate firm
                in Baner, or a healthcare clinic in Kothrud, we know what
                triggers Pune's demographics to convert. We geo-fence our
                campaigns to eliminate out-of-territory waste.
              </p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {[
                  "Tech Startups Hinjewadi",
                  "Real Estate Leads Baner",
                  "Retail Footfall Wakad",
                  "B2B Services Aundh",
                  "Healthcare Leads Kothrud",
                  "Manufacturing PCMC",
                  "Education Viman Nagar",
                  "Local Services Hadapsar",
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
              {/* Decorative funnel representation */}
              <div className="aspect-square w-full rounded-3xl bg-(--surface) border border-(--border) overflow-hidden relative shadow-2xl flex items-center justify-center p-8">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at center, var(--color-primary) 2px, transparent 2px)",
                    backgroundSize: "24px 24px",
                  }}
                ></div>
                <div className="text-center relative z-10 bg-(--background) p-8 rounded-2xl border border-(--border) shadow-xl w-full max-w-sm">
                  <div className="w-full bg-(--surface) h-12 rounded-t-lg mb-2 flex items-center justify-center font-bold text-xs text-(--text-secondary)">
                    10,000 Targeted Impressions
                  </div>
                  <div className="w-[80%] mx-auto bg-(--surface) h-12 mb-2 flex items-center justify-center font-bold text-xs text-(--text-secondary)">
                    500 High-Intent Clicks
                  </div>
                  <div className="w-[60%] mx-auto bg-(--surface) h-12 mb-2 flex items-center justify-center font-bold text-xs text-(--text-secondary)">
                    50 Qualified Leads
                  </div>
                  <div className="w-[40%] mx-auto bg-(--color-primary) text-white h-16 rounded-b-xl flex items-center justify-center font-black text-lg animate-pulse shadow-lg shadow-(--color-primary)/50">
                    10 New Clients
                  </div>
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
              Proven ROI & Pipeline Metrics
            </h2>
            <div className="w-20 h-1.5 bg-(--color-primary) mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  metric: "-62%",
                  label: "Reduction in Cost Per Lead (B2B SaaS)",
                  icon: TrendingUp,
                },
                {
                  metric: "4.5x",
                  label: "Increase in Lead Volume (Real Estate)",
                  icon: BarChart,
                },
                {
                  metric: "40%",
                  label: "Lead-to-Close Rate Improvement",
                  icon: Award,
                },
              ].map((res, i) => (
                <div
                  key={i}
                  className="bg-(--background) p-8 rounded-none border-t-4 border-(--color-primary) border-x border-b border-(--border) shadow-xl text-left"
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
              Read Our Success Stories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ──────────────────────────── */}
        {/* 6. OUR LEAD GEN PROCESS */}
        {/* ──────────────────────────── */}
        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
                The 4-Step Revenue Engine Process
              </h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Audience Profiling",
                  desc: "We utilize advanced data scraping to identify exact personas and decision-makers in your niche.",
                },
                {
                  step: "02",
                  title: "Offer Engineering",
                  desc: "Crafting irresistible, risk-reversed 'lead magnets' and offers that force prospects to engage.",
                },
                {
                  step: "03",
                  title: "Frictionless Funnels",
                  desc: "Building lightning-fast landing pages with multi-step qualification forms to ensure high-intent.",
                },
                {
                  step: "04",
                  title: "Scale & Optimize",
                  desc: "Once we establish a profitable CPL, we aggressively scale ad spend to flood your CRM.",
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
                Lead Generation FAQ
              </h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mx-auto"></div>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How are you different from other lead generation agencies in Pune?",
                  a: "Other agencies focus on vanity metrics like 'Reach' and 'Clicks'. We operate strictly on pipeline metrics: Cost Per Lead (CPL), Cost Per Acquisition (CPA), and overall Return on Ad Spend (ROAS). If a lead doesn't answer the phone or reply to an email, it's not a lead to us.",
                },
                {
                  q: "Do you guarantee a specific number of sales leads?",
                  a: "During our initial Strategy Session, we calculate your current baseline and forecast exactly how many leads our systems can produce per month given your budget constraint. We offer high predictability rather than false guarantees.",
                },
                {
                  q: "Do you generate B2B or B2C leads?",
                  a: "We execute for both, but the methods are entirely different. For B2B, we rely heavily on LinkedIn, Cold Email, and Search Ads. For B2C, we leverage high-velocity Meta (Facebook/Instagram) Ads and localized Google Search.",
                },
                {
                  q: "What is the typical timeframe to see new leads entering our CRM?",
                  a: "For Paid Ads (PPC/Social), leads typically start generating within 48 to 72 hours of launching the campaigns. For SEO and Inbound strategies, significant traction builds between months 3 to 6.",
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
              STOP LOSING TO COMPETITORS
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-(--text-primary) mb-6 uppercase tracking-tight">
              Ready to Fill Your Sales Pipeline?
            </h2>
            <p className="text-xl text-(--text-secondary) font-medium mb-12 max-w-2xl mx-auto">
              Partner with Pune's premier lead generation experts. We'll audit
              your current funnel and show you exactly where you're leaving
              money on the table.
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
                Claim Free Strategy Call
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
              href="/services/seo"
              className="text-(--text-secondary) hover:text-(--color-primary) transition-colors"
            >
              Organic SEO Services
            </Link>
            <span className="text-(--border)">•</span>
            <Link
              href="/services/ppc-google-ads"
              className="text-(--text-secondary) hover:text-(--color-primary) transition-colors"
            >
              Google Ads Agency
            </Link>
            <span className="text-(--border)">•</span>
            <Link
              href="/services/social-media-marketing"
              className="text-(--text-secondary) hover:text-(--color-primary) transition-colors"
            >
              Social Media Lead Gen
            </Link>
            <span className="text-(--border)">•</span>
            <Link
              href="/services/website-design-company-pune"
              className="text-(--text-secondary) hover:text-(--color-primary) transition-colors"
            >
              High-Converting Websites
            </Link>
            <span className="text-(--border)">•</span>
            <Link
              href="/blog"
              className="text-(--text-secondary) hover:text-(--color-primary) transition-colors"
            >
              Digital Marketing Strategies
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
