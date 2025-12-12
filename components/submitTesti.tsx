"use client"

import type React from "react"

import { useState } from "react"
import { Star, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function SubmitTesti() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    service: "",
    rating: 0,
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hoveredStar, setHoveredStar] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const emailTo = "damarwah13@gmail.com"
    const subject = `Testimonial Baru dari ${formData.name} - QuantumTech`

    const emailBody = `
TESTIMONIAL BARU - QUANTUMTECH
${"=".repeat(50)}

INFORMASI CLIENT
${"-".repeat(50)}
Nama Lengkap    : ${formData.name}
Email           : ${formData.email}
Perusahaan      : ${formData.company || "-"}
Jabatan         : ${formData.position || "-"}
Layanan         : ${formData.service}
Rating          : ${"⭐".repeat(formData.rating)} (${formData.rating}/5)

TESTIMONIAL
${"-".repeat(50)}
${formData.message}

${"=".repeat(50)}
Dikirim pada: ${new Date().toLocaleString("id-ID", {
      dateStyle: "full",
      timeStyle: "short",
    })}

Catatan: Silakan review testimonial ini sebelum dipublikasikan di website.
    `.trim()

    // Buka email client dengan data yang sudah diformat
    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink

    // Reset form dan tampilkan sukses
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        position: "",
        service: "",
        rating: 0,
        message: "",
      })
      setIsSubmitted(false)
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border-2 border-emerald-200 text-center">
        <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Terima Kasih!</h3>
        <p className="text-gray-600">Testimonial Anda telah dikirim. Tim kami akan segera meninjaunya.</p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1a1f2e] via-[#26a8a8] to-[#86bc25] p-6 text-white">
          <h2 className="text-3xl font-bold mb-2">Bagikan Pengalaman Anda</h2>
          <p className="text-gray-200">Kami sangat menghargai feedback Anda untuk terus meningkatkan layanan kami</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Nama */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              className="w-full"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@company.com"
              className="w-full"
            />
          </div>

          {/* Company & Position */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Perusahaan</label>
              <Input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="PT. Example"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Jabatan</label>
              <Input
                type="text"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                placeholder="CEO"
                className="w-full"
              />
            </div>
          </div>

          {/* Layanan */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Layanan yang Digunakan <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26a8a8] focus:border-transparent"
            >
              <option value="">Pilih Layanan</option>
              <option value="Web Design">Web Design</option>
              <option value="Website Responsive">Website Responsive</option>
              <option value="Web Development">Web Development</option>
            </select>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Rating <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: star })}
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= (hoveredStar || formData.rating) ? "fill-[#86bc25] text-[#86bc25]" : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
              <span className="ml-2 text-sm text-gray-600 self-center">
                {formData.rating > 0 ? `${formData.rating}/5` : "Pilih rating"}
              </span>
            </div>
          </div>

          {/* Testimonial */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Testimonial Anda <span className="text-red-500">*</span>
            </label>
            <Textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Ceritakan pengalaman Anda menggunakan layanan kami..."
              rows={6}
              className="w-full resize-none"
            />
            <p className="text-xs text-gray-500 mt-1">Minimal 50 karakter ({formData.message.length}/50)</p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={formData.rating === 0 || formData.message.length < 50}
            className="w-full bg-gradient-to-r from-[#26a8a8] to-[#86bc25] hover:from-[#1f8888] hover:to-[#6fa01f] text-white py-6 text-lg font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5 mr-2" />
            Kirim Testimonial
          </Button>
        </form>
      </div>
    </div>
  )
}
