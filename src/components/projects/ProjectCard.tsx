import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  Eye 
} from 'lucide-react';
import type { Project } from '../../types';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { TechBadge } from './TechBadge';
import { useData } from '../../context/DataContext';
import { GithubIcon } from '../common/SocialIcons';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const { settings } = useData();

  const githubHref = project.githubUrl !== 'YOUR_GITHUB_URL'
    ? project.githubUrl
    : (settings.githubUrl !== 'YOUR_GITHUB_URL' ? settings.githubUrl : '#');

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <GlassCard
        className="h-full flex flex-col justify-between border-slate-800/90 hover:border-cyan-500/40 group overflow-hidden"
        glowColor="cyan"
      >
        <div>
          {/* Project Image Header */}
          <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b101c] via-[#0b101c]/40 to-transparent" />

            {/* Badges on top */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
              <Badge variant="cyan" size="sm">
                {project.category}
              </Badge>

              {project.featured && (
                <Badge variant="amber" size="sm" icon={<Sparkles className="w-3 h-3 text-amber-300" />}>
                  Featured
                </Badge>
              )}
            </div>

            {/* Quick Inspect Floating Action */}
            <button
              onClick={() => onOpenDetails(project)}
              className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/60 hover:bg-cyan-500 text-white hover:text-slate-950 text-xs font-mono backdrop-blur-md border border-white/10 transition-all flex items-center gap-1.5 opacity-0 group-hover:opacity-100"
            >
              <Eye className="w-3.5 h-3.5" /> Quick View
            </button>
          </div>

          {/* Card Body */}
          <div className="p-5 sm:p-6 space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.slice(0, 5).map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
              {project.technologies.length > 5 && (
                <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-slate-800 self-center">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="p-5 sm:p-6 pt-0 mt-auto border-t border-slate-800/60 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <a
              href={githubHref}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                if (githubHref === '#') {
                  e.preventDefault();
                  alert('GitHub placeholder: YOUR_GITHUB_URL');
                }
              }}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors flex items-center justify-center"
              title="View on GitHub"
            >
              <GithubIcon size={16} />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
                title="View Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenDetails(project)}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold text-cyan-300 hover:text-white bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 transition-all flex items-center gap-1"
            >
              <span>Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};
