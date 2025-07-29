import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { PortfolioMode } from '../types';

interface ModeSwitcherProps {
  currentMode: PortfolioMode;
  onModeChange: (mode: PortfolioMode) => void;
}

const ModeSwitcher = ({ currentMode, onModeChange }: ModeSwitcherProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100] pointer-events-auto">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-14 h-14 bg-accent hover:bg-accent/90 text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isExpanded ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            )}
          </motion.div>
        </motion.button>

        {/* Mode Switcher Panel */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-neutral-200 p-2 min-w-[180px]"
            >
              <div className="space-y-1">
                <motion.button
                  onClick={() => {
                    onModeChange('fullstack');
                    setIsExpanded(false);
                  }}
                  className={`w-full px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 text-left ${
                    currentMode === 'fullstack'
                      ? 'bg-accent text-white shadow-sm'
                      : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <div>
                      <div className="font-semibold">Full Stack Dev</div>
                      <div className="text-xs opacity-75">AI Developer Mode</div>
                    </div>
                  </div>
                </motion.button>
                
                <motion.button
                  onClick={() => {
                    onModeChange('research');
                    setIsExpanded(false);
                  }}
                  className={`w-full px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 text-left ${
                    currentMode === 'research'
                      ? 'bg-accent text-white shadow-sm'
                      : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <div>
                      <div className="font-semibold">Research</div>
                      <div className="text-xs opacity-75">ML Researcher Mode</div>
                    </div>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ModeSwitcher;
