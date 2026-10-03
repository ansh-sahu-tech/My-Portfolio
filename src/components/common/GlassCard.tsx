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
    default: 'bg-[#121923] border border-[#263342] shadow-sm',
    solid: 'bg-[#121923] border border-[#263342] shadow-sm',
    subtle: 'bg-[#1A2430] border border-[#263342]',
    borderless: 'bg-[#121923] border-0',
  };

  return (
    <div
      className={twMerge(
        clsx(
          'rounded-xl transition-all duration-300 ease-out',
          variants[variant],
          interactive && 'hover:-translate-y-1 hover:shadow-lg hover:border-[#22D3EE] active:scale-[0.99] active:translate-y-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
