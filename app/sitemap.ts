import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog/data";
import { CONTACT_INFO } from "@/constants/contact";
import { locationMapping } from "@/constants/locationData";

const serviceRoutes = [
  "/services",
  "/services/application-maintenance",
  "/services/brand-identity",
  "/services/brand-marketing-communications",
  "/services/brand-name",
  "/services/brand-strategy",
  "/services/branding-consulting",
  "/services/branding-design",
  "/services/brochure-design",
  "/services/business-card-design",
  "/services/content-marketing",
  "/services/digital-marketing",
  "/services/ecommerce-development",
  "/services/ecommerce-website-development",
  "/services/educational-website-development",
  "/services/email-marketing",
  "/services/influencer-management",
  "/services/lead-generation",
  "/services/letterhead-design",
  "/services/local-seo",
  "/services/logo-design",
  "/services/media-planning-buying",
  "/services/meta-ads",
  "/services/mobile-app-development",
  "/services/performance-marketing",
  "/services/political-digital-marketing",
  "/services/ppc-google-ads",
  "/services/real-estate-website-development",
  "/services/seo",
  "/services/sms-marketing",
  "/services/social-media-marketing",
  "/services/social-media-promotions",
  "/services/software-development",
  "/services/video-production",
  "/services/web-application",
  "/services/website-design",
  "/services/website-design-company-pune",
  "/services/website-development",
  "/services/website-development/full-stack",
  "/services/website-development/nextjs",
  "/services/website-development/react",
  "/services/website-maintenance",
  "/services/whatsapp-marketing",
  "/services/wordpress-development",
  "/services/youtube-seo",
];

const staticRoutes = [
  "",
  "/about",
  "/audit",
  "/backlink-strategy",
  "/blog",
  "/contact",
  "/portfolio",
  "/portfolio/ads-performance",
  "/portfolio/branding-work",
  "/portfolio/case-studies",
  "/portfolio/digital-campaigns",
  "/portfolio/social-media-creatives",
  "/portfolio/website-projects",
  "/privacy-policy",
  "/refund-policy",
  "/shipping-policy",
  "/success-stories",
  "/success-stories/awards",
  "/success-stories/media",
  "/success-stories/testimonials",
  "/terms",
  ...serviceRoutes,
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = CONTACT_INFO.website;
  const now = new Date();

  const locationRoutes = Object.keys(locationMapping).flatMap((slug) => [
    `/${slug}`,
    `/services/${slug}`,
  ]);

  const pageRoutes = [...new Set([...staticRoutes, ...locationRoutes])].map((route) => {
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

  return [...pageRoutes, ...blogRoutes];
}
