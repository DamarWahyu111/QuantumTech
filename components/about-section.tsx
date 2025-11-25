import { Code2, Users, Globe2, Award } from "lucide-react"

const stats = [
  { icon: Code2, value: "1+", label: "Projects Completed" },
  { icon: Users, value: "1+", label: "Happy Clients" },
  { icon: Globe2, value: "1+", label: "Countries Served" },
  { icon: Award, value: "1+", label: "Years of Excellence" },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#2d3548] to-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-[#26a8a8] text-sm font-semibold tracking-wider uppercase">About Us</span>
              <div className="h-0.5 w-12 bg-[#86bc25] mt-2" />
            </div>

            <h2 className="text-3xl md:text-4xl font-light text-white lg:text-[#1a1f2e] leading-tight text-balance">
              Crafting digital experiences that drive results
            </h2>

            <p className="text-white/70 lg:text-[#4a5568] leading-relaxed text-lg">
              QuantumTech adalah perusahaan teknologi jasa website terkemuka yang berkomitmen untuk memberikan solusi
              digital berkualitas tinggi. Kami mengkhususkan diri dalam web design, web development, dan website
              responsive yang modern dan fungsional.
            </p>

            <p className="text-white/70 lg:text-[#4a5568] leading-relaxed">
              Didirikan dengan semangat inovasi dan keunggulan, kami terus berkembang untuk memberikan nilai tambah yang
              nyata bagi setiap klien yang kami layani melalui solusi teknologi terbaik.
            </p>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg shadow-[#1a1f2e]/5 hover:shadow-xl hover:shadow-[#26a8a8]/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#1a1f2e] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#26a8a8] transition-colors duration-300">
                  <stat.icon className="w-6 h-6 text-[#86bc25] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-[#1a1f2e] mb-1">{stat.value}</div>
                <div className="text-sm text-[#4a5568]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
