"use client";

import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import StickyMarqueeBanner from "@/components/sticky-banner";
import { motion } from "framer-motion";

export default function AgendaPage() {
  const agenda = [
    {
      title: "🎤 Inauguration & Problem Statement Selection",
      time: "9:30 AM – 10:00 AM",
      content: "Opening ceremony followed by problem statement selection.",
    },
    {
      title: "🚀 Hackathon Timer Starts",
      time: "10:00 AM",
      content: "Participants begin building their projects. The countdown begins!",
    },
    {
      title: "👨‍🏫 Guidance Round",
      time: "12:15 PM",
      content: "Mentors will visit teams for feedback and guidance.",
    },
    {
      title: "🍱 Lunch Break (Hackathon Continues)",
      time: "1:30 PM",
      content: "Lunch will be provided to participants while the hackathon progresses.",
    },
    {
      title: "🎤 Final Evaluation & Pitches",
      time: "4:30 PM",
      content: "Each team will present their MVP within a 3-minute pitch session.",
    },
    {
      title: "🏆 Valedictory Speech & Winner Announcement",
      time: "5:30 PM",
      content: "Winners will be announced, followed by closing remarks.",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-gray-50 pt-40 pb-12 px-4 sm:px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <InteractiveGridPattern />
      </div>

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center z-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600">
          Hackathon Event Agenda
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-800 max-w-2xl mx-auto bg-white/70 backdrop-blur-lg rounded-2xl px-6 py-4 shadow-lg border border-gray-200"
        >
          Stay updated with the schedule to make the most of the hackathon experience.
        </motion.p>
      </motion.div>

      {/* Agenda Cards Section */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl z-10 mb-12">
        {agenda.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="p-6 bg-white/80 backdrop-blur-md shadow-xl border border-gray-200 rounded-2xl transition-all hover:scale-[1.01] duration-300"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1">
              {item.title}
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-600 mb-2">
              ⏰ {item.time}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Sticky Scrolling Banner */}
      <StickyMarqueeBanner />
    </div>
  );
}
