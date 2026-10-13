import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Curated vibrant color spectrum for fluid chromatic shifting
const COLOR_PRESETS = [
  { name: 'Amber Gold', hex: '#F59E0B', hue: 38, secondary: '#EF4444' },
  { name: 'Cyber Cyan', hex: '#06B6D4', hue: 188, secondary: '#3B82F6' },
  { name: 'Neon Violet', hex: '#8B5CF6', hue: 262, secondary: '#EC4899' },
  { name: 'Emerald Sage', hex: '#10B981', hue: 158, secondary: '#14B8A6' },
  { name: 'Sunset Rose', hex: '#F43F5E', hue: 345, secondary: '#F59E0B' },
];

export const HeroPortrait: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeHue, setActiveHue] = useState<number>(38); // Starts with signature amber gold
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 }); // percentages
  const [cycleTime, setCycleTime] = useState(0);

  // Smooth 3D perspective tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 180, damping: 24 });
  const mouseY = useSpring(y, { stiffness: 180, damping: 24 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

  // Gentle autonomous color cycling while hovered
  useEffect(() => {
    if (!isHovered) return;
    const interval = setInterval(() => {
      setCycleTime((prev) => (prev + 1) % 360);
    }, 40);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width; // 0 to 1
    const yPos = (e.clientY - rect.top) / rect.height; // 0 to 1

    x.set(xPos - 0.5);
    y.set(yPos - 0.5);

    setCursorPos({
      x: Math.round(xPos * 100),
      y: Math.round(yPos * 100),
    });

    // Dynamic color shift mapped to cursor horizontal and vertical movement
    // Smoothly traverses across the 360-degree color spectrum
    const computedHue = Math.round((xPos * 300 + yPos * 60 + cycleTime * 0.5) % 360);
    setActiveHue(computedHue);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
    setActiveHue(38); // Reset smoothly to default warm amber
    setCursorPos({ x: 50, y: 50 });
  };

  // Complementary secondary hue for rich two-tone gradient lighting
  const secondaryHue = (activeHue + 55) % 360;
  const tertiaryHue = (activeHue + 140) % 360;

  // Primary dynamic colors
  const primaryColor = `hsl(${activeHue}, 88%, 56%)`;
  const primaryGlow = `hsla(${activeHue}, 88%, 56%, 0.45)`;
  const secondaryGlow = `hsla(${secondaryHue}, 85%, 60%, 0.35)`;
  const tertiaryGlow = `hsla(${tertiaryHue}, 80%, 55%, 0.25)`;

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center justify-center p-2 sm:p-4 select-none cursor-pointer group w-full"
      style={{ perspective: 1200 }}
    >
      {/* Dynamic Multi-Color Ambient Backlight Aura */}
      <div 
        className="absolute w-[290px] h-[310px] sm:w-[380px] sm:h-[400px] lg:w-[460px] lg:h-[480px] rounded-full blur-[70px] pointer-events-none -z-10 transition-all duration-300"
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${cursorPos.x}% ${cursorPos.y}%, ${primaryGlow} 0%, ${secondaryGlow} 45%, ${tertiaryGlow} 70%, transparent 85%)`
            : 'radial-gradient(circle, rgba(212, 163, 115, 0.38) 0%, rgba(204, 213, 174, 0.25) 50%, transparent 75%)',
          transform: isHovered ? 'scale(1.15)' : 'scale(1)',
          filter: isHovered ? 'saturate(1.4) brightness(1.1)' : 'none',
        }}
      />

      {/* Secondary Dynamic Color Light Orb that follows cursor motion */}
      {isHovered && (
        <div 
          className="absolute w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] rounded-full blur-[50px] pointer-events-none -z-10 transition-all duration-150 ease-out"
          style={{
            left: `calc(${cursorPos.x}% - 90px)`,
            top: `calc(${cursorPos.y}% - 90px)`,
            background: `radial-gradient(circle, ${primaryGlow} 0%, transparent 70%)`,
            mixBlendMode: 'screen',
          }}
        />
      )}

      {/* Pure Frameless Subject with 3D Tilt and Dynamic Color Reaction */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 180 }}
        className="relative z-10 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px] flex items-center justify-center"
      >
        {/* Cutout Container with Silhouette Colored Rim-Glow */}
        <div 
          className="relative w-full aspect-square transition-all duration-300 ease-out group-hover:scale-104"
          style={{
            filter: isHovered
              ? `drop-shadow(0 20px 40px ${primaryGlow}) drop-shadow(0 0 25px ${secondaryGlow}) drop-shadow(0 4px 12px rgba(0,0,0,0.15))`
              : 'drop-shadow(0 20px 35px rgba(36,33,29,0.18))',
          }}
        >
          {/* Bottom Fade Mask Container */}
          <div
            className="relative w-full h-full"
            style={{
              maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
            }}
          >
            {/* Cutout Image */}
            <img
              src="/ansh-cutout.png?v=1"
              alt="Ansh Sahu - Frontend Developer"
              className="w-full h-full object-contain object-bottom transition-all duration-300"
              style={{
                filter: isHovered
                  ? `brightness(1.04) contrast(1.03) saturate(1.18) hue-rotate(${(activeHue - 38) * 0.12}deg)`
                  : 'none',
              }}
            />

            {/* Silhouette-Clipped Interactive Studio Light / Color Sheen */}
            <div 
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                opacity: isHovered ? 0.32 : 0,
                background: `radial-gradient(circle at ${cursorPos.x}% ${cursorPos.y}%, ${primaryColor} 0%, hsla(${secondaryHue}, 90%, 60%, 0.6) 45%, transparent 75%)`,
                mixBlendMode: 'soft-light',
                maskImage: 'url(/ansh-cutout.png?v=1)',
                WebkitMaskImage: 'url(/ansh-cutout.png?v=1)',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'bottom center',
                WebkitMaskPosition: 'bottom center',
              }}
            />

            {/* Subtle Iridescent Color Grade for Cinematic Depth */}
            <div 
              className="absolute inset-0 pointer-events-none transition-opacity duration-400"
              style={{
                opacity: isHovered ? 0.18 : 0,
                background: `linear-gradient(${cursorPos.x * 2}deg, hsla(${activeHue}, 90%, 65%, 0.8) 0%, hsla(${secondaryHue}, 85%, 60%, 0.4) 50%, hsla(${tertiaryHue}, 80%, 55%, 0.6) 100%)`,
                mixBlendMode: 'color',
                maskImage: 'url(/ansh-cutout.png?v=1)',
                WebkitMaskImage: 'url(/ansh-cutout.png?v=1)',
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

      {/* Floating Interactive Chroma Indicator Pill (Subtle & Elegant) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          y: isHovered ? 0 : 10,
          scale: isHovered ? 1 : 0.95
        }}
        transition={{ duration: 0.25 }}
        className="z-20 mt-3 sm:mt-4 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/85 dark:bg-[#1A1816]/85 backdrop-blur-md border border-[#E9EDC9]/80 shadow-md"
      >
        <div className="flex items-center gap-1.5">
          {COLOR_PRESETS.map((preset) => {
            const isNear = Math.abs(activeHue - preset.hue) < 30 || Math.abs(activeHue - preset.hue) > 330;
            return (
              <button
                key={preset.name}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHue(preset.hue);
                }}
                title={preset.name}
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-transform duration-200 cursor-pointer"
                style={{
                  backgroundColor: preset.hex,
                  transform: isNear ? 'scale(1.35)' : 'scale(1)',
                  boxShadow: isNear ? `0 0 8px ${preset.hex}` : 'none',
                }}
              />
            );
          })}
        </div>
        <div className="h-3 w-px bg-[#E9EDC9]" />
        <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-[#575249]">
          <span style={{ color: primaryColor }} className="font-bold">Color Shift</span> Active
        </span>
      </motion.div>
    </div>
  );
};
