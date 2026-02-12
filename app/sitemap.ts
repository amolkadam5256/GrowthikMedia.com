import { MetadataRoute } from "next";
import { CONTACT_INFO } from "@/constants/contact";
import { navigationData } from "@/components/comman/header/navigationData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = CONTACT_INFO.website;

  // Function to recursively collect all hrefs from any item structure
  const collectHrefs = (items: any[]): string[] => {
    let hrefs: string[] = [];
    items.forEach((item) => {
      if (item.href && item.href.startsWith("/")) {
        hrefs.push(item.href);
      }
      if (item.items && Array.isArray(item.items)) {
        hrefs = [...hrefs, ...collectHrefs(item.items)];
      }
    });
    return hrefs;
  };

  // Collect from regular links
  const regularLinks = navigationData.desktop.regularLinks.map((l) => l.href);

  // Collect from standalone links
  const standaloneLinks = navigationData.desktop.standaloneLinks.map(
    (l) => l.href,
  );

  // Collect from mega menus
  let megaMenuLinks: string[] = [];
  navigationData.desktop.megaMenus.forEach((menu) => {
    if (menu.href) megaMenuLinks.push(menu.href);
    megaMenuLinks = [...megaMenuLinks, ...collectHrefs(menu.items)];
  });

  // Unique links only
  const allRoutes = Array.from(
    new Set([...regularLinks, ...standaloneLinks, ...megaMenuLinks]),
  );

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "daily" : "monthly",
    priority: route === "/" ? 1.0 : route.startsWith("/services") ? 0.8 : 0.5,
  }));
}
