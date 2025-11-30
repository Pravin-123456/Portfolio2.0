import React from 'react';
import { SectionId } from '../types';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;
const MotionH2 = motion.h2 as any;

interface ServicesProps {
  id: SectionId;
}

// Mock data since assets file is not available
const serviceData = [
  // {
  //   name: "Web Development",
  //   des: "I build reliable, scalable, and secure web applications using the MERN stack. From complex backends to dynamic frontends, I handle the full lifecycle."
  // },
  {
    name: "UI/UX Design",
    des: "Designing intuitive interfaces that users love. I focus on accessibility, visual hierarchy, and seamless interactions to boost engagement."
  },
  {
    name: "API Integration",
    des: "Connecting your applications with third-party services and building robust RESTful APIs to ensure smooth data flow and functionality."
  },
  {
    name: "Performance Optimization",
    des: "Speed matters. I optimize applications for maximum performance, ensuring fast load times and smooth experiences across all devices."
  }
];

const Services: React.FC<ServicesProps> = ({ id }) => {
  return (
    <section id={id} className="relative min-h-screen w-full flex flex-col justify-center py-24 overflow-hidden">
      
      {/* Background Gradient to blend with the site theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 xl:px-16 2xl:px-24 relative z-10">
        
        {/* Section Title */}
        <MotionH2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-4xl 2xl:text-[9rem] font-bold text-white mb-20 2xl:mb-32 text-start"
        >
            SERVICES
        </MotionH2>
        
        <div className="w-full flex justify-center">
          {/* Grid Layout: 1 column on mobile, 2 columns on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12 w-full max-w-6xl justify-items-center">
            {serviceData.map((item, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`relative bg-white/5 rounded-2xl p-8 pt-16 w-full min-h-[220px] text-left backdrop-blur-md shadow-lg border border-white/10 group hover:border-purple-500/30 transition-all duration-300 ${
                  index === serviceData.length - 1 && serviceData.length % 2 !== 0
                    ? "md:col-span-2 md:w-[calc(50%-1rem)] xl:w-[calc(50%-1.5rem)]"
                    : ""
                }`}
              >
                {/* Number Badge - Updated to Primary Gradient */}
                <div className="absolute -top-5 left-6 bg-gradient-to-r from-purple-600 to-pink-500 border border-white/20 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Title and Description */}
                <h2 className="text-xl 2xl:text-2xl font-bold pb-4 tracking-wide text-white group-hover:text-purple-300 transition-colors">
                  {item.name}
                </h2>
                <p className="text-sm 2xl:text-base text-gray-300 leading-relaxed">
                    {item.des}
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;