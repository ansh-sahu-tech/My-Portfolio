import React from 'react';
import { MapPin } from 'lucide-react';
import { SparkleStar } from './SparkleStar';
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
  aspectClass,
  frameShape = 'oval',
  imageClassName = '',
  caption,
  badgeText,
  subBadgeText,
  tagText
}) => {
  if (frameShape === 'architectural' || frameShape === 'landscape') {
    const currentAspect = aspectClass || 'aspect-[4/3]';
    return (
      <div className={`relative flex flex-col items-center justify-center p-3 sm:p-5 w-full max-w-[340px] sm:max-w-[370px] mx-auto ${className}`}>
        {/* Decorative Golden Wire Curves */}
        <div className="absolute -bottom-6 -left-6 w-44 sm:w-56 h-32 z-0 overflow-visible pointer-events-none opacity-85">
          <GoldenWireDecor />
        </div>

        {/* Floating Sparkles around the frame */}
        <div className="absolute top-2 left-2 z-20">
          <SparkleStar size={16} color="#c2744d" />
        </div>
        <div className="absolute bottom-6 right-2 z-20">
          <SparkleStar size={14} color="#d4ad7c" />
        </div>
        <div className="absolute -top-1 right-6 z-20">
          <SparkleStar size={12} color="#c2744d" />
        </div>

        {/* Outer concentric architectural gold frame */}
        <div className="relative z-10 w-full p-2.5 sm:p-3 rounded-2xl sm:rounded-[26px] border border-[#d8b082]/80 shadow-[0_10px_35px_-5px_rgba(185,122,78,0.22)] bg-white/60 backdrop-blur-[3px] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_14px_40px_-5px_rgba(185,122,78,0.3)]">
          {/* Architectural plaque header */}
          <div className="flex items-center justify-between px-2 pb-2 text-[10px] font-bold uppercase tracking-wider text-[#9f572f]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c2744d]" />
              {badgeText || 'Philosophy & Future'}
            </span>
            {subBadgeText && (
              <span className="text-stone-400 font-serif italic lowercase text-[11px]">{subBadgeText}</span>
            )}
          </div>

          {/* Inner solid caramel/gold border containing image */}
          <div className={`w-full ${currentAspect} rounded-xl sm:rounded-[18px] overflow-hidden border-[2px] border-[#b97a4e] shadow-md bg-stone-900/10 relative group`}>
            <img
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              className={`w-full h-full object-cover object-center filter contrast-[1.04] brightness-[1.01] transition-transform duration-700 ease-out group-hover:scale-105 ${imageClassName}`}
            />
            {/* Subtle soft gradient sheen */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/25 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Bottom Location Caption Tag */}
          {caption && (
            <div className="mt-2.5 pt-2 border-t border-[#ebdcc8] flex items-center justify-between text-[11px] text-stone-600 font-medium px-1">
              <div className="flex items-center gap-1.5 text-[#8e4827] font-semibold text-xs">
                <MapPin className="w-3.5 h-3.5 text-[#b85b2c] shrink-0" />
                <span>{caption}</span>
              </div>
              {tagText && (
                <span className="text-[10px] text-stone-400 font-mono font-medium">{tagText}</span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  const ovalAspect = aspectClass || 'aspect-[3/4] max-w-[260px] sm:max-w-[290px]';
  return (
    <div className={`relative flex items-center justify-center p-4 sm:p-6 w-full ${className}`}>
      {/* Decorative Golden Wire Curves at bottom */}
      <div className="absolute -bottom-8 -left-8 w-48 sm:w-64 h-36 z-0 overflow-visible pointer-events-none">
        <GoldenWireDecor />
      </div>

      {/* Floating Sparkles around the frame */}
      <div className="absolute top-4 left-3 z-20">
        <SparkleStar size={16} color="#c2744d" />
      </div>
      <div className="absolute bottom-12 right-2 z-20">
        <SparkleStar size={14} color="#d4ad7c" />
      </div>
      <div className="absolute -top-1 right-8 z-20">
        <SparkleStar size={12} color="#c2744d" />
      </div>

      {/* Outer concentric thin gold ring */}
      <div className={`relative z-10 w-full ${ovalAspect} p-2 rounded-[130px] border border-[#d8b082]/70 shadow-sm bg-white/30 backdrop-blur-[2px] transition-transform duration-500 hover:scale-[1.02]`}>
        {/* Inner solid caramel/gold border containing image */}
        <div className="w-full h-full rounded-[120px] overflow-hidden border-[2.5px] border-[#b97a4e] shadow-md bg-stone-100 relative group">
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className={`w-full h-full object-cover filter contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-105 ${imageClassName || 'object-top'}`}
          />
          {/* Subtle soft gradient sheen */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
