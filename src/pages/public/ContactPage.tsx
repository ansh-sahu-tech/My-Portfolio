import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  MapPin, 
  MessageSquare, 
  Copy, 
  Check, 
  Phone,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { useToast } from '../../context/ToastContext';
import { SectionHeader } from '../../components/common/SectionHeader';
import { Button } from '../../components/common/Button';
import { BackButton } from '../../components/common/BackButton';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { GithubIcon, LinkedinIcon } from '../../components/common/SocialIcons';

export const ContactPage: React.FC = () => {
  const { settings, addMessage } = useData();
  const { success: showSuccess, error: showError, info: showInfo } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const targetEmail = settings.email || 'anshcseaiml0169@gmail.com';
  const customEndpoint = settings.contactFormEndpoint?.trim();
  const endpoint = customEndpoint || `https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim() || 'Portfolio Direct Message';
    const message = formData.message.trim();

    if (!name || !email || !message) {
      const missingMsg = 'Please fill in all required fields (Name, Email, Message).';
      setFormError(missingMsg);
      showError('Required Fields Missing', missingMsg);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const invalidEmailMsg = 'Please enter a valid email address.';
      setFormError(invalidEmailMsg);
      showError('Invalid Email Address', invalidEmailMsg);
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Dispatch real email via FormSubmit or configured endpoint
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          _subject: `Portfolio Message from ${name}: ${subject}`,
          subject,
          message,
          _replyto: email,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = await response.json().catch(() => null);

      // 2. Also archive locally in DataContext for the Admin Inbox
      await addMessage({
        name,
        email,
        subject,
        message,
      });

      // 3. User feedback
      if (result && result.message && typeof result.message === 'string' && result.message.toLowerCase().includes('activation')) {
        showInfo(
          'Activation Email Sent',
          `FormSubmit sent a one-time activation link to ${targetEmail}. Please check inbox to activate automatic forwarding.`
        );
      } else {
        showSuccess('Message Delivered', `Thank you ${name}! Your message has been sent to ${targetEmail}.`);
      }

      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.warn('Network submission error:', err);
      // Still save locally so nothing is lost
      await addMessage({
        name,
        email,
        subject,
        message,
      });

      setFormError('Direct network submission could not connect. You can open your mail app to send directly.');
      showError('Network Issue', 'Could not reach external email server. Click "Send via Email Client" to send directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    showInfo('Copied to Clipboard', `Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const mailtoHref = `mailto:${targetEmail}?subject=${encodeURIComponent(
    formData.subject.trim() || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Hello Ansh,\n\n${formData.message ? formData.message : '[Write your message here]'}\n\nBest regards,\n${formData.name || '[Your Name]'}\n${formData.email || '[Your Email]'}`
  )}`;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 font-sans pb-16">
      {/* Top Left Back Navigation */}
      <ScrollReveal>
        <div className="flex items-center justify-start pt-1 -mb-8 sm:-mb-9">
          <BackButton />
        </div>
      </ScrollReveal>

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
          <div className="bg-[#121923] border border-[#263342] rounded-xl p-4 sm:p-6 shadow-sm space-y-5 transition-shadow duration-300">
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
        <ScrollReveal direction="right" delay={0.1} className="lg:col-span-7 bg-[#121923] border border-[#263342] rounded-xl p-4 sm:p-8 shadow-sm transition-shadow duration-300">
          <h3 className="text-lg font-bold text-[#F8FAFC] mb-1">
            Send a Direct Message
          </h3>
          <p className="text-xs text-[#94A3B8] mb-6">
            Fill out the form below or dispatch your inquiry directly to <a href={`mailto:${targetEmail}`} className="text-[#22D3EE] hover:underline font-medium">{targetEmail}</a>.
          </p>

          {isSuccess ? (
            <div className="p-6 sm:p-8 rounded-xl bg-[#1A2430] border border-[#22D3EE]/40 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-[#F8FAFC]">
                  Message Dispatched Successfully!
                </h4>
                <p className="text-xs text-[#94A3B8] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Your message has been sent to <span className="text-[#22D3EE] font-mono">{targetEmail}</span>. I will review your inquiry and reply promptly.
                </p>
              </div>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <Button
                  type="button"
                  variant="primary"
                  size="md"
                  onClick={() => setIsSuccess(false)}
                >
                  Send Another Message
                </Button>
                <a
                  href={`mailto:${targetEmail}`}
                  className="inline-flex items-center gap-2 px-4 py-2 min-h-[40px] text-xs font-semibold text-[#F8FAFC] hover:text-[#22D3EE] bg-[#121923] hover:bg-[#1E293B] border border-[#263342] rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#22D3EE]" />
                  <span>Open in Mail App</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {formError && (
                <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-500/40 text-rose-300 text-xs flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                    <span>{formError}</span>
                  </div>
                  <a
                    href={mailtoHref}
                    className="underline text-rose-300 hover:text-white shrink-0 font-medium"
                  >
                    Open Mail App
                  </a>
                </div>
              )}

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
                    className="w-full px-3 py-2 text-sm rounded-lg bg-[#1A2430] border border-[#263342] text-[#F8FAFC] placeholder:text-slate-500 hover:border-[#22D3EE] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/20 focus:border-[#22D3EE] focus:bg-[#1A2430] transition-all duration-200"
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
                    className="w-full px-3 py-2 text-sm rounded-lg bg-[#1A2430] border border-[#263342] text-[#F8FAFC] placeholder:text-slate-500 hover:border-[#22D3EE] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/20 focus:border-[#22D3EE] focus:bg-[#1A2430] transition-all duration-200"
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
                  className="w-full px-3 py-2 text-sm rounded-lg bg-[#1A2430] border border-[#263342] text-[#F8FAFC] placeholder:text-slate-500 hover:border-[#22D3EE] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/20 focus:border-[#22D3EE] focus:bg-[#1A2430] transition-all duration-200"
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
                  className="w-full px-3 py-2 text-sm rounded-lg bg-[#1A2430] border border-[#263342] text-[#F8FAFC] placeholder:text-slate-500 hover:border-[#22D3EE] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/20 focus:border-[#22D3EE] focus:bg-[#1A2430] transition-all duration-200 resize-y"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  isLoading={isSubmitting}
                  icon={<Send className="w-4 h-4" />}
                >
                  Send Message
                </Button>

                <a
                  href={mailtoHref}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 min-h-[40px] text-xs sm:text-sm font-semibold rounded-lg bg-[#1A2430] hover:bg-[#263342] text-[#F8FAFC] border border-[#263342] hover:border-[#22D3EE] transition-all text-center"
                  title="Open in your default email application"
                >
                  <Mail className="w-4 h-4 text-[#22D3EE]" />
                  <span>Send via Email Client</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#94A3B8] pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3EE] shrink-0" />
                <span>
                  Delivers directly to <a href={`mailto:${targetEmail}`} className="text-[#22D3EE] hover:underline font-medium">{targetEmail}</a>
                </span>
              </div>
            </form>
          )}
        </ScrollReveal>
      </div>
    </div>
  );
};

