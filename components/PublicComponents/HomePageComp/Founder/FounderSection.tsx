"use client";

import React from "react";
import NextImage from "next/image";
import Link from "next/link";
import { images } from "@/app/assets/images/images";
import {
  ArrowRight,
  Github,
  Linkedin,
  Briefcase,
  Globe,
  Monitor,
  TrendingUp,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";

const FounderSection = () => {
  return (
    <section className="py-16 md:py-20 bg-(--background) relative overflow-hidden border-t border-(--border)">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-(--color-primary) rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-(--color-primary) rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image & Basic Info */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <div className="relative group">
              {/* Image Frame */}
              <div className="relative z-10 aspect-[4/5] overflow-hidden border-2 border-(--border) group-hover:border-(--color-primary) transition-colors duration-500">
                <NextImage
                  src={images.founder.amol1}
                  alt="Amol Kadam - Founder of Growthik Media"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  priority
                />
              </div>

              {/* Decorative Frame Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-(--color-primary) z-0" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-(--color-primary) z-0" />

              {/* Badge */}
              <div className="absolute -right-6 top-10 bg-(--color-primary) text-white px-6 py-2 font-black uppercase tracking-widest text-xs rotate-90 origin-right shadow-xl">
                Founder & Lead
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/amolkadam77/"
                target="_blank"
                className="p-3 bg-(--surface) border border-(--border) text-(--text-secondary) hover:text-(--color-primary) hover:border-(--color-primary) transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/amolkadam5256"
                target="_blank"
                className="p-3 bg-(--surface) border border-(--border) text-(--text-secondary) hover:text-(--color-primary) hover:border-(--color-primary) transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@growthikmedia.com"
                className="p-3 bg-(--surface) border border-(--border) text-(--text-secondary) hover:text-(--color-primary) hover:border-(--color-primary) transition-all"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Bio & Core Roles */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-(--color-primary)" />
              <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-xs">
                The Visionary
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-(--text-primary) uppercase tracking-tighter mb-4 leading-none">
              Meet the Growth Strategist <br />
              <span className="text-(--color-primary)">Behind Growthik</span>
            </h2>

            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl font-bold text-(--text-primary)">
                Amol Kadam
              </span>
            </div>

            <p className="text-xl text-(--text-secondary) leading-relaxed mb-10 font-medium italic border-l-4 border-(--color-primary) pl-6">
              "Arhitecting high-performance digital engines for high-growth
              brands. I bridge the gap between complex code and ROI-driven
              marketing."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Core Strength 1 */}
              <div className="p-6 bg-(--surface) border border-(--border) hover:border-(--color-primary)/30 transition-all group">
                <div className="w-10 h-10 bg-(--color-primary)/10 flex items-center justify-center mb-4 group-hover:bg-(--color-primary) group-hover:text-white transition-all">
                  <Monitor className="w-5 h-5" />
                </div>
                <h4 className="font-black uppercase tracking-widest text-xs mb-2 text-(--text-primary)">
                  Full Stack Developer
                </h4>
                <p className="text-[10px] text-(--text-secondary) leading-relaxed">
                  Specializing in Next.js, React and robust backend
                  architectures to build scalable web platforms.
                </p>
              </div>

              {/* Core Strength 2 */}
              <div className="p-6 bg-(--surface) border border-(--border) hover:border-(--color-primary)/30 transition-all group">
                <div className="w-10 h-10 bg-(--color-primary)/10 flex items-center justify-center mb-4 group-hover:bg-(--color-primary) group-hover:text-white transition-all">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="font-black uppercase tracking-widest text-xs mb-2 text-(--text-primary)">
                  Digital Marketing Strategy
                </h4>
                <p className="text-[10px] text-(--text-secondary) leading-relaxed">
                  Leveraging data-driven insights to scale customer acquisition
                  and maximize digital ROI.
                </p>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4 py-4 px-6 bg-(--surface) border border-(--border) w-fit">
              <Briefcase className="w-5 h-5 text-(--color-primary)" />
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] font-bold text-(--text-secondary)">
                  Experience Authority
                </span>
                <span className="text-lg font-black text-(--text-primary)">
                  <Counter
                    value={2.5}
                    decimals={1}
                    suffix="+ Years of Digital Excellence"
                  />
                </span>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/about">
                <Button
                  variant="primary"
                  className="rounded-full px-10 py-4 font-black uppercase tracking-widest text-xs"
                >
                  Full Story <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="rounded-full px-10 py-4 font-black uppercase tracking-widest text-xs border-2"
                >
                  Let's Connect
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
