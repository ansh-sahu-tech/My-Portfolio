import React, { useState } from 'react';
import { Plus, Edit3, Trash2, Award, Search } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { useToast } from '../../context/ToastContext';
import type { Certificate } from '../../types';
import { GlassCard } from '../../components/common/GlassCard';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';

export const AdminCertificatesPage: React.FC = () => {
  const { certificates, addCertificate, updateCertificate, deleteCertificate } = useData();
  const { success, error } = useToast();

  const [modalOpen, setModalOpen] = useState(false);
  const [editingCert, setEditingCert] = useState<Certificate | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    issueDate: '2024',
    credentialId: '',
    credentialUrl: '',
    verified: true,
  });

  const handleOpenCreate = () => {
    setEditingCert(null);
    setFormData({
      name: '',
      organization: '',
      issueDate: '2024',
      credentialId: `ANSH-CERT-${Date.now().toString().slice(-4)}`,
      credentialUrl: '',
      verified: true,
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (cert: Certificate) => {
    setEditingCert(cert);
    setFormData({
      name: cert.name,
      organization: cert.organization,
      issueDate: cert.issueDate,
      credentialId: cert.credentialId,
      credentialUrl: cert.credentialUrl || '',
      verified: cert.verified,
    });
    setModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.organization.trim()) {
      error('Fields Required', 'Certificate Name and Organization are required.');
      return;
    }

    if (editingCert) {
      updateCertificate(editingCert.id, {
        name: formData.name.trim(),
        organization: formData.organization.trim(),
        issueDate: formData.issueDate.trim(),
        credentialId: formData.credentialId.trim(),
        credentialUrl: formData.credentialUrl.trim() || undefined,
        verified: formData.verified,
      });
      success('Certificate Updated', `"${formData.name}" updated.`);
    } else {
      addCertificate({
        name: formData.name.trim(),
        organization: formData.organization.trim(),
        issueDate: formData.issueDate.trim(),
        credentialId: formData.credentialId.trim(),
        credentialUrl: formData.credentialUrl.trim() || undefined,
        verified: formData.verified,
      });
      success('Certificate Created', `"${formData.name}" added.`);
    }

    setModalOpen(false);
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Delete certificate "${name}"?`)) {
      deleteCertificate(id);
      success('Certificate Deleted', `"${name}" removed.`);
    }
  };

  const filteredCerts = certificates.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.organization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 font-sans">
      {/* 1. Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Certificates Management</h1>
          <p className="text-xs text-slate-400 mt-1">
            Manage academic certificates, credentials, and verification IDs.
          </p>
        </div>

        <Button size="md" variant="gradient" onClick={handleOpenCreate} icon={<Plus className="w-4 h-4" />}>
          Add Certificate
        </Button>
      </div>

      {/* 2. Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#090e1a] border border-slate-800">
        <div className="text-xs font-mono text-slate-400">
          Showing <span className="text-cyan-300 font-bold">{filteredCerts.length}</span> Active Certificates
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

      {/* 3. List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCerts.map((cert) => (
          <GlassCard key={cert.id} className="p-5 border-slate-800 space-y-3" glowColor="cyan">
            <div className="flex items-center justify-between">
              <Award className="w-6 h-6 text-cyan-400" />
              <Badge variant="emerald" size="sm">
                Verified
              </Badge>
            </div>

            <div>
              <h3 className="text-base font-bold text-white">{cert.name}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{cert.organization}</p>
            </div>

            <div className="pt-2 border-t border-slate-800 text-xs font-mono text-slate-400 space-y-1">
              <div>ID: <span className="text-cyan-300">{cert.credentialId}</span></div>
              <div>Year: <span className="text-slate-200">{cert.issueDate}</span></div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex justify-end gap-2">
              <Button size="sm" variant="secondary" onClick={() => handleOpenEdit(cert)} icon={<Edit3 className="w-3.5 h-3.5" />}>
                Edit
              </Button>
              <button
                onClick={() => handleDelete(cert.id, cert.name)}
                className="p-2 rounded-xl bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* 4. Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingCert ? 'Edit Certificate' : 'Add Certificate'}
        subtitle="Manage credential metadata"
        maxWidth="md"
      >
        <form onSubmit={handleSave} className="space-y-4 font-sans text-xs">
          <div className="space-y-1">
            <label className="font-mono font-medium text-slate-300">Certificate Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Deep Learning Foundations"
              className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="space-y-1">
            <label className="font-mono font-medium text-slate-300">Issuing Organization *</label>
            <input
              type="text"
              required
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              placeholder="e.g. Sanskriti University Lab / Technical Academy"
              className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-mono font-medium text-slate-300">Issue Date / Year</label>
              <input
                type="text"
                value={formData.issueDate}
                onChange={(e) => setFormData({ ...formData, issueDate: e.target.value })}
                placeholder="2024"
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 font-mono"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono font-medium text-slate-300">Credential ID</label>
              <input
                type="text"
                value={formData.credentialId}
                onChange={(e) => setFormData({ ...formData, credentialId: e.target.value })}
                placeholder="ANSH-CERT-001"
                className="w-full px-3 py-2 bg-[#070b14] border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 font-mono"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
            <Button type="button" variant="ghost" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="gradient">
              {editingCert ? 'Save Changes' : 'Add Certificate'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
