"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingChat from "@/components/floating-chat"
import { Star, Quote, MessageSquareHeart, Sparkles, Send } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials: any[] = []

export default function TestimonialsPage() {
  const [filter, setFilter] = useState("all")

  const filteredTestimonials = filter === "all" ? testimonials : testimonials.filter((t) => t.service === filter)

  const services = ["all", "Website Responsive", "Web Development"]

  const hasTestimonials = testimonials.length > 0

  return (
    <main className="min-h-screen bg-[#1a1f2e]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
            Client <span className="text-[#86bc25]">Testimonials</span>
          </h1>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            Dengarkan apa yang klien kami katakan tentang pengalaman mereka bekerja sama dengan QuantumTech. Kepuasan
            klien adalah prioritas utama kami.
          </p>
        </div>
      </section>

      {/* Stats - Shows potential/goals instead of actual numbers */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#26a8a8]">100%</div>
              <div className="text-white/60 mt-2">Komitmen Kualitas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#86bc25]">24/7</div>
              <div className="text-white/60 mt-2">Support Ready</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#26a8a8]">3</div>
              <div className="text-white/60 mt-2">Layanan Unggulan</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#86bc25]">1</div>
              <div className="text-white/60 mt-2">Tim Profesional</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => {
                  setFilter(service)
                }}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  filter === service
                    ? "bg-gradient-to-r from-[#26a8a8] to-[#86bc25] text-white"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10",
                )}
              >
                {service === "all" ? "Semua Layanan" : service}
              </button>
            ))}
          </div>
        </div>
      </section>

      {!hasTestimonials && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Main Empty State Card */}
            <div className="relative bg-gradient-to-br from-[#26a8a8]/10 to-[#86bc25]/10 rounded-3xl p-12 md:p-16 border border-white/10 text-center overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#26a8a8]/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#86bc25]/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#26a8a8]/20 to-[#86bc25]/20 rounded-full flex items-center justify-center border border-white/10">
                      <MessageSquareHeart className="w-12 h-12 text-[#26a8a8]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#86bc25] rounded-full flex items-center justify-center animate-pulse">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Headline */}
                <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                  Jadilah yang <span className="text-[#86bc25]">Pertama!</span>
                </h2>

                {/* Description */}
                <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  Kami baru memulai perjalanan ini dan sangat antusias untuk bekerja sama dengan Anda. Setiap proyek
                  besar dimulai dari langkah pertama — dan kami siap memberikan yang terbaik untuk Anda.
                </p>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                    <div className="w-10 h-10 bg-[#26a8a8]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Star className="w-5 h-5 text-[#26a8a8]" />
                    </div>
                    <h3 className="text-white font-medium mb-2">Kualitas Premium</h3>
                    <p className="text-white/50 text-sm">Standar tinggi untuk setiap proyek yang kami kerjakan</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                    <div className="w-10 h-10 bg-[#86bc25]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Quote className="w-5 h-5 text-[#86bc25]" />
                    </div>
                    <h3 className="text-white font-medium mb-2">Testimoni Asli</h3>
                    <p className="text-white/50 text-sm">Kami hanya menampilkan ulasan dari klien nyata</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                    <div className="w-10 h-10 bg-[#26a8a8]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Send className="w-5 h-5 text-[#26a8a8]" />
                    </div>
                    <h3 className="text-white font-medium mb-2">Respons Cepat</h3>
                    <p className="text-white/50 text-sm">Tim kami siap membantu kapan saja Anda butuhkan</p>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 max-w-2xl mx-auto mb-10">
                  <Quote className="absolute top-4 left-4 w-8 h-8 text-[#86bc25]/20" />
                  <p className="text-white/80 italic text-lg leading-relaxed">
                    "Setiap masterpiece dimulai dari kanvas kosong. Biarkan kami membantu Anda menciptakan karya digital
                    yang luar biasa — dan testimoni Anda akan menjadi yang pertama menghiasi halaman ini."
                  </p>
                  <p className="text-[#26a8a8] mt-4 font-medium">— Tim QuantumTech</p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/#services"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#26a8a8] to-[#86bc25] text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
                  >
                    Jelajahi Layanan Kami
                  </a>
                  <a
                    href="/#about"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                  >
                    Kenali Kami Lebih Dekat
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Message */}
            <div className="text-center mt-12">
              <p className="text-white/40 text-sm">
                Punya pertanyaan? Hubungi kami melalui tombol chat di pojok kanan bawah
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Show testimonials if available */}
      {hasTestimonials && (
        <>
          {/* Featured Testimonial */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="relative bg-gradient-to-br from-[#26a8a8]/20 to-[#86bc25]/20 rounded-3xl p-8 md:p-12 border border-white/10">
                <Quote className="absolute top-6 left-6 w-12 h-12 text-[#86bc25]/30" />
                <div className="text-center">
                  <p className="text-xl md:text-2xl text-white/90 italic leading-relaxed mb-8">
                    "{filteredTestimonials[0]?.testimonial}"
                  </p>
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#86bc25] text-[#86bc25]" />
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={filteredTestimonials[0]?.image || "/placeholder.svg"}
                      alt={filteredTestimonials[0]?.name}
                      className="w-16 h-16 rounded-full border-2 border-[#26a8a8]"
                    />
                    <div className="text-left">
                      <div className="text-white font-semibold">{filteredTestimonials[0]?.name}</div>
                      <div className="text-[#26a8a8] text-sm">{filteredTestimonials[0]?.role}</div>
                      <div className="text-white/50 text-sm">{filteredTestimonials[0]?.company}</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="inline-block px-4 py-1.5 bg-[#86bc25]/20 text-[#86bc25] text-sm rounded-full">
                      {filteredTestimonials[0]?.service}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial Grid */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-light text-white mb-8">
                Lebih Banyak <span className="text-[#26a8a8]">Testimoni</span>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTestimonials.slice(1).map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#26a8a8]/50 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full border-2 border-white/20 group-hover:border-[#26a8a8] transition-colors"
                      />
                      <div className="flex-1">
                        <div className="text-white font-semibold">{testimonial.name}</div>
                        <div className="text-[#26a8a8] text-sm">{testimonial.role}</div>
                        <div className="text-white/50 text-xs">{testimonial.company}</div>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#86bc25] text-[#86bc25]" />
                      ))}
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">"{testimonial.testimonial}"</p>
                    <span className="inline-block px-3 py-1 bg-[#86bc25]/10 text-[#86bc25] text-xs rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#26a8a8]/20 to-[#86bc25]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            {hasTestimonials ? (
              <>
                Siap Menjadi Klien <span className="text-[#86bc25]">Kami?</span>
              </>
            ) : (
              <>
                Mari Mulai <span className="text-[#86bc25]">Bersama!</span>
              </>
            )}
          </h2>
          <p className="text-white/60 text-lg mb-8">
            {hasTestimonials
              ? "Bergabunglah dengan ratusan klien yang telah mempercayakan pengembangan website mereka kepada QuantumTech."
              : "Kami siap memberikan pelayanan terbaik untuk proyek website Anda. Jadilah bagian dari cerita sukses QuantumTech."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#26a8a8] to-[#86bc25] text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Lihat Layanan Kami
            </a>
            <a
              href="/#about"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChat />
    </main>
  )
}
