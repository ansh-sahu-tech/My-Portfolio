import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Lock, Mail, Home, Sparkles } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { GlassCard } from '../../components/common/GlassCard';
import { Button } from '../../components/common/Button';

export const AdminLoginPage: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const { success, error } = useToast();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const ok = await login(email, password);
      if (ok) {
        success('Access Granted', 'Welcome to the Ansh.dev Admin CMS Console.');
        navigate('/admin/dashboard');
      } else {
        error('Authentication Failed', 'Invalid admin email or password.');
      }
    } catch {
      error('Authentication Error', 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFillDemo = () => {
    setEmail('admin@ansh.dev');
    setPassword('anshadmin2026');
  };

  return (
    <div className="min-h-screen bg-[#060912] flex items-center justify-center p-4 relative overflow-hidden font-sans">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md space-y-6 relative z-10">
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2 mb-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 p-[1.5px]">
              <div className="w-full h-full bg-[#070b14] rounded-[9px] flex items-center justify-center font-mono font-bold text-cyan-400 text-sm">
                A_
              </div>
            </div>
            <span className="font-extrabold text-white text-lg tracking-tight">
              Ansh<span className="text-cyan-400">.dev</span>
            </span>
          </Link>

          <h1 className="text-2xl font-bold text-white tracking-tight">
            Admin Authentication Console
          </h1>
          <p className="text-xs text-slate-400">
            Sign in to manage projects, skills, certificates, messages, and settings.
          </p>
        </div>

        <GlassCard className="p-8 border-slate-800 space-y-6 bg-[#0a0f1d]/90 shadow-2xl" glowColor="cyan">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-medium text-slate-300 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" /> Admin Email
              </label>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@ansh.dev"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#060a14] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono font-medium text-slate-300 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-indigo-400" /> Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#060a14] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 font-mono"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              variant="gradient"
              className="w-full mt-2"
              isLoading={isLoading}
              icon={<ShieldCheck className="w-4 h-4" />}
            >
              Authenticate & Enter CMS
            </Button>
          </form>

          <div className="pt-4 border-t border-slate-800/80 space-y-3">
            <button
              type="button"
              onClick={handleFillDemo}
              className="w-full py-2 px-3 rounded-xl bg-cyan-950/40 hover:bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" /> Auto-Fill Demo Credentials
            </button>
            <p className="text-[11px] text-center text-slate-500 font-mono">
              Default: admin@ansh.dev / anshadmin2026
            </p>
          </div>
        </GlassCard>

        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <Home className="w-3.5 h-3.5" /> Return to Live Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};
