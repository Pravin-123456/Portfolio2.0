import React from 'react';
import { motion } from 'framer-motion';
import { SectionId, Project } from '../types';
import { Link } from 'wouter';

const MotionH2 = motion.h2 as any;
const MotionDiv = motion.div as any;

interface ProjectsProps {
  id: SectionId;
}

const projects: Project[] = [
  {
    id: 'grossy',
    title: 'GROSSY',
    description: 'Grossy – Full-stack Next.js + Stripe e-commerce store for organic groceries. Features dynamic cart, wishlist, Paystack/Stripe payments, and admin dashboard. Deployed on Vercel with Supabase backend.',
    tech: ['Next.js', 'Stripe', 'Supabase'],
    image: 'https://picsum.photos/id/1080/600/400',
    pro_url: 'https://example.com',
  },
  {
    id: 'tuf',
    title: 'TUF GAMING',
    description: 'TUF Gaming Hub – A responsive React + Node.js platform for ASUS TUF Gaming fans. Features live match tracking, custom profile builder, and community tournaments. Integrated Steam API and WebSocket leaderboards. 8k+ monthly users.',
    tech: ['React', 'Node.js', 'Steam API'],
    image: 'https://picsum.photos/id/1033/600/400',
    pro_url: 'https://google.com',
  },
  {
    id: 'tuf',
    title: 'TUF GAMING',
    description: 'TUF Gaming Hub – A responsive React + Node.js platform for ASUS TUF Gaming fans. Features live match tracking, custom profile builder, and community tournaments. Integrated Steam API and WebSocket leaderboards. 8k+ monthly users.',
    tech: ['React', 'Node.js', 'Steam API'],
    image: 'https://picsum.photos/id/1033/600/400',
    pro_url: 'https://google.com',
  }
];

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  return (
    <section id={id} className="relative min-h-screen w-full bg-black py-24 2xl:py-48 flex items-center overflow-hidden">

      {/* Decorative Background Blob */}
      <div id="projects" className="absolute top-1/4 -left-20 w-[600px] h-[600px] 2xl:w-[900px] 2xl:h-[900px] bg-blue-800/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] 2xl:w-[800px] 2xl:h-[800px] bg-pink-900/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 md:px-12 2xl:px-24 relative z-10">
        <MotionH2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-4xl 2xl:text-[9rem] font-bold text-white mb-20 2xl:mb-32"
        >
          PROJECTS
        </MotionH2>

        <div className="relative">
          {/* The Line Connector - Visualized as a white border on the left with radius */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent" />

          <div className="flex flex-col gap-24 md:gap-32 2xl:gap-56">
            {projects.map((project, index) => (
              <MotionDiv
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 2xl:gap-24`}
              >
                {/* Image Card */}
                <div className="w-full md:w-1/2 group">
                <a href={project.pro_url} target="_blank" rel="noopener noreferrer">
                  <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 aspect-video shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 2xl:p-10">
                      <span className="text-white font-mono text-sm 2xl:text-xl">{project.tech.join(' • ')}</span>
                    </div>
                  </div>
                </a>
                </div>
                {/* Text Content */}
                <div className="w-full md:w-1/2 space-y-4 2xl:space-y-8 relative">
                  {/* Dot for Timeline */}
                  {/* <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 2xl:w-6 2xl:h-6 bg-white rounded-full border-4 2xl:border-8 border-black z-20 ${index % 2 === 0 ? '-right-[3.25rem] 2xl:-right-[3.5rem]' : '-left-[3.25rem] 2xl:-left-[3.5rem]'}`} /> */}

                  <h3 className="text-2xl 2xl:text-6xl font-bold text-white uppercase tracking-wide">{project.title}</h3>
                  <p className="text-md 2xl:text-3xl text-gray-400 leading-relaxed 2xl:leading-loose max-w-lg 2xl:max-w-2xl">
                    {project.description}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;