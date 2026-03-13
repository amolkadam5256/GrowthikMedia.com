"use client";

import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight flex items-center gap-4 italic">
        <div className="w-10 h-10 rounded-xl bg-red-600/10 flex items-center justify-center">
          <Star className="w-5 h-5 text-red-600 fill-current" />
        </div>
        Client <span className="text-red-600">Feedback</span>
      </h2>

      <div className="grid gap-6">
        {/* Review 1 */}
        <div className="rounded-3xl bg-(--surface) border border-(--border) p-8 shadow-xl relative transition-all group overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-red-600/10 transition-all"></div>
          
          <div className="text-red-600 font-serif text-5xl font-black mb-4 h-8 opacity-20">"</div>
          <p className="text-(--text-primary) font-bold italic mb-8 text-lg mt-0 leading-relaxed relative z-10">
            Growthik Media generated high-quality leads through precision SEO and
            PPC.
          </p>
          <div className="flex items-center gap-4 pt-6 border-t border-(--border) relative z-10">
            <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center font-black text-red-600">RD</div>
            <div>
              <h3 className="font-black text-(--text-primary) uppercase tracking-tight leading-none text-sm">
                Rahul Deshmukh
              </h3>
              <p className="text-[10px] text-red-600 font-bold uppercase tracking-widest mt-1">
                CEO, TechNova
              </p>
            </div>
          </div>
        </div>

        {/* Review 2 */}
        <div className="rounded-3xl bg-(--surface-secondary) border border-(--border) p-8 shadow-xl relative transition-all group overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-red-600/10 transition-all"></div>

          <div className="text-red-600 font-serif text-5xl font-black mb-4 h-8 opacity-20">"</div>
          <p className="text-(--text-primary) font-bold italic mb-8 text-lg mt-0 leading-relaxed relative z-10">
            Our website traffic increased by 300% after deploying their
            strategies. Unmatched ROI.
          </p>
          <div className="flex items-center gap-4 pt-6 border-t border-(--border) relative z-10">
            <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center font-black text-red-600">SP</div>
            <div>
              <h3 className="font-black text-(--text-primary) uppercase tracking-tight leading-none text-sm">
                Sneha Patil
              </h3>
              <p className="text-[10px] text-red-600 font-bold uppercase tracking-widest mt-1">
                Founder, EcomStore
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
