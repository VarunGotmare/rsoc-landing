"use client";

import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import StickyMarqueeBanner from "@/components/sticky-banner";
import { motion } from "framer-motion";

export default function RulesPage() {
  const rules = [
    {
      title: "📌 Registration",
      time: "Before Event",
      content:
        "All participants must register online before the event. Confirmation emails will include a unique QR code for attendance.",
    },
    {
      title: "📍 Event Begins",
      time: "9:30 AM | 3th April",
      content:
        "Participants are required to mark their attendance by scanning the QR code sent to their registered email.",
    },
    {
      title: "🎤 Inaugural & Problem Statements",
      time: "Post Attendance",
      content:
        "After attendance, all participants will proceed to the Inaugural Hall. Problem statements will be shared, followed by a detailed briefing session. Teams can then start working on their projects.",
    },
    {
      title: "💡 Mentor Round",
      time: "12:30 PM - 1:30 PM",
      content:
        "Each team will be required to present a short pitch showcasing their progress and the idea behind their project to the jury panel.",
    },
    {
      title: "🏁 Final Evaluation",
      time: "4:30 PM - 6:30 PM",
      content:
        "Final presentations and evaluations will take place in the last phase of the hackathon. Teams will present their completed projects to the jury for final scoring.",
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
          Hackathon Flow & Rules
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-800 max-w-2xl mx-auto bg-white/70 backdrop-blur-lg rounded-2xl px-6 py-4 shadow-lg border border-gray-200"
        >
          Stay in sync with the event structure and rules. Here's a breakdown of how the day will unfold.
        </motion.p>
      </motion.div>

      {/* Rules Cards Section */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl z-10 mb-12">
        {rules.map((rule, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="p-6 bg-white/80 backdrop-blur-md shadow-xl border border-gray-200 rounded-2xl transition-all hover:scale-[1.01] duration-300"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1">
              {rule.title}
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-600 mb-2">
              ⏰ {rule.time}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              {rule.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Sticky Scrolling Banner */}
      <StickyMarqueeBanner />
    </div>
  );
}
