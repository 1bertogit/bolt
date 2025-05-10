import { Calendar, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function LogisticsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Informações Logísticas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo o que você precisa saber sobre o evento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Data */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Data</h3>
            <p className="text-gray-700">{SITE_CONFIG.date}</p>
          </div>
          
          {/* Local */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Local</h3>
            <p className="text-gray-700">{SITE_CONFIG.location}</p>
          </div>
          
          {/* Carga Horária */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Carga Horária</h3>
            <p className="text-gray-700">24 horas de imersão total</p>
          </div>
        </div>
      </div>
    </section>
  );
}