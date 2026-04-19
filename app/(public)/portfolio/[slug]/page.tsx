import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioData, getProjectBySlug, getRelatedProjects } from '@/lib/data/portfolio';

// Generate static routes for all portfolio entries
export async function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Not Found | Growthik Media' };

  return {
    title: `${project.title} - Case Study | Growthik Media`,
    description: project.shortDesc,
    alternates: {
      canonical: `https://www.growthikmedia.com/portfolio/${slug}/`,
    },
    openGraph: {
      title: `${project.title} | Growthik Media Portfolio`,
      description: project.shortDesc,
      images: [{ url: project.thumbnail }],
    }
  };
}

export default async function PortfolioProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Schema for individual case study
  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.shortDesc,
        image: `https://www.growthikmedia.com${project.thumbnail}`,
        author: {
          '@type': 'Organization',
          name: 'Growthik Media',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Growthik Media',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.growthikmedia.com/logo.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://www.growthikmedia.com/portfolio/${slug}/`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.growthikmedia.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Portfolio',
            item: 'https://www.growthikmedia.com/portfolio/',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: `https://www.growthikmedia.com/portfolio/${slug}/`,
          },
        ],
      },
    ],
  };

  // Find related active projects
  const relatedProjects = getRelatedProjects(slug, 3);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-black">
      {/* Case Study Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center text-sm text-gray-500 mb-8 pt-6">
          <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/portfolio" className="hover:text-red-600 transition-colors">Our Work</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-gray-300 capitalize">{project.category.replace('-', ' ')}</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-gray-300 font-medium truncate">{project.title}</span>
        </nav>

        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mb-8 leading-relaxed italic">
            &quot;{project.shortDesc}&quot;
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-semibold">
              🏢 {project.industry}
            </div>
            {project.location && (
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-semibold capitalize">
                📍 {project.location}
              </div>
            )}
            {project.status === 'live' && (
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 rounded-lg text-sm font-bold border border-emerald-200 dark:border-emerald-800">
                🟢 Live Results
              </div>
            )}

            <div className="flex-1" />

            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-md transition-all flex items-center gap-2">
                  View Project Site
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              )}
            </div>
          </div>

          <div className="relative w-full aspect-21/9 rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 mb-12 group">
            <Image
              src={project.thumbnail}
              alt={`${project.title} - Digital Marketing Project by Growthik Media`}
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 mb-16 shadow-sm">
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Our Client</span>
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100">{project.client}</span>
            </div>
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Focus Area</span>
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100">{project.industry}</span>
            </div>
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Market</span>
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100 capitalize">{project.location}</span>
            </div>
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Project Delivery</span>
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100">{project.completedDate}</span>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Story Behind The Work</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 mb-12">
              <p className="whitespace-pre-line leading-relaxed">{project.fullDesc}</p>
            </div>

            {project.challenge && project.solution && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/10 p-6 rounded-r-xl">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 tracking-tight">The Challenge</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium">{project.challenge}</p>
                </div>
                <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/10 p-6 rounded-r-xl">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 tracking-tight">How We Solved It</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium">{project.solution}</p>
                </div>
              </div>
            )}

            {project.results && project.results.length > 0 && (
              <div className="mt-12 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Real-World Growth</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {project.results.map((res, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-black text-red-600 mb-2">{res.value}</div>
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">{res.metric}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-8 h-fit sticky top-24 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Tech & Tools</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-bold rounded-md uppercase tracking-tight">
                  {tech}
                </span>
              ))}
            </div>

            <hr className="border-gray-100 dark:border-gray-800 mb-8" />

            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Wanna see similar results?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
              We don&apos;t just build websites; we build marketing engines that actually move the needle for Pune businesses. Let&apos;s chat about your next project.
            </p>
            <Link href="/contact" className="block text-center w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-lg hover:shadow-red-600/20 transition-all">
              Book a Strategy Call
            </Link>
          </aside>
        </div>

        {relatedProjects.length > 0 && (
          <section className="mt-24 pt-16 border-t border-gray-200 dark:border-gray-800">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">More Work Like This</h2>
                <p className="text-gray-600 dark:text-gray-400">Hand-picked case studies from our {project.category.replace('-', ' ')} portfolio.</p>
              </div>
              <Link href="/portfolio" className="text-red-600 font-bold hover:underline hidden sm:block">
                View Full Portfolio &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relProject) => (
                <Link key={relProject.id} href={`/portfolio/${relProject.slug}`} className="group block">
                  <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-800 shadow-sm">
                    <Image src={relProject.thumbnail} alt={relProject.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors uppercase tracking-tight">{relProject.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mt-1 italic">&quot;{relProject.shortDesc}&quot;</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
