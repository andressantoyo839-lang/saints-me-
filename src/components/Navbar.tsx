import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SaintsMeLogo } from './SaintsMeLogo';
import { GrindOption } from '../types';

interface NavbarProps {
  selectedGrind: GrindOption;
  onSelectGrind: (grind: GrindOption) => void;
  whatsappUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  selectedGrind,
  onSelectGrind,
  whatsappUrl,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0a08]/95 backdrop-blur-md border-b border-[#2a221b] py-3 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <a href="#hero" className="flex items-center gap-3.5 group focus:outline-none" aria-label="Saints Me Coffee Farm">
            <SaintsMeLogo size={44} />
            <div className="flex flex-col text-left">
              <span className="font-brand tracking-[0.22em] text-lg sm:text-xl font-bold text-[#f5eee4] uppercase leading-none group-hover:text-[#edd09b] transition-colors">
                SAINTS ME
              </span>
              <span className="font-brand tracking-[0.38em] text-[9px] text-[#c59e5f] uppercase mt-1">
                COFFEE FARM
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-[#c0b3a3]">
            <a href="#catalogo" className="hover:text-[#edd09b] transition-colors py-1">Variedades</a>
            <a href="#variedad-castillo" className="hover:text-[#edd09b] transition-colors py-1">Castillo Norte</a>
            <a href="#variedad-tabi" className="hover:text-[#edd09b] transition-colors py-1">Tabi</a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="bg-[#15120e] border border-[#32271e] p-1 rounded-sm flex items-center text-[11px] uppercase tracking-wider">
              <button
                type="button"
                onClick={() => onSelectGrind('pepa')}
                className={`px-3 py-1 transition-all ${
                  selectedGrind === 'pepa'
                    ? 'bg-[#c59e5f] text-[#0b0a08] font-bold shadow-sm'
                    : 'text-[#9c8e7e] hover:text-[#f2ede4]'
                }`}
              >
                En pepa
              </button>
              <button
                type="button"
                onClick={() => onSelectGrind('molido')}
                className={`px-3 py-1 transition-all ${
                  selectedGrind === 'molido'
                    ? 'bg-[#c59e5f] text-[#0b0a08] font-bold shadow-sm'
                    : 'text-[#9c8e7e] hover:text-[#f2ede4]'
                }`}
              >
                Molido
              </button>
            </div>

            <a
              id="navbar-reserve-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-[#c59e5f] text-[#edd09b] hover:bg-[#c59e5f] hover:text-[#0b0a08] transition-all duration-300 font-brand text-xs tracking-[0.25em] uppercase font-bold active:scale-95"
            >
              RESERVAR
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-[#c59e5f] text-[#edd09b] font-brand text-[10px] tracking-[0.2em] uppercase"
            >
              RESERVAR
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-[#16120e] border border-[#34281f] text-[#e0cfbe]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#2a2018] bg-[#100d0a]/98 rounded-xl p-4 shadow-2xl space-y-4">
            <div className="flex flex-col space-y-2 text-xs uppercase tracking-widest text-[#cfc1b1]">
              <a href="#catalogo" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded hover:bg-[#1a140f] hover:text-[#edd09b]">
                Catálogo
              </a>
              <a href="#variedad-castillo" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded hover:bg-[#1a140f] hover:text-[#edd09b]">
                Castillo Norte (Lavado)
              </a>
              <a href="#variedad-tabi" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded hover:bg-[#1a140f] hover:text-[#edd09b]">
                Tabi (Natural)
              </a>
            </div>

            <div className="pt-2 border-t border-[#291f17]">
              <span className="text-[10px] uppercase tracking-wider text-[#8e7f70] block mb-2 font-medium">
                Molienda seleccionada:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => onSelectGrind('pepa')}
                  className={`py-2 px-3 text-center transition-all ${
                    selectedGrind === 'pepa' ? 'bg-[#c59e5f] text-[#0b0a08] font-bold' : 'bg-[#18130f] text-[#b3a493] border border-[#2e231b]'
                  }`}
                >
                  En pepa
                </button>
                <button
                  type="button"
                  onClick={() => onSelectGrind('molido')}
                  className={`py-2 px-3 text-center transition-all ${
                    selectedGrind === 'molido' ? 'bg-[#c59e5f] text-[#0b0a08] font-bold' : 'bg-[#18130f] text-[#b3a493] border border-[#2e231b]'
                  }`}
                >
                  Molido
                </button>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 bg-[#c59e5f] text-[#0b0a08] font-brand tracking-[0.2em] font-bold text-center text-xs block uppercase"
            >
              [ ASEGURAR MI BOLSA POR WHATSAPP ]
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
