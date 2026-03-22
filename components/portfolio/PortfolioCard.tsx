import Link from 'next/link';
import Image from 'next/image';
import { PortfolioProject } from '@/lib/data/portfolio';

interface PortfolioCardProps {
  project: PortfolioProject;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
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
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-black/70 text-white backdrop-blur-sm">
            {project.industry}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {project.shortDesc}
        </p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map((tech, i) => (
              <span 
                key={i} 
                className="px-2.5 py-1 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 text-xs font-medium rounded-md border border-red-100 dark:border-red-900/20"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2.5 py-1 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-medium rounded-md border border-gray-100 dark:border-gray-700">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
