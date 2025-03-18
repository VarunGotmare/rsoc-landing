"use client";
import Footer from "@/components/home/Footer";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { FlipWords } from "@/components/ui/flip-words";
import confetti from "canvas-confetti";
import { useRef, useState, useEffect } from "react";

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
    // Check screen size once on mount
    setIsMobile(window.innerWidth < 640); // sm breakpoint (Tailwind)
  }, []);

  const handleHover = () => {
    if (isMobile || hasFired.current) return;

    hasFired.current = true;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.9 },
    });

    setTimeout(() => {
      hasFired.current = false;
    }, 1500);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background font-[family-name:var(--font-geist-sans)]">
      <div className="z-10 flex mt-20 sm:mt-12 flex-col items-center space-y-3.5 sm:space-y-3 text-center px-4">
        {/* Department & Presents */}
        <span className="text-xl sm:text-2xl font-semibold text-black tracking-wide">
          Department of CSE Cyber Security
        </span>
        <span className="text-lg sm:text-xl font-medium text-neutral-700">
          Presents
        </span>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent leading-tight tracking-tight font-[family-name:var(--font-geist-mono)]">
          Raisoni Summer Of Code
        </h1>

        {/* FlipWords Only */}
        <div className="sm:mt-3 text-base sm:text-xl font-semibold text-black flex items-center justify-center">
          <span className="inline-block min-w-[220px] sm:min-w-[300px] text-center whitespace-nowrap">
            <FlipWords words={flipWords} />
          </span>
        </div>

        {/* 🎉 Confetti Register Button */}
        <a
          href="#"
          onMouseEnter={handleHover}
          className="mt-5 inline-block rounded-full border-4 border-blue-600 bg-pink-400 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-xl font-extrabold text-white shadow-[4px_4px_0px_rgba(0,0,0,0.9)] transition duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_rgba(0,0,0,0.8)] hover:scale-105"
        >
          Register Now 💫
        </a>
      </div>

      {/* Retro Grid BG */}
      <RetroGrid />

      {/* Floating Tech Icons - Visible on sm+ */}
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

      {/* Optional: Minimal Floating Tech Icons on Mobile */}
      <div className="absolute top-20 left-0 w-full flex justify-center gap-6 z-30 sm:hidden">
        <img src="/icons/CSS3.png" alt="CSS" className="w-8 h-8 animate-bounce" />
        <img src="/icons/JavaScript.png" alt="JS" className="w-8 h-8 animate-bounce delay-200" />
        <img src="/icons/android.png" alt="Android" className="w-8 h-8 animate-bounce delay-400" />
      </div>

      {/* Footer */}
      <Footer />

      {/* Floating Prize Images - Only sm+ */}
      <div className="hidden sm:block fixed bottom-24 right-10 w-24 sm:w-40 md:w-60 z-50">
        <img
          src="https://i.postimg.cc/xdNsN8ZN/prized.png"
          alt="Prize"
          className="w-auto h-auto drop-shadow-lg"
        />
      </div>
      <div className="hidden sm:block fixed bottom-24 left-10 w-24 sm:w-40 md:w-60 z-50">
        <img
          src="/float.png"
          alt="Prize"
          className="w-auto h-auto drop-shadow-lg"
        />
      </div>
    </div>
  );
}
