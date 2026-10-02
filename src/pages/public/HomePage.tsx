import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Code2, 
  Layers, 
  Sparkles, 
  FolderGit2, 
  User, 
  FileText,
  BrainCircuit
} from 'lucide-react';
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
      icon: <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      description: 'Building modular, accessible, and responsive user interfaces with React, Next.js, TypeScript, and Tailwind CSS.'
    },
    {
      title: 'Algorithmic & AI Foundation',
      icon: <BrainCircuit className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      description: 'Applying strong computational logic, data structure discipline, and AI/ML intuition to solve real engineering problems.'
    },
    {
      title: 'Speed & Clean Architecture',
      icon: <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description: 'Prioritizing readable code, fast load times, semantic HTML, and fluid user interactions across all devices.'
    }
  ];

  // Portfolio Section Hub (Direct gateways to each separate section)
  const portfolioSections = [
    {
      title: 'About Ansh',
      category: 'Biography & Mindset',
      description: 'Academic background at Sanskriti University, core focus areas, and pragmatic engineering philosophy.',
      icon: <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      path: '/about',
      actionText: 'View Bio & Philosophy'
    },
    {
      title: 'Technical Skills',
      category: 'Stack & Capabilities',
      description: 'Categorized breakdown of competencies across frontend frameworks, development workflows, and AI/ML tools.',
      icon: <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      path: '/skills',
      actionText: 'Explore Skills Matrix'
    },
    {
      title: 'Featured Projects',
      category: 'Production Systems',
      description: 'Curated projects spanning computer vision safety systems, responsive web applications, and predictive ML models.',
      icon: <FolderGit2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      path: '/projects',
      actionText: 'Browse All Projects'
    },
    {
      title: 'University Education',
      category: 'Academics (2023–2027)',
      description: 'Formal B.Tech CSE (AI & ML) studies at Sanskriti University, core coursework, and foundational curricula.',
      icon: <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      path: '/education',
      actionText: 'View Academic Details'
    },
    {
      title: 'Curriculum Vitae',
      category: 'Resume & Credentials',
      description: 'Comprehensive resume summary formatted for recruiters, with instant browser preview and PDF download.',
      icon: <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      path: '/resume',
      actionText: 'Inspect Web Resume'
    },
    {
      title: 'Get In Touch',
      category: 'Direct Inquiries',
      description: 'Send a direct message or connect across email, phone, GitHub, and LinkedIn for roles or projects.',
      icon: <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      path: '/contact',
      actionText: 'Open Contact Form'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 font-sans">
      {/* ========================================================
          1. HERO SECTION (HOME DETAILS ONLY)
          ======================================================== */}
      <section className="pt-4 sm:pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Hero Intro */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Status Badge */}
              <div className="inline-flex items-center">
                <Badge variant="live" size="md" pulse>
                  Available for Frontend Developer Roles
                </Badge>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                  Hi, I'm <span className="text-blue-600 dark:text-blue-400">Ansh</span>.
                  <br />
                  Frontend Developer.
                </h1>
                <p className="text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400">
                  B.Tech in Computer Science & Engineering (AI & ML) • Sanskriti University (2023–2027)
                </p>
              </div>

              {/* Short Introduction */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                I build clean, responsive, and high-performance web applications using React, Next.js, and modern CSS, backed by a strong foundation in computer science and AI/ML.
              </p>

              {/* Main CTA Buttons */}
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
                  <Button size="lg" variant="secondary" icon={<FileDown className="w-4 h-4" />}>
                    Download Resume
                  </Button>
                </a>

                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Contact Me
                  </Button>
                </Link>
              </div>

              {/* Direct Social Links */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-500 mr-1">Profiles:</span>
                
                <SocialTooltip label="View GitHub Profile">
                  <a
                    href={settings.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                  >
                    <LinkedinIcon size={14} className="text-blue-600 dark:text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </SocialTooltip>
              </div>
            </motion.div>

            {/* Right Column: Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ease-out space-y-5 hover:-translate-y-1 group">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-100 dark:border-slate-800">
                  <img
                    src="/ansh-profile.jpg"
                    alt="Ansh - Frontend Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-slate-200 dark:border-slate-700 py-1 px-2.5 rounded-md shadow-sm">
                    <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                      Sanskriti University • 2023–2027
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white">Ansh</h2>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                        Frontend Developer
                      </p>
                    </div>
                    <Badge variant="brand" size="sm">
                      B.Tech CSE
                    </Badge>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Specialization: AI & Machine Learning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Mathura, Uttar Pradesh, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-hidden="true">
        <div className="border-t border-slate-200/70 dark:border-slate-800/70" />
      </div>

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
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 ease-out space-y-3 h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center">
                        {pillar.icon}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
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

      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-hidden="true">
        <div className="border-t border-slate-200/70 dark:border-slate-800/70" />
      </div>

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
                    className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between h-full block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 group-hover:scale-105 transition-transform duration-200">
                          {item.icon}
                        </div>
                        <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md border border-blue-200/50 dark:border-blue-800/50">
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

      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-hidden="true">
        <div className="border-t border-slate-200/70 dark:border-slate-800/70" />
      </div>

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
