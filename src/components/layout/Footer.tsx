import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Shield } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { GithubIcon, LinkedinIcon, InstagramIcon, SocialTooltip } from '../common/SocialIcons';

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
    <footer className="bg-[#24211D] border-t border-[#CCD5AE]/20 py-10 text-[#FAEDCD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity & Academic Context */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-[#FEFAE0] text-lg tracking-tight">
                Ansh Sahu
              </span>
              <span className="text-[#CCD5AE]/40">•</span>
              <span className="text-sm font-semibold text-[#D4A373]">
                Frontend Developer
              </span>
            </div>
            <p className="text-xs text-[#E9EDC9]/80">
              ansh.developer • B.Tech CSE (AI &amp; ML) • Sanskriti University (2023–2027)
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs font-medium text-[#FAEDCD]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="py-1 px-1 hover:text-[#CCD5AE] transition-colors"
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
                className="p-2 rounded-lg text-[#FAEDCD] hover:text-[#CCD5AE] hover:bg-[#34302A] transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
            </SocialTooltip>

            <SocialTooltip label="LinkedIn Profile">
              <a
                href={settings.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[#FAEDCD] hover:text-[#CCD5AE] hover:bg-[#34302A] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
            </SocialTooltip>

            {settings.instagramUrl && (
              <SocialTooltip label="Instagram Profile">
                <a
                  href={settings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-[#FAEDCD] hover:text-[#CCD5AE] hover:bg-[#34302A] transition-colors"
                  aria-label="Instagram Profile"
                >
                  <InstagramIcon size={18} />
                </a>
              </SocialTooltip>
            )}

            <SocialTooltip label="Direct Email">
              <a
                href={`mailto:${settings.email}`}
                className="p-2 rounded-lg text-[#FAEDCD] hover:text-[#CCD5AE] hover:bg-[#34302A] transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </SocialTooltip>

            <SocialTooltip label="CMS Admin">
              <Link
                to="/admin"
                className="p-2 rounded-lg text-[#FAEDCD] hover:text-[#CCD5AE] hover:bg-[#34302A] transition-colors"
                aria-label="Admin CMS Console"
              >
                <Shield className="w-3.5 h-3.5" />
              </Link>
            </SocialTooltip>
          </div>
        </div>

        {/* Minimal Copyright */}
        <div className="mt-8 pt-5 border-t border-[#CCD5AE]/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E9EDC9]/70 text-center sm:text-left gap-2">
          <p>© {new Date().getFullYear()} Ansh Sahu. All rights reserved.</p>
          <p className="font-medium text-[#FAEDCD] text-xs">
            Designed &amp; Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
