import React from 'react';
import { SparkleStar } from './SparkleStar';
import { GoldenWireDecor } from './GoldenWireDecor';

interface CameoOvalFrameProps {
  imageSrc: string;
  imageAlt: string;
  className?: string;
  aspectClass?: string;
}

export const CameoOvalFrame: React.FC<CameoOvalFrameProps> = ({
  imageSrc,
  imageAlt,
  className = '',
  aspectClass = 'aspect-[3/4] max-w-[260px] sm:max-w-[290px]'
}) => {
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
      <div className={`relative z-10 w-full ${aspectClass} p-2 rounded-[130px] border border-[#d8b082]/70 shadow-sm bg-white/30 backdrop-blur-[2px] transition-transform duration-500 hover:scale-[1.02]`}>
        {/* Inner solid caramel/gold border containing image */}
        <div className="w-full h-full rounded-[120px] overflow-hidden border-[2.5px] border-[#b97a4e] shadow-md bg-stone-100 relative group">
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle soft gradient sheen */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
