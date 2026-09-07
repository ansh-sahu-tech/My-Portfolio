import React, { useState } from 'react';
import { NavLink, Link, Outlet, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FolderGit2, 
  Code2, 
  Briefcase, 
  Award, 
  Mail, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  ExternalLink
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import { Badge } from '../common/Badge';

export const AdminLayout: React.FC = () => {
  const { user, isAuthenticated, logout, isLoading } = useAuth();
  const { messages } = useData();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#060a14] flex items-center justify-center text-cyan-400 font-mono text-sm">
        Verifying Session...
      </div>
    );
  }

  if (!isAuthenticated) {
    navigate('/admin/login');
    return null;
  }

  const unreadCount = messages.filter((m) => m.status === 'unread').length;

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: 'Projects', path: '/admin/projects', icon: <FolderGit2 className="w-4 h-4" /> },
    { name: 'Skills', path: '/admin/skills', icon: <Code2 className="w-4 h-4" /> },
    { name: 'Experience', path: '/admin/experience', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Certificates', path: '/admin/certificates', icon: <Award className="w-4 h-4" /> },
    { 
      name: 'Messages', 
      path: '/admin/messages', 
      icon: <Mail className="w-4 h-4" />,
      badge: unreadCount > 0 ? unreadCount : undefined 
    },
    { name: 'Settings', path: '/admin/settings', icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#060912] text-slate-100 flex font-sans">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-[#080d1a] border-r border-slate-800 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-5 space-y-6">
          {/* Admin Brand Logo */}
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-500 p-[1.5px]">
                <div className="w-full h-full bg-[#070b14] rounded-[6px] flex items-center justify-center font-mono font-bold text-cyan-400 text-xs">
                  A_
                </div>
              </div>
              <div>
                <span className="font-extrabold text-white text-sm">
                  Ansh<span className="text-cyan-400">.dev</span>
                </span>
                <span className="block text-[10px] font-mono text-cyan-400 font-bold">ADMIN CMS</span>
              </div>
            </Link>

            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1.5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav List */}
          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-950/40 font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`
                }
              >
                <div className="flex items-center gap-2.5">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded-full bg-rose-500/80 text-white font-mono text-[10px] font-bold">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Sidebar Bottom Actions */}
        <div className="p-4 border-t border-slate-800 space-y-2">
          <Link
            to="/"
            className="w-full px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 text-xs font-mono transition-colors flex items-center justify-between border border-slate-800"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5" /> Live Site
            </span>
            <span className="text-[10px] text-slate-500">Preview</span>
          </Link>

          <button
            onClick={logout}
            className="w-full px-3 py-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-950/30 text-xs font-mono transition-colors flex items-center gap-2"
          >
            <LogOut className="w-3.5 h-3.5" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-h-screen">
        {/* Top Header Bar */}
        <header className="h-16 px-4 sm:px-8 bg-[#070c17]/90 border-b border-slate-800 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-slate-800 text-slate-300"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <Badge variant="live" size="sm" pulse>
                CMS Node Active
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-slate-400 hidden sm:inline">Signed in as:</span>
            <span className="text-cyan-300 font-bold bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-500/30">
              {user?.email || 'admin@ansh.dev'}
            </span>
          </div>
        </header>

        {/* Dynamic CMS Page Content */}
        <main className="flex-1 p-4 sm:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
