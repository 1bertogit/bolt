"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ArrowUpCircle } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-50 flex gap-4 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
      <Button
        onClick={scrollToTop}
        variant="outline"
        size="icon"
        className="rounded-full bg-white h-12 w-12 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <ArrowUpCircle className="h-6 w-6 text-primary" />
      </Button>
      
      <Button
        size="lg"
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => window.location.href = "#pricing"}
      >
        GARANTIR MINHA VAGA
      </Button>
    </div>
  );
}