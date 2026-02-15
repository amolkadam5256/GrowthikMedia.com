// components/SEO.tsx
import Script from "next/script";
import { CONTACT_INFO } from "@/constants/contact";

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
            name: CONTACT_INFO.companyName,
            alternateName: "Growthik",
            url: CONTACT_INFO.website,
            logo: `${CONTACT_INFO.website}/logo.png`,
            description:
              "Growthik Media is a leading digital marketing agency in Pune. We specialize in ROI-focused SEO, PPC, social mediaand professional video production.",
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
            sameAs: [
              CONTACT_INFO.social.facebook,
              CONTACT_INFO.social.instagram,
              CONTACT_INFO.social.twitter,
              CONTACT_INFO.social.linkedin,
              CONTACT_INFO.social.youtube,
              CONTACT_INFO.social.pinterest,
              CONTACT_INFO.social.behance,
              CONTACT_INFO.social.whatsapp,
              CONTACT_INFO.social.telegram,
              CONTACT_INFO.social.snapchat,
              CONTACT_INFO.social.reddit,
              CONTACT_INFO.social.discord,
              CONTACT_INFO.social.github,
              CONTACT_INFO.social.dribbble,
              CONTACT_INFO.social.medium,
              CONTACT_INFO.social.quora,
            ],
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
            image: `${CONTACT_INFO.website}/logo.png`,
            "@id": CONTACT_INFO.website,
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
              latitude: 18.4782,
              longitude: 73.8131,
            },
            sameAs: [
              CONTACT_INFO.social.facebook,
              CONTACT_INFO.social.instagram,
              CONTACT_INFO.social.twitter,
              CONTACT_INFO.social.linkedin,
              CONTACT_INFO.social.youtube,
            ],
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
            name: CONTACT_INFO.companyName,
            url: CONTACT_INFO.website,
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
            image: `${CONTACT_INFO.website}/logo.png`,
            "@id": CONTACT_INFO.website,
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
              latitude: 18.4782,
              longitude: 73.8131,
            },
            sameAs: [
              CONTACT_INFO.social.facebook,
              CONTACT_INFO.social.instagram,
              CONTACT_INFO.social.twitter,
              CONTACT_INFO.social.linkedin,
              CONTACT_INFO.social.youtube,
            ],
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "10:00",
                closes: "19:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "10:00",
                closes: "16:00",
              },
            ],
          }),
        }}
      />

      {/* Structured Data JSON-LD - BreadcrumbList */}
      <Script
        id="structured-data-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: CONTACT_INFO.website,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: `${CONTACT_INFO.website}/services`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Blog",
                item: `${CONTACT_INFO.website}/blog`,
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "About Us",
                item: `${CONTACT_INFO.website}/about`,
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Contact",
                item: `${CONTACT_INFO.website}/contact`,
              },
            ],
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
      {/* FAQ Schema */}
      <Script
        id="structured-data-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Why choose Growthik Media as your Digital Marketing Company in Pune?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Growthik Media combines local expertise, innovative data-driven strategiesand a results-focused approach to elevate your brand. We don't just provide services; we partner with you to achieve sustainable growth.",
                },
              },
              {
                "@type": "Question",
                name: "What services does your Digital Marketing Agency in Pune offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We offer SEO, Social Media Marketing, Content Creation, Performance Marketingand specialized Video Production services.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to see results?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "While some results like performance ads can be immediate, organic growth typically takes 3-6 months. We provide transparent reporting to track progress.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
