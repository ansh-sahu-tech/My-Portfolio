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
          ? 'bg-[#FEFAE0]/95 backdrop-blur-md border-b border-[#CCD5AE] shadow-[0_4px_16px_-4px_rgba(36,33,29,0.08)] py-2.5 sm:py-3'
          : 'bg-[#FEFAE0]/90 backdrop-blur-sm border-b border-[#CCD5AE]/60 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Brand Logo / Identity */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A373] rounded-lg p-0.5 shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-[#24211D] flex items-center justify-center text-[#FFFFFF] font-bold text-sm tracking-tight shadow-sm group-hover:bg-[#D4A373] group-hover:scale-105 active:scale-95 transition-all duration-200">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#24211D] text-sm sm:text-base tracking-tight leading-tight group-hover:text-[#D4A373] transition-colors duration-200">
                Ansh Sahu
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#D4A373] leading-tight hidden xs:block">
                Frontend Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Visible on Laptop & Desktop: >= 1024px) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A373] ${
                    active
                      ? 'text-[#24211D] font-bold'
                      : 'text-[#575249] hover:text-[#24211D] hover:bg-[#E9EDC9]/60'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.name}
                  {active && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 bg-[#E9EDC9] rounded-lg -z-10 border border-[#CCD5AE]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {active && (
                    <motion.span
                      layoutId="navbar-active-line"
                      className="absolute -bottom-1 left-3 right-3 h-[2px] bg-[#D4A373] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Social Tooltip Links (Hidden on small tablets & phones) */}
            <div className="hidden md:flex items-center gap-1 border-r border-[#CCD5AE] pr-2.5">
              <SocialTooltip label="GitHub Profile">
                <a
                  href={settings.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 rounded-lg text-[#575249] hover:text-[#24211D] hover:bg-[#E9EDC9] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#D4A373] focus-visible:outline-none transition-all duration-200"
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
                  className="p-1.5 sm:p-2 rounded-lg text-[#575249] hover:text-[#24211D] hover:bg-[#E9EDC9] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#D4A373] focus-visible:outline-none transition-all duration-200"
                  aria-label="Ansh on LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
              </SocialTooltip>
            </div>

            {/* Resume Action */}
            <Button
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              variant="secondary"
              className="hidden sm:inline-flex font-semibold text-xs rounded-full border border-[#CCD5AE] bg-[#E9EDC9] hover:bg-[#CCD5AE] text-[#24211D] px-2.5 py-1.5"
              icon={<FileDown className="w-3.5 h-3.5 text-[#24211D]" />}
            >
              CV
            </Button>

            {/* Hire Me CTA Button */}
            <Link to="/contact" className="hidden xs:inline-flex">
              <Button size="sm" variant="primary" className="rounded-full bg-[#24211D] hover:bg-[#D4A373] text-[#FFFFFF] px-3 sm:px-4 py-1.5 font-semibold shadow-sm transition-all duration-200 text-xs">
                Hire Me
              </Button>
            </Link>

            <ThemeToggle />

            {/* Mobile & Tablet Menu Toggle Button (Visible on screens < 1024px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg text-[#575249] hover:text-[#24211D] hover:bg-[#E9EDC9] lg:hidden active:scale-95 focus-visible:ring-2 focus-visible:ring-[#D4A373] focus-visible:outline-none transition-all duration-200"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#24211D]" /> : <Menu className="w-5 h-5 text-[#24211D]" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown Drawer (Animated with Framer Motion) */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.99 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="lg:hidden mt-3 p-3.5 bg-[#FEFAE0] border-2 border-[#CCD5AE] rounded-2xl shadow-xl space-y-3 max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const active = isLinkActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between min-h-[44px] ${
                      active
                        ? 'text-[#24211D] bg-[#E9EDC9] font-bold border border-[#CCD5AE]'
                        : 'text-[#575249] hover:text-[#24211D] hover:bg-[#E9EDC9]/60'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-[#D4A373]" />}
                  </Link>
                );
              })}
            </nav>

            {/* Quick CTAs inside Mobile Drawer */}
            <div className="pt-2.5 border-t border-[#CCD5AE] space-y-2">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
              >
                <Button size="sm" variant="primary" className="w-full bg-[#24211D] hover:bg-[#D4A373] text-[#FFFFFF] font-bold min-h-[42px] justify-center text-xs rounded-xl shadow-sm">
                  Hire Me / Let's Connect
                </Button>
              </Link>

              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                <a
                  href={settings.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-1.5 sm:px-3 rounded-xl border border-[#CCD5AE] text-[11px] sm:text-xs font-semibold text-[#575249] hover:text-[#24211D] hover:bg-[#E9EDC9] active:scale-95 flex items-center justify-center gap-1 sm:gap-1.5 transition-all min-h-[40px] bg-[#FFFFFF]"
                >
                  <GithubIcon size={14} /> <span>GitHub</span>
                </a>
                <a
                  href={settings.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-1.5 sm:px-3 rounded-xl border border-[#CCD5AE] text-[11px] sm:text-xs font-semibold text-[#575249] hover:text-[#24211D] hover:bg-[#E9EDC9] active:scale-95 flex items-center justify-center gap-1 sm:gap-1.5 transition-all min-h-[40px] bg-[#FFFFFF]"
                >
                  <LinkedinIcon size={14} /> <span>LinkedIn</span>
                </a>
                <Button
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant="secondary"
                  className="w-full text-[11px] sm:text-xs bg-[#E9EDC9] hover:bg-[#CCD5AE] text-[#24211D] font-semibold min-h-[40px] justify-center px-1.5 rounded-xl border border-[#CCD5AE]"
                  icon={<FileDown className="w-3.5 h-3.5 text-[#24211D]" />}
                >
                  CV
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
