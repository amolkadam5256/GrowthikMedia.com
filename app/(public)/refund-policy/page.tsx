import { Metadata } from "next";
import { CONTACT_INFO } from "@/constants/contact";
import Script from "next/script";

export const metadata: Metadata = {
  title: `Refund & Cancellation Policy | Growthik Media - SEO & Digital Marketing Agency Pune`,
  description: `Read the Refund and Cancellation Policy for Growthik Media. We provide transparent, results-driven SEO and digital marketing services in Pune, India. Learn about our local SEO and digital service refund terms.`,
  alternates: {
    canonical: "https://www.growthikmedia.com/refund-policy/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RefundPolicy() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does Growthik Media offer refunds for digital marketing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Growthik Media provides digital marketing and online services only. Due to the nature of digital services, returns and exchanges are not accepted. Refunds may be considered only in cases where the service has not yet been started."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cancellation policy for SEO and marketing retainers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We require a 30-day written notice for the cancellation of any monthly retainer services, including local SEO packages and social media marketing. Work completed up to the cancellation date will be billed."
        }
      },
      {
        "@type": "Question",
        "name": "Are Google Ads or PPC management fees refundable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Management fees for Google Ads or Meta Ads campaigns are non-refundable. Ad spend paid directly to advertising platforms cannot be refunded by Growthik Media."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": CONTACT_INFO.companyName,
    "image": "https://www.growthikmedia.com/logo.png",
    "@id": "https://www.growthikmedia.com/",
    "url": "https://www.growthikmedia.com/",
    "telephone": CONTACT_INFO.phone.primary,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": CONTACT_INFO.address.city,
      "addressRegion": CONTACT_INFO.address.state,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.5204,
      "longitude": 73.8567
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <div className="min-h-screen py-32 px-4">
        <article className="max-w-4xl mx-auto prose prose-invert">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Refund and Cancellation Policy
            </h1>
            <p className="text-(--text-secondary)">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">
              1. Overview of Digital Service Delivery
            </h2>
            <p className="text-(--text-secondary)">
              At <strong>{CONTACT_INFO.companyName}</strong>, we are committed to delivering the best <strong>digital marketing and SEO services in Pune</strong> and across India. We believe in complete transparency regarding our refund and cancellation processes. Because our work involves highly customized digital marketing strategies—including <strong>local SEO</strong>, <strong>technical SEO</strong>, <strong>content marketing</strong>, and <strong>performance marketing</strong>—refunds are processed under specific, strict terms and conditions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">
              2. Cancellation Policy for Marketing Campaigns
            </h2>
            <p className="text-(--text-secondary)">
              Clients seeking to cancel their ongoing marketing, website design, or SEO campaigns must provide written notice to our team. As a top <strong>SEO company in Pune</strong>, we allocate extensive resources to your project from day one.
            </p>
            <ul className="list-disc ml-6 text-(--text-secondary)">
              <li><strong>Notice Period:</strong> We require a 30-day notice period for the cancellation of any monthly retainer services (such as our <strong>local SEO packages</strong>, national SEO campaigns, or ongoing social media marketing).</li>
              <li><strong>Work in Progress:</strong> Any work completed up to the date of cancellation will be billed accordingly. Cancellations will not result in a refund for services already rendered, audits performed, or strategies already deployed.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">
              3. Returns, Exchanges, and Refunds
            </h2>
            <p className="text-(--text-secondary)">
              <strong>Growthik Media provides digital marketing and online services only. Due to the nature of digital services, returns and exchanges are not accepted. Refunds may be considered only in cases where the service has not yet been started.</strong>
              <br /><br />
              Establishing a strict refund policy protects the extensive time, <strong>technical SEO</strong> audits, and resources invested by our experts.
            </p>
            <ul className="list-disc ml-6 text-(--text-secondary)">
              <li><strong>SEO Services:</strong> Search Engine Optimization (SEO) is a long-term strategy. Rankings, organic traffic, and lead generation depend on search engine algorithms (like Google) and market competition. We implement industry best practices (including AEO, GEO, and Schema markup) to improve your visibility; however, we do not guarantee specific rankings or instant results, and thus do not offer refunds for SEO services once work has commenced.</li>
              <li><strong>Web Development & Design:</strong> For website development projects, a non-refundable upfront deposit is required. If a project is cancelled before final delivery, any payments made beyond the deposit may be refunded pro-rata, based exclusively on the completed milestones.</li>
              <li><strong>Paid Advertising (PPC):</strong> Management fees for Google Ads or Meta Ads campaigns are non-refundable. Ad spend paid directly to the platforms (Google, Facebook) cannot be refunded by Growthik Media under any circumstances.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">
              4. Exceptions and Discrepancies
            </h2>
            <p className="text-(--text-secondary)">
              If you notice a billing error or an unauthorized charge, please contact our billing department immediately. We will investigate the issue and process a refund if a proven accidental overcharge has occurred.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">
              5. Local SEO & Market-Specific Services
            </h2>
            <p className="text-(--text-secondary)">
              Our targeted services—such as <strong>Local SEO in Pune</strong>, hyper-local marketing strategies, Google Business Profile (GMB) optimization, and customized business consulting—involve proprietary research and custom audits. The intellectual property and competitive insights delivered in the early stages of these campaigns are non-refundable once shared with the client.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">
              6. Frequently Asked Questions (AEO & GEO Optimized)
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Does Growthik Media offer refunds for digital marketing services?</h3>
                <p className="text-(--text-secondary)">No. Growthik Media provides digital marketing and online services only. Due to the nature of digital services, returns and exchanges are not accepted. Refunds are only considered if the service has not yet been started.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">What is the cancellation policy for SEO and marketing retainers?</h3>
                <p className="text-(--text-secondary)">We require a 30-day written notice for the cancellation of any monthly retainer services, including local SEO packages and social media marketing. Any work completed prior to cancellation will be billed.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Are Google Ads or PPC management fees refundable?</h3>
                <p className="text-(--text-secondary)">Management fees for Google Ads or Meta Ads campaigns are strictly non-refundable. Advertising spend paid directly to Google or Meta is also outside of our refund capabilities.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">7. Contact Us for Support</h2>
            <p className="text-(--text-secondary)">
              If you have questions or concerns about your billing, our refund policy, or your ongoing SEO and digital marketing campaigns, please reach out to our team in Pune. We strive to resolve all disputes amicably.
              <br /><br />
              <strong>Email:</strong> {CONTACT_INFO.email.info}<br />
              <strong>Phone:</strong> {CONTACT_INFO.phone.primary}<br />
              <strong>Location:</strong> Pune, Maharashtra, India
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
