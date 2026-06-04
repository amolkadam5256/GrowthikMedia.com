import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, Award, ArrowRight, Target, Filter, TrendingUp, Rocket } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import { ServiceFAQ } from "@/components/PublicComponents/common/ServiceFAQ";
import { LEAD_GEN_FAQ } from "@/constants/faqData";

const slug = "lead-generation";
const title = "Lead Generation Agency in Pune | Predictable Revenue Systems | Growthik";
const description = "Top lead generation agency in Pune. We build automated B2B & B2C lead systems using Google Ads, Meta Ads & LinkedIn for startups in Baner & Hinjewadi.";
const h1 = "Lead Generation Agency in Pune";
const canonical = `https://www.growthikmedia.com/services/${slug}/`;
const features = ["B2B Lead Acquisition", "Meta Lead Gen Ads", "Google Ads Optimization", "High-Converting Landing Pages", "CRM & Sales Alignment", "Lead Scoring Systems"];

export const metadata: Metadata = {
  title, description, alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "Growthik Media",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Lead Generation Agency Pune" }]
  },
};

export default function LeadGenerationPage() {
  const service = "Lead Generation";
  return (
    <>
      <Script id={`schema-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Performance Lead Generation Pune",
          "serviceType": service,
          "provider": { "@id": `${CONTACT_INFO.website}/#localbusiness` },
          "areaServed": { "@type": "City", name: "Pune" },
          "aggregateRating": { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "138" },
        })
      }} />
      <main className="bg-(--background) min-h-screen pt-24 overflow-hidden text-(--text-primary) font-sans">
        <header className="relative px-6 lg:px-12 py-20 lg:py-32 flex flex-col items-center text-center bg-(--surface) overflow-hidden border-b border-(--border)">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-(--color-primary)/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--background) border border-(--border) shadow-sm mb-6 text-sm font-bold text-(--color-primary) tracking-wide uppercase">
              <Target className="w-4 h-4" /> Revenue Engineering
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[1.1] uppercase text-(--text-primary)">
              Qualified Leads, <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) to-orange-500">Not Just Traffic.</span>
            </h1>
            <p className="text-lg md:text-xl text-(--text-secondary) font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
              Stop paying for clicks that don&apos;t convert. We build <strong>Predictable Lead Systems</strong> that deliver a consistent flow of high-intent prospects for <strong>Pune&apos;s fastest-growing brands</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/contact" className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg shadow-(--color-primary)/30 flex items-center justify-center gap-2 w-full sm:w-auto">Build Your Lead Engine <ArrowRight className="w-5 h-5" /></Link>
              <Link href="tel:+918055754054" className="px-8 py-4 bg-(--surface) text-(--text-primary) border border-(--border) font-bold rounded-xl hover:bg-(--border) transition-all flex items-center justify-center gap-2 w-full sm:w-auto">Growth Audit</Link>
            </div>
          </div>
        </header>

        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight text-(--text-primary)">From Lead Generation to Revenue Realization</h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>
              <p className="text-(--text-secondary) font-medium text-lg mb-6 leading-relaxed">
                We replace guesswork with <strong>Data-Driven Acquisition</strong>. Our systems track the entire funnel—from the first click in <strong>Baner</strong> to the final contract signed in <strong>Hinjewadi</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                 {[
                    { title: "Lead Scoring", icon: <Filter className="w-5 h-5 text-(--color-primary)" /> },
                    { title: "CRM Syncing", icon: <TrendingUp className="w-5 h-5 text-(--color-primary)" /> },
                 ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-(--surface) rounded-xl border border-(--border)">
                        {item.icon}
                        <span className="font-bold text-(--text-primary)">{item.title}</span>
                    </div>
                 ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-(--surface) p-6 rounded-2xl border border-(--border) group hover:border-(--color-primary) transition-all">
                  <CheckCircle2 className="w-10 h-10 text-(--color-primary) mb-4 opacity-70 group-hover:opacity-100" />
                  <h3 className="font-bold text-lg mb-2 text-(--text-primary)">{feature}</h3>
                  <p className="text-xs text-(--text-secondary)">Engineered to lower your CPA and increase your pipeline velocity.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceFAQ 
          faqs={LEAD_GEN_FAQ} 
          title="Lead Generation: Systems & ROI"
          subtitle="Discover how we build high-performance acquisition engines for Pune's market leaders."
        />

        {/* CTA Section */}
        <section className="px-6 lg:px-12 py-24 bg-(--surface) border-y border-(--border)">
           <div className="max-w-4xl mx-auto text-center border-2 border-(--color-primary)/20 p-12 rounded-[2.5rem] bg-(--background)">
            <h2 className="text-3xl font-black mb-6 uppercase">Ready to Fill Your Sales Pipeline?</h2>
            <p className="text-lg text-(--text-secondary) mb-8 font-medium italic">Stop chasing leads and start attracting them. Get a custom acquisition roadmap for your Pune business today.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-(--color-primary) text-white font-black rounded-2xl hover:scale-105 transition-all shadow-2xl uppercase tracking-tighter">Get Free Acquisition Plan <Rocket className="w-5 h-5" /></Link>
          </div>
        </section>
      </main>
    </>
  );
}
