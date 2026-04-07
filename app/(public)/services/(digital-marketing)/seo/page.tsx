import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Award, CheckCircle2, ArrowRight, BarChart2 } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import FAQSchema from "@/components/PublicComponents/structured-data/FAQSchema";

const slug = "seo";
const title = "SEO Company in Pune | Growthik Media";
const description = "Top-rated SEO company in Pune. Rank on Page 1 of Google with our data-driven SEO strategies. Get a free SEO audit today.";
const h1 = "SEO Company in Pune";
const canonical = "/services/seo/";
const features = ["Technical SEO Audit", "Keyword Research", "On-Page SEO", "Link Building", "Content SEO", "Ranking Reports"];

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
        "@context": "https://schema.org", "@type": "Service", serviceType: service, provider: { "@id": `${CONTACT_INFO.website}/#localbusiness` }, areaServed: { "@type": "City", name: "Pune" }, aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "138" },
      })}} />
      <FAQSchema 
        questions={[
          {
            q: `What does ${service} cost in Pune?`,
            a: `The cost of ${service} services in Pune varies based on project scope, but typical professional management starts from ₹15,000 to ₹50,000 per month.`
          },
          {
            q: `How long does ${service} take to show results?`,
            a: `${service} is a long-term strategy. While technical improvements can show impact in weeks, significant organic growth usually takes 3 to 6 months.`
          },
          {
            q: `Why choose Growthik Media for ${service} in Pune?`,
            a: "We are an SEO-first agency that builds predictable revenue systems, focusing on ROI and business growth rather than just keyword rankings."
          }
        ]}
      />
      <main className="bg-(--background) min-h-screen pt-24 overflow-hidden text-(--text-primary) font-sans">
        <header className="relative px-6 lg:px-12 py-20 lg:py-32 flex flex-col items-center text-center bg-(--surface) overflow-hidden border-b border-(--border)">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-(--color-primary)/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--background) border border-(--border) shadow-sm mb-6 text-sm font-bold text-(--color-primary) tracking-wide uppercase">
              <Award className="w-4 h-4" />Specialized Agency Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tighter leading-[1.1] uppercase text-(--text-primary)">
              Top Agency For <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) to-blue-500">{h1}</span>
            </h1>
            <p className="text-lg md:text-xl text-(--text-secondary) font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
              We understand that organic visibility is your biggest hurdle. That's why Growthik Media builds data-driven SEO systems designed specifically for your needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/contact" className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg shadow-(--color-primary)/30 flex items-center justify-center gap-2 w-full sm:w-auto">Book Your Free Strategy Call <ArrowRight className="w-5 h-5" /></Link>
            </div>
            <p className="text-sm text-(--text-secondary)">Last updated: April 2026 · Fast answer: We deliver crawl-friendly on-page fixes in week 1, then compounding traffic gains over 3–6 months.</p>
          </div>
        </header>
        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight text-(--text-primary)">Scale Your Revenue With Precision {service}</h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>
              <p className="text-(--text-secondary) font-medium text-lg mb-6 leading-relaxed">
                Generic SEO doesn't work. As a specialist operating in this sector, we've engineered a predictable growth matrix. Our focus is entirely on increasing your search engine rankings and organic traffic.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Avg. traffic lift", value: "41% in 90 days" },
                  { label: "Core Web Vitals pass", value: "92% of pages" },
                  { label: "Leads from organic", value: "2.3x QoQ" },
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
