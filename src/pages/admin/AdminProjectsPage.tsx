import React, { useState } from 'react';
import { 
  Plus, 
  Edit3, 
  Trash2, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Search
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { useToast } from '../../context/ToastContext';
import type { Project, ProjectCategory } from '../../types';
import { GlassCard } from '../../components/common/GlassCard';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';

export const AdminProjectsPage: React.FC = () => {
  const { projects, addProject, updateProject, deleteProject } = useData();
  const { success, error } = useToast();

  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'AI / Computer Vision',
    filterCategory: 'Computer Vision' as ProjectCategory,
    description: '',
    problem: '',
    solution: '',
    featuresText: '',
    technologiesText: '',
    architecture: '',
    results: '',
    githubUrl: 'https://github.com/ansh-sahu-tech',
    liveUrl: '',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    published: true,
  });

  const handleOpenCreate = () => {
    setEditingProject(null);
    setFormData({
      title: '',
      slug: '',
      category: 'AI / Computer Vision',
      filterCategory: 'Computer Vision',
      description: '',
      problem: '',
      solution: '',
      featuresText: '',
      technologiesText: 'Python, OpenCV, Computer Vision, Machine Learning',
      architecture: '',
      results: '',
      githubUrl: 'https://github.com/ansh-sahu-tech',
      liveUrl: '',
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
      featured: false,
      published: true,
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      slug: project.slug,
      category: project.category,
      filterCategory: project.filterCategory || 'AI/ML',
      description: project.description,
      problem: project.problem || '',
      solution: project.solution || '',
      featuresText: project.features ? project.features.join('\n') : '',
      technologiesText: project.technologies.join(', '),
      architecture: project.architecture || '',
      results: project.results || '',
      githubUrl: project.githubUrl,
      liveUrl: project.liveUrl || '',
      imageUrl: project.imageUrl,
      featured: project.featured,
      published: project.published,
    });
    setModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) {
      error('Missing Title/Description', 'Title and Description are required.');
      return;
    }

    const cleanSlug = (formData.slug.trim() || formData.title.trim())
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    const techArray = formData.technologiesText
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const featuresArray = formData.featuresText
      .split('\n')
      .map((f) => f.trim())
      .filter(Boolean);

    if (editingProject) {
      updateProject(editingProject.id, {
        title: formData.title.trim(),
        slug: cleanSlug,
        category: formData.category.trim(),
        filterCategory: formData.filterCategory as any,
        description: formData.description.trim(),
        problem: formData.problem.trim() || undefined,
        solution: formData.solution.trim() || undefined,
        features: featuresArray,
        technologies: techArray,
        architecture: formData.architecture.trim() || undefined,
        results: formData.results.trim() || undefined,
        githubUrl: formData.githubUrl.trim(),
        liveUrl: formData.liveUrl.trim() || undefined,
        imageUrl: formData.imageUrl.trim(),
        featured: formData.featured,
        published: formData.published,
      });
      success('Project Updated', `"${formData.title}" updated successfully.`);
    } else {
      addProject({
        title: formData.title.trim(),
        slug: cleanSlug,
        category: formData.category.trim(),
        filterCategory: formData.filterCategory as any,
        description: formData.description.trim(),
        problem: formData.problem.trim() || undefined,
        solution: formData.solution.trim() || undefined,
        features: featuresArray,
        technologies: techArray,
        architecture: formData.architecture.trim() || undefined,
        results: formData.results.trim() || undefined,
        githubUrl: formData.githubUrl.trim(),
        liveUrl: formData.liveUrl.trim() || undefined,
        imageUrl: formData.imageUrl.trim(),
        featured: formData.featured,
        published: formData.published,
      });
      success('Project Created', `"${formData.title}" added to portfolio catalog.`);
    }

    setModalOpen(false);
  };

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete project "${title}"?`)) {
      deleteProject(id);
      success('Project Deleted', `"${title}" has been removed.`);
    }
  };

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 font-sans">
      {/* 1. Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Project Management</h1>
          <p className="text-xs text-slate-400 mt-1">
            Create, edit, feature, and publish AI/ML and software project records.
          </p>
        </div>

        <Button size="md" variant="gradient" onClick={handleOpenCreate} icon={<Plus className="w-4 h-4" />}>
          New Project Record
        </Button>
      </div>

      {/* 2. Search & Overview */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#090e1a] border border-slate-800">
        <div className="text-xs font-mono text-slate-400">
          Showing <span className="text-cyan-300 font-bold">{filteredProjects.length}</span> of {projects.length} Total Projects
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-2 bg-[#060a14] border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
          />
        </div>
      </div>

      {/* 3. Projects Table / Cards */}
      <div className="space-y-4">
        {filteredProjects.map((project) => (
          <GlassCard key={project.id} className="p-5 border-slate-800 space-y-4" glowColor="cyan">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (project.id === 'proj-1' || project.slug === 'ai-driver-awareness-system') {
                      target.src = '/ai-driver-awareness.png';
                    } else if (project.id === 'proj-2' || project.slug === 'sacha-sauda') {
                      target.src = '/sacha-sauda.png';
                    } else if (project.id === 'proj-3' || project.slug === 'student-performance-prediction') {
                      target.src = '/student-performance-prediction.png';
                    } else if (project.id === 'proj-4' || project.slug === 'swagatam-vijay-bakers') {
                      target.src = '/bakery-project.png';
                    } else if (project.id === 'proj-5' || project.slug === 'developer-portfolio-2026') {
                      target.src = '/ansh-profile.jpg';
                    }
                  }}
                  className={`w-20 h-16 rounded-xl object-cover border border-slate-800 shrink-0 hidden sm:block ${
                    project.imagePosition === 'top' ||
                    project.imageUrl?.includes('ansh-profile') ||
                    project.id === 'proj-5' ||
                    project.slug === 'developer-portfolio-2026'
                      ? 'object-top'
                      : 'object-center'
                  }`}
                />
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-bold text-white">{project.title}</h3>
                    <Badge variant="cyan" size="sm">
                      {project.category}
                    </Badge>
                    {project.featured && (
                      <Badge variant="amber" size="sm" icon={<Sparkles className="w-3 h-3" />}>
                        Featured
                      </Badge>
                    )}
                    {!project.published && (
                      <Badge variant="rose" size="sm">
                        Draft (Unpublished)
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{project.description}</p>
                  <p className="text-[11px] font-mono text-slate-500 mt-1">
                    Slug: /{project.slug} • Updated: {new Date(project.updatedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0 self-end lg:self-center">
                {/* Publish Toggle */}
                <button
                  onClick={() => {
                    updateProject(project.id, { published: !project.published });
                    success(
                      project.published ? 'Project Unpublished' : 'Project Published',
                      `"${project.title}" visibility changed.`
                    );
                  }}
                  className={`p-2 rounded-xl border transition-colors ${
                    project.published
                      ? 'bg-slate-800 text-slate-300 hover:text-white border-slate-700'
                      : 'bg-rose-950/60 text-rose-300 border-rose-500/40'
                  }`}
                  title={project.published ? 'Click to unpublish' : 'Click to publish'}
                >
                  {project.published ? <Eye className="w-4 h-4 text-emerald-400" /> : <EyeOff className="w-4 h-4" />}
                </button>

                {/* Featured Toggle */}
                <button
                  onClick={() => {
                    updateProject(project.id, { featured: !project.featured });
                    success(
                      project.featured ? 'Removed from Featured' : 'Marked as Featured',
                      `"${project.title}" updated.`
                    );
                  }}
                  className={`p-2 rounded-xl border transition-colors ${
                    project.featured
                      ? 'bg-amber-950/60 text-amber-300 border-amber-500/40'
                      : 'bg-slate-800 text-slate-400 hover:text-amber-300 border-slate-700'
                  }`}
                  title="Toggle Featured"
                >
                  <Sparkles className="w-4 h-4" />
                </button>

                {/* Edit Button */}
                <Button size="sm" variant="secondary" onClick={() => handleOpenEdit(project)} icon={<Edit3 className="w-3.5 h-3.5" />}>
                  Edit
                </Button>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(project.id, project.title)}
                  className="p-2 rounded-xl bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-500/30 transition-colors"
                  title="Delete Project"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* 4. Create / Edit Project Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingProject ? 'Edit Project Record' : 'Create New Project Record'}
        subtitle="Manage project metadata, case study sections, and links"
        maxWidth="3xl"
      >
        <form onSubmit={handleSave} className="space-y-4 font-sans text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="font-mono font-medium text-slate-300">Project Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. AI Driver Awareness System"
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono font-medium text-slate-300">URL Slug (Auto-generated)</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="e.g. ai-driver-awareness-system"
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="font-mono font-medium text-slate-300">Display Category</label>
              <input
                type="text"
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="e.g. AI / Computer Vision"
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono font-medium text-slate-300">Filter Tab Classification</label>
              <select
                value={formData.filterCategory}
                onChange={(e) => setFormData({ ...formData, filterCategory: e.target.value as any })}
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="AI/ML">AI/ML</option>
                <option value="Computer Vision">Computer Vision</option>
                <option value="Data Science">Data Science</option>
                <option value="Web Development">Web Development</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-mono font-medium text-slate-300">Description *</label>
            <textarea
              required
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Summary of the project..."
              className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="font-mono font-medium text-slate-300">Problem Statement</label>
              <textarea
                rows={2}
                value={formData.problem}
                onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                placeholder="What challenge does this project solve?"
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 resize-none"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono font-medium text-slate-300">Engineering Solution</label>
              <textarea
                rows={2}
                value={formData.solution}
                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                placeholder="How does your architecture solve it?"
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 resize-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-mono font-medium text-slate-300">Technologies (Comma separated)</label>
            <input
              type="text"
              value={formData.technologiesText}
              onChange={(e) => setFormData({ ...formData, technologiesText: e.target.value })}
              placeholder="Python, OpenCV, Computer Vision, Scikit-learn"
              className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 font-mono"
            />
          </div>

          <div className="space-y-1">
            <label className="font-mono font-medium text-slate-300">Core Features (One per line)</label>
            <textarea
              rows={3}
              value={formData.featuresText}
              onChange={(e) => setFormData({ ...formData, featuresText: e.target.value })}
              placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
              className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="font-mono font-medium text-slate-300">Image URL</label>
              <input
                type="text"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white font-mono text-[11px]"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono font-medium text-slate-300">GitHub Repository URL</label>
              <input
                type="text"
                value={formData.githubUrl}
                onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                placeholder="YOUR_GITHUB_URL"
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white font-mono text-[11px]"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono font-medium text-slate-300">Live Demo URL (Optional)</label>
              <input
                type="text"
                value={formData.liveUrl}
                onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                placeholder="https://..."
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white font-mono text-[11px]"
              />
            </div>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="w-4 h-4 rounded text-cyan-500 bg-slate-900 border-slate-700"
              />
              <span className="text-slate-300 font-mono">Featured Project</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={formData.published}
                onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                className="w-4 h-4 rounded text-cyan-500 bg-slate-900 border-slate-700"
              />
              <span className="text-slate-300 font-mono">Published to Portfolio</span>
            </label>
          </div>

          <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
            <Button type="button" variant="ghost" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="gradient">
              {editingProject ? 'Save Changes' : 'Create Project'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
