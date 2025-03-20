export default function StickyMarqueeBanner() {
    return (
      <div className="fixed bottom-0 w-full bg-black py-2 overflow-hidden z-50">
        <div className="relative flex w-max animate-marquee whitespace-nowrap text-white text-sm sm:text-base font-semibold">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <span key={index} className="mx-8">
                🚀 RSOC 2025 · Code | Build | Innovate · 8-Hour Hackathon · Prize Pool ₹25K+ 💰 · Powered by Cyber Security Dept · RSOC 2025 🚀
              </span>
            ))}
        </div>
      </div>
    );
  }
  