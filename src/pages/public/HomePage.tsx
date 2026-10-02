import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Calendar,
  Code2,
  Layers,
  Cpu,
  Send,
  CheckCircle2,
  Sparkles,
  Palette,
  FileCode,
  Atom,
  Wind,
  GitBranch,
  Network,
  Smartphone,
  BrainCircuit,
  Eye,
  BarChart2
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { SectionHeader } from '../../components/common/SectionHeader';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { ProjectCard } from '../../components/projects/ProjectCard';
import { ProjectDetailModal } from '../../components/projects/ProjectDetailModal';
import { GithubIcon, LinkedinIcon, SocialTooltip } from '../../components/common/SocialIcons';
import type { Project } from '../../types';

export const HomePage: React.FC = () => {
  const { settings, projects, addMessage } = useData();
  const { showToast } = useToast();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Contact Form State
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form submission handler
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      showToast('Please fill in your name, email and message.', 'error');
      return;
    }

    setIsSubmitting(true);
    try {
      await addMessage({
        name: formState.name,
        email: formState.email,
        subject: formState.subject || 'Portfolio Inquiry',
        message: formState.message,
      });
      showToast('Thank you! Your message has been sent successfully.', 'success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch {
      showToast('Failed to send message. Please try again or email directly.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filter the 4 designated strong projects
  const displayProjects = projects.filter((p) => p.published).slice(0, 4);

  // Skills organized into the 3 exact requested categories
  const skillCategories = [
    {
      name: 'Frontend',
      description: 'Building responsive, accessible, and high-performance user interfaces',
      skills: [
        { name: 'HTML', icon: <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
        { name: 'CSS', icon: <Palette className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
        { name: 'JavaScript', icon: <FileCode className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
        { name: 'React', icon: <Atom className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
        { name: 'Next.js', icon: <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
        { name: 'Tailwind CSS', icon: <Wind className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
      ]
    },
    {
      name: 'Development',
      description: 'Version control, API communication, and responsive engineering standards',
      skills: [
        { name: 'Git', icon: <GitBranch className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> },
        { name: 'GitHub', icon: <GithubIcon size={16} className="text-emerald-600 dark:text-emerald-400" /> },
        { name: 'REST APIs', icon: <Network className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> },
        { name: 'Responsive Design', icon: <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> },
      ]
    },
    {
      name: 'AI/ML',
      description: 'Algorithmic problem-solving, computer vision, and predictive data modeling',
      skills: [
        { name: 'Python', icon: <Code2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> },
        { name: 'Machine Learning', icon: <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> },
        { name: 'Artificial Intelligence', icon: <BrainCircuit className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> },
        { name: 'Computer Vision', icon: <Eye className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> },
        { name: 'Data Analysis', icon: <BarChart2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> },
      ]
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section id="home" className="pt-4 sm:pt-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Hero Text */}
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
                <p className="text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400">
                  B.Tech in Computer Science & Engineering (AI & ML) • Sanskriti University (2023–2027)
                </p>
              </div>

              {/* Short Professional Intro */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                I specialize in crafting clean, accessible, and fast web experiences using modern React, Next.js, and Tailwind CSS. Backed by a strong academic foundation in algorithms, computer vision, and machine learning.
              </p>

              {/* Primary Call-to-Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Button size="lg" variant="primary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                    View Projects
                  </Button>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="secondary" icon={<FileDown className="w-4 h-4" />}>
                    Download Resume
                  </Button>
                </a>
              </div>

              {/* Direct Social & Contact Links */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-500 mr-1">Connect:</span>
                
                <SocialTooltip label="View GitHub">
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

                <SocialTooltip label="View LinkedIn">
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

                <SocialTooltip label="Send Direct Email">
                  <a
                    href={`mailto:${settings.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                  >
                    <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Email</span>
                  </a>
                </SocialTooltip>

                <SocialTooltip label="Call Contact Number">
                  <a
                    href={`tel:${settings.phone}`}
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>{settings.phone}</span>
                  </a>
                </SocialTooltip>
              </div>
            </motion.div>

            {/* Right Column: Clean Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ease-out space-y-5 hover:-translate-y-1 group">
                {/* Photo Container */}
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

                {/* Identity Summary */}
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

      {/* ========================================================
          2. ABOUT SECTION
          ======================================================== */}
      <section id="about" className="scroll-mt-24">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="About Me"
              badgeVariant="brand"
              title="Clean Code &"
              highlightText="User-Centric Interfaces"
              description="A concise overview of my background, technical philosophy, and how I bridge modern frontend engineering with data-driven AI systems."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Bio Details */}
              <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 ease-out space-y-4 hover:-translate-y-0.5">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Frontend Developer with AI Foundations
                </h3>
                
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  I am an undergraduate Computer Science & Engineering student at Sanskriti University (2023–2027) with a core focus on **Frontend Development** and practical applications of **Artificial Intelligence & Machine Learning**.
                </p>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  My day-to-day engineering revolves around writing maintainable TypeScript & React components, building fluid responsive layouts with Tailwind CSS, and integrating clean RESTful APIs. Because of my AI/ML coursework, I bring strong algorithmic intuition, rigorous debugging habits, and an understanding of data pipelines to every web application I build.
                </p>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Responsive, mobile-first design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Component-driven React architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Semantic, accessible HTML & WCAG</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Algorithmic problem solving & Python</span>
                  </div>
                </div>
              </div>

              {/* Key Strengths & Academic Snapshot */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ease-out space-y-3 hover:-translate-y-0.5">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4" />
                    <span>Current Education</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Sanskriti University, Mathura
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    B.Tech in Computer Science & Engineering (Specialization in AI & Machine Learning). 
                    Expected graduation in 2027.
                  </p>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                    <span>Batch: 2023 — 2027</span>
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">Enrolled & Active</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ease-out space-y-3 hover:-translate-y-0.5">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>Engineering Philosophy</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    "Prioritizing clarity over unnecessary complexity. Fast load times, responsive layouts that never break on mobile, and semantic accessibility for all users."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================
          3. SKILLS SECTION
          ======================================================== */}
      <section id="skills" className="scroll-mt-24">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Technical Matrix"
              badgeVariant="brand"
              title="Skills &"
              highlightText="Core Technologies"
              description="Categorized breakdown of the frontend libraries, development workflows, and AI/ML tools I actively use."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillCategories.map((category, idx) => (
                <ScrollReveal key={category.name} delay={idx * 0.08}>
                  <div
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between h-full group"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {category.name}
                        </h3>
                        <Badge variant="brand" size="sm">
                          {category.skills.length} Skills
                        </Badge>
                      </div>

                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 mb-4 leading-relaxed">
                        {category.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2">
                        {category.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-white dark:hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-default group/skill"
                          >
                            <span className="shrink-0 transition-transform duration-200 group-hover/skill:scale-110">
                              {skill.icon}
                            </span>
                            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors duration-200">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================
          4. PROJECTS SECTION
          ======================================================== */}
      <section id="projects" className="scroll-mt-24">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Selected Work"
              badgeVariant="brand"
              title="Featured"
              highlightText="Projects & Systems"
              description="Four strong projects showcasing real-time Computer Vision safety, responsive e-commerce web applications, and predictive machine learning modeling."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {displayProjects.map((project, idx) => (
                <ScrollReveal key={project.id} delay={idx * 0.08}>
                  <ProjectCard
                    project={project}
                    onOpenDetails={(p) => setSelectedProject(p)}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================
          5. EDUCATION SECTION
          ======================================================== */}
      <section id="education" className="scroll-mt-24">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Academics"
              badgeVariant="brand"
              title="Education &"
              highlightText="University Foundation"
              description="Specialized undergraduate studies focusing on computer science, web engineering, and artificial intelligence architectures."
            />

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      Sanskriti University
                    </h3>
                    <Badge variant="brand" size="sm">
                      Active Student
                    </Badge>
                  </div>
                  <p className="text-base font-semibold text-blue-600 dark:text-blue-400">
                    Bachelor of Technology (B.Tech) — Computer Science & Engineering
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    Specialization: Artificial Intelligence & Machine Learning (AI & ML)
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-1.5 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>2023 — 2027 (Expected)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Mathura, Uttar Pradesh, India</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                    Core Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Data Structures & Algorithms',
                      'Web Technologies & Development',
                      'Database Management Systems (DBMS)',
                      'Object-Oriented Programming (OOP)',
                      'Computer Networks',
                      'Operating Systems',
                      'Machine Learning & Deep Learning',
                      'Computer Vision & Image Processing',
                      'Probability & Statistics'
                    ].map((course) => (
                      <span
                        key={course}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-700/80 transition-all duration-150 cursor-default"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                    Practical Highlights & Focus
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span>Hands-on implementation of responsive web interfaces and client-side single page applications.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span>Edge computer vision engineering with OpenCV for real-time driver fatigue monitoring.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span>Supervised predictive analytics and exploratory data analysis using Python and Scikit-learn.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================
          6. CONTACT SECTION
          ======================================================== */}
      <section id="contact" className="scroll-mt-24">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Contact"
              badgeVariant="brand"
              title="Let's"
              highlightText="Get In Touch"
              description="Whether you have an internship opportunity, frontend role, or project inquiry, I would love to connect."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Direct Contact Cards */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ease-out space-y-4 hover:-translate-y-0.5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Direct Information
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Feel free to reach out via email, phone, or connect directly on LinkedIn.
                  </p>

                  <div className="space-y-3 pt-2">
                    <a
                      href={`mailto:${settings.email}`}
                      className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-blue-50/50 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 group active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                    >
                      <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform duration-200">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[11px] font-medium text-slate-400">Email Address</p>
                        <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {settings.email}
                        </p>
                      </div>
                    </a>

                    <a
                      href={`tel:${settings.phone}`}
                      className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-emerald-50/50 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 group active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                    >
                      <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform duration-200">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[11px] font-medium text-slate-400">Phone</p>
                        <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                          {settings.phone}
                        </p>
                      </div>
                    </a>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
                      <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[11px] font-medium text-slate-400">Location</p>
                        <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                          Mathura, Uttar Pradesh, India
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                    <a
                      href={settings.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                    >
                      <GithubIcon size={14} /> GitHub
                    </a>
                    <a
                      href={settings.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-lg bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 border border-blue-200/60 dark:border-blue-800/60 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                    >
                      <LinkedinIcon size={14} /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Recruiter / Visitor Message Form */}
              <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 ease-out">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Send a Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                  Have a question or role in mind? Drop a message below and I will respond promptly.
                </p>

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 transition-all duration-200"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-subject" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="Frontend Developer Role / Opportunity"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder="Hi Ansh, I saw your portfolio and would like to discuss..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 transition-all duration-200 resize-y"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    isLoading={isSubmitting}
                    icon={<Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                    className="w-full sm:w-auto"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </ScrollReveal>
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
