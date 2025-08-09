"use client";
import React from 'react';

interface RouteLoaderProps {
  label?: string;
}

export default function RouteLoader({ label = 'Loading...' }: RouteLoaderProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(135deg,#223A5E_0%,#111827_100%)]">
      <div className="relative flex flex-col items-center text-center">
        <div className="relative w-32 h-32 mb-5">
          <div className="absolute inset-0 rounded-full border border-[#B7C9E2]/15 animate-orbit-spin" />
          <div className="absolute inset-4 rounded-full border border-[#B7C9E2]/25 animate-orbit-spin-fast" />
          <div className="absolute top-1/2 left-1/2 w-28 h-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#B7C9E2]/30 border-t-[#FFFBEA] animate-spin" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] tracking-[0.3em] text-[#FFFBEA] font-semibold">
            LOAD
          </div>
        </div>
        <div className="h-1 w-56 overflow-hidden rounded-full bg-[#223A5E]">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[#B7C9E2] to-transparent bg-[length:200%_100%] animate-shimmer-bar" />
        </div>
        <p className="mt-4 text-[#B7C9E2]/80 text-xs tracking-wide">{label}</p>
      </div>
    </div>
  );
}
