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
      category: 'Home & Construction Marketplace',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
      summary: 'Modern marketplace for home and construction needs to explore properties, building materials, home products, and services with fast discovery and enquiries.',
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
    },
    {
      title: 'Swagatam Vijay Bakers',
      category: 'Web Development',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      summary: 'Production artisanal bakery web storefront featuring catalog navigation, dynamic product showcase, and streamlined inquiry workflows.',
      github: 'https://github.com/Anshsahu275-max',
      demo: 'https://swagatam-vijay-bakers.vercel.app',
      image: '/bakery-project.png'
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
    <div className="w-full min-h-screen bg-[#0B0F14] text-[#F8FAFC] font-sans pb-24 select-text">
      {/* ========================================================
          TOP PRESENTATION CONTROLLER & VIEW SWITCHER
          ======================================================== */}
      <div className="sticky top-20 z-30 max-w-5xl mx-auto px-3 sm:px-4 pt-3 pb-2 mb-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-between gap-2 bg-[#121923]/95 backdrop-blur-md border border-[#263342] px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl sm:rounded-full shadow-lg">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-semibold text-[#94A3B8] min-w-0 shrink">
            <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse shrink-0" />
            <span className="hidden sm:inline font-serif italic text-sm text-[#22D3EE] font-bold shrink-0">
              Ansh Sahu
            </span>
            <span className="hidden sm:inline text-[#263342]">•</span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#94A3B8] truncate">
              <span className="hidden xs:inline">Creative </span>Portfolio Deck
            </span>
          </div>

          {/* View Mode Toggle Buttons */}
          <div className="flex items-center gap-0.5 sm:gap-1 bg-[#1A2430] p-1 rounded-xl sm:rounded-full text-xs border border-[#263342] shrink-0">
            <button
              onClick={() => setViewMode('stream')}
              className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 rounded-lg sm:rounded-full transition-all duration-200 font-medium ${
                viewMode === 'stream'
                  ? 'bg-[#22D3EE] text-[#0B0F14] shadow-sm font-semibold'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC]'
              }`}
              title="Editorial Scroll View"
            >
              <Layers className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[10px] sm:text-[11px]">Stream</span>
            </button>

            <button
              onClick={() => setViewMode('collage')}
              className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 rounded-lg sm:rounded-full transition-all duration-200 font-medium ${
                viewMode === 'collage'
                  ? 'bg-[#22D3EE] text-[#0B0F14] shadow-sm font-semibold'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC]'
              }`}
              title="Overview Deck Collage"
            >
              <Grid className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[10px] sm:text-[11px]">
                <span className="hidden sm:inline">Deck </span>Collage
              </span>
            </button>

            <button
              onClick={() => setViewMode('slide')}
              className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 rounded-lg sm:rounded-full transition-all duration-200 font-medium ${
                viewMode === 'slide'
                  ? 'bg-[#22D3EE] text-[#0B0F14] shadow-sm font-semibold'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC]'
              }`}
              title="Step-by-step Presentation Slide Mode"
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[10px] sm:text-[11px]">
                <span className="hidden sm:inline">Slide </span>Mode
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================
          VIEW MODE 1: DECK GRID COLLAGE (THE EXACT SCREENSHOT VIEW)
          ======================================================== */}
      {viewMode === 'collage' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4">
          <div className="text-center mb-6 text-[#F8FAFC] space-y-1">
            <p className="text-xs uppercase tracking-widest text-[#22D3EE] font-semibold flex items-center justify-center gap-1.5">
              <SparkleStar size={12} color="#22D3EE" />
              <span>Full Portfolio Presentation Deck</span>
              <SparkleStar size={12} color="#22D3EE" />
            </p>
            <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-[#F8FAFC]">
              Creative Editorial Overview
            </h2>
            <p className="text-xs text-[#94A3B8]">
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
          <div className="flex items-center justify-between text-[#94A3B8] text-xs font-semibold px-2">
            <span>Slide {activeSlideIndex + 1} of {slideIds.length}</span>
            <div className="flex items-center gap-2">
              <button
                disabled={activeSlideIndex === 0}
                onClick={() => setActiveSlideIndex((prev) => Math.max(0, prev - 1))}
                className="p-1.5 rounded-full bg-[#1A2430] hover:bg-[#22D3EE] hover:text-[#0B0F14] disabled:opacity-30 disabled:pointer-events-none text-[#F8FAFC] border border-[#263342] transition-colors"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                disabled={activeSlideIndex === slideIds.length - 1}
                onClick={() => setActiveSlideIndex((prev) => Math.min(slideIds.length - 1, prev + 1))}
                className="p-1.5 rounded-full bg-[#1A2430] hover:bg-[#22D3EE] hover:text-[#0B0F14] disabled:opacity-30 disabled:pointer-events-none text-[#F8FAFC] border border-[#263342] transition-colors"
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
              imageAlt="Ansh Sahu - Software Engineer & Developer"
              categoryTitle="Editorial Portfolio 2026"
              titleRust="CREATIVE"
              titleBlack="PORTFOLIO"
              activeSection="hero"
              signature="By Ansh Sahu"
              frameShape="architectural"
              aspectClass="aspect-[4/3]"
              imageClassName="object-top"
              badgeText="Lead Software Engineer"
              subBadgeText="mathura, india"
              caption="Ansh Sahu • Developer"
              tagText="Available 2026"
            >
              <div className="space-y-4">
                {/* Primary H1 for Search Engine Ranking */}
                <div className="space-y-1">
                  <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F8FAFC]">
                    Ansh Sahu <span className="text-[#263342] font-normal">|</span> <span className="text-[#22D3EE]">Software Engineer</span>
                  </h1>
                  <p className="text-xs font-mono font-medium text-[#94A3B8] tracking-wide">
                    ansh.developer • Software Engineer &amp; Developer • Sanskriti University
                  </p>
                </div>

                {/* Role Pill */}
                <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-[#1A2430] border border-[#263342] text-xs font-semibold text-[#22D3EE]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
                  <span>SOFTWARE ENGINEER</span>
                  <span className="text-[#263342]">•</span>
                  <span>FRONTEND DEVELOPER</span>
                  <span className="text-[#263342]">•</span>
                  <span className="font-normal text-[#94A3B8]">B.Tech CSE (AI &amp; ML)</span>
                </div>

                {/* Subtitle & Bio */}
                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                  Hi, I'm <strong className="font-bold text-[#F8FAFC]">Ansh Sahu</strong> (<strong>ansh.developer</strong>). I am a dedicated <strong className="font-semibold text-[#F8FAFC]">Software Engineer</strong> crafting clean, responsive, and high-performance web applications using React, Next.js, TypeScript, and modern CSS, backed by a disciplined foundation in computer science and applied AI/ML at <strong className="font-semibold text-[#F8FAFC]">Sanskriti University</strong>.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToCard('projects');
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#22D3EE] hover:bg-[#06B6D4] text-[#0B0F14] text-xs sm:text-sm font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Explore Projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1A2430] border border-[#263342] hover:bg-[#121923] hover:border-[#22D3EE] text-[#F8FAFC] text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm"
                  >
                    <FileDown className="w-3.5 h-3.5 text-[#22D3EE]" />
                    <span>Download CV</span>
                  </a>

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToCard('contact');
                    }}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1A2430] text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <span>Contact Me</span>
                  </a>
                </div>

                {/* Social Quick Profiles */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#263342] text-xs text-[#94A3B8]">
                  <span className="font-semibold text-[#94A3B8] mr-1">Profiles:</span>
                  <a
                    href={settings.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#1A2430] border border-[#263342] hover:bg-[#121923] hover:border-[#22D3EE] text-[#F8FAFC] hover:text-[#22D3EE] font-medium transition-all"
                  >
                    <GithubIcon size={13} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={settings.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#1A2430] border border-[#263342] hover:bg-[#121923] hover:border-[#22D3EE] text-[#F8FAFC] hover:text-[#22D3EE] font-medium transition-all"
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
              frameShape="architectural"
              aspectClass="aspect-[4/3]"
              imageClassName="object-top"
              badgeText="Biography & Mindset"
              subBadgeText="engineering core"
              caption="Ansh Sahu • Profile"
              tagText="Software Engineer"
            >
              <div className="space-y-4">
                <p className="text-[#94A3B8] text-sm sm:text-[14.5px] leading-relaxed">
                  I am a passionate <strong className="font-semibold text-[#F8FAFC]">Software Engineer &amp; Frontend Developer</strong> currently in my undergraduate studies at <strong className="font-semibold text-[#F8FAFC]">Sanskriti University</strong>, specializing in Computer Science Engineering (Artificial Intelligence &amp; Machine Learning).
                </p>

                <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed">
                  My technical philosophy focuses on building fast, accessible, and user-centric interfaces. I combine clean CSS architecture and modern React design patterns with rigorous computational logic, bringing precision to every interface I construct.
                </p>

                {/* Two-Column Facts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-[#1A2430] border border-[#263342] shadow-sm space-y-1">
                    <p className="text-[11px] font-bold text-[#22D3EE] uppercase tracking-wider flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5" />
                      Academic Studies
                    </p>
                    <p className="text-xs font-semibold text-[#F8FAFC]">
                      Sanskriti University (2023–2027)
                    </p>
                    <p className="text-[11px] text-[#94A3B8]">
                      B.Tech CSE (AI & ML) • Mathura, UP
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#1A2430] border border-[#263342] shadow-sm space-y-1">
                    <p className="text-[11px] font-bold text-[#22D3EE] uppercase tracking-wider flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5" />
                      Core Specialties
                    </p>
                    <p className="text-xs font-semibold text-[#F8FAFC]">
                      React, Next.js, Tailwind CSS
                    </p>
                    <p className="text-[11px] text-[#94A3B8]">
                      Computer Vision & RESTful APIs
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#22D3EE] hover:text-[#06B6D4] transition-colors"
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
              aspectClass="aspect-[4/3]"
              badgeText="Core Philosophy"
              subBadgeText="guiding principles"
              caption="Vision • Mission • Core Values"
              tagText="Engineering Ethos"
            >
              <div className="space-y-4">
                {/* Vision Block */}
                <div className="space-y-1 p-3.5 rounded-xl bg-[#1A2430] border border-[#263342]">
                  <h4 className="font-display font-bold uppercase tracking-wider text-sm sm:text-base text-[#F8FAFC] flex items-center gap-1.5">
                    <SparkleStar size={13} color="#22D3EE" />
                    <span>VISION</span>
                  </h4>
                  <p className="text-xs sm:text-[13.5px] text-[#94A3B8] leading-relaxed">
                    To engineer scalable, human-centered web experiences where elegant aesthetic precision seamlessly merges with high-speed computational intelligence and zero-latency user flows.
                  </p>
                </div>

                {/* Mission Block */}
                <div className="space-y-1 p-3.5 rounded-xl bg-[#1A2430] border border-[#263342]">
                  <h4 className="font-display font-bold uppercase tracking-wider text-sm sm:text-base text-[#22D3EE] flex items-center gap-1.5">
                    <SparkleStar size={13} color="#22D3EE" />
                    <span>MISSION</span>
                  </h4>
                  <p className="text-xs sm:text-[13.5px] text-[#94A3B8] leading-relaxed">
                    Bridging the divide between modern frontend engineering and applied artificial intelligence—crafting modular, accessible applications that solve real-world problems with clarity, speed, and clean code standards.
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-[#94A3B8] pt-1 font-medium">
                  <span className="flex items-center gap-1 text-[#22D3EE]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Clean Code Pragmatism
                  </span>
                  <span className="flex items-center gap-1 text-[#22D3EE]">
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
              aspectClass="aspect-[4/3]"
              caption="Sanskriti University • Mathura, UP"
              badgeText="Campus Architecture"
              subBadgeText="mathura, india"
              tagText="B.Tech Campus"
            >
              <div className="space-y-4">
                {/* 2-Column Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Column 1: Institution */}
                  <div className="space-y-2 p-3.5 rounded-xl bg-[#1A2430] border border-[#263342] shadow-sm">
                    <div className="text-[11px] font-bold text-[#22D3EE] uppercase tracking-wider">
                      2023 — 2027
                    </div>
                    <h4 className="font-display font-bold uppercase tracking-tight text-base sm:text-lg text-[#F8FAFC] leading-snug">
                      SANSKRITI UNIVERSITY
                    </h4>
                    <p className="text-xs text-[#F8FAFC] font-medium">
                      B.Tech in Computer Science & Engineering
                    </p>
                    <p className="text-[11px] text-[#94A3B8]">
                      Specialization in Artificial Intelligence & Machine Learning (AI & ML)
                    </p>
                    <p className="text-[10px] text-[#94A3B8]">
                      Mathura, Uttar Pradesh, India
                    </p>
                  </div>

                  {/* Column 2: Core Coursework Foundation */}
                  <div className="space-y-2 p-3.5 rounded-xl bg-[#1A2430] border border-[#263342] shadow-sm">
                    <div className="text-[11px] font-bold text-[#22D3EE] uppercase tracking-wider">
                      CORE RIGOR
                    </div>
                    <h4 className="font-display font-bold uppercase tracking-tight text-base sm:text-lg text-[#F8FAFC] leading-snug">
                      CURRICULUM
                    </h4>
                    <ul className="text-xs text-[#94A3B8] space-y-1">
                      <li className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#22D3EE]" />
                        Data Structures & Algorithms
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#22D3EE]" />
                        Web Technologies & Engineering
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#22D3EE]" />
                        Computer Vision & Image Processing
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#22D3EE]" />
                        Database Management Systems
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-1">
                  <Link
                    to="/education"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#22D3EE] hover:text-[#06B6D4] transition-colors"
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
              imageSrc="/skills.png"
              imageAlt="Technical Capabilities & Skill Stack"
              categoryTitle="Capabilities Matrix"
              titleRust="SKILL"
              titleBlack="CAPABILITIES"
              activeSection="skills"
              signature="By Ansh Sahu"
              frameShape="architectural"
              aspectClass="aspect-[4/3]"
              badgeText="Capabilities Stack"
              subBadgeText="engineering matrix"
              caption="Frontend • AI/ML • Systems"
              tagText="Technical Core"
            >
              <div className="space-y-4">
                {/* 2-Column Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Column 1: Frontend */}
                  <div className="space-y-2.5 p-3.5 rounded-xl bg-[#1A2430] border border-[#263342] shadow-sm">
                    <h4 className="font-display font-bold uppercase tracking-wider text-sm sm:text-base text-[#F8FAFC] border-b border-[#263342] pb-1.5 flex items-center justify-between">
                      <span>FRONTEND & UI</span>
                      <Code2 className="w-3.5 h-3.5 text-[#22D3EE]" />
                    </h4>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['React', 'Next.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design'].map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#121923] border border-[#263342] text-[11px] font-semibold text-[#F8FAFC] shadow-[0_1px_2px_rgba(0,0,0,0.2)] hover:border-[#22D3EE] hover:text-[#22D3EE] transition-colors"
                        >
                          {getRealisticSkillIcon(skill, undefined, 14)}
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                    <p className="text-[11px] text-[#94A3B8] leading-relaxed pt-1">
                      Component architecture, accessible state management, and modern CSS layout patterns.
                    </p>
                  </div>

                  {/* Column 2: AI/ML & Engineering */}
                  <div className="space-y-2.5 p-3.5 rounded-xl bg-[#1A2430] border border-[#263342] shadow-sm">
                    <h4 className="font-display font-bold uppercase tracking-wider text-sm sm:text-base text-[#22D3EE] border-b border-[#263342] pb-1.5 flex items-center justify-between">
                      <span>AI/ML & DEV TOOLS</span>
                      <Cpu className="w-3.5 h-3.5 text-[#22D3EE]" />
                    </h4>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['Python', 'Computer Vision', 'OpenCV', 'Pandas', 'Git', 'GitHub', 'REST APIs'].map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#121923] border border-[#263342] text-[11px] font-semibold text-[#F8FAFC] shadow-[0_1px_2px_rgba(0,0,0,0.2)] hover:border-[#22D3EE] hover:text-[#22D3EE] transition-colors"
                        >
                          {getRealisticSkillIcon(skill, undefined, 14)}
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                    <p className="text-[11px] text-[#94A3B8] leading-relaxed pt-1">
                      Real-time facial landmark estimation, statistical pipelines, and atomic git collaboration.
                    </p>
                  </div>
                </div>

                <div className="pt-1">
                  <Link
                    to="/skills"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#22D3EE] hover:text-[#06B6D4] transition-colors"
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
              aspectClass="aspect-[4/3]"
              badgeText="Engineering Track"
              subBadgeText="hands-on execution"
              caption="Workstation • Research & Development"
              tagText="Active Development"
            >
              <div className="space-y-4">
                {/* 2-Column Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Col 1 */}
                  <div className="space-y-2 p-3.5 rounded-xl bg-[#1A2430] border border-[#263342] shadow-sm">
                    <div className="text-[11px] font-bold text-[#22D3EE] uppercase tracking-wider">
                      2023 — 2027
                    </div>
                    <h4 className="font-display font-bold uppercase tracking-tight text-base sm:text-lg text-[#F8FAFC] leading-snug">
                      SANSKRITI UNIVERSITY
                    </h4>
                    <p className="text-xs font-semibold text-[#22D3EE]">
                      B.Tech Project Lead (Academic)
                    </p>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      Hands-on execution of computer vision pipelines, real-time safety monitoring models, and full-stack software development projects in academic labs.
                    </p>
                  </div>

                  {/* Col 2 */}
                  <div className="space-y-2 p-3.5 rounded-xl bg-[#1A2430] border border-[#263342] shadow-sm">
                    <div className="text-[11px] font-bold text-[#22D3EE] uppercase tracking-wider">
                      2023 — PRESENT
                    </div>
                    <h4 className="font-display font-bold uppercase tracking-tight text-base sm:text-lg text-[#F8FAFC] leading-snug">
                      INDEPENDENT RESEARCH
                    </h4>
                    <p className="text-xs font-semibold text-[#22D3EE]">
                      AI & Software Development
                    </p>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      Building production-grade client apps like Sacha Sauda, machine learning forecasting algorithms, and continuous mastery of modern web architecture.
                    </p>
                  </div>
                </div>

                <div className="pt-1">
                  <Link
                    to="/experience"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#22D3EE] hover:text-[#06B6D4] transition-colors"
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
              aspectClass="aspect-[4/3]"
              badgeText={featuredProjects[activeProjectTab]?.category || 'Engineering Project'}
              subBadgeText={
                activeProjectTab === 3
                  ? 'artisanal bakery'
                  : activeProjectTab === 2
                  ? 'predictive analytics'
                  : activeProjectTab === 1
                  ? 'home & construction'
                  : 'driver safety'
              }
              caption={featuredProjects[activeProjectTab]?.title || 'Featured Project'}
              tagText={
                activeProjectTab === 3
                  ? 'React Production'
                  : activeProjectTab === 2
                  ? 'Scikit-Learn ML'
                  : activeProjectTab === 1
                  ? 'Marketplace'
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
                          ? 'bg-[#22D3EE] text-[#0B0F14] shadow-sm font-semibold'
                          : 'bg-[#1A2430] border border-[#263342] text-[#94A3B8] hover:bg-[#121923] hover:text-[#F8FAFC]'
                      }`}
                    >
                      {p.title}
                    </button>
                  ))}
                </div>

                {/* Active Project Highlight Box */}
                {featuredProjects[activeProjectTab] && (
                  <div className="p-4 rounded-xl bg-[#1A2430] border border-[#263342] shadow-sm space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#263342] pb-2">
                      <div>
                        <h4 className="font-display font-bold uppercase tracking-tight text-lg text-[#F8FAFC]">
                          {featuredProjects[activeProjectTab].title}
                        </h4>
                        <span className="text-[11px] text-[#22D3EE] font-semibold">
                          {featuredProjects[activeProjectTab].category}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={featuredProjects[activeProjectTab].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#121923] border border-[#263342] text-[11px] font-semibold text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#22D3EE] transition-colors"
                        >
                          <GithubIcon size={12} />
                          <span>Code</span>
                        </a>

                        <a
                          href={featuredProjects[activeProjectTab].demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#22D3EE] text-[#0B0F14] text-[11px] font-semibold hover:bg-[#06B6D4] transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Live</span>
                        </a>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {featuredProjects[activeProjectTab].summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {featuredProjects[activeProjectTab].tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-[#121923] border border-[#263342] text-[10px] font-semibold text-[#22D3EE]"
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
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#22D3EE] hover:text-[#06B6D4] transition-colors"
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
              frameShape="architectural"
              aspectClass="aspect-[4/3]"
              badgeText="Direct Inquiries"
              subBadgeText="let's work together"
              caption="Available for Opportunities"
              tagText="Collaborate"
            >
              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  I am available for full-time frontend roles, internships, and high-impact engineering projects. Feel free to connect directly via any channel:
                </p>

                {/* 4 Icon rows */}
                <div className="space-y-2.5 pt-1">
                  {/* Phone */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#1A2430] border border-[#263342] shadow-sm gap-2">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-[#121923] text-[#22D3EE] border border-[#263342] flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-[#F8FAFC] truncate">
                        {settings.phone}
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopy(settings.phone, 'Phone number')}
                      className="p-1.5 rounded-lg text-[#94A3B8] hover:text-[#22D3EE] hover:bg-[#121923] transition-colors shrink-0"
                      title="Copy Phone"
                    >
                      {copiedField === 'Phone number' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Email */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#1A2430] border border-[#263342] shadow-sm gap-2">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-[#121923] text-[#22D3EE] border border-[#263342] flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-[#F8FAFC] truncate">
                        {settings.email}
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopy(settings.email, 'Email address')}
                      className="p-1.5 rounded-lg text-[#94A3B8] hover:text-[#22D3EE] hover:bg-[#121923] transition-colors shrink-0"
                      title="Copy Email"
                    >
                      {copiedField === 'Email address' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* GitHub */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#1A2430] border border-[#263342] shadow-sm gap-2">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-[#121923] text-[#22D3EE] border border-[#263342] flex items-center justify-center shrink-0">
                        <GithubIcon size={16} />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-[#F8FAFC] truncate">
                        github.com/Anshsahu275-max
                      </span>
                    </div>
                    <a
                      href={settings.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-[#94A3B8] hover:text-[#22D3EE] hover:bg-[#121923] transition-colors shrink-0"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Location */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#1A2430] border border-[#263342] shadow-sm gap-2">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-[#121923] text-[#22D3EE] border border-[#263342] flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-[#F8FAFC] truncate">
                        Mathura, Uttar Pradesh, India
                      </span>
                    </div>
                    <span className="text-[10px] text-[#94A3B8] uppercase tracking-widest font-semibold pr-2 shrink-0">
                      Location
                    </span>
                  </div>
                </div>

                <div className="pt-1">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#22D3EE] text-[#0B0F14] text-xs font-semibold hover:bg-[#06B6D4] shadow-sm transition-all"
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
              frameShape="architectural"
              aspectClass="aspect-[4/3]"
              imageClassName="object-top"
              badgeText="Closing Appreciation"
              subBadgeText="thank you"
              caption="Ansh Sahu • Engineering"
              tagText="Signature"
            >
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-[#F8FAFC] font-medium leading-relaxed">
                  Thank you for taking the time to view my portfolio presentation.
                </p>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  I am actively preparing for frontend engineering opportunities where I can apply modern React architecture, algorithmic rigor, and responsive UX design to build meaningful software.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#22D3EE] hover:bg-[#06B6D4] text-[#0B0F14] text-xs sm:text-sm font-semibold shadow-sm transition-all"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Download Complete Resume</span>
                  </a>

                  <a
                    href={settings.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1A2430] border border-[#263342] hover:bg-[#121923] hover:border-[#22D3EE] text-[#F8FAFC] text-xs sm:text-sm font-semibold transition-all"
                  >
                    <LinkedinIcon size={14} className="text-[#22D3EE]" />
                    <span>Connect on LinkedIn</span>
                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1A2430] text-xs font-semibold"
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
