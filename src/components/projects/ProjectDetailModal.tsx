import React from 'react';
import type { Project } from '../../types';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
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
        <div className="relative rounded-2xl overflow-hidden border-2 border-[#CCD5AE] aspect-video w-full bg-[#FAEDCD] shadow-inner">
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
              } else if (project.id === 'proj-3' || project.slug === 'sanskar-katha' || project.slug === 'student-performance-prediction') {
                target.src = '/sanskar-katha.jpg';
              } else if (project.id === 'proj-4' || project.slug === 'swagatam-vijay-bakers') {
                target.src = '/bakery-project.png';
              }
            }}
            className={`w-full h-full object-cover ${
              project.imagePosition === 'top' ? 'object-top' : 'object-center'
            }`}
          />
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-[#FFFFFF]/95 text-[#24211D] border border-[#CCD5AE] shadow-sm backdrop-blur-sm">
              {project.category}
            </span>
          </div>
        </div>

        {/* Action Buttons Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#FEFAE0] border-2 border-[#CCD5AE]">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="text-xs font-semibold px-2 py-0.5 rounded-lg bg-[#E9EDC9] text-[#24211D] border border-[#CCD5AE]"
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
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4A373] mb-2">
            Project Overview
          </h4>
          <p className="text-sm text-[#575249] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.problem && (
            <div className="p-4 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] space-y-1.5">
              <div className="flex items-center gap-2 text-[#24211D] text-xs font-bold">
                <Target className="w-4 h-4 text-[#D4A373]" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs text-[#575249] leading-relaxed">
                {project.problem}
              </p>
            </div>
          )}

          {project.solution && (
            <div className="p-4 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] space-y-1.5">
              <div className="flex items-center gap-2 text-[#24211D] text-xs font-bold">
                <Lightbulb className="w-4 h-4 text-[#D4A373]" />
                <span>Engineering Approach</span>
              </div>
              <p className="text-xs text-[#575249] leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}
        </div>

        {/* Key Features List */}
        {project.features && project.features.length > 0 && (
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4A373] mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Key Features &amp; Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] mt-1.5 shrink-0" />
                  <span className="text-xs text-[#24211D] leading-relaxed font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* System Architecture */}
        {project.architecture && (
          <div className="p-4 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] space-y-2">
            <div className="flex items-center gap-2 text-[#24211D] text-xs font-bold">
              <Layers className="w-4 h-4 text-[#D4A373]" />
              <span>Architecture &amp; Stack Flow</span>
            </div>
            <div className="p-3 bg-[#FFFFFF] rounded-lg border border-[#CCD5AE] text-[#24211D] text-xs leading-relaxed font-mono overflow-x-auto">
              {project.architecture}
            </div>
          </div>
        )}

        {/* Development Process Steps */}
        {project.process && project.process.length > 0 && (
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4A373] mb-3 flex items-center gap-1.5">
              <GitBranch className="w-4 h-4" />
              Implementation Process
            </h4>
            <div className="space-y-2">
              {project.process.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE]">
                  <span className="text-xs font-mono font-bold text-[#24211D] px-2 py-0.5 rounded-md bg-[#E9EDC9] border border-[#CCD5AE] shrink-0">
                    0{idx + 1}
                  </span>
                  <p className="text-xs text-[#575249] leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results & Key Takeaways */}
        {project.results && (
          <div className="p-4 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] space-y-1.5">
            <div className="flex items-center gap-2 text-[#24211D] text-xs font-bold">
              <BarChart3 className="w-4 h-4 text-[#D4A373]" />
              <span>Project Outcome</span>
            </div>
            <p className="text-xs text-[#24211D] font-medium leading-relaxed">
              {project.results}
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
};
