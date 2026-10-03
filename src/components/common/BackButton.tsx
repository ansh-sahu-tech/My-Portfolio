import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export interface BackButtonProps {
  label?: string;
  fallbackPath?: string;
  className?: string;
  onClick?: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({
  label = 'Back',
  fallbackPath = '/',
  className = '',
  onClick
}) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick();
      return;
    }
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate(fallbackPath);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      className={`group/back inline-flex items-center gap-2 text-xs font-semibold text-[#94A3B8] hover:text-[#22D3EE] active:scale-95 focus-visible:ring-2 focus-visible:ring-[#22D3EE] rounded-lg px-3 py-1.5 bg-[#121923] border border-[#263342] hover:border-[#22D3EE] shadow-sm transition-all duration-200 cursor-pointer ${className}`}
    >
      <ArrowLeft className="w-4 h-4 group-hover/back:-translate-x-1 transition-transform duration-200 text-[#22D3EE]" />
      <span>{label}</span>
    </button>
  );
};
