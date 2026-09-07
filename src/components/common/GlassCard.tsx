import React, { useRef, useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowOnHover?: boolean;
  glowColor?: 'cyan' | 'indigo' | 'emerald' | 'purple';
  variant?: 'default' | 'solid' | 'subtle' | 'borderless';
  interactive?: boolean;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  glowOnHover = true,
  glowColor = 'cyan',
  variant = 'default',
  interactive = false,
  className,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!glowOnHover || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowColors = {
    cyan: 'rgba(6, 182, 212, 0.12)',
    indigo: 'rgba(99, 102, 241, 0.12)',
    emerald: 'rgba(16, 185, 129, 0.12)',
    purple: 'rgba(168, 85, 247, 0.12)',
  };

  const variants = {
    default: 'bg-[#0b101c]/80 border border-slate-800/80 backdrop-blur-xl',
    solid: 'bg-[#0d1424] border border-slate-800 backdrop-blur-none',
    subtle: 'bg-[#080d1a]/50 border border-slate-800/40 backdrop-blur-md',
    borderless: 'bg-[#0b101c]/60 border-0 backdrop-blur-lg',
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={twMerge(
        clsx(
          'relative rounded-2xl overflow-hidden transition-all duration-300',
          variants[variant],
          interactive && 'hover:-translate-y-1 hover:border-slate-700 cursor-pointer shadow-xl hover:shadow-cyan-950/20',
          className
        )
      )}
      {...props}
    >
      {glowOnHover && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColors[glowColor]}, transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
