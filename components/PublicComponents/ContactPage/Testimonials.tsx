"use client";

import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-black text-black dark:text-white uppercase tracking-tight flex items-center gap-4 border-y-2 border-black dark:border-white/20 py-4">
        <Star className="w-8 h-8 text-black dark:text-white fill-current" />
        Feedback
      </h2>

      {/* Review 1 */}
      <div className="rounded-sm bg-white dark:bg-zinc-900 border-2 border-black dark:border-white/20 p-6 shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#fff] relative transition-colors">
        <div className="rounded-sm w-8 h-8 bg-red-600 absolute -top-4 -left-4 border-2 border-black flex items-center justify-center font-serif text-white text-2xl font-black pt-2">
          "
        </div>
        <p className="text-black dark:text-gray-300 font-bold italic mb-6 text-lg mt-2">
          Growthik Media generated high-quality leads through precision SEO and
          PPC.
        </p>
        <div className="flex items-center justify-between border-t-2 border-dashed border-gray-300 dark:border-gray-800 pt-4">
          <div>
            <h3 className="font-black text-black dark:text-white uppercase leading-none">
              Rahul Deshmukh
            </h3>
            <p className="text-xs text-red-600 font-bold uppercase tracking-widest mt-1">
              CEO, TechNova
            </p>
          </div>
        </div>
      </div>

      {/* Review 2 */}
      <div className="rounded-sm bg-black dark:bg-black border-2 border-black dark:border-red-600/50 p-6 shadow-[6px_6px_0_#dc2626] relative transition-colors">
        <div className="rounded-sm w-8 h-8 bg-white text-black absolute -top-4 -left-4 border-2 border-black flex items-center justify-center font-serif text-2xl font-black pt-2">
          "
        </div>
        <p className="font-bold italic mb-6 text-lg mt-2 text-white">
          Our website traffic increased by 300% after deploying their
          strategies. Unmatched ROI.
        </p>
        <div className="flex items-center justify-between border-t-2 border-dashed border-gray-700 pt-4">
          <div>
            <h3 className="font-black uppercase text-white leading-none">
              Sneha Patil
            </h3>
            <p className="text-xs text-red-500 font-bold uppercase tracking-widest mt-1">
              Founder, EcomStore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
