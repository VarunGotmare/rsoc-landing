import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function About() {
  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen pt-24 px-4 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <InteractiveGridPattern />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center px-4 sm:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600">
            RSOC 2025
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            RSOC 2025 is an 8-hour hackathon powered by the Cyber Security Department.
            It’s a platform for developers to build, code, and compete while showcasing
            their skills and creativity.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mt-12 px-4 sm:px-8">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            Our mission is to empower tech enthusiasts from all backgrounds to collaborate,
            innovate, and push the boundaries of cybersecurity and software development.
            Join us for a day filled with challenges, learning opportunities, and creative solutions.
          </p>
        </section>

        {/* Event Schedule Section */}
        <section className="mt-12 px-4 sm:px-8">
          <h2 className="text-3xl font-semibold mb-4">Event Schedule</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>
              <strong>Hour 0-1:</strong> Kick-Off &amp; Introduction
            </li>
            <li>
              <strong>Hour 1-3:</strong> Challenge Briefing &amp; Team Formation
            </li>
            <li>
              <strong>Hour 3-7:</strong> Coding, Mentorship &amp; Workshops
            </li>
            <li>
              <strong>Hour 7-8:</strong> Final Presentations &amp; Judging
            </li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section className="mt-12 px-4 sm:px-8">
          <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-medium">What is RSOC 2025?</h3>
              <p className="ml-4">
                RSOC 2025 is a fast-paced hackathon event designed to challenge participants
                in coding, cybersecurity, and collaborative problem-solving.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Who can participate?</h3>
              <p className="ml-4">
                Anyone with a passion for technology is welcome—from beginners to experts.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">How do I register?</h3>
              <p className="ml-4">
                Registration details will be provided on our website and social media channels.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-12 px-4 sm:px-8">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700">
            For any further questions or media inquiries, please reach out to us at{" "}
            <a href="mailto:contact@rsoc2025.com" className="text-blue-500 underline">
              contact@rsoc2025.com
            </a>
            .
          </p>
        </section>
      </div>

      {/* Optional Scroll Velocity Effect */}
      <VelocityScroll />

      {/* Footer */}
      <footer className="relative z-10 mt-12 mb-6 text-center text-sm text-gray-600">
        © RSOC 2025 - All rights reserved.
      </footer>
    </div>
  );
}