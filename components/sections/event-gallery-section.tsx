"use client";

import { motion } from "framer-motion";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

export function EventGallerySection() {
  const isMobile = useIsMobile();
  
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg",
      alt: "Demonstração de técnica cirúrgica",
      caption: "Demonstração de técnica cirúrgica com supervisão especializada"
    },
    {
      src: "https://images.pexels.com/photos/4226258/pexels-photo-4226258.jpeg",
      alt: "Procedimento cirúrgico em grupo",
      caption: "Procedimento cirúrgico colaborativo com equipe de especialistas"
    },
    {
      src: "https://images.pexels.com/photos/4226262/pexels-photo-4226262.jpeg",
      alt: "Técnica avançada de cirurgia",
      caption: "Aplicação de técnica avançada de cirurgia facial"
    },
    {
      src: "https://images.pexels.com/photos/4226269/pexels-photo-4226269.jpeg",
      alt: "Documentação de procedimento",
      caption: "Documentação detalhada do procedimento para análise posterior"
    }
  ];

  return (
    <section className="py-24 bg-blue-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Momentos <span className="text-blue-300">Exclusivos</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
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
                      className="bg-blue-800 rounded-xl overflow-hidden h-full flex flex-col"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 flex-grow">
                        <p className="text-sm text-blue-100">{image.caption}</p>
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
          <p className="font-medium text-blue-300">
            Limitado a apenas 6 participantes por edição para garantir atenção individualizada
          </p>
          <p className="text-blue-200/70 mt-2 text-sm">
            As imagens acima são de edições anteriores com participantes reais.
          </p>
        </motion.div>
      </div>
      
      <div className="absolute w-96 h-96 bg-blue-400/5 rounded-full -top-48 -left-48 blur-3xl"></div>
      <div className="absolute w-96 h-96 bg-blue-400/5 rounded-full -bottom-48 -right-48 blur-3xl"></div>
    </section>
  );
}