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
        className="p-2 rounded-xl text-[#94A3B8] hover:text-[#22D3EE] hover:bg-[#1A2430] border border-[#263342] transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:outline-none flex items-center justify-center group"
        aria-label="Toggle theme preference"
        title={`Theme: ${theme}`}
      >
        {actualTheme === 'dark' ? (
          <Moon className="w-4 h-4 text-[#22D3EE] transition-transform duration-200 group-hover:-rotate-12 group-hover:scale-110" />
        ) : (
          <Sun className="w-4 h-4 text-[#22D3EE] transition-transform duration-200 group-hover:rotate-45 group-hover:scale-110" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-[#121923] border border-[#263342] rounded-xl shadow-xl py-1 z-50 animate-in fade-in zoom-in-95 duration-150">
          <button
            onClick={() => {
              setTheme('dark');
              setIsOpen(false);
            }}
            className={`w-full px-3 py-2 text-xs flex items-center gap-2.5 transition-colors ${
              theme === 'dark' ? 'text-[#22D3EE] bg-[#1A2430] font-semibold' : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1A2430]'
            }`}
          >
            <Moon className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span>Dark</span>
          </button>
          <button
            onClick={() => {
              setTheme('light');
              setIsOpen(false);
            }}
            className={`w-full px-3 py-2 text-xs flex items-center gap-2.5 transition-colors ${
              theme === 'light' ? 'text-[#22D3EE] bg-[#1A2430] font-semibold' : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1A2430]'
            }`}
          >
            <Sun className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span>Light</span>
          </button>
          <button
            onClick={() => {
              setTheme('system');
              setIsOpen(false);
            }}
            className={`w-full px-3 py-2 text-xs flex items-center gap-2.5 transition-colors ${
              theme === 'system' ? 'text-[#22D3EE] bg-[#1A2430] font-semibold' : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1A2430]'
            }`}
          >
            <Laptop className="w-3.5 h-3.5 text-[#94A3B8]" />
            <span>System</span>
          </button>
        </div>
      )}
    </div>
  );
};
