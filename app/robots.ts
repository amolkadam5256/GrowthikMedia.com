import { MetadataRoute } from "next";
import { CONTACT_INFO } from "@/constants/contact";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/login/", "/api/", "/dashboard/", "/profile/"],
    },
    sitemap: `${CONTACT_INFO.website}/sitemap.xml`,
  };
}
