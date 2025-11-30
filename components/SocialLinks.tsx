import React from 'react';
import { Github, Linkedin, Instagram, Mail, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionA = motion.a as any;

const SocialLinks: React.FC = () => {
  const socials = [
    {
      icon: Github,
      href: 'https://github.com/Pravin-123456',
      color: 'hover:bg-[#333] hover:border-[#333]',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/pravin-m-a7066622a/',
      color: 'hover:bg-[#0077b5] hover:border-[#0077b5]',
      label: 'LinkedIn'
    },
    {
      icon: Instagram,
      href: '#',
      color: 'hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:border-pink-500',
      label: 'Instagram'
    },
    {
      icon: Mail,
      href: 'mailto:contact@pravin.dev',
      color: 'hover:bg-[#EA4335] hover:border-[#EA4335]',
      label: 'Gmail'
    },
    {
      icon: Facebook,
      href: '#',
      color: 'hover:bg-[#1877F2] hover:border-[#1877F2]',
      label: 'Facebook'
    }
  ];

  return (
    <div className="flex gap-3 mt-6 justify-center">
      {socials.map((social, index) => (
        <MotionA
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:text-white hover:shadow-lg hover:shadow-purple-500/20 ${social.color}`}
          aria-label={social.label}
        >
          <social.icon size={18} strokeWidth={2} />
        </MotionA>
      ))}
    </div>
  );
};

export default SocialLinks;