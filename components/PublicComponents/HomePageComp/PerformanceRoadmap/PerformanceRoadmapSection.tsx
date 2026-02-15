"use client";

import React from "react";
import { Rocket, BarChart2, Crown, ChevronRight } from "lucide-react";
import Link from "next/link";

const roadmapDisplay = [
  {
    month: "Month 1",
    title: "Foundation & Audit",
    icon: BarChart2,
    link: "/audit",
    linkText: "Get Free Audit",
    points: [
      "Technical Website Audit",
      "Broken Link Fixes",
      "Conversion Pixel Setup",
      "Ad Account Restructuring",
    ],
  },
  {
    month: "Month 2",
    title: "Optimization & Scale",
    icon: Rocket,
    link: "/services/performance-marketing",
    linkText: "Scale Now",
    points: [
      "Targeted Campaign Launch",
      "A/B Creative Testing",
      "Audience Segmentation",
      "CPA Reduction Strategy",
    ],
  },
  {
    month: "Month 3",
    title: "Authority & ROI",
    icon: Crown,
    link: "/services/brand-strategy",
    linkText: "Build Authority",
    points: [
      "Winner Channel Scaling",
      "SEO Content Clusters",
      "Revenue Stream Stabilization",
      "Long-term Growth Mapping",
    ],
  },
];

const PerformanceRoadmapSection = () => {
  return (
    <section className="py-12 md:py-16 bg-(--surface) border-t border-(--border) relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[2px] bg-(--color-primary)" />
            <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-xs">
              Execution Strategy
            </span>
            <span className="w-12 h-[2px] bg-(--color-primary)" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-(--text-primary) uppercase tracking-tighter mb-6 leading-[1.1]">
            Your 90-Day{" "}
            <span className="text-(--color-primary)">Growth Roadmap</span>
          </h2>

          <p className="text-lg md:text-xl text-(--text-secondary) max-w-3xl mx-auto">
            Success isn&apos;t accidental; it&apos;s engineered. We move you
            from onboarding to predictable ROI with a structured, data-backed
            sprint.
          </p>
        </div>

        {/* Roadmap Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-[2px] bg-(--border) z-0" />

          {roadmapDisplay.map((step, idx) => (
            <div
              key={idx}
              className="relative z-10 flex flex-col items-center text-center group"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 bg-(--background) border-2 border-(--border) flex items-center justify-center mb-6 rounded-full group-hover:border-(--color-primary) group-hover:scale-110 transition-all duration-300 shadow-lg">
                <step.icon className="w-8 h-8 text-(--color-primary)" />
              </div>

              {/* Month Tag */}
              <div className="inline-block px-3 py-1 bg-(--color-primary)/10 text-(--color-primary) text-xs font-bold uppercase tracking-wider mb-3">
                {step.month}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-(--text-primary) uppercase mb-4">
                {step.title}
              </h3>

              {/* Lists */}
              <ul className="text-left space-y-2 inline-block">
                {step.points.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex items-start gap-2 text-sm text-(--text-secondary)"
                  >
                    <ChevronRight className="w-4 h-4 text-(--color-primary) mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              {step.link && (
                <Link
                  href={step.link}
                  className="mt-4 text-xs font-bold text-(--color-primary) border-b border-(--color-primary) hover:text-(--text-primary) hover:border-(--text-primary) transition-all pb-0.5 uppercase tracking-wider"
                >
                  {step.linkText}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <Link
            href="/contact"
            className="inline-block border-2 border-(--color-primary) text-(--text-primary) px-10 py-4 font-bold uppercase tracking-wider hover:bg-(--color-primary) hover:text-white transition-all duration-300"
          >
            Start Your 90-Day Sprint
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PerformanceRoadmapSection;
