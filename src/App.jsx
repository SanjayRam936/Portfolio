import React from 'react';
import Header from './components/layout/Header';
import HomeSection from './sections/HomeSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <div className="bg-bg min-h-screen font-body text-text-primary selection:bg-accent-green/30 selection:text-text-primary overflow-x-hidden">
      <Header />
      <main>
        <HomeSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
