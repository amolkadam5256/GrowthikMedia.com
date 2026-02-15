"use client";

import React from "react";
import NextImage from "next/image";
import { images } from "@/app/assets/images/images";
import {
  Linkedin,
  Github,
  ExternalLink,
  Mail,
  Award,
  CheckCircle2,
  Monitor,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import Counter from "@/components/ui/Counter";

const AboutTeamSection = () => {
  return (
    <section className="py-24 bg-(--background) relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-(--color-primary)/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-(--color-primary)" />
            <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-sm">
              Our Leadership
            </span>
            <div className="w-12 h-[2px] bg-(--color-primary)" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-(--text-primary) uppercase tracking-tighter mb-6">
            The Mind Behind{" "}
            <span className="text-(--color-primary)">Growthik Media</span>
          </h2>
          <p className="text-lg text-(--text-secondary) max-w-2xl mx-auto leading-relaxed">
            Founded with a mission to bridge the gap between complex technology
            and meaningful business growth.
          </p>
        </div>

        <div className="bg-(--surface) border border-(--border) relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Founder Image Column */}
            <div className="lg:col-span-4 relative group overflow-hidden">
              <div className="aspect-[3/4] lg:h-full relative">
                <NextImage
                  src={images.founder.amol2}
                  alt="Amol Kadam"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Overlay Socials */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/amolkadam77/"
                    target="_blank"
                    className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-(--color-primary) transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/amolkadam5256"
                    target="_blank"
                    className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-(--color-primary) transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:info@growthikmedia.com"
                    className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-(--color-primary) transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Founder Details Column */}
            <div className="lg:col-span-8 p-8 md:p-16">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-(--text-primary) uppercase tracking-tight mb-2">
                    Amol Kadam
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-(--color-primary) font-bold uppercase tracking-widest text-xs">
                      Founder & Growth Strategist
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-(--background) border border-(--border) rounded-full">
                  <Award className="w-4 h-4 text-(--color-primary)" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-(--text-primary)">
                    <Counter
                      value={2.5}
                      decimals={1}
                      suffix="+ Year Experience"
                    />
                  </span>
                </div>
              </div>

              <div className="prose prose-invert max-w-none mb-12">
                <p className="text-lg text-(--text-secondary) leading-relaxed">
                  Amol is a{" "}
                  <span className="text-(--text-primary) font-bold">
                    Full Stack Developer
                  </span>{" "}
                  and Growth Strategist specializing in architecting
                  high-performance digital systems. He leads the technical and
                  marketing vision at Growthik Media, ensuring every project
                  delivers measurable ROI.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  {/* Expertise 1: Development */}
                  <div className="p-6 bg-(--background) border border-(--border) hover:border-(--color-primary)/30 transition-all group">
                    <div className="flex items-center gap-3 text-(--text-primary) mb-4">
                      <Monitor className="w-5 h-5 text-(--color-primary)" />
                      <h4 className="font-black uppercase tracking-widest text-xs">
                        Full Stack Development
                      </h4>
                    </div>
                    <p className="text-xs text-(--text-secondary) leading-relaxed">
                      Building modern, scalable web architectures using Next.js,
                      React and RESTful services for high-speed performance.
                    </p>
                  </div>

                  {/* Expertise 2: Marketing */}
                  <div className="p-6 bg-(--background) border border-(--border) hover:border-(--color-primary)/30 transition-all group">
                    <div className="flex items-center gap-3 text-(--text-primary) mb-4">
                      <TrendingUp className="w-5 h-5 text-(--color-primary)" />
                      <h4 className="font-black uppercase tracking-widest text-xs">
                        Digital Marketing Strategy
                      </h4>
                    </div>
                    <p className="text-xs text-(--text-secondary) leading-relaxed">
                      Implementing data-driven marketing funnels and SEO
                      strategies to scale brands and optimize customer
                      acquisition costs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-8 border-t border-(--border)">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-(--surface) bg-(--border) flex items-center justify-center text-[10px] font-bold text-(--text-secondary)"
                    >
                      {i === 3 ? "+15" : "TM"}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-(--text-secondary)">
                  Leading a specialized team of{" "}
                  <span className="text-(--text-primary) font-bold">
                    <Counter value={15} suffix="+ digital experts" />
                  </span>{" "}
                  delivering global standards from Pune.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
