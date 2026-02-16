"use client";

import React from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";

const DifferentiatorsSection = () => {
  return (
    <section className="py-24 border-b border-(--border)">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-black text-(--text-primary) uppercase tracking-tighter mb-6">
              Why Brands Choose <br />
              <span className="text-(--color-primary)">Growthik Media</span>
              <br /> Over Traditional Agencies
            </h2>
            <p className="text-(--text-secondary) mb-6 font-medium leading-relaxed max-w-lg">
              Unlike traditional digital marketing agencies in Pune, Growthik
              Media integrates AI-driven analytics, advanced conversion
              engineering, and technical SEO to build scalable growth ecosystems
              rather than isolated marketing campaigns.
            </p>
            <p className="text-(--text-secondary) mb-8 text-sm opacity-80">
              We don't just "do marketing." We build revenue infrastructure.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "ROI-Driven Strategy",
                "AI Marketing Systems",
                "Real-Time Reporting",
                "Dedicated Account Manager",
                "White-Hat SEO Practices",
                "Conversion Focused",
              ].map((diff, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-(--surface) border border-(--border)"
                >
                  <CheckCircle2 className="w-5 h-5 text-(--color-primary)" />
                  <span className="text-xs font-bold uppercase text-(--text-primary)">
                    {diff}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Stats Block */}
          <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
            <div className="bg-(--color-primary) p-8 text-white flex flex-col justify-center items-center text-center">
              <span className="text-5xl font-black mb-2">50+</span>
              <span className="text-xs font-bold uppercase tracking-widest opacity-80">
                Clients Served
              </span>
            </div>
            <div className="bg-(--surface) border border-(--border) p-8 flex flex-col justify-center items-center text-center">
              <span className="text-5xl font-black text-(--text-primary) mb-2">
                5+
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-(--text-secondary)">
                Years Experience
              </span>
            </div>
            <div className="bg-(--surface) border border-(--border) p-8 flex flex-col justify-center items-center text-center">
              <span className="text-5xl font-black text-(--text-primary) mb-2">
                98%
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-(--text-secondary)">
                Satisfaction Rate
              </span>
            </div>
            <div className="bg-[#1a1a1a] p-8 text-white flex flex-col justify-center items-center text-center border border-(--border)">
              <ShieldCheck className="w-12 h-12 mb-4 text-(--color-primary)" />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                Google & Meta <br /> Certified Partner
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
