import React, { useEffect } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  FileText
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('cv-modal-open');
    } else {
      document.body.classList.remove('cv-modal-open');
    }
    return () => {
      document.body.classList.remove('cv-modal-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMarkdown = () => {
    const mdContent = `# MURSYID NUR FAHMI
**Undergraduate Mathematics**
Padang, West Sumatra | mursyidnurfahmi@gmail.com | https://linkedin.com/in/mursyid-nur-fahmi

---

## PROFILE
A mathematics student with strong analytical thinking and problem-solving skills, as well as attention to detail. Has experience in organizations and event committees, and is able to work collaboratively, adapt to new environments, and is passionate about continuous learning and growth.

---

## EDUCATION
**Andalas University** — Padang, Indonesia  
Bachelor’s Degree in Mathematics (Pure Mathematics; Applied Mathematics interest)

---

## ORGANIZATIONAL EXPERIENCE

### HIMATIKA UNAND (2025)
*Spirituality Coordinator*  
- Coordinated spiritual activities and supported the implementation of religious programs within the organization.

### FSI FMIPA (2024–2025)
*Coordinator, Independent Economy Department (DEPKORI)*  
- Coordinated departmental activities and supported initiatives related to organizational economic development.

### BEM FMIPA (2024–2025)
*Human Resources Development (PSDM) Staff*  
- Supported human resource development programs and contributed to organizational member development activities.

---

## COMMITTEE EXPERIENCE

### Andalas Lawyers Club (2024)
*Security Staff*  
- Assisted in maintaining event security and supporting the smooth implementation of activities.

### LKMM-TD FMIPA (2024)
*Equipment Staff*  
- Assisted in preparing, managing, and ensuring the availability of equipment required for event activities.

---

## TRAINING, SEMINARS & WORKSHOPS
- **FORSTAT–UNAND Collaborative Workshop** - Program Studi S1 Statistika dan Sains Data, Universitas Andalas (16–17 Sep 2026)
- **Public Lecture: The Development of AI in Banking** - PT Bank Negara Indonesia (Persero) Tbk. & Universitas Andalas (17 Sep 2025)
- **Universitas Andalas Library Socialization** - Universitas Andalas Library (Sep 2023)

---

## PROFESSIONAL SKILLS
- **Coordination:** Program coordination, task coordination, teamwork, communication, time management
- **Work Approach:** Analytical thinking, problem-solving, attention to detail, adaptability

---

## TECHNICAL SKILLS
- **Mathematics:** Mathematical modeling, linear programming, optimization, numerical methods
- **Tools:** MATLAB, Maple, LaTeX

---

## LANGUAGES
- **Indonesian:** Native
- **English:** Basic (Limited Understanding)
`;

    const blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CV_Mursyid_Nur_Fahmi.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      id="cv-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="cv-modal-dialog"
        className="relative w-full max-w-4xl max-h-[94vh] overflow-y-auto rounded-2xl bg-gray-100 dark:bg-zinc-900 border border-brand-border dark:border-brand-darkBorder shadow-2xl text-brand-text dark:text-gray-100 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Actions Bar */}
        <div 
          id="cv-modal-toolbar"
          className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-5 py-3.5 border-b border-gray-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-blue"></span>
            <span className="font-heading font-bold text-sm sm:text-base text-gray-900 dark:text-white">
              {t.cv.modalHeading}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadMarkdown}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-mono font-medium border border-gray-300 dark:border-zinc-700 hover:border-brand-blue text-gray-700 dark:text-gray-200 bg-white dark:bg-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-all"
              title={t.cv.downloadMd}
            >
              <FileText className="w-3.5 h-3.5 text-brand-blue" />
              <span className="hidden sm:inline">{t.cv.downloadMd}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-300 dark:border-zinc-700 hover:border-brand-blue text-gray-700 dark:text-gray-200 bg-white dark:bg-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-all"
              title={t.cv.printPdf}
            >
              <Printer className="w-3.5 h-3.5 text-brand-blue" />
              <span className="hidden sm:inline">{t.cv.printPdf}</span>
            </button>

            <a
              href="/CV_Mursyid_Nur_Fahmi.pdf"
              download="CV_Mursyid_Nur_Fahmi.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-brand-blue text-white hover:bg-brand-blue-hover shadow-sm transition-all"
              title={t.cv.downloadPdf}
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.cv.downloadPdf}</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors ml-0.5"
              aria-label={t.common.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Container - styled to match the uploaded A4 PDF */}
        <div id="cv-paper-wrapper" className="p-3 sm:p-6 md:p-8 flex justify-center">
          <div 
            id="printable-cv"
            className="w-full max-w-[794px] bg-white text-[#111111] px-6 py-7 sm:px-12 sm:py-10 rounded-lg shadow-md border border-gray-200 leading-[1.35]"
            style={{ fontFamily: "'Times New Roman', Times, Georgia, serif" }}
          >
            {/* Header */}
            <div className="text-center mb-4">
              <h1 
                className="text-2xl sm:text-[26px] font-bold text-[#111111] tracking-wide uppercase leading-tight"
                style={{ fontFamily: "'Times New Roman', Times, Georgia, serif" }}
              >
                MURSYID NUR FAHMI
              </h1>
              <div className="text-[15px] sm:text-[16px] font-normal text-[#1428A0] mt-0.5">
                Undergraduate Mathematics
              </div>
              <div className="text-[11px] text-[#222222] mt-1 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-0.5">
                <span>Padang, West Sumatra</span>
                <span>|</span>
                <a 
                  href="mailto:mursyidnurfahmi@gmail.com" 
                  className="text-[#222222] hover:text-[#1428A0] hover:underline"
                >
                  mursyidnurfahmi@gmail.com
                </a>
                <span>|</span>
                <a 
                  href="https://linkedin.com/in/mursyid-nur-fahmi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#222222] hover:text-[#1428A0] hover:underline"
                >
                  linkedin.com/in/mursyid-nur-fahmi
                </a>
              </div>
            </div>

            {/* 1. PROFILE */}
            <section className="mb-3.5">
              <h2 
                className="text-[13px] font-bold text-[#1428A0] uppercase tracking-normal pb-[2px] border-b border-[#1428A0] mb-1.5"
                style={{ fontFamily: "'Times New Roman', Times, Georgia, serif" }}
              >
                PROFILE
              </h2>
              <p className="text-[#1a1a1a] text-[12px] leading-[1.4] text-justify">
                A mathematics student with strong analytical thinking and problem-solving skills, as well as attention to detail. Has experience in organizations and event committees, and is able to work collaboratively, adapt to new environments, and is passionate about continuous learning and growth.
              </p>
            </section>

            {/* 2. EDUCATION */}
            <section className="mb-3.5">
              <h2 
                className="text-[13px] font-bold text-[#1428A0] uppercase tracking-normal pb-[2px] border-b border-[#1428A0] mb-1.5"
                style={{ fontFamily: "'Times New Roman', Times, Georgia, serif" }}
              >
                EDUCATION
              </h2>
              <div className="text-[12px]">
                <div className="flex flex-col sm:flex-row print:flex-row sm:items-baseline print:items-baseline justify-between">
                  <span className="font-bold text-[#111111]">Andalas University</span>
                  <span className="text-[#444444] text-[11.5px]">Padang, Indonesia</span>
                </div>
                <div className="text-[#1a1a1a] mt-0.5">
                  Bachelor’s Degree in Mathematics (Pure Mathematics; Applied Mathematics interest)
                </div>
              </div>
            </section>

            {/* 3. ORGANIZATIONAL EXPERIENCE */}
            <section className="mb-3.5">
              <h2 
                className="text-[13px] font-bold text-[#1428A0] uppercase tracking-normal pb-[2px] border-b border-[#1428A0] mb-1.5"
                style={{ fontFamily: "'Times New Roman', Times, Georgia, serif" }}
              >
                ORGANIZATIONAL EXPERIENCE
              </h2>
              <div className="space-y-2 text-[12px]">
                {/* HIMATIKA UNAND */}
                <div>
                  <div className="flex flex-col sm:flex-row print:flex-row sm:items-baseline print:items-baseline justify-between">
                    <span className="font-bold text-[#111111]">HIMATIKA UNAND</span>
                    <span className="text-[#444444] text-[11.5px]">2025</span>
                  </div>
                  <div className="text-[#1a1a1a]">
                    Spirituality Coordinator
                  </div>
                  <ul className="list-disc list-outside ml-5 mt-0.5 text-[11.5px] text-[#1a1a1a]">
                    <li>Coordinated spiritual activities and supported the implementation of religious programs within the organization.</li>
                  </ul>
                </div>

                {/* FSI FMIPA */}
                <div>
                  <div className="flex flex-col sm:flex-row print:flex-row sm:items-baseline print:items-baseline justify-between">
                    <span className="font-bold text-[#111111]">FSI FMIPA</span>
                    <span className="text-[#444444] text-[11.5px]">2024–2025</span>
                  </div>
                  <div className="text-[#1a1a1a]">
                    Coordinator, Independent Economy Department (DEPKORI)
                  </div>
                  <ul className="list-disc list-outside ml-5 mt-0.5 text-[11.5px] text-[#1a1a1a]">
                    <li>Coordinated departmental activities and supported initiatives related to organizational economic development.</li>
                  </ul>
                </div>

                {/* BEM FMIPA */}
                <div>
                  <div className="flex flex-col sm:flex-row print:flex-row sm:items-baseline print:items-baseline justify-between">
                    <span className="font-bold text-[#111111]">BEM FMIPA</span>
                    <span className="text-[#444444] text-[11.5px]">2024–2025</span>
                  </div>
                  <div className="text-[#1a1a1a]">
                    Human Resources Development (PSDM) Staff
                  </div>
                  <ul className="list-disc list-outside ml-5 mt-0.5 text-[11.5px] text-[#1a1a1a]">
                    <li>Supported human resource development programs and contributed to organizational member development activities.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. COMMITTEE EXPERIENCE */}
            <section className="mb-3.5">
              <h2 
                className="text-[13px] font-bold text-[#1428A0] uppercase tracking-normal pb-[2px] border-b border-[#1428A0] mb-1.5"
                style={{ fontFamily: "'Times New Roman', Times, Georgia, serif" }}
              >
                COMMITTEE EXPERIENCE
              </h2>
              <div className="space-y-2 text-[12px]">
                {/* Andalas Lawyers Club */}
                <div>
                  <div className="flex flex-col sm:flex-row print:flex-row sm:items-baseline print:items-baseline justify-between">
                    <span className="font-bold text-[#111111]">Andalas Lawyers Club</span>
                    <span className="text-[#444444] text-[11.5px]">2024</span>
                  </div>
                  <div className="text-[#1a1a1a]">
                    Security Staff
                  </div>
                  <ul className="list-disc list-outside ml-5 mt-0.5 text-[11.5px] text-[#1a1a1a]">
                    <li>Assisted in maintaining event security and supporting the smooth implementation of activities.</li>
                  </ul>
                </div>

                {/* LKMM-TD FMIPA */}
                <div>
                  <div className="flex flex-col sm:flex-row print:flex-row sm:items-baseline print:items-baseline justify-between">
                    <span className="font-bold text-[#111111]">LKMM-TD FMIPA</span>
                    <span className="text-[#444444] text-[11.5px]">2024</span>
                  </div>
                  <div className="text-[#1a1a1a]">
                    Equipment Staff
                  </div>
                  <ul className="list-disc list-outside ml-5 mt-0.5 text-[11.5px] text-[#1a1a1a]">
                    <li>Assisted in preparing, managing, and ensuring the availability of equipment required for event activities.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. TRAINING, SEMINARS & WORKSHOPS */}
            <section className="mb-3.5">
              <h2 
                className="text-[13px] font-bold text-[#1428A0] uppercase tracking-normal pb-[2px] border-b border-[#1428A0] mb-1.5"
                style={{ fontFamily: "'Times New Roman', Times, Georgia, serif" }}
              >
                TRAINING, SEMINARS &amp; WORKSHOPS
              </h2>
              <ul className="list-disc list-outside ml-5 space-y-1 text-[11.5px] text-[#1a1a1a]">
                <li>
                  <div className="flex flex-col sm:flex-row print:flex-row sm:items-baseline print:items-baseline justify-between gap-1">
                    <div>
                      <span className="font-bold text-[#111111]">FORSTAT–UNAND Collaborative Workshop</span>
                      <span> - Program Studi S1 Statistika dan Sains Data, Universitas Andalas</span>
                    </div>
                    <span className="text-[#444444] whitespace-nowrap sm:ml-4">16–17 Sep 2026</span>
                  </div>
                </li>

                <li>
                  <div className="flex flex-col sm:flex-row print:flex-row sm:items-baseline print:items-baseline justify-between gap-1">
                    <div>
                      <span className="font-bold text-[#111111]">Public Lecture: The Development of AI in Banking</span>
                      <span> - PT Bank Negara Indonesia (Persero) Tbk. &amp; Universitas Andalas</span>
                    </div>
                    <span className="text-[#444444] whitespace-nowrap sm:ml-4">17 Sep 2025</span>
                  </div>
                </li>

                <li>
                  <div className="flex flex-col sm:flex-row print:flex-row sm:items-baseline print:items-baseline justify-between gap-1">
                    <div>
                      <span className="font-bold text-[#111111]">Universitas Andalas Library Socialization</span>
                      <span> - Universitas Andalas Library</span>
                    </div>
                    <span className="text-[#444444] whitespace-nowrap sm:ml-4">Sep 2023</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* 6. PROFESSIONAL SKILLS */}
            <section className="mb-3.5">
              <h2 
                className="text-[13px] font-bold text-[#1428A0] uppercase tracking-normal pb-[2px] border-b border-[#1428A0] mb-1.5"
                style={{ fontFamily: "'Times New Roman', Times, Georgia, serif" }}
              >
                PROFESSIONAL SKILLS
              </h2>
              <div className="space-y-0.5 text-[11.5px] text-[#1a1a1a]">
                <div>
                  <span className="font-bold text-[#111111]">Coordination: </span>
                  <span>Program coordination, task coordination, teamwork, communication, time management</span>
                </div>
                <div>
                  <span className="font-bold text-[#111111]">Work Approach: </span>
                  <span>Analytical thinking, problem-solving, attention to detail, adaptability</span>
                </div>
              </div>
            </section>

            {/* 7. TECHNICAL SKILLS */}
            <section className="mb-3.5">
              <h2 
                className="text-[13px] font-bold text-[#1428A0] uppercase tracking-normal pb-[2px] border-b border-[#1428A0] mb-1.5"
                style={{ fontFamily: "'Times New Roman', Times, Georgia, serif" }}
              >
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-0.5 text-[11.5px] text-[#1a1a1a]">
                <div>
                  <span className="font-bold text-[#111111]">Mathematics: </span>
                  <span>Mathematical modeling, linear programming, optimization, numerical methods</span>
                </div>
                <div>
                  <span className="font-bold text-[#111111]">Tools: </span>
                  <span>MATLAB, Maple, LaTeX</span>
                </div>
              </div>
            </section>

            {/* 8. LANGUAGES */}
            <section>
              <h2 
                className="text-[13px] font-bold text-[#1428A0] uppercase tracking-normal pb-[2px] border-b border-[#1428A0] mb-1.5"
                style={{ fontFamily: "'Times New Roman', Times, Georgia, serif" }}
              >
                LANGUAGES
              </h2>
              <div className="space-y-0.5 text-[11.5px] text-[#1a1a1a]">
                <div>
                  <span className="font-bold text-[#111111]">Indonesian: </span>
                  <span>Native</span>
                </div>
                <div>
                  <span className="font-bold text-[#111111]">English: </span>
                  <span>Basic (Limited Understanding)</span>
                </div>
              </div>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
};
