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
    : (settings.githubUrl || 'https://github.com/ansh-sahu-tech');

  const liveHref = project.liveUrl && project.liveUrl !== '#'
    ? project.liveUrl
    : (project.githubUrl || githubHref);

  return (
    <article className="group bg-[#FFFFFF] border-2 border-[#CCD5AE] rounded-2xl overflow-hidden shadow-sm hover:shadow-card-hover hover:border-[#D4A373] transition-all duration-300 ease-out flex flex-col h-full hover:-translate-y-1.5">
      {/* Real Project Image with Subtle Zoom on Hover */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#FAEDCD] border-b-2 border-[#CCD5AE]">
        <img
          src={project.imageUrl}
          alt={`${project.title} - ${project.category} Project by Ansh Sahu`}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            const target = e.currentTarget;
            if (project.id === 'proj-1' || project.slug === 'ai-driver-awareness-system') {
              target.src = '/ai-driver-awareness.png';
            } else if (project.id === 'proj-2' || project.slug === 'sacha-sauda') {
              target.src = '/sacha-sauda.png';
            } else if (project.id === 'proj-3' || project.slug === 'sanskar-katha' || project.slug === 'student-performance-prediction') {
              target.src = '/sanskar-katha.jpg';
            } else if (project.id === 'proj-4' || project.slug === 'swagatam-vijay-bakers') {
              target.src = '/bakery-project.png';
            }
          }}
          className={`w-full h-full object-cover ${
            project.imagePosition === 'top' ? 'object-top' : 'object-center'
          } transition-transform duration-500 ease-out group-hover:scale-[1.04]`}
        />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-[#FFFFFF]/95 text-[#24211D] border border-[#CCD5AE] shadow-sm backdrop-blur-sm transition-transform duration-200 group-hover:scale-105 inline-block">
            {project.category}
          </span>
        </div>

        {/* Quick Details Trigger Button */}
        <button
          onClick={() => onOpenDetails(project)}
          className="absolute top-3 right-3 p-1.5 rounded-lg bg-[#FFFFFF]/95 text-[#575249] hover:text-[#24211D] hover:bg-[#E9EDC9] border border-[#CCD5AE] shadow-sm backdrop-blur-sm opacity-90 hover:opacity-100 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#D4A373] focus-visible:outline-none transition-all"
          title="View Project Overview"
          aria-label={`View details for ${project.title}`}
        >
          <Info className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-[#24211D] tracking-tight group-hover:text-[#D4A373] transition-colors duration-200">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#575249] leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Technology Stack Tags */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#E9EDC9] text-[#24211D] border border-[#CCD5AE] transition-colors duration-150"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Actions: Live Demo + GitHub */}
        <div className="pt-4 border-t border-[#CCD5AE]/60 grid grid-cols-2 gap-2 mt-auto">
          {liveHref ? (
            <a
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-2 text-[11px] sm:text-xs font-semibold text-[#FFFFFF] bg-[#24211D] hover:bg-[#D4A373] rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-sm min-h-[40px]"
            >
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              <span>Live Demo</span>
            </a>
          ) : (
            <button
              onClick={() => onOpenDetails(project)}
              className="group/btn inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-2 text-[11px] sm:text-xs font-semibold text-[#FFFFFF] bg-[#24211D] hover:bg-[#D4A373] rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-sm min-h-[40px]"
            >
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              <span>Overview</span>
            </button>
          )}

          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-2 text-[11px] sm:text-xs font-semibold text-[#24211D] bg-[#FFFFFF] hover:bg-[#E9EDC9] border border-[#CCD5AE] hover:border-[#D4A373] rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-sm min-h-[40px]"
          >
            <GithubIcon size={14} className="text-[#24211D] group-hover/btn:text-[#D4A373] transition-transform duration-200 group-hover/btn:scale-110 shrink-0" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </article>
  );
};
