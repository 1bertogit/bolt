"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function ResultsShowcaseSection() {
  const isMobile = useIsMobile();

  const results = [{
    title: "LowerLift® com abordagem da região cervical",
    description: "Rejuvenescimento completo do terço inferior facial com definição do contorno mandibular e correção da flacidez cervical.",
    before: "/assets/images/lowerlift-before.jpg",
    after: "/assets/images/lowerlift-after.jpg",
    mentor: "Dr. Daniel Nunes"
  }, {
    title: "Face Média com Técnica Deep Plane",
    description: "Elevação da face média com abordagem profunda, preservando a naturalidade da expressão facial.",
    before: "/assets/images/facemedia-before.jpg",
    after: "/assets/images/facemedia-after.jpg",
    mentor: "Dr. João Ilgenfritz"
  }];

  const [sliderPositions, setSliderPositions] = useState<number[]>(results.map(() => 50));

  const handleSliderMove = (index: number, e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();

    let clientX: number;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const position = (clientX - rect.left) / rect.width * 100;
    const clampedPosition = Math.max(0, Math.min(100, position));

    setSliderPositions(prev => {
      const newPositions = [...prev];
      newPositions[index] = clampedPosition;
      return newPositions;
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            RESULTADOS EXCLUSIVOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Transformações <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Reais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos resultados obtidos pelos mentores utilizando as técnicas que serão ensinadas no Cadaver Lab.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100"
            >
              <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2'}`}>
                <div className="p-6 flex flex-col justify-between order-2 md:order-1">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {result.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {result.description}
                    </p>
                  </div>
                  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="mt-6 flex items-center text-blue-600 font-medium"
                  >
                    Aprenda esta técnica no curso
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </div>
                
                <div className="order-1 md:order-2 bg-gray-100">
                  <div 
                    className="relative w-full h-full cursor-col-resize"
                    onMouseMove={e => handleSliderMove(index, e)}
                    onTouchMove={e => handleSliderMove(index, e)}
                  >
                    <AspectRatio ratio={3/4} className="w-full h-full">
                      <img 
                        src={result.after} 
                        alt="Depois" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      <div 
                        className="absolute inset-0 h-full overflow-hidden"
                        style={{
                          width: `${sliderPositions[index]}%`,
                          borderRight: '2px solid white'
                        }}
                      >
                        <img 
                          src={result.before} 
                          alt="Antes" 
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{
                            minWidth: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                      
                      <div 
                        className="absolute top-0 bottom-0 w-4 bg-white opacity-70 hover:opacity-100 cursor-col-resize flex items-center justify-center transform -translate-x-1/2 transition-opacity duration-200"
                        style={{
                          left: `${sliderPositions[index]}%`
                        }}
                      >
                        <div className="h-10 w-1 bg-blue-400 rounded-full"></div>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs z-10">
                        Antes
                      </div>
                      <div className="absolute bottom-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs z-10">
                        Depois
                      </div>
                    </AspectRatio>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500">
            No Beyond the LowerLift Cadaver Lab, você aprenderá as técnicas exatas utilizadas para obter estes resultados.
          </p>
        </motion.div>
      </div>
      
      <div className="absolute w-72 h-72 rounded-full bg-blue-100/50 -bottom-36 -left-36 blur-3xl"></div>
      <div className="absolute w-96 h-96 rounded-full bg-gray-100/50 -top-48 -right-48 blur-3xl"></div>
    </section>
  );
}