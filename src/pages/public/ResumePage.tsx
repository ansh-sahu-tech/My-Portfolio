import { 
  FileDown, 
  Printer, 
  Mail, 
  Phone,
  GraduationCap, 
  Code2, 
  Layers, 
  MapPin,
  ExternalLink
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { GithubIcon, LinkedinIcon } from '../../components/common/SocialIcons';

export const ResumePage: React.FC = () => {
  const { settings, projects } = useData();

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = settings.resumeUrl || '/resume.pdf';
    link.download = 'Ansh_Frontend_Developer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans pb-16">
      {/* 1. Header & Actions */}
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <Badge variant="brand" size="sm" className="mb-2">
              Curriculum Vitae
            </Badge>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Ansh Sahu — Software Engineer &amp; Developer Resume
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Software Engineer &amp; Frontend Developer (ansh.developer) • Sanskriti University (2023–2027)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline" icon={<ExternalLink className="w-3.5 h-3.5" />}>
                View PDF
              </Button>
            </a>

            <Button size="sm" variant="secondary" onClick={handlePrint} icon={<Printer className="w-3.5 h-3.5" />}>
              Print
            </Button>

            <Button size="sm" variant="primary" onClick={handleDownloadPdf} icon={<FileDown className="w-3.5 h-3.5" />}>
              Download PDF
            </Button>
          </div>
        </div>
      </ScrollReveal>

      {/* 2. Formatted Resume Card */}
      <ScrollReveal delay={0.1}>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-10 shadow-sm space-y-8 transition-shadow duration-300">
          {/* Header Profile Info */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{settings.name}</h2>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">{settings.positioning}</span>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-slate-600 dark:text-slate-400 pt-2">
              <a href={`mailto:${settings.email}`} className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> {settings.email}
              </a>
              <a href={`tel:${settings.phone}`} className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
                <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> {settings.phone}
              </a>
              <a href={settings.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                <GithubIcon size={14} className="text-slate-700 dark:text-slate-300" /> {settings.githubUrl}
              </a>
              <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                <LinkedinIcon size={14} className="text-blue-600 dark:text-blue-400" /> {settings.linkedinUrl}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {settings.aboutDescription}
            </p>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" /> Education
            </h3>
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  B.Tech in Computer Science & Engineering (Artificial Intelligence & Machine Learning)
                </h4>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">2023 — 2027</span>
              </div>
              <p className="text-xs font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-600" /> Sanskriti University, Mathura, Uttar Pradesh, India
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
                Relevant Coursework: Data Structures & Algorithms, Web Technologies, Database Systems (DBMS), Operating Systems, Machine Learning, Computer Vision.
              </p>
            </div>
          </div>

          {/* Technical Competencies Matrix */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200">
                <span className="font-semibold text-slate-900 dark:text-white">Frontend:</span>
                <p className="text-slate-600 dark:text-slate-400">HTML, CSS, JavaScript, React, Next.js, Tailwind CSS</p>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200">
                <span className="font-semibold text-slate-900 dark:text-white">Development:</span>
                <p className="text-slate-600 dark:text-slate-400">Git, GitHub, REST APIs, Responsive Design</p>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200">
                <span className="font-semibold text-slate-900 dark:text-white">AI / ML:</span>
                <p className="text-slate-600 dark:text-slate-400">Python, Machine Learning, Computer Vision, Data Analysis</p>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
              <Code2 className="w-4 h-4" /> Featured Projects
            </h3>
            <div className="space-y-3">
              {projects.slice(0, 4).map((proj) => (
                <div key={proj.id} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200">
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{proj.title}</h4>
                    <span className="text-[11px] font-medium text-blue-600 dark:text-blue-400">{proj.category}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{proj.description}</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.technologies.map((t) => (
                      <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

