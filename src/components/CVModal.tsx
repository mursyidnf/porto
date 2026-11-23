import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  FileText, 
  Mail, 
  MapPin, 
  Linkedin,
  ExternalLink
} from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
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
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[94vh] overflow-y-auto rounded-2xl bg-gray-100 dark:bg-zinc-900 border border-brand-border dark:border-brand-darkBorder shadow-2xl text-brand-text dark:text-gray-100 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Actions Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-5 py-3.5 border-b border-gray-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-blue"></span>
            <span className="font-heading font-bold text-sm sm:text-base text-gray-900 dark:text-white">
              Curriculum Vitae Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border border-gray-300 dark:border-zinc-700 hover:border-brand-blue text-gray-700 dark:text-gray-200 bg-white dark:bg-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-all"
              title="Download Markdown summary"
            >
              <Download className="w-3.5 h-3.5 text-brand-blue" />
              <span className="hidden sm:inline">Download MD</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-brand-blue text-white hover:bg-brand-blue-hover shadow-sm transition-all"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors ml-1"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Container - styled like authentic A4 sheet */}
        <div className="p-3 sm:p-6 md:p-8 flex justify-center">
          <div 
            id="printable-cv"
            className="w-full max-w-[800px] bg-white text-gray-900 p-6 sm:p-10 md:p-12 rounded-lg shadow-md border border-gray-200 font-sans text-[13px] leading-relaxed"
            style={{ minHeight: '1050px' }}
          >
            {/* Header */}
            <div className="text-center pb-5 mb-5 border-b border-gray-300">
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-950 tracking-wide uppercase">
                MURSYID NUR FAHMI
              </h1>
              <div className="text-sm font-medium text-gray-800 mt-1">
                Undergraduate Mathematics
              </div>
              <div className="text-xs text-gray-600 mt-1.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                <span>Padang, West Sumatra</span>
                <span className="text-gray-400">|</span>
                <a 
                  href="mailto:mursyidnurfahmi@gmail.com" 
                  className="text-gray-700 hover:text-brand-blue hover:underline"
                >
                  mursyidnurfahmi@gmail.com
                </a>
                <span className="text-gray-400">|</span>
                <a 
                  href="https://linkedin.com/in/mursyid-nur-fahmi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 hover:text-brand-blue hover:underline"
                >
                  linkedin.com/in/mursyid-nur-fahmi
                </a>
              </div>
            </div>

            {/* 1. PROFILE */}
            <section className="mb-5">
              <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider pb-1 border-b-2 border-blue-900 mb-2">
                PROFILE
              </h2>
              <p className="text-gray-800 text-[12.5px] leading-normal text-justify">
                A mathematics student with strong analytical thinking and problem-solving skills, as well as attention to detail. Has experience in organizations and event committees, and is able to work collaboratively, adapt to new environments, and is passionate about continuous learning and growth.
              </p>
            </section>

            {/* 2. EDUCATION */}
            <section className="mb-5">
              <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider pb-1 border-b-2 border-blue-900 mb-2">
                EDUCATION
              </h2>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <span className="font-bold text-gray-900 text-[13px]">Andalas University</span>
                  <span className="text-gray-600 text-xs">Padang, Indonesia</span>
                </div>
                <div className="text-gray-800 text-xs mt-0.5">
                  Bachelor’s Degree in Mathematics (Pure Mathematics; Applied Mathematics interest)
                </div>
              </div>
            </section>

            {/* 3. ORGANIZATIONAL EXPERIENCE */}
            <section className="mb-5">
              <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider pb-1 border-b-2 border-blue-900 mb-2.5">
                ORGANIZATIONAL EXPERIENCE
              </h2>
              <div className="space-y-3">
                {/* HIMATIKA UNAND */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-bold text-gray-900 text-[13px]">HIMATIKA UNAND</span>
                    <span className="text-gray-600 text-xs font-medium">2025</span>
                  </div>
                  <div className="text-gray-800 text-xs italic mt-0.5">
                    Spirituality Coordinator
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1 text-xs text-gray-700 space-y-0.5">
                    <li>Coordinated spiritual activities and supported the implementation of religious programs within the organization.</li>
                  </ul>
                </div>

                {/* FSI FMIPA */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-bold text-gray-900 text-[13px]">FSI FMIPA</span>
                    <span className="text-gray-600 text-xs font-medium">2024–2025</span>
                  </div>
                  <div className="text-gray-800 text-xs italic mt-0.5">
                    Coordinator, Independent Economy Department (DEPKORI)
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1 text-xs text-gray-700 space-y-0.5">
                    <li>Coordinated departmental activities and supported initiatives related to organizational economic development.</li>
                  </ul>
                </div>

                {/* BEM FMIPA */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-bold text-gray-900 text-[13px]">BEM FMIPA</span>
                    <span className="text-gray-600 text-xs font-medium">2024–2025</span>
                  </div>
                  <div className="text-gray-800 text-xs italic mt-0.5">
                    Human Resources Development (PSDM) Staff
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1 text-xs text-gray-700 space-y-0.5">
                    <li>Supported human resource development programs and contributed to organizational member development activities.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. COMMITTEE EXPERIENCE */}
            <section className="mb-5">
              <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider pb-1 border-b-2 border-blue-900 mb-2.5">
                COMMITTEE EXPERIENCE
              </h2>
              <div className="space-y-3">
                {/* Andalas Lawyers Club */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-bold text-gray-900 text-[13px]">Andalas Lawyers Club</span>
                    <span className="text-gray-600 text-xs font-medium">2024</span>
                  </div>
                  <div className="text-gray-800 text-xs italic mt-0.5">
                    Security Staff
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1 text-xs text-gray-700 space-y-0.5">
                    <li>Assisted in maintaining event security and supporting the smooth implementation of activities.</li>
                  </ul>
                </div>

                {/* LKMM-TD FMIPA */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-bold text-gray-900 text-[13px]">LKMM-TD FMIPA</span>
                    <span className="text-gray-600 text-xs font-medium">2024</span>
                  </div>
                  <div className="text-gray-800 text-xs italic mt-0.5">
                    Equipment Staff
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1 text-xs text-gray-700 space-y-0.5">
                    <li>Assisted in preparing, managing, and ensuring the availability of equipment required for event activities.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. TRAINING, SEMINARS & WORKSHOPS */}
            <section className="mb-5">
              <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider pb-1 border-b-2 border-blue-900 mb-2.5">
                TRAINING, SEMINARS & WORKSHOPS
              </h2>
              <div className="space-y-1.5 text-xs text-gray-800">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span className="font-semibold text-gray-900">• FORSTAT–UNAND Collaborative Workshop</span>
                    <span className="text-gray-700"> - Program Studi S1 Statistika dan Sains Data, Universitas Andalas</span>
                  </div>
                  <span className="text-gray-600 text-xs whitespace-nowrap sm:ml-4">16–17 Sep 2026</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span className="font-semibold text-gray-900">• Public Lecture: The Development of AI in Banking</span>
                    <span className="text-gray-700"> - PT Bank Negara Indonesia (Persero) Tbk. & Universitas Andalas</span>
                  </div>
                  <span className="text-gray-600 text-xs whitespace-nowrap sm:ml-4">17 Sep 2025</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span className="font-semibold text-gray-900">• Universitas Andalas Library Socialization</span>
                    <span className="text-gray-700"> - Universitas Andalas Library</span>
                  </div>
                  <span className="text-gray-600 text-xs whitespace-nowrap sm:ml-4">Sep 2023</span>
                </div>
              </div>
            </section>

            {/* 6. PROFESSIONAL SKILLS */}
            <section className="mb-5">
              <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider pb-1 border-b-2 border-blue-900 mb-2">
                PROFESSIONAL SKILLS
              </h2>
              <div className="space-y-1 text-xs text-gray-800">
                <div>
                  <span className="font-bold text-gray-900">Coordination: </span>
                  <span className="text-gray-700">Program coordination, task coordination, teamwork, communication, time management</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Work Approach: </span>
                  <span className="text-gray-700">Analytical thinking, problem-solving, attention to detail, adaptability</span>
                </div>
              </div>
            </section>

            {/* 7. TECHNICAL SKILLS */}
            <section className="mb-5">
              <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider pb-1 border-b-2 border-blue-900 mb-2">
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-1 text-xs text-gray-800">
                <div>
                  <span className="font-bold text-gray-900">Mathematics: </span>
                  <span className="text-gray-700">Mathematical modeling, linear programming, optimization, numerical methods</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Tools: </span>
                  <span className="text-gray-700">MATLAB, Maple, LaTeX</span>
                </div>
              </div>
            </section>

            {/* 8. LANGUAGES */}
            <section>
              <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider pb-1 border-b-2 border-blue-900 mb-2">
                LANGUAGES
              </h2>
              <div className="space-y-1 text-xs text-gray-800">
                <div>
                  <span className="font-bold text-gray-900">Indonesian: </span>
                  <span className="text-gray-700">Native</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">English: </span>
                  <span className="text-gray-700">Basic (Limited Understanding)</span>
                </div>
              </div>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
};
