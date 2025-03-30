"use client";

import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import StickyMarqueeBanner from "@/components/sticky-banner";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RulesPage() {

  const communityPartners = [
    {
      name: "GFG GHRCEMN Students Chapter",
      description: "Official GeeksforGeeks Campus Chapter at GHRCEMN.",
      link: "hhttps://gfg-ghrcemn.vercel.app/",
      logo: "/partners/gfg.png"
    },
    {
      name: "The Hackers Meetup Nagpur",
      description: "",
      link: "https://www.instagram.com/thm_ngp/",
      logo: "/partners/thm.png"
    },
    {
      name: "NexMeet",
      description: "NexMeet is your go-to platform for organizing college and social events.",
      link: "https://www.nexmeet.social/",
      logo: "/partners/nexmeet.png"
    },
    {
      name: "Open Box Community",
      description: "Grow Together.",
      link: "https://www.instagram.com/openbox_community_/",
      logo: "/partners/obc.png"
    },
    {
      name: "GDSC Government College Of Engineering",
      description: "Google Developer Student Club at GCoE Nagpur.",
      link: "hhttps://gdg.community.dev/gdg-on-campus-government-college-of-engineering-nagpur-india/",
      logo: "/partners/gdsc.png"
    },
    {
      name: "GFG RRCOEM",
      description: "GeeksforGeeks RRCOEM Student Chapter.",
      link: "https://gfgrcoem.netlify.app/",
      logo: "/partners/gfg-ram.png"
    }
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
          Meet Our Community Partners
        </h1>
        
      </motion.div>

      {/* Community Partner Profile Cards */}
      <div className="z-10 mt-12 w-full flex flex-col gap-6 items-center">
        {communityPartners.map((partner, index) => (
          <motion.a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-blue-400 transition duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-start text-center sm:text-left"
          >
            <div className="w-20 h-20 mb-4 sm:mb-0 sm:mr-6 relative mx-auto sm:mx-0">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                className="object-contain rounded-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-1">{partner.name}</h3>
              <p className="text-gray-700 text-sm">{partner.description}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Sticky Scrolling Banner */}
      <StickyMarqueeBanner />
    </div>
  );
}