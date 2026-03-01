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
} from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import { images } from "@/app/assets/images/images";

export const metadata: Metadata = {
  title: "Best Media Planning Buying in Pune | Custom & SEO-Friendly Websites",
  description:
    "Looking for a professional media planning buying company in Pune? We provide custom, SEO-optimized, mobile-responsive website development services for businesses. Call Now!",
  keywords:
    "Media Planning Buying in Pune, SEO Company in Pune, Digital Marketing Agency in Pune, Custom Media Planning Buying Pune",
  alternates: {
    canonical: `${CONTACT_INFO.website}/services/media-planning-buying`,
  },
  openGraph: {
    title:
      "Best Media Planning Buying in Pune | Custom & SEO-Friendly Websites",
    description:
      "Looking for a professional media planning buying company in Pune? We provide custom, SEO-optimized, mobile-responsive website development services for businesses.",
    url: `${CONTACT_INFO.website}/services/media-planning-buying`,
    siteName: "Growthik Media",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Growthik Media - Best Media Planning Buying in Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Media Planning Buying in Pune",
    description:
      "Custom, SEO-optimized, mobile-responsive website development.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function ServicePage() {
  return (
    <>
      {/* STRUCTURED DATA SCHEMA */}
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
                  "Best Media Planning Buying in Pune offering custom, SEO-friendly websites.",
                url: CONTACT_INFO.website,
                telephone: CONTACT_INFO.phone.primary,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Pune",
                  addressRegion: "Maharashtra",
                  addressCountry: "IN",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "150",
                },
              },
              {
                "@type": "Service",
                "@id": `${CONTACT_INFO.website}/services/media-planning-buying/#service`,
                name: "Media Planning Buying Services Pune",
                provider: {
                  "@id": `${CONTACT_INFO.website}/#localbusiness`,
                },
                areaServed: {
                  "@type": "City",
                  name: "Pune",
                },
                description:
                  "Custom, mobile-responsive, SEO-optimized website development services.",
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                      "@id": CONTACT_INFO.website,
                      name: "Home",
                    },
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    item: {
                      "@id": `${CONTACT_INFO.website}/services`,
                      name: "Services",
                    },
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    item: {
                      "@id": `${CONTACT_INFO.website}/services/media-planning-buying`,
                      name: "Media Planning Buying Company Pune",
                    },
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is media planning buying?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Website design involves planning, creating, and structuring websites for optimal user experience and functionality.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How long does it take to deliver results?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Typically 2-6 weeks depending on project complexity.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is SEO included in media planning buying?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Our websites are SEO-optimized from the beginning.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
      <main
        className="bg-(--background) min-h-screen pt-10 overflow-hidden text-(--text-primary) font-sans"
        id="main-content"
      >
        {/* 1. HERO SECTION */}
        <header
          className="relative w-full pt-32 pb-40 flex flex-col items-center overflow-x-hidden min-h-[100vh] bg-(--background)"
          aria-label="Hero Section"
        >
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg0ME0wLjUgMHY0MCIgc3Ryb2tlPSJyZ2JhKDE1MCwxNTAsMTUwLDAuMSkiLz48L3N2Zz4=')] opacity-50 dark:opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

          {/* Main Title Content */}
          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center px-4 md:px-6">
            <h4 className="font-extrabold uppercase tracking-[0.2em] text-xs md:text-sm text-(--text-primary) mb-6 flex items-center gap-2 bg-(--surface) border border-(--border) px-6 py-2.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-(--color-primary) animate-pulse" />
              Media Planning Buying Company In Pune
            </h4>

            <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-black mb-6 tracking-tighter leading-[0.95] uppercase text-(--text-primary) text-center drop-shadow-sm">
              Best Website
              <br /> Design Pune
            </h1>

            <div className="inline-flex items-center gap-2 border-y-2 border-(--border) py-3 mb-10">
              <p className="font-bold text-center text-(--color-primary) tracking-[0.1em] md:tracking-[0.2em] uppercase text-xs md:text-sm px-4 md:px-8">
                Custom • SEO-Friendly • Conversion-Focused
              </p>
            </div>

            <p className="text-base md:text-xl text-(--text-secondary) font-medium max-w-3xl mx-auto mb-12 leading-relaxed text-center px-2">
              Looking for a professional Media Planning Buying in Pune? We
              build high-performance digital assets that rank on Google and
              convert visitors into customers.{" "}
              <strong className="text-(--text-primary)">
                Predictable Revenue Systems, Not Just Ads.
              </strong>
            </p>

            {/* CTA section with Growthik Dash Border style */}
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 z-20">
              {/* Annotation like Growthik */}
              <div className="absolute -left-20 md:-left-32 -top-8 hidden lg:block text-(--text-primary)">
                <p className="text-lg md:text-xl transform -rotate-12 mb-2 font-medium italic">
                  Let’s Grow Together
                </p>
                <svg
                  className="w-16 h-8 transform -scale-y-100 rotate-180 opacity-60"
                  viewBox="0 0 60 30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M50,25 Q30,5 5,20 L10,15 M5,20 L15,22" />
                </svg>
              </div>

              {/* Growthik Highlighted Dash Button */}
              <div className="relative p-1.5 md:p-2 border-2 border-dashed rounded-full border-(--color-primary) bg-(--background)">
                <Link
                  href={`tel:${CONTACT_INFO.phone.primary.replace(/\s+/g, "")}`}
                >
                  <button className="rounded-full px-8 py-3.5 md:px-10 md:py-4 text-sm md:text-lg font-black text-white shadow-xl hover:shadow-(--color-primary)/30 transform hover:-translate-y-1 transition-all flex items-center gap-2 bg-(--color-primary)">
                    Call Now: {CONTACT_INFO.phone.primary}
                  </button>
                </Link>
              </div>

              <Link
                href="/contact"
                className="rounded-full px-8 py-4 md:py-5 text-sm md:text-lg font-black border-2 border-(--text-primary) bg-transparent text-(--text-primary) hover:bg-(--text-primary) hover:text-(--background) transition-all shadow-md mx-2"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>

          {/* -------------------- DEVICE MOCKUPS & 3D CIRCLES ZONE ------------------- */}
          <div className="relative mt-24 md:mt-32 w-full max-w-6xl mx-auto z-10 flex justify-center px-4 md:px-12 pointer-events-none">
            {/* Vibrant Concentric SVG Circles Background */}
            <div className="absolute bottom-[-15%] xl:bottom-[-25%] left-1/2 -translate-x-1/2 w-[220%] max-w-[1600px] h-[400px] md:h-[600px] opacity-25 dark:opacity-15 -z-10">
              <svg
                viewBox="0 0 1200 600"
                className="w-full h-full text-(--color-primary)"
              >
                <g
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  className="animate-[spin_40s_linear_infinite]"
                  style={{ transformOrigin: "center" }}
                >
                  {Array.from({ length: 15 }).map((_, i) => (
                    <ellipse
                      key={i}
                      cx="600"
                      cy="300"
                      rx={(i + 1) * 75}
                      ry={(i + 1) * 75}
                      strokeDasharray={i % 3 === 0 ? "8,12" : "none"}
                    />
                  ))}
                </g>
              </svg>
              {/* Floor Flattening Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-(--background) z-10 block"></div>
            </div>

            {/* Laptop Mockup Component */}
            <div className="relative w-full md:w-[850px] aspect-[16/10] bg-zinc-900 rounded-t-2xl md:rounded-t-3xl rounded-b-md border-4 md:border-[8px] border-zinc-800 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] p-1 md:p-2 pointer-events-auto group">
              <div className="w-full h-full bg-(--background) rounded-lg md:rounded-xl overflow-hidden relative flex flex-col border border-zinc-700">
                {/* Top Chrome UI */}
                <div className="h-6 md:h-10 bg-(--surface-secondary) flex items-center px-3 gap-2 md:gap-4 border-b border-(--border)">
                  <div className="flex gap-1 md:gap-1.5 opacity-80">
                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-[9px] md:text-sm font-mono font-medium md:font-bold w-[70%] bg-(--background) py-0.5 md:py-1 px-3 rounded text-center text-(--text-secondary) border border-(--border)">
                    {CONTACT_INFO.website.replace("https://", "")}
                  </div>
                </div>

                {/* Fake Site UI Image Overlay */}
                <div className="flex-1 relative bg-black/50 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                    alt="Enterprise Website Dashboard Mockup"
                    fill
                    priority
                    className="object-cover opacity-30 transform group-hover:scale-105 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, 850px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-(--color-primary)/20 to-transparent"></div>

                  {/* Inner Mockup Blocks */}
                  <div className="relative z-10 flex flex-col items-center justify-center p-6 md:p-12 h-full text-white text-center">
                    <Shield className="w-10 h-10 md:w-16 md:h-16 text-(--color-primary) mb-4 drop-shadow-lg" />
                    <h3 className="text-xl md:text-4xl font-black mb-3">
                      Enterprise Standard <br /> Web Development
                    </h3>
                    <div className="flex gap-4 mt-6">
                      <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg font-bold text-xs md:text-sm border border-white/20">
                        ISO 9001:2015
                      </div>
                      <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg font-bold text-xs md:text-sm border border-white/20 hover:bg-(--color-primary) transition-colors cursor-pointer">
                        View Projects
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Base Stand */}
              <div className="absolute -bottom-[20px] md:-bottom-[30px] left-1/2 -translate-x-1/2 w-[115%] h-[20px] md:h-[30px] bg-zinc-400 dark:bg-zinc-800 rounded-b-[2rem] shadow-[0_40px_60px_-10px_rgba(0,0,0,0.8)] border-t border-zinc-500 dark:border-zinc-700 flex justify-center pt-1 md:pt-1.5 z-0">
                <div className="w-20 md:w-32 h-1.5 md:h-2 bg-zinc-300 dark:bg-zinc-900 rounded-full inset-shadow-sm"></div>
              </div>

              {/* Floating Mobile Phone Mockup Overlay */}
              <div className="absolute -right-2 md:-right-12 -bottom-10 md:-bottom-20 w-[100px] md:w-[200px] aspect-[9/19] bg-zinc-900 rounded-[2rem] md:rounded-[3rem] border-[4px] md:border-[8px] border-zinc-800 shadow-[0_20px_40px_rgba(0,0,0,0.4)] p-1 z-30 pointer-events-auto transform transition-transform duration-500 hover:-translate-y-4">
                <div className="w-full h-full bg-(--background) rounded-[1.5rem] md:rounded-[2.4rem] overflow-hidden relative border border-(--border)">
                  {/* Phone Notch */}
                  <div className="absolute top-0 inset-x-0 h-4 md:h-6 bg-zinc-900 rounded-b-[1rem] mx-auto w-[45%] z-20 flex justify-center items-center">
                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-zinc-700 ml-2"></div>
                  </div>

                  {/* Phone UI Graphic */}
                  <div className="absolute inset-0 opacity-30">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
                      alt="Mobile Responsive Website Mockup"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100px, 200px"
                    />
                  </div>
                  <div className="relative z-10 flex flex-col justify-end h-full p-4 md:p-6 pb-8 md:pb-12 bg-gradient-to-t from-black via-black/60 to-transparent">
                    <p className="text-white text-[10px] md:text-sm font-bold uppercase tracking-widest leading-tight">
                      Responsive <br />{" "}
                      <span className="text-(--color-primary)">
                        Perfection.
                      </span>
                    </p>
                    <div className="w-6 md:w-10 h-1 bg-(--color-primary) mt-3 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* 2. WHY CHOOSE US */}
        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
                Professional Media Planning Buying for Modern Businesses
              </h2>
              <div className="w-20 h-1.5 bg-(--color-primary) mx-auto mb-6"></div>
              <p className="text-(--text-secondary) font-medium text-lg max-w-2xl mx-auto">
                Your digital presence is your storefront. If it’s slow, outdated,
                or poorly designed, you lose customers instantly. We build
                websites that look premium and perform exceptionally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: LayoutTemplate,
                  title: "Modern UI/UX Design",
                  desc: "Engage your audience with stunning, intuitive UI/UX that offers seamless navigation.",
                },
                {
                  icon: Search,
                  title: "SEO-Optimized Structure",
                  desc: "We deliver Media Planning Buying services with keyword-optimized headings, internal linking architecture, and schema markup.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile-Responsive Layout",
                  desc: "Flawless performance across all devices, ensuring your customers can reach you anywhere.",
                },
                {
                  icon: Zap,
                  title: "Fast Loading Speed",
                  desc: "Optimized code, compressed images, and efficient caching to provide blazing-fast load times.",
                },
                {
                  icon: Target,
                  title: "Conversion-Focused Design",
                  desc: "Strategic placement of CTAs, forms, and trust signals to turn visitors into paying customers.",
                },
                {
                  icon: Shield,
                  title: "Secure & Scalable Development",
                  desc: "Built with the latest technologies and security protocols to protect your data and scale up.",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-(--surface) border border-(--border) hover:border-(--color-primary)/50 transition-all duration-300 group shadow-sm hover:shadow-lg"
                >
                  <div className="w-14 h-14 bg-(--color-primary)/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-(--color-primary) group-hover:text-white text-(--color-primary) transition-colors">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-(--text-primary)">
                    {feature.title}
                  </h3>
                  <p className="text-(--text-secondary) text-sm font-medium">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. TYPES OF SERVICES */}
        <section className="px-6 lg:px-12 py-20 bg-(--background) border-y border-(--border)">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
                Custom Media Planning Buying Services
              </h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Business Media Planning Buying",
                  desc: "Professional corporate websites tailored to represent your brand identity and build credibility.",
                },
                {
                  title: "E-Commerce Website Development",
                  desc: "Sell products online with secure, scalable, and high-conversion eCommerce websites.",
                },
                {
                  title: "WordPress Website Development",
                  desc: "Flexible, SEO-friendly WordPress websites customized to your business needs.",
                },
                {
                  title: "Landing Page Design",
                  desc: "High-converting landing pages for Google Ads and social media campaigns.",
                },
                {
                  title: "Website Redesign Services",
                  desc: "Upgrade your old website with a modern, fast, SEO-optimized structure.",
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-(--surface) p-8 rounded-none border border-(--border) hover:border-(--color-primary) hover:shadow-2xl hover:shadow-(--color-primary)/10 hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 mb-6 bg-(--background) border-2 border-(--border) group-hover:border-(--color-primary) flex items-center justify-center text-(--text-primary) group-hover:text-(--color-primary) font-black text-2xl transition-colors relative">
                    {/* Tiny primary color accent dot */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-(--color-primary) rounded-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-(--text-primary)">
                    {service.title}
                  </h3>
                  <p className="text-(--text-secondary) font-medium text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SEO OPTIMIZED */}
        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
                Media Planning Buying with Built-In SEO Advantage
              </h2>
              <div className="w-20 h-1.5 bg-(--color-primary) mb-6"></div>
              <div className="bg-(--surface)/50 border-l-4 border-(--color-primary) p-4 mb-8">
                <p className="text-lg text-(--text-primary) font-bold">
                  Most agencies design websites.{" "}
                  <span className="text-(--color-primary)">
                    We design websites that rank.
                  </span>
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Keyword-optimized structure",
                  "Schema implementation",
                  "Mobile responsiveness",
                  "Technical SEO setup",
                  "Fast loading optimization",
                  "Optimized image compression",
                  "Clean URL structure",
                  "Internal linking strategy",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-(--text-secondary) font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-(--color-primary) shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-(--surface) rounded-xl border border-(--border)">
                <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-(--text-primary)">
                  We help you rank for:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Media Planning Buying in Pune",
                    "SEO Company in Pune",
                    "Digital Marketing Agency in Pune",
                    "Custom Media Planning Buying Pune",
                  ].map((kw, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-(--background) border border-(--border) rounded-full text-xs font-bold text-(--text-secondary)"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-(--color-primary)/20 to-transparent rounded-3xl transform rotate-3 scale-105 pointer-events-none"></div>
              <div className="relative bg-(--surface) border border-(--border) rounded-3xl p-8 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-3 border-b border-(--border) pb-4 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="bg-(--background) text-xs px-4 py-2 rounded-full font-mono text-(--text-secondary) w-full text-center flex items-center justify-center font-bold truncate">
                    <Globe className="w-3 h-3 mr-2 hidden sm:block" />{" "}
                    growthikmedia.com
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-8 bg-(--background) rounded-md w-3/4"></div>
                  <div className="h-4 bg-(--background) opacity-70 rounded-md w-full"></div>
                  <div className="h-4 bg-(--background) opacity-70 rounded-md w-5/6"></div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-28 bg-(--background) border border-(--border) rounded-xl"></div>
                    <div className="h-28 bg-(--background) border border-(--border) rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO SHOWCASE */}
        <section className="px-6 lg:px-12 py-24 bg-(--background) border-t border-(--border)">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
                Our Recent Media Planning Buying Projects
              </h2>
              <div className="w-24 h-1.5 bg-(--color-primary) mx-auto mb-6"></div>
              <p className="text-(--text-secondary) font-medium text-lg max-w-2xl mx-auto">
                Take a look at some of the stunning digital experiences we've
                crafted for scale-ready businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "E-Commerce Store Redesign",
                  ind: "Retail & Shopping",
                  desc: "Improved sales velocity by 150%",
                  img: images.portfolio.luxuryBranding,
                },
                {
                  name: "Corporate Business Portal",
                  ind: "Finance & B2B",
                  desc: "Reduced bounce rate by 30%",
                  img: images.portfolio.websiteRedesign,
                },
                {
                  name: "Local Service Website",
                  ind: "Healthcare",
                  desc: "Increased weekly leads by 200%",
                  img: images.portfolio.seoRealEstate,
                },
              ].map((port, i) => (
                <article
                  key={i}
                  className="bg-(--surface) rounded-[2rem] overflow-hidden shadow-lg border border-(--border)/50 hover:-translate-y-3 hover:shadow-2xl hover:shadow-(--color-primary)/10 transition-all duration-500 group flex flex-col relative"
                >
                  <figure className="h-64 w-full relative overflow-hidden m-0">
                    <Image
                      src={port.img}
                      alt={port.name}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                    {/* Industry Badge */}
                    <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md text-white px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-full shadow-sm z-10 border border-white/20">
                      {port.ind}
                    </div>

                    {/* Faint Grid Overlay (Creative Touch) */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg0ME0wLjUgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L3N2Zz4=')] opacity-20 pointer-events-none" />
                  </figure>

                  {/* Content Container */}
                  <div className="p-8 flex-1 flex flex-col bg-(--surface) relative z-10 xl:-mt-8 xl:mx-4 xl:rounded-2xl xl:shadow-xl xl:border xl:border-(--border) transition-all duration-500 group-hover:border-(--color-primary)/30">
                    <h3 className="font-black text-2xl text-(--text-primary) mb-3 leading-tight">
                      {port.name}
                    </h3>
                    <p className="text-sm font-bold text-(--color-primary) flex items-center gap-2 mt-auto">
                      <TrendingUp className="w-4 h-4" /> {port.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 font-bold text-(--color-primary) hover:text-white hover:bg-(--color-primary) transition-all duration-300 rounded-full border-2 border-(--color-primary) px-8 py-4 shadow-lg shadow-(--color-primary)/20 hover:shadow-(--color-primary)/40"
              >
                View Full Portfolio <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
                What Our Clients Say
              </h2>
              <div className="w-20 h-1.5 bg-(--color-primary) mx-auto mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rahul Deshmukh",
                  comp: "Tech Solutions Pune",
                  text: "Growthik Media transformed our business website. The new design is fast, modern, and has increased our daily leads by 3x! Highly recommended.",
                },
                {
                  name: "Priya Sharma",
                  comp: "Retail Brand",
                  text: "Best media planning buying company in Pune! Their SEO-first approach helped us rank on the first page of Google for our key products within 3 months.",
                },
                {
                  name: "Amit Joshi",
                  comp: "Real Estate Agency",
                  text: "Professional team, excellent communication, and outstanding results. They understood our complex requirements perfectly.",
                },
              ].map((t, i) => (
                <article
                  key={i}
                  className="bg-(--surface) p-8 rounded-3xl border border-(--border) relative hover:shadow-lg transition-shadow"
                >
                  <div
                    className="flex gap-1 mb-6 text-yellow-500"
                    aria-label="5 out of 5 stars"
                  >
                    {"★★★★★".split("").map((star, idx) => (
                      <span key={idx} className="text-xl" aria-hidden="true">
                        {star}
                      </span>
                    ))}
                  </div>
                  <blockquote className="text-(--text-secondary) font-medium italic mb-8 leading-relaxed">
                    "{t.text}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-(--color-primary)/10 rounded-full flex items-center justify-center font-bold text-(--color-primary) text-xl border border-(--color-primary)/20">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-(--text-primary)">
                        {t.name}
                      </h3>
                      <p className="text-xs font-bold uppercase tracking-wider text-(--text-secondary)">
                        {t.comp}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. IMPORTANCE OF CUSTOM DESIGN & 6. PROCESS */}
        <section className="px-6 lg:px-12 py-20 bg-(--surface)">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Importance */}
            <div>
              <h2 className="text-3xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
                Importance of Custom Media Planning Buying for Business Growth
              </h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>
              <div className="space-y-6">
                {[
                  {
                    title: "Strong Brand Identity",
                    desc: "Stand out with a unique layout tailored to your brand.",
                  },
                  {
                    title: "Better User Experience",
                    desc: "Improve navigation and engagement.",
                  },
                  {
                    title: "Higher Conversion Rate",
                    desc: "Turn visitors into leads and customers.",
                  },
                  {
                    title: "Scalability",
                    desc: "Grow your website as your business expands.",
                  },
                  {
                    title: "Competitive Edge",
                    desc: "Stay ahead in Pune’s competitive digital market.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="mt-1 w-10 h-10 rounded-full bg-(--surface) border border-(--border) flex items-center justify-center shrink-0 group-hover:bg-(--color-primary) group-hover:text-white transition-colors text-(--color-primary)">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-(--text-primary)">
                        {item.title}
                      </h3>
                      <p className="text-(--text-secondary) font-medium text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="bg-(--background) p-8 md:p-10 rounded-3xl shadow-xl border border-(--border)">
              <h2 className="text-3xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
                Our Media Planning Buying Process
              </h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>
              <div className="space-y-4">
                {[
                  "Requirement Analysis",
                  "Competitor Research",
                  "Wireframe & Design Planning",
                  "UI/UX Design",
                  "Development & Coding",
                  "SEO Optimization",
                  "Testing & Launch",
                  "Maintenance & Support",
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 bg-(--surface) rounded-xl border border-(--border) hover:border-(--color-primary)/30 transition-colors"
                  >
                    <div className="w-8 h-8 bg-(--background) border border-(--border) text-(--color-primary) rounded-full flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                      {idx + 1}
                    </div>
                    <span className="font-bold text-(--text-primary) text-sm">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-(--text-secondary) text-center font-bold tracking-widest uppercase">
                We ensure every website is secure, fast, and conversion-ready
                before going live.
              </p>
            </div>
          </div>
        </section>

        {/* 7. WHY WE ARE THE BEST & 8. LOCAL */}
        <section className="px-6 lg:px-12 py-20 bg-(--surface-secondary) border-t border-(--border)">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 justify-between">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight text-(--text-primary)">
                Why Choose Growthik Media
              </h2>
              <p className="text-(--color-primary) font-bold text-xl mb-4 tracking-wide">
                We are not just designers — we are growth partners.
              </p>
              <p className="text-(--text-secondary) font-medium mb-10 leading-relaxed max-w-lg">
                Founded with a core mission to empower brands digitally, our
                expert team combines creative web design with data-driven SEO.
                We have proudly served industries across healthcare, real
                estate, retail, and tech—building tailored digital experiences
                that rank and convert.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Monitor, stat: "350+", label: "Projects Delivered" },
                  { icon: Users, stat: "400+", label: "Happy Clients" },
                  { icon: Award, stat: "7+ Years", label: "Experience" },
                  { icon: Target, stat: "40+", label: "Expert Team Members" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-(--surface) p-4 rounded-xl border border-(--border) shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-(--background) rounded-lg flex items-center justify-center border border-(--border-light) shrink-0 text-(--color-primary)">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-black leading-none text-(--text-primary)">
                        {item.stat}
                      </div>
                      <div className="text-xs text-(--text-tertiary) mt-1 font-bold uppercase tracking-wider">
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="md:w-1/3 bg-(--surface) text-(--text-primary) p-8 rounded-3xl shadow-xl border border-(--border) relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-(--color-primary)/5 rounded-bl-[100px] pointer-events-none" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <MapPin
                  className="text-(--color-primary) w-8 h-8"
                  aria-hidden="true"
                />
                <h3 className="text-2xl font-black uppercase">
                  Local Expertise
                </h3>
              </div>
              <p className="text-(--text-secondary) font-medium mb-6 relative z-10">
                We serve businesses across Pune:
              </p>
              <nav
                aria-label="Local Areas Navigation"
                className="flex flex-wrap gap-3 relative z-10"
              >
                {[
                  { loc: "Baner", slug: "website-design-company-in-baner" },
                  { loc: "Wakad", slug: "website-design-company-in-wakad" },
                  { loc: "Hinjewadi", slug: "seo-company-in-hinjewadi" },
                  { loc: "Aundh", slug: "website-design-company-in-aundh" },
                  { loc: "Kothrud", slug: "website-design-company-in-kothrud" },
                  { loc: "Hadapsar", slug: "website-development-in-hadapsar" },
                  { loc: "Viman Nagar", slug: "web-design-in-viman-nagar" },
                  { loc: "PCMC", slug: "website-design-in-pcmc" },
                ].map((locData, i) => (
                  <Link
                    key={i}
                    href={`/${locData.slug}`}
                    className="px-4 py-2 bg-(--background) border border-(--border) rounded-lg text-xs font-bold uppercase tracking-wider text-(--text-secondary) hover:text-(--color-primary) hover:border-(--color-primary)/50 hover:shadow-sm transition-all text-center"
                    aria-label={`Media Planning Buying Services in ${locData.loc}`}
                  >
                    {locData.loc}
                  </Link>
                ))}
              </nav>
              <p className="mt-8 pt-6 border-t border-(--border) text-sm font-black text-(--color-primary) uppercase tracking-widest text-center relative z-10">
                Helping businesses dominate Pune’s digital space.
              </p>
            </aside>
          </div>
        </section>

        {/* 9. CASE STUDIES & RESULTS */}
        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
              Case Studies & Results
            </h2>
            <div className="w-20 h-1.5 bg-(--color-primary) mx-auto mb-12"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  stat: "200%",
                  label: "Increase organic traffic by 200%",
                  icon: TrendingUp,
                },
                {
                  stat: "40%",
                  label: "Reduce bounce rate by 40%",
                  icon: Target,
                },
                {
                  stat: "60%",
                  label: "Improve lead conversion by 60%",
                  icon: Users,
                },
                {
                  stat: "#1",
                  label: "Rank on Google’s first page",
                  icon: Search,
                },
              ].map((res, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl border border-(--border) bg-(--surface) hover:-translate-y-2 hover:border-(--color-primary)/50 transition-all duration-300 group shadow-sm"
                >
                  <div className="w-16 h-16 bg-(--background) rounded-full flex items-center justify-center mx-auto mb-6 border border-(--border) group-hover:scale-110 transition-transform">
                    <res.icon className="w-8 h-8 text-(--color-primary)" />
                  </div>
                  <div className="text-4xl font-black mb-3 text-(--text-primary)">
                    {res.stat}
                  </div>
                  <p className="text-(--text-secondary) font-bold text-sm tracking-wide">
                    {res.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. PRICING & 11. FAQ */}
        <section className="px-6 lg:px-12 py-20 bg-(--surface) border-t border-(--border)">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Pricing */}
            <div className="bg-(--background) p-8 md:p-12 rounded-3xl border border-(--border) shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-(--color-primary)/5 rounded-bl-full pointer-events-none" />

              <h2 className="text-3xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
                Media Planning Buying Pricing
              </h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>
              <p className="text-(--text-primary) mb-6 font-bold text-lg">
                Media Planning Buying cost depends on several key factors:
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Number of pages",
                  "Custom features",
                  "E-commerce integration",
                  "SEO requirements",
                  "Content development",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 font-medium text-(--text-secondary)"
                  >
                    <CheckCircle2 className="w-5 h-5 text-(--color-primary)" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-(--text-secondary) font-medium mb-8">
                We offer affordable media planning buying packages tailored for
                startups, SMEs, and enterprises.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-colors w-full sm:w-auto shadow-lg shadow-(--color-primary)/20"
              >
                Get a Customized Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-3xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
                FAQs
              </h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>
              <div className="space-y-4">
                {[
                  {
                    q: "What is media planning buying?",
                    a: "Website design involves planning, creating, and structuring websites for optimal user experience and functionality.",
                  },
                  {
                    q: "How long does it take to deliver results?",
                    a: "Typically 2-6 weeks depending on project complexity.",
                  },
                  {
                    q: "Is SEO included in media planning buying?",
                    a: "Yes. Our websites are SEO-optimized from the beginning.",
                  },
                  {
                    q: "Do you provide website maintenance?",
                    a: "Yes. We offer ongoing website maintenance and support.",
                  },
                ].map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-(--background) p-6 rounded-2xl border border-(--border) cursor-pointer [&_summary::-webkit-details-marker]:hidden transition-all hover:border-(--color-primary)/30"
                  >
                    <summary className="flex justify-between items-center font-bold text-lg outline-none text-(--text-primary)">
                      {faq.q}
                      <span className="transition group-open:rotate-180 bg-(--surface) p-2 rounded-full border border-(--border)">
                        <ChevronDown className="w-4 h-4 text-(--text-secondary)" />
                      </span>
                    </summary>
                    <p className="text-(--text-secondary) font-medium mt-4 leading-relaxed bg-(--surface) p-4 rounded-xl border border-(--border)/50">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 12. CTA SECTION */}
        <section
          className="px-6 lg:px-12 py-24 relative overflow-hidden border-t border-(--border) bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${images.bg.src})` }}
        >
          {/* Optional overlay to soften the background image slightly */}
          <div className="absolute inset-0 bg-(--background)/60 pointer-events-none z-0"></div>

          <div className="absolute -top-40 -right-40 w-96 h-96 bg-(--color-primary)/20 blur-[100px] rounded-full pointer-events-none z-0"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-(--color-primary)/10 blur-[100px] rounded-full pointer-events-none z-0"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10 bg-(--surface) p-10 md:p-16 rounded-[3rem] border border-(--border) shadow-2xl shadow-(--color-primary)/5">
            <div className="inline-block bg-(--color-primary)/10 text-(--color-primary) px-4 py-1.5 rounded-full font-black text-sm tracking-widest mb-6 animate-pulse border border-(--color-primary)/20">
              LIMITED TIME: FREE SEO AUDIT INCLUDED
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-(--text-primary) mb-6 uppercase tracking-tight">
              Contact Us
            </h2>
            <p className="text-xl md:text-2xl text-(--text-secondary) font-medium mb-12 max-w-2xl mx-auto">
              Partner with the best Media Planning Buying in Pune to build a
              high-performance digital presence.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
              <Link
                href={`tel:${CONTACT_INFO.phone.primary.replace(/\s+/g, "")}`}
                className="flex items-center justify-center w-full sm:w-auto gap-3 px-8 py-5 bg-(--text-primary) text-(--background) rounded-2xl font-black text-lg hover:scale-[1.02] hover:-translate-y-1 transition-all shadow-xl"
              >
                Call: {CONTACT_INFO.phone.primary}
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center w-full sm:w-auto gap-3 px-8 py-5 bg-(--surface) text-(--text-primary) border-2 border-(--border) rounded-2xl font-black text-lg hover:border-(--text-primary) hover:scale-[1.02] hover:-translate-y-1 transition-all shadow-sm"
              >
                Book Free Consultation
              </Link>
            </div>

            <address className="flex flex-wrap justify-center gap-8 text-(--text-secondary) text-sm font-bold uppercase tracking-wider bg-(--background) py-4 px-8 rounded-2xl inline-flex w-auto mx-auto border border-(--border) not-italic shadow-inner">
              <div className="flex items-center gap-2">
                <MapPin
                  className="w-5 h-5 text-(--color-primary)"
                  aria-hidden="true"
                />{" "}
                Baner, Pune
              </div>
              <div className="flex items-center gap-2">
                <Search
                  className="w-5 h-5 text-(--color-primary)"
                  aria-hidden="true"
                />{" "}
                Get Instant Quote
              </div>
              <a
                href={`mailto:${CONTACT_INFO.email.info}`}
                className="flex items-center gap-2 hover:text-(--color-primary) transition-colors"
                aria-label={`Email us at ${CONTACT_INFO.email.info}`}
              >
                <MailIcon
                  className="w-5 h-5 text-(--color-primary)"
                  aria-hidden="true"
                />{" "}
                {CONTACT_INFO.email.info}
              </a>
            </address>
          </div>
        </section>

        {/* 13. FOOTER NAV (SEO Strategy) */}
        <footer className="px-6 lg:px-12 py-8 bg-(--surface) text-center text-xs font-bold uppercase tracking-widest border-t border-(--border)">
          <nav
            aria-label="Footer Contextual Links"
            className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            <Link
              href="/blog/importance-of-seo"
              className="text-(--text-secondary) hover:text-(--color-primary) transition-colors"
            >
              Importance of SEO for Website
            </Link>
            <span className="text-(--border)" aria-hidden="true">
              •
            </span>
            <Link
              href="/blog/how-to-choose-website-design-company"
              className="text-(--text-secondary) hover:text-(--color-primary) transition-colors"
            >
              How to Choose Media Planning Buying Company
            </Link>
            <span className="text-(--border)" aria-hidden="true">
              •
            </span>
            <Link
              href="/blog/website-cost-in-pune"
              className="text-(--text-secondary) hover:text-(--color-primary) transition-colors"
            >
              Website Cost in Pune
            </Link>
            <span className="text-(--border)" aria-hidden="true">
              •
            </span>
            <Link
              href="/services/seo"
              className="text-(--text-secondary) hover:text-(--color-primary) transition-colors"
            >
              SEO Services
            </Link>
          </nav>
        </footer>
      </main>
    </>
  );
}

// Inline Mail icon helper
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
