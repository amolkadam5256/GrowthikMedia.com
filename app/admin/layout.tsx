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
    <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
  );
}
