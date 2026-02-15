import { Metadata } from "next";
import { CONTACT_INFO } from "@/constants/contact";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const currentSlug = slug[slug.length - 1];

  // Try to find the service in navigationData for a better label
  const serviceLabel = currentSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const name = `${serviceLabel} | ${CONTACT_INFO.companyName}`;
  const description = `Premium ${serviceLabel} services in Pune. Transform your business growth with ${CONTACT_INFO.companyName}'s data-driven strategies and creative solutions.`;

  return {
    title: name,
    description: description,
    keywords: `${currentSlug}, ${serviceLabel}, digital marketing pune, ${CONTACT_INFO.companyName}`,
    openGraph: {
      title: name,
      description: description,
      url: `${CONTACT_INFO.website}/services/${slug.join("/")}/`,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: serviceLabel,
        },
      ],
    },
    alternates: {
      canonical: `${CONTACT_INFO.website}/services/${slug.join("/")}/`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const currentSlug = slug[slug.length - 1];

  const serviceName = currentSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    provider: {
      "@type": "Organization",
      name: CONTACT_INFO.companyName,
      url: CONTACT_INFO.website,
    },
    description: `Professional ${serviceName} services offered by ${CONTACT_INFO.companyName} in Pune.`,
    areaServed: {
      "@type": "City",
      name: "Pune",
    },
    serviceType: serviceName,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen py-32 px-4 flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-linear-to-r from-(--color-primary) to-(--color-primary-light) bg-clip-text text-transparent uppercase tracking-wider">
            {serviceName}
          </h1>
          <div className="w-32 h-1.5 bg-(--color-primary) mx-auto mb-12 rounded-full"></div>
          <p className="text-xl md:text-2xl text-(--text-secondary) mb-12 leading-relaxed">
            We are currently updating this page with our latest case studies,
            packagesand detailed service information for{" "}
            <strong>{serviceName}</strong>.
          </p>
          <div className="p-8 rounded-2xl border border-(--border-color) bg-(--card-background) shadow-2xl backdrop-blur-sm">
            <p className="text-lg text-(--text-primary) mb-8">
              Interested in our <strong>{serviceName}</strong> services?
              Let&apos;s discuss how we can help your business grow.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-(--color-primary) text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Get Expert Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
