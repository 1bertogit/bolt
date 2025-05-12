"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Compass, Building } from 'lucide-react';
import { SITE_CONFIG } from "@/lib/constants";

export function EventLocationSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-[#f7fcfd]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white p-8 rounded-xl shadow-xl relative z-20 border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-[#102140]">Local do Evento</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#102140]/10 p-3 rounded-full mr-4">
                    <Building className="h-5 w-5 text-[#102140]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Centro de Treinamento Especializado</h3>
                    <p className="text-gray-600">Estrutura completa para dissecção anatômica com equipamentos de última geração.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#102140]/10 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-[#102140]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{SITE_CONFIG.location}</h3>
                    <p className="text-gray-600">Localização central, de fácil acesso a partir do aeroporto internacional.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#102140]/10 p-3 rounded-full mr-4">
                    <Navigation className="h-5 w-5 text-[#102140]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Transporte Incluso</h3>
                    <p className="text-gray-600">Transfer do aeroporto e translado diário para o centro de treinamento inclusos nos pacotes Diamond e Gold.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#102140]/10 p-3 rounded-full mr-4">
                    <Compass className="h-5 w-5 text-[#102140]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Ambiente Controlado e Seguro</h3>
                    <p className="text-gray-600">Toda a infraestrutura necessária para garantir o melhor aproveitamento do treinamento.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute w-48 h-48 bg-[#5CE1E6]/20 rounded-full -bottom-24 -left-24 blur-3xl"></div>
            <div className="absolute w-32 h-32 bg-[#102140]/10 rounded-full -top-16 right-16 blur-2xl"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img
                  src={SITE_CONFIG.images.location}
                  alt="Centro de Treinamento"
                  className="w-full h-full object-cover aspect-video"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute w-full h-32 bg-gradient-to-b from-white to-transparent top-0 left-0"></div>
      <div className="absolute w-full h-32 bg-gradient-to-t from-white to-transparent bottom-0 left-0"></div>
    </section>
  );
}