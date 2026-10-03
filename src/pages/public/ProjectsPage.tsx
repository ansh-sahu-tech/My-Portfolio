import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { SectionHeader } from '../../components/common/SectionHeader';
import { BackButton } from '../../components/common/BackButton';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { ProjectFilter } from '../../components/projects/ProjectFilter';
import { ProjectCard } from '../../components/projects/ProjectCard';
import { ProjectDetailModal } from '../../components/projects/ProjectDetailModal';
import type { Project, ProjectCategory } from '../../types';

export const ProjectsPage: React.FC = () => {
  const { projects } = useData();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = useMemo(() => [
    'All',
    'Frontend',
    'AI/ML',
  ], []);

  const categoryCounts = useMemo(() => {
    const published = projects.filter((p) => p.published);
    const counts: Record<string, number> = { All: published.length };
    categories.slice(1).forEach((cat) => {
      counts[cat] = published.filter(
        (p) => p.filterCategory === cat || p.category.includes(cat)
      ).length;
    });
    return counts;
  }, [projects, categories]);

  const filteredProjects = useMemo(() => {
    return projects
      .filter((p) => p.published)
      .filter((project) => {
        const matchesCategory =
          activeCategory === 'All' ||
          project.filterCategory === activeCategory ||
          project.category.includes(activeCategory);

        const matchesSearch =
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesSearch;
      });
  }, [projects, activeCategory, searchQuery]);

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
          badge="Selected Projects"
          badgeVariant="brand"
          title="Ansh Sahu | Software Engineering"
          highlightText="Projects &amp; Systems"
          description="Explore high-impact projects spanning responsive web platforms, computer vision applications, and predictive machine learning models built by Ansh Sahu (ansh.developer)."
        />
      </ScrollReveal>

      {/* 2. Controls: Filter & Search Bar */}
      <ScrollReveal delay={0.08}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#121923] border border-[#263342] shadow-sm">
          <ProjectFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={(cat) => setActiveCategory(cat)}
            counts={categoryCounts}
          />

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-[#1A2430] border border-[#263342] text-[#F8FAFC] placeholder:text-[#94A3B8] hover:border-[#22D3EE] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/20 focus:border-[#22D3EE] focus:bg-[#1A2430] transition-all duration-200"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* 3. Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredProjects.map((project, idx) => (
          <ScrollReveal key={project.id} delay={idx * 0.08}>
            <ProjectCard
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          </ScrollReveal>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 bg-[#121923] rounded-xl border border-[#263342] p-8 space-y-3">
          <p className="text-sm font-semibold text-[#94A3B8]">
            No projects found matching your criteria.
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

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
