import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { NumberTicker } from "@/components/magicui/number-ticker";

export default function About() {
  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen pt-38 px-4 bg-gray-50 overflow-hidden">
      {/* Centered Background Pattern */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <InteractiveGridPattern />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        {/* Intro Section */}
        <div className="w-full flex justify-center px-4 sm:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600">
              RSOC 2025
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              RSOC 2025 is an 8-hour hackathon powered by the Cyber Security Department.
              It’s a platform for developers to build, code, and compete while showcasing
              their skills and creativity.
            </p>
          </div>
        </div>

        {/* About Sections */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 w-full">
          <div className="p-6 bg-white shadow-md rounded-lg w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
              🎉 💰Prize Pool ₹<NumberTicker value={25000} />
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">
              Gear up for our hackathon featuring a jaw-dropping prize pool of over 25k+ in rewards. Compete, innovate, and win big!
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
              🤝 Team Size 4
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">
              Our hackathons encourage dynamic collaboration within 4-member groups, where every voice matters and teamwork transforms ideas into reality.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
              🚀 Our Mission ✨
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">
              To foster innovation and inspire collaboration among developers through challenging and fun competitions.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
              👁️‍🗨️ Our Vision 🌟
            </h2>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">
              To create an environment where creativity meets technology and everyone can learn, build, and grow.
            </p>
          </div>
        </div>

        {/* Velocity Scroll at the Bottom */}
        <div className="relative flex w-full max-w-4xl mx-auto flex-col items-center justify-center overflow-hidden mt-12 pt-12">
          <VelocityScroll>
            Raisoni Summer Of Code 2025
          </VelocityScroll>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50"></div>
        </div>
      </div>
    </div>
  );
}