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
      primary: 'bg-[#22D3EE] hover:bg-[#06B6D4] text-[#0B0F14] font-semibold shadow-sm hover:shadow focus-visible:ring-[#22D3EE] focus-visible:ring-offset-[#0B0F14] border border-transparent',
      secondary: 'bg-[#1A2430] hover:bg-[#263342] text-[#F8FAFC] border border-[#263342] hover:border-[#22D3EE] shadow-sm hover:shadow focus-visible:ring-[#22D3EE] focus-visible:ring-offset-[#0B0F14]',
      outline: 'border border-[#263342] hover:border-[#22D3EE] text-[#94A3B8] hover:text-[#22D3EE] bg-transparent hover:bg-[#1A2430]/50 focus-visible:ring-[#22D3EE]',
      ghost: 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1A2430] focus-visible:ring-[#22D3EE]',
      danger: 'bg-red-600 hover:bg-red-700 text-white shadow-sm focus-visible:ring-red-500',
      // Fallback mappings to maintain backwards compatibility without neon styles
      gradient: 'bg-[#22D3EE] hover:bg-[#06B6D4] text-[#0B0F14] font-semibold shadow-sm hover:shadow focus-visible:ring-[#22D3EE] border border-transparent',
      cyber: 'bg-[#1A2430] hover:bg-[#263342] text-[#F8FAFC] border border-[#263342] hover:border-[#22D3EE] shadow-sm focus-visible:ring-[#22D3EE]',
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
