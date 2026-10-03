import React from 'react';

interface DeckCardHeaderProps {
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
  className?: string;
}

export const DeckCardHeader: React.FC<DeckCardHeaderProps> = ({
  activeSection = 'home',
  onNavigate,
  className = ''
}) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'Introduction' },
    { id: 'education', label: 'Education' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

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
    <div className={`w-full flex items-center justify-end ${className}`}>
      <nav className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs tracking-wider uppercase font-semibold text-[#94A3B8]">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`transition-all duration-200 hover:text-[#06B6D4] relative py-1 ${
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
