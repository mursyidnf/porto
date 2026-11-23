import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowUpRight,
  Calculator
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV }) => {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: t.nav.home, href: '#home', id: 'home' },
    { label: t.nav.about, href: '#about', id: 'about' },
    { label: t.nav.education, href: '#education', id: 'education' },
    { label: t.nav.research, href: '#research', id: 'research' },
    { label: t.nav.projects, href: '#projects', id: 'projects' },
    { label: t.nav.skills, href: '#skills', id: 'skills' },
    { label: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'about', 'education', 'research', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-brand-darkBg/90 backdrop-blur-md border-b border-brand-border dark:border-brand-darkBorder shadow-subtle py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a 
            href="#home" 
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Mursyid Nur Fahmi Home"
          >
            <div className="h-9 sm:h-10 flex items-center group-hover:scale-105 transition-transform">
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
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-brand-text dark:text-white group-hover:text-brand-blue transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-mono text-brand-muted dark:text-gray-400 tracking-wider uppercase">
                {lang === 'id' ? 'Matematika Terapan' : 'Applied Mathematics'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded-lg transition-all relative ${
                    isActive
                      ? 'text-brand-blue font-semibold bg-brand-blue-light dark:bg-brand-blue/15'
                      : 'text-brand-muted dark:text-gray-300 hover:text-brand-text dark:hover:text-white hover:bg-gray-100/70 dark:hover:bg-gray-800/50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-brand-blue rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Simulation pill link */}
            <a
              href="#simulation"
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium text-brand-blue bg-brand-blue-light dark:bg-brand-blue/10 border border-brand-blue/20 rounded-lg hover:bg-brand-blue hover:text-white transition-all"
              title="Interactive Ebbinghaus Simulation"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>{t.nav.simModel}</span>
            </a>

            {/* Language Switcher EN / ID */}
            <div className="flex items-center rounded-xl p-1 bg-gray-100 dark:bg-brand-darkCard border border-brand-border dark:border-brand-darkBorder font-mono text-xs shadow-inner">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                  lang === 'en'
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'text-brand-muted dark:text-gray-400 hover:text-brand-text'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLang('id')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                  lang === 'id'
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'text-brand-muted dark:text-gray-400 hover:text-brand-text'
                }`}
                title="Beralih ke Bahasa Indonesia"
              >
                ID
              </button>
            </div>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <div className="flex items-center rounded-lg p-0.5 bg-gray-100 dark:bg-brand-darkCard border border-brand-border dark:border-brand-darkBorder font-mono text-xs">
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded-md font-bold transition-all ${
                  lang === 'en'
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'text-brand-muted dark:text-gray-400'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('id')}
                className={`px-2 py-1 rounded-md font-bold transition-all ${
                  lang === 'id'
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'text-brand-muted dark:text-gray-400'
                }`}
              >
                ID
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-text dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-brand-border dark:border-brand-darkBorder bg-white/98 dark:bg-brand-darkBg/98 backdrop-blur-lg px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 text-sm font-medium rounded-lg flex items-center justify-between ${
                    isActive
                      ? 'text-brand-blue font-semibold bg-brand-blue-light dark:bg-brand-blue/20'
                      : 'text-brand-muted dark:text-gray-300 hover:text-brand-text dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-brand-blue"></span>}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
