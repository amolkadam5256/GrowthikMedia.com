"use client";
import "./assets/styles/globals.css";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
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
import ThemeProviderWrapper from "../components/comman/ThemeProviderWrapper";

function NotFoundContent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Determine current theme for conditional rendering if needed,
  // but mostly rely on CSS classes
  const currentTheme = mounted ? resolvedTheme : "light";
  const isDark = currentTheme === "dark";

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-[var(--color-dark)] text-[var(--color-dark)] dark:text-white relative overflow-hidden transition-colors duration-500">
        {/* Floating Digital Marketing Assets */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40 md:opacity-100">
          {/* Top Left Area */}
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

          {/* Top Right Area */}
          <Globe className="absolute top-[10%] right-[5%] md:right-[10%] w-12 h-12 md:w-16 md:h-16 text-[var(--color-primary)]/10 animate-spin-slow" />
          <Target className="absolute top-[25%] right-[15%] md:right-[20%] w-8 h-8 md:w-12 md:h-12 text-[var(--color-primary)]/20 animate-pulse" />
          <Share2
            className="absolute top-[15%] right-[2%] md:right-[5%] w-6 h-6 md:w-8 md:h-8 text-[var(--color-neutral)]/20 animate-float"
            style={{ animationDelay: "1.5s" }}
          />

          {/* Bottom Left Area */}
          <Search
            className="absolute bottom-[20%] left-[5%] md:left-[10%] w-8 h-8 md:w-12 md:h-12 text-[var(--color-primary-light)]/20 animate-float"
            style={{ animationDelay: "0.5s" }}
          />
          <TrendingUp
            className="absolute bottom-[10%] left-[15%] md:left-[20%] w-10 h-10 md:w-14 md:h-14 text-[var(--color-primary)]/20 animate-float"
            style={{ animationDelay: "2.5s" }}
          />

          {/* Bottom Right Area */}
          <Smartphone
            className="absolute bottom-[15%] right-[5%] md:right-[10%] w-6 h-6 md:w-10 md:h-10 text-[var(--color-neutral)]/20 animate-float"
            style={{ animationDelay: "3s" }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8 md:px-6 md:py-16">
          {/* 404 Number with Glitch Effect */}
          <div className="relative mb-8 md:mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-[100px] sm:text-[150px] md:text-[250px] font-black opacity-5 select-none animate-pulse">
                404
              </div>
            </div>

            <div className="relative">
              <h1 className="text-[80px] sm:text-[120px] md:text-[180px] font-black leading-none bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary)] bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite]">
                404
              </h1>
            </div>

            {/* Floating Alert Icon */}
            <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 animate-bounce">
              <AlertCircle className="w-8 h-8 md:w-16 md:h-16 text-[var(--color-primary)]" />
            </div>
          </div>

          {/* Error Message */}
          <div className="text-center mb-12 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-[fadeIn_0.5s_ease-in]">
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
                Lost in Digital Space?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-[var(--color-neutral)] leading-relaxed animate-[fadeIn_0.7s_ease-in]">
              Looks like this page took an unexpected detour. But don&apos;t
              worry—
              <br />
              our digital marketing experts can help you find your way back to
              success!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16 animate-[fadeIn_0.9s_ease-in]">
            <Link
              href="/"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:shadow-[var(--color-primary)]/30 transition-all duration-300 hover:scale-105"
            >
              <Home className="w-5 h-5" />
              Back to Home
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="group flex items-center gap-2 px-8 py-4 border-2 border-[var(--color-primary)] text-[var(--color-dark)] dark:text-white font-semibold rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col md:flex-row items-center gap-6 animate-[fadeIn_1.3s_ease-in]">
            <span className="text-[var(--color-dark)] font-bold">
              Connect with us:
            </span>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                {
                  Icon: FaInstagram,
                  url: "https://instagram.com/growthikmedia",
                  label: "Instagram",
                },
                {
                  Icon: FaFacebook,
                  url: "https://www.facebook.com/growthikmedia",
                  label: "Facebook",
                },
                {
                  Icon: FaLinkedin,
                  url: "https://www.linkedin.com/company/growthikmedia",
                  label: "LinkedIn",
                },
                {
                  Icon: FaYoutube,
                  url: "https://www.youtube.com/@growthikmedia",
                  label: "YouTube",
                },
                {
                  Icon: FaXTwitter,
                  url: "https://x.com/growthikmedia",
                  label: "Twitter (X)",
                },
                {
                  Icon: FaWhatsapp,
                  url: "https://wa.me/",
                  label: "WhatsApp",
                },
                {
                  Icon: FaPinterest,
                  url: "https://in.pinterest.com/growthikmedia/",
                  label: "Pinterest",
                },
              ].map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full hover:shadow-lg hover:shadow-[var(--color-primary)]/30 transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 border-4 border-[var(--color-primary)]/20 rounded-full animate-[spin_8s_linear_infinite]" />
          <div className="absolute bottom-20 right-10 w-32 h-32 border-4 border-[var(--color-primary-light)]/20 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
        </div>
      </div>
    </>
  );
}

export default function NotFound() {
  return (
    <ThemeProviderWrapper>
      <NotFoundContent />
    </ThemeProviderWrapper>
  );
}
