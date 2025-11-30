import React from "react";
import { SectionId } from "../types";
import { Send } from "lucide-react";
import SocialLinks from "./SocialLinks";

interface ContactProps {
  id: SectionId;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer
      className="relative px-6 md:px-16 lg:px-24 xl:px-32 pt-24 w-full text-gray-300 overflow-hidden bg-black"
      id={id}
    >
      {/* Background Blends - Seamless transition from black to a subtle footer glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-black to-transparent -z-10" />
      
      {/* Decorative Blob for vibe consistency */}
      <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 border-b border-white/10 pb-10 relative z-10">
        {/* Logo & Description */}
        <div className="md:max-w-md">
          <h1 className="text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            PRAVIN
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-gray-400">
            Trust me — let's grow together and build scalable, impactful web
            solutions with the power of the MERN stack.
          </p>
        </div>

        {/* Links & Newsletter */}
        <div className="flex-1 flex flex-col md:flex-row items-start md:justify-end gap-10 lg:gap-20">
          {/* Company Links */}
          <div>
            <h2 className="font-semibold mb-5 text-white text-lg tracking-wide whitespace-nowrap">Quick Links</h2>
            <ul className="text-sm space-y-3 text-gray-400">
              {[
                { label: "Home", id: SectionId.HOME },
                { label: "About us", id: SectionId.ABOUT },
                { label: "Skills", id: SectionId.SKILLS },
                { label: "Projects", id: SectionId.PROJECTS },
                { label: "Services", id: SectionId.SERVICES },
              ].map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    className="hover:text-purple-400 hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-semibold mb-5 text-white text-lg tracking-wide">Get in Touch</h2>
            <p className="text-sm mb-4 text-gray-400">
              Have questions or thoughts? We'd love to hear from you!
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-white/10 placeholder-gray-500 outline-none w-full md:w-64 h-10 rounded-xl px-4 bg-white/5 text-white focus:border-purple-500 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              />
              <textarea
                placeholder="Enter Your Message"
                rows={1}
                className="border border-white/10 placeholder-gray-500 outline-none w-full md:w-64 min-h-[40px] rounded-xl px-4 py-2 bg-white/5 text-white focus:border-purple-500 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm resize-none"
              />
              <button 
                type="submit" 
                className="group relative w-[8rem] py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full font-bold text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
              >
                Send <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
            
            {/* Social Links moved here */}
            <div className="w-full md:w-64">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-8 flex flex-col md:flex-row items-center justify-center text-xs md:text-sm text-gray-500 relative z-10">
        <p>© {year} Pravin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;