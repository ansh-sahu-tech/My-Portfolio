import React from 'react';
import { ExternalLink, Info } from 'lucide-react';
import type { Project } from '../../types';
import { useData } from '../../context/DataContext';
import { GithubIcon } from '../common/SocialIcons';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const { settings } = useData();

  const githubHref = project.githubUrl && project.githubUrl !== 'YOUR_GITHUB_URL'
    ? project.githubUrl
    : (settings.githubUrl || 'https://github.com/Anshsahu275-max');

  const liveHref = project.liveUrl && project.liveUrl !== '#'
    ? project.liveUrl
    : (project.githubUrl || githubHref);

  return (
    <article className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg dark:hover:shadow-slate-950/40 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 ease-out flex flex-col h-full hover:-translate-y-1.5">
      {/* Real Project Image with Subtle Zoom on Hover */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <img
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            const target = e.currentTarget;
            if (project.id === 'proj-1' || project.slug === 'ai-driver-awareness-system') {
              target.src = '/ai-driver-awareness.png';
            } else if (project.id === 'proj-2' || project.slug === 'sacha-sauda') {
              target.src = '/sacha-sauda.png';
            } else if (project.id === 'proj-3' || project.slug === 'student-performance-prediction') {
              target.src = '/student-performance-prediction.png';
            } else if (project.id === 'proj-4' || project.slug === 'swagatam-vijay-bakers') {
              target.src = '/bakery-project.png';
            }
          }}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />

        {/* Subtle hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Category Pill Tag & 8K Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 shadow-sm backdrop-blur-sm transition-transform duration-200 group-hover:scale-105 inline-block">
            {project.category}
          </span>
          <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-slate-950/80 text-cyan-300 border border-cyan-500/40 shadow-sm backdrop-blur-sm tracking-wider uppercase">
            8K UHD
          </span>
        </div>

        {/* Quick Details Trigger Button */}
        <button
          onClick={() => onOpenDetails(project)}
          className="absolute top-3 right-3 p-1.5 rounded-md bg-white/95 dark:bg-slate-900/95 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200/80 dark:border-slate-700/80 shadow-sm backdrop-blur-sm opacity-90 hover:opacity-100 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none transition-all"
          title="View Project Overview"
          aria-label={`View details for ${project.title}`}
        >
          <Info className="w-3.5 h-3.5" />
        </button>

        {/* Hover Reveal: Quick View Action Pill */}
        <div className="absolute bottom-3 right-3 opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out">
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 shadow-md backdrop-blur-sm flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none transition-all"
            aria-label={`Quick overview for ${project.title}`}
          >
            <Info className="w-3 h-3 text-blue-600 dark:text-blue-400" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Technology Stack Tags */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 transition-colors duration-150 hover:border-slate-400 dark:hover:border-slate-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Actions: Live Demo + GitHub */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2 mt-auto">
          {liveHref ? (
            <a
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              <span>Live Demo</span>
            </a>
          ) : (
            <button
              onClick={() => onOpenDetails(project)}
              className="group/btn inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              <span>Overview</span>
            </button>
          )}

          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
          >
            <GithubIcon size={14} className="text-slate-800 dark:text-slate-200 transition-transform duration-200 group-hover/btn:scale-110" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </article>
  );
};
