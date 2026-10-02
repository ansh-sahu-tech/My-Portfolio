import React from 'react';
import { SparkleStar } from './SparkleStar';

interface DeckCardFooterProps {
  authorName?: string;
  className?: string;
}

export const DeckCardFooter: React.FC<DeckCardFooterProps> = ({
  authorName = 'By Ansh Sahu',
  className = ''
}) => {
  return (
    <div className={`w-full pt-4 mt-6 border-t border-[#e2d5c3]/90 flex items-center justify-between text-xs text-stone-600 ${className}`}>
      <div className="flex items-center gap-1.5 text-terracotta-600">
        <SparkleStar size={13} color="#c2744d" />
        <span className="text-[10px] uppercase tracking-widest font-semibold text-stone-500">
          Portfolio 2026
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-serif italic font-medium text-stone-800 text-sm sm:text-base tracking-wide">
          {authorName}
        </span>
        <SparkleStar size={12} color="#c2744d" />
      </div>
    </div>
  );
};
