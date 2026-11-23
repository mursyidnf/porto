import React from 'react';
import { 
  X, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ExternalLink, 
  Tag, 
  Layers,
  Sparkles
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-border dark:border-brand-darkBorder shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-brand-muted hover:text-brand-text dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-brand-darkBg transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Year */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-brand-blue-light dark:bg-brand-blue/20 text-brand-blue border border-brand-blue/20">
            {project.category}
          </span>
          <span className="flex items-center gap-1 text-xs font-mono text-brand-muted dark:text-gray-400">
            <Calendar className="w-3.5 h-3.5 text-brand-blue" />
            <span>{project.year}</span>
          </span>
          {project.location && (
            <span className="flex items-center gap-1 text-xs font-mono text-brand-muted dark:text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-brand-blue" />
              <span>{project.location}</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-brand-text dark:text-white leading-tight">
          {project.title}
        </h3>

        {/* Role */}
        <div className="mt-2 text-sm font-semibold text-brand-blue dark:text-blue-400">
          Role: {project.role}
        </div>

        {/* Full Description */}
        <div className="mt-5 text-sm sm:text-base text-brand-muted dark:text-gray-300 leading-relaxed space-y-3">
          <p>{project.fullDescription}</p>
        </div>

        {/* Contributions */}
        <div className="mt-6 pt-5 border-t border-brand-border dark:border-brand-darkBorder">
          <h4 className="text-xs font-mono uppercase tracking-wider text-brand-blue font-bold mb-3 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>Detailed Contributions & Responsibilities</span>
          </h4>
          <ul className="space-y-2.5">
            {project.contribution.map((c, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-text dark:text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools / Technologies */}
        <div className="mt-6 pt-5 border-t border-brand-border dark:border-brand-darkBorder">
          <h4 className="text-xs font-mono uppercase tracking-wider text-brand-text dark:text-gray-300 font-bold mb-2 flex items-center gap-1.5">
            <Tag className="w-4 h-4 text-brand-blue" />
            <span>Tools & Frameworks Used</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-gray-100 dark:bg-brand-darkBg text-brand-text dark:text-gray-200 border border-brand-border dark:border-brand-darkBorder"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Links if any */}
        {project.links && project.links.length > 0 && (
          <div className="mt-6 pt-5 border-t border-brand-border dark:border-brand-darkBorder flex gap-3">
            {project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-brand-blue text-white hover:bg-brand-blue-hover transition-colors"
              >
                <span>{link.label}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
