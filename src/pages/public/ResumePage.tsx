import React from 'react';
import { 
  FileDown, 
  Printer, 
  Mail, 
  Phone,
  GraduationCap, 
  BrainCircuit, 
  Code2
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { GlassCard } from '../../components/common/GlassCard';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { GithubIcon, LinkedinIcon } from '../../components/common/SocialIcons';

export const ResumePage: React.FC = () => {
  const { settings, projects } = useData();

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = settings.resumeUrl || '/resume.pdf';
    link.download = 'Ansh_AIML_Engineer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-sans">
      {/* 1. Header & Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <Badge variant="cyan" size="sm" className="mb-2">
            Curriculum Vitae
          </Badge>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Ansh's Engineering Resume
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            AI/ML Engineer • Sanskriti University (2023–2027)
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button size="md" variant="secondary" onClick={handlePrint} icon={<Printer className="w-4 h-4" />}>
            Print Web View
          </Button>

          <Button size="md" variant="gradient" onClick={handleDownloadPdf} icon={<FileDown className="w-4 h-4" />}>
            Download Resume (PDF)
          </Button>
        </div>
      </div>

      {/* 2. Top Banner CTA */}
      <div className="p-6 rounded-2xl bg-[#090f1d] border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-white">Want to know more about my work?</h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Grab a single-page PDF copy or reach out directly for internship inquiries.
          </p>
        </div>
        <Button size="sm" variant="cyber" onClick={handleDownloadPdf} icon={<FileDown className="w-4 h-4" />}>
          Download Resume
        </Button>
      </div>

      {/* 3. Formatted Web Resume Paper Card */}
      <GlassCard className="p-8 sm:p-12 border-slate-800 space-y-8 bg-[#090d18] shadow-2xl">
        {/* Header Profile Info */}
        <div className="border-b border-slate-800 pb-6 space-y-2">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-3xl font-extrabold text-white">{settings.name}</h2>
            <span className="text-xs font-mono text-cyan-400 font-semibold">{settings.positioning}</span>
          </div>

          <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-2">
            <span className="flex items-center gap-1 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-indigo-400" /> {settings.email}
            </span>
            <span className="flex items-center gap-1 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-emerald-400" /> {settings.phone}
            </span>
            <span className="flex items-center gap-1 text-slate-300">
              <GithubIcon size={14} className="text-slate-400" /> {settings.githubUrl}
            </span>
            <span className="flex items-center gap-1 text-slate-300">
              <LinkedinIcon size={14} className="text-blue-400" /> {settings.linkedinUrl}
            </span>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
            Professional Summary
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {settings.aboutDescription}
          </p>
        </div>

        {/* Education Section */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-cyan-400" /> Education
          </h3>
          <div className="p-4 rounded-xl bg-[#060a14] border border-slate-800/80 space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-1">
              <h4 className="text-sm font-bold text-white">
                B.Tech in Computer Science & Engineering (Artificial Intelligence & Machine Learning)
              </h4>
              <span className="text-xs font-mono text-cyan-400">2023 — 2027</span>
            </div>
            <p className="text-xs font-medium text-slate-300">
              Sanskriti University, Mathura, Uttar Pradesh
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Coursework: Machine Learning, Artificial Intelligence, Deep Learning, Data Structures & Algorithms, Computer Vision, Probability & Statistics, DBMS.
            </p>
          </div>
        </div>

        {/* Technical Skills Matrix */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
            <BrainCircuit className="w-4 h-4 text-cyan-400" /> Technical Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-[#060a14] border border-slate-800 space-y-1">
              <span className="font-semibold text-slate-300">Programming Languages:</span>
              <p className="text-slate-400">Python, JavaScript, TypeScript, SQL, HTML/CSS</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#060a14] border border-slate-800 space-y-1">
              <span className="font-semibold text-slate-300">AI & Machine Learning:</span>
              <p className="text-slate-400">Scikit-learn, TensorFlow, OpenCV, Neural Networks, Deep Learning</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#060a14] border border-slate-800 space-y-1">
              <span className="font-semibold text-slate-300">Data Engineering & Analytics:</span>
              <p className="text-slate-400">Pandas, NumPy, EDA, Matplotlib, Data Visualization</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#060a14] border border-slate-800 space-y-1">
              <span className="font-semibold text-slate-300">Web Development & Tools:</span>
              <p className="text-slate-400">React, Tailwind CSS, Git, GitHub, Vercel, REST APIs</p>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
            <Code2 className="w-4 h-4 text-cyan-400" /> Featured Engineering Projects
          </h3>
          <div className="space-y-3">
            {projects.slice(0, 4).map((proj) => (
              <div key={proj.id} className="p-4 rounded-xl bg-[#060a14] border border-slate-800 space-y-2">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-sm font-bold text-white">{proj.title}</h4>
                  <span className="text-[11px] font-mono text-cyan-400">{proj.category}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{proj.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.technologies.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </div>
  );
};
