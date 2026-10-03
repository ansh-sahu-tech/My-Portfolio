import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  MapPin, 
  MessageSquare, 
  Copy, 
  Check, 
  Phone 
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { useToast } from '../../context/ToastContext';
import { SectionHeader } from '../../components/common/SectionHeader';
import { Button } from '../../components/common/Button';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { GithubIcon, LinkedinIcon } from '../../components/common/SocialIcons';

export const ContactPage: React.FC = () => {
  const { settings, addMessage } = useData();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      await addMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim() || 'Portfolio Inquiry',
        message: formData.message.trim(),
      });

      showToast('Thank you! Your message was sent successfully.', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      showToast('Something went wrong. Please reach out directly via email.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    showToast(`Copied ${label} to clipboard!`, 'info');
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 font-sans pb-16">
      {/* 1. Header */}
      <ScrollReveal>
        <SectionHeader
          headingTag="h1"
          badge="Contact"
          badgeVariant="brand"
          title="Connect with"
          highlightText="Ansh Sahu"
          description="Have a question about a software engineering project, internship opportunity, or developer collaboration? Reach out to Ansh Sahu (ansh.developer) directly."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Col: Contact Information Cards */}
        <ScrollReveal direction="left" className="lg:col-span-5 space-y-4">
          <div className="bg-[#121923] border border-[#263342] rounded-xl p-6 shadow-sm space-y-5 transition-shadow duration-300">
            <h3 className="text-base font-bold text-[#F8FAFC] tracking-tight flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#22D3EE]" />
              Contact Details
            </h3>

            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Reach out through email, inspect repositories on GitHub, or connect on LinkedIn.
            </p>

            <div className="space-y-3 pt-2">
              {/* Email */}
              <div className="group/contact p-3.5 rounded-lg bg-[#1A2430] border border-[#263342] flex items-center justify-between gap-3 hover:-translate-y-0.5 hover:shadow-sm hover:border-[#22D3EE] transition-all duration-200">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-[#121923] text-[#22D3EE] group-hover/contact:scale-105 transition-transform duration-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium text-[#94A3B8] uppercase">Email</p>
                    <a href={`mailto:${settings.email}`} className="text-xs font-semibold text-[#F8FAFC] hover:text-[#22D3EE] transition-colors truncate block">
                      {settings.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(settings.email, 'email')}
                  className="p-1.5 text-[#94A3B8] hover:text-[#22D3EE] active:scale-90 rounded-md focus-visible:ring-2 focus-visible:ring-[#22D3EE] transition-all duration-150"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-[#22D3EE] animate-in fade-in" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* GitHub */}
              <div className="group/contact p-3.5 rounded-lg bg-[#1A2430] border border-[#263342] flex items-center justify-between gap-3 hover:-translate-y-0.5 hover:shadow-sm hover:border-[#22D3EE] transition-all duration-200">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-[#121923] text-[#F8FAFC] group-hover/contact:scale-105 transition-transform duration-200">
                    <GithubIcon size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium text-[#94A3B8] uppercase">GitHub</p>
                    <a href={settings.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#F8FAFC] hover:text-[#22D3EE] transition-colors truncate block">
                      {settings.githubUrl}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(settings.githubUrl, 'GitHub URL')}
                  className="p-1.5 text-[#94A3B8] hover:text-[#22D3EE] active:scale-90 rounded-md focus-visible:ring-2 focus-visible:ring-[#22D3EE] transition-all duration-150"
                  title="Copy GitHub URL"
                >
                  {copiedField === 'GitHub URL' ? <Check className="w-4 h-4 text-[#22D3EE] animate-in fade-in" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="group/contact p-3.5 rounded-lg bg-[#1A2430] border border-[#263342] flex items-center justify-between gap-3 hover:-translate-y-0.5 hover:shadow-sm hover:border-[#22D3EE] transition-all duration-200">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-[#121923] text-[#22D3EE] group-hover/contact:scale-105 transition-transform duration-200">
                    <LinkedinIcon size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium text-[#94A3B8] uppercase">LinkedIn</p>
                    <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#F8FAFC] hover:text-[#22D3EE] transition-colors truncate block">
                      {settings.linkedinUrl}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(settings.linkedinUrl, 'LinkedIn URL')}
                  className="p-1.5 text-[#94A3B8] hover:text-[#22D3EE] active:scale-90 rounded-md focus-visible:ring-2 focus-visible:ring-[#22D3EE] transition-all duration-150"
                  title="Copy LinkedIn URL"
                >
                  {copiedField === 'LinkedIn URL' ? <Check className="w-4 h-4 text-[#22D3EE] animate-in fade-in" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="group/contact p-3.5 rounded-lg bg-[#1A2430] border border-[#263342] flex items-center justify-between gap-3 hover:-translate-y-0.5 hover:shadow-sm hover:border-[#22D3EE] transition-all duration-200">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-[#121923] text-[#22D3EE] group-hover/contact:scale-105 transition-transform duration-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium text-[#94A3B8] uppercase">Phone</p>
                    <a href={`tel:${settings.phone}`} className="text-xs font-semibold text-[#F8FAFC] hover:text-[#22D3EE] transition-colors truncate block">
                      {settings.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(settings.phone, 'phone number')}
                  className="p-1.5 text-[#94A3B8] hover:text-[#22D3EE] active:scale-90 rounded-md focus-visible:ring-2 focus-visible:ring-[#22D3EE] transition-all duration-150"
                  title="Copy phone number"
                >
                  {copiedField === 'phone number' ? <Check className="w-4 h-4 text-[#22D3EE] animate-in fade-in" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="group/contact p-3.5 rounded-lg bg-[#1A2430] border border-[#263342] flex items-center gap-3 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200">
                <div className="p-2 rounded-lg bg-[#121923] text-[#22D3EE] group-hover/contact:scale-105 transition-transform duration-200">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-[#94A3B8] uppercase">Location</p>
                  <p className="text-xs font-semibold text-[#F8FAFC]">
                    Mathura, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Col: Contact Message Form */}
        <ScrollReveal direction="right" delay={0.1} className="lg:col-span-7 bg-[#121923] border border-[#263342] rounded-xl p-6 sm:p-8 shadow-sm transition-shadow duration-300">
          <h3 className="text-lg font-bold text-[#F8FAFC] mb-1">
            Send a Direct Message
          </h3>
          <p className="text-xs text-[#94A3B8] mb-6">
            Fill out the form below and I will respond to your inquiry promptly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="name" className="text-xs font-semibold text-[#F8FAFC]">
                  Your Name <span className="text-[#22D3EE]">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-[#1A2430] border border-[#263342] text-[#F8FAFC] placeholder:text-[#94A3B8] hover:border-[#22D3EE] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/20 focus:border-[#22D3EE] focus:bg-[#1A2430] transition-all duration-200"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-xs font-semibold text-[#F8FAFC]">
                  Your Email <span className="text-[#22D3EE]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-[#1A2430] border border-[#263342] text-[#F8FAFC] placeholder:text-[#94A3B8] hover:border-[#22D3EE] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/20 focus:border-[#22D3EE] focus:bg-[#1A2430] transition-all duration-200"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="subject" className="text-xs font-semibold text-[#F8FAFC]">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Frontend Developer Role / Inquiry"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg bg-[#1A2430] border border-[#263342] text-[#F8FAFC] placeholder:text-[#94A3B8] hover:border-[#22D3EE] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/20 focus:border-[#22D3EE] focus:bg-[#1A2430] transition-all duration-200"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="text-xs font-semibold text-[#F8FAFC]">
                Message <span className="text-[#22D3EE]">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                required
                placeholder="Hi Ansh, I'm reaching out about..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg bg-[#1A2430] border border-[#263342] text-[#F8FAFC] placeholder:text-[#94A3B8] hover:border-[#22D3EE] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/20 focus:border-[#22D3EE] focus:bg-[#1A2430] transition-all duration-200 resize-y"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              isLoading={isSubmitting}
              icon={<Send className="w-4 h-4" />}
            >
              Send Message
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </div>
  );
};

