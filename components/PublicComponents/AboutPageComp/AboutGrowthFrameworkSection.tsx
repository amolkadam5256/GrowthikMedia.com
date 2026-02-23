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
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-(--color-primary)" />
            <span className="text-sm font-bold uppercase tracking-widest text-(--text-secondary)">
              Revenue Systems
            </span>
            <div className="w-8 h-[2px] bg-(--color-primary)" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-(--text-primary) uppercase tracking-tighter mb-6">
            Our 4-Step <br />
            <span className="text-(--color-primary)">
              Growth Engineering Framework
            </span>
          </h2>
          <p className="text-lg text-(--text-secondary) max-w-3xl mx-auto font-medium leading-relaxed">
            We follow a rigid, data-driven architecture to transform chaotic
            marketing into predictable, highly scalable revenue. Our process
            minimizes risk and maximizes your ROI.
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
              desc: "Technical SEO execution, Performance Marketing ads, and CRO logic.",
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
              <div
                className="text-5xl md:text-6xl font-black text-transparent absolute top-4 right-4 opacity-10 pointer-events-none transition-opacity group-hover:opacity-20"
                style={{ WebkitTextStroke: "2px var(--color-primary)" }}
              >
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

        <div className="max-w-4xl mx-auto text-center mt-12" data-aos="fade-up">
          <p className="text-base text-(--text-secondary) italic leading-relaxed">
            This structured methodology allows Growthik Media to deliver
            predictable ROI for businesses seeking advanced{" "}
            <strong className="text-(--text-primary)">
              Digital Marketing Services in Pune
            </strong>
            ,{" "}
            <strong className="text-(--text-primary)">
              AI-Powered SEO Optimization
            </strong>
            , and highly scalable performance marketing architectures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutGrowthFrameworkSection;
