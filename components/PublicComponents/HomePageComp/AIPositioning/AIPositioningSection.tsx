"use client";

import React from "react";
import { Cpu, Zap, Search, TrendingUp } from "lucide-react";
import Counter from "@/components/ui/Counter";

const aiFeatures = [
  {
    icon: Search,
    title: "AI SEO Optimization",
    description:
      "Our proprietary AI agents analyze search intent and semantic gaps to rank you faster than traditional SEO methods.",
  },
  {
    icon: Zap,
    title: "Predictive Ads Scaling",
    description:
      "Algorithm-driven budget allocation that predicts high-converting times and audiences, reducing your CPL by up to 45%.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Intelligence",
    description:
      "Using AI heatmaps and user flow prediction to eliminate friction and turn more website visitors into paying customers.",
  },
];

const AIPositioningSection = () => {
  return (
    <section className="relative py-16 md:py-20 bg-(--background) overflow-hidden border-b border-(--border)">
      {/* Circuit board pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-(--color-primary)" />
            <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-sm">
              <Counter value={2026} suffix=" Authority" />
            </span>
            <div className="w-12 h-[2px] bg-(--color-primary)" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-(--text-primary) uppercase tracking-tighter leading-[1.1] mb-6">
            AI Marketing Automation{" "}
            <span className="text-(--color-primary)">& Intelligence</span>
          </h2>
          <p className="text-(--text-secondary) text-lg leading-relaxed font-light italic max-w-2xl mx-auto">
            "We don't just use digital tools; we build AI-driven architectures
            that automate and accelerate your business growth."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {aiFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="mb-6 inline-block p-5 border border-(--border) bg-(--background) group-hover:border-(--color-primary) group-hover:shadow-lg group-hover:shadow-(--color-primary)/10 transition-all duration-500">
                <feature.icon className="w-8 h-8 text-(--color-primary)" />
              </div>
              <h3 className="text-2xl font-black text-(--text-primary) uppercase tracking-tight mb-4 group-hover:text-(--color-primary) transition-colors">
                {feature.title}
              </h3>
              <p className="text-(--text-secondary) leading-relaxed font-medium">
                {feature.description}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-(--color-primary)/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIPositioningSection;
