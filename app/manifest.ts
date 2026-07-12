import type { MetadataRoute } from "next";
import { CONTACT_INFO } from "@/constants/contact";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${CONTACT_INFO.companyName} | AI-Powered Digital Growth`,
    short_name: "Growthik",
    description: "Modern digital growth agency for SEO, ads, web development and branding.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#d90b1c",
    icons: [
      {
        src: "/brand/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/brand/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
