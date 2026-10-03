import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface DeckCardHeaderProps {
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
  onBack?: () => void;
  className?: string;
}

export const DeckCardHeader: React.FC<DeckCardHeaderProps> = ({
  activeSection = 'home',
  onNavigate,
  onBack,
  className = ''
}) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'Introduction' },
    { id: 'education', label: 'Education' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onBack) {
      onBack();
      return;
    }
    const prevSlideBtn = document.querySelector<HTMLButtonElement>('button[aria-label="Previous Slide"]');
    if (prevSlideBtn && !prevSlideBtn.disabled) {
      prevSlideBtn.click();
      return;
    }
    const sectionOrder = ['hero', 'about', 'vision', 'education', 'skills', 'experience', 'projects', 'contact', 'thanks'];
    const currentIndex = sectionOrder.indexOf(activeSection || 'hero');
    if (currentIndex > 0) {
      const prevId = sectionOrder[currentIndex - 1];
      const prevEl = document.getElementById(prevId);
      if (prevEl) {
        prevEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (window.history.state && window.history.state.idx > 0) {
      window.history.back();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleClick = (e: React.MouseEvent, id: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`w-full flex items-center justify-between gap-3 ${className}`}>
      {/* Back button on top on the left */}
      <button
        type="button"
        onClick={handleBack}
        className="group/back inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#94A3B8] hover:text-[#22D3EE] active:scale-95 px-2.5 py-1 rounded-lg bg-[#1A2430] border border-[#263342] hover:border-[#22D3EE] shadow-xs transition-all duration-200 cursor-pointer shrink-0"
        aria-label="Back"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover/back:-translate-x-0.5 transition-transform duration-200 text-[#22D3EE]" />
        <span>Back</span>
      </button>

      <nav className="flex flex-wrap items-center justify-end gap-2 sm:gap-4 md:gap-6 text-[10px] sm:text-xs tracking-wider uppercase font-semibold text-[#94A3B8]">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`transition-all duration-200 hover:text-[#06B6D4] relative py-1 px-1 sm:px-0 min-h-[32px] sm:min-h-auto inline-flex items-center ${
                isActive ? 'text-[#22D3EE] font-bold' : 'text-[#94A3B8] hover:text-[#F8FAFC]'
              }`}
            >
              {item.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#22D3EE] rounded-full" />
              )}
            </a>
          );
        })}
      </nav>
    </div>
  );
};
