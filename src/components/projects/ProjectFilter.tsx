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
    <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#FFFFFF] rounded-2xl w-fit border-2 border-[#CCD5AE]">
      {categories.map((category) => {
        const isSelected = activeCategory === category;
        const count = counts ? counts[category] : undefined;

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ease-out flex items-center gap-1.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#D4A373] focus-visible:outline-none ${
              isSelected
                ? 'bg-[#24211D] text-[#FFFFFF] shadow-sm'
                : 'text-[#575249] hover:text-[#24211D] hover:bg-[#E9EDC9]'
            }`}
          >
            <span>{category}</span>
            {count !== undefined && (
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                  isSelected 
                    ? 'bg-[#E9EDC9] text-[#24211D]' 
                    : 'bg-[#FEFAE0] text-[#575249] border border-[#CCD5AE]'
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
