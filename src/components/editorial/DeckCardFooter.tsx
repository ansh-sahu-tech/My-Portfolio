import React from 'react';

interface DeckCardFooterProps {
  authorName?: string;
  className?: string;
}

export const DeckCardFooter: React.FC<DeckCardFooterProps> = ({
  authorName = 'By Ansh Sahu',
  className = ''
}) => {
  return (
    <div className={`w-full pt-4 mt-6 border-t border-[#263342] flex flex-wrap items-center justify-between gap-2 text-xs text-[#94A3B8] ${className}`}>
      <div className="flex items-center gap-1.5 text-[#22D3EE]">
        <span className="text-[10px] uppercase tracking-widest font-semibold text-[#94A3B8]">
          Portfolio 2026
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-serif italic font-medium text-[#F8FAFC] text-sm sm:text-base tracking-wide">
          {authorName}
        </span>
      </div>
    </div>
  );
};
