import { Target, Eye, Compass } from "lucide-react"

export default function VisionMissionSection() {
  return (
    <section id="vision-mission" className="py-24 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#26a8a8] text-sm font-semibold tracking-wider uppercase">Our Purpose</span>
          <h2 className="text-3xl md:text-4xl font-light text-[#1a1f2e] mt-4 text-balance">Vision & Mission</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#26a8a8] to-[#86bc25] mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#26a8a8] to-[#1a9e9e] rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />
            <div className="relative bg-white rounded-2xl p-8 shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-[#26a8a8]/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#26a8a8]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a1f2e] mb-4">Visi</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Menjadi firma layanan profesional terpercaya dan terdepan di Indonesia, memberikan kontribusi nyata
                terhadap pertumbuhan ekonomi dan kemajuan bisnis klien.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#86bc25] to-[#6a9a1d] rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300" />
            <div className="relative bg-white rounded-2xl p-8 shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-[#86bc25]/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#86bc25]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a1f2e] mb-4">Misi</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Menyediakan layanan profesional berkualitas tinggi dengan standar internasional, membangun kepercayaan
                melalui integritas, dan mengembangkan talenta terbaik.
              </p>
            </div>
          </div>

          {/* Values Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f2e] to-[#2d3548] rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />
            <div className="relative bg-white rounded-2xl p-8 shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-[#1a1f2e]/10 rounded-xl flex items-center justify-center mb-6">
                <Compass className="w-7 h-7 text-[#1a1f2e]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a1f2e] mb-4">Values</h3>
              <p className="text-[#4a5568] leading-relaxed">
                Integritas, Keunggulan, Kolaborasi, dan Inovasi adalah fondasi dari setiap layanan yang kami berikan
                kepada klien dan stakeholder.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
