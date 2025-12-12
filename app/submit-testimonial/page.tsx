"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingChat from "@/components/floating-chat"
import SubmitTesti from "@/components/submitTesti"

export default function SubmitTestimonialPage() {
  return (
    <main className="min-h-screen bg-[#1a1f2e]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Bagikan <span className="text-[#86bc25]">Pengalaman</span> Anda
          </h1>
          <p className="text-white/60 text-lg">
            Kami sangat menghargai feedback dari klien kami. Ceritakan pengalaman Anda bekerja sama dengan QuantumTech.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <SubmitTesti />
      </section>

      <Footer />
      <FloatingChat />
    </main>
  )
}
