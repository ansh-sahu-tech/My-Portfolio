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
  Share2, 
  BrainCircuit, 
  LineChart, 
  Sparkles, 
  BarChart2, 
  PieChart, 
  Atom, 
  Palette, 
  Wind, 
  GitBranch, 
  Zap
} from 'lucide-react';
import type { Skill } from '../../types';
import { GlassCard } from '../common/GlassCard';
import { Badge } from '../common/Badge';
import { GithubIcon } from '../common/SocialIcons';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const getIcon = (key?: string) => {
    switch (key) {
      case 'Code2': return <Code2 className="w-5 h-5 text-yellow-400" />;
      case 'FileCode': return <FileCode className="w-5 h-5 text-amber-400" />;
      case 'FileCode2': return <FileCode2 className="w-5 h-5 text-blue-400" />;
      case 'Database': return <Database className="w-5 h-5 text-indigo-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-amber-400" />;
      case 'Table': return <Table className="w-5 h-5 text-blue-400" />;
      case 'Binary': return <Binary className="w-5 h-5 text-teal-400" />;
      case 'Camera': return <Camera className="w-5 h-5 text-emerald-400" />;
      case 'Eye': return <Eye className="w-5 h-5 text-cyan-400" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-purple-400" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-indigo-400" />;
      case 'LineChart': return <LineChart className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-yellow-400" />;
      case 'BarChart2': return <BarChart2 className="w-5 h-5 text-cyan-400" />;
      case 'PieChart': return <PieChart className="w-5 h-5 text-purple-400" />;
      case 'Atom': return <Atom className="w-5 h-5 text-cyan-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-pink-400" />;
      case 'Wind': return <Wind className="w-5 h-5 text-teal-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-rose-400" />;
      case 'Github': return <GithubIcon size={20} className="text-slate-300" />;
      default: return <Zap className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getLevelBadgeVariant = (level?: string) => {
    switch (level) {
      case 'Advanced': return 'cyan';
      case 'Proficient': return 'emerald';
      case 'Intermediate': return 'indigo';
      default: return 'slate';
    }
  };

  return (
    <GlassCard
      className="p-4 sm:p-5 border-slate-800/80 hover:border-cyan-500/40 transition-all group flex flex-col justify-between"
      glowColor="cyan"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="p-2.5 rounded-xl bg-[#070b14] border border-slate-800 group-hover:border-cyan-500/30 transition-colors shadow-inner">
            {getIcon(skill.iconKey)}
          </div>
          {skill.level && (
            <Badge variant={getLevelBadgeVariant(skill.level)} size="sm">
              {skill.level}
            </Badge>
          )}
        </div>

        <div>
          <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
            {skill.name}
          </h4>
          <p className="text-[11px] text-slate-400 mt-1 leading-relaxed line-clamp-2">
            {skill.description || `Specialized competencies in ${skill.name}.`}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span>{skill.category}</span>
        <span className="text-cyan-400 font-semibold group-hover:translate-x-0.5 transition-transform">
          NODE READY
        </span>
      </div>
    </GlassCard>
  );
};
