import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

/**
 * 1. REAL FRONTEND ENGINEERING ICON
 * Realistic 3D modern developer code window with macOS traffic lights,
 * syntax-highlighted code brackets, and glowing interactive elements.
 */
export const RealFrontendIcon: React.FC<IconProps> = ({ size = 44, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-300 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fe-win-bg" x1="0" y1="4" x2="48" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0B132B" />
      </linearGradient>
      <linearGradient id="fe-win-border" x1="0" y1="4" x2="48" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#6366F1" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="fe-glow" x1="12" y1="18" x2="36" y2="34" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="fe-slash" x1="20" y1="18" x2="28" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F43F5E" />
        <stop offset="100%" stopColor="#E11D48" />
      </linearGradient>
      <filter id="fe-shadow" x="0" y="2" width="48" height="46" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#0F172A" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Window Outer Shell */}
    <g filter="url(#fe-shadow)">
      <rect x="4" y="5" width="40" height="38" rx="8" fill="url(#fe-win-bg)" stroke="url(#fe-win-border)" strokeWidth="1.5" />
    </g>

    {/* Window Top Titlebar */}
    <path d="M4 13C4 8.58172 7.58172 5 12 5H36C40.4183 5 44 8.58172 44 13V15H4V13Z" fill="#0F172A" fillOpacity="0.7" />
    <line x1="4" y1="15" x2="44" y2="15" stroke="#334155" strokeWidth="1" />

    {/* Traffic Lights */}
    <circle cx="9.5" cy="10" r="2.2" fill="#EF4444" />
    <circle cx="9.5" cy="9.4" r="0.8" fill="#FCA5A5" />

    <circle cx="15.5" cy="10" r="2.2" fill="#F59E0B" />
    <circle cx="15.5" cy="9.4" r="0.8" fill="#FDE68A" />

    <circle cx="21.5" cy="10" r="2.2" fill="#10B981" />
    <circle cx="21.5" cy="9.4" r="0.8" fill="#A7F3D0" />

    {/* Search/Address pill */}
    <rect x="27" y="8" width="13" height="4" rx="2" fill="#1E293B" stroke="#334155" strokeWidth="0.8" />

    {/* Main Code Symbol: < / > */}
    {/* Left Bracket < */}
    <path
      d="M17.5 20.5L12 25L17.5 29.5"
      stroke="url(#fe-glow)"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Center Slash / */}
    <path
      d="M26 19L21.5 31"
      stroke="url(#fe-slash)"
      strokeWidth="2.8"
      strokeLinecap="round"
    />

    {/* Right Bracket > */}
    <path
      d="M30 20.5L35.5 25L30 29.5"
      stroke="url(#fe-glow)"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Miniature Code Lines at bottom */}
    <rect x="10" y="36" width="11" height="2" rx="1" fill="#38BDF8" fillOpacity="0.8" />
    <rect x="23" y="36" width="8" height="2" rx="1" fill="#C084FC" fillOpacity="0.8" />
    <rect x="33" y="36" width="5" height="2" rx="1" fill="#34D399" fillOpacity="0.8" />
  </svg>
);

/**
 * 2. REAL ALGORITHMIC & AI FOUNDATION ICON
 * Realistic 3D microchip with gold pins, glowing neural brain circuitry,
 * and vivid cyan/violet synaptic nodes.
 */
export const RealAiBrainIcon: React.FC<IconProps> = ({ size = 44, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-300 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="ai-chip-bg" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1E1B4B" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
      <linearGradient id="ai-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="50%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#CA8A04" />
      </linearGradient>
      <linearGradient id="ai-brain-grad" x1="14" y1="12" x2="34" y2="34" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#A855F7" />
        <stop offset="50%" stopColor="#6366F1" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
      <radialGradient id="ai-center-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#818CF8" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
      </radialGradient>
      <filter id="ai-shadow" x="2" y="2" width="44" height="44" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#1E1B4B" floodOpacity="0.4" />
      </filter>
    </defs>

    {/* Outer Golden Pins */}
    {/* Top Pins */}
    <rect x="13" y="2" width="3" height="5" rx="1.2" fill="url(#ai-gold)" />
    <rect x="19" y="2" width="3" height="5" rx="1.2" fill="url(#ai-gold)" />
    <rect x="26" y="2" width="3" height="5" rx="1.2" fill="url(#ai-gold)" />
    <rect x="32" y="2" width="3" height="5" rx="1.2" fill="url(#ai-gold)" />

    {/* Bottom Pins */}
    <rect x="13" y="41" width="3" height="5" rx="1.2" fill="url(#ai-gold)" />
    <rect x="19" y="41" width="3" height="5" rx="1.2" fill="url(#ai-gold)" />
    <rect x="26" y="41" width="3" height="5" rx="1.2" fill="url(#ai-gold)" />
    <rect x="32" y="41" width="3" height="5" rx="1.2" fill="url(#ai-gold)" />

    {/* Left Pins */}
    <rect x="2" y="13" width="5" height="3" rx="1.2" fill="url(#ai-gold)" />
    <rect x="2" y="19" width="5" height="3" rx="1.2" fill="url(#ai-gold)" />
    <rect x="2" y="26" width="5" height="3" rx="1.2" fill="url(#ai-gold)" />
    <rect x="2" y="32" width="5" height="3" rx="1.2" fill="url(#ai-gold)" />

    {/* Right Pins */}
    <rect x="41" y="13" width="5" height="3" rx="1.2" fill="url(#ai-gold)" />
    <rect x="41" y="19" width="5" height="3" rx="1.2" fill="url(#ai-gold)" />
    <rect x="41" y="26" width="5" height="3" rx="1.2" fill="url(#ai-gold)" />
    <rect x="41" y="32" width="5" height="3" rx="1.2" fill="url(#ai-gold)" />

    {/* Silicon Chip Body */}
    <g filter="url(#ai-shadow)">
      <rect x="6" y="6" width="36" height="36" rx="8" fill="url(#ai-chip-bg)" stroke="#6366F1" strokeWidth="1.5" />
    </g>

    {/* Chip Interior Ring */}
    <rect x="9.5" y="9.5" width="29" height="29" rx="5" stroke="#312E81" strokeWidth="1" strokeDasharray="3 2" fill="none" />
    <circle cx="24" cy="24" r="13" fill="url(#ai-center-glow)" />

    {/* Glowing AI Brain Silhouette */}
    {/* Left Hemisphere */}
    <path
      d="M23 15C19 15 16 17.5 16 21C15 22 14.5 24 15 26C15 28 16.5 30 18.5 31C20.5 32 23 32.5 23 33V15Z"
      fill="url(#ai-brain-grad)"
      fillOpacity="0.85"
    />
    {/* Right Hemisphere */}
    <path
      d="M25 15C29 15 32 17.5 32 21C33 22 33.5 24 33 26C33 28 31.5 30 29.5 31C27.5 32 25 32.5 25 33V15Z"
      fill="url(#ai-brain-grad)"
      fillOpacity="0.85"
    />

    {/* Neural Network Circuit Lines */}
    <path d="M24 16V32" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M19 20C21 22 23 22 24 23" stroke="#67E8F9" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M29 20C27 22 25 22 24 23" stroke="#C084FC" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M18 27C21 26 23 25 24 25" stroke="#67E8F9" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M30 27C27 26 25 25 24 25" stroke="#C084FC" strokeWidth="1.2" strokeLinecap="round" />

    {/* Synaptic Nodes */}
    <circle cx="24" cy="24" r="2.2" fill="#FFFFFF" />
    <circle cx="19" cy="20" r="1.6" fill="#38BDF8" />
    <circle cx="29" cy="20" r="1.6" fill="#F43F5E" />
    <circle cx="18" cy="27" r="1.6" fill="#34D399" />
    <circle cx="30" cy="27" r="1.6" fill="#FBBF24" />
  </svg>
);

/**
 * 3. REAL SPEED & CLEAN ARCHITECTURE ICON
 * Realistic 3D supersonic space rocket launching with roaring dual-tone
 * exhaust flames, cockpit window, and dynamic speed particles.
 */
export const RealSpeedRocketIcon: React.FC<IconProps> = ({ size = 44, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-300 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="rocket-body" x1="16" y1="16" x2="38" y2="8" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E2E8F0" />
        <stop offset="50%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#CBD5E1" />
      </linearGradient>
      <linearGradient id="rocket-wing" x1="10" y1="26" x2="28" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="flame-outer" x1="14" y1="30" x2="4" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="40%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#991B1B" />
      </linearGradient>
      <linearGradient id="flame-inner" x1="12" y1="30" x2="6" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FEF08A" />
        <stop offset="100%" stopColor="#F97316" />
      </linearGradient>
    </defs>

    {/* Speed Trails */}
    <path d="M34 6L40 3" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" />
    <path d="M43 14L46 11" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M28 4L32 2" stroke="#818CF8" strokeWidth="1.2" strokeLinecap="round" />

    {/* Thruster Flame Outer */}
    <path
      d="M13.5 29.5C12 34 8 40 4.5 43.5C8 40 14 36 18.5 34.5C16.5 33 15 31.5 13.5 29.5Z"
      fill="url(#flame-outer)"
    />

    {/* Thruster Flame Core (Hot) */}
    <path
      d="M14 31C13 33.5 10 38 7 40C9.5 37.5 14 35 16 33.5C15 32.5 14.5 31.8 14 31Z"
      fill="url(#flame-inner)"
    />

    {/* Left Delta Wing */}
    <path
      d="M14 26L7 29C6.5 30 7 32 8.5 32.5L16 31L14 26Z"
      fill="url(#rocket-wing)"
      stroke="#1E40AF"
      strokeWidth="0.8"
    />

    {/* Right Delta Wing */}
    <path
      d="M22 18L25 11C26 10.5 28 11 28.5 12.5L27 20L22 18Z"
      fill="url(#rocket-wing)"
      stroke="#1E40AF"
      strokeWidth="0.8"
    />

    {/* Main Rocket Fuselage */}
    <path
      d="M39 9C33 10 24 16 19 22L17 27C17 27 21 31 21 31L26 29C32 24 38 15 39 9Z"
      fill="url(#rocket-body)"
      stroke="#94A3B8"
      strokeWidth="1.2"
    />

    {/* Rocket Nose Tip */}
    <path
      d="M39 9C37.5 10 35 11.5 33.5 13L35 14.5C36.5 13 38 10.5 39 9Z"
      fill="#EF4444"
    />

    {/* Cockpit Portal Window */}
    <circle cx="28.5" cy="19.5" r="3.8" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.2" />
    <circle cx="28.5" cy="19.5" r="2.8" fill="#38BDF8" />
    <circle cx="27.5" cy="18.5" r="1.2" fill="#FFFFFF" />

    {/* Center Fin Accent */}
    <path d="M19 25L23 29" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />

    {/* Speed Sparkles */}
    <circle cx="41" cy="24" r="1" fill="#FBBF24" />
    <circle cx="23" cy="7" r="1.2" fill="#38BDF8" />
    <circle cx="10" cy="20" r="0.8" fill="#F43F5E" />
  </svg>
);

/**
 * 4. REAL ABOUT ANSH (BIOGRAPHY & MINDSET) ICON
 * Realistic 3D developer persona bust with modern spectacles, stylish hair,
 * collar shirt, and vibrant azure badge backdrop.
 */
export const RealUserAvatarIcon: React.FC<IconProps> = ({ size = 44, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-300 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="user-badge-bg" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="user-skin" x1="18" y1="12" x2="30" y2="28" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FED7AA" />
        <stop offset="100%" stopColor="#FDBA74" />
      </linearGradient>
      <linearGradient id="user-hair" x1="16" y1="8" x2="32" y2="18" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
      <linearGradient id="user-shirt" x1="12" y1="32" x2="36" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0284C7" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
    </defs>

    {/* Background Rounded Shield Badge */}
    <rect x="4" y="4" width="40" height="40" rx="12" fill="url(#user-badge-bg)" stroke="#60A5FA" strokeWidth="1.2" />

    {/* Ambient Glow */}
    <circle cx="24" cy="24" r="16" fill="#60A5FA" fillOpacity="0.25" />

    {/* Torso / Polo Shirt */}
    <path
      d="M12 42C12 36.5 16.5 33 24 33C31.5 33 36 36.5 36 42V44H12V42Z"
      fill="url(#user-shirt)"
    />
    {/* Shirt Collar V-neck */}
    <path d="M21 33L24 37L27 33" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

    {/* Neck */}
    <rect x="21.5" y="25" width="5" height="5" rx="1.5" fill="#FDBA74" />

    {/* Head */}
    <ellipse cx="24" cy="19.5" rx="7.5" ry="8" fill="url(#user-skin)" />

    {/* Ears */}
    <circle cx="16.2" cy="19.5" r="1.8" fill="#FDBA74" />
    <circle cx="31.8" cy="19.5" r="1.8" fill="#FDBA74" />

    {/* Modern Stylish Hair */}
    <path
      d="M16.5 18C16 13 18.5 10 24 10C29.5 10 32 13 31.5 18C30.5 15.5 28.5 14 24 14C19.5 14 17.5 15.5 16.5 18Z"
      fill="url(#user-hair)"
    />

    {/* Glasses Frame */}
    <rect x="18" y="17.5" width="4.8" height="3.5" rx="1" stroke="#1E293B" strokeWidth="1.2" fill="#E0F2FE" fillOpacity="0.6" />
    <rect x="25.2" y="17.5" width="4.8" height="3.5" rx="1" stroke="#1E293B" strokeWidth="1.2" fill="#E0F2FE" fillOpacity="0.6" />
    <line x1="22.8" y1="19" x2="25.2" y2="19" stroke="#1E293B" strokeWidth="1.2" />

    {/* Glasses Glare */}
    <line x1="19" y1="18.5" x2="21" y2="18.5" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" />
    <line x1="26.2" y1="18.5" x2="28.2" y2="18.5" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" />

    {/* Smile */}
    <path d="M22 23.5C23 24.5 25 24.5 26 23.5" stroke="#C2410C" strokeWidth="1" strokeLinecap="round" />

    {/* Verified Star Badge on top right */}
    <circle cx="37" cy="11" r="4.5" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />
    <path d="M35 11L36.5 12.5L39 9.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * 5. REAL TECHNICAL SKILLS (STACK & CAPABILITIES) ICON
 * Realistic 3D isometric stack of tech platform slabs with vibrant cyan,
 * royal blue, and violet layers with light reflections.
 */
export const RealTechSkillsIcon: React.FC<IconProps> = ({ size = 44, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-300 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="layer-cyan-top" x1="10" y1="10" x2="38" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="layer-cyan-side" x1="10" y1="18" x2="38" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0369A1" />
        <stop offset="100%" stopColor="#075985" />
      </linearGradient>

      <linearGradient id="layer-blue-top" x1="10" y1="19" x2="38" y2="29" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#818CF8" />
        <stop offset="100%" stopColor="#4F46E5" />
      </linearGradient>
      <linearGradient id="layer-blue-side" x1="10" y1="27" x2="38" y2="33" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4338CA" />
        <stop offset="100%" stopColor="#312E81" />
      </linearGradient>

      <linearGradient id="layer-purple-top" x1="10" y1="28" x2="38" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#C084FC" />
        <stop offset="100%" stopColor="#9333EA" />
      </linearGradient>
      <linearGradient id="layer-purple-side" x1="10" y1="36" x2="38" y2="42" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#7E22CE" />
        <stop offset="100%" stopColor="#581C87" />
      </linearGradient>
    </defs>

    {/* ================= BOTTOM LAYER (PURPLE - SYSTEMS / DATA) ================= */}
    {/* Left Side */}
    <path d="M8 35.5L24 43.5V40L8 32V35.5Z" fill="#7E22CE" />
    {/* Right Side */}
    <path d="M24 43.5L40 35.5V32L24 40V43.5Z" fill="#581C87" />
    {/* Top Face */}
    <path d="M24 32L40 24L24 16L8 24L24 32Z" transform="translate(0, 8)" fill="url(#layer-purple-top)" stroke="#E9D5FF" strokeWidth="0.8" />

    {/* ================= MIDDLE LAYER (BLUE - LOGIC / FRAMEWORKS) ================= */}
    {/* Left Side */}
    <path d="M8 26.5L24 34.5V31L8 23V26.5Z" fill="#4338CA" />
    {/* Right Side */}
    <path d="M24 34.5L40 26.5V23L24 31V34.5Z" fill="#312E81" />
    {/* Top Face */}
    <path d="M24 31L40 23L24 15L8 23L24 31Z" fill="url(#layer-blue-top)" stroke="#C7D2FE" strokeWidth="0.8" />

    {/* ================= TOP LAYER (CYAN - FRONTEND / UI) ================= */}
    {/* Left Side */}
    <path d="M8 17.5L24 25.5V22L8 14V17.5Z" fill="#0369A1" />
    {/* Right Side */}
    <path d="M24 25.5L40 17.5V14L24 22V25.5Z" fill="#075985" />
    {/* Top Face */}
    <path d="M24 22L40 14L24 6L8 14L24 22Z" fill="url(#layer-cyan-top)" stroke="#BAE6FD" strokeWidth="0.8" />

    {/* Embossed Glyph on Top Layer */}
    <path d="M20 12.5L17 14L20 15.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 12.5L31 14L28 15.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M25 11.5L23 16.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />

    {/* Sparkle Nodes */}
    <circle cx="6" cy="18" r="1.2" fill="#38BDF8" />
    <circle cx="42" cy="15" r="1.5" fill="#818CF8" />
    <circle cx="43" cy="30" r="1.2" fill="#C084FC" />
  </svg>
);

/**
 * 6. REAL FEATURED PROJECTS (PRODUCTION SYSTEMS) ICON
 * Realistic 3D production folder vault with protruding application sheets,
 * live telemetry graph, and golden rocket deployment badge.
 */
export const RealProjectsFolderIcon: React.FC<IconProps> = ({ size = 44, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-300 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="proj-folder-back" x1="4" y1="12" x2="44" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
      <linearGradient id="proj-folder-front" x1="4" y1="20" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="proj-doc-bg" x1="12" y1="6" x2="36" y2="28" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>
      <linearGradient id="proj-badge-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
    </defs>

    {/* Folder Back Body with Tab */}
    <path
      d="M5 13C5 10.7909 6.79086 9 9 9H18L22 13H39C41.2091 13 43 14.7909 43 17V36C43 38.2091 41.2091 40 39 40H9C6.79086 40 5 38.2091 5 36V13Z"
      fill="url(#proj-folder-back)"
      stroke="#334155"
      strokeWidth="1.2"
    />

    {/* Protruding Document Sheet 1 */}
    <rect x="11" y="6" width="26" height="24" rx="3" fill="url(#proj-doc-bg)" stroke="#CBD5E1" strokeWidth="1" />
    {/* Document Mock UI */}
    <rect x="14" y="9" width="12" height="3" rx="1" fill="#3B82F6" />
    <circle cx="33" cy="10.5" r="1.5" fill="#10B981" />
    <rect x="14" y="15" width="20" height="2" rx="1" fill="#94A3B8" />
    <rect x="14" y="19" width="15" height="2" rx="1" fill="#CBD5E1" />
    {/* Mini Chart Bars */}
    <rect x="14" y="24" width="3" height="4" rx="0.5" fill="#38BDF8" />
    <rect x="19" y="22" width="3" height="6" rx="0.5" fill="#3B82F6" />
    <rect x="24" y="25" width="3" height="3" rx="0.5" fill="#818CF8" />
    <rect x="29" y="23" width="3" height="5" rx="0.5" fill="#10B981" />

    {/* Folder Slanted Front Pocket */}
    <path
      d="M4 22C4 20.3431 5.34315 19 7 19H17.5L22 23H41C42.6569 23 44 24.3431 44 26V37C44 39.2091 42.2091 41 40 41H8C5.79086 41 4 39.2091 4 37V22Z"
      fill="url(#proj-folder-front)"
      stroke="#60A5FA"
      strokeWidth="1.2"
    />

    {/* Glossy Horizon Line on Front Pocket */}
    <path d="M5 23H17.5L22 27H43" stroke="#93C5FD" strokeWidth="1" strokeLinecap="round" />

    {/* Deployment Badge on Front (Rocket in Gold Circle) */}
    <circle cx="35" cy="33" r="5.5" fill="url(#proj-badge-gold)" stroke="#FFFFFF" strokeWidth="1.2" />
    {/* Mini Rocket Glyph */}
    <path d="M37 31L33 35M37 31C35.5 31 34 32.5 34 34M37 31C37 32.5 35.5 34 34 34" stroke="#78350F" strokeWidth="1" strokeLinecap="round" />

    {/* Live Pulse Dot */}
    <circle cx="10" cy="33" r="2.5" fill="#10B981" />
    <circle cx="10" cy="33" r="4" stroke="#34D399" strokeWidth="0.8" opacity="0.6" />
  </svg>
);

/**
 * 7. REAL UNIVERSITY EDUCATION ICON
 * Realistic 3D university graduation cap (mortarboard) with hanging golden
 * silk tassel and rolled parchment degree diploma scroll with crimson ribbon.
 */
export const RealEducationCapIcon: React.FC<IconProps> = ({ size = 44, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-300 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="cap-mortar-top" x1="6" y1="14" x2="42" y2="14" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="50%" stopColor="#0F172A" />
        <stop offset="100%" stopColor="#020617" />
      </linearGradient>
      <linearGradient id="cap-gold-tassel" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="50%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#CA8A04" />
      </linearGradient>
      <linearGradient id="diploma-paper" x1="8" y1="36" x2="36" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFBEB" />
        <stop offset="100%" stopColor="#FEF3C7" />
      </linearGradient>
    </defs>

    {/* Rolled Diploma Scroll in Background */}
    <g>
      {/* Scroll Body */}
      <rect x="8" y="36" width="30" height="7.5" rx="3.5" fill="url(#diploma-paper)" stroke="#FDE68A" strokeWidth="1" />
      {/* Scroll Rolled Edge */}
      <ellipse cx="36" cy="39.75" rx="1.8" ry="3.5" fill="#FDE68A" stroke="#D97706" strokeWidth="0.8" />
      {/* Crimson Ribbon around scroll */}
      <rect x="21" y="35.5" width="4.5" height="8.5" rx="1" fill="#DC2626" />
      {/* Ribbon tails */}
      <path d="M22 44L20 47M24.5 44L26.5 47" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
      {/* Golden Seal Button */}
      <circle cx="23.25" cy="39.75" r="1.5" fill="url(#cap-gold-tassel)" />
    </g>

    {/* Skullcap Underneath Mortarboard */}
    <path
      d="M16 19C16 19 16 27 24 27C32 27 32 19 32 19"
      fill="#1E293B"
      stroke="#334155"
      strokeWidth="1.2"
    />

    {/* Diamond-shaped Mortarboard Top (3D Isometric Perspective) */}
    <path
      d="M24 6L43 14L24 22L5 14L24 6Z"
      fill="url(#cap-mortar-top)"
      stroke="#60A5FA"
      strokeWidth="1.2"
    />

    {/* Mortarboard Rim Thickness */}
    <path
      d="M5 14L24 22L43 14V16L24 24L5 16V14Z"
      fill="#090D16"
      stroke="#1E293B"
      strokeWidth="0.8"
    />

    {/* Mortarboard Central Button */}
    <ellipse cx="24" cy="14" rx="2.5" ry="1.5" fill="url(#cap-gold-tassel)" stroke="#78350F" strokeWidth="0.6" />

    {/* Draping Golden Silk Tassel */}
    <path
      d="M24 14C27 15 33 16 35 20C36 22 36.5 25 36.5 29"
      stroke="url(#cap-gold-tassel)"
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
    />
    {/* Tassel Fringe Brush */}
    <rect x="34.5" y="29" width="4" height="6.5" rx="1" fill="url(#cap-gold-tassel)" stroke="#A16207" strokeWidth="0.6" />
    <line x1="36.5" y1="35.5" x2="36.5" y2="38" stroke="#CA8A04" strokeWidth="1.5" strokeLinecap="round" />

    {/* Academic Shimmer Spark */}
    <circle cx="10" cy="8" r="1.2" fill="#FBBF24" />
    <circle cx="41" cy="9" r="0.8" fill="#38BDF8" />
  </svg>
);

/**
 * 8. REAL CURRICULUM VITAE (RESUME & CREDENTIALS) ICON
 * Realistic 3D resume document with 3D dog-ear folded corner,
 * applicant photo frame, structured text hierarchy, and verified seal.
 */
export const RealResumeDocIcon: React.FC<IconProps> = ({ size = 44, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-300 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="cv-paper-grad" x1="8" y1="4" x2="40" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#EFF6FF" />
      </linearGradient>
      <linearGradient id="cv-fold-grad" x1="28" y1="4" x2="38" y2="14" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#93C5FD" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
      <linearGradient id="cv-seal-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="50%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#CA8A04" />
      </linearGradient>
      <filter id="cv-doc-shadow" x="4" y="2" width="40" height="46" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#1E293B" floodOpacity="0.25" />
      </filter>
    </defs>

    {/* Main Sheet with Cut Corner for Fold */}
    <g filter="url(#cv-doc-shadow)">
      <path
        d="M9 7C9 5.34315 10.3431 4 12 4H28L39 15V41C39 42.6569 37.6569 44 36 44H12C10.3431 44 9 42.6569 9 41V7Z"
        fill="url(#cv-paper-grad)"
        stroke="#BFDBFE"
        strokeWidth="1.2"
      />
    </g>

    {/* 3D Folded Dog-Ear Corner */}
    <path
      d="M28 4V13C28 14.1046 28.8954 15 30 15H39L28 4Z"
      fill="url(#cv-fold-grad)"
      stroke="#93C5FD"
      strokeWidth="0.8"
    />

    {/* Top Header Color Stripe */}
    <rect x="13" y="9" width="13" height="3" rx="1.5" fill="#2563EB" />

    {/* Candidate Photo Placeholder & Name */}
    <circle cx="16.5" cy="18.5" r="3.5" fill="#3B82F6" />
    <circle cx="16.5" cy="17" r="1.5" fill="#DBEAFE" />
    <path d="M14 21C14 19.5 15 18.5 16.5 18.5C18 18.5 19 19.5 19 21" stroke="#DBEAFE" strokeWidth="0.8" />

    <rect x="22" y="16" width="13" height="2" rx="1" fill="#475569" />
    <rect x="22" y="19.5" width="8" height="1.8" rx="0.9" fill="#94A3B8" />

    {/* Section Divider */}
    <line x1="13" y1="24" x2="35" y2="24" stroke="#E2E8F0" strokeWidth="1" />

    {/* Structured Resume Bullet Items */}
    <circle cx="15" cy="28" r="1.5" fill="#3B82F6" />
    <rect x="18" y="27" width="17" height="2" rx="1" fill="#64748B" />

    <circle cx="15" cy="33" r="1.5" fill="#10B981" />
    <rect x="18" y="32" width="14" height="2" rx="1" fill="#64748B" />

    <circle cx="15" cy="38" r="1.5" fill="#8B5CF6" />
    <rect x="18" y="37" width="10" height="2" rx="1" fill="#64748B" />

    {/* Golden Verified Rosette Seal on Bottom Right */}
    <circle cx="33" cy="36" r="5" fill="url(#cv-seal-gold)" stroke="#FFFFFF" strokeWidth="1" />
    <path d="M31.5 36L32.8 37.3L34.8 34.8" stroke="#78350F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * 9. REAL GET IN TOUCH (DIRECT INQUIRIES) ICON
 * Realistic 3D postal mail envelope with glossy open flap,
 * soaring paper airplane / message card, and red notification badge.
 */
export const RealContactMailIcon: React.FC<IconProps> = ({ size = 44, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-300 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="mail-bg-interior" x1="8" y1="12" x2="40" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
      <linearGradient id="mail-pocket" x1="6" y1="18" x2="42" y2="42" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="mail-card" x1="12" y1="8" x2="36" y2="28" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#ECFDF5" />
      </linearGradient>
      <linearGradient id="mail-plane-blue" x1="18" y1="10" x2="34" y2="22" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <filter id="mail-shadow" x="3" y="8" width="42" height="36" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#064E3B" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Envelope Interior Wall */}
    <g filter="url(#mail-shadow)">
      <rect x="6" y="14" width="36" height="26" rx="5" fill="url(#mail-bg-interior)" stroke="#047857" strokeWidth="1.2" />
    </g>

    {/* Letter Sheet Emerging Upwards */}
    <rect x="11" y="7" width="26" height="22" rx="3" fill="url(#mail-card)" stroke="#A7F3D0" strokeWidth="1" />
    {/* Mini Letter Header & Lines */}
    <rect x="14" y="10" width="10" height="2.5" rx="1" fill="#059669" />
    <rect x="14" y="15" width="20" height="1.8" rx="0.9" fill="#94A3B8" />
    <rect x="14" y="18.5" width="16" height="1.8" rx="0.9" fill="#CBD5E1" />

    {/* Soaring Blue Paper Airplane */}
    <path
      d="M33 9L23 14L27 16L33 9Z"
      fill="url(#mail-plane-blue)"
    />
    <path
      d="M27 16L26.5 19L29 17L33 9L27 16Z"
      fill="#0369A1"
    />

    {/* Envelope Front Left & Right Fold Triangles */}
    <path
      d="M6 39.5L20 27L6 17V39.5Z"
      fill="#047857"
      opacity="0.9"
    />
    <path
      d="M42 39.5L28 27L42 17V39.5Z"
      fill="#065F46"
      opacity="0.9"
    />

    {/* Envelope Front Bottom Pocket Flap */}
    <path
      d="M6 40C6 40 18 28.5 24 28.5C30 28.5 42 40 42 40H6Z"
      fill="url(#mail-pocket)"
      stroke="#34D399"
      strokeWidth="1"
    />

    {/* Golden/Emerald Wax Seal or Notification Ping at Top Right */}
    <circle cx="38" cy="12" r="5" fill="#EF4444" stroke="#FFFFFF" strokeWidth="1.5" />
    {/* "@" mark on badge */}
    <text
      x="38"
      y="14.5"
      fill="#FFFFFF"
      fontSize="8"
      fontWeight="bold"
      textAnchor="middle"
      fontFamily="sans-serif"
    >
      @
    </text>
  </svg>
);
