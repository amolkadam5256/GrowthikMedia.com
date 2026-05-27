import { Metadata } from "next";
import { CONTACT_INFO } from "@/constants/contact";

export const metadata: Metadata = {
  title: `Shipping & Delivery Policy | Growthik Media`,
  description: `Shipping and Delivery Policy for Growthik Media. We provide digital marketing services with instant or same-day service activation.`,
  alternates: {
    canonical: "https://www.growthikmedia.com/shipping-policy/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen py-32 px-4">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Shipping and Delivery Policy
        </h1>
        <p className="text-(--text-secondary) mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">
            1. Digital Delivery
          </h2>
          <p className="text-(--text-secondary)">
            <strong>Growthik Media provides digital services only. No physical products are shipped.</strong>
            <br /><br />
            Our business provides digital marketing, ads management, SEO, website services, lead generation, and online consultation. Therefore, there is no physical courier shipping, and no warehouse dispatch.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">
            2. Delivery and Handling Time
          </h2>
          <p className="text-(--text-secondary)">
            We aim for fast and efficient service delivery. Our typical handling and delivery times for our digital services are as follows:
          </p>
          <ul className="list-disc ml-6 text-(--text-secondary)">
            <li><strong>Handling Time:</strong> 0 to 1 business days.</li>
            <li><strong>Order Cut-Off Time:</strong> 2:00 PM (GMT+05:30) India Standard Time (Pune / Mumbai / Kolkata).</li>
            <li><strong>Processing:</strong> Orders placed before 2:00 PM are generally processed on the same day. Orders placed after 2:00 PM are processed on the next business day.</li>
            <li><strong>Operating Days:</strong> Monday through Saturday.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">
            3. Estimated Delivery Time
          </h2>
          <p className="text-(--text-secondary)">
            <strong>All services are digitally delivered within 0–1 business day after order confirmation.</strong> Transit time is effectively zero days since our work is delivered online or involves immediate digital access.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">
            4. Shipping Costs
          </h2>
          <p className="text-(--text-secondary)">
            <strong>All Growthik Media services are digitally delivered. No physical shipping charges apply.</strong>
            <br /><br />
            We offer "Free Shipping" as a standard across all our services since they are exclusively digitally provided.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">5. Contact Us</h2>
          <p className="text-(--text-secondary)">
            If you have any questions regarding our digital delivery or onboarding process, please contact us at:
            <br /><br />
            <strong>Email:</strong> {CONTACT_INFO.email.info}<br />
            <strong>Phone:</strong> {CONTACT_INFO.phone.primary}<br />
          </p>
        </section>
      </div>
    </div>
  );
}
