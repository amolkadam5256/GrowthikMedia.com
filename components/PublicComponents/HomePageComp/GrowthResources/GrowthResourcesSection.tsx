"use client";

import React from "react";
import { FileText, Target, Video, ArrowRight } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    icon: FileText,
    title: "SEO Guides & Checklists",
    desc: "Comprehensive SEO audit checklist and optimization frameworks.",
    link: "/blog/seo-audit-checklist",
  },
  {
    icon: Target,
    title: "Performance Marketing Playbooks",
    desc: "Advanced Google Ads optimization techniques and scaling strategies.",
    link: "/google-ads-agency-pune",
  },
  {
    icon: Video,
    title: "Video Marketing Strategies",
    desc: "Proven video marketing frameworks that convert viewers into customers.",
    link: "/video-production-pune",
  },
];

const GrowthResourcesSection = () => {
  return (
    <section className="py-12 md:py-16 bg-(--background) border-b border-(--border) relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[2px] bg-(--color-primary)" />
            <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-xs">
              Knowledge Hub
            </span>
            <span className="w-12 h-[2px] bg-(--color-primary)" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-(--text-primary) uppercase tracking-tighter mb-6 leading-[1.1]">
            Free Growth Resources for{" "}
            <span className="text-(--color-primary)">Pune Businesses</span>
          </h2>

          <p className="text-lg md:text-xl text-(--text-secondary) leading-relaxed max-w-3xl mx-auto">
            Knowledge is power. Access our library of actionable growth
            resources designed specifically for Pune businesses looking to
            dominate their digital space.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, idx) => (
            <Link
              href={resource.link}
              key={idx}
              className="group relative bg-(--surface) border-2 border-(--border) p-8 hover:border-(--color-primary) transition-all duration-500 hover:shadow-xl hover:shadow-(--color-primary)/10 block decoration-none"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-(--color-primary)/10 flex items-center justify-center mb-6 group-hover:bg-(--color-primary) transition-all duration-500">
                <resource.icon className="w-8 h-8 text-(--color-primary) group-hover:text-white transition-colors duration-500" />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-black text-(--text-primary) uppercase mb-3 group-hover:text-(--color-primary) transition-colors">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-(--text-secondary) leading-relaxed mb-4">
                {resource.desc}
              </p>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-(--color-primary) font-bold text-sm uppercase">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-(--color-primary)/5 rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>

        {/* Bottom Content */}
        <div
          className="max-w-4xl mx-auto bg-(--surface) border-2 border-(--border) p-8 md:p-10 hover:border-(--color-primary) transition-all duration-500"
          data-aos="fade-up"
        >
          <p className="text-base md:text-lg text-(--text-secondary) leading-relaxed mb-6">
            Our blog features in-depth case studies, industry benchmarksand
            proven frameworks used by top-performing brands. Whether you're
            exploring{" "}
            <Link
              href="/seo-services-pune"
              className="text-(--color-primary) font-bold hover:underline"
            >
              SEO services in Pune
            </Link>{" "}
            or scaling paid campaigns, our resources provide the strategic
            foundation you need.
          </p>

          <div className="w-20 h-1 bg-(--color-primary) mb-6" />

          <p className="text-base text-(--text-secondary) leading-relaxed mb-8">
            We believe in empowering businesses with transparent, data-backed
            insights-because informed clients make the best partners. Subscribe
            to our newsletter for weekly growth tactics delivered straight to
            your inbox.
          </p>

          {/* CTA Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-4 px-10 py-4 bg-(--color-primary) text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-(--color-primary-light) transition-all duration-300 shadow-xl hover:shadow-primary/30 hover:scale-105"
          >
            <span>View All Resources</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GrowthResourcesSection;
