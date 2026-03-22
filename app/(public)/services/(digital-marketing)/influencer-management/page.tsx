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
  title: "Influencer Management Agency Pune | Growthik Media",
  description: "Scale your brand with the top influencer management agency in Pune. We connect you with authentic influencers to drive engagement and sales.",
  alternates: {
    canonical: "https://www.growthikmedia.com/services/influencer-management/",
  },
  openGraph: {
    title: "Influencer Management Agency Pune | Growthik Media",
    description: "Scale your brand with the top influencer management agency in Pune. We connect you with authentic influencers to drive engagement and sales.",
    url: `${CONTACT_INFO.website}/services/influencer-management/`,
    siteName: "Growthik Media",
    locale: "en_IN",
    type: "website",
  },
};

export default function InfluencerManagementPage() {
  const serviceName = "Influencer Management";
  const h1 = "Influencer Management Agency Pune";

  return (
    <>
      <Script
        id="schema-influencer-management"
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
              People buy from people they trust. Our influencer management Pune services bridge the gap between your brand and the creators who hold your audience’s attention.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/audit" className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg shadow-(--color-primary)/30 flex items-center justify-center gap-2 w-full sm:w-auto">
                Get Your Free Growth Audit <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </header>

        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight">Authentic Brand Storytelling with Influencer Marketing in Pune</h2>
              <p className="text-(--text-secondary) leading-relaxed">
                As a leading influencer agency India, we believe that authenticity is the currency of the digital age. For brands in Pune, this means moving beyond simple celebrity endorsements to meaningful partnerships with micro and nano-influencers who have a real connection with the local community. We identify creators who align with your brand values and have an active, engaged following in Pune and across India. 
              </p>

              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mt-12">End-to-End Influencer Campaign Management</h2>
              <p className="text-(--text-secondary) leading-relaxed">
                Managing multiple influencers can be a logistical nightmare. Growthik Media simplifies this by handling the entire process: from initial outreach and negotiation to content briefing and final performance reporting. We ensure that every piece of content produced is on-brand and optimized for engagement. Our proprietary influencer marketing Pune database allows us to filter creators based on niche, location, and proven ROI metrics, ensuring your budget is spent where it matters most.
              </p>

              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mt-12">Measuring ROI and Long-Term Brand Equity</h2>
              <p className="text-(--text-secondary) leading-relaxed">
                We don’t just report on &quot;likes&quot;; we focus on the metrics that drive your business forward. Every brand influencer campaign we run is tracked for link clicks, conversions, and brand sentiment. By integrating influencer content into your broader digital marketing strategy, we help you create a library of user-generated content (UGC) that continues to provide value long after the campaign ends.
              </p>
            </div>

            <div className="border-t border-(--border) pt-16">
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mb-8 text-center">Frequently Asked Questions</h2>
              <div className="grid gap-8">
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">Do I need a huge budget for influencer marketing in Pune?</h3>
                  <p className="text-(--text-secondary) text-center">No. Micro-influencers in Pune often provide higher engagement at a much lower cost than major celebrities. We help you find the right tier of influencers for your specific budget.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">How do you ensure influencers actually post on time?</h3>
                  <p className="text-(--text-secondary) text-center">We use legally binding contracts and professional management systems to ensure all deliverables are met according to the agreed schedule and quality standards.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-(--text-primary) mb-3 text-center">Can you help me find influencers specifically from Pune?</h3>
                  <p className="text-(--text-secondary) text-center">Yes. We have a dedicated network of Pune-based influencers across niches like lifestyle, tech, food, and business who can help you dominate the local market.</p>
                </div>
              </div>
            </div>

            <div className="bg-(--surface) p-8 md:p-12 rounded-4xl border border-(--border) text-center">
              <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-(--text-secondary) mb-8 max-w-2xl mx-auto font-medium">
                Tap into the power of community trust. Work with the best influencer management agency in Pune to humanize your brand and drive results.
              </p>
              <Link href="/audit" className="px-10 py-5 bg-(--color-primary) text-white font-black rounded-2xl hover:bg-black transition-all shadow-xl inline-flex items-center gap-2">
                Claim Your Free Growth Audit <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
