import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useData } from '../../context/DataContext';
import { ThemeToggle } from '../common/ThemeToggle';
import { Button } from '../common/Button';
import { GithubIcon, LinkedinIcon, SocialTooltip } from '../common/SocialIcons';

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const { settings } = useData();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const isClickScrolling = React.useRef(false);
  const clickTimeoutRef = React.useRef<number | null>(null);

  // Exact smooth scrolling with fixed navbar offset
  const scrollToTargetSection = (id: string, smooth = true) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;

    const navbarOffset = 75;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navbarOffset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: smooth ? 'smooth' : 'auto',
    });
  };

  // Scroll listener with focal zone detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      if (location.pathname === '/') {
        // If smooth scroll was triggered by click, prevent scroll events from overriding active section
        if (isClickScrolling.current) return;

        // Top of page
        if (window.scrollY < 80) {
          setActiveSection('home');
          return;
        }

        // Bottom of page check
        const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 30;
        if (isAtBottom) {
          const resumeEl = document.getElementById('resume');
          if (resumeEl) {
            const rect = resumeEl.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
              setActiveSection('resume');
              return;
            }
          }
        }

        // Focal point reading zone (130px from top, below navbar)
        const focalOffset = 130;
        const sectionOrder = ['home', 'about', 'skills', 'projects', 'education', 'contact', 'resume'];

        for (const sectionId of sectionOrder) {
          const el = document.getElementById(sectionId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= focalOffset && rect.bottom > focalOffset) {
              setActiveSection(sectionId);
              return;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle hash scrolling on page mount or hash change
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const targetId = location.hash.replace('#', '');
      isClickScrolling.current = true;
      setActiveSection(targetId);
      const timer = setTimeout(() => {
        scrollToTargetSection(targetId, true);
        const resetTimer = setTimeout(() => {
          isClickScrolling.current = false;
        }, 850);
        return () => clearTimeout(resetTimer);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', id: 'home', path: '/' },
    { name: 'About', id: 'about', path: '/#about' },
    { name: 'Skills', id: 'skills', path: '/#skills' },
    { name: 'Projects', id: 'projects', path: '/#projects' },
    { name: 'Education', id: 'education', path: '/#education' },
    { name: 'Contact', id: 'contact', path: '/#contact' },
    { name: 'Resume', id: 'resume', path: '/#resume' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();

    if (location.pathname === '/') {
      isClickScrolling.current = true;
      setActiveSection(link.id);

      window.history.pushState(null, '', link.id === 'home' ? '/' : `/#${link.id}`);
      scrollToTargetSection(link.id, true);

      if (clickTimeoutRef.current) {
        window.clearTimeout(clickTimeoutRef.current);
      }
      clickTimeoutRef.current = window.setTimeout(() => {
        isClickScrolling.current = false;
      }, 850);
    } else {
      if (link.id === 'home') {
        navigate('/');
      } else {
        navigate(`/#${link.id}`);
      }
    }
  };

  const isLinkActive = (id: string, path: string) => {
    if (location.pathname === '/') {
      return activeSection === id;
    }
    if (location.pathname === `/${id}`) {
      return true;
    }
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-sm py-3'
          : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-800/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Identity */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                isClickScrolling.current = true;
                setActiveSection('home');
                window.history.pushState(null, '', '/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                if (clickTimeoutRef.current) {
                  window.clearTimeout(clickTimeoutRef.current);
                }
                clickTimeoutRef.current = window.setTimeout(() => {
                  isClickScrolling.current = false;
                }, 850);
              }
            }}
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-0.5"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm tracking-tight shadow-sm group-hover:bg-blue-700 group-hover:scale-105 active:scale-95 transition-all duration-200">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 dark:text-white text-base tracking-tight leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                Ansh
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-tight">
                Frontend Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Active Indicator */}
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isLinkActive(link.id, link.path);
              return (
                <a
                  key={link.id}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative px-2.5 lg:px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    active
                      ? 'text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.name}
                  {active && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 bg-blue-50/90 dark:bg-blue-950/60 rounded-lg -z-10 border border-blue-200/60 dark:border-blue-800/60"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {active && (
                    <motion.span
                      layoutId="navbar-active-line"
                      className="absolute -bottom-1 left-3 right-3 h-[2px] bg-blue-600 dark:bg-blue-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Social Tooltip Links */}
            <div className="hidden sm:flex items-center gap-1.5 border-r border-slate-200 dark:border-slate-800 pr-3">
              <SocialTooltip label="GitHub Profile">
                <a
                  href={settings.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none transition-all duration-200"
                  aria-label="Ansh on GitHub"
                >
                  <GithubIcon size={18} />
                </a>
              </SocialTooltip>

              <SocialTooltip label="LinkedIn Profile">
                <a
                  href={settings.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none transition-all duration-200"
                  aria-label="Ansh on LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
              </SocialTooltip>
            </div>

            {/* Resume Action */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
            >
              <Button size="sm" variant="secondary" icon={<FileDown className="w-3.5 h-3.5" />}>
                Resume
              </Button>
            </a>

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 md:hidden active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none transition-all duration-200"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg space-y-2 animate-in fade-in duration-150">
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const active = isLinkActive(link.id, link.path);
                return (
                  <a
                    key={link.id}
                    href={link.path}
                    onClick={(e) => {
                      handleNavClick(e, link);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                      active
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />}
                  </a>
                );
              })}
            </nav>

            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
              <a
                href={settings.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95 flex items-center justify-center gap-1.5 transition-all"
              >
                <GithubIcon size={15} /> GitHub
              </a>
              <a
                href={settings.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95 flex items-center justify-center gap-1.5 transition-all"
              >
                <LinkedinIcon size={15} /> LinkedIn
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button size="sm" variant="primary" className="w-full text-xs" icon={<FileDown className="w-3.5 h-3.5" />}>
                  Resume
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
