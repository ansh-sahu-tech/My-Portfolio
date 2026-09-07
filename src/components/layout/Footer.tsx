import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone,
  ShieldAlert, 
  ArrowUpRight 
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { Badge } from '../common/Badge';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';

export const Footer: React.FC = () => {
  const { settings } = useData();

  return (
    <footer className="relative z-10 bg-[#04070e] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-500 p-[1.5px]">
                <div className="w-full h-full bg-[#070b14] rounded-[6px] flex items-center justify-center font-mono font-bold text-cyan-400 text-xs">
                  A_
                </div>
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">
                Ansh<span className="text-cyan-400">.dev</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              AI/ML Engineer & Computer Science student at Sanskriti University specializing in Computer Vision pipelines, predictive machine learning models, and modern SaaS developer platforms.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <Badge variant="live" size="sm" pulse>
                AI Node Online • All Systems Nominal
              </Badge>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 font-medium">
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">
                  About Ansh
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-cyan-400 transition-colors">
                  Skills Matrix
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-cyan-400 transition-colors">
                  Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-cyan-400 transition-colors">
                  Experience & Education
                </Link>
              </li>
              <li>
                <Link to="/certificates" className="hover:text-cyan-400 transition-colors">
                  Certificates
                </Link>
              </li>
              <li>
                <Link to="/resume" className="hover:text-cyan-400 transition-colors">
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Connect & Admin */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 font-medium">
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Send Message</span>
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${settings.email}`}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{settings.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${settings.phone}`}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{settings.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={settings.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon size={14} className="text-slate-300" />
                  <span>GitHub (@Anshsahu275-max)</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={settings.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <LinkedinIcon size={14} className="text-blue-400" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li className="pt-2 border-t border-slate-800/80">
                <Link to="/admin" className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1.5 font-mono">
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-500/80" />
                  <span>Admin CMS Console</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Ansh. All rights reserved. • Sanskriti University (2023–2027)
          </p>
          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
            <span>Built with React, TS, Tailwind & Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
