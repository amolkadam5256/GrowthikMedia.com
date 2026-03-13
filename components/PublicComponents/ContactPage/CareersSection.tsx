"use client";

import React from "react";
import { Briefcase } from "lucide-react";

export default function CareersSection() {
  return (
    <div className="rounded-3xl bg-(--surface) border border-(--border) p-8 sm:p-10 text-center flex flex-col items-center group transition-all hover:shadow-xl hover:border-red-600/30">
      <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
        <Briefcase className="w-8 h-8 text-red-600" />
      </div>
      <h2 className="text-3xl font-black text-(--text-primary) mb-4 uppercase tracking-tight">
        Careers<span className="text-red-600">.</span>
      </h2>
      <p className="text-(--text-secondary) text-sm font-medium mb-6">Want to join our expert team of growth hackers?</p>
      <a
        href="mailto:jobs@growthikmedia.com"
        aria-label="Email us about careers"
        className="rounded-2xl font-black text-white bg-red-600 border border-transparent py-4 px-8 uppercase tracking-widest text-xs transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20 active:scale-95"
      >
        Send Your Resume
      </a>
    </div>
  );
}
