import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MapPin, 
  MessageSquare, 
  Sparkles,
  Copy,
  Check,
  Phone
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { useToast } from '../../context/ToastContext';
import { SectionHeader } from '../../components/common/SectionHeader';
import { GlassCard } from '../../components/common/GlassCard';
import { Button } from '../../components/common/Button';
import { GithubIcon, LinkedinIcon } from '../../components/common/SocialIcons';

export const ContactPage: React.FC = () => {
  const { settings, addMessage } = useData();
  const { success, error } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      error('Missing fields', 'Please fill in all required fields before submitting.');
      return;
    }

    setFormState('loading');

    try {
      await addMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim() || 'General Inquiry',
        message: formData.message.trim(),
      });

      setFormState('success');
      success('Message Dispatched!', 'Thank you! Your message was received and logged to the admin console.');

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#6366f1', '#10b981'],
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setFormState('error');
      error('Transmission Failed', 'Something went wrong. Please try again.');
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    success('Copied to clipboard', text);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 font-sans">
      {/* 1. Header */}
      <SectionHeader
        badge="Direct Transmission"
        badgeVariant="cyan"
        title="Let's Build"
        highlightText="Something Intelligent."
        description="Have a question about an AI/ML project, an internship opportunity, or technical collaboration? Send a message directly."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Col: Contact Information Cards */}
        <div className="lg:col-span-5 space-y-4">
          <GlassCard className="p-6 border-slate-800 space-y-5" glowColor="cyan">
            <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              Contact Information
            </h3>

            <p className="text-xs text-slate-400 leading-relaxed">
              Feel free to reach out via email, check out my active code repositories on GitHub, or connect on LinkedIn.
            </p>

            <div className="space-y-3 pt-2">
              {/* Email */}
              <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-indigo-950/60 text-indigo-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono text-slate-500 uppercase">Email</p>
                    <p className="text-xs font-semibold text-white truncate">{settings.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(settings.email, 'email')}
                  className="p-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* GitHub */}
              <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300">
                    <GithubIcon size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono text-slate-500 uppercase">GitHub</p>
                    <p className="text-xs font-semibold text-white truncate">{settings.githubUrl}</p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(settings.githubUrl, 'github')}
                  className="p-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
                  title="Copy github"
                >
                  {copiedField === 'github' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-blue-950/60 text-blue-400">
                    <LinkedinIcon size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono text-slate-500 uppercase">LinkedIn</p>
                    <p className="text-xs font-semibold text-white truncate">{settings.linkedinUrl}</p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(settings.linkedinUrl, 'linkedin')}
                  className="p-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
                  title="Copy linkedin"
                >
                  {copiedField === 'linkedin' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono text-slate-500 uppercase">Phone / Contact</p>
                    <a href={`tel:${settings.phone}`} className="text-xs font-semibold text-white hover:text-emerald-300 transition-colors truncate block">
                      {settings.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(settings.phone, 'phone')}
                  className="p-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
                  title="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-500 uppercase">Location</p>
                  <p className="text-xs font-semibold text-white">Mathura, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-5 border-slate-800 text-xs text-slate-400 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" /> Response Guarantee
            </div>
            <p className="leading-relaxed">
              All messages submitted here are logged with telemetry timestamps and forwarded to my active inbox.
            </p>
          </GlassCard>
        </div>

        {/* Right Col: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <GlassCard className="p-6 sm:p-8 border-slate-800 space-y-6" glowColor="cyan">
            <div>
              <h3 className="text-lg font-bold text-white">Send a Message</h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill out the form below to send an encrypted message directly into my dashboard.
              </p>
            </div>

            {/* Success State Alert */}
            {formState === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold">Transmission Successful!</p>
                  <p className="text-emerald-200/90 leading-relaxed">
                    Thank you! Your message has been safely logged. I will review and reply as soon as possible.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-2 text-xs text-white underline font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            )}

            {/* Error State Alert */}
            {formState === 'error' && (
              <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs flex items-start gap-3">
                <AlertCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold">Submission Failed</p>
                  <p className="text-rose-200/90 leading-relaxed">
                    Unable to record message. Please verify your connection and try again.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-300">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070b14] border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 text-xs font-sans"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-300">
                    Your Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. jane@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070b14] border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 text-xs font-sans"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-medium text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. AI/ML Engineering Internship Opportunity"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#070b14] border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 text-xs font-sans"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-medium text-slate-300">
                  Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#070b14] border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 text-xs font-sans resize-none leading-relaxed"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  variant="gradient"
                  className="w-full"
                  isLoading={formState === 'loading'}
                  icon={<Send className="w-4 h-4" />}
                >
                  Send Message
                </Button>
              </div>
            </form>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};
