import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Home, 
  User, 
  Code, 
  FolderGit2, 
  Briefcase, 
  Award, 
  Mail, 
  Phone,
  FileDown, 
  ShieldAlert, 
  Sun, 
  Moon, 
  Laptop,
  ArrowRight,
  Command
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useData } from '../../context/DataContext';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { setTheme } = useTheme();
  const { settings } = useData();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const actions = [
    {
      id: 'home',
      name: 'Go to Home',
      category: 'Navigation',
      icon: <Home className="w-4 h-4 text-cyan-400" />,
      perform: () => navigate('/'),
    },
    {
      id: 'about',
      name: 'About Ansh',
      category: 'Navigation',
      icon: <User className="w-4 h-4 text-cyan-400" />,
      perform: () => navigate('/about'),
    },
    {
      id: 'skills',
      name: 'Technical Skills Matrix',
      category: 'Navigation',
      icon: <Code className="w-4 h-4 text-cyan-400" />,
      perform: () => navigate('/skills'),
    },
    {
      id: 'projects',
      name: 'View Projects & Case Studies',
      category: 'Navigation',
      icon: <FolderGit2 className="w-4 h-4 text-cyan-400" />,
      perform: () => navigate('/projects'),
    },
    {
      id: 'experience',
      name: 'Experience & Education',
      category: 'Navigation',
      icon: <Briefcase className="w-4 h-4 text-cyan-400" />,
      perform: () => navigate('/experience'),
    },
    {
      id: 'certificates',
      name: 'Certificates & Credentials',
      category: 'Navigation',
      icon: <Award className="w-4 h-4 text-cyan-400" />,
      perform: () => navigate('/certificates'),
    },
    {
      id: 'resume',
      name: 'View / Download Resume',
      category: 'Action',
      icon: <FileDown className="w-4 h-4 text-emerald-400" />,
      perform: () => navigate('/resume'),
    },
    {
      id: 'contact',
      name: 'Contact & Inquiries',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4 text-indigo-400" />,
      perform: () => navigate('/contact'),
    },
    {
      id: 'github',
      name: 'Open GitHub Profile (@Anshsahu275-max)',
      category: 'External',
      icon: <GithubIcon size={16} className="text-slate-300" />,
      perform: () => {
        window.open(settings.githubUrl, '_blank');
      },
    },
    {
      id: 'linkedin',
      name: 'Open LinkedIn Profile',
      category: 'External',
      icon: <LinkedinIcon size={16} className="text-blue-400" />,
      perform: () => {
        window.open(settings.linkedinUrl, '_blank');
      },
    },
    {
      id: 'email',
      name: `Send Email (${settings.email})`,
      category: 'Action',
      icon: <Mail className="w-4 h-4 text-indigo-400" />,
      perform: () => {
        window.location.href = `mailto:${settings.email}`;
      },
    },
    {
      id: 'phone',
      name: `Call Phone (${settings.phone})`,
      category: 'Action',
      icon: <Phone className="w-4 h-4 text-emerald-400" />,
      perform: () => {
        window.location.href = `tel:${settings.phone}`;
      },
    },
    {
      id: 'admin',
      name: 'Admin Dashboard / CMS',
      category: 'Administration',
      icon: <ShieldAlert className="w-4 h-4 text-rose-400" />,
      perform: () => navigate('/admin'),
    },
    {
      id: 'theme-dark',
      name: 'Set Theme: Dark Mode',
      category: 'Preferences',
      icon: <Moon className="w-4 h-4 text-cyan-400" />,
      perform: () => setTheme('dark'),
    },
    {
      id: 'theme-light',
      name: 'Set Theme: Light Mode',
      category: 'Preferences',
      icon: <Sun className="w-4 h-4 text-amber-400" />,
      perform: () => setTheme('light'),
    },
    {
      id: 'theme-system',
      name: 'Set Theme: System Preference',
      category: 'Preferences',
      icon: <Laptop className="w-4 h-4 text-indigo-400" />,
      perform: () => setTheme('system'),
    },
  ];

  const filtered = actions.filter((action) =>
    action.name.toLowerCase().includes(query.toLowerCase()) ||
    action.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].perform();
          onClose();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-[#0b111e] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/60 overflow-hidden z-10 font-sans"
          >
            <div className="p-4 border-b border-slate-800 flex items-center gap-3 bg-[#080d18]">
              <Search className="w-5 h-5 text-cyan-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command, navigate, or search..."
                className="w-full bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-sm"
              />
              <span className="hidden sm:flex items-center gap-1 text-[10px] font-mono bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700">
                <Command className="w-3 h-3" /> ESC to exit
              </span>
            </div>

            <div className="p-2 max-h-[380px] overflow-y-auto divide-y divide-slate-800/40">
              {filtered.length === 0 ? (
                <div className="py-8 text-center text-slate-400 text-xs font-mono">
                  No commands matching "{query}"
                </div>
              ) : (
                filtered.map((action, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={action.id}
                      onClick={() => {
                        action.perform();
                        onClose();
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full px-3 py-2.5 rounded-xl text-left flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-cyan-500/15 text-cyan-200 border border-cyan-500/30'
                          : 'text-slate-300 hover:bg-slate-800/50 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-cyan-500/20' : 'bg-slate-800/80'}`}>
                          {action.icon}
                        </div>
                        <div>
                          <p className="text-xs font-medium">{action.name}</p>
                          <p className="text-[10px] text-slate-400 font-mono">{action.category}</p>
                        </div>
                      </div>

                      {isSelected && (
                        <div className="flex items-center gap-1 text-xs text-cyan-400 font-mono">
                          <span>Enter</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </button>
                  );
                })
              )}
            </div>

            <div className="px-4 py-2 bg-[#060a14] border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Navigate: ↑ ↓</span>
              <span>Execute: Enter</span>
              <span>Dismiss: Esc</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
