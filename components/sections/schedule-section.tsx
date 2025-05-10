"use client";

import { useState } from "react";
import { BookOpen, Coffee, Edit, FolderOpen, Microscope, Scissors } from "lucide-react";

const scheduleData = [
  {
    day: "Dia 1",
    date: "15 de Março, 2025",
    schedule: [
      { time: "08:00 - 09:00", activity: "Recepção e Credenciamento", icon: <FolderOpen className="h-5 w-5" /> },
      { time: "09:00 - 10:30", activity: "Introdução à Anatomia Facial Avançada", icon: <BookOpen className="h-5 w-5" /> },
      { time: "10:30 - 11:00", activity: "Coffee Break", icon: <Coffee className="h-5 w-5" /> },
      { time: "11:00 - 12:30", activity: "Demonstração: Face Média e Inferior", icon: <Microscope className="h-5 w-5" /> },
      { time: "12:30 - 14:00", activity: "Almoço", icon: <Coffee className="h-5 w-5" /> },
      { time: "14:00 - 16:00", activity: "Hands-On: Dissecção Inicial", icon: <Scissors className="h-5 w-5" /> },
      { time: "16:00 - 16:30", activity: "Coffee Break", icon: <Coffee className="h-5 w-5" /> },
      { time: "16:30 - 18:30", activity: "Hands-On: SMAS e Ligamentos", icon: <Scissors className="h-5 w-5" /> },
      { time: "18:30 - 19:00", activity: "Discussão e Fechamento", icon: <Edit className="h-5 w-5" /> }
    ]
  },
  {
    day: "Dia 2",
    date: "16 de Março, 2025",
    schedule: [
      { time: "08:30 - 09:00", activity: "Recap do Dia Anterior", icon: <BookOpen className="h-5 w-5" /> },
      { time: "09:00 - 10:30", activity: "Demonstração: Região Cervical", icon: <Microscope className="h-5 w-5" /> },
      { time: "10:30 - 11:00", activity: "Coffee Break", icon: <Coffee className="h-5 w-5" /> },
      { time: "11:00 - 12:30", activity: "Hands-On: Platisma e Fáscias", icon: <Scissors className="h-5 w-5" /> },
      { time: "12:30 - 14:00", activity: "Almoço", icon: <Coffee className="h-5 w-5" /> },
      { time: "14:00 - 16:00", activity: "Hands-On: Estruturas Neurovasculares", icon: <Scissors className="h-5 w-5" /> },
      { time: "16:00 - 16:30", activity: "Coffee Break", icon: <Coffee className="h-5 w-5" /> },
      { time: "16:30 - 18:30", activity: "Técnicas de Suspensão e Lifting", icon: <Microscope className="h-5 w-5" /> },
      { time: "18:30 - 19:00", activity: "Discussão e Fechamento", icon: <Edit className="h-5 w-5" /> }
    ]
  },
  {
    day: "Dia 3",
    date: "17 de Março, 2025",
    schedule: [
      { time: "08:30 - 09:00", activity: "Recap do Dia Anterior", icon: <BookOpen className="h-5 w-5" /> },
      { time: "09:00 - 10:30", activity: "Demonstração: Região Periorbital", icon: <Microscope className="h-5 w-5" /> },
      { time: "10:30 - 11:00", activity: "Coffee Break", icon: <Coffee className="h-5 w-5" /> },
      { time: "11:00 - 12:30", activity: "Hands-On: Septos e Ligamentos", icon: <Scissors className="h-5 w-5" /> },
      { time: "12:30 - 14:00", activity: "Almoço", icon: <Coffee className="h-5 w-5" /> },
      { time: "14:00 - 16:00", activity: "Hands-On: Técnicas Completas", icon: <Scissors className="h-5 w-5" /> },
      { time: "16:00 - 16:30", activity: "Coffee Break", icon: <Coffee className="h-5 w-5" /> },
      { time: "16:30 - 18:00", activity: "Mesa Redonda: Casos Clínicos", icon: <Edit className="h-5 w-5" /> },
      { time: "18:00 - 19:00", activity: "Cerimônia de Encerramento e Certificados", icon: <FolderOpen className="h-5 w-5" /> }
    ]
  }
];

export function ScheduleSection() {
  const [activeTab, setActiveTab] = useState(0);
  
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

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          {scheduleData.map((day, index) => (
            <button
              key={index}
              className={`px-4 py-3 font-medium text-sm md:text-base transition-colors border-b-2 ${
                activeTab === index 
                  ? 'text-blue-600 border-blue-600' 
                  : 'text-gray-600 border-transparent hover:text-blue-600 hover:border-blue-300'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {day.day} • {day.date}
            </button>
          ))}
        </div>
        
        {/* Schedule Table */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 bg-blue-50 border-b border-blue-100">
            <h3 className="text-xl font-bold text-gray-900">
              {scheduleData[activeTab].day} - {scheduleData[activeTab].date}
            </h3>
          </div>
          
          <div className="divide-y divide-gray-100">
            {scheduleData[activeTab].schedule.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="w-24 flex-shrink-0 font-medium text-gray-700">{item.time}</div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-gray-800">{item.activity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}