import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Award, CheckCircle2, ArrowRight } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

const slug = "website-development";
const title = "Website Development Company in Pune | Next.js | Growthik Media";
const description = "Top website development company in Pune. Building fast, SEO-optimized websites using Next.js and modern web technologies.";
const h1 = "Website Development Company in Pune";
const canonical = `https://www.growthikmedia.com/services/${slug}/`;
const features = ["Next.js Development", "SEO Optimization", "PageSpeed Performance", "CMS Integration", "Custom Functionality", "Secure Hosting"];

export const metadata: Metadata = {
  title, description, alternates: { canonical },
  openGraph: { title, description, url: canonical, siteName: "Growthik Media", locale: "en_IN", type: "website" },
};

export default function WebsiteDevelopmentPage() {
  const service = "Website Development";
  return (
    <>
      <Script id={`schema-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service", serviceType: service, provider: { "@id": `${CONTACT_INFO.website}/#localbusiness` }, areaServed: { "@type": "City", name: "Pune" }, aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "138" },
      })}} />
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
              We understand that website speed is your biggest hurdle. That's why Growthik Media builds performance-first systems designed specifically for your needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/contact" className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg shadow-(--color-primary)/30 flex items-center justify-center gap-2 w-full sm:w-auto">Book Your Free Strategy Call <ArrowRight className="w-5 h-5" /></Link>
            </div>
          </div>
        </header>
        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight text-(--text-primary)">Scale Your Revenue With Precision {service}</h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>
              <p className="text-(--text-secondary) font-medium text-lg mb-6 leading-relaxed">
                Generic websites don't work. As a specialist operating in this sector, we've engineered a predictable software matrix. Our focus is entirely on increasing your web performance and SEO rankings.
              </p>
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
