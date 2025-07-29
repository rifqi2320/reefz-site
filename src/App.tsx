import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from './data';
import { PortfolioMode } from './types';
import ModeSwitcher from './components/ModeSwitcher';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [selectedExperienceTags, setSelectedExperienceTags] = useState<string[]>([]);
  const [selectedProjectTags, setSelectedProjectTags] = useState<string[]>([]);
  const [selectedPublicationTags, setSelectedPublicationTags] = useState<string[]>([]);
  const [mode, setMode] = useState<PortfolioMode>('fullstack');

  // Handle URL sharing for different modes
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const modeParam = urlParams.get('mode');
    if (modeParam === 'research' || modeParam === 'fullstack') {
      setMode(modeParam);
    }
  }, []);

  // Update URL when mode changes
  const handleModeChange = (newMode: PortfolioMode) => {
    setMode(newMode);
    const url = new URL(window.location.href);
    url.searchParams.set('mode', newMode);
    window.history.pushState({}, '', url.toString());
  };

  // Filter content based on mode using the modes attribute
  const filteredExperiences = portfolioData.experiences.filter(exp => 
    exp.modes.includes(mode)
  );

  const filteredProjects = portfolioData.projects.filter(proj => 
    proj.modes.includes(mode)
  );

  return (
    <div className="min-h-screen bg-neutral-50">
      <ModeSwitcher currentMode={mode} onModeChange={handleModeChange} />
      <Header mode={mode} />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Hero 
          personalInfo={portfolioData.personalInfo}
          mode={mode}
          modeData={portfolioData.modes[mode]}
        />
        
        <About 
          personalInfo={portfolioData.personalInfo}
          currentMode={mode}
          modeConfig={portfolioData.modes[mode]}
          portfolioData={portfolioData}
        />
        
        {mode === 'research' ? (
          // Research mode: Publications → Experience → Projects → Awards → Education
          <>
            <Publications 
              publications={portfolioData.publications}
              tags={portfolioData.tags.publications}
              selectedTags={selectedPublicationTags}
              onTagsChange={setSelectedPublicationTags}
            />
            
            <Experience 
              experiences={filteredExperiences}
              tags={portfolioData.tags.experiences}
              selectedTags={selectedExperienceTags}
              onTagsChange={setSelectedExperienceTags}
            />
            
            <Projects 
              projects={filteredProjects}
              tags={portfolioData.tags.projects}
              selectedTags={selectedProjectTags}
              onTagsChange={setSelectedProjectTags}
            />
          </>
        ) : (
          // Fullstack mode: Experience → Projects → Awards → Education
          <>
            <Experience 
              experiences={filteredExperiences}
              tags={portfolioData.tags.experiences}
              selectedTags={selectedExperienceTags}
              onTagsChange={setSelectedExperienceTags}
            />
            
            <Projects 
              projects={filteredProjects}
              tags={portfolioData.tags.projects}
              selectedTags={selectedProjectTags}
              onTagsChange={setSelectedProjectTags}
            />
          </>
        )}
        
        <Education education={portfolioData.education} />
        <Awards awards={portfolioData.awards} />
        <Contact personalInfo={portfolioData.personalInfo} />
        <Gallery personalInfo={portfolioData.personalInfo} />
      </motion.main>
    </div>
  );
}

export default App;
