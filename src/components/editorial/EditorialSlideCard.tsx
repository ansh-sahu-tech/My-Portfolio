import React from 'react';
import { motion } from 'framer-motion';
import { CameoOvalFrame } from './CameoOvalFrame';
import { DeckCardHeader } from './DeckCardHeader';
import { DeckCardFooter } from './DeckCardFooter';
import { SparkleStar } from './SparkleStar';

interface EditorialSlideCardProps {
  id?: string;
  imageSrc: string;
  imageAlt: string;
  categoryTitle?: string;
  titleRust: string;
  titleBlack?: string;
  activeSection?: string;
  children: React.ReactNode;
  className?: string;
  signature?: string;
  sparklePosition?: 'title-right' | 'title-left' | 'top-right';
  frameShape?: 'oval' | 'architectural' | 'landscape';
  aspectClass?: string;
  imageClassName?: string;
  caption?: string;
  badgeText?: string;
  subBadgeText?: string;
  tagText?: string;
}

export const EditorialSlideCard: React.FC<EditorialSlideCardProps> = ({
  id,
  imageSrc,
  imageAlt,
  categoryTitle,
  titleRust,
  titleBlack,
  activeSection,
  children,
  className = '',
  signature = 'By Ansh Sahu',
  sparklePosition = 'title-right',
  frameShape = 'architectural',
  aspectClass = 'aspect-[4/3]',
  imageClassName,
  caption,
  badgeText,
  subBadgeText,
  tagText
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full max-w-5xl mx-auto rounded-3xl sm:rounded-[32px] overflow-hidden bg-[#121923] border border-[#263342] shadow-[0_16px_50px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[0_22px_60px_-10px_rgba(0,0,0,0.7)] ${className}`}
    >
      {/* Delicate outer card frame accents */}
      <div className="absolute top-3 left-4 z-20 pointer-events-none">
        <SparkleStar size={12} color="#22D3EE" />
      </div>
      <div className="absolute bottom-3 right-6 z-20 pointer-events-none">
        <SparkleStar size={11} color="#22D3EE" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[440px] sm:min-h-[500px]">
        {/* Left Column: Cameo Oval Frame + Marble Texture */}
        <div className="md:col-span-5 editorial-marble-panel border-b md:border-b-0 md:border-r border-[#263342] flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
          {/* Subtle marble vein overlay */}
          <div 
            aria-hidden="true" 
            className="absolute inset-0 opacity-40 bg-[radial-gradient(#263342_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" 
          />
          
          <CameoOvalFrame
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            frameShape={frameShape}
            aspectClass={aspectClass}
            imageClassName={imageClassName}
            caption={caption}
            badgeText={badgeText}
            subBadgeText={subBadgeText}
            tagText={tagText}
          />
        </div>

        {/* Right Column: Editorial Typography & Content */}
        <div className="md:col-span-7 flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10 bg-[#121923] relative min-w-0">
          <div>
            {/* Top Navigation */}
            <DeckCardHeader activeSection={activeSection} />

            {/* Category / Super-title if any */}
            {categoryTitle && (
              <div className="mt-4 sm:mt-5 text-[11px] font-bold uppercase tracking-widest text-[#22D3EE] flex items-center gap-1.5 flex-wrap">
                <SparkleStar size={10} color="#22D3EE" />
                <span>{categoryTitle}</span>
              </div>
            )}

            {/* Main Headline Stack (Two-tone Cyan + Primary Text) */}
            <div className={`mt-3 sm:mt-4 space-y-0.5 relative inline-block max-w-full`}>
              <h2 className="font-display font-bold uppercase tracking-tight text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-[#22D3EE] break-words">
                {titleRust}
              </h2>
              {titleBlack && (
                <h3 className="font-display font-black uppercase tracking-tight text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-[#F8FAFC] break-words">
                  {titleBlack}
                </h3>
              )}

              {/* Sparkle Accent near the title */}
              {sparklePosition === 'title-right' && (
                <div className="absolute -top-3 right-0 sm:-right-8 pointer-events-none">
                  <SparkleStar size={20} color="#22D3EE" />
                </div>
              )}
            </div>

            {/* Main Content Area */}
            <div className="mt-5 text-sm sm:text-[14.5px] text-[#94A3B8] leading-relaxed font-sans min-w-0">
              {children}
            </div>
          </div>

          {/* Footer with signature */}
          <DeckCardFooter authorName={signature} />
        </div>
      </div>
    </motion.section>
  );
};
