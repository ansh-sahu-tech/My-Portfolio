import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Search } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { SectionHeader } from '../../components/common/SectionHeader';
import { ProjectFilter } from '../../components/projects/ProjectFilter';
import { ProjectCard } from '../../components/projects/ProjectCard';
import { ProjectDetailModal } from '../../components/projects/ProjectDetailModal';
import type { Project, ProjectCategory } from '../../types';

export const ProjectsPage: React.FC = () => {
  const { projects } = useData();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = [
    'All',
    'AI/ML',
    'Computer Vision',
    'Data Science',
    'Web Development',
  ];

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projects.filter((p) => p.published).length };
    categories.slice(1).forEach((cat) => {
      counts[cat] = projects.filter(
        (p) => p.published && (p.filterCategory === cat || p.category.includes(cat))
      ).length;
    });
    return counts;
  }, [projects]);

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 font-sans">
      {/* 1. Header */}
      <SectionHeader
        badge="Project Matrix"
        badgeVariant="cyan"
        title="Featured AI/ML Systems &"
        highlightText="Developer Platforms"
        description="Comprehensive portfolio of computer vision monitors, machine learning risk classifiers, academic performance predictors, and high-speed web apps."
      />

      {/* 2. Controls: Filter Bar & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
          counts={categoryCounts}
        />

        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects or technologies..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#090e1a] border border-slate-800 rounded-2xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
          />
        </div>
      </div>

      {/* 3. Project Cards Grid */}
      {filteredProjects.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-[#090e1a] border border-slate-800/80 space-y-3">
          <FolderGit2 className="w-10 h-10 text-slate-500 mx-auto" />
          <h4 className="text-sm font-semibold text-slate-300">No projects found</h4>
          <p className="text-xs text-slate-400">
            No projects match the selected category "{activeCategory}" or query "{searchQuery}".
          </p>
          <button
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="text-xs text-cyan-400 hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={(p) => setSelectedProject(p)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
