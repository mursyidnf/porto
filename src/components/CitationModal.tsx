import React, { useState } from 'react';
import { X, Copy, Check, Download, BookOpen, Quote } from 'lucide-react';
import { Publication } from '../types';

interface CitationModalProps {
  publication: Publication | null;
  onClose: () => void;
}

export const CitationModal: React.FC<CitationModalProps> = ({ publication, onClose }) => {
  if (!publication) return null;

  const [activeFormat, setActiveFormat] = useState<'bibtex' | 'apa' | 'ieee'>('bibtex');
  const [copied, setCopied] = useState(false);

  const getCitationText = () => {
    switch (activeFormat) {
      case 'bibtex':
        return publication.citationBibtex;
      case 'apa':
        return publication.citationApa;
      case 'ieee':
        return publication.citationIeee;
      default:
        return publication.citationBibtex;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCitationText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadBibtex = () => {
    const element = document.createElement('a');
    const file = new Blob([publication.citationBibtex], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${publication.id}.bib`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-brand-darkCard border border-brand-border dark:border-brand-darkBorder shadow-2xl p-6 sm:p-8"
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

        {/* Modal Title */}
        <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-brand-blue font-bold">
          <Quote className="w-4 h-4" />
          <span>Academic Citation Tool</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-text dark:text-white leading-tight">
          Cite This Publication
        </h3>
        <p className="text-xs sm:text-sm text-brand-muted dark:text-gray-400 mt-1 line-clamp-1">
          {publication.title}
        </p>

        {/* Format Selector */}
        <div className="flex items-center gap-2 mt-6 pb-2 border-b border-brand-border dark:border-brand-darkBorder">
          {[
            { id: 'bibtex', label: 'BibTeX' },
            { id: 'apa', label: 'APA 7th Edition' },
            { id: 'ieee', label: 'IEEE Style' },
          ].map((fmt) => {
            const isActive = activeFormat === fmt.id;
            return (
              <button
                key={fmt.id}
                onClick={() => setActiveFormat(fmt.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                  isActive
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'text-brand-muted dark:text-gray-400 hover:text-brand-text hover:bg-gray-100 dark:hover:bg-brand-darkBg'
                }`}
              >
                {fmt.label}
              </button>
            );
          })}
        </div>

        {/* Citation Output Box */}
        <div className="mt-4 p-4 rounded-2xl bg-gray-50 dark:bg-brand-darkBg border border-brand-border dark:border-brand-darkBorder font-mono text-xs text-brand-text dark:text-gray-200 leading-relaxed overflow-x-auto whitespace-pre-wrap max-h-60 select-all">
          {getCitationText()}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-brand-border dark:border-brand-darkBorder">
          <div className="text-[11px] font-mono text-brand-muted dark:text-gray-400">
            DOI: {publication.doi}
          </div>

          <div className="flex items-center gap-2">
            {activeFormat === 'bibtex' && (
              <button
                onClick={handleDownloadBibtex}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium border border-brand-border dark:border-brand-darkBorder hover:border-brand-blue text-brand-text dark:text-gray-200 transition-all"
              >
                <Download className="w-3.5 h-3.5 text-brand-blue" />
                <span>Download .bib</span>
              </button>
            )}

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-brand-blue text-white hover:bg-brand-blue-hover shadow-sm transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Citation'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
