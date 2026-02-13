"use client";

import React from "react";
import { Search } from "lucide-react";
import Link from "next/link";

const StickyCTA = () => {
  return (
    <div className="fixed right-8 bottom-8 z-[100] group">
      <div className="absolute inset-0 rounded-full bg-(--color-primary) animate-ping opacity-20 group-hover:animate-none"></div>
      <div className="absolute inset-0 rounded-full bg-(--color-primary) animate-pulse opacity-40 group-hover:animate-none"></div>

      <Link
        href="/contact"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-(--color-primary) text-white shadow-[0_10px_30px_rgba(217,11,28,0.4)] transition-all duration-500 hover:scale-110 active:scale-90 overflow-visible"
        aria-label="Get Free Audit"
      >
        <Search className="w-7 h-7" />

        {/* Floating Label */}
        <span className="absolute right-full mr-4 px-4 py-2 bg-white text-(--color-primary) text-sm font-bold rounded-xl opacity-0 transition-all duration-300 pointer-events-none translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap shadow-xl border border-gray-100 uppercase tracking-widest">
          Get Free Audit
        </span>
      </Link>
    </div>
  );
};

export default StickyCTA;
