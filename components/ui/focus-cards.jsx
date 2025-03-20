"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function FocusCards({ cards, teamMembers }) {
  const [hovered, setHovered] = useState(null);
  
  // Use teamMembers if provided, otherwise use cards
  const items = teamMembers || cards;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {items.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className={cn(
            "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
          )}
        >
          <Image
            src={item.src || item.imageSrc}
            alt={item.title}
            fill
            className="object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end py-8 px-4">
            <div className="text-xl md:text-2xl font-medium text-white">
              {item.title}
            </div>
            
            {/* Show description if available (for team members) */}
            {item.description && (
              <div className="text-sm text-gray-200 mt-2">
                {item.description}
              </div>
            )}
            
            {/* Show social icons if available (for team members) */}
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