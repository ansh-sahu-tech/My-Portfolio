import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Home } from 'lucide-react';
import { Button } from '../components/common/Button';
import { GlassCard } from '../components/common/GlassCard';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = '404: Page Not Found | Ansh Sahu — Frontend Developer';
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'noindex, nofollow');
    }
    return () => {
      if (metaRobots) {
        metaRobots.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
      }
    };
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <GlassCard className="p-8 sm:p-12 max-w-lg w-full text-center space-y-6 border-[#CCD5AE] bg-[#FFFFFF]">
        <div className="w-16 h-16 rounded-2xl bg-[#E9EDC9] border border-[#CCD5AE] text-[#24211D] flex items-center justify-center mx-auto shadow-sm">
          <Terminal className="w-8 h-8 text-[#D4A373]" />
        </div>

        <div>
          <span className="text-xs font-mono text-[#D4A373] font-bold tracking-widest uppercase">
            Error 404 // Page Not Found
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#24211D] mt-2">
            Page Not Located
          </h1>
          <p className="text-xs sm:text-sm text-[#575249] mt-2 leading-relaxed">
            The page you requested does not exist or may have been relocated.
          </p>
        </div>

        <div className="flex flex-col xs:flex-row items-center justify-center gap-3 pt-2">
          <Link to="/" className="w-full xs:w-auto">
            <Button variant="primary" size="md" icon={<Home className="w-4 h-4" />} className="w-full justify-center">
              Return to Home
            </Button>
          </Link>
          <Link to="/projects" className="w-full xs:w-auto">
            <Button variant="secondary" size="md" className="w-full justify-center">
              View Projects
            </Button>
          </Link>
        </div>
      </GlassCard>
    </div>
  );
};
