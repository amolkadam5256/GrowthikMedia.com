import { Metadata } from "next";
import { Monitor, Globe, Search, Target, Zap, BarChart } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import LocationPageTemplate from "@/app/(public)/_locationPage/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Website Design Company in Wakad Pune | Growthik Media",
  description:
    "Top website design company in Wakad, Pune. Fast, SEO-optimized websites for IT companies, startups, and local businesses in Wakad. Get a free consultation.",
  keywords:
    "website design company wakad, web design wakad pune, website development wakad, best web design company wakad pune",
  alternates: {
    canonical: `${CONTACT_INFO.website}/website-design-company-in-wakad`,
  },
  openGraph: {
    title: "Website Design Company in Wakad Pune | Growthik Media",
    description:
      "Top website design company in Wakad, Pune — SEO-optimized, conversion-focused websites for Wakad businesses. Free consultation.",
    url: `${CONTACT_INFO.website}/website-design-company-in-wakad`,
    siteName: "Growthik Media",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function WebsiteDesignWakad() {
  return (
    <LocationPageTemplate
      area="Wakad"
      city="Pune"
      primaryService="Website Design Company"
      slug="website-design-company-in-wakad"
      headline="Best Website Design Company in Wakad"
      subheadline="We build premium, performance-first websites for businesses in Wakad — from IT companies and real estate agencies to restaurants and professional service providers."
      areaDescription="Wakad has transformed into one of Pune's fastest-growing mixed-use localities — a blend of IT professionals, young families, startups, healthcare providers, and thriving local businesses. With its proximity to Hinjewadi IT Park and excellent connectivity, Wakad's businesses are increasingly competing for digital visibility. Growthik Media delivers enterprise-quality website design to Wakad businesses at competitive pricing, with a strong focus on local search rankings, user experience, and conversion rate optimization."
      services={[
        { icon: Monitor, name: "Business Website Design", desc: "Professional, mobile-first website designs for Wakad's diverse business landscape — from IT companies to local shops." },
        { icon: Globe, name: "Real Estate Websites", desc: "Property showcase websites for Wakad real estate agents and builders — with listing pages, virtual tours, and lead capture forms." },
        { icon: Search, name: "Wakad Local SEO", desc: "Rank your business for location-specific searches in Wakad, Hinjewadi, and surrounding areas." },
        { icon: Target, name: "eCommerce Websites", desc: "Sell products online with a fully featured eCommerce site — Razorpay integration, GST billing, and mobile-optimized shopping." },
        { icon: Zap, name: "Speed Optimization", desc: "Every website we build is optimized for sub-2-second load times, 90+ PageSpeed scores, and zero CLS on all devices." },
        { icon: BarChart, name: "Lead Generation Pages", desc: "Targeted landing pages that capture leads from Google Ads and organic search for Wakad-based businesses." },
      ]}
      faqs={[
        {
          q: "Do you work with IT companies and startups in Wakad?",
          a: "Yes, we have significant experience building websites for IT companies, software agencies, and tech startups in Wakad and the Hinjewadi corridor. Our Next.js development capabilities are particularly well-suited for tech businesses.",
        },
        {
          q: "Can you create a real estate website for Wakad properties?",
          a: "Absolutely. We build specialized real estate websites with property listings, filter/search functionality, virtual tour embedding, inquiry forms, EMI calculators, and local area guides — all optimized for Google real estate searches.",
        },
        {
          q: "How much does a website cost in Wakad?",
          a: "Our website packages for Wakad businesses start at ₹18,000 for a 5-page brochure site and go up to ₹1,50,000+ for custom web applications. Contact us for a detailed, transparent quote tailored to your requirements.",
        },
        {
          q: "How quickly can you build a website?",
          a: "Our typical turnaround for a 10-15 page business website is 3-4 weeks. Rush projects can be accommodated with priority development. We always provide a clear, agreed-upon timeline before we begin work.",
        },
      ]}
    />
  );
}
