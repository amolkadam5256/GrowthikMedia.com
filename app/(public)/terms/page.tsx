import { Metadata } from "next";
import { CONTACT_INFO } from "@/constants/contact";

export const metadata: Metadata = {
  title: `Terms of Service | ${CONTACT_INFO.companyName}`,
  description: `Terms and conditions for using ${CONTACT_INFO.companyName} services and website.`,
  alternates: {
    canonical: `${CONTACT_INFO.website}/terms/`,
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen py-32 px-4">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Terms of Service
        </h1>
        <p className="text-(--text-secondary) mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">
            1. Agreement to Terms
          </h2>
          <p className="text-(--text-secondary)">
            By accessing our website at {CONTACT_INFO.website}, you agree to be
            bound by these terms of service, all applicable laws and
            regulationsand agree that you are responsible for compliance with
            any applicable local laws.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">2. Use License</h2>
          <p className="text-(--text-secondary)">
            Permission is granted to temporarily download one copy of the
            materials on {CONTACT_INFO.companyName}&apos;s website for personal,
            non-commercial transitory viewing only.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">3. Disclaimer</h2>
          <p className="text-(--text-secondary)">
            The materials on {CONTACT_INFO.companyName}&apos;s website are
            provided on an &apos;as is&apos; basis. {CONTACT_INFO.companyName}{" "}
            makes no warranties, expressed or impliedand hereby disclaims and
            negates all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or
            other violation of rights.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">
            4. Governing Law
          </h2>
          <p className="text-(--text-secondary)">
            These terms and conditions are governed by and construed in
            accordance with the laws of India and you irrevocably submit to the
            exclusive jurisdiction of the courts in {CONTACT_INFO.address.city},{" "}
            {CONTACT_INFO.address.state}.
          </p>
        </section>
      </div>
    </div>
  );
}
