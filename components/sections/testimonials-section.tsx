"use client";

import React from 'react';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const testimonials = [
  {
    name: "Dr. Thiago Holanda",
    credentials: "CRM 3585 RQE 1783",
    location: "Teresina, PI",
    role: "Cirurgião",
    summary: "Saio do curso com um novo nível de confiança e técnicas avançadas.",
    quote: "Minha visão sobre cirurgia facial mudou completamente após as lições do Dr. Daniel Nunes e do Dr. João Ilgenfritz…",
    image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg"
  },
  {
    name: "Dr. Luciano Gazzoni",
    credentials: "CRM 8493 RQE 6960",
    location: "Brasília, DF",
    role: "Cirurgião Plástico",
    summary: "Vivenciei uma experiência única com insights valiosos para minha prática.",
    quote: "A abordagem técnica e a precisão deles me ofereceram insights valiosos que impactarão meus resultados...",
    image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg"
  },
  {
    name: "Dr. Marco Aurélio Jajah",
    credentials: "CRM 3900 RQE 2125",
    location: "Campo Grande, MS",
    role: "Cirurgião",
    summary: "Corrigi detalhes que fizeram toda a diferença nos resultados.",
    quote: "Ao acompanhar o trabalho do Dr. Daniel e do Dr. João, percebi a precisão e excelência, especialmente na região cervical…",
    image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg"
  }
];

export function TestimonialsSection() {
  const isMobile = useIsMobile();
  
  return (
    <section id="testimonials" className="section bg-gradient-to-b from-white to-medical-neutral py-[57px] relative z-10">
      <div className="container max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-4xl mb-4 text-medical-darkBlue font-bold">
            Relatos de Excelência
          </h2>
          <p className="text-gray-600 mb-12 md:mb-16 max-w-2xl mx-auto">
            Experiências compartilhadas por profissionais que participaram de edições anteriores
          </p>
        </motion.div>
        
        <Carousel 
          className="w-full"
          opts={{
            align: "start",
            loop: true,
            dragFree: !isMobile,
            containScroll: "trimSnaps"
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem 
                key={index} 
                className={cn("pl-2 md:pl-4", isMobile ? "basis-full" : "md:basis-1/2 lg:basis-1/3")}
              >
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card className="bg-white rounded-xl shadow-lg border-0 h-full flex flex-col">
                    <CardContent className="p-6 md:p-8 flex flex-col h-full">
                      <div className="mb-6 flex justify-center">
                        <Avatar className="h-16 w-16 md:h-20 md:w-20 border-4 border-white shadow-sm">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
                        </Avatar>
                      </div>
                      
                      <div className="flex-1 flex flex-col">
                        <div className="text-center mb-4 relative">
                          <span className="absolute text-5xl md:text-6xl text-medical-blue/15 font-serif top-0 left-0 leading-none">&ldquo;</span>
                          <h3 className="text-base md:text-lg font-bold text-medical-blue mb-3 md:mb-4 mt-3 md:mt-4 px-4 md:px-6">
                            {testimonial.summary}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600 italic line-clamp-4 mb-4 md:mb-6 px-3 md:px-4">
                            {testimonial.quote}
                          </p>
                        </div>
                        
                        <div className="mt-auto pt-5 md:pt-6 border-t border-gray-100 text-center">
                          <h4 className="font-bold text-medical-dark mb-1 text-sm md:text-base">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-500 mb-0.5">
                            {testimonial.credentials} • {testimonial.location}
                          </p>
                          <p className="text-xs text-gray-500">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center mt-6 md:mt-8 gap-4">
            <CarouselPrevious variant="outline" className="relative static md:absolute h-9 w-9 md:h-10 md:w-10 border-medical-blue/30 text-medical-blue hover:bg-medical-blue/10 hover:border-medical-blue" />
            <CarouselNext variant="outline" className="relative static md:absolute h-9 w-9 md:h-10 md:w-10 border-medical-blue/30 text-medical-blue hover:bg-medical-blue/10 hover:border-medical-blue" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}