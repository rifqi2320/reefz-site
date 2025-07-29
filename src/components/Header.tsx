import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { PortfolioMode } from '../types';

interface HeaderProps {
  mode?: PortfolioMode;
}

const Header = ({ mode = 'fullstack' }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-neutral-50/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="section-padding container-width py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Me-Reefz
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Experience', mode === 'research' ? 'Publications' : 'Projects', 'Contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-neutral-600 hover:text-accent transition-colors duration-200"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <motion.button
            className="md:hidden text-neutral-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
