"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
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
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isLight = mounted && resolvedTheme === "light";

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

  if (!mounted) return null;

  return (
    <div
      className={`hidden lg:block fixed top-0 left-0 right-0 z-40 py-1 px-4 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        isLight
          ? "bg-(--color-primary) text-white"
          : "bg-(--background) border-b border-(--border-light) text-(--text-primary)"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Left Side: Contact Info */}
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center group cursor-pointer">
            <div
              className={`mr-2 p-1.5 rounded-lg transition-colors ${
                isLight
                  ? "bg-white/10 group-hover:bg-white/20"
                  : "bg-(--color-primary)/10 group-hover:bg-(--color-primary)/20"
              }`}
            >
              <MdPhone
                className={`${
                  isLight ? "text-white" : "text-(--color-primary)"
                }`}
              />
            </div>
            <span className="font-medium hover:opacity-80 transition-opacity">
              {CONTACT_INFO.phone.primary}
            </span>
          </div>
          <div className="flex items-center group cursor-pointer">
            <div
              className={`mr-2 p-1.5 rounded-lg transition-colors ${
                isLight
                  ? "bg-white/10 group-hover:bg-white/20"
                  : "bg-(--color-primary)/10 group-hover:bg-(--color-primary)/20"
              }`}
            >
              <MdEmail
                className={`${
                  isLight ? "text-white" : "text-(--color-primary)"
                }`}
              />
            </div>
            <span className="font-medium hover:opacity-80 transition-opacity">
              {CONTACT_INFO.email.info}
            </span>
          </div>
        </div>

        {/* Right Side: Creative Social Media Icons */}
        <div className="flex items-center space-x-2">
          {socialLinks.map((social, idx) => (
            <Link
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                isLight
                  ? "bg-white/10 text-white"
                  : "bg-(--color-primary)/5 text-(--text-primary)"
              } ${social.hoverBg} hover:text-white group socials-item`}
              aria-label={social.label}
            >
              <social.icon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />

              {/* Glossy Overlay effect on hover */}
              <span className="absolute inset-0 rounded-lg bg-linear-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
