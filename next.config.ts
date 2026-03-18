import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enables static export if needed, but for performance with next/image,
  // we recommend server-side optimization or using a loader.
  // output: "export",
  trailingSlash: true,
  images: {
    // Enabled for better LCP/FCP
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
    qualities: [70, 70, 70, 70, 70, 70, 70, 70, 70, 75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog/importance-of-seo",
        destination: "/blog/why-seo-is-important",
        permanent: true,
      },
      {
        source: "/blog/seo-audit-checklist",
        destination: "/blog/technical-seo-audit-checklist",
        permanent: true,
      },
      {
        source: "/web-design-in-viman-nagar",
        destination: "/website-design-company-in-viman-nagar",
        permanent: true,
      },
      {
        source: "/website-design-in-pcmc",
        destination: "/website-design-company-in-pcmc",
        permanent: true,
      },
      {
        source: "/website-development-in-hadapsar",
        destination: "/website-design-company-in-hadapsar",
        permanent: true,
      },
      {
        source: "/seo-marketing-pune",
        destination: "/services/seo",
        permanent: true,
      },
      {
        source: "/video-production-pune",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/google-ads-agency-pune",
        destination: "/services/ppc-google-ads",
        permanent: true,
      },
      {
        source: "/performance-marketing-pune",
        destination: "/services/performance-marketing",
        permanent: true,
      },
      {
        source: "/digital-marketing-agency-pune",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/seo-services-pune",
        destination: "/services/seo",
        permanent: true,
      },
      {
        source: "/quote",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/api/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
