"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cross, Play, Search, Calendar, Clock, Heart, Youtube, ExternalLink, Filter, ArrowLeft, Facebook } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function SermonsPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [activePage, setActivePage] = useState("sermons")
  // Set active page based on current route on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path === "/") setActivePage("home");
      else if (path.startsWith("/about")) setActivePage("about");
      else if (path.startsWith("/sermons")) setActivePage("sermons");
      else if (path.startsWith("/connect")) setActivePage("connect");
      // For anchor navigation
      else if (window.location.pathname === "/visit") setActivePage("visit");
      // Already correct, no hash logic present
    }
  }, []);

  const sermonCategories = [
    "All Sermons",
    "Faith & Trust",
    "Prayer & Worship",
    "Biblical Teaching",
    "Christian Living",
    "Prophecy",
    "Healing",
    "Family & Relationships",
  ]

  const featuredSermons = [
    {
      title: "Walking in Divine Purpose",
      description: "Pastor Zenebech teaches about discovering and fulfilling God's unique purpose for your life.",
      date: "January 21, 2024",
      duration: "52 minutes",
      category: "Faith & Trust",
      thumbnail: "/gallery/sermon_1.jpg",
      youtubeUrl: "https://youtu.be/0dqvclUuvQY?si=RnBDXNL_gfrT4FGt"
    },
    {
      title: "Book OF Revelation",
      description: "Engineer Pastor Luelkal Kassie teaches that the Book of Revelation reveals the divine blueprint of history's final chapter, showcasing Christ's ultimate victory and God's eternal plan for humanity.",
      date: "January 14, 2024",
      duration: "45 minutes",
      category: "Prayer & Worship",
      thumbnail: "/gallery/home_page_photo_1.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=MsSFGIEsRCw&list=PLnj9eR5ZfgXUQAs8CcsjBNWhtITae8wks"
    },
    {
      title: "God will make it happen",
      description: "Trust in God's timing and power—He will surely bring His promises to pass.",
      date: "January 7, 2024",
      duration: "48 minutes",
      category: "Christian Living",
      thumbnail: "/gallery/happen.jpg",
      youtubeUrl: "https://youtu.be/yfdhn2KYfs0?si=HTCGHXA-h9A0phRL"
    },
    {
      title: "God's Promises Never Fail",
      description: "Exploring the faithfulness of God and how His promises sustain us through every season.",
      date: "December 31, 2023",
      duration: "55 minutes",
      category: "Biblical Teaching",
      thumbnail: "/gallery/trust.jpg",
      youtubeUrl: "https://youtu.be/Un87zxEKRkk?si=clEXT32nu4vmY6yu"
    },
    {
      title: "Healing and Restoration",
      description: "Pastor Zenebech shares powerful insights on God's heart for healing and wholeness.",
      date: "December 24, 2023",
      duration: "42 minutes",
      category: "Healing",
      thumbnail: "/gallery/sermon_2.jpg",
      youtubeUrl: "https://youtu.be/DeUzA6wiL8k?si=oX3fxKHGiA8fRzO3"
    },
    {
      title: "Year of Upgrading",
      description: "This year marks a season of divine upgrading—God is elevating every area of our lives to new heights.",
      date: "December 17, 2023",
      duration: "38 minutes",
      category: "Family & Relationships",
      thumbnail: "/gallery/upgrade.jpg",
      youtubeUrl: "https://youtu.be/7bT5wadMHWo?si=8qGTcStN3zogc-uN"
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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
            {/* Desktop-Nav */}
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
          {/* Mobile Nav Drawer */}
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
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 sm:mb-6 text-base sm:text-lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">Sermons & Teachings</h1>
            <p className="text-base sm:text-xl text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Dive deeper into God's Word with Pastor Zenebech Gessesse's powerful teachings. Experience
              life-transforming messages that will strengthen your faith and guide your spiritual journey.
            </p>

            {/* YouTube Channel CTA */}
            <div
              className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-2xl mx-auto relative overflow-hidden"
              style={{
                backgroundImage: "url('/gallery/banner.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-white/80 z-0"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <Youtube className="w-8 h-8 text-red-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-extrabold text-gray-900 drop-shadow-md">JSL TV Word Channel</h3>
                    <p className="text-gray-800 font-semibold drop-shadow">Pastor Zenebech Gessesse</p>
                  </div>
                </div>
                <p className="text-gray-900 font-bold text-lg mb-4 drop-shadow-md">
                  Subscribe to our YouTube channel for the latest sermons, live services, and special teachings.
                </p>
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg"
                  onClick={() => window.open("https://www.youtube.com/@pastorzenebechgessessejsltvwor", "_blank")}
                >
                  <Youtube className="w-5 h-5 mr-2" />
                  Visit YouTube Channel
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      {/* <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input placeholder="Search sermons by title, topic, or scripture..." className="pl-10 py-3" />
              </div>
              <Button variant="outline" className="flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div> */}

            {/* Category Tags */}
            {/* <div className="flex flex-wrap gap-2">
              {sermonCategories.map((category, index) => (
                <Badge
                  key={index}
                  variant={index === 0 ? "default" : "secondary"}
                  className={`cursor-pointer hover:bg-blue-100 ${index === 0 ? "bg-blue-600 text-white" : ""}`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Featured Sermon */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-4">Latest Message</h2>
              <p className="text-base sm:text-lg text-gray-600">Watch our most recent sermon from Pastor Zenebech</p>
            </div>

            <Card className="overflow-hidden max-w-4xl mx-auto">
              <div className="relative aspect-video bg-gray-200">
                <Image src="/gallery/sermon_1.jpg" alt="Latest sermon" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white/90 text-gray-800 hover:bg-white"
                    onClick={() => window.open("https://www.youtube.com/@pastorzenebechgessessejsltvwor", "_blank")}
                  >
                    <Play className="w-6 h-6 mr-2" />
                    Watch on YouTube
                  </Button>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <Badge className="bg-blue-600">Latest Message</Badge>
                  <Badge variant="secondary">Faith & Trust</Badge>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">Walking in Divine Purpose</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  In this powerful message, Pastor Zenebech Gessesse explores how we can discover and walk in God's
                  unique purpose for our lives. Learn how to align your steps with His divine plan and experience the
                  fulfillment that comes from living according to His will.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>January 21, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>52 minutes</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2 sm:mt-0"
                  onClick={() => window.open("https://www.youtube.com/@pastorzenebechgessessejsltvwor", "_blank")}
                >
                  <Youtube className="w-4 h-4 mr-2" />
                  Watch on YouTube
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sermon Library */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Sermon Library</h2>
              <p className="text-gray-600">Explore our collection of life-changing messages</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredSermons.map((sermon, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative aspect-video bg-gray-200">
                    <Image
                      src={sermon.thumbnail || "/placeholder.svg"}
                      alt={sermon.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Button
                        size="sm"
                        className="bg-white/90 text-gray-800 hover:bg-white"
                        onClick={() => window.open(sermon.youtubeUrl, "_blank")}
                      >
                        <Play className="w-4 h-4 mr-1" />
                        Watch
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {sermon.category}
                    </Badge>
                    <h4 className="font-bold text-gray-800 mb-2 line-clamp-2">{sermon.title}</h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{sermon.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{sermon.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{sermon.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("https://www.youtube.com/@pastorzenebechgessessejsltvwor", "_blank")}
              >
                <Youtube className="w-5 h-5 mr-2" />
                View All Sermons on YouTube
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pastor Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Pastor Zenebech Gessesse</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Pastor Zenebech Gessesse is a passionate teacher of God's Word, dedicated to helping believers grow in
                  their faith and discover their divine purpose. With years of ministry experience, she brings deep
                  biblical insights and practical wisdom to every message.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Her heart for international ministry has led to the establishment of JSL Church as a global community
                  where people from all nations can encounter Jesus and be transformed by His love.
                </p>
                <div className="flex items-center space-x-4">
                  <Button
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open("https://www.youtube.com/@pastorzenebechgessessejsltvwor", "_blank")}
                  >
                    <Youtube className="w-4 h-4 mr-2" />
                    Follow on YouTube
                  </Button>
                  
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden p-2 transition-all duration-300 hover:shadow-2xl hover:scale-105" style={{background: 'linear-gradient(135deg, #3b82f6, #a21caf, #f59e42, #10b981)'}}>
                  <div className="w-full h-full rounded-lg overflow-hidden bg-white shadow-xl transition-all duration-300">
                    <Image
                      src="/gallery/mom.jpg"
                      alt="Pastor Zenebech Gessesse"
                      fill
                      className="object-cover rounded-lg border-4 border-white transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2>
            <p className="text-xl mb-8 text-blue-100">
              Never miss a sermon! Subscribe to our YouTube channel and be notified of new teachings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => window.open("https://www.youtube.com/@pastorzenebechgessessejsltvwor", "_blank")}
              >
                <Youtube className="w-5 h-5 mr-2" />
                Subscribe on YouTube
              </Button>
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" onClick={() => window.open("https://maps.app.goo.gl/vx68y7VBkCRg3PS47", "_blank")}>
                <Calendar className="w-5 h-5 mr-2" />
                Join Us Sunday
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
                  <Link href="/visit" className="hover:text-white transition-colors">
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
              <h4 className="font-semibold mb-4 text-shadow-lg shadow-purple-200">Follow Us</h4>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-400 hover:text-white p-2"
                  onClick={() => window.open("https://www.youtube.com/@pastorzenebechgessessejsltvwor", "_blank")}
                >
                  <Youtube className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2" onClick={() => window.open("https://t.me/JSLCHURCHOFFICIALCHANNEL", "_blank")}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-5 h-5" style={{ color: 'rgb(29, 155, 209)' }}>
                    <path d="M21.944 4.186a1.5 1.5 0 0 0-1.59-.217L3.6 11.13a1.5 1.5 0 0 0 .13 2.77l3.77 1.36 1.36 4.09a1.5 1.5 0 0 0 2.74.13l2.13-3.77 3.77 1.36a1.5 1.5 0 0 0 2.77-.13l3.77-13.13a1.5 1.5 0 0 0-.13-2.77z" fill="currentColor" />
                  </svg>
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2" onClick={() => window.open("https://www.facebook.com/JSLTVWORLDWIDE?mibextid=ZbWKwL", "_blank")}>
                  <Facebook className="w-5 h-5" />
                </Button>
                </div>
             </div>
            
          </div>
        
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Jesus the Spring of Life International Church. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
