"use client";
import Link from "next/link";
import { Cross } from "lucide-react";
import React, { useState, useEffect } from "react";

interface NavProps {
  activePage: string;
}
export default function Nav({ activePage }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 border-b border-blue-500/20 transition-colors duration-300 ${scrolled ? 'bg-transparent' : 'bg-[#1A2940]'} backdrop-blur-sm`}>
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
            <Link href="/" className={`${activePage === "home" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"} transition-colors`}>Home</Link>
            <Link href="/about" className={`${activePage === "about" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"} transition-colors`}>About</Link>
            <Link href="/sermons" className={`${activePage === "sermons" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"} transition-colors`}>Sermons</Link>
            <Link href="/visit" className={`${activePage === "visit" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"} transition-colors`}>Visit</Link>
            <Link href="/connect" className={`${activePage === "connect" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"} transition-colors`}>Connect</Link>
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
            <Link href="/" className={`${activePage === "home" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"} transition-colors`} onClick={() => setMobileNavOpen(false)}>Home</Link>
            <Link href="/about" className={`${activePage === "about" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"} transition-colors`} onClick={() => setMobileNavOpen(false)}>About</Link>
            <Link href="/sermons" className={`${activePage === "sermons" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"} transition-colors`} onClick={() => setMobileNavOpen(false)}>Sermons</Link>
            <Link href="/visit" className={`${activePage === "visit" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"} transition-colors`} onClick={() => setMobileNavOpen(false)}>Visit</Link>
            <Link href="/connect" className={`${activePage === "connect" ? "text-blue-400 font-medium" : "text-gray-300 hover:text-blue-400"} transition-colors`} onClick={() => setMobileNavOpen(false)}>Connect</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
