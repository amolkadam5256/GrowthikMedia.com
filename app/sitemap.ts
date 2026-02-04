import { MetadataRoute } from "next";
import { CONTACT_INFO } from "@/constants/contact";
import { navigationData } from "@/components/comman/header/navigationData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = CONTACT_INFO.website;

  // Main pages
  const routes = [
    "",
    "/about",
    "/services",
    "/blog",
    "/contact",
    "/portfolio",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Add all service sub-pages from navigation data
  const serviceRoutes: MetadataRoute.Sitemap = [];
  navigationData.desktop.megaMenus.forEach((menu) => {
    if (menu.id === "services") {
      menu.items.forEach((category) => {
        category.items.forEach((item) => {
          serviceRoutes.push({
            url: `${baseUrl}${item.href}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.6,
          });
        });
      });
    }
  });

  // Add all portfolio sub-pages
  const portfolioRoutes: MetadataRoute.Sitemap = [];
  navigationData.desktop.megaMenus.forEach((menu) => {
    if (menu.id === "portfolio") {
      menu.items.forEach((category) => {
        category.items.forEach((item) => {
          portfolioRoutes.push({
            url: `${baseUrl}${item.href}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.5,
          });
        });
      });
    }
  });

  return [...routes, ...serviceRoutes, ...portfolioRoutes];
}
