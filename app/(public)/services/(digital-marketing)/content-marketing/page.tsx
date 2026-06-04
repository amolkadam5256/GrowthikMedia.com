import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Award, CheckCircle2, ArrowRight, BookOpen, PenTool, Share2 } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import { ServiceFAQ } from "@/components/PublicComponents/common/ServiceFAQ";
import { CONTENT_MARKETING_FAQ } from "@/constants/faqData";

const slug = "content-marketing";
const title = "Content Marketing Agency in Pune | B2B Content Strategy | Growthik";
const description = "Strategic content marketing in Pune. We specialize in blog writing, whitepapers, LinkedIn thought leadership, and case studies for B2B & IT firms in Hinjewadi & Baner.";
const h1 = "Content Marketing Agency in Pune";
const canonical = `https://www.growthikmedia.com/services/${slug}/`;
const features = ["B2B Blog Strategy", "Case Study Engineering", "LinkedIn Thought Leadership", "Lead Magnet Creation", "Email Newsletters", "Content Distribution"];

export const metadata: Metadata = {
  title, description, alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "Growthik Media",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Content Marketing Agency Pune" }]
  },
};

export default function ContentMarketingPage() {
  const service = "Content Marketing";
  return (
    <>
      <Script id={`schema-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "B2B Content Marketing Pune",
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
              <PenTool className="w-4 h-4" /> Authority Framework
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[1.1] uppercase text-(--text-primary)">
              Build Absolute Authority: <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) to-blue-500">{h1}</span>
            </h1>
            <p className="text-lg md:text-xl text-(--text-secondary) font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
              Stop publishing generic noise. We engineer content systems that establish you as the primary source in your industry, driving qualified inquiries for <strong>Pune B2B, SaaS, and IT firms</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/contact" className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg shadow-(--color-primary)/30 flex items-center justify-center gap-2 w-full sm:w-auto">Get Your Content Roadmap <ArrowRight className="w-5 h-5" /></Link>
              <Link href="tel:+918055754054" className="px-8 py-4 bg-(--surface) text-(--text-primary) border border-(--border) font-bold rounded-xl hover:bg-(--border) transition-all flex items-center justify-center gap-2 w-full sm:w-auto">Consulting Call</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
                {/* Placeholder for trusted by logos if needed, otherwise just spacing */}
            </div>
          </div>
        </header>

        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight text-(--text-primary)">Strategic Content Engineering for Precision Growth</h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>
              <p className="text-(--text-secondary) font-medium text-lg mb-6 leading-relaxed">
                Generic blog posts don't rank and they certainly don't convert. We build <strong>Content Hubs</strong> and <strong>Authority Magnets</strong> in Pune that satisfy both Google's search algorithms and the needs of your high-value prospects.
              </p>
              <ul className="space-y-4">
                {[
                    "Deep intent-based keyword research",
                    "Expert-level ghostwriting for executives",
                    "Data-backed distribution strategies",
                    "Continuous performance optimization"
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-(--text-primary)">
                        <CheckCircle2 className="w-5 h-5 text-(--color-primary)" /> {item}
                    </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-(--surface) p-6 rounded-2xl border border-(--border) group hover:border-(--color-primary) transition-all">
                  <BookOpen className="w-10 h-10 text-(--color-primary) mb-4 opacity-70 group-hover:opacity-100" />
                  <h3 className="font-bold text-lg mb-2 text-(--text-primary)">{feature}</h3>
                  <p className="text-xs text-(--text-secondary)">Designed to move prospects from awareness to decision in Pune's competitive market.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceFAQ 
          faqs={CONTENT_MARKETING_FAQ} 
          title="Content Marketing: Authority & Insights"
          subtitle="Everything you need to know about building a content engine that drives revenue in Pune."
        />

        {/* Repurposing section */}
        <section className="px-6 lg:px-12 py-24 bg-(--surface) border-y border-(--border)">
           <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-(--color-primary) font-black mb-4 uppercase tracking-widest text-sm">
                <Share2 className="w-4 h-4" /> Multi-Channel Reach
              </div>
              <h2 className="text-3xl lg:text-4xl font-black mb-6 uppercase">One Piece of Content, Five Strategic Channels</h2>
              <p className="text-(--text-secondary) mb-12 text-lg">We maximize your ROI by turning one expert interview into a long-form blog, 5+ LinkedIn posts, a newsletter, and search-optimized snippets.</p>
              <div className="flex flex-wrap justify-center gap-4">
                 {["Website", "LinkedIn", "Email", "Social Ads", "Guest Sites"].map(channel => (
                    <div key={channel} className="px-8 py-4 bg-(--background) rounded-2xl border border-(--border) font-black uppercase text-xs tracking-tighter hover:border-(--color-primary) transition-all cursor-default">{channel}</div>
                 ))}
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-4xl mx-auto text-center border-2 border-dashed border-(--border) p-12 rounded-[2.5rem] bg-(--surface)/30">
            <h2 className="text-3xl font-black mb-6 uppercase">Ready to Become the Authority?</h2>
            <p className="text-lg text-(--text-secondary) mb-8 font-medium">Get a custom Content Audit and see where your competitors are leaving money on the table.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-(--color-primary) text-white font-black rounded-2xl hover:scale-105 transition-all shadow-2xl uppercase tracking-tighter">Request Content Strategy <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </section>
      </main>
    </>
  );
}
