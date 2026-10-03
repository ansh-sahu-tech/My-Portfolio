import React from 'react';

interface TechBadgeProps {
  tech: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => {
  const getTechStyle = () => {
    return 'bg-[#1A2430] text-[#94A3B8] border-[#263342] hover:text-[#22D3EE] hover:border-[#22D3EE]';
  };

  return (
    <span
      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-lg border transition-all hover:scale-105 inline-flex items-center ${getTechStyle()}`}
    >
      {tech}
    </span>
  );
};
