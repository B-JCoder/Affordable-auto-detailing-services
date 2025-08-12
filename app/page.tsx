"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Sparkles,
  Shield,
  Zap,
  Droplets,
  Car,
  ChevronDown,
  Menu,
  X,
  Clock,
  Award,
  Users,
  MessageCircle,
} from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleCall = () => {
    window.location.href = "tel:+14175019065"
  }

  const handleGetQuote = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleBookNow = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <a
          href="https://wa.me/14175019065"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg shadow-green-500/25 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
          <span className="absolute right-full mr-2 sm:mr-3 bg-green-500 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Header */}
      <header className="border-b border-gray-800 bg-black/80 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logocar.jpg-PF1iVEzopHMpMrc3z7ddngSLIUOnh4.jpeg"
              alt="Affordable Auto Detailing Logo"
              width={200}
              height={80}
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">
              About
            </a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">
              Services
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">
              Reviews
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">
              FAQ
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">
              Contact
            </a>
            <Button onClick={handleBookNow} className="bg-white text-black hover:bg-gray-200 text-sm lg:text-base">
              Book Now
            </Button>
          </nav>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </a>
              <a
                href="#faq"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button
                onClick={() => {
                  handleBookNow()
                  setIsMenuOpen(false)
                }}
                className="bg-white text-black hover:bg-gray-200 w-full mt-4"
              >
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Vehicle Detailing
                <span className="block text-gray-400 text-3xl md:text-5xl mt-2">Budget Friendly Quality</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We specialize in paint corrections and ceramic coatings. We also offer interior and exterior detailing,
                wet sanding, scratch repair, headlight restoration, wheel and wheel well detailing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button onClick={handleCall} size="lg" className="bg-white text-black hover:bg-gray-200">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 417-501-9065
                </Button>
                <Button
                  onClick={handleGetQuote}
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-white/10 bg-transparent"
                >
                  Get Quote
                </Button>
              </div>

              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2" />
                <span>3209 W Belle Center Rd, Joplin, MO</span>
              </div>
            </div>

            <div>
              <Card className="bg-white/5 backdrop-blur-md border border-white/20 shadow-2xl shadow-green-500/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Quick Contact</h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-gray-300">
                      <Phone className="w-5 h-5 mr-3" />
                      <div>
                        <div>417-501-9065</div>
                        <div>940-337-2930</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Mail className="w-5 h-5 mr-3" />
                      <span>auto.detailmo@gmail.com</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-5 h-5 mr-3" />
                      <span>Always Open</span>
                    </div>
                  </div>

                  <form className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                    <Input
                      placeholder="Phone Number"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                    <select className="bg-white/10 border border-white/20 text-white p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-white/30">
                      <option value="" className="bg-gray-800 text-white">
                        Select Service
                      </option>
                      <option value="paint-correction" className="bg-gray-800 text-white">
                        Paint Correction
                      </option>
                      <option value="ceramic-coating" className="bg-gray-800 text-white">
                        Ceramic Coating
                      </option>
                      <option value="interior-detailing" className="bg-gray-800 text-white">
                        Interior Detailing
                      </option>
                      <option value="exterior-detailing" className="bg-gray-800 text-white">
                        Exterior Detailing
                      </option>
                    </select>
                    <Button className="w-full bg-white text-black hover:bg-gray-200">Request Quote</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Affordable Auto Detailing</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Located in Joplin, Missouri, we are your trusted local experts in professional vehicle detailing. Our
                mission is simple: deliver premium quality services at affordable prices that every car owner can enjoy.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                With years of experience and a passion for perfection, we specialize in paint corrections, ceramic
                coatings, and comprehensive detailing services. We believe every vehicle deserves to look its absolute
                best.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 h-full flex flex-col items-center justify-center min-h-[120px]">
                    <Clock className="w-8 h-8 mx-auto mb-2" />
                    <h4 className="font-semibold">Always Open</h4>
                    <p className="text-sm text-gray-400">Flexible scheduling</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 h-full flex flex-col items-center justify-center min-h-[120px]">
                    <Award className="w-8 h-8 mx-auto mb-2" />
                    <h4 className="font-semibold">Quality Guaranteed</h4>
                    <p className="text-sm text-gray-400">Premium results</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 mt-1 text-yellow-400" />
                  <div>
                    <h4 className="font-semibold">Budget-Friendly Pricing</h4>
                    <p className="text-gray-400">Premium services without breaking the bank</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 mt-1 text-yellow-400" />
                  <div>
                    <h4 className="font-semibold">Expert Craftsmanship</h4>
                    <p className="text-gray-400">Skilled professionals with attention to detail</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 mt-1 text-yellow-400" />
                  <div>
                    <h4 className="font-semibold">Mobile Service Available</h4>
                    <p className="text-gray-400">We come to you for ultimate convenience</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 mt-1 text-yellow-400" />
                  <div>
                    <h4 className="font-semibold">Always Open</h4>
                    <p className="text-gray-400">Flexible scheduling to fit your needs</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <Sparkles className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Paint Correction</h3>
                <p className="text-gray-300">
                  Multi-step polishing to remove swirl marks, light scratches and restore gloss.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Ceramic Coatings</h3>
                <p className="text-gray-300">
                  Long lasting protection — hydrophobic finish, UV resistance and easy maintenance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <Droplets className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Interior Detailing</h3>
                <p className="text-gray-300">Deep cleaning of upholstery, carpets, dashboard and odor removal.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Headlight Restoration</h3>
                <p className="text-gray-300">Wet sanding and polishing to restore clarity and safety.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <Car className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Wheel & Wheel-well</h3>
                <p className="text-gray-300">Decontamination, degreasing and finish protection for wheels & wells.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Scratch Repair</h3>
                <p className="text-gray-300">Minor scratch filling and touch-up services.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="bg-gray-800 rounded-lg overflow-hidden aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Paint%20Correction%20Results.jpg-yuhGFBSVwSf5FAc7JJsfGURSHwlvlq.jpeg"
                  alt="Professional paint correction with polishing machine"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center">Paint Correction Results</h3>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-gray-800 rounded-lg overflow-hidden aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ceramic%20Coating%20Protection.jpg-6MyTovWpIkKO6Z2YxBONy1jW4J8qTi.jpeg"
                  alt="Ceramic coating protection on white sports car"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center">Ceramic Coating Protection</h3>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-gray-800 rounded-lg overflow-hidden aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interior%20Deep%20Clean.jpg-Bi8RmKfaSzUwLpSKHgeLSN5S03lj57.jpeg"
                  alt="Professional interior detailing with cleaning equipment"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center">Interior Deep Clean</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 backdrop-blur-md border border-white/20">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Amazing work on my car's paint correction! The swirl marks are completely gone and it looks brand
                  new. Great prices too!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah M.</h4>
                    <p className="text-sm text-gray-400">Joplin, MO</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-md border border-white/20">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "The ceramic coating service was exceptional. My car stays cleaner longer and the water beading is
                  incredible. Highly recommend!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Mike R.</h4>
                    <p className="text-sm text-gray-400">Webb City, MO</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-md border border-white/20">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Professional service and attention to detail. They came to my location and did an amazing job on my
                  interior. Will definitely use again!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Jennifer L.</h4>
                    <p className="text-sm text-gray-400">Carthage, MO</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 sm:py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            {[
              {
                question: "How long does paint correction take?",
                answer:
                  "Paint correction typically takes 4-8 hours depending on the condition of your vehicle's paint and the level of correction needed. We'll provide a time estimate after inspecting your vehicle.",
              },
              {
                question: "Do you offer mobile services?",
                answer:
                  "Yes! We offer mobile detailing services where we come to your location. This is perfect for busy schedules and provides ultimate convenience. Contact us to check if we service your area.",
              },
              {
                question: "How long does ceramic coating last?",
                answer:
                  "Professional ceramic coatings typically last 2-5 years depending on the product used, maintenance, and environmental conditions. We use high-quality coatings and provide maintenance guidelines to maximize longevity.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept cash, credit cards, and digital payments. Payment is due upon completion of services. We'll provide a detailed invoice for all work performed.",
              },
              {
                question: "Do you provide free estimates?",
                answer:
                  "Yes, we provide free estimates for all our services. Contact us via phone, WhatsApp, or email with details about your vehicle and desired services, and we'll provide a competitive quote.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/20 shadow-lg shadow-green-500/5"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFaq(index)}>
                    <h3 className="text-base sm:text-lg font-semibold pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""}`}
                    />
                  </div>
                  {openFaq === index && (
                    <p className="text-gray-300 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Get Your Free Quote Today</h2>
              <p className="text-xl text-gray-300">
                Ready to transform your vehicle? Fill out the form below and we'll get back to you with a personalized
                quote.
              </p>
            </div>

            <Card className="bg-white/5 backdrop-blur-md border border-white/20 shadow-2xl shadow-green-500/20">
              <CardContent className="p-8">
                <form className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Full Name *</label>
                      <Input
                        placeholder="Enter your full name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Phone Number *</label>
                      <Input
                        placeholder="(417) 555-0123"
                        type="tel"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Email Address</label>
                      <Input
                        placeholder="your.email@example.com"
                        type="email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Vehicle Make & Model</label>
                      <Input
                        placeholder="e.g., 2020 Honda Civic"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Service Needed *</label>
                      <select
                        className="bg-white/10 border border-white/20 text-white p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-white/30"
                        required
                      >
                        <option value="" className="bg-gray-800 text-white">
                          Select Service
                        </option>
                        <option value="paint-correction" className="bg-gray-800 text-white">
                          Paint Correction
                        </option>
                        <option value="ceramic-coating" className="bg-gray-800 text-white">
                          Ceramic Coating
                        </option>
                        <option value="interior-detailing" className="bg-gray-800 text-white">
                          Interior Detailing
                        </option>
                        <option value="exterior-detailing" className="bg-gray-800 text-white">
                          Exterior Detailing
                        </option>
                        <option value="headlight-restoration" className="bg-gray-800 text-white">
                          Headlight Restoration
                        </option>
                        <option value="scratch-repair" className="bg-gray-800 text-white">
                          Scratch Repair
                        </option>
                        <option value="full-package" className="bg-gray-800 text-white">
                          Full Detail Package
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Preferred Date</label>
                      <Input type="date" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Location Preference</label>
                      <select className="bg-white/10 border border-white/20 text-white p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-white/30">
                        <option value="" className="bg-gray-800 text-white">
                          Select Location
                        </option>
                        <option value="mobile" className="bg-gray-800 text-white">
                          Mobile Service (My Location)
                        </option>
                        <option value="shop" className="bg-gray-800 text-white">
                          Drop-off at Shop
                        </option>
                        <option value="discuss" className="bg-gray-800 text-white">
                          Let's Discuss
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Additional Details</label>
                      <textarea
                        placeholder="Tell us about your vehicle's condition, specific concerns, or any special requests..."
                        rows={3}
                        className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2 pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-white text-black hover:bg-gray-200 text-lg py-3 shadow-lg shadow-green-500/25"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send My Quote Request
                    </Button>
                    <p className="text-center text-sm text-gray-400 mt-4">
                      We'll respond within 24 hours with your personalized quote and availability.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <Phone className="w-8 h-8 mx-auto mb-3 text-green-400" />
                  <h4 className="font-semibold mb-2">Call Us Now</h4>
                  <p className="text-gray-400 text-sm mb-2">417-501-9065</p>
                  <p className="text-gray-400 text-sm">940-337-2930</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <MessageCircle className="w-8 h-8 mx-auto mb-3 text-green-400" />
                  <h4 className="font-semibold mb-2">WhatsApp</h4>
                  <p className="text-gray-400 text-sm">Quick responses</p>
                  <p className="text-gray-400 text-sm">Send photos easily</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <Mail className="w-8 h-8 mx-auto mb-3 text-green-400" />
                  <h4 className="font-semibold mb-2">Email Us</h4>
                  <p className="text-gray-400 text-sm">auto.detailmo@gmail.com</p>
                  <p className="text-gray-400 text-sm">Detailed quotes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-black border-t border-gray-800 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logocar.jpg-PF1iVEzopHMpMrc3z7ddngSLIUOnh4.jpeg"
                alt="Affordable Auto Detailing Logo"
                width={200}
                height={80}
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400 mb-4 max-w-md">
                Professional vehicle detailing services in Joplin, Missouri. We specialize in paint corrections, ceramic
                coatings, and comprehensive detailing at budget-friendly prices.
              </p>
              <div className="flex items-center text-gray-400 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>3209 W Belle Center Rd, Joplin, MO</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Clock className="w-4 h-4 mr-2" />
                <span>Always Open - Flexible Scheduling</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Paint Correction</li>
                <li>Ceramic Coatings</li>
                <li>Interior Detailing</li>
                <li>Headlight Restoration</li>
                <li>Scratch Repair</li>
                <li>Mobile Service</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+1 417-501-9065</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+1 940-337-2930</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>auto.detailmo@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>WhatsApp Available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2024 Affordable Auto Detailing. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Follow us:</span>
              <a
                href="https://www.facebook.com/profile.php?id=61575720031679"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
