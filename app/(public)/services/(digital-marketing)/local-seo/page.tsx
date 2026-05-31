import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

import FAQSchema from "@/components/PublicComponents/structured-data/FAQSchema";
import { MapPin, Search, Rocket, MessageSquare, Star } from "lucide-react";

const slug = "local-seo";
const title = "Local SEO Agency in Pune | Google Maps SEO | Growthik";
const description = "Best local SEO agency in Pune. Dominating local search results and Google Maps for businesses in Baner, Hinjewadi, Warje & beyond. Get more footfall today.";
const h1 = "Local SEO Agency in Pune";
const canonical = `https://www.growthikmedia.com/services/${slug}/`;
const features = ["Google Maps Ranking", "GMB Optimization", "Local Citations", "Hyperlocal Keywords", "Review Management", "AEO/GEO Optimization"];

export const metadata: Metadata = {
  title, description, alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "Growthik Media",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Local SEO Agency Pune" }]
  },
};

export default function LocalSEOPage() {
  const service = "Local SEO";
  return (
    <>
      <Script id={`schema-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Local SEO Services Pune",
        "serviceType": service,
        "provider": { "@id": `${CONTACT_INFO.website}/#localbusiness` },
        "areaServed": [
          { "@type": "City", "name": "Pune" },
          { "@type": "Neighborhood", "name": "Warje" },
          { "@type": "Neighborhood", "name": "Baner" },
          { "@type": "Neighborhood", "name": "Hinjewadi" },
          { "@type": "Neighborhood", "name": "Wakad" },
          { "@type": "Neighborhood", "name": "Kothrud" }
        ],
        "aggregateRating": { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "138" },
      })}} />
      <FAQSchema
        questions={[
          {
            q: "What is Local SEO and why does my Pune business need it?",
            a: "Local SEO optimizes your online presence to attract more business from relevant local searches on Google and other search engines. For Pune businesses, it means showing up when someone searches for your services 'near me' in areas like Baner, Hinjewadi, or Kothrud."
          },
          {
            q: "How long does it take to rank in the Google Maps '3-Pack' in Pune?",
            a: "While basic GMB optimization shows results in 2-4 weeks, consistently ranking in the top 3 for competitive Pune keywords usually takes 3 to 6 months of active management."
          },
          {
            q: "Do you provide services near DMart Warje or Hinjewadi IT Park?",
            a: "Yes, we provide hyper-local SEO services across all major Pune landmarks, including DMart Warje, EON IT Park Kharadi, Magarpatta City, and Balewadi High Street."
          },
          {
            q: "What is the cost of Local SEO in Pune?",
            a: "Local SEO packages in Pune typically range from ₹12,000 to ₹35,000 per month, depending on the number of locations and the competitiveness of your industry."
          },
          {
            q: "How do you handle Google Business Profile (GMB) suspended accounts?",
            a: "We have a dedicated process for GMB reinstatement and compliance to ensure your Pune business listing stays live and follows all Google guidelines."
          },
          {
            q: "Can you help with local reviews and reputation management?",
            a: "Absolutely. We implement systems to help you gather authentic 5-star reviews from your Pune customers, which is a critical ranking factor for local search."
          },
          {
            q: "What is AEO/GEO for local business?",
            a: "AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) ensure your business is cited by AI tools like ChatGPT or Google's AI Overviews for local queries."
          },
          {
            q: "Which areas of Pune do you cover?",
            a: "We cover all major hubs including Baner, Wakad, Hinjewadi, Kharadi, PCMC, Kothrud, Aundh, Viman Nagar, and Hadapsar."
          }
        ]}
      />
      <main className="bg-(--background) min-h-screen pt-24 overflow-hidden text-(--text-primary) font-sans">
        <header className="relative px-6 lg:px-12 py-20 lg:py-32 flex flex-col items-center text-center bg-(--surface) overflow-hidden border-b border-(--border)">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-(--color-primary)/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--background) border border-(--border) shadow-sm mb-6 text-sm font-bold text-(--color-primary) tracking-wide uppercase">
              <MapPin className="w-4 h-4" /> Hyper-Local Dominance
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[1.1] uppercase text-(--text-primary)">
              Dominate Your Hood: <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) to-blue-500">{h1}</span>
            </h1>
            <p className="text-lg md:text-xl text-(--text-secondary) font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
              If your business isn't in the Google Maps Top 3, you're invisible. We bridge the gap between your site office and your local customers near <strong>DMart Warje, Hinjewadi IT Park, and Kharadi</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/contact" className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg shadow-(--color-primary)/30 flex items-center justify-center gap-2 w-full sm:w-auto">Start Local Dominance <ArrowRight className="w-5 h-5" /></Link>
              <Link href="tel:+918055754054" className="px-8 py-4 bg-(--surface) text-(--text-primary) border border-(--border) font-bold rounded-xl hover:bg-(--border) transition-all flex items-center justify-center gap-2 w-full sm:w-auto">Talk to Expert</Link>
            </div>
          </div>
        </header>

        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight text-(--text-primary)">Target Every Corner of Pune</h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>
              <p className="text-(--text-secondary) font-medium text-lg mb-6 leading-relaxed">
                Generic SEO doesn't work for high-intent 'near me' searches. We optimize for specific Pune landmarks and neighborhoods so your customers find you first.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-8">
                {["Baner High Street", "Hinjewadi Phase 3", "EON IT Park", "Phoenix Mall Area", "Amanora Park Town", "FC Road & JM Road"].map((landmark) => (
                  <div key={landmark} className="flex items-center gap-2 p-3 bg-(--surface) rounded-lg border border-(--border) text-sm font-bold">
                    <MapPin className="w-4 h-4 text-(--color-primary)" /> {landmark}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-(--surface) p-6 rounded-2xl border border-(--border) group hover:border-(--color-primary) transition-colors">
                  <Star className="w-10 h-10 text-(--color-primary) mb-4 opacity-50 group-hover:opacity-100" />
                  <h3 className="font-bold text-lg mb-2 text-(--text-primary)">{feature}</h3>
                  <p className="text-xs text-(--text-secondary)">Engineered for maximum visibility in Pune's local algorithm.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Advantage Section */}
        <section className="px-6 lg:px-12 py-24 bg-(--surface) border-y border-(--border)">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Why Local Matters in 2026</h2>
            <p className="text-(--text-secondary) max-w-2xl mx-auto">AI search engines (Perplexity/ChatGPT) now use local data to answer queries. We make sure they pick YOU.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="p-8 bg-(--background) rounded-3xl border border-(--border)">
              <Search className="w-12 h-12 text-(--color-primary) mb-6" />
              <h3 className="text-xl font-bold mb-4">GMB Supremacy</h3>
              <p className="text-sm text-(--text-secondary)">We manage your Google Business Profile consistently to improve Map Pack visibility across PCMC and Pune City.</p>
            </div>
            <div className="p-8 bg-(--background) rounded-3xl border border-(--border)">
              <MessageSquare className="w-12 h-12 text-(--color-primary) mb-6" />
              <h3 className="text-xl font-bold mb-4">Review Velocity</h3>
              <p className="text-sm text-(--text-secondary)">Build trust automatically with our review acquisition systems designed for local service businesses.</p>
            </div>
            <div className="p-8 bg-(--background) rounded-3xl border border-(--border)">
              <Rocket className="w-12 h-12 text-(--color-primary) mb-6" />
              <h3 className="text-xl font-bold mb-4">Local Citations</h3>
              <p className="text-sm text-(--text-secondary)">Dominating Indiamart, Justdial, and local directories to build a solid local authority footprint.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-4xl mx-auto text-center border-2 border-dashed border-(--border) p-12 rounded-[2.5rem]">
            <h2 className="text-3xl font-black mb-6">Stop Being a Secret in Your Own City</h2>
            <p className="text-lg text-(--text-secondary) mb-8">Get a free local SEO audit of your Google Business Profile and website today.</p>
            <Link href="/audit" className="inline-flex items-center gap-3 px-10 py-5 bg-(--color-primary) text-white font-black rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-(--color-primary)/30">Get My Free Audit <Rocket className="w-5 h-5" /></Link>
          </div>
        </section>
      </main>
    </>
  );
}
