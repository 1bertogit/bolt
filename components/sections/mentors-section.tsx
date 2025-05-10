import Image from "next/image";
import { Award, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MentorsSection() {
  return (
    <section id="mentors" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mentores Especialistas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprenda com quem domina a técnica e possui vasta experiência em treinamento anatômico avançado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mentor 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex-shrink-0">
              <div className="relative h-64 w-56 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/assets/images/mentor-daniel-nunes.jpg"
                  alt="Dr. Daniel Nunes"
                  width={224}
                  height={256}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="mt-4 flex justify-center">
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-200 hover:bg-blue-50"
                >
                  <FileCheck className="h-4 w-4 mr-2" />
                  Expert em Cadaver Lab Training
                </Button>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Daniel Nunes</h3>
              <p className="text-blue-600 font-medium flex items-center justify-center md:justify-start gap-2 mb-4">
                <Award className="h-5 w-5" />
                <span>Cirurgião Plástico Especialista</span>
              </p>
              <p className="text-gray-700 mb-4">
                Referência internacional em técnicas de rejuvenescimento facial, 
                com mais de 15 anos de experiência em treinamento anatômico em cadáver.
                Realizou mais de 300 procedimentos demonstrativos e treinou mais de 
                1000 profissionais em todo o mundo.
              </p>
              <p className="text-gray-700">
                "A dissecção em cadáver é o elo perdido entre o conhecimento teórico 
                e a prática cirúrgica segura. No Beyond the LowerLift, levamos você 
                além das limitações tradicionais."
              </p>
            </div>
          </div>
          
          {/* Mentor 2 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex-shrink-0">
              <div className="relative h-64 w-56 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/assets/images/mentor-joao-ilgenfritz.jpg"
                  alt="Dr. João Ilgenfritz"
                  width={224}
                  height={256}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="mt-4 flex justify-center">
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-200 hover:bg-blue-50"
                >
                  <FileCheck className="h-4 w-4 mr-2" />
                  Expert em Cadaver Lab Training
                </Button>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. João Ilgenfritz</h3>
              <p className="text-blue-600 font-medium flex items-center justify-center md:justify-start gap-2 mb-4">
                <Award className="h-5 w-5" />
                <span>Cirurgião Plástico Especialista</span>
              </p>
              <p className="text-gray-700 mb-4">
                Pioneiro em técnicas inovadoras de rejuvenescimento facial e corporal, 
                com extensa experiência em anatomia aplicada à cirurgia plástica. 
                Coordenador de mais de 50 Cadaver Labs em instituições renomadas.
              </p>
              <p className="text-gray-700">
                "A compreensão profunda da anatomia tridimensional é o que diferencia 
                o cirurgião comum do excepcional. No Cadaver Lab, construímos essa 
                visão única que transforma resultados."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}