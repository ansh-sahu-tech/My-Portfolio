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
        className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none flex items-center justify-center group"
        aria-label="Toggle theme preference"
        title={`Theme: ${theme}`}
      >
        {actualTheme === 'dark' ? (
          <Moon className="w-4 h-4 text-blue-400 transition-transform duration-200 group-hover:-rotate-12 group-hover:scale-110" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500 transition-transform duration-200 group-hover:rotate-45 group-hover:scale-110" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl py-1 z-50 animate-in fade-in zoom-in-95 duration-150">
          <button
            onClick={() => {
              setTheme('dark');
              setIsOpen(false);
            }}
            className={`w-full px-3 py-2 text-xs flex items-center gap-2.5 transition-colors ${
              theme === 'dark' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 font-semibold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Moon className="w-3.5 h-3.5 text-blue-500" />
            <span>Dark</span>
          </button>
          <button
            onClick={() => {
              setTheme('light');
              setIsOpen(false);
            }}
            className={`w-full px-3 py-2 text-xs flex items-center gap-2.5 transition-colors ${
              theme === 'light' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 font-semibold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Sun className="w-3.5 h-3.5 text-amber-500" />
            <span>Light</span>
          </button>
          <button
            onClick={() => {
              setTheme('system');
              setIsOpen(false);
            }}
            className={`w-full px-3 py-2 text-xs flex items-center gap-2.5 transition-colors ${
              theme === 'system' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 font-semibold' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Laptop className="w-3.5 h-3.5 text-slate-500" />
            <span>System</span>
          </button>
        </div>
      )}
    </div>
  );
};
