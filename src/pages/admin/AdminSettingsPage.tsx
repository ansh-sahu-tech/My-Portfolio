import React, { useState } from 'react';
import { Save, RefreshCcw, Database, Globe, User } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { useToast } from '../../context/ToastContext';
import { GlassCard } from '../../components/common/GlassCard';
import { Button } from '../../components/common/Button';

export const AdminSettingsPage: React.FC = () => {
  const { settings, updateSettings, resetAllData } = useData();
  const { success, warning } = useToast();

  const [formData, setFormData] = useState({ ...settings });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(formData);
    success('Settings Saved', 'Portfolio metadata and configurations have been updated.');
  };

  const handleReset = () => {
    if (window.confirm('Reset all project, skill, and settings data back to default values?')) {
      resetAllData();
      warning('Data Reset', 'All data reverted to initial factory seeds.');
      setFormData({ ...settings });
    }
  };

  return (
    <div className="max-w-4xl space-y-8 font-sans">
      {/* 1. Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">System & Portfolio Settings</h1>
          <p className="text-xs text-slate-400 mt-1">
            Configure contact placeholders, branding copy, academic credentials, and optional database keys.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button size="sm" variant="danger" onClick={handleReset} icon={<RefreshCcw className="w-3.5 h-3.5" />}>
            Reset Factory Data
          </Button>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Profile & Branding */}
        <GlassCard className="p-6 border-slate-800 space-y-4" glowColor="cyan">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
            <User className="w-4 h-4" /> Personal & Academic Profile
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1">
              <label className="font-mono font-medium text-slate-300">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono font-medium text-slate-300">Role Title</label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono font-medium text-slate-300">University</label>
              <input
                type="text"
                value={formData.university}
                onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono font-medium text-slate-300">Degree & Specialization</label>
              <input
                type="text"
                value={formData.education}
                onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="space-y-1 text-xs">
            <label className="font-mono font-medium text-slate-300">Hero Status Badge Text</label>
            <input
              type="text"
              value={formData.statusBadge}
              onChange={(e) => setFormData({ ...formData, statusBadge: e.target.value })}
              className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="space-y-1 text-xs">
            <label className="font-mono font-medium text-slate-300">About Description</label>
            <textarea
              rows={3}
              value={formData.aboutDescription}
              onChange={(e) => setFormData({ ...formData, aboutDescription: e.target.value })}
              className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 resize-none leading-relaxed"
            />
          </div>
        </GlassCard>

        {/* Contact Links & Placeholders */}
        <GlassCard className="p-6 border-slate-800 space-y-4" glowColor="cyan">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Globe className="w-4 h-4" /> Contact & Social Handles (Configurable Placeholders)
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="space-y-1">
              <label className="font-medium text-slate-300">Email Address (or YOUR_EMAIL)</label>
              <input
                type="text"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1">
              <label className="font-medium text-slate-300">GitHub Profile URL</label>
              <input
                type="text"
                value={formData.githubUrl}
                onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1">
              <label className="font-medium text-slate-300">LinkedIn Profile URL</label>
              <input
                type="text"
                value={formData.linkedinUrl}
                onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1">
              <label className="font-medium text-slate-300">Resume Path</label>
              <input
                type="text"
                value={formData.resumeUrl}
                onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>
        </GlassCard>

        {/* Database & Cloud Integration (Optional Supabase) */}
        <GlassCard className="p-6 border-slate-800 space-y-4" glowColor="emerald">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Database className="w-4 h-4" /> Optional Backend Integration (Supabase)
          </div>
          <p className="text-xs text-slate-400">
            By default, all updates persist instantly in LocalStorage. You may optionally plug in your Supabase project credentials for live cloud synchronization.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="space-y-1">
              <label className="font-medium text-slate-300">Supabase Project URL</label>
              <input
                type="text"
                value={formData.supabaseUrl || ''}
                onChange={(e) => setFormData({ ...formData, supabaseUrl: e.target.value })}
                placeholder="https://your-project.supabase.co"
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 text-[11px]"
              />
            </div>

            <div className="space-y-1">
              <label className="font-medium text-slate-300">Supabase Anon Key</label>
              <input
                type="password"
                value={formData.supabaseAnonKey || ''}
                onChange={(e) => setFormData({ ...formData, supabaseAnonKey: e.target.value })}
                placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6..."
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 text-[11px]"
              />
            </div>
          </div>
        </GlassCard>

        <div className="flex justify-end gap-3 pt-2">
          <Button type="submit" size="lg" variant="gradient" icon={<Save className="w-4 h-4" />}>
            Save All Settings
          </Button>
        </div>
      </form>
    </div>
  );
};
