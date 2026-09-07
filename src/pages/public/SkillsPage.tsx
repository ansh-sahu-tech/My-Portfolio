import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Code2, 
  Cpu, 
  Eye, 
  BarChart3, 
  Layers, 
  Sparkles, 
  Filter 
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { SectionHeader } from '../../components/common/SectionHeader';
import { SkillCard } from '../../components/skills/SkillCard';

export const SkillsPage: React.FC = () => {
  const { skills } = useData();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: Array<{ label: string; value: string; icon: React.ReactNode }> = [
    { label: 'All Skills', value: 'All', icon: <Layers className="w-4 h-4" /> },
    { label: 'Programming', value: 'Programming', icon: <Code2 className="w-4 h-4 text-yellow-400" /> },
    { label: 'Machine Learning', value: 'Machine Learning', icon: <Cpu className="w-4 h-4 text-indigo-400" /> },
    { label: 'AI & Computer Vision', value: 'AI & Computer Vision', icon: <Eye className="w-4 h-4 text-emerald-400" /> },
    { label: 'Data Analytics', value: 'Data', icon: <BarChart3 className="w-4 h-4 text-blue-400" /> },
    { label: 'Development', value: 'Development', icon: <Code2 className="w-4 h-4 text-cyan-400" /> },
  ];

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
      const matchesCategory =
        activeCategory === 'All' || skill.category === activeCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [skills, activeCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 font-sans">
      {/* 1. Header */}
      <SectionHeader
        badge="Skills & Capabilities"
        badgeVariant="cyan"
        title="Comprehensive"
        highlightText="AI / ML & Engineering Stack"
        description="Explore the programming languages, machine learning frameworks, computer vision algorithms, and developer toolkits I utilize to engineer intelligent solutions."
      />

      {/* 2. Interactive Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#090e1a] border border-slate-800/90 shadow-xl">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-sm shadow-cyan-950/40 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Box */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills (e.g. Python, OpenCV)..."
            className="w-full pl-10 pr-4 py-2 bg-[#060a14] border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
          />
        </div>
      </div>

      {/* 3. Skills Matrix Grid */}
      {filteredSkills.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-[#090e1a] border border-slate-800/80 space-y-3">
          <Filter className="w-8 h-8 text-slate-500 mx-auto" />
          <p className="text-sm font-semibold text-slate-300">No skills matching "{searchQuery}"</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('All');
            }}
            className="text-xs text-cyan-400 hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </motion.div>
      )}

      {/* 4. Categorized Breakdown Cards */}
      <div className="pt-8 border-t border-slate-800 space-y-6">
        <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          Deep Competency Overview
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-[#080d19] border border-slate-800 space-y-2">
            <h4 className="text-sm font-bold text-cyan-300">Mathematical & Algorithm Foundations</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Solid understanding of linear algebra, matrix decomposition, multivariate calculus, gradient optimization, loss landscape dynamics, and probability distributions.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#080d19] border border-slate-800 space-y-2">
            <h4 className="text-sm font-bold text-indigo-300">Real-Time Computer Vision</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Practical experience deploying facial landmark estimation, EAR thresholding, contour detection, and optical flow on live camera feeds with minimal computational overhead.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#080d19] border border-slate-800 space-y-2">
            <h4 className="text-sm font-bold text-emerald-300">Clean Developer Engineering</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Writing type-safe TypeScript code, architecting clean React component hierarchies, utilizing Tailwind utility layers, and managing atomic Git release workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
