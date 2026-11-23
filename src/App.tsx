import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Research } from './components/Research';
import { EbbinghausSimulator } from './components/EbbinghausSimulator';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { CitationModal } from './components/CitationModal';
import { ProjectModal } from './components/ProjectModal';
import { Publication, Project } from './types';
import { LanguageProvider } from './context/LanguageContext';

export function PortfolioContent() {
  const [cvOpen, setCvOpen] = useState(false);
  const [citationPub, setCitationPub] = useState<Publication | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    // Automatically match system display preference (dark/light mode)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const applyTheme = (isDark: boolean) => {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // Initial check
    applyTheme(mediaQuery.matches);

    // Dynamic listener for changes in OS theme
    const listener = (e: MediaQueryListEvent) => {
      applyTheme(e.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-brand-darkBg text-brand-text dark:text-gray-100 transition-colors duration-300">
      
      {/* Navbar with EN/ID language switcher */}
      <Navbar onOpenCV={() => setCvOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenCV={() => setCvOpen(true)} />

        {/* 2. About Me */}
        <About />

        {/* 3. Education */}
        <Education />

        {/* 4. Research & Publications */}
        <Research onOpenCitation={(pub) => setCitationPub(pub)} />

        {/* 5. Interactive Research Simulation (Ebbinghaus Optimization) */}
        <EbbinghausSimulator />

        {/* 6. Projects & Activities */}
        <Projects onSelectProject={(proj) => setActiveProject(proj)} />

        {/* 8. Skills & Expertise */}
        <Skills />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer onOpenCV={() => setCvOpen(true)} />

      {/* Modals */}
      <CVModal 
        isOpen={cvOpen} 
        onClose={() => setCvOpen(false)} 
      />

      <CitationModal 
        publication={citationPub} 
        onClose={() => setCitationPub(null)} 
      />

      <ProjectModal 
        project={activeProject} 
        onClose={() => setActiveProject(null)} 
      />

    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}

export default App;
