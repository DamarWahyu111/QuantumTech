"use client"

import type React from "react"

import { useState } from "react"
import { Star, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Component
export default function SubmitTesti() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // company: "",
    // position: "",
    service: "",
    rating: 0,
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hoveredStar, setHoveredStar] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.service !== "" &&
    formData.rating > 0 &&
    formData.message.trim().length >= 50

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isFormValid) {
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "5d62e2eb-fc92-4b2b-ad2c-7b7a82633453", // User needs to replace this
          subject: `Testimonial Baru dari ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: `
Testimonial Baru!

Nama: ${formData.name}
Email: ${formData.email}
Layanan: ${formData.service}
Rating: ${formData.rating}/5 ⭐

Testimonial:
${formData.message}
          `,
          to: "damarwah13@gmail.com",
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Gagal mengirim testimonial")
      }

      setIsSubmitted(true)
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          service: "",
          rating: 0,
          message: "",
        })
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      console.error("[v0] Error submitting testimonial:", err)
      setError(err instanceof Error ? err.message : "Terjadi kesalahan. Silakan coba lagi.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border-2 border-emerald-200 text-center animate-in fade-in zoom-in duration-300">
        <CheckCircle className="w-20 h-20 text-emerald-500 mx-auto mb-4 animate-in zoom-in duration-500" />
        <h3 className="text-3xl font-bold text-gray-900 mb-3">Testimonial Anda Sudah Kami Terima!</h3>
        <p className="text-gray-600 text-lg mb-2">Terima kasih atas feedback berharga Anda.</p>
        <p className="text-gray-500">Email telah dikirim ke QuantumTech@id</p>
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
            <div className="relative">
              <Input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="ex: Doe John"
                className={`w-full pr-10 transition-all ${
                  formData.name.trim() ? "border-emerald-500 focus:ring-emerald-500" : ""
                }`}
              />
              {formData.name.trim() && (
                <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@gmail.com"
                className={`w-full pr-10 transition-all ${
                  formData.email.trim() ? "border-emerald-500 focus:ring-emerald-500" : ""
                }`}
              />
              {formData.email.trim() && (
                <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
              )}
            </div>
          </div>

          {/* Company & Position */}
          {/* <div className="grid md:grid-cols-2 gap-4">
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
          </div> */}

          {/* Layanan */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Layanan yang Digunakan <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className={`w-full px-4 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-[#26a8a8] focus:border-transparent transition-all ${
                  formData.service ? "border-emerald-500" : "border-gray-300"
                }`}
              >
                <option value="">Pilih Layanan</option>
                {/* <option value="Web Design">Web Design</option> */}
                <option value="Website Responsive">Website Responsive</option>
                <option value="Web Development">Web Development</option>
              </select>
              {formData.service && (
                <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500 pointer-events-none" />
              )}
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Rating <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2 items-center">
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
                    className={`w-8 h-8 transition-colors ${
                      star <= (hoveredStar || formData.rating) ? "fill-[#86bc25] text-[#86bc25]" : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
              <span
                className={`ml-2 text-sm font-medium ${formData.rating > 0 ? "text-emerald-600" : "text-gray-500"}`}
              >
                {formData.rating > 0 ? `${formData.rating}/5 ⭐` : "Pilih rating"}
              </span>
              {formData.rating > 0 && <CheckCircle className="w-5 h-5 text-emerald-500 ml-2" />}
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
              className={`w-full resize-none transition-all ${
                formData.message.length >= 50 ? "border-emerald-500 focus:ring-emerald-500" : ""
              }`}
            />
            <div className="flex items-center justify-between mt-2">
              <p
                className={`text-sm font-medium transition-colors ${
                  formData.message.length >= 50
                    ? "text-emerald-600"
                    : formData.message.length > 0
                      ? "text-amber-600"
                      : "text-gray-500"
                }`}
              >
                {formData.message.length >= 50 ? (
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    Testimonial sudah memenuhi syarat
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    {formData.message.length > 0 && <AlertCircle className="w-4 h-4" />}
                    {formData.message.length}/50 karakter
                    {formData.message.length > 0 && ` (${50 - formData.message.length} lagi)`}
                  </span>
                )}
              </p>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-red-900 mb-1">Gagal mengirim testimonial</p>
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          )}

          {!isFormValid && (formData.name || formData.email || formData.rating > 0 || formData.message.length > 0) && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-amber-900 mb-1">Mohon lengkapi form berikut:</p>
                <ul className="list-disc list-inside text-amber-700 space-y-0.5">
                  {!formData.name.trim() && <li>Nama Lengkap</li>}
                  {!formData.email.trim() && <li>Email</li>}
                  {!formData.service && <li>Layanan yang Digunakan</li>}
                  {formData.rating === 0 && <li>Rating</li>}
                  {formData.message.length < 50 && <li>Testimonial (minimal 50 karakter)</li>}
                </ul>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!isFormValid || isLoading}
            className={`w-full py-6 text-lg font-semibold rounded-xl transition-all duration-300 ${
              isFormValid && !isLoading
                ? "bg-gradient-to-r from-[#26a8a8] to-[#86bc25] hover:from-[#1f8888] hover:to-[#6fa01f] text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Mengirim...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                {isFormValid ? "Kirim Testimonial" : "Lengkapi Form untuk Mengirim"}
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}
