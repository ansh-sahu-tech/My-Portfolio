import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
    const baseStyles = 'group inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none disabled:transform-none select-none hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] active:brightness-95';

    const sizeStyles = {
      sm: 'text-xs px-3 py-1.5 min-h-[34px] gap-1.5 font-medium',
      md: 'text-sm px-4 py-2 min-h-[40px] gap-2 font-medium',
      lg: 'text-sm sm:text-base px-5 py-2.5 min-h-[44px] gap-2.5 font-semibold',
    };

    const variantStyles = {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow focus-visible:ring-blue-500 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-900 border border-transparent',
      secondary: 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400 shadow-sm hover:shadow focus-visible:ring-slate-400 focus-visible:ring-offset-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-100 dark:border-slate-700 dark:focus-visible:ring-offset-slate-900',
      outline: 'border border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 bg-transparent hover:bg-blue-50/50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-400 focus-visible:ring-blue-500',
      ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 focus-visible:ring-slate-400',
      danger: 'bg-red-600 hover:bg-red-700 text-white shadow-sm focus-visible:ring-red-500',
      // Fallback mappings to maintain backwards compatibility without neon styles
      gradient: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow focus-visible:ring-blue-500 border border-transparent',
      cyber: 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400 shadow-sm focus-visible:ring-slate-400 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700',
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
            <span>Loading...</span>
          </>
        ) : (
          <>
            {icon && iconPosition === 'left' && (
              <span className="shrink-0 transition-transform duration-200 ease-out group-hover:scale-105">
                {icon}
              </span>
            )}
            <span>{children}</span>
            {icon && iconPosition === 'right' && (
              <span className="shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1">
                {icon}
              </span>
            )}
          </>
        )}
      </button>
    );
  };
