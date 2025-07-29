"use client"
// This is a client component
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PinContainer } from "@/components/ui/3d-pin"
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
import React, { useState, useEffect } from "react"
import Nav from "@/components/nav"
// import { useEffect } from "react"
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
  // ...existing code...
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
  const [activePage, setActivePage] = useState("home");
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
        <Nav activePage={activePage} />

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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            {(() => {
              const getYoutubeId = (url: string) => {
                // Accepts both embed and watch URLs
                const match = url.match(/(?:embed\/|watch\?v=|youtu.be\/)([\w-]{11})/);
                return match ? match[1] : "";
              };
              const sermons = [
                { title: "The Power of Prayer", topic: "Prayer", video: "https://www.youtube.com/embed/_Myjo4M3NdQ?si=odGoUAKB34FSRGVe" },
                { title: "Connection with God", topic: "Songs", video: "https://www.youtube.com/embed/5-xC-uqFKHM?si=gQcI94_xeCH17ArA" },
                { title: "God's Grace in Action", topic: "Power", video: "https://www.youtube.com/embed/KBySVNRoWDY?si=4QNSHCLyUJONkKVl" }
              ].map(s => ({
                ...s,
                image: `https://img.youtube.com/vi/${getYoutubeId(s.video)}/hqdefault.jpg`
              }));
              const [hovered, setHovered] = React.useState<number | null>(null);
              return sermons.map((sermon, index) => (
                <PinContainer key={index} containerClassName="w-full flex justify-center items-center" index={index}>
                  <Card
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-transparent backdrop-blur-sm hover:bg-transparent w-[290px] md:w-[320px] max-w-full"
                    style={{ border: 'none', margin: '0 0.5rem', background: 'transparent' }}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="relative aspect-video cursor-pointer group" style={{ background: 'transparent' }} onClick={() => window.open(sermon.video.replace('/embed/', '/watch?v=').split('?')[0], '_blank')}>
                      <Image src={sermon.image} alt={sermon.title} className="object-cover transition-opacity duration-200 group-hover:opacity-80" fill />
                    </div>
                    <CardContent className="p-4" style={{ background: 'transparent' }}>
                      <Badge variant="secondary" className="mb-2 bg-transparent text-purple-300 border-purple-500/30">
                        {sermon.topic}
                      </Badge>
                      <h4 className="font-semibold text-white mb-1">{sermon.title}</h4>
                    </CardContent>
                  </Card>
                </PinContainer>
              ));
            })()}
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

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto w-full">
            {/* Social Cards with corner tilt-effect, larger size but same grid layout */}
            {[{
              key: 'youtube',
              icon: <Youtube className="w-8 h-8 text-red-400" />, 
              title: 'YouTube',
              desc: 'Weekly sermons, Bible studies, and worship sessions',
              btn: <Button variant="outline" size="lg" className="border-red-400 text-red-400 hover:bg-red-400/10 mt-2" onClick={() => window.open("https://www.youtube.com/@pastorzenebechgessessejsltvwor", "_blank")}>Subscribe</Button>,
              bg: "from-red-500/20 to-red-600/20 border-red-500/30"
            }, {
              key: 'telegram',
              icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-blue-400"><path d="M21.944 4.186a1.5 1.5 0 0 0-1.59-.217L3.6 11.13a1.5 1.5 0 0 0 .13 2.77l3.77 1.36 1.36 4.09a1.5 1.5 0 0 0 2.74.13l2.13-3.77 3.77 1.36a1.5 1.5 0 0 0 2.77-.13l3.77-13.13a1.5 1.5 0 0 0-.13-2.77z" fill="currentColor"/></svg>,
              title: 'Telegram',
              desc: 'Daily inspiration, behind-the-scenes, and community moments',
              btn: <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400/10 mt-2" onClick={() => window.open("https://t.me/JSLCHURCHOFFICIALCHANNEL", "_blank")}>Follow</Button>,
              bg: "from-blue-500/20 to-blue-600/20 border-blue-500/30"
            }, {
              key: 'facebook',
              icon: <Facebook className="w-8 h-8 text-blue-400" />, 
              title: 'Facebook',
              desc: 'Event updates, live services, and community discussions',
              btn: <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400/10 mt-2" onClick={() => window.open("https://www.facebook.com/JSLTVWORLDWIDE", "_blank")}>Like Page</Button>,
              bg: "from-blue-500/20 to-blue-600/20 border-blue-500/30"
            }].map(card => {
              // Card tilt logic
              const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
              const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                const cardEl = e.currentTarget;
                const rect = cardEl.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const midX = rect.width / 2;
                const midY = rect.height / 2;
                // Increased intensity: rotation multiplier from 12 to 24
                const rotateY = ((x - midX) / midX) * 24;
                const rotateX = -((y - midY) / midY) * 24;
                setTilt({ rotateX, rotateY });
              };
              const handleMouseLeave = () => setTilt({ rotateX: 0, rotateY: 0 });
              return (
                <motion.div
                  key={card.key}
                  style={{ perspective: 800, background: 'rgba(30,41,59,0.35)', border: '1px solid rgba(100,116,139,0.18)', boxShadow: tilt.rotateX !== 0 || tilt.rotateY !== 0 ? "0 8px 32px 0 rgba(59,130,246,0.25)" : "0 2px 12px 0 rgba(59,130,246,0.10)", backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
                  animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, scale: tilt.rotateX !== 0 || tilt.rotateY !== 0 ? 1.06 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-center p-4 rounded-xl cursor-pointer flex-shrink-0 w-full max-w-xs md:max-w-[320px]"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${card.bg} rounded-full flex items-center justify-center mx-auto mb-4 border`}>
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{card.title}</h3>
                  <p className="text-blue-200 text-sm mb-4">{card.desc}</p>
                  {React.cloneElement(card.btn, { size: "sm", className: `${card.btn.props.className} px-4 py-2 text-sm` })}
                </motion.div>
              );
            })}
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
          <div className="max-w-5xl mx-auto">
            {/* Animated Testimonials Demo */}
            {require('@/components/animated-testimonials-demo').default()}
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
              <Link href="/visit" className="hover:text-blue-200 transition-colors">
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
  );
}
