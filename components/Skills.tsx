import React from 'react';
import { SectionId } from '../types';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;
const MotionRect = motion.rect as any;
const MotionCircle = motion.circle as any;

interface SkillsProps {
  id: SectionId;
}

interface Skill {
  name: string;
  icon: string;
  percentage: number;
  isCenter?: boolean;
}

// Configuration for the Skills
// Center is Next.js
const skillsData: Skill[] = [
  // Left Group
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', percentage: 90 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', percentage: 85 },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', percentage: 80 },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', percentage: 75 },
  

  
  // Center Item
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', percentage: 95, isCenter: true },
  
  // Right Group
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', percentage: 95 },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', percentage: 90 },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', percentage: 85 },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', percentage: 70 },
];

interface SkillItemProps {
  skill: Skill;
  index: number;
}

// Defined BEFORE usage to prevent ReferenceError
const SkillItem: React.FC<SkillItemProps> = ({ skill, index }) => {
    // Central Item Style (Glowing Orb)
    if (skill.isCenter) {
        return (
            <MotionDiv
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2 
                }}
                // Mobile: w-24 h-24 (fits grid)
                // Desktop: w-48 h-48 (larger central focus)
                className="relative w-24 h-24 md:w-48 md:h-48 2xl:w-64 2xl:h-64 flex items-center justify-center group"
            >
                {/* Background Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 via-fuchsia-500 to-violet-600 blur-2xl opacity-50 animate-pulse group-hover:opacity-20 transition-opacity duration-500" />
                
                {/* Loader SVG for Circle */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 z-20 pointer-events-none overflow-visible">
                    <MotionCircle
                        cx="50%"
                        cy="50%"
                        r="48%"
                        fill="transparent"
                        stroke="#8B5CF6"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0}}
                        whileInView={{ opacity: 0.1 }}
                        whileHover={{ 
                            pathLength: skill.percentage / 100, 
                            opacity: 1,
                            transition: { duration: 1, ease: "easeOut" }
                        }}
                        style={{ filter: "drop-shadow(0 0 8px #a855f7)" }}
                    />
                </svg>

                {/* Main Sphere - Theme: White/Purple Tint */}
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white via-purple-100 to-violet-200 shadow-[0_0_50px_rgba(168,85,247,0.5)] flex items-center justify-center z-10 overflow-hidden">
                    <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-12 h-12 md:w-24 md:h-24 2xl:w-32 2xl:h-32 object-contain group-hover:scale-90 group-hover:opacity-20 group-hover:grayscale transition-all duration-500" 
                    />
                    {/* Percentage Text on Hover */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-2xl md:text-5xl font-bold text-purple-600">{skill.percentage}%</span>
                    </div>
                </div>
            </MotionDiv>
        );
    }

    // Outer Items Style (Squares)
    return (
        <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ 
                y: -5, 
                boxShadow: "0 0 20px rgba(139,92,246,0.3)",
                backgroundColor: "rgba(255,255,255,0.08)"
            }}
            // Mobile: w-24 h-24
            // Desktop: w-28 h-28
            // Fixed Border Radius: rounded-[24px] to match SVG rx="24" exactly
            className="relative w-24 h-24 md:w-28 md:h-28 2xl:w-40 2xl:h-40 bg-white/5 backdrop-blur-sm rounded-[24px] flex items-center justify-center group cursor-default"
        >
            {/* Default Border (Fades out on hover) */}
            <div className="absolute inset-0 rounded-[24px] border border-white/10 group-hover:border-transparent transition-colors duration-300" />

            {/* SVG Loader Border */}
            <svg className="absolute inset-0 w-full h-full z-20 overflow-visible -rotate-90">
                 <MotionRect
                    width="100%"
                    height="100%"
                    rx="24" // Matches CSS border-radius exactly
                    fill="none"
                    stroke="#8B5CF6" // Brand Purple
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileHover={{ 
                        pathLength: skill.percentage / 100,
                        opacity: 1,
                        transition: { duration: 1.2, ease: "easeInOut" }
                    }}
                    style={{ 
                        filter: "drop-shadow(0 0 6px #8B5CF6)"
                    }}
                 />
            </svg>

            {/* Glass top reflection */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-t-[24px]" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center">
                <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-10 h-10 md:w-14 md:h-14 2xl:w-20 2xl:h-20 object-contain opacity-100 group-hover:opacity-20 group-hover:grayscale transition-all duration-300 group-hover:scale-90" 
                />
                
                {/* Percentage Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-1">
                    <span className="text-xl md:text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{skill.percentage}%</span>
                </div>
            </div>
        </MotionDiv>
    );
};

const Skills: React.FC<SkillsProps> = ({ id }) => {
  // Dynamic split logic
  let centerIndex = skillsData.findIndex(s => s.isCenter);
  if (centerIndex === -1) {
      centerIndex = Math.floor(skillsData.length / 2);
  }
  const centerSkill = skillsData[centerIndex];
  const otherSkills = skillsData.filter((_, i) => i !== centerIndex);
  const mid = Math.ceil(otherSkills.length / 2);
  
  const leftSkills = otherSkills.slice(0, mid);
  const rightSkills = otherSkills.slice(mid);

  return (
    <section id={id} className="min-h-screen w-full bg-black flex flex-col justify-center py-24 relative overflow-hidden">
        
        {/* Subtle Background Gradient - Purple Ambient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2e1065_0%,#000000_70%)] opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 xl:px-16 2xl:px-24 relative z-10">
            
            <MotionDiv 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-20 md:mb-32"
            >
                 <h2 className="text-5xl md:text-4xl 2xl:text-[9rem] font-bold text-white">SKILLS</h2>
            </MotionDiv>

            {/* Container for the Grid to keep it centered relative to the section width if needed, or full width */}
            <div className="flex flex-col items-center justify-center w-full">
                {/* DESKTOP LAYOUT (md and up) - 2x2 | Orb | 2x2 Pattern */}
                <div className="hidden md:flex items-center justify-center gap-12 xl:gap-24">
                    {/* Left 2x2 Grid */}
                    <div className="grid grid-cols-2 gap-4 xl:gap-6">
                        {leftSkills.map((skill, index) => (
                            <SkillItem key={skill.name} skill={skill} index={index} />
                        ))}
                    </div>

                    {/* Center Orb */}
                    <div className="relative z-20 mx-4">
                        <SkillItem skill={centerSkill} index={leftSkills.length} />
                    </div>

                    {/* Right 2x2 Grid */}
                    <div className="grid grid-cols-2 gap-4 xl:gap-6">
                        {rightSkills.map((skill, index) => (
                            <SkillItem key={skill.name} skill={skill} index={index + leftSkills.length + 1} />
                        ))}
                    </div>
                </div>

                {/* MOBILE LAYOUT (< md) - 3x3 Grid */}
                <div className="grid grid-cols-3 gap-3 md:hidden">
                    {skillsData.map((skill, index) => (
                        <SkillItem key={skill.name} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Skills;