import { MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function LocationSection() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Local do Evento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O evento será realizado em um dos mais modernos laboratórios de anatomia do Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <video 
                src="/assets/videos/video-local-evento.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 flex-shrink-0">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{SITE_CONFIG.location}</h3>
                <p className="text-gray-600 mb-4">
                  Localizado em uma das regiões mais acessíveis de São Paulo, 
                  o Hospital Santa Catarina oferece instalações de primeira linha, 
                  com toda a infraestrutura necessária para o Cadaver Lab.
                </p>
                <p className="text-gray-600">
                  O laboratório conta com equipamentos de última geração, incluindo 
                  sistemas de vídeo de alta definição para registro detalhado de 
                  cada procedimento realizado pelos participantes.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-4">
              <h4 className="font-bold text-blue-900 mb-2">Facilidades no Local</h4>
              <ul className="text-blue-700 space-y-2">
                <li>• Estacionamento com manobrista</li>
                <li>• Coffee breaks e almoço inclusos</li>
                <li>• Wi-Fi de alta velocidade</li>
                <li>• Material de proteção individual fornecido</li>
                <li>• Área de descanso exclusiva para participantes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}