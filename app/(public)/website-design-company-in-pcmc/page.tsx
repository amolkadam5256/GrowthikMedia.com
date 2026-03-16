import { Metadata } from "next";
import { Monitor, Globe, Search, Target, Zap, BarChart } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import LocationPageTemplate from "@/app/(public)/_locationPage/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Website Design in PCMC Pune | Web Design Company | Growthik Media",
  description:
    "Professional website design in PCMC (Pimpri Chinchwad). We build high-performance, SEO-ready websites for PCMC businesses. Get a free website audit today.",
  keywords:
    "website design pcmc, web design pimpri chinchwad, website development pcmc pune, best website design company pcmc",
  alternates: {
    canonical: `${CONTACT_INFO.website}/website-design-company-in-pcmc`,
  },
  openGraph: {
    title: "Website Design in PCMC Pune | Growthik Media",
    description:
      "Professional website design in PCMC (Pimpri Chinchwad) — fast, SEO-optimized websites for local businesses. Free consultation available.",
    url: `${CONTACT_INFO.website}/website-design-company-in-pcmc`,
    siteName: "Growthik Media",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function WebsiteDesignPCMC() {
  return (
    <LocationPageTemplate
      area="PCMC"
      city="Pune"
      primaryService="Website Design"
      slug="website-design-company-in-pcmc"
      headline="Professional Website Design in PCMC"
      subheadline="We design and develop powerful, SEO-optimized websites for businesses in Pimpri Chinchwad Municipal Corporation (PCMC) — from manufacturing companies to retail shops and service providers."
      areaDescription="PCMC (Pimpri-Chinchwad) is one of Maharashtra's fastest-growing industrial and residential zones, spanning areas like Pimpri, Chinchwad, Akurdi, Nigdi, and Bhosari. With a massive mix of manufacturing industries, auto ancillary companies, IT firms, and consumer businesses, competition for online visibility is intensifying rapidly. Growthik Media brings enterprise-level website design and digital marketing capabilities to PCMC businesses at competitive pricing, helping you establish a strong digital presence that generates real business results."
      services={[
        { icon: Monitor, name: "Business Website Design", desc: "Professional, mobile-first website designs for manufacturers, traders, service firms, and retailers in PCMC." },
        { icon: Globe, name: "Industrial & B2B Websites", desc: "Specialized website design for manufacturing and B2B companies in PCMC's industrial zones — with product catalogs and inquiry forms." },
        { icon: Search, name: "Local SEO for PCMC", desc: "Rank your business on Google Maps and organic results for PCMC-specific searches." },
        { icon: Target, name: "eCommerce Development", desc: "Sell your products online with a fully integrated eCommerce website — Razorpay, inventory management, and GST billing included." },
        { icon: Zap, name: "Speed & Performance", desc: "All websites we build achieve 90+ PageSpeed scores, zero CLS, and fast LCP — critical for both rankings and user experience." },
        { icon: BarChart, name: "Analytics Setup", desc: "Google Analytics 4, Search Console, and conversion tracking configured so you measure what matters." },
      ]}
      faqs={[
        {
          q: "Do you serve businesses across all of PCMC — Pimpri, Chinchwad, Akurdi, Nigdi?",
          a: "Yes. We work with businesses across all of PCMC including Pimpri, Chinchwad, Akurdi, Nigdi, Bhosari, Kalewadi, and Wakad areas. We also serve the broader Pune region.",
        },
        {
          q: "Can you create a website for a manufacturing company?",
          a: "Absolutely. We have experience building B2B and industrial websites with product catalogs, material specifications, inquiry forms, and certification showcases. These are designed to rank on Google for industry-specific keywords.",
        },
        {
          q: "How much does website design cost in PCMC?",
          a: "A professional business website for PCMC companies typically costs ₹18,000–₹1,20,000 depending on complexity. We provide a transparent, itemized quote. No hidden charges.",
        },
        {
          q: "Will my PCMC website rank on Google?",
          a: "Every website includes on-page SEO setup, Google Business Profile optimization, local schema markup, and Core Web Vitals optimization. We also offer ongoing SEO services for sustained ranking growth.",
        },
      ]}
    />
  );
}
