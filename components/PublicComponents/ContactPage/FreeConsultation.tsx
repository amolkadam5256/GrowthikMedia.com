"use client";

import React from "react";

export default function FreeConsultation() {
  return (
    <div
      id="consultation"
      className="rounded-sm p-8 sm:p-12 bg-black dark:bg-black border-4 border-red-600 text-white relative shadow-[10px_10px_0_#000] dark:shadow-[10px_10px_0_#7f1d1d] hover:translate-x-1 hover:translate-y-1 transition-transform cursor-pointer group"
    >
      <div className="rounded-sm mb-6 inline-block bg-white text-black font-black uppercase tracking-widest px-3 py-1 text-xs border-2 border-transparent group-hover:bg-red-600 group-hover:text-white transition-colors">
        Priority Action
      </div>

      <h2 className="text-4xl font-black mb-6 uppercase leading-none">
        Free Digital
        <br />
        Growth
        <br />
        <span className="text-red-600">Audit.</span>
      </h2>

      <p className="text-gray-400 font-bold mb-8">
        Data-backed insights to outrank competitors & scale revenue.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {["Web Audit", "SEO Plan", "Competitors", "Social", "Leads"].map(
          (item, idx) => (
            <div
              key={idx}
              className="rounded-sm bg-black border border-zinc-800 p-3 font-bold text-xs uppercase tracking-wider text-center text-white group-hover:border-red-600/50 transition-colors"
            >
              + {item}
            </div>
          ),
        )}
      </div>
      <a
        href="#consultation"
        aria-label="Claim your free consultation"
        className="rounded-sm block w-full py-5 px-6 font-black bg-white text-black text-center uppercase tracking-widest border-2 border-white hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors"
      >
        Claim Consultation
      </a>
    </div>
  );
}
