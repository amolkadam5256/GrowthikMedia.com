import { Metadata } from "next";
import { CONTACT_INFO } from "@/constants/contact";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const label = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const name = `${label} | Portfolio | ${CONTACT_INFO.companyName}`;
  const description = `Showcase of our ${label} projects. See how Growthik Media delivers exceptional results for clients.`;

  return {
    title: name,
    description: description,
    openGraph: {
      title: name,
      description: description,
      url: `${CONTACT_INFO.website}/portfolio/${slug}/`,
    },
    alternates: {
      canonical: `${CONTACT_INFO.website}/portfolio/${slug}/`,
    },
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const label = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen py-32 px-4 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-(--color-primary) font-bold tracking-widest mb-4 uppercase">
          Success Stories
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-linear-to-r from-(--color-primary) to-(--color-primary-light) bg-clip-text text-transparent uppercase tracking-wider">
          {label} Projects
        </h1>
        <div className="w-32 h-1.5 bg-(--color-primary) mx-auto mb-12 rounded-full"></div>

        <p className="text-xl md:text-2xl text-(--text-secondary) mb-12 leading-relaxed">
          Our portfolio for <strong>{label}</strong> is currently being curated
          to show you the best of our work. Stay tuned for detailed case studies
          and results.
        </p>

        <div className="p-10 rounded-2xl border border-(--border-color) bg-(--card-background) shadow-2xl">
          <p className="text-lg text-(--text-primary) mb-8">
            Want to see our previous work in <strong>{label}</strong>? We can
            share specific case studies and performance reports upon request.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-(--color-primary) text-white font-bold rounded-lg hover:rotate-1 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Request Case Studies
          </a>
        </div>
      </div>
    </div>
  );
}
