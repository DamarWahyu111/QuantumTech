"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, Search, Globe, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const navItems = [
  {
    label: "Who we are",
    hasDropdown: true,
    items: [
      { label: "About QuantumTech", href: "/#about" },
      { label: "Our Team", href: "/our-team" },
      { label: "Company Culture", href: "/company-culture" },
      { label: "Awards & Recognition", href: "/awards" },
    ],
  },
  {
    label: "What we do",
    hasDropdown: true,
    items: [
      { label: "Web Design", href: "/#services" },
      { label: "Web Development", href: "/#services" },
      { label: "Website Responsive", href: "/#services" },
      { label: "E-Commerce Solutions", href: "/#services" },
    ],
  },
  {
    label: "Our Thinking",
    hasDropdown: true,
    items: [
      { label: "Blog & Insights", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Tech Trends", href: "/tech-trends" },
      { label: "Whitepapers", href: "/whitepapers" },
    ],
  },
  {
    label: "Careers",
    hasDropdown: true,
    items: [
      { label: "Open Positions", href: "/careers/open-positions" },
      { label: "Internship Program", href: "/careers/internship" },
      { label: "Life at QuantumTech", href: "/careers/life-at-quantumtech" },
    ],
  },
]

const searchData = [
  { title: "Web Design", description: "Creative and modern web design services", href: "/#services" },
  { title: "Web Development", description: "Full-stack website development solutions", href: "/#services" },
  { title: "Website Responsive", description: "Mobile-friendly responsive design", href: "/#services" },
  { title: "E-Commerce Website", description: "Online store development", href: "/#services" },
  { title: "About QuantumTech", description: "Learn more about our company", href: "/#about" },
  { title: "Our Team", description: "Meet our professional team", href: "/our-team" },
  { title: "Our Vision", description: "Building digital futures", href: "/#vision" },
  { title: "Contact Us", description: "Get in touch with our team", href: "/#contact" },
  { title: "Careers", description: "Join our team", href: "/careers" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<typeof searchData>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([])
    } else {
      const filtered = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setSearchResults(filtered)
    }
  }, [searchQuery])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false)
        setSearchQuery("")
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1f2e]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <span className="text-white text-xl font-bold tracking-tight">
              Quantum<span className="text-[#86bc25]">Tech</span>
            </span>
          </Link>

          {/* Desktop Navigation with Dropdowns */}
          <nav className="hidden md:flex items-center gap-8" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                <button
                  className="flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium transition-colors"
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        activeDropdown === item.label && "rotate-180",
                      )}
                    />
                  )}
                </button>

                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-[#1a1f2e] border border-white/10 rounded-lg shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section with Search */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative" ref={searchRef}>
              <button
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search className="w-4 h-4" />
                <span className="text-sm">Search</span>
              </button>

              {searchOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-[#1a1f2e] border border-white/10 rounded-lg shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-3 border-b border-white/10">
                    <input
                      type="text"
                      placeholder="Search... (try 'website')"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#26a8a8]"
                      autoFocus
                    />
                  </div>
                  {searchResults.length > 0 && (
                    <div className="max-h-64 overflow-y-auto">
                      {searchResults.map((result, index) => (
                        <Link
                          key={index}
                          href={result.href}
                          className="block px-4 py-3 hover:bg-white/5 transition-colors"
                          onClick={() => {
                            setSearchOpen(false)
                            setSearchQuery("")
                          }}
                        >
                          <div className="text-sm font-medium text-white">{result.title}</div>
                          <div className="text-xs text-white/50 mt-0.5">{result.description}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                  {searchQuery && searchResults.length === 0 && (
                    <div className="px-4 py-6 text-center text-white/40 text-sm">No results found</div>
                  )}
                </div>
              )}
            </div>

            <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <Globe className="w-4 h-4" />
              <span className="text-sm">INDONESIA - ID</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-[#1a1f2e] border-t border-white/10 overflow-hidden transition-all duration-300",
          mobileMenuOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0",
        )}
      >
        <div className="px-4 py-4 space-y-2">
          {/* Mobile Search */}
          <div className="pb-4 border-b border-white/10">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#26a8a8]"
            />
          </div>

          {navItems.map((item) => (
            <div key={item.label}>
              <button
                className="flex items-center justify-between w-full text-white/80 hover:text-white text-sm font-medium py-2"
                onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      activeDropdown === item.label && "rotate-180",
                    )}
                  />
                )}
              </button>
              {item.hasDropdown && activeDropdown === item.label && (
                <div className="pl-4 py-2 space-y-2">
                  {item.items?.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className="block py-2 text-sm text-white/60 hover:text-[#86bc25] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
