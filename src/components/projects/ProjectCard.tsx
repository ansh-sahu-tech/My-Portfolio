import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  GitBranch, 
  ArrowRight, 
  Sliders, 
  Layers, 
  Cpu, 
  Activity
} from 'lucide-react';
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

  const systemCode = project.systemCode || `SYS-${project.id.replace(/\D/g, '') || '01'} // ${(project.filterCategory || 'ENGINEERING').toUpperCase()}`;
  const statusText = project.status || (liveHref ? 'PRODUCTION LIVE' : 'OPEN SOURCE');
  const yearText = project.year || (project.createdAt ? new Date(project.createdAt).getFullYear().toString() : '2025');
  const pipelineText = project.pipeline || project.architecture || `${project.technologies[0] || 'Client'} → State Architecture → UI Pipeline → Deployed`;
  
  const metricsList = project.metrics && project.metrics.length > 0
    ? project.metrics
    : [
        { label: 'PLATFORM', value: project.technologies[0] || 'React' },
        { label: 'ARCHITECTURE', value: project.filterCategory || 'Frontend' },
        { label: 'DEPLOYMENT', value: 'Edge CDN' },
      ];

  const telemetryList = project.telemetry && project.telemetry.length > 0
    ? project.telemetry
    : [
        project.filterCategory === 'AI/ML' ? '30+ FPS' : '98 Vitals',
        project.technologies[0] || 'Modular UI',
        'Production'
      ];

  const getCategoryIcon = () => {
    if (project.filterCategory === 'AI/ML' || project.category.includes('AI') || project.category.includes('Vision')) {
      return <Cpu className="w-3.5 h-3.5 text-[#D4A373]" />;
    }
    if (project.category.includes('Audio') || project.category.includes('Cultural')) {
      return <Activity className="w-3.5 h-3.5 text-[#D4A373]" />;
    }
    return <Layers className="w-3.5 h-3.5 text-[#D4A373]" />;
  };

  return (
    <article className="group relative bg-[#FFFFFF] border-2 border-[#CCD5AE] hover:border-[#D4A373] rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-card-hover transition-all duration-300 ease-out flex flex-col h-full overflow-hidden hover:-translate-y-1">
      {/* 1. Terminal / System Window Header */}
      <div className="bg-[#24211D]/[0.03] border-b border-[#CCD5AE]/60 px-4 sm:px-5 py-2.5 flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/90 border border-black/10 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/90 border border-black/10 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/90 border border-black/10 inline-block" />
          </div>
          <span className="font-mono text-[11px] font-semibold text-[#575249] tracking-wider uppercase truncate">
            {systemCode}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#24211D] text-[#FEFAE0] border border-[#CCD5AE]/40 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{statusText}</span>
          </span>
          <span className="hidden xs:inline-block px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-[#E9EDC9] text-[#24211D] border border-[#CCD5AE]">
            {yearText}
          </span>
        </div>
      </div>

      {/* 2. Project Media Viewport with Technical HUD */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#FAEDCD] border-b-2 border-[#CCD5AE]">
        {/* HUD Precision Corner Markers */}
        <div className="absolute top-2 left-2 z-10 pointer-events-none font-mono text-[10px] text-[#24211D]/40 select-none">┌</div>
        <div className="absolute top-2 right-2 z-10 pointer-events-none font-mono text-[10px] text-[#24211D]/40 select-none">┐</div>
        <div className="absolute bottom-11 left-2 z-10 pointer-events-none font-mono text-[10px] text-white/40 select-none">└</div>
        <div className="absolute bottom-11 right-2 z-10 pointer-events-none font-mono text-[10px] text-white/40 select-none">┘</div>

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
          } transition-transform duration-700 ease-out group-hover:scale-105`}
        />

        {/* Technical Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-semibold rounded-lg bg-[#24211D]/85 text-[#FEFAE0] border border-white/20 shadow-sm backdrop-blur-md">
            {getCategoryIcon()}
            <span>{project.category}</span>
          </span>
        </div>

        {/* Quick Architecture Specs Trigger */}
        {onOpenDetails && (
          <button
            onClick={() => onOpenDetails(project)}
            className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#24211D]/85 hover:bg-[#D4A373] text-[#FEFAE0] border border-white/20 shadow-sm backdrop-blur-md text-[11px] font-mono transition-all hover:scale-105 active:scale-95 focus-visible:outline-none"
            title="Inspect System Architecture & Specs"
            aria-label={`Inspect ${project.title} specifications`}
          >
            <Sliders className="w-3.5 h-3.5 text-[#FEFAE0]" />
            <span className="hidden sm:inline">Specs</span>
          </button>
        )}

        {/* Telemetry HUD Strip */}
        <div className="absolute bottom-0 inset-x-0 bg-[#1B1916]/85 backdrop-blur-md border-t border-white/15 px-3.5 py-1.5 flex items-center justify-between text-[11px] font-mono text-[#FEFAE0] z-10">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
            {telemetryList.map((tel, idx) => (
              <span key={idx} className="inline-flex items-center gap-1 whitespace-nowrap opacity-90">
                <span className="w-1 h-1 rounded-full bg-[#D4A373]" />
                <span>{tel}</span>
              </span>
            ))}
          </div>
          <span className="hidden sm:inline-block text-[10px] text-white/50 tracking-widest uppercase">
            TELEMETRY // OK
          </span>
        </div>
      </div>

      {/* 3. Card Content & Technical Specifications */}
      <div className="p-5 sm:p-6 lg:p-7 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3.5">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#24211D] tracking-tight group-hover:text-[#D4A373] transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-[#D4A373] font-semibold mt-0.5">
              {project.filterCategory} Pipeline • {project.version || 'v1.0'}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#575249] leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* 3-Column Technical Metrics Micro-Grid */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            {metricsList.map((metric, i) => (
              <div
                key={i}
                className="bg-[#FEFAE0] border border-[#CCD5AE] rounded-xl p-2 text-center shadow-2xs hover:border-[#D4A373] transition-colors"
              >
                <div className="text-[9px] font-mono uppercase tracking-wider text-[#575249] truncate font-semibold">
                  {metric.label}
                </div>
                <div className="text-[11px] sm:text-xs font-mono font-bold text-[#24211D] mt-0.5 truncate">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* System Architecture Pipeline Ribbon */}
          <div className="bg-[#24211D]/[0.03] border border-[#CCD5AE]/70 rounded-xl px-3 py-2 flex items-center gap-2 text-[11px] font-mono text-[#575249] overflow-x-auto shadow-2xs">
            <GitBranch className="w-3.5 h-3.5 text-[#D4A373] shrink-0" />
            <span className="font-bold text-[#24211D] shrink-0 text-[10px] uppercase tracking-wider">Flow:</span>
            <span className="text-[11px] text-[#24211D] whitespace-nowrap truncate">{pipelineText}</span>
          </div>

          {/* Technology Stack Pills */}
          <div className="pt-1">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-[#FFFFFF] text-[#24211D] border border-[#CCD5AE] shadow-2xs hover:border-[#D4A373] hover:bg-[#E9EDC9]/30 transition-all duration-150"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Action Buttons */}
        <div className="pt-4 border-t border-[#CCD5AE]/60 flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 sm:gap-3 mt-4">
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl border border-[#CCD5AE] bg-[#FFFFFF] hover:bg-[#E9EDC9] hover:border-[#D4A373] text-[#24211D] text-xs font-semibold shadow-2xs transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 min-h-[42px]"
          >
            <GithubIcon size={14} className="shrink-0" />
            <span>Repository</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </a>

          {liveHref ? (
            <a
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#24211D] hover:bg-[#D4A373] text-[#FFFFFF] text-xs font-semibold shadow-2xs transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 min-h-[42px]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              <span>Live System</span>
            </a>
          ) : onOpenDetails ? (
            <button
              onClick={() => onOpenDetails(project)}
              className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#24211D] hover:bg-[#D4A373] text-[#FFFFFF] text-xs font-semibold shadow-2xs transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 min-h-[42px]"
            >
              <Sliders className="w-3.5 h-3.5 shrink-0" />
              <span>Architecture Specs</span>
            </button>
          ) : (
            <Link
              to={`/projects/${project.slug}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#24211D] hover:bg-[#D4A373] text-[#FFFFFF] text-xs font-semibold shadow-2xs transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 min-h-[42px]"
            >
              <Sliders className="w-3.5 h-3.5 shrink-0" />
              <span>Architecture Specs</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

