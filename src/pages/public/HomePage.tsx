import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileDown, 
  Eye, 
  BarChart3, 
  Code2, 
  ShieldCheck, 
  Cpu, 
  Activity,
  Sparkles,
  MapPin,
  GraduationCap,
  Mail,
  Phone
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { GlassCard } from '../../components/common/GlassCard';
import { SectionHeader } from '../../components/common/SectionHeader';
import { AiSystemHud } from '../../components/ai-telemetry/AiSystemHud';
import { TerminalConsole } from '../../components/ai-telemetry/TerminalConsole';
import { ProjectCard } from '../../components/projects/ProjectCard';
import { ProjectDetailModal } from '../../components/projects/ProjectDetailModal';
import { GithubIcon, LinkedinIcon } from '../../components/common/SocialIcons';
import type { Project } from '../../types';

export const HomePage: React.FC = () => {
  const { settings, projects } = useData();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = projects.filter((p) => p.featured && p.published).slice(0, 3);
  const coreCompetencies = [
    {
      title: 'Computer Vision & Real-Time Tracking',
      icon: <Eye className="w-6 h-6 text-cyan-400" />,
      desc: 'Building low-latency video inference pipelines with OpenCV, facial landmarks, and gaze tracking.',
      badge: 'Active Focus',
    },
    {
      title: 'Predictive ML & Statistical Modeling',
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      desc: 'Developing classification, regression, and ensemble models with Scikit-learn and Pandas.',
      badge: '94.8% AUC-ROC',
    },
    {
      title: 'Full-Stack Developer Platforms',
      icon: <Code2 className="w-6 h-6 text-emerald-400" />,
      desc: 'Architecting fast, responsive SaaS interfaces using React, TypeScript, and Tailwind CSS.',
      badge: 'Production Ready',
    },
    {
      title: 'Exploratory Data Analytics (EDA)',
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      desc: 'Extracting actionable insights from high-dimensional datasets with rigorous statistical rigor.',
      badge: 'Insights Driven',
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. HERO SECTION WITH ANSH'S PHOTO & HUD */}
      <section className="relative pt-6 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Col: Hero Copy with Personal Header */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              {/* Profile Intro Pill with Avatar */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-indigo-500 to-emerald-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                    <img
                      src="/ansh-profile.jpg"
                      alt="Ansh - AI/ML Engineer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#070b14]" />
                </div>

                <div className="inline-block">
                  <Badge variant="live" size="md" pulse>
                    {settings.statusBadge}
                  </Badge>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Building Intelligent Solutions with{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                  AI & Machine Learning.
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                {settings.aboutDescription}
              </p>

              {/* Primary Call To Actions */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link to="/projects">
                  <Button size="lg" variant="gradient" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                    View Projects
                  </Button>
                </Link>

                <Link to="/resume">
                  <Button size="lg" variant="secondary" icon={<FileDown className="w-4 h-4" />}>
                    Download Resume
                  </Button>
                </Link>
              </div>

              {/* Secondary Social & Contact Quick Links */}
              <div className="flex flex-wrap items-center gap-2.5 pt-3">
                <span className="text-xs font-mono text-slate-400">Direct Connect:</span>
                <a
                  href={settings.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon size={14} className="text-slate-300" />
                  <span>GitHub</span>
                </a>

                <a
                  href={settings.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-blue-950/60 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-blue-500/40 text-xs font-mono transition-colors flex items-center gap-1.5"
                >
                  <LinkedinIcon size={14} className="text-blue-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={`mailto:${settings.email}`}
                  className="px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-indigo-950/60 text-slate-300 hover:text-indigo-300 border border-slate-800 hover:border-indigo-500/40 text-xs font-mono transition-colors flex items-center gap-1.5"
                  title="Send Direct Email"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Email</span>
                </a>

                <a
                  href={`tel:${settings.phone}`}
                  className="px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-emerald-950/60 text-slate-300 hover:text-emerald-300 border border-slate-800 hover:border-emerald-500/40 text-xs font-mono transition-colors flex items-center gap-1.5"
                  title="Call Contact Number"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{settings.phone}</span>
                </a>
              </div>
            </motion.div>

            {/* Right Col: Large Hero Profile Portrait Showcase & AI SaaS Dashboard Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Large Hero Portrait Showcase */}
              <div className="relative group">
                {/* Ambient Multi-Layer Cyber Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-700" />

                <div className="relative rounded-3xl bg-[#080d1a] border border-cyan-500/30 overflow-hidden shadow-2xl backdrop-blur-xl">
                  {/* Top Telemetry Header Bar */}
                  <div className="px-4 py-2.5 bg-[#060a14]/90 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                      <span className="text-emerald-300 font-bold text-[11px] tracking-wider uppercase">AI NODE ONLINE</span>
                    </div>
                    <span className="text-slate-400 text-[11px]">Sanskriti Univ • 2023–2027</span>
                  </div>

                  {/* Main Large Image Display */}
                  <div className="relative w-full h-[400px] sm:h-[480px] overflow-hidden bg-gradient-to-b from-slate-900 to-[#070b14]">
                    <img
                      src="/ansh-profile.jpg"
                      alt="Ansh - AI/ML Engineer"
                      className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Subtle cyber scanline & gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/25 to-transparent" />

                    {/* Floating Micro-HUD Top Right */}
                    <div className="absolute top-4 right-4 backdrop-blur-md bg-slate-900/80 border border-cyan-500/40 px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                      <span className="text-[11px] font-mono text-cyan-200 font-semibold">AI/ML Core</span>
                    </div>

                    {/* Floating Micro-HUD Top Left */}
                    <div className="absolute top-4 left-4 backdrop-blur-md bg-slate-900/80 border border-emerald-500/40 px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2">
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] font-mono text-emerald-300 font-semibold">Computer Vision</span>
                    </div>

                    {/* Bottom Hero Info Glass Overlay */}
                    <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 space-y-3 bg-gradient-to-t from-[#070b14] via-[#070b14]/95 to-transparent">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Ansh</h3>
                          <Sparkles className="w-5 h-5 text-cyan-400" />
                          <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[10px] font-mono font-bold uppercase">
                            AI / ML
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-mono text-cyan-300 font-semibold">
                          AI/ML Engineer & Computer Vision Developer
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-y-1.5 gap-x-3 text-xs text-slate-300 pt-1">
                        <div className="flex items-center gap-1.5">
                          <GraduationCap className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                          <span>B.Tech CSE (AI & ML)</span>
                        </div>
                        <span className="text-slate-600">•</span>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>Sanskriti University, Mathura</span>
                        </div>
                      </div>

                      {/* Direct Profile Action Buttons */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <a
                          href={settings.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-xs font-mono transition-all flex items-center justify-center gap-2 shadow-sm"
                        >
                          <GithubIcon size={14} className="text-slate-300" />
                          <span>GitHub</span>
                        </a>

                        <a
                          href={settings.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 rounded-xl bg-blue-950/80 hover:bg-blue-900/90 text-blue-200 hover:text-white border border-blue-500/40 text-xs font-mono transition-all flex items-center justify-center gap-2 shadow-sm"
                        >
                          <LinkedinIcon size={14} className="text-blue-400" />
                          <span>LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI HUD Telemetry */}
              <AiSystemHud />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. LIVE TERMINAL INFERENCE DEMO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Interactive Terminal"
          badgeVariant="cyan"
          title="Engineered for"
          highlightText="Technical Precision"
          description="Interact with the terminal simulation to inspect active machine learning models, vision parameters, and pipeline status."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <TerminalConsole />
          </div>

          <div className="lg:col-span-4 space-y-4 font-sans">
            <GlassCard className="p-5 border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Academic Credential
              </div>
              <h4 className="text-base font-bold text-white">Sanskriti University</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                B.Tech in Computer Science & Engineering (Artificial Intelligence & Machine Learning), Expected 2027.
              </p>
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Location</span>
                <span className="text-slate-200">Mathura, India</span>
              </div>
            </GlassCard>

            <GlassCard className="p-5 border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Activity className="w-4 h-4 text-indigo-400" />
                Engineering Values
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                "More than code — building production-ready architectures, reproducible machine learning pipelines, and responsive SaaS interfaces."
              </p>
              <Link to="/about" className="inline-flex items-center gap-1 text-xs text-cyan-400 font-medium hover:underline pt-1">
                Read About Ansh <ArrowRight className="w-3 h-3" />
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 3. CORE COMPETENCIES MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Core Pillars"
          badgeVariant="indigo"
          title="What I"
          highlightText="Build & Specialize In"
          description="Combining advanced algorithms with pragmatic software architecture to solve real-world problems."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreCompetencies.map((comp, idx) => (
            <GlassCard
              key={idx}
              className="p-6 border-slate-800/80 hover:border-cyan-500/40 group flex flex-col justify-between"
              glowColor="cyan"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-[#060a14] border border-slate-800 group-hover:border-cyan-500/40 transition-colors shadow-inner">
                    {comp.icon}
                  </div>
                  <Badge variant="outline" size="sm">
                    {comp.badge}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {comp.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                <span>VERIFIED STACK</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PROJECTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Systems"
          badgeVariant="emerald"
          title="AI / ML Projects &"
          highlightText="Production Solutions"
          description="Explore high-impact projects covering Computer Vision driver safety, predictive academic modeling, healthcare diagnostics, and responsive web platforms."
          action={
            <Link to="/projects">
              <Button variant="outline" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />} iconPosition="right">
                View All Projects ({projects.length})
              </Button>
            </Link>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </section>

      {/* 5. QUICK RECRUITER CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-emerald-950/40 border border-cyan-500/30 p-8 sm:p-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <Badge variant="live" size="md" pulse>
              Actively Seeking Internships & Roles
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to collaborate on innovative{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                AI & Software Solutions?
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Whether you are looking for an AI/ML engineering intern, need to build a computer vision pipeline, or want to discuss technical ideas, let's connect!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link to="/contact">
                <Button size="lg" variant="gradient" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                  Let's Build Something Intelligent
                </Button>
              </Link>

              <Link to="/resume">
                <Button size="lg" variant="secondary" icon={<FileDown className="w-4 h-4" />}>
                  Download Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
