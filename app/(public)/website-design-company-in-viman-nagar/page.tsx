import { Metadata } from "next";
import { Monitor, Globe, Search, Target, Zap, BarChart } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import LocationPageTemplate from "@/app/(public)/_locationPage/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Web Design in Viman Nagar Pune | Website Design Company | Growthik Media",
  description:
    "Professional web design in Viman Nagar, Pune. We build fast, beautiful, and conversion-focused websites for businesses in Viman Nagar. Get a free quote.",
  keywords:
    "web design viman nagar, website design company viman nagar pune, website development viman nagar, best web design viman nagar",
  alternates: {
    canonical: `${CONTACT_INFO.website}/website-design-company-in-viman-nagar`,
  },
  openGraph: {
    title: "Web Design in Viman Nagar Pune | Growthik Media",
    description:
      "Professional web design in Viman Nagar, Pune — high-performance, SEO-optimized websites that grow your business.",
    url: `${CONTACT_INFO.website}/website-design-company-in-viman-nagar`,
    siteName: "Growthik Media",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function WebDesignVimanNagar() {
  return (
    <LocationPageTemplate
      area="Viman Nagar"
      city="Pune"
      primaryService="Web Design"
      slug="website-design-company-in-viman-nagar"
      headline="Expert Web Design in Viman Nagar"
      subheadline="Premium website design services for businesses in Viman Nagar — crafted to rank on Google, load in under 2 seconds, and convert visitors into paying customers."
      areaDescription="Viman Nagar is Pune's cosmopolitan hub — a blend of corporate offices, upscale residences, premium retail, and thriving restaurants. Businesses here serve a digitally sophisticated audience that expects best-in-class online experiences. Growthik Media designs websites for Viman Nagar businesses that match the premium expectations of this market, combining cutting-edge design with high-performance Next.js or WordPress development and deep local SEO expertise."
      services={[
        { icon: Monitor, name: "Custom Web Design", desc: "Bespoke, brand-driven website designs that perfectly represent your Viman Nagar business online." },
        { icon: Globe, name: "eCommerce Development", desc: "Sell online with powerful eCommerce stores — fully integrated with Razorpay, Shiprocket, and GST billing." },
        { icon: Search, name: "Local SEO Setup", desc: "Rank for 'near me' searches in Viman Nagar with Google Business Profile optimization and local schema markup." },
        { icon: Target, name: "UI/UX Design", desc: "User-centric interface designs that reduce bounce rate and guide visitors naturally toward conversion." },
        { icon: Zap, name: "Performance Optimization", desc: "Technical optimization for 90+ PageSpeed scores, fast LCP, and zero layout shift (CLS = 0)." },
        { icon: BarChart, name: "Analytics & Reporting", desc: "Google Analytics 4 and Search Console setup so you always know how your website performs." },
      ]}
      faqs={[
        {
          q: "How much does web design cost in Viman Nagar?",
          a: "Web design in Viman Nagar typically costs ₹20,000–₹1,50,000 for a business website depending on the number of pages, custom features, and complexity. We provide a detailed, transparent quote before any work begins.",
        },
        {
          q: "Can you redesign my existing website?",
          a: "Absolutely. We handle complete website redesigns — improving the design, performance, and SEO while preserving your existing content and rankings. Our average redesign client sees a 40% improvement in Google PageSpeed scores.",
        },
        {
          q: "Do you build websites that rank on Google in Viman Nagar?",
          a: "Yes. Every website we build includes on-page SEO, local schema markup, Core Web Vitals optimization, and Google Business Profile setup — giving your business the best foundation for ranking in Viman Nagar and Pune.",
        },
        {
          q: "What is your design process?",
          a: "We follow a structured 5-step process: Discovery → Wireframing → Design Mockups → Development → Testing & Launch. You're involved at every stage with clear communication and scheduled review meetings.",
        },
      ]}
    />
  );
}
