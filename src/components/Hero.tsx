import { motion } from 'framer-motion';
import { PersonalInfo, PortfolioMode } from '../types';

interface HeroProps {
  personalInfo: PersonalInfo;
  mode: PortfolioMode;
  modeData: {
    title: string;
    bio: string;
  };
}

const Hero = ({ personalInfo, mode, modeData }: HeroProps) => {
  const scrollToSection = (sectionId: string) => {
    if (mode === 'research' && sectionId === 'projects') {
      const element = document.getElementById('publications');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="pt-32 pb-20 section-padding">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I'm{' '}
              <span className="text-gradient">{personalInfo.name}</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl lg:text-3xl text-neutral-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {modeData.title}
            </motion.h2>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection(mode === 'research' ? 'publications' : 'projects')}
                className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-dark transition-colors duration-200"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {mode === 'research' ? 'View Publications' : 'View My Work'}
              </motion.button>
              
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-neutral-300 text-neutral-700 px-8 py-3 rounded-lg font-medium hover:bg-neutral-100 transition-colors duration-200"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-96 h-96 rounded-full bg-gradient-to-br from-accent/20 to-accent-light/20 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
                  {personalInfo.avatar ? (
                    <img 
                      src={personalInfo.avatar} 
                      alt={personalInfo.name}
                      className="w-72 h-72 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-72 h-72 rounded-full bg-neutral-200 flex items-center justify-center">
                      <svg className="w-32 h-32 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L12 1L3 7V9H21ZM21 10H3V15C3 16.1 3.9 17 5 17V20C5 21.1 5.9 22 7 22S9 21.1 9 20V17H15V20C15 21.1 15.9 22 17 22S19 21.1 19 20V17C20.1 17 21 16.1 21 15V10Z"/>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
