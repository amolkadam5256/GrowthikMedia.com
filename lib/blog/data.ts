import type { BlogAuthor, BlogCategory, BlogPost, BlogTag } from "./types";

// ─── Authors ─────────────────────────────────────────────────────────────────

export const AUTHORS: BlogAuthor[] = [
  {
    id: "author-1",
    name: "Amol Kadam",
    avatar: "",
    role: "Founder & CEO",
    bio: "Digital strategist and founder of Growthik Media with 7+ years building data-driven marketing systems for Indian businesses. Specializes in SEO, performance marketing, and web architecture.",
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
    bio: "SEO specialist with expertise in technical audits, content strategy, and local search optimization for Pune-based businesses. Google certified.",
    socialLinks: {
      linkedin: "https://linkedin.com/company/growthikmedia",
    },
  },
  {
    id: "author-3",
    name: "Rahul Desai",
    avatar: "",
    role: "Lead Developer",
    bio: "Full-stack developer specializing in Next.js, performance optimization, and Core Web Vitals. Builds high-converting websites for Indian markets.",
    socialLinks: {
      linkedin: "https://linkedin.com/company/growthikmedia",
      website: "https://www.growthikmedia.com",
    },
  },
];

// ─── Categories ───────────────────────────────────────────────────────────────

export const CATEGORIES: BlogCategory[] = [
  { id: "cat-1", name: "SEO", slug: "seo", color: "#d90b1c", count: 4 },
  {
    id: "cat-2",
    name: "Web Design",
    slug: "web-design",
    color: "#2563eb",
    count: 3,
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
    count: 2,
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
    id: "post-11",
    title:
      "🚀 What is SEO? Complete Beginner Guide to Search Engine Optimization (2026)",
    slug: "complete-beginner-guide-to-seo-2026",
    excerpt:
      "Discover what SEO is, how search engines like Google work, and why it's the most powerful growth strategy for businesses in Pune to generate organic leads.",
    content: "complete-beginner-guide-to-seo-2026",
    featuredImage:
      "/images/blog/seo-services-in-pune-rank-1-google-growthik-media-thumbnail.png",
    featuredImageAlt:
      "SEO Services in Pune - Rank 1 on Google with Growthik Media",
    category: CATEGORIES[0],
    tags: [TAGS[0], TAGS[3], TAGS[2], TAGS[7]],
    author: AUTHORS[0],
    publishDate: "2026-03-19T10:00:00Z",
    readingTime: 12,
    views: 0,
    commentsCount: 0,
    likesCount: 0,
    featured: true,
    trending: true,
    metaTitle: "What is SEO? | Beginner Guide to SEO 2026 | Growthik Media",
    metaDescription:
      "The ultimate 2026 guide to SEO for beginners. Learn how search engines work and how to rank your Pune business on Page 1 organically.",
  },
  {
    id: "post-10",
    title: "Complete Search Engine Submission Guide for Businesses in Pune",
    slug: "search-engine-submission-guide-pune",
    excerpt: "Learn how businesses in Pune can improve website visibility across Google, Bing, and global search engines using SEO strategies, backlinks, and technical optimization.",
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
    metaTitle: "Search Engine Submission Guide Pune | Growthik Media",
    metaDescription: "Learn how businesses in Pune can improve website visibility across Google, Bing, and global search engines using SEO strategies, backlinks, and technical optimization.",
  },

  {
    id: "post-1",
    title:
      "SEO Audit Checklist 2025: 50 Points to Audit Your Website Like a Pro",
    slug: "technical-seo-audit-checklist",
    excerpt:
      "A comprehensive SEO audit checklist covering technical SEO, on-page optimization, E-E-A-T content quality, backlinks, and local SEO - audit your site like a professional agency.",
    content: "",
    featuredImage:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
    featuredImageAlt: "SEO audit checklist on a laptop screen",
    category: CATEGORIES[0],
    tags: [TAGS[0], TAGS[4], TAGS[2]],
    author: AUTHORS[1],
    publishDate: "2025-03-01T09:00:00Z",
    readingTime: 12,
    views: 4821,
    commentsCount: 18,
    likesCount: 142,
    featured: true,
    trending: true,
    metaTitle: "2025 SEO Audit Checklist: 50 Point Guide | Growthik Media",
    metaDescription:
      "Use this comprehensive SEO audit checklist to identify and fix technical, on-page, and off-page issues that are hurting your rankings in 2025.",
  },
  {
    id: "post-2",
    title:
      "The Importance of SEO for Businesses in 2025: Why You Cannot Ignore It",
    slug: "why-seo-is-important",
    excerpt:
      "In 2025, over 8.5 billion searches happen daily on Google. If your business doesn't appear, a competitor does. Discover why SEO is non-negotiable for growth.",
    content: "",
    featuredImage:
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80",
    featuredImageAlt: "Google analytics dashboard showing SEO growth",
    category: CATEGORIES[0],
    tags: [TAGS[0], TAGS[3], TAGS[7]],
    author: AUTHORS[1],
    publishDate: "2025-02-05T09:00:00Z",
    readingTime: 10,
    views: 6234,
    commentsCount: 24,
    likesCount: 208,
    featured: true,
    trending: false,
    metaTitle: "Importance of SEO in 2025: Why It Matters | Growthik Media",
    metaDescription:
      "Why is SEO important for your business in 2025? Discover how search engine optimization drives organic traffic, builds credibility, and generates consistent leads.",
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
    metaTitle: "How to Choose a Web Design Company in Pune | Growthik Media",
    metaDescription:
      "Discover 7 critical factors to evaluate before hiring a website design company in Pune - portfolio, process, SEO, and more.",
  },
  {
    id: "post-4",
    title: "Website Cost in Pune: A Complete 2025 Pricing Guide",
    slug: "website-cost-in-pune",
    excerpt:
      "How much does a website cost in Pune in 2025? A complete breakdown from ₹8,000 basic sites to ₹20 lakh+ custom web apps - with what each price range actually gets you.",
    content: "website-cost-in-pune",
    featuredImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    featuredImageAlt: "Website pricing and cost calculation on laptop",
    category: CATEGORIES[1],
    tags: [TAGS[1], TAGS[2], TAGS[8]],
    author: AUTHORS[2],
    publishDate: "2025-01-20T09:00:00Z",
    readingTime: 8,
    views: 5120,
    commentsCount: 31,
    likesCount: 164,
    featured: false,
    trending: false,
    metaTitle: "Website Cost in Pune: 2025 Pricing Guide | Growthik Media",
    metaDescription:
      "How much does a website cost in Pune? Get a complete 2025 pricing guide covering basic sites, eCommerce, custom web apps, and what factors affect the price.",
  },
  {
    id: "post-5",
    title:
      "Google Ads vs Meta Ads: Which Platform Should Pune Businesses Use in 2025?",
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
    readingTime: 11,
    views: 7432,
    commentsCount: 42,
    likesCount: 289,
    featured: true,
    trending: true,
    metaTitle: "Google Ads vs Meta Ads for Pune Businesses | Growthik Media",
    metaDescription:
      "Google Ads or Meta Ads - which is better for your Pune business in 2025? Real campaign data, cost comparisons, and expert recommendations.",
  },
  {
    id: "post-6",
    title: "Core Web Vitals in 2025: How to Score 100 on Google PageSpeed",
    slug: "core-web-vitals-guide",
    excerpt:
      "Google's ranking algorithm heavily weights Core Web Vitals. This technical guide walks you through exactly how to fix LCP, CLS, and INP to hit perfect scores.",
    content: "core-web-vitals-guide",
    featuredImage:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    featuredImageAlt: "Google PageSpeed Insights score showing 100",
    category: CATEGORIES[3],
    tags: [TAGS[4], TAGS[5], TAGS[0]],
    author: AUTHORS[2],
    publishDate: "2024-12-15T09:00:00Z",
    readingTime: 14,
    views: 8901,
    commentsCount: 36,
    likesCount: 312,
    featured: false,
    trending: true,
    metaTitle: "Core Web Vitals 2025: Score 100 on PageSpeed | Growthik Media",
    metaDescription:
      "Complete technical guide to fixing LCP, CLS, and INP for perfect Core Web Vitals scores. Real fixes, real results.",
  },
  {
    id: "post-7",
    title:
      "Local SEO Strategy for Pune Businesses: Dominate the Map Pack in 2025",
    slug: "local-seo-pune",
    excerpt:
      "Rank in Google's Map Pack for Pune area searches with this step-by-step local SEO strategy - Google Business Profile, citations, reviews, and hyper-local content.",
    content: "local-seo-pune",
    featuredImage:
      "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80",
    featuredImageAlt: "Google Maps showing local business listings in Pune",
    category: CATEGORIES[0],
    tags: [TAGS[7], TAGS[2], TAGS[0]],
    author: AUTHORS[1],
    publishDate: "2024-12-05T09:00:00Z",
    readingTime: 10,
    views: 4567,
    commentsCount: 22,
    likesCount: 178,
    featured: false,
    trending: false,
    metaTitle: "Local SEO Pune 2025: Dominate Google Map Pack | Growthik Media",
    metaDescription:
      "Step-by-step local SEO strategy for Pune businesses. Rank in Google Maps, optimize your Business Profile, and dominate 'near me' searches.",
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
    readingTime: 8,
    views: 5234,
    commentsCount: 19,
    likesCount: 143,
    featured: false,
    trending: false,
    metaTitle:
      "Why Your Website Bounce Rate Is High & How to Fix It | Growthik Media",
    metaDescription:
      "12 common reasons for high website bounce rate and exact fixes. Improve UX, speed, and conversions.",
  },
  {
    id: "post-9",
    title: "Content Marketing Strategy That Actually Works for B2B in India",
    slug: "b2b-content-marketing-india",
    excerpt:
      "Most B2B content marketing in India fails because it copies Western playbooks. Here's a strategy built specifically for Indian B2B buying cycles and decision-makers.",
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
    metaTitle: "B2B Content Marketing Strategy for India | Growthik Media",
    metaDescription:
      "Content marketing strategy built for Indian B2B companies. Tailored for Indian buying cycles, decision-makers, and digital behaviour.",
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
