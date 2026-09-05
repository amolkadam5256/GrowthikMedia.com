import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

export type LegacyPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  audience: string;
  sections: string[];
  relatedLinks: { label: string; href: string }[];
  noIndex?: boolean;
};

const service = (slug: string, h1: string, audience: string, sections: string[], links: LegacyPage["relatedLinks"]): LegacyPage => ({
  slug,
  title: `${h1} | Growthik Media`,
  description: `${h1} by Growthik Media. Practical strategy, campaigns, landing pages and tracking for ${audience}.`,
  eyebrow: "Legacy Service Page",
  h1,
  audience,
  sections,
  relatedLinks: links,
});

const websiteLinks = [
  { label: "Website Development", href: "/services/website-development/" },
  { label: "Website Design Pune", href: "/services/website-design-company-pune/" },
  { label: "Contact Growthik", href: "/contact/" },
];

const seoLinks = [
  { label: "SEO Services", href: "/services/seo/" },
  { label: "Local SEO", href: "/services/local-seo/" },
  { label: "Free SEO Audit", href: "/audit/" },
];

const ppcLinks = [
  { label: "Google Ads", href: "/services/ppc-google-ads/" },
  { label: "Landing Pages", href: "/services/website-development/" },
  { label: "Contact Growthik", href: "/contact/" },
];

const metaLinks = [
  { label: "Meta Ads", href: "/services/meta-ads/" },
  { label: "Social Media Marketing", href: "/services/social-media-marketing/" },
  { label: "Contact Growthik", href: "/contact/" },
];

const performanceLinks = [
  { label: "Performance Marketing", href: "/services/performance-marketing/" },
  { label: "Lead Generation", href: "/services/lead-generation/" },
  { label: "Free Audit", href: "/audit/" },
];

export const legacyServicePages: Record<string, LegacyPage> = {
  "seo-services-in-bangalore": service("seo-services-in-bangalore", "SEO Services in Bangalore", "Bangalore startups, SaaS teams and service businesses", [
    "Growthik Media builds SEO systems for Bangalore startups, SaaS teams, ecommerce brands and service businesses that need qualified organic enquiries beyond paid ads.",
    "Our Bangalore SEO work covers technical audits, crawl fixes, keyword mapping, on-page optimization, internal linking, schema support and content clusters for high-value commercial terms.",
    "This URL is served as its own indexable page with a self-referencing canonical, so users and search engines can access the Bangalore SEO page directly without a redirect.",
  ], seoLinks),
  "seo-services-in-delhi": service("seo-services-in-delhi", "SEO Services in Delhi", "Delhi businesses competing in local and national search", [
    "Our Delhi SEO plans focus on technical hygiene, content authority and conversion paths for service-led companies.",
    "We map each page to one primary keyword, improve internal links and build content that can earn qualified enquiries.",
    "Growthik Media supports Delhi campaigns remotely with transparent reporting and measurable search KPIs.",
  ], seoLinks),
  "seo-services-in-pune": service("seo-services-in-pune", "SEO Services in Pune", "Pune businesses that need organic leads", [
    "Growthik Media is based in Pune and builds SEO systems for local businesses, B2B companies, real estate brands, clinics and ecommerce teams.",
    "Work begins with technical audit, keyword mapping and content fixes before expanding into topical authority and local discovery.",
    "The goal is compounding traffic that turns into calls, forms and booked strategy conversations.",
  ], seoLinks),
  "seo-services-for-healthcare": service("seo-services-for-healthcare", "SEO Services for Healthcare", "clinics, hospitals and healthcare providers", [
    "Healthcare SEO needs trust, local visibility and careful content. We improve service pages, doctor or clinic discovery paths and appointment-focused calls to action.",
    "We avoid unsupported medical claims and focus on discoverability, accessibility and clear patient information.",
    "Campaigns can include local SEO, review visibility, schema and technical cleanup.",
  ], seoLinks),
  "seo-services-for-ecommerce": service("seo-services-for-ecommerce", "SEO Services for Ecommerce", "online stores and D2C brands", [
    "Ecommerce SEO starts with crawlable category architecture, product metadata, collection copy and technical performance.",
    "We help stores rank for category, comparison and problem-aware searches while protecting Core Web Vitals.",
    "Tracking connects organic sessions to product discovery, add-to-cart behavior and revenue.",
  ], seoLinks),
  "seo-services-for-startups": service("seo-services-for-startups", "SEO Services for Startups", "early-stage SaaS and service startups", [
    "Startup SEO must be lean: pick the few pages that can generate qualified pipeline and build authority around them.",
    "We prioritize competitor alternatives, problem-led content, founder expertise and technical speed.",
    "The aim is durable acquisition without depending only on ad spend.",
  ], seoLinks),
  "seo-company-in-hinjewadi": service("seo-company-in-hinjewadi", "SEO Company in Hinjewadi", "Hinjewadi IT companies and B2B teams", [
    "Hinjewadi companies often need B2B SEO, technical content and lead generation for software, consulting and IT services.",
    "We build pages for buyers, not just keywords, with content for CTOs, founders and procurement teams.",
    "Local relevance, technical performance and conversion tracking are built into the campaign.",
  ], seoLinks),
  "ai-marketing-in-hyderabad": service("ai-marketing-in-hyderabad", "AI Marketing in Hyderabad", "Hyderabad businesses adopting automated growth systems", [
    "AI marketing at Growthik Media means better segmentation, faster content planning, lead scoring and campaign optimization.",
    "For Hyderabad teams, we combine paid media, SEO and landing page testing with practical automation.",
    "The focus is measurable growth, not AI buzzwords.",
  ], performanceLinks),
  "ai-marketing-in-delhi": service("ai-marketing-in-delhi", "AI Marketing in Delhi", "Delhi brands seeking smarter acquisition", [
    "We use AI-assisted research, ad testing and lead qualification to reduce waste in multi-channel campaigns.",
    "Delhi businesses get a practical growth system across search, social, landing pages and CRM follow-up.",
    "Every experiment is measured against pipeline quality and cost per lead.",
  ], performanceLinks),
  "ai-marketing-in-mumbai": service("ai-marketing-in-mumbai", "AI Marketing in Mumbai", "Mumbai companies that need faster campaign learning", [
    "Mumbai campaigns move quickly, so we use AI-assisted analysis to identify creative winners, search intent and audience patterns.",
    "Growthik Media builds acquisition systems that connect traffic sources to landing pages and sales follow-up.",
    "The result is clearer decision-making across SEO, Google Ads and Meta Ads.",
  ], performanceLinks),
  "ai-marketing-in-pune": service("ai-marketing-in-pune", "AI Marketing in Pune", "Pune businesses building automated lead engines", [
    "We use AI to support research, targeting, lead scoring and content planning while keeping strategy human-led.",
    "For Pune businesses, this helps improve response speed and campaign learning without adding manual overhead.",
    "AI marketing connects best with strong tracking, landing pages and CRM discipline.",
  ], performanceLinks),
  "ai-marketing-for-ecommerce": service("ai-marketing-for-ecommerce", "AI Marketing for Ecommerce", "ecommerce and D2C brands", [
    "AI-assisted ecommerce marketing helps identify product demand, audience segments, retention opportunities and campaign waste.",
    "We pair this with SEO category work, paid media testing and conversion-focused product journeys.",
    "The priority is revenue clarity from first visit to repeat purchase.",
  ], [{ label: "Ecommerce Development", href: "/services/ecommerce-development/" }, ...performanceLinks.slice(1)]),
  "ai-marketing-for-real-estate": service("ai-marketing-for-real-estate", "AI Marketing for Real Estate", "real estate developers, brokers and project marketers", [
    "Real estate AI marketing helps qualify leads, retarget project visitors and improve follow-up timing.",
    "We connect search, social and landing pages so project enquiries are easier to measure and prioritize.",
    "The campaign is built around location, budget, possession timeline and buyer intent.",
  ], [{ label: "Real Estate Website Development", href: "/services/real-estate-website-development/" }, ...performanceLinks.slice(1)]),
  "meta-ads-agency-in-bangalore": service("meta-ads-agency-in-bangalore", "Meta Ads Agency in Bangalore", "Bangalore consumer and B2B brands", ["We plan Facebook and Instagram campaigns for Bangalore brands that need creative testing, audience learning and conversion tracking.", "Campaigns include Reels, lead forms, landing pages, retargeting and weekly optimization.", "The page supports businesses searching specifically for Meta Ads help in Bangalore."], metaLinks),
  "meta-ads-agency-in-pune": service("meta-ads-agency-in-pune", "Meta Ads Agency in Pune", "Pune businesses scaling with Facebook and Instagram ads", ["Growthik Media builds Meta campaigns for Pune brands across local services, real estate, ecommerce and education.", "We test hooks, offers, formats and landing page flows instead of relying on one creative idea.", "Tracking includes Pixel, CAPI where applicable and lead quality feedback."], metaLinks),
  "meta-ads-agency-in-mumbai": service("meta-ads-agency-in-mumbai", "Meta Ads Agency in Mumbai", "Mumbai brands competing for attention", ["Mumbai Meta Ads need sharp creative, clear offers and disciplined retargeting.", "We combine content angles, audience tests and conversion-focused landing pages to improve paid social performance.", "Reporting focuses on cost per qualified lead, not vanity engagement."], metaLinks),
  "meta-ads-agency-in-hyderabad": service("meta-ads-agency-in-hyderabad", "Meta Ads Agency in Hyderabad", "Hyderabad service and ecommerce brands", ["We run Instagram and Facebook campaigns for Hyderabad businesses that need measurable enquiries and sales.", "The system covers creative strategy, campaign structure, landing page alignment and lead follow-up.", "Growthik Media keeps the campaign tied to revenue outcomes."], metaLinks),
  "meta-ads-agency-for-real-estate": service("meta-ads-agency-for-real-estate", "Meta Ads Agency for Real Estate", "real estate projects and property consultants", ["Real estate Meta Ads need location-aware creatives, fast lead capture and strong follow-up workflows.", "We test project offers, amenities, pricing hooks and retargeting sequences.", "Lead quality is reviewed so campaigns optimize toward real buyer conversations."], metaLinks),
  "google-ads-agency-for-startups": service("google-ads-agency-for-startups", "Google Ads Agency for Startups", "startups validating demand", ["Startup Google Ads should validate intent before scaling spend.", "We structure campaigns around high-intent search terms, landing page message match and conversion tracking.", "The objective is pipeline learning with controlled budgets."], ppcLinks),
  "google-ads-agency-in-mumbai": service("google-ads-agency-in-mumbai", "Google Ads Agency in Mumbai", "Mumbai companies buying high-intent traffic", ["We build Google Search and Performance Max campaigns for Mumbai businesses that need qualified enquiries.", "Work includes keyword control, negative keyword cleanup, landing page CRO and conversion tracking.", "Budgets are optimized around lead quality and cost per acquisition."], ppcLinks),
  "google-ads-agency-for-real-estate": service("google-ads-agency-for-real-estate", "Google Ads Agency for Real Estate", "real estate advertisers", ["Real estate search campaigns must separate project, locality and buyer-intent keywords.", "We build landing pages, call tracking and lead form measurement so every enquiry can be reviewed.", "Negative keywords and location controls help reduce wasted spend."], ppcLinks),
  "google-ads-agency-for-healthcare": service("google-ads-agency-for-healthcare", "Google Ads Agency for Healthcare", "clinics and healthcare service providers", ["Healthcare Google Ads need careful targeting, compliant copy and appointment-focused landing pages.", "We optimize around local searches, service intent and lead quality.", "Campaigns are tracked from click to call, form or booked consultation."], ppcLinks),
  "performance": service("performance", "Performance Marketing Services", "growth teams that need measurable acquisition", ["Performance marketing combines paid media, conversion pages, analytics and sales feedback.", "We improve campaigns based on CPA, ROAS and lead quality rather than surface-level metrics.", "This page explains Growthik Media's performance-led approach."], performanceLinks),
  "performance-marketing-in-hyderabad": service("performance-marketing-in-hyderabad", "Performance Marketing in Hyderabad", "Hyderabad businesses scaling paid acquisition", ["We support Hyderabad campaigns across Google, Meta, landing pages and analytics.", "Every channel is measured against acquisition cost and qualified enquiry quality.", "The system is designed for repeatable growth, not one-off boosts."], performanceLinks),
  "performance-marketing-in-pune": service("performance-marketing-in-pune", "Performance Marketing in Pune", "Pune businesses that need predictable leads", ["Growthik Media builds performance systems for Pune brands using paid search, paid social and conversion tracking.", "We tune offers, audiences, keywords and landing pages together.", "The goal is a lower cost per qualified lead over time."], performanceLinks),
  "performance-marketing-for-real-estate": service("performance-marketing-for-real-estate", "Performance Marketing for Real Estate", "real estate teams and developers", ["Real estate performance marketing needs project-specific campaigns, enquiry filtering and fast follow-up.", "We combine Google Ads, Meta Ads, retargeting and landing pages around each project stage.", "Reporting tracks lead source, lead quality and cost per site visit or consultation."], performanceLinks),
  "performance-marketing-for-education": service("performance-marketing-for-education", "Performance Marketing for Education", "schools, colleges, classes and edtech teams", ["Education campaigns need seasonal planning, parent or student intent mapping and strong landing pages.", "We optimize campaigns around enquiries, applications and admissions conversations.", "Content, ads and tracking are built around the academic decision journey."], performanceLinks),
  "performance-marketing-for-healthcare": service("performance-marketing-for-healthcare", "Performance Marketing for Healthcare", "healthcare brands and clinics", ["Healthcare performance marketing must balance compliance, trust and conversion.", "We create service-aware campaigns for local appointment searches, condition-related queries and retargeting.", "The system measures calls, forms and consultation requests."], performanceLinks),
  "performance-marketing-for-b2b-saas": service("performance-marketing-for-b2b-saas", "Performance Marketing for B2B SaaS", "B2B SaaS teams", ["B2B SaaS acquisition needs long-cycle tracking, problem-aware keywords and funnel-specific remarketing.", "We align paid media with demo pages, comparison content and CRM signals.", "Campaigns optimize toward sales-qualified pipeline rather than raw lead volume."], performanceLinks),
  "website-design-company-in-kothrud": service("website-design-company-in-kothrud", "Website Design Company in Kothrud", "Kothrud clinics, classes and local businesses", ["Growthik Media designs fast, mobile-first websites for Kothrud businesses that need trust and local discovery.", "Pages are built with clear service copy, forms, calls, Core Web Vitals and SEO basics.", "The content reflects local search intent without duplicating unrelated city pages."], websiteLinks),
  "website-design-company-in-wakad": service("website-design-company-in-wakad", "Website Design Company in Wakad", "Wakad startups, real estate and local service firms", ["Wakad businesses need websites that look credible and convert mobile visitors quickly.", "We build pages with location-aware messaging, lead capture and technical SEO foundations.", "The page supports searchers who want a Wakad-focused website partner."], websiteLinks),
  "website-design-company-in-hadapsar": service("website-design-company-in-hadapsar", "Website Design Company in Hadapsar", "Hadapsar businesses and industrial service firms", ["We design and develop websites for Hadapsar companies that need stronger online enquiries.", "Work includes UX, page speed, SEO structure, service pages and conversion forms.", "The page supports local Hadapsar search intent directly."], websiteLinks),
  "website-design-company-in-viman-nagar": service("website-design-company-in-viman-nagar", "Website Design Company in Viman Nagar", "Viman Nagar retail, hospitality and professional services", ["Viman Nagar businesses need polished websites that match a premium local audience.", "Growthik Media builds modern pages with fast performance, strong CTAs and local SEO structure.", "The page supports users looking for web design help in Viman Nagar."], websiteLinks),
  "website-design-company-in-aundh": service("website-design-company-in-aundh", "Website Design Company in Aundh", "Aundh clinics, consultants, shops and service businesses", ["Aundh businesses need websites that build trust quickly and generate direct enquiries.", "We combine design, development, SEO structure and conversion copy.", "The page keeps Aundh-specific search intent available at the old URL."], websiteLinks),
};

export const legacyRootPages: Record<string, LegacyPage> = {
  "google-ads-pune": service("google-ads-pune", "Google Ads Pune", "Pune businesses running search campaigns", ["Growthik Media manages Google Ads for Pune companies that need qualified calls, forms and sales enquiries.", "We improve keyword targeting, ad copy, conversion tracking and landing page message match.", "Campaigns are reviewed by cost per lead, lead quality and revenue contribution."], ppcLinks),
  "website-design-in-pcmc": service("website-design-in-pcmc", "Website Design in PCMC", "PCMC manufacturers, traders and local service firms", ["We create SEO-ready websites for PCMC businesses across Pimpri, Chinchwad, Akurdi and nearby industrial zones.", "Websites include fast loading, mobile-first layouts, enquiry forms and clear service architecture.", "The page supports PCMC searchers without forcing a redirect."], websiteLinks),
  "website-design-company-in-wakad": legacyServicePages["website-design-company-in-wakad"],
  "web-design-in-viman-nagar": service("web-design-in-viman-nagar", "Web Design in Viman Nagar", "Viman Nagar businesses", ["Growthik Media builds modern web design systems for Viman Nagar companies that need a premium digital presence.", "Projects include responsive design, SEO foundations, content structure and conversion-focused contact paths.", "This URL remains available for users searching the older web design phrase."], websiteLinks),
  "website-development-in-hadapsar": service("website-development-in-hadapsar", "Website Development in Hadapsar", "Hadapsar businesses", ["We develop high-performance websites for Hadapsar businesses that need stable, scalable lead generation.", "Work can include Next.js, WordPress, ecommerce, maintenance and technical SEO setup.", "This page supports users searching specifically for website development in Hadapsar."], websiteLinks),
  "website-design-company-in-baner": service("website-design-company-in-baner", "Website Design Company in Baner", "Baner startups and local businesses", ["Baner companies need polished websites that perform well and communicate credibility fast.", "We create brand-led, SEO-ready websites with lead capture and analytics built in.", "The page supports the older Baner-specific URL directly."], websiteLinks),
  "website-design-company-in-kothrud": legacyServicePages["website-design-company-in-kothrud"],
  "seo-company-in-hinjewadi": legacyServicePages["seo-company-in-hinjewadi"],
  "website-design-company-in-aundh": legacyServicePages["website-design-company-in-aundh"],
  "website-design-company-in-hadapsar": legacyServicePages["website-design-company-in-hadapsar"],
  "website-design-company-in-pcmc": service("website-design-company-in-pcmc", "Website Design Company in PCMC", "PCMC businesses", ["Growthik Media designs and develops business websites for PCMC companies that need search visibility and leads.", "We support manufacturers, service firms, retailers and professional businesses with conversion-focused web pages.", "This old URL now serves its own page directly."], websiteLinks),
  "&": {
    slug: "&",
    title: "Invalid URL | Growthik Media",
    description: "This malformed URL is not a real Growthik Media service page.",
    eyebrow: "Invalid URL",
    h1: "This URL is malformed",
    audience: "search engines and users who reached a broken symbol-only path",
    sections: ["The path contains only a symbol and does not describe a service, location, blog article or portfolio item.", "Growthik Media keeps this page noindex so it does not compete with real service pages.", "Use the links below to reach the correct website sections."],
    relatedLinks: [{ label: "Services", href: "/services/" }, { label: "Blog", href: "/blog/" }, { label: "Contact", href: "/contact/" }],
    noIndex: true,
  },
  "$": {
    slug: "$",
    title: "Invalid URL | Growthik Media",
    description: "This malformed URL is not a real Growthik Media service page.",
    eyebrow: "Invalid URL",
    h1: "This URL is malformed",
    audience: "search engines and users who reached a broken symbol-only path",
    sections: ["The path contains only a symbol and does not describe a valid Growthik Media page.", "It is intentionally marked noindex to protect the site from duplicate or low-value indexing.", "Use the links below to continue to a real page."],
    relatedLinks: [{ label: "Services", href: "/services/" }, { label: "Portfolio", href: "/portfolio/" }, { label: "Contact", href: "/contact/" }],
    noIndex: true,
  },
};

export const legacyPortfolioPages: Record<string, LegacyPage> = {
  websites: service("websites", "Website Portfolio", "buyers reviewing Growthik Media website work", ["Explore the kind of website strategy Growthik Media brings to redesign, development and SEO-led builds.", "Our website work focuses on clear messaging, fast loading, mobile UX and measurable enquiries.", "This legacy portfolio URL remains available for users who bookmarked the older website category."], [{ label: "Website Projects", href: "/portfolio/website-projects/" }, { label: "Website Development", href: "/services/website-development/" }, { label: "Contact", href: "/contact/" }]),
  "media-coverage": service("media-coverage", "Media Coverage", "users looking for Growthik Media mentions and visibility", ["This page organizes media and visibility-related proof for Growthik Media.", "For service buyers, media coverage supports trust alongside case studies, testimonials and founder-led expertise.", "Use this page to move into success stories and current proof pages."], [{ label: "Success Stories Media", href: "/success-stories/media/" }, { label: "Success Stories", href: "/success-stories/" }, { label: "Contact", href: "/contact/" }]),
  "social-media": service("social-media", "Social Media Portfolio", "brands reviewing social creative work", ["Growthik Media's social work focuses on campaign ideas, content systems and creative that can support paid and organic growth.", "This page preserves the older social-media portfolio intent.", "For active examples, review social media creatives and digital campaign work."], [{ label: "Social Media Creatives", href: "/portfolio/social-media-creatives/" }, { label: "Digital Campaigns", href: "/portfolio/digital-campaigns/" }, { label: "Meta Ads", href: "/services/meta-ads/" }]),
  testimonials: service("testimonials", "Client Testimonials", "buyers checking trust proof", ["Testimonials help buyers understand communication, delivery quality and outcomes.", "This legacy URL keeps that trust intent available while connecting users to current success-story proof.", "Growthik Media uses testimonials alongside case studies and audits to show real capability."], [{ label: "Testimonials", href: "/success-stories/testimonials/" }, { label: "Case Studies", href: "/portfolio/case-studies/" }, { label: "Contact", href: "/contact/" }]),
  branding: service("branding", "Branding Portfolio", "businesses evaluating brand identity work", ["Branding work includes identity, visual systems, positioning and campaign-ready creative.", "This page keeps the older branding portfolio URL available for searchers and bookmarked users.", "Explore current branding work and strategy services below."], [{ label: "Branding Work", href: "/portfolio/branding-work/" }, { label: "Brand Strategy", href: "/services/brand-strategy/" }, { label: "Brand Identity", href: "/services/brand-identity/" }]),
  "website-redesign-local": service("website-redesign-local", "Local Website Redesign Portfolio", "local businesses planning a redesign", ["Local website redesigns need stronger messaging, better technical performance and a smoother enquiry path.", "This page explains the Growthik Media approach for businesses upgrading an old website.", "The focus is protecting search value while improving design and conversions."], [{ label: "Website Projects", href: "/portfolio/website-projects/" }, { label: "Website Development", href: "/services/website-development/" }, { label: "Free Audit", href: "/audit/" }]),
  "education-content-strategy": service("education-content-strategy", "Education Content Strategy Portfolio", "schools, classes and education brands", ["Education content needs to answer parent, student and admissions questions clearly.", "Growthik Media plans content around discovery, comparison, trust and enquiry stages.", "This legacy URL preserves education content strategy intent."], [{ label: "Case Studies", href: "/portfolio/case-studies/" }, { label: "Content Marketing", href: "/services/content-marketing/" }, { label: "Contact", href: "/contact/" }]),
  "client-stories": service("client-stories", "Client Stories", "buyers researching Growthik Media results", ["Client stories explain the business problem, strategy and measurable outcome behind the work.", "This page keeps the old client-stories URL available and connects it to current proof sections.", "Use it to explore results, testimonials and related portfolio pages."], [{ label: "Success Stories", href: "/success-stories/" }, { label: "Case Studies", href: "/portfolio/case-studies/" }, { label: "Contact", href: "/contact/" }]),
  "video-marketing-startup": service("video-marketing-startup", "Video Marketing for Startups", "startups planning video-led campaigns", ["Startup video marketing works best when creative is tied to a funnel, not treated as decoration.", "Growthik Media plans video assets for awareness, retargeting, landing pages and sales enablement.", "This legacy URL preserves the old startup video campaign intent."], [{ label: "Digital Campaigns", href: "/portfolio/digital-campaigns/" }, { label: "Video Production", href: "/services/video-production/" }, { label: "Contact", href: "/contact/" }]),
};

export function LegacyPageContent({ page, pathPrefix = "" }: { page: LegacyPage; pathPrefix?: string }) {
  const pageUrl = `${CONTACT_INFO.website}${pathPrefix}/${page.slug}/`.replace(/([^:]\/)\/+/g, "$1");
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: pageUrl,
    publisher: { "@id": `${CONTACT_INFO.website}/#organization` },
  };

  return (
    <>
      <Script id={`legacy-page-${pathPrefix}-${page.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-(--background) text-(--text-primary) pt-24">
        <section className="px-6 lg:px-12 py-20 bg-(--surface) border-b border-(--border)">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-black uppercase tracking-wide text-(--color-primary) mb-4">{page.eyebrow}</p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">{page.h1}</h1>
            <p className="text-lg md:text-xl text-(--text-secondary) max-w-3xl leading-relaxed">
              Built for {page.audience}. This page answers the original search intent directly and connects visitors to the most useful Growthik Media resources.
            </p>
          </div>
        </section>
        <section className="px-6 lg:px-12 py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {page.sections.map((section) => (
              <article key={section} className="bg-(--surface) border border-(--border) rounded-2xl p-6">
                <CheckCircle2 className="w-8 h-8 text-(--color-primary) mb-4" />
                <p className="text-sm leading-6 text-(--text-secondary)">{section}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="px-6 lg:px-12 pb-20">
          <div className="max-w-5xl mx-auto bg-(--surface) border border-(--border) rounded-2xl p-8">
            <h2 className="text-2xl font-black mb-6">Next Best Pages</h2>
            <div className="flex flex-wrap gap-3">
              {page.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="inline-flex items-center gap-2 px-5 py-3 bg-(--background) border border-(--border) rounded-xl font-bold hover:border-(--color-primary) transition-colors">
                  {link.label} <ArrowRight className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
