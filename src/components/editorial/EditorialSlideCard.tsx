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
  sparklePosition = 'title-right'
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full max-w-5xl mx-auto rounded-3xl sm:rounded-[32px] overflow-hidden bg-[#fcfaf6] border border-[#e8ddcc] shadow-[0_16px_50px_-10px_rgba(6,36,38,0.35)] transition-all duration-300 hover:shadow-[0_22px_60px_-10px_rgba(6,36,38,0.45)] ${className}`}
    >
      {/* Delicate outer card frame accents */}
      <div className="absolute top-3 left-4 z-20 pointer-events-none">
        <SparkleStar size={12} color="#c2744d" />
      </div>
      <div className="absolute bottom-3 right-6 z-20 pointer-events-none">
        <SparkleStar size={11} color="#d4ad7c" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px] sm:min-h-[500px]">
        {/* Left Column: Cameo Oval Frame + Marble Texture */}
        <div className="md:col-span-5 editorial-marble-panel border-b md:border-b-0 md:border-r border-[#ebdcc8] flex items-center justify-center p-6 sm:p-8 relative overflow-hidden">
          {/* Subtle marble vein overlay */}
          <div 
            aria-hidden="true" 
            className="absolute inset-0 opacity-40 bg-[radial-gradient(#d6af80_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" 
          />
          
          <CameoOvalFrame
            imageSrc={imageSrc}
            imageAlt={imageAlt}
          />
        </div>

        {/* Right Column: Editorial Typography & Content */}
        <div className="md:col-span-7 flex flex-col justify-between p-6 sm:p-8 lg:p-10 bg-[#fbf7f1] relative">
          <div>
            {/* Top Navigation */}
            <DeckCardHeader activeSection={activeSection} />

            {/* Category / Super-title if any */}
            {categoryTitle && (
              <div className="mt-4 sm:mt-5 text-[11px] font-bold uppercase tracking-widest text-[#a8653e] flex items-center gap-1.5">
                <SparkleStar size={10} color="#c2744d" />
                <span>{categoryTitle}</span>
              </div>
            )}

            {/* Main Headline Stack (Two-tone Rust + Solid Black) */}
            <div className={`mt-3 sm:mt-4 space-y-0.5 relative inline-block`}>
              <h2 className="font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-[#b85b2c]">
                {titleRust}
              </h2>
              {titleBlack && (
                <h3 className="font-display font-black uppercase tracking-tight text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-[#18181b]">
                  {titleBlack}
                </h3>
              )}

              {/* Sparkle Accent near the title */}
              {sparklePosition === 'title-right' && (
                <div className="absolute -top-3 -right-8 pointer-events-none">
                  <SparkleStar size={22} color="#c2744d" />
                </div>
              )}
            </div>

            {/* Main Content Area */}
            <div className="mt-5 text-sm sm:text-[14.5px] text-stone-700 leading-relaxed font-sans">
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
