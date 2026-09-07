import React from 'react';
import type { Project } from '../../types';
import { Modal } from '../common/Modal';
import { TechBadge } from './TechBadge';
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

  const githubHref = project.githubUrl !== 'YOUR_GITHUB_URL' 
    ? project.githubUrl 
    : (settings.githubUrl !== 'YOUR_GITHUB_URL' ? settings.githubUrl : '#');

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      subtitle={project.category}
      maxWidth="3xl"
    >
      <div className="space-y-6 font-sans">
        {/* Hero image preview */}
        <div className="relative rounded-xl overflow-hidden border border-slate-800 h-56 sm:h-72">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 flex items-center gap-2">
            <Badge variant="cyan" size="sm">
              {project.category}
            </Badge>
            {project.featured && (
              <Badge variant="amber" size="sm">
                Featured System
              </Badge>
            )}
          </div>
        </div>

        {/* Action Buttons Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-[#080d1a] border border-slate-800">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <TechBadge key={t} tech={t} />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={githubHref}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                if (githubHref === '#') {
                  e.preventDefault();
                  alert('GitHub URL placeholder: YOUR_GITHUB_URL (Can be configured in Admin Settings)');
                }
              }}
            >
              <Button size="sm" variant="secondary" icon={<GithubIcon size={14} />}>
                GitHub
              </Button>
            </a>

            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <Button size="sm" variant="primary" icon={<ExternalLink className="w-3.5 h-3.5" />}>
                  Live Demo
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Overview Description */}
        <div>
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2">
            System Overview
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.problem && (
            <div className="p-4 rounded-xl bg-[#090e1b] border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-semibold">
                <Target className="w-4 h-4" />
                <span>The Problem</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>
          )}

          {project.solution && (
            <div className="p-4 rounded-xl bg-[#090e1b] border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold">
                <Lightbulb className="w-4 h-4" />
                <span>Engineering Solution</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}
        </div>

        {/* Key Features List */}
        {project.features && project.features.length > 0 && (
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              Core Capabilities & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#070b14] border border-slate-800/90 flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span className="text-xs text-slate-300 leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* System Architecture */}
        {project.architecture && (
          <div className="p-4 rounded-xl bg-[#070b14] border border-slate-800 space-y-2 font-mono">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold">
              <Layers className="w-4 h-4" />
              <span>System Pipeline Architecture</span>
            </div>
            <div className="p-3 bg-[#03060c] rounded-lg border border-slate-900 text-slate-300 text-xs leading-relaxed overflow-x-auto">
              {project.architecture}
            </div>
          </div>
        )}

        {/* Development Process Steps */}
        {project.process && project.process.length > 0 && (
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-cyan-400" />
              Development & Pipeline Process
            </h4>
            <div className="space-y-2">
              {project.process.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-2.5 rounded-lg bg-[#080d19] border border-slate-800/80">
                  <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 shrink-0">
                    0{idx + 1}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results & Key Takeaways */}
        {project.results && (
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold">
              <BarChart3 className="w-4 h-4" />
              <span>Observed Outcomes & Technical Takeaways</span>
            </div>
            <p className="text-xs text-emerald-200/90 leading-relaxed">
              {project.results}
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
};
