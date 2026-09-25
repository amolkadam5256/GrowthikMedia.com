import type { Metadata } from "next";
import GlobalNotFound from "@/components/PublicComponents/common/GlobalNotFound";

export const metadata: Metadata = {
  title: "Page Not Found | Growthik Media",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <GlobalNotFound />;
}
