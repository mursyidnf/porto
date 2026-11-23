import React, { useState } from 'react';
import { 
  Sparkles, 
  Binary, 
  Terminal, 
  Users2, 
  Languages, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      case 'Proficient':
        return 'bg-brand-blue-light text-brand-blue dark:bg-brand-blue/20 dark:text-blue-300 border-brand-blue/30';
      case 'Intermediate':
        return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'Foundational':
        return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const categoryIcons = [Binary, Terminal, Users2, Languages];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-brand-blue-light/30 dark:bg-brand-darkCard/30 border-y border-brand-border dark:border-brand-darkBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-light dark:bg-brand-blue/15 border border-brand-blue/20 text-brand-blue font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.skills.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-text dark:text-white tracking-tight">
            {t.skills.heading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-brand-muted dark:text-gray-300 max-w-2xl">
            {t.skills.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-blue rounded-full mt-4"></div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Sparkles;
            const isActive = activeCategory === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between focus:outline-none ${
                  isActive
                    ? 'bg-white dark:bg-brand-darkCard border-brand-blue shadow-elevated scale-[1.02]'
                    : 'bg-white/70 dark:bg-brand-darkCard/60 border-brand-border dark:border-brand-darkBorder hover:border-brand-blue/40 hover:bg-white dark:hover:bg-brand-darkCard shadow-subtle'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    isActive 
                      ? 'bg-brand-blue text-white' 
                      : 'bg-brand-blue-light dark:bg-brand-blue/15 text-brand-blue'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-muted dark:text-gray-400">
                    {cat.skills.length} {t.skills.skillsUnit}
                  </span>
                </div>
                <div>
                  <h3 className={`font-heading font-bold text-sm sm:text-base ${
                    isActive ? 'text-brand-blue' : 'text-brand-text dark:text-white'
                  }`}>
                    {cat.title}
                  </h3>
                  <p className="text-[11px] text-brand-muted dark:text-gray-400 line-clamp-1 mt-0.5">
                    {cat.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Skills Grid */}
        <div className="rounded-3xl border border-brand-border dark:border-brand-darkBorder bg-white dark:bg-brand-darkCard p-6 sm:p-8 lg:p-10 shadow-elevated">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-brand-border dark:border-brand-darkBorder mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-text dark:text-white">
                {SKILL_CATEGORIES[activeCategory].title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted dark:text-gray-300 mt-1">
                {SKILL_CATEGORIES[activeCategory].description}
              </p>
            </div>
            
            {/* Legend */}
            <div className="flex items-center gap-2 text-[10px] font-mono text-brand-muted dark:text-gray-400 self-start sm:self-auto">
              <span>{t.skills.legendLabel}</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">{t.skills.intermediate}</span>
              <span className="px-1.5 py-0.5 rounded bg-brand-blue-light text-brand-blue dark:bg-brand-blue/30 dark:text-blue-300">{t.skills.proficient}</span>
              <span className="px-1.5 py-0.5 rounded bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300">{t.skills.advanced}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILL_CATEGORIES[activeCategory].skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 sm:p-5 rounded-2xl bg-gray-50/70 dark:bg-brand-darkBg/60 border border-brand-border dark:border-brand-darkBorder hover:border-brand-blue/30 hover:bg-white dark:hover:bg-brand-darkCard transition-all flex flex-col justify-between group shadow-sm hover:shadow-subtle"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="font-heading font-bold text-sm sm:text-base text-brand-text dark:text-white group-hover:text-brand-blue transition-colors">
                      {skill.name}
                    </h4>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${getLevelBadge(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>

                  {skill.description && (
                    <p className="text-xs text-brand-muted dark:text-gray-400 leading-relaxed mt-1">
                      {skill.description}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-brand-border/60 dark:border-brand-darkBorder/60 flex items-center justify-between text-[11px] font-mono text-brand-muted dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-blue" />
                    <span>{t.skills.verifiedUsage}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
