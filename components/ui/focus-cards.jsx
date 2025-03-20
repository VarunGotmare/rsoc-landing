"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function FocusCards({ cards, teamMembers }) {
  const [hovered, setHovered] = useState(null);
  const items = teamMembers || cards;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {items.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className={cn(
            "relative h-[400px] w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-neutral-900 transition-all duration-300 ease-out",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
          )}
        >
          {/* Image Container - fixed height image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={item.src || item.imageSrc}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Overlay content */}
          <div className="absolute inset-0 bg-black/50 z-10 flex flex-col justify-end px-4 py-6">
            <div className="text-white text-xl md:text-2xl font-semibold">
              {item.title}
            </div>
            {item.description && (
              <div className="text-sm text-gray-200 mt-1">{item.description}</div>
            )}
            {(item.githubUrl || item.linkedinUrl) && (
              <div className="flex gap-4 mt-3">
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
                {item.linkedinUrl && (
                  <a
                    href={item.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
