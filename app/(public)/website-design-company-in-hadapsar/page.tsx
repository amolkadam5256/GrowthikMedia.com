import { Metadata } from "next";
import { Monitor, Globe, Search, Target, Zap, BarChart } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import LocationPageTemplate from "@/app/(public)/_locationPage/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Website Development in Hadapsar Pune | Web Design Company | Growthik Media",
  description:
    "Expert website development in Hadapsar, Pune. Custom, SEO-optimized websites for businesses in Hadapsar. Fast delivery, transparent pricing. Get a free quote.",
  keywords:
    "website development hadapsar, web design hadapsar pune, website design company hadapsar, best web development hadapsar pune",
  alternates: {
    canonical: `${CONTACT_INFO.website}/website-design-company-in-hadapsar`,
  },
  openGraph: {
    title: "Website Development in Hadapsar Pune | Growthik Media",
    description:
      "Expert website development in Hadapsar, Pune — custom, SEO-ready websites for businesses of all sizes. Free quote available.",
    url: `${CONTACT_INFO.website}/website-design-company-in-hadapsar`,
    siteName: "Growthik Media",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function WebsiteDevelopmentHadapsar() {
  return (
    <LocationPageTemplate
      area="Hadapsar"
      city="Pune"
      primaryService="Website Development"
      slug="website-design-company-in-hadapsar"
      headline="Professional Website Development in Hadapsar"
      subheadline="We develop powerful, fast, and SEO-driven websites for businesses in Hadapsar — built to rank on Google, handle real traffic, and convert every visitor into a business opportunity."
      areaDescription="Hadapsar is one of Pune's rapidly developing corridors, home to Magarpatta City, SP Infocity, manufacturing units, residential societies, and a growing retail ecosystem. The digital transformation of Hadapsar's business landscape is accelerating — and companies that invest in quality web development now will enjoy first-mover advantage in Google rankings. Growthik Media provides premium website development services for Hadapsar businesses of all sizes, with a focus on performance, scalability, and local search dominance."
      services={[
        { icon: Monitor, name: "Custom Web Development", desc: "Fully custom-coded websites using Next.js or WordPress — built for performance, scalability, and long-term maintainability." },
        { icon: Globe, name: "Corporate Website Development", desc: "Enterprise-grade corporate websites for Hadapsar's IT companies, manufacturing firms, and professional service providers." },
        { icon: Search, name: "SEO-Integrated Development", desc: "Technical SEO baked into development — proper heading hierarchy, schema markup, canonical URLs, and Core Web Vitals optimization." },
        { icon: Target, name: "eCommerce Development", desc: "WooCommerce and Next.js eCommerce solutions with Razorpay payment integration, inventory management, and order tracking." },
        { icon: Zap, name: "Web App Development", desc: "High-performance web applications for complex business processes — portals, dashboards, booking systems, and SaaS products." },
        { icon: BarChart, name: "Website Redesign", desc: "Transform your outdated website into a modern, fast, conversion-optimized platform without losing your existing SEO rankings." },
      ]}
      faqs={[
        {
          q: "What technologies do you use for website development in Hadapsar?",
          a: "We primarily build with Next.js (React) for high-performance web apps and WordPress for content-managed websites. We choose the technology stack based on your specific requirements, budget, and long-term maintenance needs.",
        },
        {
          q: "Can you develop a website for a manufacturing or industrial company in Hadapsar?",
          a: "Yes. We have experience building B2B and manufacturing websites with product catalogs, industrial specification pages, ISO certification showcases, and inquiry management systems — all optimized for Google B2B searches.",
        },
        {
          q: "How long does website development take?",
          a: "A standard 10-15 page business website takes 3–5 weeks. Complex web applications or eCommerce sites take 8–14 weeks. We provide a detailed project timeline during the proposal phase.",
        },
        {
          q: "Do you guarantee website speed and performance?",
          a: "Yes. Every website we develop is optimized to achieve 90+ Google PageSpeed scores on mobile and desktop, with zero Cumulative Layout Shift (CLS), fast Largest Contentful Paint (LCP), and excellent Core Web Vitals — a critical ranking factor in 2025.",
        },
      ]}
    />
  );
}
