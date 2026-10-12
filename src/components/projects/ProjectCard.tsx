import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import type { Project } from '../../types';
import { useData } from '../../context/DataContext';
import { GithubIcon } from '../common/SocialIcons';

export interface ProjectCardProps {
  project: Project;
  onOpenDetails?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const { settings } = useData();

  const githubHref = project.githubUrl && project.githubUrl !== 'YOUR_GITHUB_URL'
    ? project.githubUrl
    : (settings.githubUrl || 'https://github.com/ansh-sahu-tech');

  const liveHref = project.liveUrl && project.liveUrl !== '#'
    ? project.liveUrl
    : undefined;

  const yearText = project.year || (project.createdAt ? new Date(project.createdAt).getFullYear().toString() : '');
  const displayTitle = yearText && !project.title.includes(yearText)
    ? `${project.title} (${yearText})`
    : project.title;

  return (
    <article className="group bg-[#FFFFFF] border-2 border-[#CCD5AE] hover:border-[#D4A373] rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-card-hover transition-all duration-300 ease-out flex flex-col h-full overflow-hidden hover:-translate-y-1">
      {/* 1. Project Image Preview */}
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
          } transition-transform duration-500 ease-out group-hover:scale-105`}
        />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-[#FFFFFF]/95 text-[#24211D] border border-[#CCD5AE] shadow-sm backdrop-blur-sm inline-block">
            {project.category}
          </span>
        </div>

        {/* Subtle Live Badge (Top-Right) */}
        {liveHref && (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#24211D]/90 text-[#FEFAE0] border border-white/20 shadow-sm backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live</span>
            </span>
          </div>
        )}
      </div>

      {/* 2. Card Content */}
      <div className="p-5 sm:p-7 lg:p-8 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#24211D] group-hover:text-[#D4A373] transition-colors duration-200">
            {displayTitle}
          </h3>

          <p className="text-xs sm:text-sm text-[#575249] leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 sm:py-1 rounded-lg text-[11px] sm:text-xs font-semibold bg-[#E9EDC9] text-[#24211D] border border-[#CCD5AE] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 3. Action Buttons */}
        <div className="pt-4 border-t border-[#CCD5AE]/60 flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 sm:gap-3 mt-4">
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-[#CCD5AE] bg-[#FFFFFF] hover:bg-[#E9EDC9] hover:border-[#D4A373] text-[#24211D] text-xs font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 min-h-[40px]"
          >
            <GithubIcon size={14} className="shrink-0" />
            <span>GitHub</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-60" />
          </a>

          {liveHref ? (
            <a
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#24211D] hover:bg-[#D4A373] text-[#FFFFFF] text-xs font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 min-h-[40px]"
            >
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              <span>Live Demo</span>
            </a>
          ) : onOpenDetails ? (
            <button
              onClick={() => onOpenDetails(project)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#24211D] hover:bg-[#D4A373] text-[#FFFFFF] text-xs font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 min-h-[40px]"
            >
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              <span>Live Demo</span>
            </button>
          ) : null}
        </div>
      </div>
    </article>
  );
};
