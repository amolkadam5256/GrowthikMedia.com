import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import FAQSchema from "@/components/PublicComponents/structured-data/FAQSchema";
import {
  CheckCircle2,
  ArrowRight,
  Instagram,
  Facebook,
  Rocket,
  Palette,
  Target
} from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Meta Ads Agency in Pune | Instagram & Facebook Ads | Growthik",
  description: "ROI-driven Meta Ads (Facebook & Instagram) management in Pune. Custom creative strategies and data-led scaling for brands in Baner, Hinjewadi & Wakad.",
  alternates: {
    canonical: "https://www.growthikmedia.com/services/meta-ads/",
  },
  openGraph: {
    title: "Meta Ads Agency in Pune | Instagram & Facebook Ads | Growthik",
    description: "ROI-driven Meta Ads (Facebook & Instagram) management in Pune. Custom creative strategies and data-led scaling for brands in Baner, Hinjewadi & Wakad.",
    url: `${CONTACT_INFO.website}/services/meta-ads/`,
    siteName: "Growthik Media",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Meta Ads Agency Pune" }]
  },
};

export default function MetaAdsPage() {
  const serviceName = "Meta Ads";
  const h1 = "Meta Ads Agency in Pune";
  const features = ["Instagram Reels Strategy", "Facebook Advantage+ Ads", "UGC Creative Production", "Dynamic Product Catalog", "Multi-Stage Retargeting", "Custom CAPI Integration"];

  return (
    <>
      <Script
        id="schema-meta-ads"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Meta Ads Management Pune",
            "serviceType": serviceName,
            "provider": { "@id": `${CONTACT_INFO.website}/#localbusiness` },
            "areaServed": { "@type": "City", name: "Pune" },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "140",
            },
          }),
        }}
      />
      <FAQSchema
        questions={[
          { q: "Why hire a Meta Ads agency in Pune for Instagram scaling?", a: "We understand the local Pune demographics—from the Gen-Z audience in FC Road to the tech-savvy crowd in Hinjewadi. Our creative-first approach ensures your Reels and Stories stop the scroll and drive action." },
          { q: "What is the minimum budget for Facebook Ads?", a: "While you can start with ₹500/day, we recommend at least ₹1,500/day for Pune-based businesses to gather enough data for the algorithm to optimize effectively." },
          { q: "How do you handle iOS 14+ tracking issues?", a: "We implement Meta Conversions API (CAPI) on your Next.js site to bypass browser tracking limitations, ensuring 95%+ attribution accuracy for your leads and sales." },
          { q: "Do you create the ad graphics and videos?", a: "Yes, we have an in-house creative team specializing in high-converting ad visuals, Reels, and static graphics designed for maximum engagement." },
          { q: "How long until we see sales from Meta Ads?", a: "Most brands see initial engagement and 'Top of Funnel' results within 7 days. Scalable ROI generally compounds after 3-4 weeks of creative testing and audience refinement." },
          { q: "Can we target specific Pune areas like Wakad or Aundh?", a: "Yes, we use hyper-local geo-targeting to reach users within a specific radius of your physical location or within high-spending Pune zip codes." },
          { q: "Do you manage both Facebook and Instagram?", a: "Absolutely. We manage your entire Meta ecosystem, including Messenger, Audience Network, and Threads, to ensure a unified brand presence." },
          { q: "What is your management fee for Meta Ads?", a: "Our management fees start from ₹15,000 per month for small local businesses and scale based on your monthly ad spend and creative requirements." }
        ]}
      />
      <main className="bg-(--background) min-h-screen pt-24 overflow-hidden text-(--text-primary) font-sans">
        <header className="relative px-6 lg:px-12 py-20 lg:py-32 flex flex-col items-center text-center bg-(--surface) overflow-hidden border-b border-(--border)">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-(--color-primary)/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--background) border border-(--border) shadow-sm mb-6 text-sm font-bold text-(--color-primary) tracking-wide uppercase">
              <Instagram className="w-4 h-4" /> Scroll-Stopping Creativity
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[1.1] uppercase text-(--text-primary)">
              Scale Your Feed: <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) to-blue-500">{h1}</span>
            </h1>
            <p className="text-lg md:text-xl text-(--text-secondary) font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
              We build visual-first ad systems for Pune brands near <strong>Balewadi High Street, Aundh, and Baner</strong> that turn casual browsers into loyal customers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/audit" className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg shadow-(--color-primary)/30 flex items-center justify-center gap-2 w-full sm:w-auto">Get Free Ad Audit <ArrowRight className="w-5 h-5" /></Link>
              <Link href="/contact" className="px-8 py-4 bg-(--surface) text-(--text-primary) border border-(--border) font-bold rounded-xl hover:bg-(--border) transition-all flex items-center justify-center gap-2 w-full sm:w-auto">Book Strategy Call</Link>
            </div>
            <div className="flex items-center justify-center gap-6 text-xs md:text-sm font-bold text-(--text-secondary) uppercase tracking-wider flex-wrap">
              <span className="flex items-center gap-2"><Facebook className="w-4 h-4 text-blue-600" /> Facebook Ads</span>
              <span className="flex items-center gap-2"><Instagram className="w-4 h-4 text-pink-500" /> Instagram Reels</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Meta CAPI Ready</span>
            </div>
          </div>
        </header>

        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight text-(--text-primary)">Targeting That Actually Converts</h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>
              <p className="text-(--text-secondary) font-medium text-lg mb-6 leading-relaxed">
                Generic targeting is dead. We use <strong>machine-learning algorithms, custom audiences, and high-velocity testing</strong> to find your ideal Pune customers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                 {[
                   { icon: Palette, title: "Creative Focus", desc: "Ads that don't look like ads. Reels that trend in Pune." },
                   { icon: Target, title: "Pixel & CAPI", desc: "No more data gaps. We track every click and conversion." }
                 ].map((item, idx) => (
                   <div key={idx} className="p-4 bg-(--surface) rounded-2xl border border-(--border)">
                     <item.icon className="w-6 h-6 text-(--color-primary) mb-2" />
                     <h4 className="font-bold text-sm">{item.title}</h4>
                     <p className="text-xs text-(--text-secondary)">{item.desc}</p>
                   </div>
                 ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-(--surface) p-6 rounded-2xl border border-(--border) group hover:border-(--color-primary) transition-all">
                  <CheckCircle2 className="w-10 h-10 text-(--color-primary) mb-4 opacity-70 group-hover:opacity-100" />
                  <h3 className="font-bold text-lg mb-2 text-(--text-primary)">{feature}</h3>
                  <p className="text-xs text-(--text-secondary)">Engineered for the 2026 Meta algorithm.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audit Callout */}
        <section className="px-6 lg:px-12 py-20 bg-(--surface) border-y border-(--border)">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl font-black mb-6 uppercase">Is Your Meta Pixel Firing Correctly?</h2>
             <p className="text-(--text-secondary) mb-10">Most agencies ignore technical setup. We audit your CAPI, Pixel, and Catalog to ensure you're not flying blind.</p>
             <Link href="/audit" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white dark:bg-white dark:text-black font-black rounded-2xl hover:scale-105 transition-all">Audit My Meta Account <Rocket className="w-5 h-5" /></Link>
          </div>
        </section>
      </main>
    </>
  );
}
