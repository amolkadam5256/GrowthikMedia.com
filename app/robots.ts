import { MetadataRoute } from "next";
import { CONTACT_INFO } from "@/constants/contact";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/login/", "/api/", "/dashboard/", "/profile/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: `${CONTACT_INFO.website}/sitemap.xml`,
    host: CONTACT_INFO.website,
  };
}
