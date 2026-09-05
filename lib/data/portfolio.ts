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
    id: 'hydr-01',
    slug: 'skincare-serum-facewash-ecommerce-campaign',
    title: 'Skincare Serum & Facewash Ecommerce Campaign',
    client: 'Confidential',
    industry: 'Ecommerce Skincare',
    shortDesc: 'Search visibility and conversion measurement for an ecommerce skincare brand offering serum and facewash products.',
    fullDesc: 'A skincare ecommerce brand needed a clearer route from marketing activity to qualified business action for serum and facewash products. The work focused on Google Ads, SEO, search-intent research, conversion-focused messaging and reliable measurement so future optimization decisions could be based on cleaner campaign and analytics data.',
    challenge: 'Create a clearer route from marketing activity to qualified business action while keeping the measurement framework useful for future optimization.',
    solution: 'We combined channel-specific setup, search-intent research, conversion-focused messaging, landing-page alignment and tracking review across GA4, GTM and relevant campaign tools.',
    category: 'digital-marketing',
    location: 'india',
    techStack: ['Google Ads', 'SEO', 'GA4', 'GTM', 'Conversion Tracking', 'Ecommerce Marketing'],
    thumbnail: '/images/portfolio/skincare-serum-facewash-ecommerce.jpg',
    featured: true,
    isClientWork: true,
    isCaseStudy: true,
    status: 'completed',
    completedDate: '2026',
    results: [
      { metric: 'Primary Focus', value: 'Google Ads + SEO' },
      { metric: 'Product Category', value: 'Serum & Facewash' },
      { metric: 'Measurement Setup', value: 'GA4 + GTM' },
      { metric: 'Campaign Learning', value: 'Ongoing Iteration' },
    ],
  },
  {
    id: 'mango-01',
    slug: 'mango-pulp-whatsapp-lead-generation-campaign',
    title: 'Mango Pulp WhatsApp Lead Generation Campaign',
    client: 'Confidential',
    industry: 'Food & Beverage Ecommerce',
    shortDesc: 'A Meta Ads and WhatsApp lead generation campaign for mango pulp and cashew product enquiries across India.',
    fullDesc: 'A mango pulp product campaign needed to reach wholesale buyers, distributors, juice centres, ice cream manufacturers, bakeries, hotels and retail consumers across India without relying on a large sales team or established distribution network. The campaign used Meta Ads message campaigns with WhatsApp-first lead capture, manual CRM tagging and structured follow-up so every enquiry could be classified by buyer type, location, product interest, quantity intent and lead temperature.',
    challenge: 'Build awareness for a seasonal food product, qualify genuine B2B and B2C buyers at scale, and track every WhatsApp enquiry through a usable CRM process.',
    solution: 'We used Meta message campaigns with WhatsApp CTAs, broad food and business-owner audiences, product-specific creative, manual lead segmentation, sample-order follow-up and pan-India geographic demand tracking.',
    category: 'digital-marketing',
    location: 'india',
    techStack: ['Meta Ads', 'WhatsApp CTA', 'CRM Tracking', 'Lead Generation', 'B2B Marketing', 'B2C Marketing'],
    thumbnail: '/images/portfolio/mango-pulp-whatsapp-campaign.jpg',
    featured: true,
    isClientWork: true,
    isCaseStudy: true,
    status: 'completed',
    completedDate: 'June-August 2026',
    results: [
      { metric: 'Leads Generated', value: '1,714' },
      { metric: 'Meta Ads Spend', value: 'INR 22,338' },
      { metric: 'Average CPL', value: 'Approx. INR 13' },
      { metric: 'States Reached', value: '20+' },
    ],
  },
]

// ---------------------------------------------------------
// HELPER FUNCTIONS
// ---------------------------------------------------------

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
  const sameCategory = portfolioData.filter(p => p.slug !== slug && p.category === project.category)
  if (sameCategory.length >= count) {
    return sameCategory.slice(0, count)
  }
  const otherProjects = portfolioData.filter(p => p.slug !== slug && p.category !== project.category)
  return [...sameCategory, ...otherProjects].slice(0, count)
}

export const portfolioStats = {
  total: portfolioData.length,
  clientProjects: portfolioData.filter(p => p.isClientWork).length,
  industries: [...new Set(portfolioData.map(p => p.industry))].length,
  dubaiProjects: portfolioData.filter(p => p.location === 'dubai').length,
  puneProjects: portfolioData.filter(p => p.location === 'pune').length,
}
