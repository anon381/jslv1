"use client"
// This is a client component
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Toaster } from "@/components/ui/sonner"
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
import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"

// Form validation schemas
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export default function SpringOfLifeChurch() {
  // About section animation controls
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const leftControls = useAnimation()
  const rightControls = useAnimation()

  useEffect(() => {
    if (aboutInView) {
      leftControls.start({
        y: -80,
        opacity: 1,
        transition: { duration: 4, type: "spring", bounce: 0.4 }
      })
      rightControls.start({
        y: 80,
        opacity: 1,
        transition: { duration: 4, type: "spring", bounce: 0.4 }
      })
    }
  }, [aboutInView, leftControls, rightControls])
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [isSubmittingContact, setIsSubmittingContact] = useState(false)
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false)
  // Typing effect for hero headline
  const heroTexts = [
    "Encounter Jesus.",
    "Grow in the Word.",
    "Impact the World."
  ];
  const [typedText, setTypedText] = useState("");
  const [currentTextIdx, setCurrentTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  useEffect(() => {
    if (currentTextIdx >= heroTexts.length) return;
    if (charIdx < heroTexts[currentTextIdx].length) {
      const timeout = setTimeout(() => {
        setTypedText(heroTexts[currentTextIdx].slice(0, charIdx + 1));
        setCharIdx(charIdx + 1);
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      // Pause before next line
      const timeout = setTimeout(() => {
        setCurrentTextIdx(currentTextIdx + 1);
        setCharIdx(0);
        setTypedText("");
      }, 900);
      return () => clearTimeout(timeout);
    }
  }, [charIdx, currentTextIdx]);

  // Contact form
  const contactForm = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  // Newsletter form
  const newsletterForm = useForm({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: '',
    },
  })

  // Handle contact form submission
  const onSubmitContact = async (data: z.infer<typeof contactSchema>) => {
    console.log('Contact form submitted:', data)
    alert('Contact form submitted successfully!')
    setIsSubmittingContact(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      console.log('Contact form response:', result)

      if (result.success) {
        toast.success(result.message)
        contactForm.reset()
      } else {
        toast.error(result.message || 'Something went wrong')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmittingContact(false)
    }
  }

  // Handle newsletter subscription
  const onSubmitNewsletter = async (data: z.infer<typeof newsletterSchema>) => {
    console.log('Newsletter form submitted:', data)
    alert('Newsletter form submitted successfully!')
    setIsSubmittingNewsletter(true)
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      console.log('Newsletter form response:', result)

      if (result.success) {
        toast.success(result.message)
        newsletterForm.reset()
      } else {
        toast.error(result.message || 'Something went wrong')
      }
    } catch (error) {
      console.error('Newsletter form error:', error)
      toast.error('Failed to subscribe. Please try again.')
    } finally {
      setIsSubmittingNewsletter(false)
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
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
              <Link href="/" className="text-blue-400 font-medium hover:text-blue-300 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="/sermons" className="text-gray-300 hover:text-blue-400 transition-colors">
                Sermons
              </Link>
              <Link href="#visit" className="text-gray-300 hover:text-blue-400 transition-colors">
                Visit
              </Link>
              <Link href="#connect" className="text-gray-300 hover:text-blue-400 transition-colors">
                Connect
              </Link>
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
              <Link href="/" className="text-blue-400 font-medium hover:text-blue-300 transition-colors" onClick={() => setMobileNavOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors" onClick={() => setMobileNavOpen(false)}>
                About
              </Link>
              <Link href="/sermons" className="text-gray-300 hover:text-blue-400 transition-colors" onClick={() => setMobileNavOpen(false)}>
                Sermons
              </Link>
              <Link href="#visit" className="text-gray-300 hover:text-blue-400 transition-colors" onClick={() => setMobileNavOpen(false)}>
                Visit
              </Link>
              <Link href="#connect" className="text-gray-300 hover:text-blue-400 transition-colors" onClick={() => setMobileNavOpen(false)}>
                Connect
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 lg:py-56 overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0">
    <Image
      src="/gallery/mom.jpg"
      alt="Hero background"
      fill
      priority
      className="object-cover w-full h-full"
    />
    {/* Overlay for gradient effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900 opacity-80"></div>
  </div>
  <div className="relative container mx-auto px-4 text-center">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
        {[0, 1, 2].map(idx => (
          <div key={idx} style={{ minHeight: '1.2em' }}>
            {currentTextIdx === idx ? (
              idx === 1 ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{typedText}<span className="animate-blink">|</span></span>
              ) : (
                <span>{typedText}<span className="animate-blink">|</span></span>
              )
            ) : (
              idx === 1 ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{currentTextIdx > idx ? heroTexts[idx] : "\u00A0"}</span>
              ) : (
                <span>{currentTextIdx > idx ? heroTexts[idx] : "\u00A0"}</span>
              )
            )}
          </div>
        ))}
      </h1>
      <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
        Join us for spirit-filled teachings, vibrant community, and engaging online presence.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-lg font-medium"
          onClick={() => {
            alert('Map button clicked!')
            console.log('Map button clicked')
            window.open("https://maps.google.com/?q=Addis+Ketema+Sub+City+Asko+Addis+Sefer+Lizmender+Addis+Ababa+Ethiopia", "_blank")
          }}
        >
          <Calendar className="w-5 h-5 mr-2 inline" />
          Visit Us This Sunday
        </button>
        <button 
          className="border border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 backdrop-blur-sm rounded-lg font-medium"
          onClick={() => {
            console.log('YouTube button clicked')
            window.open("https://www.youtube.com/@pastorzenebechgessessejsltvwor", "_blank")
          }}
        >
          <Play className="w-5 h-5 mr-2 inline" />
          Watch Latest Sermon
        </button>
        <button
          className="border border-purple-400 text-purple-400 hover:bg-purple-400/10 px-8 py-3 backdrop-blur-sm shadow-lg hover:shadow-purple-500/25 transition-all duration-300 rounded-lg font-medium"
          onClick={() => {
            console.log('Facebook button clicked')
            window.open("https://www.facebook.com/JSLTVWORLDWIDE", "_blank")
          }}
        >
          <Globe className="w-5 h-5 mr-2 inline" />
          Follow Us Online
        </button>
      </div>
    </div>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="py-32 sm:py-48 bg-slate-800/50 backdrop-blur-sm" ref={aboutRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center md:justify-between gap-12 pt-0">
            <motion.div
              className="flex-1 text-left pt-0"
              initial={{ opacity: 0, y: 60 }}
              animate={leftControls}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 sm:mb-16 text-left">About JSL Church</h2>
              <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 leading-relaxed text-left">
                We are a Bible-teaching, Christ-centered church committed to proclaiming Jesus Christ and preaching the word of God. Founded by Pastor Zenebech Gessesse and her husband Engineer Luelkal Kassie Eleven years ago, we are dedicated to spreading the Gospel and building a strong community of believers.
              </p>
              <div className="mb-8 sm:mb-10 flex justify-center">
                <Link href="/about">
                  <Button variant="outline" size="lg" className="sm:w-auto border-blue-400 text-blue-400 hover:bg-blue-400/10">
                    Learn More About Our Story
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="flex-1 flex flex-col md:flex-row gap-8 md:gap-6 justify-end items-center md:items-start"
              initial={{ opacity: 0, y: -60 }}
              animate={rightControls}
            >
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8 w-full items-start">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mb-6 border-2 border-blue-500/30">
                    <BookOpen className="w-14 h-14 text-blue-400" />
                  </div>
                  <h3 className="font-bold text-white text-2xl mb-3">Scripture</h3>
                  <p className="text-blue-200 text-lg">Grounded in Biblical truth</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center mb-6 border-2 border-green-500/30">
                    <Users className="w-14 h-14 text-green-400" />
                  </div>
                  <h3 className="font-bold text-white text-2xl mb-3">Discipleship</h3>
                  <p className="text-blue-200 text-lg">Growing together in faith</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center mb-6 border-2 border-purple-500/30">
                    <Heart className="w-14 h-14 text-purple-400" />
                  </div>
                  <h3 className="font-bold text-white text-2xl mb-3">Worship</h3>
                  <p className="text-blue-200 text-lg">Heartfelt praise and prayer</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full flex items-center justify-center mb-6 border-2 border-orange-500/30">
                    <Globe className="w-14 h-14 text-orange-400" />
                  </div>
                  <h3 className="font-bold text-white text-2xl mb-3">Outreach</h3>
                  <p className="text-blue-200 text-lg">Serving our community</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sermons Section */}
      <section id="sermons" className="py-12 sm:py-16 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">Media Teaching</h2>
            <p className="text-base sm:text-lg text-blue-200">Dive deeper into God's Word with our weekly teachings</p>
          </div>

          {/* Featured Sermon */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <Card className="overflow-hidden bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <div className="relative aspect-video bg-gray-200">
                <Image
                  src="/gallery/home_page_photo_1.jpg"
                  alt="Featured sermon"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg" onClick={() => window.open("https://www.youtube.com/@pastorzenebechgessessejsltvwor", "_blank")}>
                    <Play className="w-6 h-6 mr-2" />
                    Watch Now
                  </Button>
                </div>
              </div>
              <CardContent className="p-6 bg-slate-800/50">
                <Badge className="mb-3 bg-blue-500/20 text-blue-300 border-blue-500/30">From Our Previous Consecutive Teaching Collection</Badge>
                <h3 className="text-2xl font-bold text-white mb-2">Book of Revelation</h3>
                <p className="text-blue-200 mb-4">
                Joining Engineer Pastor Luelkal Kassie to walk through the book of Revelation, line by line
                </p>
                <div className="flex items-center text-sm text-blue-300">
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
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70">
                <div className="relative aspect-video bg-gray-200">
                  <Image src={sermon.image} alt={sermon.title} className="object-cover" fill />
                </div>
                <CardContent className="p-4 bg-slate-800/50">
                  <Badge variant="secondary" className="mb-2 bg-purple-500/20 text-purple-300 border-purple-500/30">
                    {sermon.topic}
                  </Badge>
                  <h4 className="font-semibold text-white mb-1">{sermon.title}</h4>
                  <p className="text-sm text-blue-300">{sermon.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/sermons">
              <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400/10">
                Explore More Teachings
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 sm:py-16 bg-slate-800/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">Stay Connected Online</h2>
            <p className="text-base sm:text-lg text-blue-200">Follow our journey and join the conversation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/30">
                <Youtube className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">YouTube</h3>
              <p className="text-blue-200 text-sm mb-4">Weekly sermons, Bible studies, and worship sessions</p>
              <Button
                variant="outline"
                size="sm"
                className="border-red-400 text-red-400 hover:bg-red-400/10"
                onClick={() => window.open("https://www.youtube.com/@pastorzenebechgessessejsltvwor", "_blank")}
              >
                Subscribe
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-8 h-8 text-blue-400"
                >
                  <path
                    d="M21.944 4.186a1.5 1.5 0 0 0-1.59-.217L3.6 11.13a1.5 1.5 0 0 0 .13 2.77l3.77 1.36 1.36 4.09a1.5 1.5 0 0 0 2.74.13l2.13-3.77 3.77 1.36a1.5 1.5 0 0 0 2.77-.13l3.77-13.13a1.5 1.5 0 0 0-.13-2.77z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Telegram</h3>
              <p className="text-blue-200 text-sm mb-4">Daily inspiration, behind-the-scenes, and community moments</p>
              <Button variant="outline" size="sm" className="border-blue-400 text-blue-400 hover:bg-blue-400/10" onClick={() => window.open("https://t.me/JSLCHURCHOFFICIALCHANNEL", "_blank")}>
                Follow
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                <Facebook className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Facebook</h3>
              <p className="text-blue-200 text-sm mb-4">Event updates, live services, and community discussions</p>
              <Button variant="outline" size="sm" className="border-blue-400 text-blue-400 hover:bg-blue-400/10" onClick={() => window.open("https://www.facebook.com/JSLTVWORLDWIDE", "_blank")}>
                Like Page
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section id="visit" className="py-12 sm:py-16 bg-gradient-to-br from-blue-900/30 via-slate-800/50 to-blue-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">Plan Your Visit</h2>
              <p className="text-base sm:text-lg text-blue-100">
                We'd love to meet you! Whether you're new to faith, just visiting, or looking for a church home — you're
                welcome here.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <Card className="p-6 bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Service Times</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-400 mr-3" />
                    <div>
                      <p className="font-medium text-white">Sunday Morning</p>
                      <p className="text-blue-200">10:00 AM - 01:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-400 mr-3" />
                    <div>
                      <p className="font-medium text-white">Monday Evening</p>
                      <p className="text-blue-200">9:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-400 mr-3" />
                    <div>
                      <p className="font-medium text-white">Tuesday Morning</p>
                      <p className="text-blue-200">10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-400 mr-3" />
                    <div>
                      <p className="font-medium text-white">Thuresday Evening</p>
                      <p className="text-blue-200">05:00 PM - 08:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                    <div>
                      <p className="font-medium text-white">Location</p>
                      <p className="text-blue-200">
                        Addis Ketema Sub City, Asko-Addis Sefer Lizmender, Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">What to Expect</h3>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Come as you are - casual dress is perfectly fine
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Free parking available on-site
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Children's programs during service
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Friendly greeters to help you feel at home
                  </li>
                </ul>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25 transition-all duration-300" onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}>
                Let Us Know You're Coming
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 bg-slate-800/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">Impact Stories</h2>
            <p className="text-base sm:text-lg text-blue-200">Hear how God is working in our community</p>
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
              <Card key={index} className="p-6 text-center bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <Heart className="w-6 h-6 text-blue-400" />
                </div>
                <blockquote className="text-blue-200 mb-4 italic">"{testimonial.quote}"</blockquote>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-blue-300">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-12 sm:py-16 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">Connect & Engage</h2>
              <p className="text-base sm:text-lg text-blue-200">We'd love to hear from you and keep you updated</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Contact Form */}
              <Card className="p-6 bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Send Us a Message</h3>
                <form onSubmit={contactForm.handleSubmit(onSubmitContact)} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      {...contactForm.register('name')}
                      className={contactForm.formState.errors.name ? 'border-red-500' : ''}
                    />
                    {contactForm.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1">{contactForm.formState.errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      {...contactForm.register('email')}
                      className={contactForm.formState.errors.email ? 'border-red-500' : ''}
                    />
                    {contactForm.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{contactForm.formState.errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Prayer requests, questions, or how we can help..." 
                      rows={4}
                      {...contactForm.register('message')}
                      className={contactForm.formState.errors.message ? 'border-red-500' : ''}
                    />
                    {contactForm.formState.errors.message && (
                      <p className="text-red-500 text-sm mt-1">{contactForm.formState.errors.message.message}</p>
                    )}
                  </div>
                  <button 
                    type="button"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-lg font-medium py-2 px-4 text-white"
                    onClick={() => {
                      alert('Contact form button clicked!')
                      console.log('Contact form button clicked')
                    }}
                  >
                    <Send className="w-4 h-4 mr-2 inline" />
                    Test Contact Button
                  </button>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25 transition-all duration-300" 
                    disabled={isSubmittingContact}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmittingContact ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>

              {/* Newsletter Signup */}
              <Card className="p-6 bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
                <p className="text-blue-200 mb-6">
                  Subscribe to our newsletter for church updates, upcoming events, and weekly teachings.
                </p>
                <form onSubmit={newsletterForm.handleSubmit(onSubmitNewsletter)} className="space-y-4">
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email Address" 
                      {...newsletterForm.register('email')}
                      className={newsletterForm.formState.errors.email ? 'border-red-500' : ''}
                    />
                    {newsletterForm.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{newsletterForm.formState.errors.email.message}</p>
                    )}
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                    disabled={isSubmittingNewsletter}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {isSubmittingNewsletter ? 'Subscribing...' : 'Subscribe to Newsletter'}
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-slate-600/50">
                  <h4 className="font-semibold text-white mb-3">Contact Info</h4>
                  <div className="space-y-2 text-sm text-blue-200">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-blue-400" />
                      +251 926 141 414
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-blue-400" />
                      +251 947 153 805
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-blue-400" />
                      your-church-email@example.com
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-blue-400" />
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
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Partner with Us</h2>
            <p className="text-base sm:text-xl mb-6 sm:mb-8 text-blue-100">Help us advance the Kingdom through your generous giving</p>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-gradient-to-r from-white to-gray-100 text-blue-900 hover:from-gray-100 hover:to-white shadow-lg hover:shadow-white/25 transition-all duration-300" onClick={() => window.open("https://www.facebook.com/JSLTVWORLDWIDE", "_blank")}>
              <Heart className="w-5 h-5 mr-2" />
              Give Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 sm:py-12 border-t border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <Cross className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">JSL Church</h3>
                  <p className="text-sm text-blue-300">Jesus the Spring of Life International</p>
                </div>
              </div>
              <p className="text-blue-200 text-sm">
                Active in the World. A Church That Teaches, Reaches, and Welcomes All.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm text-blue-300">
                <li>
                  <Link href="/" className="hover:text-blue-200 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-200 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/sermons" className="hover:text-blue-200 transition-colors">
                    Sermons
                  </Link>
                </li>
                <li>
                  <Link href="#visit" className="hover:text-blue-200 transition-colors">
                    Plan a Visit
                  </Link>
                </li>
                <li>
                  <Link href="#connect" className="hover:text-blue-200 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Service Times</h4>
              <ul className="space-y-2 text-sm text-blue-300">
  <li>Sunday Morning: 10:00 AM - 01:30 PM</li>
  <li>Monday Morning: 9:00 AM - 12:00 PM</li>
  <li>Tuesday Morning: 10:00 AM - 5:00 PM</li>
  <li>Thursday Evening: 05:00 PM - 08:30 PM</li>
  <li>Addis Ketema Sub City, Asko-Addis Sefer Lizmender, Addis Ababa, Ethiopia</li>
</ul>

            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-blue-300 hover:text-blue-200 p-2 hover:bg-blue-500/10 rounded-full transition-all duration-300"
                  onClick={() => window.open("https://www.youtube.com/@pastorzenebechgessessejsltvwor", "_blank")}
                >
                  <Youtube className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-blue-300 hover:text-blue-200 p-2 hover:bg-blue-500/10 rounded-full transition-all duration-300" onClick={() => window.open("https://t.me/JSLCHURCHOFFICIALCHANNEL", "_blank")}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-5 h-5" style={{ color: 'rgb(59, 130, 246)' }}>
                    <path d="M21.944 4.186a1.5 1.5 0 0 0-1.59-.217L3.6 11.13a1.5 1.5 0 0 0 .13 2.77l3.77 1.36 1.36 4.09a1.5 1.5 0 0 0 2.74.13l2.13-3.77 3.77 1.36a1.5 1.5 0 0 0 2.77-.13l3.77-13.13a1.5 1.5 0 0 0-.13-2.77z" fill="currentColor" />
                  </svg>
                </Button>
                <Button size="sm" variant="ghost" className="text-blue-300 hover:text-blue-200 p-2 hover:bg-blue-500/10 rounded-full transition-all duration-300" onClick={() => window.open("https://www.facebook.com/JSLTVWORLDWIDE", "_blank")}>
                  <Facebook className="w-5 h-5" />
                </Button>
                </div>
             </div>
          </div>

          <div className="border-t border-slate-700/50 mt-8 pt-8 text-center text-sm text-blue-300">
            <p>&copy; {new Date().getFullYear()} Jesus the Spring of Life International Church. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  )
}
