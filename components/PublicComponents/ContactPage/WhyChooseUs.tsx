"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <div className="rounded-sm bg-white dark:bg-zinc-900 p-8 sm:p-10 border-2 border-black dark:border-white/20 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff] transition-colors">
      <h2 className="text-3xl font-black text-black dark:text-white mb-8 pb-4 relative uppercase tracking-tight border-b-4 border-black dark:border-white/20">
        Why Growthik<span className="text-red-600">.</span>
      </h2>
      <ul className="space-y-0">
        {[
          "Data-Driven Marketing",
          "Expert SEO Strategies",
          "Transparent ROI Focus",
          "Customized Scaling",
          "100+ Success Stories",
        ].map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-4 group border-b-2 border-black dark:border-white/20 last:border-b-0 p-4 hover:bg-black hover:text-white dark:hover:bg-white/10 transition-colors cursor-crosshair"
          >
            <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
            <span className="font-black uppercase tracking-wider text-sm text-black dark:text-white group-hover:text-white">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
