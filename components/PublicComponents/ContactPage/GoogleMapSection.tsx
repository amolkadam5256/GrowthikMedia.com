"use client";

import React from "react";
import { MapPin } from "lucide-react";

export default function GoogleMapSection() {
  return (
    <div className="rounded-3xl bg-(--surface) border border-(--border) p-6 sm:p-10 shadow-2xl transition-all relative overflow-hidden group">
      {/* Background Decorative element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-red-600/10 transition-all"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-6 mb-10 pb-6 border-b border-(--border)">
          <div className="rounded-2xl w-14 h-14 bg-red-600 flex items-center justify-center shrink-0 shadow-lg shadow-red-600/20">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight">
              Locate <span className="text-red-600">Us</span>
            </h2>
            <p className="text-(--text-secondary) font-bold uppercase tracking-widest text-[10px] mt-1">
              Growthik Media HQ
            </p>
          </div>
        </div>

        <div className="mb-10">
          <p className="text-(--text-primary) font-black text-xl leading-relaxed uppercase tracking-tight italic">
            Akshay Palace Cooperative
            <br />
            Housing Society
          </p>
          <p className="text-(--text-secondary) font-bold text-sm mt-2">
            Warje Malwadi Road, Warje
            <br />
            Pune – 411058, Maharashtra, India
          </p>
        </div>

        <div className="rounded-2xl border border-(--border) h-[350px] relative bg-(--surface-secondary) grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden shadow-inner">
          <iframe
            src="https://maps.google.com/maps?q=18.480682998115928,73.80476268274838&t=m&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Growthik Media Location"
            className="w-full h-full relative z-10 opacity-80 hover:opacity-100 transition-opacity"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
