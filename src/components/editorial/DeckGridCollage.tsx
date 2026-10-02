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
        className="cursor-pointer group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#fbf7f1] border border-[#e4d5c0] shadow-[0_12px_36px_-6px_rgba(45,18,5,0.35)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_20px_45px_-6px_rgba(45,18,5,0.45)]"
      >
        <div className="grid grid-cols-12 min-h-[220px] sm:min-h-[280px]">
          {/* Left Cameo Frame */}
          <div className="col-span-5 editorial-marble-panel border-r border-[#ebdcc8] flex items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute -bottom-4 -left-4 w-32 h-24 pointer-events-none opacity-60">
              <GoldenWireDecor />
            </div>
            <div className="absolute top-2 left-3">
              <SparkleStar size={11} color="#c2744d" />
            </div>
            <div className="relative z-10 w-24 sm:w-36 aspect-[3/4] p-1 sm:p-1.5 rounded-[50px] sm:rounded-[70px] border border-[#d8b082] bg-white/40">
              <div className="w-full h-full rounded-[45px] sm:rounded-[65px] overflow-hidden border-[2px] border-[#b97a4e]">
                <img
                  src="/ansh-profile.jpg"
                  alt="Ansh Portrait"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Editorial Typography */}
          <div className="col-span-7 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
            <div className="flex items-center justify-end gap-3 text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-stone-600">
              <span>Home</span>
              <span>Introduction</span>
              <span>Education</span>
              <span>Portfolio</span>
            </div>

            <div className="space-y-0.5 relative my-2">
              <h3 className="font-display font-bold uppercase tracking-tight text-2xl sm:text-4xl lg:text-5xl text-[#b85b2c] leading-none">
                CREATIVE
              </h3>
              <h3 className="font-display font-black uppercase tracking-tight text-2xl sm:text-4xl lg:text-5xl text-[#18181b] leading-none">
                PORTFOLIO
              </h3>
              <div className="absolute -top-3 right-4">
                <SparkleStar size={18} color="#c2744d" />
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] sm:text-xs pt-2 border-t border-[#e2d5c3]">
              <span className="text-[10px] text-stone-500 uppercase tracking-widest font-semibold">
                Click to explore
              </span>
              <span className="font-serif italic text-stone-800 font-medium">
                By Ansh Sahu
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 8 Cards in 2-Column Grid (Direct match to screenshot) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Card 2: ABOUT ME */}
        <div
          onClick={() => onSelectCard('about')}
          className="cursor-pointer group relative rounded-2xl overflow-hidden bg-[#fbf7f1] border border-[#e4d5c0] shadow-md transition-all duration-300 hover:scale-[1.015] hover:shadow-xl"
        >
          <div className="grid grid-cols-12 min-h-[170px] sm:min-h-[190px]">
            <div className="col-span-5 editorial-marble-panel border-r border-[#ebdcc8] flex items-center justify-center p-3 relative">
              <div className="w-16 sm:w-20 aspect-[3/4] p-1 rounded-[40px] border border-[#d8b082] bg-white/40">
                <div className="w-full h-full rounded-[36px] overflow-hidden border-[1.5px] border-[#b97a4e]">
                  <img
                    src="/ansh-profile.jpg"
                    alt="About Ansh"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-7 p-3 sm:p-4 flex flex-col justify-between">
              <div className="flex justify-end text-[8px] sm:text-[10px] uppercase font-semibold text-stone-600 gap-2">
                <span>About</span>
              </div>
              <div>
                <h4 className="font-display font-bold uppercase tracking-tight text-xl sm:text-2xl text-[#b85b2c]">
                  ABOUT ME
                </h4>
                <p className="text-[10px] sm:text-xs text-stone-600 line-clamp-2 mt-1">
                  Frontend Developer & B.Tech CSE (AI & ML) student at Sanskriti University.
                </p>
              </div>
              <div className="flex justify-end pt-1 border-t border-[#e2d5c3] text-[10px] font-serif italic text-stone-700">
                By Ansh Sahu
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: VISION & MISSION */}
        <div
          onClick={() => onSelectCard('vision')}
          className="cursor-pointer group relative rounded-2xl overflow-hidden bg-[#fbf7f1] border border-[#e4d5c0] shadow-md transition-all duration-300 hover:scale-[1.015] hover:shadow-xl"
        >
          <div className="grid grid-cols-12 min-h-[170px] sm:min-h-[190px]">
            <div className="col-span-5 editorial-marble-panel border-r border-[#ebdcc8] flex items-center justify-center p-3 relative">
              <div className="w-16 sm:w-20 aspect-[3/4] p-1 rounded-[40px] border border-[#d8b082] bg-white/40">
                <div className="w-full h-full rounded-[36px] overflow-hidden border-[1.5px] border-[#b97a4e]">
                  <img
                    src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=400&q=80"
                    alt="Vision & Mission"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-7 p-3 sm:p-4 flex flex-col justify-between">
              <div className="flex justify-end text-[8px] sm:text-[10px] uppercase font-semibold text-stone-600 gap-2">
                <span>Vision</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold uppercase tracking-tight text-base sm:text-lg text-[#18181b]">
                  VISION
                </h4>
                <h4 className="font-display font-bold uppercase tracking-tight text-base sm:text-lg text-[#b85b2c]">
                  MISSION
                </h4>
              </div>
              <div className="flex justify-end pt-1 border-t border-[#e2d5c3] text-[10px] font-serif italic text-stone-700">
                By Ansh Sahu
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: EDUCATION */}
        <div
          onClick={() => onSelectCard('education')}
          className="cursor-pointer group relative rounded-2xl overflow-hidden bg-[#fbf7f1] border border-[#e4d5c0] shadow-md transition-all duration-300 hover:scale-[1.015] hover:shadow-xl"
        >
          <div className="grid grid-cols-12 min-h-[170px] sm:min-h-[190px]">
            <div className="col-span-5 editorial-marble-panel border-r border-[#ebdcc8] flex items-center justify-center p-3 relative">
              <div className="w-16 sm:w-20 aspect-[3/4] p-1 rounded-[40px] border border-[#d8b082] bg-white/40">
                <div className="w-full h-full rounded-[36px] overflow-hidden border-[1.5px] border-[#b97a4e]">
                  <img
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=400&q=80"
                    alt="Education"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-7 p-3 sm:p-4 flex flex-col justify-between">
              <div className="flex justify-end text-[8px] sm:text-[10px] uppercase font-semibold text-stone-600 gap-2">
                <span>Education</span>
              </div>
              <div>
                <h4 className="font-display font-bold uppercase tracking-tight text-xl sm:text-2xl text-[#b85b2c]">
                  EDUCATION
                </h4>
                <p className="text-[10px] sm:text-xs text-stone-600 mt-1">
                  Sanskriti University • B.Tech CSE (AI & ML) 2023–2027
                </p>
              </div>
              <div className="flex justify-end pt-1 border-t border-[#e2d5c3] text-[10px] font-serif italic text-stone-700">
                By Ansh Sahu
              </div>
            </div>
          </div>
        </div>

        {/* Card 5: SKILL */}
        <div
          onClick={() => onSelectCard('skills')}
          className="cursor-pointer group relative rounded-2xl overflow-hidden bg-[#fbf7f1] border border-[#e4d5c0] shadow-md transition-all duration-300 hover:scale-[1.015] hover:shadow-xl"
        >
          <div className="grid grid-cols-12 min-h-[170px] sm:min-h-[190px]">
            <div className="col-span-5 editorial-marble-panel border-r border-[#ebdcc8] flex items-center justify-center p-3 relative">
              <div className="w-16 sm:w-20 aspect-[3/4] p-1 rounded-[40px] border border-[#d8b082] bg-white/40">
                <div className="w-full h-full rounded-[36px] overflow-hidden border-[1.5px] border-[#b97a4e]">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
                    alt="Skills"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-7 p-3 sm:p-4 flex flex-col justify-between">
              <div className="flex justify-end text-[8px] sm:text-[10px] uppercase font-semibold text-stone-600 gap-2">
                <span>Skills</span>
              </div>
              <div>
                <h4 className="font-display font-black uppercase tracking-tight text-xl sm:text-2xl text-[#18181b]">
                  SKILL
                </h4>
                <div className="flex items-center gap-3 text-[10px] font-semibold text-stone-700 mt-1 uppercase">
                  <span>Frontend</span>
                  <span>•</span>
                  <span>AI / ML</span>
                </div>
              </div>
              <div className="flex justify-end pt-1 border-t border-[#e2d5c3] text-[10px] font-serif italic text-stone-700">
                By Ansh Sahu
              </div>
            </div>
          </div>
        </div>

        {/* Card 6: EXPERIENCE */}
        <div
          onClick={() => onSelectCard('experience')}
          className="cursor-pointer group relative rounded-2xl overflow-hidden bg-[#fbf7f1] border border-[#e4d5c0] shadow-md transition-all duration-300 hover:scale-[1.015] hover:shadow-xl"
        >
          <div className="grid grid-cols-12 min-h-[170px] sm:min-h-[190px]">
            <div className="col-span-5 editorial-marble-panel border-r border-[#ebdcc8] flex items-center justify-center p-3 relative">
              <div className="w-16 sm:w-20 aspect-[3/4] p-1 rounded-[40px] border border-[#d8b082] bg-white/40">
                <div className="w-full h-full rounded-[36px] overflow-hidden border-[1.5px] border-[#b97a4e]">
                  <img
                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=400&q=80"
                    alt="Experience"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-7 p-3 sm:p-4 flex flex-col justify-between">
              <div className="flex justify-end text-[8px] sm:text-[10px] uppercase font-semibold text-stone-600 gap-2">
                <span>Experience</span>
              </div>
              <div>
                <h4 className="font-display font-bold uppercase tracking-tight text-xl sm:text-2xl text-[#b85b2c]">
                  EXPERIENCE
                </h4>
                <p className="text-[10px] sm:text-xs text-stone-600 mt-1">
                  Project Lead & Academic Research Foundations
                </p>
              </div>
              <div className="flex justify-end pt-1 border-t border-[#e2d5c3] text-[10px] font-serif italic text-stone-700">
                By Ansh Sahu
              </div>
            </div>
          </div>
        </div>

        {/* Card 7: 2024-2026 PROJECTS */}
        <div
          onClick={() => onSelectCard('projects')}
          className="cursor-pointer group relative rounded-2xl overflow-hidden bg-[#fbf7f1] border border-[#e4d5c0] shadow-md transition-all duration-300 hover:scale-[1.015] hover:shadow-xl"
        >
          <div className="grid grid-cols-12 min-h-[170px] sm:min-h-[190px]">
            <div className="col-span-5 editorial-marble-panel border-r border-[#ebdcc8] flex items-center justify-center p-3 relative">
              <div className="w-16 sm:w-20 aspect-[3/4] p-1 rounded-[40px] border border-[#d8b082] bg-white/40">
                <div className="w-full h-full rounded-[36px] overflow-hidden border-[1.5px] border-[#b97a4e]">
                  <img
                    src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80"
                    alt="Projects"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-7 p-3 sm:p-4 flex flex-col justify-between">
              <div className="flex justify-end text-[8px] sm:text-[10px] uppercase font-semibold text-stone-600 gap-2">
                <span>Projects</span>
              </div>
              <div>
                <h4 className="font-display font-bold uppercase tracking-tight text-xl sm:text-2xl text-[#18181b]">
                  2024–2026 PROJECT
                </h4>
                <p className="text-[10px] sm:text-xs text-stone-600 line-clamp-2 mt-1">
                  AI Driver Awareness, Sacha Sauda, Predictive ML models.
                </p>
              </div>
              <div className="flex justify-end pt-1 border-t border-[#e2d5c3] text-[10px] font-serif italic text-stone-700">
                By Ansh Sahu
              </div>
            </div>
          </div>
        </div>

        {/* Card 8: LET'S COLLABORATE */}
        <div
          onClick={() => onSelectCard('contact')}
          className="cursor-pointer group relative rounded-2xl overflow-hidden bg-[#fbf7f1] border border-[#e4d5c0] shadow-md transition-all duration-300 hover:scale-[1.015] hover:shadow-xl"
        >
          <div className="grid grid-cols-12 min-h-[170px] sm:min-h-[190px]">
            <div className="col-span-5 editorial-marble-panel border-r border-[#ebdcc8] flex items-center justify-center p-3 relative">
              <div className="w-16 sm:w-20 aspect-[3/4] p-1 rounded-[40px] border border-[#d8b082] bg-white/40">
                <div className="w-full h-full rounded-[36px] overflow-hidden border-[1.5px] border-[#b97a4e]">
                  <img
                    src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=400&q=80"
                    alt="Collaborate"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-7 p-3 sm:p-4 flex flex-col justify-between">
              <div className="flex justify-end text-[8px] sm:text-[10px] uppercase font-semibold text-stone-600 gap-2">
                <span>Contact</span>
              </div>
              <div>
                <h4 className="font-display font-bold uppercase tracking-tight text-xl sm:text-2xl text-[#b85b2c] leading-tight">
                  LET'S COLLABORATE
                </h4>
                <p className="text-[10px] sm:text-xs text-stone-600 mt-1">
                  anshcseaiml0169@gmail.com • +91 7754091703
                </p>
              </div>
              <div className="flex justify-end pt-1 border-t border-[#e2d5c3] text-[10px] font-serif italic text-stone-700">
                By Ansh Sahu
              </div>
            </div>
          </div>
        </div>

        {/* Card 9: THANKS YOU */}
        <div
          onClick={() => onSelectCard('thanks')}
          className="cursor-pointer group relative rounded-2xl overflow-hidden bg-[#fbf7f1] border border-[#e4d5c0] shadow-md transition-all duration-300 hover:scale-[1.015] hover:shadow-xl"
        >
          <div className="grid grid-cols-12 min-h-[170px] sm:min-h-[190px]">
            <div className="col-span-5 editorial-marble-panel border-r border-[#ebdcc8] flex items-center justify-center p-3 relative">
              <div className="w-16 sm:w-20 aspect-[3/4] p-1 rounded-[40px] border border-[#d8b082] bg-white/40">
                <div className="w-full h-full rounded-[36px] overflow-hidden border-[1.5px] border-[#b97a4e]">
                  <img
                    src="/ansh-profile.jpg"
                    alt="Thanks"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-7 p-3 sm:p-4 flex flex-col justify-between">
              <div className="flex justify-end text-[8px] sm:text-[10px] uppercase font-semibold text-stone-600 gap-2">
                <span>Closing</span>
              </div>
              <div>
                <h4 className="font-display font-bold uppercase tracking-tight text-xl sm:text-2xl text-[#b85b2c] leading-tight">
                  THANKS
                </h4>
                <h4 className="font-display font-black uppercase tracking-tight text-xl sm:text-2xl text-[#18181b] leading-tight">
                  YOU
                </h4>
              </div>
              <div className="flex justify-end pt-1 border-t border-[#e2d5c3] text-[10px] font-serif italic text-stone-700">
                By Ansh Sahu
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
