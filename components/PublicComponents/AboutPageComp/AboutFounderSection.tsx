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

      {/* --- TEAM SECTION ADDITION --- */}
      <section className="py-24 border-b border-(--border) relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20" data-aos="fade-up">
            <div className="inline-flex items-center justify-center gap-3 mb-4 px-4 py-1.5 rounded-full border border-(--color-primary)/20 bg-(--color-primary)/5">
              <span className="text-(--color-primary) font-bold uppercase tracking-[0.2em] text-[10px]">
                The Squad
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-(--text-primary) uppercase tracking-tighter leading-none">
              Strategic{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-(--color-primary) to-purple-600">
                Core Team
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              {
                name: "Demo Member 1",
                role: "Head of SEO",
                icon: <TrendingUp className="w-6 h-6" />,
              },
              {
                name: "Demo Member 2",
                role: "Lead Developer",
                icon: <Briefcase className="w-6 h-6" />,
              },
              {
                name: "Demo Member 3",
                role: "Performance Marketer",
                icon: <Award className="w-6 h-6" />,
              },
              {
                name: "Demo Member 4",
                role: "Content Strategist",
                icon: <ShieldCheck className="w-6 h-6" />,
              },
            ].map((member, i) => (
              <div
                key={i}
                className="group relative"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {/* Card Image Container with Creative Border */}
                <div className="relative aspect-[3/4] mb-6 transition-all duration-500 transform group-hover:-translate-y-2">
                  {/* Tech Corner Accents */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-(--color-primary)/30 group-hover:border-(--color-primary) transition-colors duration-300 z-20" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-(--color-primary)/30 group-hover:border-(--color-primary) transition-colors duration-300 z-20" />

                  {/* Main Image Box */}
                  <div className="w-full h-full bg-(--surface) border border-(--border) overflow-hidden rounded-lg relative shadow-lg group-hover:shadow-2xl group-hover:shadow-(--color-primary)/20 transition-all duration-500">
                    {/* Placeholder Grayscale Gradient Base */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 z-0" />

                    {/* Placeholder Icon (Since no image yet) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-(--text-secondary)/20 group-hover:text-(--color-primary) transition-colors duration-500 z-10">
                      {member.icon}
                      <span className="text-[10px] uppercase font-bold tracking-widest mt-2 opacity-50">
                        Image Pending
                      </span>
                    </div>

                    {/* Hover Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-(--color-primary)/90 via-(--color-primary)/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-white font-bold text-sm hover:underline"
                        >
                          <Linkedin className="w-4 h-4" /> Connect
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Info */}
                <div className="text-center">
                  <h4 className="text-xl font-black text-(--text-primary) uppercase leading-tight group-hover:text-(--color-primary) transition-colors duration-300">
                    {member.name}
                  </h4>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <div className="h-[1px] w-4 bg-(--color-primary)/50" />
                    <p className="text-xs font-bold text-(--text-secondary) uppercase tracking-wider">
                      {member.role}
                    </p>
                    <div className="h-[1px] w-4 bg-(--color-primary)/50" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutFounderSection;
