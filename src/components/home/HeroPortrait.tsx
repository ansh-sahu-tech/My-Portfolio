import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Curated professional executive light tones (subtle, warm, luxurious)
const PROFESSIONAL_LIGHT_MODES = [
  {
    name: 'Champagne Gold',
    primary: 'rgba(212, 163, 115, 0.45)', // Warm Amber / Champagne
    secondary: 'rgba(250, 237, 205, 0.35)',
    highlight: 'rgba(255, 252, 242, 0.65)',
  },
  {
    name: 'Sage Mist',
    primary: 'rgba(204, 213, 174, 0.42)', // Natural Soft Sage
    secondary: 'rgba(233, 237, 201, 0.32)',
    highlight: 'rgba(244, 251, 247, 0.65)',
  },
  {
    name: 'Ice Blue',
    primary: 'rgba(186, 230, 253, 0.45)', // Clean Executive Ice Blue
    secondary: 'rgba(224, 242, 254, 0.32)',
    highlight: 'rgba(240, 249, 255, 0.65)',
  },
  {
    name: 'Pearl Warmth',
    primary: 'rgba(254, 240, 138, 0.38)', // Gentle Pearl Ivory
    secondary: 'rgba(254, 249, 195, 0.28)',
    highlight: 'rgba(255, 255, 255, 0.70)',
  },
  {
    name: 'Platinum Slate',
    primary: 'rgba(203, 213, 225, 0.42)', // Crisp Modern Platinum
    secondary: 'rgba(226, 232, 240, 0.30)',
    highlight: 'rgba(248, 250, 252, 0.65)',
  },
];

export const HeroPortrait: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
  const [activeModeIndex, setActiveModeIndex] = useState(0);

  // Smooth 3D perspective tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 180, damping: 24 });
  const mouseY = useSpring(y, { stiffness: 180, damping: 24 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const yPos = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));

    x.set(xPos - 0.5);
    y.set(yPos - 0.5);

    setCursorPos({
      x: Math.round(xPos * 100),
      y: Math.round(yPos * 100),
    });

    // Smoothly selects between curated professional light tones based on horizontal cursor glide
    const modeIdx = Math.min(
      Math.floor(xPos * PROFESSIONAL_LIGHT_MODES.length),
      PROFESSIONAL_LIGHT_MODES.length - 1
    );
    setActiveModeIndex(modeIdx);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
    setActiveModeIndex(0); // Reset smoothly to signature Champagne Gold
    setCursorPos({ x: 50, y: 50 });
  };

  const currentLight = PROFESSIONAL_LIGHT_MODES[activeModeIndex] ?? PROFESSIONAL_LIGHT_MODES[0];

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center px-2 sm:px-4 pt-0 pb-2 select-none cursor-pointer group w-full"
      style={{ perspective: 1200 }}
    >
      {/* Pure Frameless Subject with 3D Tilt - 100% Free of cards and background shapes */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 180 }}
        className="relative z-10 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px] flex items-center justify-center"
      >
        {/* Natural subtle drop shadow - Zero background glow spillover */}
        <div 
          className="relative w-full aspect-[1024/956] transition-transform duration-500 ease-out group-hover:scale-104 drop-shadow-[0_20px_35px_rgba(36,33,29,0.18)]"
        >
          {/* Bottom Fade Mask Container */}
          <div
            className="relative w-full h-full"
            style={{
              maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
            }}
          >
            {/* Cutout Image - Natural, crisp, professional enhancement on hover */}
            <img
              src="/ansh-cutout.png?v=2"
              alt="Ansh Sahu - Frontend Developer"
              className="w-full h-full object-contain object-bottom transition-all duration-300"
              style={{
                filter: isHovered
                  ? 'brightness(1.03) contrast(1.02) saturate(1.06)'
                  : 'none',
              }}
            />

            {/* Silhouette-Clipped Soft Studio Light - Follows cursor over suit & contours */}
            <div 
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                opacity: isHovered ? 0.45 : 0,
                background: `radial-gradient(circle 260px at ${cursorPos.x}% ${cursorPos.y}%, ${currentLight.primary} 0%, ${currentLight.secondary} 50%, transparent 80%)`,
                mixBlendMode: 'soft-light',
                maskImage: 'url(/ansh-cutout.png?v=2)',
                WebkitMaskImage: 'url(/ansh-cutout.png?v=2)',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'bottom center',
                WebkitMaskPosition: 'bottom center',
              }}
            />

            {/* Silhouette-Clipped Specular Sheen - Gives high-end editorial clarity & depth */}
            <div 
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                opacity: isHovered ? 0.22 : 0,
                background: `radial-gradient(circle 180px at ${cursorPos.x}% ${cursorPos.y}%, ${currentLight.highlight} 0%, transparent 75%)`,
                mixBlendMode: 'overlay',
                maskImage: 'url(/ansh-cutout.png?v=2)',
                WebkitMaskImage: 'url(/ansh-cutout.png?v=2)',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'bottom center',
                WebkitMaskPosition: 'bottom center',
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
