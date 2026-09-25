import type { BlogCategoryPage } from "./types";

export const LEGACY_CATEGORY_REDIRECTS: Record<string, string> = {
  "web-design": "web-development",
  performance: "web-development",
};

export const BLOG_CATEGORY_PAGES: BlogCategoryPage[] = [
  {
    slug: "seo",
    name: "SEO",
    h1: "SEO Guides & Strategies for Pune Businesses",
    eyebrow: "SEO",
    intro:
      "These SEO guides explain how search visibility works for Pune and Indian businesses: technical issues, on-page structure, content quality, internal linking and measurement. Use them to diagnose why a website is not ranking, then apply the same process across service pages, location pages and commercial landing pages.",
    directAnswer:
      "SEO is the process of making a website easier for search engines and users to understand, so it can appear for relevant searches and attract qualified traffic over time.",
    metaTitle: "SEO Guides & Strategies for Pune Businesses | Growthik Media",
    metaDescription:
      "Practical SEO guides for Pune businesses. Learn technical SEO, on-page SEO, audits, indexing and search visibility strategies from Growthik Media.",
    serviceHref: "/services/seo/",
    serviceLabel: "SEO Services in Pune",
    serviceCta: "Get SEO support for your Pune website",
    faqs: [
      {
        question: "What SEO issues should a Pune business check first?",
        answer:
          "Start with crawlability, indexation, page speed, title and heading clarity, internal links and whether each important page matches a real search intent.",
      },
      {
        question: "How is SEO different from Google Ads?",
        answer:
          "SEO compounds organic visibility over time. Google Ads can generate demand immediately, but it stops when spend stops. Most growing businesses need both.",
      },
    ],
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    h1: "Local SEO Guides for Pune Businesses",
    eyebrow: "Local SEO",
    intro:
      "Local SEO helps a Pune business appear for geographically relevant searches on Google Search and Google Maps. These guides cover Google Business Profile, neighbourhood relevance, reviews, citations and location-specific content for areas such as Baner, Hinjewadi, Wakad, Kothrud and Warje.",
    directAnswer:
      "Local SEO is the process of optimizing a business's online presence so it can appear for geographically relevant searches, including Google Search and Google Maps.",
    metaTitle: "Local SEO Guides for Pune Businesses | Growthik Media",
    metaDescription:
      "Local SEO guides for Pune businesses. Learn Google Business Profile, Maps visibility, neighbourhood targeting and local search strategy.",
    serviceHref: "/services/local-seo/",
    serviceLabel: "Local SEO Services",
    serviceCta: "Improve your Pune Maps and local search visibility",
    faqs: [
      {
        question: "What is Local SEO?",
        answer:
          "Local SEO is the process of optimizing a business's online presence so it can appear for geographically relevant searches, including Google Search and Google Maps.",
      },
      {
        question: "Does Local SEO only work for shops with walk-in customers?",
        answer:
          "No. Service businesses, clinics, real estate teams and B2B firms in Pune also win local searches when their profile, pages and reviews match local intent.",
      },
    ],
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    h1: "Google Ads & PPC Guides for Pune Businesses",
    eyebrow: "Google Ads",
    intro:
      "These Google Ads guides help Pune businesses decide when search ads are the right channel, how they differ from Meta Ads, and what to measure before increasing spend. The focus is intent, conversion tracking, landing-page fit and avoiding wasted clicks.",
    directAnswer:
      "Google Ads is a paid search and demand-capture channel that shows ads to people already looking for a product, service or solution.",
    metaTitle: "Google Ads & PPC Guides for Pune Businesses | Growthik Media",
    metaDescription:
      "Google Ads and PPC guides for Pune businesses. Compare search ads, Meta Ads, intent, tracking and campaign decisions with Growthik Media.",
    serviceHref: "/services/ppc-google-ads/",
    serviceLabel: "Google Ads Management",
    serviceCta: "Talk to us about Google Ads for Pune leads",
    faqs: [
      {
        question: "When should a Pune business use Google Ads?",
        answer:
          "Use Google Ads when people already search for your offer and you can send them to a page that can convert. It is strongest for high-intent services and time-sensitive demand.",
      },
      {
        question: "What matters more than increasing ad budget?",
        answer:
          "Conversion tracking, keyword intent, negative keywords and landing-page relevance usually improve results more than simply spending more.",
      },
    ],
  },
  {
    slug: "meta-ads",
    name: "Meta Ads",
    h1: "Meta Ads Guides for Pune Businesses",
    eyebrow: "Meta Ads",
    intro:
      "Meta Ads are useful when a Pune business needs reach, remarketing or demand creation on Facebook and Instagram. These notes explain when Meta is a better fit than Google Ads, and what to prepare before running lead or traffic campaigns: offer, creative, audience and tracking.",
    directAnswer:
      "Meta Ads are paid Facebook and Instagram campaigns used to create demand, retarget visitors and generate leads from people who may not be searching yet.",
    metaTitle: "Meta Ads Guides for Pune Businesses | Growthik Media",
    metaDescription:
      "Meta Ads guidance for Pune businesses. Learn when Facebook and Instagram ads fit, how they compare with Google Ads, and what to track.",
    serviceHref: "/services/meta-ads/",
    serviceLabel: "Meta Ads Services",
    serviceCta: "Plan Meta Ads with Growthik Media",
    relatedPostSlugs: ["google-ads-vs-meta-ads"],
    faqs: [
      {
        question: "Are Meta Ads better than Google Ads?",
        answer:
          "Neither is universally better. Google Ads captures existing search intent. Meta Ads creates and retargets demand. The right mix depends on the offer, margin and sales cycle.",
      },
      {
        question: "What should be ready before launching Meta Ads?",
        answer:
          "A clear offer, conversion tracking, a landing page or WhatsApp path, and enough creative variations to test. Running ads without those usually wastes budget.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    h1: "Digital Marketing Strategy Guides for Pune Businesses",
    eyebrow: "Digital Marketing",
    intro:
      "Digital marketing here means the practical system behind visibility, traffic, leads and conversion: positioning, content, channels, measurement and follow-up. These articles cover strategy, campaign lessons and marketing fundamentals for Pune and Indian businesses, without treating every trend as a core service pillar.",
    directAnswer:
      "Digital marketing is the coordinated use of search, ads, content, websites and measurement to attract the right audience and convert attention into business enquiries.",
    metaTitle: "Digital Marketing Strategy Guides Pune | Growthik Media",
    metaDescription:
      "Digital marketing strategy guides for Pune businesses. Learn marketing fundamentals, campaign lessons and practical growth systems from Growthik Media.",
    serviceHref: "/services/social-media-marketing/",
    serviceLabel: "Digital Marketing Services",
    serviceCta: "Get a practical digital marketing plan",
    faqs: [
      {
        question: "What is digital marketing for a local business?",
        answer:
          "It is the combination of website, SEO, ads, content and follow-up that helps a business get found, earn trust and generate enquiries. Channel choice should follow the offer, not trends.",
      },
      {
        question: "Should every Pune business chase viral trends?",
        answer:
          "No. Trend content can create attention, but evergreen SEO, ads and a conversion-ready website usually produce more reliable leads.",
      },
    ],
  },
  {
    slug: "web-development",
    name: "Web Development",
    h1: "Website & Growth Guides for Pune Businesses",
    eyebrow: "Web Development",
    intro:
      "A website is not only a design project. These guides cover how Pune businesses should evaluate a web partner, understand website cost, fix bounce rate and improve Core Web Vitals so pages load fast enough to support SEO and conversions.",
    directAnswer:
      "A growth-focused website is a fast, clear, mobile-ready page system that explains the offer, builds trust and makes it easy for a visitor to enquire.",
    metaTitle: "Website & Web Development Guides Pune | Growthik Media",
    metaDescription:
      "Website and web development guides for Pune businesses. Compare cost, agency checks, Core Web Vitals and bounce-rate fixes from Growthik Media.",
    serviceHref: "/services/website-development/",
    serviceLabel: "Website Development",
    serviceCta: "Build a faster, conversion-ready website",
    faqs: [
      {
        question: "What should a Pune business look for in a website company?",
        answer:
          "Portfolio quality, SEO basics, page speed, a clear process, ownership of the code and support after launch. Price alone is a weak decision filter.",
      },
      {
        question: "Why do Core Web Vitals matter?",
        answer:
          "Slow or unstable pages lose visitors and make it harder for search engines to treat the site as a good result. LCP, CLS and INP are practical quality signals, not vanity scores.",
      },
    ],
  },
  {
    slug: "ai-search",
    name: "AI Search",
    h1: "AI Search, AEO & GEO Optimization Guides",
    eyebrow: "AI Search",
    intro:
      "AI search is changing how people discover answers. These guides cover SEO, AEO and GEO together: how to structure content so Google, ChatGPT, Perplexity and Gemini can extract a clear answer, attribute the source and connect Growthik Media to Pune, SEO, ads and web development.",
    directAnswer:
      "AI search optimization means making content easy for answer engines and generative systems to understand, extract and cite, while still ranking in traditional search.",
    metaTitle: "AI Search, AEO & GEO Guides | Growthik Media",
    metaDescription:
      "AI search, AEO and GEO guides from Growthik Media. Learn how Pune businesses can improve visibility in Google AI Overviews, ChatGPT and Perplexity.",
    serviceHref: "/services/seo/",
    serviceLabel: "AI Search & SEO Services",
    serviceCta: "Improve your AI search visibility",
    faqs: [
      {
        question: "What is AEO?",
        answer:
          "Answer Engine Optimization is the practice of structuring content so AI systems can extract a direct, self-contained answer to a specific question.",
      },
      {
        question: "What is GEO?",
        answer:
          "Generative Engine Optimization is the practice of making a brand, author and content easy for generative AI systems to identify, trust and cite.",
      },
    ],
  },
];

export function getBlogCategoryPage(slug: string): BlogCategoryPage | undefined {
  return BLOG_CATEGORY_PAGES.find((category) => category.slug === slug);
}

export function resolveCategorySlug(slug: string): string {
  return LEGACY_CATEGORY_REDIRECTS[slug] ?? slug;
}

export const BLOG_HUB_FAQS = [
  {
    question: "What is the Growthik Media blog?",
    answer:
      "The Growthik Media blog is a Pune-based digital marketing knowledge hub covering SEO, Local SEO, Google Ads, Meta Ads, AI search, websites and practical growth strategy for Indian businesses.",
  },
  {
    question: "Who writes these articles?",
    answer:
      "Articles are written by Amol Kadam, founder of Growthik Media, with a focus on SEO, performance marketing and website systems used for Pune and Indian businesses.",
  },
  {
    question: "Can these guides help if I need implementation, not just reading?",
    answer:
      "Yes. Each topic cluster links to the relevant Growthik Media service page so you can move from an article to SEO, ads, website or local search support.",
  },
  {
    question: "How often is the blog updated?",
    answer:
      "New guides are added around SEO, ads, websites and AI search. Existing articles are updated when the underlying platform advice, process or examples change.",
  },
];
