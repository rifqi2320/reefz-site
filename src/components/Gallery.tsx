import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { PersonalInfo } from '../types';

interface GalleryProps {
  personalInfo: PersonalInfo;
}

const Gallery = ({ personalInfo }: GalleryProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!personalInfo.gallery || personalInfo.gallery.length === 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % personalInfo.gallery!.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + personalInfo.gallery!.length) % personalInfo.gallery!.length);
  };

  // Auto-play carousel
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, personalInfo.gallery.length]);

  return (
    <section id="gallery" className="py-20 section-padding bg-neutral-100/50">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Gallery</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          <div className="relative h-96 rounded-2xl overflow-hidden bg-neutral-200 group">
            <motion.img
              key={currentIndex}
              src={personalInfo.gallery[currentIndex].url}
              alt={personalInfo.gallery[currentIndex].alt}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Tooltip - only show on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <p className="text-lg font-medium">{personalInfo.gallery[currentIndex].caption}</p>
            </motion.div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Play/Pause indicator */}
            <div className="absolute top-4 right-4">
              <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {personalInfo.gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-accent' : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
