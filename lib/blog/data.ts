import type { BlogAuthor, BlogCategory, BlogPost, BlogTag } from "./types";

// ─── Authors ─────────────────────────────────────────────────────────────────

export const AUTHORS: BlogAuthor[] = [
  {
    id: "author-1",
    name: "Amol Kadam",
    avatar: "",
    role: "Founder & CEO",
    bio: "Digital strategist and founder of Growthik Media with 7+ years building data-driven marketing systems for Indian businesses. Specializes in SEO, performance marketing and web architecture.",
    socialLinks: {
      linkedin: "https://linkedin.com/company/growthikmedia",
      twitter: "https://twitter.com/growthikmedia",
      website: "https://www.growthikmedia.com",
    },
  },
  {
    id: "author-2",
    name: "Priya Sharma",
    avatar: "",
    role: "Head of SEO",
    bio: "SEO specialist with expertise in technical audits, content strategy and local search optimization for Pune-based businesses. Google certified.",
    socialLinks: {
      linkedin: "https://linkedin.com/company/growthikmedia",
    },
  },
  {
    id: "author-3",
    name: "Rahul Desai",
    avatar: "",
    role: "Lead Developer",
    bio: "Full-stack developer specializing in Next.js, performance optimization and Core Web Vitals. Builds high-converting websites for Indian markets.",
    socialLinks: {
      linkedin: "https://linkedin.com/company/growthikmedia",
      website: "https://www.growthikmedia.com",
    },
  },
];

// ─── Categories ───────────────────────────────────────────────────────────────

export const CATEGORIES: BlogCategory[] = [
  { id: "cat-1", name: "SEO", slug: "seo", color: "#d90b1c", count: 5 },
  {
    id: "cat-2",
    name: "Web Design",
    slug: "web-design",
    color: "#2563eb",
    count: 2,
  },
  {
    id: "cat-3",
    name: "Digital Marketing",
    slug: "digital-marketing",
    color: "#7c3aed",
    count: 2,
  },
  {
    id: "cat-4",
    name: "Performance",
    slug: "performance",
    color: "#059669",
    count: 2,
  },
  {
    id: "cat-5",
    name: "Google Ads",
    slug: "google-ads",
    color: "#d97706",
    count: 1,
  },
];

// ─── Tags ─────────────────────────────────────────────────────────────────────

export const TAGS: BlogTag[] = [
  { id: "tag-1", name: "SEO", slug: "seo", count: 6 },
  { id: "tag-2", name: "Web Design", slug: "web-design", count: 5 },
  { id: "tag-3", name: "Pune", slug: "pune", count: 8 },
  {
    id: "tag-4",
    name: "Digital Marketing",
    slug: "digital-marketing",
    count: 5,
  },
  { id: "tag-5", name: "Core Web Vitals", slug: "core-web-vitals", count: 3 },
  { id: "tag-6", name: "Next.js", slug: "nextjs", count: 2 },
  { id: "tag-7", name: "Google Ads", slug: "google-ads", count: 3 },
  { id: "tag-8", name: "Local SEO", slug: "local-seo", count: 4 },
  { id: "tag-9", name: "WordPress", slug: "wordpress", count: 2 },
  { id: "tag-10", name: "Branding", slug: "branding", count: 2 },
  {
    id: "tag-11",
    name: "Content Marketing",
    slug: "content-marketing",
    count: 3,
  },
  { id: "tag-12", name: "Social Media", slug: "social-media", count: 2 },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-14",
    title: "RCB vs GT IPL 2026: 5 Marketing Lessons Pune Businesses Must Learn from the Pitch",
    slug: "rcb-vs-gt-ipl-2026-marketing-lessons-pune",
    excerpt: "The RCB vs GT clash isn't just about cricket; it's a masterclass in branding and real-time engagement. Discover how Pune businesses can steal these IPL marketing strategies.",
    content: "rcb-vs-gt-ipl-2026-marketing-lessons-pune",
    featuredImage: "/images/blog/rcb-vs-gt-ipl-2026.jpg",
    featuredImageAlt: "RCB vs GT IPL 2026 Marketing Lessons for Pune Businesses",
    category: CATEGORIES[2],
    tags: [TAGS[3], TAGS[11], TAGS[9], TAGS[10]],
    author: AUTHORS[0],
    publishDate: "2026-05-01T00:10:00Z",
    readingTime: 8,
    views: 0,
    commentsCount: 0,
    likesCount: 0,
    featured: true,
    trending: true,
    metaTitle: "RCB vs GT IPL 2026: Marketing Lessons for Pune Businesses | Growthik",
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
    category: CATEGORIES[0],
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
    category: CATEGORIES[2],
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
    category: CATEGORIES[0],
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
    category: CATEGORIES[0],
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
    featuredImage:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
    featuredImageAlt: "SEO audit checklist on a laptop screen",
    category: CATEGORIES[0],
    tags: [TAGS[0], TAGS[4], TAGS[2]],
    author: AUTHORS[1],
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
    featuredImage:
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80",
    featuredImageAlt: "Google analytics dashboard showing SEO growth",
    category: CATEGORIES[0],
    tags: [TAGS[0], TAGS[3], TAGS[7]],
    author: AUTHORS[1],
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
    featuredImage:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    featuredImageAlt: "Designer working on website mockup on computer",
    category: CATEGORIES[1],
    tags: [TAGS[1], TAGS[2], TAGS[4]],
    author: AUTHORS[2],
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
    featuredImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    featuredImageAlt: "Website pricing and cost calculation on laptop",
    category: CATEGORIES[1],
    tags: [TAGS[1], TAGS[2], TAGS[8]],
    author: AUTHORS[2],
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
    featuredImage:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    featuredImageAlt: "Google and Meta advertising platforms comparison",
    category: CATEGORIES[4],
    tags: [TAGS[6], TAGS[3], TAGS[2]],
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
    featuredImage:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    featuredImageAlt: "Google PageSpeed Insights score showing 100",
    category: CATEGORIES[3],
    tags: [TAGS[4], TAGS[5], TAGS[0]],
    author: AUTHORS[2],
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
    featuredImage:
      "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80",
    featuredImageAlt: "Google Maps showing local business listings in Pune",
    category: CATEGORIES[0],
    tags: [TAGS[7], TAGS[2], TAGS[0]],
    author: AUTHORS[1],
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
    featuredImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    featuredImageAlt: "Website analytics showing bounce rate trends",
    category: CATEGORIES[3],
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
    featuredImage:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    featuredImageAlt: "Content marketing strategy planning session",
    category: CATEGORIES[2],
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

// ─── Helper Accessors ─────────────────────────────────────────────────────────

export const getFeaturedPosts = () => BLOG_POSTS.filter((p) => p.featured);
export const getTrendingPosts = () =>
  [...BLOG_POSTS].sort((a, b) => b.views - a.views);
export const getLatestPosts = () =>
  [...BLOG_POSTS].sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
  );
export const getPostBySlug = (slug: string) =>
  BLOG_POSTS.find((p) => p.slug === slug);
export const getRelatedPosts = (post: BlogPost, count = 3): BlogPost[] =>
  BLOG_POSTS.filter(
    (p) =>
      p.id !== post.id &&
      (p.category.id === post.category.id ||
        p.tags.some((t) => post.tags.map((pt) => pt.id).includes(t.id))),
  ).slice(0, count);

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
