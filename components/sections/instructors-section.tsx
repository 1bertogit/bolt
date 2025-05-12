"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { SITE_CONFIG } from "@/lib/constants";

export function InstructorsSection() {
  const isMobile = useIsMobile();
  
  const instructors = [
    {
      name: "Dr. Daniel Nunes",
      title: "Cirurgião Plástico & Diretor Científico",
      bio: "Especialista em rejuvenescimento facial e criador da técnica LowerLift®. Possui mais de 15 anos de experiência em procedimentos faciais avançados e ministra cursos de anatomia aplicada em cadáveres desde 2018.",
      credentials: ["Membro Titular da Sociedade Brasileira de Cirurgia Plástica", "Coordenador de cursos avançados em anatomia facial", "Pesquisador na área de rejuvenescimento facial minimamente invasivo", "Mais de 500 procedimentos de LowerLift® realizados"],
      image: "/assets/images/mentor-daniel-nunes.jpg",
      specialization: "Rejuvenescimento Facial Avançado"
    },
    {
      name: "Dr. João Ilgenfritz",
      title: "Cirurgião Plástico & Anatomista Clínico",
      bio: "Referência em dissecção anatômica e mapeamento de estruturas faciais. Lidera pesquisas inovadoras em planos de dissecção seguros e técnicas minimamente invasivas para resultados naturais.",
      credentials: ["Membro Titular do Colégio Brasileiro de Cirurgiões", "Pesquisador em Anatomia Cirúrgica Avançada", "Instrutor internacional de técnicas de dissecção facial", "Autor de estudos científicos sobre planos de dissecção facial"],
      image: "/assets/images/mentor-joao-ilgenfritz.jpg",
      specialization: "Anatomia Cirúrgica Aplicada"
    }
  ];
  
  return (
    <section id="instructors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Mentores do Cadaver Lab
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Instrução exclusiva dos maiores especialistas em rejuvenescimento facial e anatomia aplicada
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {instructors.map((instructor, index) => (
            <Card key={index} className="overflow-hidden border-blue-100 hover:border-blue-200 transition-all duration-300 group shadow-lg h-full">
              <div className={`flex flex-col ${isMobile ? '' : 'md:flex-row'} h-full`}>
                <div className={`w-full ${isMobile ? 'h-auto max-h-80' : 'md:w-2/5'} bg-gray-50 relative ${isMobile ? 'aspect-square' : 'md:h-full'}`}>
                  <div className="absolute inset-0 overflow-hidden">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name} 
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" 
                    />
                  </div>
                </div>
                <div className={`w-full ${isMobile ? '' : 'md:w-3/5'} p-6 flex flex-col justify-between`}>
                  <div>
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-gray-900 text-xl md:text-2xl group-hover:text-blue-600 transition-colors font-bold">
                        {instructor.name}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium mt-1">
                        {instructor.title}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 pb-4">
                      <p className="text-gray-600 mb-4">
                        {instructor.bio}
                      </p>
                      <div className="mt-2">
                        <h4 className="text-sm font-semibold text-blue-600 mb-2">
                          Especialização em {instructor.specialization}
                        </h4>
                        <ul className="text-sm space-y-1">
                          {instructor.credentials.map((credential, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-blue-600 mr-2">•</span>
                              <span className="text-gray-600">{credential}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                  <CardFooter className="p-0 pt-4 mt-auto">
                    <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100">
                      Expert em Cadaver Lab Training
                    </Badge>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}