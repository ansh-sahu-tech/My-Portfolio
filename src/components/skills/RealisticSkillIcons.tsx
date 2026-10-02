import React from 'react';

export interface SkillIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

// ----------------------------------------------------
// 1. HTML5 REALISTIC 3D ICON
// ----------------------------------------------------
export const RealisticHtmlIcon: React.FC<SkillIconProps> = ({ size = 32, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${className}`} {...props}>
    <defs>
      <linearGradient id="html-shield-l" x1="6" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF6B4A" />
        <stop offset="60%" stopColor="#E44D26" />
        <stop offset="100%" stopColor="#C33612" />
      </linearGradient>
      <linearGradient id="html-shield-r" x1="24" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF7D5E" />
        <stop offset="40%" stopColor="#F16529" />
        <stop offset="100%" stopColor="#D84717" />
      </linearGradient>
      <linearGradient id="html-num-l" x1="12" y1="12" x2="24" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E6E6E6" />
      </linearGradient>
      <linearGradient id="html-num-r" x1="24" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F5F5F5" />
        <stop offset="100%" stopColor="#D4D4D4" />
      </linearGradient>
      <filter id="html-shadow" x="2" y="2" width="44" height="44" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#992305" floodOpacity="0.45" />
      </filter>
    </defs>
    <g filter="url(#html-shadow)">
      {/* Left Shield Half */}
      <path d="M8 4L11.5 39.5L24 43V4H8Z" fill="url(#html-shield-l)" />
      {/* Right Shield Half */}
      <path d="M24 4V43L36.5 39.5L40 4H24Z" fill="url(#html-shield-r)" />
    </g>
    {/* Inner 3D Highlight Bevel */}
    <path d="M10 6L13 37.5L24 40.5V6H10Z" fill="white" fillOpacity="0.08" />
    {/* Stylized '5' Left Side */}
    <path d="M24 13H15L15.6 19.5H24V13ZM15.8 22H24V28.5H16.4L16.8 33.5L24 35.5V40L13.8 37.2L13 22H15.8Z" fill="url(#html-num-l)" />
    {/* Stylized '5' Right Side */}
    <path d="M24 13V19.5H32.4L31.8 26H24V31.5H31.2L30.6 37.2L24 39V40.2L33.7 37.5L34.8 25L35.2 20.5L35.8 13H24Z" fill="url(#html-num-r)" />
  </svg>
);

// ----------------------------------------------------
// 2. CSS3 REALISTIC 3D ICON
// ----------------------------------------------------
export const RealisticCssIcon: React.FC<SkillIconProps> = ({ size = 32, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${className}`} {...props}>
    <defs>
      <linearGradient id="css-shield-l" x1="6" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#2965F1" />
        <stop offset="60%" stopColor="#264DE4" />
        <stop offset="100%" stopColor="#1C3AA9" />
      </linearGradient>
      <linearGradient id="css-shield-r" x1="24" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="40%" stopColor="#33A9DC" />
        <stop offset="100%" stopColor="#2082C5" />
      </linearGradient>
      <linearGradient id="css-num-l" x1="12" y1="12" x2="24" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>
      <linearGradient id="css-num-r" x1="24" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F1F5F9" />
        <stop offset="100%" stopColor="#CBD5E1" />
      </linearGradient>
      <filter id="css-shadow" x="2" y="2" width="44" height="44" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#1E3A8A" floodOpacity="0.45" />
      </filter>
    </defs>
    <g filter="url(#css-shadow)">
      <path d="M8 4L11.5 39.5L24 43V4H8Z" fill="url(#css-shield-l)" />
      <path d="M24 4V43L36.5 39.5L40 4H24Z" fill="url(#css-shield-r)" />
    </g>
    <path d="M10 6L13 37.5L24 40.5V6H10Z" fill="white" fillOpacity="0.1" />
    {/* Stylized '3' Left */}
    <path d="M24 13H15.5L16.1 19.5H24V13ZM24 25.5H19.5L19.8 28.5H24V25.5ZM16.4 33.5L24 35.5V40L13.8 37.2L13.2 30H17.2L17.5 33.2L24 35.1V33.5L16.4 33.5Z" fill="url(#css-num-l)" />
    {/* Stylized '3' Right */}
    <path d="M24 13V19.5H32.4L31.8 25.5H24V31.5H31.2L30.6 37.2L24 39V40.2L33.7 37.5L35.2 22.5L35.8 13H24Z" fill="url(#css-num-r)" />
  </svg>
);

// ----------------------------------------------------
// 3. JAVASCRIPT REALISTIC 3D GOLD TILE
// ----------------------------------------------------
export const RealisticJsIcon: React.FC<SkillIconProps> = ({ size = 32, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${className}`} {...props}>
    <defs>
      <linearGradient id="js-bg" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFF176" />
        <stop offset="40%" stopColor="#F7DF1E" />
        <stop offset="100%" stopColor="#E5A800" />
      </linearGradient>
      <linearGradient id="js-bevel" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#B27D00" stopOpacity="0.4" />
      </linearGradient>
      <filter id="js-shadow" x="2" y="2" width="44" height="44" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#784B00" floodOpacity="0.35" />
      </filter>
    </defs>
    <g filter="url(#js-shadow)">
      <rect x="4" y="4" width="40" height="40" rx="10" fill="url(#js-bg)" stroke="url(#js-bevel)" strokeWidth="1.5" />
    </g>
    {/* Subtle gloss arc */}
    <path d="M6 14C6 8.5 10 5 16 5H32C38 5 42 8.5 42 14C32 17 18 17 6 14Z" fill="white" fillOpacity="0.25" />
    {/* 'J' letter */}
    <path
      d="M17 21V33.5C17 37 14.5 38.5 11 37.8L10 33.8C12 34.2 13.2 33.8 13.2 32V21H17Z"
      fill="#18181B"
    />
    {/* 'S' letter */}
    <path
      d="M23 33.8L26.5 33.2C27 35 28.5 35.8 30.8 35.8C33 35.8 34.5 34.8 34.5 33.2C34.5 31.6 33.2 30.8 30.5 29.8C26.5 28.3 23.5 26.8 23.5 23C23.5 19.5 26.5 17.5 30.8 17.5C35 17.5 37.5 19.8 38 22.8L34.5 23.5C34.2 21.8 33 21 31 21C29 21 27.5 21.8 27.5 23C27.5 24.2 28.5 25 31.5 26C35.8 27.5 38.5 29.2 38.5 33C38.5 37 35.2 39 30.5 39C26 39 23.5 36.8 23 33.8Z"
      fill="#18181B"
    />
  </svg>
);

// ----------------------------------------------------
// 4. REACT REALISTIC 3D ATOM ICON
// ----------------------------------------------------
export const RealisticReactIcon: React.FC<SkillIconProps> = ({ size = 32, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${className}`} {...props}>
    <defs>
      <radialGradient id="react-core" cx="24" cy="24" r="5" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="40%" stopColor="#61DAFB" />
        <stop offset="100%" stopColor="#00A2C7" />
      </radialGradient>
      <linearGradient id="react-ring1" x1="6" y1="24" x2="42" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00D8FF" />
        <stop offset="50%" stopColor="#61DAFB" />
        <stop offset="100%" stopColor="#0099CC" />
      </linearGradient>
      <filter id="react-glow" x="2" y="2" width="44" height="44" filterUnits="userSpaceOnUse">
        <feGaussianBlur stdDeviation="1" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    {/* Background soft ambient halo */}
    <circle cx="24" cy="24" r="16" fill="#00D8FF" fillOpacity="0.08" />
    <g filter="url(#react-glow)">
      {/* Orbit 1: Horizontal */}
      <ellipse cx="24" cy="24" rx="19" ry="7.5" stroke="url(#react-ring1)" strokeWidth="2.2" />
      {/* Orbit 2: Rotated 60 deg */}
      <g transform="rotate(60 24 24)">
        <ellipse cx="24" cy="24" rx="19" ry="7.5" stroke="url(#react-ring1)" strokeWidth="2.2" />
      </g>
      {/* Orbit 3: Rotated 120 deg */}
      <g transform="rotate(120 24 24)">
        <ellipse cx="24" cy="24" rx="19" ry="7.5" stroke="url(#react-ring1)" strokeWidth="2.2" />
      </g>
      {/* Central 3D Spherical Nucleus */}
      <circle cx="24" cy="24" r="4.2" fill="url(#react-core)" />
      <circle cx="22.5" cy="22.5" r="1.2" fill="white" fillOpacity="0.9" />
    </g>
  </svg>
);

// ----------------------------------------------------
// 5. NEXT.JS REALISTIC 3D OBSIDIAN BADGE
// ----------------------------------------------------
export const RealisticNextjsIcon: React.FC<SkillIconProps> = ({ size = 32, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${className}`} {...props}>
    <defs>
      <linearGradient id="next-bg" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#27272A" />
        <stop offset="50%" stopColor="#18181B" />
        <stop offset="100%" stopColor="#09090B" />
      </linearGradient>
      <linearGradient id="next-slash" x1="26" y1="21" x2="35" y2="35" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </linearGradient>
      <filter id="next-shadow" x="2" y="2" width="44" height="44" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#000000" floodOpacity="0.4" />
      </filter>
    </defs>
    <g filter="url(#next-shadow)">
      <circle cx="24" cy="24" r="19" fill="url(#next-bg)" stroke="#3F3F46" strokeWidth="1.5" />
    </g>
    {/* Inner chrome rim */}
    <circle cx="24" cy="24" r="17.5" stroke="white" strokeOpacity="0.12" strokeWidth="1" />
    {/* 'N' Left Pillar */}
    <path d="M17 16H20V32H17V16Z" fill="white" />
    {/* 'N' Right Pillar */}
    <path d="M28 16H31V26.5L28 23V16Z" fill="white" />
    {/* 'N' Diagonal Slash */}
    <path d="M19 16L32.5 33H30L17.5 17H19V16Z" fill="url(#next-slash)" />
  </svg>
);

// ----------------------------------------------------
// 6. TAILWIND CSS REALISTIC 3D AERO WAVE
// ----------------------------------------------------
export const RealisticTailwindIcon: React.FC<SkillIconProps> = ({ size = 32, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${className}`} {...props}>
    <defs>
      <linearGradient id="tw-wave-1" x1="8" y1="16" x2="26" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="tw-wave-2" x1="20" y1="20" x2="40" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#0E7490" />
      </linearGradient>
      <filter id="tw-shadow" x="4" y="10" width="40" height="28" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#0369A1" floodOpacity="0.4" />
      </filter>
    </defs>
    <g filter="url(#tw-shadow)">
      {/* Wave 1 */}
      <path
        d="M14.5 19C11.5 19 9.5 21 8.5 24C10.5 22.5 12.5 22 14.5 22C17.5 22 19.5 24 20.5 27C18.5 28.5 16.5 29 14.5 29C11.5 29 9.5 27 8.5 24C9.5 19 13.5 16 19.5 16C24 16 26.5 18.5 28 21.5C26 20 23.5 19 20.5 19C18.5 19 16.5 20.5 14.5 19Z"
        fill="url(#tw-wave-1)"
      />
      {/* Wave 2 */}
      <path
        d="M26.5 25C23.5 25 21.5 27 20.5 30C22.5 28.5 24.5 28 26.5 28C29.5 28 31.5 30 32.5 33C30.5 34.5 28.5 35 26.5 35C23.5 35 21.5 33 20.5 30C21.5 25 25.5 22 31.5 22C36 22 38.5 24.5 40 27.5C38 26 35.5 25 32.5 25C30.5 25 28.5 26.5 26.5 25Z"
        fill="url(#tw-wave-2)"
      />
    </g>
    {/* Highlights */}
    <circle cx="16" cy="19.5" r="1.5" fill="white" fillOpacity="0.6" />
    <circle cx="28" cy="25.5" r="1.5" fill="white" fillOpacity="0.6" />
  </svg>
);

// ----------------------------------------------------
// 7. GIT REALISTIC 3D CORAL DIAMOND
// ----------------------------------------------------
export const RealisticGitIcon: React.FC<SkillIconProps> = ({ size = 32, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${className}`} {...props}>
    <defs>
      <linearGradient id="git-cube" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF6E52" />
        <stop offset="50%" stopColor="#F05032" />
        <stop offset="100%" stopColor="#C93216" />
      </linearGradient>
      <filter id="git-shadow" x="2" y="2" width="44" height="44" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#8B1E0A" floodOpacity="0.45" />
      </filter>
    </defs>
    <g filter="url(#git-shadow)">
      {/* Rotated Rhombic Cube */}
      <rect x="24" y="4" width="28" height="28" rx="6" transform="rotate(45 24 4)" fill="url(#git-cube)" stroke="#FF8A73" strokeWidth="1" />
    </g>
    {/* 3D Top Bevel Light */}
    <path d="M24 6.5L41.5 24L38.5 24L24 9.5L9.5 24L6.5 24L24 6.5Z" fill="white" fillOpacity="0.3" />
    {/* Branch Tracks */}
    <path d="M19 29L29 19" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M19 19V33" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
    {/* Branch Node 1 */}
    <circle cx="19" cy="19" r="3.4" fill="white" />
    <circle cx="19" cy="19" r="1.8" fill="#F05032" />
    {/* Branch Node 2 */}
    <circle cx="19" cy="33" r="3.4" fill="white" />
    <circle cx="19" cy="33" r="1.8" fill="#F05032" />
    {/* Branch Node 3 */}
    <circle cx="29" cy="19" r="3.4" fill="white" />
    <circle cx="29" cy="19" r="1.8" fill="#F05032" />
  </svg>
);

// ----------------------------------------------------
// 8. GITHUB REALISTIC METALLIC EMBOSSED SHIELD
// ----------------------------------------------------
export const RealisticGithubIcon: React.FC<SkillIconProps> = ({ size = 32, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${className}`} {...props}>
    <defs>
      <linearGradient id="gh-metal" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3F3F46" />
        <stop offset="50%" stopColor="#18181B" />
        <stop offset="100%" stopColor="#09090B" />
      </linearGradient>
      <filter id="gh-shadow" x="2" y="2" width="44" height="44" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#000000" floodOpacity="0.5" />
      </filter>
    </defs>
    <g filter="url(#gh-shadow)">
      <circle cx="24" cy="24" r="19" fill="url(#gh-metal)" stroke="#71717A" strokeWidth="1.2" />
    </g>
    <circle cx="24" cy="24" r="17.8" stroke="white" strokeOpacity="0.15" strokeWidth="1" />
    {/* Octocat Silhouette */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 11C16.82 11 11 16.82 11 24C11 29.75 14.73 34.62 19.89 36.33C20.54 36.45 20.78 36.05 20.78 35.71C20.78 35.4 20.77 34.38 20.76 33.31C17.15 34.1 16.39 31.77 16.39 31.77C15.8 30.27 14.95 29.87 14.95 29.87C13.77 29.07 15.04 29.08 15.04 29.08C16.34 29.17 17.03 30.41 17.03 30.41C18.19 32.39 20.07 31.82 20.81 31.49C20.93 30.65 21.27 30.08 21.64 29.75C18.76 29.43 15.73 28.32 15.73 23.36C15.73 21.95 16.23 20.79 17.06 19.88C16.93 19.55 16.48 18.23 17.18 16.45C17.18 16.45 18.27 16.1 20.73 17.77C21.76 17.48 22.88 17.34 24 17.33C25.12 17.34 26.24 17.48 27.28 17.77C29.73 16.1 30.82 16.45 30.82 16.45C31.52 18.23 31.08 19.55 30.94 19.88C31.77 20.79 32.27 21.95 32.27 23.36C32.27 28.33 29.23 29.42 26.34 29.74C26.8 30.14 27.22 30.93 27.22 32.13C27.22 33.86 27.2 35.25 27.2 35.71C27.2 36.05 27.44 36.46 28.1 36.33C33.26 34.61 37 29.74 37 24C37 16.82 31.18 11 24 11Z"
      fill="white"
    />
  </svg>
);

// ----------------------------------------------------
// 9. REST APIS REALISTIC DUPLEX NETWORK NODE
// ----------------------------------------------------
export const RealisticRestApisIcon: React.FC<SkillIconProps> = ({ size = 32, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${className}`} {...props}>
    <defs>
      <linearGradient id="rest-cloud" x1="10" y1="8" x2="38" y2="28" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="rest-hub" x1="16" y1="28" x2="32" y2="42" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0369A1" />
      </linearGradient>
      <filter id="rest-shadow" x="4" y="6" width="40" height="38" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2" stdDeviation="1.8" floodColor="#064E3B" floodOpacity="0.4" />
      </filter>
    </defs>
    <g filter="url(#rest-shadow)">
      {/* Cloud Header */}
      <path
        d="M17 19C17 14.58 20.58 11 25 11C28.6 11 31.62 13.38 32.61 16.71C35.63 17.15 38 19.8 38 23C38 26.58 35.09 29.5 31.5 29.5H16C12.13 29.5 9 26.37 9 22.5C9 18.8 11.87 15.76 15.5 15.53C15.9 16.65 16.5 17.9 17 19Z"
        fill="url(#rest-cloud)"
      />
    </g>
    {/* Microservice Endpoint Hub */}
    <rect x="12" y="33" width="24" height="9" rx="4.5" fill="url(#rest-hub)" stroke="#7DD3FC" strokeWidth="1" />
    <circle cx="16.5" cy="37.5" r="2" fill="#34D399" />
    <circle cx="24" cy="37.5" r="1.5" fill="white" />
    <circle cx="31.5" cy="37.5" r="1.5" fill="#FDE047" />
    {/* Duplex Fast Data Arrows */}
    <path d="M21 27L21 33M21 33L18 30M21 33L24 30" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M27 33L27 27M27 27L24 30M27 27L30 30" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ----------------------------------------------------
// 10. RESPONSIVE DESIGN REALISTIC 3D MULTI-DEVICE
// ----------------------------------------------------
export const RealisticResponsiveIcon: React.FC<SkillIconProps> = ({ size = 32, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${className}`} {...props}>
    <defs>
      <linearGradient id="resp-desk" x1="4" y1="8" x2="36" y2="34" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
      <linearGradient id="resp-phone" x1="28" y1="16" x2="42" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0284C7" />
        <stop offset="100%" stopColor="#0369A1" />
      </linearGradient>
      <filter id="resp-shadow" x="2" y="4" width="44" height="40" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0F172A" floodOpacity="0.4" />
      </filter>
    </defs>
    <g filter="url(#resp-shadow)">
      {/* Desktop Display */}
      <rect x="5" y="8" width="30" height="22" rx="4" fill="url(#resp-desk)" stroke="#64748B" strokeWidth="1.2" />
      {/* Desktop Screen Glass */}
      <rect x="7" y="10" width="26" height="18" rx="2" fill="#1E293B" />
      <rect x="9" y="13" width="12" height="2" rx="1" fill="#38BDF8" />
      <rect x="9" y="17" width="18" height="2" rx="1" fill="#94A3B8" />
      <rect x="9" y="21" width="8" height="2" rx="1" fill="#64748B" />
      {/* Desktop Stand */}
      <path d="M16 30H24V34H16V30Z" fill="#475569" />
      <path d="M12 34H28V36H12V34Z" fill="#334155" />
      {/* Foreground Modern Smartphone with 3D Gloss */}
      <rect x="28" y="16" width="14" height="25" rx="3.5" fill="url(#resp-phone)" stroke="#BAE6FD" strokeWidth="1.2" />
      <rect x="29.5" y="18" width="11" height="19" rx="2" fill="#0C4A6E" />
      {/* Phone Screen Lines */}
      <rect x="31" y="21" width="8" height="2" rx="1" fill="#38BDF8" />
      <rect x="31" y="25" width="6" height="2" rx="1" fill="#7DD3FC" />
      <rect x="31" y="29" width="4" height="2" rx="1" fill="#BAE6FD" />
      {/* Home Indicator */}
      <circle cx="35" cy="39" r="1" fill="white" />
    </g>
  </svg>
);

// ----------------------------------------------------
// 11. PYTHON REALISTIC INTERTWINED SNAKES
// ----------------------------------------------------
export const RealisticPythonIcon: React.FC<SkillIconProps> = ({ size = 32, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${className}`} {...props}>
    <defs>
      <linearGradient id="py-blue" x1="6" y1="6" x2="30" y2="30" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4B8BBE" />
        <stop offset="50%" stopColor="#306998" />
        <stop offset="100%" stopColor="#1E4263" />
      </linearGradient>
      <linearGradient id="py-yellow" x1="18" y1="18" x2="42" y2="42" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFE873" />
        <stop offset="50%" stopColor="#FFD43B" />
        <stop offset="100%" stopColor="#D9A800" />
      </linearGradient>
      <filter id="py-shadow" x="2" y="2" width="44" height="44" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#183048" floodOpacity="0.45" />
      </filter>
    </defs>
    <g filter="url(#py-shadow)">
      {/* Top Blue Snake */}
      <path
        d="M23.6 5C13.2 5 13.8 9.5 13.8 9.5L13.8 14.1H24V15.6H9.8C9.8 15.6 5 15 5 25.5C5 36 9.3 35.5 9.3 35.5H12.3V30.9C12.3 30.9 12.1 25.4 17.8 25.4H28C28 25.4 33.2 25.7 33.2 20.6V10.4C33.2 10.4 34 5 23.6 5ZM19 8.2C20 8.2 20.8 9 20.8 10C20.8 11 20 11.8 19 11.8C18 11.8 17.2 11 17.2 10C17.2 9 18 8.2 19 8.2Z"
        fill="url(#py-blue)"
      />
      {/* Bottom Yellow Snake */}
      <path
        d="M24.4 43C34.8 43 34.2 38.5 34.2 38.5V33.9H24V32.4H38.2C38.2 32.4 43 33 43 22.5C43 12 38.7 12.5 38.7 12.5H35.7V17.1C35.7 17.1 35.9 22.6 30.2 22.6H20C20 22.6 14.8 22.3 14.8 27.4V37.6C14.8 37.6 14 43 24.4 43ZM29 39.8C28 39.8 27.2 39 27.2 38C27.2 37 28 36.2 29 36.2C30 36.2 30.8 37 30.8 38C30.8 39 30 39.8 29 39.8Z"
        fill="url(#py-yellow)"
      />
    </g>
  </svg>
);

// ----------------------------------------------------
// 12. MACHINE LEARNING REALISTIC AI MICROPROCESSOR
// ----------------------------------------------------
export const RealisticMlIcon: React.FC<SkillIconProps> = ({ size = 32, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${className}`} {...props}>
    <defs>
      <linearGradient id="ml-chip" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4C1D95" />
        <stop offset="50%" stopColor="#312E81" />
        <stop offset="100%" stopColor="#1E1B4B" />
      </linearGradient>
      <linearGradient id="ml-core" x1="16" y1="16" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#6366F1" />
      </linearGradient>
      <linearGradient id="ml-pin" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FBBF24" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <filter id="ml-shadow" x="4" y="4" width="40" height="40" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#2E1065" floodOpacity="0.5" />
      </filter>
    </defs>
    {/* Outer Silicon Pins */}
    {/* Top Pins */}
    <rect x="15" y="4" width="3" height="6" rx="1.2" fill="url(#ml-pin)" />
    <rect x="22.5" y="4" width="3" height="6" rx="1.2" fill="url(#ml-pin)" />
    <rect x="30" y="4" width="3" height="6" rx="1.2" fill="url(#ml-pin)" />
    {/* Bottom Pins */}
    <rect x="15" y="38" width="3" height="6" rx="1.2" fill="url(#ml-pin)" />
    <rect x="22.5" y="38" width="3" height="6" rx="1.2" fill="url(#ml-pin)" />
    <rect x="30" y="38" width="3" height="6" rx="1.2" fill="url(#ml-pin)" />
    {/* Left Pins */}
    <rect x="4" y="15" width="6" height="3" rx="1.2" fill="url(#ml-pin)" />
    <rect x="4" y="22.5" width="6" height="3" rx="1.2" fill="url(#ml-pin)" />
    <rect x="4" y="30" width="6" height="3" rx="1.2" fill="url(#ml-pin)" />
    {/* Right Pins */}
    <rect x="38" y="15" width="6" height="3" rx="1.2" fill="url(#ml-pin)" />
    <rect x="38" y="22.5" width="6" height="3" rx="1.2" fill="url(#ml-pin)" />
    <rect x="38" y="30" width="6" height="3" rx="1.2" fill="url(#ml-pin)" />

    <g filter="url(#ml-shadow)">
      {/* Main Ceramic Package */}
      <rect x="8" y="8" width="32" height="32" rx="7" fill="url(#ml-chip)" stroke="#818CF8" strokeWidth="1.5" />
    </g>
    {/* Central Glowing AI Engine Die */}
    <rect x="15" y="15" width="18" height="18" rx="4" fill="url(#ml-core)" stroke="#C084FC" strokeWidth="1" />
    <path d="M19 28V20L24 25L29 20V28" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ----------------------------------------------------
// 13. ARTIFICIAL INTELLIGENCE REALISTIC CYBERNETIC BRAIN
// ----------------------------------------------------
export const RealisticAiBrainIcon: React.FC<SkillIconProps> = ({ size = 32, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${className}`} {...props}>
    <defs>
      <linearGradient id="ai-brain-l" x1="8" y1="8" x2="24" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F43F5E" />
        <stop offset="50%" stopColor="#EC4899" />
        <stop offset="100%" stopColor="#9333EA" />
      </linearGradient>
      <linearGradient id="ai-brain-r" x1="24" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#A855F7" />
        <stop offset="50%" stopColor="#6366F1" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
      <filter id="ai-shadow" x="4" y="6" width="40" height="36" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#701A75" floodOpacity="0.45" />
      </filter>
    </defs>
    <g filter="url(#ai-shadow)">
      {/* Left Hemisphere */}
      <path
        d="M22 10C16 10 10 13 10 19C10 22.5 12 25 12 28C12 31 10 33 11 36C12 39 16 39.5 22 39V10Z"
        fill="url(#ai-brain-l)"
        fillOpacity="0.85"
        stroke="#FDA4AF"
        strokeWidth="1.2"
      />
      {/* Right Hemisphere */}
      <path
        d="M26 10C32 10 38 13 38 19C38 22.5 36 25 36 28C36 31 38 33 37 36C36 39 32 39.5 26 39V10Z"
        fill="url(#ai-brain-r)"
        fillOpacity="0.85"
        stroke="#93C5FD"
        strokeWidth="1.2"
      />
    </g>
    {/* Synaptic Core Pulse Lines */}
    <circle cx="17" cy="18" r="2.2" fill="#FFFFFF" />
    <circle cx="31" cy="18" r="2.2" fill="#FFFFFF" />
    <circle cx="16" cy="27" r="2.2" fill="#FCE7F3" />
    <circle cx="32" cy="27" r="2.2" fill="#E0E7FF" />
    <circle cx="20" cy="35" r="2" fill="#FFFFFF" />
    <circle cx="28" cy="35" r="2" fill="#FFFFFF" />
    <path d="M17 18L16 27L20 35M31 18L32 27L28 35M17 18L24 24L31 18M16 27L24 24L32 27" stroke="white" strokeWidth="1.4" strokeOpacity="0.85" />
  </svg>
);

// ----------------------------------------------------
// 14. COMPUTER VISION REALISTIC BIONIC OPTIC SENSOR
// ----------------------------------------------------
export const RealisticComputerVisionIcon: React.FC<SkillIconProps> = ({ size = 32, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${className}`} {...props}>
    <defs>
      <linearGradient id="cv-lens" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <radialGradient id="cv-core" cx="24" cy="24" r="9" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="50%" stopColor="#0284C7" />
        <stop offset="100%" stopColor="#0B132B" />
      </radialGradient>
      <filter id="cv-shadow" x="2" y="2" width="44" height="44" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0369A1" floodOpacity="0.45" />
      </filter>
    </defs>
    <g filter="url(#cv-shadow)">
      {/* Outer Aperture Ring */}
      <circle cx="24" cy="24" r="19" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.8" />
      {/* Middle Optical Bezel */}
      <circle cx="24" cy="24" r="14.5" fill="url(#cv-lens)" stroke="#0284C7" strokeWidth="1.2" />
      {/* Inner Pupil Sensor */}
      <circle cx="24" cy="24" r="9" fill="url(#cv-core)" />
      <circle cx="24" cy="24" r="3.5" fill="#38BDF8" />
      <circle cx="22" cy="21.5" r="1.5" fill="white" />
    </g>
    {/* Cybernetic Target Reticle Markers [ + ] */}
    <path d="M7 16V9H14M41 16V9H34M7 32V39H14M41 32V39H34" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="24" y1="12" x2="24" y2="15" stroke="#34D399" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="24" y1="33" x2="24" y2="36" stroke="#34D399" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="12" y1="24" x2="15" y2="24" stroke="#34D399" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="33" y1="24" x2="36" y2="24" stroke="#34D399" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// ----------------------------------------------------
// 15. DATA ANALYSIS REALISTIC 3D STATISTICAL BARS
// ----------------------------------------------------
export const RealisticDataAnalysisIcon: React.FC<SkillIconProps> = ({ size = 32, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${className}`} {...props}>
    <defs>
      <linearGradient id="da-bar1" x1="10" y1="24" x2="16" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="da-bar2" x1="20" y1="16" x2="28" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>
      <linearGradient id="da-bar3" x1="32" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#34D399" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <filter id="da-shadow" x="4" y="6" width="40" height="38" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#0F172A" floodOpacity="0.4" />
      </filter>
    </defs>
    <g filter="url(#da-shadow)">
      {/* Base Grid Plate */}
      <rect x="6" y="38" width="36" height="4" rx="2" fill="#334155" />
      {/* 3D Bar 1 */}
      <rect x="9" y="24" width="7" height="15" rx="2.5" fill="url(#da-bar1)" />
      {/* 3D Bar 2 */}
      <rect x="20.5" y="16" width="7" height="23" rx="2.5" fill="url(#da-bar2)" />
      {/* 3D Bar 3 */}
      <rect x="32" y="9" width="7" height="30" rx="2.5" fill="url(#da-bar3)" />
      {/* Trendline Curve with Arrow */}
      <path
        d="M9 25L20 18L30 14L40 7"
        stroke="#FBBF24"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon points="41,6 36,6 40,11" fill="#FBBF24" />
    </g>
  </svg>
);

// ----------------------------------------------------
// 16. DATABASE (FALLBACK / DBMS) REALISTIC 3D CYLINDERS
// ----------------------------------------------------
export const RealisticDatabaseIcon: React.FC<SkillIconProps> = ({ size = 32, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${className}`} {...props}>
    <defs>
      <linearGradient id="db-grad" x1="10" y1="8" x2="38" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="db-cap" x1="10" y1="8" x2="38" y2="18" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#93C5FD" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
      <filter id="db-shadow" x="4" y="6" width="40" height="38" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#1E3A8A" floodOpacity="0.45" />
      </filter>
    </defs>
    <g filter="url(#db-shadow)">
      {/* Bottom Cylinder */}
      <path d="M10 26C10 23 16.27 21 24 21C31.73 21 38 23 38 26V36C38 39 31.73 41 24 41C16.27 41 10 39 10 36V26Z" fill="url(#db-grad)" />
      <ellipse cx="24" cy="26" rx="14" ry="4.5" fill="url(#db-cap)" stroke="#BFDBFE" strokeWidth="0.8" />
      {/* Top Cylinder */}
      <path d="M10 12C10 9 16.27 7 24 7C31.73 7 38 9 38 12V22C38 25 31.73 27 24 27C16.27 27 10 25 10 22V12Z" fill="url(#db-grad)" />
      <ellipse cx="24" cy="12" rx="14" ry="4.5" fill="url(#db-cap)" stroke="#BFDBFE" strokeWidth="0.8" />
      {/* Status LEDs */}
      <circle cx="34" cy="18" r="1.5" fill="#34D399" />
      <circle cx="34" cy="32" r="1.5" fill="#38BDF8" />
    </g>
  </svg>
);

// ----------------------------------------------------
// 17. OPENCV REALISTIC 3D RGB TRIAD RINGS
// ----------------------------------------------------
export const RealisticOpenCvIcon: React.FC<SkillIconProps> = ({ size = 32, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${className}`} {...props}>
    <defs>
      {/* Red Ring Gradient */}
      <radialGradient id="cv-red" cx="24" cy="12" r="11" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF6B6B" />
        <stop offset="50%" stopColor="#EE1C25" />
        <stop offset="100%" stopColor="#990008" />
      </radialGradient>
      {/* Green Ring Gradient */}
      <radialGradient id="cv-green" cx="13" cy="31" r="11" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4ADE80" />
        <stop offset="50%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#047857" />
      </radialGradient>
      {/* Blue Ring Gradient */}
      <radialGradient id="cv-blue" cx="35" cy="31" r="11" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="50%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1E3A8A" />
      </radialGradient>
      <filter id="cv-glow" x="2" y="2" width="44" height="44" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#0F172A" floodOpacity="0.4" />
      </filter>
    </defs>
    <g filter="url(#cv-glow)">
      {/* Top Red Ring with Gap */}
      <path
        d="M24 6C28.4 6 32 9.6 32 14C32 17.3 29.9 20.1 27 21.3V16.8C28.2 16 29 14.6 29 13C29 10.2 26.8 8 24 8C21.2 8 19 10.2 19 13C19 14.6 19.8 16 21 16.8V21.3C18.1 20.1 16 17.3 16 14C16 9.6 19.6 6 24 6Z"
        fill="url(#cv-red)"
      />
      {/* Bottom Left Green Ring with Gap */}
      <path
        d="M13 23C17.4 23 21 26.6 21 31C21 34.3 18.9 37.1 16 38.3V33.8C17.2 33 18 31.6 18 30C18 27.2 15.8 25 13 25C10.2 25 8 27.2 8 30C8 31.6 8.8 33 10 33.8V38.3C7.1 37.1 5 34.3 5 31C5 26.6 8.6 23 13 23Z"
        fill="url(#cv-green)"
        transform="rotate(120 13 31)"
      />
      {/* Bottom Right Blue Ring with Gap */}
      <path
        d="M35 23C39.4 23 43 26.6 43 31C43 34.3 40.9 37.1 38 38.3V33.8C39.2 33 40 31.6 40 30C40 27.2 37.8 25 35 25C32.2 25 30 27.2 30 30C30 31.6 30.8 33 32 33.8V38.3C29.1 37.1 27 34.3 27 31C27 26.6 30.6 23 35 23Z"
        fill="url(#cv-blue)"
        transform="rotate(-120 35 31)"
      />
    </g>
    {/* Central Iris Sparkle */}
    <circle cx="24" cy="28" r="2.2" fill="#FFFFFF" fillOpacity="0.85" />
    <circle cx="24" cy="28" r="1.2" fill="#38BDF8" />
  </svg>
);

// ----------------------------------------------------
// 18. PANDAS REALISTIC 3D MATRIX DATA-FRAME BARS
// ----------------------------------------------------
export const RealisticPandasIcon: React.FC<SkillIconProps> = ({ size = 32, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 ${className}`} {...props}>
    <defs>
      <linearGradient id="pd-navy" x1="0" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#25145A" />
        <stop offset="100%" stopColor="#130754" />
      </linearGradient>
      <linearGradient id="pd-teal" x1="0" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="pd-amber" x1="0" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FBBF24" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <linearGradient id="pd-rose" x1="0" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FB7185" />
        <stop offset="100%" stopColor="#E11D48" />
      </linearGradient>
      <filter id="pd-shadow" x="2" y="2" width="44" height="44" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#130754" floodOpacity="0.45" />
      </filter>
    </defs>
    <g filter="url(#pd-shadow)">
      {/* Background Frame Plate */}
      <rect x="6" y="6" width="36" height="36" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.2" />
      {/* Column 1 (Navy Primary) */}
      <rect x="10" y="11" width="5.5" height="26" rx="2.5" fill="url(#pd-navy)" />
      {/* Column 2 (Teal) */}
      <rect x="18" y="17" width="5.5" height="20" rx="2.5" fill="url(#pd-teal)" />
      {/* Column 3 (Amber Accent) */}
      <rect x="26" y="13" width="5.5" height="15" rx="2.5" fill="url(#pd-amber)" />
      {/* Column 4 (Rose) */}
      <rect x="33.5" y="22" width="5.5" height="15" rx="2.5" fill="url(#pd-rose)" />
      {/* Connecting Matrix Index Wire */}
      <line x1="10" y1="24" x2="39" y2="24" stroke="white" strokeWidth="1.8" strokeDasharray="2 2" strokeOpacity="0.8" />
      <circle cx="12.75" cy="24" r="1.5" fill="white" />
      <circle cx="20.75" cy="24" r="1.5" fill="white" />
      <circle cx="28.75" cy="24" r="1.5" fill="white" />
      <circle cx="36.25" cy="24" r="1.5" fill="white" />
    </g>
  </svg>
);

// ----------------------------------------------------
// MASTER ICON RESOLVER FOR SKILLS SECTION
// ----------------------------------------------------
export const getRealisticSkillIcon = (name: string, iconKey?: string, size = 32, className = ''): React.ReactNode => {
  const normName = name.toLowerCase().trim();
  const normKey = (iconKey || '').toLowerCase().trim();

  // Explicit tool/library checks first
  if (normName.includes('opencv')) return <RealisticOpenCvIcon size={size} className={className} />;
  if (normName.includes('pandas')) return <RealisticPandasIcon size={size} className={className} />;
  if (normName.includes('html')) return <RealisticHtmlIcon size={size} className={className} />;
  if (normName.includes('css') && !normName.includes('tailwind')) return <RealisticCssIcon size={size} className={className} />;
  if (normName.includes('javascript') || normName === 'js') return <RealisticJsIcon size={size} className={className} />;
  if (normName.includes('react') && !normName.includes('native')) return <RealisticReactIcon size={size} className={className} />;
  if (normName.includes('next')) return <RealisticNextjsIcon size={size} className={className} />;
  if (normName.includes('tailwind')) return <RealisticTailwindIcon size={size} className={className} />;
  if (normName === 'git') return <RealisticGitIcon size={size} className={className} />;
  if (normName.includes('github')) return <RealisticGithubIcon size={size} className={className} />;
  if (normName.includes('api') || normName.includes('rest')) return <RealisticRestApisIcon size={size} className={className} />;
  if (normName.includes('responsive') || normName.includes('mobile')) return <RealisticResponsiveIcon size={size} className={className} />;
  if (normName.includes('python')) return <RealisticPythonIcon size={size} className={className} />;
  if (normName.includes('machine learning') || normName === 'ml') return <RealisticMlIcon size={size} className={className} />;
  if (normName.includes('artificial intelligence') || normName === 'ai') return <RealisticAiBrainIcon size={size} className={className} />;
  if (normName.includes('computer vision') || normName.includes('vision')) return <RealisticComputerVisionIcon size={size} className={className} />;
  if (normName.includes('data analysis') || normName.includes('analytics')) return <RealisticDataAnalysisIcon size={size} className={className} />;
  if (normName.includes('database') || normName.includes('sql') || normName.includes('dbms')) return <RealisticDatabaseIcon size={size} className={className} />;

  // Secondary match by iconKey
  if (normKey.includes('palette')) return <RealisticCssIcon size={size} className={className} />;
  if (normKey.includes('filecode')) return <RealisticJsIcon size={size} className={className} />;
  if (normKey.includes('atom')) return <RealisticReactIcon size={size} className={className} />;
  if (normKey.includes('layers')) return <RealisticNextjsIcon size={size} className={className} />;
  if (normKey.includes('wind')) return <RealisticTailwindIcon size={size} className={className} />;
  if (normKey.includes('gitbranch')) return <RealisticGitIcon size={size} className={className} />;
  if (normKey.includes('github')) return <RealisticGithubIcon size={size} className={className} />;
  if (normKey.includes('network')) return <RealisticRestApisIcon size={size} className={className} />;
  if (normKey.includes('smartphone')) return <RealisticResponsiveIcon size={size} className={className} />;
  if (normKey.includes('cpu')) return <RealisticMlIcon size={size} className={className} />;
  if (normKey.includes('braincircuit')) return <RealisticAiBrainIcon size={size} className={className} />;
  if (normKey.includes('eye') || normKey.includes('camera')) return <RealisticComputerVisionIcon size={size} className={className} />;
  if (normKey.includes('barchart') || normKey.includes('linechart')) return <RealisticDataAnalysisIcon size={size} className={className} />;
  if (normKey.includes('database') || normKey.includes('table')) return <RealisticDatabaseIcon size={size} className={className} />;

  // Default fallback
  return <RealisticHtmlIcon size={size} className={className} />;
};
