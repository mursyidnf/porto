import React, { useState } from 'react';
import { 
  BookOpen, 
  ExternalLink, 
  Copy, 
  Check, 
  FileText, 
  GraduationCap, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Share2, 
  Award, 
  Layers, 
  Sparkles, 
  ArrowUpRight, 
  Calculator, 
  Search 
} from 'lucide-react';
import { PERSONAL_INFO, PUBLICATIONS, ONGOING_RESEARCH, RESEARCH_INTERESTS } from '../data/portfolioData';
import { ResearchInterest, Publication, OngoingResearch } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ResearchProps {
  onOpenCitation: (pub: Publication) => void;
}

export const Research: React.FC<ResearchProps> = ({ onOpenCitation }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'published' | 'ongoing' | 'interests'>('all');
  const [expandedAbstract, setExpandedAbstract] = useState<string | null>(null);
  const [copiedDoi, setCopiedDoi] = useState(false);

  const publications = PUBLICATIONS;
  const ongoingResearch = ONGOING_RESEARCH;
  const researchInterests = RESEARCH_INTERESTS;

  const handleCopyDoi = (doiText: string) => {
    navigator.clipboard.writeText(doiText);
    setCopiedDoi(true);
    setTimeout(() => setCopiedDoi(false), 2000);
  };

  const tabs = [
    { id: 'all', label: t.research.tabAll, count: publications.length + ongoingResearch.length },
    { id: 'published', label: t.research.tabPublished, count: publications.length, verified: true },
    { id: 'ongoing', label: t.research.tabOngoing, count: ongoingResearch.length },
    { id: 'interests', label: t.research.tabInterests, count: researchInterests.length }
  ];

  return (
    <section id="research" className="py-24 relative overflow-hidden bg-brand-blue-light/20 dark:bg-brand-darkCard/20 border-y border-brand-border dark:border-brand-darkBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-light dark:bg-brand-blue/15 border border-brand-blue/20 text-brand-blue font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.research.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-text dark:text-white tracking-tight">
            {t.research.heading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-brand-muted dark:text-gray-300 max-w-2xl">
            {t.research.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-blue rounded-full mt-4"></div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 focus:outline-none ${
                  isActive
                    ? 'bg-brand-blue text-white shadow-elevated'
                    : 'bg-white dark:bg-brand-darkCard text-brand-muted dark:text-gray-300 border border-brand-border dark:border-brand-darkBorder hover:border-brand-blue hover:text-brand-text'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                  isActive 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-100 dark:bg-brand-darkBg text-brand-muted dark:text-gray-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 1. PEER-REVIEWED PUBLICATION SHOWCASE */}
        {(activeTab === 'all' || activeTab === 'published') && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <h3 className="font-heading font-bold text-xl text-brand-text dark:text-white tracking-tight">
                {t.research.tabPublished}
              </h3>
              <span className="ml-2 text-xs font-mono font-medium px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                {t.research.verifiedBadge}
              </span>
            </div>

            {publications.map((pub) => {
              const isExpanded = expandedAbstract === pub.id;
              return (
                <article
                  key={pub.id}
                  className="rounded-2xl border-2 border-brand-blue/30 dark:border-brand-blue/40 bg-white dark:bg-brand-darkCard p-6 sm:p-8 shadow-elevated hover:border-brand-blue transition-all relative overflow-hidden"
                >
                  {/* Verified Top Ribbon */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-brand-border dark:border-brand-darkBorder">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-brand-blue text-white">
                        {t.research.journalArticle}
                      </span>
                      <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-gray-100 dark:bg-brand-darkBg text-brand-text dark:text-gray-300 border border-brand-border dark:border-brand-darkBorder">
                        {pub.journal}
                      </span>
                      <span className="text-xs font-mono text-brand-muted dark:text-gray-400">
                        Vol. {pub.volume}, Issue {pub.issue}, pp. {pub.pages} ({pub.year})
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopyDoi(pub.doi)}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono text-brand-muted dark:text-gray-300 hover:text-brand-blue border border-brand-border dark:border-brand-darkBorder hover:border-brand-blue transition-all"
                        title={t.research.copyDoi}
                      >
                        {copiedDoi ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedDoi ? t.research.copied : `DOI: ${pub.doi}`}</span>
                      </button>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="mt-5 text-2xl sm:text-3xl font-heading font-extrabold text-brand-text dark:text-white leading-tight">
                    {pub.title}
                  </h4>

                  {/* Authors List with Mursyid Highlighted */}
                  <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                    <span className="text-xs font-mono uppercase text-brand-muted dark:text-gray-400 mr-1">
                      {t.research.authors}
                    </span>
                    {pub.authors.map((author, idx) => {
                      const isMursyid = author === PERSONAL_INFO.name;
                      return (
                        <span key={author} className="flex items-center">
                          <span className={`${
                            isMursyid 
                              ? 'font-bold text-brand-blue underline decoration-brand-blue decoration-2 underline-offset-4 bg-brand-blue-light/60 dark:bg-brand-blue/20 px-1.5 py-0.5 rounded' 
                              : 'text-brand-text dark:text-gray-300'
                          }`}>
                            {author}
                          </span>
                          {idx < pub.authors.length - 1 && <span className="text-brand-muted mx-1">,</span>}
                        </span>
                      );
                    })}
                  </div>

                  {/* Institutions */}
                  <div className="mt-2 text-xs font-mono text-brand-muted dark:text-gray-400">
                    {t.research.affiliations} {pub.institutions.join(' • ')}
                  </div>

                  {/* Key Finding Highlight Box */}
                  <div className="mt-6 p-4 sm:p-5 rounded-xl bg-brand-blue-light/50 dark:bg-brand-blue/10 border border-brand-blue/20">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-blue font-bold mb-2">
                      <Sparkles className="w-4 h-4" />
                      <span>{t.research.keyFindingTitle}</span>
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-brand-text dark:text-gray-200">
                      {pub.keyFindings.map((finding, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-brand-blue font-bold font-mono">▸</span>
                          <span>{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Abstract Toggle */}
                  <div className="mt-5">
                    <button
                      onClick={() => setExpandedAbstract(isExpanded ? null : pub.id)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-brand-blue hover:text-brand-blue-hover focus:outline-none"
                    >
                      <span>{isExpanded ? t.research.hideAbstract : t.research.readAbstract}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 p-4 rounded-xl bg-gray-50 dark:bg-brand-darkBg border border-brand-border dark:border-brand-darkBorder text-sm text-brand-muted dark:text-gray-300 leading-relaxed animate-fadeIn">
                        <p>{pub.abstract}</p>
                        
                        {/* Equations Preview */}
                        {pub.equations && (
                          <div className="mt-4 pt-4 border-t border-brand-border dark:border-brand-darkBorder">
                            <span className="text-xs font-mono uppercase font-bold text-brand-text dark:text-gray-200 block mb-2">
                              {t.research.coreModelTitle}
                            </span>
                            <div className="space-y-2">
                              {pub.equations.map((eq, i) => (
                                <div key={i} className="p-2 rounded bg-white dark:bg-brand-darkCard border border-brand-border dark:border-brand-darkBorder font-mono text-xs text-brand-blue dark:text-blue-300 overflow-x-auto">
                                  {eq}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-7 pt-5 border-t border-brand-border dark:border-brand-darkBorder flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <a
                        href={pub.doiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-brand-blue text-white hover:bg-brand-blue-hover shadow-sm hover:shadow transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{t.research.btnReadDoi}</span>
                      </a>

                      <button
                        onClick={() => onOpenCitation(pub)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-brand-darkBg text-brand-text dark:text-gray-200 border border-brand-border dark:border-brand-darkBorder hover:border-brand-blue transition-all"
                      >
                        <Copy className="w-4 h-4 text-brand-blue" />
                        <span>{t.research.btnCitePaper}</span>
                      </button>

                      <a
                        href={pub.scholarUrl || PERSONAL_INFO.socials.scholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-brand-darkBg text-brand-text dark:text-gray-200 border border-brand-border dark:border-brand-darkBorder hover:border-brand-blue transition-all"
                      >
                        <GraduationCap className="w-4 h-4 text-brand-blue" />
                        <span>{t.research.btnGoogleScholar}</span>
                      </a>
                    </div>

                    {/* Interactive Simulation Jump Button */}
                    <a
                      href="#simulation"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-semibold text-brand-blue bg-brand-blue-light dark:bg-brand-blue/15 border border-brand-blue/30 rounded-xl hover:bg-brand-blue hover:text-white transition-all"
                    >
                      <Calculator className="w-3.5 h-3.5" />
                      <span>{t.research.btnSimulator}</span>
                    </a>
                  </div>

                </article>
              );
            })}
          </div>
        )}

        {/* 2. ONGOING RESEARCH & PREPRINTS */}
        {(activeTab === 'all' || activeTab === 'ongoing') && (
          <div className="mb-14">
            <div className="flex items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <h3 className="font-heading font-bold text-xl text-brand-text dark:text-white tracking-tight">
                  {t.research.ongoingSectionTitle}
                </h3>
              </div>
              <span className="text-xs font-mono text-brand-muted dark:text-gray-400 hidden sm:inline">
                {t.research.ongoingNotice}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ongoingResearch.map((res, index) => (
                <div
                  key={res.id}
                  className="rounded-2xl border border-brand-border dark:border-brand-darkBorder bg-white dark:bg-brand-darkCard p-6 shadow-subtle hover:shadow-elevated hover:border-brand-blue/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Status & Index */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                        <Clock className="w-3 h-3" />
                        <span>{res.status}</span>
                      </span>

                      <span className="text-xs font-mono text-brand-muted dark:text-gray-400">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Category */}
                    <div className="text-xs font-mono uppercase tracking-wider text-brand-blue font-semibold mb-1">
                      {res.category}
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-heading font-bold text-brand-text dark:text-white leading-snug mb-3">
                      {res.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-brand-muted dark:text-gray-300 leading-relaxed mb-4">
                      {res.description}
                    </p>

                    {/* Methodology */}
                    <div className="p-3 rounded-xl bg-gray-50 dark:bg-brand-darkBg border border-brand-border/70 dark:border-brand-darkBorder/70 text-xs text-brand-text dark:text-gray-200 mb-4">
                      <span className="font-mono font-bold uppercase text-[10px] text-brand-blue block mb-1">
                        {t.research.methodologyTitle}
                      </span>
                      {res.methodology}
                    </div>
                  </div>

                  <div>
                    {/* Key Concepts Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {res.keyConcepts.map((concept) => (
                        <span
                          key={concept}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-brand-blue-light/60 dark:bg-brand-blue/10 text-brand-blue dark:text-blue-300 border border-brand-blue/20"
                        >
                          {concept}
                        </span>
                      ))}
                    </div>

                    {/* Expected Outcome */}
                    <div className="pt-3 border-t border-brand-border dark:border-brand-darkBorder text-[11px] text-brand-muted dark:text-gray-400 font-mono">
                      <span className="font-semibold text-brand-text dark:text-gray-200">{t.research.targetOutputTitle}</span> {res.expectedOutcome}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. RESEARCH DOMAINS & INTERESTS */}
        {(activeTab === 'all' || activeTab === 'interests') && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-blue"></span>
              <h3 className="font-heading font-bold text-xl text-brand-text dark:text-white tracking-tight">
                {t.research.domainsTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchInterests.map((interest: ResearchInterest) => (
                <div
                  key={interest.title}
                  className="rounded-2xl border border-brand-border dark:border-brand-darkBorder bg-white dark:bg-brand-darkCard p-6 shadow-subtle hover:shadow-elevated transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-light dark:bg-brand-blue/15 text-brand-blue flex items-center justify-center font-mono font-bold text-base mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    ∫
                  </div>
                  <h4 className="font-heading font-bold text-base text-brand-text dark:text-white mb-2">
                    {interest.title}
                  </h4>
                  <p className="text-xs text-brand-muted dark:text-gray-300 leading-relaxed mb-4">
                    {interest.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-brand-border dark:border-brand-darkBorder">
                    {interest.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-gray-100 dark:bg-brand-darkBg text-brand-muted dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
