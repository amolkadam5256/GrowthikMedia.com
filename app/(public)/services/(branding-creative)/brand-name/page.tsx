import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Award, CheckCircle2, ArrowRight, Zap, Target, Lightbulb, Compass, ShieldCheck, Rocket, Sparkles, Globe } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

const slug = "brand-name";
const title = "Brand Naming Agency in Pune | Creative Brand Names | Growthik Media";
const description = "Creative brand naming in Pune. Unique, memorable brand names for startups and products. Trademark-friendly naming.";
const h1 = "Brand Naming Agency in Pune";
const canonical = `https://www.growthikmedia.com/services/${slug}/`;

const features = [
  { title: "Brand Name Research", desc: "Deep market analysis to find naming gaps." },
  { title: "Creative Naming", desc: "Generating memorable and impactful name ideas." },
  { title: "Trademark Check", desc: "Ensuring your name is legally protectable." },
  { title: "Domain Availability", desc: "Securing the perfect .com or relevant extension." },
  { title: "Tagline Creation", desc: "Crafting a punchy line that explains your brand." },
  { title: "Naming Guidelines", desc: "Rules on how to use your new brand name." }
];

const processSteps = [
  { icon: Target, title: "1. Discovery & Strategy", desc: "We dive deep into your business goals, target audience, and market landscape." },
  { icon: Lightbulb, title: "2. Ideation & Brainstorming", desc: "Our creative team generates hundreds of potential names based on strategic angles." },
  { icon: ShieldCheck, title: "3. Screening & Vetting", desc: "We filter names for trademark viability, domain availability, and linguistic checks." },
  { icon: Rocket, title: "4. Presentation & Selection", desc: "We present the top contenders with rationales, helping you choose the perfect fit." }
];

export const metadata: Metadata = {
  title, description, alternates: { canonical },
  openGraph: { title, description, url: canonical, siteName: "Growthik Media", locale: "en_IN", type: "website" },
};

export default function BrandNamePage() {
  const service = "Brand Naming";
  return (
    <>
      <Script id={`schema-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Service", serviceType: service, provider: { "@id": `${CONTACT_INFO.website}/#localbusiness` }, areaServed: { "@type": "City", name: "Pune" }, aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "138" },
        })
      }} />
      <main className="min-h-screen pt-24 overflow-hidden font-sans bg-(--background) text-(--text-primary) selection:bg-(--color-primary) selection:text-white transition-colors duration-300">

        {/* HERO SECTION */}
        <header className="relative px-6 lg:px-12 pt-24 pb-16 lg:pt-28 lg:pb-24 bg-(--surface) overflow-hidden border-b border-(--border) min-h-[80vh] flex items-center">
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-(--color-primary)/10 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-pulse pointer-events-none" />
          <div className="absolute bottom-0 left-[-200px] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] opacity-50 pointer-events-none" />

          <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="col-span-1 lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--background) text-(--text-primary) font-bold tracking-widest uppercase text-xs mb-8 shadow-sm border border-(--border) hover:border-(--color-primary) transition-colors cursor-default">
                <span className="relative flex h-3 w-3 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--color-primary) opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-(--color-primary)"></span>
                </span>
                Local Digital Marketing Agency In Pune
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-[1.1] text-(--text-primary)">
                Brand Names That <br className="hidden lg:block" />
                <span className="relative inline-block mt-1 mb-2">
                  <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) via-red-500 to-orange-500 animate-gradient bg-300%">
                    Dominate Markets.
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-3 bg-(--color-primary)/20 blur-sm rounded-full"></div>
                </span>
              </h1>

              <p className="text-lg text-(--text-secondary) font-medium max-w-xl mb-10 leading-relaxed">
                As a top <strong className="text-(--color-primary)">local digital marketing agency in Pune</strong>, we know your name is your highest-leverage asset. We engineer distinctive, trademarkable identities designed to scale your business.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link href="/contact" className="px-8 py-5 bg-(--color-primary) text-white font-black uppercase tracking-wider rounded-xl hover:bg-(--color-primary-light) hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_40px_-10px_var(--color-primary)] flex items-center justify-center gap-3 w-full sm:w-auto group">
                  Book A Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex -space-x-3 mt-4 sm:mt-0">
                  <div className="w-12 h-12 rounded-full bg-(--surface-secondary) border-2 border-(--border) flex items-center justify-center font-bold text-(--text-primary) z-30 shadow-sm">A+</div>
                  <div className="w-12 h-12 rounded-full bg-(--surface-secondary) border-2 border-(--border) flex items-center justify-center font-bold text-(--text-primary) z-20 shadow-sm">TM</div>
                  <div className="w-12 h-12 rounded-full bg-blue-50 border-2 border-(--border) flex items-center justify-center font-bold text-blue-600 z-10 shadow-sm">.com</div>
                </div>
              </div>
            </div>

            {/* Right Visual/Interactive Column */}
            <div className="col-span-1 lg:col-span-5 relative hidden lg:block perspective-1000">
              <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">

                {/* Core Engine Background Rings */}
                <div className="absolute inset-0 rounded-full border border-(--border) animate-[spin_20s_linear_infinite] opacity-50 border-dashed"></div>
                <div className="absolute inset-4 rounded-full border border-(--color-primary)/30 animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute inset-12 rounded-full border border-(--border) animate-[spin_25s_linear_infinite] opacity-30"></div>

                {/* Central Focus Element */}
                <div className="relative z-20 bg-(--surface) border border-(--border) p-8 rounded-full shadow-[0_0_60px_-15px_var(--color-primary)] w-64 h-64 flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-500">
                  <Sparkles className="w-10 h-10 text-(--color-primary) mb-3 animate-pulse" />
                  <div className="text-[10px] font-bold text-(--text-secondary) uppercase tracking-widest mb-1">Generated Name</div>
                  <h3 className="text-3xl font-black text-(--text-primary) bg-clip-text text-transparent bg-linear-to-r from-(--text-primary) to-(--text-secondary)">Growthik</h3>
                  <div className="mt-4 px-3 py-1 bg-(--surface-secondary) rounded-full text-[10px] font-bold text-green-500 uppercase border border-(--border)">100% Unique</div>
                </div>

                {/* Satellite Metrics/Tags */}
                <div className="absolute top-[10%] left-0 bg-(--surface-secondary) border border-(--border) px-4 py-2 rounded-xl shadow-lg transform -rotate-6 hover:-translate-y-2 transition-all duration-300 z-30 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-bold text-(--text-primary)">TM Available</span>
                </div>

                <div className="absolute bottom-[20%] right-[-10px] bg-(--surface-secondary) border border-(--border) px-4 py-2 rounded-xl shadow-lg transform rotate-6 hover:-translate-y-2 transition-all duration-300 z-30 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-green-500" />
                  <span className="text-xs font-bold text-(--text-primary)">.com Secured</span>
                </div>

                <div className="absolute top-[30%] right-[-20px] bg-(--surface-secondary) border border-(--border) px-4 py-2 rounded-xl shadow-lg transform rotate-3 hover:-translate-y-2 transition-all duration-300 z-30 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs font-bold text-(--text-primary)">High Recall</span>
                </div>

                <div className="absolute bottom-[15%] left-[5%] bg-(--surface-secondary) border border-(--border) px-4 py-2 rounded-xl shadow-lg transform -rotate-3 hover:-translate-y-2 transition-all duration-300 z-30 flex items-center gap-2">
                  <Target className="w-4 h-4 text-(--color-primary)" />
                  <span className="text-xs font-bold text-(--text-primary)">Market Fit: 99%</span>
                </div>

              </div>
            </div>

          </div>
        </header>

        {/* THE PROBLEM / SOLUTION SECTION */}
        <section className="px-6 lg:px-12 py-24 bg-(--background)">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tighter leading-tight text-(--text-primary)">
                Generic Names <br /><span className="text-(--color-primary)">Don't Work.</span>
              </h2>
              <div className="w-20 h-2 bg-(--color-primary) mb-8"></div>
              <p className="text-(--text-secondary) font-medium text-lg mb-6 leading-relaxed">
                As a specialist operating in this sector, we've engineered a predictable branding matrix. Your name is the first touchpoint your customer has with your business. If it doesn't resonate instantly, you're losing money.
              </p>
              <p className="text-(--text-primary) font-bold text-xl mb-8 border-l-4 border-(--color-primary) pl-6">
                Our focus is entirely on increasing your brand equity from day one through strategic, trademarkable naming.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm font-bold uppercase tracking-wider mt-10 text-(--text-primary)">
                <div className="flex items-center gap-2"><CheckCircle2 className="text-(--color-primary) w-6 h-6" /> Data-Driven Selection</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="text-(--color-primary) w-6 h-6 ml-2" /> Linguistic Precision</div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-(--surface-secondary) p-8 hover:bg-(--surface) transition-colors duration-300 group border border-(--border) shadow-sm rounded-xl">
                  <Zap className="w-8 h-8 text-(--color-primary) mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-black text-xl mb-3 uppercase tracking-tight text-(--text-primary)">{feature.title}</h3>
                  <p className="text-sm font-medium text-(--text-secondary)">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR PROCESS SECTION */}
        <section className="px-6 lg:px-12 py-24 bg-(--surface) relative border-y border-(--border)">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-(--text-primary)">Our Naming Process</h2>
              <p className="text-lg font-medium text-(--text-secondary) max-w-2xl mx-auto">A rigorous, multi-stage methodology designed to uncover the perfect name for your business.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="bg-(--surface-secondary) p-8 border border-(--border) hover:border-(--color-primary) transition-colors duration-300 rounded-2xl shadow-sm">
                    <div className="w-16 h-16 bg-(--background) text-(--color-primary) flex items-center justify-center rounded-xl mb-8 border border-(--border) shadow-sm">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-black mb-4 uppercase text-(--text-primary)">{step.title}</h3>
                    <p className="text-(--text-secondary) font-medium leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TYPOGRAPHY MARQUEE */}
        <section className="py-24 bg-(--surface-secondary) overflow-hidden flex items-center border-b border-(--border) group">
          <div className="whitespace-nowrap flex gap-8 animate-pulse transition-transform duration-[10000ms] group-hover:-translate-x-[20%]">
            {[...Array(2)].map((_, i) => (
              <h2 key={i} className="text-5xl md:text-7xl font-black uppercase text-transparent" style={{ WebkitTextStroke: '2px var(--color-primary)' }}>
                MEMORABLE • DISTINCTIVE • PROTECTABLE •
              </h2>
            ))}
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="px-6 lg:px-12 py-32 bg-(--background) text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <Compass className="w-16 h-16 mx-auto text-(--color-primary) mb-8 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-(--text-primary)">
              Ready to find your <span className="text-(--color-primary)">Identity?</span>
            </h2>
            <p className="text-xl text-(--text-secondary) font-medium mb-12">
              Let's craft a name that turns heads and opens wallets.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-(--color-primary) text-white font-black uppercase tracking-widest text-lg hover:bg-(--color-primary-light) transition-all duration-300 shadow-lg shadow-(--color-primary)/30 rounded-xl hover:-translate-y-1">
              Get A Free Consultation <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
