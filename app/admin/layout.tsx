import "../assets/styles/globals.css";
import "../assets/styles/fonts.css";
import { Metadata } from "next";
import ThemeProviderWrapper from "@/components/PublicComponents/comman/ThemeProviderWrapper";

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
        className="antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
        suppressHydrationWarning
      >
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
