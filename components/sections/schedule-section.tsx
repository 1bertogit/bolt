"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Download, Users, Coffee, BookOpen, Microscope, MessageCircle, UtensilsCrossed, Award, MapPin } from 'lucide-react';
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

  const handleDownloadPDF = () => {
    // Em um ambiente real, aqui seria gerado o PDF
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Cronograma - Beyond the LowerLift: Cadaver Lab 2025</title>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700&display=swap');
              
              body { 
                font-family: 'Open Sans', sans-serif; 
                margin: 40px;
                color: #2D3748;
                line-height: 1.6;
              }
              
              h1 { 
                color: #0A5F7A; 
                font-family: 'Montserrat', sans-serif;
                text-align: center; 
                margin-bottom: 30px; 
                font-size: 28px;
                font-weight: 700;
              }
              
              .event-info {
                text-align: center;
                margin-bottom: 40px;
                color: #4A5568;
              }
              
              .day-schedule {
                margin-bottom: 40px;
              }
              
              h2 {
                color: #2B6CB0;
                font-size: 24px;
                margin-bottom: 20px;
                padding-bottom: 10px;
                border-bottom: 2px solid #E2E8F0;
              }
              
              .activity {
                display: flex;
                margin-bottom: 15px;
                padding: 10px;
                background: #F7FAFC;
                border-radius: 8px;
              }
              
              .time {
                font-weight: 600;
                min-width: 150px;
                color: #2D3748;
              }
              
              .title {
                font-weight: 500;
                color: #2D3748;
              }
              
              .description {
                color: #718096;
                font-size: 14px;
              }
              
              .separator {
                height: 1px;
                background: #E2E8F0;
                margin: 30px 0;
              }
              
              .footer {
                margin-top: 50px;
                text-align: center;
                color: #718096;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header-logo">
              <img src="/assets/images/logo.png" class="logo" alt="Beyond the LowerLift" />
            </div>
            
            <h1>Cronograma Completo - Cadaver Lab 2025</h1>
            
            <div class="event-info">
              <p><strong>Local:</strong> ${SITE_CONFIG.location}</p>
              <p><strong>Data:</strong> ${SITE_CONFIG.date}</p>
            </div>
            
            ${scheduleData.map((day, index) => `
              <div class="day-schedule">
                <h2>${day.day} - ${day.date}</h2>
                ${day.schedule.map(item => `
                  <div class="activity">
                    <div class="time">${item.time}</div>
                    <div class="title">${item.activity}</div>
                  </div>
                `).join('')}
                ${index < scheduleData.length - 1 ? '<div class="separator"></div>' : ''}
              </div>
            `).join('')}
            
            <div class="footer">
              <p>© 2025 Beyond the LowerLift: Cadaver Lab. Todos os direitos reservados.</p>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      setTimeout(() => {
        printWindow.print();
      }, 1000);
    }
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
            onClick={handleDownloadPDF}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Download className="mr-2 h-4 w-4" />
            Baixar Cronograma Detalhado
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