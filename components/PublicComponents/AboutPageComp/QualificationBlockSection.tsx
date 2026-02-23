"use client";

import React from "react";
import { Check, X } from "lucide-react";

const QualificationBlockSection = () => {
  return (
    <section className="py-24 bg-(--background) border-b border-(--border)">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-(--color-primary)" />
            <span className="text-sm font-bold uppercase tracking-widest text-(--text-secondary)">
              Qualification
            </span>
            <div className="w-8 h-[2px] bg-(--color-primary)" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-(--text-primary) uppercase tracking-tighter mb-4">
            Is Growthik the Right{" "}
            <span className="text-(--color-primary)">
              Digital Marketing Partner in Pune?
            </span>
          </h2>
          <p className="text-lg text-(--text-secondary) font-medium">
            We partner with ambitious brands ready to scale. We are not a fit
            for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Who We Fit */}
          <div className="bg-(--surface) border border-(--border) p-8 xl:p-10 rounded-2xl shadow-lg relative overflow-hidden group hover:border-(--color-primary) transition-colors">
            <div className="absolute top-0 left-0 w-2 h-full bg-(--color-primary)" />
            <h3 className="text-2xl font-black text-(--text-primary) uppercase mb-6 flex items-center gap-3 tracking-tighter">
              <span className="w-8 h-8 rounded-full bg-(--color-primary)/20 text-(--color-primary) flex items-center justify-center shrink-0">
                <Check className="w-5 h-5" />
              </span>
              Who We Welcome
            </h3>
            <ul className="space-y-4">
              {[
                "Brands generating $50K+ yearly revenue seeking scalable solutions.",
                "Founders looking for predictable ROI, not just vanity traffic.",
                "E-commerce & B2B companies ready to invest in aggressive growth architecture.",
                "Businesses that value engineering precision and AI-automated strategies.",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm text-(--text-secondary) font-medium"
                >
                  <Check className="w-5 h-5 text-(--color-primary) shrink-0 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Don't */}
          <div className="bg-(--surface) border border-(--border) p-8 xl:p-10 rounded-2xl shadow-lg relative overflow-hidden group hover:border-(--text-primary) transition-colors">
            <div className="absolute top-0 left-0 w-2 h-full bg-(--text-primary) opacity-20 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl font-black text-(--text-primary) uppercase mb-6 flex items-center gap-3 tracking-tighter">
              <span className="w-8 h-8 rounded-full border border-(--border) text-(--text-primary) flex items-center justify-center shrink-0 group-hover:bg-(--text-primary) group-hover:text-(--background) transition-colors">
                <X className="w-5 h-5" />
              </span>
              Who We Avoid
            </h3>
            <ul className="space-y-4">
              {[
                "Startups seeking 'cheap' or 'magic' overnight success without budget.",
                "Businesses prioritizing follower counts over real bottom-line revenue.",
                "Micro-businesses that are not ready for long-term growth infrastructure.",
                "Companies looking for low-cost, template-based digital marketing without deep strategy.",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm text-(--text-secondary) font-medium"
                >
                  <X className="w-5 h-5 text-(--text-secondary) shrink-0 mt-0.5 group-hover:text-(--text-primary) transition-colors" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationBlockSection;
