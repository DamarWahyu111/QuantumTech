import Link from "next/link"
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About Us", href: "/#about" },
    { label: "Our Team", href: "/our-team" },
    // { label: "Careers", href: "/careers" },
    // { label: "News", href: "/blog" },
  ],
  services: [
    { label: "Web Design", href: "/#services" },
    { label: "Web Development", href: "/#services" },
    { label: "Website Responsive", href: "/#services" },
    { label: "E-Commerce", href: "/#services" },
  ],
  resources: [
    // { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    // { label: "Portfolio", href: "/case-studies" },
    { label: "Contact", href: "/#contact" },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
]

export default function Footer() {
  return (
    <footer className="bg-[#1a1f2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/">
              <span className="text-2xl font-bold tracking-tight">
                Quantum<span className="text-[#86bc25]">Tech</span>
              </span>
            </Link>
            <p className="mt-4 text-white/60 leading-relaxed max-w-sm">
              Jasa Teknologi website yang menghadirkan solusi digital berkualitas tinggi untuk bisnis Anda di
              Indonesia.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#26a8a8] transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns - Using Link component */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-[#86bc25] transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-[#86bc25] transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-[#86bc25] transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© 2025 QuantumTech. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-white/40 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/40 hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-white/40 hover:text-white/60 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
