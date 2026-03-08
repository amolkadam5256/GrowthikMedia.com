"use client";

import React from "react";
import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

export default function SocialMediaConnect() {
  return (
    <div className="rounded-sm bg-red-600 dark:bg-black p-8 sm:p-10 border-2 border-black dark:border-white/20 text-center shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#fff] transition-shadow">
      <h2 className="text-2xl font-black text-white dark:text-white mb-8 uppercase tracking-widest">
        Connect.
      </h2>
      <div className="flex justify-center flex-wrap gap-4">
        {[
          {
            icon: Instagram,
            name: "Instagram",
            link: CONTACT_INFO.social.instagram,
            color: "text-[#E1306C] group-hover:text-white",
          },
          {
            icon: Linkedin,
            name: "LinkedIn",
            link: CONTACT_INFO.social.linkedin,
            color: "text-[#0A66C2] group-hover:text-white",
          },
          {
            icon: Facebook,
            name: "Facebook",
            link: CONTACT_INFO.social.facebook,
            color: "text-[#1877F2] group-hover:text-white",
          },
          {
            icon: Youtube,
            name: "YouTube",
            link: CONTACT_INFO.social.youtube,
            color: "text-[#FF0000] group-hover:text-white",
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
              className="group rounded-sm w-14 h-14 bg-white dark:bg-zinc-900 border-2 border-black dark:border-white/20 flex items-center justify-center hover:bg-black dark:hover:bg-white hover:-translate-y-2 hover:-translate-x-2 transition-all shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]"
            >
              <Icon
                className={`w-6 h-6 ${social.color} dark:group-hover:text-black transition-colors`}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
