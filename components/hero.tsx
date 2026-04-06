'use client';

import { useState } from 'react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  description: string;
}

export function Hero({ title, description }: HeroProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-blue-50 to-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
          className="mb-8 h-40 w-48 bg-muted rounded-lg overflow-hidden relative mx-auto"
        >
          <Image 
            src="/Logodraw.png" 
            alt="Drawio" 
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance  bg-orange-600 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
          {description}
        </p>
      
      </div>
    </section>
  );
}
