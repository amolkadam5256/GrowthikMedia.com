import "../assets/styles/globals.css";
import "../assets/styles/fonts.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProviderWrapper from "@/components/comman/ThemeProviderWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Admin Portal - Growthik Media",
  description: "Administrative access only - Authorized personnel only",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white`}
        suppressHydrationWarning
      >
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
