import React from 'react';
import type { Skill } from '../../types';
import { Badge } from '../common/Badge';
import { getRealisticSkillIcon } from './RealisticSkillIcons';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="bg-[#FFFFFF] border-2 border-[#CCD5AE] rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-card-hover hover:border-[#D4A373] transition-all duration-300 ease-out flex flex-col justify-between group hover:-translate-y-1">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#FEFAE0] border border-[#CCD5AE] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#D4A373]">
            {getRealisticSkillIcon(skill.name, skill.iconKey, 34)}
          </div>
          {skill.level && (
            <Badge variant="brand" size="sm">
              {skill.level}
            </Badge>
          )}
        </div>

        <div>
          <h4 className="text-base font-bold text-[#24211D] group-hover:text-[#D4A373] transition-colors duration-200">
            {skill.name}
          </h4>
          <p className="text-xs text-[#575249] mt-1.5 leading-relaxed line-clamp-2">
            {skill.description || `Specialized competencies in ${skill.name}.`}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-[#CCD5AE]/60 flex items-center justify-between text-xs text-[#575249]">
        <span>{skill.category}</span>
        <span className="text-[#D4A373] font-semibold">
          Verified
        </span>
      </div>
    </div>
  );
};

