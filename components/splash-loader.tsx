"use client";
import React, { useEffect, useState } from "react";
// Only use the John 14:6 verse
const splashMessages = [
  "Jesus said, 'I am the way, the truth, and the life.' (John 14:6)"
];
import Image from "next/image";
import { motion } from "framer-motion";

interface SplashLoaderProps {
  minimumTime?: number; // ms
  onFinish?: () => void;
}

export default function SplashLoader({ minimumTime = 2500, onFinish }: SplashLoaderProps) {
  const [done, setDone] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [msgIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [charIdx, setCharIdx] = useState(0);
  const [timerDone, setTimerDone] = useState(false);

  // Start timer for minimum splash duration
  useEffect(() => {
    const timer = setTimeout(() => setTimerDone(true), minimumTime);
    return () => clearTimeout(timer);
  }, [minimumTime]);

  // Typing effect for verse
  useEffect(() => {
    if (charIdx < splashMessages[msgIdx].length) {
      const timeout = setTimeout(() => {
        setTyped(splashMessages[msgIdx].slice(0, charIdx + 1));
        setCharIdx(charIdx + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [charIdx, msgIdx]);

  // When both timer and typing are done, finish splash
  useEffect(() => {
    if (!done && timerDone && charIdx >= splashMessages[msgIdx].length) {
      setDone(true);
      onFinish?.();
      // Remove splash from DOM after scroll-up animation
      setTimeout(() => setShouldRender(false), 1500);
    }
  }, [timerDone, charIdx, msgIdx, done, onFinish]);

  if (!shouldRender) return null;
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-blue-950 dark:via-blue-900 dark:to-slate-900 overflow-hidden"
      initial={{ y: 0 }}
      animate={done ? { y: "-100vh" } : { y: 0 }}
      style={{ willChange: 'transform' }}
      transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
    >
      {/* Curtain shadow at the bottom for realism */}
      <div
        className="absolute left-0 right-0 bottom-0 h-16 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(30,41,59,0.85) 60%, rgba(30,41,59,0.0) 100%)',
          zIndex: 50,
        }}
      />
      <div className="flex flex-col items-center">
        <div className="mb-6">
          <Image
            src="/photo_2025-08-28_15-19-22-removebg-preview.ico"
            alt="Church Logo"
            width={100}
            height={100}
            className="rounded-full shadow-xl border-4 border-blue-300 dark:border-blue-800 bg-white"
            priority
          />
        </div>
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-figtree font-extrabold text-blue-900 dark:text-blue-100 text-center drop-shadow-lg"
        >
          <motion.span
            className="block"
            style={{ display: 'inline-block' }}
            variants={{}}
            initial="hidden"
            animate="visible"
          >
            {"JESUS THE SPRING OF LIFE INTERNATIONAL CHURCH".split("").map((char, i) => (
              <motion.span
                key={i}
                style={{ display: 'inline-block' }}
                variants={{
                  hidden: { y: 0 },
                  visible: {
                    y: [0, -12, 0, 12, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.08,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
          <motion.span
            className="block text-lg sm:text-xl md:text-2xl font-inter font-semibold text-blue-700 dark:text-blue-200 mt-2 tracking-wide"
            style={{ display: 'inline-block' }}
            variants={{}}
            initial="hidden"
            animate="visible"
          >
            {"".split("").map((char, i) => (
              <motion.span
                key={i}
                style={{ display: 'inline-block' }}
                variants={{
                  hidden: { y: 0 },
                  visible: {
                    y: [0, -8, 0, 8, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.08 + 0.2,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        {/* Typing effect container */}
        <div className="mt-10 flex justify-center px-4 sm:px-6">
          <div className="relative w-full max-w-2xl">
            <div className="relative z-10 text-center text-blue-200 dark:text-blue-100 font-inter 
              text-sm sm:text-base md:text-lg lg:text-xl 
              bg-slate-900/80 dark:bg-blue-950/80 rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow-lg 
              break-words leading-relaxed">
              <span>
                {typed}
                <span className="animate-blink">|</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
