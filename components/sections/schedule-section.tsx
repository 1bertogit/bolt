"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Clock, Users, Coffee, BookOpen, Microscope, MessageCircle, UtensilsCrossed, Award } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  mentor?: string;
  icon: JSX.Element;
}

const scheduleData: { [key: string]: { date: string; items: ScheduleItem[] } } = {
  "day-1": {
    date: "26 de Junho de 2025",
    items: [
      {
        time: "08:00 - 09:00",
        title: "Recepção e credenciamento",
        description: "Café da manhã de boas-vindas.",
        icon: <Coffee className="h-5 w-5" />,
        mentor: "Equipe Técnica"
      },
      {
        time: "09:00 - 10:30",
        title: "Aula teórica introdutória",
        description: "Fundamentos anatômicos do LowerLift.",
        icon: <BookOpen className="h-5 w-5" />,
        mentor: "Dr. Daniel Nunes"
      },
      {
        time: "10:30 - 12:00",
        title: "Live surgery demonstrativa",
        description: "Técnica avançada em cadáver.",
        icon: <Microscope className="h-5 w-5" />,
        mentor: "Dr. João Ilgenfritz"
      },
      {
        time: "12:00 - 13:30",
        title: "Almoço e networking",
        description: "Momento para troca de experiências.",
        icon: <UtensilsCrossed className="h-5 w-5" />
      },
      {
        time: "13:30 - 17:00",
        title: "Hands-on: Região periocular",
        description: "Prática individualizada com mentoria.",
        icon: <Users className="h-5 w-5" />,
        mentor: "Mentores"
      },
      {
        time: "17:00 - 18:00",
        title: "Debriefing e discussões",
        description: "Análise dos procedimentos do dia.",
        icon: <MessageCircle className="h-5 w-5" />,
        mentor: "Mentores"
      }
    ]
  },
  "day-2": {
    date: "27 de Junho de 2025",
    items: [
      {
        time: "08:00 - 08:30",
        title: "Revisão anatômica dirigida",
        description: "Revisão dos conceitos fundamentais.",
        icon: <BookOpen className="h-5 w-5" />,
        mentor: "Dr. Daniel Nunes"
      },
      {
        time: "08:30 - 12:00",
        title: "Hands-on: Face média",
        description: "Treinamento técnico com mentoria ativa.",
        icon: <Users className="h-5 w-5" />,
        mentor: "Mentores"
      },
      {
        time: "12:00 - 13:30",
        title: "Almoço executivo",
        description: "Pausa para refeição e networking.",
        icon: <UtensilsCrossed className="h-5 w-5" />
      },
      {
        time: "13:30 - 17:00",
        title: "Hands-on: Região submandibular",
        description: "Abordagens profundas com precisão anatômica.",
        icon: <Microscope className="h-5 w-5" />,
        mentor: "Mentores"
      },
      {
        time: "17:00 - 18:00",
        title: "Discussão de casos clínicos",
        description: "Análise de casos e esclarecimento de dúvidas.",
        icon: <MessageCircle className="h-5 w-5" />,
        mentor: "Mentores"
      },
      {
        time: "20:00",
        title: "Jantar com mentores",
        description: "Exclusivo para Plano Diamond.",
        icon: <UtensilsCrossed className="h-5 w-5" />,
        mentor: "Mentores"
      }
    ]
  },
  "day-3": {
    date: "28 de Junho de 2025",
    items: [
      {
        time: "08:00 - 10:00",
        title: "Sessão prática integrativa",
        description: "LowerLift completo.",
        icon: <Users className="h-5 w-5" />,
        mentor: "Mentores"
      },
      {
        time: "10:00 - 12:00",
        title: "Sessão de fixações profundas",
        description: "Vetores de tração e técnicas avançadas.",
        icon: <Microscope className="h-5 w-5" />,
        mentor: "Mentores"
      },
      {
        time: "12:00 - 13:30",
        title: "Almoço e encerramento",
        description: "Momento de confraternização.",
        icon: <UtensilsCrossed className="h-5 w-5" />
      },
      {
        time: "13:30 - 16:00",
        title: "Avaliação individual",
        description: "Feedback técnico personalizado.",
        icon: <MessageCircle className="h-5 w-5" />,
        mentor: "Mentores"
      },
      {
        time: "16:00 - 17:00",
        title: "Entrega de certificados",
        description: "Encerramento oficial do curso.",
        icon: <Award className="h-5 w-5" />,
        mentor: "Equipe Técnica"
      }
    ]
  }
};

export function ScheduleSection() {
  const [activeTab, setActiveTab] = useState("day-1");

  const handleDownload = () => {
    // TODO: Implement PDF download
    alert("Download do cronograma em PDF estará disponível em breve!");
  };

  return (
    <section id="schedule" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cronograma Completo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Três dias de imersão intensiva em anatomia e técnicas cirúrgicas avançadas.
            </p>
          </div>
          <Button
            onClick={handleDownload}
            className="mt-4 md:mt-0 gold-gradient text-white hover:opacity-90"
          >
            <Download className="mr-2 h-4 w-4" />
            Baixar Cronograma
          </Button>
        </div>

        <Tabs defaultValue="day-1" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-gradient-to-r from-blue-50 via-white to-blue-50 p-1 rounded-xl">
            <TabsTrigger 
              value="day-1"
              className="data-[state=active]:gold-gradient data-[state=active]:text-white"
            >
              Dia 1
            </TabsTrigger>
            <TabsTrigger 
              value="day-2"
              className="data-[state=active]:gold-gradient data-[state=active]:text-white"
            >
              Dia 2
            </TabsTrigger>
            <TabsTrigger 
              value="day-3"
              className="data-[state=active]:gold-gradient data-[state=active]:text-white"
            >
              Dia 3
            </TabsTrigger>
          </TabsList>

          {Object.entries(scheduleData).map(([day, data]) => (
            <TabsContent key={day} value={day}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
                <h3 className="text-xl font-bold gold-text">
                  {data.date}
                </h3>
              </div>
              <div className="space-y-6">
                {data.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg border border-gray-100 hover:border-blue-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex-shrink-0">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="gold-text font-medium">
                            {item.time}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 mb-3">
                          {item.description}
                        </p>
                        {item.mentor && (
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Users className="h-4 w-4" />
                            <span>{item.mentor}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}