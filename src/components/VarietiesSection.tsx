import React, { useState } from 'react';
import { ArrowRight, Droplet, Sun } from 'lucide-react';
import { LandingContent, GrindOption, CoffeeProduct } from '../types';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface VarietiesSectionProps {
  content: LandingContent;
  selectedGrind: GrindOption;
  whatsappUrl: string;
}

export const VarietiesSection: React.FC<VarietiesSectionProps> = ({
  content,
  selectedGrind,
}) => {
  const [tabiSize, setTabiSize] = useState<'340' | '250'>('340');

  const getCastilloWhatsAppUrl = (product: CoffeeProduct) => {
    return buildWhatsAppUrl(content.whatsapp.customLink || content.whatsapp.phoneNumber, {
      variety: product.name,
      presentation: selectedGrind,
      customMessage: `Presentación ${product.presentationGrams} (${product.priceCOP}). Molienda: ${
        selectedGrind === 'pepa' ? 'En pepa (grano)' : 'Molido'
      }.`,
    });
  };

  const getTabiWhatsAppUrl = () => {
    const gramText = tabiSize === '340' ? '340 g' : '250 g';
    const priceText = tabiSize === '340' ? '$45.000 COP' : '$38.000 COP';
    return buildWhatsAppUrl(content.whatsapp.customLink || content.whatsapp.phoneNumber, {
      variety: 'Tabi (Café de Especialidad)',
      presentation: selectedGrind,
      customMessage: `Presentación ${gramText} (${priceText}). Molienda: ${
        selectedGrind === 'pepa' ? 'En pepa (grano)' : 'Molido'
      }.`,
    });
  };

  const castilloNorte = content.products.items.find((p) => p.id === 'castillo-norte');
  const tabi = content.products.items.find((p) => p.id === 'tabi');

  return (
    <section id="catalogo" className="py-20 sm:py-28 bg-[#0e0b08] border-t border-[#1f1913] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#f5eee4] tracking-tight">
            {content.products.sectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* CASTILLO NORTE */}
          {castilloNorte && (
            <div
              id="variedad-castillo"
              className="bg-[#120e0a] border border-[#2d221a] hover:border-[#c59e5f]/60 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="relative h-72 sm:h-84 overflow-hidden bg-[#18130f]">
                  <img
                    src={castilloNorte.imageUrl}
                    alt={castilloNorte.imageResourceName || 'Taza de café humeante'}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] via-transparent to-black/30" />

                  <div className="absolute top-4 left-4 bg-[#0b0a08]/95 border border-[#382b20] px-3.5 py-1.5 backdrop-blur-md">
                    <span className="font-serif text-sm italic text-[#edd09b]">1.560 msnm</span>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-[#0e0b08]/95 border border-[#c59e5f]/60 p-3 sm:p-3.5 text-left backdrop-blur-md shadow-xl">
                    <span className="font-brand text-[9px] uppercase tracking-[0.3em] text-[#c59e5f] block mb-0.5">
                      VARIEDAD
                    </span>
                    <span className="font-serif text-base sm:text-lg font-medium text-[#f5eee4] leading-tight block">
                      Castillo Norte
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <div className="font-serif text-2xl sm:text-3xl text-[#f5eee4] font-medium drop-shadow-md">
                      {castilloNorte.priceCOP}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6 text-left">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-3xl sm:text-4xl text-[#f5eee4] font-light">
                        {castilloNorte.name}
                      </h3>
                      <span className="font-brand text-[10px] uppercase tracking-wider text-[#9c8e7e] px-2.5 py-0.5 border border-[#2b2118]">
                        {castilloNorte.presentationGrams}
                      </span>
                    </div>
                    <p className="font-serif italic text-base text-[#c59e5f]">
                      {castilloNorte.profileTitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 p-4 bg-[#18130e] border border-[#281e17] text-left">
                    <div>
                      <span className="font-brand text-[9px] uppercase tracking-wider text-[#8e8071] block">Tueste</span>
                      <span className="text-xs font-medium text-[#edd09b] mt-0.5 block">{castilloNorte.roast}</span>
                    </div>
                    <div>
                      <span className="font-brand text-[9px] uppercase tracking-wider text-[#8e8071] block">Altitud</span>
                      <span className="text-xs font-medium text-[#edd09b] mt-0.5 block">{castilloNorte.altitude}</span>
                    </div>
                    <div>
                      <span className="font-brand text-[9px] uppercase tracking-wider text-[#8e8071] block">Proceso</span>
                      <span className="text-xs font-medium text-[#edd09b] mt-0.5 block">{castilloNorte.process}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="font-brand text-[10px] uppercase tracking-[0.2em] text-[#8e8071] block">
                      Notas de Cata / Perfil de Taza:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {castilloNorte.notesSummary.map((note, i) => (
                        <span key={i} className="px-3 py-1 text-xs text-[#f5eee4] bg-[#1a140f] border border-[#3b2d22] font-medium">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <span className="font-brand text-[10px] uppercase tracking-[0.2em] text-[#8e8071] block">
                      Métodos recomendados:
                    </span>
                    <p className="text-xs text-[#b0a191]">
                      {castilloNorte.bestBrewMethods.join(' · ')}
                    </p>
                  </div>

                  <p className="text-xs text-[#8c7e70] italic pt-1">
                    {castilloNorte.presentationNote}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 text-left">
                <a
                  id="btn-order-castillo"
                  href={getCastilloWhatsAppUrl(castilloNorte)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 border border-[#c59e5f] bg-[#1a140f] text-[#edd09b] hover:bg-[#c59e5f] hover:text-[#0b0a08] transition-all duration-300 font-brand text-xs tracking-[0.22em] uppercase font-bold flex items-center justify-center gap-2 group"
                >
                  <span>[ Pedir Castillo Norte (340g) — $38.000 ]</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          )}

          {/* TABI (340g - $45.000 y 250g - $38.000) */}
          {tabi && (
            <div
              id="variedad-tabi"
              className="bg-[#120e0a] border border-[#3e2e21] hover:border-[#deb86a] transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none z-10">
                <div className="absolute top-4 right-[-34px] rotate-45 bg-[#c59e5f] text-[#0b0a08] font-brand text-[8px] tracking-[0.2em] uppercase font-extrabold py-1 w-36 text-center shadow-md">
                  NATURAL
                </div>
              </div>

              <div>
                <div className="relative h-72 sm:h-84 overflow-hidden bg-[#18130f]">
                  <img
                    src={tabi.imageUrl}
                    alt={tabi.imageResourceName || 'Granos de café cayendo'}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] via-transparent to-black/30" />

                  <div className="absolute top-4 left-4 bg-[#0b0a08]/95 border border-[#382b20] px-3.5 py-1.5 backdrop-blur-md">
                    <span className="font-serif text-sm italic text-[#edd09b]">1.560 msnm</span>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-[#0e0b08]/95 border border-[#deb86a]/60 p-3 sm:p-3.5 text-left backdrop-blur-md shadow-xl">
                    <span className="font-brand text-[9px] uppercase tracking-[0.3em] text-[#deb86a] block mb-0.5">
                      VARIEDAD
                    </span>
                    <span className="font-serif text-base sm:text-lg font-medium text-[#f5eee4] leading-tight block">
                      Tabi
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <div className="font-serif text-2xl sm:text-3xl text-[#edd09b] font-medium drop-shadow-md">
                      {tabiSize === '340' ? '$45.000 COP' : '$38.000 COP'}
                    </div>
                    <div className="text-[11px] font-brand tracking-widest text-[#a89a8a] uppercase">
                      Presentación seleccionada: {tabiSize === '340' ? '340 g' : '250 g'}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6 text-left">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-3xl sm:text-4xl text-[#f5eee4] font-light">
                        {tabi.name}
                      </h3>
                      <span className="font-brand text-[10px] uppercase tracking-wider text-[#deb86a] px-2.5 py-0.5 border border-[#4d3827]">
                        Café de Especialidad
                      </span>
                    </div>
                    <p className="font-serif italic text-base text-[#deb86a]">
                      {tabi.profileTitle}
                    </p>
                  </div>

                  {/* Selector interactivo de presentación 340g / 250g */}
                  <div className="space-y-2.5 pt-1">
                    <span className="font-brand text-[11px] uppercase tracking-[0.2em] text-[#deb86a] block font-semibold">
                      Elige tu presentación de Tabi:
                    </span>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {/* Opción 1: 340g */}
                      <button
                        type="button"
                        onClick={() => setTabiSize('340')}
                        className={`p-3.5 rounded text-left transition-all relative ${
                          tabiSize === '340'
                            ? 'border-2 border-[#deb86a] bg-[#1a140f] shadow-lg'
                            : 'border border-[#3e2e21] bg-[#14100c] hover:border-[#deb86a]/60'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`font-brand text-xs uppercase tracking-wider font-bold ${tabiSize === '340' ? 'text-[#f5eee4]' : 'text-[#b3a493]'}`}>
                            340 Gramos
                          </span>
                          <span className={`w-2.5 h-2.5 rounded-full ${tabiSize === '340' ? 'bg-[#deb86a]' : 'border border-[#8e8071]'}`} />
                        </div>
                        <div className={`font-serif text-xl font-semibold mt-1 ${tabiSize === '340' ? 'text-[#deb86a]' : 'text-[#b3a493]'}`}>
                          $45.000 COP
                        </div>
                        <span className="text-[10px] text-[#8e8071] block mt-0.5">Presentación estándar</span>
                      </button>

                      {/* Opción 2: 250g */}
                      <button
                        type="button"
                        onClick={() => setTabiSize('250')}
                        className={`p-3.5 rounded text-left transition-all relative ${
                          tabiSize === '250'
                            ? 'border-2 border-[#deb86a] bg-[#1a140f] shadow-lg'
                            : 'border border-[#3e2e21] bg-[#14100c] hover:border-[#deb86a]/60'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`font-brand text-xs uppercase tracking-wider font-bold ${tabiSize === '250' ? 'text-[#f5eee4]' : 'text-[#b3a493]'}`}>
                            250 Gramos
                          </span>
                          <span className={`w-2.5 h-2.5 rounded-full ${tabiSize === '250' ? 'bg-[#deb86a]' : 'border border-[#8e8071]'}`} />
                        </div>
                        <div className={`font-serif text-xl font-semibold mt-1 ${tabiSize === '250' ? 'text-[#deb86a]' : 'text-[#b3a493]'}`}>
                          $38.000 COP
                        </div>
                        <span className="text-[10px] text-[#8e8071] block mt-0.5">Presentación compacta</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 p-4 bg-[#18130e] border border-[#281e17] text-left">
                    <div>
                      <span className="font-brand text-[9px] uppercase tracking-wider text-[#8e8071] block">Altitud</span>
                      <span className="text-xs font-medium text-[#edd09b] mt-0.5 block">{tabi.altitude}</span>
                    </div>
                    <div>
                      <span className="font-brand text-[9px] uppercase tracking-wider text-[#8e8071] block">Proceso</span>
                      <span className="text-xs font-medium text-[#edd09b] mt-0.5 block">Natural</span>
                    </div>
                    <div>
                      <span className="font-brand text-[9px] uppercase tracking-wider text-[#8e8071] block">Secado</span>
                      <span className="text-xs font-medium text-[#edd09b] mt-0.5 block">24h cama + 48h silo</span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <span className="font-brand text-[10px] uppercase tracking-[0.2em] text-[#deb86a] block font-semibold">
                      Perfil de Taza Completo (Tabi):
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#d6c7b7] pl-1">
                      {tabi.fullCupProfile?.map((trait, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#deb86a] mt-1.5 shrink-0" />
                          <span>{trait}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <span className="font-brand text-[10px] uppercase tracking-[0.2em] text-[#8e8071] block">
                      Métodos recomendados:
                    </span>
                    <p className="text-xs text-[#b0a191]">
                      {tabi.bestBrewMethods.join(' · ')}
                    </p>
                  </div>

                  <p className="text-xs text-[#8c7e70] italic pt-1">
                    {tabi.presentationNote}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 text-left">
                <a
                  id="btn-order-tabi"
                  href={getTabiWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 border border-[#deb86a] bg-[#1a140f] text-[#edd09b] hover:bg-[#deb86a] hover:text-[#0b0a08] transition-all duration-300 font-brand text-xs tracking-[0.22em] uppercase font-bold flex items-center justify-center gap-2 group shadow-lg"
                >
                  <span>
                    [ Pedir Tabi ({tabiSize === '340' ? '340g' : '250g'}) — {tabiSize === '340' ? '$45.000' : '$38.000'} ]
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Viñetas de procesos al pie */}
        <div className="mt-16 pt-12 border-t border-[#221a14]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="p-5 bg-[#120e0a] border border-[#2a2018] flex items-start gap-4">
              <div className="p-2.5 bg-[#1a140f] border border-[#3b2d20] text-[#c59e5f] shrink-0">
                <Droplet className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-brand text-xs uppercase tracking-wider text-[#f5eee4] font-bold">Proceso Lavado</h4>
                  <span className="text-[10px] text-[#c59e5f] font-serif italic">(Castillo Norte)</span>
                </div>
                <p className="text-xs text-[#a89a8a] leading-relaxed font-light">
                  Despulpado mecánico tras cosecha, fermentación natural en piletas y lavado completo de mucílago.
                </p>
              </div>
            </div>

            <div className="p-5 bg-[#120e0a] border border-[#2a2018] flex items-start gap-4">
              <div className="p-2.5 bg-[#1a140f] border border-[#3b2d20] text-[#deb86a] shrink-0">
                <Sun className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-brand text-xs uppercase tracking-wider text-[#f5eee4] font-bold">Proceso Natural</h4>
                  <span className="text-[10px] text-[#deb86a] font-serif italic">(Tabi)</span>
                </div>
                <p className="text-xs text-[#a89a8a] leading-relaxed font-light">
                  Secado en cereza entera sin retirar pulpa ni mucílago (24h en cama de secado seguido de 48h en silo rotativo).
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
