import { SITE_CONFIG } from "@/lib/constants";
import { Mail, Phone, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo and Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Image 
                src="/assets/images/logo_black.png" 
                alt="Beyond the LowerLift Logo" 
                width={90} 
                height={60} 
                className="object-contain"
              />
            </div>
            <p className="mb-6 text-gray-400 max-w-md">
              Beyond the LowerLift Cadaver Lab é uma experiência imersiva de aprendizado 
              em anatomia cirúrgica com abordagem em cadáver, desenvolvida para profissionais 
              que buscam excelência em resultados.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="mailto:contato@deepneckacademy.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:5567911554980"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Telefone"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/dr.danielnunes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram Dr. Daniel"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/dr.joaoilgenfritz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram Dr. João"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Sobre o Evento
                </Link>
              </li>
              <li>
                <Link href="#mentors" className="text-gray-400 hover:text-white transition-colors">
                  Mentores
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="text-gray-400 hover:text-white transition-colors">
                  Cronograma
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Investimento
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Email:</p>
                  <a 
                    href="mailto:contato@deepneckacademy.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    contato@deepneckacademy.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Telefone:</p>
                  <a 
                    href="tel:5567911554980"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +55 67 9115-5498
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Instagram:</p>
                  <div className="space-y-1">
                    <a 
                      href="https://instagram.com/dr.danielnunes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors block"
                    >
                      @dr.danielnunes
                    </a>
                    <a 
                      href="https://instagram.com/dr.joaoilgenfritz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors block"
                    >
                      @dr.joaoilgenfritz
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Beyond the LowerLift. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
