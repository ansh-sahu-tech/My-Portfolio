import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  BrainCircuit, 
  Eye, 
  BarChart3, 
  ArrowRight, 
  FileDown, 
  MapPin, 
  Calendar, 
  Layers,
  Cpu,
  Target,
  Sparkles,
  Mail,
  Phone
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { SectionHeader } from '../../components/common/SectionHeader';
import { GlassCard } from '../../components/common/GlassCard';
import { Button } from '../../components/common/Button';
import { GithubIcon, LinkedinIcon } from '../../components/common/SocialIcons';

export const AboutPage: React.FC = () => {
  const { settings } = useData();

  const focusAreas = [
    {
      title: 'Artificial Intelligence',
      icon: <BrainCircuit className="w-5 h-5 text-cyan-400" />,
      desc: 'Developing autonomous decision architectures, intelligent heuristics, and heuristic search algorithms.'
    },
    {
      title: 'Machine Learning',
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      desc: 'Training supervised and unsupervised predictive pipelines with Scikit-learn, optimizing hyper-parameters, and preventing overfitting.'
    },
    {
      title: 'Computer Vision',
      icon: <Eye className="w-5 h-5 text-emerald-400" />,
      desc: 'Real-time video processing, facial landmark estimation (EAR/MAR), head pose tracking, and edge detection.'
    },
    {
      title: 'Data Analytics & EDA',
      icon: <BarChart3 className="w-5 h-5 text-amber-400" />,
      desc: 'Rigorous exploratory data analysis, statistical correlation matrices, missing value strategies, and clear visualization.'
    }
  ];

  const engineeringPrinciples = [
    {
      title: 'Real-World Problem Solving',
      desc: 'AI is most powerful when directly solving tangible human challenges—such as preventing drowsy driving accidents or detecting health risks early.'
    },
    {
      title: 'Performance & Low Latency',
      desc: 'Optimizing inference speed and memory footprint so models run smoothly on edge devices and consumer web browsers without prohibitive cloud overhead.'
    },
    {
      title: 'Reproducible & Clean Code',
      desc: 'Treating machine learning like disciplined software engineering with modular data pipelines, deterministic seeds, and strict versioning.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 font-sans">
      {/* 1. Header */}
      <SectionHeader
        badge="About The Engineer"
        badgeVariant="cyan"
        title="More Than Code."
        highlightText="I Build Intelligent Systems."
        description="A deeper look into my background, academic journey at Sanskriti University, core AI/ML focus areas, and technical philosophy."
      />

      {/* 2. Main Profile Overview Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Bio & Academic Info Card */}
        <div className="lg:col-span-7 space-y-6">
          <GlassCard className="p-6 sm:p-8 border-slate-800 space-y-6" glowColor="cyan">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="relative shrink-0">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden border-2 border-cyan-400/60 p-0.5 bg-gradient-to-br from-cyan-400 via-indigo-500 to-emerald-400 shadow-[0_0_35px_rgba(6,182,212,0.4)]">
                  <img
                    src="/ansh-profile.jpg"
                    alt="Ansh - AI/ML Engineer"
                    className="w-full h-full object-cover object-top rounded-[22px]"
                  />
                </div>
                <span className="absolute -bottom-1.5 -right-1.5 px-2 py-0.5 rounded-md bg-emerald-950 text-emerald-300 border border-emerald-500/50 text-[10px] font-mono font-bold shadow-lg">
                  ACTIVE
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-white">{settings.name}</h3>
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
                <p className="text-xs font-mono text-cyan-400 font-semibold">{settings.role}</p>
                <p className="text-xs text-slate-400 font-medium">
                  {settings.university} • Class of {settings.graduationYear}
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1.5">
                  <a
                    href={settings.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700/60 text-[11px] font-mono transition-colors flex items-center gap-1.5"
                  >
                    <GithubIcon size={12} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={settings.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-blue-950/60 hover:bg-blue-900/60 text-blue-300 border border-blue-500/30 text-[11px] font-mono transition-colors flex items-center gap-1.5"
                  >
                    <LinkedinIcon size={12} />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={`mailto:${settings.email}`}
                    className="px-2.5 py-1 rounded-lg bg-indigo-950/60 hover:bg-indigo-900/60 text-indigo-300 border border-indigo-500/30 text-[11px] font-mono transition-colors flex items-center gap-1.5"
                    title={settings.email}
                  >
                    <Mail className="w-3 h-3 text-indigo-400" />
                    <span>Email</span>
                  </a>

                  <a
                    href={`tel:${settings.phone}`}
                    className="px-2.5 py-1 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/30 text-[11px] font-mono transition-colors flex items-center gap-1.5"
                    title={settings.phone}
                  >
                    <Phone className="w-3 h-3 text-emerald-400" />
                    <span>{settings.phone}</span>
                  </a>
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Hello! I'm <strong className="text-white">Ansh</strong>, an enthusiastic AI/ML Engineer currently pursuing my <strong className="text-cyan-300">B.Tech in Computer Science & Engineering with specialization in Artificial Intelligence and Machine Learning</strong> at <strong className="text-indigo-300">Sanskriti University</strong> (Class of 2027).
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              My engineering journey centers around bridging mathematical machine learning theory with production-quality software. From crafting real-time facial landmark detection algorithms for road safety to training diagnostic risk classifiers and building SaaS dashboard interfaces, I strive to make intelligent software tangible, robust, and accessible.
            </p>

            {/* Key Academic Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" /> Degree & Major
                </span>
                <p className="text-xs font-semibold text-white">B.Tech CSE (AI & ML)</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" /> University & Location
                </span>
                <p className="text-xs font-semibold text-white">Sanskriti University, Mathura</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" /> Timeline
                </span>
                <p className="text-xs font-semibold text-white">2023 — 2027 (Expected)</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-amber-400" /> Current Status
                </span>
                <p className="text-xs font-semibold text-emerald-300">Open for Internships</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
              <Link to="/contact">
                <Button size="md" variant="gradient" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                  Get in Touch
                </Button>
              </Link>
              <Link to="/resume">
                <Button size="md" variant="secondary" icon={<FileDown className="w-4 h-4" />}>
                  Download Resume
                </Button>
              </Link>
            </div>
          </GlassCard>
        </div>

        {/* Right: Focus Areas Grid */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            Core Specialization Focus
          </h3>

          <div className="space-y-3">
            {focusAreas.map((area, idx) => (
              <GlassCard
                key={idx}
                className="p-4 border-slate-800 hover:border-cyan-500/30 transition-all"
                glowColor="cyan"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#070b14] border border-slate-800 shrink-0">
                    {area.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{area.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Engineering Philosophy & Approach */}
      <div className="space-y-6 pt-6">
        <SectionHeader
          badge="Philosophy"
          badgeVariant="indigo"
          title="How I Approach"
          highlightText="Engineering & AI"
          description="Disciplined practices guiding every line of model code and user interface."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engineeringPrinciples.map((item, idx) => (
            <GlassCard key={idx} className="p-6 border-slate-800 space-y-3" glowColor="indigo">
              <div className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 flex items-center justify-center font-mono font-bold text-xs">
                0{idx + 1}
              </div>
              <h4 className="text-base font-bold text-white">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};
