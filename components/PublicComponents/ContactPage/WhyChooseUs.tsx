"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <div className="rounded-3xl bg-(--surface) p-8 sm:p-10 border border-(--border) shadow-xl transition-all group overflow-hidden relative">
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-red-600/5 rounded-full blur-2xl"></div>
      
      <h2 className="text-3xl font-black text-(--text-primary) mb-8 pb-4 relative uppercase tracking-tight border-b border-(--border)">
        Why Choose <span className="text-red-600">Growthik Media</span>
      </h2>
      <p className="text-(--text-secondary) text-sm font-medium mb-6 -mt-4">
        Pune&apos;s results-driven digital marketing agency trusted by 50+ brands.
      </p>
      <ul className="space-y-3">
        {[
          "Data-Driven Marketing",
          "Expert SEO Strategies",
          "Transparent ROI Focus",
          "Customized Scaling",
          "100+ Success Stories",
        ].map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-4 group/item p-4 rounded-xl border border-transparent hover:border-red-600/20 hover:bg-red-600/5 transition-all cursor-default"
          >
            <div className="w-8 h-8 rounded-full bg-red-600/10 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-red-600" />
            </div>
            <span className="font-bold uppercase tracking-wider text-xs text-(--text-primary)">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
