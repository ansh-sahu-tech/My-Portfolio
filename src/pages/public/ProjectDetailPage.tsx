import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
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
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { GithubIcon } from '../../components/common/SocialIcons';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getProjectBySlug, settings } = useData();
  const navigate = useNavigate();

  const project = slug ? getProjectBySlug(slug) : undefined;

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
    : (settings.githubUrl || 'https://github.com/Anshsahu275-max');

  const liveHref = project.liveUrl && project.liveUrl !== '#'
    ? project.liveUrl
    : undefined;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans pb-16">
      {/* Navigation Breadcrumb */}
      <ScrollReveal>
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="group/back inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-0.5 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 group-hover/back:-translate-x-1 transition-transform duration-200" /> Back to Projects
          </button>

          <Badge variant="brand" size="sm">
            {project.category}
          </Badge>
        </div>
      </ScrollReveal>

      {/* Main Title & Action Header */}
      <ScrollReveal delay={0.05}>
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            {project.description}
          </p>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:-translate-y-0.5 transition-transform duration-150"
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
        <div className="group/hero relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 h-64 sm:h-96 shadow-sm bg-slate-100 dark:bg-slate-800">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/hero:scale-[1.03]"
          />
        </div>
      </ScrollReveal>

      {/* Technical Deep Dive */}
      {(project.problem || project.solution) && (
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.problem && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm space-y-2 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 text-xs font-semibold uppercase tracking-wider">
                  <Target className="w-4 h-4" /> Problem Statement
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm space-y-2 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" /> Solution Approach
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
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
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              Key Features & Capabilities
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 flex items-start gap-2.5 hover:-translate-y-0.5 hover:border-blue-500/20 transition-all duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
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
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 shadow-sm space-y-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              System Pipeline Architecture
            </h3>

            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-xs text-slate-800 dark:text-slate-200 leading-relaxed overflow-x-auto">
              {project.architecture}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Process Steps */}
      {project.process && project.process.length > 0 && (
        <ScrollReveal delay={0.2}>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-blue-600" />
              Development Process
            </h3>

            <div className="space-y-2.5">
              {project.process.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200">
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 shrink-0">
                    0{idx + 1}
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
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
          <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-2 hover:shadow-sm transition-shadow duration-200">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <BarChart3 className="w-4 h-4" /> Technical Results & Observed Outcomes
            </div>
            <p className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed">
              {project.results}
            </p>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
};
