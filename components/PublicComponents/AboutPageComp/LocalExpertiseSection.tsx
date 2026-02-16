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
        <p className="text-lg text-(--text-secondary) max-w-3xl mx-auto mb-12 leading-relaxed">
          We understand Pune’s competitive digital ecosystem — from IT hubs like{" "}
          <strong className="text-(--text-primary)">Hinjewadi</strong>, to
          retail markets like{" "}
          <strong className="text-(--text-primary)">Baner</strong> and{" "}
          <strong className="text-(--text-primary)">Wakad</strong>. Our
          local-first strategies help brands across{" "}
          <strong className="text-(--text-primary)">PCMC</strong>,{" "}
          <strong className="text-(--text-primary)">Kothrud</strong>, and the
          entire <strong className="text-(--text-primary)">Pune IT Hub</strong>{" "}
          dominate local search rankings and High-intent searches.
        </p>

        <p className="text-base text-(--text-secondary) max-w-2xl mx-auto opacity-90">
          We help brands across Hinjewadi, Baner, Wakad, Kothrud, and PCMC
          dominate local search rankings and attract high-intent customers
          through strategic Local SEO services.
        </p>
      </div>
    </section>
  );
};

export default LocalExpertiseSection;
