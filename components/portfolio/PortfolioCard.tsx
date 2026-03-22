import Link from 'next/link';
import Image from 'next/image';
import { PortfolioProject } from '@/lib/data/portfolio';

// Badge colours mapping as requested
const categoryColours: Record<string, string> = {
  'website-dev': 'bg-blue-600',
  'digital-marketing': 'bg-orange-600',
  'full-stack': 'bg-purple-600',
  'real-estate': 'bg-green-600',
  'education': 'bg-teal-600',
  'branding': 'bg-pink-600',
  'travel': 'bg-amber-600'
};

interface PortfolioCardProps {
  project: PortfolioProject;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const badgeColor = categoryColours[project.category] || 'bg-gray-800';

  return (
    <Link 
      href={`/portfolio/${project.slug}`}
      className="group flex flex-col rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 z-10">
          <span className={`px-3 py-1 text-[10px] font-black tracking-widest uppercase rounded-md text-white shadow-sm ${badgeColor}`}>
            {project.category.replace('-', ' ')}
          </span>
        </div>
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-black/70 text-white backdrop-blur-sm shadow-sm">
            {project.industry}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{project.client}</span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 leading-tight group-hover:text-red-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-5 line-clamp-3">
          {project.shortDesc}
        </p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech, i) => (
              <span 
                key={i} 
                className="px-2.5 py-1 bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 hover:bg-gray-100 text-xs font-medium rounded-md border border-gray-200 dark:border-gray-700 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-1 text-gray-400 text-xs font-medium content-center">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
