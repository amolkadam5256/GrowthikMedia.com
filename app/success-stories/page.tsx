import { Metadata } from 'next';
import PageHero from '@/components/PublicComponents/ui/PageHero';
import Link from 'next/link';
import { portfolioData } from '@/lib/data/portfolio';
import Image from 'next/image';
import { buildCollectionSchema, buildPortfolioItemListItems } from '@/lib/seo/collectionSchema';

export const metadata: Metadata = {
  title: 'Client Success Stories | Growthik Media',
  description: 'Read exactly how we took brands to their peak scaling milestones globally.',
  alternates: {
    canonical: 'https://www.growthikmedia.com/success-stories/',
  },
};

export default function SuccessStoriesPage() {
  // Let's grab some featured items to act as success stories
  const stories = portfolioData.filter((p) => p.featured || p.isClientWork).slice(0, 6);
  const schema = buildCollectionSchema({
    path: '/success-stories/',
    name: 'Client Success Stories | Growthik Media',
    description: 'A collection of featured client success stories and proof-led project outcomes from Growthik Media.',
    breadcrumbName: 'Success Stories',
    itemName: 'Featured Success Stories',
    items: buildPortfolioItemListItems(stories),
  });

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-black overflow-hidden relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <PageHero
          eyebrow="Success Stories"
          title="Milestones Delivered."
          description="Behind every robust website and explosive search campaign is a client story breaking the ceiling of our imagination."
          ctaText="Begin Your Story"
          ctaLink="/contact"
        />

        <section className="mb-12 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 md:p-8 shadow-sm">
            <p className="text-sm font-black uppercase tracking-widest text-red-600 mb-3">
              Proof Before Promises
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-4">
              How We Judge a Successful Growthik Media Project
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                A success story is not just a polished website screenshot or a
                campaign launch announcement. For Growthik Media, the work has
                to improve the parts of the business that matter: qualified
                enquiries, search visibility, page speed, conversion quality,
                brand clarity and the client&apos;s ability to scale without
                rebuilding the same foundation again.
              </p>
              <p>
                The projects below are selected because they show different
                types of progress: technical rebuilds that made marketing easier,
                performance campaigns that turned traffic into leads, and brand
                systems that helped teams communicate with more confidence. Each
                story links back to portfolio evidence so buyers can review the
                actual work instead of reading vague agency claims.
              </p>
            </div>
          </div>

          <div className="bg-black text-white rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-xl font-black mb-5">
              What We Look For
            </h2>
            <ul className="space-y-4 text-sm text-white/75 font-medium">
              <li>
                <strong className="text-white">Business fit:</strong> Does the
                page or campaign support a real buyer journey?
              </li>
              <li>
                <strong className="text-white">Measurable movement:</strong>{" "}
                Are leads, calls, rankings, engagement or sales easier to track?
              </li>
              <li>
                <strong className="text-white">Technical strength:</strong> Is
                the foundation fast, crawlable, responsive and easy to maintain?
              </li>
              <li>
                <strong className="text-white">Long-term leverage:</strong> Can
                the client reuse the system for future growth instead of
                starting from zero?
              </li>
            </ul>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map(project => (
            <Link key={project.id} href={`/portfolio/${project.slug}`} className="group block rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 shadow-sm hover:shadow-xl transition-all h-full">
               <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 bg-gray-100 dark:bg-gray-800">
                  <Image src={project.thumbnail} alt={project.title} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-500" />
               </div>
               <span className="text-red-600 font-bold text-xs uppercase tracking-wider">{project.industry}</span>
               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2 mb-3 leading-tight">{project.title}</h3>
               <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">{project.shortDesc}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
