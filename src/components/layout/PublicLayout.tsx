import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CommandPalette } from '../command/CommandPalette';

const BASE_CANONICAL = 'https://sahuansh-portfolio-2026.vercel.app';

const routeMeta: Record<string, { title: string; desc: string }> = {
  '/': {
    title: 'Ansh Sahu | Frontend Developer Portfolio',
    desc: 'Official portfolio of Ansh Sahu — Frontend Developer specializing in React, Next.js, and JavaScript. B.Tech CSE AI&ML at Sanskriti University (2023–2027), based in Gonda, Uttar Pradesh near Ayodhya.'
  },
  '/about': {
    title: 'About Ansh Sahu | Frontend Developer & React Developer',
    desc: 'Learn more about Ansh Sahu, Frontend Developer studying B.Tech CSE (AI & ML) at Sanskriti University. Discover core engineering philosophy, UI design, and technical skills.'
  },
  '/skills': {
    title: 'Skills & Tech Stack | Ansh Sahu — Frontend Developer',
    desc: 'Explore technical skills of Frontend Developer Ansh Sahu: React, Next.js, JavaScript, TypeScript, Tailwind CSS, Responsive Web Design, Python, and AI/ML foundations.'
  },
  '/projects': {
    title: 'Projects & Engineering Work | Ansh Sahu — Frontend Developer',
    desc: 'Explore frontend engineering and web development projects built by Ansh Sahu, including Sacha Sauda, AI Driver Awareness System, Student Performance Prediction, and responsive web apps.'
  },
  '/experience': {
    title: 'Experience & Milestones | Ansh Sahu — Frontend Developer',
    desc: 'Professional journey, engineering milestones, and development track record of Frontend Developer Ansh Sahu.'
  },
  '/certificates': {
    title: 'Certificates & Credentials | Ansh Sahu — Frontend Developer',
    desc: 'Verified technical certifications and credentials of Ansh Sahu in Frontend Development, React, and AI/ML foundations.'
  },
  '/education': {
    title: 'Education & Academics | Ansh Sahu — Sanskriti University',
    desc: 'Academic education of Ansh Sahu: B.Tech Computer Science & Engineering (AI & ML) at Sanskriti University (2023–2027).'
  },
  '/resume': {
    title: 'Resume & CV | Ansh Sahu — Frontend Developer Portfolio',
    desc: 'Official resume and curriculum vitae of Ansh Sahu — Frontend Developer specializing in React, Next.js, and JavaScript.'
  },
  '/contact': {
    title: 'Contact Ansh Sahu | Frontend Developer Portfolio',
    desc: 'Get in touch with Ansh Sahu (Frontend Developer, Gonda / near Ayodhya, Uttar Pradesh) for frontend development opportunities, internships, and web projects.'
  },
};

export const PublicLayout: React.FC = () => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const location = useLocation();

  // Scroll to top immediately whenever route path changes & set route-specific SEO title/meta
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const isProjectDetail = location.pathname.startsWith('/projects/') && location.pathname !== '/projects';
    const isKnownRoute = Boolean(routeMeta[location.pathname]) || isProjectDetail;

    const currentMeta = routeMeta[location.pathname] || {
      title: isProjectDetail 
        ? document.title 
        : '404: Page Not Found | Ansh Sahu',
      desc: isProjectDetail 
        ? 'Project overview and details by Frontend Developer Ansh Sahu.' 
        : 'The page you requested could not be found.'
    };

    if (!isProjectDetail) {
      document.title = currentMeta.title;
    }

    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', currentMeta.desc);
    }

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      const canonicalPath = location.pathname === '/' ? '/' : location.pathname;
      canonicalTag.setAttribute('href', `${BASE_CANONICAL}${canonicalPath}`);
    }

    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag && !isProjectDetail) {
      ogTitleTag.setAttribute('content', currentMeta.title);
    }

    const ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag) {
      ogDescTag.setAttribute('content', currentMeta.desc);
    }

    const ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (ogUrlTag) {
      const canonicalPath = location.pathname === '/' ? '/' : location.pathname;
      ogUrlTag.setAttribute('href', `${BASE_CANONICAL}${canonicalPath}`);
    }

    const metaRobotsTag = document.querySelector('meta[name="robots"]');
    if (metaRobotsTag) {
      if (!isKnownRoute) {
        metaRobotsTag.setAttribute('content', 'noindex, follow');
      } else {
        metaRobotsTag.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
      }
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
    <div className="min-h-screen flex flex-col bg-[#0B0F14] text-[#F8FAFC] selection:bg-[#22D3EE]/20 selection:text-[#22D3EE] font-sans overflow-x-hidden w-full max-w-full">
      {/* Command Palette for quick access */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Sticky Navbar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1 pt-20 overflow-x-hidden w-full max-w-full">
        <Outlet />
      </main>

      {/* Compact Footer */}
      <Footer />
    </div>
  );
};

export default PublicLayout;
