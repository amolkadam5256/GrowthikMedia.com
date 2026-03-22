import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CONTACT_INFO } from "@/constants/contact";
import { locationMapping } from "@/constants/locationData";
import LocationPageTemplate from "@/app/(public)/_locationPage/LocationPageTemplate";

// Generate paths for static generation
export async function generateStaticParams() {
  return Object.keys(locationMapping).map((slug) => ({
    slug: slug,
  }));
}

// Dynamic Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = locationMapping[slug];

  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: `${CONTACT_INFO.website}/${slug}/`,
    },
    openGraph: {
      title: data.ogTitle,
      description: data.ogDescription,
      url: `${CONTACT_INFO.website}/${slug}/`,
      siteName: "Growthik Media",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export default async function GenericLocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = locationMapping[slug];

  if (!data) {
    return notFound();
  }

  return (
    <LocationPageTemplate
      area={data.area}
      city={data.city}
      primaryService={data.primaryService}
      slug={slug}
      headline={data.headline}
      subheadline={data.subheadline}
      areaDescription={data.areaDescription}
      services={data.services}
      faqs={data.faqs}
    />
  );
}
