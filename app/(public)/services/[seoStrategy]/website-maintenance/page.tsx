import { Metadata } from "next";
import { LegacyPageContent, legacyServicePages } from "@/lib/seo/legacyPages";

export const metadata: Metadata = {
  title: "Website Maintenance Services | Growthik Media",
  description: "Website maintenance, updates, performance fixes and technical support by Growthik Media.",
  alternates: {
    canonical: "https://www.growthikmedia.com/services/website-maintenance/",
  },
};

export default function LegacyGroupedWebsiteMaintenancePage() {
  return (
    <LegacyPageContent
      page={{
        ...legacyServicePages.performance,
        slug: "(technology-services)/website-maintenance",
        title: "Website Maintenance Services | Growthik Media",
        h1: "Website Maintenance Services",
        audience: "businesses looking for ongoing website care, fixes and performance support",
        sections: [
          "Growthik Media maintains business websites with updates, backups, speed checks, content edits and technical SEO monitoring.",
          "Maintenance protects rankings by keeping pages fast, secure, crawlable and aligned with current business offers.",
          "This legacy URL is served directly because it appeared in the Search Console export.",
        ],
        relatedLinks: [
          { label: "Website Maintenance", href: "/services/website-maintenance/" },
          { label: "Website Development", href: "/services/website-development/" },
          { label: "Contact", href: "/contact/" },
        ],
      }}
      pathPrefix="/services"
    />
  );
}
