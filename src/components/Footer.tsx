import React from 'react';
import { 
  ArrowUp, 
  GraduationCap, 
  ExternalLink, 
  Heart,
  FileText
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCV }) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.education, href: '#education' },
    { label: t.nav.research, href: '#research' },
    { label: t.nav.simModel, href: '#simulation' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="border-t border-brand-border dark:border-brand-darkBorder bg-white dark:bg-brand-darkBg pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-brand-border dark:border-brand-darkBorder items-start">
          
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-9 sm:h-10 flex items-center">
                <img 
                  src="/logo-mnf.png" 
                  alt="MNF Logo" 
                  className="h-7 sm:h-8 w-auto object-contain dark:hidden" 
                />
                <img 
                  src="/logo-mnf-dark.png" 
                  alt="MNF Logo" 
                  className="h-7 sm:h-8 w-auto object-contain hidden dark:block" 
                />
              </div>
              <span className="font-heading font-bold text-2xl sm:text-3xl text-brand-text dark:text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-brand-muted dark:text-gray-400 leading-relaxed max-w-sm">
              {t.footer.bioShort}
            </p>

            <div className="text-xs font-mono text-brand-blue dark:text-blue-400 flex items-center gap-1.5 font-semibold">
              <span>{t.footer.philosophy}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-text dark:text-gray-200 font-bold mb-4">
              {t.footer.sitemap}
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-brand-muted dark:text-gray-400 hover:text-brand-blue dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Academic Actions & CV */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-text dark:text-gray-200 font-bold mb-4">
              {t.footer.profiles}
            </h4>
            <div className="flex flex-col space-y-2 text-xs">
              <a
                href={PERSONAL_INFO.socials.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-brand-muted dark:text-gray-400 hover:text-brand-blue transition-colors p-2 rounded-lg bg-gray-50 dark:bg-brand-darkCard border border-brand-border dark:border-brand-darkBorder"
              >
                <span>Google Scholar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-brand-muted dark:text-gray-400 hover:text-brand-blue transition-colors p-2 rounded-lg bg-gray-50 dark:bg-brand-darkCard border border-brand-border dark:border-brand-darkBorder"
              >
                <span>ATCSJ Publication (DOI)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onOpenCV}
                className="w-full flex items-center justify-between text-xs font-semibold text-brand-blue bg-brand-blue-light dark:bg-brand-blue/15 hover:bg-brand-blue hover:text-white transition-all p-2 rounded-lg border border-brand-blue/20"
              >
                <span className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Curriculum Vitae</span>
                </span>
                <span className="text-[10px] font-mono">PDF</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-brand-muted dark:text-gray-400">
          <div>
            <span>{PERSONAL_INFO.name} © 2026</span>
            <span className="mx-2">•</span>
            <span className="text-gray-500 italic">{t.footer.quote}</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-border dark:border-brand-darkBorder hover:border-brand-blue hover:text-brand-blue dark:hover:text-white transition-all group"
            aria-label={t.footer.backToTop}
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
