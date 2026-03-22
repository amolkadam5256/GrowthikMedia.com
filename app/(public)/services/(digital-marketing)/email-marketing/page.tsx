import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  CheckCircle2,
  Award,
  ArrowRight,
} from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Email Marketing Agency in Pune | Growthik Media",
  description: "High-ROI email marketing campaigns for Pune businesses. Newsletters, drip sequences, automation and list management.",
  alternates: {
    canonical: "https://www.growthikmedia.com/services/email-marketing/",
  },
  openGraph: {
    title: "Email Marketing Agency in Pune | Growthik Media",
    description: "High-ROI email marketing campaigns for Pune businesses. Newsletters, drip sequences, automation and list management.",
    url: `${CONTACT_INFO.website}/services/email-marketing/`,
    siteName: "Growthik Media",
    locale: "en_IN",
    type: "website",
  },
};

export default function EmailMarketingPage() {
  const serviceName = "Email Marketing";
  const h1 = "Email Marketing Agency in Pune";
  const features = ["Campaign Design", "Drip Sequences", "List Management", "Automation", "A/B Testing", "Performance Reports"];

  return (
    <>
      <Script
        id="schema-email-marketing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: serviceName,
            provider: { "@id": `${CONTACT_INFO.website}/#localbusiness` },
            areaServed: { "@type": "City", name: "Pune" },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "138",
            },
          }),
        }}
      />
      <main className="bg-(--background) min-h-screen pt-24 overflow-hidden text-(--text-primary) font-sans">
        <header className="relative px-6 lg:px-12 py-20 lg:py-32 flex flex-col items-center text-center bg-(--surface) overflow-hidden border-b border-(--border)">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-(--color-primary)/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--background) border border-(--border) shadow-sm mb-6 text-sm font-bold text-(--color-primary) tracking-wide uppercase">
              <Award className="w-4 h-4" /> Specialized Agency Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tighter leading-[1.1] uppercase text-(--text-primary)">{h1}</h1>
            <p className="text-lg md:text-xl text-(--text-secondary) font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
              We understand that standing out in the highly competitive Pune market is your biggest hurdle. That&apos;s why Growthik Media builds data-driven revenue systems designed specifically for your needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/contact" className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg shadow-(--color-primary)/30 flex items-center justify-center gap-2 w-full sm:w-auto">
                Book Your Free Strategy Call <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm font-bold text-(--text-secondary) uppercase tracking-wider flex-wrap">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Professional Service</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Data-Driven Approach</span>
            </div>
          </div>
        </header>
        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight text-(--text-primary)">Scale Your Brand With Precision {serviceName}</h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>
              <p className="text-(--text-secondary) font-medium text-lg mb-6 leading-relaxed">
                Generic solutions don&apos;t work. As a specialist operating in this sector, we&apos;ve engineered a predictable growth matrix. Our focus is entirely on increasing your brand value while lowering your acquisition costs.
              </p>
              <div className="bg-(--surface) border-l-4 border-(--color-primary) p-6 rounded-r-xl shadow-sm">
                <p className="text-xl text-(--text-primary) font-bold">Why Growthik Media?</p>
                <p className="mt-2 text-(--text-secondary) font-medium">We replace guesswork with data. Our AI-powered strategies ensure that your investment yields compounding returns month over month.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-(--surface) p-6 rounded-2xl border border-(--border)">
                  <CheckCircle2 className="w-10 h-10 text-(--color-primary) mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-(--text-primary)">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
