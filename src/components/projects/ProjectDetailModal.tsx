import React from 'react';
import type { Project } from '../../types';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Target, 
  Lightbulb, 
  GitBranch, 
  BarChart3 
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { GithubIcon } from '../common/SocialIcons';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const { settings } = useData();
  if (!project) return null;

  const githubHref = project.githubUrl && project.githubUrl !== 'YOUR_GITHUB_URL' 
    ? project.githubUrl 
    : (settings.githubUrl || 'https://github.com/Anshsahu275-max');

  const liveHref = project.liveUrl && project.liveUrl !== '#'
    ? project.liveUrl
    : undefined;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      subtitle={project.category}
      maxWidth="3xl"
    >
      <div className="space-y-6 font-sans">
        {/* Project image banner */}
        <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 h-56 sm:h-72">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <Badge variant="brand" size="sm">
              {project.category}
            </Badge>
          </div>
        </div>

        {/* Action Buttons Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="text-xs font-medium px-2 py-0.5 rounded bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={githubHref}
              target="_blank"
              rel="noreferrer"
            >
              <Button size="sm" variant="secondary" icon={<GithubIcon size={14} />}>
                GitHub
              </Button>
            </a>

            {liveHref && (
              <a href={liveHref} target="_blank" rel="noreferrer">
                <Button size="sm" variant="primary" icon={<ExternalLink className="w-3.5 h-3.5" />}>
                  Live Demo
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Overview Description */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Project Overview
          </h4>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.problem && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-1.5">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 text-xs font-semibold">
                <Target className="w-4 h-4" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>
          )}

          {project.solution && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                <Lightbulb className="w-4 h-4" />
                <span>Engineering Approach</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}
        </div>

        {/* Key Features List */}
        {project.features && project.features.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Key Features & Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 shrink-0" />
                  <span className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* System Architecture */}
        {project.architecture && (
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-semibold">
              <Layers className="w-4 h-4" />
              <span>Architecture & Stack Flow</span>
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs leading-relaxed font-mono overflow-x-auto">
              {project.architecture}
            </div>
          </div>
        )}

        {/* Development Process Steps */}
        {project.process && project.process.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-1.5">
              <GitBranch className="w-4 h-4" />
              Implementation Process
            </h4>
            <div className="space-y-2">
              {project.process.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80">
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 shrink-0">
                    0{idx + 1}
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results & Key Takeaways */}
        {project.results && (
          <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
              <BarChart3 className="w-4 h-4" />
              <span>Project Outcome</span>
            </div>
            <p className="text-xs text-emerald-800 dark:text-emerald-200/90 leading-relaxed">
              {project.results}
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
};
