import React from 'react';

interface SparkleStarProps {
  size?: number;
  className?: string;
  color?: string;
}

export const SparkleStar: React.FC<SparkleStarProps> = ({
  size = 20,
  className = '',
  color = '#22D3EE'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M12 0 C12 6.627 17.373 12 24 12 C17.373 12 12 17.373 12 24 C12 17.373 6.627 12 0 12 C6.627 12 12 6.627 12 0 Z" />
    </svg>
  );
};
