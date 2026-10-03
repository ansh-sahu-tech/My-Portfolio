import React from 'react';

export interface AboutIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

/**
 * 1. REALISTIC 3D LOCATION PIN (University & Location)
 * Glossy crimson/coral teardrop pin with metallic bevel, inner cyan radar beacon,
 * and 3D cast drop shadow.
 */
export const RealisticMapPinIcon: React.FC<AboutIconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-300 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="rap-pin-grad" x1="6" y1="3" x2="30" y2="28" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F87171" />
        <stop offset="40%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#991B1B" />
      </linearGradient>
      <linearGradient id="rap-core-grad" x1="13" y1="9" x2="23" y2="19" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="70%" stopColor="#E0F2FE" />
        <stop offset="100%" stopColor="#38BDF8" />
      </linearGradient>
      <radialGradient id="rap-shadow-grad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#0F172A" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Cast Ground Shadow */}
    <ellipse cx="18" cy="32.5" rx="8" ry="2.5" fill="url(#rap-shadow-grad)" />

    {/* Main Pin Teardrop Body */}
    <path
      d="M18 31C18 31 7 20.8 7 13.5C7 7.42487 11.9249 2.5 18 2.5C24.0751 2.5 29 7.42487 29 13.5C29 20.8 18 31 18 31Z"
      fill="url(#rap-pin-grad)"
      stroke="#FECACA"
      strokeWidth="1.2"
    />

    {/* 3D Specular Highlight Crescent */}
    <path
      d="M12 7.5C13.5 5.5 15.6 4.5 18 4.5"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.8"
    />

    {/* Inner Radar Target Rim */}
    <circle cx="18" cy="13.5" r="5.5" fill="#7F1D1D" stroke="#FECACA" strokeWidth="0.8" />

    {/* Inner Glowing Core */}
    <circle cx="18" cy="13.5" r="3.8" fill="url(#rap-core-grad)" />
    <circle cx="17.2" cy="12.5" r="1.2" fill="#FFFFFF" />
  </svg>
);

/**
 * 2. REALISTIC 3D CALENDAR (Timeline & Dates)
 * Desktop flip calendar with crimson binder header, twin chrome spiral rings,
 * crisp white page pad with date badge, and golden corner mark.
 */
export const RealisticCalendarIcon: React.FC<AboutIconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-300 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="rap-cal-head" x1="4" y1="4" x2="32" y2="12" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#B91C1C" />
      </linearGradient>
      <linearGradient id="rap-cal-body" x1="4" y1="12" x2="32" y2="33" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>
      <linearGradient id="rap-ring-chrome" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F8FAFC" />
        <stop offset="50%" stopColor="#94A3B8" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>
    </defs>

    {/* Soft Back Pad Edge */}
    <rect x="5.5" y="6" width="25" height="26" rx="4.5" fill="#334155" opacity="0.4" />

    {/* Calendar Sheet Body */}
    <rect x="4.5" y="5" width="27" height="26" rx="4" fill="url(#rap-cal-body)" stroke="#CBD5E1" strokeWidth="1" />

    {/* Top Crimson Header Banner */}
    <path
      d="M4.5 9C4.5 6.79086 6.29086 5 8.5 5H27.5C29.7091 5 31.5 6.79086 31.5 9V12H4.5V9Z"
      fill="url(#rap-cal-head)"
    />
    <line x1="4.5" y1="12" x2="31.5" y2="12" stroke="#991B1B" strokeWidth="0.8" />

    {/* Twin Chrome Spiral Binder Rings */}
    <rect x="9.5" y="2.5" width="2.5" height="5.5" rx="1.25" fill="url(#rap-ring-chrome)" stroke="#1E293B" strokeWidth="0.6" />
    <rect x="24" y="2.5" width="2.5" height="5.5" rx="1.25" fill="url(#rap-ring-chrome)" stroke="#1E293B" strokeWidth="0.6" />

    {/* Calendar Number "27" (Graduation / Timeline Year) */}
    {/* Stylized '2' */}
    <path
      d="M12.5 17C12.5 15.5 13.8 14.5 15.2 14.5C16.8 14.5 17.8 15.6 17.8 17C17.8 18.8 15.2 20.2 12.5 22.2H18"
      stroke="#0284C7"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Stylized '7' */}
    <path
      d="M19.5 14.5H24.5L21.5 22.5"
      stroke="#22D3EE"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Bottom Activity Dots */}
    <circle cx="12" cy="26" r="1.2" fill="#10B981" />
    <circle cx="18" cy="26" r="1.2" fill="#3B82F6" />
    <circle cx="24" cy="26" r="1.2" fill="#F59E0B" />
  </svg>
);

/**
 * 3. REALISTIC 3D TARGET / BULLSEYE (Current Status & Focus)
 * Concentric high-contrast rings with ruby red bullseye, metallic edge,
 * and a glowing neon cyan precision dart striking the exact center.
 */
export const RealisticTargetIcon: React.FC<AboutIconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-300 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="rap-tgt-outer" x1="3" y1="3" x2="33" y2="33" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0B132B" />
      </linearGradient>
      <linearGradient id="rap-tgt-red" x1="10" y1="10" x2="26" y2="26" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#DC2626" />
      </linearGradient>
      <linearGradient id="rap-tgt-gold" x1="13" y1="13" x2="23" y2="23" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <linearGradient id="rap-dart-fin" x1="24" y1="6" x2="33" y2="15" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
    </defs>

    {/* Outer Shell Target Board */}
    <circle cx="18" cy="18" r="15" fill="url(#rap-tgt-outer)" stroke="#22D3EE" strokeWidth="1.2" />

    {/* Ring 1 - White Ring */}
    <circle cx="18" cy="18" r="11.5" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.8" />

    {/* Ring 2 - Red Ring */}
    <circle cx="18" cy="18" r="8" fill="url(#rap-tgt-red)" stroke="#B91C1C" strokeWidth="0.6" />

    {/* Bullseye Gold Core */}
    <circle cx="18" cy="18" r="4.2" fill="url(#rap-tgt-gold)" stroke="#78350F" strokeWidth="0.6" />
    <circle cx="18" cy="18" r="2" fill="#FFFFFF" />

    {/* Realistic Dart Striking Center from Top Right */}
    {/* Dart Shaft */}
    <path d="M18 18L27 9" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="18" cy="18" r="1.5" fill="#EF4444" />

    {/* Neon Flight Fins */}
    <path
      d="M27 9L31 6.5L30 11L27 9Z"
      fill="url(#rap-dart-fin)"
      stroke="#0284C7"
      strokeWidth="0.5"
    />
    <path
      d="M27 9L24.5 5L29 6L27 9Z"
      fill="url(#rap-dart-fin)"
      stroke="#0284C7"
      strokeWidth="0.5"
    />

    {/* Impact Sparkle */}
    <circle cx="16" cy="16" r="0.9" fill="#FDE047" />
    <circle cx="20" cy="20" r="0.7" fill="#38BDF8" />
  </svg>
);

/**
 * 4. REALISTIC 3D SMARTPHONE (Phone Contact)
 * Sleek midnight smartphone with titanium rim, glossy sapphire OLED screen,
 * glowing emerald phone receiver button, and dual cyan signal arcs.
 */
export const RealisticPhoneIcon: React.FC<AboutIconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-300 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="rap-phone-rim" x1="6" y1="2" x2="30" y2="34" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#475569" />
        <stop offset="50%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
      <linearGradient id="rap-phone-screen" x1="8" y1="4" x2="28" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0B132B" />
        <stop offset="100%" stopColor="#020617" />
      </linearGradient>
      <linearGradient id="rap-call-green" x1="12" y1="12" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#34D399" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>

    {/* Phone Body with Titanium Rim */}
    <rect x="7" y="3" width="22" height="30" rx="5" fill="url(#rap-phone-rim)" stroke="#64748B" strokeWidth="1" />

    {/* OLED Screen */}
    <rect x="9" y="5.5" width="18" height="25" rx="3" fill="url(#rap-phone-screen)" />

    {/* Diagonal Glass Sheen Reflection */}
    <path
      d="M9 7C14 5.5 22 5.5 27 7L13 29C10.5 29 9 27.5 9 25V7Z"
      fill="#FFFFFF"
      fillOpacity="0.06"
    />

    {/* Top Speaker Ear Notch */}
    <rect x="15" y="4.2" width="6" height="1" rx="0.5" fill="#94A3B8" />

    {/* Glowing Emerald Call Badge */}
    <circle cx="18" cy="18" r="6" fill="url(#rap-call-green)" stroke="#A7F3D0" strokeWidth="0.8" />

    {/* Modern Telephone Receiver Handset */}
    <path
      d="M15.5 15.5C15.5 15.5 16 15 16.8 15.8C17.3 16.3 16.9 16.8 16.9 16.8C17.5 18 18 18.5 19.2 19.1C19.2 19.1 19.7 18.7 20.2 19.2C21 20 20.5 20.5 20.5 20.5C19.5 21.5 18 21.5 16 19.5C14.5 18 14.5 16.5 15.5 15.5Z"
      fill="#FFFFFF"
    />

    {/* Radiating Sound Waves */}
    <path d="M24 14C25 15.5 25 18.5 24 20" stroke="#22D3EE" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M26.5 12C28 15 28 19 26.5 22" stroke="#22D3EE" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

    {/* Home Indicator Pill */}
    <rect x="15" y="28" width="6" height="1" rx="0.5" fill="#64748B" />
  </svg>
);

/**
 * 5. REALISTIC 3D EMAIL ENVELOPE (Email Contact)
 * Emerald & teal postal envelope with pristine white letter sheet emerging,
 * blue postage lines, glossy folds, and a golden wax seal.
 */
export const RealisticEmailIcon: React.FC<AboutIconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-300 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="rap-env-bg" x1="4" y1="10" x2="32" y2="30" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
      <linearGradient id="rap-env-front" x1="4" y1="14" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#059669" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="rap-env-letter" x1="8" y1="6" x2="28" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#F1F5F9" />
      </linearGradient>
      <linearGradient id="rap-env-seal" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
    </defs>

    {/* Back Interior Pocket */}
    <rect x="4" y="10" width="28" height="20" rx="3" fill="url(#rap-env-bg)" stroke="#047857" strokeWidth="1" />

    {/* Emerging Letter Card */}
    <rect x="7" y="5" width="22" height="16" rx="2" fill="url(#rap-env-letter)" stroke="#CBD5E1" strokeWidth="0.8" />
    <rect x="9.5" y="8" width="8" height="2" rx="0.5" fill="#0284C7" />
    <rect x="9.5" y="12" width="17" height="1.2" rx="0.4" fill="#94A3B8" />
    <rect x="9.5" y="15" width="13" height="1.2" rx="0.4" fill="#CBD5E1" />

    {/* Front Left Fold */}
    <path d="M4 29.5L14 20L4 12V29.5Z" fill="#047857" opacity="0.9" />

    {/* Front Right Fold */}
    <path d="M32 29.5L22 20L32 12V29.5Z" fill="#065F46" opacity="0.9" />

    {/* Front Bottom Pocket Flap */}
    <path
      d="M4 30C4 30 13 21 18 21C23 21 32 30 32 30H4Z"
      fill="url(#rap-env-front)"
      stroke="#34D399"
      strokeWidth="0.8"
    />

    {/* Golden Wax Seal */}
    <circle cx="18" cy="22" r="3.2" fill="url(#rap-env-seal)" stroke="#FFFFFF" strokeWidth="0.8" />
    <circle cx="18" cy="22" r="1.8" fill="#B45309" />
  </svg>
);

/**
 * 6. REALISTIC 3D LINKEDIN BADGE (LinkedIn Profile)
 * Royal blue rounded cuboid with 3D beveled edges, high-gloss glass sheen,
 * and crisp white embossed "in" typography.
 */
export const RealisticLinkedinIcon: React.FC<AboutIconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-300 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="rap-li-grad" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0A66C2" />
        <stop offset="50%" stopColor="#004182" />
        <stop offset="100%" stopColor="#002952" />
      </linearGradient>
      <linearGradient id="rap-li-rim" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
    </defs>

    {/* Main Beveled Cuboid */}
    <rect x="4" y="4" width="28" height="28" rx="7" fill="url(#rap-li-grad)" stroke="url(#rap-li-rim)" strokeWidth="1.2" />

    {/* Top Glass Specular Arc */}
    <path
      d="M5 11C5 7.68629 7.68629 5 11 5H25C28.3137 5 31 7.68629 31 11C23 11 13 13 5 11Z"
      fill="#FFFFFF"
      fillOpacity="0.25"
    />

    {/* 'i' Dot and Stem */}
    <circle cx="10.8" cy="11.8" r="1.8" fill="#FFFFFF" />
    <rect x="9.2" y="15" width="3.2" height="10" rx="1" fill="#FFFFFF" />

    {/* 'n' Shape */}
    <path
      d="M15.5 15H18.5V16.8C19.2 15.6 20.6 14.8 22.2 14.8C25.2 14.8 26.5 16.8 26.5 20V25H23.2V20.5C23.2 19 22.6 17.8 21 17.8C19.5 17.8 18.8 19 18.8 20.5V25H15.5V15Z"
      fill="#FFFFFF"
    />
  </svg>
);

/**
 * 7. REALISTIC 3D GITHUB BADGE (GitHub Profile)
 * Metallic space-gray shield with glowing cyan halo, brushed rim,
 * and high-fidelity Octocat silhouette.
 */
export const RealisticGithubBadgeIcon: React.FC<AboutIconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-300 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="rap-gh-shield" x1="4" y1="4" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="50%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0B132B" />
      </linearGradient>
      <linearGradient id="rap-gh-octo" x1="8" y1="8" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#CBD5E1" />
      </linearGradient>
    </defs>

    {/* 3D Round Shield */}
    <circle cx="18" cy="18" r="14" fill="url(#rap-gh-shield)" stroke="#38BDF8" strokeWidth="1.2" />
    <circle cx="18" cy="18" r="12.5" stroke="#475569" strokeWidth="0.8" fill="none" />

    {/* Octocat Silhouette */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 7C11.92 7 7 11.92 7 18C7 22.86 10.15 26.98 14.52 28.44C15.07 28.54 15.27 28.2 15.27 27.91C15.27 27.65 15.26 26.96 15.25 26.04C12.19 26.7 11.55 24.56 11.55 24.56C11.05 23.29 10.33 22.95 10.33 22.95C9.33 22.27 10.41 22.28 10.41 22.28C11.51 22.36 12.09 23.41 12.09 23.41C13.07 25.09 14.67 24.6 15.29 24.32C15.39 23.61 15.67 23.13 15.99 22.85C13.55 22.57 10.98 21.63 10.98 17.41C10.98 16.21 11.41 15.23 12.11 14.46C12 14.18 11.62 13.06 12.22 11.55C12.22 11.55 13.14 11.25 15.24 12.67C16.11 12.43 17.06 12.31 18 12.31C18.94 12.31 19.89 12.43 20.76 12.67C22.86 11.25 23.78 11.55 23.78 11.55C24.38 13.06 24 14.18 23.89 14.46C24.59 15.23 25.02 16.21 25.02 17.41C25.02 21.64 22.44 22.57 19.99 22.84C20.38 23.18 20.73 23.85 20.73 24.88C20.73 26.35 20.72 27.53 20.72 27.89C20.72 28.18 20.92 28.53 21.48 28.42C25.85 26.96 29 22.84 29 18C29 11.92 24.08 7 18 7Z"
      fill="url(#rap-gh-octo)"
    />
  </svg>
);

/**
 * 8. REALISTIC 3D GRADUATION CAP (Academic Studies & Major)
 * 3D isometric mortarboard with deep obsidian silk luster, golden silk tassel,
 * and rolled degree scroll tied with red ribbon.
 */
export const RealisticGradCapIcon: React.FC<AboutIconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-300 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="rap-cap-top" x1="4" y1="10" x2="32" y2="10" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="50%" stopColor="#0F172A" />
        <stop offset="100%" stopColor="#020617" />
      </linearGradient>
      <linearGradient id="rap-cap-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="50%" stopColor="#EAB308" />
        <stop offset="100%" stopColor="#CA8A04" />
      </linearGradient>
    </defs>

    {/* Rolled Diploma Scroll in Background */}
    <rect x="7" y="27" width="22" height="5.5" rx="2.5" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="0.8" />
    <rect x="16" y="26.5" width="3.5" height="6.5" rx="0.8" fill="#DC2626" />

    {/* Skullcap Underneath */}
    <path d="M12 14C12 14 12 20 18 20C24 20 24 14 24 14" fill="#1E293B" stroke="#334155" strokeWidth="1" />

    {/* Diamond-shaped Mortarboard Top (3D Isometric) */}
    <path d="M18 4L32 10.5L18 17L4 10.5L18 4Z" fill="url(#rap-cap-top)" stroke="#60A5FA" strokeWidth="1" />

    {/* Mortarboard Rim Thickness */}
    <path d="M4 10.5L18 17L32 10.5V12L18 18.5L4 12V10.5Z" fill="#090D16" stroke="#1E293B" strokeWidth="0.6" />

    {/* Mortarboard Button */}
    <ellipse cx="18" cy="10.5" rx="2" ry="1.2" fill="url(#rap-cap-gold)" />

    {/* Draping Golden Silk Tassel */}
    <path d="M18 10.5C21 11.5 25 12.5 26.5 16C27 18 27.5 20 27.5 23" stroke="url(#rap-cap-gold)" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="26" y="23" width="3" height="4.5" rx="0.8" fill="url(#rap-cap-gold)" stroke="#A16207" strokeWidth="0.4" />
  </svg>
);

/**
 * 9. REALISTIC 3D COMPONENT ARCHITECTURE & APIS (Focus Area 4)
 * Multi-tiered floating isometric glass slabs with glowing cyan/indigo logic buses
 * and interactive connector nodes.
 */
export const RealisticLayersIcon: React.FC<AboutIconProps> = ({ size = 28, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-300 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="rap-lay-top" x1="8" y1="8" x2="32" y2="18" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="rap-lay-mid" x1="8" y1="16" x2="32" y2="26" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#818CF8" />
        <stop offset="100%" stopColor="#4F46E5" />
      </linearGradient>
      <linearGradient id="rap-lay-bot" x1="8" y1="24" x2="32" y2="34" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#C084FC" />
        <stop offset="100%" stopColor="#7E22CE" />
      </linearGradient>
    </defs>

    {/* Bottom Slab - Purple */}
    <path d="M7 29L20 35L33 29V32L20 38L7 32V29Z" fill="#581C87" />
    <path d="M20 27L33 21L20 15L7 21L20 27Z" transform="translate(0, 8)" fill="url(#rap-lay-bot)" stroke="#E9D5FF" strokeWidth="0.6" />

    {/* Middle Slab - Blue */}
    <path d="M7 22L20 28L33 22V25L20 31L7 25V22Z" fill="#312E81" />
    <path d="M20 25L33 19L20 13L7 19L20 25Z" fill="url(#rap-lay-mid)" stroke="#C7D2FE" strokeWidth="0.6" />

    {/* Top Slab - Cyan with Glyphs */}
    <path d="M7 15L20 21L33 15V18L20 24L7 18V15Z" fill="#075985" />
    <path d="M20 18L33 12L20 6L7 12L20 18Z" fill="url(#rap-lay-top)" stroke="#BAE6FD" strokeWidth="0.8" />

    {/* Code Brackets on Top Face */}
    <path d="M16 11L14 12L16 13" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 11L26 12L24 13" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 10L19 14" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />

    {/* Glowing Nodes */}
    <circle cx="5" cy="15" r="1" fill="#38BDF8" />
    <circle cx="35" cy="13" r="1.2" fill="#818CF8" />
  </svg>
);

/**
 * 10. REALISTIC 3D COMPUTER VISION (Focus Area 3)
 * Camera aperture optics with targeting reticle, optical reflection,
 * and scanning horizon beam.
 */
export const RealisticVisionLensIcon: React.FC<AboutIconProps> = ({ size = 28, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-300 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="rap-vis-ring" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#334155" />
        <stop offset="50%" stopColor="#0F172A" />
        <stop offset="100%" stopColor="#020617" />
      </linearGradient>
      <linearGradient id="rap-vis-glass" x1="10" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0891B2" />
        <stop offset="50%" stopColor="#0E7490" />
        <stop offset="100%" stopColor="#042F2E" />
      </linearGradient>
    </defs>

    {/* Outer Camera Barrel */}
    <circle cx="20" cy="20" r="17" fill="url(#rap-vis-ring)" stroke="#22D3EE" strokeWidth="1.2" />
    <circle cx="20" cy="20" r="14.5" stroke="#475569" strokeWidth="0.8" fill="none" strokeDasharray="3 2" />

    {/* Coated Optical Lens Element */}
    <circle cx="20" cy="20" r="12" fill="url(#rap-vis-glass)" stroke="#38BDF8" strokeWidth="1" />

    {/* Aperture Blades */}
    <path d="M15 13L24 16M25 15L25 25M24 25L15 23M15 24L15 14" stroke="#083344" strokeWidth="1.5" strokeLinecap="round" />

    {/* Inner Sensor Eye */}
    <circle cx="20" cy="20" r="4.5" fill="#082F49" stroke="#67E8F9" strokeWidth="1" />
    <circle cx="20" cy="20" r="2" fill="#22D3EE" />

    {/* Crosshair Target Reticles */}
    <line x1="20" y1="7" x2="20" y2="10" stroke="#F43F5E" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="20" y1="30" x2="20" y2="33" stroke="#F43F5E" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="7" y1="20" x2="10" y2="20" stroke="#F43F5E" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="30" y1="20" x2="33" y2="20" stroke="#F43F5E" strokeWidth="1.5" strokeLinecap="round" />

    {/* Specular Glare Arc */}
    <path d="M14 11C16 9.5 19 9 22 9.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
  </svg>
);

/**
 * 11. REALISTIC 3D CLEAN CODE PRISM (Engineering Principle 1)
 * Polished diamond prism in electric cyan and sapphire blue with glowing syntax facets.
 */
export const RealisticPragmaticCodeIcon: React.FC<AboutIconProps> = ({ size = 26, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-300 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="rap-prism-top" x1="6" y1="6" x2="30" y2="14" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="rap-prism-bot" x1="6" y1="14" x2="30" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0284C7" />
        <stop offset="50%" stopColor="#1D4ED8" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
    </defs>

    {/* Gem Top Crown */}
    <path d="M11 6H25L31 14H5L11 6Z" fill="url(#rap-prism-top)" stroke="#7DD3FC" strokeWidth="0.8" />

    {/* Gem Bottom Pavilion */}
    <path d="M5 14L18 31L31 14H5Z" fill="url(#rap-prism-bot)" stroke="#38BDF8" strokeWidth="0.8" />

    {/* Internal Facet Lines */}
    <path d="M11 6L18 14M25 6L18 14" stroke="#BAE6FD" strokeWidth="0.8" />
    <path d="M18 14L18 31" stroke="#38BDF8" strokeWidth="1" />
    <path d="M11 14L18 31M25 14L18 31" stroke="#1E40AF" strokeWidth="0.8" />

    {/* Sparkling Light Glint */}
    <circle cx="11" cy="6" r="1.5" fill="#FFFFFF" />
    <circle cx="28" cy="17" r="1" fill="#FDE047" />
  </svg>
);

/**
 * 12. REALISTIC 3D RESPONSIVE DEVICES (Engineering Principle 2)
 * Sleek tablet & smartphone duo with glowing glass displays and responsive UI blocks.
 */
export const RealisticResponsiveDuoIcon: React.FC<AboutIconProps> = ({ size = 26, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-300 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="rap-tab-grad" x1="3" y1="5" x2="27" y2="27" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
      <linearGradient id="rap-mob-grad" x1="20" y1="12" x2="33" y2="33" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0284C7" />
        <stop offset="100%" stopColor="#0369A1" />
      </linearGradient>
    </defs>

    {/* Tablet in Landscape */}
    <rect x="3" y="6" width="24" height="20" rx="3.5" fill="url(#rap-tab-grad)" stroke="#475569" strokeWidth="1" />
    <rect x="5.5" y="8.5" width="19" height="15" rx="2" fill="#0B1329" />
    {/* Tablet Mock Layout */}
    <rect x="7" y="10.5" width="5" height="3" rx="0.5" fill="#38BDF8" />
    <rect x="13.5" y="10.5" width="9.5" height="1.5" rx="0.5" fill="#64748B" />
    <rect x="7" y="15.5" width="7.5" height="6" rx="0.8" fill="#1E293B" stroke="#334155" strokeWidth="0.5" />
    <rect x="16" y="15.5" width="7" height="6" rx="0.8" fill="#1E293B" stroke="#334155" strokeWidth="0.5" />

    {/* Smartphone in Foreground */}
    <rect x="19" y="13" width="14" height="20" rx="3" fill="url(#rap-mob-grad)" stroke="#38BDF8" strokeWidth="1" />
    <rect x="20.8" y="15" width="10.4" height="15.5" rx="1.5" fill="#020617" />
    {/* Smartphone Mock Layout */}
    <rect x="22" y="16.5" width="8" height="2" rx="0.5" fill="#22D3EE" />
    <rect x="22" y="20" width="8" height="4.5" rx="0.5" fill="#1E293B" stroke="#0284C7" strokeWidth="0.5" />
    <circle cx="26" cy="31.8" r="0.8" fill="#64748B" />
  </svg>
);

/**
 * 13. REALISTIC 3D CONTINUOUS GROWTH ROCKET (Engineering Principle 3)
 * Dynamic space rocket launching upward with dual-tone exhaust plume and trajectory stars.
 */
export const RealisticContinuousGrowthIcon: React.FC<AboutIconProps> = ({ size = 26, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-300 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="rap-grow-flame" x1="12" y1="22" x2="4" y2="34" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="50%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#B91C1C" />
      </linearGradient>
      <linearGradient id="rap-grow-body" x1="12" y1="12" x2="30" y2="6" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F8FAFC" />
        <stop offset="100%" stopColor="#CBD5E1" />
      </linearGradient>
    </defs>

    {/* Speed Lines */}
    <path d="M26 4L32 2" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M33 11L35 9" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round" />

    {/* Thruster Flame Outer */}
    <path d="M12 21C11 25 8 30 5 33C8 30 13 27 16 26C14.5 25 13.5 23.5 12 21Z" fill="url(#rap-grow-flame)" />
    <path d="M12 23C11 25.5 9 28.5 7 30C9 28 12.5 26.5 14 25.5C13 24.5 12.5 24 12 23Z" fill="#FEF08A" />

    {/* Delta Wings */}
    <path d="M12 19L7 22L13 23L12 19Z" fill="#2563EB" />
    <path d="M18 13L21 8L22 14L18 13Z" fill="#2563EB" />

    {/* Rocket Fuselage */}
    <path d="M30 6C25 7 18 12 14 17L13 20L17 23L20 22C25 18 30 11 30 6Z" fill="url(#rap-grow-body)" stroke="#94A3B8" strokeWidth="0.8" />
    <path d="M30 6C28.5 7 27 8 26 9L27 10C28 9 29.5 7.5 30 6Z" fill="#EF4444" />

    {/* Cockpit Window */}
    <circle cx="22" cy="14" r="2.5" fill="#0284C7" stroke="#38BDF8" strokeWidth="0.8" />
    <circle cx="21.5" cy="13.5" r="0.8" fill="#FFFFFF" />

    {/* Stars */}
    <circle cx="31" cy="18" r="1" fill="#FBBF24" />
    <circle cx="7" cy="15" r="0.8" fill="#38BDF8" />
  </svg>
);

/**
 * 14. REALISTIC 3D FORWARD ARROW (Get in Touch Button)
 * Aerodynamic 3D forward chevron with cyan/blue gradient and motion glow.
 */
export const RealisticArrowRightIcon: React.FC<AboutIconProps> = ({ size = 16, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-200 group-hover:translate-x-0.5 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="rap-arr-grad" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#67E8F9" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="#0E7490" fillOpacity="0.35" stroke="#22D3EE" strokeWidth="1" />
    <path
      d="M10 8L14 12L10 16"
      stroke="url(#rap-arr-grad)"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * 15. REALISTIC 3D DOWNLOAD RESUME ICON (Download Resume Button)
 * 3D document sheet with folded corner and downward metallic cyan arrow.
 */
export const RealisticDownloadDocIcon: React.FC<AboutIconProps> = ({ size = 16, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-200 group-hover:translate-y-0.5 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="rap-dl-grad" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>
      <linearGradient id="rap-dl-arr" x1="8" y1="6" x2="16" y2="16" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
    </defs>

    {/* Document Backing */}
    <path
      d="M5 4C5 2.89543 5.89543 2 7 2H14L19 7V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V4Z"
      fill="url(#rap-dl-grad)"
      stroke="#CBD5E1"
      strokeWidth="1"
    />
    <path d="M14 2V7H19L14 2Z" fill="#93C5FD" />

    {/* Downward Arrow */}
    <path
      d="M12 9V15M12 15L9.5 12.5M12 15L14.5 12.5"
      stroke="url(#rap-dl-arr)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line x1="8.5" y1="18" x2="15.5" y2="18" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/**
 * 16. REALISTIC 3D VERIFIED BADGE (Checkmark / Core Values)
 * Emerald/cyan 3D rosette badge with white checkmark.
 */
export const RealisticCheckBadgeIcon: React.FC<AboutIconProps> = ({ size = 16, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-sm transition-transform duration-200 ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="rap-chk-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="url(#rap-chk-grad)" stroke="#34D399" strokeWidth="1.2" />
    <path
      d="M8 12L11 15L16 9"
      stroke="#FFFFFF"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
