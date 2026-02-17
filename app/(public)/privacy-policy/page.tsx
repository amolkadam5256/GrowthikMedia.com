import { Metadata } from "next";
import { CONTACT_INFO } from "@/constants/contact";

export const metadata: Metadata = {
  title: `Privacy Policy | ${CONTACT_INFO.companyName}`,
  description: `Privacy Policy for ${CONTACT_INFO.companyName}. Learn how we handle your data and protect your privacy.`,
  alternates: {
    canonical: `${CONTACT_INFO.website}/privacy-policy/`,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-32 px-4">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Privacy Policy
        </h1>
        <p className="text-(--text-secondary) mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">
            1. Introduction
          </h2>
          <p className="text-(--text-secondary)">
            Welcome to {CONTACT_INFO.companyName}. We respect your privacy and
            are committed to protecting your personal data. This privacy policy
            will inform you about how we look after your personal data when you
            visit our website.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">
            2. Data We Collect
          </h2>
          <p className="text-(--text-secondary)">
            We may collect, use, store and transfer different kinds of personal
            data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc ml-6 text-(--text-secondary)">
            <li>Identity Data (name, username)</li>
            <li>Contact Data (email address, telephone numbers)</li>
            <li>Technical Data (IP address, browser type, location)</li>
            <li>Usage Data (information about how you use our website)</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">
            3. How We Use Your Data
          </h2>
          <p className="text-(--text-secondary)">
            We will only use your personal data when the law allows us to. Most
            commonly, we will use your personal data in the following
            circumstances:
          </p>
          <ul className="list-disc ml-6 text-(--text-secondary)">
            <li>To provide our services to you</li>
            <li>To improve our website and customer experience</li>
            <li>To communicate with you about your inquiries</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">4. Contact Us</h2>
          <p className="text-(--text-secondary)">
            If you have any questions about this privacy policy or our privacy
            practices, please contact us at:
            <br />
            Email: {CONTACT_INFO.email.info}
            <br />
            Phone: {CONTACT_INFO.phone.primary}
          </p>
        </section>
      </div>
    </div>
  );
}
