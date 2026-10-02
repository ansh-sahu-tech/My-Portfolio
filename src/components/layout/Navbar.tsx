import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
    { name: 'Resume', path: '/resume' },
  ];

  const isLinkActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out ${
        isScrolled
          ? 'bg-[#fcfaf7]/95 backdrop-blur-md border-b border-[#e4d4bf] shadow-[0_4px_20px_-4px_rgba(45,18,5,0.08)] py-3'
          : 'bg-[#fcfaf7]/85 backdrop-blur-sm border-b border-[#ebdcc8]/70 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Identity */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a75a32] rounded-lg p-0.5"
          >
            <div className="w-8 h-8 rounded-lg bg-[#a75a32] flex items-center justify-center text-white font-bold text-sm tracking-tight shadow-sm group-hover:bg-[#8e4827] group-hover:scale-105 active:scale-95 transition-all duration-200">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-stone-900 text-base tracking-tight leading-tight group-hover:text-[#a75a32] transition-colors duration-200">
                Ansh
              </span>
              <span className="text-[11px] font-medium text-stone-500 leading-tight">
                Frontend Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Active Indicator */}
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-2.5 lg:px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a75a32] ${
                    active
                      ? 'text-[#a75a32] font-bold'
                      : 'text-stone-600 hover:text-stone-950 hover:bg-[#f4ece1]'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.name}
                  {active && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 bg-[#f4ece1] rounded-lg -z-10 border border-[#dfd2be]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {active && (
                    <motion.span
                      layoutId="navbar-active-line"
                      className="absolute -bottom-1 left-3 right-3 h-[2px] bg-[#a75a32] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Social Tooltip Links */}
            <div className="hidden sm:flex items-center gap-1.5 border-r border-[#e2d5c3] pr-3">
              <SocialTooltip label="GitHub Profile">
                <a
                  href={settings.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-stone-600 hover:text-stone-950 hover:bg-[#f4ece1] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#a75a32] focus-visible:outline-none transition-all duration-200"
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
                  className="p-2 rounded-lg text-stone-600 hover:text-[#a75a32] hover:bg-[#f4ece1] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#a75a32] focus-visible:outline-none transition-all duration-200"
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
              <Button size="sm" variant="primary" className="bg-[#a75a32] hover:bg-[#8e4827] text-white border-0 shadow-sm" icon={<FileDown className="w-3.5 h-3.5" />}>
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
                const active = isLinkActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                      active
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />}
                  </Link>
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

export default Navbar;
