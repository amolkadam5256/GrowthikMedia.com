"use client";
// HMR trigger

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Monitor,
  Search,
  TrendingUp,
  BarChart,
  Users,
  Star,
  CheckCircle,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import { images } from "@/app/assets/images/images";

const AboutHeroSection = () => {
  return (
    <section className="relative pt-10 pb-10 md:pt-20 md:pb-10 overflow-hidden bg-(--background)">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-(--color-primary)/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT COLUMN: Text & Services */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-[2px] bg-(--color-primary)" />
                <span className="text-sm font-bold uppercase tracking-widest text-(--text-secondary)">
                  About Growthik Media
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-(--text-primary) uppercase tracking-tighter leading-[1.1] mb-6">
                <span className="text-xl md:text-2xl text-(--text-secondary) block mb-2 font-bold tracking-widest">
                  GROWTHIK MEDIA
                </span>
                AI-Driven Digital Marketing <br />
                <span className="text-(--color-primary)">
                  & SEO Services in Pune
                </span>
              </h1>

              <div className="bg-(--surface)/50 border-l-4 border-(--color-primary) p-4 mb-6 rounded-r-lg">
                <p className="text-xl font-bold text-(--text-primary) mb-2">
                  From Low Visibility to Predictable Revenue Systems.
                </p>
                <p className="text-base text-(--text-secondary) leading-relaxed font-medium">
                  We are an AI-powered growth engineering company that builds
                  highly scalable, data-driven revenue infrastructures -
                  replacing guesswork with engineering precision.
                </p>
              </div>

              {/* Micro Trust Signals */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-(--background) bg-(--surface) flex items-center justify-center text-(--text-primary) font-bold text-xs shadow-sm shadow-black/10">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-(--background) bg-(--surface) flex items-center justify-center text-(--text-primary) font-bold text-xs shadow-sm shadow-black/10">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-(--background) bg-(--surface) flex items-center justify-center text-(--text-primary) font-bold text-xs shadow-sm shadow-black/10">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-xs font-bold text-(--text-secondary) uppercase tracking-wider">
                  Trusted by 50+ Growth-stage Brands
                </div>
              </div>

              {/* SEO Text Block */}
              <div className="mb-8">
                <p className="text-sm text-(--text-secondary) leading-relaxed opacity-80">
                  Leading{" "}
                  <strong className="text-(--text-primary)">
                    Digital Marketing Company in Pune
                  </strong>{" "}
                  specializing in{" "}
                  <strong className="text-(--text-primary)">
                    AI SEO Agency Pune
                  </strong>{" "}
                  strategies,{" "}
                  <strong className="text-(--text-primary)">
                    Performance Marketing
                  </strong>
                  , and{" "}
                  <strong className="text-(--text-primary)">
                    High Performance Website Development Pune
                  </strong>{" "}
                  to build Predictable Revenue Marketing Systems.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-12">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-full shadow-lg shadow-(--color-primary)/30 hover:bg-black transition-all transform hover:-translate-y-1 flex items-center gap-2"
                >
                  Meet Strategy Team <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-3 bg-(--surface) px-6 py-4 rounded-full border border-(--border)">
                  <a
                    href="#framework"
                    className="text-xs font-bold uppercase text-(--text-secondary) hover:text-(--color-primary) transition-colors tracking-widest"
                  >
                    Framework
                  </a>
                  <span className="text-(--border)">|</span>
                  <a
                    href="#tech"
                    className="text-xs font-bold uppercase text-(--text-secondary) hover:text-(--color-primary) transition-colors tracking-widest"
                  >
                    Stack
                  </a>
                  <span className="text-(--border)">|</span>
                  <a
                    href="#squad"
                    className="text-xs font-bold uppercase text-(--text-secondary) hover:text-(--color-primary) transition-colors tracking-widest"
                  >
                    Team
                  </a>
                </div>
              </div>
            </motion.div>

            {/* OUR SERVICE ICONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-sm font-black text-(--text-secondary) uppercase mb-6 tracking-widest opacity-80">
                Core Expertise
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    icon: <Monitor className="w-5 h-5" />,
                    title: "Web Dev",
                    desc: "High-Perf",
                  },
                  {
                    icon: <Search className="w-5 h-5" />,
                    title: "AI SEO",
                    desc: "Rank #1",
                  },
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: "Ads",
                    desc: "High ROI",
                  },
                  {
                    icon: <BarChart className="w-5 h-5" />,
                    title: "CRO",
                    desc: "Conversion",
                  },
                ].map((service, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-3 p-2 rounded-lg hover:bg-(--surface) transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-(--surface) border border-(--border) flex items-center justify-center text-(--color-primary) group-hover:bg-(--color-primary) group-hover:text-white transition-colors shadow-sm shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-(--text-primary) text-xs leading-tight">
                        {service.title}
                      </h4>
                      <p className="text-[10px] text-(--text-secondary) leading-tight">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Image & Floating Cards */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end mt-10 lg:mt-0">
            {/* Organic Background Shape - CSS Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] max-w-[600px] z-0">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-(--color-primary) opacity-10"
              >
                <path
                  fill="currentColor"
                  d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.2,22.9,71.3,34.3C60.4,45.7,49.8,55,38,62.1C26.1,69.2,13.1,74.1,-0.6,75.1C-14.3,76.1,-28.6,73.2,-41.8,66.6C-55,60,-67.1,49.7,-75.4,36.7C-83.7,23.7,-88.3,8,-84.9,-6.1C-81.5,-20.3,-70.2,-32.8,-58.5,-42.6C-46.8,-52.4,-34.7,-59.4,-22.3,-64.5C-9.9,-69.6,2.8,-72.8,15.6,-74.8"
                  transform="translate(100 100)"
                />
              </svg>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-[80%] md:w-[70%] max-w-[400px]"
            >
              {/* Creative Blob Shape Container */}
              <div
                className="aspect-4/5 relative overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-800 border-4 border-white dark:border-gray-800"
                style={{
                  borderRadius: "66% 34% 35% 65% / 53% 74% 26% 47%",
                }}
              >
                <Image
                  src={images.founder?.amol1 || "/placeholder-founder.jpg"}
                  alt="Amol Kadam - Founder Growthik Media"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* --- FLOATING CARDS --- */}

              {/* Card 1: Projects - Left */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute top-10 -left-6 md:-left-16 bg-(--background) p-3 md:p-4 rounded-xl shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.1)] flex items-center gap-3 border border-(--border) z-20"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-(--surface) rounded-lg flex items-center justify-center text-(--color-primary) border border-(--border) shrink-0">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <span className="block font-black text-base md:text-lg text-(--text-primary)">
                    50+
                  </span>
                  <span className="text-[10px] md:text-xs text-(--text-secondary) whitespace-nowrap">
                    Projects Done
                  </span>
                </div>
              </motion.div>

              {/* Card 2: Satisfaction - Right */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute top-32 -right-4 md:-right-12 bg-(--background) p-3 md:p-4 rounded-xl shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.1)] flex items-center gap-3 border border-(--border) z-20"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-(--surface) rounded-lg flex items-center justify-center text-(--text-primary) border border-(--border) shrink-0">
                  <Star className="w-4 h-4 md:w-5 md:h-5 fill-current text-(--color-primary)" />
                </div>
                <div>
                  <span className="block font-bold text-sm md:text-base text-(--text-primary)">
                    4.9/5
                  </span>
                  <span className="text-[10px] md:text-xs text-(--text-secondary) block">
                    Satisfaction
                  </span>
                </div>
              </motion.div>

              {/* Card 3: Experience/Role - Bottom Right */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -bottom-4 -right-2 md:-right-8 bg-(--background) p-3 md:p-4 rounded-xl shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.1)] flex items-center gap-3 border border-(--border) z-20"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-(--surface) rounded-full flex items-center justify-center text-(--color-primary) border border-(--border) shrink-0">
                  <Users className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <span className="block font-bold text-sm md:text-base text-(--text-primary)">
                    Amol Kadam
                  </span>
                  <span className="text-[10px] md:text-xs text-(--text-secondary) block">
                    Growth Architect
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
