import React from 'react';

interface GoldenWireDecorProps {
  className?: string;
  color?: string;
}

export const GoldenWireDecor: React.FC<GoldenWireDecorProps> = ({
  className = '',
  color = '#d4ad7c'
}) => {
  return (
    <svg
      viewBox="0 0 280 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none opacity-60 ${className}`}
      aria-hidden="true"
    >
      <ellipse
        cx="90"
        cy="120"
        rx="80"
        ry="65"
        transform="rotate(-20 90 120)"
        stroke={color}
        strokeWidth="1.2"
        strokeDasharray="1 0"
      />
      <ellipse
        cx="140"
        cy="150"
        rx="110"
        ry="50"
        transform="rotate(-8 140 150)"
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.75"
      />
      <path
        d="M-20 180 C 40 160, 110 210, 190 170 S 260 110, 290 80"
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.8"
      />
      <path
        d="M10 130 C 60 90, 160 130, 220 190"
        stroke={color}
        strokeWidth="0.8"
        strokeOpacity="0.5"
      />
    </svg>
  );
};
