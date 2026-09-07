import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme, actualTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-xl text-slate-400 hover:text-cyan-300 hover:bg-slate-800/80 border border-slate-800 transition-all flex items-center justify-center"
        aria-label="Toggle theme preference"
        title={`Theme: ${theme}`}
      >
        {actualTheme === 'dark' ? (
          <Moon className="w-4 h-4 text-cyan-400" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-[#0c1220] border border-slate-700 rounded-xl shadow-xl py-1 z-50 animate-in fade-in zoom-in-95 duration-150">
          <button
            onClick={() => {
              setTheme('dark');
              setIsOpen(false);
            }}
            className={`w-full px-3 py-2 text-xs flex items-center gap-2.5 transition-colors ${
              theme === 'dark' ? 'text-cyan-400 bg-cyan-950/40 font-semibold' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            <span>Dark</span>
          </button>
          <button
            onClick={() => {
              setTheme('light');
              setIsOpen(false);
            }}
            className={`w-full px-3 py-2 text-xs flex items-center gap-2.5 transition-colors ${
              theme === 'light' ? 'text-cyan-400 bg-cyan-950/40 font-semibold' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>Light</span>
          </button>
          <button
            onClick={() => {
              setTheme('system');
              setIsOpen(false);
            }}
            className={`w-full px-3 py-2 text-xs flex items-center gap-2.5 transition-colors ${
              theme === 'system' ? 'text-cyan-400 bg-cyan-950/40 font-semibold' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>System</span>
          </button>
        </div>
      )}
    </div>
  );
};
