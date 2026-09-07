import React from 'react';
import { 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Compass
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { SectionHeader } from '../../components/common/SectionHeader';
import { GlassCard } from '../../components/common/GlassCard';
import { Badge } from '../../components/common/Badge';

export const ExperiencePage: React.FC = () => {
  const { experience } = useData();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 font-sans">
      {/* 1. Header */}
      <SectionHeader
        badge="Academic & Project Track"
        badgeVariant="cyan"
        title="Experience &"
        highlightText="Education Timeline"
        description="Transparent record of my academic journey at Sanskriti University, hands-on lab development, and continuous self-directed learning in AI/ML."
      />

      {/* 2. Professional Experience Transparency Notice */}
      <div className="p-4 sm:p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 flex items-start gap-3.5">
        <Compass className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs sm:text-sm">
          <h4 className="font-bold text-cyan-200">Career Phase & Transparency Notice</h4>
          <p className="text-slate-300 leading-relaxed">
            Currently building professional experience through intensive academic curriculum, independent production projects, and continuous open-source AI/ML learning.
          </p>
        </div>
      </div>

      {/* 3. Timeline Items */}
      <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
        {experience.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline Node Point */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#070b14] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.4)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
            </div>

            <GlassCard className="p-6 sm:p-7 border-slate-800/90 space-y-4" glowColor="cyan">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <Badge variant={item.type === 'Education' ? 'indigo' : 'cyan'} size="sm">
                    {item.type}
                  </Badge>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
                    {item.role}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-300">
                    {item.organization}
                  </p>
                </div>

                <div className="text-right space-y-1 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 justify-end text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-end text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>

              {item.highlights && item.highlights.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                    Key Highlights & Coursework:
                  </span>
                  <ul className="space-y-1.5">
                    {item.highlights.map((high, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{high}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </GlassCard>
          </div>
        ))}
      </div>
    </div>
  );
};
