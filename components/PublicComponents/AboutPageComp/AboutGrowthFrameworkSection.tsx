"use client";

import React from "react";
import { Clock, MapPin, Zap, TrendingUp } from "lucide-react";

const AboutGrowthFrameworkSection = () => {
  return (
    <section
      id="framework"
      className="py-24 border-b border-(--border) bg-(--surface)/30"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-black text-(--text-primary) uppercase tracking-tighter mb-4">
            Growthik Media <br />
            <span className="text-(--color-primary)">
              4-Step Growth Framework
            </span>
          </h2>
          <p className="text-(--text-secondary) max-w-2xl mx-auto">
            A systematic approach to predictable revenue growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-12">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-(--border) -z-10" />

          {[
            {
              step: "01",
              title: "Discovery & Deep Audit",
              desc: "Technical SEO, UX analysis, and funnel diagnostics.",
              icon: <Clock className="w-6 h-6" />,
            },
            {
              step: "02",
              title: "Strategy Blueprint",
              desc: "Data-backed roadmap with KPI milestones.",
              icon: <MapPin className="w-6 h-6" />,
            },
            {
              step: "03",
              title: "High-Performance Execution",
              desc: "SEO, Ads, CRO, and content funnels.",
              icon: <Zap className="w-6 h-6" />,
            },
            {
              step: "04",
              title: "Optimize & Scale",
              desc: "Continuous A/B testing and aggressive scaling.",
              icon: <TrendingUp className="w-6 h-6" />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-(--background) p-8 border border-(--border) hover:border-(--color-primary) transition-all group relative"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="w-12 h-12 bg-(--surface) border border-(--border) flex items-center justify-center mb-6 text-(--color-primary) group-hover:bg-(--color-primary) group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <div className="text-4xl font-black text-(--surface) stroke-2 stroke-(--text-disabled) absolute top-4 right-4 opacity-20 pointer-events-none">
                {item.step}
              </div>
              <h3 className="text-lg font-black text-(--text-primary) uppercase mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-(--text-secondary) leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <p className="text-base text-(--text-secondary) italic leading-relaxed">
            This structured growth methodology allows Growthik Media to deliver
            search predictable ROI for businesses looking for{" "}
            <strong className="text-(--text-primary)">
              Digital Marketing Services in Pune
            </strong>
            ,{" "}
            <strong className="text-(--text-primary)">
              Local SEO optimization
            </strong>
            , and performance-driven advertising strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutGrowthFrameworkSection;
