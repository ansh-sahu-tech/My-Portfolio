import React from 'react';
import { SparkleStar } from './SparkleStar';
import { GoldenWireDecor } from './GoldenWireDecor';

interface DeckGridCollageProps {
  onSelectCard: (cardId: string) => void;
}

export const DeckGridCollage: React.FC<DeckGridCollageProps> = ({ onSelectCard }) => {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 sm:space-y-8 select-none">
      {/* 1. Large Top Hero Slide Card */}
      <div
        onClick={() => onSelectCard('hero')}
        className="cursor-pointer group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#121923] border border-[#263342] shadow-[0_12px_36px_-6px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[1.01] hover:border-[#22D3EE]/50 hover:shadow-[0_20px_45px_-6px_rgba(0,0,0,0.7)]"
      >
        <div className="grid grid-cols-12 min-h-[200px] sm:min-h-[280px]">
          {/* Left Cameo Frame */}
          <div className="col-span-5 min-w-0 editorial-marble-panel border-r border-[#263342] flex items-center justify-center p-2.5 sm:p-4 relative overflow-hidden">
            <div className="absolute -bottom-4 -left-4 w-32 h-24 pointer-events-none opacity-60">
              <GoldenWireDecor />
            </div>
            <div className="absolute top-2 left-3">
              <SparkleStar size={11} color="#22D3EE" />
            </div>
            <div className="relative z-10 w-24 xs:w-28 sm:w-36 aspect-[4/3] p-1 sm:p-1.5 rounded-2xl border border-[#263342] bg-[#1A2430]/60 shadow-xs">
              <div className="w-full h-full rounded-xl overflow-hidden border-[2px] border-[#263342] bg-[#0B0F14]">
                <img
                  src="/ansh-profile.jpg"
                  alt="Ansh Portrait"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Editorial Typography */}
          <div className="col-span-7 min-w-0 p-3 sm:p-6 lg:p-8 flex flex-col justify-between">
            <div className="flex flex-wrap items-center justify-end gap-1.5 sm:gap-3 text-[8px] xs:text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#94A3B8]">
              <span>Home</span>
              <span>Introduction</span>
              <span>Education</span>
              <span>Portfolio</span>
            </div>

            <div className="space-y-0.5 relative my-2">
              <h3 className="font-display font-bold uppercase tracking-tight text-xl xs:text-2xl sm:text-4xl lg:text-5xl text-[#22D3EE] leading-none break-words">
                CREATIVE
              </h3>
              <h3 className="font-display font-black uppercase tracking-tight text-xl xs:text-2xl sm:text-4xl lg:text-5xl text-[#F8FAFC] leading-none break-words">
                PORTFOLIO
              </h3>
              <div className="absolute -top-3 right-2 sm:right-4">
                <SparkleStar size={18} color="#22D3EE" />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-xs pt-2 border-t border-[#263342]">
              <span className="text-[9px] xs:text-[10px] text-[#94A3B8] uppercase tracking-widest font-semibold truncate mr-1">
                Software Engineer • ansh.developer
              </span>
              <span className="font-serif italic text-[#F8FAFC] font-medium shrink-0">
                By Ansh Sahu
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 8 Cards in 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Card 2: ABOUT ME */}
        <div
          onClick={() => onSelectCard('about')}
          className="cursor-pointer group relative rounded-2xl overflow-hidden bg-[#121923] border border-[#263342] shadow-md transition-all duration-300 hover:scale-[1.015] hover:border-[#22D3EE]/50 hover:shadow-xl"
        >
          <div className="grid grid-cols-12 min-h-[170px] sm:min-h-[190px]">
            <div className="col-span-5 min-w-0 editorial-marble-panel border-r border-[#263342] flex items-center justify-center p-2.5 sm:p-3 relative">
              <div className="w-20 sm:w-24 p-1 rounded-xl border border-[#263342] bg-[#1A2430]/60 shadow-xs">
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border-[1.5px] border-[#263342] bg-[#0B0F14]">
                  <img
                    src="/ansh-profile.jpg"
                    alt="About Ansh Sahu"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-7 min-w-0 p-3 sm:p-4 flex flex-col justify-between">
              <div className="flex justify-end text-[8px] sm:text-[10px] uppercase font-semibold text-[#94A3B8] gap-2">
                <span>About</span>
              </div>
              <div>
                <h4 className="font-display font-bold uppercase tracking-tight text-lg xs:text-xl sm:text-2xl text-[#22D3EE] break-words">
                  ABOUT ME
                </h4>
                <p className="text-[10px] sm:text-xs text-[#94A3B8] line-clamp-2 mt-1">
                  Software Engineer &amp; Developer • B.Tech CSE (AI &amp; ML) at Sanskriti University.
                </p>
              </div>
              <div className="flex justify-end pt-1 border-t border-[#263342] text-[10px] font-serif italic text-[#F8FAFC]">
                By Ansh Sahu
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: VISION & MISSION */}
        <div
          onClick={() => onSelectCard('vision')}
          className="cursor-pointer group relative rounded-2xl overflow-hidden bg-[#121923] border border-[#263342] shadow-md transition-all duration-300 hover:scale-[1.015] hover:border-[#22D3EE]/50 hover:shadow-xl"
        >
          <div className="grid grid-cols-12 min-h-[170px] sm:min-h-[190px]">
            <div className="col-span-5 min-w-0 editorial-marble-panel border-r border-[#263342] flex items-center justify-center p-2.5 sm:p-3 relative">
              <div className="w-20 sm:w-24 p-1 rounded-xl border border-[#263342] bg-[#1A2430]/60 shadow-xs">
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border-[1.5px] border-[#263342] bg-[#0B0F14]">
                  <img
                    src="/vision-mission.png"
                    alt="Vision & Mission"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-7 min-w-0 p-3 sm:p-4 flex flex-col justify-between">
              <div className="flex justify-end text-[8px] sm:text-[10px] uppercase font-semibold text-[#94A3B8] gap-2">
                <span>Vision</span>
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <h4 className="font-display font-bold uppercase tracking-tight text-base sm:text-lg text-[#F8FAFC] break-words">
                  VISION
                </h4>
                <h4 className="font-display font-bold uppercase tracking-tight text-base sm:text-lg text-[#22D3EE] break-words">
                  MISSION
                </h4>
              </div>
              <div className="flex justify-end pt-1 border-t border-[#263342] text-[10px] font-serif italic text-[#F8FAFC]">
                By Ansh Sahu
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: EDUCATION */}
        <div
          onClick={() => onSelectCard('education')}
          className="cursor-pointer group relative rounded-2xl overflow-hidden bg-[#121923] border border-[#263342] shadow-md transition-all duration-300 hover:scale-[1.015] hover:border-[#22D3EE]/50 hover:shadow-xl"
        >
          <div className="grid grid-cols-12 min-h-[170px] sm:min-h-[190px]">
            <div className="col-span-5 min-w-0 editorial-marble-panel border-r border-[#263342] flex items-center justify-center p-2.5 sm:p-3 relative">
              <div className="w-20 sm:w-24 p-1 rounded-xl border border-[#263342] bg-[#1A2430]/60 shadow-xs">
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border-[1.5px] border-[#263342] bg-[#0B0F14]">
                  <img
                    src="/sanskriti-university.png"
                    alt="Sanskriti University Campus"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-7 min-w-0 p-3 sm:p-4 flex flex-col justify-between">
              <div className="flex justify-end text-[8px] sm:text-[10px] uppercase font-semibold text-[#94A3B8] gap-2">
                <span>Education</span>
              </div>
              <div>
                <h4 className="font-display font-bold uppercase tracking-tight text-lg xs:text-xl sm:text-2xl text-[#22D3EE] break-words">
                  EDUCATION
                </h4>
                <p className="text-[10px] sm:text-xs text-[#94A3B8] mt-1">
                  Sanskriti University • B.Tech CSE (AI & ML) 2023–2027
                </p>
              </div>
              <div className="flex justify-end pt-1 border-t border-[#263342] text-[10px] font-serif italic text-[#F8FAFC]">
                By Ansh Sahu
              </div>
            </div>
          </div>
        </div>

        {/* Card 5: SKILL */}
        <div
          onClick={() => onSelectCard('skills')}
          className="cursor-pointer group relative rounded-2xl overflow-hidden bg-[#121923] border border-[#263342] shadow-md transition-all duration-300 hover:scale-[1.015] hover:border-[#22D3EE]/50 hover:shadow-xl"
        >
          <div className="grid grid-cols-12 min-h-[170px] sm:min-h-[190px]">
            <div className="col-span-5 min-w-0 editorial-marble-panel border-r border-[#263342] flex items-center justify-center p-2.5 sm:p-3 relative">
              <div className="w-20 sm:w-24 p-1 rounded-xl border border-[#263342] bg-[#1A2430]/60 shadow-xs">
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border-[1.5px] border-[#263342] bg-[#0B0F14]">
                  <img
                    src="/skills.png"
                    alt="Skills"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-7 min-w-0 p-3 sm:p-4 flex flex-col justify-between">
              <div className="flex justify-end text-[8px] sm:text-[10px] uppercase font-semibold text-[#94A3B8] gap-2">
                <span>Skills</span>
              </div>
              <div>
                <h4 className="font-display font-black uppercase tracking-tight text-lg xs:text-xl sm:text-2xl text-[#F8FAFC] break-words">
                  SKILL
                </h4>
                <div className="flex items-center gap-2 sm:gap-3 text-[10px] font-semibold text-[#94A3B8] mt-1 uppercase">
                  <span>Frontend</span>
                  <span>•</span>
                  <span>AI / ML</span>
                </div>
              </div>
              <div className="flex justify-end pt-1 border-t border-[#263342] text-[10px] font-serif italic text-[#F8FAFC]">
                By Ansh Sahu
              </div>
            </div>
          </div>
        </div>

        {/* Card 6: EXPERIENCE */}
        <div
          onClick={() => onSelectCard('experience')}
          className="cursor-pointer group relative rounded-2xl overflow-hidden bg-[#121923] border border-[#263342] shadow-md transition-all duration-300 hover:scale-[1.015] hover:border-[#22D3EE]/50 hover:shadow-xl"
        >
          <div className="grid grid-cols-12 min-h-[170px] sm:min-h-[190px]">
            <div className="col-span-5 min-w-0 editorial-marble-panel border-r border-[#263342] flex items-center justify-center p-2.5 sm:p-3 relative">
              <div className="w-20 sm:w-24 p-1 rounded-xl border border-[#263342] bg-[#1A2430]/60 shadow-xs">
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border-[1.5px] border-[#263342] bg-[#0B0F14]">
                  <img
                    src="/experience.png"
                    alt="Experience Workspace"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-7 min-w-0 p-3 sm:p-4 flex flex-col justify-between">
              <div className="flex justify-end text-[8px] sm:text-[10px] uppercase font-semibold text-[#94A3B8] gap-2">
                <span>Experience</span>
              </div>
              <div>
                <h4 className="font-display font-bold uppercase tracking-tight text-lg xs:text-xl sm:text-2xl text-[#22D3EE] break-words">
                  EXPERIENCE
                </h4>
                <p className="text-[10px] sm:text-xs text-[#94A3B8] mt-1">
                  Project Lead & Academic Research Foundations
                </p>
              </div>
              <div className="flex justify-end pt-1 border-t border-[#263342] text-[10px] font-serif italic text-[#F8FAFC]">
                By Ansh Sahu
              </div>
            </div>
          </div>
        </div>

        {/* Card 7: 2024-2026 PROJECTS */}
        <div
          onClick={() => onSelectCard('projects')}
          className="cursor-pointer group relative rounded-2xl overflow-hidden bg-[#121923] border border-[#263342] shadow-md transition-all duration-300 hover:scale-[1.015] hover:border-[#22D3EE]/50 hover:shadow-xl"
        >
          <div className="grid grid-cols-12 min-h-[170px] sm:min-h-[190px]">
            <div className="col-span-5 min-w-0 editorial-marble-panel border-r border-[#263342] flex items-center justify-center p-2.5 sm:p-3 relative">
              <div className="w-20 sm:w-24 p-1 rounded-xl border border-[#263342] bg-[#1A2430]/60 shadow-xs">
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border-[1.5px] border-[#263342] bg-[#0B0F14]">
                  <img
                    src="/ai-driver-awareness.png"
                    alt="AI Driver Awareness System"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-7 min-w-0 p-3 sm:p-4 flex flex-col justify-between">
              <div className="flex justify-end text-[8px] sm:text-[10px] uppercase font-semibold text-[#94A3B8] gap-2">
                <span>Projects</span>
              </div>
              <div>
                <h4 className="font-display font-bold uppercase tracking-tight text-lg xs:text-xl sm:text-2xl text-[#F8FAFC] break-words">
                  2024–2026 PROJECT
                </h4>
                <p className="text-[10px] sm:text-xs text-[#94A3B8] line-clamp-2 mt-1">
                  AI Driver Awareness, Sacha Sauda, Predictive ML models.
                </p>
              </div>
              <div className="flex justify-end pt-1 border-t border-[#263342] text-[10px] font-serif italic text-[#F8FAFC]">
                By Ansh Sahu
              </div>
            </div>
          </div>
        </div>

        {/* Card 8: LET'S COLLABORATE */}
        <div
          onClick={() => onSelectCard('contact')}
          className="cursor-pointer group relative rounded-2xl overflow-hidden bg-[#121923] border border-[#263342] shadow-md transition-all duration-300 hover:scale-[1.015] hover:border-[#22D3EE]/50 hover:shadow-xl"
        >
          <div className="grid grid-cols-12 min-h-[170px] sm:min-h-[190px]">
            <div className="col-span-5 min-w-0 editorial-marble-panel border-r border-[#263342] flex items-center justify-center p-2.5 sm:p-3 relative">
              <div className="w-20 sm:w-24 p-1 rounded-xl border border-[#263342] bg-[#1A2430]/60 shadow-xs">
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border-[1.5px] border-[#263342] bg-[#0B0F14]">
                  <img
                    src="/collaborate.png"
                    alt="Collaborate"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-7 min-w-0 p-3 sm:p-4 flex flex-col justify-between">
              <div className="flex justify-end text-[8px] sm:text-[10px] uppercase font-semibold text-[#94A3B8] gap-2">
                <span>Contact</span>
              </div>
              <div>
                <h4 className="font-display font-bold uppercase tracking-tight text-lg xs:text-xl sm:text-2xl text-[#22D3EE] leading-tight break-words">
                  LET'S COLLABORATE
                </h4>
                <p className="text-[10px] sm:text-xs text-[#94A3B8] mt-1 truncate">
                  anshcseaiml0169@gmail.com • +91 7754091703
                </p>
              </div>
              <div className="flex justify-end pt-1 border-t border-[#263342] text-[10px] font-serif italic text-[#F8FAFC]">
                By Ansh Sahu
              </div>
            </div>
          </div>
        </div>

        {/* Card 9: THANKS YOU */}
        <div
          onClick={() => onSelectCard('thanks')}
          className="cursor-pointer group relative rounded-2xl overflow-hidden bg-[#121923] border border-[#263342] shadow-md transition-all duration-300 hover:scale-[1.015] hover:border-[#22D3EE]/50 hover:shadow-xl"
        >
          <div className="grid grid-cols-12 min-h-[170px] sm:min-h-[190px]">
            <div className="col-span-5 min-w-0 editorial-marble-panel border-r border-[#263342] flex items-center justify-center p-2.5 sm:p-3 relative">
              <div className="w-20 sm:w-24 p-1 rounded-xl border border-[#263342] bg-[#1A2430]/60 shadow-xs">
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border-[1.5px] border-[#263342] bg-[#0B0F14]">
                  <img
                    src="/ansh-profile.jpg"
                    alt="Thanks"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-7 min-w-0 p-3 sm:p-4 flex flex-col justify-between">
              <div className="flex justify-end text-[8px] sm:text-[10px] uppercase font-semibold text-[#94A3B8] gap-2">
                <span>Closing</span>
              </div>
              <div>
                <h4 className="font-display font-bold uppercase tracking-tight text-lg xs:text-xl sm:text-2xl text-[#22D3EE] leading-tight break-words">
                  THANKS
                </h4>
                <h4 className="font-display font-black uppercase tracking-tight text-lg xs:text-xl sm:text-2xl text-[#F8FAFC] leading-tight break-words">
                  YOU
                </h4>
              </div>
              <div className="flex justify-end pt-1 border-t border-[#263342] text-[10px] font-serif italic text-[#F8FAFC]">
                By Ansh Sahu
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
