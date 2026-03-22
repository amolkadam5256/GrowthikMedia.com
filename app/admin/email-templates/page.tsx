import EmailTemplateSystem from "@/components/AdminComponents/EmailTemplateSystem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Template System | Growthik Media Admin",
  description: "Manage professional lead communication templates.",
};

export default function EmailTemplatesPage() {
  return <EmailTemplateSystem />;
}
