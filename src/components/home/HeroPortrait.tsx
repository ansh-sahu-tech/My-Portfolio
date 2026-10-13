import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const HeroPortrait: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Subtle 3D perspective tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

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
      className="relative flex items-center justify-center p-2 sm:p-4 select-none cursor-pointer group"
      style={{ perspective: 1000 }}
    >
      {/* Soft warm ambient backlight (no artificial lines or shapes) */}
      <div 
        className="absolute w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px] rounded-full blur-3xl pointer-events-none -z-10 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(212, 163, 115, 0.28) 0%, rgba(204, 213, 174, 0.2) 60%, transparent 75%)',
          opacity: isHovered ? 0.85 : 0.5,
        }}
      />

      {/* Main 3D Framed Portrait */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 150 }}
        className="relative z-10"
      >
        {/* Outer natural frame ring */}
        <div className="relative w-[220px] h-[220px] xs:w-[260px] xs:h-[260px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] rounded-full p-2.5 sm:p-3 bg-gradient-to-b from-[#FFFFFF] to-[#E9EDC9] shadow-[0_16px_40px_-8px_rgba(36,33,29,0.14)] border border-[#CCD5AE] transition-all duration-500 group-hover:shadow-[0_22px_50px_-8px_rgba(36,33,29,0.2)] group-hover:border-[#D4A373]">
          
          {/* Inner image container */}
          <div className="w-full h-full rounded-full overflow-hidden bg-[#FEFAE0] relative shadow-inner">
            <img
              src="/ansh-profile.jpg?v=2"
              alt="Ansh Sahu - Frontend Developer"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle natural vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#24211D]/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </motion.div>
    </div>
  );
};
