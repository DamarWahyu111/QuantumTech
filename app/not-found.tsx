"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0d1117]">
      <Header />

      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          {/* 404 Number with Glow Effect */}
          <div className="relative">
            <h1 className="text-[180px] md:text-[240px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#26a8a8] to-[#86bc25] leading-none">
              404
            </h1>
            <div className="absolute inset-0 text-[180px] md:text-[240px] font-bold text-[#26a8a8]/20 blur-2xl leading-none">
              404
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-white mt-4 mb-4">Halaman Tidak Ditemukan</h2>

          <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
            Maaf, halaman yang Anda cari tidak ada atau sedang dalam pengembangan.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#26a8a8] hover:bg-[#26a8a8]/90 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Home className="w-5 h-5" />
              Kembali ke Beranda
            </Link>
            <button
              onClick={() => typeof window !== "undefined" && window.history.back()}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-full transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Halaman Sebelumnya
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-xs mx-auto opacity-30">
            <div className="h-1 bg-[#26a8a8] rounded-full"></div>
            <div className="h-1 bg-[#86bc25] rounded-full"></div>
            <div className="h-1 bg-[#26a8a8] rounded-full"></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
