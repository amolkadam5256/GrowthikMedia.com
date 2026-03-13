"use client";

import React from "react";
import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

export default function SocialMediaConnect() {
  return (
    <div className="rounded-3xl bg-(--surface) p-8 sm:p-10 border border-(--border) text-center shadow-xl transition-all group overflow-hidden relative">
      <div className="absolute inset-0 bg-linear-to-br from-red-600/5 to-transparent pointer-events-none"></div>
      
      <h2 className="text-2xl font-black text-(--text-primary) mb-8 uppercase tracking-widest relative z-10">
        Connect<span className="text-red-600">.</span>
      </h2>
      <div className="flex justify-center flex-wrap gap-6 relative z-10">
        {[
          {
            icon: Instagram,
            name: "Instagram",
            link: CONTACT_INFO.social.instagram,
            color: "text-[#E1306C]",
            bg: "hover:bg-[#E1306C]/10",
          },
          {
            icon: Linkedin,
            name: "LinkedIn",
            link: CONTACT_INFO.social.linkedin,
            color: "text-[#0A66C2]",
            bg: "hover:bg-[#0A66C2]/10",
          },
          {
            icon: Facebook,
            name: "Facebook",
            link: CONTACT_INFO.social.facebook,
            color: "text-[#1877F2]",
            bg: "hover:bg-[#1877F2]/10",
          },
          {
            icon: Youtube,
            name: "YouTube",
            link: CONTACT_INFO.social.youtube,
            color: "text-[#FF0000]",
            bg: "hover:bg-[#FF0000]/10",
          },
        ].map((social, idx) => {
          const Icon = social.icon;
          return (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit our ${social.name} page`}
              className={`group rounded-2xl w-14 h-14 bg-(--surface-secondary) border border-(--border) flex items-center justify-center transition-all hover:scale-110 active:scale-95 ${social.bg} hover:border-(--text-primary)/20`}
            >
              <Icon
                className={`w-6 h-6 ${social.color} transition-transform group-hover:scale-110`}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
