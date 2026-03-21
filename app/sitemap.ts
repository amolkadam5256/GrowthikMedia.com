import { MetadataRoute } from "next";
import { CONTACT_INFO } from "@/constants/contact";
import { navigationData } from "@/components/comman/header/navigationData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = CONTACT_INFO.website;

  interface NavItem {
    href?: string;
    items?: NavItem[];
  }

  // Function to recursively collect all hrefs from any item structure
  const collectHrefs = (items: NavItem[]): string[] => {
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
  const regularLinks = navigationData.desktop.regularLinks
    .map((l) => l.href)
    .filter((h): h is string => !!h);

  // Collect from standalone links
  const standaloneLinks = navigationData.desktop.standaloneLinks
    .map((l) => l.href)
    .filter((h): h is string => !!h);

  // Collect from mega menus
  let megaMenuLinks: string[] = [];
  navigationData.desktop.megaMenus.forEach((menu) => {
    if (menu.href) megaMenuLinks.push(menu.href);
    megaMenuLinks = [...megaMenuLinks, ...collectHrefs(menu.items || [])];
  });

  // Legal and extra routes not in navigation
  const extraRoutes = ["/privacy-policy", "/terms", "/audit", "/backlink-strategy"];

  // Location-specific pages (fixed paths)
  const locationRoutes = [
    "/services/website-design-company-in-aundh",
    "/services/website-design-company-in-viman-nagar",
    "/services/seo-company-in-hinjewadi",
    "/services/website-design-company-in-pcmc",
    "/services/website-design-company-in-kothrud",
    "/services/website-design-company-in-hadapsar",
    "/services/website-design-company-in-baner",
    "/services/website-design-company-in-wakad",
  ];

  // Blog post routes
  const blogRoutes = [
    "/blog/website-cost-in-pune",
    "/blog/why-seo-is-important",
    "/blog/how-to-choose-website-design-company",
    "/blog/technical-seo-audit-checklist",
    "/blog/search-engine-submission-guide-pune",
    "/blog/complete-beginner-guide-to-seo-2026",
    "/blog/google-ads-vs-meta-ads",
    "/blog/core-web-vitals-guide",
    "/blog/local-seo-pune",
    "/blog/fix-high-bounce-rate",
    "/blog/b2b-content-marketing-india",
  ];

  // Generate programmatic SEO routes
  const programmaticServices = [
    "seo-services",
    "google-ads-agency",
    "meta-ads-agency",
    "performance-marketing",
    "ai-marketing",
  ];
  const programmaticLocations = [
    "pune",
    "mumbai",
    "bangalore",
    "hyderabad",
    "delhi",
  ];
  const programmaticIndustries = [
    "ecommerce",
    "startups",
    "real-estate",
    "healthcare",
    "b2b-saas",
    "education",
  ];

  const programmaticLocationRoutes = programmaticServices.flatMap((service) =>
    programmaticLocations.map((loc) => `/services/${service}-in-${loc}`),
  );

  const programmaticIndustryRoutes = programmaticServices.flatMap((service) =>
    programmaticIndustries.map((ind) => `/services/${service}-for-${ind}`),
  );

  // Unique links only
  const allRoutes = Array.from(
    new Set([
      ...regularLinks,
      ...standaloneLinks,
      ...megaMenuLinks,
      ...extraRoutes,
      ...locationRoutes,
      ...blogRoutes,
      ...programmaticLocationRoutes,
      ...programmaticIndustryRoutes,
    ]),
  );

  return allRoutes.map((route) => {
    // Ensure trailing slash for consistency with next.config.js
    const normalizedRoute = route.endsWith("/") ? route : `${route}/`;
    return {
      url: `${baseUrl}${normalizedRoute === "/" ? "/" : normalizedRoute}`,
      lastModified: new Date(),
      changeFrequency: route === "/" ? "daily" : "monthly",
      priority:
        route === "/"
          ? 1.0
          : route === "/audit"
            ? 0.9
            : route.startsWith("/services")
              ? 0.8
              : locationRoutes.includes(route)
                ? 0.75
                : route.startsWith("/blog/")
                  ? 0.7
                  : 0.5,
    };
  });
}
