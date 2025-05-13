"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    seconds: 0
  });
  const [isEnded, setIsEnded] = useState(false);
  
  const remainingSpots = totalSpots - filledSpots;
  const isLastSpots = remainingSpots <= 3;
  const isLessThan24h = timeLeft.days === 0;

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance < 0) {
        setIsEnded(true);
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  if (isEnded) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold text-red-600 mb-2">
          Inscrições Encerradas
        </h3>
        <p className="text-red-500">
          As inscrições para este evento já foram encerradas.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Encerramento das Inscrições
        </h3>
        <p className="text-gray-600">
          {endDate.toLocaleDateString('pt-BR', { 
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Dias', value: timeLeft.days },
          { label: 'Horas', value: timeLeft.hours },
          { label: 'Minutos', value: timeLeft.minutes },
          { label: 'Segundos', value: timeLeft.seconds }
        ].map((item) => (
          <div 
            key={item.label}
            className="bg-gray-50 rounded-lg p-3 text-center"
          >
            <div className="text-2xl font-bold text-blue-600">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="text-sm text-gray-500">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total de Vagas:</span>
          <span className="font-bold">{totalSpots}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Vagas Preenchidas:</span>
          <span className="font-bold">{filledSpots}</span>
        </div>
        
        <motion.div 
          className={`flex justify-between items-center ${
            isLastSpots ? 'text-red-600 font-bold' : ''
          }`}
          animate={{ scale: isLastSpots ? [1, 1.05, 1] : 1 }}
          transition={{ duration: 0.5, repeat: isLastSpots ? Infinity : 0 }}
        >
          <span>Vagas Restantes:</span>
          <span>{remainingSpots}</span>
        </motion.div>
      </div>

      {isLessThan24h && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 bg-red-50 border border-red-100 rounded-lg p-4 text-center"
        >
          <p className="text-red-600 font-bold">
            Últimas 24 horas para inscrição!
          </p>
        </motion.div>
      )}
    </div>
  );
}