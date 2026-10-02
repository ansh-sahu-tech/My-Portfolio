import React from 'react';
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
    <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl w-fit border border-slate-200/80 dark:border-slate-700/80">
      {categories.map((category) => {
        const isSelected = activeCategory === category;
        const count = counts ? counts[category] : undefined;

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ease-out flex items-center gap-1.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none ${
              isSelected
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/50'
            }`}
          >
            <span>{category}</span>
            {count !== undefined && (
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                  isSelected 
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400' 
                    : 'bg-slate-200/80 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
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
