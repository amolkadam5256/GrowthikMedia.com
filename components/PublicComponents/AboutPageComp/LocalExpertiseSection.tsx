"use client";

import React from "react";
import { MapPin } from "lucide-react";

const LocalExpertiseSection = () => {
  return (
    <section className="py-24 border-b border-(--border) bg-(--surface)/30">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <MapPin className="text-(--color-primary) w-6 h-6" />
          <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-xs">
            Local Expertise
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-(--text-primary) uppercase tracking-tighter mb-8 max-w-4xl mx-auto">
          Built in Pune. <br />
          <span className="text-(--color-primary)">
            Scaling Brands Across Maharashtra.
          </span>
        </h2>
        <p className="text-lg text-(--text-secondary) max-w-3xl mx-auto mb-10 leading-relaxed">
          We understand Pune’s competitive digital ecosystem - from IT hubs like{" "}
          <strong className="text-(--text-primary)">Hinjewadi</strong>, to
          retail markets like{" "}
          <strong className="text-(--text-primary)">Baner</strong> and{" "}
          <strong className="text-(--text-primary)">Wakad</strong>. Our
          local-first strategies help brands across{" "}
          <strong className="text-(--text-primary)">PCMC</strong>,{" "}
          <strong className="text-(--text-primary)">Kothrud</strong>, and the
          entire <strong className="text-(--text-primary)">Pune region</strong>{" "}
          capture high-intent organic traffic and scale efficiently.
        </p>

        {/* Structured Proof Elements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-(--border) pt-10">
          <div className="text-center group">
            <div className="text-3xl font-black text-(--text-primary) group-hover:text-(--color-primary) transition-colors">
              100%
            </div>
            <div className="text-[10px] text-(--text-secondary) uppercase font-bold tracking-widest mt-2">
              Local Knowledge
            </div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-black text-(--text-primary) group-hover:text-(--color-primary) transition-colors">
              50+
            </div>
            <div className="text-[10px] text-(--text-secondary) uppercase font-bold tracking-widest mt-2">
              Regional Brands
            </div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-black text-(--text-primary) group-hover:text-(--color-primary) transition-colors">
              Data
            </div>
            <div className="text-[10px] text-(--text-secondary) uppercase font-bold tracking-widest mt-2">
              Backed Decisions
            </div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-black text-(--text-primary) group-hover:text-(--color-primary) transition-colors">
              ROI
            </div>
            <div className="text-[10px] text-(--text-secondary) uppercase font-bold tracking-widest mt-2">
              Focused Systems
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalExpertiseSection;
