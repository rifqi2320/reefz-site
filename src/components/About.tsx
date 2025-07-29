import { motion } from 'framer-motion';
import { PersonalInfo, PortfolioMode, PortfolioModeConfig, PortfolioData } from '../types';

interface AboutProps {
  personalInfo: PersonalInfo;
  currentMode: PortfolioMode;
  modeConfig: PortfolioModeConfig;
  portfolioData: PortfolioData;
}

const About = ({ personalInfo, currentMode, modeConfig, portfolioData }: AboutProps) => {
  // Calculate dynamic stats based on actual data
  const getStats = () => {
    const filteredExperiences = portfolioData.experiences.filter(exp => exp.modes.includes(currentMode));
    const filteredProjects = portfolioData.projects.filter(proj => proj.modes.includes(currentMode));
    
    // Calculate experience duration from earliest start date to present
    const experienceYears = filteredExperiences.length > 0 ? (() => {
      // Find the earliest start date
      const earliestStartDate = filteredExperiences.reduce((earliest, exp) => {
        const expDate = new Date(exp.startDate + '-01'); // Add day for valid date
        const earliestDate = new Date(earliest + '-01');
        return expDate < earliestDate ? exp.startDate : earliest;
      }, filteredExperiences[0].startDate);
      
      // Calculate years from earliest start to now
      const startYear = parseInt(earliestStartDate.split('-')[0]);
      const startMonth = parseInt(earliestStartDate.split('-')[1]);
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth() + 1; // getMonth() is 0-indexed
      
      // Calculate total years, considering months
      let years = currentYear - startYear;
      if (currentMonth < startMonth) {
        years -= 1; // Not yet reached the anniversary month
      }
      
      return Math.max(1, years); // At least 1 year
    })() : 0;
    
    // Get unique technologies from tags
    const allTags = [
      ...filteredExperiences.flatMap(exp => exp.tags),
      ...filteredProjects.flatMap(proj => proj.tags)
    ];
    const uniqueTechnologies = [...new Set(allTags)].length;
    
    if (currentMode === 'research') {
      return [
        { value: portfolioData.publications.length, label: 'Publications' },
        { value: filteredProjects.length, label: 'Research Projects' },
        { value: `${experienceYears}+`, label: 'Years Experience' },
        { value: uniqueTechnologies, label: 'Research Areas / Skills' }
      ];
    } else {
      return [
        { value: `${experienceYears}+`, label: 'Years Experience' },
        { value: filteredProjects.length, label: 'Projects' },
        { value: uniqueTechnologies, label: 'Skills' },
        { value: filteredExperiences.length, label: 'Companies Worked' }
      ];
    }
  };

  const stats = getStats();
  return (
    <section id="about" className="py-20 section-padding bg-neutral-100/50">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-neutral-600 leading-relaxed mb-6 text-justify">
              {modeConfig.bio}
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
              <div className="flex flex-wrap gap-4">
                {personalInfo.social.github && (
                  <motion.a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-600 hover:text-accent transition-colors duration-200"
                    whileHover={{ y: -2 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </motion.a>
                )}
                
                {personalInfo.social.linkedin && (
                  <motion.a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-600 hover:text-accent transition-colors duration-200"
                    whileHover={{ y: -2 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </motion.a>
                )}
                
                {personalInfo.social.twitter && (
                  <motion.a
                    href={personalInfo.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-600 hover:text-accent transition-colors duration-200"
                    whileHover={{ y: -2 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    Twitter
                  </motion.a>
                )}

                {currentMode === 'research' && personalInfo.social.scholar && (
                  <motion.a
                    href={personalInfo.social.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-600 hover:text-accent transition-colors duration-200"
                    whileHover={{ y: -2 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5 12 0Z"/>
                    </svg>
                    Google Scholar
                  </motion.a>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-neutral-600">{personalInfo.location}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-neutral-600 hover:text-accent transition-colors duration-200"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                custom={index}
              >
                <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-neutral-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
