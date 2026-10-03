import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CommandPalette } from '../command/CommandPalette';

const routeMeta: Record<string, { title: string; desc: string }> = {
  '/': {
    title: 'Ansh Sahu | Software Engineer & Developer (ansh.developer)',
    desc: 'Official portfolio of Ansh Sahu (ansh.developer) — Software Engineer & Frontend Developer. Building high-performance web applications, AI/ML systems, and modern digital experiences with React, TypeScript, Next.js, and Python at Sanskriti University.'
  },
  '/about': {
    title: 'About Ansh Sahu | Software Engineer & Developer',
    desc: 'Learn more about Ansh Sahu (ansh.developer), Software Engineer studying B.Tech CSE (AI & ML) at Sanskriti University. Core engineering philosophy and technical capabilities.'
  },
  '/skills': {
    title: 'Skills & Tech Stack | Ansh Sahu — Software Engineer (ansh.developer)',
    desc: 'Technical capabilities and skills of Software Engineer Ansh Sahu: React, Next.js, TypeScript, Tailwind CSS, Python, OpenCV, and AI/ML.'
  },
  '/projects': {
    title: 'Projects & Engineering Work | Ansh Sahu (ansh.developer)',
    desc: 'Explore software engineering and web development projects built by Ansh Sahu, including AI Driver Awareness, Sacha Sauda, and ML systems.'
  },
  '/experience': {
    title: 'Experience & Milestones | Ansh Sahu — Software Engineer',
    desc: 'Professional journey, academic milestones, and software engineering development track record of Ansh Sahu.'
  },
  '/certificates': {
    title: 'Certificates & Credentials | Ansh Sahu — Software Engineer',
    desc: 'Verified technical certifications and credentials of Ansh Sahu in Software Engineering, Frontend Development, and AI/ML.'
  },
  '/education': {
    title: 'Education & Academics | Ansh Sahu — Sanskriti University',
    desc: 'Academic education of Ansh Sahu: B.Tech Computer Science & Engineering (AI & ML) at Sanskriti University (2023–2027).'
  },
  '/resume': {
    title: 'Resume & CV | Ansh Sahu — Software Engineer & Developer',
    desc: 'Official resume and curriculum vitae of Ansh Sahu (ansh.developer) — Software Engineer & Frontend Developer.'
  },
  '/contact': {
    title: 'Contact Ansh Sahu | Software Engineer & Developer (ansh.developer)',
    desc: 'Get in touch with Ansh Sahu for software engineering opportunities, internships, web projects, and technical collaborations.'
  },
};

export const PublicLayout: React.FC = () => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const location = useLocation();

  // Scroll to top immediately whenever route path changes & set route-specific SEO title/meta
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const currentMeta = routeMeta[location.pathname] || {
      title: 'Ansh Sahu | Software Engineer & Developer (ansh.developer)',
      desc: 'Official portfolio of Ansh Sahu (ansh.developer) — Software Engineer & Frontend Developer.'
    };

    document.title = currentMeta.title;

    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', currentMeta.desc);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F14] text-[#F8FAFC] selection:bg-[#22D3EE]/20 selection:text-[#22D3EE] font-sans">
      {/* Command Palette for quick access */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Sticky Navbar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      {/* Compact Footer */}
      <Footer />
    </div>
  );
};
