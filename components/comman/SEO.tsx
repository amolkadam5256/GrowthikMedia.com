// components/SEO.tsx
import Script from 'next/script';

export const metadata = {
  title: "Growthik Media – Digital Marketing Agency",
  description: "Growthik Media helps businesses grow with SEO, Google Ads, Social Media, and Web Development.",
  openGraph: {
    title: "Growthik Media",
    description: "Digital marketing & SEO agency",
    url: "https://growthikmedia.com",
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
      <meta property="og:description" content={metadata.openGraph.description} />
      <meta property="og:url" content={metadata.openGraph.url} />
      <meta property="og:image" content={metadata.openGraph.images[0]} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Google Site Verification */}
      <meta name="google-site-verification" content="ybGEytV5_yuay3YAScOKEMjM1ZsreR4YgA1ex4oqEMs" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

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

      {/* Structured Data JSON-LD */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Growthik Media",
              "url": "https://growthikmedia.com",
              "logo": "https://growthikmedia.com/logo.png"
            }
          `,
        }}
      />
    </>
  );
}
