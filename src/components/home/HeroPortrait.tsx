import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const HeroPortrait: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth 3D perspective tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 160, damping: 22 });
  const mouseY = useSpring(y, { stiffness: 160, damping: 22 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseXPos = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseYPos = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseXPos);
    y.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center p-2 sm:p-4 select-none cursor-pointer group w-full"
      style={{ perspective: 1000 }}
    >
      {/* Soft natural ambient lighting aura behind subject */}
      <div 
        className="absolute w-[280px] h-[300px] sm:w-[360px] sm:h-[380px] lg:w-[420px] lg:h-[440px] rounded-full blur-3xl pointer-events-none -z-10 transition-all duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(212, 163, 115, 0.35) 0%, rgba(204, 213, 174, 0.25) 50%, transparent 75%)',
          transform: isHovered ? 'scale(1.08)' : 'scale(1)',
        }}
      />

      {/* Pure Open Subject (No cards, no frames, no circles) */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 160 }}
        className="relative z-10 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px] flex items-center justify-center"
      >
        <div 
          className="relative w-full aspect-square transition-transform duration-700 ease-out group-hover:scale-104 drop-shadow-[0_20px_35px_rgba(36,33,29,0.18)]"
          style={{
            maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
          }}
        >
          <img
            src="/ansh-cutout.png?v=1"
            alt="Ansh Sahu - Frontend Developer"
            className="w-full h-full object-contain object-bottom filter"
          />
        </div>
      </motion.div>
    </div>
  );
};
