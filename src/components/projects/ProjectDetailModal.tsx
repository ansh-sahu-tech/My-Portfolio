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
    : (settings.githubUrl || 'https://github.com/ansh-sahu-tech');

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
        <div className="relative rounded-xl overflow-hidden border border-[#263342] aspect-video w-full bg-[#0B0F14] shadow-inner">
          <img
            src={project.imageUrl}
            alt={`${project.title} - ${project.category} Project Overview by Ansh Sahu`}
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
            className={`w-full h-full object-cover ${
              project.imagePosition === 'top' ? 'object-top' : 'object-center'
            }`}
          />
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <Badge variant="brand" size="sm">
              {project.category}
            </Badge>
            <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-[#0B0F14]/90 text-[#22D3EE] border border-[#22D3EE]/40 shadow-sm backdrop-blur-sm tracking-wider uppercase">
              8K UHD
            </span>
          </div>
        </div>

        {/* Action Buttons Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-[#1A2430] border border-[#263342]">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="text-xs font-medium px-2 py-0.5 rounded bg-[#121923] text-[#F8FAFC] border border-[#263342]"
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
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#22D3EE] mb-2">
            Project Overview
          </h4>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.problem && (
            <div className="p-4 rounded-xl bg-[#1A2430] border border-[#263342] space-y-1.5">
              <div className="flex items-center gap-2 text-[#22D3EE] text-xs font-semibold">
                <Target className="w-4 h-4" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                {project.problem}
              </p>
            </div>
          )}

          {project.solution && (
            <div className="p-4 rounded-xl bg-[#1A2430] border border-[#263342] space-y-1.5">
              <div className="flex items-center gap-2 text-[#22D3EE] text-xs font-semibold">
                <Lightbulb className="w-4 h-4" />
                <span>Engineering Approach</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}
        </div>

        {/* Key Features List */}
        {project.features && project.features.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#22D3EE] mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Key Features & Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#1A2430] border border-[#263342] flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-1.5 shrink-0" />
                  <span className="text-xs text-[#F8FAFC] leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* System Architecture */}
        {project.architecture && (
          <div className="p-4 rounded-xl bg-[#1A2430] border border-[#263342] space-y-2">
            <div className="flex items-center gap-2 text-[#22D3EE] text-xs font-semibold">
              <Layers className="w-4 h-4" />
              <span>Architecture & Stack Flow</span>
            </div>
            <div className="p-3 bg-[#121923] rounded-lg border border-[#263342] text-[#F8FAFC] text-xs leading-relaxed font-mono overflow-x-auto">
              {project.architecture}
            </div>
          </div>
        )}

        {/* Development Process Steps */}
        {project.process && project.process.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#22D3EE] mb-3 flex items-center gap-1.5">
              <GitBranch className="w-4 h-4" />
              Implementation Process
            </h4>
            <div className="space-y-2">
              {project.process.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[#1A2430] border border-[#263342]">
                  <span className="text-xs font-mono font-bold text-[#22D3EE] px-2 py-0.5 rounded bg-[#121923] border border-[#263342] shrink-0">
                    0{idx + 1}
                  </span>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results & Key Takeaways */}
        {project.results && (
          <div className="p-4 rounded-xl bg-[#1A2430] border border-[#263342] space-y-1.5">
            <div className="flex items-center gap-2 text-[#22D3EE] text-xs font-semibold">
              <BarChart3 className="w-4 h-4" />
              <span>Project Outcome</span>
            </div>
            <p className="text-xs text-[#F8FAFC] leading-relaxed">
              {project.results}
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
};
