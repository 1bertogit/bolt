"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CountdownProps {
  endDate: Date;
  totalSpots: number;
  filledSpots: number;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown({ endDate, totalSpots, filledSpots }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isEnded, setIsEnded] = useState(false);
  const [isLessThan24h, setIsLessThan24h] = useState(false);
  
  const remainingSpots = totalSpots - filledSpots;
  const isLowSpots = remainingSpots <= 2;

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setIsEnded(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      setIsLessThan24h(difference <= 24 * 60 * 60 * 1000);

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <motion.div 
        key={value}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "w-20 h-20 md:w-24 md:h-24 rounded-xl flex items-center justify-center mb-2",
          "bg-gradient-to-br from-[#1a3057] to-[#102140]",
          "border border-[#5CE1E6]/20 shadow-lg",
          isLessThan24h && "from-red-900 to-red-800 border-red-500/20"
        )}
      >
        <span className="text-3xl md:text-4xl font-bold text-white">
          {value.toString().padStart(2, '0')}
        </span>
      </motion.div>
      <span className="text-sm text-[#5CE1E6] font-medium">{label}</span>
    </div>
  );

  if (isEnded) {
    return (
      <div className="bg-red-900/20 backdrop-blur-sm border border-red-500/20 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-red-500 mb-2">Inscrições Encerradas</h3>
        <p className="text-white/80">O período de inscrições para este evento já se encerrou.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#1a3057]/50 backdrop-blur-sm border border-[#5CE1E6]/20 rounded-xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          {isLessThan24h ? "Últimas Horas para Inscrição!" : "Inscrições Encerram em:"}
        </h3>
        <p className="text-[#5CE1E6]">
          Data limite: {endDate.toLocaleDateString('pt-BR')} às {endDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        <TimeUnit value={timeLeft.days} label="Dias" />
        <TimeUnit value={timeLeft.hours} label="Horas" />
        <TimeUnit value={timeLeft.minutes} label="Minutos" />
        <TimeUnit value={timeLeft.seconds} label="Segundos" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={cn(
          "text-center p-4 rounded-lg",
          isLowSpots ? "bg-red-500/20 border border-red-500/20" : "bg-[#5CE1E6]/10 border border-[#5CE1E6]/20"
        )}
      >
        <div className="font-bold text-lg mb-1">
          {isLowSpots ? (
            <span className="text-red-400">Últimas {remainingSpots} vagas!</span>
          ) : (
            <span className="text-[#5CE1E6]">{remainingSpots} vagas disponíveis</span>
          )}
        </div>
        <div className="text-sm text-white/80">
          {filledSpots} de {totalSpots} vagas preenchidas
        </div>
      </motion.div>
    </div>
  );
}