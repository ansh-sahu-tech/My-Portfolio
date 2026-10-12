import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'emerald' | 'indigo' | 'amber' | 'rose' | 'slate' | 'outline' | 'live' | 'brand';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  pulse?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'brand',
  size = 'md',
  icon,
  pulse = false,
  className,
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full tracking-normal transition-colors';

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 gap-1 font-medium',
    md: 'text-xs px-2.5 py-1 gap-1.5 font-medium',
  };

  const variantStyles = {
    brand: 'bg-[#E9EDC9] text-[#24211D] border border-[#CCD5AE]',
    cyan: 'bg-[#E9EDC9] text-[#24211D] border border-[#CCD5AE]',
    emerald: 'bg-[#CCD5AE]/40 text-[#24211D] border border-[#CCD5AE]',
    indigo: 'bg-[#FAEDCD] text-[#24211D] border border-[#CCD5AE]',
    amber: 'bg-[#FAEDCD] text-[#24211D] border border-[#D4A373]/60',
    rose: 'bg-[#FAEDCD] text-[#24211D] border border-[#D4A373]/60',
    slate: 'bg-[#FFFFFF] text-[#575249] border border-[#CCD5AE]',
    outline: 'bg-transparent text-[#24211D] border border-[#CCD5AE]',
    live: 'bg-[#E9EDC9] text-[#24211D] border border-[#CCD5AE]',
  };

  return (
    <span className={twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className))}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4A373] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4A373]"></span>
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
