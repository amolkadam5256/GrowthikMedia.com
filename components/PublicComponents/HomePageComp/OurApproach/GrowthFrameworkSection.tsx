"use client";

import React from "react";
import {
  ClipboardCheck,
  Map as MapIcon,
  Rocket,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const STEPS = [
  {
    title: "Discovery & Audit",
    benefit:
      "Technical SEO, UX audit, creative performance reviewand comprehensive ad funnel analysis.",
    description:
      "As a leading Digital Marketing Company in Pune, we begin with a deep dive into your current ecosystem. Our SEO Services in Pune experts identify toxic links, speed bottlenecksand conversion leaks before we spend a single rupee.",
    icon: ClipboardCheck,
    keywords: ["Digital Marketing Company in Pune", "SEO Services in Pune"],
  },
  {
    title: "Strategy Blueprint",
    benefit:
      "Data-backed growth roadmap with KPIs, timelinesand revenue milestones.",
    description:
      "Our Performance Marketing Agency builds a custom-engineered blueprint. We don't believe in guesswork; we set aggressive revenue targets and map out the exact path to dominate your industry.",
    icon: MapIcon,
    keywords: ["Performance Marketing Agency"],
  },
  {
    title: "High-Performance Execution",
    benefit:
      "Scalable ads, SEO, content marketing, social media & video funnels.",
    description:
      "Our Growth Marketing Experts deploy multi-channel campaigns designed to convert. We focus on high-intent traffic and performance-driven content that builds authority and drives immediate sales.",
    icon: Rocket,
    keywords: ["Growth Marketing Experts"],
  },
  {
    title: "Optimize & Scale",
    benefit:
      "Weekly optimization sprints, A/B testing, CRO improvementsand aggressive scaling.",
    description:
      "Marketing is never 'finished'. We run continuous A/B tests and conversion rate optimization (CRO) sprints to ensure your ROAS keeps climbing while we aggressively scale your winners.",
    icon: TrendingUp,
    keywords: [],
  },
];

const GrowthFrameworkSection = React.memo(() => {
  return (
    <section className="py-10 md:py-16 bg-(--surface) relative overflow-hidden border-y border-(--border)">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-(--color-primary)" />
            <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-sm">
              Our Methodology
            </span>
            <div className="w-12 h-[2px] bg-(--color-primary)" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-(--text-primary) uppercase tracking-tighter mb-6 leading-[1.1]">
            GROWTH STRATEGY{" "}
            <span className="text-(--color-primary)">FRAMEWORK</span>
          </h2>
          <p className="text-lg md:text-xl text-(--text-secondary) font-light italic max-w-2xl mx-auto leading-relaxed">
            How We Take You to the Top
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-(--surface) border border-(--border) hover:border-(--color-primary) transition-all duration-500"
                data-aos="fade-up"
              >
                {/* Step Number */}
                <div className="absolute -top-6 -right-6 text-8xl font-black text-(--color-primary)/5 group-hover:text-(--color-primary)/10 transition-colors pointer-events-none">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-(--color-primary) flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 will-change-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-black text-(--text-primary) uppercase mb-4 group-hover:text-(--color-primary) transition-colors">
                  {step.title}
                </h3>
                <p className="text-(--color-primary) font-bold text-sm mb-4 leading-tight">
                  {step.benefit}
                </p>
                <p className="text-(--text-secondary) text-sm leading-relaxed mb-6 italic opacity-80">
                  {step.description}
                </p>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-(--color-primary) w-0 group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center" data-aos="zoom-in">
          <Link
            href="/audit"
            className="group relative inline-flex items-center gap-6 px-12 py-5 border-2 border-(--color-primary) transition-all duration-500 hover:bg-(--color-primary) hover:scale-105 shadow-xl hover:shadow-primary/20"
          >
            <span className="relative z-10 text-(--color-primary) group-hover:text-white font-black uppercase tracking-[0.2em] text-sm transition-colors duration-300">
              Get Your Growth Blueprint
            </span>
            <div className="relative z-10 w-10 h-10 border-2 border-(--color-primary) group-hover:border-white bg-transparent flex items-center justify-center transition-all duration-300">
              <ArrowRight className="w-5 h-5 text-(--color-primary) group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
          </Link>

          <p className="mt-8 text-(--text-secondary) text-xs uppercase tracking-widest opacity-60">
            Trusted by Businesses Across Pune & Beyond
          </p>
        </div>
      </div>
    </section>
  );
});

GrowthFrameworkSection.displayName = "GrowthFrameworkSection";
export default GrowthFrameworkSection;
