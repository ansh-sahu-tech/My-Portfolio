import React from 'react';
import { motion } from 'framer-motion';
import type { ProjectCategory } from '../../types';

interface ProjectFilterProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory;
  onSelectCategory: (cat: ProjectCategory) => void;
  counts?: Record<string, number>;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  counts,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#0a0f1d] border border-slate-800 rounded-2xl w-fit">
      {categories.map((category) => {
        const isSelected = activeCategory === category;
        const count = counts ? counts[category] : undefined;

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`relative px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 z-10 select-none ${
              isSelected
                ? 'text-cyan-200 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            {isSelected && (
              <motion.div
                layoutId="activeFilterPill"
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-cyan-500/10 border border-cyan-500/40 rounded-xl shadow-lg shadow-cyan-950/50 -z-10"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span>{category}</span>
            {count !== undefined && (
              <span
                className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                  isSelected ? 'bg-cyan-400/20 text-cyan-300' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
