"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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

  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={SITE_CONFIG.images.hero}
          alt="Beyond the LowerLift Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#102140]/90 via-[#102140]/80 to-[#102140]/90"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Primeira Turma Badge */}
          <div className="inline-block mb-8 scale-100 md:scale-100 transform-gpu">
            <div className="bg-[#5CE1E6] text-[#102140] px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide transform scale-70 md:scale-100">
              Primeira Turma: Dr. Ivo Pitanguy
            </div>
          </div>
          
          {/* Title and Subtitle */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Beyond the <span className="text-[#5CE1E6]">LowerLift</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#5CE1E6]">
            Cadaver Lab 2025
          </h2>
          
          {/* Date and Location */}
          <div className="mb-12">
            <p className="text-base md:text-xl text-[#5CE1E6]">{SITE_CONFIG.date} | {SITE_CONFIG.location}</p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-[#5CE1E6] hover:bg-[#4BCDC2] text-[#102140] text-base md:text-lg font-bold px-6 md:px-8 py-4 md:py-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 scale-90 md:scale-100"
              onClick={scrollToPlans}
            >
              GARANTIR MINHA VAGA AGORA
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
            <p className="text-[#5CE1E6] text-lg font-medium">
              Apenas {SITE_CONFIG.availableSpots} vagas disponíveis
            </p>
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
              {Array(10).fill("✦ Imersão inédita").join(" ")}
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