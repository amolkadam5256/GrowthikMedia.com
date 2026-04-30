// ─── Blog Data Types ─────────────────────────────────────────────────────────

export interface BlogAuthor {
  id: string;
  name: string;
  avatar: string; // URL or gradient placeholder
  role: string;
  bio: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  color: string;
  count: number;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML/MDX content
  featuredImage: string;
  featuredImageAlt: string;
  category: BlogCategory;
  tags: BlogTag[];
  author: BlogAuthor;
  publishDate: string; // ISO string
  updatedDate?: string;
  readingTime: number; // minutes
  views: number;
  commentsCount: number;
  likesCount: number;
  featured: boolean;
  trending: boolean;
  metaTitle: string;
  metaDescription: string;
  seoKeywords?: string[];
}

// ─── Filter / Search Types ───────────────────────────────────────────────────

export type SortOption = "newest" | "oldest" | "popular" | "trending";

export interface BlogFilters {
  search: string;
  category: string;
  tag: string;
  author: string;
  sort: SortOption;
  readingTime: "any" | "short" | "medium" | "long"; // <5, 5-10, >10
}

// ─── UI Component Props ──────────────────────────────────────────────────────

export interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "featured" | "compact" | "horizontal";
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
