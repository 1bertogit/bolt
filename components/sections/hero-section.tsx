"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
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
        <img
          src="/assets/images/bg.jpg"
          alt="Beyond the LowerLift Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-900/80 to-blue-950/90"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Primeira Turma Badge */}
          <div className="inline-block mb-8">
            <div className="bg-[#5CE1E6] text-gray-900 px-6 py-2 rounded-full text-sm md:text-base font-medium">
              Primeira Turma: Dr. Ivo Pitanguy
            </div>
          </div>
          
          {/* Title and Subtitle */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 text-white">
            Beyond the <span className="text-[#5CE1E6]">LowerLift</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#5CE1E6]">
            Cadaver Lab 2025
          </h2>
          
          {/* Date and Location */}
          <div className="mb-8">
            <p className="text-xl">{SITE_CONFIG.date} | {SITE_CONFIG.location}</p>
          </div>
          
          {/* CTA Button */}
          <div className="mb-6">
            <Button 
              size="lg" 
              className="bg-[#5CE1E6] hover:bg-[#4BCDC2] text-gray-900 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = "#pricing"}
            >
              GARANTIR MINHA VAGA AGORA
            </Button>
            <p className="mt-4 text-[#5CE1E6] text-lg font-medium">Apenas {SITE_CONFIG.availableSpots} vagas disponíveis</p>
          </div>
          
          {/* Marquee Text */}
          <div className="mt-12 overflow-hidden py-2 bg-[#5CE1E6]/10 backdrop-blur-sm rounded-full">
            <div 
              ref={marqueeRef}
              className="whitespace-nowrap animate-marquee"
              style={{
                animation: "marquee 20s linear infinite"
              }}
            >
              {Array(10).fill("◆ Imersão inédita").join(" ")}
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