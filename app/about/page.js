"use client";

import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { NumberTicker } from "@/components/magicui/number-ticker";
import StickyMarqueeBanner from "@/components/sticky-banner";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-gray-50 pt-40 pb-12 px-4 sm:px-6 overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <InteractiveGridPattern />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600">
            RSOC 2025
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-base sm:text-lg md:text-xl text-gray-800 max-w-2xl mx-auto bg-white/70 backdrop-blur-lg rounded-2xl px-6 py-4 shadow-lg border border-gray-200"
          >
            RSOC 2025 is an 8-hour hackathon powered by the Cyber Security Department.
            It’s a platform for developers to build, code, and compete while showcasing
            their skills and creativity.
          </motion.p>
        </motion.div>

        {/* About Sections */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            {
              title: "💰 Prize Pool ₹",
              content:
                "Gear up for our hackathon featuring a jaw-dropping prize pool of over 25k+ in rewards. Compete, innovate, and win big!",
              value: 25000,
            },
            {
              title: "🤝 Team Size 4",
              content:
                "Our hackathons encourage dynamic collaboration within 4-member groups, where every voice matters and teamwork transforms ideas into reality.",
            },
            {
              title: "🚀 Our Mission",
              content:
                "To foster innovation and inspire collaboration among developers through challenging and fun competitions.",
            },
            {
              title: "👁️‍🗨️ Our Vision",
              content:
                "To create an environment where creativity meets technology and everyone can learn, build, and grow.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="p-6 bg-white/80 backdrop-blur-md shadow-xl border border-gray-200 rounded-2xl transition-all hover:scale-[1.01] duration-300"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 flex items-center gap-2">
                {item.title}
                {item.value && <NumberTicker value={item.value} />}
              </h2>
              <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-700">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sticky Scrolling Banner */}
      <StickyMarqueeBanner />
    </div>
  );
}
