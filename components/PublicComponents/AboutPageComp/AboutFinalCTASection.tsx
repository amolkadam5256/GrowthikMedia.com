"use client";

import React from "react";
import Link from "next/link";

const AboutFinalCTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-(--surface) border-t border-(--border) text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-black text-(--text-primary) uppercase tracking-tighter mb-8 leading-none">
          Ready to Engineer <br />
          <span className="text-(--color-primary)">Predictable Revenue?</span>
        </h2>
        <p className="text-xl text-(--text-secondary) mb-12 max-w-2xl mx-auto font-medium">
          Stop guessing with your budget. Partner with a premier{" "}
          <strong className="text-(--text-primary)">
            Growth Engineering Company
          </strong>{" "}
          that guarantees high-performance architecture and measurable ROI.
          Schedule a deep-dive audit of your digital infrastructure today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-10 py-5 bg-(--color-primary) text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-black transition-all shadow-xl hover:shadow-(--color-primary)/30 hover:scale-105 flex items-center justify-center gap-2"
          >
            Build Your AI Growth Engine with Pune’s Performance Marketing
            Experts
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-(--text-primary) text-(--text-primary) font-black uppercase tracking-[0.2em] text-sm hover:bg-(--text-primary) hover:text-(--background) transition-all flex items-center justify-center gap-2"
          >
            Talk to Growth Architect
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutFinalCTASection;
