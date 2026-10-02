import React from 'react';
import { 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Compass
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { SectionHeader } from '../../components/common/SectionHeader';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { Badge } from '../../components/common/Badge';

export const ExperiencePage: React.FC = () => {
  const { experience } = useData();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 font-sans pb-16">
      {/* 1. Header */}
      <ScrollReveal>
        <SectionHeader
          headingTag="h1"
          badge="Timeline"
          badgeVariant="brand"
          title="Ansh Sahu | Experience &amp;"
          highlightText="Engineering Milestones"
          description="A clear and transparent record of software engineering projects, computer science studies at Sanskriti University, and technical milestones by Ansh Sahu (ansh.developer)."
        />
      </ScrollReveal>

      {/* 2. Career Phase & Transparency Notice */}
      <ScrollReveal delay={0.08}>
        <div className="p-4 sm:p-5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/60 flex items-start gap-3.5 hover:shadow-sm transition-shadow duration-200">
          <Compass className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm">
            <h4 className="font-bold text-slate-900 dark:text-white">Active Student & Aspiring Frontend Engineer</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Currently advancing my computer science degree while building real-world web applications and AI projects. Seeking internship and entry-level frontend engineering opportunities.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* 3. Timeline Items */}
      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
        {experience.map((item, idx) => (
          <ScrollReveal key={item.id} delay={idx * 0.1}>
            <div className="relative group">
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-300 ease-out space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <Badge variant="brand" size="sm">
                    {item.type}
                  </Badge>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-2">
                    {item.role}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {item.organization}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{item.period}</span>
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>

              {item.highlights && item.highlights.length > 0 && (
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <p className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                    Key Outcomes & Involvements:
                  </p>
                  <ul className="space-y-1.5">
                    {item.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};
