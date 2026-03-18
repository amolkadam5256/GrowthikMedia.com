import { Metadata } from "next";
import { Monitor, Globe, Search, Target, Zap, BarChart } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import LocationPageTemplate from "@/app/(public)/_locationPage/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Best Web Design Company in Aundh Pune | Growthik Media",
  description:
    "Top web design company in Aundh, Pune. We build fast, SEO-optimized, conversion-focused websites for local businesses. Get a free quote today.",
  keywords:
    "website design company in aundh, web design aundh pune, website development aundh, best web design company aundh",
  alternates: {
    canonical: `${CONTACT_INFO.website}/website-design-company-in-aundh`,
  },
  openGraph: {
    title: "Best Web Design Company in Aundh Pune | Growthik Media",
    description:
      "Top-rated website design company in Aundh, Pune — fast, SEO-optimized websites that convert visitors into customers.",
    url: `${CONTACT_INFO.website}/website-design-company-in-aundh`,
    siteName: "Growthik Media",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function WebsiteDesignAundh() {
  return (
    <LocationPageTemplate
      area="Aundh"
      city="Pune"
      primaryService="Website Design Company"
      slug="website-design-company-in-aundh"
      headline="Best Website Design Company in Aundh"
      subheadline="We design and develop high-performance, SEO-ready websites for businesses in Aundh, Pune that rank on Google and turn visitors into leads — guaranteed."
      areaDescription="Aundh is one of Pune's most vibrant business hubs, home to IT firms, retail shops, clinics, coaching institutes, and restaurants. With increasing digital competition, having a professional website isn't enough — you need a site that loads fast, ranks high, and converts. Growthik Media has built 350+ websites for Pune businesses, and we understand exactly what the Aundh audience expects from an online experience."
      services={[
        { icon: Monitor, name: "Custom Website Design", desc: "Pixel-perfect, mobile-first designs built specifically for your brand and Aundh audience." },
        { icon: Globe, name: "WordPress Development", desc: "Scalable WordPress websites with powerful admin panels easy for your team to manage." },
        { icon: Search, name: "SEO-Optimized Development", desc: "Sites built from day one with Core Web Vitals, schema markup, and on-page SEO best practices." },
        { icon: Target, name: "Landing Page Design", desc: "High-converting landing pages designed to capture leads from Google Ads and social media campaigns." },
        { icon: Zap, name: "Next.js Web Apps", desc: "Lightning-fast web applications built with Next.js for superior performance scores." },
        { icon: BarChart, name: "eCommerce Websites", desc: "Online stores with payment gateway integration, product catalogs, and order management systems." },
      ]}
      faqs={[
        {
          q: "How much does a website cost for a business in Aundh?",
          a: "Website costs in Aundh vary from ₹15,000 for a simple brochure site to ₹1,50,000+ for a custom business website. eCommerce sites start from ₹80,000. We offer transparent pricing with no hidden charges — contact us for a detailed quote.",
        },
        {
          q: "How long does it take to build a website?",
          a: "A standard business website typically takes 3–5 weeks from discovery to launch. eCommerce sites take 6–10 weeks. We provide a clear project timeline before we begin.",
        },
        {
          q: "Will my website rank on Google?",
          a: "Every website we build includes on-page SEO setup, schema markup, Core Web Vitals optimization, and Google Search Console integration. We also offer ongoing SEO services to continuously improve your rankings in Aundh and across Pune.",
        },
        {
          q: "Do you offer website maintenance after launch?",
          a: "Yes, we offer monthly maintenance packages covering security updates, content edits, performance optimization, and technical support so your website stays fast, secure, and up-to-date.",
        },
      ]}
    />
  );
}
