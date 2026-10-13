import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { SectionHeader } from '../../components/common/SectionHeader';
import { Button } from '../../components/common/Button';
import { BackButton } from '../../components/common/BackButton';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { SocialTooltip } from '../../components/common/SocialIcons';
import { RealFrontendIcon, RealAiBrainIcon } from '../../components/common/RealisticIcons';
import {
  RealisticMapPinIcon,
  RealisticCalendarIcon,
  RealisticTargetIcon,
  RealisticPhoneIcon,
  RealisticEmailIcon,
  RealisticLinkedinIcon,
  RealisticGithubBadgeIcon,
  RealisticGradCapIcon,
  RealisticLayersIcon,
  RealisticVisionLensIcon,
  RealisticPragmaticCodeIcon,
  RealisticResponsiveDuoIcon,
  RealisticContinuousGrowthIcon,
  RealisticArrowRightIcon,
  RealisticDownloadDocIcon,
} from '../../components/common/RealisticAboutIcons';

export const AboutPage: React.FC = () => {
  const { settings } = useData();

  const focusAreas = [
    {
      title: 'Frontend Engineering',
      icon: <RealFrontendIcon size={30} />,
      desc: 'Developing responsive, accessible single-page applications with React, Next.js, and Tailwind CSS.'
    },
    {
      title: 'AI & Machine Learning Foundations',
      icon: <RealAiBrainIcon size={30} />,
      desc: 'Supervised predictive modeling, data cleaning with Pandas & NumPy, and algorithmic problem-solving.'
    },
    {
      title: 'Computer Vision',
      icon: <RealisticVisionLensIcon size={30} />,
      desc: 'Real-time video processing, facial landmark estimation (EAR/MAR), and edge-optimized camera inference.'
    },
    {
      title: 'Component Architecture & APIs',
      icon: <RealisticLayersIcon size={30} />,
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 font-sans pb-16">
      {/* Top Left Back Navigation */}
      <ScrollReveal>
        <div className="mb-4 sm:mb-6">
          <BackButton />
        </div>
      </ScrollReveal>

      {/* 1. Header */}
      <ScrollReveal>
        <SectionHeader
          headingTag="h1"
          badge="About Me"
          badgeVariant="brand"
          title="Ansh Sahu | Frontend Developer with"
          highlightText="AI/ML Foundations"
          description="A deeper look into my background as a Frontend Developer, academic studies at Sanskriti University, core focus areas, and technical philosophy."
        />
      </ScrollReveal>

      {/* 2. Main Profile Overview Card */}
      <ScrollReveal delay={0.1}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Bio & Academic Info Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border-2 border-[#CCD5AE] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm hover:shadow-card-hover transition-all duration-300 ease-out space-y-5 sm:space-y-6 group">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div className="relative shrink-0">
                  <div className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#CCD5AE] bg-[#FAEDCD] shadow-sm">
                    <img
                      src="/ansh-profile.jpg?v=2"
                      alt="Ansh Sahu - Frontend Developer Portfolio"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#24211D]">{settings.name}</h3>
                    <p className="text-xs sm:text-sm font-bold text-[#D4A373]">{settings.role}</p>
                  </div>
                  <p className="text-xs text-[#575249]">
                    {settings.university} • B.Tech CSE (AI &amp; ML) 2023–2027
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1.5">
                    <SocialTooltip label="GitHub">
                      <a
                        href={settings.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-[#E9EDC9] hover:bg-[#CCD5AE] text-[#24211D] border border-[#CCD5AE] text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#D4A373] focus-visible:outline-none flex items-center gap-1.5"
                      >
                        <RealisticGithubBadgeIcon size={15} />
                        <span>GitHub</span>
                      </a>
                    </SocialTooltip>

                    <SocialTooltip label="LinkedIn">
                      <a
                        href={settings.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-[#E9EDC9] hover:bg-[#CCD5AE] text-[#24211D] text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-95 border border-[#CCD5AE] focus-visible:ring-2 focus-visible:ring-[#D4A373] focus-visible:outline-none flex items-center gap-1.5"
                      >
                        <RealisticLinkedinIcon size={15} />
                        <span>LinkedIn</span>
                      </a>
                    </SocialTooltip>

                    <SocialTooltip label="Email">
                      <a
                        href={`mailto:${settings.email}`}
                        className="px-2.5 py-1 rounded-lg bg-[#E9EDC9] hover:bg-[#CCD5AE] text-[#24211D] border border-[#CCD5AE] text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#D4A373] focus-visible:outline-none flex items-center gap-1.5"
                      >
                        <RealisticEmailIcon size={15} />
                        <span>Email</span>
                      </a>
                    </SocialTooltip>

                    <SocialTooltip label="Phone">
                      <a
                        href={`tel:${settings.phone}`}
                        className="px-2.5 py-1 rounded-lg bg-[#E9EDC9] hover:bg-[#CCD5AE] text-[#24211D] border border-[#CCD5AE] text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#D4A373] focus-visible:outline-none flex items-center gap-1.5"
                      >
                        <RealisticPhoneIcon size={15} />
                        <span>{settings.phone}</span>
                      </a>
                    </SocialTooltip>
                  </div>
                </div>
              </div>

              <p className="text-[#24211D] text-xs sm:text-sm md:text-base leading-relaxed">
                Hello! I'm <strong className="text-[#D4A373]">Ansh</strong>, an undergraduate Computer Science student at <strong className="text-[#24211D]">Sanskriti University</strong> specializing in Artificial Intelligence and Machine Learning (Class of 2027).
              </p>

              <p className="text-[#575249] text-xs sm:text-sm leading-relaxed">
                My primary passion is <strong>Frontend Development</strong> — constructing responsive, accessible, and fast web applications using React, Next.js, and modern CSS. My coursework in AI &amp; ML provides me with a rigorous mathematical and algorithmic foundation, enabling me to handle complex state, data flows, and intelligent features with confidence.
              </p>

              {/* Key Academic Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] space-y-1 hover:border-[#D4A373] transition-colors">
                  <span className="text-[11px] sm:text-xs font-semibold text-[#575249] flex items-center gap-1.5">
                    <RealisticGradCapIcon size={16} /> Degree &amp; Major
                  </span>
                  <p className="text-xs font-bold text-[#24211D]">B.Tech CSE (AI &amp; ML)</p>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] space-y-1 hover:border-[#D4A373] transition-colors">
                  <span className="text-[11px] sm:text-xs font-semibold text-[#575249] flex items-center gap-1.5">
                    <RealisticMapPinIcon size={16} /> University &amp; Location
                  </span>
                  <p className="text-xs font-bold text-[#24211D]">Sanskriti University, Mathura</p>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] space-y-1 hover:border-[#D4A373] transition-colors">
                  <span className="text-[11px] sm:text-xs font-semibold text-[#575249] flex items-center gap-1.5">
                    <RealisticCalendarIcon size={16} /> Timeline
                  </span>
                  <p className="text-xs font-bold text-[#24211D]">2023 — 2027 (Expected)</p>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] space-y-1 hover:border-[#D4A373] transition-colors">
                  <span className="text-[11px] sm:text-xs font-semibold text-[#575249] flex items-center gap-1.5">
                    <RealisticTargetIcon size={16} /> Current Status
                  </span>
                  <p className="text-xs font-bold text-[#D4A373]">Open for Frontend Roles</p>
                </div>
              </div>

              <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 sm:gap-3 pt-4 border-t border-[#CCD5AE]/60">
                <Link to="/contact" className="w-full xs:w-auto">
                  <Button size="md" variant="primary" icon={<RealisticArrowRightIcon size={16} />} iconPosition="right" className="w-full justify-center">
                    Get in Touch
                  </Button>
                </Link>
                <Button
                  href={settings.resumeUrl || '/resume.pdf'}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                  variant="secondary"
                  icon={<RealisticDownloadDocIcon size={16} />}
                  className="w-full xs:w-auto justify-center"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Focus Areas Grid */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            <h3 className="text-base font-bold text-[#24211D] tracking-tight flex items-center gap-2">
              <RealisticLayersIcon size={20} />
              Core Focus Areas
            </h3>

            <div className="space-y-2.5 sm:space-y-3">
              {focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] border-2 border-[#CCD5AE] rounded-2xl p-4 shadow-sm hover:shadow-card-hover hover:border-[#D4A373] hover:-translate-y-0.5 transition-all duration-300 ease-out"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-[#FEFAE0] border border-[#CCD5AE] shrink-0">
                      {area.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#24211D]">{area.title}</h4>
                      <p className="text-xs text-[#575249] mt-1 leading-relaxed">
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
        <div className="space-y-6 pt-2 sm:pt-4">
          <SectionHeader
            badge="Philosophy"
            badgeVariant="brand"
            title="Pragmatic"
            highlightText="Engineering Approach"
            description="The practical engineering principles guiding my development work."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {engineeringPrinciples.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] border-2 border-[#CCD5AE] rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-card-hover hover:border-[#D4A373] hover:-translate-y-1 transition-all duration-300 ease-out space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-[#FEFAE0] border border-[#CCD5AE] text-[#24211D] flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <div className="p-1 rounded-lg bg-[#E9EDC9] border border-[#CCD5AE]">
                    {idx === 0 && <RealisticPragmaticCodeIcon size={22} />}
                    {idx === 1 && <RealisticResponsiveDuoIcon size={22} />}
                    {idx === 2 && <RealisticContinuousGrowthIcon size={22} />}
                  </div>
                </div>
                <h4 className="text-base font-bold text-[#24211D]">{item.title}</h4>
                <p className="text-xs text-[#575249] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
