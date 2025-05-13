'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-md py-2" 
        : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-40">
            <Image 
              src="/assets/images/logo.png" 
              alt="Beyond the LowerLift Logo" 
              width={90} 
              height={48} 
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  : "text-gray-100 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.name}
            </a>
          ))}
          <Button 
            className="ml-4 bg-[#5CE1E6] hover:bg-[#4BCDC2] text-[#102140]"
            size="sm"
            onClick={() => {
              scrollToPlans();
            }}
          >
            Garantir Vaga
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none"
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-3">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button 
              className="mt-4 bg-[#5CE1E6] hover:bg-[#4BCDC2] text-[#102140] w-full"
              onClick={() => {
                setIsOpen(false);
                scrollToPlans();
              }}
            >
              Garantir Vaga
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}