"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface CountdownProps {
  endDate: Date;
  totalSpots: number;
  filledSpots: number;
}

export function Countdown({ endDate, totalSpots, filledSpots }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = endDate.getTime() - now;
      
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isExpired: false
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const remainingSpots = totalSpots - filledSpots;
  const spotsProgress = (filledSpots / totalSpots) * 100;

  if (timeLeft.isExpired) {
    return (
      <Card className="p-6 bg-red-50 border-red-200">
        <div className="text-center text-red-600 font-bold text-xl">
          Inscrições Encerradas
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Dias", value: timeLeft.days },
          { label: "Horas", value: timeLeft.hours },
          { label: "Minutos", value: timeLeft.minutes },
          { label: "Segundos", value: timeLeft.seconds }
        ].map(({ label, value }) => (
          <Card key={label} className="p-4 bg-white/10 backdrop-blur-sm border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-[#5CE1E6] font-medium mt-1">
                {label}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-[#5CE1E6]">Vagas Preenchidas</span>
            <span className="text-white font-medium">
              {filledSpots} de {totalSpots}
            </span>
          </div>
          <Progress value={spotsProgress} className="h-2" />
          <div className="text-center text-white text-sm font-medium">
            Apenas {remainingSpots} {remainingSpots === 1 ? 'vaga disponível' : 'vagas disponíveis'}
          </div>
        </div>
      </Card>

      <div className="text-center text-sm text-[#5CE1E6]">
        Inscrições se encerram em {timeLeft.days} dias
      </div>
    </div>
  );
}