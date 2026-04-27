// components/SEO.tsx
import Script from "next/script";
import {
  BUSINESS_GEO,
  CONTACT_INFO,
  INDEXABLE_SOCIAL_PROFILES,
  OPENING_HOURS_SPECIFICATION,
  STRUCTURED_DATA_IDS,
} from "@/constants/contact";

export default function SEO() {
  return (
    <>
      {/* Google Analytics gtag.js */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-30C78ZK2G8"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-30C78ZK2G8');
          `,
        }}
      />

      {/* Structured Data JSON-LD - Organization */}
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": STRUCTURED_DATA_IDS.organization,
            name: CONTACT_INFO.companyName,
            alternateName: "Growthik",
            url: CONTACT_INFO.website,
            logo: `${CONTACT_INFO.website}/brand/growthik-media-transparent-logo.png`,
            description:
              "Growthik Media is an AI-powered growth engineering company that builds predictable revenue systems - not just marketing campaigns. We specialize in ROI-focused performance engineering.",
            email: CONTACT_INFO.email.info,
            telephone: CONTACT_INFO.phone.primary,
            address: {
              "@type": "PostalAddress",
              streetAddress: CONTACT_INFO.address.line1,
              addressLocality: CONTACT_INFO.address.city,
              addressRegion: CONTACT_INFO.address.state,
              postalCode: CONTACT_INFO.address.pincode,
              addressCountry: "IN",
            },
            sameAs: INDEXABLE_SOCIAL_PROFILES,
            contactPoint: {
              "@type": "ContactPoint",
              telephone: CONTACT_INFO.phone.primary,
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["en", "hi", "mr"],
            },
          }),
        }}
      />

      {/* Structured Data JSON-LD - ProfessionalService */}
      <Script
        id="structured-data-professional-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: CONTACT_INFO.companyName,
            image: `${CONTACT_INFO.website}/brand/growthik-media-transparent-logo.png`,
            "@id": STRUCTURED_DATA_IDS.professionalService,
            url: CONTACT_INFO.website,
            telephone: CONTACT_INFO.phone.primary,
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: `${CONTACT_INFO.address.line1}, ${CONTACT_INFO.address.line2}`,
              addressLocality: CONTACT_INFO.address.city,
              addressRegion: CONTACT_INFO.address.state,
              postalCode: CONTACT_INFO.address.pincode,
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: BUSINESS_GEO.latitude,
              longitude: BUSINESS_GEO.longitude,
            },
            sameAs: INDEXABLE_SOCIAL_PROFILES,
            parentOrganization: {
              "@id": STRUCTURED_DATA_IDS.organization,
            },
          }),
        }}
      />

      {/* Structured Data JSON-LD - WebSite */}
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": STRUCTURED_DATA_IDS.website,
            name: CONTACT_INFO.companyName,
            url: CONTACT_INFO.website,
            publisher: {
              "@id": STRUCTURED_DATA_IDS.organization,
            },
            potentialAction: {
              "@type": "SearchAction",
              target: `${CONTACT_INFO.website}/blog?search={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Structured Data JSON-LD - Local Business */}
      <Script
        id="structured-data-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: CONTACT_INFO.companyName,
            image: `${CONTACT_INFO.website}/brand/growthik-media-transparent-logo.png`,
            "@id": STRUCTURED_DATA_IDS.localBusiness,
            url: CONTACT_INFO.website,
            telephone: CONTACT_INFO.phone.primary,
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: `${CONTACT_INFO.address.line1}, ${CONTACT_INFO.address.line2}`,
              addressLocality: CONTACT_INFO.address.city,
              addressRegion: CONTACT_INFO.address.state,
              postalCode: CONTACT_INFO.address.pincode,
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: BUSINESS_GEO.latitude,
              longitude: BUSINESS_GEO.longitude,
            },
            sameAs: INDEXABLE_SOCIAL_PROFILES,
            openingHoursSpecification: OPENING_HOURS_SPECIFICATION,
            parentOrganization: {
              "@id": STRUCTURED_DATA_IDS.organization,
            },
          }),
        }}
      />

      {/* Services Schema */}
      <Script
        id="structured-data-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Digital Marketing & Video Production",
            provider: {
              "@type": "Organization",
              "@id": STRUCTURED_DATA_IDS.organization,
              name: CONTACT_INFO.companyName,
            },
            areaServed: "Worldwide",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Digital Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Video Production",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Content Creation",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Social Media Marketing",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "SEO & Performance Marketing",
                  },
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}
