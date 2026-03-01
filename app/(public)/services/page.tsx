import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  Code,
  Target,
  PenTool,
  ArrowRight,
  Globe,
  Settings,
  LayoutTemplate,
  Monitor,
  Zap,
  TrendingUp,
  Award,
  Users,
  Briefcase,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import { FilterableServices } from "./_components/FilterableServices";

export const metadata: Metadata = {
  title: "Top Digital Marketing & Web Development Services in Pune",
  description:
    "Drive growth with Pune's premier digital marketing, web app development, SEO, & branding agency. Serving Baner, Wakad, Hinjewadi & beyond. Get a free website audit!",
  keywords:
    "digital marketing services pune, website development pune, SEO services, social media marketing baner, branding agency wakad, ecommerce development hinjewadi",
  alternates: {
    canonical: `${CONTACT_INFO.website}/services`,
  },
  openGraph: {
    title: "Top Digital Marketing & Web Development Services in Pune",
    description:
      "Drive growth with Pune's top digital agency. High-performance Next.js websites, advanced SEO, & branding.",
    url: `${CONTACT_INFO.website}/services`,
    type: "website",
    siteName: "Growthik Media",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Digital Marketing & Web Development Services in Pune",
    description:
      "Drive growth with Pune's premier digital marketing & web development agency in Pune.",
  },
};

export default function ServicesPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${CONTACT_INFO.website}/#organization`,
        name: "Growthik Media",
        url: CONTACT_INFO.website,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
      },
      {
        "@type": "Service",
        name: "Digital Marketing & Website Development",
        provider: {
          "@id": `${CONTACT_INFO.website}/#organization`,
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
      title: "Technology & Development",
      icon: Code,
      desc: "Robust, scalable, and high-performance digital solutions optimized for Core Web Vitals and conversions.",
      services: [
        {
          name: "Website Development",
          link: "/services/website-development",
        },
        {
          name: "Next.js Web Applications",
          link: "/services/web-application",
        },
        {
          name: "E-Commerce Solutions",
          link: "/services/ecommerce-development",
        },
        {
          name: "WordPress Development",
          link: "/services/wordpress-development",
        },
      ],
    },
    {
      title: "Digital Marketing & SEO",
      icon: Target,
      desc: "Data-driven SEO strategies to dominate search engines and dynamic social feeds across Pune.",
      services: [
        {
          name: "Search Engine Optimization (SEO)",
          link: "/services/seo",
        },
        {
          name: "Performance Marketing (Ads)",
          link: "/services/performance-marketing",
        },
        {
          name: "Social Media Marketing",
          link: "/services/social-media-marketing",
        },
        { name: "Lead Generation", link: "/services/lead-generation" },
      ],
    },
    {
      title: "Branding & Creative",
      icon: PenTool,
      desc: "Crafting memorable, enterprise-level brand identities that resonate deeply and convert effortlessly.",
      services: [
        {
          name: "Brand Identity Design",
          link: "/services/brand-identity",
        },
        { name: "Logo & UI/UX Design", link: "/services/logo-design" },
        { name: "Brand Strategy", link: "/services/brand-strategy" },
        {
          name: "Marketing Communications",
          link: "/services/brand-marketing-communications",
        },
      ],
    },
  ];

  const metrics = [
    { icon: Globe, value: "350+", label: "Websites Launched" },
    { icon: Users, value: "400+", label: "Clients Served" },
    { icon: Briefcase, value: "7+", label: "Years Exp" },
    { icon: Award, value: "100%", label: "Result Oriented" },
  ];

  return (
    <main className="bg-(--background) min-h-screen pt-24 overflow-hidden text-(--text-primary) font-sans">
      <Script
        id="schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* 1. HERO SECTION (CUSTOM FORMAT BASED ON USER REFERENCE) */}
      <section className="relative px-6 lg:px-16 pt-32 pb-24 lg:pt-48 lg:pb-40 flex items-center bg-[#1a202c] overflow-hidden -mt-24">
        {/* Background Overlay simulating a dark hero image */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-800/90 to-transparent z-10 w-full lg:w-2/3"></div>
        <div
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{
            backgroundImage: "url('/og-lead-gen.png')",
            filter: "blur(2px)",
          }}
        ></div>

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
                Limited Time: Get a Free SEO & Performance Audit
              </span>
            </Link>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 tracking-tight text-white leading-[1.1] max-w-3xl">
              Digital Marketing & Website Development{" "}
              <br className="hidden md:block" />
              Services in Pune
            </h1>

            <p className="text-lg md:text-xl text-white/80 font-medium max-w-3xl mb-10 leading-relaxed lg:pr-8">
              From highly-optimized enterprise websites to aggressive local SEO
              campaigns focusing on Hinjewadi, Wakad & Baner. We engineer
              growth-driven digital ecosystems that scale revenue.
            </p>

            {/* Bullet Points */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-y-4 gap-x-8 mb-10 w-full max-w-2xl">
              {[
                "Digital Marketing & Strategy",
                "Enterprise Next.js Web Apps",
                "Result-Oriented SEO & PPC",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-white text-sm md:text-base font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Call to Action Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="group w-full sm:w-auto relative inline-flex items-center justify-center px-8 py-4 bg-(--color-primary) text-white font-bold rounded-full overflow-hidden transition-all hover:bg-(--color-primary-dark) shadow-lg shadow-(--color-primary)/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/portfolio"
                className="group w-full sm:w-auto relative inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full overflow-hidden transition-all hover:bg-white/10"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Our Case Studies
                </span>
              </Link>
            </div>
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
                  <span className="text-[10px] md:text-sm font-bold text-(--text-primary) mb-1 md:mb-2">
                    Client
                  </span>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-(--background) border-2 border-(--text-primary) rounded-full shadow-md z-20 flex items-center justify-center"></div>
                  {/* Connecting dashed line */}
                  <div className="h-6 md:h-8 border-l-2 border-dashed border-gray-400 mt-1"></div>
                  {/* Small bead on the track */}
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full mt-[-6px] shadow-sm border border-gray-300"></div>
                </div>

                {/* Node 2: Requirements (Top Mid-Left) */}
                <div className="absolute top-[5%] left-[35%] flex flex-col items-center">
                  <span className="text-[10px] md:text-sm font-bold text-(--text-primary) mb-1 md:mb-2">
                    Requirements
                  </span>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-(--background) border-2 border-(--text-primary) rounded-full shadow-md z-20 flex items-center justify-center"></div>
                  <div className="h-6 md:h-8 border-l-2 border-dashed border-gray-400 mt-1"></div>
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full mt-[-6px] shadow-sm border border-gray-300"></div>
                </div>

                {/* Node 3: Analysis (Top Mid-Right) */}
                <div className="absolute top-[10%] left-[60%] flex flex-col items-center">
                  <span className="text-[10px] md:text-sm font-bold text-(--text-primary) mb-1 md:mb-2 text-center">
                    Analysis
                  </span>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-(--background) border-2 border-(--text-primary) rounded-full shadow-md z-20 flex items-center justify-center"></div>
                  {/* Diagonal dashed line connecting to curve */}
                  <div className="w-[2px] h-6 md:h-8 border-l-2 border-dashed border-gray-400 mt-1 origin-top rotate-[-20deg]"></div>
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full mt-[2px] ml-[-12px] shadow-sm border border-gray-300 relative pointer-events-none"></div>
                </div>

                {/* Node 4: Strategy (Right Curve Top) */}
                <div className="absolute top-[28%] right-[10%] flex flex-col items-center group">
                  <span className="absolute -top-6 text-[10px] md:text-sm font-bold text-(--text-primary) whitespace-nowrap">
                    Strategy
                  </span>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-(--background) border-2 border-(--text-primary) rounded-full shadow-md z-20 flex items-center justify-center"></div>
                  <div className="absolute -left-6 top-1/2 w-6 md:w-8 border-b-2 border-dashed border-gray-400 origin-right rotate-[30deg]"></div>
                  <div className="absolute -left-7 top-[65%] w-3 h-3 md:w-4 md:h-4 bg-white rounded-full shadow-sm border border-gray-300 pointer-events-none"></div>
                </div>

                {/* Node 5: Unlabeled (Right Curve Bottom) */}
                <div className="absolute bottom-[40%] right-[8%] flex flex-col items-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-(--background) border-2 border-(--text-primary) rounded-full shadow-md z-20 flex items-center justify-center"></div>
                  <div className="absolute -left-8 top-1/2 w-8 md:w-10 border-b-2 border-dashed border-gray-400 origin-right rotate-[-30deg]"></div>
                  <div className="absolute -left-10 top-[15%] w-3 h-3 md:w-4 md:h-4 bg-white rounded-full shadow-sm border border-gray-300 pointer-events-none"></div>
                </div>

                {/* Node 6: Unlabeled (Bottom Right) */}
                <div className="absolute bottom-[10%] left-[68%] flex flex-col items-center">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full mb-[2px] ml-[-20px] shadow-sm border border-gray-300 relative pointer-events-none z-30"></div>
                  <div className="w-[2px] h-6 md:h-8 border-l-2 border-dashed border-gray-400 mb-1 origin-bottom rotate-[-25deg] ml-[-10px] z-20"></div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-(--background) border-2 border-(--text-primary) rounded-full shadow-md z-20 flex items-center justify-center"></div>
                </div>

                {/* Node 7: Unlabeled (Bottom Mid) */}
                <div className="absolute bottom-[10%] left-[40%] flex flex-col items-center">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full mb-[-6px] shadow-sm border border-gray-300 z-30 relative top-1"></div>
                  <div className="h-6 md:h-8 border-l-2 border-dashed border-gray-400 mb-1 z-20 relative"></div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-(--background) border-2 border-(--text-primary) rounded-full shadow-md z-20 flex items-center justify-center"></div>
                </div>

                {/* Node 8: Unlabeled (Bottom Left) */}
                <div className="absolute bottom-[10%] left-[12%] flex flex-col items-center">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full mb-[-6px] shadow-sm border border-gray-300 z-30 relative top-1"></div>
                  <div className="h-6 md:h-8 border-l-2 border-dashed border-gray-400 mb-1 z-20 relative"></div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-(--background) border-2 border-(--text-primary) rounded-full shadow-md z-20 flex items-center justify-center"></div>
                </div>
              </div>
            </div>
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

                <div className="space-y-3 mb-8 flex-grow">
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
            <h3 className="text-2xl md:text-3xl font-black mb-2">
              Need a custom strategy?
            </h3>
            <p className="text-(--text-secondary) font-medium">
              Talk to our lead strategist to map out your digital growth plan.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black font-bold rounded-xl shadow-lg hover:scale-105 transition-transform flex-shrink-0 w-full md:w-auto text-center"
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
              All Specialized Services
            </h2>
            <div className="w-24 h-1.5 bg-(--color-primary) mx-auto mb-6 rounded-full"></div>
            <p className="text-(--text-secondary) font-medium text-lg max-w-2xl mx-auto">
              Browse our complete A-Z directory of specialized digital
              marketing, development, and creative solutions.
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
                  desc: "We don't operate in silos. Your SEO, Ads, and Website work synergistically.",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-(--color-primary)/10 text-(--color-primary) rounded-xl flex items-center justify-center font-black text-xl">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
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
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-(--border) before:to-transparent">
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

      {/* 6. FINAL CTA SECTION WITH GRADIENT */}
      <section className="px-6 lg:px-12 py-24 md:py-32 bg-(--color-primary) relative overflow-hidden">
        {/* Subtle pattern or gradient */}
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply flex items-center justify-center opacity-30">
          <div className="w-full h-full pattern-grid-lg"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            Ready to Build Your Digital Empire?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium mb-12 max-w-2xl mx-auto">
            Let&apos;s discuss how our specialized digital services can
            integrate into a seamless strategy for your brand&apos;s explosive
            growth.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href={`tel:${CONTACT_INFO.phone.primary.replace(/\s+/g, "")}`}
              className="flex items-center justify-center w-full sm:w-auto gap-3 px-8 py-4 md:py-5 bg-black text-white rounded-xl font-bold hover:scale-105 transition-transform shadow-2xl"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center w-full sm:w-auto gap-3 px-8 py-4 md:py-5 bg-white text-black rounded-xl font-bold hover:bg-gray-100 hover:scale-105 transition-transform shadow-2xl"
            >
              Request a Proposal <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
