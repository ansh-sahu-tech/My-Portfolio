import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { SectionHeader } from '../../components/common/SectionHeader';
import { BackButton } from '../../components/common/BackButton';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { SkillCard } from '../../components/skills/SkillCard';
import { 
  RealisticReactIcon, 
  RealisticGitIcon, 
  RealisticMlIcon,
  RealisticNextjsIcon 
} from '../../components/skills/RealisticSkillIcons';

export const SkillsPage: React.FC = () => {
  const { skills } = useData();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { label: 'All Skills', value: 'All', icon: <RealisticNextjsIcon size={16} /> },
    { label: 'Frontend', value: 'Frontend', icon: <RealisticReactIcon size={16} /> },
    { label: 'Development', value: 'Development', icon: <RealisticGitIcon size={16} /> },
    { label: 'AI/ML', value: 'AI/ML', icon: <RealisticMlIcon size={16} /> },
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
      {/* Top Left Back Navigation */}
      <ScrollReveal>
        <div className="flex items-center justify-start pt-1 -mb-6 sm:-mb-7">
          <BackButton />
        </div>
      </ScrollReveal>

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
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#121923] border border-[#263342] shadow-sm">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:outline-none flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#22D3EE] text-[#0B0F14] shadow-sm'
                      : 'bg-[#1A2430] text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#263342] border border-[#263342]'
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
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-[#1A2430] border border-[#263342] text-[#F8FAFC] placeholder:text-[#94A3B8] hover:border-[#22D3EE] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/20 focus:border-[#22D3EE] focus:bg-[#1A2430] transition-all duration-200"
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
        <div className="text-center py-12 bg-[#121923] rounded-xl border border-[#263342] p-8 space-y-3">
          <p className="text-sm font-semibold text-[#94A3B8]">
            No skills found matching "{searchQuery}"
          </p>
          <button
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="text-xs text-[#22D3EE] hover:text-[#06B6D4] font-medium hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};
