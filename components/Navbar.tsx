import React, { useState } from 'react';
import { SectionId } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const MotionNav = motion.nav as any;
const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;

interface NavbarProps {
  activeSection: SectionId;
  scrollTo: (id: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: SectionId.HOME, label: 'Home' },
    { id: SectionId.ABOUT, label: 'About' },
    { id: SectionId.SKILLS, label: 'Skills' },
    { id: SectionId.PROJECTS, label: 'Projects' },
    { id: SectionId.SERVICES, label: 'Services' },
    { id: SectionId.CONTACT, label: 'Get in Touch' },
  ];

  const getPageNumber = () => {
    switch (activeSection) {
      case SectionId.HOME: return 'Page 01';
      case SectionId.ABOUT: return 'Page 02';
      case SectionId.SKILLS: return 'Page 03';
      case SectionId.PROJECTS: return 'Page 04';
      case SectionId.SERVICES: return 'Page 05';
      case SectionId.CONTACT: return 'Page 06';
      default: return 'Page 01';
    }
  };

  const handleMobileNavClick = (id: SectionId) => {
    scrollTo(id);
    setIsMenuOpen(false);
  };

  return (
    <MotionNav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 text-white"
    >
      {/* Background Layer with Blur and Mask */}
      <div className="absolute top-0 left-0 right-0 -bottom-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm [mask-image:linear-gradient(to_bottom,black_50%,transparent)] -z-10" />

      {/* Header Container */}
      <div className="flex items-center justify-between px-6 py-4 md:px-12 xl:px-16 2xl:px-24 xl:py-2 relative z-50">

        {/* Brand Logo Area */}
        <div
          className="flex flex-col leading-tight w-auto lg:w-48 xl:w-72 2xl:w-96 cursor-pointer group"
          onClick={() => handleMobileNavClick(SectionId.HOME)}
        >
          <span className="text-sm xl:text-lg 2xl:text-xl font-light text-gray-300 group-hover:text-purple-400 transition-colors">Building the</span>
          <span className="text-md xl:text-2xl 2xl:text-3xl font-bold tracking-widest group-hover:text-white transition-colors">IMPOSIBLES</span>
        </div>

        {/* Desktop: Center Links */}
        <div className="hidden md:flex gap-3 lg:gap-6 xl:gap-12 2xl:gap-20 text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium tracking-wide">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`whitespace-nowrap hover:text-brand-purple transition-colors duration-300 ${activeSection === item.id ? 'text-white font-bold' : 'text-gray-400'}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Side Area */}
        <div className="w-auto lg:w-48 xl:w-72 2xl:w-96 flex justify-end items-center">
          {/* Desktop: Page Pill */}
          <div className="hidden md:block bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full px-3 py-1 lg:px-6 lg:py-2 text-xs lg:text-lg 2xl:text-xl font-bold shadow-lg shadow-purple-500/30">
            {getPageNumber()}
          </div>

          {/* Mobile: Stylish Hamburger Toggle */}
          <MotionButton
            className="md:hidden relative z-50 p-2 flex items-center justify-center text-white hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode='wait'>
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={32} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Modern Staggered Hamburger Icon: Full, Short-Right, Full */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="10" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </MotionButton>
        </div>
      </div>

      {/* Mobile Menu Overlay with Circular Reveal */}
      <AnimatePresence>
        {isMenuOpen && (
          <MotionDiv
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#050505] z-40 flex flex-col justify-center px-8 md:hidden"
          >
            {/* Ambient Background */}
            <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Navigation Links */}
            <div className="flex flex-col gap-6 relative z-10">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, type: "spring", stiffness: 100 }}
                  onClick={() => handleMobileNavClick(item.id)}
                  className="text-left group flex items-center gap-6"
                >
                  <span className="text-lg font-mono text-gray-600 group-hover:text-purple-400 transition-colors duration-300">
                    0{index + 1}
                  </span>
                  <span
                    className={`text-lg font-bold tracking-tighter uppercase transition-all duration-300 ${activeSection === item.id
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 scale-105 origin-left'
                      : 'text-gray-400 group-hover:text-white group-hover:translate-x-2'
                      }`}
                  >
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </MotionNav>
  );
};

export default Navbar;