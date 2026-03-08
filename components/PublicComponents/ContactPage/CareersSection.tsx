"use client";

import React from "react";
import { Briefcase } from "lucide-react";

export default function CareersSection() {
  return (
    <div className="rounded-sm bg-white dark:bg-zinc-900 border-4 border-black dark:border-white p-8 sm:p-10 text-center flex flex-col items-center group hover:bg-black dark:hover:bg-zinc-800 transition-colors cursor-pointer">
      <Briefcase className="w-12 h-12 text-black dark:text-white group-hover:text-white dark:group-hover:text-black mb-6 transition-colors" />
      <h2 className="text-3xl font-black text-black dark:text-white group-hover:text-white dark:group-hover:text-black mb-4 uppercase tracking-tight transition-colors">
        Careers
      </h2>
      <a
        href="mailto:info@growthikmedia.com"
        aria-label="Email us about careers"
        className="rounded-sm font-bold text-red-600 dark:text-red-500 bg-red-50 dark:bg-black border-2 border-red-600 dark:border-red-500 py-3 px-6 uppercase tracking-widest text-sm relative z-10 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-colors"
      >
        info@growthikmedia.com
      </a>
    </div>
  );
}
