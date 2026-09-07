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
import { GlassCard } from '../../components/common/GlassCard';
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 font-sans">
      {/* 1. Header */}
      <SectionHeader
        badge="Credentials"
        badgeVariant="cyan"
        title="Certificates &"
        highlightText="Technical Verifications"
        description="Verified credentials, academic specializations, and foundational machine learning course certifications."
      />

      {/* 2. Search Box */}
      <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-[#090e1a] border border-slate-800">
        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{certificates.length} Verified Credentials Registered</span>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search certificate or ID..."
            className="w-full pl-10 pr-4 py-2 bg-[#060a14] border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
          />
        </div>
      </div>

      {/* 3. Certificate Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.map((cert) => (
          <GlassCard
            key={cert.id}
            className="p-6 border-slate-800/80 hover:border-cyan-500/40 group flex flex-col justify-between"
            glowColor="cyan"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-300">
                  <Award className="w-6 h-6" />
                </div>
                {cert.verified && (
                  <Badge variant="emerald" size="sm" icon={<CheckCircle2 className="w-3 h-3" />}>
                    Verified
                  </Badge>
                )}
              </div>

              <div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  {cert.organization}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs font-mono text-slate-400">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[11px] text-slate-500">
                    <Calendar className="w-3 h-3 text-cyan-400" /> Date
                  </span>
                  <span className="text-slate-300">{cert.issueDate}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[11px] text-slate-500">
                    <Hash className="w-3 h-3 text-indigo-400" /> ID
                  </span>
                  <span className="text-cyan-400 font-mono text-[11px]">{cert.credentialId}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-800/60 flex items-center justify-between">
              <button
                onClick={() => setSelectedCert(cert)}
                className="w-full py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-cyan-500 text-slate-300 hover:text-slate-950 text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
              >
                <span>View Certificate Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Certificate Viewer Modal */}
      <Modal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title="Certificate Verification"
        subtitle="Cryptographic & Academic Credential Record"
        maxWidth="md"
      >
        {selectedCert && (
          <div className="space-y-5 font-sans">
            <div className="p-6 rounded-2xl bg-[#080d19] border border-slate-800 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 flex items-center justify-center mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">{selectedCert.name}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{selectedCert.organization}</p>
              </div>
              <Badge variant="live" size="sm" pulse>
                Authentic Credential
              </Badge>
            </div>

            <div className="space-y-2 text-xs font-mono bg-[#050811] p-4 rounded-xl border border-slate-900">
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-500">Credential ID:</span>
                <span className="text-cyan-300">{selectedCert.credentialId}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-500">Issued Year:</span>
                <span className="text-slate-300">{selectedCert.issueDate}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Verification Status:</span>
                <span className="text-emerald-400">Verified System Record</span>
              </div>
            </div>

            <Button
              size="md"
              variant="gradient"
              className="w-full"
              onClick={() => setSelectedCert(null)}
            >
              Done
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
};
