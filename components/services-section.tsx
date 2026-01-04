"use client"

import { useState } from "react"
import { Palette, Code, Smartphone, X } from "lucide-react"

const services = [
  // {
  //   icon: Palette,
  //   title: "Web Design",
  //   description:
  //     "Desain website modern dan kreatif yang menarik perhatian pengunjung dan meningkatkan brand awareness bisnis Anda.",
  //   color: "#26a8a8",
  //   hasDetail: true,
  //   detail: {
  //     fullDescription:
  //       "Layanan Web Design kami menghadirkan solusi desain website yang tidak hanya indah secara visual, tetapi juga fungsional dan user-friendly. Tim desainer kami yang berpengalaman akan bekerja sama dengan Anda untuk menciptakan identitas digital yang unik dan memorable.",
  //     features: [
  //       "UI/UX Design yang intuitive dan modern",
  //       "Custom graphics dan ilustrasi",
  //       "Brand identity integration",
  //       "Prototype dan mockup interaktif",
  //       "Design system yang konsisten",
  //       "Cross-browser compatibility design",
  //     ],
  //     process: [
  //       { step: "Discovery", desc: "Memahami kebutuhan dan visi bisnis Anda" },
  //       { step: "Wireframing", desc: "Membuat blueprint struktur website" },
  //       { step: "Visual Design", desc: "Mengembangkan desain visual yang menarik" },
  //       { step: "Review & Revisi", desc: "Penyempurnaan berdasarkan feedback" },
  //     ],
  //   },
  // },
  {
    icon: Smartphone,
    title: "Website Responsive",
    description:
      "Website yang tampil sempurna di semua perangkat, dari desktop hingga smartphone, memberikan pengalaman terbaik bagi pengguna.",
    color: "#86bc25",
    hasDetail: true,
    detail: {
      fullDescription:
        "Di era mobile-first, website responsive bukan lagi opsi tetapi keharusan. Kami memastikan website Anda tampil optimal di semua ukuran layar, memberikan pengalaman pengguna yang konsisten dan profesional di manapun pengunjung mengaksesnya.",
      features: [
        "Mobile-first development approach",
        "Fluid grid layouts",
        "Flexible images dan media",
        "Touch-friendly navigation",
        "Optimized performance untuk mobile",
        "Cross-device testing komprehensif",
      ],
      process: [
        { step: "Analisis", desc: "Mengidentifikasi kebutuhan responsif" },
        { step: "Mobile Design", desc: "Desain untuk layar terkecil terlebih dahulu" },
        { step: "Progressive Enhancement", desc: "Menambah fitur untuk layar lebih besar" },
        { step: "Testing", desc: "Pengujian di berbagai perangkat" },
      ],
    },
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Pengembangan website full-stack dengan teknologi terkini untuk performa optimal dan skalabilitas bisnis Anda.",
    color: "#1a1f2e",
    hasDetail: true,
    detail: {
      fullDescription:
        "Layanan Web Development kami mencakup pengembangan website dari awal hingga deployment. Kami menggunakan teknologi terkini seperti Next.js, React, dan Node.js untuk memastikan website Anda cepat, aman, dan mudah dikembangkan di masa depan.",
      features: [
        "Full-stack development (Frontend & Backend)",
        "Database design dan integration",
        "API development dan integration",
        "CMS implementation",
        "E-commerce functionality",
        "Security implementation",
      ],
      process: [
        { step: "Planning", desc: "Perencanaan arsitektur dan teknologi" },
        { step: "Development", desc: "Pengembangan frontend dan backend" },
        { step: "Integration", desc: "Integrasi sistem dan third-party services" },
        { step: "Deployment", desc: "Launching dan monitoring" },
      ],
    },
  },
]

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)

  const handleContactWhatsApp = () => {
    const whatsappNumber = "6282327686909" // Ganti dengan nomor WA Anda (format: 62xxxxxxxxxxx)
    const message = encodeURIComponent(
      `Halo QuantumTech, saya tertarik dengan layanan ${selectedService?.title}. Bisakah saya mendapatkan informasi lebih lanjut?`,
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
  }

  return (
    <>
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#26a8a8] text-sm font-semibold tracking-wider uppercase">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-light text-[#1a1f2e] mt-4 text-balance">Our Services</h2>
            <p className="text-[#4a5568] mt-4 max-w-2xl mx-auto">
              Layanan profesional website untuk memenuhi berbagai kebutuhan digital bisnis Anda
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-[#26a8a8] to-[#86bc25] mx-auto mt-6 rounded-full" />
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-[#e5e7eb] hover:border-transparent hover:shadow-2xl hover:shadow-[#1a1f2e]/10 transition-all duration-500"
              >
                {/* Hover Background */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: `${service.color}05` }}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon className="w-7 h-7 transition-colors duration-300" style={{ color: service.color }} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-[#1a1f2e] mb-3 group-hover:text-[#26a8a8] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#4a5568] leading-relaxed">{service.description}</p>

                  {service.hasDetail && (
                    <button
                      onClick={() => setSelectedService(service)}
                      className="mt-6 flex items-center gap-2 text-[#26a8a8] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-[#1e8a8a]"
                    >
                      <span>Learn more</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedService(null)} />

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-[#1a1f2e]/10 hover:bg-[#1a1f2e]/20 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X className="w-5 h-5 text-[#1a1f2e]" />
            </button>

            {/* Header */}
            <div
              className="p-8 pb-6"
              style={{ background: `linear-gradient(135deg, ${selectedService.color}10, ${selectedService.color}05)` }}
            >
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${selectedService.color}20` }}
              >
                <selectedService.icon className="w-8 h-8" style={{ color: selectedService.color }} />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1f2e]">{selectedService.title}</h3>
              <p className="text-[#4a5568] mt-2">{selectedService.detail?.fullDescription}</p>
            </div>

            {/* Features */}
            <div className="px-8 py-6 border-t border-[#e5e7eb]">
              <h4 className="text-lg font-semibold text-[#1a1f2e] mb-4">Fitur Layanan</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {selectedService.detail?.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${selectedService.color}20` }}
                    >
                      <svg
                        className="w-3 h-3"
                        style={{ color: selectedService.color }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-[#4a5568] text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="px-8 py-6 border-t border-[#e5e7eb]">
              <h4 className="text-lg font-semibold text-[#1a1f2e] mb-4">Proses Kerja</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {selectedService.detail?.process.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                      style={{ backgroundColor: selectedService.color }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium text-[#1a1f2e]">{item.step}</div>
                      <div className="text-sm text-[#4a5568]">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="px-8 py-6 border-t border-[#e5e7eb] bg-[#f5f7fa] rounded-b-2xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[#4a5568] text-sm">Tertarik dengan layanan ini?</p>
                <button
                  onClick={handleContactWhatsApp}
                  className="px-6 py-3 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{ backgroundColor: selectedService.color }}
                >
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
