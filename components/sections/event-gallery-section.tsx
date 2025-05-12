"use client";

import React from 'react';
import { motion } from "framer-motion";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { SITE_CONFIG } from "@/lib/constants";

export function EventGallerySection() {
  const isMobile = useIsMobile();
  
  const galleryImages = [
    {
      src: SITE_CONFIG.images.gallery.event1,
      alt: "Demonstração de técnica cirúrgica",
      caption: "Demonstração de técnica cirúrgica com supervisão especializada"
    },
    {
      src: SITE_CONFIG.images.gallery.event2,
      alt: "Procedimento cirúrgico em grupo",
      caption: "Procedimento cirúrgico colaborativo com equipe de especialistas"
    },
    {
      src: SITE_CONFIG.images.gallery.event3,
      alt: "Técnica avançada de cirurgia",
      caption: "Aplicação de técnica avançada de cirurgia facial"
    },
    {
      src: SITE_CONFIG.images.gallery.event4,
      alt: "Documentação de procedimento",
      caption: "Documentação detalhada do procedimento para análise posterior"
    }
  ];

  return (
    <section className="py-24 bg-[#102140] text-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Momentos <span className="text-[#5CE1E6]">Exclusivos</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Confira imagens das edições anteriores do Beyond the LowerLift Cadaver Lab e antecipe a experiência transformadora que o aguarda.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem 
                  key={index} 
                  className={isMobile ? "basis-full" : "basis-1/2 lg:basis-1/3"}
                >
                  <div className="p-2 h-full">
                    <motion.div 
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-[#1a3057] rounded-xl overflow-hidden h-full flex flex-col"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 flex-grow">
                        <p className="text-sm text-gray-300">{image.caption}</p>
                      </div>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious 
                className="static bg-white/10 hover:bg-white/20 border-white/20" 
              />
              <CarouselNext 
                className="static bg-white/10 hover:bg-white/20 border-white/20" 
              />
            </div>
          </Carousel>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="font-medium text-[#5CE1E6]">
            Limitado a apenas 6 participantes por edição para garantir atenção individualizada
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            As imagens acima são de edições anteriores com participantes reais.
          </p>
        </motion.div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute w-96 h-96 bg-[#5CE1E6]/5 rounded-full -top-48 -left-48 blur-3xl"></div>
      <div className="absolute w-96 h-96 bg-[#5CE1E6]/5 rounded-full -bottom-48 -right-48 blur-3xl"></div>
    </section>
  );
}