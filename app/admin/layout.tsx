import "../assets/styles/globals.css";
import "../assets/styles/fonts.css";
import { Metadata } from "next";
import ThemeProviderWrapper from "@/components/comman/ThemeProviderWrapper";

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
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
