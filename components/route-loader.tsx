"use client";
import React, { useEffect, useState } from 'react';

interface RouteLoaderProps {
  label?: string;
}

export default function RouteLoader({ label = 'Loading' }: RouteLoaderProps) {
  const [progress, setProgress] = useState(0);

  // Simulate progress from 0 to 100 with easing
  useEffect(() => {
    if (progress >= 100) return;
    const delay = progress < 60 ? 60 : progress < 85 ? 110 : 200;
    const inc = progress < 60 ? 4 + Math.random() * 4 : progress < 85 ? 2 + Math.random() * 2 : 0.6 + Math.random() * 1.2;
    const id = setTimeout(() => setProgress((p) => Math.min(100, p + inc)), delay);
    return () => clearTimeout(id);
  }, [progress]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(135deg,#223A5E_0%,#111827_100%)]">
      <div className="relative flex flex-col items-center text-center">
        <div className="relative w-32 h-32 mb-6">
          <div className="absolute inset-0 rounded-full border border-[#B7C9E2]/15 animate-orbit-spin" />
          <div className="absolute inset-4 rounded-full border border-[#B7C9E2]/25 animate-orbit-spin-fast" />
          <div className="absolute top-1/2 left-1/2 w-28 h-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#B7C9E2]/30 border-t-[#FFFBEA] animate-spin" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] tracking-[0.3em] text-[#FFFBEA] font-semibold">
            LOAD
          </div>
        </div>
        {/* Progress bar with percent */}
        <div
          className="relative h-2 w-60 overflow-hidden rounded-full bg-[#223A5E]"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.floor(progress)}
          aria-label={label}
        >
          <div
            className="h-full bg-gradient-to-r from-[#B7C9E2] via-[#FFFBEA] to-[#B7C9E2] bg-[length:200%_100%] animate-shimmer-bar"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute inset-y-0 left-0 w-px bg-[#FFFBEA]/70"
            style={{ transform: `translateX(${progress}%)` }}
          />
        </div>
        <p className="mt-4 text-[#B7C9E2]/80 text-xs tracking-wide font-medium select-none">
          {label} {Math.floor(progress)}%
        </p>
      </div>
    </div>
  );
}
