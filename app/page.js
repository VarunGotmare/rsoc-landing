"use client";
import Footer from "@/components/home/Footer";
import { RetroGrid } from "@/components/magicui/retro-grid";
import confetti from "canvas-confetti";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
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
      <div className="z-10 flex mt-10 sm:mt-12 flex-col items-center space-y-3.5 sm:space-y-2 text-center px-4">
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

        <div className="sm:mt-4 mt-2 text-center flex items-center justify-center">
          <span className="text-xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-800 via-purple-800 to-indigo-800 bg-clip-text text-transparent px-4 py-2 tracking-wide border border-neutral-700 rounded-lg shadow-sm">
            An 8 Hour Hackathon
          </span>
        </div>

        {/* Register Button with Confetti */}
        <a
          href={"https://forms.gle/VXa477ursSk6jqkq7"}
          onMouseEnter={handleHover}
          className="mt-5 inline-block rounded-full border-4 border-blue-600 bg-pink-400 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-xl font-extrabold text-white shadow-[4px_4px_0px_rgba(0,0,0,0.9)] transition duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_rgba(0,0,0,0.8)] hover:scale-105"
        >
          Register Now 💫
        </a>

        {/* Community Partners */}
<div className="mt-8 sm:mt-10 w-full max-w-5xl px-4 sm:px-8 mb-20 sm:mb-0">
  <h2 className="text-xl sm:text-2xl font-bold text-black text-center mb-4">
    Community Partners
  </h2>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center"
  >
    {[
      { src: "/partners/gfg.png", alt: "GFG" },
      { src: "/partners/thm.png", alt: "THM" },
      { src: "/partners/nexmeet.png", alt: "Nexmeet" },
      { src: "/partners/obc.png", alt: "OpenBox Community" },
      { src: "/partners/gdsc.png", alt: "GDSC GCE Nagpur" },
      { src: "/partners/gfg-ram.png", alt: "GFG RRCOEM" },
    ].map((partner, index) => (
      <img
        key={index}
        src={partner.src}
        alt={partner.alt}
        className="h-16 sm:h-20 object-contain transition duration-300 sm:grayscale sm:hover:grayscale-0"
      />
    ))}
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
