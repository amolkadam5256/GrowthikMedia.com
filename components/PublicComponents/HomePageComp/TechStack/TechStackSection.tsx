"use client";

import React from "react";
import { BarChart3, Search, Users, Palette, Zap } from "lucide-react";
import Link from "next/link";

const techStack = [
  {
    icon: Search,
    category: "SEO Intelligence",
    tools: "Semrush, Ahrefs, GSC",
    desc: "Deep keyword intelligence and competitor gap analysis.",
    link: "/services/seo",
    linkText: "SEO Service",
  },
  {
    icon: BarChart3,
    category: "Analytics & Behavior",
    tools: "GA4, Microsoft Clarity",
    desc: "User behavior tracking to eliminate ad spend wastage.",
    link: "/services/performance-marketing",
    linkText: "Performance Mktg",
  },
  {
    icon: Users,
    category: "CRM & Automation",
    tools: "HubSpot, Zapier",
    desc: "Seamless lead management and workflow automation.",
    link: "/services/lead-generation",
    linkText: "Lead Gen",
  },
  {
    icon: Palette,
    category: "Creative Suite",
    tools: "Adobe CC, Canva Ent.",
    desc: "Rapid high-conversion creative iteration and testing.",
    link: "/services/social-media-marketing",
    linkText: "Creative Strategy",
  },
];

const TechStackSection = () => {
  return (
    <section className="py-12 md:py-16 bg-(--surface) border-b border-(--border) relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div data-aos="fade-right">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-(--color-primary)" />
              <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-xs">
                Technology Stack
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-(--text-primary) uppercase tracking-tighter mb-6 leading-[1.1]">
              Powered by <br />
              <span className="text-(--color-primary)">World-Class</span>{" "}
              Marketing Tech
            </h2>

            <p className="text-lg text-(--text-secondary) leading-relaxed mb-8">
              We don’t guess; we track. Growthik Media deploys an
              enterprise-grade tech stack to validate every campaign decision.
              From deep keyword intelligence to user behavior analysis, our data
              pipeline ensures zero ad spend wastage.
            </p>

            <Link
              href="/services/performance-marketing"
              className="inline-flex items-center gap-2 text-(--color-primary) font-bold uppercase tracking-wider hover:text-(--text-primary) transition-colors group"
            >
              Explore our data-driven approach
              <Zap className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            data-aos="fade-left"
          >
            {techStack.map((item, idx) => (
              <div
                key={idx}
                className="bg-(--background) p-6 border border-(--border) hover:border-(--color-primary) transition-all duration-300 group rounded-none"
              >
                <div className="w-12 h-12 bg-(--color-primary)/10 flex items-center justify-center mb-4 group-hover:bg-(--color-primary) transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-(--color-primary) group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-(--text-primary) mb-2">
                  {item.category}
                </h3>
                <p className="text-xs font-mono text-(--color-primary) mb-2 uppercase tracking-wide">
                  {item.tools}
                </p>
                <p className="text-sm text-(--text-secondary) mb-3">
                  {item.desc}
                </p>
                {item.link && (
                  <Link
                    href={item.link}
                    className="text-xs font-bold text-(--text-primary) hover:text-(--color-primary) flex items-center gap-1 transition-colors uppercase tracking-wider"
                  >
                    {item.linkText} <Zap className="w-3 h-3" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
