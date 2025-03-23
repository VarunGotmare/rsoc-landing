// components/Footer.tsx
"use client";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="absolute bottom-4 w-full flex items-center justify-between px-8 text-sm text-muted-foreground z-10 font-medium">
      {/* Left - Copyright */}
      <div>© RSOC 2025</div>

      {/* Right - Social Icons */}
      <div className="flex gap-4">
        <a
          href="https://github.com/VarunGotmare"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors duration-300"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.instagram.com/rsoc2o25/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 transition-colors duration-300"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://linkedin.com/in/varun-gotmare"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </footer>
  );
}
