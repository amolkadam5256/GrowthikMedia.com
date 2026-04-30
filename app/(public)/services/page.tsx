import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import dynamic from "next/dynamic";
import AISchema from "@/components/PublicComponents/comman/AISchema";
import {
  Code,
  ArrowRight,
  Globe,
  Settings,
  Zap,
  TrendingUp,
  Award,
  Users,
  Briefcase,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { CONTACT_INFO, STRUCTURED_DATA_IDS } from "@/constants/contact";

// FilterableServices has interactive state and lives below the fold -
// dynamic import keeps it out of the initial page bundle.
const FilterableServices = dynamic(() =>
  import("./_components/FilterableServices").then((m) => m.FilterableServices),
);

export const metadata: Metadata = {
  title: "Growthik Media | Honest Digital Marketing & SEO Services in Pune",
  description:
    "We help Pune's ambitious brands grow with search strategies that work. High-performance SEO, predictable Google Ads and websites that turn traffic into revenue.",
  keywords:
    "digital marketing services pune, seo company pune, google ads agency pune, website development pune, ecommerce development, performance marketing pune, social media marketing pune, branding agency pune, growthik media services",
  alternates: {
    canonical: "https://www.growthikmedia.com/services/",
  },
  openGraph: {
    title: "Top Digital Marketing & Web Development Services in Pune",
    description:
      "Drive growth with Pune's top digital agency. High-performance Next.js websites, advanced SEO, & branding.",
    url: `${CONTACT_INFO.website}/services/`,
    type: "website",
    siteName: "Growthik Media",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Digital Marketing & Web Development Services in Pune - Growthik Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Digital Marketing & Web Development Services in Pune",
    description:
      "Drive growth with Pune's premier digital marketing & web development agency in Pune.",
    images: ["/og-image.png"],
    creator: "@growthikmedia",
  },
};

export default function ServicesPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": STRUCTURED_DATA_IDS.localBusiness,
        name: "Growthik Media",
        url: CONTACT_INFO.website,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "138",
        },
      },
      {
        "@type": "Service",
        name: "Digital Marketing & Website Development",
        provider: {
          "@id": STRUCTURED_DATA_IDS.organization,
        },
        areaServed: [
          "Pune",
          "Baner",
          "Wakad",
          "Hinjewadi",
          "Aundh",
          "Kothrud",
          "Hadapsar",
          "Viman Nagar",
          "PCMC",
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${CONTACT_INFO.website}/services/#service-catalog`,
        name: "Growthik Media Services",
        numberOfItems: 7,
        itemListElement: [
          { "@type": "ListItem", position: 1, url: `${CONTACT_INFO.website}/services/seo/`, name: "SEO Services" },
          { "@type": "ListItem", position: 2, url: `${CONTACT_INFO.website}/services/ppc-google-ads/`, name: "Google Ads Services" },
          { "@type": "ListItem", position: 3, url: `${CONTACT_INFO.website}/services/meta-ads/`, name: "Meta Ads Services" },
          { "@type": "ListItem", position: 4, url: `${CONTACT_INFO.website}/services/website-development/`, name: "Website Development" },
          { "@type": "ListItem", position: 5, url: `${CONTACT_INFO.website}/services/web-application/`, name: "Web Application Development" },
          { "@type": "ListItem", position: 6, url: `${CONTACT_INFO.website}/services/local-seo/`, name: "Local SEO" },
          { "@type": "ListItem", position: 7, url: `${CONTACT_INFO.website}/services/branding-design/`, name: "Branding and Design" },
        ],
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
            name: "Services",
            item: `${CONTACT_INFO.website}/services`,
          },
        ],
      },
    ],
  };

  const serviceCategories = [
    {
      title: "Website Design & Development",
      icon: Code,
      desc: "Fast, conversion-led websites and landing pages built on modern stacks.",
      services: [
        {
          name: "Website Design & Development",
          link: "/services/website-development/",
        },
        { name: "WordPress Development", link: "/services/wordpress-development/" },
      ],
    },
    {
      title: "eCommerce & Platforms",
      icon: TrendingUp,
      desc: "Revenue-focused storefronts and custom web apps tailored to your workflows.",
      services: [
        {
          name: "eCommerce Development",
          link: "/services/ecommerce-development/",
        },
        { name: "Custom Web Applications", link: "/services/web-application/" },
        { name: "Software Development", link: "/services/software-development/" },
      ],
    },
    {
      title: "Care & Maintenance",
      icon: Settings,
      desc: "Ongoing support that keeps your site secure, fast and always online.",
      services: [
        { name: "Website Maintenance", link: "/services/website-maintenance/" },
        {
          name: "Application Maintenance",
          link: "/services/application-maintenance/",
        },
      ],
    },
  ];

  const metrics = [
    { icon: Globe, value: "50+", label: "Projects Completed" },
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: Briefcase, value: "7+", label: "Years Experience" },
    { icon: Award, value: "100%", label: "Result Guaranteed" },
  ];

  const faqItems = [
    {
      q: "What are your core digital marketing services?",
      a: "SEO (national & local), Google/Meta Ads, high-performance website development (Next.js & WordPress) and conversion-focused branding/creative.",
    },
    {
      q: "How much do SEO services cost in Pune?",
      a: "Typical retainers start from ₹15,000 to ₹50,000 per month depending on competitiveness, pages and link-building needs.",
    },
    {
      q: "How long until we see results?",
      a: "Technical fixes ship in week one; rankings and leads usually compound over 3-6 months with consistent content and links.",
    },
    {
      q: "Do you work with startups and enterprises?",
      a: "Yes. We have playbooks for seed-stage startups, D2C brands and enterprise teams needing performance and governance.",
    },
  ];

  return (
    <main className="bg-(--background) min-h-screen pt-24 overflow-hidden text-(--text-primary) font-sans">
      <AISchema
        question="What specialized digital services does Growthik Media provide?"
        answer="Growthik Media provides a full suite of digital solutions including enterprise Next.js development, SEO (National & Local), Performance Marketing (Google/Meta Ads) and Branding services tailored for high-growth businesses."
        summary="Expert digital services by Growthik Media: Next.js Web Apps, Advanced SEO Audits, result-driven PPC and strategic Brand Identity. Specializing in scaling businesses across Hinjewadi, Baner and Pune."
      />
      <Script
        id="schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* 1. HERO SECTION (CUSTOM FORMAT BASED ON USER REFERENCE) */}
      <section className="relative px-6 lg:px-16 pt-32 pb-24 lg:pt-48 lg:pb-40 flex items-center bg-zinc-950 overflow-hidden -mt-24">
        {/* Background Overlay simulating a dark hero image */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-zinc-900/90 to-transparent z-10 w-full lg:w-2/3"></div>
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/og-image.png"
            alt="Growthik Media Digital Marketing Services"
            fill
            priority
            quality={80}
            className="object-cover"
            style={{ filter: "blur(2px)" }}
            sizes="100vw"
          />
        </div>

        {/* Subtle decorative dot pattern */}
        <div
          className="absolute inset-0 z-10 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Side Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            {/* Top Tagline */}
            <Link
              href="/audit"
              className="flex items-center gap-3 mb-6 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full cursor-pointer hover:bg-red-500/20 transition-colors"
            >
              <Zap className="w-4 h-4 text-red-500" />
              <span className="text-white text-xs font-bold tracking-widest uppercase opacity-90">
                Free Growth Audit for Pune Businesses
              </span>
            </Link>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 tracking-tight text-white leading-[1.1] max-w-3xl">
              Honest Digital Marketing & <br /> Web Development in Pune
            </h1>

            <p className="text-lg md:text-xl text-white/80 font-medium max-w-3xl mb-6 leading-relaxed lg:pr-8 border-l-2 border-(--color-primary) pl-6">
              Skip the agency talk. We&apos;re a small, expert team in Pune that builds websites that load fast and ads that actually make you money. If you&apos;re tired of vanity metrics and want real leads, you&apos;re in the right place.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-2xl">
              {[
                "SEO + Local SEO: Hinjewadi, Baner, Wakad",
                "Google & Meta Ads with ROAS tracking",
                "Next.js & WordPress sites that pass CWV",
                "Branding & creative that converts",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-(--color-primary) mt-0.5" />
                  <span className="font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* Call to Action Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/audit"
                className="group w-full sm:w-auto relative inline-flex items-center justify-center px-8 py-4 bg-(--color-primary) text-white font-bold rounded-full overflow-hidden transition-all hover:bg-(--color-primary-dark) shadow-lg shadow-(--color-primary)/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Audit{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/contact"
                className="group w-full sm:w-auto relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full overflow-hidden transition-all hover:bg-white/10"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Strategy Call
                </span>
              </Link>
            </div>
            <p className="text-sm text-white/70 mt-4">
              Last updated: April 2026 · Typical results: 3–6 months to compound SEO + paid performance.
            </p>
          </div>

          {/* Right Side - Process Track Diagram (Static, U-Shape Reference) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-16 lg:mt-0 h-[400px] md:h-[500px]">
            <div className="relative w-full max-w-[450px] h-[350px] md:h-[450px] flex items-center">
              {/* --- Red U-Shape Track --- */}
              {/* Top horizontal line */}
              <div className="absolute left-0 top-1/4 h-4 md:h-5 bg-(--color-primary) w-[75%] rounded-r-none z-10"></div>
              {/* Bottom horizontal line */}
              <div className="absolute left-0 bottom-1/4 h-4 md:h-5 bg-(--color-primary) w-[75%] rounded-r-none z-10"></div>
              {/* Semi-circle connecting them on the right */}
              <div
                className="absolute right-[5%] top-1/4 bottom-1/4 w-[40%] border-r-4 border-t-4 border-b-4 md:border-r-5 md:border-t-5 md:border-b-5 border-(--color-primary) rounded-r-[200px] z-10"
                style={{ borderWidth: "16px", borderLeftWidth: "0" }}
              ></div>

              {/* --- Nodes (White Circles) --- */}
              <div className="absolute inset-0 z-20">
                {/* Node 1: Client (Top Left) */}
                <div className="absolute top-[5%] left-[10%] flex flex-col items-center">
                  <span className="text-[10px] md:text-sm font-bold text-white mb-1 md:mb-2">
                    Client
                  </span>
                  <div className="w-12 h-12 md:w-16 md:h-16 relative rounded-full overflow-hidden border-2 border-white shadow-md z-20 bg-black">
                    <Image src="/og-image.png" alt="Client" fill className="object-cover" sizes="80px" />
                  </div>
                  {/* Connecting dashed line */}
                  <div className="h-6 md:h-8 border-l-2 border-dashed border-gray-400 mt-1"></div>
                  {/* Small bead on the track */}
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full mt-[-6px] shadow-sm border border-gray-300"></div>
                </div>

                {/* Node 2: Requirements (Top Mid-Left) */}
                <div className="absolute top-[5%] left-[35%] flex flex-col items-center">
                  <span className="text-[10px] md:text-sm font-bold text-white mb-1 md:mb-2">
                    Understanding
                  </span>
                  <div className="w-12 h-12 md:w-16 md:h-16 relative rounded-full overflow-hidden border-2 border-white shadow-md z-20 bg-black">
                    <Image src="/og-image.png" alt="Requirements" fill className="object-cover" sizes="80px" />
                  </div>
                  <div className="h-6 md:h-8 border-l-2 border-dashed border-gray-400 mt-1"></div>
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full mt-[-6px] shadow-sm border border-gray-300"></div>
                </div>

                {/* Node 3: Analysis (Top Mid-Right) */}
                <div className="absolute top-[10%] left-[60%] flex flex-col items-center">
                  <span className="text-[10px] md:text-sm font-bold text-white mb-1 md:mb-2 text-center">
                    Analysis
                  </span>
                  <div className="w-12 h-12 md:w-16 md:h-16 relative rounded-full overflow-hidden border-2 border-white shadow-md z-20 bg-black">
                    <Image src="/og-image.png" alt="Analysis" fill className="object-cover" sizes="80px" />
                  </div>
                  {/* Diagonal dashed line connecting to curve */}
                  <div className="w-[2px] h-6 md:h-8 border-l-2 border-dashed border-gray-400 mt-1 origin-top rotate-[-20deg]"></div>
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full mt-[2px] ml-[-12px] shadow-sm border border-gray-300 relative pointer-events-none"></div>
                </div>

                {/* Node 4: Strategy (Right Curve Top) */}
                <div className="absolute top-[28%] right-[10%] flex flex-col items-center group">
                  <span className="absolute -top-6 text-[10px] md:text-sm font-bold text-white whitespace-nowrap">
                    Strategy
                  </span>
                  <div className="w-12 h-12 md:w-16 md:h-16 relative rounded-full overflow-hidden border-2 border-white shadow-md z-20 bg-black">
                    <Image src="/og-image.png" alt="Strategy" fill className="object-cover" sizes="80px" />
                  </div>
                  <div className="absolute -left-6 top-1/2 w-6 md:w-8 border-b-2 border-dashed border-gray-400 origin-right rotate-30"></div>
                  <div className="absolute -left-7 top-[65%] w-3 h-3 md:w-4 md:h-4 bg-white rounded-full shadow-sm border border-gray-300 pointer-events-none"></div>
                </div>

                {/* Node 5: Execution (Right Curve Mid) */}
                <div className="absolute bottom-[40%] right-[8%] flex flex-col items-center group">
                  <span className="absolute -top-6 text-[10px] md:text-sm font-bold text-white whitespace-nowrap">
                    Execution
                  </span>
                  <div className="w-12 h-12 md:w-16 md:h-16 relative rounded-full overflow-hidden border-2 border-white shadow-md z-20 bg-black">
                    <Image src="/og-image.png" alt="Execution" fill className="object-cover" sizes="80px" />
                  </div>
                  <div className="absolute -left-8 top-1/2 w-8 md:w-10 border-b-2 border-dashed border-gray-400 origin-right -rotate-30"></div>
                  <div className="absolute -left-10 top-[15%] w-3 h-3 md:w-4 md:h-4 bg-white rounded-full shadow-sm border border-gray-300 pointer-events-none"></div>
                </div>

                {/* Node 6: QA (Bottom Right) */}
                <div className="absolute bottom-[10%] left-[68%] flex flex-col items-center">
                  <span className="text-[10px] md:text-sm font-bold text-white mb-1 whitespace-nowrap">
                    QA
                  </span>
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full mb-[2px] ml-[-20px] shadow-sm border border-gray-300 relative pointer-events-none z-30"></div>
                  <div className="w-[2px] h-6 md:h-8 border-l-2 border-dashed border-gray-400 mb-1 origin-bottom rotate-[-25deg] ml-[-10px] z-20"></div>
                  <div className="w-12 h-12 md:w-16 md:h-16 relative rounded-full overflow-hidden border-2 border-white shadow-md z-20 bg-black">
                    <Image src="/og-image.png" alt="QA" fill className="object-cover" sizes="80px" />
                  </div>
                </div>

                {/* Node 7: Launch (Bottom Mid) */}
                <div className="absolute bottom-[10%] left-[40%] flex flex-col items-center">
                  <span className="text-[10px] md:text-sm font-bold text-white mb-1 whitespace-nowrap">
                    Launch
                  </span>
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full mb-[-6px] shadow-sm border border-gray-300 z-30 relative top-1"></div>
                  <div className="h-6 md:h-8 border-l-2 border-dashed border-gray-400 mb-1 z-20 relative"></div>
                  <div className="w-12 h-12 md:w-16 md:h-16 relative rounded-full overflow-hidden border-2 border-white shadow-md z-20 bg-black">
                    <Image src="/og-image.png" alt="Launch" fill className="object-cover" sizes="80px" />
                  </div>
                </div>

                {/* Node 8: Optimize (Bottom Left) */}
                <div className="absolute bottom-[10%] left-[12%] flex flex-col items-center">
                  <span className="text-[10px] md:text-sm font-bold text-white mb-1 whitespace-nowrap">
                    Optimize
                  </span>
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full mb-[-6px] shadow-sm border border-gray-300 z-30 relative top-1"></div>
                  <div className="h-6 md:h-8 border-l-2 border-dashed border-gray-400 mb-1 z-20 relative"></div>
                  <div className="w-12 h-12 md:w-16 md:h-16 relative rounded-full overflow-hidden border-2 border-white shadow-md z-20 bg-black">
                    <Image src="/og-image.png" alt="Optimization" fill className="object-cover" sizes="80px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO / AREAS WE SERVE */}
      <section className="px-6 lg:px-12 py-20 bg-(--surface) border-y border-(--border)">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-(--text-primary)">
              Helping Local Pune Brands Win
            </h2>
            <p className="text-(--text-secondary) font-medium mb-6 text-lg">
              We build search experiences that help you stand out in the neighborhoods where your customers actually live—from the IT hubs of Hinjewadi to the busy streets of Kothrud.
            </p>
            <p className="text-(--text-secondary) font-medium">
              Our local-first approach ensures you dominate Google Map packs and AI answers when someone searches for your services "near me" in Pune.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "Hinjewadi",
              "Wakad",
              "Baner",
              "Kharadi",
              "PCMC",
              "Viman Nagar",
              "Aundh",
              "Kothrud",
              "Hadapsar",
            ].map((loc) => (
              <Link
                key={loc}
                href="/services/website-design-company-pune/"
                className="p-4 rounded-xl border border-(--border) bg-(--background) hover:border-(--color-primary) hover:shadow-lg transition-all text-sm font-bold text-(--text-primary)"
              >
                {loc}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS / CASE STUDIES */}
      <section className="px-6 lg:px-12 py-20 bg-(--background)">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3">Recent Results</h2>
            <p className="text-(--text-secondary) font-medium">
              Proof over promises-selected wins from Pune clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "+250% organic traffic",
                desc: "B2B SaaS in Baner-SEO + content hub in 4 months.",
              },
              {
                title: "5.2x ROAS on Google Ads",
                desc: "D2C ecommerce in Wakad-smart bidding + landing CRO.",
              },
              {
                title: "#1 for “SEO company Pune”",
                desc: "Local services brand-top-3 map pack and AI answers.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-(--border) bg-(--surface) shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-xl font-black mb-2 text-(--text-primary)">{item.title}</div>
                <p className="text-(--text-secondary) font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CORE SERVICES SECTION (UI UPGRADE) */}
      <section className="px-6 lg:px-12 py-24 bg-(--background) relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tight text-(--text-primary)">
              Our Core Digital Expertise
            </h2>
            <div className="w-24 h-1.5 bg-(--color-primary) mx-auto mb-6 rounded-full"></div>
            <p className="text-(--text-secondary) font-medium text-lg max-w-2xl mx-auto">
              We separate ourselves from traditional agencies by operating as
              your dedicated growth engineers, focused purely on ROI and
              aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {serviceCategories.map((category, idx) => (
              <article
                key={idx}
                className="bg-(--surface) border border-(--border) rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-2xl hover:shadow-(--color-primary)/5 hover:border-(--color-primary)/50 transition-all duration-500 group flex flex-col h-full transform hover:-translate-y-2"
              >
                <header>
                  <div className="w-16 h-16 bg-(--background) shadow-inner rounded-2xl flex items-center justify-center mb-6 lg:mb-8 border border-(--border) group-hover:bg-(--color-primary) group-hover:text-white transition-all duration-500 text-(--color-primary)">
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black mb-3 lg:mb-4 text-(--text-primary)">
                    {category.title}
                  </h3>
                  <p className="text-(--text-secondary) font-medium mb-6 lg:mb-8">
                    {category.desc}
                  </p>
                </header>

                <div className="space-y-3 mb-8 grow">
                  {category.services.map((service, sIdx) => (
                    <Link
                      key={sIdx}
                      href={service.link}
                      className="flex items-center gap-3 p-3 rounded-xl bg-(--background) border border-transparent hover:border-(--border) transition-all font-bold text-sm text-(--text-primary) group/link"
                    >
                      <Zap className="w-4 h-4 text-(--color-primary) opacity-50 group-hover/link:opacity-100" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>

                {/* Learn More CTA */}
                <Link
                  href={category.services[0].link}
                  className="mt-auto w-full py-4 rounded-xl border-2 border-(--border) font-bold text-center text-(--text-primary) group-hover:bg-(--color-primary) group-hover:border-(--color-primary) group-hover:text-white transition-all duration-300"
                >
                  Explore Category
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MID-PAGE CTA */}
      <section className="px-6 lg:px-12 py-16 bg-(--surface) border-y border-(--border)">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-2">
              Need a custom strategy?
            </h2>
            <p className="text-(--text-secondary) font-medium">
              Talk to our lead strategist to map out your digital growth plan.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black font-bold rounded-xl shadow-lg hover:scale-105 transition-transform shrink-0 w-full md:w-auto text-center"
          >
            Schedule a Strategy Call
          </Link>
        </div>
      </section>

      {/* 4. ALL SPECIALIZED SERVICES (FILTERABLE GRID) */}
      <section className="px-6 lg:px-12 py-24 bg-(--background)">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tight text-(--text-primary)">
              All Our Digital Marketing &amp; Web Services
            </h2>
            <div className="w-24 h-1.5 bg-(--color-primary) mx-auto mb-6 rounded-full"></div>
            <p className="text-(--text-secondary) font-medium text-lg max-w-2xl mx-auto">
              Browse our full range of SEO, paid media, web development, branding,
              and e-commerce services - all tailored for Pune businesses and beyond.
            </p>
          </div>

          <FilterableServices />
        </div>
      </section>

      {/* 5. EEAT / TRANSPARENT PROCESS SECTION */}
      <section className="px-6 lg:px-12 py-24 bg-(--surface) border-t border-(--border)">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
              Why Partner With Growthik Media?
            </h2>
            <p className="text-(--text-secondary) font-medium mb-8 text-lg">
              We bring proven enterprise-level execution to businesses in Pune
              and globally. Our process is transparent, data-oriented, and
              focused strictly on the metrics that matter: Revenue, Traffic, and
              Conversions.
            </p>
            <ul className="space-y-6">
              {[
                {
                  title: "Data-Driven Decisions",
                  desc: "No guesswork. Every strategy is backed by analytics and deep market research.",
                },
                {
                  title: "Senior Local Experts",
                  desc: "Direct access to our senior developers and marketers based in Pune.",
                },
                {
                  title: "Omnichannel Approach",
                  desc: "We don't operate in silos. Your SEO, Ads and Website work synergistically.",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-(--color-primary)/10 text-(--color-primary) rounded-xl flex items-center justify-center font-black text-xl">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-(--text-secondary) font-medium text-sm lg:text-base">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-(--background) border border-(--border) rounded-3xl p-6 lg:p-12 shadow-xl shadow-black/5">
            <h3 className="text-2xl font-black mb-8 border-b border-(--border) pb-4 text-center">
              Our Proven Process
            </h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-(--border) before:to-transparent">
              {[
                "Discovery & Audit",
                "Strategy & Architecture",
                "Execution & Development",
                "Optimization & Scaling",
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-(--background) bg-(--color-primary) text-white font-bold text-sm shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    {idx + 1}
                  </div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-(--surface) p-4 rounded-xl shadow-sm border border-(--border)">
                    <h4 className="font-bold text-sm lg:text-base">{step}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="px-6 lg:px-12 py-20 bg-(--background)">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black mb-3">What Pune Clients Say</h2>
            <p className="text-(--text-secondary) font-medium">Real feedback from local founders and marketing leaders.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Anjali, SaaS Founder (Baner)",
                quote: "Growthik took us from page 3 to top 3 for our core SaaS terms and halved our CAC in 5 months.",
              },
              {
                name: "Rahul, D2C CEO (Wakad)",
                quote: "5x ROAS on Google Ads with landing page CRO. Weekly reporting kept the team aligned.",
              },
              {
                name: "Meera, Clinic Owner (Aundh)",
                quote: "Local SEO + GMB optimization drove a 3x increase in appointment calls within 10 weeks.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-(--border) bg-(--surface) shadow-sm">
                <p className="text-(--text-primary) font-semibold mb-3 leading-relaxed">“{item.quote}”</p>
                <span className="text-(--text-secondary) text-sm font-bold">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="px-6 lg:px-12 py-20 bg-(--surface) border-t border-(--border)">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black mb-3">FAQs on Our Digital Services</h2>
            <p className="text-(--text-secondary) font-medium">Fast answers to common questions-optimized for snippets and AI answers.</p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl border border-(--border) bg-(--background)">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-(--color-primary) mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-(--text-primary)">{item.q}</h3>
                    <p className="text-(--text-secondary) font-medium mt-1">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Script
        id="faq-schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />

      {/* 6. FINAL CTA SECTION WITH IMAGE BACKDROP */}
      <section
        className="px-6 lg:px-12 py-24 md:py-32 relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(0,0,0,0.65), rgba(0,0,0,0.45)), url('/og-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 pattern-grid-lg opacity-[0.1]"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            Ready to Build Your Digital Empire?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium mb-12 max-w-2xl mx-auto">
            Let&apos;s discuss how our specialized digital services can integrate into a seamless strategy for your brand&apos;s explosive growth.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href={`tel:${CONTACT_INFO.phone.primary.replace(/\s+/g, "")}`}
              className="flex items-center justify-center w-full sm:w-auto gap-3 px-8 py-4 md:py-5 bg-(--color-primary) text-white rounded-xl font-bold hover:scale-105 transition-transform shadow-xl shadow-black/20 border border-white/20"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center w-full sm:w-auto gap-3 px-8 py-4 md:py-5 bg-white text-black rounded-xl font-bold hover:bg-gray-100 transition-transform shadow-2xl border border-transparent"
            >
              Request a Proposal <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

