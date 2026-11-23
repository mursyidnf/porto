import React, { useState, useMemo } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Award,
  Layers
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedEducation, getLocalizedAcademicInterests } from '../data/localizedData';

export const Education: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  const eduData = useMemo(() => getLocalizedEducation(lang), [lang]);
  const interests = useMemo(() => getLocalizedAcademicInterests(lang), [lang]);

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-white dark:bg-brand-darkBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-light dark:bg-brand-blue/15 border border-brand-blue/20 text-brand-blue font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.education.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-text dark:text-white tracking-tight">
            {t.education.heading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-brand-muted dark:text-gray-300 max-w-2xl">
            {t.education.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-blue rounded-full mt-4"></div>
        </div>

        {/* Timeline & Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Institution Card & Timeline */}
          <div className="lg:col-span-7">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-brand-blue/30 dark:border-brand-blue/50 space-y-12">
              
              {/* Timeline Marker */}
              <div className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-brand-darkBg border-4 border-brand-blue flex items-center justify-center shadow-md">
                  <div className="w-2 h-2 rounded-full bg-brand-blue animate-ping"></div>
                </div>

                <div className="rounded-2xl border border-brand-border dark:border-brand-darkBorder bg-white dark:bg-brand-darkCard p-6 sm:p-8 shadow-subtle hover:shadow-elevated transition-all duration-300">
                  
                  {/* Badge & Period */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-brand-blue-light dark:bg-brand-blue/20 text-brand-blue border border-brand-blue/20">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{eduData.period}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>{t.education.statusActive}</span>
                    </span>
                  </div>

                  {/* Institution & Degree */}
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-brand-text dark:text-white">
                    {eduData.institution}
                  </h3>
                  <div className="text-base sm:text-lg font-semibold text-brand-blue dark:text-blue-400 mt-1">
                    {eduData.degree}
                  </div>
                  <div className="text-sm text-brand-muted dark:text-gray-400 mt-0.5 flex flex-wrap items-center gap-2">
                    <span>{eduData.faculty}</span>
                    <span>•</span>
                    <span>{eduData.department}</span>
                  </div>
                  <div className="text-xs font-mono text-brand-muted dark:text-gray-400 mt-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                    <span>{eduData.location}</span>
                  </div>

                  {/* Summary */}
                  <div className="mt-5 p-4 rounded-xl bg-gray-50 dark:bg-brand-darkBg/60 border border-brand-border dark:border-brand-darkBorder text-sm text-brand-muted dark:text-gray-300 leading-relaxed italic">
                    "{eduData.summary}"
                  </div>

                  {/* Coursework Pillars */}
                  <div className="mt-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-brand-text dark:text-gray-200 font-semibold mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-brand-blue" />
                      <span>{t.education.courseworkTitle}</span>
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {eduData.coursework.map((course) => (
                        <div 
                          key={course}
                          className="flex items-start gap-2 p-2 rounded-lg bg-white dark:bg-brand-darkBg border border-brand-border/60 dark:border-brand-darkBorder/60"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 mt-0.5" />
                          <span className="text-brand-text dark:text-gray-300 font-medium">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Academic Interests Interactive Showcase */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl border border-brand-border dark:border-brand-darkBorder bg-white dark:bg-brand-darkCard p-6 sm:p-7 shadow-subtle">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-blue font-bold mb-2">
                <Sparkles className="w-4 h-4" />
                <span>{t.education.interestsBadge}</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-text dark:text-white mb-2">
                {t.education.interestsTitle}
              </h3>
              <p className="text-xs text-brand-muted dark:text-gray-400 mb-5">
                {t.education.interestsHelper}
              </p>

              {/* Interest Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {interests.list.map((interest) => {
                  const isSelected = selectedInterest === interest;
                  return (
                    <button
                      key={interest}
                      onClick={() => setSelectedInterest(isSelected ? null : interest)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 flex items-center gap-1.5 focus:outline-none ${
                        isSelected
                          ? 'bg-brand-blue text-white shadow-elevated scale-105'
                          : 'bg-brand-blue-light/70 dark:bg-brand-blue/10 text-brand-blue dark:text-blue-300 border border-brand-blue/20 hover:border-brand-blue hover:bg-brand-blue-light'
                      }`}
                    >
                      <span>{interest}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Interest Detail Card */}
              <div className="p-4 rounded-xl border border-brand-border dark:border-brand-darkBorder bg-gray-50 dark:bg-brand-darkBg min-h-[110px] flex flex-col justify-center transition-all">
                {selectedInterest && interests.details[selectedInterest] ? (
                  <div>
                    <div className="text-xs font-mono uppercase font-bold text-brand-blue mb-1">
                      {t.education.domainFocus} {selectedInterest}
                    </div>
                    <p className="text-xs sm:text-sm text-brand-text dark:text-gray-200 leading-relaxed">
                      {interests.details[selectedInterest]}
                    </p>
                  </div>
                ) : (
                  <div className="text-center py-2 text-brand-muted dark:text-gray-400 text-xs font-mono">
                    {t.education.interestsDefaultHelper}
                  </div>
                )}
              </div>

              {/* Quick Math Quote */}
              <div className="mt-6 pt-5 border-t border-brand-border dark:border-brand-darkBorder flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-blue-light dark:bg-brand-blue/20 text-brand-blue flex items-center justify-center font-mono font-bold text-sm">
                  π
                </div>
                <div className="text-xs text-brand-muted dark:text-gray-400 font-mono">
                  {t.education.mathQuote}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
