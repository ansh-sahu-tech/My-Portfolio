import React from 'react';

interface TechBadgeProps {
  tech: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => {
  const getTechStyle = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('python')) return 'bg-yellow-950/40 text-yellow-300 border-yellow-500/30';
    if (lower.includes('opencv') || lower.includes('vision')) return 'bg-cyan-950/40 text-cyan-300 border-cyan-500/30';
    if (lower.includes('learn') || lower.includes('ml') || lower.includes('tensorflow')) return 'bg-indigo-950/40 text-indigo-300 border-indigo-500/30';
    if (lower.includes('pandas') || lower.includes('numpy') || lower.includes('data')) return 'bg-blue-950/40 text-blue-300 border-blue-500/30';
    if (lower.includes('react') || lower.includes('typescript')) return 'bg-sky-950/40 text-sky-300 border-sky-500/30';
    if (lower.includes('tailwind')) return 'bg-teal-950/40 text-teal-300 border-teal-500/30';
    return 'bg-slate-800/60 text-slate-300 border-slate-700/50';
  };

  return (
    <span
      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-lg border transition-all hover:scale-105 inline-flex items-center ${getTechStyle(
        tech
      )}`}
    >
      {tech}
    </span>
  );
};
