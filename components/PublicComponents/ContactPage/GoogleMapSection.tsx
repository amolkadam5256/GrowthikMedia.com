"use client";

import React from "react";
import { MapPin } from "lucide-react";

export default function GoogleMapSection() {
  return (
    <div className="rounded-sm bg-black dark:bg-black border-2 border-black dark:border-white/20 p-2 shadow-[8px_8px_0_#dc2626]">
      <div className="rounded-sm bg-white dark:bg-zinc-900 p-6 sm:p-10 border-2 border-black dark:border-white/20">
        <div className="flex items-start gap-5 mb-8 border-b-4 border-red-600 pb-6">
          <div className="rounded-sm w-14 h-14 bg-black flex items-center justify-center shadow-[4px_4px_0_#dc2626] flex-shrink-0">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-black text-black dark:text-white uppercase tracking-tight">
              Locate Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-bold uppercase tracking-widest text-xs mt-1">
              Growthik Media HQ
            </p>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-black dark:text-white font-black text-lg leading-relaxed uppercase">
            Akshay Palace Cooperative
            <br />
            Housing Society
            <br />
            <span className="text-gray-500 dark:text-gray-400 font-bold">
              Warje Malwadi Road
              <br />
              Warje, Pune – 411058
              <br />
              India
            </span>
          </p>
        </div>

        <div className="rounded-sm border-4 border-black dark:border-white/20 h-[300px] relative bg-gray-100 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=18.480682998115928,73.80476268274838&t=m&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Growthik Media Location"
            className="w-full h-full relative z-10"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
