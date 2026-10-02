import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles, 
  Grid, 
  Layers, 
  ChevronRight, 
  ChevronLeft,
  GraduationCap,
  Code2,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { useToast } from '../../context/ToastContext';
import { EditorialSlideCard } from '../../components/editorial/EditorialSlideCard';
import { DeckGridCollage } from '../../components/editorial/DeckGridCollage';
import { SparkleStar } from '../../components/editorial/SparkleStar';
import { GithubIcon, LinkedinIcon } from '../../components/common/SocialIcons';
import { getRealisticSkillIcon } from '../../components/skills/RealisticSkillIcons';

export const HomePage: React.FC = () => {
  const { settings } = useData();
  const { showToast } = useToast();

  // View modes: 'stream' (smooth scroll editorial cards) vs 'collage' (the exact overview collage from the screenshot) vs 'slide' (step-by-step presentation)
  const [viewMode, setViewMode] = useState<'stream' | 'collage' | 'slide'>('stream');
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeProjectTab, setActiveProjectTab] = useState(0);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    showToast(`Copied ${label} to clipboard!`, 'info');
    setTimeout(() => setCopiedField(null), 2000);
  };

  const scrollToCard = (id: string) => {
    setViewMode('stream');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const featuredProjects = [
    {
      title: 'AI Driver Awareness System',
      category: 'Computer Vision & AI Safety',
      tech: ['Python', 'OpenCV', 'Computer Vision', 'NumPy'],
      summary: 'Real-time fatigue, drowsiness, and road distraction monitoring system using facial landmark analysis (EAR/MAR metrics).',
      github: 'https://github.com/Anshsahu275-max',
      demo: 'https://github.com/Anshsahu275-max',
      image: '/ai-driver-awareness.png'
    },
    {
      title: 'Sacha Sauda',
      category: 'Frontend Web Application',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
      summary: 'Responsive grocery e-commerce storefront with dynamic catalog filtering, instant cart management, and seamless mobile checkout.',
      github: 'https://github.com/Anshsahu275-max',
      demo: 'https://sacha-sauda.vercel.app',
      image: '/sacha-sauda.png'
    },
    {
      title: 'Student Performance Prediction',
      category: 'Machine Learning Pipeline',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Data Analysis'],
      summary: 'Supervised ML model evaluating study habits, attendance, and continuous assessment data to forecast academic performance.',
      github: 'https://github.com/Anshsahu275-max',
      demo: 'https://github.com/Anshsahu275-max',
      image: '/student-performance-prediction.png'
    }
  ];

  const slideIds = [
    'hero',
    'about',
    'vision',
    'education',
    'skills',
    'experience',
    'projects',
    'contact',
    'thanks'
  ];

  return (
    <div className="w-full min-h-screen teal-canvas text-stone-900 font-sans pb-24 select-text">
      {/* ========================================================
          TOP PRESENTATION CONTROLLER & VIEW SWITCHER
          ======================================================== */}
      <div className="sticky top-20 z-30 max-w-5xl mx-auto px-4 pt-3 pb-2 mb-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-between bg-[#fcfaf7]/95 backdrop-blur-md border border-[#e5d4bf] px-4 py-2 rounded-full shadow-lg">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="hidden sm:inline font-serif italic text-sm text-[#14696c] font-bold">
              Ansh Sahu
            </span>
            <span className="hidden sm:inline text-stone-400">•</span>
            <span className="text-[11px] uppercase tracking-wider text-stone-600">
              Creative Portfolio Deck
            </span>
          </div>

          {/* View Mode Toggle Buttons */}
          <div className="flex items-center gap-1 bg-[#f3ebdE] p-1 rounded-full text-xs">
            <button
              onClick={() => setViewMode('stream')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-200 font-medium ${
                viewMode === 'stream'
                  ? 'bg-[#14696c] text-white shadow-sm font-semibold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
              title="Editorial Scroll View"
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="text-[11px]">Stream</span>
            </button>

            <button
              onClick={() => setViewMode('collage')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-200 font-medium ${
                viewMode === 'collage'
                  ? 'bg-[#14696c] text-white shadow-sm font-semibold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
              title="Overview Deck Collage (as in Screenshot)"
            >
              <Grid className="w-3.5 h-3.5" />
              <span className="text-[11px]">Deck Collage</span>
            </button>

            <button
              onClick={() => setViewMode('slide')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-200 font-medium ${
                viewMode === 'slide'
                  ? 'bg-[#14696c] text-white shadow-sm font-semibold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
              title="Step-by-step Presentation Slide Mode"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[11px]">Slide Mode</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================
          VIEW MODE 1: DECK GRID COLLAGE (THE EXACT SCREENSHOT VIEW)
          ======================================================== */}
      {viewMode === 'collage' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4">
          <div className="text-center mb-6 text-white space-y-1">
            <p className="text-xs uppercase tracking-widest text-[#f5eee3] font-semibold flex items-center justify-center gap-1.5">
              <SparkleStar size={12} color="#f5eee3" />
              <span>Full Portfolio Presentation Deck</span>
              <SparkleStar size={12} color="#f5eee3" />
            </p>
            <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-[#fdfcf9]">
              Creative Editorial Overview
            </h2>
            <p className="text-xs text-[#f5eee3]/90">
              Click any card to read full details and interact directly with projects & links
            </p>
          </div>

          <DeckGridCollage onSelectCard={scrollToCard} />
        </div>
      )}

      {/* ========================================================
          VIEW MODE 2: SLIDE PRESENTATION MODE
          ======================================================== */}
      {viewMode === 'slide' && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 space-y-4">
          <div className="flex items-center justify-between text-white text-xs font-semibold px-2">
            <span>Slide {activeSlideIndex + 1} of {slideIds.length}</span>
            <div className="flex items-center gap-2">
              <button
                disabled={activeSlideIndex === 0}
                onClick={() => setActiveSlideIndex((prev) => Math.max(0, prev - 1))}
                className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:pointer-events-none text-white transition-colors"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                disabled={activeSlideIndex === slideIds.length - 1}
                onClick={() => setActiveSlideIndex((prev) => Math.min(slideIds.length - 1, prev + 1))}
                className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:pointer-events-none text-white transition-colors"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          EDITORIAL CARDS STREAM / SLIDES CONTAINER
          ======================================================== */}
      {(viewMode === 'stream' || viewMode === 'slide') && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16 pt-2">

          {/* ----------------------------------------------------
              CARD 1: CREATIVE PORTFOLIO (HERO)
              ---------------------------------------------------- */}
          {(viewMode === 'stream' || (viewMode === 'slide' && activeSlideIndex === 0)) && (
            <EditorialSlideCard
              id="hero"
              imageSrc="/ansh-profile.jpg"
              imageAlt="Ansh Sahu - Software Engineer &amp; Developer"
              categoryTitle="Editorial Portfolio 2026"
              titleRust="CREATIVE"
              titleBlack="PORTFOLIO"
              activeSection="hero"
              signature="By Ansh Sahu"
            >
              <div className="space-y-4">
                {/* Primary H1 for Search Engine Ranking */}
                <div className="space-y-1">
                  <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900">
                    Ansh Sahu <span className="text-stone-300 font-normal">|</span> <span className="text-[#a75a32]">Software Engineer</span>
                  </h1>
                  <p className="text-xs font-mono font-medium text-stone-600 tracking-wide">
                    ansh.developer • Software Engineer &amp; Developer • Sanskriti University
                  </p>
                </div>

                {/* Role Pill */}
                <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-[#f3ebdE] border border-[#d8c3a9] text-xs font-semibold text-[#8e4827]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c2744d]" />
                  <span>SOFTWARE ENGINEER</span>
                  <span className="text-stone-400">•</span>
                  <span>FRONTEND DEVELOPER</span>
                  <span className="text-stone-400">•</span>
                  <span className="font-normal text-stone-600">B.Tech CSE (AI &amp; ML)</span>
                </div>

                {/* Subtitle & Bio */}
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                  Hi, I'm <strong className="font-bold text-stone-900">Ansh Sahu</strong> (<strong>ansh.developer</strong>). I am a dedicated <strong className="font-semibold text-stone-900">Software Engineer</strong> crafting clean, responsive, and high-performance web applications using React, Next.js, TypeScript, and modern CSS, backed by a disciplined foundation in computer science and applied AI/ML at <strong className="font-semibold text-stone-900">Sanskriti University</strong>.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToCard('projects');
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#a75a32] hover:bg-[#8e4827] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Explore Projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#d8c3a9] hover:bg-[#faf4ec] text-stone-800 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm"
                  >
                    <FileDown className="w-3.5 h-3.5 text-[#a75a32]" />
                    <span>Download CV</span>
                  </a>

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToCard('contact');
                    }}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-stone-700 hover:text-stone-950 hover:bg-[#f3ebdE] text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <span>Contact Me</span>
                  </a>
                </div>

                {/* Social Quick Profiles */}
                <div className="flex items-center gap-2 pt-2 border-t border-[#e8ddcc]/80 text-xs text-stone-600">
                  <span className="font-semibold text-stone-500 mr-1">Profiles:</span>
                  <a
                    href={settings.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-[#dfd2be] hover:bg-[#f6efe4] text-stone-800 font-medium transition-all"
                  >
                    <GithubIcon size={13} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={settings.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-[#dfd2be] hover:bg-[#f6efe4] text-[#8e4827] font-medium transition-all"
                  >
                    <LinkedinIcon size={13} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </EditorialSlideCard>
          )}

          {/* ----------------------------------------------------
              CARD 2: ABOUT ME
              ---------------------------------------------------- */}
          {(viewMode === 'stream' || (viewMode === 'slide' && activeSlideIndex === 1)) && (
            <EditorialSlideCard
              id="about"
              imageSrc="/ansh-profile.jpg"
              imageAlt="About Ansh Sahu - Software Engineer"
              categoryTitle="Biography & Mindset"
              titleRust="ABOUT ME"
              activeSection="about"
              signature="By Ansh Sahu"
            >
              <div className="space-y-4">
                <p className="text-stone-700 text-sm sm:text-[14.5px] leading-relaxed">
                  I am a passionate <strong className="font-semibold text-stone-900">Software Engineer &amp; Frontend Developer</strong> currently in my undergraduate studies at <strong className="font-semibold text-stone-900">Sanskriti University</strong>, specializing in Computer Science Engineering (Artificial Intelligence &amp; Machine Learning).
                </p>

                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                  My technical philosophy focuses on building fast, accessible, and user-centric interfaces. I combine clean CSS architecture and modern React design patterns with rigorous computational logic, bringing precision to every interface I construct.
                </p>

                {/* Two-Column Facts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white border border-[#e4d5c0] shadow-sm space-y-1">
                    <p className="text-[11px] font-bold text-[#8e4827] uppercase tracking-wider flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5" />
                      Academic Studies
                    </p>
                    <p className="text-xs font-semibold text-stone-800">
                      Sanskriti University (2023–2027)
                    </p>
                    <p className="text-[11px] text-stone-500">
                      B.Tech CSE (AI & ML) • Mathura, UP
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-[#e4d5c0] shadow-sm space-y-1">
                    <p className="text-[11px] font-bold text-[#8e4827] uppercase tracking-wider flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5" />
                      Core Specialties
                    </p>
                    <p className="text-xs font-semibold text-stone-800">
                      React, Next.js, Tailwind CSS
                    </p>
                    <p className="text-[11px] text-stone-500">
                      Computer Vision & RESTful APIs
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#a75a32] hover:text-[#743d23] transition-colors"
                  >
                    <span>Read Full Bio & Engineering Principles</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </EditorialSlideCard>
          )}

          {/* ----------------------------------------------------
              CARD 3: VISION & MISSION
              ---------------------------------------------------- */}
          {(viewMode === 'stream' || (viewMode === 'slide' && activeSlideIndex === 2)) && (
            <EditorialSlideCard
              id="vision"
              imageSrc="/vision-mission.png"
              imageAlt="Mission, Vision & Core Value Wooden Blocks"
              categoryTitle="Philosophy & Future"
              titleRust="VISION"
              titleBlack="MISSION"
              activeSection="about"
              signature="By Ansh Sahu"
              frameShape="architectural"
              aspectClass="aspect-[623/491]"
              badgeText="Core Philosophy"
              subBadgeText="guiding principles"
              caption="Vision • Mission • Core Values"
              tagText="Engineering Ethos"
            >
              <div className="space-y-4">
                {/* Vision Block */}
                <div className="space-y-1 p-3.5 rounded-xl bg-white/70 border border-[#e8ddcc]">
                  <h4 className="font-display font-bold uppercase tracking-wider text-sm sm:text-base text-[#18181b] flex items-center gap-1.5">
                    <SparkleStar size={13} color="#a75a32" />
                    <span>VISION</span>
                  </h4>
                  <p className="text-xs sm:text-[13.5px] text-stone-700 leading-relaxed">
                    To engineer scalable, human-centered web experiences where elegant aesthetic precision seamlessly merges with high-speed computational intelligence and zero-latency user flows.
                  </p>
                </div>

                {/* Mission Block */}
                <div className="space-y-1 p-3.5 rounded-xl bg-white/70 border border-[#e8ddcc]">
                  <h4 className="font-display font-bold uppercase tracking-wider text-sm sm:text-base text-[#b85b2c] flex items-center gap-1.5">
                    <SparkleStar size={13} color="#b85b2c" />
                    <span>MISSION</span>
                  </h4>
                  <p className="text-xs sm:text-[13.5px] text-stone-700 leading-relaxed">
                    Bridging the divide between modern frontend engineering and applied artificial intelligence—crafting modular, accessible applications that solve real-world problems with clarity, speed, and clean code standards.
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-stone-600 pt-1 font-medium">
                  <span className="flex items-center gap-1 text-[#8e4827]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Clean Code Pragmatism
                  </span>
                  <span className="flex items-center gap-1 text-[#8e4827]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Mobile-First Fluidity
                  </span>
                </div>
              </div>
            </EditorialSlideCard>
          )}

          {/* ----------------------------------------------------
              CARD 4: EDUCATION
              ---------------------------------------------------- */}
          {(viewMode === 'stream' || (viewMode === 'slide' && activeSlideIndex === 3)) && (
            <EditorialSlideCard
              id="education"
              imageSrc="/sanskriti-university.png"
              imageAlt="Sanskriti University Mathura Campus Facade"
              categoryTitle="Formal Qualifications"
              titleRust="EDUCATION"
              activeSection="education"
              signature="By Ansh Sahu"
              frameShape="architectural"
              aspectClass="aspect-[738/294]"
              caption="Sanskriti University • Mathura, UP"
              badgeText="Campus Architecture"
              subBadgeText="mathura, india"
              tagText="B.Tech Campus"
            >
              <div className="space-y-4">
                {/* 2-Column Layout matching screenshot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Column 1: Institution */}
                  <div className="space-y-2 p-3.5 rounded-xl bg-white border border-[#e4d5c0] shadow-sm">
                    <div className="text-[11px] font-bold text-[#a75a32] uppercase tracking-wider">
                      2023 — 2027
                    </div>
                    <h4 className="font-display font-bold uppercase tracking-tight text-base sm:text-lg text-stone-900 leading-snug">
                      SANSKRITI UNIVERSITY
                    </h4>
                    <p className="text-xs text-stone-700 font-medium">
                      B.Tech in Computer Science & Engineering
                    </p>
                    <p className="text-[11px] text-stone-500">
                      Specialization in Artificial Intelligence & Machine Learning (AI & ML)
                    </p>
                    <p className="text-[10px] text-stone-400">
                      Mathura, Uttar Pradesh, India
                    </p>
                  </div>

                  {/* Column 2: Core Coursework Foundation */}
                  <div className="space-y-2 p-3.5 rounded-xl bg-white border border-[#e4d5c0] shadow-sm">
                    <div className="text-[11px] font-bold text-[#a75a32] uppercase tracking-wider">
                      CORE RIGOR
                    </div>
                    <h4 className="font-display font-bold uppercase tracking-tight text-base sm:text-lg text-stone-900 leading-snug">
                      CURRICULUM
                    </h4>
                    <ul className="text-xs text-stone-600 space-y-1">
                      <li className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#c2744d]" />
                        Data Structures & Algorithms
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#c2744d]" />
                        Web Technologies & Engineering
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#c2744d]" />
                        Computer Vision & Image Processing
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#c2744d]" />
                        Database Management Systems
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-1">
                  <Link
                    to="/education"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#a75a32] hover:text-[#743d23] transition-colors"
                  >
                    <span>View Complete Academic Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </EditorialSlideCard>
          )}

          {/* ----------------------------------------------------
              CARD 5: SKILL
              ---------------------------------------------------- */}
          {(viewMode === 'stream' || (viewMode === 'slide' && activeSlideIndex === 4)) && (
            <EditorialSlideCard
              id="skills"
              imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              imageAlt="Tech Workspace & Development"
              categoryTitle="Capabilities Matrix"
              titleRust="SKILL"
              titleBlack="CAPABILITIES"
              activeSection="skills"
              signature="By Ansh Sahu"
            >
              <div className="space-y-4">
                {/* 2-Column Layout matching screenshot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Column 1: Frontend */}
                  <div className="space-y-2.5 p-3.5 rounded-xl bg-white border border-[#e4d5c0] shadow-sm">
                    <h4 className="font-display font-bold uppercase tracking-wider text-sm sm:text-base text-stone-900 border-b border-[#ebdcc8] pb-1.5 flex items-center justify-between">
                      <span>FRONTEND & UI</span>
                      <Code2 className="w-3.5 h-3.5 text-[#a75a32]" />
                    </h4>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['React', 'Next.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design'].map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#faf5ed] border border-[#e2d5c3] text-[11px] font-semibold text-stone-800 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:bg-[#f5ede0] transition-colors"
                        >
                          {getRealisticSkillIcon(skill, undefined, 14)}
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                    <p className="text-[11px] text-stone-600 leading-relaxed pt-1">
                      Component architecture, accessible state management, and modern CSS layout patterns.
                    </p>
                  </div>

                  {/* Column 2: AI/ML & Engineering */}
                  <div className="space-y-2.5 p-3.5 rounded-xl bg-white border border-[#e4d5c0] shadow-sm">
                    <h4 className="font-display font-bold uppercase tracking-wider text-sm sm:text-base text-[#b85b2c] border-b border-[#ebdcc8] pb-1.5 flex items-center justify-between">
                      <span>AI/ML & DEV TOOLS</span>
                      <Cpu className="w-3.5 h-3.5 text-[#b85b2c]" />
                    </h4>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['Python', 'Computer Vision', 'OpenCV', 'Pandas', 'Git', 'GitHub', 'REST APIs'].map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#faf5ed] border border-[#e2d5c3] text-[11px] font-semibold text-stone-800 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:bg-[#f5ede0] transition-colors"
                        >
                          {getRealisticSkillIcon(skill, undefined, 14)}
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                    <p className="text-[11px] text-stone-600 leading-relaxed pt-1">
                      Real-time facial landmark estimation, statistical pipelines, and atomic git collaboration.
                    </p>
                  </div>
                </div>

                <div className="pt-1">
                  <Link
                    to="/skills"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#a75a32] hover:text-[#743d23] transition-colors"
                  >
                    <span>Explore Comprehensive Skills Matrix</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </EditorialSlideCard>
          )}

          {/* ----------------------------------------------------
              CARD 6: EXPERIENCE
              ---------------------------------------------------- */}
          {(viewMode === 'stream' || (viewMode === 'slide' && activeSlideIndex === 5)) && (
            <EditorialSlideCard
              id="experience"
              imageSrc="/experience.png"
              imageAlt="Developer Workspace Setup with Laptop and Notes"
              categoryTitle="Track Record"
              titleRust="EXPERIENCE"
              activeSection="experience"
              signature="By Ansh Sahu"
              frameShape="architectural"
              aspectClass="aspect-[275/183]"
              badgeText="Engineering Track"
              subBadgeText="hands-on execution"
              caption="Workstation • Research & Development"
              tagText="Active Development"
            >
              <div className="space-y-4">
                {/* 2-Column Layout matching Larana Inc & Salford & Co in screenshot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Col 1 */}
                  <div className="space-y-2 p-3.5 rounded-xl bg-white border border-[#e4d5c0] shadow-sm">
                    <div className="text-[11px] font-bold text-[#a75a32] uppercase tracking-wider">
                      2023 — 2027
                    </div>
                    <h4 className="font-display font-bold uppercase tracking-tight text-base sm:text-lg text-stone-900 leading-snug">
                      SANSKRITI UNIVERSITY
                    </h4>
                    <p className="text-xs font-semibold text-[#8e4827]">
                      B.Tech Project Lead (Academic)
                    </p>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Hands-on execution of computer vision pipelines, real-time safety monitoring models, and full-stack software development projects in academic labs.
                    </p>
                  </div>

                  {/* Col 2 */}
                  <div className="space-y-2 p-3.5 rounded-xl bg-white border border-[#e4d5c0] shadow-sm">
                    <div className="text-[11px] font-bold text-[#a75a32] uppercase tracking-wider">
                      2023 — PRESENT
                    </div>
                    <h4 className="font-display font-bold uppercase tracking-tight text-base sm:text-lg text-stone-900 leading-snug">
                      INDEPENDENT RESEARCH
                    </h4>
                    <p className="text-xs font-semibold text-[#8e4827]">
                      AI & Software Development
                    </p>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Building production-grade client apps like Sacha Sauda, machine learning forecasting algorithms, and continuous mastery of modern web architecture.
                    </p>
                  </div>
                </div>

                <div className="pt-1">
                  <Link
                    to="/experience"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#a75a32] hover:text-[#743d23] transition-colors"
                  >
                    <span>Inspect Complete Experience Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </EditorialSlideCard>
          )}

          {/* ----------------------------------------------------
              CARD 7: 2024–2026 PROJECTS
              ---------------------------------------------------- */}
          {(viewMode === 'stream' || (viewMode === 'slide' && activeSlideIndex === 6)) && (
            <EditorialSlideCard
              id="projects"
              imageSrc={featuredProjects[activeProjectTab]?.image || '/ai-driver-awareness.png'}
              imageAlt={featuredProjects[activeProjectTab]?.title || 'Featured Project'}
              categoryTitle="Showcase & Engineering"
              titleRust="2024–2026"
              titleBlack="PROJECTS"
              activeSection="portfolio"
              signature="By Ansh Sahu"
              frameShape="architectural"
              aspectClass={
                activeProjectTab === 2
                  ? 'aspect-[675/453]'
                  : activeProjectTab === 1
                  ? 'aspect-[515/388]'
                  : 'aspect-[738/387]'
              }
              badgeText={featuredProjects[activeProjectTab]?.category || 'Engineering Project'}
              subBadgeText={
                activeProjectTab === 2
                  ? 'predictive analytics'
                  : activeProjectTab === 1
                  ? 'data mart & e-commerce'
                  : 'driver safety'
              }
              caption={featuredProjects[activeProjectTab]?.title || 'Featured Project'}
              tagText={
                activeProjectTab === 2
                  ? 'Scikit-Learn ML'
                  : activeProjectTab === 1
                  ? 'Data Mart Architecture'
                  : 'Edge AI System'
              }
            >
              <div className="space-y-4">
                {/* Project Selector Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
                  {featuredProjects.map((p, idx) => (
                    <button
                      key={p.title}
                      onClick={() => setActiveProjectTab(idx)}
                      className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all ${
                        activeProjectTab === idx
                          ? 'bg-[#a75a32] text-white shadow-sm font-semibold'
                          : 'bg-white border border-[#e4d5c0] text-stone-700 hover:bg-[#faf4ec]'
                      }`}
                    >
                      {p.title}
                    </button>
                  ))}
                </div>

                {/* Active Project Highlight Box */}
                {featuredProjects[activeProjectTab] && (
                  <div className="p-4 rounded-xl bg-white border border-[#e4d5c0] shadow-sm space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#ebdcc8] pb-2">
                      <div>
                        <h4 className="font-display font-bold uppercase tracking-tight text-lg text-stone-900">
                          {featuredProjects[activeProjectTab].title}
                        </h4>
                        <span className="text-[11px] text-[#8e4827] font-semibold">
                          {featuredProjects[activeProjectTab].category}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={featuredProjects[activeProjectTab].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#faf5ed] border border-[#dfd2be] text-[11px] font-semibold text-stone-700 hover:text-stone-950 transition-colors"
                        >
                          <GithubIcon size={12} />
                          <span>Code</span>
                        </a>

                        <a
                          href={featuredProjects[activeProjectTab].demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#a75a32] text-white text-[11px] font-semibold hover:bg-[#8e4827] transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Live</span>
                        </a>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {featuredProjects[activeProjectTab].summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {featuredProjects[activeProjectTab].tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-[#f7efe4] text-[10px] font-semibold text-[#8e4827]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-1">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#a75a32] hover:text-[#743d23] transition-colors"
                  >
                    <span>Browse All Projects in Full Gallery</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </EditorialSlideCard>
          )}

          {/* ----------------------------------------------------
              CARD 8: LET'S COLLABORATE (CONTACT)
              ---------------------------------------------------- */}
          {(viewMode === 'stream' || (viewMode === 'slide' && activeSlideIndex === 7)) && (
            <EditorialSlideCard
              id="contact"
              imageSrc="/collaborate.png"
              imageAlt="Let's Work Together - Collaborate"
              categoryTitle="Direct Inquiries"
              titleRust="LET'S"
              titleBlack="COLLABORATE"
              activeSection="contact"
              signature="By Ansh Sahu"
              imageClassName="object-center"
            >
              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  I am available for full-time frontend roles, internships, and high-impact engineering projects. Feel free to connect directly via any channel:
                </p>

                {/* 4 Icon rows exactly like the screenshot */}
                <div className="space-y-2.5 pt-1">
                  {/* Phone */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e4d5c0] shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#18181b] text-white flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-stone-800">
                        {settings.phone}
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopy(settings.phone, 'Phone number')}
                      className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-[#f6eee3] transition-colors"
                      title="Copy Phone"
                    >
                      {copiedField === 'Phone number' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Email */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e4d5c0] shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#18181b] text-white flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-stone-800 break-all">
                        {settings.email}
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopy(settings.email, 'Email address')}
                      className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-[#f6eee3] transition-colors"
                      title="Copy Email"
                    >
                      {copiedField === 'Email address' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* GitHub */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e4d5c0] shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#18181b] text-white flex items-center justify-center shrink-0">
                        <GithubIcon size={16} />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-stone-800">
                        github.com/Anshsahu275-max
                      </span>
                    </div>
                    <a
                      href={settings.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-[#f6eee3] transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Location */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e4d5c0] shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#18181b] text-white flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-stone-800">
                        Mathura, Uttar Pradesh, India
                      </span>
                    </div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-widest font-semibold pr-2">
                      Location
                    </span>
                  </div>
                </div>

                <div className="pt-1">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#a75a32] text-white text-xs font-semibold hover:bg-[#8e4827] shadow-sm transition-all"
                  >
                    <span>Open Direct Contact Form</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </EditorialSlideCard>
          )}

          {/* ----------------------------------------------------
              CARD 9: THANKS YOU
              ---------------------------------------------------- */}
          {(viewMode === 'stream' || (viewMode === 'slide' && activeSlideIndex === 8)) && (
            <EditorialSlideCard
              id="thanks"
              imageSrc="/ansh-profile.jpg"
              imageAlt="Ansh - Thank you"
              categoryTitle="Closing Appreciation"
              titleRust="THANKS"
              titleBlack="YOU"
              activeSection="contact"
              signature="By Ansh Sahu"
            >
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-stone-800 font-medium leading-relaxed">
                  Thank you for taking the time to view my portfolio presentation.
                </p>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  I am actively preparing for frontend engineering opportunities where I can apply modern React architecture, algorithmic rigor, and responsive UX design to build meaningful software.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#a75a32] hover:bg-[#8e4827] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Download Complete Resume</span>
                  </a>

                  <a
                    href={settings.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#dfd2be] hover:bg-[#f6eee3] text-stone-800 text-xs sm:text-sm font-semibold transition-all"
                  >
                    <LinkedinIcon size={14} className="text-[#8e4827]" />
                    <span>Connect on LinkedIn</span>
                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-stone-700 hover:text-stone-950 hover:bg-[#f6eee3] text-xs font-semibold"
                  >
                    <span>Send Message</span>
                  </Link>
                </div>
              </div>
            </EditorialSlideCard>
          )}

        </div>
      )}
    </div>
  );
};

export default HomePage;
