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
          badge="Academics"
          badgeVariant="brand"
          title="Education &"
          highlightText="University Foundation"
          description="Formal undergraduate engineering education at Sanskriti University, specializing in Artificial Intelligence and Machine Learning."
        />
      </ScrollReveal>

      {/* 2. Main Education Detail Card */}
      <ScrollReveal delay={0.08}>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300 ease-out space-y-8">
          {/* Institution Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Sanskriti University
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Mathura, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  Bachelor of Technology (B.Tech) — Computer Science & Engineering
                </h3>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Specialization: Artificial Intelligence & Machine Learning (AI & ML)
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2 text-xs">
              <Badge variant="live" size="md">
                Active Student
              </Badge>
              <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-medium pt-1">
                <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Academic Session: 2023 — 2027</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>On-Campus Undergraduate Program</span>
              </div>
            </div>
          </div>

          {/* Academic Overview & Core Coursework */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Coursework List */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Core Relevant Coursework
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {coreCoursework.map((course) => (
                  <div
                    key={course}
                    className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-white dark:hover:bg-slate-800 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span className="font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Academic Focus Pillars */}
            <div className="lg:col-span-5 space-y-4">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Academic Discipline
              </h4>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                    Theoretical & Applied Fundamentals
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Rigorous grounding in data structures, computational logic, object-oriented principles, and database management systems.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                    Specialized AI & ML Track
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Formal study of machine learning mathematics, computer vision algorithms, and predictive data modeling methodologies.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                    Timeline & Graduation
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Four-year full-time B.Tech degree program (2023–2027), maintaining active academic enrollment and regular lab coursework.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
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
