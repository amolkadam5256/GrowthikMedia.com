import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Enables static export
  trailingSlash: true, // Optional: keeps URLs like /dashboard/
  images: {
    unoptimized: true, // Required for static export
    qualities: [100, 75],
  },
};

export default nextConfig;
