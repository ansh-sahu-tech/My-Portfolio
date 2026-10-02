import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  BarChart2,
  BookOpen,
  FileText,
  ExternalLink
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

  // 4 Designated Strong Projects
  const targetProjectSlugs = [
    'ai-driver-awareness-system',
    'sacha-sauda',
    'student-performance-prediction',
    'swagatam-vijay-bakers',
  ];

  const displayProjects = useMemo(() => {
    const matched = targetProjectSlugs
      .map((slug) => projects.find((p) => p.slug === slug || p.id === slug))
      .filter((p): p is Project => !!p && p.published);

    if (matched.length >= 4) return matched;
    const remaining = projects.filter((p) => p.published && !matched.some((m) => m.id === p.id));
    return [...matched, ...remaining].slice(0, 4);
  }, [projects]);

  // Clean categorized technical skills without unnecessary descriptions
  const skillCategories = [
    {
      name: 'Frontend',
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
      skills: [
        { name: 'Git', icon: <GitBranch className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> },
        { name: 'GitHub', icon: <GithubIcon size={16} className="text-emerald-600 dark:text-emerald-400" /> },
        { name: 'REST APIs', icon: <Network className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> },
        { name: 'Responsive Design', icon: <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> },
      ]
    },
    {
      name: 'AI/ML',
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
          1. HOME SECTION
          - Short introduction
          - Frontend Developer identity
          - B.Tech CSE AI&ML
          - Main CTA buttons
          ======================================================== */}
      <section id="home" className="pt-4 sm:pt-10 scroll-mt-24">
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

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Button size="lg" variant="outline">
                    Contact Me
                  </Button>
                </a>
              </div>

              {/* Direct Social & Contact Channels */}
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

      {/* ========================================================
          2. ABOUT SECTION
          - Only personal/professional introduction
          - B.Tech CSE AI&ML background
          - Frontend development focus
          - No project details or skill lists
          ======================================================== */}
      <section id="about" className="scroll-mt-24">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="About Me"
              badgeVariant="brand"
              title="Professional"
              highlightText="Introduction & Focus"
              description="Personal background and engineering mindset bridging modern frontend development with a strong computer science foundation."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Professional Introduction */}
              <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 ease-out space-y-4 hover:-translate-y-0.5">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Frontend Developer with Computer Science & AI/ML Background
                </h3>
                
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  I am an undergraduate Computer Science & Engineering student at Sanskriti University (2023–2027) with a dedicated focus on frontend web development.
                </p>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  My primary focus is crafting responsive, accessible, and fast web experiences. I concentrate on writing clean, modular component code, building fluid layouts with modern CSS, and implementing smooth, user-centric interactions.
                </p>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Through my B.Tech coursework in Artificial Intelligence & Machine Learning, I bring strong algorithmic intuition, analytical problem-solving habits, and an understanding of data flows to every web application I build.
                </p>
              </div>

              {/* Core Focus Cards - No project details or skill lists */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ease-out space-y-2 hover:-translate-y-0.5">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
                    <Code2 className="w-4 h-4" />
                    <span>Frontend Engineering Focus</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Dedicated to component-driven architectures, responsive mobile-first design, and clean web standards that prioritize user accessibility and speed.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ease-out space-y-2 hover:-translate-y-0.5">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4" />
                    <span>Academic Foundation</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Undergraduate B.Tech CSE (AI & ML) studies at Sanskriti University (2023–2027), fostering analytical thinking, algorithmic discipline, and software engineering rigor.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ease-out space-y-2 hover:-translate-y-0.5">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>Development Philosophy</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Writing maintainable, well-structured code with fast load times, semantic HTML, and intuitive design that solves real user needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================
          3. SKILLS SECTION
          - Only technical skills
          - Frontend, Development and AI/ML skills
          - Clean categorized layout
          - No unnecessary descriptions
          ======================================================== */}
      <section id="skills" className="scroll-mt-24">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Technical Skills"
              badgeVariant="brand"
              title="Skills &"
              highlightText="Technical Stack"
              description="Clean categorized breakdown of technical competencies across frontend, development, and AI/ML."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillCategories.map((category, idx) => (
                <ScrollReveal key={category.name} delay={idx * 0.08}>
                  <div
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between h-full group"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {category.name}
                        </h3>
                        <Badge variant="brand" size="sm">
                          {category.skills.length} Skills
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
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
          - Only projects
          - AI Driver Awareness System
          - Sacha Sauda
          - Student Performance Prediction
          - One additional strong existing project if suitable (Swagatam Vijay Bakers)
          - Screenshot, short description, tech stack, GitHub and Live Demo
          ======================================================== */}
      <section id="projects" className="scroll-mt-24">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Selected Projects"
              badgeVariant="brand"
              title="Featured"
              highlightText="Projects & Systems"
              description="Curated projects showcasing real-time Computer Vision safety, responsive e-commerce web applications, and predictive machine learning modeling."
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
          - Only education details
          - B.Tech CSE AI&ML
          - Sanskriti University
          - 2023–2027
          ======================================================== */}
      <section id="education" className="scroll-mt-24">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Academics"
              badgeVariant="brand"
              title="Education &"
              highlightText="University Foundation"
              description="Undergraduate academic credentials and formal engineering studies at Sanskriti University."
            />

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 space-y-6">
              {/* Institution Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="space-y-1.5">
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
                    <span>Session: 2023 — 2027 (Expected)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Mathura, Uttar Pradesh, India</span>
                  </div>
                </div>
              </div>

              {/* Core Relevant Coursework */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-8 space-y-2.5">
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                    Core Academic Curriculum
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Data Structures & Algorithms',
                      'Web Technologies & Development',
                      'Database Management Systems (DBMS)',
                      'Object-Oriented Programming (OOP)',
                      'Operating Systems',
                      'Computer Networks',
                      'Machine Learning & Deep Learning',
                      'Computer Vision',
                      'Discrete Mathematics & Statistics'
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

                <div className="md:col-span-4 space-y-2.5">
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                    Degree Details
                  </h4>
                  <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-white">Full-Time Undergraduate Degree</p>
                    <p>Rigorous computer science foundation combined with modern AI & machine learning curricula.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================
          6. CONTACT SECTION
          - Only contact information
          - Contact form
          - Email, phone, GitHub and LinkedIn
          - No unrelated content
          ======================================================== */}
      <section id="contact" className="scroll-mt-24">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Contact"
              badgeVariant="brand"
              title="Let's"
              highlightText="Get In Touch"
              description="Whether you have an internship opportunity, frontend role, or project inquiry, reach out directly."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Direct Contact Information */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ease-out space-y-4 hover:-translate-y-0.5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Direct Information
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Feel free to reach out via email, phone, or connect directly on LinkedIn and GitHub.
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

              {/* Message Form */}
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

      {/* ========================================================
          7. RESUME SECTION
          - Direct Resume View/Download
          - Recruiter-friendly summary & actions
          ======================================================== */}
      <section id="resume" className="scroll-mt-24">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Resume"
              badgeVariant="brand"
              title="Curriculum"
              highlightText="Vitae & Credentials"
              description="Direct resume access with options to view in browser or download as a formatted PDF."
            />

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300 ease-out space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <FileText className="w-4 h-4" />
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      Ansh — Resume
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    Frontend Developer • B.Tech CSE (AI & ML), Sanskriti University (2023–2027)
                  </p>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="md" variant="primary" icon={<ExternalLink className="w-4 h-4" />} iconPosition="right">
                      View PDF
                    </Button>
                  </a>

                  <a
                    href="/resume.pdf"
                    download="Ansh_Frontend_Developer_Resume.pdf"
                  >
                    <Button size="md" variant="secondary" icon={<FileDown className="w-4 h-4" />}>
                      Download Resume
                    </Button>
                  </a>

                  <Link to="/resume">
                    <Button size="md" variant="outline" icon={<FileText className="w-4 h-4" />}>
                      Web Resume
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Quick Credentials Summary Card */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
                  <span className="font-semibold text-slate-900 dark:text-white block">Education</span>
                  <p className="text-slate-600 dark:text-slate-400">
                    Sanskriti University • B.Tech in CSE (AI & ML), 2023–2027
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
                  <span className="font-semibold text-slate-900 dark:text-white block">Specialization</span>
                  <p className="text-slate-600 dark:text-slate-400">
                    Frontend Engineering, React Component Architecture, Applied AI/ML
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
                  <span className="font-semibold text-slate-900 dark:text-white block">Availability</span>
                  <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
                    Open for Frontend Developer Roles & Internships
                  </p>
                </div>
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

export default HomePage;
