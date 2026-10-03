import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Eye, 
  ArrowRight, 
  FileDown, 
  MapPin, 
  Calendar, 
  Layers, 
  Cpu, 
  Target, 
  Mail, 
  Phone, 
  Code2 
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { SectionHeader } from '../../components/common/SectionHeader';
import { Button } from '../../components/common/Button';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { GithubIcon, LinkedinIcon, SocialTooltip } from '../../components/common/SocialIcons';

export const AboutPage: React.FC = () => {
  const { settings } = useData();

  const focusAreas = [
    {
      title: 'Frontend Engineering',
      icon: <Code2 className="w-5 h-5 text-[#22D3EE]" />,
      desc: 'Developing responsive, accessible single-page applications with React, Next.js, and Tailwind CSS.'
    },
    {
      title: 'AI & Machine Learning Foundations',
      icon: <Cpu className="w-5 h-5 text-[#22D3EE]" />,
      desc: 'Supervised predictive modeling, data cleaning with Pandas & NumPy, and algorithmic problem-solving.'
    },
    {
      title: 'Computer Vision',
      icon: <Eye className="w-5 h-5 text-[#22D3EE]" />,
      desc: 'Real-time video processing, facial landmark estimation (EAR/MAR), and edge-optimized camera inference.'
    },
    {
      title: 'Component Architecture & APIs',
      icon: <Layers className="w-5 h-5 text-[#22D3EE]" />,
      desc: 'Designing reusable, type-safe components, integrating RESTful backends, and optimizing rendering speed.'
    }
  ];

  const engineeringPrinciples = [
    {
      title: 'Clean, Pragmatic Code',
      desc: 'Prioritizing readable, maintainable, and well-structured code over clever but brittle hacks.'
    },
    {
      title: 'Mobile-First Responsiveness',
      desc: 'Ensuring layouts, touch targets, and typography feel natural and fluid across every screen size.'
    },
    {
      title: 'Continuous Growth',
      desc: 'Actively mastering modern web standards, algorithms, and applied machine learning architectures.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 font-sans pb-16">
      {/* 1. Header */}
      <ScrollReveal>
        <SectionHeader
          headingTag="h1"
          badge="About Me"
          badgeVariant="brand"
          title="Ansh Sahu | Software Engineer with"
          highlightText="AI/ML Foundations"
          description="A deeper look into my background as a Software Engineer, academic studies at Sanskriti University, core focus areas, and technical philosophy."
        />
      </ScrollReveal>

      {/* 2. Main Profile Overview Card */}
      <ScrollReveal delay={0.1}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Bio & Academic Info Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#121923] border border-[#263342] rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 ease-out space-y-6 hover:-translate-y-0.5 group">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="relative shrink-0">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-[#263342] bg-[#1A2430] shadow-sm">
                    <img
                      src="/ansh-profile.jpg"
                      alt="Ansh Sahu - Software Engineer &amp; Developer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div>
                    <h3 className="text-2xl font-bold text-[#F8FAFC]">{settings.name}</h3>
                    <p className="text-sm font-semibold text-[#22D3EE]">{settings.role}</p>
                  </div>
                  <p className="text-xs text-[#94A3B8]">
                    {settings.university} • B.Tech CSE (AI &amp; ML) 2023–2027
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-1.5">
                    <SocialTooltip label="GitHub">
                      <a
                        href={settings.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-[#1A2430] hover:bg-[#263342] text-[#F8FAFC] border border-[#263342] text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:outline-none flex items-center gap-1.5"
                      >
                        <GithubIcon size={13} />
                        <span>GitHub</span>
                      </a>
                    </SocialTooltip>

                    <SocialTooltip label="LinkedIn">
                      <a
                        href={settings.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-[#1A2430] hover:bg-[#263342] text-[#22D3EE] text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 active:scale-95 border border-[#263342] focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:outline-none flex items-center gap-1.5"
                      >
                        <LinkedinIcon size={13} />
                        <span>LinkedIn</span>
                      </a>
                    </SocialTooltip>

                    <SocialTooltip label="Email">
                      <a
                        href={`mailto:${settings.email}`}
                        className="px-2.5 py-1 rounded-lg bg-[#1A2430] hover:bg-[#263342] text-[#F8FAFC] border border-[#263342] text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:outline-none flex items-center gap-1.5"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#22D3EE]" />
                        <span>Email</span>
                      </a>
                    </SocialTooltip>

                    <SocialTooltip label="Phone">
                      <a
                        href={`tel:${settings.phone}`}
                        className="px-2.5 py-1 rounded-lg bg-[#1A2430] hover:bg-[#263342] text-[#F8FAFC] border border-[#263342] text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:outline-none flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#22D3EE]" />
                        <span>{settings.phone}</span>
                      </a>
                    </SocialTooltip>
                  </div>
                </div>
              </div>

              <p className="text-[#F8FAFC] text-sm sm:text-base leading-relaxed">
                Hello! I'm <strong className="text-[#22D3EE]">Ansh</strong>, an undergraduate Computer Science student at <strong className="text-[#F8FAFC]">Sanskriti University</strong> specializing in Artificial Intelligence and Machine Learning (Class of 2027).
              </p>

              <p className="text-[#94A3B8] text-sm leading-relaxed">
                My primary passion is **Frontend Development** — constructing responsive, accessible, and fast web applications using React, Next.js, and modern CSS. My coursework in AI & ML provides me with a rigorous mathematical and algorithmic foundation, enabling me to handle complex state, data flows, and intelligent features with confidence.
              </p>

              {/* Key Academic Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-lg bg-[#1A2430] border border-[#263342] space-y-1 hover:border-[#22D3EE] transition-colors">
                  <span className="text-xs font-medium text-[#94A3B8] flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#22D3EE]" /> Degree & Major
                  </span>
                  <p className="text-xs font-bold text-[#F8FAFC]">B.Tech CSE (AI & ML)</p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#1A2430] border border-[#263342] space-y-1 hover:border-[#22D3EE] transition-colors">
                  <span className="text-xs font-medium text-[#94A3B8] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#22D3EE]" /> University & Location
                  </span>
                  <p className="text-xs font-bold text-[#F8FAFC]">Sanskriti University, Mathura</p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#1A2430] border border-[#263342] space-y-1 hover:border-[#22D3EE] transition-colors">
                  <span className="text-xs font-medium text-[#94A3B8] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#22D3EE]" /> Timeline
                  </span>
                  <p className="text-xs font-bold text-[#F8FAFC]">2023 — 2027 (Expected)</p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#1A2430] border border-[#263342] space-y-1 hover:border-[#22D3EE] transition-colors">
                  <span className="text-xs font-medium text-[#94A3B8] flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-[#22D3EE]" /> Current Status
                  </span>
                  <p className="text-xs font-bold text-[#22D3EE]">Open for Frontend Roles</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#263342]">
                <Link to="/contact">
                  <Button size="md" variant="primary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                    Get in Touch
                  </Button>
                </Link>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button size="md" variant="secondary" icon={<FileDown className="w-4 h-4" />}>
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Focus Areas Grid */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-bold text-[#F8FAFC] tracking-tight flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#22D3EE]" />
              Core Focus Areas
            </h3>

            <div className="space-y-3">
              {focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-[#121923] border border-[#263342] rounded-xl p-4 shadow-sm hover:shadow-md hover:border-[#22D3EE] hover:-translate-y-0.5 transition-all duration-300 ease-out"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-[#1A2430] border border-[#263342] shrink-0">
                      {area.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#F8FAFC]">{area.title}</h4>
                      <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 3. Engineering Philosophy & Approach */}
      <ScrollReveal delay={0.15}>
        <div className="space-y-6 pt-4">
          <SectionHeader
            badge="Philosophy"
            badgeVariant="brand"
            title="Pragmatic"
            highlightText="Engineering Approach"
            description="The practical engineering principles guiding my development work."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engineeringPrinciples.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#121923] border border-[#263342] rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#22D3EE] hover:-translate-y-1 transition-all duration-300 ease-out space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1A2430] border border-[#263342] text-[#22D3EE] flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-[#F8FAFC]">{item.title}</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
