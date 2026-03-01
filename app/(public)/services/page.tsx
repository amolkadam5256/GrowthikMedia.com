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
} from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import { FilterableServices } from "./_components/FilterableServices";
import { FloatingCTAs } from "./_components/FloatingCTAs";

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

      <FloatingCTAs />

      {/* 1. HERO SECTION */}
      <section className="relative px-6 lg:px-12 py-20 lg:py-32 flex flex-col items-center text-center bg-gradient-to-b from-(--surface) to-(--background) border-b border-(--border) overflow-hidden">
        {/* Decorative Gradients */}
        <div className="absolute top-0 right-[-10%] w-[50%] h-[60%] bg-(--color-primary)/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[60%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Urgency/Notice Banner */}
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-500/10 border border-red-500/20 shadow-sm mb-8 text-sm font-bold text-red-600 hover:bg-red-500/20 transition-colors animate-pulse-slow"
          >
            <Zap className="w-4 h-4" />
            Limited Time: Get a Free SEO & Performance Audit
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tighter leading-[1.1] text-(--text-primary)">
            Digital Marketing & Website Development{" "}
            <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-(--color-primary) to-blue-500">
              Services in Pune
            </span>
          </h1>
          <p className="text-lg md:text-xl text-(--text-secondary) font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
            From highly-optimized enterprise websites to aggressive local SEO
            campaigns focusing on Hinjewadi, Wakad & Baner. We engineer
            growth-driven digital ecosystems that scale revenue.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full max-w-2xl mx-auto">
            <Link
              href="/contact"
              className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-(--color-primary-dark) transition-all duration-300 shadow-lg shadow-(--color-primary)/30 flex items-center justify-center gap-2 w-full sm:w-auto transform hover:-translate-y-1"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-(--surface) text-(--text-primary) font-bold rounded-xl border border-(--border) hover:border-(--color-primary) hover:text-(--color-primary) transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              View Our Case Studies
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-(--border)/50 max-w-4xl mx-auto">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center space-y-2 p-4 rounded-2xl bg-(--surface)/50 lg:bg-transparent"
              >
                <metric.icon className="w-6 h-6 text-(--color-primary)" />
                <span className="text-2xl font-black text-(--text-primary)">
                  {metric.value}
                </span>
                <span className="text-xs md:text-sm font-semibold text-(--text-secondary) uppercase tracking-wider text-center">
                  {metric.label}
                </span>
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
            Let's discuss how our specialized digital services can integrate
            into a seamless strategy for your brand's explosive growth.
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
