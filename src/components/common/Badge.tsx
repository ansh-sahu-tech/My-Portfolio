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
    brand: 'bg-blue-50 text-blue-700 border border-blue-200/80 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/60',
    cyan: 'bg-blue-50 text-blue-700 border border-blue-200/80 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/60',
    emerald: 'bg-emerald-50 text-emerald-700 border border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60',
    indigo: 'bg-indigo-50 text-indigo-700 border border-indigo-200/80 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800/60',
    amber: 'bg-amber-50 text-amber-700 border border-amber-200/80 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60',
    rose: 'bg-rose-50 text-rose-700 border border-rose-200/80 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800/60',
    slate: 'bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
    outline: 'bg-white text-slate-700 border border-slate-300 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700',
    live: 'bg-emerald-50 text-emerald-700 border border-emerald-300/80 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800',
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
