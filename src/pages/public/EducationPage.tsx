import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  FileDown 
} from 'lucide-react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { ScrollReveal } from '../../components/common/ScrollReveal';

export const EducationPage: React.FC = () => {
  const coreCoursework = [
    'Data Structures & Algorithms',
    'Web Technologies & Application Engineering',
    'Database Management Systems (DBMS)',
    'Object-Oriented Programming (OOP)',
    'Operating Systems',
    'Computer Networks',
    'Machine Learning & Deep Learning',
    'Computer Vision & Image Processing',
    'Discrete Mathematics & Probability'
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 font-sans pb-16">
      {/* 1. Section Header */}
      <ScrollReveal>
        <SectionHeader
          headingTag="h1"
          badge="Academics"
          badgeVariant="brand"
          title="Ansh Sahu | Education &amp;"
          highlightText="University Foundation"
          description="Formal undergraduate Computer Science &amp; Engineering (AI &amp; ML) education at Sanskriti University (2023–2027) undertaken by Ansh Sahu (ansh.developer)."
        />
      </ScrollReveal>

      {/* 2. Main Education Detail Card */}
      <ScrollReveal delay={0.08}>
        <div className="bg-[#121923] border border-[#263342] rounded-2xl p-4 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-all duration-300 ease-out space-y-8">
          {/* Institution Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#263342]">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="w-10 h-10 rounded-xl bg-[#1A2430] border border-[#263342] flex items-center justify-center text-[#22D3EE]">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
                    Sanskriti University
                  </h2>
                  <p className="text-xs text-[#94A3B8] font-medium">
                    Mathura, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-bold text-[#22D3EE]">
                  Bachelor of Technology (B.Tech) — Computer Science & Engineering
                </h3>
                <p className="text-sm font-semibold text-[#94A3B8]">
                  Specialization: Artificial Intelligence & Machine Learning (AI & ML)
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2 text-xs">
              <Badge variant="live" size="md">
                Active Student
              </Badge>
              <div className="flex items-center gap-1.5 text-[#94A3B8] font-medium pt-1">
                <Calendar className="w-4 h-4 text-[#22D3EE]" />
                <span>Academic Session: 2023 — 2027</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#94A3B8]">
                <MapPin className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>On-Campus Undergraduate Program</span>
              </div>
            </div>
          </div>

          {/* University Campus Architectural Feature */}
          <div className="relative rounded-2xl overflow-hidden border border-[#263342] bg-[#1A2430] p-2 sm:p-2.5 shadow-sm group">
            <div className="w-full aspect-[738/294] max-h-[340px] rounded-xl overflow-hidden relative shadow-inner bg-[#0B0F14]">
              <img
                src="/sanskriti-university.png"
                alt="Sanskriti University Main Campus Facade, Mathura"
                loading="lazy"
                className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[1.01] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/70 via-transparent to-transparent pointer-events-none" />

              {/* Campus Location Tag Overlay */}
              <div className="absolute bottom-2 left-2 right-2 sm:right-auto sm:bottom-4 sm:left-4 z-10 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl sm:rounded-full bg-[#121923]/90 backdrop-blur-md border border-[#263342] text-[#F8FAFC] text-[10px] sm:text-xs font-semibold shadow-lg max-w-[calc(100%-16px)]">
                <MapPin className="w-3.5 h-3.5 text-[#22D3EE] shrink-0" />
                <span className="truncate">Sanskriti University — Main Campus Facade, Mathura, UP</span>
              </div>
            </div>
          </div>

          {/* Academic Overview & Core Coursework */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Coursework List */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#22D3EE]" />
                Core Relevant Coursework
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {coreCoursework.map((course) => (
                  <div
                    key={course}
                    className="p-3 rounded-lg bg-[#1A2430] border border-[#263342] flex items-center gap-2.5 text-xs text-[#F8FAFC] hover:border-[#22D3EE] transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3EE] shrink-0" />
                    <span className="font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Academic Focus Pillars */}
            <div className="lg:col-span-5 space-y-4">
              <h4 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-[#22D3EE]" />
                Academic Discipline
              </h4>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#1A2430] border border-[#263342] space-y-1.5">
                  <h5 className="text-xs font-bold text-[#F8FAFC]">
                    Theoretical & Applied Fundamentals
                  </h5>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Rigorous grounding in data structures, computational logic, object-oriented principles, and database management systems.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#1A2430] border border-[#263342] space-y-1.5">
                  <h5 className="text-xs font-bold text-[#F8FAFC]">
                    Specialized AI & ML Track
                  </h5>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Formal study of machine learning mathematics, computer vision algorithms, and predictive data modeling methodologies.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#1A2430] border border-[#263342] space-y-1.5">
                  <h5 className="text-xs font-bold text-[#F8FAFC]">
                    Timeline & Graduation
                  </h5>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Four-year full-time B.Tech degree program (2023–2027), maintaining active academic enrollment and regular lab coursework.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="pt-4 border-t border-[#263342] flex flex-wrap items-center justify-between gap-3">
            <Link to="/contact">
              <Button size="md" variant="primary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                Contact Ansh
              </Button>
            </Link>

            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="md" variant="secondary" icon={<FileDown className="w-4 h-4" />}>
                Download Resume PDF
              </Button>
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default EducationPage;
