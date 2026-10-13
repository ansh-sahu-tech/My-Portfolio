import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  RealisticReactIcon, 
  RealisticPythonIcon, 
  RealisticTailwindIcon 
} from '../skills/RealisticSkillIcons';
import { Sparkles } from 'lucide-react';

export const HeroPortrait: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth 3D perspective tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for buttery smooth physics
  const mouseX = useSpring(x, { stiffness: 180, damping: 22 });
  const mouseY = useSpring(y, { stiffness: 180, damping: 22 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);
  const glowX = useTransform(mouseX, [-0.5, 0.5], ['20%', '80%']);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ['20%', '80%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = (e.clientX - rect.left) / width - 0.5;
    const mouseYPos = (e.clientY - rect.top) / height - 0.5;
    x.set(mouseXPos);
    y.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center p-4 sm:p-6 select-none cursor-pointer group"
      style={{ perspective: 1200 }}
    >
      {/* 1. Dynamic Ambient Light Orb behind portrait */}
      <motion.div 
        className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full blur-3xl pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(212, 163, 115, 0.38) 0%, rgba(204, 213, 174, 0.3) 50%, transparent 75%)',
          left: glowX,
          top: glowY,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* 2. Outer Technical Coordinate Ring (Subtle rotation) */}
      <div className="absolute w-[260px] h-[260px] xs:w-[310px] xs:h-[310px] sm:w-[390px] sm:h-[390px] md:w-[450px] md:h-[450px] lg:w-[490px] lg:h-[490px] rounded-full border border-dashed border-[#D4A373]/40 animate-spin-slow pointer-events-none" />
      
      {/* 3. Secondary Reverse Ring with developer ticks */}
      <div className="absolute w-[240px] h-[240px] xs:w-[290px] xs:h-[290px] sm:w-[360px] sm:h-[360px] md:w-[410px] md:h-[410px] lg:w-[450px] lg:h-[450px] rounded-full border border-[#CCD5AE]/60 pointer-events-none animate-spin-slow-reverse opacity-70">
        <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#FEFAE0] px-2 text-[9px] font-mono text-[#D4A373] tracking-widest font-bold">
          DEV // 2026
        </span>
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#FEFAE0] px-2 text-[9px] font-mono text-[#575249] tracking-widest font-semibold">
          AI &amp; WEB
        </span>
      </div>

      {/* 4. Main 3D Tilted Avatar Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 160 }}
        className="relative z-10"
      >
        {/* Glow halo ring */}
        <div className="relative w-[210px] h-[210px] xs:w-[250px] xs:h-[250px] sm:w-[310px] sm:h-[310px] md:w-[350px] md:h-[350px] lg:w-[390px] lg:h-[390px] rounded-full p-2.5 sm:p-3 bg-gradient-to-tr from-[#CCD5AE] via-[#FAEDCD] to-[#D4A373] shadow-[0_20px_50px_-10px_rgba(36,33,29,0.22)] transition-shadow duration-500 group-hover:shadow-[0_25px_60px_-10px_rgba(212,163,115,0.35)]">
          
          {/* Inner ring */}
          <div className="w-full h-full rounded-full overflow-hidden border-2 sm:border-3 border-[#FFFFFF] bg-[#E9EDC9] relative shadow-inner">
            <img
              src="/ansh-profile.jpg?v=2"
              alt="Ansh Sahu - Full-Stack & Frontend Developer"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
            />
            {/* Ambient glass tint overlay on tilt */}
            <div 
              className={`absolute inset-0 bg-gradient-to-tr from-[#24211D]/25 via-transparent to-white/20 transition-opacity duration-300 pointer-events-none ${
                isHovered ? 'opacity-80' : 'opacity-40'
              }`} 
            />
          </div>
        </div>

        {/* 5. FLOATING DEVELOPER BADGE 1: React 19 & Next.js (Top Right) */}
        <motion.div
          className="absolute -top-2 -right-3 sm:-top-3 sm:-right-5 lg:-right-8 z-30 orbit-float"
          whileHover={{ scale: 1.1, translateY: -4 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <div className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl bg-[#FFFFFF]/95 backdrop-blur-md border border-[#CCD5AE] shadow-[0_8px_24px_-4px_rgba(36,33,29,0.14)] hover:border-[#D4A373] hover:shadow-[0_12px_28px_-4px_rgba(212,163,115,0.35)] transition-all">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FEFAE0] flex items-center justify-center p-1 border border-[#CCD5AE]/60 shadow-sm">
              <RealisticReactIcon size={22} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] sm:text-[11px] font-bold text-[#24211D] leading-tight">
                React 19 &amp; Next.js
              </span>
              <span className="text-[9px] font-medium text-[#D4A373] leading-tight">
                Modern Fullstack
              </span>
            </div>
          </div>
        </motion.div>

        {/* 6. FLOATING DEVELOPER BADGE 2: Python & AI / ML (Bottom Left) */}
        <motion.div
          className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-6 lg:-left-9 z-30 orbit-float-delayed"
          whileHover={{ scale: 1.1, translateY: -4 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <div className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl bg-[#FFFFFF]/95 backdrop-blur-md border border-[#CCD5AE] shadow-[0_8px_24px_-4px_rgba(36,33,29,0.14)] hover:border-[#D4A373] hover:shadow-[0_12px_28px_-4px_rgba(212,163,115,0.35)] transition-all">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#FEFAE0] flex items-center justify-center p-1 border border-[#CCD5AE]/60 shadow-sm">
              <RealisticPythonIcon size={22} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] sm:text-[11px] font-bold text-[#24211D] leading-tight flex items-center gap-1">
                Python &amp; AI/ML
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </span>
              <span className="text-[9px] font-medium text-[#575249] leading-tight">
                Vision &amp; Models
              </span>
            </div>
          </div>
        </motion.div>

        {/* 7. FLOATING DEVELOPER BADGE 3: Tailwind & Clean UI (Top Left) */}
        <motion.div
          className="absolute top-10 -left-6 sm:top-14 sm:-left-8 lg:-left-12 z-20 orbit-float-reverse hidden xs:flex"
          whileHover={{ scale: 1.1, translateY: -4 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <div className="flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-[#FFFFFF]/90 backdrop-blur-md border border-[#CCD5AE] shadow-[0_6px_20px_-4px_rgba(36,33,29,0.12)] hover:border-[#D4A373] transition-all">
            <div className="w-6 h-6 rounded-md bg-[#FEFAE0] flex items-center justify-center p-0.5 border border-[#CCD5AE]/60">
              <RealisticTailwindIcon size={18} />
            </div>
            <span className="text-[10px] font-bold text-[#24211D]">
              Tailwind &amp; UI/UX
            </span>
          </div>
        </motion.div>

        {/* 8. FLOATING STATUS BADGE (Bottom Center): Open to Opportunities */}
        <motion.div
          className="absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 z-30"
          whileHover={{ scale: 1.06, translateY: -2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#24211D] text-[#FFFFFF] shadow-[0_8px_20px_-4px_rgba(36,33,29,0.35)] border border-[#CCD5AE]/50">
            {/* Pulsing Green Radar Beacon */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-radar absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-tight text-[#FEFAE0]">
              Available for Hire &amp; Roles
            </span>
            <Sparkles className="w-3 h-3 text-[#D4A373]" />
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};
