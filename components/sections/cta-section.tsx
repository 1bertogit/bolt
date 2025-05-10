"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforme Sua Prática Cirúrgica
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Apenas 6 vagas disponíveis para esta experiência única que irá revolucionar sua abordagem anatômica e técnica.
          </p>
        </div>

        <div className="flex flex-col items-center mb-12">
          <Button 
            size="lg" 
            className="bg-white hover:bg-blue-50 text-blue-700 text-lg font-bold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center"
            onClick={() => window.location.href = "#pricing"}
          >
            QUERO ME INSCREVER
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 flex-shrink-0">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">Data</h3>
              <p className="text-blue-100">{SITE_CONFIG.date}</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 flex-shrink-0">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">Local</h3>
              <p className="text-blue-100">{SITE_CONFIG.location}</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 flex-shrink-0">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">Vagas</h3>
              <p className="text-blue-100">Apenas {SITE_CONFIG.availableSpots} vagas disponíveis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}