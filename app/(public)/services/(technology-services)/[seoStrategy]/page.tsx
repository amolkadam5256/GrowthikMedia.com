import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CONTACT_INFO } from "@/constants/contact";
import { locationMapping } from "@/constants/locationData";
import LocationPageTemplate from "@/app/(public)/_locationPage/LocationPageTemplate";
import { LegacyPageContent, legacyServicePages } from "@/lib/seo/legacyPages";

// Generate paths for static generation
export async function generateStaticParams() {
  return Array.from(
    new Set([...Object.keys(locationMapping), ...Object.keys(legacyServicePages)]),
  ).map((slug) => ({
    seoStrategy: slug,
  }));
}

// Dynamic Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ seoStrategy: string }>;
}): Promise<Metadata> {
  const { seoStrategy } = await params;
  const data = locationMapping[seoStrategy];
  const legacyPage = legacyServicePages[seoStrategy];

  if (!data && !legacyPage) return {};

  if (legacyPage) {
    return {
      title: legacyPage.title,
      description: legacyPage.description,
      alternates: {
        canonical: `${CONTACT_INFO.website}/services/${seoStrategy}/`,
      },
      robots: legacyPage.noIndex ? { index: false, follow: true } : { index: true, follow: true },
    };
  }

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: `${CONTACT_INFO.website}/services/${seoStrategy}/`,
    },
    openGraph: {
      title: data.ogTitle,
      description: data.ogDescription,
      url: `${CONTACT_INFO.website}/services/${seoStrategy}/`,
      siteName: "Growthik Media",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export default async function GenericLocationPage({
  params,
}: {
  params: Promise<{ seoStrategy: string }>;
}) {
  const { seoStrategy } = await params;
  const data = locationMapping[seoStrategy];
  const legacyPage = legacyServicePages[seoStrategy];

  if (legacyPage) {
    return <LegacyPageContent page={legacyPage} pathPrefix="/services" />;
  }

  if (!data) {
    return notFound();
  }

  return (
    <LocationPageTemplate
      area={data.area}
      city={data.city}
      primaryService={data.primaryService}
      slug={seoStrategy}
      headline={data.headline}
      subheadline={data.subheadline}
      areaDescription={data.areaDescription}
      services={data.services}
      faqs={data.faqs}
    />
  );
}
