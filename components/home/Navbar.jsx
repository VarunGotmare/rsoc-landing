"use client";

import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2 w-[90%] sm:w-[80%] max-w-6xl rounded-2xl border border-[#ffd319] bg-white/80 backdrop-blur-md shadow-xl transition-all duration-300 group">
      <div className="flex items-center justify-between px-6 py-4 sm:px-10 sm:py-6 font-[family-name:var(--font-geist-sans)]">
        <Link href="/">
          <img
            src="/logoo.png"
            alt="RSOC 2025 Logo"
            className="h-10 w-auto object-contain transition-transform duration-300 ease-in-out scale-150 hover:scale-170"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden sm:flex space-x-6 text-sm text-black">
        <Link
              key={"About"}
              href={`/about`}
              className="relative inline-block text-lg font-bold text-black hover:text-yellow-900 hover:bg-yellow-100 px-2 py-1 rounded-md transition duration-300"
            >
              About
            </Link>
            <Link
              key={"Our Team"}
              href={`/team`}
              className="relative inline-block text-lg font-bold text-black hover:text-yellow-900 hover:bg-yellow-100 px-2 py-1 rounded-md transition duration-300"
            >
              Our Team
            </Link>
            <a
              key={"Register"}
              href={"https://form.typeform.com/to/WN79Ogrg"}
              className="relative inline-block text-lg font-bold text-black hover:text-yellow-900 hover:bg-yellow-100 px-2 py-1 rounded-md transition duration-300"
            >
              Register (Demo)
            </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center items-center gap-[3px] p-2 rounded-md hover:bg-yellow-100 transition"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-[2.5px] bg-black rounded-full"></span>
          <span className="block w-6 h-[2.5px] bg-black rounded-full"></span>
          <span className="block w-6 h-[2.5px] bg-black rounded-full"></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden flex flex-col items-center bg-white border-t border-[#ffd319] px-6 py-4 space-y-4 text-center text-lg font-semibold text-black rounded-b-2xl shadow-inner transition-all duration-300">
          <Link
              key={"About"}
              href={`/about`}
              className="w-full px-4 py-2 rounded-md  hover:bg-yellow-100 transition"
            >
              About
            </Link>
            <Link
              key={"Our Team"}
              href={`/team`}
              className="w-full px-4 py-2 rounded-md hover:bg-yellow-100 transition"
            >
              Our Team
            </Link>
            <a
              key={"Register"}
              href={process.env.REGISTRATION_LINK}
              className="w-full px-4 py-2 rounded-md hover:bg-yellow-100 transition"
            >
              Register
            </a>
        </div>
      )}

      {/* Yellow Glow on Hover Proximity (Desktop only) */}
      <div className="hidden sm:block absolute inset-0 rounded-2xl pointer-events-none group-hover:border-[1.5px] group-hover:border-[#ffd319] group-hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] transition-all duration-300 ease-in-out" />
    </header>
  );
}
