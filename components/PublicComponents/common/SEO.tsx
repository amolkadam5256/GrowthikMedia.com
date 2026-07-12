// components/SEO.tsx
import Script from "next/script";
import {
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildServiceSchema,
  buildWebSiteSchema,
} from "@/lib/seo/schema";

export default function SEO() {
  return (
    <>
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildOrganizationSchema()),
        }}
      />

      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildWebSiteSchema()),
        }}
      />

      <Script
        id="structured-data-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildLocalBusinessSchema()),
        }}
      />

      <Script
        id="structured-data-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildServiceSchema()),
        }}
      />
    </>
  );
}
