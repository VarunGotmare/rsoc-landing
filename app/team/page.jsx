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
    imageSrc: "/team/varun.jpg",
    githubUrl: "https://github.com/username2",
    linkedinUrl: "https://linkedin.com/in/username2"
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
    title: "Sai Siddhartha Paidi",
    description: "Technical Team",
    imageSrc: "/team/sai.jpg",
    githubUrl: "https://github.com/username6",
    linkedinUrl: "https://linkedin.com/in/username6"
  },
  {
    title: "Mandar Tule",
    description: "Technical Team",
    imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/username6",
    linkedinUrl: "https://linkedin.com/in/username6"
  },
  {
    title: "Natasha Khandar",
    description: "Management Team",
    imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/username6",
    linkedinUrl: "https://linkedin.com/in/username6"
  },
  {
    title: "Gunjan Gawande",
    description: "Management Team",
    imageSrc: "/team/gunjan.jpg",
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
      <div className="relative z-10 w-full max-w-6xl mx-auto mt-12">
        <FocusCards teamMembers={teamData} />
      </div>

      {/* Sticky Scrolling Banner */}
      <StickyMarqueeBanner />
    </div>
  );
}
