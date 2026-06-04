import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Award, CheckCircle2, ArrowRight, Video, Users, Share2, MessageSquare } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import { ServiceFAQ } from "@/components/PublicComponents/common/ServiceFAQ";
import { SOCIAL_FAQ } from "@/constants/faqData";

const slug = "social-media-marketing";
const title = "Social Media Marketing Agency in Pune | Growthik Media";
const description = "Leading social media marketing in Pune. Instagram, LinkedIn & Facebook marketing that builds community and drives sales for Pune brands.";
const h1 = "Social Media Marketing Agency in Pune";
const canonical = `https://www.growthikmedia.com/services/${slug}/`;
const features = ["Instagram Reel Strategy", "LinkedIn Authority Building", "Meta Ads Management", "Community Growth", "Influencer Collaborations", "Viral Content Creation"];

export const metadata: Metadata = {
  title, description, alternates: { canonical },
  openGraph: { title, description, url: canonical, siteName: "Growthik Media", locale: "en_IN", type: "website" },
};

export default function SocialMediaMarketingPage() {
  const service = "Social Media Marketing";
  return (
    <>
      <Script id={`schema-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service", "name": "Expert Social Media Marketing Pune", serviceType: service, provider: { "@id": `${CONTACT_INFO.website}/#localbusiness` }, areaServed: { "@type": "City", name: "Pune" }, aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "138" },
      })}} />
      <main className="bg-(--background) min-h-screen pt-24 overflow-hidden text-(--text-primary) font-sans">
        <header className="relative px-6 lg:px-12 py-20 lg:py-32 flex flex-col items-center text-center bg-(--surface) overflow-hidden border-b border-(--border)">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-(--color-primary)/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--background) border border-(--border) shadow-sm mb-6 text-sm font-bold text-(--color-primary) tracking-wide uppercase">
              <Share2 className="w-4 h-4" /> Social Growth engineered
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[1.1] uppercase text-(--text-primary)">
              Community, Not Just Followers: <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) to-blue-500">{h1}</span>
            </h1>
            <p className="text-lg md:text-xl text-(--text-secondary) font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
              Stop shouting into the void. We build high-engagement social systems for Pune brands that turn <strong>scrollers into customers and followers into fans</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/contact" className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg shadow-(--color-primary)/30 flex items-center justify-center gap-2 w-full sm:w-auto">Start Your Social Growth <ArrowRight className="w-5 h-5" /></Link>
              <Link href="/audit" className="px-8 py-4 bg-(--surface) text-(--text-primary) border border-(--border) font-bold rounded-xl hover:bg-(--border) transition-all flex items-center justify-center gap-2 w-full sm:w-auto">Free Social Audit</Link>
            </div>
          </div>
        </header>

        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight text-(--text-primary)">Scientific Community Building</h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>
              <p className="text-(--text-secondary) font-medium text-lg mb-6 leading-relaxed">
                Most agencies just 'post.' We use a data-led approach called <strong>The Content matrix</strong> to ensure every post serves a strategic purpose: Awareness, Authority, or Action.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                 {[
                   { icon: Video, title: "Reel Production", desc: "End-to-end viral video creation for Instagram & YouTube." },
                   { icon: Users, title: "LinkedIn B2B", desc: "Thought leadership for CEOs and IT firms in Pune." }
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
                  <MessageSquare className="w-10 h-10 text-(--color-primary) mb-4 opacity-70 group-hover:opacity-100" />
                  <h3 className="font-bold text-lg mb-2 text-(--text-primary)">{feature}</h3>
                  <p className="text-xs text-(--text-secondary)">Built for Pune's unique neighborhood-based consumer behavior.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceFAQ 
          faqs={SOCIAL_FAQ} 
          title="Social Media Marketing: Frequently Asked Questions"
          subtitle="Expert answers to help you navigate the evolving landscape of social growth in Pune."
        />
      </main>
    </>
  );
}
