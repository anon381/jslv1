"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Cross,
  Play,
  MapPin,
  Clock,
  Users,
  Heart,
  BookOpen,
  Globe,
  Youtube,
  Instagram,
  Facebook,
  Send,
  Mail,
  Phone,
  Calendar,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function SpringOfLifeChurch() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Cross className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">JSL Church</h1>
                <p className="text-sm text-gray-600">Jesus the Spring of Life International</p>
              </div>
            </div>
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/sermons" className="text-gray-700 hover:text-blue-600 transition-colors">
                Sermons
              </Link>
              <Link href="#visit" className="text-gray-700 hover:text-blue-600 transition-colors">
                Visit
              </Link>
              <Link href="#connect" className="text-gray-700 hover:text-blue-600 transition-colors">
                Connect
              </Link>
            </nav>
            {/* Hamburger for mobile */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-blue-100 text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
            <nav className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 flex flex-col space-y-3 animate-fade-in">
              <Link href="/" className="text-blue-600 font-medium" onClick={() => setMobileNavOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setMobileNavOpen(false)}>
                About
              </Link>
              <Link href="/sermons" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setMobileNavOpen(false)}>
                Sermons
              </Link>
              <Link href="#visit" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setMobileNavOpen(false)}>
                Visit
              </Link>
              <Link href="#connect" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setMobileNavOpen(false)}>
                Connect
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Encounter Jesus.
              <br />
              <span className="text-blue-600">Grow in the Word.</span>
              <br />
              Impact the World.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Join us for spirit-filled teachings, vibrant community, and engaging online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => window.open("https://maps.app.goo.gl/vx68y7VBkCRg3PS47", "_blank")}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Visit Us This Sunday
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                onClick={() => window.open("https://www.youtube.com/@pastorzenebechgessessejsltvwor", "_blank")}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Latest Sermon
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 shadow-lg hover:shadow-purple-200 transition-all duration-300"
                onClick={() => document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Globe className="w-5 h-5 mr-2" />
                Follow Us Online
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">About JSL Church</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              We are a Bible-teaching, Christ-centered church committed to proclaiming Jesus Christ and preaching the
              word of God. Founded by Pastor Zenebech Gessesse and her husband Engineer Luelkal Kassie Eleven years ago,
              we are dedicated to spreading the Gospel and building a strong community of believers.
            </p>
            <div className="mb-6 sm:mb-8">
              <Link href="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Learn More About Our Story
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 sm:mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Scripture</h3>
                <p className="text-gray-600 text-sm">Grounded in Biblical truth</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Discipleship</h3>
                <p className="text-gray-600 text-sm">Growing together in faith</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Worship</h3>
                <p className="text-gray-600 text-sm">Heartfelt praise and prayer</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Outreach</h3>
                <p className="text-gray-600 text-sm">Serving our community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sermons Section */}
      <section id="sermons" className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">Media Teaching</h2>
            <p className="text-base sm:text-lg text-gray-600">Dive deeper into God's Word with our weekly teachings</p>
          </div>

          {/* Featured Sermon */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-gray-200">
                <Image
                  src="/gallery/home_page_photo_1.jpg"
                  alt="Featured sermon"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button size="lg" className="bg-white/90 text-gray-800 hover:bg-white" onClick={() => window.open("https://youtu.be/MsSFGIEsRCw?si=s4spPXCiMM22hUK7", "_blank")}>
                    <Play className="w-6 h-6 mr-2" />
                    Watch Now
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3">From Our Previous Consecutive Teaching Collection</Badge>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Book of Revelation</h3>
                <p className="text-gray-600 mb-4">
                Joining Engineer Pastor Luelkal Kassie to walk through the book of Revelation, line by line
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>January 21, 2022</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sermon Library Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {[
              { title: "The Power of Prayer", topic: "Prayer", image: "/gallery/prayer.jpg", date: "Jan 14" },
              { title: "Living with Purpose", topic: "Faith", image: "/gallery/faith.jpg", date: "Jan 7" },
              { title: "God's Grace in Action", topic: "Grace", image: "/gallery/grace.jpg", date: "Dec 31" },
            ].map((sermon, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-video bg-gray-200">
                  <Image src={sermon.image} alt={sermon.title} className="object-cover" fill />
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2">
                    {sermon.topic}
                  </Badge>
                  <h4 className="font-semibold text-gray-800 mb-1">{sermon.title}</h4>
                  <p className="text-sm text-gray-500">{sermon.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/sermons">
              <Button variant="outline" size="lg">
                Explore More Teachings
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">Stay Connected Online</h2>
            <p className="text-base sm:text-lg text-gray-600">Follow our journey and join the conversation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Youtube className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">YouTube</h3>
              <p className="text-gray-600 text-sm mb-4">Weekly sermons, Bible studies, and worship sessions</p>
              <Button
                variant="outline"
                size="sm"
                className="border-red-600 text-red-600 hover:bg-red-50"
                onClick={() => window.open("https://www.youtube.com/@pastorzenebechgessessejsltvwor", "_blank")}
              >
                Subscribe
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-8 h-8 text-blue-500"
                >
                  <path
                    d="M21.944 4.186a1.5 1.5 0 0 0-1.59-.217L3.6 11.13a1.5 1.5 0 0 0 .13 2.77l3.77 1.36 1.36 4.09a1.5 1.5 0 0 0 2.74.13l2.13-3.77 3.77 1.36a1.5 1.5 0 0 0 2.77-.13l3.77-13.13a1.5 1.5 0 0 0-.13-2.77z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Telegram</h3>
              <p className="text-gray-600 text-sm mb-4">Daily inspiration, behind-the-scenes, and community moments</p>
              <Button variant="outline" size="sm" className="border-blue-800 text-blue-800 hover:bg-blue-50" onClick={() => window.open("https://t.me/JSLCHURCHOFFICIALCHANNEL", "_blank")}>
                Follow
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Facebook className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Facebook</h3>
              <p className="text-gray-600 text-sm mb-4">Event updates, live services, and community discussions</p>
              <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50" onClick={() => window.open("https://www.facebook.com/JSLTVWORLDWIDE?mibextid=ZbWKwL", "_blank")}>
                Like Page
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section id="visit" className="py-12 sm:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">Plan Your Visit</h2>
              <p className="text-base sm:text-lg text-gray-700">
                We'd love to meet you! Whether you're new to faith, just visiting, or looking for a church home — you're
                welcome here.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Service Times</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium">Sunday Morning</p>
                      <p className="text-gray-600">10:00 AM - 01:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium">Monday Evening</p>
                      <p className="text-gray-600">9:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium">Tuesday Morning</p>
                      <p className="text-gray-600">10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium">Thuresday Evening</p>
                      <p className="text-gray-600">05:00 PM - 08:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">
                        Addis Ketema Sub City, Asko-Addis Sefer Lizmender, Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">What to Expect</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Come as you are - casual dress is perfectly fine
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Free parking available on-site
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Children's programs during service
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Friendly greeters to help you feel at home
                  </li>
                </ul>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' })}>
                Let Us Know You're Coming
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">Impact Stories</h2>
            <p className="text-base sm:text-lg text-gray-600">Hear how God is working in our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                quote:
                  "Since joining this church, I've grown deeper in my faith than I ever imagined possible.",
                name: " Zerihun",
                role: "NEHMIA member",
              },
              {
                quote: "The teaching here helped me understand the Bible in a whole new way.",
                name: "Yohannes ",
                role: "Youth Leader",
              },
              {
                quote: "It's more than just a church — it's a family",
                name: " DR. Saron",
                role: "NEHMIA member",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <blockquote className="text-gray-700 mb-4 italic">"{testimonial.quote}"</blockquote>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">Connect & Engage</h2>
              <p className="text-base sm:text-lg text-gray-600">We'd love to hear from you and keep you updated</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Contact Form */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div>
                    <Textarea placeholder="Prayer requests, questions, or how we can help..." rows={4} />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Newsletter Signup */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Stay Updated</h3>
                <p className="text-gray-600 mb-6">
                  Subscribe to our newsletter for church updates, upcoming events, and weekly teachings.
                </p>
                <form className="space-y-4">
                  <div>
                    <Input type="email" placeholder="Your Email Address" />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Mail className="w-4 h-4 mr-2" />
                    Subscribe to Newsletter
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3">Contact Info</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      +251 926 141 414
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      +251 947 153 805
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      jslicasko@gmail.com
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Kolfe Keraniyo Sub City, Asko-Addis Sefer Condominium Area, Addis Ababa, Ethiopia
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Give Section */}
      <section className="py-12 sm:py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Partner with Us</h2>
            <p className="text-base sm:text-xl mb-6 sm:mb-8 text-blue-100">Help us advance the Kingdom through your generous giving</p>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100" onClick={() => window.open("https://www.facebook.com/JSLTVWORLDWIDE?mibextid=ZbWKwL", "_blank")}>
              <Heart className="w-5 h-5 mr-2" />
              Give Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                  <Link href="#visit" className="hover:text-white transition-colors">
                    Plan a Visit
                  </Link>
                </li>
                <li>
                  <Link href="#connect" className="hover:text-white transition-colors">
                    Contact
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
