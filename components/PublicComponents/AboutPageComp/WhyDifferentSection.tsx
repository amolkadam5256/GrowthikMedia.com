"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, MapPin, Bot } from "lucide-react";

const WhyDifferentSection = () => {
  return (
    <section className="py-24 border-b border-(--border)">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-(--text-primary) uppercase tracking-tighter mb-4">
            Why Brands Choose <br />
            <span className="text-(--color-primary)">Growthik Media</span>
          </h2>
          <p className="text-(--text-secondary) max-w-2xl mx-auto font-medium">
            We don't just "do marketing." We build predictable, scalable,
            data-driven revenue infrastructures tailored for ambitious brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* AI Architecture Block */}
          <div className="bg-(--surface)/30 border border-(--border) p-8 rounded-xl hover:border-(--color-primary) transition-all">
            <h3 className="text-2xl font-black text-(--text-primary) uppercase mb-4 flex items-center gap-3">
              <Bot className="w-6 h-6 text-(--color-primary)" /> AI-Powered
              Growth Architecture
            </h3>
            <p className="text-(--text-secondary) mb-6 leading-relaxed">
              Our AI marketing systems combine semantic SEO analysis, predictive
              ad bidding, and advanced conversion tracking to dramatically
              outperform traditional agencies.
            </p>
            <div className="space-y-4">
              {[
                "Algorithmic Campaign Scaling",
                "Predictive Conversion Intelligence",
                "Semantic Next.js SEO Frameworks",
                "Automated Full-Funnel Optimization",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-(--color-primary) shrink-0" />
                  <span className="text-sm font-bold uppercase text-(--text-primary)">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Local Expertise Block */}
          <div className="bg-(--surface)/30 border border-(--border) p-8 rounded-xl hover:border-(--color-primary) transition-all">
            <h3 className="text-2xl font-black text-(--text-primary) uppercase mb-4 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-(--color-primary)" /> Regional
              Dominance Engine
            </h3>
            <p className="text-(--text-secondary) mb-6 leading-relaxed">
              Built in Pune. Scaling Brands Across Maharashtra. From{" "}
              <strong className="text-(--text-primary)">Hinjewadi Pune</strong>{" "}
              and <strong className="text-(--text-primary)">Baner Pune</strong>{" "}
              to <strong className="text-(--text-primary)">Wakad Pune</strong>,{" "}
              <strong className="text-(--text-primary)">Kothrud Pune</strong>,
              and <strong className="text-(--text-primary)">PCMC Pune</strong>,
              we deliver high-scale{" "}
              <strong className="text-(--text-primary)">
                Local SEO Agency Pune
              </strong>{" "}
              strategies and Performance Marketing campaigns.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-(--border)">
              <div>
                <span className="block text-3xl font-black text-(--text-primary)">
                  100%
                </span>
                <span className="text-[10px] text-(--text-secondary) uppercase font-bold tracking-widest">
                  Local Market Intelligence
                </span>
              </div>
              <div>
                <span className="block text-3xl font-black text-(--text-primary)">
                  50+
                </span>
                <span className="text-[10px] text-(--text-secondary) uppercase font-bold tracking-widest">
                  Regional Brands Scaled
                </span>
              </div>
              <div className="col-span-2 mt-4 bg-[#1a1a1a] p-4 text-white flex items-center gap-4 rounded-lg border border-(--border)/50">
                <ShieldCheck className="w-8 h-8 text-(--color-primary)" />
                <span className="text-xs font-bold uppercase tracking-widest leading-snug">
                  Google & Meta <br /> Certified Partner
                </span>
              </div>
            </div>
          </div>

          {/* Conversion Engineering Block */}
          <div className="bg-(--surface)/30 border border-(--border) p-8 rounded-xl hover:border-(--color-primary) transition-all">
            <h3 className="text-2xl font-black text-(--text-primary) uppercase mb-4 flex items-center gap-3">
              <Bot className="w-6 h-6 text-(--color-primary)" /> Conversion
              Engineering
            </h3>
            <p className="text-(--text-secondary) mb-6 leading-relaxed">
              We don't rely on templated solutions. As a premier Conversion Rate
              Optimization Agency, we design high-converting Next.js web
              applications that guarantee maximal engagement and measurable
              profitability.
            </p>
            <div className="space-y-4">
              {[
                "High-Performance Sales Funnels",
                "Advanced UX/UI Architecture",
                "Speed-Optimized Next.js Systems",
                "Behavioral Analytics Tracking",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-(--color-primary) shrink-0" />
                  <span className="text-sm font-bold uppercase text-(--text-primary)">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
