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
    default: 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm',
    solid: 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm',
    subtle: 'bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800',
    borderless: 'bg-white dark:bg-slate-900 border-0',
  };

  return (
    <div
      className={twMerge(
        clsx(
          'rounded-xl transition-all duration-300 ease-out',
          variants[variant],
          interactive && 'hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-slate-950/40 hover:border-slate-300 dark:hover:border-slate-700 active:scale-[0.99] active:translate-y-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
