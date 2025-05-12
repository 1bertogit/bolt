"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMarqueeAnimation = () => {
      if (marqueeRef.current) {
        const marqueeContent = marqueeRef.current;
        marqueeContent.style.animation = "none";
        marqueeContent.offsetHeight; // Trigger reflow
        marqueeContent.style.animation = "";
      }
    };
    
    window.addEventListener('resize', handleMarqueeAnimation);
    return () => {
      window.removeEventListener('resize', handleMarqueeAnimation);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={SITE_CONFIG.images.hero}
          alt="Beyond the LowerLift Background"
          layout="fill"
          objectFit="cover"
          priority
          className="object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-900/80 to-blue-950/90"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="relative h-32 w-80 mx-auto mb-6">
            <Image
              src="/assets/images/logo.png"
              alt="Beyond the LowerLift Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Title and Subtitle */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 text-white">
            Beyond the <span className="text-blue-400">LowerLift</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-200">
            Cadaver Lab 2025
          </h2>
          
          {/* Date and Location */}
          <div className="mb-8 space-y-2">
            <p className="text-xl">{SITE_CONFIG.date}</p>
            <p className="text-lg text-blue-200">{SITE_CONFIG.location}</p>
          </div>
          
          {/* CTA Button */}
          <div className="mb-6">
            <Button 
              size="lg" 
              className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = "#pricing"}
            >
              GARANTIR MINHA VAGA AGORA
            </Button>
            <p className="mt-4 text-blue-200 text-lg font-medium">Apenas {SITE_CONFIG.availableSpots} vagas disponíveis</p>
          </div>
          
          {/* Marquee Text */}
          <div className="mt-12 overflow-hidden py-2 bg-blue-900/40 backdrop-blur-sm rounded-full">
            <div 
              ref={marqueeRef}
              className="whitespace-nowrap animate-marquee"
              style={{
                animation: "marquee 20s linear infinite"
              }}
            >
              {Array(10).fill("◆ Imersão inédita ◆").join(" ")}
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}