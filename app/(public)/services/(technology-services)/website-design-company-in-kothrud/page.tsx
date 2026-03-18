import { Metadata } from "next";
import { Monitor, Globe, Search, Target, Zap, BarChart } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import LocationPageTemplate from "@/app/(public)/_locationPage/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Web Design Company in Kothrud Pune | Growthik Media",
  description:
    "Best web design company in Kothrud, Pune. We create modern, fast, and SEO-optimized websites for local businesses. Get a free quote today.",
  keywords:
    "website design company kothrud, web design kothrud pune, website development kothrud, best web design company kothrud pune",
  alternates: {
    canonical: `${CONTACT_INFO.website}/website-design-company-in-kothrud`,
  },
  openGraph: {
    title: "Web Design Company in Kothrud Pune | Growthik Media",
    description:
      "Best website design company in Kothrud, Pune — modern, fast, SEO-ready websites that convert. Free consultation available.",
    url: `${CONTACT_INFO.website}/website-design-company-in-kothrud`,
    siteName: "Growthik Media",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function WebsiteDesignKothrud() {
  return (
    <LocationPageTemplate
      area="Kothrud"
      city="Pune"
      primaryService="Website Design Company"
      slug="website-design-company-in-kothrud"
      headline="Best Website Design Company in Kothrud"
      subheadline="We build high-performance, beautifully designed websites for Kothrud businesses that rank on Google, engage visitors, and convert them into loyal customers."
      areaDescription="Kothrud is one of Pune's most densely populated and commercially active areas — home to educational institutions, healthcare clinics, coaching centers, retail outlets, and professional services. It's a market with strong local search behavior, where 'near me' Google searches drive significant footfall. Growthik Media has built several websites for Kothrud-based businesses and understands what local customers in this market respond to. Our websites combine clean modern design with technical SEO excellence to put your business front and center when locals search for your services."
      services={[
        { icon: Monitor, name: "Custom Website Design", desc: "Beautiful, brand-aligned website designs tailored for Kothrud businesses — from clinics and coaching centers to retail and professional services." },
        { icon: Globe, name: "WordPress Development", desc: "Easy-to-manage WordPress websites with all the features your Kothrud business needs." },
        { icon: Search, name: "Local SEO Optimization", desc: "Rank in Google's Map Pack and organic results for Kothrud-specific searches." },
        { icon: Target, name: "Landing Page Design", desc: "Targeted landing pages for specific services or campaigns — optimized to convert Kothrud visitors." },
        { icon: Zap, name: "Performance-First Development", desc: "90+ PageSpeed scores, zero CLS, and optimal Core Web Vitals on every site we build." },
        { icon: BarChart, name: "Conversion Rate Optimization", desc: "UX analysis and A/B testing to maximize the percentage of visitors who contact or purchase from you." },
      ]}
      faqs={[
        {
          q: "Which types of businesses in Kothrud do you typically work with?",
          a: "We work with a wide range of Kothrud businesses: clinics and hospitals, coaching institutes, law firms, restaurants, real estate agencies, retail shops, coaching classes, and professional service providers.",
        },
        {
          q: "Does the website you build appear in local Kothrud searches?",
          a: "Yes. Our process includes Google Business Profile setup and optimization, local schema markup, Kothrud-specific keyword targeting, and NAP consistency across directories — giving your site maximum visibility for local searches.",
        },
        {
          q: "What is the cost of a website in Kothrud?",
          a: "A professional website for a Kothrud business starts at ₹15,000 for a simple 5-page site and can go up to ₹1,50,000+ for a fully custom solution. We tailor our proposals to your specific needs and budget.",
        },
        {
          q: "Do you provide content writing for the website?",
          a: "Yes, we offer professional copywriting and content creation as part of our website packages. Our content is SEO-optimized, conversion-driven, and written in a tone that resonates with your target audience.",
        },
      ]}
    />
  );
}
