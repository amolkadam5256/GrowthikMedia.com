"use client";

import React from "react";
import {
  ShoppingCart,
  Heart,
  Building2,
  GraduationCap,
  Factory,
  Palmtree,
} from "lucide-react";
import Link from "next/link";

const industries = [
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    desc: "Scale revenue through conversion-optimized funnels and performance ads.",
    link: "/services/performance-marketing",
  },
  {
    icon: Heart,
    title: "Healthcare & Wellness",
    desc: "Build patient trust with local SEO and targeted digital campaigns.",
    link: "/services/seo",
  },
  {
    icon: Building2,
    title: "Real Estate & Construction",
    desc: "Generate qualified leads via Google Ads and strategic content marketing.",
    link: "/services/google-ads",
  },
  {
    icon: GraduationCap,
    title: "Education & EdTech",
    desc: "Dominate competitive niches with data-driven SEO and paid acquisition.",
    link: "/services/seo",
  },
  {
    icon: Factory,
    title: "Manufacturing & B2B",
    desc: "Establish B2B authority with technical content and LinkedIn strategies.",
    link: "/services/digital-marketing",
  },
  {
    icon: Palmtree,
    title: "Hospitality & Tourism",
    desc: "Maximize bookings through local SEO, reviews and conversion optimization.",
    link: "/services/seo",
  },
];

const IndustriesWeServeSection = () => {
  return (
    <section className="py-12 md:py-16 bg-(--background) border-b border-(--border) relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[2px] bg-(--color-primary)" />
            <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-xs">
              Industry Expertise
            </span>
            <span className="w-12 h-[2px] bg-(--color-primary)" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-(--text-primary) uppercase tracking-tighter mb-6 leading-[1.1]">
            Industries We Serve in{" "}
            <span className="text-(--color-primary)">Pune</span>
          </h2>

          <p className="text-lg md:text-xl text-(--text-secondary) leading-relaxed max-w-4xl mx-auto">
            As Pune's leading{" "}
            <Link
              href="/services/digital-marketing"
              className="text-(--color-primary) font-bold hover:underline"
            >
              digital marketing agency
            </Link>
            , we deliver industry-specific growth strategies across diverse
            sectors. Our{" "}
            <Link
              href="/services/performance-marketing"
              className="text-(--color-primary) font-bold hover:underline"
            >
              performance marketing
            </Link>{" "}
            expertise spans multiple industries, each with tailored approaches
            that drive measurable ROI.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, idx) => (
            <Link
              href={industry.link}
              key={idx}
              className="group relative bg-(--surface) border-2 border-(--border) p-8 hover:border-(--color-primary) transition-all duration-500 hover:shadow-lg hover:shadow-(--color-primary)/10 block decoration-none"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-(--color-primary)/10 flex items-center justify-center mb-6 group-hover:bg-(--color-primary) transition-all duration-500">
                <industry.icon className="w-8 h-8 text-(--color-primary) group-hover:text-white transition-colors duration-500" />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-black text-(--text-primary) uppercase mb-3 group-hover:text-(--color-primary) transition-colors duration-300">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-(--text-secondary) leading-relaxed">
                {industry.desc}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-(--color-primary)/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>

        {/* Bottom Content */}
        <div className="mt-12 text-center max-w-3xl mx-auto" data-aos="fade-up">
          <p className="text-base text-(--text-secondary) leading-relaxed">
            Every industry demands unique positioning. We craft tailored{" "}
            <Link
              href="/services/seo"
              className="text-(--color-primary) font-bold hover:underline"
            >
              SEO services in Pune
            </Link>{" "}
            that align with your market dynamics, customer behaviorand
            competitive landscape. Whether you're a startup or an established
            enterprise, our Pune-based team delivers measurable ROI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServeSection;
