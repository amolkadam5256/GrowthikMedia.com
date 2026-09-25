"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import {
  Home,
  Mail,
  AlertCircle,
  ArrowRight,
  Rocket,
  Globe,
  TrendingUp,
  Megaphone,
  Target,
  Search,
  Smartphone,
  BarChart3,
  Share2,
} from "lucide-react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaPinterest,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CONTACT_INFO } from "@/constants/contact";
import { trackEvent } from "@/lib/analytics";

const readableFont =
  'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

export default function GlobalNotFound() {
  useEffect(() => {
    trackEvent("404_error", {
      page_path:
        typeof window !== "undefined" ? window.location.pathname : "unknown",
      referrer: typeof document !== "undefined" ? document.referrer : "none",
    });
  }, []);

  return (
    <div
      className="min-h-screen bg-white dark:bg-(--color-dark) text-(--color-dark) dark:text-white relative overflow-hidden transition-colors duration-500 font-sans"
      style={{ fontFamily: readableFont, wordSpacing: "0.08em" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40 md:opacity-100">
        <Rocket
          className="absolute top-[10%] left-[5%] md:left-[10%] w-8 h-8 md:w-12 md:h-12 text-[var(--color-primary)]/20 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <BarChart3
          className="absolute top-[20%] left-[2%] md:left-[5%] w-6 h-6 md:w-10 md:h-10 text-[var(--color-neutral)]/20 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <Megaphone
          className="absolute top-[15%] left-[20%] md:left-[25%] w-10 h-10 md:w-14 md:h-14 text-[var(--color-primary-light)]/10 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <Globe className="absolute top-[10%] right-[5%] md:right-[10%] w-12 h-12 md:w-16 md:h-16 text-[var(--color-primary)]/10 animate-spin-slow" />
        <Target className="absolute top-[25%] right-[15%] md:right-[20%] w-8 h-8 md:w-12 md:h-12 text-[var(--color-primary)]/20 animate-pulse" />
        <Share2
          className="absolute top-[15%] right-[2%] md:right-[5%] w-6 h-6 md:w-8 md:h-8 text-[var(--color-neutral)]/20 animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <Search
          className="absolute bottom-[20%] left-[5%] md:left-[10%] w-8 h-8 md:w-12 md:h-12 text-[var(--color-primary-light)]/20 animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <TrendingUp
          className="absolute bottom-[10%] left-[15%] md:left-[20%] w-10 h-10 md:w-14 md:h-14 text-[var(--color-primary)]/20 animate-float"
          style={{ animationDelay: "2.5s" }}
        />
        <Smartphone
          className="absolute bottom-[15%] right-[5%] md:right-[10%] w-6 h-6 md:w-10 md:h-10 text-[var(--color-neutral)]/20 animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8 md:px-6 md:py-16">
        <div className="relative mb-8 md:mb-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[100px] sm:text-[150px] md:text-[250px] font-black opacity-5 select-none animate-pulse">
              404
            </div>
          </div>
          <h1 className="relative text-[80px] sm:text-[120px] md:text-[180px] font-black leading-none text-(--color-primary) animate-pulse">
            404
          </h1>
          <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 animate-bounce">
            <AlertCircle className="w-8 h-8 md:w-16 md:h-16 text-(--color-primary)" />
          </div>
        </div>

        <div className="text-center mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-(--color-primary)">
            Lost in Digital Space?
          </h2>
          <p className="text-lg md:text-xl text-(--color-neutral) leading-relaxed">
            Looks like this page took an unexpected detour. But don&apos;t
            worry — our digital marketing experts can help you find your way
            back to success!
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <Link
            href="/"
            className="group flex items-center gap-2 px-8 py-4 bg-(--color-primary) text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:shadow-(--color-primary)/30 transition-all duration-300 hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Back to Home
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact/"
            className="group flex items-center gap-2 px-8 py-4 border-2 border-(--color-primary) text-(--color-dark) dark:text-white font-semibold rounded-full hover:bg-(--color-primary) hover:text-white transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Contact Us
          </Link>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center mb-16 text-sm font-semibold text-(--color-neutral)">
          <Link href="/about/" className="hover:text-(--color-primary) transition-colors">
            About
          </Link>
          <Link href="/services/" className="hover:text-(--color-primary) transition-colors">
            Services
          </Link>
          <Link href="/portfolio/" className="hover:text-(--color-primary) transition-colors">
            Portfolio
          </Link>
          <Link href="/blog/" className="hover:text-(--color-primary) transition-colors">
            Blog
          </Link>
          <Link href="/audit/" className="hover:text-(--color-primary) transition-colors">
            Free Audit
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <span className="text-(--color-dark) dark:text-white font-bold">
            Connect with us:
          </span>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                Icon: FaInstagram,
                url: CONTACT_INFO.social.instagram,
                label: "Instagram",
              },
              {
                Icon: FaFacebook,
                url: CONTACT_INFO.social.facebook,
                label: "Facebook",
              },
              {
                Icon: FaLinkedin,
                url: CONTACT_INFO.social.linkedin,
                label: "LinkedIn",
              },
              {
                Icon: FaYoutube,
                url: CONTACT_INFO.social.youtube,
                label: "YouTube",
              },
              {
                Icon: FaXTwitter,
                url: CONTACT_INFO.social.twitter,
                label: "Twitter (X)",
              },
              {
                Icon: FaWhatsapp,
                url: CONTACT_INFO.social.whatsapp,
                label: "WhatsApp",
              },
              {
                Icon: FaPinterest,
                url: CONTACT_INFO.social.pinterest,
                label: "Pinterest",
              },
            ].map(({ Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-(--color-primary) rounded-full hover:shadow-lg hover:shadow-(--color-primary)/30 transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
