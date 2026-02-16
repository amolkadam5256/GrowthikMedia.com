"use client";

import React from "react";
import Link from "next/link";

const AboutFinalCTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-(--surface) border-t border-(--border) text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-black text-(--text-primary) uppercase tracking-tighter mb-8 leading-none">
          Ready to Build Your <br />
          <span className="text-(--color-primary)">Growth Engine?</span>
        </h2>
        <p className="text-xl text-(--text-secondary) mb-12 max-w-2xl mx-auto">
          Looking for a trusted{" "}
          <strong className="text-(--text-primary)">
            Digital Marketing Company in Pune
          </strong>{" "}
          that delivers measurable ROI? Book your free strategy session today
          and discover how Growthik Media transforms marketing into predictable
          growth.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-10 py-5 bg-(--color-primary) text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-(--color-primary-light) transition-all shadow-xl hover:shadow-primary/30 hover:scale-105"
          >
            Book Free Strategy Session
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-(--text-primary) text-(--text-primary) font-black uppercase tracking-[0.2em] text-sm hover:bg-(--text-primary) hover:text-(--background) transition-all"
          >
            Talk to Growth Expert
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutFinalCTASection;
