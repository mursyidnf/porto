import React, { useState } from 'react'; 
import { 
  FolderKanban, 
  Calendar, 
  MapPin, 
  ArrowUpRight, 
  Tag, 
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProjectsProps {
  onSelectProject: (proj: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'All' | 'Academic & Research' | 'Community Development' | 'Organizational Activities'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const filterButtons = [
    { key: 'All', label: t.projects.filterAll },
    { key: 'Academic & Research', label: t.projects.filterAcademic },
    { key: 'Community Development', label: t.projects.filterCommunity },
    { key: 'Organizational Activities', label: t.projects.filterOrg },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-white dark:bg-brand-darkBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-light dark:bg-brand-blue/15 border border-brand-blue/20 text-brand-blue font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>{t.projects.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-text dark:text-white tracking-tight">
            {t.projects.heading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-brand-muted dark:text-gray-300 max-w-2xl">
            {t.projects.subtitle}
          </p>
          <div className="w-16 h-1 bg-brand-blue rounded-full mt-4"></div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterButtons.map(({ key, label }) => {
            const isActive = filter === key;
            return (
              <button
                key={key}
                onClick={() => setFilter(key as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none ${
                  isActive
                    ? 'bg-brand-blue text-white shadow-elevated'
                    : 'bg-white dark:bg-brand-darkCard text-brand-muted dark:text-gray-300 border border-brand-border dark:border-brand-darkBorder hover:border-brand-blue hover:text-brand-text'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-brand-border dark:border-brand-darkBorder bg-white dark:bg-brand-darkCard overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Card Geometric Banner */}
              <div className="h-32 bg-gradient-to-br from-brand-blue-light via-blue-50 to-white dark:from-brand-blue/20 dark:via-brand-darkCard dark:to-brand-darkCard p-5 flex flex-col justify-between border-b border-brand-border dark:border-brand-darkBorder relative overflow-hidden">
                {/* Background Math Watermark */}
                <span className="absolute -right-3 -bottom-4 text-7xl font-mono text-brand-blue/10 dark:text-white/5 select-none pointer-events-none">
                  {project.category === 'Community Development' ? '♥' : project.category === 'Academic & Research' ? 'λ' : 'Ω'}
                </span>

                <div className="flex items-center justify-between relative z-10">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-white/90 dark:bg-brand-darkBg/90 text-brand-blue border border-brand-blue/20 shadow-sm">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono font-medium text-brand-muted dark:text-gray-400">
                    {project.year}
                  </span>
                </div>

                <div className="relative z-10 flex items-center gap-1.5 text-xs font-mono text-brand-muted dark:text-gray-400">
                  {project.location ? (
                    <>
                      <MapPin className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
                      <span>Applied Mathematics</span>
                    </>
                  )}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-heading font-bold text-brand-text dark:text-white group-hover:text-brand-blue transition-colors leading-snug mb-2">
                    {project.title}
                  </h3>
                  <div className="text-xs font-semibold text-brand-blue dark:text-blue-400 mb-3">
                    Role: {project.role}
                  </div>
                  <p className="text-xs sm:text-sm text-brand-muted dark:text-gray-300 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>
                </div>

                <div>
                  {/* Tools preview */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-brand-border dark:border-brand-darkBorder mb-4">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-gray-100 dark:bg-brand-darkBg text-brand-text dark:text-gray-300"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-gray-100 dark:bg-brand-darkBg text-brand-muted">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Trigger Button */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold text-brand-blue bg-brand-blue-light dark:bg-brand-blue/15 hover:bg-brand-blue hover:text-white transition-all border border-brand-blue/20"
                  >
                    <span>{t.projects.inspectBtn}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
