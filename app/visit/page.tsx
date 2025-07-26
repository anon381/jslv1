"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, MapPin, Cross } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function VisitPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [activePage, setActivePage] = useState("visit")
  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path === "/") setActivePage("home");
      else if (path.startsWith("/about")) setActivePage("about");
      else if (path.startsWith("/sermons")) setActivePage("sermons");
      else if (path.startsWith("/connect")) setActivePage("connect");
      else if (path.startsWith("/visit")) setActivePage("visit");
      // No hash logic needed, handled by pathname above
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900">
      {/* Headers */}
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

      {/* Visit Section */}
      <section id="visit" className="py-12 sm:py-16 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900">
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
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25 transition-all duration-300" onClick={() => window.open("/connect", "_self")}>Let Us Know You're Coming</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
