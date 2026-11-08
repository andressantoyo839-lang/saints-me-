import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  whatsappUrl: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ whatsappUrl }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#120e0a] text-[#f4ece3] border border-[#382b20] px-3.5 py-2 rounded-lg shadow-xl shadow-black/80 text-xs">
          <span className="w-2 h-2 rounded-full bg-[#25D366]" />
          <span className="font-medium">Reservar tu bolsa</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#968676] hover:text-[#f4ece3] ml-1"
            aria-label="Cerrar mensaje"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp a Saints Me"
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-[#071c0f] flex items-center justify-center shadow-2xl shadow-black hover:scale-105 active:scale-95 transition-all duration-300 ring-2 ring-[#c59e5f]/30"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#c59e5f] border-2 border-[#0b0a08]" />
      </a>
    </div>
  );
};
