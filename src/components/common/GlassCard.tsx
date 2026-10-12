import React from 'react';
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
  variant = 'default',
  interactive = false,
  className,
  ...props
}) => {
  const variants = {
    default: 'bg-[#FFFFFF] border border-[#CCD5AE] shadow-sm',
    solid: 'bg-[#FFFFFF] border border-[#CCD5AE] shadow-sm',
    subtle: 'bg-[#E9EDC9] border border-[#CCD5AE]',
    borderless: 'bg-[#FFFFFF] border-0',
  };

  return (
    <div
      className={twMerge(
        clsx(
          'rounded-xl transition-all duration-300 ease-out',
          variants[variant],
          interactive && 'hover:-translate-y-1 hover:shadow-md hover:border-[#D4A373] active:scale-[0.99] active:translate-y-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A373]',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
