import React from 'react';
import { MapPin } from 'lucide-react';
import { GoldenWireDecor } from './GoldenWireDecor';

export interface CameoOvalFrameProps {
  imageSrc: string;
  imageAlt: string;
  className?: string;
  aspectClass?: string;
  frameShape?: 'oval' | 'architectural' | 'landscape';
  imageClassName?: string;
  caption?: string;
  badgeText?: string;
  subBadgeText?: string;
  tagText?: string;
}

export const CameoOvalFrame: React.FC<CameoOvalFrameProps> = ({
  imageSrc,
  imageAlt,
  className = '',
  aspectClass = 'aspect-[4/3]',
  frameShape = 'architectural',
  imageClassName = '',
  caption,
  badgeText,
  subBadgeText,
  tagText
}) => {
  if (frameShape === 'architectural' || frameShape === 'landscape') {
    const currentAspect = aspectClass || 'aspect-[4/3]';
    return (
      <div className={`relative flex flex-col items-center justify-center p-2 sm:p-5 w-full max-w-[290px] xs:max-w-[340px] sm:max-w-[370px] mx-auto ${className}`}>
        {/* Decorative Golden Wire Curves */}
        <div className="absolute -bottom-6 -left-3 sm:-left-6 w-36 sm:w-56 h-28 sm:h-32 z-0 overflow-hidden sm:overflow-visible pointer-events-none opacity-85">
          <GoldenWireDecor />
        </div>



        {/* Outer concentric architectural frame */}
        <div className="relative z-10 w-full p-2.5 sm:p-3 rounded-2xl sm:rounded-[26px] border border-[#263342] shadow-[0_10px_35px_-5px_rgba(0,0,0,0.5)] bg-[#1A2430]/80 backdrop-blur-[3px] transition-all duration-500 hover:scale-[1.02] hover:border-[#22D3EE]/50 hover:shadow-[0_14px_40px_-5px_rgba(0,0,0,0.6)]">
          {/* Architectural plaque header */}
          <div className="flex items-center justify-between px-2 pb-2 text-[10px] font-bold uppercase tracking-wider text-[#22D3EE]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
              {badgeText || 'Philosophy & Future'}
            </span>
            {subBadgeText && (
              <span className="text-[#94A3B8] font-serif italic lowercase text-[11px]">{subBadgeText}</span>
            )}
          </div>

          {/* Inner solid border containing image */}
          <div className={`w-full ${currentAspect} rounded-xl sm:rounded-[18px] overflow-hidden border-[2px] border-[#263342] shadow-md bg-[#0B0F14] relative group`}>
            <img
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('ansh-profile')) {
                  target.src = '/ai-driver-awareness.png';
                }
              }}
              className={`w-full h-full object-cover ${imageClassName || 'object-center'} filter contrast-[1.02] brightness-[1.01] transition-transform duration-700 ease-out group-hover:scale-105`}
            />
            {/* Subtle soft gradient sheen only for non-profile graphics */}
            {!imageSrc.includes('ansh-profile') && (
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/40 via-transparent to-transparent pointer-events-none" />
            )}
          </div>

          {/* Bottom Location Caption Tag */}
          {caption && (
            <div className="mt-2.5 pt-2 border-t border-[#263342] flex items-center justify-between text-[11px] text-[#94A3B8] font-medium px-1">
              <div className="flex items-center gap-1.5 text-[#22D3EE] font-semibold text-xs truncate mr-2">
                <MapPin className="w-3.5 h-3.5 text-[#22D3EE] shrink-0" />
                <span className="truncate">{caption}</span>
              </div>
              {tagText && (
                <span className="text-[10px] text-[#94A3B8] font-mono font-medium shrink-0">{tagText}</span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  const ovalAspect = aspectClass || 'aspect-[3/4] max-w-[240px] sm:max-w-[290px]';
  return (
    <div className={`relative flex items-center justify-center p-3 sm:p-6 w-full ${className}`}>
      {/* Decorative Golden Wire Curves at bottom */}
      <div className="absolute -bottom-8 -left-4 sm:-left-8 w-40 sm:w-64 h-32 sm:h-36 z-0 overflow-hidden sm:overflow-visible pointer-events-none">
        <GoldenWireDecor />
      </div>



      {/* Outer concentric thin ring */}
      <div className={`relative z-10 w-full ${ovalAspect} p-2 rounded-[130px] border border-[#263342] shadow-sm bg-[#1A2430]/40 backdrop-blur-[2px] transition-transform duration-500 hover:scale-[1.02]`}>
        {/* Inner solid border containing image */}
        <div className="w-full h-full rounded-[120px] overflow-hidden border-[2.5px] border-[#22D3EE] shadow-md bg-[#0B0F14] relative group">
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className={`w-full h-full object-cover filter contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-105 ${imageClassName || 'object-center'}`}
          />
          {/* Subtle soft gradient sheen only for non-profile graphics */}
          {!imageSrc.includes('ansh-profile') && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/30 via-transparent to-transparent pointer-events-none" />
          )}
        </div>
      </div>
    </div>
  );
};
