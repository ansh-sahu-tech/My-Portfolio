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
import { TechBadge } from '../../components/projects/TechBadge';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { GlassCard } from '../../components/common/GlassCard';
import { GithubIcon } from '../../components/common/SocialIcons';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getProjectBySlug, settings } = useData();
  const navigate = useNavigate();

  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">Project Not Found</h2>
        <p className="text-sm text-slate-400">
          The requested project "{slug}" could not be located in the database.
        </p>
        <Link to="/projects">
          <Button variant="primary" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
            Back to Projects
          </Button>
        </Link>
      </div>
    );
  }

  const githubHref = project.githubUrl !== 'YOUR_GITHUB_URL'
    ? project.githubUrl
    : (settings.githubUrl !== 'YOUR_GITHUB_URL' ? settings.githubUrl : '#');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-sans">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </button>

        <Badge variant="cyan" size="sm">
          {project.category}
        </Badge>
      </div>

      {/* Main Title & Action Header */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          {project.description}
        </p>

        {/* Action Links Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <TechBadge key={t} tech={t} />
            ))}
          </div>

          <div className="flex items-center gap-3">
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
            >
              <Button size="md" variant="secondary" icon={<GithubIcon size={16} />}>
                View GitHub Repository
              </Button>
            </a>

            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <Button size="md" variant="gradient" icon={<ExternalLink className="w-4 h-4" />}>
                  Live Production Demo
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-800 h-72 sm:h-96 shadow-2xl">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent" />
      </div>

      {/* Deep-Dive Technical Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.problem && (
          <GlassCard className="p-6 border-slate-800 space-y-3" glowColor="cyan">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Target className="w-4 h-4" /> Problem Statement
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </GlassCard>
        )}

        {project.solution && (
          <GlassCard className="p-6 border-slate-800 space-y-3" glowColor="emerald">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Lightbulb className="w-4 h-4" /> Engineering Solution
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </GlassCard>
        )}
      </div>

      {/* Core Capabilities */}
      {project.features && project.features.length > 0 && (
        <GlassCard className="p-6 sm:p-8 border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
            Key Features & System Capabilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800 flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                <span className="text-xs text-slate-300 leading-relaxed">{feat}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      )}

      {/* Architecture */}
      {project.architecture && (
        <GlassCard className="p-6 sm:p-8 border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4" /> System Pipeline Architecture
          </div>
          <div className="p-4 bg-[#050811] rounded-xl border border-slate-900 font-mono text-xs text-cyan-300 leading-relaxed overflow-x-auto">
            {project.architecture}
          </div>
        </GlassCard>
      )}

      {/* Development Process */}
      {project.process && project.process.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-cyan-400" />
            Development Lifecycle
          </h3>
          <div className="space-y-3">
            {project.process.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#080d19] border border-slate-800"
              >
                <span className="px-2.5 py-1 rounded-lg bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold shrink-0">
                  Step 0{idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Results & Findings */}
      {project.results && (
        <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
            <BarChart3 className="w-4 h-4" /> Observed Results & Technical Takeaway
          </div>
          <p className="text-sm text-emerald-200/90 leading-relaxed">
            {project.results}
          </p>
        </div>
      )}
    </div>
  );
};
