"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingChat from "@/components/floating-chat"
import { Linkedin, Twitter, Mail, ChevronLeft, ChevronRight } from "lucide-react"

const teamMembers = [
  {
    name: "Damar Wahyu Putra",
    role: "Co-Founder & CEO",
    image: "/professional-indonesian-male-ceo-in-suit.jpg",
    bio: "15+ tahun pengalaman di industri teknologi digital",
    linkedin: "https://www.linkedin.com/in/damarwahyuputra",
    twitter: "#",
    email: "damarwah13@gmail.com",
  },
  {
    name: "Naufal",
    role: "Co-Founder & CTO",
    image: "/professional-indonesian-male-cto-tech-executive.jpeg",
    bio: "Ahli dalam arsitektur sistem dan cloud computing",
    linkedin: "#",
    twitter: "#",
    email: "siti@quantumtech.id",
  },
  {
    name: "Budi Santoso",
    role: "Co-Founder & CDO",
    image: "/professional-indonesian-male-creative-director-des.jpg",
    bio: "Spesialis UI/UX dengan fokus human-centered design",
    linkedin: "#",
    twitter: "#",
    email: "budi@quantumtech.id",
  },
  {
    name: "Dewi Anggraini",
    role: "Co-Founder & COO",
    image: "/professional-indonesian-female-operations-officer-.jpg",
    bio: "Ahli operasional dan manajemen bisnis teknologi",
    linkedin: "#",
    twitter: "#",
    email: "dewi@quantumtech.id",
  },
  {
    name: "Rendra Pratama",
    role: "Co-Founder & CMO",
    image: "/professional-indonesian-male-marketing-director-bu.jpg",
    bio: "Digital marketing strategist berpengalaman 10 tahun",
    linkedin: "#",
    twitter: "#",
    email: "rendra@quantumtech.id",
  },
]

export default function OurTeamPage() {
  return (
    <main className="min-h-screen bg-[#0d1117]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#86bc25]">Team</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Tim profesional yang berdedikasi untuk menghadirkan solusi digital terbaik bagi bisnis Anda
          </p>
        </div>
      </section>

      <section className="py-12 px-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-10">
            Struktur <span className="text-[#26a8a8]">Organisasi</span>
          </h2>

          <div className="flex flex-col items-center gap-6">
            {/* Title Badge */}
            <div className="bg-gradient-to-r from-[#26a8a8] to-[#86bc25] px-6 py-2.5 rounded-full">
              <p className="text-white font-semibold">Board of Co-Founders</p>
            </div>

            {/* Connector Line */}
            <div className="w-0.5 h-6 bg-gradient-to-b from-[#26a8a8] to-[#86bc25]"></div>

            {/* 5 Co-Founders - Horizontal layout */}
            <div className="flex flex-wrap justify-center gap-4 w-full">
              {/* CEO - Highlighted */}
              <div className="bg-gradient-to-br from-[#26a8a8] to-[#86bc25] p-0.5 rounded-xl w-48">
                <div className="bg-[#1a1f2e] px-4 py-4 rounded-xl text-center h-full">
                  <p className="text-white font-semibold">CEO & Founder</p>
                  <p className="text-white/60 text-sm">Damar Wahyu Putra</p>
                </div>
              </div>

              {/* CTO */}
              <div className="bg-white/10 border border-white/20 px-4 py-4 rounded-xl text-center w-40">
                <p className="text-white font-semibold text-sm">CTO</p>
                <p className="text-[#26a8a8] text-xs">Co-Founder</p>
                <p className="text-white/50 text-sm">Siti Nurhaliza</p>
              </div>

              {/* CDO */}
              <div className="bg-white/10 border border-white/20 px-4 py-4 rounded-xl text-center w-40">
                <p className="text-white font-semibold text-sm">CDO</p>
                <p className="text-[#26a8a8] text-xs">Co-Founder</p>
                <p className="text-white/50 text-sm">Budi Santoso</p>
              </div>

              {/* COO */}
              <div className="bg-white/10 border border-white/20 px-4 py-4 rounded-xl text-center w-40">
                <p className="text-white font-semibold text-sm">COO</p>
                <p className="text-[#26a8a8] text-xs">Co-Founder</p>
                <p className="text-white/50 text-sm">Dewi Anggraini</p>
              </div>

              {/* CMO */}
              <div className="bg-white/10 border border-white/20 px-4 py-4 rounded-xl text-center w-40">
                <p className="text-white font-semibold text-sm">CMO</p>
                <p className="text-[#26a8a8] text-xs">Co-Founder</p>
                <p className="text-white/50 text-sm">Rendra Pratama</p>
              </div>
            </div>

            {/* Connector to Departments */}
            <div className="w-0.5 h-6 bg-white/20"></div>

            {/* Departments */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-lg text-center">
                <p className="text-white font-medium">Design</p>
                <p className="text-white/40 text-sm">UI/UX Team</p>
              </div>
              <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-lg text-center">
                <p className="text-white font-medium">Development</p>
                <p className="text-white/40 text-sm">Engineering</p>
              </div>
              <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-lg text-center">
                <p className="text-white font-medium">Marketing</p>
                <p className="text-white/40 text-sm">Growth Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Meet Our <span className="text-[#86bc25]">Leaders</span>
            </h2>

            {/* Navigation Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => {
                  const container = document.getElementById("leaders-carousel")
                  if (container) container.scrollBy({ left: -320, behavior: "smooth" })
                }}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#26a8a8] hover:border-[#26a8a8] transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={() => {
                  const container = document.getElementById("leaders-carousel")
                  if (container) container.scrollBy({ left: 320, behavior: "smooth" })
                }}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#26a8a8] hover:border-[#26a8a8] transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Horizontal Scrollable Carousel */}
          <div
            id="leaders-carousel"
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group flex-shrink-0 w-72 bg-[#1a1f2e] border border-white/10 rounded-xl overflow-hidden hover:border-[#26a8a8]/50 transition-all duration-300 hover:-translate-y-1 snap-start"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-transparent to-transparent"></div>

                  {/* Social Links Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href={member.linkedin}
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#26a8a8] transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={member.twitter}
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#26a8a8] transition-colors"
                    >
                      <Twitter className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#26a8a8] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-[#86bc25] font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-white/60 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const container = document.getElementById("leaders-carousel")
                  if (container) container.scrollTo({ left: index * 304, behavior: "smooth" })
                }}
                className="w-2 h-2 rounded-full bg-white/30 hover:bg-[#26a8a8] transition-colors"
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChat />
    </main>
  )
}
