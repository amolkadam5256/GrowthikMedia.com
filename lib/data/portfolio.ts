export type ProjectCategory =
  | 'website-dev'
  | 'digital-marketing'
  | 'branding'
  | 'full-stack'
  | 'real-estate'
  | 'education'
  | 'travel'

export type ProjectLocation = 'pune' | 'dubai' | 'india' | 'global'

export type ProjectStatus = 'live' | 'completed' | 'in-progress'

export type PortfolioProject = {
  id: string
  slug: string
  title: string
  client: string
  industry: string
  shortDesc: string
  fullDesc: string
  challenge?: string
  solution?: string
  category: ProjectCategory
  location: ProjectLocation
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  thumbnail: string
  featured: boolean
  isClientWork: boolean
  isCaseStudy: boolean
  status: ProjectStatus
  completedDate: string
  results?: { metric: string; value: string }[]
  testimonial?: {
    name: string
    role: string
    company: string
    text: string
    rating: number
  }
}

export const portfolioData: PortfolioProject[] = [
  {
    id: 'demo-01',
    slug: 'demo-project',
    title: 'Demo Project - Showcase of Excellence',
    client: 'Demo Client',
    industry: 'Technology & Innovation',
    shortDesc: "A demonstration of our high-performance web development and digital strategy capabilities.",
    fullDesc: "This is a demo project designed to showcase the features and aesthetics of our portfolio. It includes detailed descriptions, results, and a comprehensive tech stack to illustrate how we present our professional work to potential clients.",
    challenge: "Demonstrating complex features in a clear, concise, and visually appealing manner for a wide audience.",
    solution: "We implemented a minimalist design focused on key performance metrics and clear value propositions, ensuring the most important information is easily accessible.",
    category: 'website-dev',
    location: 'global',
    techStack: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    thumbnail: '/images/portfolio/growthikmedia-official-website.jpg',
    featured: true,
    isClientWork: true,
    isCaseStudy: true,
    status: 'completed',
    completedDate: 'April 2026',
    results: [
      { metric: 'User Engagement', value: '45% Increase' },
      { metric: 'Load Speed', value: '< 1.5s' },
      { metric: 'Mobile Performance', value: '99/100' },
    ],
  },
]

// ─────────────────────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────────────────────

export function getProjectBySlug(slug: string) {
  return portfolioData.find(p => p.slug === slug)
}
export function getProjectsByCategory(category: ProjectCategory) {
  return portfolioData.filter(p => p.category === category)
}
export function getFeaturedProjects() {
  return portfolioData.filter(p => p.featured)
}
export function getCaseStudies() {
  return portfolioData.filter(p => p.isCaseStudy)
}
export function getClientProjects() {
  return portfolioData.filter(p => p.isClientWork)
}
export function getProjectsByLocation(location: ProjectLocation) {
  return portfolioData.filter(p => p.location === location)
}
export function getRelatedProjects(slug: string, count = 3) {
  const project = getProjectBySlug(slug)
  if (!project) return []
  return portfolioData
    .filter(p => p.slug !== slug && p.category === project.category)
    .slice(0, count)
}

export const portfolioStats = {
  total: portfolioData.length,
  clientProjects: portfolioData.filter(p => p.isClientWork).length,
  industries: [...new Set(portfolioData.map(p => p.industry))].length,
  dubaiProjects: portfolioData.filter(p => p.location === 'dubai').length,
  puneProjects: portfolioData.filter(p => p.location === 'pune').length,
}
