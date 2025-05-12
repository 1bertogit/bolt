"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 text-white bg-blue-900">
      <div className="container px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 text-center">
            Transforme Sua Prática Cirúrgica
          </h2>
          <p className="text-xl mb-12 text-gray-200 text-center font-light">
            Apenas <span className="font-medium">6 vagas</span> para esta experiência exclusiva que revolucionará sua abordagem ao LowerLift®.
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-lg mb-12 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <Calendar className="h-5 w-5 mr-4 text-blue-400 mt-1" />
                <div>
                  <h3 className="font-bold mb-2 text-lg text-white">Data</h3>
                  <p className="text-gray-300 font-light">26 a 28 de junho de 2025</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-4 text-blue-400 mt-1" />
                <div>
                  <h3 className="font-bold mb-2 text-lg text-white">Local</h3>
                  <p className="text-gray-300 font-light">Campo Grande, MS</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-4 text-blue-400 mt-1" />
                <div>
                  <h3 className="font-bold mb-2 text-lg text-white">Duração</h3>
                  <p className="text-gray-300 font-light">3 dias de imersão total</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-5 w-5 mr-4 text-blue-400 mt-1" />
                <div>
                  <h3 className="font-bold mb-2 text-lg text-white">Participantes</h3>
                  <p className="text-gray-300 font-light">Apenas 6 vagas disponíveis</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md text-center p-6 md:p-8">
            <h3 className="text-gray-900 font-bold text-xl mb-6">
              Garanta sua vaga agora!
            </h3>
            <Button className="text-white font-medium py-6 px-8 rounded-md transition-all text-base w-full md:w-auto bg-blue-600 hover:bg-blue-700">
              QUERO ME INSCREVER
            </Button>
            <p className="mt-4 text-gray-600 text-sm">
              Inscrições limitadas. Preencha de 1 a 2 de 6 vagas disponíveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
