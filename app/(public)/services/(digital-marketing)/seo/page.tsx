import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Award, CheckCircle2, ArrowRight, BarChart2, Rocket } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import { ServiceFAQ } from "@/components/PublicComponents/common/ServiceFAQ";
import { SEO_FAQ } from "@/constants/faqData";

const slug = "seo";
const title = "SEO Company in Pune | Growthik Media";
const description = "Top-rated SEO company in Pune. Rank on Page 1 of Google with our data-driven SEO strategies. Get a free SEO audit today.";
const h1 = "SEO Company in Pune";
const canonical = "/services/seo/";
const features = ["Technical SEO Audit", "Keyword Research", "On-Page SEO", "Authority Link Building", "Content Hub Strategy", "Quarterly ROI Reports"];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, siteName: "Growthik Media", locale: "en_IN", type: "website" },
};

export default function SEOCompanyPunePage() {
  const service = "SEO";
  return (
    <>
      <Script id={`schema-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Professional SEO Services Pune",
        "serviceType": service,
        "provider": { "@id": `${CONTACT_INFO.website}/#localbusiness` },
        "areaServed": { "@type": "City", name: "Pune" },
        "aggregateRating": { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "142" },
      })}} />
      <main className="bg-(--background) min-h-screen pt-24 overflow-hidden text-(--text-primary) font-sans">
        <header className="relative px-6 lg:px-12 py-20 lg:py-32 flex flex-col items-center text-center bg-(--surface) overflow-hidden border-b border-(--border)">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-(--color-primary)/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--background) border border-(--border) shadow-sm mb-6 text-sm font-bold text-(--color-primary) tracking-wide uppercase">
              <Award className="w-4 h-4" /> Growth Engineering Agency
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[1.1] uppercase text-(--text-primary)">
              Scale Organic Revenue: <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) to-blue-500">{h1}</span>
            </h1>
            <p className="text-lg md:text-xl text-(--text-secondary) font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
              Skip the agency fluff. We build conversion-led SEO systems for brands near <strong>Hinjewadi IT Park, Baner High Street, and Warje</strong> that turn searchers into loyal customers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/audit" className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg shadow-(--color-primary)/30 flex items-center justify-center gap-2 w-full sm:w-auto">Get Your Free SEO Audit <ArrowRight className="w-5 h-5" /></Link>
              <Link href="/contact" className="px-8 py-4 bg-(--surface) text-(--text-primary) border border-(--border) font-bold rounded-xl hover:bg-(--border) transition-all flex items-center justify-center gap-2 w-full sm:w-auto">Strategy Call</Link>
            </div>
            <p className="text-sm text-(--text-secondary)">Verified Result: We deliver technical on-page fixes in Week 1, with organic traffic doubling for most clients in 4–6 months.</p>
          </div>
        </header>

        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight text-(--text-primary)">Science-Backed Search Optimization</h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>
              <p className="text-(--text-secondary) font-medium text-lg mb-6 leading-relaxed">
                Generic SEO is dead. In the age of AI search (GEO), you need an agency that understands <strong>entity-based optimization, Core Web Vitals, and intent mapping</strong>.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Avg. traffic lift", value: "41% in 90 days" },
                  { label: "Core Web Vitals score", value: "95+ on Mobile" },
                  { label: "High-Intent Rankings", value: "Top 3 Targets" },
                ].map((stat, idx) => (
                  <div key={idx} className="rounded-2xl border border-(--border) bg-(--surface) p-4 flex items-center gap-3">
                    <BarChart2 className="w-5 h-5 text-(--color-primary)" />
                    <div>
                      <div className="text-sm font-bold text-(--text-primary)">{stat.value}</div>
                      <div className="text-xs text-(--text-secondary)">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-(--surface) p-6 rounded-2xl border border-(--border) group hover:border-(--color-primary) transition-all">
                  <CheckCircle2 className="w-10 h-10 text-(--color-primary) mb-4 opacity-70 group-hover:opacity-100" />
                  <h3 className="font-bold text-lg mb-2 text-(--text-primary)">{feature}</h3>
                  <p className="text-xs text-(--text-secondary)">Enterprise-level execution for ambitious Pune brands.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Target Section */}
        <section className="px-6 lg:px-12 py-24 bg-(--surface) border-y border-(--border)">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-3xl font-black mb-6">Optimized for Pune's Neighborhood Intent</h2>
              <p className="text-(--text-secondary) mb-8">Whether you're a real estate developer in <strong>Wakad</strong>, a SaaS startup in <strong>Hinjewadi</strong>, or a luxury clinic in <strong>Kothrud</strong>, we build the technical authority you need to outrank aggregators and competition.</p>
              <div className="flex flex-wrap gap-2">
                {["Local SEO", "E-commerce SEO", "Technical SEO", "International SEO"].map(tag => (
                   <span key={tag} className="px-4 py-2 bg-(--background) border border-(--border) rounded-full text-xs font-bold">{tag}</span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/3 p-8 bg-(--background) rounded-3xl border-2 border-(--color-primary)/20 shadow-2xl">
              <Rocket className="w-12 h-12 text-(--color-primary) mb-6" />
              <h3 className="text-xl font-bold mb-4">SEO ROI Calculator</h3>
              <p className="text-sm text-(--text-secondary) mb-6">Stop guessing your marketing spend. See exactly how much organic traffic is worth to your bottom line.</p>
              <Link href="/audit" className="block w-full text-center py-4 bg-(--color-primary) text-white font-bold rounded-xl transition-all hover:bg-black">Analyze My Site</Link>
            </div>
          </div>
        </section>

        <ServiceFAQ 
          faqs={SEO_FAQ} 
          title="SEO Services in Pune: Frequently Asked Questions"
          subtitle="Expert answers to help you understand how our search optimization can scale your business."
        />
      </main>
    </>
  );
}
