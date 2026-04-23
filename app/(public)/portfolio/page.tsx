import Link from 'next/link';
import { Metadata } from 'next';
import { portfolioData } from '@/lib/data/portfolio';
import ClientPortfolioGrid from '@/components/PublicComponents/portfolio/ClientPortfolioGrid';
import { buildCollectionSchema, buildPortfolioItemListItems } from '@/lib/seo/collectionSchema';

export const metadata: Metadata = {
  title: 'Web Design & Digital Marketing Portfolio | Growthik Media - Pune',
  description:
    'See Growthik Media\'s portfolio of 50+ web design, SEO & digital marketing projects across Pune and India. Real results for real businesses. View our client work!',
  keywords:
    'digital marketing portfolio pune, web design portfolio pune, SEO case studies pune, Growthik Media projects, website development portfolio India, marketing agency work samples, web app portfolio pune, branding portfolio India',
  alternates: {
    canonical: 'https://www.growthikmedia.com/portfolio/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Web Design & Digital Marketing Portfolio | Growthik Media',
    description:
      'Explore 50+ real client projects - web design, SEO campaigns, digital marketing, and web apps built by Growthik Media for businesses in Pune and India.',
    url: 'https://www.growthikmedia.com/portfolio/',
    siteName: 'Growthik Media',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Growthik Media Portfolio - Web Design & Digital Marketing Projects Pune',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & Digital Marketing Portfolio | Growthik Media',
    description:
      'Explore 50+ real client projects - web design, SEO & digital marketing by Growthik Media, Pune.',
    images: ['/og-image.png'],
    creator: '@growthikmedia',
  },
};

const portfolioSchema = buildCollectionSchema({
  path: '/portfolio/',
  name: 'Growthik Media Portfolio - Web Design and Digital Marketing Projects',
  description:
    'Explore Growthik Media portfolio projects covering websites, SEO campaigns, branding, and digital marketing work for businesses in Pune and beyond.',
  breadcrumbName: 'Portfolio',
  itemName: 'Portfolio Projects',
  items: buildPortfolioItemListItems(portfolioData),
});

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-black overflow-hidden relative">
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-red-600/10 to-transparent pointer-events-none" />

      {/* Portfolio Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <section className="text-center md:text-left mb-16 flex flex-col md:flex-row items-end justify-between gap-8 pt-8">
          <div className="max-w-2xl">
            <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-3 block">
              Our Complete Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Web Design &amp; Digital Marketing <br className="hidden md:block" /> Portfolio - Real Results.
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Explore 50+ of our latest web design, digital marketing, SEO campaigns, and full-stack web applications - built for businesses across Pune, India, and Dubai.
            </p>
          </div>

          {/* Stats Bar Component */}
          <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-xl flex gap-8">
            <div className="text-center">
              <span className="block text-3xl font-black text-gray-900 dark:text-white">50+</span>
              <span className="text-xs text-gray-500 uppercase font-semibold">Projects Built</span>
            </div>
            <div className="w-px bg-gray-200 dark:bg-gray-800" />
            <div className="text-center">
              <span className="block text-3xl font-black text-gray-900 dark:text-white">10+</span>
              <span className="text-xs text-gray-500 uppercase font-semibold">Industries</span>
            </div>
            <div className="w-px bg-gray-200 dark:bg-gray-800" />
            <div className="text-center">
              <span className="block text-3xl font-black text-gray-900 dark:text-white">2</span>
              <span className="text-xs text-gray-500 uppercase font-semibold">Global Markets</span>
            </div> and  and
          </div>
        </section>

        {/* Client Side Grid with Filtering */}
        <ClientPortfolioGrid initialData={portfolioData} />

        {/* Internal CTA Links */}
        <section className="mt-20 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            Like what you see? Let&apos;s build your project next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="inline-block px-8 py-4 border-2 border-red-600 text-red-600 font-bold rounded-xl hover:bg-red-600 hover:text-white transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
