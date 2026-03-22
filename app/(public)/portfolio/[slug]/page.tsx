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
    title: `${project.title} | Growthik Media Portfolio`,
    description: project.shortDesc,
  };
}

export default async function PortfolioProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find related active projects
  const relatedProjects = getRelatedProjects(slug, 3);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-black">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-8 pt-6">
          <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/portfolio" className="hover:text-red-600 transition-colors">Our Work</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-gray-300 capitalize">{project.category.replace('-', ' ')}</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-gray-300 font-medium truncate">{project.title}</span>
        </div>

        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mb-8 leading-relaxed">
            {project.shortDesc}
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
                🟢 Live / Available
              </div>
            )}
            
            <div className="flex-1" />
            
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-md transition-all flex items-center gap-2">
                  View Live Site
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-gray-900 hover:bg-black dark:bg-white dark:hover:bg-gray-100 dark:text-black text-white font-bold rounded-lg shadow-md transition-all flex items-center gap-2">
                  View GitHub
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                </a>
              )}
            </div>
          </div>

          <div className="relative w-full aspect-21/9 rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 mb-12">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 mb-16 shadow-sm">
            <div>
               <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Client</span>
               <span className="text-lg font-bold text-gray-900 dark:text-gray-100">{project.client}</span>
            </div>
            <div>
               <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Industry</span>
               <span className="text-lg font-bold text-gray-900 dark:text-gray-100">{project.industry}</span>
            </div>
            <div>
               <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Location</span>
               <span className="text-lg font-bold text-gray-900 dark:text-gray-100 capitalize">{project.location}</span>
            </div>
            <div>
               <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Completed</span>
               <span className="text-lg font-bold text-gray-900 dark:text-gray-100">{project.completedDate}</span>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Description */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About The Project</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 mb-12">
              <p className="whitespace-pre-line">{project.fullDesc}</p>
            </div>

            {project.challenge && project.solution && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/10 p-6 rounded-r-xl">
                   <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">The Challenge</h3>
                   <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{project.challenge}</p>
                </div>
                <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/10 p-6 rounded-r-xl">
                   <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Our Solution</h3>
                   <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                </div>
              </div>
            )}
            
            {project.results && project.results.length > 0 && (
              <div className="mt-12 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Campaign Results</h3>
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

          {/* Sidebar */}
          <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-8 h-fit sticky top-24 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider">Tech Stack Used</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-md">
                  {tech}
                </span>
              ))}
            </div>
            
            <hr className="border-gray-100 dark:border-gray-800 mb-8" />
            
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Need something similar?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
              Our team specializes in building robust solutions like this. Let's discuss your requirements.
            </p>
            <Link href="/contact" className="block text-center w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors">
              Start Your Project
            </Link>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="mt-24 pt-16 border-t border-gray-200 dark:border-gray-800">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Related Projects</h2>
                <p className="text-gray-600 dark:text-gray-400">Explore more from our {project.category.replace('-', ' ')} portfolio.</p>
              </div>
              <Link href="/portfolio" className="text-red-600 font-bold hover:underline hidden sm:block">
                View All Projects &rarr;
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relProject) => (
                <Link key={relProject.id} href={`/portfolio/${relProject.slug}`} className="group block">
                  <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 bg-gray-100 dark:bg-gray-800">
                     <Image src={relProject.thumbnail} alt={relProject.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors">{relProject.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mt-1">{relProject.shortDesc}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
