"use client";

import React from "react";
import { Users, Calendar, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-b-2 border-black dark:border-white/10 bg-[url('/noise.png')]">
      {/* Creative Geometric Background */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20 dark:opacity-40">
        <div className="absolute top-0 right-0 w-[50vw] h-full border-l-2 border-black/10 dark:border-white/5 transform skew-x-12 translate-x-32  dark:bg-black"></div>
        <div className="absolute bottom-0 left-[10%] w-64 h-64 border-2 border-red-600/20 rotate-45 rounded-sm"></div>
        <div className="absolute top-[20%] left-[5%] w-32 h-32 bg-red-600/5 dark:bg-red-600/10 rounded-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h2 className="inline-flex items-center gap-3 px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-bold text-xs uppercase tracking-widest mb-8 border-l-4 border-red-600  rounded-sm">
              Digital Marketing Agency in Pune
            </h2>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 leading-[1.05] tracking-tight text-black dark:text-white uppercase transition-colors">
              Let’s Grow <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                Your Business
              </span>
              <br />
              Digitally.
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed border-l-2 border-gray-300 dark:border-gray-700 pl-6">
              Looking for a reliable digital marketing agency in Pune? Growthik
              Media helps businesses grow through SEO, social media marketing,
              PPC advertising, and high-performance websites.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12">
              <a
                href="#consultation"
                aria-label="Book a digital marketing strategy call"
                className="rounded-sm group relative px-8 py-5 bg-red-600 text-white font-black uppercase tracking-wider overflow-hidden w-full sm:w-auto text-center border-2 border-transparent hover:border-black dark:hover:border-white transition-all shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#fff] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px]"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Book Strategy Call
                </span>
                <div className="absolute inset-0 bg-red-700 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></div>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone.primary || "+918055754054"}`}
                aria-label="Call Growthik Media now"
                className="rounded-sm group relative px-8 py-5 bg-transparent border-2 border-black dark:border-white text-black dark:text-white font-black uppercase tracking-wider w-full sm:w-auto text-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-[6px_6px_0_#dc2626] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px]"
              >
                <span className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </span>
              </a>
            </div>

            {/* Contact Highlights - Sharp Grid */}
            <div className="rounded-sm grid grid-cols-2 gap-0 border-2 border-black dark:border-white/20 max-w-lg mx-auto lg:mx-0 bg-white dark:bg-black overflow-hidden">
              <div className="p-4 border-r-2 border-black dark:border-white/20 group cursor-pointer hover:bg-white dark:hover:bg-white/5 transition-colors">
                <p className="text-xs text-red-600 font-bold uppercase tracking-widest mb-1">
                  Phone
                </p>
                <a
                  href="tel:+918055754054"
                  className="text-base font-black text-black dark:text-white truncate block"
                >
                  +91 80557 54054
                </a>
              </div>
              <div className="p-4 group cursor-pointer hover:bg-white dark:hover:bg-white/5 transition-colors">
                <p className="text-xs text-red-600 font-bold uppercase tracking-widest mb-1">
                  Email
                </p>
                <a
                  href="mailto:info@growthikmedia.com"
                  className="text-base font-black text-black dark:text-white truncate block"
                >
                  info@growthikmedia.com
                </a>
              </div>
            </div>
          </div>

          {/* Brutalist Hero Graphic */}
          <div className="relative lg:block mt-12 lg:mt-0 w-full max-w-lg mx-auto lg:max-w-none perspective-none">
            <div className="rounded-sm relative bg-black dark:bg-black border-2 border-black dark:border-white/20 p-2 shadow-[12px_12px_0_#dc2626] transition-transform hover:-translate-y-2 hover:-translate-x-2 flex flex-col">
              {/* Header bar */}
              <div className="flex justify-between items-center p-3 border-b-2 border-gray-800 dark:border-white/10 bg-zinc-950 dark:bg-black rounded-t-sm">
                <div className="flex gap-2">
                  <div className="w-4 h-4 bg-red-600 rounded-sm"></div>
                  <div className="w-4 h-4 bg-white dark:bg-zinc-800 border border-black rounded-sm"></div>
                </div>
                {/* Fixing Hydration Error by hardcoding text to match what it natively produces */}
                <div className="text-white dark:text-gray-400 font-mono text-xs uppercase tracking-widest">
                  Metrics Dash
                </div>
              </div>

              {/* Metric Blocks */}
              <div className="rounded-b-sm p-4 grid grid-cols-2 gap-4 bg-white dark:bg-black">
                {/* Block 1 */}
                <div className="rounded-sm border-2 border-black dark:border-white/20 p-5 bg-white dark:bg-black relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-red-600 group-hover:scale-[15] transition-transform duration-500 origin-top-right z-0"></div>
                  <div className="relative z-10 transition-colors">
                    <Users className="w-6 h-6 text-black dark:text-white group-hover:text-white mb-4" />
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-bold tracking-widest uppercase mb-1 group-hover:text-white/80">
                      Traffic
                    </p>
                    <p className="text-3xl font-black text-black dark:text-white group-hover:text-white">
                      +300%
                    </p>
                  </div>
                </div>

                {/* Block 2 (Chart) */}
                <div className="rounded-sm border-2 border-black dark:border-white/20 flex flex-col justify-end p-2 gap-1 h-36 bg-white dark:bg-black overflow-hidden relative">
                  <div className="rounded-t-sm w-full bg-black dark:bg-white/20 h-[30%] hover:bg-red-600 transition-colors"></div>
                  <div className="rounded-t-sm w-full bg-black dark:bg-white/40 h-[50%] hover:bg-red-600 transition-colors"></div>
                  <div className="rounded-t-sm w-full bg-red-600 h-[80%] group cursor-crosshair"></div>
                  <span className="absolute top-[10%] left-1/2 -translate-x-1/2 bg-black text-white dark:bg-white dark:text-black text-[10px] font-black uppercase py-1 px-2 rounded-sm shadow-sm opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
                    Q4 Hits
                  </span>
                </div>

                {/* Block 3 */}
                <div className="rounded-sm col-span-2 border-2 border-black dark:border-white/20 p-5 bg-black dark:bg-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent dark:from-black"></div>
                  <div className="relative z-10 flex justify-between items-end">
                    <div>
                      <p className="text-xs text-gray-400 font-bold tracking-widest uppercase mb-1">
                        Conversions
                      </p>
                      <p className="text-5xl font-black text-white">1,248</p>
                    </div>
                    <div className="text-red-500 font-black text-xl border-b-2 border-red-500">
                      ↑ 14%
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
