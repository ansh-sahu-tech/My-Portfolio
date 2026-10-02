import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Shield } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { GithubIcon, LinkedinIcon, SocialTooltip } from '../common/SocialIcons';

export const Footer: React.FC = () => {
  const { settings } = useData();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
    { name: 'Resume', path: '/resume' },
  ];

  return (
    <footer className="bg-[#fcfaf7] border-t border-[#e2d5c3] py-8 text-stone-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity & Academic Context */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-stone-900 text-base">
                Ansh Sahu
              </span>
              <span className="text-stone-300">•</span>
              <span className="text-sm font-semibold text-[#8e4827]">
                Software Engineer &amp; Developer
              </span>
            </div>
            <p className="text-xs text-stone-500">
              ansh.developer • B.Tech CSE (AI &amp; ML) • Sanskriti University (2023–2027)
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-stone-600">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-[#a75a32] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Connect Icons & Admin */}
          <div className="flex items-center gap-3">
            <SocialTooltip label="GitHub Profile">
              <a
                href={settings.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-[#f4ece1] transition-colors"
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
                className="p-2 rounded-lg text-stone-600 hover:text-[#a75a32] hover:bg-[#f4ece1] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={17} />
              </a>
            </SocialTooltip>

            <SocialTooltip label="Direct Email">
              <a
                href={`mailto:${settings.email}`}
                className="p-2 rounded-lg text-stone-600 hover:text-[#a75a32] hover:bg-[#f4ece1] transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </SocialTooltip>

            <SocialTooltip label="CMS Admin">
              <Link
                to="/admin"
                className="p-2 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-[#f4ece1] transition-colors"
                aria-label="Admin CMS Console"
              >
                <Shield className="w-3.5 h-3.5" />
              </Link>
            </SocialTooltip>
          </div>
        </div>

        {/* Minimal Copyright with Signature */}
        <div className="mt-6 pt-4 border-t border-[#ebdcc8] flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} Ansh. All rights reserved.</p>
          <p className="mt-1 sm:mt-0 font-serif italic text-stone-700 text-sm">
            Creative Portfolio Deck • By Ansh Sahu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
