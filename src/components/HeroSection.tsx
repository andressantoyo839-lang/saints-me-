import React from 'react';
import { Coffee, ArrowRight, ArrowDown } from 'lucide-react';
import { LandingContent, GrindOption } from '../types';

interface HeroSectionProps {
  content: LandingContent;
  selectedGrind: GrindOption;
  onSelectGrind: (grind: GrindOption) => void;
  whatsappUrl: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  content,
  selectedGrind,
  onSelectGrind,
  whatsappUrl,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] sm:min-h-[90vh] pt-32 sm:pt-40 pb-20 flex flex-col justify-center items-center text-center overflow-hidden bg-[#0b0a08]"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[400px] h-[350px] bg-[#8c642e]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-10">
        
        {/* Emblema Central */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-white p-[2px] shadow-2xl ring-2 ring-[#c59e5f]/70">
            <img
              src="/logo.jpg"
              alt="Saints Me Coffee Farm"
              className="w-full h-full object-cover scale-[1.12]"
            />
          </div>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-light tracking-tight leading-[1.22] sm:leading-[1.16]">
            <span className="text-[#D4AF37] font-normal">Cosechado y tostado</span>{' '}
            <span className="text-[#FFFFFF]">para garantizar una</span>{' '}
            <span className="text-[#D4AF37] italic font-normal">frescura única</span>
          </h1>
        </div>

        {/* Selector de molienda */}
        <div className="inline-flex items-center gap-2 p-1.5 rounded-sm bg-[#14100c] border border-[#2d231a] shadow-lg">
          <span className="text-[11px] uppercase tracking-wider text-[#8e7f6f] px-2 font-medium flex items-center gap-1">
            <Coffee className="w-3.5 h-3.5 text-[#D4AF37]" /> Molienda:
          </span>
          <button
            type="button"
            onClick={() => onSelectGrind('pepa')}
            className={`px-3 py-1 text-xs transition-all ${
              selectedGrind === 'pepa'
                ? 'bg-[#D4AF37] text-[#0b0a08] font-bold shadow-md'
                : 'text-[#a39483] hover:text-white'
            }`}
          >
            En pepa (grano)
          </button>
          <button
            type="button"
            onClick={() => onSelectGrind('molido')}
            className={`px-3 py-1 text-xs transition-all ${
              selectedGrind === 'molido'
                ? 'bg-[#D4AF37] text-[#0b0a08] font-bold shadow-md'
                : 'text-[#a39483] hover:text-white'
            }`}
          >
            Molido para cafetera
          </button>
        </div>

        {/* Botón de conversión principal */}
        <div>
          <a
            id="hero-cta-main"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-[#D4AF37] bg-[#14100c] text-[#edd09b] hover:bg-[#D4AF37] hover:text-[#0b0a08] transition-all duration-300 font-brand text-xs sm:text-sm tracking-[0.2em] uppercase font-bold group shadow-2xl shadow-black/80 active:scale-[0.98] gap-2"
          >
            <span>{content.hero.ctaText || 'Reserva tu bolsa aquí'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Fila de 3 métricas */}
        <div className="pt-6 border-t border-[#241c16]/80 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto text-center">
          <div>
            <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#D4AF37] font-normal leading-none">
              {content.hero.metric1Number}
            </div>
            <div className="font-brand text-[9px] sm:text-[11px] text-[#8e8071] tracking-[0.25em] uppercase mt-2">
              {content.hero.metric1Label}
            </div>
          </div>

          <div>
            <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#D4AF37] font-normal leading-none">
              {content.hero.metric2Number}
            </div>
            <div className="font-brand text-[9px] sm:text-[11px] text-[#8e8071] tracking-[0.2em] uppercase mt-2">
              {content.hero.metric2Label}
            </div>
          </div>

          <div>
            <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#D4AF37] font-normal leading-none">
              {content.hero.metric3Number}
            </div>
            <div className="font-brand text-[9px] sm:text-[11px] text-[#8e8071] tracking-[0.25em] uppercase mt-2">
              {content.hero.metric3Label}
            </div>
          </div>
        </div>

        <div className="pt-4">
          <a
            href="#catalogo"
            className="inline-flex items-center gap-2 text-xs text-[#8e8071] hover:text-[#D4AF37] transition-colors uppercase tracking-[0.25em] font-brand group"
          >
            <span>Nuestras variedades</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#D4AF37]" />
          </a>
        </div>

      </div>
    </section>
  );
};
