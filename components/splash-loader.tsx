"use client";
import { useEffect, useState } from 'react';
import RouteLoader from './route-loader';

interface SplashLoaderProps {
  minimumTime?: number; // ms
  onFinish?: () => void;
}

export default function SplashLoader({ minimumTime = 1200, onFinish }: SplashLoaderProps) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        setDone(true);
        onFinish?.();
      }, minimumTime);
      return () => clearTimeout(timer);
    }, [minimumTime, onFinish]);

    if (done) return null;

    return (
      <div className="fixed inset-0 z-[999]">
        <RouteLoader label="Loading..." />
      </div>
    );
}
