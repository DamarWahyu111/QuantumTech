"use client"

import React, { useEffect, useState } from "react"
import { MessageCircle, X, Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

type ContactOption = {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
  label: string
  href: string
  color?: string
  bgColor?: string
}

const contactOptions: ContactOption[] = [
  {
    icon: Phone,
    label: "WhatsApp",
    href: "https://wa.me/6282327686909",
    color: "#25D366",
    bgColor: "bg-[#25D366]",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:damarwah13@gmail.com",
    color: "#26a8a8",
    bgColor: "bg-[#26a8a8]",
  },
]

export default function FloatingChat(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Hanya render elemen yang berpotensi menambahkan atribut unik
  // setelah komponen sudah mount di client.
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Contact Options */}
      {contactOptions.map((option, index) => {
        // placeholder element server-side agar struktur konsisten
        const Icon = option.icon

        return (
          <a
            key={option.label}
            href={option.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform",
              option.bgColor ?? "",
              "hover:scale-110",
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none",
            )}
            style={{
              // delay animasi untuk efek staggered saat membuka
              transitionDelay: isOpen ? `${(contactOptions.length - 1 - index) * 75}ms` : `${index * 50}ms`,
            }}
            aria-label={option.label}
          >
            {mounted ? (
              <Icon className="w-5 h-5 text-white" />
            ) : (
              // Placeholder statis di server render supaya atribut konsisten
              <span className="w-5 h-5" aria-hidden />
            )}
          </a>
        )
      })}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-105",
          isOpen ? "bg-[#1a1f2e] rotate-0" : "bg-gradient-to-r from-[#26a8a8] to-[#86bc25]",
        )}
        aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
        type="button"
      >
        <div className="relative w-6 h-6">
          {mounted ? (
            <>
              <MessageCircle
                className={cn(
                  "w-6 h-6 text-white absolute inset-0 transition-all duration-300",
                  isOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100",
                )}
              />
              <X
                className={cn(
                  "w-6 h-6 text-white absolute inset-0 transition-all duration-300",
                  isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0",
                )}
              />
            </>
          ) : (
            // placeholder agar server & client HTML konsisten
            <span className="w-6 h-6" aria-hidden />
          )}
        </div>
      </button>

      {/* Tooltip */}
      <div
        className={cn(
          "absolute right-16 bottom-0 bg-[#1a1f2e] text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap transition-all duration-300",
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100",
        )}
        // Tooltip statis — tidak sensitif terhadap hydration
      >
        Need help?
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-[#1a1f2e] rotate-45" />
      </div>
    </div>
  )
}
