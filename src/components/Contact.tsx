import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  GraduationCap, 
  ExternalLink, 
  Copy, 
  Check, 
  MapPin, 
  MessageSquare,
  Sparkles,
  Clock
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      console.log('Dispatching message mailto fallback:', mailtoLink);
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-brand-darkBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-text dark:text-white tracking-tight">
            {t.contact.heading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-brand-muted dark:text-gray-300 max-w-2xl">
            {t.contact.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-blue rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact & Academic Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="rounded-3xl border border-brand-border dark:border-brand-darkBorder bg-white dark:bg-brand-darkCard p-6 sm:p-8 shadow-subtle">
              <h3 className="font-heading font-bold text-xl text-brand-text dark:text-white mb-2">
                {t.contact.connectDirectly}
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted dark:text-gray-300 mb-6">
                {t.contact.connectDesc}
              </p>

              {/* Email item */}
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-brand-darkBg border border-brand-border dark:border-brand-darkBorder mb-3">
                <div className="text-[11px] font-mono uppercase text-brand-muted dark:text-gray-400 mb-1">
                  {t.contact.emailLabel}
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-xs sm:text-sm font-semibold text-brand-blue hover:underline truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-brand-muted hover:text-brand-blue border border-brand-border dark:border-brand-darkBorder hover:border-brand-blue transition-all flex-shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Location item */}
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-brand-darkBg border border-brand-border dark:border-brand-darkBorder mb-6">
                <div className="text-[11px] font-mono uppercase text-brand-muted dark:text-gray-400 mb-1">
                  {t.contact.locationLabel}
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-brand-text dark:text-gray-200">
                  <MapPin className="w-4 h-4 text-brand-blue" />
                  <span>Padang, Sumatera Barat, Indonesia</span>
                </div>
              </div>

              {/* Academic & Social Profiles */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-brand-text dark:text-gray-200 font-bold mb-3">
                  {t.contact.networksTitle}
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href={PERSONAL_INFO.socials.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-brand-border dark:border-brand-darkBorder hover:border-brand-blue hover:bg-brand-blue-light/40 dark:hover:bg-brand-blue/10 transition-all flex items-center justify-between group"
                  >
                    <span className="font-semibold text-brand-text dark:text-gray-200 group-hover:text-brand-blue">
                      Google Scholar
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-brand-muted group-hover:text-brand-blue" />
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-brand-border dark:border-brand-darkBorder hover:border-brand-blue hover:bg-brand-blue-light/40 dark:hover:bg-brand-blue/10 transition-all flex items-center justify-between group"
                  >
                    <span className="font-semibold text-brand-text dark:text-gray-200 group-hover:text-brand-blue">
                      DOI Record
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-brand-muted group-hover:text-brand-blue" />
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-brand-border dark:border-brand-darkBorder hover:border-brand-blue hover:bg-brand-blue-light/40 dark:hover:bg-brand-blue/10 transition-all flex items-center justify-between group"
                  >
                    <span className="font-semibold text-brand-text dark:text-gray-200 group-hover:text-brand-blue">
                      LinkedIn
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-brand-muted group-hover:text-brand-blue" />
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-brand-border dark:border-brand-darkBorder hover:border-brand-blue hover:bg-brand-blue-light/40 dark:hover:bg-brand-blue/10 transition-all flex items-center justify-between group"
                  >
                    <span className="font-semibold text-brand-text dark:text-gray-200 group-hover:text-brand-blue">
                      Instagram
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-brand-muted group-hover:text-brand-blue" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-brand-border dark:border-brand-darkBorder bg-white dark:bg-brand-darkCard p-6 sm:p-8 lg:p-10 shadow-elevated">
              
              <div className="mb-6 pb-4 border-b border-brand-border dark:border-brand-darkBorder flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-text dark:text-white">
                    {t.contact.sendHeading}
                  </h3>
                  <p className="text-xs text-brand-muted dark:text-gray-400 mt-0.5">
                    {t.contact.responseTime}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-brand-blue-light dark:bg-brand-blue/20 text-brand-blue flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-brand-text dark:text-white">
                    {t.contact.thankYou}
                  </h4>
                  <p className="text-sm text-brand-muted dark:text-gray-300 max-w-md mx-auto leading-relaxed">
                    {t.contact.thankYouDesc}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-brand-blue text-white hover:bg-brand-blue-hover transition-colors mt-2"
                  >
                    <span>{t.contact.sendAnother}</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-heading font-bold text-brand-text dark:text-gray-100 mb-2">
                      {t.contact.nameField}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={(t.contact as any).namePlaceholder || "Enter your name"}
                      className="w-full px-4 py-3.5 rounded-2xl bg-gray-50/90 dark:bg-brand-darkBg/90 border border-brand-border dark:border-brand-darkBorder text-sm text-brand-text dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-sm font-heading font-bold text-brand-text dark:text-gray-100 mb-2">
                      {t.contact.emailField}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={(t.contact as any).emailPlaceholder || "name@email.com"}
                      className="w-full px-4 py-3.5 rounded-2xl bg-gray-50/90 dark:bg-brand-darkBg/90 border border-brand-border dark:border-brand-darkBorder text-sm text-brand-text dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-heading font-bold text-brand-text dark:text-gray-100 mb-2">
                      {t.contact.messageField}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={(t.contact as any).messagePlaceholder || "Tell me about your project or idea..."}
                      className="w-full px-4 py-3.5 rounded-2xl bg-gray-50/90 dark:bg-brand-darkBg/90 border border-brand-border dark:border-brand-darkBorder text-sm text-brand-text dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all resize-none"
                    />
                  </div>

                  {/* Send Message Button (Following Website Brand Theme #0300e1) */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl text-sm font-heading font-bold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-elevated hover:shadow-blue-glow transition-all duration-200 flex items-center justify-center gap-2.5 group disabled:opacity-70 focus:outline-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2 font-mono text-xs">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>{t.contact.sending}</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white -rotate-12 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        <span>{t.contact.sendBtn}</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-brand-muted dark:text-gray-400 font-mono pt-1">
                    Direct inquiries can also be dispatched directly to <a href={`mailto:${PERSONAL_INFO.email}`} className="text-brand-blue underline">{PERSONAL_INFO.email}</a>.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
