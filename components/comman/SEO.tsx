// components/SEO.tsx
import Script from "next/script";
import { CONTACT_INFO } from "@/constants/contact";

export const metadata = {
  metadataBase: new URL(CONTACT_INFO.website),
  title: `${CONTACT_INFO.companyName} – Digital Marketing Agency`,
  description: `${CONTACT_INFO.companyName} helps businesses grow with SEO, Google Ads, Social Media, and Web Development.`,
  openGraph: {
    title: CONTACT_INFO.companyName,
    description: "Digital marketing & SEO agency",
    url: CONTACT_INFO.website,
    images: ["/og-image.png"],
  },
};

export default function SEO() {
  return (
    <>
      {/* Basic SEO */}
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta
        property="og:description"
        content={metadata.openGraph.description}
      />
      <meta property="og:url" content={metadata.openGraph.url} />
      <meta property="og:image" content={metadata.openGraph.images[0]} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Google Site Verification */}
      <meta
        name="google-site-verification"
        content="ybGEytV5_yuay3YAScOKEMjM1ZsreR4YgA1ex4oqEMs"
      />

      {/* Favicons */}
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="GrowthikMedia" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Preconnect for GA & GTM */}
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />

      {/* Google Analytics gtag.js */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-30C78ZK2G8"
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
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "${CONTACT_INFO.companyName}",
              "url": "${CONTACT_INFO.website}",
              "logo": "${CONTACT_INFO.website}/logo.png",
              "description": "Leading digital marketing and video production agency in Pune, India",
              "email": "${CONTACT_INFO.email.info}",
              "telephone": "${CONTACT_INFO.phone.primary}",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "${CONTACT_INFO.address.line1}, ${CONTACT_INFO.address.line2}",
                "addressLocality": "${CONTACT_INFO.address.city}",
                "addressRegion": "${CONTACT_INFO.address.state}",
                "postalCode": "${CONTACT_INFO.address.pincode}",
                "addressCountry": "IN"
              },
              "sameAs": [
                "${CONTACT_INFO.social.facebook}",
                "${CONTACT_INFO.social.instagram}",
                "${CONTACT_INFO.social.twitter}",
                "${CONTACT_INFO.social.linkedin}",
                "${CONTACT_INFO.social.youtube}"
              ]
            }
          `,
        }}
      />

      {/* Structured Data JSON-LD - Local Business */}
      <Script
        id="structured-data-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "${CONTACT_INFO.companyName}",
              "image": "${CONTACT_INFO.website}/logo.png",
              "@id": "${CONTACT_INFO.website}",
              "url": "${CONTACT_INFO.website}",
              "telephone": "${CONTACT_INFO.phone.primary}",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "${CONTACT_INFO.address.line1}, ${CONTACT_INFO.address.line2}",
                "addressLocality": "${CONTACT_INFO.address.city}",
                "addressRegion": "${CONTACT_INFO.address.state}",
                "postalCode": "${CONTACT_INFO.address.pincode}",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 18.4782,
                "longitude": 73.8131
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "10:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "16:00"
                }
              ],
              "sameAs": [
                "${CONTACT_INFO.social.facebook}",
                "${CONTACT_INFO.social.instagram}",
                "${CONTACT_INFO.social.twitter}",
                "${CONTACT_INFO.social.linkedin}",
                "${CONTACT_INFO.social.youtube}"
              ]
            }
          `,
        }}
      />
    </>
  );
}
