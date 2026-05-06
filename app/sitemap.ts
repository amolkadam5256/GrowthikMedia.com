import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog/data";
import { CONTACT_INFO } from "@/constants/contact";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = CONTACT_INFO.website;

  // 1. Static Routes
  const staticRoutes = [
    "",
    "/services",
    "/blog",
    "/portfolio",
    "/about",
    "/contact",
    "/audit",
    "/privacy-policy",
    "/terms",
    "/services/seo",
    "/services/ppc-google-ads",
    "/services/meta-ads",
    "/services/website-development",
    "/services/web-application",
    "/services/local-seo",
    "/services/branding-design",
    "/services/website-design-company-pune",
    "/services/wordpress-development",
    "/services/ecommerce-development",
    "/services/software-development",
    "/services/website-maintenance",
    "/services/application-maintenance",
  ].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Dynamic Blog Routes
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.updatedDate || post.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
