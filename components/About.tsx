import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { ArrowRight } from 'lucide-react';

const MotionDiv = motion.div as any;

interface AboutProps {
  id: SectionId;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id} className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col justify-center">
      
      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-12 xl:px-16 2xl:px-24 relative z-10 h-full flex flex-col justify-between py-20 2xl:py-32">
        
        {/* Top Section: Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 2xl:gap-20 pt-12 2xl:pt-24 z-20">
           <MotionDiv 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="flex gap-5 items-baseline"
           >
             <h2 className="text-5xl md:text-4xl 2xl:text-[9rem] font-bold text-white">ABOUT.</h2>
             <h2 className="text-5xl md:text-4xl 2xl:text-[9rem] font-bold text-white">ME</h2>
           </MotionDiv>

           <MotionDiv 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-gray-300 space-y-6 2xl:space-y-10 md:pl-12"
           >
             <h3 className="text-2xl 2xl:text-4xl font-bold text-white">Hey, I'm Pravin.</h3>
             <p className="text-lg 2xl:text-3xl leading-relaxed text-gray-400 2xl:leading-loose">
               I turn ideas into fast, beautiful web apps that don't break when real people use them. 
               React + Next.js on the front, Node.js magic in the back. Clean code, happy users — that's my thing.
             </p>
           </MotionDiv>
        </div>

        {/* Middle/Bottom Section: Graphic and CTA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end mt-20 md:mt-32 2xl:mt-48">
           
           {/* Large Circle & Text - Bottom Left */}
           <div className="md:col-span-5 relative">
             <MotionDiv 
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] 2xl:w-[700px] 2xl:h-[700px] bg-gradient-to-br from-purple-400 via-purple-600 to-indigo-900 rounded-full absolute -left-20 -bottom-40 md:-bottom-60 2xl:-bottom-80 -z-10 blur-sm"
             />
             <div className="relative z-10 pointer-events-none">
                <h2 className="text-5xl md:text-7xl 2xl:text-[8rem] font-light text-white leading-tight">
                  Innovation <br/> in
                </h2>
                <h2 className="text-5xl md:text-7xl 2xl:text-[8rem] font-light text-white leading-tight">
                  Programming
                </h2>
             </div>
           </div>

           {/* Arrow and CTA - Bottom Right */}
           <div className="md:col-span-7 flex flex-col md:flex-row items-center justify-end gap-12 2xl:gap-24 pb-12 2xl:pb-24">
              <MotionDiv
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                 <ArrowRight className="w-32 h-32 2xl:w-56 2xl:h-56 text-pink-300 rotate-90 md:rotate-0" strokeWidth={3} />
              </MotionDiv>

              <button className="px-8 py-3 xl:px-4 xl:py-2 2xl:px-16 2xl:py-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full font-bold text-white xl:text-lg 2xl:text-xl hover:scale-105 transition-transform shadow-xl">
                Grab my CV
              </button>
           </div>
        </div>
      </div>
      
      {/* Background Fade */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default About;