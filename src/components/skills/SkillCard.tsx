import React from 'react';
import type { Skill } from '../../types';
import { Badge } from '../common/Badge';
import { getRealisticSkillIcon } from './RealisticSkillIcons';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 ease-out flex flex-col justify-between group hover:-translate-y-1">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_14px_rgba(0,0,0,0.08)] dark:group-hover:shadow-[0_4px_14px_rgba(0,0,0,0.4)] group-hover:border-blue-400/40">
            {getRealisticSkillIcon(skill.name, skill.iconKey, 34)}
          </div>
          {skill.level && (
            <Badge variant="brand" size="sm">
              {skill.level}
            </Badge>
          )}
        </div>

        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {skill.name}
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed line-clamp-2">
            {skill.description || `Specialized competencies in ${skill.name}.`}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <span>{skill.category}</span>
        <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
          Verified
        </span>
      </div>
    </div>
  );
};

