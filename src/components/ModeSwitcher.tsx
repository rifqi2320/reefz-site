import { motion } from 'framer-motion';
import { useState } from 'react';
import { PortfolioMode } from '../types';

interface ModeSwitcherProps {
  currentMode: PortfolioMode;
  onModeChange: (mode: PortfolioMode) => void;
}

const ModeSwitcher = ({ currentMode, onModeChange }: ModeSwitcherProps) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <motion.div
      className="fixed bottom-6 right-0 z-[100] pointer-events-auto"
      animate={{ x: isVisible ? 0 : "95%" }} // Slide out to the right, leaving about 40px visible
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="relative bg-white/95 backdrop-blur-md rounded-l-lg shadow-xl border border-neutral-200 border-r-0">
        {/* Toggle Tab */}
        <motion.button
          onClick={() => setIsVisible(!isVisible)}
          className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 w-10 h-16 bg-accent hover:bg-accent/90 text-white rounded-l-lg shadow-lg flex items-center justify-center transition-colors duration-200"
          whileHover={{ x: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isVisible ? 0 : 180 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </motion.button>

        {/* Mode Switcher Content */}
        <div className="p-4 min-w-[200px]">
          <div className="text-xs text-neutral-500 mb-3 font-medium uppercase tracking-wide">
            Portfolio Mode
          </div>
          
          <div className="flex items-center space-x-1 bg-neutral-100 rounded-lg p-1">
            <motion.button
              onClick={() => onModeChange('fullstack')}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                currentMode === 'fullstack'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-white'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span>Dev</span>
              </div>
            </motion.button>
            
            <motion.button
              onClick={() => onModeChange('research')}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                currentMode === 'research'
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-white'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 713.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span>Research</span>
              </div>
            </motion.button>
          </div>
          
          <div className="mt-3 text-xs text-neutral-500 text-center">
            {currentMode === 'fullstack' ? 'AI Developer Mode' : 'ML Researcher Mode'}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ModeSwitcher;
