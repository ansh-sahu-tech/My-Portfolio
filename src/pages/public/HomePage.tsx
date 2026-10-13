import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useData } from '../../context/DataContext';
import { useToast } from '../../context/ToastContext';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../../components/common/SocialIcons';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../../components/common/ScrollReveal';
import { ProjectCard } from '../../components/projects/ProjectCard';
import { ProjectDetailModal } from '../../components/projects/ProjectDetailModal';
import { initialProjects } from '../../data/initialProjects';
import type { Project } from '../../types';
import { HeroPortrait } from '../../components/home/HeroPortrait';
import { DeveloperTerminal } from '../../components/home/DeveloperTerminal';
import { TechMarquee } from '../../components/home/TechMarquee';
import { InteractiveSpotlightCard } from '../../components/home/InteractiveSpotlightCard';
import {
  RealisticTailwindIcon,
  RealisticJsIcon,
  RealisticReactIcon,
  RealisticNextjsIcon,
  RealisticPythonIcon,
  RealisticComputerVisionIcon,
  RealisticRestApisIcon,
  RealisticHtmlCssIcon,
  RealisticGitGithubIcon,
  RealisticFullStackIcon,
  RealisticResponsiveIcon,
  RealisticAiBrainIcon,
  RealisticPerformanceIcon,
  RealisticEcommerceIcon,
  RealisticDataAnalysisIcon,
  RealisticCloudDeployIcon,
} from '../../components/skills/RealisticSkillIcons';

export const HomePage: React.FC = () => {
  const { settings, addMessage, projects } = useData();
  const { success: showSuccess, error: showError, info: showInfo } = useToast();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = React.useMemo(() => {
    if (projects && projects.length > 0) {
      const active = projects.filter((p) => p.published !== false);
      if (active.length > 0) return active.slice(0, 4);
    }
    return initialProjects.slice(0, 4);
  }, [projects]);

  // Dynamic role cycling
  const roles = [
    'Frontend Developer',
    'AI & ML Engineer',
    'React & Next.js Specialist',
    'Data Analyst'
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Copy helper
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    showInfo(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const targetEmail = settings.email || 'anshcseaiml0169@gmail.com';
  const customEndpoint = settings.contactFormEndpoint?.trim();
  const endpoint = customEndpoint || `https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`;

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const subject = formData.subject.trim() || 'Portfolio Contact Submission';
    const message = formData.message.trim();

    if (!name || !email || !message) {
      const msg = 'Please fill in all required fields (Name, Email, Message).';
      setFormError(msg);
      showError('Missing Information', msg);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const msg = 'Please enter a valid email address.';
      setFormError(msg);
      showError('Invalid Email', msg);
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Dispatch to form endpoint
      await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          _subject: `Portfolio Inquiry from ${name}: ${subject}`,
          subject,
          message,
          _replyto: email,
          _captcha: 'false',
        }),
      }).catch(() => null);

      // 2. Archive in local context
      await addMessage({
        name,
        email,
        subject: phone ? `${subject} (Phone: ${phone})` : subject,
        message,
      });

      setIsSuccess(true);
      showSuccess('Message Dispatched', 'Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch {
      setFormError('Failed to send message. Please try sending via direct email.');
      showError('Submission Error', 'Failed to dispatch message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Technical Skills (enhanced with categories & realistic icons)
  const skillsList = [
    {
      name: 'Tailwind CSS',
      category: 'Styling & Design System',
      icon: <RealisticTailwindIcon size={32} />,
      desc: 'Creating responsive, modern, and clean layouts quickly using utility-first styling and fluid breakpoints.'
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'Core Programming',
      icon: <RealisticJsIcon size={32} />,
      desc: 'Writing efficient, modern ES6+, and optimized code for both complex frontend interactions and async logic.'
    },
    {
      name: 'React 19',
      category: 'Frontend Framework',
      icon: <RealisticReactIcon size={32} />,
      desc: 'Building fast, interactive, and component-based user interfaces with state management and custom hooks.'
    },
    {
      name: 'Next.js 15',
      category: 'Full-Stack & SSR',
      icon: <RealisticNextjsIcon size={32} />,
      desc: 'Developing high-performance applications with server and client components, SSR, and SEO-first routing.'
    },
    {
      name: 'Python & AI/ML',
      category: 'Machine Learning',
      icon: <RealisticPythonIcon size={32} />,
      desc: 'Applied machine learning architectures, statistical model training, and data manipulation pipelines.'
    },
    {
      name: 'Computer Vision',
      category: 'OpenCV & Edge Inference',
      icon: <RealisticComputerVisionIcon size={32} />,
      desc: 'OpenCV image processing, facial landmark tracking (EAR/MAR), and edge-ready real-time video inference.'
    },
    {
      name: 'REST APIs',
      category: 'Backend Integration',
      icon: <RealisticRestApisIcon size={32} />,
      desc: 'Connecting frontend clients to RESTful endpoints with robust error handling and asynchronous payload parsing.'
    },
    {
      name: 'HTML5 & CSS3',
      category: 'Semantic Web',
      icon: <RealisticHtmlCssIcon size={32} />,
      desc: 'Clean, semantic page structure with accessible DOM hierarchies, WCAG compliance, and modern CSS properties.'
    },
    {
      name: 'Git & GitHub',
      category: 'DevOps & Version Control',
      icon: <RealisticGitGithubIcon size={32} />,
      desc: 'Disciplined version control workflows, atomic commits, pull request management, and collaborative git practices.'
    }
  ];

  // Services List (matching Screenshot 1 & 2 Grid with Realistic Icons)
  const servicesList = [
    {
      title: 'Full-Stack & Frontend Web Development',
      desc: 'End-to-end web applications and modern SPAs engineered with React, Next.js, and clean component architecture.',
      icon: <RealisticFullStackIcon size={32} />
    },
    {
      title: 'Responsive UI/UX Engineering',
      desc: 'Pixel-perfect, mobile-first web interfaces styled with Tailwind CSS, ensuring smooth rendering across all screens.',
      icon: <RealisticResponsiveIcon size={32} />
    },
    {
      title: 'AI & Computer Vision Solutions',
      desc: 'Real-time facial landmark detection (EAR/MAR), driver safety telemetry, and OpenCV video analysis pipelines.',
      icon: <RealisticAiBrainIcon size={32} />
    },
    {
      title: 'REST API & State Integration',
      desc: 'Seamless data binding between frontend applications and backend APIs with optimized caching and error handling.',
      icon: <RealisticRestApisIcon size={32} />
    },
    {
      title: 'Performance & Web Optimization',
      desc: 'Improving Core Web Vitals, page speed, accessible semantic structure, and asset bundling for high efficiency.',
      icon: <RealisticPerformanceIcon size={32} />
    },
    {
      title: 'Marketplace & E-Commerce Platforms',
      desc: 'Interactive product discovery, custom inquiry flows, catalog browsing, and conversion-focused architectures.',
      icon: <RealisticEcommerceIcon size={32} />
    },
    {
      title: 'Machine Learning & Data Analytics',
      desc: 'Exploratory data analysis with Pandas & NumPy, predictive regression and classification models, and visual insights.',
      icon: <RealisticDataAnalysisIcon size={32} />
    },
    {
      title: 'Deployment & Continuous Integration',
      desc: 'Deploying production-ready applications to Vercel and cloud platforms with automated git workflows.',
      icon: <RealisticCloudDeployIcon size={32} />
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#FEFAE0] text-[#24211D] font-sans selection:bg-[#CCD5AE] selection:text-[#24211D]">

      {/* ========================================================
          1. UPGRADED DEVELOPER HERO SECTION
          ======================================================== */}
      <section className="relative w-full min-h-[70vh] sm:min-h-[75vh] lg:min-h-[82vh] flex items-center justify-center py-12 sm:py-16 lg:py-20 bg-[#FEFAE0] tech-grid-bg overflow-hidden border-b border-[#CCD5AE]/60">
        
        {/* Ambient Glowing Gradient Orbs */}
        <div className="absolute top-1/4 -left-24 w-80 sm:w-96 h-80 sm:h-96 bg-[#CCD5AE]/35 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 -right-24 w-80 sm:w-96 h-80 sm:h-96 bg-[#D4A373]/25 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Floating Decorative Code Tokens for Developer Atmosphere */}
        <div className="absolute top-10 left-8 sm:left-14 text-xs font-mono text-[#D4A373]/40 select-none pointer-events-none hidden lg:block orbit-float">
          &lt;SoftwareEngineer /&gt;
        </div>
        <div className="absolute bottom-16 left-12 sm:left-20 text-[11px] font-mono text-[#575249]/35 select-none pointer-events-none hidden lg:block orbit-float-delayed">
          &#123; status: 200, cleanCode: true &#125;
        </div>
        <div className="absolute top-16 right-10 sm:right-16 text-xs font-mono text-[#CCD5AE] font-semibold select-none pointer-events-none hidden lg:block orbit-float-reverse">
          git: main* [clean]
        </div>
        <div className="absolute bottom-20 right-14 sm:right-24 text-[11px] font-mono text-[#D4A373]/40 select-none pointer-events-none hidden lg:block orbit-float-slow">
          console.log(&quot;Ready to build&quot;);
        </div>

        <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 xl:gap-20 items-center w-full">
            
            {/* Left Column: 3D Interactive Portrait Experience */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex items-center justify-center lg:justify-start relative py-4 sm:py-6 order-1 lg:order-1"
            >
              <HeroPortrait />
            </motion.div>

            {/* Right Column: Hero Content & Developer Identity */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col items-center lg:items-start lg:ml-auto max-w-2xl w-full space-y-4 sm:space-y-5 lg:space-y-6 text-center lg:text-left order-2 lg:order-2"
            >
              
              {/* Interactive CLI Badge / Terminal Pill */}
              <div 
                onClick={() => {
                  navigator.clipboard.writeText('npx ansh-sahu');
                  setCopiedField('CLI command');
                  showInfo('Copied "npx ansh-sahu" to clipboard!');
                  confetti({
                    particleCount: 30,
                    spread: 60,
                    origin: { y: 0.65 },
                    colors: ['#D4A373', '#CCD5AE', '#24211D']
                  });
                  setTimeout(() => setCopiedField(null), 2000);
                }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#CCD5AE] shadow-sm text-xs font-mono text-[#24211D] hover:border-[#D4A373] hover:shadow-sm transition-all cursor-pointer group active:scale-95"
                title="Click to copy CLI command"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-radar absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[#575249] font-medium">terminal:</span>
                <span className="font-bold text-[#24211D] group-hover:text-[#D4A373] transition-colors">npx ansh-sahu</span>
                <span className="p-0.5 rounded text-[#D4A373] group-hover:scale-110 transition-transform">
                  {copiedField === 'CLI command' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </span>
              </div>

              {/* Greeting & Headline */}
              <div className="space-y-1 sm:space-y-2">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <p className="text-base sm:text-xl lg:text-2xl font-medium text-[#575249]">
                    Hi, I&apos;m
                  </p>
                  <span className="text-xl sm:text-2xl animate-bounce">👋</span>
                </div>
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#24211D] leading-[1.1]">
                  Ansh <span className="bg-gradient-to-r from-[#24211D] via-[#BD8C5C] to-[#D4A373] bg-clip-text text-transparent hover:brightness-110 transition-all">Sahu</span>
                </h1>
              </div>

              {/* Animated Cycling Role styled as Code Token */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#FFFFFF] border-2 border-[#CCD5AE] shadow-sm font-mono text-sm sm:text-base md:text-lg">
                  <span className="text-[#D4A373] font-bold">&gt;</span>
                  <span className="text-[#575249] text-xs sm:text-sm font-mono font-medium">const role =</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roles[currentRoleIndex]}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="font-bold text-[#24211D] text-xs sm:text-sm md:text-base font-sans"
                    >
                      &quot;{roles[currentRoleIndex]}&quot;
                    </motion.span>
                  </AnimatePresence>
                  <span className="w-1.5 h-4 bg-[#D4A373] animate-pulse inline-block" />
                </div>
              </div>

              {/* Subheading / Bio with Highlighted Technology Pills */}
              <p className="text-sm sm:text-base lg:text-lg text-[#575249] max-w-2xl mx-auto lg:mx-0 leading-relaxed px-1 sm:px-0">
                I build scalable web applications and high-performance user interfaces using{' '}
                <span className="font-bold text-[#24211D] bg-[#E9EDC9] px-1.5 py-0.5 rounded border border-[#CCD5AE]">
                  React 19
                </span>
                ,{' '}
                <span className="font-bold text-[#24211D] bg-[#E9EDC9] px-1.5 py-0.5 rounded border border-[#CCD5AE]">
                  Next.js
                </span>
                , and{' '}
                <span className="font-bold text-[#24211D] bg-[#E9EDC9] px-1.5 py-0.5 rounded border border-[#CCD5AE]">
                  TypeScript
                </span>
                . Dedicated to clean code architecture, responsive UX, and applied AI/ML at Sanskriti University.
              </p>

              {/* Developer Quick Stats Strip (Metrics) */}
              <div className="grid grid-cols-2 xs:grid-cols-4 gap-2.5 sm:gap-3 py-1 w-full">
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#FFFFFF] border border-[#CCD5AE] shadow-sm hover:border-[#D4A373] hover:-translate-y-0.5 transition-all flex flex-col text-center">
                  <span className="text-base sm:text-xl font-extrabold text-[#24211D]">10+</span>
                  <span className="text-[10px] sm:text-[11px] text-[#575249] font-medium leading-tight">Projects Built</span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#FFFFFF] border border-[#CCD5AE] shadow-sm hover:border-[#D4A373] hover:-translate-y-0.5 transition-all flex flex-col text-center">
                  <span className="text-base sm:text-xl font-extrabold text-[#24211D]">3+ Yrs</span>
                  <span className="text-[10px] sm:text-[11px] text-[#575249] font-medium leading-tight">Coding Journey</span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#FFFFFF] border border-[#CCD5AE] shadow-sm hover:border-[#D4A373] hover:-translate-y-0.5 transition-all flex flex-col text-center">
                  <span className="text-base sm:text-xl font-extrabold text-[#24211D]">B.Tech</span>
                  <span className="text-[10px] sm:text-[11px] text-[#575249] font-medium leading-tight">CSE (AI &amp; ML)</span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#FFFFFF] border border-[#CCD5AE] shadow-sm hover:border-[#D4A373] hover:-translate-y-0.5 transition-all flex flex-col text-center">
                  <span className="text-base sm:text-xl font-extrabold text-emerald-700">100%</span>
                  <span className="text-[10px] sm:text-[11px] text-[#575249] font-medium leading-tight">Responsive &amp; UX</span>
                </div>
              </div>

              {/* CTA Action Buttons with Interactive Feedback */}
              <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center lg:justify-start gap-2.5 sm:gap-4 pt-1 sm:pt-2 w-full xs:w-auto">
                <a
                  href="#projects"
                  className="shimmer-sweep group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#24211D] hover:bg-[#D4A373] text-[#FFFFFF] font-semibold text-xs sm:text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#contact"
                  onClick={() => {
                    confetti({
                      particleCount: 40,
                      spread: 60,
                      origin: { y: 0.65 },
                      colors: ['#D4A373', '#CCD5AE', '#24211D']
                    });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FFFFFF] border-2 border-[#CCD5AE] hover:border-[#D4A373] hover:bg-[#E9EDC9] text-[#24211D] font-semibold text-xs sm:text-sm shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
                >
                  <Sparkles className="w-4 h-4 text-[#D4A373]" />
                  <span>Let&apos;s Collaborate</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full text-xs font-semibold text-[#575249] hover:text-[#24211D] hover:bg-[#E9EDC9]/60 transition-colors min-h-[44px]"
                >
                  <FileDown className="w-4 h-4 text-[#D4A373] group-hover:translate-y-0.5 transition-transform" />
                  <span>Resume PDF</span>
                </a>
              </div>

              {/* Social Link Quick Badges */}
              <div className="pt-2 sm:pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 text-xs text-[#575249]">
                <span className="font-semibold text-[#24211D]">Connect:</span>
                <a
                  href={settings.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#24211D] transition-colors p-1"
                >
                  <GithubIcon size={15} /> <span>GitHub</span>
                </a>
                <span className="text-[#CCD5AE]">•</span>
                <a
                  href={settings.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#24211D] transition-colors p-1"
                >
                  <LinkedinIcon size={15} /> <span>LinkedIn</span>
                </a>
                <span className="text-[#CCD5AE]">•</span>
                <span className="text-xs text-[#575249] p-1">Mathura &amp; Gonda, UP</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. CONTINUOUS TECH ARSENAL MARQUEE
          ======================================================== */}
      <TechMarquee />

      {/* ========================================================
          3. INTERACTIVE DEVELOPER TERMINAL / CODE SANDBOX
          ======================================================== */}
      <section className="py-10 sm:py-14 bg-[#FEFAE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
                Developer Console
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#24211D]">
                Interactive Code Sandbox
              </h2>
              <p className="text-xs sm:text-sm text-[#575249]">
                Explore my technical configuration, principles, and runnable profile environment.
              </p>
            </div>
          </ScrollReveal>

          <DeveloperTerminal />
        </div>
      </section>

      {/* ========================================================
          4. SKILLS & TECHNOLOGIES SECTION (SPOTLIGHT CARDS)
          ======================================================== */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-[#FAEDCD]/40 border-t border-[#CCD5AE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-14 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
                Technical Stack
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#24211D]">
                Skills &amp; Technologies
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#575249]">
                I work with modern tools and technologies to build fast, scalable, and efficient web applications.
              </p>
            </div>
          </ScrollReveal>

          {/* Technical Grid with Cursor Spotlight Effect */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" staggerDelay={0.05}>
            {skillsList.map((skill, index) => (
              <StaggerItem key={skill.name} index={index} className="h-full flex flex-col">
                <InteractiveSpotlightCard
                  className="p-5 sm:p-6 group flex flex-col justify-between h-full bg-[#FFFFFF]"
                  spotlightColor="rgba(212, 163, 115, 0.2)"
                >
                  <div className="space-y-3.5 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-2 transition-transform shrink-0">
                        {skill.icon}
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E9EDC9] text-[#24211D] border border-[#CCD5AE]">
                        {skill.category}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#24211D] group-hover:text-[#D4A373] transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#575249] mt-1.5 sm:mt-2 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                </InteractiveSpotlightCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Link to All Skills */}
          <ScrollReveal delay={0.12}>
            <div className="text-center mt-8 sm:mt-10">
              <Link
                to="/skills"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#24211D] hover:text-[#D4A373] transition-colors p-2"
              >
                <span>Explore Complete Skills &amp; Tools Matrix</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ========================================================
          5. SERVICES I PROVIDE SECTION (SPOTLIGHT CARDS)
          ======================================================== */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-[#FAEDCD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-14 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
                What I Deliver
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#24211D]">
                Services I Provide
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#575249]">
                I offer design and development services focused on building fast, modern, and user-friendly digital experiences.
              </p>
            </div>
          </ScrollReveal>

          {/* 4-column responsive grid with Spotlight Cards */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" staggerDelay={0.04}>
            {servicesList.map((service, index) => (
              <StaggerItem key={service.title} index={index} className="h-full flex flex-col">
                <InteractiveSpotlightCard
                  className="p-4 sm:p-5 lg:p-5 xl:p-6 group flex flex-col justify-between h-full bg-[#FFFFFF]"
                  spotlightColor="rgba(212, 163, 115, 0.2)"
                >
                  <div className="space-y-3 sm:space-y-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-2 transition-transform shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#24211D] group-hover:text-[#D4A373] transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#575249] mt-1.5 sm:mt-2 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </InteractiveSpotlightCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* ========================================================
          4. RECENT PROJECTS SECTION (2-COL CARDS MATCHING SCREENSHOT 2)
          ======================================================== */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-[#FEFAE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-14 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
                Portfolio Work
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#24211D]">
                Recent Projects
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#575249]">
                Here are some of the real-world projects and intelligent systems I've built.
              </p>
            </div>
          </ScrollReveal>

          {/* 2-column Projects Grid with Technical Engineering Cards */}
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8" staggerDelay={0.08}>
            {featuredProjects.map((project, index) => (
              <StaggerItem key={project.id || project.slug || project.title} index={index} className="h-full flex flex-col">
                <ProjectCard
                  project={project}
                  onOpenDetails={(p) => setSelectedProject(p)}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Link to Full Projects Page */}
          <ScrollReveal delay={0.12}>
            <div className="text-center mt-10 sm:mt-12">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#24211D] hover:bg-[#D4A373] text-[#FFFFFF] text-xs sm:text-sm font-semibold shadow-sm transition-all min-h-[44px]"
              >
                <span>View All Projects in Full Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ========================================================
          5. CONTACT US SECTION (SPLIT FORM & DETAILS - SCREENSHOT 2)
          ======================================================== */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-[#FAEDCD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-14 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
                Let's Connect
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#24211D]">
                Contact Us
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#575249]">
                Have a project in mind? Let's connect and discuss how I can help bring your ideas to life.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Get in touch today */}
            <ScrollReveal className="lg:col-span-5 space-y-5 sm:space-y-6" distance={20} duration={0.6}>
              <div className="space-y-1.5 sm:space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#24211D]">
                  Get in touch today
                </h3>
                <p className="text-xs sm:text-sm text-[#575249] leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, full-time frontend roles, internships, or opportunities to be part of your vision.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
                {/* Email item */}
                <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#FFFFFF] border-2 border-[#CCD5AE] shadow-sm">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] flex items-center justify-center shrink-0 text-[#24211D]">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A373]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase font-bold text-[#575249]">Email Address</p>
                      <a href={`mailto:${settings.email}`} className="text-xs sm:text-sm font-bold text-[#24211D] hover:text-[#D4A373] truncate block">
                        {settings.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(settings.email, 'Email address')}
                    className="p-1.5 sm:p-2 rounded-lg text-[#575249] hover:text-[#24211D] hover:bg-[#E9EDC9] transition-colors shrink-0"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedField === 'Email address' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone item */}
                <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#FFFFFF] border-2 border-[#CCD5AE] shadow-sm">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] flex items-center justify-center shrink-0 text-[#24211D]">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A373]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase font-bold text-[#575249]">Phone Number</p>
                      <a href={`tel:${settings.phone}`} className="text-xs sm:text-sm font-bold text-[#24211D] hover:text-[#D4A373] truncate block">
                        {settings.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(settings.phone, 'Phone number')}
                    className="p-1.5 sm:p-2 rounded-lg text-[#575249] hover:text-[#24211D] hover:bg-[#E9EDC9] transition-colors shrink-0"
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedField === 'Phone number' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location item */}
                <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#FFFFFF] border-2 border-[#CCD5AE] shadow-sm">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] flex items-center justify-center shrink-0 text-[#24211D]">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A373]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase font-bold text-[#575249]">Location</p>
                      <p className="text-xs sm:text-sm font-bold text-[#24211D] truncate">
                        Gonda &amp; Mathura, Uttar Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex items-center gap-2.5 sm:gap-3">
                <a
                  href={settings.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-xl bg-[#FFFFFF] border border-[#CCD5AE] hover:border-[#D4A373] text-[#24211D] shadow-sm hover:scale-105 active:scale-95 transition-all min-h-[40px] flex items-center justify-center"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={settings.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-xl bg-[#FFFFFF] border border-[#CCD5AE] hover:border-[#D4A373] text-[#24211D] shadow-sm hover:scale-105 active:scale-95 transition-all min-h-[40px] flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
                {settings.instagramUrl && (
                  <a
                    href={settings.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-xl bg-[#FFFFFF] border border-[#CCD5AE] hover:border-[#D4A373] text-[#24211D] shadow-sm hover:scale-105 active:scale-95 transition-all min-h-[40px] flex items-center justify-center"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={18} />
                  </a>
                )}
              </div>
            </ScrollReveal>

            {/* Right Column: Working Contact Form matching Screenshot 2 */}
            <ScrollReveal className="lg:col-span-7" distance={20} duration={0.6} delay={0.1}>
              <div className="p-4 xs:p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#FFFFFF] border-2 border-[#CCD5AE] shadow-card">
                <form onSubmit={handleFormSubmit} className="space-y-3.5 sm:space-y-4">
                  
                  {formError && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-300 text-red-800 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {isSuccess && (
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                      <span>Thank you! Your message was sent successfully.</span>
                    </div>
                  )}

                  {/* Name & Email inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#24211D]">
                        Name <span className="text-[#D4A373]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Carter"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] text-[#24211D] placeholder-[#575249]/60 text-xs sm:text-sm focus:outline-none focus:border-[#D4A373] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#24211D]">
                        Email <span className="text-[#D4A373]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. example@gmail.com"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] text-[#24211D] placeholder-[#575249]/60 text-xs sm:text-sm focus:outline-none focus:border-[#D4A373] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Subject inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#24211D]">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 9876543210"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] text-[#24211D] placeholder-[#575249]/60 text-xs sm:text-sm focus:outline-none focus:border-[#D4A373] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#24211D]">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Project Inquiry / Job Opportunity"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] text-[#24211D] placeholder-[#575249]/60 text-xs sm:text-sm focus:outline-none focus:border-[#D4A373] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#24211D]">
                      Message <span className="text-[#D4A373]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please write your message here..."
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] text-[#24211D] placeholder-[#575249]/60 text-xs sm:text-sm focus:outline-none focus:border-[#D4A373] transition-colors resize-none"
                    />
                  </div>

                  {/* Send button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#24211D] hover:bg-[#D4A373] text-[#FFFFFF] font-bold text-xs sm:text-sm shadow-md transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* Project Detail & Architecture Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default HomePage;
