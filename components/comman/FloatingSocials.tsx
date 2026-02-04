"use client";

import React from "react";
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

const BehanceIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.228 15.01h-2.228v-2.013h2.228c.633 0 1.154.14 1.564.426.41.285.615.706.615 1.259 0 .518-.216.906-.648 1.162-.432.257-1.012.385-1.741.385s-1.309-.128-1.741-.385c-.432-.256-.648-.644-.648-1.162h2.228c0 .553.205.974.615 1.259.41.286.931.426 1.564.426zM7.784 8.995H6v1.834h1.784c.548 0 .973-.12 1.275-.36.302-.24.453-.591.453-1.057s-.151-.817-.453-1.057c-.302-.24-.727-.36-1.275-.36zM13.2 12.188c0 1.155-.303 2.062-.91 2.719-.607.657-1.465.986-2.576.986H3V7h7.245c1.077 0 1.91.303 2.497.909.587.606.88 1.405.88 2.397v1.882zm8.8 3.122h-4.329c.032.62.24.105.625 1.293s.894.36 1.534.36c.55 0 .973-.08 1.275-.24.302-.16.54-.45.714-.87h1.411c-.24.787-.687 1.384-1.341 1.789-.654.405-1.514.607-2.58.607-1.4 0-2.482-.42-3.245-1.25s-1.135-2.02-1.135-3.568v-.745c0-1.59.39-2.8 1.171-3.627.781-.827 1.845-1.241 3.192-1.241 1.28 0 2.29.41 3.012 1.22.722.81 1.084 1.957 1.084 3.442v.83zm-1.05-1.705c0-.573-.16-.99-.481-1.26s-.764-.42-1.32-.42c-.52 0-.93.153-1.22.46-.29.307-.46.717-.508 1.23h3.529zm1.05-3.605h-4.329v1.2h4.329v-1.2z" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    icon: <Facebook className="w-4 h-4" />,
    url: CONTACT_INFO.social.facebook,
    color: "#1877f2",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-4 h-4" />,
    url: CONTACT_INFO.social.instagram,
    color: "#e1306c",
  },
  {
    name: "Twitter",
    icon: <Twitter className="w-4 h-4" />,
    url: CONTACT_INFO.social.twitter,
    color: "#1da1f2",
  },
  {
    name: "YouTube",
    icon: <Youtube className="w-4 h-4" />,
    url: CONTACT_INFO.social.youtube,
    color: "#ff0000",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-4 h-4" />,
    url: CONTACT_INFO.social.linkedin,
    color: "#0077b5",
  },
];

export default function FloatingSocials() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-3 p-2 bg-white/5 dark:bg-black/5 backdrop-blur-xl border-y border-r border-white/10 transition-all duration-500 group">
      {SOCIAL_LINKS.map((social, index) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-9 h-9 rounded-full bg-black text-white transition-all duration-300 active:scale-95 group/item overflow-visible"
          aria-label={social.name}
          data-aos="fade-right"
          data-aos-delay={index * 100}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = `0 0 15px ${social.color}`;
            e.currentTarget.style.backgroundColor = social.color;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.backgroundColor = "black";
          }}
        >
          {/* Icon */}
          <span className="relative z-10 transition-transform duration-300">
            {social.icon}
          </span>
        </a>
      ))}
    </div>
  );
}
