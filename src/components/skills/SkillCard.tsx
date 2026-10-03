import React from 'react';
import type { Skill } from '../../types';
import { Badge } from '../common/Badge';
import { getRealisticSkillIcon } from './RealisticSkillIcons';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="bg-[#121923] border border-[#263342] rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-[#22D3EE] transition-all duration-300 ease-out flex flex-col justify-between group hover:-translate-y-1">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#1A2430] border border-[#263342] shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_14px_rgba(0,0,0,0.4)] group-hover:border-[#22D3EE]">
            {getRealisticSkillIcon(skill.name, skill.iconKey, 34)}
          </div>
          {skill.level && (
            <Badge variant="brand" size="sm">
              {skill.level}
            </Badge>
          )}
        </div>

        <div>
          <h4 className="text-sm font-bold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors duration-200">
            {skill.name}
          </h4>
          <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed line-clamp-2">
            {skill.description || `Specialized competencies in ${skill.name}.`}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-[#263342] flex items-center justify-between text-xs text-[#94A3B8]">
        <span>{skill.category}</span>
        <span className="text-[#22D3EE] font-medium group-hover:underline">
          Verified
        </span>
      </div>
    </div>
  );
};

