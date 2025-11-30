import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionButton = motion.button as any;

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionButton
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.5 }}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-50 group"
        >
          <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-black/40 backdrop-blur-xl rounded-full border border-purple-500/30 shadow-[0_0_20px_rgba(139,92,246,0.2)] overflow-hidden transition-all duration-300 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]">
            
            {/* Animated Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icon */}
            <ChevronUp className="relative z-10 w-8 h-8 text-purple-400 group-hover:text-white transition-colors duration-300" strokeWidth={3} />
          </div>
        </MotionButton>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;