"use client";

import { motion } from "framer-motion";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import StickyMarqueeBanner from "@/components/sticky-banner";
import { FocusCards } from "@/components/ui/focus-cards";

const teamData = [
  {
    title: "Shahanawaz Ansari",
    description: "Event Head",
    imageSrc: "/team/shahnawaz.jpg",
    githubUrl: "https://github.com/username1",
    linkedinUrl: "https://linkedin.com/in/username1"
  },
  {
    title: "Varun Gotmare",
    description: "Technical Lead",
    imageSrc: "/team/blond.jpg",
    githubUrl: "https://github.com/varungotmare",
    linkedinUrl: "https://linkedin.com/in/varungotmare"
  },
  {
    title: "Harsh Giripunje",
    description: "Management Lead",
    imageSrc: "/team/harsh.jpg",
    githubUrl: "https://github.com/username3",
    linkedinUrl: "https://linkedin.com/in/username3"
  },
  {
    title: "Darpan Soni",
    description: "Event Co-Head",
    imageSrc: "/team/darpan.jpg",
    githubUrl: "https://github.com/username4",
    linkedinUrl: "https://linkedin.com/in/username4"
  },
  {
    title: "Shruti Singh Thakur",
    description: "Event Co-Head",
    imageSrc: "/team/shruti.jpg",
    githubUrl: "https://github.com/username5",
    linkedinUrl: "https://linkedin.com/in/username5"
  },
  {
    title: "Saisidhartha Paidi",
    description: "Technical Team",
    imageSrc: "/team/sai.jpg",
    githubUrl: "https://github.com/SidharthaPaidi",
    linkedinUrl: "https://linkedin.com/in/SidharthaPaidi"
  },
  {
    title: "Mandar Tule",
    description: "Technical Team",
    imageSrc: "/team/mandar.jpg",
    githubUrl: "https://github.com/mandartule",
    linkedinUrl: "https://linkedin.com/in/mandartule"
  },
  {
    title: "Ayush Peddulwar",
    description: "Technical Team",
    imageSrc: "/team/ayush.jpg",
    githubUrl: "https://github.com/aushpeddulwar",
    linkedinUrl: "https://linkedin.com/in/aushpeddulwar"
  },
  {
    title: "Ayush Pandit",
    description: "Management Team",
    imageSrc: "/team/ayush-p.jpg",
    
  },
  {
    title: "Natasha Khandar",
    description: "Management Team",
    imageSrc: "/team/natashaa.jpg",
    githubUrl: "https://github.com/username6",
    linkedinUrl: "https://linkedin.com/in/username6"
  },
  {
    title: "Gunjan Gawande",
    description: "Management Team",
    imageSrc: "/team/gunjan.jpg",
    githubUrl: "https://github.com/username6",
    linkedinUrl: "https://linkedin.com/in/username6"
  },
  {
    title: "Rohini Mate",
    description: "Technical Team",
    imageSrc: "/team/rohini.jpg",
    githubUrl: "https://linkedin.com/in/username6",
    linkedinUrl: "https://linkedin.com/in/username6"
  },
  {
    title: "Tanuj Panchariya",
    description: "Marketing Team",
    imageSrc: "/team/tanuj.jpg",
    githubUrl: "https://linkedin.com/in/username6",
    linkedinUrl: "https://linkedin.com/in/username6"
  },
  {
    title: "Siddhant Sakhare",
    description: "Public Relations Team",
    imageSrc: "/team/siddhaant.jpg",
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
      <div className="relative z-10 w-full max-w-6xl mx-auto mt-12">
        <FocusCards teamMembers={teamData} />
      </div>

      {/* Sticky Scrolling Banner */}
      <StickyMarqueeBanner />
    </div>
  );
}
