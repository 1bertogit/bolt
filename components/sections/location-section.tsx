import { Building2, MapPin, Plane, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function LocationSection() {
  return (
    <section id="location" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Local do Evento
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Information */}
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Centro de Treinamento Especializado
                </h3>
                <p className="text-gray-600">
                  Estrutura completa para dissecção anatômica com equipamentos de última geração.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Campo Grande, MS
                </h3>
                <p className="text-gray-600">
                  Localização central, de fácil acesso a partir do aeroporto internacional.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <Plane className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Transporte Incluso
                </h3>
                <p className="text-gray-600">
                  Transfer do aeroporto e translado diário para o centro de treinamento inclusos nos pacotes Diamond e Gold.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ambiente Controlado e Seguro
                </h3>
                <p className="text-gray-600">
                  Toda a infraestrutura necessária para garantir o melhor aproveitamento do treinamento.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-w-16 aspect-h-9">
              <video 
                className="w-full h-full object-cover"
                poster="https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg"
                controls
              >
                <source src="/assets/videos/video-local-evento.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
            <div className="absolute top-4 left-4">
              <img 
                src="/assets/images/logo.png" 
                alt="Beyond the LowerLift" 
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}