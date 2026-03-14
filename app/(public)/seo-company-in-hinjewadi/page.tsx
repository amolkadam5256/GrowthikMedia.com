import { Metadata } from "next";
import { Search, TrendingUp, Target, Globe, BarChart, Zap } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";
import LocationPageTemplate from "@/app/(public)/_locationPage/LocationPageTemplate";

export const metadata: Metadata = {
  title: "SEO Company in Hinjewadi Pune | Best SEO Agency | Growthik Media",
  description:
    "Top-rated SEO company in Hinjewadi, Pune. We help IT companies, startups, and local businesses rank higher on Google with data-driven SEO strategies.",
  keywords:
    "seo company hinjewadi, seo agency hinjewadi pune, best seo services hinjewadi, digital marketing hinjewadi pune",
  alternates: {
    canonical: `${CONTACT_INFO.website}/seo-company-in-hinjewadi`,
  },
  openGraph: {
    title: "SEO Company in Hinjewadi Pune | Growthik Media",
    description:
      "Top-rated SEO company in Hinjewadi, Pune — data-driven strategies that rank your business on Google and drive consistent organic traffic.",
    url: `${CONTACT_INFO.website}/seo-company-in-hinjewadi`,
    siteName: "Growthik Media",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function SeoCompanyHinjewadi() {
  return (
    <LocationPageTemplate
      area="Hinjewadi"
      city="Pune"
      primaryService="SEO Company"
      slug="seo-company-in-hinjewadi"
      headline="Best SEO Company in Hinjewadi"
      subheadline="Powering Hinjewadi businesses with data-driven SEO that delivers measurable rankings, qualified organic traffic, and consistent lead generation from Google."
      areaDescription="Hinjewadi is Pune's IT corridor — home to major tech parks, hundreds of startups, IT service companies, and supporting businesses like restaurants, real estate, and professional services. The digital competition here is fierce. Growthik Media specializes in SEO for Hinjewadi businesses, combining technical SEO excellence, local search optimization, and content strategies that consistently outrank competitors and capture high-intent search traffic."
      services={[
        { icon: Search, name: "Technical SEO Audit", desc: "Comprehensive audits covering crawlability, indexation, Core Web Vitals, schema markup, and site architecture." },
        { icon: TrendingUp, name: "Keyword Research & Strategy", desc: "In-depth keyword research targeting Hinjewadi and Pune-area searches with high commercial intent." },
        { icon: Target, name: "Local SEO & Map Pack", desc: "Dominate Google's local '3-pack' for searches like 'SEO company Hinjewadi near me' with Google Business Profile optimization." },
        { icon: Globe, name: "On-Page Optimization", desc: "Full on-page SEO — title tags, meta descriptions, heading structure, internal linking, and schema markup on every page." },
        { icon: BarChart, name: "Link Building", desc: "White-hat backlink acquisition through content outreach, digital PR, and local citations to build domain authority." },
        { icon: Zap, name: "E-E-A-T Content Strategy", desc: "Expert-level content creation that satisfies Google's Experience, Expertise, Authoritativeness, and Trustworthiness signals." },
      ]}
      faqs={[
        {
          q: "How long does SEO take to show results in Hinjewadi?",
          a: "Most clients see measurable improvements in rankings within 3–4 months, with significant traffic gains by month 6. SEO is a long-term investment — the results compound over time, unlike paid ads that stop the moment you cut the budget.",
        },
        {
          q: "What is included in your SEO service?",
          a: "Our full-service SEO includes: technical audit and fixes, keyword research, on-page optimization, schema markup, content creation, link building, Google Business Profile management, and monthly reporting with transparent KPIs.",
        },
        {
          q: "Can you rank my IT company's website for competitive keywords?",
          a: "Yes. We've successfully ranked clients in highly competitive IT-related niches. Our approach combines technical excellence, content depth, and strategic link acquisition — the three factors that drive rankings in competitive spaces.",
        },
        {
          q: "How much does SEO cost in Hinjewadi Pune?",
          a: "Our SEO packages start from ₹15,000/month for local SEO and go up to ₹50,000+/month for aggressive growth campaigns targeting high-competition keywords. We provide a custom proposal after auditing your current website.",
        },
      ]}
    />
  );
}
