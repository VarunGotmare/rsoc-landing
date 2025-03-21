"use client";
import Footer from "@/components/home/Footer";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { FlipWords } from "@/components/ui/flip-words";
import confetti from "canvas-confetti";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const flipWords = [
    "An 8 hour hackathon.",
    "Powered by Cyber Security Department.",
    "Build. Code. Compete.",
    "RSOC 2025.",
  ];

  const hasFired = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
  }, []);

  const handleHover = () => {
    if (isMobile || hasFired.current) return;

    hasFired.current = true;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
    });

    setTimeout(() => {
      hasFired.current = false;
    }, 1500);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background font-[family-name:var(--font-geist-sans)]">
      <div className="z-10 flex mt-10 sm:mt-12 flex-col items-center space-y-3.5 sm:space-y-3 text-center px-4">
        {/* Department & Presents */}
        <span className="text-xl sm:text-2xl mt-44 font-semibold text-black tracking-wide">
          Department of CSE Cyber Security
        </span>
        <span className="text-lg sm:text-xl font-medium text-neutral-700">
          Presents
        </span>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent leading-tight tracking-tight font-[family-name:var(--font-geist-mono)]">
          Raisoni Summer Of Code
        </h1>

        {/* FlipWords Animation */}
        <div className="sm:mt-3 text-base sm:text-xl font-semibold text-black flex items-center justify-center">
          <span className="inline-block min-w-[220px] sm:min-w-[300px] text-center whitespace-nowrap">
            <FlipWords words={flipWords} />
          </span>
        </div>

        {/* Register Button with Confetti */}
        <a
          href={process.env.REGISTRATION_LINK}
          onMouseEnter={handleHover}
          className="mt-5 inline-block rounded-full border-4 border-blue-600 bg-pink-400 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-xl font-extrabold text-white shadow-[4px_4px_0px_rgba(0,0,0,0.9)] transition duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_rgba(0,0,0,0.8)] hover:scale-105"
        >
          Register Now 💫
        </a>

        {/* Community Partners */}
        <div className="flex flex-col mt-6">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 text-center">
            Community Partners
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 w-full"
          >
            <img
              src="/partners/gfg.png"
              alt="GFG"
              className="h-20 sm:h-28 object-contain transition duration-300 sm:grayscale sm:hover:grayscale-0"
            />
            <img
              src="/partners/thm.png"
              alt="THM"
              className="h-20 sm:h-28 object-contain transition duration-300 sm:grayscale sm:hover:grayscale-0"
            />
            <img
              src="/partners/nexmeet.png"
              alt="Nexmeet"
              className="h-20 w-30 sm:h-28 object-contain transition duration-300 sm:grayscale sm:hover:grayscale-0"
            />
            <img
              src="/partners/obc.jpg"
              alt="OpenBox Community"
              className="h-20 w-30 sm:h-28 object-contain transition duration-300 sm:grayscale sm:hover:grayscale-0"
            />
          </motion.div>
        </div>

      </div>

      {/* Retro Grid Background */}
      <RetroGrid />

      {/* Floating Tech Icons - Only sm+ */}
      <div className="absolute top-32 left-0 w-full h-[200px] pointer-events-none z-30 hidden sm:block">
        <img
          src="/icons/CSS3.png"
          alt="CSS"
          className="absolute top-6 left-10 w-10 sm:w-14 animate-[float_4s_ease-in-out_infinite] rotate-[10deg]"
        />
        <img
          src="/icons/android.png"
          alt="Android"
          className="absolute top-12 right-14 w-10 sm:w-14 animate-[float_4.5s_ease-in-out_infinite] rotate-[-6deg]"
        />
        <img
          src="/icons/Docker.png"
          alt="Docker"
          className="absolute top-20 left-[40%] w-10 sm:w-14 animate-[float_3.5s_ease-in-out_infinite] rotate-[8deg]"
        />
        <img
          src="/icons/JavaScript.png"
          alt="JavaScript"
          className="absolute top-8 right-[35%] w-10 sm:w-14 animate-[float_5s_ease-in-out_infinite] rotate-[-10deg]"
        />
        <img
          src="/icons/Swift.png"
          alt="Swift"
          className="absolute top-16 left-[20%] w-10 sm:w-14 animate-[float_4s_ease-in-out_infinite] rotate-[5deg]"
        />
        <img
          src="/icons/vsc.png"
          alt="VS Code"
          className="absolute top-24 right-[22%] w-10 sm:w-14 animate-[float_4.2s_ease-in-out_infinite] rotate-[12deg]"
        />
      </div>

      {/* Floating Tech Icons - Mobile only */}
      <div className="absolute top-32 left-0 w-full z-30 sm:hidden">
        <div className="relative w-full h-40">
          <img
            src="/icons/CSS3.png"
            alt="CSS"
            className="absolute left-6 top-4 w-8 h-8 animate-[float_3.8s_ease-in-out_infinite] rotate-[8deg]"
          />
          <img
            src="/icons/JavaScript.png"
            alt="JS"
            className="absolute left-1/3 top-10 w-8 h-8 animate-[float_4s_ease-in-out_infinite] rotate-[-6deg]"
          />
          <img
            src="/icons/android.png"
            alt="Android"
            className="absolute left-[55%] top-2 w-8 h-8 animate-[float_4.2s_ease-in-out_infinite] rotate-[10deg]"
          />
          <img
            src="/icons/Docker.png"
            alt="Docker"
            className="absolute right-16 top-12 w-8 h-8 animate-[float_4.5s_ease-in-out_infinite] rotate-[-4deg]"
          />
          <img
            src="/icons/vsc.png"
            alt="VS Code"
            className="absolute right-6 top-6 w-8 h-8 animate-[float_3.6s_ease-in-out_infinite] rotate-[6deg]"
          />
        </div>
      </div>

      {/* Floating Prize Images */}
      <div className="hidden sm:block fixed bottom-24 right-10 w-24 sm:w-40 md:w-60 z-50 floating-prize">
        <img
          src="/prized.png"
          alt="Prize"
          className="w-auto h-auto drop-shadow-lg"
        />
      </div>
      <div className="hidden sm:block fixed bottom-24 left-10 w-24 sm:w-40 md:w-60 z-50 floating-prize">
        <img
          src="/float.png"
          alt="Prize"
          className="w-auto h-auto drop-shadow-lg"
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
