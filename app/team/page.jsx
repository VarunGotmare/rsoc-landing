"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";

// Single card component
function TeamCard({ title, description, imageSrc, githubUrl, linkedinUrl }) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageSrc}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        <div className="flex items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={`tel:7888008363`}
            target="_blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
            contact →
          </CardItem>
          
          {/* Social Media Icons */}
          <CardItem translateZ="80" className="ml-auto flex">
            {githubUrl && (
                <Link href={githubUrl} target="_blank">
                    <Image
                        src="/icons/GitHub.png"
                        alt="github"
                        width="40"
                        height="40"
                        className="mx-3" // Removed invert class
                    />
                </Link>
            )}
            {linkedinUrl && (
                <Link href={linkedinUrl} target="_blank">
                    <Image
                        src="/icons/linkedin.png"
                        alt="linkedin"
                        width="40"
                        height="40"
                        className="mx-3" // Removed invert class
                    />  
                </Link>
            )}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default function TeamPage() {
  // Sample data for 6 cards
  const teamData = [
    {
      title: "Varun Gotmare",
      description: "Front-end Developer",
      imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      githubUrl: "https://github.com/username1",
      linkedinUrl: "https://linkedin.com/in/username1"
    },
    {
      title: "Shahanawaz Ansari",
      description: "Back-end Developer",
      imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      githubUrl: "https://github.com/username2",
      linkedinUrl: "https://linkedin.com/in/username2"
    },
    {
      title: "Mandar Tule",
      description: "UI/UX Designer",
      imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      githubUrl: "https://github.com/username3",
      linkedinUrl: "https://linkedin.com/in/username3"
    },
    {
      title: "Saisidhartha Paidi",
      description: "Product Manager",
      imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      githubUrl: "https://github.com/username4",
      linkedinUrl: "https://linkedin.com/in/username4"
    },
    {
      title: "Shruti Singh",
      description: "DevOps Engineer",
      imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      githubUrl: "https://github.com/username5",
      linkedinUrl: "https://linkedin.com/in/username5"
    },
    {
      title: "Team Member 6",
      description: "Data Scientist",
      imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      githubUrl: "https://github.com/username6",
      linkedinUrl: "https://linkedin.com/in/username6"
    }
  ];

  return (
    <div className="container mx-auto py-15 px-20">
      <h1 className="text-3xl font-bold mb-1 text-center mt-25">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamData.map((member, index) => (
          <div key={index} className="flex justify-center">
            <TeamCard 
              title={member.title}
              description={member.description}
              imageSrc={member.imageSrc}
              githubUrl={member.githubUrl}
              linkedinUrl={member.linkedinUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}