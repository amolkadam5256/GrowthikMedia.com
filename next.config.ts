import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Use Turbopack-compatible compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    // Faster next/font: preload only the subsets actually used
    optimizePackageImports: [
      "lucide-react",
      "react-icons",
      "@mui/material",
      "@mui/icons-material",
      "framer-motion",
    ],
  },
  // Enables static export if needed, but for performance with next/image,
  // we recommend server-side optimization or using a loader.
  // output: "export",
  trailingSlash: true,
  compress: true, // Enable gzip/brotli compression
  poweredByHeader: false, // Remove X-Powered-By header for security
  images: {
    // Enabled for better LCP/FCP
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
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
      // Security headers for all routes
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
        ],
      },
      // Long-term caching for Next.js static assets (JS, CSS, fonts, images)
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Long-term caching for public static assets
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      // API routes should never be cached at the browser level
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
