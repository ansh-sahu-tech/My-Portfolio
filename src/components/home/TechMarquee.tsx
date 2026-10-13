import React from 'react';
import {
  RealisticReactIcon,
  RealisticNextjsIcon,
  RealisticJsIcon,
  RealisticTailwindIcon,
  RealisticPythonIcon,
  RealisticComputerVisionIcon,
  RealisticRestApisIcon,
  RealisticGitGithubIcon,
  RealisticHtmlCssIcon,
  RealisticAiBrainIcon,
  RealisticFullStackIcon,
  RealisticCloudDeployIcon,
} from '../skills/RealisticSkillIcons';

interface TechItem {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const techStack: TechItem[] = [
  { name: 'React 19', category: 'Frontend UI', icon: <RealisticReactIcon size={26} /> },
  { name: 'Next.js 15', category: 'Full-Stack SSR', icon: <RealisticNextjsIcon size={26} /> },
  { name: 'JavaScript ES6+', category: 'Core Language', icon: <RealisticJsIcon size={26} /> },
  { name: 'Tailwind CSS', category: 'Modern Styling', icon: <RealisticTailwindIcon size={26} /> },
  { name: 'Python 3', category: 'Data & AI', icon: <RealisticPythonIcon size={26} /> },
  { name: 'Computer Vision', category: 'OpenCV Telemetry', icon: <RealisticComputerVisionIcon size={26} /> },
  { name: 'REST APIs', category: 'Backend Integration', icon: <RealisticRestApisIcon size={26} /> },
  { name: 'Git & GitHub', category: 'Version Control', icon: <RealisticGitGithubIcon size={26} /> },
  { name: 'HTML5 & CSS3', category: 'Semantic DOM', icon: <RealisticHtmlCssIcon size={26} /> },
  { name: 'Machine Learning', category: 'Predictive Models', icon: <RealisticAiBrainIcon size={26} /> },
  { name: 'Full-Stack Apps', category: 'Architecture', icon: <RealisticFullStackIcon size={26} /> },
  { name: 'Vercel & Cloud', category: 'CI/CD Deployment', icon: <RealisticCloudDeployIcon size={26} /> },
];

export const TechMarquee: React.FC = () => {
  // Duplicate array so it scrolls seamlessly without breaking
  const doubleList = [...techStack, ...techStack];

  return (
    <div className="w-full py-8 sm:py-10 bg-[#FAEDCD]/60 border-y border-[#CCD5AE] relative overflow-hidden select-none">
      
      {/* Decorative gradient masks for smooth edge fade */}
      <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-[#FEFAE0] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-[#FEFAE0] to-transparent z-10 pointer-events-none" />

      {/* Header Label */}
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#575249] flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D4A373] animate-pulse" />
          <span>PRODUCTION-READY TECH ARSENAL</span>
          <span className="w-2 h-2 rounded-full bg-[#D4A373] animate-pulse" />
        </span>
      </div>

      {/* Moving Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4 sm:gap-6 py-2">
        {doubleList.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#FFFFFF] border-2 border-[#CCD5AE] shadow-sm hover:border-[#D4A373] hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group shrink-0 cursor-default"
          >
            <div className="w-9 h-9 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE]/60 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-bold text-[#24211D] group-hover:text-[#D4A373] transition-colors leading-tight">
                {item.name}
              </span>
              <span className="text-[10px] text-[#575249] font-medium leading-tight">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
