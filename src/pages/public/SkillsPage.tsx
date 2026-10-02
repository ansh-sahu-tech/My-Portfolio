import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Code2, 
  Cpu, 
  Layers, 
  GitBranch
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { SectionHeader } from '../../components/common/SectionHeader';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { SkillCard } from '../../components/skills/SkillCard';

export const SkillsPage: React.FC = () => {
  const { skills } = useData();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { label: 'All Skills', value: 'All', icon: <Layers className="w-4 h-4" /> },
    { label: 'Frontend', value: 'Frontend', icon: <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
    { label: 'Development', value: 'Development', icon: <GitBranch className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> },
    { label: 'AI/ML', value: 'AI/ML', icon: <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> },
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-sans pb-16">
      {/* 1. Header */}
      <ScrollReveal>
        <SectionHeader
          headingTag="h1"
          badge="Skills &amp; Technologies"
          badgeVariant="brand"
          title="Ansh Sahu | Software Engineer"
          highlightText="Stack &amp; Capabilities"
          description="Comprehensive breakdown of the frontend libraries, developer workflows, and machine learning foundations utilized by Ansh Sahu (ansh.developer)."
        />
      </ScrollReveal>

      {/* 2. Filter & Search Bar */}
      <ScrollReveal delay={0.08}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 transition-all duration-200"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* 3. Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {filteredSkills.map((skill, idx) => (
          <ScrollReveal key={skill.id} delay={idx * 0.03}>
            <SkillCard skill={skill} />
          </ScrollReveal>
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 space-y-3">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            No skills found matching "{searchQuery}"
          </p>
          <button
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="text-xs text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};
