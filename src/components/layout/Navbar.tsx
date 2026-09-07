import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Command, 
  Menu, 
  X, 
  FileDown 
} from 'lucide-react';
import { ThemeToggle } from '../common/ThemeToggle';
import { Button } from '../common/Button';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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
    { name: 'Experience', path: '/experience' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070b14]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-500 to-emerald-500 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-[#070b14] rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 text-sm">
                  A_
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-white text-base tracking-tight font-sans group-hover:text-cyan-300 transition-colors">
                  Ansh<span className="text-cyan-400">.dev</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              </div>
              <p className="text-[10px] font-mono text-slate-400 hidden sm:block">AI / ML Engineer</p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-[#0b101c]/70 border border-slate-800/80 rounded-2xl backdrop-blur-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-950/40'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenCommandPalette}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-cyan-300 text-xs transition-all font-mono shadow-sm"
              title="Quick Command Palette (Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-slate-300">Cmd</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 border border-slate-700">
                Ctrl+K
              </kbd>
            </button>

            <Link to="/resume" className="hidden sm:block">
              <Button size="sm" variant="cyber" icon={<FileDown className="w-3.5 h-3.5" />}>
                Resume
              </Button>
            </Link>

            <ThemeToggle />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 lg:hidden border border-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-[#0b101c]/95 border border-slate-800 rounded-2xl backdrop-blur-2xl shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`
                  }
                >
                  <span>{link.name}</span>
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 flex items-center justify-center gap-2"
              >
                <Command className="w-3.5 h-3.5" /> Command Palette
              </button>

              <Link to="/resume" className="flex-1">
                <Button size="sm" variant="primary" className="w-full" icon={<FileDown className="w-3.5 h-3.5" />}>
                  Resume
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
