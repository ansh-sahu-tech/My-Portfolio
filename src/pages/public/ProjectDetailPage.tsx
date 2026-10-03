import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft,
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Target, 
  Lightbulb, 
  GitBranch, 
  BarChart3 
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { BackButton } from '../../components/common/BackButton';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { GithubIcon } from '../../components/common/SocialIcons';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getProjectBySlug, settings } = useData();

  const project = slug ? getProjectBySlug(slug) : undefined;

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Ansh Sahu (ansh.developer) Software Engineering`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4 font-sans">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Project Not Found</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          The requested project "{slug}" could not be located.
        </p>
        <Link to="/projects">
          <Button variant="primary" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
            Back to Projects
          </Button>
        </Link>
      </div>
    );
  }

  const githubHref = project.githubUrl && project.githubUrl !== 'YOUR_GITHUB_URL'
    ? project.githubUrl
    : (settings.githubUrl || 'https://github.com/ansh-sahu-tech');

  const liveHref = project.liveUrl && project.liveUrl !== '#'
    ? project.liveUrl
    : undefined;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans pb-16">
      {/* Navigation Breadcrumb */}
      <ScrollReveal>
        <div className="flex items-center justify-between">
          <BackButton label="Back to Projects" fallbackPath="/projects" />

          <Badge variant="brand" size="sm">
            {project.category}
          </Badge>
        </div>
      </ScrollReveal>

      {/* Main Title & Action Header */}
      <ScrollReveal delay={0.05}>
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-3xl leading-relaxed">
            {project.description}
          </p>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#263342]">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#1A2430] text-[#94A3B8] border border-[#263342] hover:text-[#22D3EE] hover:border-[#22D3EE] hover:-translate-y-0.5 transition-all duration-150"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2.5">
              <a
                href={githubHref}
                target="_blank"
                rel="noreferrer"
              >
                <Button size="md" variant="secondary" icon={<GithubIcon size={16} />}>
                  View GitHub
                </Button>
              </a>

              {liveHref && (
                <a href={liveHref} target="_blank" rel="noreferrer">
                  <Button size="md" variant="primary" icon={<ExternalLink className="w-4 h-4" />}>
                    Live Demo
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Hero Image with Subtle Zoom on Hover */}
      <ScrollReveal delay={0.1}>
        <div className="group/hero relative rounded-xl overflow-hidden border border-[#263342] aspect-video w-full shadow-sm bg-[#0B0F14]">
          <img
            src={project.imageUrl}
            alt={project.title}
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
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover/hero:scale-[1.03]"
          />
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-[#0B0F14]/90 text-[#22D3EE] border border-[#22D3EE]/40 shadow-md backdrop-blur-sm tracking-wider uppercase">
              8K Ultra Resolution
            </span>
          </div>
        </div>
      </ScrollReveal>

      {/* Technical Deep Dive */}
      {(project.problem || project.solution) && (
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.problem && (
              <div className="bg-[#121923] border border-[#263342] rounded-xl p-6 shadow-sm space-y-2 hover:-translate-y-0.5 hover:border-[#22D3EE] hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-2 text-[#22D3EE] text-xs font-semibold uppercase tracking-wider">
                  <Target className="w-4 h-4" /> Problem Statement
                </div>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="bg-[#121923] border border-[#263342] rounded-xl p-6 shadow-sm space-y-2 hover:-translate-y-0.5 hover:border-[#22D3EE] hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-2 text-[#22D3EE] text-xs font-semibold uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" /> Solution Approach
                </div>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>
        </ScrollReveal>
      )}

      {/* Core Capabilities */}
      {project.features && project.features.length > 0 && (
        <ScrollReveal delay={0.2}>
          <div className="bg-[#121923] border border-[#263342] rounded-xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-[#F8FAFC] tracking-tight flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#22D3EE]" />
              Key Features & Capabilities
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-[#1A2430] border border-[#263342] flex items-start gap-2.5 hover:-translate-y-0.5 hover:border-[#22D3EE] transition-all duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-2 shrink-0" />
                  <span className="text-xs text-[#F8FAFC] leading-relaxed font-medium">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* System Architecture */}
      {project.architecture && (
        <ScrollReveal delay={0.2}>
          <div className="bg-[#121923] border border-[#263342] rounded-xl p-6 sm:p-8 shadow-sm space-y-3">
            <h3 className="text-base font-bold text-[#F8FAFC] tracking-tight flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#22D3EE]" />
              System Pipeline Architecture
            </h3>

            <div className="p-4 rounded-lg bg-[#1A2430] border border-[#263342] font-mono text-xs text-[#F8FAFC] leading-relaxed overflow-x-auto">
              {project.architecture}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Process Steps */}
      {project.process && project.process.length > 0 && (
        <ScrollReveal delay={0.2}>
          <div className="bg-[#121923] border border-[#263342] rounded-xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-[#F8FAFC] tracking-tight flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-[#22D3EE]" />
              Development Process
            </h3>

            <div className="space-y-2.5">
              {project.process.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-[#1A2430] border border-[#263342] hover:-translate-y-0.5 hover:border-[#22D3EE] hover:shadow-sm transition-all duration-200">
                  <span className="text-xs font-mono font-bold text-[#22D3EE] px-2 py-0.5 rounded bg-[#121923] border border-[#263342] shrink-0">
                    0{idx + 1}
                  </span>
                  <p className="text-xs text-[#94A3B8] leading-relaxed font-medium">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Results */}
      {project.results && (
        <ScrollReveal delay={0.2}>
          <div className="p-5 rounded-xl bg-[#1A2430] border border-[#263342] space-y-2 hover:shadow-sm transition-shadow duration-200">
            <div className="flex items-center gap-2 text-[#22D3EE] text-xs font-semibold uppercase tracking-wider">
              <BarChart3 className="w-4 h-4" /> Technical Results & Observed Outcomes
            </div>
            <p className="text-xs sm:text-sm text-[#F8FAFC] leading-relaxed">
              {project.results}
            </p>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
};
