import React, { useState } from 'react';
import { Plus, Edit3, Trash2 } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { useToast } from '../../context/ToastContext';
import type { Experience } from '../../types';
import { GlassCard } from '../../components/common/GlassCard';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';

export const AdminExperiencePage: React.FC = () => {
  const { experience, addExperience, updateExperience, deleteExperience } = useData();
  const { success, error } = useToast();

  const [modalOpen, setModalOpen] = useState(false);
  const [editingExp, setEditingExp] = useState<Experience | null>(null);

  const [formData, setFormData] = useState({
    role: '',
    organization: '',
    period: '2023 — Present',
    location: 'Mathura, Uttar Pradesh, India',
    description: '',
    highlightsText: '',
    isCurrent: true,
    type: 'Education' as 'Education' | 'Academic Project' | 'Continuous Learning',
  });

  const handleOpenCreate = () => {
    setEditingExp(null);
    setFormData({
      role: '',
      organization: '',
      period: '2023 — Present',
      location: 'Mathura, Uttar Pradesh, India',
      description: '',
      highlightsText: '',
      isCurrent: true,
      type: 'Education',
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (item: Experience) => {
    setEditingExp(item);
    setFormData({
      role: item.role,
      organization: item.organization,
      period: item.period,
      location: item.location,
      description: item.description,
      highlightsText: item.highlights ? item.highlights.join('\n') : '',
      isCurrent: item.isCurrent,
      type: item.type,
    });
    setModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.role.trim() || !formData.organization.trim()) {
      error('Missing Information', 'Role and Organization are required.');
      return;
    }

    const highlightsArr = formData.highlightsText
      .split('\n')
      .map((h) => h.trim())
      .filter(Boolean);

    if (editingExp) {
      updateExperience(editingExp.id, {
        role: formData.role.trim(),
        organization: formData.organization.trim(),
        period: formData.period.trim(),
        location: formData.location.trim(),
        description: formData.description.trim(),
        highlights: highlightsArr,
        isCurrent: formData.isCurrent,
        type: formData.type,
      });
      success('Record Updated', `"${formData.role}" updated.`);
    } else {
      addExperience({
        role: formData.role.trim(),
        organization: formData.organization.trim(),
        period: formData.period.trim(),
        location: formData.location.trim(),
        description: formData.description.trim(),
        highlights: highlightsArr,
        isCurrent: formData.isCurrent,
        type: formData.type,
      });
      success('Record Added', `"${formData.role}" added to timeline.`);
    }

    setModalOpen(false);
  };

  const handleDelete = (id: string, role: string) => {
    if (window.confirm(`Delete entry "${role}"?`)) {
      deleteExperience(id);
      success('Entry Deleted', `"${role}" removed.`);
    }
  };

  return (
    <div className="space-y-8 font-sans">
      {/* 1. Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Experience & Education Management</h1>
          <p className="text-xs text-slate-400 mt-1">
            Manage academic milestones, project records, and learning timelines.
          </p>
        </div>

        <Button size="md" variant="gradient" onClick={handleOpenCreate} icon={<Plus className="w-4 h-4" />}>
          Add Timeline Entry
        </Button>
      </div>

      {/* 2. Timeline List */}
      <div className="space-y-4">
        {experience.map((item) => (
          <GlassCard key={item.id} className="p-6 border-slate-800 space-y-3" glowColor="cyan">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <Badge variant={item.type === 'Education' ? 'indigo' : 'cyan'} size="sm">
                  {item.type}
                </Badge>
                <h3 className="text-base font-bold text-white mt-1">{item.role}</h3>
                <p className="text-xs font-semibold text-cyan-300">{item.organization}</p>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <Button size="sm" variant="secondary" onClick={() => handleOpenEdit(item)} icon={<Edit3 className="w-3.5 h-3.5" />}>
                  Edit
                </Button>
                <button
                  onClick={() => handleDelete(item.id, item.role)}
                  className="p-2 rounded-xl bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-500/30 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
            <p className="text-[11px] font-mono text-slate-500">{item.period} • {item.location}</p>
          </GlassCard>
        ))}
      </div>

      {/* 3. Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingExp ? 'Edit Timeline Entry' : 'Add Timeline Entry'}
        subtitle="Configure academic or project milestone details"
        maxWidth="lg"
      >
        <form onSubmit={handleSave} className="space-y-4 font-sans text-xs">
          <div className="space-y-1">
            <label className="font-mono font-medium text-slate-300">Role / Title *</label>
            <input
              type="text"
              required
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              placeholder="e.g. B.Tech in CSE (AI & ML)"
              className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="font-mono font-medium text-slate-300">Organization / University *</label>
              <input
                type="text"
                required
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="e.g. Sanskriti University"
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono font-medium text-slate-300">Entry Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="Education">Education</option>
                <option value="Academic Project">Academic Project</option>
                <option value="Continuous Learning">Continuous Learning</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="font-mono font-medium text-slate-300">Period / Timeline</label>
              <input
                type="text"
                value={formData.period}
                onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                placeholder="2023 — 2027"
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 font-mono"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono font-medium text-slate-300">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="Mathura, Uttar Pradesh, India"
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-mono font-medium text-slate-300">Description</label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Overview of this phase..."
              className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 resize-none"
            />
          </div>

          <div className="space-y-1">
            <label className="font-mono font-medium text-slate-300">Key Highlights (One per line)</label>
            <textarea
              rows={3}
              value={formData.highlightsText}
              onChange={(e) => setFormData({ ...formData, highlightsText: e.target.value })}
              placeholder="Coursework or project milestone 1&#10;Milestone 2"
              className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
            <Button type="button" variant="ghost" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="gradient">
              {editingExp ? 'Save Changes' : 'Create Entry'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
