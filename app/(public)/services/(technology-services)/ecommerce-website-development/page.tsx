import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, Award, ArrowRight, ShoppingCart, ShieldCheck, Zap } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import { ServiceFAQ } from "@/components/PublicComponents/common/ServiceFAQ";
import { ECOMMERCE_FAQ } from "@/constants/faqData";

const slug = "ecommerce-website-development";
const title = "E-commerce Website Development in Pune | Growthik Media";
const description = "Scale your online store with professional e-commerce development in Pune. Shopify, WooCommerce and custom platforms.";
const h1 = "E-commerce Website Development in Pune";
const canonical = `https://www.growthikmedia.com/services/${slug}/`;
const features = ["Shopify Development", "WooCommerce Experts", "Secure Payments", "Inventory Management", "Custom Cart Logic", "Mobile Commerce"];

export const metadata: Metadata = {
  title, description, alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    siteName: "Growthik Media",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "E-commerce Development Pune" }]
  },
};

export default function EcommerceWebsiteDevelopmentPage() {
  const service = "E-commerce Website Development";
  return (
    <>
      <Script id={`schema-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "E-commerce Store Development Pune",
          "serviceType": service,
          "provider": { "@id": `${CONTACT_INFO.website}/#localbusiness` },
          "areaServed": { "@type": "City", name: "Pune" },
           aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "138" },
        })
      }} />
      <main className="bg-(--background) min-h-screen pt-24 overflow-hidden text-(--text-primary) font-sans">
        <header className="relative px-6 lg:px-12 py-20 lg:py-32 flex flex-col items-center text-center bg-(--surface) overflow-hidden border-b border-(--border)">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-(--color-primary)/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--background) border border-(--border) shadow-sm mb-6 text-sm font-bold text-(--color-primary) tracking-wide uppercase">
              <ShoppingCart className="w-4 h-4" /> Retail Engineering
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[1.1] uppercase text-(--text-primary)">
              Conversion-First <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) to-blue-500">{h1}</span>
            </h1>
            <p className="text-lg md:text-xl text-(--text-secondary) font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
              We don&apos;t just build stores; we build high-speed revenue engines. We specialize in <strong>Shopify, WooCommerce, and Headless Commerce</strong> for Pune&apos;s most ambitious retail brands.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/contact" className="px-8 py-4 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg shadow-(--color-primary)/30 flex items-center justify-center gap-2 w-full sm:w-auto">Launch Your Store <ArrowRight className="w-5 h-5" /></Link>
              <Link href="tel:+918055754054" className="px-8 py-4 bg-(--surface) text-(--text-primary) border border-(--border) font-bold rounded-xl hover:bg-(--border) transition-all flex items-center justify-center gap-2 w-full sm:w-auto">Consulting Call</Link>
            </div>
          </div>
        </header>

        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight text-(--text-primary)">Strategic Online Retail for Global Scaling</h2>
              <div className="w-16 h-1.5 bg-(--color-primary) mb-8"></div>
              <p className="text-(--text-secondary) font-medium text-lg mb-6 leading-relaxed">
                Generic templates are the fastest way to lose customers. We engineer custom e-commerce experiences that load in under 2 seconds and guide users through a friction-less checkout process.
              </p>
              <div className="space-y-4 mt-8">
                 {[
                    { icon: ShieldCheck, title: "Secure Checkout", desc: "PCI-compliant payment gateways like Razorpay & CCAvenue." },
                    { icon: Zap, title: "Extreme Speed", desc: "Optimized for Core Web Vitals to improve Google rankings." }
                 ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-5 bg-(--surface) rounded-2xl border border-(--border)">
                        <item.icon className="w-6 h-6 text-(--color-primary) shrink-0" />
                        <div>
                            <h4 className="font-bold text-(--text-primary)">{item.title}</h4>
                            <p className="text-xs text-(--text-secondary)">{item.desc}</p>
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
                  <p className="text-xs text-(--text-secondary)">Designed to handle high festival traffic spikes in Pune.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceFAQ 
          faqs={ECOMMERCE_FAQ} 
          title="E-commerce: Strategy & Build"
          subtitle="Discover how we build high-converting online stores that dominate the Pune market."
        />

        <section className="px-6 lg:px-12 py-20 bg-(--background)">
          <div className="max-w-4xl mx-auto text-center border-2 border-dashed border-(--border) p-12 rounded-[2.5rem] bg-(--surface)/30">
            <h2 className="text-3xl font-black mb-6 uppercase">Ready to Start Selling Online?</h2>
            <p className="text-lg text-(--text-secondary) mb-8 font-medium italic">Get a custom E-commerce Audit and see why your competitors are outselling you.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-(--color-primary) text-white font-black rounded-2xl hover:scale-105 transition-all shadow-2xl uppercase tracking-tighter">Request Store Plan <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </section>
      </main>
    </>
  );
}
