import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import { SectionId } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HOME);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection Observer to update active state on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const sections = Object.values(SectionId).map((id) => document.getElementById(id));
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="bg-black min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white">
      <Navbar activeSection={activeSection} scrollTo={scrollToSection} />
      
      <Hero id={SectionId.HOME} />
      <About id={SectionId.ABOUT} />
      <Skills id={SectionId.SKILLS} />
      <Projects id={SectionId.PROJECTS} />
      <Services id={SectionId.SERVICES} />
      <Contact id={SectionId.CONTACT} />
      
      <ScrollToTop />
    </main>
  );
};

export default App;