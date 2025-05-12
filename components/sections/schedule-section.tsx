"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Download, Users, Coffee, BookOpen, Microscope, MessageCircle, UtensilsCrossed, Award, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const scheduleData = [
  {
    day: "Dia 1",
    date: "15 de Março, 2025",
    schedule: [
      { time: "08:00 - 09:00", activity: "Recepção e Credenciamento", icon: <Users className="h-5 w-5 text-blue-600" /> },
      { time: "09:00 - 10:30", activity: "Introdução à Anatomia Facial Avançada", icon: <BookOpen className="h-5 w-5 text-blue-600" /> },
      { time: "10:30 - 11:00", activity: "Coffee Break", icon: <Coffee className="h-5 w-5 text-blue-600" /> },
      { time: "11:00 - 12:30", activity: "Demonstração: Face Média e Inferior", icon: <Microscope className="h-5 w-5 text-blue-600" /> },
      { time: "12:30 - 14:00", activity: "Almoço", icon: <UtensilsCrossed className="h-5 w-5 text-blue-600" /> },
      { time: "14:00 - 16:00", activity: "Hands-On: Dissecção Inicial", icon: <Microscope className="h-5 w-5 text-blue-600" /> },
      { time: "16:00 - 16:30", activity: "Coffee Break", icon: <Coffee className="h-5 w-5 text-blue-600" /> },
      { time: "16:30 - 18:30", activity: "Hands-On: SMAS e Ligamentos", icon: <Microscope className="h-5 w-5 text-blue-600" /> },
      { time: "18:30 - 19:00", activity: "Discussão e Fechamento", icon: <MessageCircle className="h-5 w-5 text-blue-600" /> }
    ]
  },
  {
    day: "Dia 2",
    date: "16 de Março, 2025",
    schedule: [
      { time: "08:30 - 09:00", activity: "Recap do Dia Anterior", icon: <BookOpen className="h-5 w-5 text-blue-600" /> },
      { time: "09:00 - 10:30", activity: "Demonstração: Região Cervical", icon: <Microscope className="h-5 w-5 text-blue-600" /> },
      { time: "10:30 - 11:00", activity: "Coffee Break", icon: <Coffee className="h-5 w-5 text-blue-600" /> },
      { time: "11:00 - 12:30", activity: "Hands-On: Platisma e Fáscias", icon: <Microscope className="h-5 w-5 text-blue-600" /> },
      { time: "12:30 - 14:00", activity: "Almoço", icon: <UtensilsCrossed className="h-5 w-5 text-blue-600" /> },
      { time: "14:00 - 16:00", activity: "Hands-On: Estruturas Neurovasculares", icon: <Microscope className="h-5 w-5 text-blue-600" /> },
      { time: "16:00 - 16:30", activity: "Coffee Break", icon: <Coffee className="h-5 w-5 text-blue-600" /> },
      { time: "16:30 - 18:30", activity: "Técnicas de Suspensão e Lifting", icon: <Microscope className="h-5 w-5 text-blue-600" /> },
      { time: "18:30 - 19:00", activity: "Discussão e Fechamento", icon: <MessageCircle className="h-5 w-5 text-blue-600" /> }
    ]
  },
  {
    day: "Dia 3",
    date: "17 de Março, 2025",
    schedule: [
      { time: "08:30 - 09:00", activity: "Recap do Dia Anterior", icon: <BookOpen className="h-5 w-5 text-blue-600" /> },
      { time: "09:00 - 10:30", activity: "Demonstração: Região Periorbital", icon: <Microscope className="h-5 w-5 text-blue-600" /> },
      { time: "10:30 - 11:00", activity: "Coffee Break", icon: <Coffee className="h-5 w-5 text-blue-600" /> },
      { time: "11:00 - 12:30", activity: "Hands-On: Septos e Ligamentos", icon: <Microscope className="h-5 w-5 text-blue-600" /> },
      { time: "12:30 - 14:00", activity: "Almoço", icon: <UtensilsCrossed className="h-5 w-5 text-blue-600" /> },
      { time: "14:00 - 16:00", activity: "Hands-On: Técnicas Completas", icon: <Microscope className="h-5 w-5 text-blue-600" /> },
      { time: "16:00 - 16:30", activity: "Coffee Break", icon: <Coffee className="h-5 w-5 text-blue-600" /> },
      { time: "16:30 - 18:00", activity: "Mesa Redonda: Casos Clínicos", icon: <MessageCircle className="h-5 w-5 text-blue-600" /> },
      { time: "18:00 - 19:00", activity: "Cerimônia de Encerramento e Certificados", icon: <Award className="h-5 w-5 text-blue-600" /> }
    ]
  }
];

export function ScheduleSection() {
  const [activeTab, setActiveTab] = useState("day1");

  const handleDownloadSchedule = () => {
    // Open email modal with pre-filled subject
    window.location.href = `mailto:${SITE_CONFIG.contact.email}?subject=Solicitar Cronograma Detalhado - Beyond the LowerLift&body=Olá, gostaria de receber o cronograma detalhado do Beyond the LowerLift Cadaver Lab.`;
  };

  return (
    <section id="schedule" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cronograma Completo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Três dias de imersão intensiva em anatomia e técnicas cirúrgicas avançadas.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <Button 
            onClick={handleDownloadSchedule}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Download className="mr-2 h-4 w-4" />
            Solicitar Cronograma Detalhado
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {scheduleData.map((day, index) => (
                <TabsTrigger key={index} value={`day${index + 1}`}>
                  {day.day}
                </TabsTrigger>
              ))}
            </TabsList>

            {scheduleData.map((day, dayIndex) => (
              <TabsContent key={dayIndex} value={`day${dayIndex + 1}`}>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6 bg-blue-50 border-b border-blue-100">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900">
                        {day.day} - {day.date}
                      </h3>
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>

                  <div className="divide-y divide-gray-100">
                    {day.schedule.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="flex items-start p-6 hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-32 flex-shrink-0 font-medium text-gray-700">
                          {item.time}
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50">
                            {item.icon}
                          </div>
                          <span className="text-gray-800">{item.activity}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="text-center p-5 bg-white rounded-lg shadow-md mt-10 max-w-2xl mx-auto border border-gray-100">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="bg-blue-50 p-2 rounded-full">
              <MapPin className="text-blue-600" size={18} />
            </div>
            <h3 className="font-bold text-blue-900">Local do Evento</h3>
          </div>
          <p className="text-gray-700">
            {SITE_CONFIG.location}
          </p>
        </div>
      </div>
    </section>
  );
}