import { 
  FileDown, 
  Printer, 
  Mail, 
  Phone,
  GraduationCap, 
  Code2, 
  Layers, 
  MapPin,
  ExternalLink,
  Award
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { BackButton } from '../../components/common/BackButton';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { GithubIcon, LinkedinIcon } from '../../components/common/SocialIcons';

export const ResumePage: React.FC = () => {
  const { settings, projects, certificates } = useData();

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = settings.resumeUrl || '/resume.pdf';
    link.download = 'Ansh_Sahu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans pb-16">
      {/* Top Left Back Navigation */}
      <ScrollReveal>
        <div className="flex items-center justify-start pt-1 -mb-4 sm:-mb-5">
          <BackButton />
        </div>
      </ScrollReveal>

      {/* 1. Header & Actions */}
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#263342]">
          <div>
            <Badge variant="brand" size="sm" className="mb-2">
              Curriculum Vitae
            </Badge>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight">
              Ansh Sahu — Frontend Developer Resume
            </h1>
            <p className="text-xs text-[#94A3B8] mt-1">
              Frontend Developer (ansh.developer) • React &amp; Next.js • Sanskriti University (2023–2027)
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
        <div className="bg-[#121923] border border-[#263342] rounded-xl p-4 sm:p-8 lg:p-10 shadow-sm space-y-8 transition-shadow duration-300">
          {/* Header Profile Info */}
          <div className="border-b border-[#263342] pb-6 space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC]">{settings.name}</h2>
              <span className="text-xs font-semibold text-[#22D3EE]">{settings.positioning}</span>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-[#94A3B8] pt-2">
              <a href={`mailto:${settings.email}`} className="flex items-center gap-1.5 hover:text-[#22D3EE] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#22D3EE]" /> {settings.email}
              </a>
              <a href={`tel:${settings.phone}`} className="flex items-center gap-1.5 hover:text-[#22D3EE] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#22D3EE]" /> {settings.phone}
              </a>
              <a href={settings.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#22D3EE] transition-colors">
                <GithubIcon size={14} className="text-[#94A3B8]" /> {settings.githubUrl}
              </a>
              <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#22D3EE] transition-colors">
                <LinkedinIcon size={14} className="text-[#22D3EE]" /> {settings.linkedinUrl}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#22D3EE]">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed text-justify">
              {settings.aboutDescription}
            </p>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#22D3EE] flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" /> Education
            </h3>
            <div className="p-4 rounded-lg bg-[#1A2430] border border-[#263342] space-y-1.5 hover:-translate-y-0.5 hover:border-[#22D3EE] hover:shadow-sm transition-all duration-200">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h4 className="text-sm font-bold text-[#F8FAFC]">
                  B.Tech in Computer Science & Engineering (Artificial Intelligence & Machine Learning)
                </h4>
                <span className="text-xs font-semibold text-[#22D3EE]">2023 — 2027</span>
              </div>
              <p className="text-xs font-medium text-[#94A3B8] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#22D3EE]" /> Sanskriti University, Mathura, Uttar Pradesh, India
              </p>
              <p className="text-xs text-[#94A3B8] leading-relaxed pt-1 text-justify">
                Relevant Coursework: Data Structures & Algorithms, Web Technologies, Database Systems (DBMS), Operating Systems, Machine Learning, Computer Vision.
              </p>
            </div>
          </div>

          {/* Technical Competencies Matrix */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#22D3EE] flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-lg bg-[#1A2430] border border-[#263342] space-y-1 hover:-translate-y-0.5 hover:border-[#22D3EE] hover:shadow-sm transition-all duration-200">
                <span className="font-semibold text-[#F8FAFC]">Frontend:</span>
                <p className="text-[#94A3B8]">HTML, CSS, JavaScript, React, Next.js, Tailwind CSS</p>
              </div>
              <div className="p-3.5 rounded-lg bg-[#1A2430] border border-[#263342] space-y-1 hover:-translate-y-0.5 hover:border-[#22D3EE] hover:shadow-sm transition-all duration-200">
                <span className="font-semibold text-[#F8FAFC]">Development:</span>
                <p className="text-[#94A3B8]">Git, GitHub, REST APIs, Responsive Design</p>
              </div>
              <div className="p-3.5 rounded-lg bg-[#1A2430] border border-[#263342] space-y-1 hover:-translate-y-0.5 hover:border-[#22D3EE] hover:shadow-sm transition-all duration-200">
                <span className="font-semibold text-[#F8FAFC]">AI / ML:</span>
                <p className="text-[#94A3B8]">Python, Machine Learning, Computer Vision, Data Analysis</p>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#22D3EE] flex items-center gap-1.5">
              <Code2 className="w-4 h-4" /> Featured Projects
            </h3>
            <div className="space-y-3">
              {projects.slice(0, 4).map((proj) => (
                <div key={proj.id} className="p-4 rounded-lg bg-[#1A2430] border border-[#263342] space-y-1.5 hover:-translate-y-0.5 hover:border-[#22D3EE] hover:shadow-sm transition-all duration-200">
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-sm font-bold text-[#F8FAFC]">{proj.title}</h4>
                    <span className="text-[11px] font-medium text-[#22D3EE]">{proj.category}</span>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed text-justify">{proj.description}</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.technologies.map((t) => (
                      <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#121923] border border-[#263342] text-[#F8FAFC]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Specializations */}
          {certificates && certificates.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#22D3EE] flex items-center gap-1.5">
                <Award className="w-4 h-4" /> Certifications & Specializations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                {certificates.map((cert) => (
                  <div key={cert.id} className="p-3 rounded-lg bg-[#1A2430] border border-[#263342] flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="font-semibold text-[#F8FAFC] truncate">{cert.name}</p>
                      <p className="text-[11px] text-[#94A3B8]">{cert.organization}</p>
                    </div>
                    <span className="text-[10px] font-medium text-[#94A3B8] whitespace-nowrap">
                      {cert.issueDate}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </ScrollReveal>
    </div>
  );
};

