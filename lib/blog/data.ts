import type { BlogAuthor, BlogCategory, BlogPost, BlogTag } from "./types";

// ─── Authors ─────────────────────────────────────────────────────────────────

export const AUTHORS: BlogAuthor[] = [
  {
    id: "author-1",
    name: "Amol Kadam",
    avatar: "",
    role: "Founder & Digital Marketing Strategist",
    bio: "Amol Kadam is the founder and digital marketing strategist at Growthik Media, a Pune-based digital marketing and web development agency. He has 2.5+ years of hands-on work across SEO, performance marketing, content strategy and website development.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/amolkadam77/",
      twitter: "https://twitter.com/growthikmedia",
      website: "https://www.growthikmedia.com",
    },
  },
];

// ─── Categories ───────────────────────────────────────────────────────────────

export const CATEGORIES: BlogCategory[] = [
  { id: "cat-1", name: "SEO", slug: "seo", color: "#d90b1c", count: 0 },
  { id: "cat-2", name: "Local SEO", slug: "local-seo", color: "#0f766e", count: 0 },
  { id: "cat-3", name: "Google Ads", slug: "google-ads", color: "#d97706", count: 0 },
  { id: "cat-4", name: "Meta Ads", slug: "meta-ads", color: "#2563eb", count: 0 },
  {
    id: "cat-5",
    name: "Digital Marketing",
    slug: "digital-marketing",
    color: "#7c3aed",
    count: 0,
  },
  {
    id: "cat-6",
    name: "Web Development",
    slug: "web-development",
    color: "#059669",
    count: 0,
  },
  { id: "cat-7", name: "AI Search", slug: "ai-search", color: "#7c3aed", count: 0 },
];

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return CATEGORIES.find((category) => category.slug === slug);
}

function categoryBySlug(slug: string): BlogCategory {
  const category = getCategoryBySlug(slug);
  if (!category) {
    throw new Error(`Unknown blog category: ${slug}`);
  }
  return category;
}

// ─── Tags ─────────────────────────────────────────────────────────────────────

export const TAGS: BlogTag[] = [
  { id: "tag-1", name: "SEO", slug: "seo", count: 7 },
  { id: "tag-2", name: "Web Design", slug: "web-design", count: 5 },
  { id: "tag-3", name: "Pune", slug: "pune", count: 9 },
  {
    id: "tag-4",
    name: "Digital Marketing",
    slug: "digital-marketing",
    count: 7,
  },
  { id: "tag-5", name: "Core Web Vitals", slug: "core-web-vitals", count: 4 },
  { id: "tag-6", name: "Next.js", slug: "nextjs", count: 2 },
  { id: "tag-7", name: "Google Ads", slug: "google-ads", count: 3 },
  { id: "tag-8", name: "Local SEO", slug: "local-seo", count: 6 },
  { id: "tag-9", name: "WordPress", slug: "wordpress", count: 2 },
  { id: "tag-10", name: "Branding", slug: "branding", count: 2 },
  {
    id: "tag-11",
    name: "Content Marketing",
    slug: "content-marketing",
    count: 5,
  },
  { id: "tag-12", name: "Social Media", slug: "social-media", count: 3 },
  { id: "tag-13", name: "AI Search", slug: "ai-search", count: 1 },
  { id: "tag-14", name: "Meta Ads", slug: "meta-ads", count: 1 },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-17",
    title: "AI Search Optimization in 2026: Complete SEO, AEO, GEO & AI Visibility Guide",
    slug: "ai-search-optimization-2026-seo-aeo-geo-guide",
    excerpt: "A practical guide to AI search optimization for Indian businesses: SEO, AEO, GEO, technical SEO, internal linking, content quality and measuring AI visibility in 2026.",
    content: "ai-search-optimization-2026-seo-aeo-geo-guide",
    featuredImage: "/images/blog/ai-search-optimization-2026-seo-aeo-geo-guide.png",
    featuredImageAlt: "AI Search Optimization for 2026 with SEO, AEO and GEO visibility strategy",
    thumbnailHeadline: "Master AI Search",
    thumbnailLabel: "AI SEARCH",
    category: categoryBySlug("ai-search"),
    tags: [TAGS[0], TAGS[12], TAGS[3], TAGS[7], TAGS[4], TAGS[10]],
    author: AUTHORS[0],
    publishDate: "2026-09-20T09:00:00Z",
    updatedDate: "2026-09-20T09:00:00Z",
    readingTime: 18,
    views: 0,
    commentsCount: 0,
    likesCount: 0,
    featured: true,
    trending: true,
    metaTitle: "AI Search Optimization 2026: SEO, AEO & GEO Guide | Growthik",
    metaDescription: "Learn AI search optimization in 2026: SEO, AEO, GEO, Google AI Overviews, technical SEO, content quality, internal linking and AI visibility measurement.",
    seoKeywords: [
      "AI search optimization",
      "GEO SEO",
      "AEO SEO",
      "AI SEO services",
      "AI visibility",
      "Google AI Overviews SEO",
      "Google AI Mode SEO",
      "technical SEO for AI search",
      "AI SEO agency in Pune",
      "generative engine optimization",
      "answer engine optimization",
      "SEO AEO GEO guide",
    ],
  },
  {
    id: "post-16",
    title: "Cockroach Janta Party Viral Marketing Case Study: How a Viral Moment Became a Movement",
    slug: "cockroach-janta-party-viral-marketing-case-study-2026",
    excerpt: "A 2026 marketing case study on how the Cockroach Janta Party gained attention, what made the name travel, and what businesses can learn about identity, timing and conversion.",
    content: "cockroach-janta-party-viral-marketing-case-study-2026",
    featuredImage: "/images/blog/cockroach-janta-party-viral-marketing-case-study-2026.jpg",
    featuredImageAlt: "Cockroach Janta Party viral marketing case study 2026",
    thumbnailHeadline: "Viral Marketing Lessons",
    thumbnailLabel: "CASE STUDY",
    category: categoryBySlug("digital-marketing"),
    tags: [TAGS[3], TAGS[2], TAGS[7], TAGS[10], TAGS[11]],
    author: AUTHORS[0],
    publishDate: "2026-05-31T09:00:00Z",
    updatedDate: "2026-09-25T09:00:00Z",
    readingTime: 16,
    views: 0,
    commentsCount: 0,
    likesCount: 0,
    featured: true,
    trending: true,
    metaTitle: "Cockroach Janta Party Viral Marketing Case Study 2026",
    metaDescription:
      "Explore the Cockroach Janta Party viral marketing case study, how CJP gained attention in 2026, and the digital marketing lessons businesses can learn from its rise.",
    seoKeywords: [
      "Cockroach Janta Party viral marketing case study",
      "Cockroach Janta Party case study",
      "Cockroach Janta Party viral campaign",
      "CJP viral marketing",
      "Cockroach Janta Party 2026",
      "viral marketing case study India",
      "viral marketing examples India",
      "grassroots digital marketing",
      "meme marketing strategy",
      "real-time marketing examples",
    ],
  },
  {
    id: "post-15",
    title: "What is Marketing? The Ultimate Guide for Pune Businesses (2026 Edition)",
    slug: "what-is-marketing-guide-pune",
    excerpt: "Marketing is more than just ads. Learn the core principles of marketing, from identifying needs to profitable fulfillment, with real-world examples for Pune businesses.",
    content: "what-is-marketing-guide-pune",
    featuredImage: "/images/blog/What-Is-Marketing-Blog-Thumbnail-2026.jpg",
    featuredImageAlt: "Digital Marketing Strategy and Growth in Pune",
    thumbnailHeadline: "What Is Marketing",
    thumbnailLabel: "MARKETING",
    category: categoryBySlug("digital-marketing"),
    tags: [TAGS[3], TAGS[10], TAGS[11]],
    author: AUTHORS[0],
    publishDate: "2026-05-07T10:00:00Z",
    readingTime: 15,
    views: 0,
    commentsCount: 0,
    likesCount: 0,
    featured: true,
    trending: true,
    metaTitle: "What is Marketing? 2026 Guide for Pune | Growthik",
    metaDescription: "Understand real marketing in 2026. A complete guide for Pune entrepreneurs on needs, demands, STP, and digital strategies to build a profitable brand.",
    seoKeywords: [
      "what is marketing",
      "marketing definition 2026",
      "digital marketing Pune",
      "marketing strategy for beginners",
      "STP framework example",
      "marketing funnel explained",
      "best marketing agency Pune",
    ],
  },
  {
    id: "post-14",
    title: "RCB vs GT IPL 2026: 5 Marketing Lessons Pune Businesses Must Learn from the Pitch",
    slug: "rcb-vs-gt-ipl-2026-marketing-lessons-pune",
    excerpt: "The RCB vs GT clash isn't just about cricket; it's a masterclass in branding and real-time engagement. Discover how Pune businesses can steal these IPL marketing strategies.",
    content: "rcb-vs-gt-ipl-2026-marketing-lessons-pune",
    featuredImage: "/images/blog/rcb-vs-gt-ipl-2026.jpg",
    featuredImageAlt: "RCB vs GT IPL 2026 Marketing Lessons for Pune Businesses",
    thumbnailHeadline: "IPL Marketing Lessons",
    thumbnailLabel: "PERFORMANCE",
    category: categoryBySlug("digital-marketing"),
    tags: [TAGS[3], TAGS[11], TAGS[9], TAGS[10]],
    author: AUTHORS[0],
    publishDate: "2026-05-01T00:10:00Z",
    readingTime: 8,
    views: 0,
    commentsCount: 0,
    likesCount: 0,
    featured: true,
    trending: true,
    metaTitle: "RCB vs GT: IPL 2026 Marketing Lessons | Growthik",
    metaDescription: "Learn from the RCB vs GT rivalry. A deep dive into moment marketing, fan loyalty and data-driven branding strategies for businesses in Pune and beyond.",
    seoKeywords: [
      "RCB vs GT IPL 2026 marketing",
      "IPL marketing lessons",
      "digital marketing trends Pune",
      "brand building Pune",
      "real-time marketing strategy India",
      "local business growth Pune",
    ],
  },
  {
    id: "post-13",
    title: "Real Estate SEO in Pune: The 2026 Strategy to Dominate Luxury & Commercial Search",
    slug: "seo-for-real-estate-pune-guide",
    excerpt: "Pune's real estate market is fierce. Learn how to rank for high-intent property keywords in Baner, Kharadi and Hinjewadi using technical SEO and local intent.",
    content: "seo-for-real-estate-pune-guide",
    featuredImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    featuredImageAlt: "Real Estate SEO Strategy for Pune Developers",
    thumbnailHeadline: "Win Property Search",
    thumbnailLabel: "LOCAL SEO",
    category: categoryBySlug("local-seo"),
    tags: [TAGS[0], TAGS[3], TAGS[7], TAGS[11]],
    author: AUTHORS[0],
    publishDate: "2026-04-30T10:00:00Z",
    readingTime: 10,
    views: 0,
    commentsCount: 0,
    likesCount: 0,
    featured: true,
    trending: true,
    metaTitle: "Real Estate SEO Pune: 2026 Strategy for Developers | Growthik",
    metaDescription: "Dominate Pune's property search market. A deep-dive guide for real estate developers into local SEO, technical property schema and intent-led lead generation.",
    seoKeywords: [
      "real estate SEO Pune",
      "digital marketing for real estate Pune",
      "property marketing Pune",
      "real estate leads Pune",
      "local SEO for developers Pune",
    ],
  },
  {
    id: "post-12",
    title: "Raja Shivaji Movie: Pune's Biggest Marketing Trend",
    slug: "raja-shivaji-marathi-movie-bookings-pune-marketing-trend",
    excerpt: "Raja Shivaji Marathi movie bookings are becoming a Pune search and social trend. Here is how local businesses can turn cultural attention into leads.",
    content: "raja-shivaji-marathi-movie-bookings-pune-marketing-trend",
    featuredImage: "/images/blog/raja-shivaji-marathi-movie-bookings-pune.jpg",
    featuredImageAlt: "Raja Shivaji Marathi Movie Bookings Trending Pune",
    thumbnailHeadline: "Moment Marketing",
    thumbnailLabel: "PERFORMANCE",
    category: categoryBySlug("digital-marketing"),
    tags: [TAGS[3], TAGS[2], TAGS[0], TAGS[7]],
    author: AUTHORS[0],
    publishDate: "2026-04-27T10:00:00Z",
    readingTime: 7,
    views: 0,
    commentsCount: 0,
    likesCount: 0,
    featured: true,
    trending: true,
    metaTitle: "Raja Shivaji Movie Marketing Trend in Pune | Growthik",
    metaDescription: "See how Raja Shivaji movie searches became a Pune marketing trend and what local businesses can learn about timing, content and leads.",
    seoKeywords: [
      "Raja Shivaji movie bookings Pune",
      "Pune marketing trends",
      "Marathi movie marketing",
      "local business marketing Pune",
      "social media marketing Pune",
    ],
  },
  {
    id: "post-11",
    title: "What is SEO? Complete Beginner Guide to Search Engine Optimization (2026)",
    slug: "complete-beginner-guide-to-seo-2026",
    excerpt: "Discover what SEO is, how search engines like Google work and why it is one of the strongest growth channels for Pune businesses in 2026.",
    content: "complete-beginner-guide-to-seo-2026",
    featuredImage: "/images/blog/seo-services-in-pune-rank-1-google-growthik-media-thumbnail.png",
    featuredImageAlt: "SEO Services in Pune - Rank 1 on Google with Growthik Media",
    thumbnailHeadline: "What Is SEO",
    thumbnailLabel: "SEO",
    category: categoryBySlug("seo"),
    tags: [TAGS[0], TAGS[7], TAGS[2]],
    author: AUTHORS[0],
    publishDate: "2026-03-19T09:00:00Z",
    readingTime: 12,
    views: 0,
    commentsCount: 0,
    likesCount: 0,
    featured: true,
    trending: true,
    metaTitle: "What is SEO? | Beginner Guide to SEO 2026 | Growthik Media",
    metaDescription: "Learn what SEO is, how search engines work and why SEO matters for Pune businesses that want organic leads, visibility and long-term growth in 2026.",
    seoKeywords: [
      "what is SEO",
      "SEO guide 2026",
      "SEO services Pune",
      "search engine optimization Pune",
      "local SEO Pune",
    ],
  },
  {
    id: "post-10",
    title: "Search Engine Submission Guide for Pune Business Websites",
    slug: "search-engine-submission-guide-pune",
    excerpt: "Just launched a Pune business website? Learn how to submit it to Google, Bing and IndexNow so important service pages get discovered faster.",
    content: "search-engine-submission-guide-pune",
    featuredImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    featuredImageAlt: "Global digital ecosystem and SEO strategy",
    thumbnailHeadline: "Get Indexed Faster",
    thumbnailLabel: "SEO",
    category: categoryBySlug("seo"),
    tags: [TAGS[0], TAGS[7], TAGS[2]],
    author: AUTHORS[0],
    publishDate: "2026-03-16T09:00:00Z",
    readingTime: 15,
    views: 0,
    commentsCount: 0,
    likesCount: 0,
    featured: true,
    trending: true,
    metaTitle: "Search Engine Submission Guide for Pune Websites",
    metaDescription: "Learn how Pune businesses can submit websites to Google, Bing and IndexNow, improve crawlability and speed up discovery of key pages.",
    seoKeywords: [
      "search engine submission Pune",
      "submit website to Google Pune",
      "IndexNow submission",
      "website indexing Pune",
      "technical SEO Pune",
    ],
  },

  {
    id: "post-1",
    title:
      "SEO Audit Checklist for Pune Businesses: 50 Ranking Signals",
    slug: "technical-seo-audit-checklist",
    excerpt:
      "Use this Pune SEO audit checklist to find technical, content, local SEO and trust issues that stop your website from earning search traffic.",
    content: "technical-seo-audit-checklist",
    featuredImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
    featuredImageAlt: "SEO audit checklist on a laptop screen",
    thumbnailHeadline: "SEO Audit Checklist",
    thumbnailLabel: "SEO",
    category: categoryBySlug("seo"),
    tags: [TAGS[0], TAGS[4], TAGS[2]],
    author: AUTHORS[0],
    publishDate: "2025-03-01T09:00:00Z",
    updatedDate: "2026-04-29T09:00:00Z",
    readingTime: 12,
    views: 4821,
    commentsCount: 18,
    likesCount: 142,
    featured: true,
    trending: true,
    metaTitle: "SEO Audit Checklist for Pune Websites | Growthik",
    metaDescription:
      "Run a Pune-focused SEO audit with 50 checks for crawlability, local SEO, content, Core Web Vitals, internal links and lead-focused pages.",
    seoKeywords: [
      "SEO audit Pune",
      "technical SEO audit Pune",
      "SEO checklist Pune",
      "website SEO audit Pune",
      "Core Web Vitals audit",
    ],
  },
  {
    id: "post-2",
    title:
      "Why SEO Is Important for Pune Businesses in 2026",
    slug: "why-seo-is-important",
    excerpt:
      "If your Pune business is invisible on Google, you pay for every lead. Learn why SEO compounds traffic, trust and enquiries in 2026.",
    content: "why-seo-is-important",
    featuredImage: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80",
    featuredImageAlt: "Google analytics dashboard showing SEO growth",
    thumbnailHeadline: "Why SEO Matters",
    thumbnailLabel: "SEO",
    category: categoryBySlug("seo"),
    tags: [TAGS[0], TAGS[3], TAGS[7]],
    author: AUTHORS[0],
    publishDate: "2025-02-05T09:00:00Z",
    updatedDate: "2026-04-29T09:00:00Z",
    readingTime: 10,
    views: 6234,
    commentsCount: 24,
    likesCount: 208,
    featured: true,
    trending: false,
    metaTitle: "Why SEO Is Important for Pune Businesses | Growthik",
    metaDescription:
      "Learn why SEO matters for Pune businesses in 2026: local visibility, compounding organic traffic, trust, lower lead cost and better sales intent.",
    seoKeywords: [
      "importance of SEO Pune",
      "why SEO is important",
      "SEO for Pune businesses",
      "organic traffic Pune",
      "local SEO Pune",
    ],
  },
  {
    id: "post-3",
    title: "How to Choose a Website Design Company in Pune: 7 Critical Factors",
    slug: "how-to-choose-website-design-company",
    excerpt:
      "Don't hire the wrong web agency and waste months and lakhs of rupees. Here are 7 critical factors every Pune business should evaluate before signing a contract.",
    content: "how-to-choose-website-design-company",
    featuredImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    featuredImageAlt: "Designer working on website mockup on computer",
    thumbnailHeadline: "Choose a Web Partner",
    thumbnailLabel: "WEB DEVELOPMENT",
    category: categoryBySlug("web-development"),
    tags: [TAGS[1], TAGS[2], TAGS[4]],
    author: AUTHORS[0],
    publishDate: "2025-02-18T09:00:00Z",
    readingTime: 9,
    views: 3892,
    commentsCount: 14,
    likesCount: 97,
    featured: false,
    trending: true,
    metaTitle: "Website Design Company in Pune: 7 Checks | Growthik",
    metaDescription:
      "Hiring a website design company in Pune? Use these 7 checks to compare portfolio quality, SEO basics, pricing, process and support.",
    seoKeywords: [
      "website design company in Pune",
      "web design agency Pune",
      "website development Pune",
      "hire web designer Pune",
      "SEO friendly website Pune",
    ],
  },
  {
    id: "post-4",
    title: "Website Cost in Pune: A Complete 2026 Pricing Guide",
    slug: "website-cost-in-pune",
    excerpt:
      "How much does a website cost in Pune in 2026? A complete breakdown from basic sites to custom web apps, with what each price range actually includes.",
    content: "website-cost-in-pune",
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    featuredImageAlt: "Website pricing and cost calculation on laptop",
    thumbnailHeadline: "Website Cost Guide",
    thumbnailLabel: "WEB DEVELOPMENT",
    category: categoryBySlug("web-development"),
    tags: [TAGS[1], TAGS[2], TAGS[8]],
    author: AUTHORS[0],
    publishDate: "2025-01-20T09:00:00Z",
    updatedDate: "2026-04-29T09:00:00Z",
    readingTime: 8,
    views: 5120,
    commentsCount: 31,
    likesCount: 164,
    featured: false,
    trending: false,
    metaTitle: "Website Cost in Pune 2026: Pricing Guide | Growthik",
    metaDescription:
      "How much does a website cost in Pune in 2026? Compare pricing for basic sites, eCommerce, custom apps and key cost factors.",
    seoKeywords: [
      "website cost in Pune",
      "website development cost Pune",
      "eCommerce website cost Pune",
      "web design pricing Pune",
      "custom website Pune",
    ],
  },
  {
    id: "post-5",
    title:
      "Google Ads vs Meta Ads: Which Platform Should Pune Businesses Use in 2026?",
    slug: "google-ads-vs-meta-ads",
    excerpt:
      "Google Ads gives you intent. Meta Ads gives you scale. But which is better for YOUR Pune business? We break down the real differences with real data from our campaigns.",
    content: "google-ads-vs-meta-ads",
    featuredImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    featuredImageAlt: "Google and Meta advertising platforms comparison",
    thumbnailHeadline: "Google Ads vs Meta",
    thumbnailLabel: "GOOGLE ADS",
    category: categoryBySlug("google-ads"),
    tags: [TAGS[6], TAGS[13], TAGS[3], TAGS[2]],
    author: AUTHORS[0],
    publishDate: "2025-01-10T09:00:00Z",
    updatedDate: "2026-04-29T09:00:00Z",
    readingTime: 11,
    views: 7432,
    commentsCount: 42,
    likesCount: 289,
    featured: true,
    trending: true,
    metaTitle: "Google Ads vs Meta Ads for Pune Businesses | Growthik",
    metaDescription:
      "Google Ads or Meta Ads for Pune businesses? Compare intent, cost, targeting and campaign fit using practical performance marketing guidance.",
    seoKeywords: [
      "Google Ads Pune",
      "Meta Ads Pune",
      "PPC agency Pune",
      "performance marketing Pune",
      "lead generation ads Pune",
    ],
  },
  {
    id: "post-6",
    title: "Core Web Vitals in 2026: How to Score 100 on Google PageSpeed",
    slug: "core-web-vitals-guide",
    excerpt:
      "Google's ranking algorithm heavily weights Core Web Vitals. This technical guide walks you through exactly how to fix LCP, CLS and INP to hit perfect scores.",
    content: "core-web-vitals-guide",
    featuredImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    featuredImageAlt: "Google PageSpeed Insights score showing 100",
    thumbnailHeadline: "Core Web Vitals",
    thumbnailLabel: "PERFORMANCE",
    category: categoryBySlug("web-development"),
    tags: [TAGS[4], TAGS[5], TAGS[0]],
    author: AUTHORS[0],
    publishDate: "2024-12-15T09:00:00Z",
    updatedDate: "2026-04-29T09:00:00Z",
    readingTime: 14,
    views: 8901,
    commentsCount: 36,
    likesCount: 312,
    featured: false,
    trending: true,
    metaTitle: "Core Web Vitals for Pune Websites: 2026 Guide",
    metaDescription:
      "Learn how Pune websites can fix LCP, CLS and INP, improve PageSpeed scores and build faster pages that support SEO and conversions.",
    seoKeywords: [
      "Core Web Vitals Pune",
      "PageSpeed optimization Pune",
      "website speed optimization Pune",
      "technical SEO Pune",
      "LCP CLS INP fixes",
    ],
  },
  {
    id: "post-7",
    title:
      "Local SEO Strategy for Pune Businesses: Dominate the Map Pack in 2026",
    slug: "local-seo-pune",
    excerpt:
      "Rank in Google's Map Pack for Pune area searches with this step-by-step local SEO strategy - Google Business Profile, citations, reviews and hyper-local content.",
    content: "local-seo-pune",
    featuredImage: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80",
    featuredImageAlt: "Google Maps showing local business listings in Pune",
    thumbnailHeadline: "Win Local Search",
    thumbnailLabel: "LOCAL SEO",
    category: categoryBySlug("local-seo"),
    tags: [TAGS[7], TAGS[2], TAGS[0]],
    author: AUTHORS[0],
    publishDate: "2024-12-05T09:00:00Z",
    updatedDate: "2026-04-29T09:00:00Z",
    readingTime: 10,
    views: 4567,
    commentsCount: 22,
    likesCount: 178,
    featured: false,
    trending: false,
    metaTitle: "Local SEO Pune: 2026 Google Maps Strategy | Growthik",
    metaDescription:
      "Step-by-step local SEO strategy for Pune businesses. Rank in Google Maps, optimize your Business Profile and dominate 'near me' searches.",
    seoKeywords: [
      "local SEO Pune",
      "Google Maps ranking Pune",
      "Google Business Profile Pune",
      "near me SEO Pune",
      "local SEO agency Pune",
    ],
  },
  {
    id: "post-8",
    title: "Why Your Website Bounce Rate Is High (And How to Fix It)",
    slug: "fix-high-bounce-rate",
    excerpt:
      "A high bounce rate kills your conversions and tanks your SEO. Here are the 12 most common causes of bounce rate - and exact, actionable fixes for each one.",
    content: "fix-high-bounce-rate",
    featuredImage: "/images/blog/fix-high-bounce-rate-pune-website-seo-2026.jpg",
    featuredImageAlt: "High bounce rate fix Pune website SEO 2026",
    thumbnailHeadline: "Fix Bounce Rate",
    thumbnailLabel: "CRO",
    category: categoryBySlug("web-development"),
    tags: [TAGS[4], TAGS[1], TAGS[3]],
    author: AUTHORS[0],
    publishDate: "2024-11-20T09:00:00Z",
    updatedDate: "2026-04-29T09:00:00Z",
    readingTime: 8,
    views: 5234,
    commentsCount: 19,
    likesCount: 143,
    featured: false,
    trending: false,
    metaTitle:
      "High Bounce Rate Fixes for Pune Websites | Growthik",
    metaDescription:
      "Find why Pune website visitors leave quickly and fix bounce rate issues with better page speed, messaging, UX, content and conversion paths.",
    seoKeywords: [
      "high bounce rate Pune website",
      "website conversion optimization Pune",
      "website UX Pune",
      "landing page optimization Pune",
      "page speed Pune",
    ],
  },
  {
    id: "post-9",
    title: "B2B Content Marketing Strategy for Pune and Indian Companies",
    slug: "b2b-content-marketing-india",
    excerpt:
      "Most B2B content in India fails because it copies Western playbooks. Here is a Pune-friendly strategy for Indian buyers and longer sales cycles.",
    content: "b2b-content-marketing-india",
    featuredImage: "/images/blog/b2b-content-marketing-strategy-pune-india-2026.png",
    featuredImageAlt: "Content marketing strategy planning session",
    thumbnailHeadline: "B2B Content Strategy",
    thumbnailLabel: "LEAD GENERATION",
    category: categoryBySlug("digital-marketing"),
    tags: [TAGS[10], TAGS[3], TAGS[9]],
    author: AUTHORS[0],
    publishDate: "2024-11-05T09:00:00Z",
    readingTime: 13,
    views: 3211,
    commentsCount: 16,
    likesCount: 98,
    featured: false,
    trending: false,
    metaTitle: "B2B Content Marketing Strategy for Pune | Growthik",
    metaDescription:
      "Build a B2B content marketing strategy for Pune and Indian companies with topic clusters, case studies, SEO pages and sales-led content.",
    seoKeywords: [
      "B2B content marketing Pune",
      "content marketing strategy India",
      "B2B SEO Pune",
      "content marketing agency Pune",
      "lead generation content",
    ],
  },
];

CATEGORIES.forEach((category) => {
  category.count = BLOG_POSTS.filter((post) => post.category.slug === category.slug).length;
});

export const RECOMMENDED_GUIDE_SLUGS = [
  "complete-beginner-guide-to-seo-2026",
  "local-seo-pune",
  "google-ads-vs-meta-ads",
  "ai-search-optimization-2026-seo-aeo-geo-guide",
  "core-web-vitals-guide",
];

// ─── Helper Accessors ─────────────────────────────────────────────────────────

export const getFeaturedPosts = () => BLOG_POSTS.filter((p) => p.featured);
export const getTrendingPosts = () =>
  [...BLOG_POSTS]
    .filter((p) => p.trending)
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
    );
export const getLatestPosts = () =>
  [...BLOG_POSTS].sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
  );
export const getRecommendedPosts = (excludeId?: string, count = 4): BlogPost[] => {
  const recommended = RECOMMENDED_GUIDE_SLUGS
    .map((slug) => BLOG_POSTS.find((post) => post.slug === slug))
    .filter((post): post is BlogPost => post != null && post.id !== excludeId);

  if (recommended.length >= count) {
    return recommended.slice(0, count);
  }

  const extras = getLatestPosts().filter(
    (post) => post.id !== excludeId && !recommended.some((item) => item.id === post.id),
  );

  return [...recommended, ...extras].slice(0, count);
};
export const getPostBySlug = (slug: string) =>
  BLOG_POSTS.find((p) => p.slug === (slug === "importance-of-seo" ? "why-seo-is-important" : slug));
export const getPostsByCategorySlug = (slug: string, relatedSlugs: string[] = []): BlogPost[] => {
  const direct = BLOG_POSTS.filter((post) => post.category.slug === slug);
  if (direct.length > 0) return getLatestPosts().filter((post) => post.category.slug === slug);

  const related = relatedSlugs
    .map((relatedSlug) => BLOG_POSTS.find((post) => post.slug === relatedSlug))
    .filter((post): post is BlogPost => Boolean(post));

  if (related.length > 0) return related;

  return BLOG_POSTS.filter((post) => post.tags.some((tag) => tag.slug === slug));
};
export const getRelatedPosts = (post: BlogPost, count = 3): BlogPost[] => {
  const cluster = [
    "cockroach-janta-party-viral-marketing-case-study-2026",
    "rcb-vs-gt-ipl-2026-marketing-lessons-pune",
    "what-is-marketing-guide-pune",
    "ai-search-optimization-2026-seo-aeo-geo-guide",
    "why-seo-is-important",
    "google-ads-vs-meta-ads",
    "local-seo-pune",
  ];
  const preferred = cluster
    .map((slug) => BLOG_POSTS.find((item) => item.slug === slug && item.id !== post.id))
    .filter((item): item is BlogPost => Boolean(item));
  const rest = BLOG_POSTS.filter(
    (item) =>
      item.id !== post.id &&
      !preferred.some((match) => match.id === item.id) &&
      (item.category.id === post.category.id ||
        item.tags.some((tag) => post.tags.map((pt) => pt.id).includes(tag.id))),
  );
  return [...preferred, ...rest].slice(0, count);
};

export const filterAndSortPosts = (
  posts: BlogPost[],
  filters: { search: string; category: string; tag: string; sort: string },
): BlogPost[] => {
  let result = [...posts];

  if (filters.search) {
    const q = filters.search.toLowerCase();
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.author.name.toLowerCase().includes(q) ||
        p.tags.some((t) => t.name.toLowerCase().includes(q)),
    );
  }

  if (filters.category) {
    result = result.filter((p) => p.category.slug === filters.category);
  }

  if (filters.tag) {
    result = result.filter((p) => p.tags.some((t) => t.slug === filters.tag));
  }

  if (filters.sort === "popular") {
    result.sort((a, b) => b.views - a.views);
  } else if (filters.sort === "trending") {
    result = result
      .filter((p) => p.trending)
      .concat(result.filter((p) => !p.trending));
  } else if (filters.sort === "oldest") {
    result.sort(
      (a, b) =>
        new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime(),
    );
  } else {
    result.sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
    );
  }

  return result;
};
