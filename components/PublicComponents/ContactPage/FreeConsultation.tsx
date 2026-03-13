"use client";

import React from "react";

export default function FreeConsultation() {
  return (
    <div
      id="consultation"
      className="rounded-3xl p-8 sm:p-12 bg-black border border-red-600/30 text-white relative shadow-2xl transition-all group overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-red-600/20 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="rounded-full mb-6 inline-block bg-red-600 text-white font-black uppercase tracking-widest px-4 py-1.5 text-[10px] animate-pulse">
          Priority Action
        </div>

        <h2 className="text-4xl lg:text-5xl font-black mb-6 uppercase leading-tight italic">
          Free Digital
          <br />
          Growth
          <br />
          <span className="text-red-600">Audit.</span>
        </h2>

        <p className="text-gray-400 font-bold mb-8 text-lg">
          Data-backed insights to outrank competitors & scale revenue.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-10">
          {["Web Audit", "SEO Plan", "Competitors", "Social"].map(
            (item, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white/5 border border-white/10 p-3 font-bold text-[10px] uppercase tracking-wider text-center text-white backdrop-blur-sm group-hover:border-red-600/50 transition-colors"
              >
                + {item}
              </div>
            ),
          )}
        </div>
        <a
          href="https://calendar.app.google/growthik-media"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Claim your free consultation"
          className="rounded-2xl block w-full py-5 px-6 font-black bg-red-600 text-white text-center uppercase tracking-widest transition-all hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/30 active:scale-95"
        >
          Claim Consultation
        </a>
      </div>
    </div>
  );
}
