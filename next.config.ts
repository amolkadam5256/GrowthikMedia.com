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
    qualities: [75, 80, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      // Major Category & Service Cleanup
      { source: "/services/digital-marketing", destination: "/services/", permanent: true },
      { source: "/services/digital-marketing/", destination: "/services/", permanent: true },
      { source: "/services/google-ads", destination: "/services/ppc-google-ads/", permanent: true },
      { source: "/services/google-ads/", destination: "/services/ppc-google-ads/", permanent: true },
      { source: "/services/seo-company-in-pune", destination: "/services/seo/", permanent: true },
      { source: "/services/seo-company-in-pune/", destination: "/services/seo/", permanent: true },
      { source: "/services/website-design-company-aundh", destination: "/website-design-company-aundh/", permanent: true },
      { source: "/services/website-design-company-aundh/", destination: "/website-design-company-aundh/", permanent: true },
      { source: "/services/website-design-company-baner", destination: "/website-design-company-baner/", permanent: true },
      { source: "/services/website-design-company-baner/", destination: "/website-design-company-baner/", permanent: true },
      { source: "/services/website-design-company-hadapsar", destination: "/website-design-company-hadapsar/", permanent: true },
      { source: "/services/website-design-company-hadapsar/", destination: "/website-design-company-hadapsar/", permanent: true },
      { source: "/services/website-design-company-kothrud", destination: "/website-design-company-kothrud/", permanent: true },
      { source: "/services/website-design-company-kothrud/", destination: "/website-design-company-kothrud/", permanent: true },
      { source: "/services/website-design-company-pcmc", destination: "/website-design-company-pcmc/", permanent: true },
      { source: "/services/website-design-company-pcmc/", destination: "/website-design-company-pcmc/", permanent: true },
      { source: "/services/website-design-company-viman-nagar", destination: "/website-design-company-viman-nagar/", permanent: true },
      { source: "/services/website-design-company-viman-nagar/", destination: "/website-design-company-viman-nagar/", permanent: true },
      { source: "/services/website-design-company-wakad", destination: "/website-design-company-wakad/", permanent: true },
      { source: "/services/website-design-company-wakad/", destination: "/website-design-company-wakad/", permanent: true },
      { source: "/services/seo-company-hinjewadi", destination: "/seo-company-hinjewadi/", permanent: true },
      { source: "/services/seo-company-hinjewadi/", destination: "/seo-company-hinjewadi/", permanent: true },
      
      // Legacy Specifics & Misc
      { source: "/quote", destination: "/contact/", permanent: true },
      { source: "/sitemap-pages.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/sitemap-services.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/sitemap-blog.xml", destination: "/sitemap.xml", permanent: true },
      
      // 410 Gone Handling
      // Next.js direct 410 in redirects isn't standard, normally used for 3xx. 
      // We'll set a temporary redirect or handle in middleware as requested in Deliverable 3.
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
