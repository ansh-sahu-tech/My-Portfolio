import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FolderGit2, 
  Code2, 
  Award, 
  Mail, 
  Plus, 
  ArrowRight, 
  Activity, 
  Settings
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { GlassCard } from '../../components/common/GlassCard';
import { Button } from '../../components/common/Button';

export const AdminDashboardPage: React.FC = () => {
  const { projects, skills, certificates, messages, settings } = useData();

  const unreadMessages = messages.filter((m) => m.status === 'unread');
  const publishedProjects = projects.filter((p) => p.published).length;
  const featuredProjects = projects.filter((p) => p.featured).length;

  const statCards = [
    {
      title: 'Total Projects',
      value: projects.length,
      sub: `${publishedProjects} Published • ${featuredProjects} Featured`,
      icon: <FolderGit2 className="w-5 h-5 text-cyan-400" />,
      link: '/admin/projects',
      border: 'hover:border-cyan-500/40',
    },
    {
      title: 'Active Skills',
      value: skills.length,
      sub: 'Categorized across 5 Domains',
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      link: '/admin/skills',
      border: 'hover:border-indigo-500/40',
    },
    {
      title: 'Certificates',
      value: certificates.length,
      sub: 'Verified Academic Credentials',
      icon: <Award className="w-5 h-5 text-emerald-400" />,
      link: '/admin/certificates',
      border: 'hover:border-emerald-500/40',
    },
    {
      title: 'Inquiries & Messages',
      value: messages.length,
      sub: `${unreadMessages.length} Unread Actions`,
      icon: <Mail className="w-5 h-5 text-amber-400" />,
      link: '/admin/messages',
      badge: unreadMessages.length > 0 ? `${unreadMessages.length} New` : undefined,
      border: 'hover:border-amber-500/40',
    },
  ];

  return (
    <div className="space-y-8 font-sans">
      {/* 1. Dashboard Welcome Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Portfolio Administration Center
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Real-time management for Ansh.dev AI/ML portfolio & developer SaaS platform.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/admin/projects">
            <Button size="sm" variant="gradient" icon={<Plus className="w-4 h-4" />}>
              Create Project
            </Button>
          </Link>
          <Link to="/admin/settings">
            <Button size="sm" variant="secondary" icon={<Settings className="w-4 h-4" />}>
              Settings
            </Button>
          </Link>
        </div>
      </div>

      {/* 2. Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, idx) => (
          <Link key={idx} to={stat.link}>
            <GlassCard
              className={`p-5 border-slate-800 transition-all cursor-pointer group ${stat.border}`}
              glowColor="cyan"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-[#060a14] border border-slate-800">
                  {stat.icon}
                </div>
                {stat.badge && (
                  <span className="px-2 py-0.5 rounded-full bg-rose-500/90 text-white font-mono text-[10px] font-bold">
                    {stat.badge}
                  </span>
                )}
              </div>

              <div>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {stat.title}
                </p>
                <p className="text-2xl font-extrabold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </p>
                <p className="text-[11px] text-slate-500 mt-1 font-mono">{stat.sub}</p>
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>

      {/* 3. Operational Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Col: Recent Messages Inbox Preview */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              Recent Contact Messages
            </h3>
            <Link to="/admin/messages" className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-mono">
              View All ({messages.length}) <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <GlassCard className="p-4 border-slate-800 space-y-3">
            {messages.length === 0 ? (
              <p className="text-xs text-slate-500 text-center py-6">No messages received yet.</p>
            ) : (
              messages.slice(0, 4).map((msg) => (
                <div
                  key={msg.id}
                  className={`p-3.5 rounded-xl border transition-colors flex items-start justify-between gap-3 ${
                    msg.status === 'unread'
                      ? 'bg-cyan-950/30 border-cyan-500/30'
                      : 'bg-[#070b14] border-slate-800/80'
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-xs font-bold text-white truncate">{msg.name}</h4>
                      <span className="text-[10px] text-slate-400 font-mono">({msg.email})</span>
                      {msg.status === 'unread' && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
                      )}
                    </div>
                    <p className="text-xs text-cyan-300/90 font-medium truncate">{msg.subject}</p>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-0.5">{msg.message}</p>
                  </div>

                  <span className="text-[10px] font-mono text-slate-500 shrink-0">
                    {new Date(msg.createdAt).toLocaleDateString()}
                  </span>
                </div>
              ))
            )}
          </GlassCard>
        </div>

        {/* Right Col: System Telemetry & Quick CMS Health */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-400" />
            System Telemetry Health
          </h3>

          <GlassCard className="p-5 border-slate-800 space-y-4 font-mono text-xs">
            <div className="space-y-2">
              <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                <span className="text-slate-400">AI Node Status:</span>
                <span className="text-emerald-400 font-bold">ONLINE (99.98%)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                <span className="text-slate-400">Model Accuracy Metric:</span>
                <span className="text-indigo-300 font-bold">{settings.aiMetrics.modelPerformance}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                <span className="text-slate-400">Computer Vision Node:</span>
                <span className="text-cyan-300 font-bold">{settings.aiMetrics.computerVisionStatus}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                <span className="text-slate-400">Data Persistence:</span>
                <span className="text-slate-200">LocalStorage Active</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-400">Supabase Sync:</span>
                <span className="text-amber-400 font-semibold">Configurable in Settings</span>
              </div>
            </div>

            <div className="pt-2">
              <Link to="/admin/projects" className="w-full block">
                <Button size="sm" variant="secondary" className="w-full">
                  Manage Project Catalog
                </Button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};
