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
    <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#121923] rounded-xl w-fit border border-[#263342]">
      {categories.map((category) => {
        const isSelected = activeCategory === category;
        const count = counts ? counts[category] : undefined;

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ease-out flex items-center gap-1.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:outline-none ${
              isSelected
                ? 'bg-[#1A2430] text-[#22D3EE] border border-[#263342] shadow-sm'
                : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1A2430]'
            }`}
          >
            <span>{category}</span>
            {count !== undefined && (
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                  isSelected 
                    ? 'bg-[#22D3EE]/20 text-[#22D3EE]' 
                    : 'bg-[#1A2430] text-[#94A3B8]'
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
