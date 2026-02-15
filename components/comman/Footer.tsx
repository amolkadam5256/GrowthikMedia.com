"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  ArrowUp,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  ExternalLink,
} from "lucide-react";
import NextImage from "next/image";
import {
  FiGlobe,
  FiCode,
  FiPenTool,
  FiLayers,
  FiHome,
  FiInfo,
  FiBookOpen,
  FiMail,
  FiShoppingCart,
} from "react-icons/fi";
import { images } from "@/app/assets/images/images";
import { CONTACT_INFO } from "@/constants/contact";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = () => {
    if (email && email.includes("@")) {
      console.log("Subscribing:", email);
      alert(`🎉 Thank you for subscribing to ${CONTACT_INFO.companyName}!`);
      setEmail("");
    } else {
      alert("⚠️ Please enter a valid email address");
    }
  };

  if (!mounted) return null;

  const isDark = theme === "dark";

  const quickLinks = [
    { href: "/", label: "Home", icon: FiHome },
    { href: "/about", label: "About", icon: FiInfo },
    { href: "/portfolio", label: "Portfolio", icon: FiLayers },
    { href: "/blog", label: "Insights", icon: FiBookOpen },
    { href: "/contact", label: "Contact", icon: FiMail },
  ];

  const topServices = [
    {
      href: "/services/digital-marketing",
      label: "Digital Marketing",
      icon: FiGlobe,
    },
    {
      href: "/services/website-development",
      label: "Website Development",
      icon: FiCode,
    },
    { href: "/services/seo", label: "SEO Services", icon: FiGlobe },
    {
      href: "/services/branding-consulting",
      label: "Branding & Design",
      icon: FiPenTool,
    },
    {
      href: "/services/ecommerce-development",
      label: "E-Commerce Solutions",
      icon: FiShoppingCart,
    },
    {
      href: "/services/social-media-marketing",
      label: "Social Media Marketing",
      icon: FiGlobe,
    },
  ];

  return (
    <>
      <footer
        className={`transition-all duration-500 relative ${
          isDark
            ? "bg-[#0A0A0A] text-white"
            : "bg-linear-to-br from-gray-50 via-white to-gray-100 text-gray-900"
        }`}
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D90B1C] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F22E52] rounded-full blur-3xl"></div>
        </div>

        {/* Newsletter Section with Enhanced Design */}
        <div
          className={`relative ${
            isDark
              ? "bg-linear-to-r from-[#D90B1C] via-[#F22E52] to-[#D90B1C]"
              : "bg-linear-to-r from-[#D90B1C] via-[#F22E52] to-[#D90B1C]"
          } transition-all duration-500`}
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto  h-1 bg-(--bg-color) red-line-left"></div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-15 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column - Spans 4 columns on large screens */}
            <div className="lg:col-span-4">
              <div className="mb-6">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12  rounded-xl flex items-center justify-center ">
                    <span className="text-white font-bold text-2xl relative w-full h-full">
                      <NextImage
                        src={images.icon.src}
                        alt={`${CONTACT_INFO.companyName} Icon`}
                        fill
                        className="object-contain"
                      />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight bg-linear-to-r from-[#D90B1C] to-[#F22E52] bg-clip-text text-transparent">
                      {CONTACT_INFO.companyName}
                    </h3>
                    <p
                      className={`text-sm font-medium ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Digital Growth Partners
                    </p>
                  </div>
                </div>

                <p
                  className={`text-base leading-relaxed mb-6 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Empowering businesses to thrive in the digital landscape
                  through innovative marketing strategies, cutting-edge web
                  development, and creative branding solutions.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <a
                    href={`tel:${CONTACT_INFO.phone.primary}`}
                    className={`flex items-center gap-3 group ${
                      isDark ? "hover:text-[#D90B1C]" : "hover:text-[#D90B1C]"
                    } transition-colors`}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        isDark ? "bg-gray-800" : "bg-gray-100"
                      } group-hover:bg-[#D90B1C] transition-colors`}
                    >
                      <Phone className="w-4 h-4 group-hover:text-white" />
                    </div>
                    <span className="text-sm font-medium">
                      {CONTACT_INFO.phone.primary}
                    </span>
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email.info}`}
                    className={`flex items-center gap-3 group ${
                      isDark ? "hover:text-[#D90B1C]" : "hover:text-[#D90B1C]"
                    } transition-colors`}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        isDark ? "bg-gray-800" : "bg-gray-100"
                      } group-hover:bg-[#D90B1C] transition-colors`}
                    >
                      <Mail className="w-4 h-4 group-hover:text-white" />
                    </div>
                    <span className="text-sm font-medium break-all">
                      {CONTACT_INFO.email.info}
                    </span>
                  </a>
                  <div
                    className={`flex items-start gap-3 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        isDark ? "bg-gray-800" : "bg-gray-100"
                      } mt-0.5`}
                    >
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{CONTACT_INFO.address.full}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links - Spans 2 columns */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-bold mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-linear-to-r from-[#D90B1C] to-[#F22E52] rounded-full"></span>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`flex items-center gap-3 text-sm group ${
                        isDark ? "hover:text-[#D90B1C]" : "hover:text-[#D90B1C]"
                      } transition-all hover:translate-x-1`}
                    >
                      <link.icon className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Services - Spans 3 columns */}
            <div className="lg:col-span-3">
              <h4 className="text-lg font-bold mb-6 relative inline-block">
                Our Services
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-linear-to-r from-[#D90B1C] to-[#F22E52] rounded-full"></span>
              </h4>
              <ul className="space-y-3">
                {topServices.map((service) => (
                  <li key={service.href}>
                    <a
                      href={service.href}
                      className={`flex items-center gap-3 text-sm group ${
                        isDark ? "hover:text-[#D90B1C]" : "hover:text-[#D90B1C]"
                      } transition-all hover:translate-x-1`}
                    >
                      <service.icon className="w-4 h-4 opacity-60 group-hover:opacity-100 shrink-0" />
                      <span>{service.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Hours & CTA - Spans 3 columns */}
            <div className="lg:col-span-3">
              <h4 className="text-lg font-bold mb-6 relative inline-block">
                Business Hours
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-linear-to-r from-[#D90B1C] to-[#F22E52] rounded-full"></span>
              </h4>
              <div
                className={`space-y-3 text-sm mb-6 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">
                    {CONTACT_INFO.workingHours.weekdays.split("|")[1].trim()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Saturday</span>
                  <span className="font-semibold">
                    {CONTACT_INFO.workingHours.saturday.split("|")[1].trim()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="font-semibold text-[#D90B1C]">
                    {CONTACT_INFO.workingHours.sunday}
                  </span>
                </div>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#D90B1C] to-[#F22E52] hover:from-[#F22E52] hover:to-[#D90B1C] text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105 group"
              >
                Get Started Today
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t ${
            isDark ? "border-gray-800" : "border-gray-200"
          } relative z-10`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Main Bottom Content */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-4">
              {/* Copyright & Legal Links */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm">
                <span className={isDark ? "text-gray-700" : "text-gray-300"}>
                  •
                </span>
                <a
                  href="/privacy-policy"
                  className={`${
                    isDark ? "hover:text-[#D90B1C]" : "hover:text-[#D90B1C]"
                  } transition-colors`}
                >
                  Privacy Policy
                </a>
                <span className={isDark ? "text-gray-700" : "text-gray-300"}>
                  •
                </span>
                <a
                  href="/terms"
                  className={`${
                    isDark ? "hover:text-[#D90B1C]" : "hover:text-[#D90B1C]"
                  } transition-colors`}
                >
                  Terms & Conditions
                </a>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4">
                <span
                  className={`text-sm font-medium ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Follow Us
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={CONTACT_INFO.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-lg ${
                      isDark
                        ? "bg-gray-800 hover:bg-[#D90B1C]"
                        : "bg-gray-100 hover:bg-[#D90B1C]"
                    } hover:text-white transition-all hover:scale-110 group`}
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={CONTACT_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-lg ${
                      isDark
                        ? "bg-gray-800 hover:bg-[#D90B1C]"
                        : "bg-gray-100 hover:bg-[#D90B1C]"
                    } hover:text-white transition-all hover:scale-110 group`}
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={CONTACT_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-lg ${
                      isDark
                        ? "bg-gray-800 hover:bg-[#D90B1C]"
                        : "bg-gray-100 hover:bg-[#D90B1C]"
                    } hover:text-white transition-all hover:scale-110 group`}
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={CONTACT_INFO.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-lg ${
                      isDark
                        ? "bg-gray-800 hover:bg-[#D90B1C]"
                        : "bg-gray-100 hover:bg-[#D90B1C]"
                    } hover:text-white transition-all hover:scale-110 group`}
                    aria-label="Twitter/X"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Credit Line */}
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between text-center lg:text-right pt-4 border-t border-gray-200/50 dark:border-gray-800/50">
              <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                © {new Date().getFullYear()} {CONTACT_INFO.companyName}. All
                rights reserved
              </p>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-500" : "text-gray-500"
                }`}
              >
                Designed & Developed with{" "}
                <span className="text-[#D90B1C] animate-pulse">❤️</span> by{" "}
                <span className="font-bold bg-linear-to-r from-[#D90B1C] to-[#F22E52] bg-clip-text text-transparent">
                  {CONTACT_INFO.companyName}
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-1 right-3 sm:bottom-1 sm:right-6 p-2 sm:p-3 text-black rounded-full shadow-2xl transition-all transform hover:scale-110 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </>
  );
}
