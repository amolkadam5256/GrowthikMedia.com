"use client";

import React from "react";
import Image from "next/image";
import {
  Briefcase,
  Linkedin,
  ShieldCheck,
  Award,
  TrendingUp,
} from "lucide-react";
import { images } from "@/app/assets/images/images";

const AboutFounderSection = () => {
  return (
    <>
      <section className="py-24 border-b border-(--border)">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image */}
            <div className="lg:col-span-5" data-aos="fade-right">
              <div className="relative group mx-auto max-w-md lg:max-w-none">
                <div className="relative z-10 aspect-4/5 overflow-hidden border-2 border-(--border) group-hover:border-(--color-primary) transition-colors duration-500 rounded-lg">
                  <Image
                    src={images.founder?.amol1 || "/placeholder-founder.jpg"} // Fallback if needed
                    alt="Amol Kadam - Founder & Growth Architect"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                </div>
                {/* Decoration */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-(--color-primary) z-0" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-(--color-primary) z-0" />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-(--color-primary)" />
                <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-xs">
                  Founder Story
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-(--text-primary) uppercase tracking-tighter mb-6">
                Meet Amol Kadam <br />
                <span className="text-(--color-primary)">
                  Founder & Growth Architect
                </span>
              </h2>
              <p className="text-lg text-(--text-secondary) leading-relaxed mb-6 italic border-l-4 border-(--color-primary) pl-6">
                Amol Kadam is a Full-Stack Developer and Performance Marketing
                Strategist specializing in Next.js, AI automation, and
                high-conversion digital funnels.
              </p>

              <div className="space-y-4 mb-8 text-(--text-secondary)">
                <p>
                  With over{" "}
                  <strong className="text-(--text-primary)">
                    5+ years in Digital Marketing and Web Engineering
                  </strong>
                  , Amol Kadam has helped businesses scale through advanced SEO
                  architecture, AI automation, and full-stack marketing systems.
                  His approach merges engineering precision with aggressive
                  growth marketing to build scalable revenue systems for modern
                  brands.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Performance Marketing Strategy",
                  "Next.js Web Architecture",
                  "AI Growth Automation",
                  "Conversion Engineering",
                ].map((exp, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 bg-(--surface) border border-(--border) hover:border-(--color-primary) transition-all"
                  >
                    <Briefcase className="w-5 h-5 text-(--color-primary)" />
                    <span className="text-xs font-black uppercase text-(--text-primary)">
                      {exp}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-(--surface) border border-(--border) rounded-md">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  <span className="text-[10px] uppercase font-bold text-(--text-secondary)">
                    Google Certified
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-(--surface) border border-(--border) rounded-md">
                  <Award className="w-4 h-4 text-blue-500" />
                  <span className="text-[10px] uppercase font-bold text-(--text-secondary)">
                    Meta Partner
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-(--surface) border border-(--border) rounded-md">
                  <TrendingUp className="w-4 h-4 text-purple-500" />
                  <span className="text-[10px] uppercase font-bold text-(--text-secondary)">
                    AI Marketing Systems
                  </span>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/amolkadam77/"
                target="_blank"
                className="inline-flex items-center gap-2 text-(--text-secondary) hover:text-[#0077b5] transition-colors font-bold uppercase text-sm tracking-wider"
              >
                <Linkedin className="w-5 h-5" /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE SQUAD: Creative Theme-Integrated Section --- */}
      <section className="py-24 bg-(--background) relative overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-(--color-primary)/5 -skew-x-12 transform translate-x-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border border-(--color-primary)/10 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        {/* Vertical Text Decoration */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block select-none pointer-events-none">
          <span className="text-[12rem] font-black text-(--text-primary)/5 rotate-90 inline-block tracking-tighter">
            ELITE
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
            data-aos="fade-up"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-(--color-primary)" />
                <span className="text-(--color-primary) font-bold uppercase tracking-[0.4em] text-[10px]">
                  The Squad
                </span>
              </div>
              <h3 className="text-5xl md:text-7xl font-black text-(--text-primary) uppercase tracking-tighter leading-[0.9]">
                Architects of <br />
                <span
                  className="text-transparent"
                  style={{
                    WebkitTextStroke: "1px var(--color-primary)",
                  }}
                >
                  Digital Dominance
                </span>
              </h3>
            </div>

            <p className="text-(--text-secondary) max-w-xs text-sm font-medium leading-relaxed border-l border-(--color-primary)/20 pl-6 hidden md:block">
              A collective of growth engineers, AI strategists, and performance
              architects obsessed with one thing: your revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: "Digital Marketing Specialist",
                role: "Performance & SEO Ops",
                tag: "STRATEGY",
                img: images.founder?.amol1,
              },
              {
                name: "AI Digital Strategist",
                role: "Neural Automation",
                tag: "AI OPS",
                img: images.founder?.amol2,
              },
              {
                name: "Full-Stack Web Developer",
                role: "Next.js & React Systems",
                tag: "ENGINEERING",
                img: images.founder?.amol1,
              },
              {
                name: "Meta Ads Expert",
                role: "Paid Social Media",
                tag: "PERFORMANCE",
                img: images.founder?.amol2,
              },
            ].map((member, i) => (
              <div
                key={i}
                className="group relative bg-(--surface) border border-(--border) p-1 transition-all duration-500 hover:bg-(--color-primary) hover:border-(--color-primary)"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {/* Image / Content Area */}
                <div className="relative aspect-4/5 overflow-hidden bg-(--background)/50 flex items-center justify-center">
                  {member.img ? (
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-4 text-(--text-secondary)/20 group-hover:text-white/40 transition-colors">
                      <div className="w-16 h-16 border border-current rounded-full flex items-center justify-center p-4">
                        <TrendingUp className="w-full h-full" />
                      </div>
                      <span className="text-[10px] font-black tracking-widest uppercase">
                        Member Slot
                      </span>
                    </div>
                  )}

                  {/* Tag */}
                  <div className="absolute top-4 left-4 bg-(--color-primary) text-white text-[9px] font-black px-2 py-1 tracking-widest group-hover:bg-white group-hover:text-black transition-colors">
                    {member.tag}
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-b-40 border-r-40 border-b-(--border) border-r-transparent group-hover:border-b-white/20 transition-colors" />
                </div>

                {/* Info Block */}
                <div className="p-6">
                  <p className="text-[10px] font-black text-(--text-secondary) uppercase tracking-widest mb-1 group-hover:text-white/60 transition-colors">
                    {member.role}
                  </p>
                  <h4 className="text-xl font-black text-(--text-primary) uppercase tracking-tight group-hover:text-white transition-colors">
                    {member.name}
                  </h4>

                  {/* Action Link */}
                  <div className="mt-6 pt-6 border-t border-(--border) group-hover:border-white/20 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href="https://linkedin.com/company/growthikmedia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-black group-hover:text-white flex items-center gap-2"
                    >
                      CONNECT{" "}
                      <Linkedin className="w-3 h-3 transition-transform group-hover:rotate-12" />
                    </a>
                  </div>
                </div>

                {/* Number Indicator */}
                <div className="absolute -top-3 -right-3 text-4xl font-black text-(--text-primary)/5 group-hover:text-white/10 transition-colors italic select-none">
                  0{i + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA for Section */}
          <div className="mt-20 flex justify-center" data-aos="fade-up">
            <a
              href="https://linkedin.com/company/growthikmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 group"
            >
              <span className="text-(--text-secondary) font-black tracking-[0.3em] text-xs group-hover:text-(--color-primary) transition-colors">
                JOIN THE SQUAD
              </span>
              <div className="w-12 h-12 rounded-full border border-(--border) flex items-center justify-center group-hover:bg-(--color-primary) group-hover:border-(--color-primary) transition-all">
                <Linkedin className="w-4 h-4 text-(--text-secondary) group-hover:text-white transition-colors" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutFounderSection;
