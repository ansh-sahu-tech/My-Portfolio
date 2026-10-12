import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Copy, 
  Check, 
  Code2, 
  Cpu, 
  Layers, 
  Palette, 
  Globe, 
  Send,
  CheckCircle2,
  AlertCircle,
  Database,
  Server,
  Zap,
  ShoppingBag,
  BarChart3,
  Cloud
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { useToast } from '../../context/ToastContext';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../../components/common/SocialIcons';
import { getRealisticSkillIcon } from '../../components/skills/RealisticSkillIcons';

export const HomePage: React.FC = () => {
  const { settings, addMessage } = useData();
  const { success: showSuccess, error: showError, info: showInfo } = useToast();

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

  // Actual Real-world projects
  const recentProjects = [
    {
      title: 'AI Driver Awareness System (2025)',
      category: 'AI & Computer Vision',
      slug: 'ai-driver-awareness-system',
      tech: ['Python', 'OpenCV', 'Computer Vision', 'NumPy'],
      summary: 'Real-time fatigue, drowsiness, and road distraction monitoring system using OpenCV and facial landmark analysis (EAR/MAR metrics).',
      github: 'https://github.com/ansh-sahu-tech/AI-Driver-Safety-Awareness-System',
      demo: 'https://github.com/ansh-sahu-tech/AI-Driver-Safety-Awareness-System',
      image: '/ai-driver-awareness.png',
      badge: 'Edge AI System'
    },
    {
      title: 'Geo Build Mart (2026)',
      category: 'Marketplace Platform',
      slug: 'sacha-sauda',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
      summary: 'Modern marketplace for home and construction needs to explore properties, building materials, home products, and services with clean, fast discovery and enquiries.',
      github: 'https://github.com/ansh-sahu-tech',
      demo: 'https://sacha-sauda-five.vercel.app/',
      image: '/sacha-sauda.png',
      badge: 'React Production'
    },
    {
      title: 'Sanskar Katha (2025)',
      category: 'Cultural & Storytelling Platform',
      slug: 'sanskar-katha',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Web Audio API'],
      summary: 'Cultural storytelling and heritage platform curating traditional Indian moral stories, sacred Vedic shlokas, and filial values (Mata-Pita Bhakti) with bilingual audio narration.',
      github: 'https://github.com/ansh-sahu-tech',
      demo: 'https://sanskar-katha.vercel.app/',
      image: '/sanskar-katha.jpg',
      badge: 'Next.js Production'
    },
    {
      title: 'Swagatam Vijay Bakers (2024)',
      category: 'E-Commerce Platform',
      slug: 'swagatam-vijay-bakers',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      summary: 'Production artisanal bakery web storefront featuring catalog navigation, dynamic product showcase, and streamlined order inquiry workflows.',
      github: 'https://github.com/ansh-sahu-tech',
      demo: 'https://bakery-taupe-six.vercel.app/',
      image: '/bakery-project.png',
      badge: 'Vercel Live'
    }
  ];

  // Technical Skills (matching Screenshot 1 Grid)
  const skillsList = [
    {
      name: 'Tailwind CSS',
      icon: <Palette className="w-6 h-6 text-[#24211D]" />,
      desc: 'Creating responsive, modern, and clean layouts quickly using utility-first styling and fluid breakpoints.'
    },
    {
      name: 'JavaScript',
      icon: <Code2 className="w-6 h-6 text-[#24211D]" />,
      desc: 'Writing efficient, modern ES6+, and optimized code for both complex frontend interactions and async logic.'
    },
    {
      name: 'React',
      icon: <Layers className="w-6 h-6 text-[#24211D]" />,
      desc: 'Building fast, interactive, and component-based user interfaces with state management and custom hooks.'
    },
    {
      name: 'Next.js',
      icon: <Globe className="w-6 h-6 text-[#24211D]" />,
      desc: 'Developing high-performance applications with server and client components, SSR, and SEO-first routing.'
    },
    {
      name: 'Python & AI/ML',
      icon: <Cpu className="w-6 h-6 text-[#24211D]" />,
      desc: 'Applied machine learning architectures, statistical model training, and data manipulation pipelines.'
    },
    {
      name: 'Computer Vision',
      icon: <Zap className="w-6 h-6 text-[#24211D]" />,
      desc: 'OpenCV image processing, facial landmark tracking (EAR/MAR), and edge-ready real-time video inference.'
    },
    {
      name: 'REST APIs',
      icon: <Server className="w-6 h-6 text-[#24211D]" />,
      desc: 'Connecting frontend clients to RESTful endpoints with robust error handling and asynchronous payload parsing.'
    },
    {
      name: 'HTML5 & CSS3',
      icon: <Globe className="w-6 h-6 text-[#24211D]" />,
      desc: 'Clean, semantic page structure with accessible DOM hierarchies, WCAG compliance, and modern CSS properties.'
    },
    {
      name: 'Git & GitHub',
      icon: <Database className="w-6 h-6 text-[#24211D]" />,
      desc: 'Disciplined version control workflows, atomic commits, pull request management, and collaborative git practices.'
    }
  ];

  // Services List (matching Screenshot 1 & 2 Grid)
  const servicesList = [
    {
      title: 'Full-Stack & Frontend Web Development',
      desc: 'End-to-end web applications and modern SPAs engineered with React, Next.js, and clean component architecture.',
      icon: <Code2 className="w-6 h-6 text-[#24211D]" />
    },
    {
      title: 'Responsive UI/UX Engineering',
      desc: 'Pixel-perfect, mobile-first web interfaces styled with Tailwind CSS, ensuring smooth rendering across all screens.',
      icon: <Palette className="w-6 h-6 text-[#24211D]" />
    },
    {
      title: 'AI & Computer Vision Solutions',
      desc: 'Real-time facial landmark detection (EAR/MAR), driver safety telemetry, and OpenCV video analysis pipelines.',
      icon: <Cpu className="w-6 h-6 text-[#24211D]" />
    },
    {
      title: 'REST API & State Integration',
      desc: 'Seamless data binding between frontend applications and backend APIs with optimized caching and error handling.',
      icon: <Server className="w-6 h-6 text-[#24211D]" />
    },
    {
      title: 'Performance & Web Optimization',
      desc: 'Improving Core Web Vitals, page speed, accessible semantic structure, and asset bundling for high efficiency.',
      icon: <Zap className="w-6 h-6 text-[#24211D]" />
    },
    {
      title: 'Marketplace & E-Commerce Platforms',
      desc: 'Interactive product discovery, custom inquiry flows, catalog browsing, and conversion-focused architectures.',
      icon: <ShoppingBag className="w-6 h-6 text-[#24211D]" />
    },
    {
      title: 'Machine Learning & Data Analytics',
      desc: 'Exploratory data analysis with Pandas & NumPy, predictive regression and classification models, and visual insights.',
      icon: <BarChart3 className="w-6 h-6 text-[#24211D]" />
    },
    {
      title: 'Deployment & Continuous Integration',
      desc: 'Deploying production-ready applications to Vercel and cloud platforms with automated git workflows.',
      icon: <Cloud className="w-6 h-6 text-[#24211D]" />
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#FEFAE0] text-[#24211D] font-sans selection:bg-[#CCD5AE] selection:text-[#24211D]">

      {/* ========================================================
          1. HERO SECTION (SPLIT HERO MATCHING SCREENSHOT 1)
          ======================================================== */}
      <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center pt-8 pb-16 lg:py-20 bg-[#FEFAE0] tech-grid-bg overflow-hidden border-b border-[#CCD5AE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9EDC9] border border-[#CCD5AE] text-xs font-semibold text-[#24211D] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#D4A373] animate-pulse" />
                <span>Available for Frontend &amp; React Roles</span>
              </div>

              {/* Greeting & Headline */}
              <div className="space-y-2">
                <p className="text-xl sm:text-2xl font-medium text-[#575249]">
                  Hi, I'm
                </p>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#24211D] leading-[1.08]">
                  Ansh <span className="text-[#D4A373]">Sahu</span>
                </h1>
              </div>

              {/* Animated Cycling Role */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roles[currentRoleIndex]}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center gap-2 text-xl sm:text-2xl font-bold text-[#24211D]"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#D4A373]" />
                    <span>{roles[currentRoleIndex]}</span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Subheading / Bio */}
              <p className="text-base sm:text-lg text-[#575249] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                I build scalable web applications and high-performance user interfaces using React, Next.js, and TypeScript. Dedicated to clean code, responsive UX, and applied AI/ML at Sanskriti University.
              </p>

              {/* CTA Action Buttons matching Screenshot 1 */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#24211D] hover:bg-[#D4A373] text-[#FFFFFF] font-semibold text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>View Projects</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FFFFFF] border-2 border-[#CCD5AE] hover:border-[#D4A373] hover:bg-[#E9EDC9] text-[#24211D] font-semibold text-sm shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Let's Collaborate</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full text-xs font-semibold text-[#575249] hover:text-[#24211D] hover:bg-[#E9EDC9]/60 transition-colors"
                >
                  <FileDown className="w-4 h-4 text-[#D4A373]" />
                  <span>Resume PDF</span>
                </a>
              </div>

              {/* Social Link Quick Badges */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs text-[#575249]">
                <span className="font-semibold text-[#24211D]">Connect:</span>
                <a
                  href={settings.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#24211D] transition-colors"
                >
                  <GithubIcon size={15} /> <span>GitHub</span>
                </a>
                <span className="text-[#CCD5AE]">•</span>
                <a
                  href={settings.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#24211D] transition-colors"
                >
                  <LinkedinIcon size={15} /> <span>LinkedIn</span>
                </a>
                <span className="text-[#CCD5AE]">•</span>
                <span className="text-xs text-[#575249]">Mathura &amp; Gonda, UP</span>
              </div>
            </motion.div>

            {/* Right Column: Circular Portrait with Orbiting Satellite Badges */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex items-center justify-center relative"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
                
                {/* Concentric Glow Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#CCD5AE] animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border border-[#CCD5AE]/60" />

                {/* Main Profile Image Circle */}
                <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-76 md:h-76 rounded-full overflow-hidden hero-portrait-ring bg-[#E9EDC9]">
                  <img
                    src="/ansh-profile.jpg?v=2"
                    alt="Ansh Sahu - Frontend Developer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24211D]/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Satellite Orbit Badge 1: React (Top Right) */}
                <div className="absolute top-2 right-4 sm:top-4 sm:right-6 orbit-float">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#FFFFFF] border-2 border-[#CCD5AE] shadow-md flex items-center justify-center p-2 hover:scale-110 hover:border-[#D4A373] transition-all">
                    {getRealisticSkillIcon('React', undefined, 26)}
                  </div>
                </div>

                {/* Satellite Orbit Badge 2: Next.js (Middle Right) */}
                <div className="absolute top-1/2 -right-3 sm:-right-4 -translate-y-1/2 orbit-float-delayed">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#FFFFFF] border-2 border-[#CCD5AE] shadow-md flex items-center justify-center p-2 hover:scale-110 hover:border-[#D4A373] transition-all">
                    {getRealisticSkillIcon('Next.js', undefined, 26)}
                  </div>
                </div>

                {/* Satellite Orbit Badge 3: JavaScript (Middle Left) */}
                <div className="absolute top-1/2 -left-3 sm:-left-4 -translate-y-1/2 orbit-float-slow">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#FFFFFF] border-2 border-[#CCD5AE] shadow-md flex items-center justify-center p-2 hover:scale-110 hover:border-[#D4A373] transition-all">
                    {getRealisticSkillIcon('JavaScript', undefined, 26)}
                  </div>
                </div>

                {/* Satellite Orbit Badge 4: Tailwind CSS (Top Left) */}
                <div className="absolute top-2 left-4 sm:top-4 sm:left-6 orbit-float-delayed">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#FFFFFF] border-2 border-[#CCD5AE] shadow-md flex items-center justify-center p-2 hover:scale-110 hover:border-[#D4A373] transition-all">
                    {getRealisticSkillIcon('Tailwind CSS', undefined, 26)}
                  </div>
                </div>

                {/* Satellite Orbit Badge 5: Python (Bottom Left) */}
                <div className="absolute bottom-3 left-6 sm:bottom-4 sm:left-8 orbit-float">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#FFFFFF] border-2 border-[#CCD5AE] shadow-md flex items-center justify-center p-2 hover:scale-110 hover:border-[#D4A373] transition-all">
                    {getRealisticSkillIcon('Python', undefined, 26)}
                  </div>
                </div>

                {/* Satellite Orbit Badge 6: Computer Vision / AI (Bottom Right) */}
                <div className="absolute bottom-3 right-6 sm:bottom-4 sm:right-8 orbit-float-slow">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#FFFFFF] border-2 border-[#CCD5AE] shadow-md flex items-center justify-center p-2 hover:scale-110 hover:border-[#D4A373] transition-all">
                    {getRealisticSkillIcon('Computer Vision', undefined, 26)}
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. ABOUT ME SECTION (BALANCED TEXT & IMAGE LAYOUT - SCREENSHOT 1)
          ======================================================== */}
      <section id="about" className="py-20 lg:py-24 bg-[#FAEDCD] border-b border-[#CCD5AE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Portrait photo with soft square rounded frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden border-2 border-[#CCD5AE] shadow-card bg-[#FFFFFF]">
                <img
                  src="/ansh-profile.jpg?v=2"
                  alt="Ansh Sahu Profile"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#FFFFFF]/90 backdrop-blur-md border border-[#CCD5AE] shadow-sm">
                  <p className="text-xs font-bold text-[#24211D]">Ansh Sahu</p>
                  <p className="text-[11px] text-[#575249]">B.Tech CSE (AI &amp; ML) • Sanskriti University</p>
                </div>
              </div>
            </div>

            {/* Right Column: About details matching Screenshot 1 */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
                  About Me
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#24211D]">
                  Crafting Production Web &amp; Intelligent Systems
                </h2>
              </div>

              <p className="text-base text-[#575249] leading-relaxed">
                I am a Frontend Developer focusing on building production-ready applications. I enjoy designing clean APIs, creating interactive user interfaces, and optimizing performance to deliver smooth and efficient user experiences.
              </p>

              <p className="text-sm sm:text-base text-[#575249] leading-relaxed">
                Along with strong problem-solving skills, I follow clean architecture principles and modern development patterns. I'm passionate about writing maintainable code, improving UI/UX flows, and building applications that feel fast, secure, and intuitive. I actively explore new tools in the modern web and AI ecosystem to stay updated and keep improving my development workflow.
              </p>

              {/* Academic & Specialty Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#CCD5AE] shadow-sm">
                  <p className="text-xs font-bold text-[#D4A373] uppercase tracking-wider">Education</p>
                  <p className="text-sm font-bold text-[#24211D] mt-0.5">Sanskriti University (2023–2027)</p>
                  <p className="text-xs text-[#575249]">B.Tech CSE (AI &amp; ML)</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#CCD5AE] shadow-sm">
                  <p className="text-xs font-bold text-[#D4A373] uppercase tracking-wider">Location</p>
                  <p className="text-sm font-bold text-[#24211D] mt-0.5">Gonda &amp; Mathura, India</p>
                  <p className="text-xs text-[#575249]">Available for Remote &amp; On-site Roles</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#24211D] hover:bg-[#D4A373] text-[#FFFFFF] font-semibold text-sm shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Download Resume</span>
                  <FileDown className="w-4 h-4" />
                </a>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#24211D] hover:text-[#D4A373] transition-colors"
                >
                  <span>Read Full Biography</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. SKILLS & TECHNOLOGIES SECTION (GRID MATCHING SCREENSHOT 1)
          ======================================================== */}
      <section id="skills" className="py-20 lg:py-24 bg-[#FEFAE0] border-b border-[#CCD5AE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
              Technical Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#24211D]">
              Skills &amp; Technologies
            </h2>
            <p className="text-sm sm:text-base text-[#575249]">
              I work with modern tools and technologies to build fast, scalable, and efficient web applications.
            </p>
          </div>

          {/* Technical Grid (3 columns on desktop, matching Screenshot 1 layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsList.map((skill) => (
              <div
                key={skill.name}
                className="group p-6 rounded-2xl bg-[#FFFFFF] border-2 border-[#CCD5AE] shadow-sm hover:border-[#D4A373] hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#24211D] group-hover:text-[#D4A373] transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#575249] mt-2 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Link to All Skills */}
          <div className="text-center mt-10">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#24211D] hover:text-[#D4A373] transition-colors"
            >
              <span>Explore Complete Skills &amp; Tools Matrix</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================
          4. SERVICES I PROVIDE SECTION (GRID MATCHING SCREENSHOT 1 & 2)
          ======================================================== */}
      <section id="services" className="py-20 lg:py-24 bg-[#FAEDCD] border-b border-[#CCD5AE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
              What I Deliver
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#24211D]">
              Services I Provide
            </h2>
            <p className="text-sm sm:text-base text-[#575249]">
              I offer design and development services focused on building fast, modern, and user-friendly digital experiences.
            </p>
          </div>

          {/* 4-column responsive grid matching screenshot services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service) => (
              <div
                key={service.title}
                className="group p-6 rounded-2xl bg-[#FFFFFF] border-2 border-[#CCD5AE] shadow-sm hover:border-[#D4A373] hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#24211D] group-hover:text-[#D4A373] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#575249] mt-2 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          5. RECENT PROJECTS SECTION (2-COL CARDS MATCHING SCREENSHOT 2)
          ======================================================== */}
      <section id="projects" className="py-20 lg:py-24 bg-[#FEFAE0] border-b border-[#CCD5AE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
              Portfolio Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#24211D]">
              Recent Projects
            </h2>
            <p className="text-sm sm:text-base text-[#575249]">
              Here are some of the real-world projects and intelligent systems I've built.
            </p>
          </div>

          {/* 2-column Projects Grid matching Screenshot 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recentProjects.map((project) => (
              <div
                key={project.title}
                className="group rounded-3xl bg-[#FFFFFF] border-2 border-[#CCD5AE] shadow-sm hover:border-[#D4A373] hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Project Image Preview */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#FAEDCD] border-b-2 border-[#CCD5AE]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFFFFF]/90 border border-[#CCD5AE] text-[#24211D] shadow-sm backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info & Tech Tags */}
                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#24211D] group-hover:text-[#D4A373] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#575249] leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Tech stack pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#E9EDC9] text-[#24211D] border border-[#CCD5AE]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions matching Screenshot 2 */}
                  <div className="pt-4 border-t border-[#CCD5AE]/60 flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#CCD5AE] bg-[#FFFFFF] hover:bg-[#E9EDC9] hover:border-[#D4A373] text-[#24211D] text-xs font-semibold shadow-sm transition-all"
                    >
                      <GithubIcon size={14} />
                      <span>GitHub</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#24211D] hover:bg-[#D4A373] text-[#FFFFFF] text-xs font-semibold shadow-sm transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Link to Full Projects Page */}
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#24211D] hover:bg-[#D4A373] text-[#FFFFFF] text-sm font-semibold shadow-sm transition-all"
            >
              <span>View All Projects in Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================
          6. CONTACT US SECTION (SPLIT FORM & DETAILS - SCREENSHOT 2)
          ======================================================== */}
      <section id="contact" className="py-20 lg:py-24 bg-[#FAEDCD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
              Let's Connect
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#24211D]">
              Contact Us
            </h2>
            <p className="text-sm sm:text-base text-[#575249]">
              Have a project in mind? Let's connect and discuss how I can help bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Get in touch today */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#24211D]">
                  Get in touch today
                </h3>
                <p className="text-sm text-[#575249] leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, full-time frontend roles, internships, or opportunities to be part of your vision.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-3 pt-2">
                {/* Email item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FFFFFF] border-2 border-[#CCD5AE] shadow-sm">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] flex items-center justify-center shrink-0 text-[#24211D]">
                      <Mail className="w-5 h-5 text-[#D4A373]" />
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
                    className="p-2 rounded-lg text-[#575249] hover:text-[#24211D] hover:bg-[#E9EDC9] transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === 'Email address' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FFFFFF] border-2 border-[#CCD5AE] shadow-sm">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] flex items-center justify-center shrink-0 text-[#24211D]">
                      <Phone className="w-5 h-5 text-[#D4A373]" />
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
                    className="p-2 rounded-lg text-[#575249] hover:text-[#24211D] hover:bg-[#E9EDC9] transition-colors"
                    title="Copy Phone"
                  >
                    {copiedField === 'Phone number' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FFFFFF] border-2 border-[#CCD5AE] shadow-sm">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] flex items-center justify-center shrink-0 text-[#24211D]">
                      <MapPin className="w-5 h-5 text-[#D4A373]" />
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
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={settings.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#FFFFFF] border border-[#CCD5AE] hover:border-[#D4A373] text-[#24211D] shadow-sm hover:scale-105 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={settings.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#FFFFFF] border border-[#CCD5AE] hover:border-[#D4A373] text-[#24211D] shadow-sm hover:scale-105 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
                {settings.instagramUrl && (
                  <a
                    href={settings.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#FFFFFF] border border-[#CCD5AE] hover:border-[#D4A373] text-[#24211D] shadow-sm hover:scale-105 transition-all"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={18} />
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Working Contact Form matching Screenshot 2 */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border-2 border-[#CCD5AE] shadow-card">
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-3 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] text-[#24211D] placeholder-[#575249]/60 text-sm focus:outline-none focus:border-[#D4A373] transition-colors"
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
                        className="w-full px-4 py-3 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] text-[#24211D] placeholder-[#575249]/60 text-sm focus:outline-none focus:border-[#D4A373] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Subject inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#24211D]">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 9876543210"
                        className="w-full px-4 py-3 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] text-[#24211D] placeholder-[#575249]/60 text-sm focus:outline-none focus:border-[#D4A373] transition-colors"
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
                        className="w-full px-4 py-3 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] text-[#24211D] placeholder-[#575249]/60 text-sm focus:outline-none focus:border-[#D4A373] transition-colors"
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
                      className="w-full px-4 py-3 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] text-[#24211D] placeholder-[#575249]/60 text-sm focus:outline-none focus:border-[#D4A373] transition-colors resize-none"
                    />
                  </div>

                  {/* Send button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#24211D] hover:bg-[#D4A373] text-[#FFFFFF] font-bold text-sm shadow-md transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0"
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
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;
