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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 font-sans pb-16">
      {/* Top Left Back Navigation */}
      <ScrollReveal>
        <div className="mb-4 sm:mb-6">
          <BackButton />
        </div>
      </ScrollReveal>

      {/* 1. Header */}
      <ScrollReveal>
        <SectionHeader
          headingTag="h1"
          badge="Skills &amp; Technologies"
          badgeVariant="brand"
          title="Ansh Sahu | Frontend Developer"
          highlightText="Stack &amp; Capabilities"
          description="Comprehensive breakdown of the frontend ecosystem, React &amp; Next.js tools, UI frameworks, and machine learning foundations utilized by Ansh Sahu (Frontend Developer)."
        />
      </ScrollReveal>

      {/* 2. Filter & Search Bar */}
      <ScrollReveal delay={0.08}>
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-[#FFFFFF] border-2 border-[#CCD5AE] shadow-sm">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#D4A373] focus-visible:outline-none flex items-center gap-1.5 min-h-[38px] ${
                    isSelected
                      ? 'bg-[#24211D] text-[#FFFFFF] shadow-sm'
                      : 'bg-[#E9EDC9] text-[#24211D] hover:bg-[#CCD5AE] border border-[#CCD5AE]'
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
            <Search className="w-4 h-4 text-[#575249] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] text-[#24211D] placeholder:text-[#575249] hover:border-[#D4A373] focus:outline-none focus:ring-2 focus:ring-[#D4A373]/20 focus:border-[#D4A373] transition-all duration-200 min-h-[38px]"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* 3. Skills Grid (Fluid: 1 col on narrow mobile, 2 cols on xs & sm, 3 cols on lg, 4 cols on xl) */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
        {filteredSkills.map((skill, idx) => (
          <ScrollReveal key={skill.id} delay={idx * 0.03}>
            <SkillCard skill={skill} />
          </ScrollReveal>
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <div className="text-center py-12 bg-[#FFFFFF] rounded-2xl border-2 border-[#CCD5AE] p-8 space-y-3">
          <p className="text-sm font-semibold text-[#575249]">
            No skills found matching "{searchQuery}"
          </p>
          <button
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="text-xs text-[#24211D] hover:text-[#D4A373] font-bold hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};
