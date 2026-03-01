import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Code,
  Smartphone,
  Search,
  Target,
  PenTool,
  Monitor,
  CheckCircle2,
  ArrowRight,
  Zap,
  LayoutTemplate,
  Globe,
  Settings,
} from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Premium Digital Marketing & Development Services in Pune",
  description:
    "Explore our comprehensive suite of digital marketing, web development, SEO, and branding services. Transform your business into a digital powerhouse with Growthik Media.",
  keywords:
    "digital marketing services, web development, SEO services, social media marketing, branding, Pune digital agency",
  alternates: {
    canonical: `${CONTACT_INFO.website}/services`,
  },
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Technology & Development",
      icon: Code,
      desc: "Robust, scalable, and high-performance digital solutions.",
      services: [
        {
          name: "Website Development",
          link: "/website-development-company-pune/",
        },
        {
          name: "E-Commerce Solutions",
          link: "/shopify-development-company-pune/",
        },
        {
          name: "Web Applications",
          link: "/web-application-development-pune/",
        },
        {
          name: "WordPress Development",
          link: "/wordpress-development-company-pune/",
        },
      ],
    },
    {
      title: "Digital Marketing & SEO",
      icon: Target,
      desc: "Data-driven strategies to dominate search engines and social feeds.",
      services: [
        {
          name: "Search Engine Optimization (SEO)",
          link: "/seo-company-in-pune/",
        },
        {
          name: "Performance Marketing (Ads)",
          link: "/performance-marketing-agency-pune/",
        },
        {
          name: "Social Media Marketing",
          link: "/social-media-marketing-company-pune/",
        },
        { name: "Lead Generation", link: "/lead-generation-company-pune/" },
      ],
    },
    {
      title: "Branding & Creative",
      icon: PenTool,
      desc: "Crafting memorable brand identities that resonate and convert.",
      services: [
        {
          name: "Brand Identity Design",
          link: "/brand-identity-development-pune/",
        },
        { name: "Logo & UI/UX Design", link: "/logo-design-company-pune/" },
        { name: "Brand Strategy", link: "/brand-strategy-company-pune/" },
        {
          name: "Marketing Communications",
          link: "/brand-marketing-communications-pune/",
        },
      ],
    },
  ];

  return (
    <main className="bg-(--background) min-h-screen pt-24 overflow-hidden text-(--text-primary) font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 lg:px-12 py-20 lg:py-32 flex flex-col items-center text-center bg-(--surface) overflow-hidden border-b border-(--border)">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-(--color-primary)/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--background) border border-(--border) shadow-sm shadow-black/5 mb-6 text-sm font-bold text-(--color-primary) tracking-wide">
            <Globe className="w-4 h-4" />
            Comprehensive Digital Solutions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tighter leading-[1.1] uppercase text-(--text-primary)">
            Transform Your Business With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-(--color-primary) to-(--color-primary-light)">
              Growth-Driven Services
            </span>
          </h1>
          <p className="text-lg md:text-xl text-(--text-secondary) font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
            From high-conversion websites to aggressive marketing campaigns and
            stunning brand identities, we provide an end-to-end digital
            ecosystem designed explicitly to scale your revenue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg shadow-(--color-primary)/30 flex items-center justify-center gap-2 w-full sm:w-auto transform hover:-translate-y-1"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-(--surface) text-(--text-primary) font-bold rounded-xl border border-(--border) hover:border-(--color-primary) transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OUR SERVICES GRID */}
      <section className="px-6 lg:px-12 py-24 bg-(--background)">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
              Explore Our Expertise
            </h2>
            <div className="w-20 h-1.5 bg-(--color-primary) mx-auto mb-6"></div>
            <p className="text-(--text-secondary) font-medium text-lg max-w-2xl mx-auto">
              We separate ourselves from traditional agencies by operating as
              your dedicated growth engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-(--surface) border border-(--border) rounded-3xl p-8 hover:shadow-2xl hover:border-(--color-primary)/50 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-(--background) rounded-2xl flex items-center justify-center mb-8 border border-(--border) group-hover:bg-(--color-primary) group-hover:text-white group-hover:border-transparent transition-all text-(--color-primary)">
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-(--text-primary)">
                  {category.title}
                </h3>
                <p className="text-(--text-secondary) font-medium mb-8">
                  {category.desc}
                </p>
                <div className="space-y-4 flex-grow">
                  {category.services.map((service, sIdx) => (
                    <Link
                      key={sIdx}
                      href={service.link}
                      className="flex items-center justify-between p-4 rounded-xl bg-(--background) border border-(--border) hover:border-(--color-primary) hover:text-(--color-primary) transition-colors font-bold text-sm text-(--text-primary) group/link"
                    >
                      <span>{service.name}</span>
                      <ArrowRight className="w-4 h-4 text-(--text-secondary) group-hover/link:text-(--color-primary) group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FULL SERVICE DIRECTORY */}
      <section className="px-6 lg:px-12 py-24 bg-(--surface) border-y border-(--border)">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-(--border) pb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-(--text-primary)">
                All Specialized Services
              </h2>
              <div className="w-20 h-1.5 bg-(--color-primary) mb-6"></div>
              <p className="text-(--text-secondary) font-medium max-w-xl">
                Browse our complete A-Z directory of specialized digital
                marketing, development, and creative solutions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
            {[
              "Website Design",
              "Next.js Development",
              "React Development",
              "Shopify Development",
              "Website Maintenance",
              "SEO Optimization",
              "Google Ads / PPC",
              "Meta / Facebook Ads",
              "Email Marketing",
              "WhatsApp Campaigns",
              "SMS Marketing",
              "Influencer Media",
              "YouTube SEO",
              "Media Buying",
              "Political Marketing",
              "Branding Design",
              "Logo Creation",
              "Brochure Design",
              "Business Cards",
              "Letterheads",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 py-2 group cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-(--color-primary) opacity-50 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm font-bold text-(--text-secondary) group-hover:text-(--color-primary) transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="px-6 lg:px-12 py-24 bg-(--color-primary) relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply pattern-grid-lg"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            Ready to Build Your Digital Empire?
          </h2>
          <p className="text-xl text-white/90 font-medium mb-12">
            Let's discuss how our specialized services can integrate into a
            seamless strategy for your brand.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href={`tel:${CONTACT_INFO.phone.primary.replace(/\s+/g, "")}`}
              className="flex items-center justify-center w-full sm:w-auto gap-3 px-8 py-5 bg-black text-white rounded-xl font-bold hover:scale-105 transition-transform shadow-2xl"
            >
              Call Us Now
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center w-full sm:w-auto gap-3 px-8 py-5 bg-white text-black rounded-xl font-bold hover:bg-gray-100 hover:scale-105 transition-transform"
            >
              Request a Proposal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
