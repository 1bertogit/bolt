"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMarqueeAnimation = () => {
      if (marqueeRef.current) {
        const marqueeContent = marqueeRef.current;
        marqueeContent.style.animation = "none";
        marqueeContent.offsetHeight;
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
        <div className="absolute inset-0 bg-[#102140]/90"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Date and Location */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-[#102140]/80 backdrop-blur-sm px-6 py-3 rounded-full">
              <Calendar className="h-5 w-5 text-[#5CE1E6]" />
              <span className="text-lg">{SITE_CONFIG.date}</span>
            </div>
            <div className="flex items-center gap-2 bg-[#102140]/80 backdrop-blur-sm px-6 py-3 rounded-full">
              <MapPin className="h-5 w-5 text-[#5CE1E6]" />
              <span className="text-lg">{SITE_CONFIG.location}</span>
            </div>
          </div>
          
          {/* Title and Subtitle */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
            Beyond the <span className="text-[#5CE1E6]">LowerLift</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#5CE1E6]">
            Cadaver Lab 2025
          </h2>
          
          {/* CTA Button */}
          <div className="mb-6">
            <Button 
              size="lg" 
              className="bg-[#5CE1E6] hover:bg-[#4BCDC2] text-[#102140] text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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