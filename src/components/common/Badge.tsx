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
    brand: 'bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/30',
    cyan: 'bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/30',
    emerald: 'bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/30',
    indigo: 'bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/30',
    amber: 'bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/30',
    rose: 'bg-rose-500/10 text-rose-300 border border-rose-500/30',
    slate: 'bg-[#1A2430] text-[#94A3B8] border border-[#263342]',
    outline: 'bg-[#121923] text-[#F8FAFC] border border-[#263342]',
    live: 'bg-[#22D3EE]/15 text-[#22D3EE] border border-[#22D3EE]/40',
  };

  return (
    <span className={twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className))}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]"></span>
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
