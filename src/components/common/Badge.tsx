import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'emerald' | 'indigo' | 'amber' | 'rose' | 'slate' | 'outline' | 'live';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  pulse?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'md',
  icon,
  pulse = false,
  className,
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full tracking-wide transition-colors';

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 gap-1.5 font-mono',
    md: 'text-xs px-3 py-1 gap-1.5 font-medium',
  };

  const variantStyles = {
    cyan: 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-950/50',
    emerald: 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 shadow-sm shadow-emerald-950/50',
    indigo: 'bg-indigo-950/60 text-indigo-300 border border-indigo-500/30 shadow-sm shadow-indigo-950/50',
    amber: 'bg-amber-950/60 text-amber-300 border border-amber-500/30 shadow-sm shadow-amber-950/50',
    rose: 'bg-rose-950/60 text-rose-300 border border-rose-500/30 shadow-sm shadow-rose-950/50',
    slate: 'bg-slate-800/70 text-slate-300 border border-slate-700/60',
    outline: 'bg-transparent text-slate-300 border border-slate-700/60',
    live: 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.25)]',
  };

  return (
    <span className={twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className))}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
