import { Metadata } from "next";
import { CONTACT_INFO } from "@/constants/contact";
import ContactForm from "@/components/comman/ContactForm";

export const metadata: Metadata = {
  title: `Free Growth Audit | ${CONTACT_INFO.companyName}`,
  description: `Get a free digital marketing and SEO audit for your business from ${CONTACT_INFO.companyName}. Discover growth opportunities today.`,
  alternates: {
    canonical: `${CONTACT_INFO.website}/audit`,
  },
};

export default function GrowthAudit() {
  return (
    <div className="min-h-screen py-32 px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent uppercase">
          Free Growth Audit
        </h1>
        <p className="text-xl text-(--text-secondary) leading-relaxed">
          Level up your digital presence. Fill out the form below, and our
          experts will analyze your website, SEO, and social media to provide
          you with a personalized growth roadmap.
        </p>
      </div>

      <div className="max-w-3xl mx-auto p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--card-background)] shadow-2xl">
        <ContactForm />
      </div>
    </div>
  );
}
