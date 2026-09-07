import React, { useState } from 'react';
import { Plus, Edit3, Trash2, Search } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { useToast } from '../../context/ToastContext';
import type { Skill, SkillCategory } from '../../types';
import { GlassCard } from '../../components/common/GlassCard';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';

export const AdminSkillsPage: React.FC = () => {
  const { skills, addSkill, updateSkill, deleteSkill } = useData();
  const { success, error } = useToast();

  const [modalOpen, setModalOpen] = useState(false);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    category: 'Programming' as SkillCategory,
    level: 'Advanced' as 'Beginner' | 'Intermediate' | 'Advanced' | 'Proficient',
    iconKey: 'Code2',
    description: '',
  });

  const categories: SkillCategory[] = [
    'Programming',
    'Machine Learning',
    'AI & Computer Vision',
    'Data',
    'Development',
  ];

  const handleOpenCreate = () => {
    setEditingSkill(null);
    setFormData({
      name: '',
      category: 'Programming',
      level: 'Advanced',
      iconKey: 'Code2',
      description: '',
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (skill: Skill) => {
    setEditingSkill(skill);
    setFormData({
      name: skill.name,
      category: skill.category,
      level: skill.level || 'Advanced',
      iconKey: skill.iconKey || 'Code2',
      description: skill.description || '',
    });
    setModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      error('Name Required', 'Skill name cannot be empty.');
      return;
    }

    if (editingSkill) {
      updateSkill(editingSkill.id, {
        name: formData.name.trim(),
        category: formData.category,
        level: formData.level,
        iconKey: formData.iconKey,
        description: formData.description.trim() || undefined,
      });
      success('Skill Updated', `"${formData.name}" updated.`);
    } else {
      addSkill({
        name: formData.name.trim(),
        category: formData.category,
        level: formData.level,
        iconKey: formData.iconKey,
        description: formData.description.trim() || undefined,
      });
      success('Skill Created', `"${formData.name}" added to skills catalog.`);
    }

    setModalOpen(false);
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Delete skill "${name}"?`)) {
      deleteSkill(id);
      success('Skill Removed', `"${name}" has been deleted.`);
    }
  };

  const filteredSkills = skills.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 font-sans">
      {/* 1. Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Skills Management</h1>
          <p className="text-xs text-slate-400 mt-1">
            Configure technical stacks, skill proficiencies, and categories.
          </p>
        </div>

        <Button size="md" variant="gradient" onClick={handleOpenCreate} icon={<Plus className="w-4 h-4" />}>
          Add Skill Node
        </Button>
      </div>

      {/* 2. Search & Stats */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#090e1a] border border-slate-800">
        <div className="text-xs font-mono text-slate-400">
          Showing <span className="text-cyan-300 font-bold">{filteredSkills.length}</span> Active Skills
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills..."
            className="w-full pl-10 pr-4 py-2 bg-[#060a14] border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
          />
        </div>
      </div>

      {/* 3. Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSkills.map((skill) => (
          <GlassCard key={skill.id} className="p-4 border-slate-800 space-y-3" glowColor="cyan">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">{skill.category}</span>
              <Badge variant="cyan" size="sm">
                {skill.level}
              </Badge>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white">{skill.name}</h4>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{skill.description}</p>
            </div>

            <div className="pt-2 border-t border-slate-800 flex justify-end gap-2">
              <button
                onClick={() => handleOpenEdit(skill)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Edit Skill"
              >
                <Edit3 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleDelete(skill.id, skill.name)}
                className="p-1.5 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 transition-colors"
                title="Delete Skill"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* 4. Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingSkill ? 'Edit Skill Record' : 'Add Skill Node'}
        subtitle="Configure skill name, category, and proficiency level"
        maxWidth="md"
      >
        <form onSubmit={handleSave} className="space-y-4 font-sans text-xs">
          <div className="space-y-1">
            <label className="font-mono font-medium text-slate-300">Skill Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. PyTorch"
              className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-mono font-medium text-slate-300">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-mono font-medium text-slate-300">Proficiency Level</label>
              <select
                value={formData.level}
                onChange={(e) => setFormData({ ...formData, level: e.target.value as any })}
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Proficient">Proficient</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-mono font-medium text-slate-300">Description / Focus Area</label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Brief summary of experience with this technology..."
              className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 resize-none"
            />
          </div>

          <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
            <Button type="button" variant="ghost" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="gradient">
              {editingSkill ? 'Save Changes' : 'Add Skill'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
