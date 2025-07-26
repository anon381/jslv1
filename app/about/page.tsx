"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Cross,
  ArrowLeft,
  Calendar,
  Users,
  Heart,
  BookOpen,
  Globe,
  MapPin,
  Star,
  Award,
  Building,
  Tv,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeTimeline, setActiveTimeline] = useState(0)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [activePage, setActivePage] = useState("about")
  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path === "/") setActivePage("home");
      else if (path.startsWith("/about")) setActivePage("about");
      else if (path.startsWith("/sermons")) setActivePage("sermons");
      else if (path.startsWith("/connect")) setActivePage("connect");
      else if (window.location.pathname === "/visit") setActivePage("visit");
    }
  }, []);

  const photoGallery = [
    {
      src: "/gallery/photo_2025-07-07_22-21-41.jpg",
      alt: "Church founding ceremony",
      caption: "Ceremony of JSL Church with Pastor Zenebech and Engineer Luelkal",
    },
    {
      src: "/gallery/gather.jpg",
      alt: " Sunday service",
      caption: "Our first Sunday service in our new place",
    },
    {
      src: "/gallery/new_year.jpg",
      alt: "New Year Events ",
      caption: "new year event in our new church ",
    },
    {
      src: "/gallery/compound.jpg",
      alt: "Church building Compound",
      caption: "Our beautiful church building Compund in Asko-Addis Sefer",
    },
    {
      src: "/gallery/baptism.jpg",
      alt: "Baptism ceremony",
      caption: "Baptism ceremony - new believers joining the family",
    },
    {
      src: "/gallery/youthh.jpg",
      alt: "Youth ministry",
      caption: "Active youth ministry programs",
    },
  ]

  const timeline = [
    {
      year: "2014",
      title: "Church Founded",
      description: "Pastor Zenebech Gessesse and Engineer Luelkal Kassie planted JSL Church in Addis Ababa",
      icon: <Building className="w-6 h-6" />,
      details:
        "With a vision to proclaim Jesus Christ and preach the word of God, our founders established JSL Church in the heart of Kolfe Keraniyo Sub City.",
    },
    {
      year: "2016",
      title: "First Branch Opened",
      description: "Gefersa branch established to serve the growing community",
      icon: <MapPin className="w-6 h-6" />,
      details:
        "As our congregation grew, we opened our first branch in Agona to better serve families in the area with afternoon services.",
    },
    {
      year: "2017",
      title: "Digital Ministry Expansion",
      description: "YouTube channel and online presence established",
      icon: <Globe className="w-6 h-6" />,
      details:
        "Embracing digital evangelism, we launched our YouTube channel and enhanced our online presence to reach the global community.",
    },
    {
      year: "2021",
      title: "JSL Television Network",
      description: "Launched our television ministry to reach more souls",
      icon: <Tv className="w-6 h-6" />,
      details:
        "Expanding our reach beyond physical walls, we launched JSL Television Network to broadcast the Gospel to homes across Ethiopia.",
    },
    
  ]

  const achievements = [
    { number: "500+", label: "Active Members", icon: <Users className="w-8 h-8" /> },
    { number: "11", label: "Years of Ministry", icon: <Calendar className="w-8 h-8" /> },
    { number: "2", label: "Church Branches", icon: <Building className="w-8 h-8" /> },
    { number: "1000+", label: "Lives Touched", icon: <Heart className="w-8 h-8" /> },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photoGallery.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + photoGallery.length) % photoGallery.length)
  }

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900">
        {/* Header */}
        <header className="bg-transparent backdrop-blur-sm border-b border-blue-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Cross className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">JSL Church</h1>
                <p className="text-sm text-blue-200">Jesus the Spring of Life International</p>
              </div>
            </div>
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className={`${activePage === "home" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"} transition-colors`} onClick={() => setActivePage("home")}>Home</Link>
              <Link href="/about" className={`${activePage === "about" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"} transition-colors`} onClick={() => setActivePage("about")}>About</Link>
              <Link href="/sermons" className={`${activePage === "sermons" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"} transition-colors`} onClick={() => setActivePage("sermons")}>Sermons</Link>
              <Link href="/visit" className={`${activePage === "visit" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"} transition-colors`} onClick={() => setActivePage("visit")}>Visit</Link>
              <Link href="/connect" className={`${activePage === "connect" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"} transition-colors`} onClick={() => setActivePage("connect")}>Connect</Link>
            </nav>
            {/* Hamburger for mobile */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-blue-500/30 text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              onClick={() => setMobileNavOpen((v) => !v)}
              aria-label="Open navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={mobileNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          {/* Mobile Nav-Drawer */}
          {mobileNavOpen && (
            <nav className="md:hidden mt-4 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-2xl border border-blue-500/20 p-4 flex flex-col space-y-3 animate-fade-in">
              <Link href="/" className={`${activePage === "home" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"} transition-colors`} onClick={() => { setActivePage("home"); setMobileNavOpen(false); }}>Home</Link>
              <Link href="/about" className={`${activePage === "about" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"} transition-colors`} onClick={() => { setActivePage("about"); setMobileNavOpen(false); }}>About</Link>
              <Link href="/sermons" className={`${activePage === "sermons" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"} transition-colors`} onClick={() => { setActivePage("sermons"); setMobileNavOpen(false); }}>Sermons</Link>
              <Link href="/visit" className={`${activePage === "visit" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"} transition-colors`} onClick={() => { setActivePage("visit"); setMobileNavOpen(false); }}>Visit</Link>
              <Link href="/connect" className={`${activePage === "connect" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"} transition-colors`} onClick={() => { setActivePage("connect"); setMobileNavOpen(false); }}>Connect</Link>
            </nav>
          )}
        </div>
      </header>

        {/* Hero Section */}
        <section className="relative py-8 lg:py-12 overflow-hidden z-10 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900">
          <div className="relative container mx-auto px-4 z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h1>
              <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
                Discover the journey of JSL Church - from a vision in the hearts of two faithful servants to a thriving
                community proclaiming Jesus Christ across Ethiopia and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-16 relative z-10 overflow-hidden bg-gradient-to-tl from-blue-900 via-slate-900 to-purple-900">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Founders</h2>
                <p className="text-lg text-white/80">Meet the visionary leaders who planted JSL Church</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                        <Heart className="w-8 h-8 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black">Pastor Zenebech Gessesse</h3>
                        <p className="text-black/80">Senior Pastor & Founder</p>
                      </div>
                    </div>
                    <p className="text-black leading-relaxed">
                      A passionate teacher of God's Word with a heart for evangelism and discipleship. Pastor Zenebech has
                      dedicated her life to proclaiming Jesus Christ and building strong communities of faith.
                    </p>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <Building className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black">Engineer Luelkal Kassie</h3>
                        <p className="text-black/80">Co-Founder & Administrator</p>
                      </div>
                    </div>
                    <p className="text-black leading-relaxed">
                      Bringing professional expertise and administrative excellence to church operations. Engineer Luelkal
                      ensures the church runs smoothly while supporting the ministry vision.
                    </p>
                  </Card>
                </div>

                <div className="relative">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/gallery/photo_2025-07-07_22-21-41.jpg"
                      alt="Pastor Zenebech and Engineer Luelkal"
                      fill
                      className="object-cover"
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600 drop-shadow-[0_0_8px_rgba(37,99,235,0.7)]">11</p>
                      <p className="text-sm text-black/80">Years of Ministry</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Timeline */}
        <section className="py-16 overflow-hidden min-h-[70vh] relative z-10 bg-gradient-to-r from-blue-900 via-slate-800 to-blue-700">
          <Parallax speed={-80}>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white z-0"></div>
          </Parallax>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey</h2>
                <p className="text-center text-lg font-bold text-blue-600 drop-shadow-[0_0_8px_rgba(37,99,235,0.7)] mb-8">
                  Click on each milestone to learn more about our growth
                </p>
              </div>

              <div className="relative max-h-[500px] overflow-y-auto md:max-h-none md:overflow-visible">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-2 md:w-1 h-full bg-blue-200"></div>

                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                    >
                      {/* Timeline Node */}
                      <>
                        <div
                          className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white shadow-lg cursor-pointer transition-all duration-300 ${
                            activeTimeline === index ? "bg-blue-600 scale-110" : "bg-blue-400 hover:bg-blue-500"
                          }`}
                          onClick={() => setActiveTimeline(index)}
                          style={{ zIndex: 2 }}
                        >
                          <div className="flex items-center justify-center h-full text-white">{item.icon}</div>
                        </div>
                      </>

                      {/* Content Card */}
                      <Card
                        className={`w-full max-w-[90vw] ml-0 md:w-5/12 md:max-w-none md:ml-0 cursor-pointer transition-all duration-300 relative ${
                          activeTimeline === index ? "shadow-xl scale-105" : "hover:shadow-lg"
                        }`}
                        onClick={() => setActiveTimeline(index)}
                      >
                        <CardContent className="p-4 sm:p-6 relative">
                          {/* On mobile, icon at top-left inside card */}
                          <span className="block md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white text-2xl z-10">
                            {item.icon}
                          </span>
                          <Badge className="mb-3">{item.year}</Badge>
                          <h3 className="text-lg sm:text-xl font-bold text-black mb-2">{item.title}</h3>
                          <p className="text-black/80 mb-3">{item.description}</p>
                          {activeTimeline === index && (
                            <div className="mt-4 p-4 bg-blue-900/60 rounded-lg">
                              <p className="text-white text-sm">{item.details}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-16 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Photo Gallery</h2>
                <p className="text-lg text-white/80">Moments that tell our story</p>
              </div>

              {/* Main Gallery */}
              <div className="relative mb-8">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={photoGallery[currentSlide].src || "/placeholder.svg"}
                    alt={photoGallery[currentSlide].alt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Navigation Arrows */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                  onClick={nextSlide}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>

                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg">
                  <p className="text-sm">{photoGallery[currentSlide].caption}</p>
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="grid grid-cols-6 gap-2">
                {photoGallery.map((photo, index) => (
                  <div
                    key={index}
                    className={`aspect-video bg-gray-200 rounded-lg cursor-pointer overflow-hidden transition-all duration-300 border-[2px] border-white ${
                      currentSlide === index ? "ring-2 ring-blue-600 scale-105" : "scale-105 hover:scale-110 hover:shadow-xl hover:z-10"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  >
                    <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="text-center mt-8 mb-12">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            onClick={() => window.open("https://www.facebook.com/JSLTVWORLDWIDE?mibextid=ZbWKwL", "_blank")}
          >
            Explore More
          </Button>
        </div>

        {/* Achievements Counter */}
        <section className="py-16 bg-gradient-to-tr from-blue-900 via-slate-800 to-blue-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
                <p className="text-xl text-blue-100">God's faithfulness through the years</p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => {
                  const [count, setCount] = useState(0)
                  useEffect(() => {
                    let start = 0
                    let end = parseInt(achievement.number.replace(/\D/g, "")) || 0
                    let duration = 3000
                    let startTime = performance.now()
                    let step = (now: number) => {
                      let progress = Math.min((now - startTime) / duration, 1)
                      setCount(Math.floor(progress * end))
                      if (progress < 1) {
                        requestAnimationFrame(step)
                      } else {
                        setCount(end)
                      }
                    }
                    requestAnimationFrame(step)
                  }, [achievement.number])
                  return (
                    <Card
                      key={index}
                      className="bg-white/10 border-white/20 text-center p-6 hover:bg-white/20 transition-colors"
                    >
                      <div className="flex justify-center mb-4 text-black">{achievement.icon}</div>
              <div className="text-3xl font-bold mb-2 text-black">{achievement.number.match(/\D/) ? `${count}+` : count}</div>
              <div className="text-black/80">{achievement.label}</div>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gradient-to-bl from-blue-900 via-slate-800 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                    </div>
                <h3 className="text-2xl font-bold text-black">Our Mission</h3>
                  </div>
                  <p className="text-black leading-relaxed mb-6">
                    To proclaim Jesus Christ and preach the word of God, building a strong community of believers who are
                    equipped to serve and make disciples in Ethiopia and beyond.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      <span className="text-black/80">Proclaiming Jesus Christ</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      <span className="text-black/80">Preaching the Word of God</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      <span className="text-black/80">Building Strong Communities</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <Globe className="w-6 h-6 text-purple-600" />
                    </div>
                <h3 className="text-2xl font-bold text-black">Our Vision</h3>
                  </div>
                  <p className="text-black leading-relaxed mb-6">
                    To be a beacon of hope and transformation in Addis Ababa and beyond, reaching every nation through the
                    power of the Gospel and digital ministry.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-black/80">Local Community Impact</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-black/80">International Reach</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-black/80">Digital Ministry Excellence</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">What People Say</h2>

              <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50">
                <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <blockquote className="text-xl text-black italic mb-6 leading-relaxed">
                  "JSL Church has been a blessing to our community. Pastor Zenebech's teachings have transformed countless
                  lives, and the church's commitment to both local and digital ministry is inspiring."
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-black">Community Leader</p>
                    <p className="text-black/80">Addis Ketema Sub City</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Story</h2>
              <p className="text-xl mb-8 text-blue-100">
                Be part of what God is doing through JSL Church. Your story can be the next chapter in our journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-red-600 hover:bg-red-700 text-white" onClick={() => window.open("https://maps.app.goo.gl/vx68y7VBkCRg3PS47", "_blank")}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Visit Us Sunday
                </Button>
                
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Cross className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">JSL Church</h3>
                    <p className="text-sm text-gray-400">Jesus the Spring of Life International</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Active in the World. A Church That Teaches, Reaches, and Welcomes All.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/sermons" className="hover:text-white transition-colors">
                      Sermons
                    </Link>
                  </li>
                  <li>
                    <Link href="/#visit" className="hover:text-white transition-colors">
                      Plan a Visit
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Service Times</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Sunday Morning: 10:00 AM - 01:30 PM</li>
  <li>Monday Morning: 9:00 AM - 12:00 PM</li>
  <li>Tuesday Morning: 10:00 AM - 5:00 PM</li>
  <li>Thursday Evening: 05:00 PM - 08:30 PM</li>
  <li>Addis Ketema Sub City, Asko-Addis Sefer Lizmender, Addis Ababa, Ethiopia</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>+251 926 141 414</li>
                  <li>jslicasko@gmail.com</li>
                  <li>Addis Ababa, Ethiopia</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} Jesus the Spring of Life International Church. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </ParallaxProvider>
  )
}
