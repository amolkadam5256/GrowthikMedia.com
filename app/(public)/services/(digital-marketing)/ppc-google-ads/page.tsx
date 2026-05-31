import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

import FAQSchema from "@/components/PublicComponents/structured-data/FAQSchema";
import { Target, MousePointer2, TrendingUp, BarChart, Rocket } from "lucide-react";

const slug = "ppc-google-ads";
const title = "Google Ads Agency in Pune | High ROI PPC Management | Growthik";
const description = "Certified Google Ads agency in Pune. Maximizing ROAS and lead quality with data-driven PPC strategies for Pune businesses in Baner, Hinjewadi & Kharadi.";
const h1 = "Google Ads Agency in Pune";
const canonical = `https://www.growthikmedia.com/services/${slug}/`;
const features = ["Search & Performance Max", "Remarketing Display Ads", "E-commerce Shopping Ads", "B2B Lead Generation Ads", "Landing Page CRO", "Negative Keyword Scrubbing"];

export const metadata: Metadata = {
  title, description, alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "Growthik Media",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Google Ads Agency Pune" }]
  },
};

export default function GoogleAdsPage() {
  const service = "Google Ads";
  return (
    <>
      <Script id={`schema-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Google Ads PPC Management Pune",
        "serviceType": service,
        "provider": { "@id": `${CONTACT_INFO.website}/#localbusiness` },
        "areaServed": { "@type": "City", name: "Pune" },
        "aggregateRating": { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "135" },
      })}} />
      <FAQSchema
        questions={[
          {
            q: "Why should I hire a Google Ads agency in Pune instead of doing it myself?",
            a: "A professional agency like Growthik Media optimizes your Quality Score, reduces CPC (Cost Per Click), and ensures your budget isn't wasted on irrelevant 'junk' keywords. We focus on conversion tracking to ensure every rupee spent contributes to your ROI."
          },
          {
            q: "What is the management fee for Google Ads in Pune?",
            a: "Our management fees typically start from ₹15,000 per month or a percentage of the ad spend, depending on the complexity of your campaigns and the number of search channels involved."
          },
          {
            q: "How do you track leads from Google Ads?",
            a: "We implement advanced server-side GTM tracking, Meta Pixel, and Google Ads Conversion Tags to track everything from form submissions to WhatsApp clicks and phone calls."
          },
          {
            q: "Do you focus on ROAS or just traffic?",
            a: "Traffic is a vanity metric. We focus strictly on ROAS (Return on Ad Spend) and CPL (Cost Per Lead) to ensure your business stays profitable while scaling."
          },
          {
            q: "Can you target specific areas like Hinjewadi or Baner?",
            a: "Yes, we use hyper-local geo-fencing to show your ads only to people within specific Pune neighborhoods or near major landmarks like EON IT Park or Magarpatta City."
          },
          {
            q: "Do you provide landing pages for PPC?",
            a: "Absolutely. We build high-performance Next.js landing pages that score 90+ on PageSpeed Insights, which significantly improves your ad rank and conversion rates."
          },
          {
            q: "How soon can we see leads from Google Ads?",
            a: "Unlike SEO, Google Ads provides immediate visibility. Most of our clients start seeing qualified inquiries within the first 48-72 hours of campaign launch."
          },
          {
            q: "Are you a certified Google Partner agency?",
            a: "Yes, our team consists of certified Google Ads experts with over 7 years of experience in managing high-ticket budgets for B2B and D2C brands."
          }
        ]}
      />
      <main className="bg-(--background) min-h-screen pt-24 overflow-hidden text-(--text-primary) font-sans">
        <header className="relative px-6 lg:px-12 py-20 lg:py-32 flex flex-col items-center text-center bg-(--surface) overflow-hidden border-b border-(--border)">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-(--color-primary)/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--background) border border-(--border) shadow-sm mb-6 text-sm font-bold text-(--color-primary) tracking-wide uppercase">
              <Target className="w-4 h-4" /> Certified PPC Experts
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[1.1] uppercase text-(--text-primary)">
              Buy Leads, Not Clicks: <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) to-blue-500">{h1}</span>
            </h1>
            <p className="text-lg md:text-xl text-(--text-secondary) font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
              Stop bleeding budget on broad keywords. We build surgical PPC campaigns for Pune companies targeting <strong>IT professionals in Hinjewadi and HNIs in Baner & Aundh</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/audit" className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg shadow-(--color-primary)/30 flex items-center justify-center gap-2 w-full sm:w-auto">Get Free Ad Audit <ArrowRight className="w-5 h-5" /></Link>
              <Link href="tel:+918055754054" className="px-8 py-4 bg-(--surface) text-(--text-primary) border border-(--border) font-bold rounded-xl hover:bg-(--border) transition-all flex items-center justify-center gap-2 w-full sm:w-auto">Talk to Strategist</Link>
            </div>
            <p className="text-sm text-(--text-secondary)">Average Result: 22% reduction in Cost-Per-Lead (CPL) within the first 30 days of management.</p>
          </div>
        </header>

        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight text-(--text-primary)">Scale Your Revenue With Precision {service}</h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>
              <p className="text-(--text-secondary) font-medium text-lg mb-6 leading-relaxed">
                Generic ad campaigns don't work in competitive markets. We've engineered a data-led approach that focuses on <strong>Lead Quality, Search Impression Share, and Conversion Value</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                 {[
                   { icon: MousePointer2, title: "Lower CPC", desc: "Optimizing Quality Score to pay less than your competitors." },
                   { icon: TrendingUp, title: "Higher ROAS", desc: "Scientific bidding strategies that maximize your return." }
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
                  <BarChart className="w-10 h-10 text-(--color-primary) mb-4 opacity-70 group-hover:opacity-100" />
                  <h3 className="font-bold text-lg mb-2 text-(--text-primary)">{feature}</h3>
                  <p className="text-xs text-(--text-secondary)">Engineered for maximum ROI in the Pune market.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audit Callout */}
        <section className="px-6 lg:px-12 py-20 bg-(--surface) border-y border-(--border)">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl font-black mb-6 uppercase">Are You Wasting 30% of Your Ad Budget?</h2>
             <p className="text-(--text-secondary) mb-10">Most Pune businesses are losing money on 'Broad Match' keywords and poor landing pages. We'll audit your account for FREE and show you the gaps.</p>
             <Link href="/audit" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white dark:bg-white dark:text-black font-black rounded-2xl hover:scale-105 transition-all">Analyze My Google Ads <Rocket className="w-5 h-5" /></Link>
          </div>
        </section>
      </main>
    </>
  );
}
