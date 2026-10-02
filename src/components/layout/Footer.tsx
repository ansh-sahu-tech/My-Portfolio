import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Shield } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { GithubIcon, LinkedinIcon, SocialTooltip } from '../common/SocialIcons';

export const Footer: React.FC = () => {
  const { settings } = useData();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Education', path: '/#education' },
    { name: 'Contact', path: '/#contact' },
    { name: 'Resume', path: '/#resume' },
  ];

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity & Academic Context */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-slate-900 dark:text-white text-base">
                Ansh
              </span>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                Frontend Developer
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              B.Tech CSE (AI & ML) • Sanskriti University (2023–2027)
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Connect Icons & Admin */}
          <div className="flex items-center gap-3">
            <SocialTooltip label="GitHub Profile">
              <a
                href={settings.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={17} />
              </a>
            </SocialTooltip>

            <SocialTooltip label="LinkedIn Profile">
              <a
                href={settings.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={17} />
              </a>
            </SocialTooltip>

            <SocialTooltip label="Direct Email">
              <a
                href={`mailto:${settings.email}`}
                className="p-2 rounded-lg text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </SocialTooltip>

            <SocialTooltip label="CMS Admin">
              <Link
                to="/admin"
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Admin CMS Console"
              >
                <Shield className="w-3.5 h-3.5" />
              </Link>
            </SocialTooltip>
          </div>
        </div>

        {/* Minimal Copyright */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Ansh. All rights reserved.</p>
          <p className="mt-1 sm:mt-0">Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};
