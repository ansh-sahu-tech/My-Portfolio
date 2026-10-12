import { 
  FileDown, 
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

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = settings.resumeUrl || '/resume.pdf';
    link.download = 'Ansh_Sahu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 font-sans pb-16">
      {/* Top Left Back Navigation */}
      <ScrollReveal>
        <div className="mb-4 sm:mb-6">
          <BackButton />
        </div>
      </ScrollReveal>

      {/* 1. Header & Actions */}
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#CCD5AE]">
          <div>
            <Badge variant="brand" size="sm" className="mb-2">
              Curriculum Vitae
            </Badge>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#24211D] tracking-tight">
              Ansh Sahu — Frontend Developer Resume
            </h1>
            <p className="text-xs text-[#575249] mt-1">
              Frontend Developer (ansh.developer) • React &amp; Next.js • Sanskriti University (2023–2027)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline" icon={<ExternalLink className="w-3.5 h-3.5" />}>
                View PDF
              </Button>
            </a>

            <Button size="sm" variant="primary" onClick={handleDownloadPdf} icon={<FileDown className="w-3.5 h-3.5" />}>
              Download PDF
            </Button>
          </div>
        </div>
      </ScrollReveal>

      {/* 2. Formatted Resume Card */}
      <ScrollReveal delay={0.1}>
        <div className="bg-[#FFFFFF] border-2 border-[#CCD5AE] rounded-2xl p-4 sm:p-8 lg:p-10 shadow-sm space-y-6 sm:space-y-8 transition-shadow duration-300">
          {/* Header Profile Info */}
          <div className="border-b border-[#CCD5AE] pb-6 space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#24211D]">{settings.name}</h2>
              <span className="text-xs font-semibold text-[#D4A373]">{settings.positioning}</span>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-[#575249] pt-2">
              <a href={`mailto:${settings.email}`} className="flex items-center gap-1.5 hover:text-[#D4A373] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#D4A373]" /> {settings.email}
              </a>
              <a href={`tel:${settings.phone}`} className="flex items-center gap-1.5 hover:text-[#D4A373] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#D4A373]" /> {settings.phone}
              </a>
              <a href={settings.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#D4A373] transition-colors">
                <GithubIcon size={14} className="text-[#D4A373]" /> {settings.githubUrl}
              </a>
              <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#D4A373] transition-colors">
                <LinkedinIcon size={14} className="text-[#D4A373]" /> {settings.linkedinUrl}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D4A373]">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-[#575249] leading-relaxed text-justify">
              {settings.aboutDescription}
            </p>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D4A373] flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#D4A373]" /> Education
            </h3>
            <div className="p-4 rounded-lg bg-[#FAEDCD]/40 border border-[#CCD5AE] space-y-1.5 hover:-translate-y-0.5 hover:border-[#D4A373] hover:shadow-sm transition-all duration-200">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h4 className="text-sm font-bold text-[#24211D]">
                  B.Tech in Computer Science & Engineering (Artificial Intelligence & Machine Learning)
                </h4>
                <span className="text-xs font-semibold text-[#D4A373]">2023 — 2027</span>
              </div>
              <p className="text-xs font-medium text-[#575249] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#D4A373]" /> Sanskriti University, Mathura, Uttar Pradesh, India
              </p>
              <p className="text-xs text-[#575249] leading-relaxed pt-1 text-justify">
                Relevant Coursework: Data Structures & Algorithms, Web Technologies, Database Systems (DBMS), Operating Systems, Machine Learning, Computer Vision.
              </p>
            </div>
          </div>

          {/* Technical Competencies Matrix */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D4A373] flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#D4A373]" /> Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-lg bg-[#FAEDCD]/40 border border-[#CCD5AE] space-y-1 hover:-translate-y-0.5 hover:border-[#D4A373] hover:shadow-sm transition-all duration-200">
                <span className="font-semibold text-[#24211D]">Frontend:</span>
                <p className="text-[#575249]">HTML, CSS, JavaScript, React, Next.js, Tailwind CSS</p>
              </div>
              <div className="p-3.5 rounded-lg bg-[#FAEDCD]/40 border border-[#CCD5AE] space-y-1 hover:-translate-y-0.5 hover:border-[#D4A373] hover:shadow-sm transition-all duration-200">
                <span className="font-semibold text-[#24211D]">Development:</span>
                <p className="text-[#575249]">Git, GitHub, REST APIs, Responsive Design</p>
              </div>
              <div className="p-3.5 rounded-lg bg-[#FAEDCD]/40 border border-[#CCD5AE] space-y-1 hover:-translate-y-0.5 hover:border-[#D4A373] hover:shadow-sm transition-all duration-200">
                <span className="font-semibold text-[#24211D]">AI / ML:</span>
                <p className="text-[#575249]">Python, Machine Learning, Computer Vision, Data Analysis</p>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D4A373] flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-[#D4A373]" /> Featured Projects
            </h3>
            <div className="space-y-3">
              {projects.slice(0, 4).map((proj) => (
                <div key={proj.id} className="p-4 rounded-lg bg-[#FAEDCD]/30 border border-[#CCD5AE] space-y-1.5 hover:-translate-y-0.5 hover:border-[#D4A373] hover:shadow-sm transition-all duration-200">
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-sm font-bold text-[#24211D]">{proj.title}</h4>
                    <span className="text-[11px] font-medium text-[#D4A373]">{proj.category}</span>
                  </div>
                  <p className="text-xs text-[#575249] leading-relaxed text-justify">{proj.description}</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.technologies.map((t) => (
                      <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#FFFFFF] border border-[#CCD5AE] text-[#24211D]">
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
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D4A373] flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#D4A373]" /> Certifications & Specializations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                {certificates.map((cert) => (
                  <div key={cert.id} className="p-3 rounded-lg bg-[#FAEDCD]/30 border border-[#CCD5AE] flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="font-semibold text-[#24211D] truncate">{cert.name}</p>
                      <p className="text-[11px] text-[#575249]">{cert.organization}</p>
                    </div>
                    <span className="text-[10px] font-medium text-[#575249] whitespace-nowrap">
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

