"use client";

import React from "react";
import { Users, Calendar, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-(--border-light) bg-(--background)">
      {/* Premium Gradient Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[40vw] h-[40vw] bg-red-600/5 dark:bg-red-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[30vw] h-[30vw] bg-red-600/5 dark:bg-red-600/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-[20%] left-[5%] w-32 h-32 border border-red-600/10 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-600/10 dark:bg-red-600/20 text-red-600 dark:text-red-500 font-bold text-xs uppercase tracking-widest mb-8 border-l-4 border-red-600 rounded-r-full">
              Digital Marketing Agency in Pune
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 leading-[1.05] tracking-tight text-(--text-primary) uppercase transition-colors">
              Let’s Grow <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                Your Business
              </span>
              <br />
              Digitally.
            </h1>

            <p className="text-lg sm:text-xl text-(--text-secondary) font-medium mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed border-l-2 border-red-600/30 dark:border-red-600/50 pl-6">
              Looking for a reliable digital marketing agency in Pune? Growthik
              Media helps businesses grow through SEO, social media marketing,
              PPC advertising, and high-performance websites.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12">
              <a
                href="#consultation"
                aria-label="Book a digital marketing strategy call"
                className="group relative px-8 py-5 bg-red-600 text-white font-black uppercase tracking-wider overflow-hidden w-full sm:w-auto text-center rounded-xl transition-all shadow-xl shadow-red-600/20 hover:shadow-red-600/40 hover:-translate-y-1 active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Book Strategy Call
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone.primary || "+918055754054"}`}
                aria-label="Call Growthik Media now"
                className="group relative px-8 py-5 bg-transparent border-2 border-(--border) text-(--text-primary) font-black uppercase tracking-wider w-full sm:w-auto text-center rounded-xl hover:bg-(--text-primary) hover:text-(--background) transition-all active:scale-95"
              >
                <span className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </span>
              </a>
            </div>

            {/* Contact Highlights - Modern Cards */}
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="p-4 rounded-xl border border-(--border) bg-(--surface) shadow-sm group hover:border-red-600/50 transition-all">
                <p className="text-[10px] text-red-600 font-bold uppercase tracking-widest mb-1">
                  Phone
                </p>
                <a
                  href="tel:+918055754054"
                  className="text-base font-black text-(--text-primary) truncate block"
                >
                  +91 80557 54054
                </a>
              </div>
              <div className="p-4 rounded-xl border border-(--border) bg-(--surface) shadow-sm group hover:border-red-600/50 transition-all">
                <p className="text-[10px] text-red-600 font-bold uppercase tracking-widest mb-1">
                  Email
                </p>
                <a
                  href="mailto:info@growthikmedia.com"
                  className="text-base font-black text-(--text-primary) truncate block"
                >
                  info@growthikmedia.com
                </a>
              </div>
            </div>
          </div>

          {/* Premium Hero Graphic */}
          <div className="relative lg:block mt-12 lg:mt-0 w-full max-w-lg mx-auto lg:max-w-none">
            <div className="rounded-3xl relative bg-(--surface) border border-(--border) p-3 shadow-2xl transition-all hover:scale-[1.02] duration-500 overflow-hidden group">
              {/* Decorative Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/10 rounded-full blur-3xl group-hover:bg-red-600/20 transition-all"></div>
              
              {/* Header bar */}
              <div className="flex justify-between items-center p-4 border-b border-(--border) bg-(--surface) rounded-t-2xl">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-(--text-secondary) font-mono text-[10px] uppercase tracking-widest font-bold">
                  Growth Analytics &bull; Live
                </div>
              </div>

              {/* Metric Blocks */}
              <div className="p-6 grid grid-cols-2 gap-6 bg-(--surface-secondary)">
                {/* Block 1 */}
                <div className="rounded-2xl border border-(--border) p-6 bg-(--surface) relative overflow-hidden group/card shadow-sm hover:shadow-md transition-all">
                  <div className="relative z-10 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center mb-4">
                      <Users className="w-5 h-5 text-red-600" />
                    </div>
                    <p className="text-[10px] text-(--text-secondary) font-bold tracking-widest uppercase mb-1">
                      Traffic Growth
                    </p>
                    <p className="text-4xl font-black text-(--text-primary)">
                      +312%
                    </p>
                    <div className="mt-2 text-[10px] font-bold text-green-500 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
                      Real-time scaling
                    </div>
                  </div>
                </div>

                {/* Block 2 (Visual Chart) */}
                <div className="rounded-2xl border border-(--border) flex flex-col justify-end p-4 gap-2 h-44 bg-(--surface) overflow-hidden relative shadow-sm">
                   <div className="absolute inset-0 bg-gradient-to-t from-red-600/5 to-transparent"></div>
                  <div className="flex items-end gap-1.5 h-full">
                    <div className="rounded-full w-full bg-red-600/20 h-[30%] hover:scale-y-110 transition-transform origin-bottom cursor-pointer"></div>
                    <div className="rounded-full w-full bg-red-600/40 h-[50%] hover:scale-y-110 transition-transform origin-bottom cursor-pointer"></div>
                    <div className="rounded-full w-full bg-red-600 h-[85%] hover:scale-y-110 transition-transform origin-bottom cursor-pointer shadow-lg shadow-red-600/20"></div>
                    <div className="rounded-full w-full bg-red-600/60 h-[65%] hover:scale-y-110 transition-transform origin-bottom cursor-pointer"></div>
                  </div>
                  <div className="mt-2 text-[10px] text-(--text-secondary) font-bold text-center uppercase tracking-tighter">
                    Revenue Milestone
                  </div>
                </div>

                {/* Block 3 */}
                <div className="rounded-2xl col-span-2 border border-(--border) p-6 bg-black dark:bg-white/5 relative overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent"></div>
                  <div className="relative z-10 flex justify-between items-center">
                    <div>
                      <p className="text-xs text-white/60 dark:text-gray-400 font-bold tracking-widest uppercase mb-1">
                        Active Clients
                      </p>
                      <p className="text-5xl font-black text-white">50+</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-red-500 font-black text-2xl flex items-center gap-1">
                        ↑ Growing
                      </div>
                      <p className="text-[10px] text-white/40 font-bold uppercase">Pune &amp; India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
