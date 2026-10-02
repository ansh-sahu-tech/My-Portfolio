import React from 'react';
import { 
  Code2, 
  FileCode, 
  FileCode2, 
  Database, 
  Cpu, 
  Layers, 
  Table, 
  Binary, 
  Camera, 
  Eye, 
  BrainCircuit, 
  LineChart, 
  BarChart2, 
  Atom, 
  Palette, 
  Wind, 
  GitBranch, 
  Smartphone,
  Network,
  Code
} from 'lucide-react';
import type { Skill } from '../../types';
import { Badge } from '../common/Badge';
import { GithubIcon } from '../common/SocialIcons';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const getIcon = (name: string, key?: string) => {
    switch (name) {
      case 'HTML': return <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'CSS': return <Palette className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'JavaScript': return <FileCode className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'React': return <Atom className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Next.js': return <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Tailwind CSS': return <Wind className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Git': return <GitBranch className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'GitHub': return <GithubIcon size={18} className="text-emerald-600 dark:text-emerald-400" />;
      case 'REST APIs': return <Network className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Responsive Design': return <Smartphone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Python': return <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Machine Learning': return <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Artificial Intelligence': return <BrainCircuit className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Computer Vision': return <Eye className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Data Analysis': return <BarChart2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      default: break;
    }

    switch (key) {
      case 'Code2': return <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'FileCode': return <FileCode className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'FileCode2': return <FileCode2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Database': return <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Table': return <Table className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Binary': return <Binary className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'Camera': return <Camera className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Eye': return <Eye className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'LineChart': return <LineChart className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'BarChart2': return <BarChart2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Atom': return <Atom className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Wind': return <Wind className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Github': return <GithubIcon size={18} className="text-emerald-600 dark:text-emerald-400" />;
      default: return <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 ease-out flex flex-col justify-between group hover:-translate-y-1">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 transition-all duration-200 group-hover:scale-105 group-hover:border-blue-300 dark:group-hover:border-blue-700">
            {getIcon(skill.name, skill.iconKey)}
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
