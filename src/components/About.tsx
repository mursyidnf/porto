import React from 'react';
import {
  GraduationCap,
  Compass,
  Users,
  Target,
  CheckCircle,
  CheckCircle2,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const highlightIcons = [GraduationCap, Compass, Users];
  const highlightAccents = [
    "from-blue-500/10 to-indigo-500/5",
    "from-indigo-500/10 to-cyan-500/5",
    "from-cyan-500/10 to-blue-500/5",
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-brand-blue-light/30 dark:bg-brand-darkCard/30 border-y border-brand-border dark:border-brand-darkBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-light dark:bg-brand-blue/15 border border-brand-blue/20 text-brand-blue font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-text dark:text-white tracking-tight">
            {t.about.heading}
          </h2>
          <div className="w-16 h-1 bg-brand-blue rounded-full mt-4"></div>
        </div>

        {/* Academic ID Card (Left) & Profile Narrative (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">

          {/* Left Column: Academic ID Card */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              {/* Geometric Frame Accent */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand-blue/20 via-brand-blue/5 to-transparent blur-lg pointer-events-none"></div>

              {/* ID Card Wrapper */}
              <div className="relative rounded-2xl border border-brand-border dark:border-brand-darkBorder bg-white dark:bg-brand-darkCard p-6 shadow-elevated">
                {/* Header of ID Card */}
                <div className="flex items-center justify-center pb-3 border-b border-brand-border dark:border-brand-darkBorder">
                  <span className="text-xs font-mono font-medium tracking-wider text-brand-muted dark:text-gray-400">
                    ID: UNAND-MATH-2310432024
                  </span>
                </div>

                {/* ID Card Inner Container */}
                <div className="mt-5 relative rounded-xl overflow-hidden bg-gradient-to-b from-brand-blue-light to-white dark:from-brand-blue/10 dark:to-brand-darkCard border border-brand-border dark:border-brand-darkBorder p-5 flex flex-col items-center text-center">
                  
                  {/* Photo with verified badge */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white dark:bg-brand-darkBg p-1 shadow-md border-2 border-brand-blue/30 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/mursyid-almamater.jpg" 
                      alt="Mursyid Nur Fahmi - S1 Matematika UNAND" 
                      className="w-full h-full object-cover object-center rounded-xl" 
                    />
                    <div className="absolute bottom-1 right-1 bg-white dark:bg-brand-darkBg p-1 rounded-full shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue fill-brand-blue-light dark:fill-brand-blue/20" />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="mt-3.5 font-heading font-bold text-xl text-brand-text dark:text-white">
                    {PERSONAL_INFO.name}
                  </h3>

                  {/* Program & Cohort Pills */}
                  <div className="grid grid-cols-2 gap-2 w-full mt-4 text-left">
                    <div className="p-2.5 rounded-lg bg-white dark:bg-brand-darkBg border border-brand-border dark:border-brand-darkBorder">
                      <div className="text-[10px] uppercase font-mono text-brand-muted dark:text-gray-400">{t.hero.programLabel}</div>
                      <div className="text-xs font-semibold text-brand-text dark:text-gray-200 mt-0.5">{t.hero.programValue}</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white dark:bg-brand-darkBg border border-brand-border dark:border-brand-darkBorder">
                      <div className="text-[10px] uppercase font-mono text-brand-muted dark:text-gray-400">{t.hero.cohortLabel}</div>
                      <div className="text-xs font-semibold text-brand-text dark:text-gray-200 mt-0.5">{t.hero.cohortValue}</div>
                    </div>
                  </div>

                  {/* Highlight pill */}
                  <div className="mt-2.5 w-full p-2.5 rounded-lg bg-brand-blue-light dark:bg-brand-blue/15 border border-brand-blue/20 flex items-center justify-between text-xs font-medium text-brand-blue dark:text-blue-300">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{t.hero.pubPill}</span>
                    </span>
                    <span className="font-mono text-[11px] font-bold">ATCSJ '25</span>
                  </div>
                </div>

                {/* Quick stats footer */}
                <div className="mt-4 pt-3 border-t border-brand-border dark:border-brand-darkBorder grid grid-cols-3 text-center">
                  <div>
                    <div className="text-lg font-heading font-bold text-brand-text dark:text-white">5+</div>
                    <div className="text-[10px] font-mono uppercase text-brand-muted dark:text-gray-400">{t.hero.statResearch}</div>
                  </div>
                  <div className="border-x border-brand-border dark:border-brand-darkBorder">
                    <div className="text-lg font-heading font-bold text-brand-blue">1</div>
                    <div className="text-[10px] font-mono uppercase text-brand-muted dark:text-gray-400">{t.hero.statPub}</div>
                  </div>
                  <div>
                    <div className="text-lg font-heading font-bold text-brand-text dark:text-white">3</div>
                    <div className="text-[10px] font-mono uppercase text-brand-muted dark:text-gray-400">{t.hero.statLead}</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Profile Narrative & Description */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            {/* Playful & Bold Identity Badge Header */}
            <div className="space-y-2.5 pb-1">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-2xl sm:text-3xl lg:text-4xl font-heading font-black tracking-tight text-brand-text dark:text-white">
                <span>{t.about.iam}</span>
                <span className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-2xl bg-brand-blue text-white shadow-elevated transform -rotate-1 hover:rotate-0 transition-all duration-300">
                  MURSYID NUR FAHMI
                </span>
                <span className="text-brand-text dark:text-white text-3xl sm:text-4xl">,</span>
              </div>
              <div className="flex">
                <span className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-2xl bg-slate-950 dark:bg-black text-white border border-slate-800 dark:border-slate-800 font-heading font-black text-xl sm:text-2xl lg:text-3xl tracking-tight shadow-md transform rotate-1 hover:rotate-0 transition-all duration-300">
                  {t.about.roleBadge}
                </span>
              </div>
            </div>

            {/* Primary Bio Card */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-brand-darkCard border border-brand-border dark:border-brand-darkBorder shadow-subtle relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-blue"></div>
              <p className="text-base sm:text-lg text-brand-text dark:text-gray-100 font-medium leading-relaxed pl-1">
                {t.about.profileSummary}
              </p>
            </div>

            {/* Quick Value Tags */}
            <div className="pt-1 flex flex-wrap gap-2">
              {t.about.tags.map((item: string) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white dark:bg-brand-darkBg border border-brand-border dark:border-brand-darkBorder text-brand-text dark:text-gray-300 shadow-sm"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-brand-blue" />
                  <span>{item}</span>
                </span>
              ))}
            </div>

          </div>

        </div>

        {/* 3 Core Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.about.highlights.map((item: { title: string; subtitle: string; description: string; metrics: string }, index: number) => {
            const Icon = highlightIcons[index];
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-brand-border dark:border-brand-darkBorder bg-white dark:bg-brand-darkCard p-7 shadow-subtle hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                {/* Top index and icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue-light dark:bg-brand-blue/15 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-muted dark:text-gray-400">
                    0{index + 1}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <div className="text-xs font-mono uppercase tracking-wider text-brand-blue font-semibold mb-1">
                  {item.subtitle}
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-text dark:text-white mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-brand-muted dark:text-gray-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Footer metric badge */}
                <div className="pt-4 border-t border-brand-border dark:border-brand-darkBorder flex items-center justify-between text-xs font-mono text-brand-muted dark:text-gray-400">
                  <span>{item.metrics}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-blue group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
