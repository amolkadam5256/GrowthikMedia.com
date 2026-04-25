"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdEmail, MdPhone } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { CONTACT_INFO } from "@/constants/contact";

export function TopBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: CONTACT_INFO.social.facebook,
      label: "Facebook",
      hoverBg: "hover:bg-[#1877F2]",
    },
    {
      icon: FaInstagram,
      href: CONTACT_INFO.social.instagram,
      label: "Instagram",
      hoverBg:
        "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]",
    },
    {
      icon: FaLinkedinIn,
      href: CONTACT_INFO.social.linkedin,
      label: "LinkedIn",
      hoverBg: "hover:bg-[#0077b5]",
    },
    {
      icon: FaTwitter,
      href: CONTACT_INFO.social.twitter,
      label: "Twitter",
      hoverBg: "hover:bg-[#1DA1F2]",
    },
    {
      icon: FaYoutube,
      href: CONTACT_INFO.social.youtube,
      label: "YouTube",
      hoverBg: "hover:bg-[#FF0000]",
    },
  ];

  return (
    <div
      className={`block fixed top-0 left-0 right-0 z-40 h-10 px-3 sm:px-4 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } bg-(--color-primary) text-white shadow`}
    >
      <div className="h-full w-full max-w-screen-2xl mx-auto flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-1 sm:gap-3 px-3 sm:px-6 lg:px-10 relative">
        {/* Left Side: Contact Info */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm leading-none">
          <a href={`tel:${CONTACT_INFO.phone.primary}`} className="flex items-center group cursor-pointer">
            <div className="mr-2 p-1 rounded-md transition-colors bg-white/15 group-hover:bg-white/25">
              <MdPhone className="text-white w-4 h-4" />
            </div>
            <span className="font-medium hover:text-white/85 transition-colors whitespace-nowrap">
              {CONTACT_INFO.phone.primary}
            </span>
          </a>
          <a href={`mailto:${CONTACT_INFO.email.info}`} className="flex items-center group cursor-pointer">
            <div className="mr-2 p-1 rounded-md transition-colors bg-white/15 group-hover:bg-white/25">
              <MdEmail className="text-white w-4 h-4" />
            </div>
            <span className="font-medium hover:text-white/85 transition-colors whitespace-nowrap">
              {CONTACT_INFO.email.info}
            </span>
          </a>
        </div>

        {/* Right Side: Creative Social Media Icons */}
        <div className="hidden md:flex items-center space-x-1.5">
          {socialLinks.map((social, idx) => (
            <Link
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative flex items-center justify-center w-7 h-7 rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg bg-white/10 text-white ${social.hoverBg.replace("text-white", "text-white")} group socials-item`}
              aria-label={social.label}
            >
              <social.icon className="w-3 h-3 transition-transform duration-300 group-hover:scale-110" />

              {/* Glossy Overlay effect on hover */}
              <span className="absolute inset-0 rounded-lg bg-linear-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
