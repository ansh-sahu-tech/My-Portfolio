import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  FileDown, 
  MapPin, 
  GraduationCap,
  FileText
} from 'lucide-react';
import {
  RealFrontendIcon,
  RealAiBrainIcon,
  RealSpeedRocketIcon,
  RealUserAvatarIcon,
  RealTechSkillsIcon,
  RealProjectsFolderIcon,
  RealEducationCapIcon,
  RealResumeDocIcon,
  RealContactMailIcon
} from '../../components/common/RealisticIcons';
import { useData } from '../../context/DataContext';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { SectionHeader } from '../../components/common/SectionHeader';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { GithubIcon, LinkedinIcon, SocialTooltip } from '../../components/common/SocialIcons';

export const HomePage: React.FC = () => {
  const { settings } = useData();

  // Core Engineering Pillars (Home exclusive)
  const corePillars = [
    {
      title: 'Modern Frontend Engineering',
      icon: <RealFrontendIcon size={42} />,
      description: 'Building modular, accessible, and responsive user interfaces with React, Next.js, TypeScript, and Tailwind CSS.'
    },
    {
      title: 'Algorithmic & AI Foundation',
      icon: <RealAiBrainIcon size={42} />,
      description: 'Applying strong computational logic, data structure discipline, and AI/ML intuition to solve real engineering problems.'
    },
    {
      title: 'Speed & Clean Architecture',
      icon: <RealSpeedRocketIcon size={42} />,
      description: 'Prioritizing readable code, fast load times, semantic HTML, and fluid user interactions across all devices.'
    }
  ];

  // Portfolio Section Hub (Direct gateways to each separate section)
  const portfolioSections = [
    {
      title: 'About Ansh',
      category: 'Biography & Mindset',
      description: 'Academic background at Sanskriti University, core focus areas, and pragmatic engineering philosophy.',
      icon: <RealUserAvatarIcon size={42} />,
      path: '/about',
      actionText: 'View Bio & Philosophy'
    },
    {
      title: 'Technical Skills',
      category: 'Stack & Capabilities',
      description: 'Categorized breakdown of competencies across frontend frameworks, development workflows, and AI/ML tools.',
      icon: <RealTechSkillsIcon size={42} />,
      path: '/skills',
      actionText: 'Explore Skills Matrix'
    },
    {
      title: 'Featured Projects',
      category: 'Production Systems',
      description: 'Curated projects spanning computer vision safety systems, responsive web applications, and predictive ML models.',
      icon: <RealProjectsFolderIcon size={42} />,
      path: '/projects',
      actionText: 'Browse All Projects'
    },
    {
      title: 'University Education',
      category: 'Academics (2023–2027)',
      description: 'Formal B.Tech CSE (AI & ML) studies at Sanskriti University, core coursework, and foundational curricula.',
      icon: <RealEducationCapIcon size={42} />,
      path: '/education',
      actionText: 'View Academic Details'
    },
    {
      title: 'Curriculum Vitae',
      category: 'Resume & Credentials',
      description: 'Comprehensive resume summary formatted for recruiters, with instant browser preview and PDF download.',
      icon: <RealResumeDocIcon size={42} />,
      path: '/resume',
      actionText: 'Inspect Web Resume'
    },
    {
      title: 'Get In Touch',
      category: 'Direct Inquiries',
      description: 'Send a direct message or connect across email, phone, GitHub, and LinkedIn for roles or projects.',
      icon: <RealContactMailIcon size={42} />,
      path: '/contact',
      actionText: 'Open Contact Form'
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 font-sans">
      {/* ========================================================
          1. HERO SECTION (REDESIGNED EDITORIAL HOMEPAGE HERO)
          ======================================================== */}
      <section className="pt-2 sm:pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-[#090d16] border border-slate-800 shadow-2xl overflow-hidden text-white transition-all duration-300">
            {/* Ambient Background Glows */}
            <div 
              aria-hidden="true" 
              className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" 
            />
            <div 
              aria-hidden="true" 
              className="absolute top-1/2 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
            />

            <div className="relative z-10 p-6 sm:p-10 lg:p-12 xl:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                {/* Left Column: Editorial Introduction & Identity */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="lg:col-span-7 space-y-6"
                >
                  {/* Status & Role Pill (Matching reference tag concept) */}
                  <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-200 shadow-inner">
                    <span className="w-2 h-2 rounded-sm bg-blue-500 shadow-sm shadow-blue-500/50" />
                    <span>FRONTEND DEVELOPER</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-emerald-400 font-medium normal-case sm:uppercase flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Available for Roles
                    </span>
                  </div>

                  {/* Main Headline Hierarchy (Inspired by reference 3-tier bold typographic stack) */}
                  <div className="space-y-3">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight leading-[1.05]">
                      <span className="block text-white">HI, I'M ANSH</span>
                      <span className="block text-slate-400/90 font-extrabold">FRONTEND</span>
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                        DEVELOPER
                      </span>
                    </h1>

                    {/* Academic & Location Subtitle */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 text-xs sm:text-sm font-medium text-slate-300/90">
                      <div className="flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>B.Tech CSE (AI & ML) • Sanskriti University (2023–2027)</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Mathura, UP, India</span>
                      </div>
                    </div>
                  </div>

                  {/* Short Introduction Description */}
                  <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-xl leading-relaxed">
                    I build clean, responsive, and high-performance web applications using React, Next.js, and modern CSS, backed by a strong foundation in computer science and AI/ML.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Link to="/projects">
                      <Button size="lg" variant="primary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                        View Projects
                      </Button>
                    </Link>

                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        size="lg" 
                        variant="secondary" 
                        icon={<FileDown className="w-4 h-4" />}
                        className="bg-slate-800/90 hover:bg-slate-700 text-slate-100 border-slate-700 shadow-sm"
                      >
                        Download Resume
                      </Button>
                    </a>

                    <Link to="/contact">
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800/50"
                      >
                        Contact Me
                      </Button>
                    </Link>
                  </div>

                  {/* Direct Social Links */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800 text-xs text-slate-400">
                    <span className="font-semibold text-slate-400 mr-1">Profiles:</span>
                    
                    <SocialTooltip label="View GitHub Profile">
                      <a
                        href={settings.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                      >
                        <GithubIcon size={14} />
                        <span>GitHub</span>
                      </a>
                    </SocialTooltip>

                    <SocialTooltip label="View LinkedIn Profile">
                      <a
                        href={settings.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                      >
                        <LinkedinIcon size={14} className="text-blue-400" />
                        <span>LinkedIn</span>
                      </a>
                    </SocialTooltip>
                  </div>
                </motion.div>

                {/* Right Column: Profile Image with Abstract Orb & Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="lg:col-span-5 flex justify-center lg:justify-end"
                >
                  <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px] flex items-center justify-center">
                    {/* Abstract Circular Orb Backdrop (Inspired by reference halo) */}
                    <div 
                      aria-hidden="true" 
                      className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-amber-600/75 via-rose-700/50 to-blue-700/40 blur-xl opacity-80 pointer-events-none transform -rotate-12"
                    />
                    <div 
                      aria-hidden="true" 
                      className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-tr from-amber-600 via-orange-600/70 to-indigo-900/50 border border-white/10 shadow-2xl pointer-events-none transform -rotate-6"
                    />

                    {/* Profile Image Frame */}
                    <div className="relative z-10 w-full aspect-[4/5] rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
                      <img
                        src="/ansh-profile.jpg"
                        alt="Ansh - Frontend Developer"
                        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      
                      {/* Bottom Image Gradient Overlay for Depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                      {/* Floating Info Tag inside bottom of photo */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-slate-900/90 backdrop-blur-md border border-slate-700/70 py-1.5 px-3 rounded-xl shadow-lg">
                        <div>
                          <p className="text-xs font-bold text-white leading-tight">Ansh</p>
                          <p className="text-[10px] text-blue-400 font-medium">B.Tech CSE (AI & ML)</p>
                        </div>
                        <span className="text-[10px] font-semibold text-slate-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                          2023–2027
                        </span>
                      </div>
                    </div>

                    {/* Prominent Floating Circular CTA Badge (Direct homage to "HIRE ME NOW" badge in reference) */}
                    <Link
                      to="/contact"
                      className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white shadow-xl shadow-orange-950/50 flex flex-col items-center justify-center p-2 text-center group cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                      aria-label="Hire Ansh - Go to Contact Page"
                    >
                      <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider leading-tight text-white group-hover:tracking-widest transition-all">
                        HIRE ME
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wide text-amber-100">
                        NOW
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 mt-0.5 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Lower Typographic Visual Element (Inspired by the massive "PORTIX WILLSON" signature typography) */}
              <div 
                aria-hidden="true" 
                className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-slate-800/80 overflow-hidden select-none pointer-events-none"
              >
                <div className="w-full flex items-center justify-between">
                  <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] xl:text-[9.5rem] font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white/25 via-white/10 to-transparent leading-none whitespace-nowrap">
                    ANSH SAHU
                  </span>
                  <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-slate-500 font-bold border border-slate-800 px-3 py-1 rounded-full">
                    PORTFOLIO 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. CORE ENGINEERING PILLARS (HOME EXCLUSIVE)
          ======================================================== */}
      <section>
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Engineering Focus"
              badgeVariant="brand"
              title="Core"
              highlightText="Technical Pillars"
              description="A balanced developer profile combining modern frontend implementation with an algorithmic computer science foundation."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {corePillars.map((pillar, idx) => (
                <ScrollReveal key={pillar.title} delay={idx * 0.08}>
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 ease-out space-y-4 h-full flex flex-col justify-between group">
                    <div className="space-y-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/40 dark:from-slate-800/90 dark:to-slate-850 border border-slate-200/90 dark:border-slate-700/80 flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                        {pillar.icon}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================
          3. EXPLORE DEDICATED SECTIONS (GATEWAY DIRECTORY)
          ======================================================== */}
      <section>
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Portfolio Directory"
              badgeVariant="brand"
              title="Dedicated"
              highlightText="Section Information"
              description="Each navbar section contains its own separate, comprehensive information. Select any area below to explore."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioSections.map((item, idx) => (
                <ScrollReveal key={item.title} delay={idx * 0.06}>
                  <Link
                    to={item.path}
                    className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between h-full block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/80 dark:from-slate-800 dark:to-slate-850 border border-slate-200/90 dark:border-slate-700/80 flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                          {item.icon}
                        </div>
                        <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-200/50 dark:border-blue-800/50">
                          {item.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform duration-200">
                      <span>{item.actionText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================
          4. CALL TO ACTION BANNER (HOME EXCLUSIVE)
          ======================================================== */}
      <section>
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white border border-slate-800 rounded-2xl p-8 sm:p-12 shadow-md relative overflow-hidden">
              <div className="relative z-10 max-w-3xl space-y-4">
                <Badge variant="brand" size="md">
                  Let's Build Something Great
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Looking for a dedicated Frontend Developer?
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  I am available for full-time frontend roles, internships, and collaborative software engineering projects. Reach out directly or review my complete resume.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link to="/contact">
                    <Button size="md" variant="primary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                      Contact Ansh
                    </Button>
                  </Link>

                  <Link to="/resume">
                    <Button size="md" variant="secondary" icon={<FileText className="w-4 h-4" />}>
                      View Online Resume
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Subtle background decoration */}
              <div 
                aria-hidden="true" 
                className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" 
              />
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default HomePage;
