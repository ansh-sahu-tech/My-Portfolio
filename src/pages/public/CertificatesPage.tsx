import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  ShieldCheck, 
  Calendar, 
  Hash, 
  CheckCircle2, 
  Search
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { SectionHeader } from '../../components/common/SectionHeader';
import { BackButton } from '../../components/common/BackButton';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { Modal } from '../../components/common/Modal';
import type { Certificate } from '../../types';

export const CertificatesPage: React.FC = () => {
  const { certificates } = useData();
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCerts = certificates.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.credentialId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 font-sans pb-16">
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
          badge="Credentials"
          badgeVariant="brand"
          title="Ansh Sahu | Technical"
          highlightText="Certificates &amp; Accreditations"
          description="Verified course credentials, AI/ML accreditations, and software engineering certificates completed by Ansh Sahu (ansh.developer)."
        />
      </ScrollReveal>

      {/* 2. Search & Overview */}
      <ScrollReveal delay={0.08}>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-[#FAEDCD]/50 border-2 border-[#CCD5AE] shadow-sm">
          <div className="flex items-center gap-2 text-xs text-[#575249] font-medium">
            <ShieldCheck className="w-4 h-4 text-[#D4A373] shrink-0" />
            <span>{certificates.length} Verified Credentials Available</span>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#575249]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search certificate or ID..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#FFFFFF] border border-[#CCD5AE] text-[#24211D] placeholder:text-[#575249] hover:border-[#D4A373] focus:outline-none focus:ring-2 focus:ring-[#D4A373]/20 focus:border-[#D4A373] transition-all duration-200 min-h-[38px]"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* 3. Certificate Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredCerts.map((cert, idx) => (
          <ScrollReveal key={cert.id} delay={idx * 0.05}>
            <div
              className="bg-[#FFFFFF] border-2 border-[#CCD5AE] rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md hover:border-[#D4A373] hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between h-full group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-[#E9EDC9] border border-[#CCD5AE] text-[#D4A373] group-hover:scale-105 transition-transform duration-200">
                    <Award className="w-5 h-5 text-[#D4A373]" />
                  </div>
                  {cert.verified && (
                    <Badge variant="emerald" size="sm" icon={<CheckCircle2 className="w-3 h-3" />}>
                      Verified
                    </Badge>
                  )}
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#24211D] group-hover:text-[#D4A373] transition-colors duration-200">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-[#575249] mt-1 font-medium">
                    {cert.organization}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#CCD5AE] space-y-1.5 text-xs text-[#575249]">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-[11px] text-[#575249]">
                      <Calendar className="w-3 h-3 text-[#D4A373]" /> Year
                    </span>
                    <span className="text-[#24211D] font-medium">{cert.issueDate}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-[11px] text-[#575249]">
                      <Hash className="w-3 h-3 text-[#D4A373]" /> Credential ID
                    </span>
                    <span className="text-[#24211D] font-mono text-[11px]">{cert.credentialId}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-[#CCD5AE]">
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full text-xs"
                  onClick={() => setSelectedCert(cert)}
                  icon={<ExternalLink className="w-3.5 h-3.5" />}
                  iconPosition="right"
                >
                  View Verification
                </Button>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Certificate Viewer Modal */}
      <Modal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title="Certificate Verification"
        subtitle="Academic & Technical Credential Record"
        maxWidth="md"
      >
        {selectedCert && (
          <div className="space-y-5 font-sans">
            <div className="p-6 rounded-xl bg-[#FAEDCD]/50 border border-[#CCD5AE] text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#E9EDC9] border border-[#CCD5AE] text-[#D4A373] flex items-center justify-center mx-auto">
                <Award className="w-6 h-6 text-[#D4A373]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#24211D]">{selectedCert.name}</h4>
                <p className="text-xs text-[#575249] mt-0.5">{selectedCert.organization}</p>
              </div>
              <Badge variant="live" size="sm">
                Verified Credential
              </Badge>
            </div>

            <div className="space-y-2 text-xs bg-[#FFFFFF] p-4 rounded-xl border border-[#CCD5AE]">
              <div className="flex justify-between py-1 border-b border-[#CCD5AE]">
                <span className="text-[#575249]">Credential ID:</span>
                <span className="text-[#24211D] font-mono font-semibold">{selectedCert.credentialId}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#CCD5AE]">
                <span className="text-[#575249]">Issued Year:</span>
                <span className="text-[#24211D] font-semibold">{selectedCert.issueDate}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#575249]">Verification Status:</span>
                <span className="text-[#D4A373] font-semibold">Active Record</span>
              </div>
            </div>

            <Button
              size="md"
              variant="primary"
              className="w-full"
              onClick={() => setSelectedCert(null)}
            >
              Close
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
};
