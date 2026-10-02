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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 font-sans pb-16">
      {/* 1. Header */}
      <ScrollReveal>
        <SectionHeader
          badge="Credentials"
          badgeVariant="brand"
          title="Technical"
          highlightText="Certificates & Accreditations"
          description="Verified course credentials and technical specializations completed during my undergraduate studies."
        />
      </ScrollReveal>

      {/* 2. Search & Overview */}
      <ScrollReveal delay={0.08}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{certificates.length} Verified Credentials Available</span>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search certificate or ID..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 transition-all duration-200"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* 3. Certificate Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.map((cert, idx) => (
          <ScrollReveal key={cert.id} delay={idx * 0.05}>
            <div
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between h-full group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform duration-200">
                    <Award className="w-5 h-5" />
                  </div>
                  {cert.verified && (
                    <Badge variant="emerald" size="sm" icon={<CheckCircle2 className="w-3 h-3" />}>
                      Verified
                    </Badge>
                  )}
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                    {cert.organization}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-[11px] text-slate-400">
                      <Calendar className="w-3 h-3 text-blue-600" /> Year
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{cert.issueDate}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-[11px] text-slate-400">
                      <Hash className="w-3 h-3 text-indigo-600" /> Credential ID
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 font-mono text-[11px]">{cert.credentialId}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800">
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
            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">{selectedCert.name}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{selectedCert.organization}</p>
              </div>
              <Badge variant="live" size="sm">
                Verified Credential
              </Badge>
            </div>

            <div className="space-y-2 text-xs bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500">Credential ID:</span>
                <span className="text-slate-900 dark:text-white font-mono font-semibold">{selectedCert.credentialId}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-500">Issued Year:</span>
                <span className="text-slate-700 dark:text-slate-300 font-semibold">{selectedCert.issueDate}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Verification Status:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Active Record</span>
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
