import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const AnatomicalRegionsSection: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<number | null>(null);
  
  const regions = [{
    title: "Região Periocular",
    description: "Domínio completo da anatomia periocular para resultados precisos e naturais",
    details: "Aprenda os planos de dissecção seguros, técnicas de fixação e conexões neurovasculares cruciais.",
    imagePath: "https://images.pexels.com/photos/4226765/pexels-photo-4226765.jpeg",
    color: "#102140"
  }, {
    title: "Face Média",
    description: "Abordagem estruturada da anatomia da face média para rejuvenescimento harmonioso",
    details: "Explore a relação entre estruturas anatômicas e os vetores de suspensão mais efetivos.",
    imagePath: "https://images.pexels.com/photos/4226766/pexels-photo-4226766.jpeg",
    color: "#0B526C"
  }, {
    title: "Região Submandibular",
    description: "Técnicas avançadas para definição mandibular e correção do pescoço",
    details: "Domine os compartimentos faciais profundos e superficiais para resultados duradouros.",
    imagePath: "https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg",
    color: "#0A3D4F"
  }];

  return (
    <section id="anatomical-regions" className="section py-24 bg-gradient-to-b from-[#5CE1E6]/5 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#102140]">
            Regiões <span className="text-gradient bg-gradient-to-r from-[#102140] to-[#5CE1E6] bg-clip-text text-transparent">Anatômicas</span> Abordadas
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
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
                    ? 'border-[#5CE1E6] shadow-[0_0_20px_rgba(92,225,230,0.3)]' 
                    : 'border-[#102140]/10 hover:border-[#5CE1E6]/50 hover:shadow-lg'
                }`}
              >
                <div 
                  className="aspect-square w-full bg-gray-100 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${region.color}CC, ${region.color})`
                  }}
                >
                  <img 
                    src={region.imagePath} 
                    alt={region.title} 
                    className="w-full h-full object-cover relative z-10 transition-transform duration-300 transform hover:scale-110"
                  />
                  
                  {/* Decorative elements */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#5CE1E6] rounded-full blur-3xl transform -translate-x-16 translate-y-16"></div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-[#102140] font-montserrat">{region.title}</CardTitle>
                  <CardDescription>{region.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-gray-600">{region.details}</p>
                </CardContent>
                
                <CardFooter className={`bg-[#102140]/5 border-t border-[#102140]/10 ${
                  activeRegion === index ? 'bg-[#5CE1E6]/10 border-[#5CE1E6]/20' : ''
                }`}>
                  <p className={`text-xs font-medium ${
                    activeRegion === index ? 'text-[#5CE1E6]' : 'text-[#102140]'
                  }`}>
                    {activeRegion === index ? 'Clique para minimizar' : 'Clique para saber mais'}
                  </p>
                </CardFooter>
                
                {/* Expanded content */}
                {activeRegion === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-[#5CE1E6]/5 border-t border-[#5CE1E6]/20"
                  >
                    <h4 className="font-medium text-[#102140] mb-2">Técnicas abordadas:</h4>
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
          <div className="inline-block bg-[#102140] text-white px-6 py-3 rounded-full shadow-lg">
            <p className="font-medium">Todas as regiões são abordadas em profundidade durante o curso</p>
          </div>
        </motion.div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5CE1E6]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#102140]/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default AnatomicalRegionsSection;

export { AnatomicalRegionsSection }