import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'gradient' | 'cyber';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
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
  href,
  target,
  rel,
  download,
  ...props
}) => {
  const baseStyles = 'group inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none disabled:transform-none select-none hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] active:brightness-95';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 min-h-[34px] gap-1.5 font-medium',
    md: 'text-sm px-4 py-2 min-h-[40px] gap-2 font-medium',
    lg: 'text-sm sm:text-base px-5 py-2.5 min-h-[44px] gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary: 'bg-[#24211D] hover:bg-[#D4A373] text-[#FFFFFF] font-semibold shadow-sm hover:shadow-md focus-visible:ring-[#D4A373] focus-visible:ring-offset-[#FEFAE0] border border-transparent',
    secondary: 'bg-[#E9EDC9] hover:bg-[#CCD5AE] text-[#24211D] border border-[#CCD5AE] hover:border-[#D4A373] shadow-sm hover:shadow focus-visible:ring-[#D4A373] focus-visible:ring-offset-[#FEFAE0]',
    outline: 'border border-[#CCD5AE] hover:border-[#D4A373] text-[#24211D] hover:text-[#24211D] bg-[#FFFFFF] hover:bg-[#E9EDC9]/50 shadow-sm focus-visible:ring-[#D4A373]',
    ghost: 'text-[#575249] hover:text-[#24211D] hover:bg-[#E9EDC9]/60 focus-visible:ring-[#D4A373]',
    danger: 'bg-red-700 hover:bg-red-800 text-white shadow-sm focus-visible:ring-red-500',
    gradient: 'bg-[#24211D] hover:bg-[#D4A373] text-[#FFFFFF] font-semibold shadow-sm hover:shadow focus-visible:ring-[#D4A373] border border-transparent',
    cyber: 'bg-[#FAEDCD] hover:bg-[#E9EDC9] text-[#24211D] border border-[#CCD5AE] hover:border-[#D4A373] shadow-sm focus-visible:ring-[#D4A373]',
  };

  const content = (
    <>
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
    </>
  );

  const mergedClasses = twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className));

  if (href) {
    const computedRel = target === '_blank' ? (rel || 'noopener noreferrer') : rel;
    const computedDownload = typeof download === 'string' ? download : download ? '' : undefined;

    return (
      <a
        href={href}
        target={target}
        rel={computedRel}
        download={computedDownload}
        className={mergedClasses}
        onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        aria-disabled={disabled || isLoading}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={mergedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
};
