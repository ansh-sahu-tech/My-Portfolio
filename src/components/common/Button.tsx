import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'gradient' | 'cyber';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  iconPosition = 'left',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#070b14] disabled:opacity-50 disabled:cursor-not-allowed select-none group';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5 font-medium',
    md: 'text-sm px-4 py-2.5 gap-2 font-medium',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary: 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 active:scale-[0.98] focus:ring-cyan-400',
    secondary: 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700/60 backdrop-blur-md hover:border-slate-600 active:scale-[0.98] focus:ring-slate-500',
    outline: 'border border-slate-700/80 hover:border-cyan-500/60 text-slate-300 hover:text-cyan-300 bg-transparent active:scale-[0.98] focus:ring-cyan-500',
    ghost: 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 focus:ring-slate-600',
    danger: 'bg-rose-600 hover:bg-rose-500 text-white font-semibold shadow-lg shadow-rose-600/25 active:scale-[0.98] focus:ring-rose-500',
    gradient: 'bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 hover:from-cyan-400 hover:via-indigo-400 hover:to-emerald-400 text-slate-950 font-bold shadow-lg shadow-indigo-500/25 active:scale-[0.98] focus:ring-indigo-400',
    cyber: 'bg-[#090f1d] hover:bg-[#0e172e] text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/60 shadow-lg shadow-cyan-950/50 hover:shadow-cyan-500/20 focus:ring-cyan-400 font-mono',
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className))}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Processing...</span>
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="shrink-0 transition-transform group-hover:scale-105">{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <span className="shrink-0 transition-transform group-hover:translate-x-0.5">{icon}</span>}
        </>
      )}
    </button>
  );
};
