"use client";

import { motion } from "framer-motion"
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import StickyMarqueeBanner from "@/components/sticky-banner";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const teamData = [
  {
    title: "Varun Gotmare",
    description: "Front-end Developer",
    imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/username1",
    linkedinUrl: "https://linkedin.com/in/username1"
  },
  {
    title: "Shahanawaz Ansari",
    description: "Back-end Developer",
    imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/username2",
    linkedinUrl: "https://linkedin.com/in/username2"
  },
  {
    title: "Mandar Tule",
    description: "UI/UX Designer",
    imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/username3",
    linkedinUrl: "https://linkedin.com/in/username3"
  },
  {
    title: "Saisidhartha Paidi",
    description: "Product Manager",
    imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/username4",
    linkedinUrl: "https://linkedin.com/in/username4"
  },
  {
    title: "Shruti Singh",
    description: "DevOps Engineer",
    imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/username5",
    linkedinUrl: "https://linkedin.com/in/username5"
  },
  {
    title: "Team Member 6",
    description: "Data Scientist",
    imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/username6",
    linkedinUrl: "https://linkedin.com/in/username6"
  }
];

export default function TeamPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-gray-50 pt-40 pb-12 px-4 sm:px-6 overflow-hidden">

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <InteractiveGridPattern />
      </div>

      {/* Header */}
<motion.div
  className="relative z-10 w-full max-w-5xl mx-auto text-center"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <motion.h1
    className="text-4xl sm:text-5xl font-bold text-blue-600"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.1 }}
  >
    Meet Our Team
  </motion.h1>

  <motion.p
    className="text-lg text-gray-700 mt-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    The minds behind RSOC 2025
  </motion.p>
</motion.div>


      {/* Team Grid */}
<div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
  {teamData.map((member, index) => (
    <motion.div
      key={index}
      className="relative w-72 h-96 overflow-hidden rounded-xl shadow-lg group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Image */}
      <img
        src={member.imageSrc}
        alt={member.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:blur-sm"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Info section at bottom center */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-4 py-5 flex flex-col items-center text-center">
        <h2 className="text-xl font-bold text-white mb-1">{member.title}</h2>
        <p className="text-sm text-gray-200">{member.description}</p>
        <div className="flex gap-5 mt-3">
          <a href={member.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaGithub size={24} />
          </a>
          <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </motion.div>
  ))}
</div>


      {/* Sticky Scrolling Banner */}
      <StickyMarqueeBanner />
    </div>
  );
}
