import React, { useState, useEffect } from 'react';
import { 
  ArrowDown, 
  FileText, 
  GraduationCap, 
  ExternalLink,
  BookOpen,
  Sparkles,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const { t } = useLanguage();
  const [activeFormula, setActiveFormula] = useState(0);

  const formulas = [
    { label: "Memory Decay ODE", math: "dR/dt = -λR(t) + Σ α_k δ(t - t_k)", field: "Ebbinghaus Model" },
    { label: "Optimal Interval", math: "t* = -(1/λ) ln(R_threshold / R_0) ≈ 1.098 days", field: "Spaced Repetition" },
    { label: "Linear Optimization", math: "min c^T x  s.t.  Ax ≤ b,  x ≥ 0", field: "Operations Research" },
    { label: "Saint-Venant Shallow Water", math: "∂h/∂t + ∂(hu)/∂x = 0", field: "Disaster Modeling" },
    { label: "Elliptic Curve Group Law", math: "y^2 ≡ x^3 + ax + b (mod p)", field: "Cryptography" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFormula((prev) => (prev + 1) % formulas.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [formulas.length]);

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Math Grid & Ambient Glows */}
      <div className="absolute inset-0 math-grid opacity-75 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-blue-surface/40 dark:bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Math Symbols Watermark */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.06] dark:opacity-[0.09] font-serif">
        <span className="absolute top-16 left-12 text-7xl font-mono text-brand-blue animate-float-slow">∑</span>
        <span className="absolute top-1/3 left-[28%] text-8xl font-mono text-brand-blue animate-float-slow" style={{ animationDelay: '1.5s' }}>∫</span>
        <span className="absolute top-20 right-[25%] text-6xl font-mono text-brand-blue animate-float-slow" style={{ animationDelay: '3s' }}>π</span>
        <span className="absolute bottom-24 left-[15%] text-7xl font-mono text-brand-blue animate-float-slow" style={{ animationDelay: '2s' }}>λ</span>
        <span className="absolute bottom-1/3 right-14 text-8xl font-mono text-brand-blue animate-float-slow" style={{ animationDelay: '4s' }}>∞</span>
        <span className="absolute top-1/2 right-1/3 text-6xl font-mono text-brand-blue animate-float-slow" style={{ animationDelay: '2.5s' }}>∇</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Persona */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Small uppercase tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-light dark:bg-brand-blue/15 border border-brand-blue/20 text-brand-blue font-mono text-xs font-semibold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
              <span>{t.hero.smallTagline}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-brand-text dark:text-white leading-[1.12]">
                {t.hero.greeting} <br className="hidden sm:inline" />
                <span className="relative inline-block text-brand-blue">
                  {PERSONAL_INFO.name}
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-brand-blue/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                    <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl font-heading font-semibold text-gray-800 dark:text-gray-200 pt-2">
                {t.hero.tagline}
              </p>
            </div>

            {/* Description Quote */}
            <p className="text-base sm:text-lg text-brand-muted dark:text-gray-300 leading-relaxed max-w-2xl">
              {t.hero.quote}
            </p>

            {/* Live Rotating Formula Card */}
            <div className="w-full max-w-xl p-3.5 sm:p-4 rounded-xl border border-brand-border dark:border-brand-darkBorder bg-white/80 dark:bg-brand-darkCard/80 backdrop-blur-md shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-brand-muted dark:text-gray-400">
                    {t.hero.activeFormula} • {formulas[activeFormula].field}
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-semibold text-brand-blue dark:text-blue-400">
                    {formulas[activeFormula].math}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 self-end sm:self-center text-[10px] font-mono text-brand-muted dark:text-gray-400">
                <span>{activeFormula + 1}/{formulas.length}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-xl shadow-elevated hover:shadow-blue-glow transition-all duration-200"
              >
                <span>{t.hero.exploreBtn}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-brand-text dark:text-white bg-white dark:bg-brand-darkCard border border-brand-border dark:border-brand-darkBorder hover:border-brand-blue dark:hover:border-brand-blue rounded-xl hover:shadow-subtle transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-brand-blue" />
                <span>{t.hero.downloadCvBtn}</span>
              </button>

              <a
                href="#research"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-brand-blue hover:bg-brand-blue-light dark:hover:bg-brand-blue/10 rounded-xl transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>{t.hero.viewPubsBtn}</span>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-3 pt-3">
              <span className="text-xs font-mono uppercase text-brand-muted dark:text-gray-400 tracking-wider">
                {t.hero.profilesLabel}
              </span>
              
              <a
                href={PERSONAL_INFO.socials.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-brand-muted hover:text-brand-blue dark:text-gray-400 dark:hover:text-white rounded-lg border border-brand-border dark:border-brand-darkBorder hover:border-brand-blue transition-all"
                title="Google Scholar Profile"
              >
                <GraduationCap className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 text-xs font-mono font-medium text-brand-blue bg-brand-blue-light dark:bg-brand-blue/10 border border-brand-blue/20 rounded-lg hover:bg-brand-blue hover:text-white transition-all flex items-center gap-1"
                title="Verified Research DOI"
              >
                <span>DOI: 10.33086</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-brand-muted hover:text-brand-blue dark:text-gray-400 dark:hover:text-white rounded-lg border border-brand-border dark:border-brand-darkBorder hover:border-brand-blue transition-all"
                title="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-brand-muted hover:text-brand-blue dark:text-gray-400 dark:hover:text-white rounded-lg border border-brand-border dark:border-brand-darkBorder hover:border-brand-blue transition-all"
                title="GitHub Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>

              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-brand-muted hover:text-brand-blue dark:text-gray-400 dark:hover:text-white rounded-lg border border-brand-border dark:border-brand-darkBorder hover:border-brand-blue transition-all"
                title="Instagram Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

          </div>

          {/* Right Column: Pure Gentleman Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] group">
              
              {/* Subtle Gentleman Ambient Aura Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand-blue/25 via-indigo-500/15 to-brand-blue/20 blur-2xl gentleman-aura pointer-events-none"></div>

              {/* Portrait Frame */}
              <div className="relative rounded-3xl p-2 sm:p-2.5 bg-white/85 dark:bg-brand-darkCard/85 backdrop-blur-md border border-brand-border dark:border-brand-darkBorder shadow-elevated transition-all duration-500 group-hover:shadow-2xl group-hover:border-brand-blue/40">
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gray-950">
                  {/* Portrait Photo */}
                  <img 
                    src="/mursyid-portrait.jpg" 
                    alt="Mursyid Nur Fahmi" 
                    className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.03] transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
                  />

                  {/* Gentleman Light Sheen */}
                  <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent gentleman-sheen pointer-events-none"></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
