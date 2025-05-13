"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Countdown } from "@/components/ui/countdown";

export function CTASection() {
  // Data de encerramento: 7 dias antes do evento
  const eventDate = new Date(SITE_CONFIG.eventStartDate);
  const endDate = new Date(eventDate);
  endDate.setDate(eventDate.getDate() - 7);

  return (
    <section className="py-24 bg-gradient-to-br from-[#102140] to-[#1a3057] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforme Sua Prática Cirúrgica
          </h2>
          <p className="text-xl text-[#5CE1E6] max-w-3xl mx-auto">
            Apenas 6 vagas disponíveis para esta experiência única que irá revolucionar sua abordagem anatômica e técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <div>
            <Countdown 
              endDate={endDate}
              totalSpots={SITE_CONFIG.availableSpots}
              filledSpots={SITE_CONFIG.filledSpots}
            />
          </div>

          <div className="space-y-8">
            <Button 
              size="lg" 
              className="w-full bg-[#5CE1E6] hover:bg-[#4BCDC2] text-gray-900 text-lg font-bold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              onClick={() => window.open('https://wa.me/556791155498', '_blank', 'noopener,noreferrer')}
            >
              QUERO ME INSCREVER
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl flex items-start gap-3">
                <Calendar className="h-5 w-5 text-[#5CE1E6] flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-bold text-white">Data</div>
                  <div className="text-[#5CE1E6]">{SITE_CONFIG.date}</div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#5CE1E6] flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-bold text-white">Local</div>
                  <div className="text-[#5CE1E6]">{SITE_CONFIG.location}</div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl flex items-start gap-3">
                <Users className="h-5 w-5 text-[#5CE1E6] flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-bold text-white">Vagas</div>
                  <div className="text-[#5CE1E6]">Apenas {SITE_CONFIG.availableSpots} vagas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}