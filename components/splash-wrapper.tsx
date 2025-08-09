"use client";
import { useState } from 'react';
import SplashLoader from './splash-loader';

export default function SplashWrapper({ children }: { children: React.ReactNode }) {
  const [hide, setHide] = useState(false);
  return (
    <>
      {!hide && <SplashLoader onFinish={() => setHide(true)} />}
      <div className={hide ? 'opacity-100 transition-opacity duration-300' : 'opacity-0'}>
        {children}
      </div>
    </>
  );
}
