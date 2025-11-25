import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import VisionMissionSection from "@/components/vision-mission-section"
import ServicesSection from "@/components/services-section"
import Footer from "@/components/footer"
import FloatingChat from "@/components/floating-chat"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <ServicesSection />
      <Footer />
      <FloatingChat />
    </main>
  )
}
