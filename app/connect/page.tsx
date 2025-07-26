"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Send, Mail, Phone, MapPin, Cross } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect } from "react";
import Link from "next/link";

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export default function ConnectPage() {
  // ...existing code...
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activePage, setActivePage] = useState("connect");
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
  const contactForm = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '' },
  });
  const newsletterForm = useForm({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: '' },
  });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);

  const onSubmitContact = async (data: z.infer<typeof contactSchema>) => {
    setIsSubmittingContact(true);
    // Add your API logic here
    setTimeout(() => setIsSubmittingContact(false), 1000);
  };
  const onSubmitNewsletter = async (data: z.infer<typeof newsletterSchema>) => {
    setIsSubmittingNewsletter(true);
    // Add your API logic here
    setTimeout(() => setIsSubmittingNewsletter(false), 1000);
  };

  return (
    <>
      {/* Header Navigation (copied from home page) */}
      <header className="bg-transparent backdrop-blur-sm border-b border-blue-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <Cross className="w-7 h-7 text-green-200" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-green-200">JSL Church</h1>
                <p className="text-sm text-green-300">Jesus the Spring of Life International</p>
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
      <section id="connect" className="py-12 sm:py-16 bg-gradient-to-br from-cyan-900 via-teal-900 to-green-800 backdrop-blur-sm">
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
                    <Input placeholder="Your Name" {...contactForm.register('name')} className={contactForm.formState.errors.name ? 'border-red-500' : ''} />
                    {contactForm.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1">{contactForm.formState.errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" {...contactForm.register('email')} className={contactForm.formState.errors.email ? 'border-red-500' : ''} />
                    {contactForm.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{contactForm.formState.errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <Textarea placeholder="Prayer requests, questions, or how we can help..." rows={4} {...contactForm.register('message')} className={contactForm.formState.errors.message ? 'border-red-500' : ''} />
                    {contactForm.formState.errors.message && (
                      <p className="text-red-500 text-sm mt-1">{contactForm.formState.errors.message.message}</p>
                    )}
                  </div>
                  <button type="button" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-lg font-medium py-2 px-4 text-white" onClick={() => { alert('Contact form button clicked!'); }}>
                    <Send className="w-4 h-4 mr-2 inline" />
                    Test Contact Button
                  </button>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25 transition-all duration-300" disabled={isSubmittingContact}>
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmittingContact ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
              {/* Newsletter Signup */}
              <Card className="p-6 bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
                <p className="text-blue-200 mb-6">Subscribe to our newsletter for church updates, upcoming events, and weekly teachings.</p>
                <form onSubmit={newsletterForm.handleSubmit(onSubmitNewsletter)} className="space-y-4">
                  <div>
                    <Input type="email" placeholder="Your Email Address" {...newsletterForm.register('email')} className={newsletterForm.formState.errors.email ? 'border-red-500' : ''} />
                    {newsletterForm.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{newsletterForm.formState.errors.email.message}</p>
                    )}
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-green-500/25 transition-all duration-300" disabled={isSubmittingNewsletter}>
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
    </>
  );
}
