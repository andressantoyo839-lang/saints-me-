import React from 'react';
import { ArrowUp, ArrowRight } from 'lucide-react';
import { SaintsMeLogo } from './SaintsMeLogo';
import { LandingContent } from '../types';

interface FooterProps {
  content: LandingContent;
  whatsappUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ content, whatsappUrl }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacto" className="bg-[#080705] border-t border-[#221a14] pt-16 pb-12 text-[#9e9081]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1c150f] text-left">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <SaintsMeLogo size={52} />
              <div className="flex flex-col text-left">
                <span className="font-brand tracking-[0.22em] text-xl font-bold text-[#f5eee4] uppercase leading-none">
                  {content.brand.name}
                </span>
                <span className="font-brand tracking-[0.38em] text-[10px] text-[#c59e5f] uppercase mt-1">
                  {content.brand.farmSubtitle}
                </span>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#e0d6cb]">
              <div className="flex items-center gap-2.5">
                <ArrowRight className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="font-medium tracking-wide">Finca Las Heliconias — Retiro Grande, Bucaramanga, Santander, Colombia</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="font-brand text-[10px] tracking-[0.25em] uppercase text-[#deb86a] block font-semibold">
              Variedades
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#variedad-castillo" className="hover:text-[#f5eee4] transition-colors">
                  Castillo Norte (Lavado — 340g)
                </a>
              </li>
              <li>
                <a href="#variedad-tabi" className="hover:text-[#f5eee4] transition-colors">
                  Tabi (Natural — 340g & 250g · Especialidad)
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-[#f5eee4] transition-colors">
                  Procesos (Lavado & Natural)
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <span className="font-brand text-[10px] tracking-[0.25em] uppercase text-[#deb86a] block font-semibold">
              Atención Directa
            </span>
            <p className="text-xs text-[#8e8071] leading-relaxed">
              ¿Deseas asesoría para elegir tu molienda o apartar tu café? Atendemos de forma directa y personalizada:
            </p>

            <div className="pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#D4AF37] bg-[#14100c] text-[#edd09b] hover:bg-[#D4AF37] hover:text-[#0b0a08] transition-all font-brand text-[11px] tracking-widest uppercase font-bold shadow-lg"
              >
                <span>Reserva tu bolsa aquí</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="text-[11px] text-[#deb86a] pt-1 font-medium">
              Despachos locales inmediatos en Bucaramanga
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e6357]">
          <div>
            © {new Date().getFullYear()} Saints Me Coffee Farm · Finca Las Heliconias — Retiro Grande, Bucaramanga.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-[#9c8e7e] hover:text-[#edd09b] transition-colors uppercase font-brand tracking-widest"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
