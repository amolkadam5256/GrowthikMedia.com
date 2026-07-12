import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog/data";
import { CONTACT_INFO } from "@/constants/contact";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = CONTACT_INFO.website;
  const now = new Date();

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
  ].map((route) => {
    const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] =
      route === "/blog" || route === "/services" ? "weekly" : "monthly";

    return {
      url: `${baseUrl}${route === "" ? "" : route}/`,
      lastModified: now,
      changeFrequency,
      priority: route === "" ? 1.0 : route === "/blog" || route === "/services" ? 0.9 : 0.8,
    };
  });

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.updatedDate || post.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
