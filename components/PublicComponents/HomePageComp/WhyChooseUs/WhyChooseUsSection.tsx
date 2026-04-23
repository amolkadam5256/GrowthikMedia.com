"use client";

import React from "react";
import Link from "next/link";
import {
  Target,
  UserCheck,
  FileText,
  Award,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Counter } from "@/components/PublicComponents/ui/GCounter";

const USP_ITEMS = [
  {
    icon: Target,
    title: "ROI-Focused Strategies",
    description:
      "We don't count page views. We track leads, calls and sales - and that's what we report back to you every month.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Account Manager",
    description:
      "You get one point of contact who actually knows your business. No being passed around between account managers. No junior execs handling your campaigns.",
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    description:
      "Every month you get a plain-English report showing what worked, what didn't and what we're doing next. No jargon, no padded slides.",
  },
  {
    icon: Award,
    title: "Industry-Specific Expertise",
    description:
      "We've worked across healthcare, real estate, e-commerce and SaaS. When we say we know your market - we mean it, not just your niche.",
  },
  {
    icon: ShieldCheck,
    title: "100% White-Hat Methods",
    description: (
      <>
        Ethical, sustainable growth is our promise. We use only Google-approved,
        white-hat SEO and marketing techniques for long-term success.
      </>
    ),
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: (
      <>
        <Counter value={50} suffix="+ campaigns delivered" /> for real businesses across Pune and India.{" "}
        Clients who&apos;ve stayed with us for 2+ years - that&apos;s the only stat that matters.
      </>
    ),
  },
];

const WhyChooseUsSection = React.memo(() => {
  return (
    <section className="relative py-10 md:py-16 bg-(--surface) overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-[2px] bg-(--color-primary)" />
            <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-sm">
              Our Competitive Edge
            </span>
            <span className="w-12 h-[2px] bg-(--color-primary)" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-(--text-primary) mb-6 tracking-tight leading-[1.1]">
            Why Choose Our Digital Marketing Agency{" "}
            <span className="text-(--color-primary)">in Pune</span>?
          </h2>
          <p className="text-lg md:text-xl text-(--text-secondary) max-w-2xl mx-auto leading-relaxed">
            We don&apos;t just deliver services&mdash;we deliver results. Here&apos;s what sets
            us apart from the competition.
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {USP_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-(--background) border border-(--border) p-8 hover:border-(--color-primary) transition-all duration-500 hover:shadow-lg hover:shadow-(--color-primary)/10"
                data-aos="fade-up"
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="w-16 h-16  bg-(--color-primary)/10 flex items-center justify-center group-hover:bg-(--color-primary) transition-all duration-500 will-change-transform">
                    <Icon className="w-8 h-8 text-(--color-primary) group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-black text-(--text-primary) mb-3 group-hover:text-(--color-primary) transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-base text-(--text-secondary) leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-(--color-primary)/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center" data-aos="zoom-in">
          <p className="text-lg text-(--text-secondary) mb-6">
            Ready to experience the Growthik difference?
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-4 px-10 py-4 bg-(--color-primary) text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-(--color-primary-light) transition-all duration-300 shadow-xl hover:shadow-primary/30 hover:scale-105"
          >
            <span>Let&apos;s Talk Growth</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
});

WhyChooseUsSection.displayName = "WhyChooseUsSection";
export default WhyChooseUsSection;

