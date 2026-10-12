import React from 'react';

interface TechBadgeProps {
  tech: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => {
  const getTechStyle = () => {
    return 'bg-[#E9EDC9] text-[#24211D] border-[#CCD5AE] hover:text-[#24211D] hover:border-[#D4A373]';
  };

  return (
    <span
      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-lg border transition-all hover:scale-105 inline-flex items-center ${getTechStyle()}`}
    >
      {tech}
    </span>
  );
};
