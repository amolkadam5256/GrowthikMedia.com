import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Target, Layers, Search, BarChart3, Calendar, ShieldCheck, Sparkles } from 'lucide-react';
import { portfolioData, getProjectBySlug, getRelatedProjects } from '@/lib/data/portfolio';
import { CONTACT_INFO, STRUCTURED_DATA_IDS } from '@/constants/contact';
import { LegacyPageContent, legacyPortfolioPages } from '@/lib/seo/legacyPages';

// Generate static routes for all portfolio entries
export async function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const legacyPage = legacyPortfolioPages[slug];
  if (!project && !legacyPage) return { title: 'Not Found | Growthik Media' };
  if (legacyPage) {
    return {
      title: legacyPage.title,
      description: legacyPage.description,
      alternates: {
        canonical: `https://www.growthikmedia.com/portfolio/${slug}/`,
      },
    };
  }
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
  const legacyPage = legacyPortfolioPages[slug];

  if (legacyPage) {
    return <LegacyPageContent page={legacyPage} pathPrefix="/portfolio" />;
  }

  if (!project) {
    notFound();
    return null;
  }

  // Schema for individual case study
  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${CONTACT_INFO.website}/portfolio/${slug}/#article`,
        headline: project.title,
        name: project.title,
        description: project.shortDesc,
        image: `${CONTACT_INFO.website}${project.thumbnail}`,
        author: {
          '@id': STRUCTURED_DATA_IDS.organization,
        },
        publisher: {
          '@id': STRUCTURED_DATA_IDS.organization,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${CONTACT_INFO.website}/portfolio/${slug}/`,
        },
        about: [
          { '@type': 'Thing', name: project.industry },
          { '@type': 'Thing', name: project.category.replace('-', ' ') },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${CONTACT_INFO.website}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Portfolio',
            item: `${CONTACT_INFO.website}/portfolio/`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Success Stories',
            item: `${CONTACT_INFO.website}/success-stories/`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: project.title,
            item: `${CONTACT_INFO.website}/portfolio/${slug}/`,
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${CONTACT_INFO.website}/portfolio/${slug}/#results`,
        name: `${project.title} Results`,
        numberOfItems: project.results?.length || 0,
        itemListElement: (project.results || []).map((result, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: `${result.metric}: ${result.value}`,
        })),
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
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap text-sm text-gray-500 mb-8 pt-6 gap-y-1">
          <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/portfolio" className="hover:text-red-600 transition-colors">Our Work</Link>
          <span className="mx-2">/</span>
          <Link href="/success-stories" className="hover:text-red-600 transition-colors">Success Stories</Link>
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
              {project.industry}
            </div>
            {project.location && (
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-semibold capitalize">
                {project.location}
              </div>
            )}
            {project.status === 'live' && (
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 rounded-lg text-sm font-bold border border-emerald-200 dark:border-emerald-800">
                Live Results
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

          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 mb-12 group">
            <Image
              src={project.thumbnail}
              alt={`${project.title} - Digital Marketing Project by Growthik Media`}
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 mb-16 shadow-sm">
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                {project.client === 'Confidential' ? 'Case Study' : 'Our Client'}
              </span>
              <div className="flex items-center gap-2.5">
                {project.clientLogo && (
                  <div className={`relative w-7 h-7 rounded-full overflow-hidden shrink-0 border border-gray-200 dark:border-gray-700 ${project.client === 'House of Bunkar' ? 'bg-white p-0.5' : 'bg-black'
                    }`}>
                    <Image
                      src={project.clientLogo}
                      alt={`${project.client} logo`}
                      width={28}
                      height={28}
                      className="object-contain w-full h-full"
                    />
                  </div>
                )}
                <span className="text-lg font-bold text-gray-900 dark:text-gray-100">{project.client}</span>
              </div>
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

            {project.caseStudyDetail && (
              <div className="mt-14 space-y-12">
                {/* Clinical Authority & Core Programs */}
                {project.caseStudyDetail.doctorPresence && (
                  <div className="p-6 bg-gradient-to-r from-red-600/10 via-amber-600/10 to-transparent border border-red-500/20 rounded-xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 block mb-1">
                      Professional Clinical Leadership
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.caseStudyDetail.doctorPresence}
                    </h3>
                  </div>
                )}

                {/* Business Objectives */}
                {project.caseStudyDetail.businessObjectives && (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-6 h-6 text-red-600" />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Key Business Objectives
                      </h3>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {project.caseStudyDetail.businessObjectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-xs">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 leading-relaxed">{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Campaign Assessment Table */}
                {project.caseStudyDetail.campaignAssessment && (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <BarChart3 className="w-6 h-6 text-red-600" />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Campaign Diagnostic &amp; Execution Assessment
                      </h3>
                    </div>
                    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 shadow-xs">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-gray-100 dark:bg-gray-800 text-xs uppercase font-bold text-gray-700 dark:text-gray-300 tracking-wider">
                          <tr>
                            <th className="py-3 px-4">Area</th>
                            <th className="py-3 px-4">Observation</th>
                            <th className="py-3 px-4">Required Improvement</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-900">
                          {project.caseStudyDetail.campaignAssessment.map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                              <td className="py-3 px-4 font-bold text-gray-900 dark:text-white whitespace-nowrap">{row.area}</td>
                              <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{row.observation}</td>
                              <td className="py-3 px-4 font-medium text-red-600 dark:text-red-400">{row.improvement}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Creative Assessment */}
                {project.caseStudyDetail.creatives && (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Layers className="w-6 h-6 text-red-600" />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Advertising Creative Framework
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {project.caseStudyDetail.creatives.map((c, i) => (
                        <div key={i} className="p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xs flex flex-col">
                          <span className="text-xs font-black uppercase tracking-wider text-red-600 mb-1">{c.code}</span>
                          <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">{c.name}</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow">{c.description}</p>
                          <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Recommended Deployment</span>
                            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">{c.recommendedUse}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Meta Advertising Strategy */}
                {project.caseStudyDetail.metaStrategy && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Proposed Meta Advertising Strategy
                    </h3>
                    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 shadow-xs">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-gray-100 dark:bg-gray-800 text-xs uppercase font-bold text-gray-700 dark:text-gray-300 tracking-wider">
                          <tr>
                            <th className="py-3 px-4">Campaign</th>
                            <th className="py-3 px-4">Objective</th>
                            <th className="py-3 px-4">Audience</th>
                            <th className="py-3 px-4">Conversion Goal</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-900">
                          {project.caseStudyDetail.metaStrategy.map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                              <td className="py-3 px-4 font-bold text-gray-900 dark:text-white">{row.campaign}</td>
                              <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{row.objective}</td>
                              <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{row.audience}</td>
                              <td className="py-3 px-4 font-semibold text-red-600 dark:text-red-400">{row.conversionGoal}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Google Ads Strategy */}
                {project.caseStudyDetail.googleStrategy && (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Search className="w-6 h-6 text-red-600" />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Google Search Intent Architecture
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {project.caseStudyDetail.googleStrategy.map((item, i) => (
                        <div key={i} className="p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xs">
                          <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Integrated Lead Generation Funnel */}
                {project.caseStudyDetail.funnelStages && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Integrated Lead-Generation Funnel
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                      {project.caseStudyDetail.funnelStages.map((stage, i) => (
                        <div key={i} className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xs">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-black text-red-600 px-2 py-0.5 rounded bg-red-50 dark:bg-red-900/20">
                              STEP {stage.step}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1.5">{stage.title}</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{stage.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* KPI Measurement Framework */}
                {project.caseStudyDetail.kpis && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Performance Measurement Framework (Reporting KPIs)
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {project.caseStudyDetail.kpis.map((k, i) => (
                        <div key={i} className="p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg">
                          <span className="text-xs font-bold text-red-600 uppercase tracking-wide block mb-1">{k.kpi}</span>
                          <span className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed block">{k.purpose}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Implementation Roadmap */}
                {project.caseStudyDetail.roadmap && (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="w-6 h-6 text-red-600" />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Recommended Implementation Roadmap
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.caseStudyDetail.roadmap.map((step, i) => (
                        <div key={i} className="p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xs">
                          <span className="text-xs font-black uppercase tracking-wider text-red-600 block mb-1">{step.week}</span>
                          <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pillars Approach */}
                {project.caseStudyDetail.pillars && (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles className="w-6 h-6 text-amber-500" />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Our Approach: Complete Digital Marketing Management
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.caseStudyDetail.pillars.map((pillar, i) => (
                        <div key={i} className="p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-xs">
                          <span className="text-xs font-black text-amber-500 uppercase tracking-widest block mb-1">
                            {pillar.number}
                          </span>
                          <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2.5">
                            {pillar.title}
                          </h4>
                          <ul className="space-y-1.5">
                            {pillar.points.map((pt, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                <span className="text-amber-500 font-bold">•</span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Campaign Highlight (e.g. PULA Bazaar) */}
                {project.caseStudyDetail.campaignHighlight && (
                  <div className="p-6 md:p-8 bg-gradient-to-br from-amber-500/10 via-red-500/5 to-transparent border border-amber-500/20 rounded-2xl shadow-xs">
                    <span className="text-xs font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 block mb-1">
                      Featured Performance Highlight
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-2">
                      {project.caseStudyDetail.campaignHighlight.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {project.caseStudyDetail.campaignHighlight.subtitle}
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mb-6">
                      {project.caseStudyDetail.campaignHighlight.stats.map((s, i) => (
                        <div key={i} className="p-4 bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 rounded-xl text-center">
                          <span className="text-xl font-black text-amber-600 dark:text-amber-400 block mb-1">{s.value}</span>
                          <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">{s.label}</span>
                        </div>
                      ))}
                    </div>
                    {project.caseStudyDetail.campaignHighlight.notes && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 italic leading-relaxed border-t border-amber-500/10 pt-4">
                        {project.caseStudyDetail.campaignHighlight.notes}
                      </p>
                    )}
                  </div>
                )}

                {/* Strategic Case Study Conclusion */}
                {project.caseStudyDetail.conclusion && (
                  <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black text-white border border-gray-800 shadow-xl">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 mb-3">
                      <ShieldCheck className="w-4 h-4" />
                      Strategic Case Study Conclusion
                    </div>
                    <div className="space-y-3 text-sm text-gray-300 leading-relaxed whitespace-pre-line mb-6">
                      {project.caseStudyDetail.conclusion}
                    </div>
                    {project.caseStudyDetail.statusNote && (
                      <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
                        <span>{project.caseStudyDetail.statusNote}</span>
                        <span className="font-bold text-red-400">2025–2026 Strategy</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          <aside className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-8 h-fit sticky top-24 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Tech &amp; Tools</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-bold rounded-md uppercase tracking-tight">
                  {tech}
                </span>
              ))}
            </div>

            <hr className="border-gray-100 dark:border-gray-800 mb-8" />

            <Link
              href="/success-stories"
              className="block text-center w-full px-4 py-3 mb-4 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold rounded-lg transition-all"
            >
              View All Success Stories
            </Link>

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
                <p className="text-gray-600 dark:text-gray-400">Hand-picked case studies from our portfolio.</p>
              </div>
              <Link href="/success-stories" className="text-red-600 font-bold hover:underline hidden sm:block">
                View All Success Stories &rarr;
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
