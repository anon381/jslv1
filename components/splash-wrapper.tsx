"use client";
import { useState, useEffect } from 'react';
import SplashLoader from './splash-loader';


export default function SplashWrapper({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      // For dev/testing: always show splash on hard reload
      localStorage.removeItem('jsl_splash_shown');
      setShowSplash(true);
    }
  }, []);

  const handleFinish = () => {
    setShowSplash(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('jsl_splash_shown', 'true');
    }
    // Remove splash from DOM after scroll-up animation
    setTimeout(() => setSplashVisible(false), 1500);
  };

  if (!mounted) return null;
  return (
    <div className="relative">
      {children}
      {splashVisible && (
        <div className="fixed inset-0 z-[9999]">
          <SplashLoader onFinish={handleFinish} minimumTime={4000} />
        </div>
      )}
    </div>
  );
}

