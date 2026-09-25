import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import TechnicalSkillsSection from './sections/TechnicalSkillsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500/30 font-sans transition-colors duration-300">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <ExperienceSection />
          <ProjectsSection />
          <TechnicalSkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
