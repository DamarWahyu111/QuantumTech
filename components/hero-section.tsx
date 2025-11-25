import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-[#1a1f2e] pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(134, 188, 37, 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(90vh-4rem)]">
          {/* Left Content */}
          <div className="space-y-6 py-12 lg:py-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight text-balance">
              Building Digital <span className="text-[#86bc25]">Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light">
              Professional Web Solutions for Your Business 2025
            </p>
            <Button className="bg-[#26a8a8] hover:bg-[#1e8a8a] text-white px-8 py-6 text-base rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#26a8a8]/20">
              Explore now
            </Button>
          </div>

          {/* Right Illustration */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#26a8a8]/50" />
              {/* Middle Ring */}
              <div className="absolute inset-4 rounded-full border-2 border-[#86bc25]/60" />
              {/* Inner Circle with Illustration */}
              <div className="absolute inset-8 rounded-full border border-[#86bc25]/40 bg-gradient-to-br from-[#1a1f2e] to-[#0d1117] flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 200 200" className="w-full h-full p-8 text-[#c5e86c]">
                  <g fill="none" stroke="currentColor" strokeWidth="0.5">
                    {/* Browser Window */}
                    <rect x="40" y="50" width="120" height="80" rx="4" />
                    <line x1="40" y1="65" x2="160" y2="65" />
                    <circle cx="50" cy="57" r="3" />
                    <circle cx="60" cy="57" r="3" />
                    <circle cx="70" cy="57" r="3" />

                    {/* Code Lines */}
                    <line x1="50" y1="75" x2="90" y2="75" />
                    <line x1="50" y1="85" x2="110" y2="85" />
                    <line x1="60" y1="95" x2="100" y2="95" />
                    <line x1="60" y1="105" x2="80" y2="105" />
                    <line x1="50" y1="115" x2="70" y2="115" />

                    {/* Mobile Device */}
                    <rect x="130" y="80" width="25" height="45" rx="3" />
                    <line x1="135" y1="90" x2="150" y2="90" />
                    <line x1="135" y1="100" x2="145" y2="100" />

                    {/* Connection Lines */}
                    <path d="M100,140 Q100,160 80,170" strokeDasharray="3,3" />
                    <path d="M100,140 Q100,160 120,170" strokeDasharray="3,3" />

                    {/* Nodes */}
                    <circle cx="80" cy="170" r="8" />
                    <circle cx="120" cy="170" r="8" />
                    <circle cx="100" cy="180" r="5" />
                  </g>
                </svg>
              </div>

              {/* Floating Particles */}
              <div className="absolute top-10 right-10 w-2 h-2 bg-[#86bc25] rounded-full animate-pulse" />
              <div className="absolute bottom-20 left-5 w-3 h-3 bg-[#26a8a8] rounded-full animate-pulse delay-300" />
              <div className="absolute top-1/2 right-0 w-2 h-2 bg-[#86bc25] rounded-full animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2d3548] to-transparent" />
    </section>
  )
}
