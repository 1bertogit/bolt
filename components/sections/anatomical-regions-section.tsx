"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function AnatomicalRegionsSection() {
  const [activeRegion, setActiveRegion] = useState<number | null>(null);
  
  const regions = [{
    title: "Região Periocular",
    description: "Domínio completo da anatomia periocular para resultados precisos e naturais",
    details: "Aprenda os planos de dissecção seguros, técnicas de fixação e conexões neurovasculares cruciais.",
    image: "https://images.pexels.com/photos/5723967/pexels-photo-5723967.jpeg",
    color: "blue"
  }, {
    title: "Face Média",
    description: "Abordagem estruturada da anatomia da face média para rejuvenescimento harmonioso",
    details: "Explore a relação entre estruturas anatômicas e os vetores de suspensão mais efetivos.",
    image: "https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg",
    color: "blue"
  }, {
    title: "Região Submandibular",
    description: "Técnicas avançadas para definição mandibular e correção do pescoço",
    details: "Domine os compartimentos faciais profundos e superficiais para resultados duradouros.",
    image: "https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg",
    color: "blue"
  }];

  return (
    <section id="anatomical-regions" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Regiões <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Anatômicas</span> Abordadas
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Desenvolva domínio completo das áreas cruciais para resultados excepcionais no rejuvenescimento facial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              onClick={() => setActiveRegion(activeRegion === index ? null : index)}
              className="cursor-pointer"
            >
              <Card 
                className={`overflow-hidden border-2 transition-all duration-300 h-full ${
                  activeRegion === index 
                    ? 'border-blue-400 shadow-lg' 
                    : 'border-gray-100 hover:border-blue-200 hover:shadow-md'
                }`}
              >
                <div className="aspect-square w-full bg-gray-100 relative overflow-hidden">
                  <img 
                    src={region.image} 
                    alt={region.title} 
                    className="w-full h-full object-cover relative z-10 transition-transform duration-300 transform hover:scale-110" 
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-gray-900">{region.title}</CardTitle>
                  <CardDescription>{region.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-gray-600">{region.details}</p>
                </CardContent>
                
                <CardFooter className={`bg-gray-50 border-t border-gray-100 ${
                  activeRegion === index ? 'bg-blue-50 border-blue-100' : ''
                }`}>
                  <p className={`text-xs font-medium ${
                    activeRegion === index ? 'text-blue-600' : 'text-gray-600'
                  }`}>
                    {activeRegion === index ? 'Clique para minimizar' : 'Clique para saber mais'}
                  </p>
                </CardFooter>
                
                {activeRegion === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-blue-50 border-t border-blue-100"
                  >
                    <h4 className="font-medium text-gray-900 mb-2">Técnicas abordadas:</h4>
                    <ul className="text-sm text-gray-600 space-y-1 pl-4 list-disc">
                      <li>Identificação de marcos anatômicos</li>
                      <li>Planos de dissecção seguros</li>
                      <li>Vetores de sustentação otimizados</li>
                      <li>Preservação de estruturas neurovasculares</li>
                      <li>Técnicas de fixação duradouras</li>
                    </ul>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg">
            <p className="font-medium">Todas as regiões são abordadas em profundidade durante o curso</p>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -top-48 -right-48"></div>
      <div className="absolute w-72 h-72 bg-gray-100/50 rounded-full blur-3xl -bottom-36 -left-36"></div>
    </section>
  );
}