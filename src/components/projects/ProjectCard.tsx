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
    <article className="group bg-[#121923] border border-[#263342] rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-[#22D3EE] transition-all duration-300 ease-out flex flex-col h-full hover:-translate-y-1.5">
      {/* Real Project Image with Subtle Zoom on Hover */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#0B0F14] border-b border-[#263342]">
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
            } else if (project.id === 'proj-3' || project.slug === 'student-performance-prediction') {
              target.src = '/student-performance-prediction.png';
            } else if (project.id === 'proj-4' || project.slug === 'swagatam-vijay-bakers') {
              target.src = '/bakery-project.png';
            } else if (project.id === 'proj-5' || project.slug === 'developer-portfolio-2026') {
              target.src = '/ansh-profile.jpg';
            }
          }}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />

        {/* Subtle hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Category Pill Tag & 8K Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-[#121923]/95 text-[#F8FAFC] border border-[#263342] shadow-sm backdrop-blur-sm transition-transform duration-200 group-hover:scale-105 inline-block">
            {project.category}
          </span>
          <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-[#0B0F14]/90 text-[#22D3EE] border border-[#22D3EE]/40 shadow-sm backdrop-blur-sm tracking-wider uppercase">
            8K UHD
          </span>
        </div>

        {/* Quick Details Trigger Button */}
        <button
          onClick={() => onOpenDetails(project)}
          className="absolute top-3 right-3 p-1.5 rounded-md bg-[#121923]/95 text-[#94A3B8] hover:text-[#22D3EE] hover:bg-[#1A2430] border border-[#263342] shadow-sm backdrop-blur-sm opacity-90 hover:opacity-100 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:outline-none transition-all"
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
            className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-[#121923]/95 text-[#F8FAFC] border border-[#263342] shadow-md backdrop-blur-sm flex items-center gap-1.5 hover:text-[#22D3EE] hover:bg-[#1A2430] active:scale-95 focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:outline-none transition-all"
            aria-label={`Quick overview for ${project.title}`}
          >
            <Info className="w-3 h-3 text-[#22D3EE]" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-[#F8FAFC] tracking-tight group-hover:text-[#22D3EE] transition-colors duration-200">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Technology Stack Tags */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#1A2430] text-[#94A3B8] border border-[#263342] transition-colors duration-150 hover:border-[#22D3EE] hover:text-[#22D3EE]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Actions: Live Demo + GitHub */}
        <div className="pt-4 border-t border-[#263342] grid grid-cols-2 gap-2 mt-auto">
          {liveHref ? (
            <a
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#F8FAFC] bg-[#1A2430] hover:bg-[#263342] hover:text-[#22D3EE] border border-[#263342] rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:outline-none"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#22D3EE] transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              <span>Live Demo</span>
            </a>
          ) : (
            <button
              onClick={() => onOpenDetails(project)}
              className="group/btn inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#F8FAFC] bg-[#1A2430] hover:bg-[#263342] hover:text-[#22D3EE] border border-[#263342] rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:outline-none"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#22D3EE] transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              <span>Overview</span>
            </button>
          )}

          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#F8FAFC] bg-[#1A2430] hover:bg-[#263342] hover:text-[#22D3EE] border border-[#263342] rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:outline-none"
          >
            <GithubIcon size={14} className="text-[#F8FAFC] group-hover/btn:text-[#22D3EE] transition-transform duration-200 group-hover/btn:scale-110" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </article>
  );
};
