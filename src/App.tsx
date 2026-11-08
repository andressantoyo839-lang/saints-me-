import React, { useState } from 'react';
import { DEFAULT_CONTENT } from './data/defaultContent';
import { LandingContent, GrindOption } from './types';
import { buildWhatsAppUrl } from './utils/whatsapp';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VarietiesSection } from './components/VarietiesSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [content] = useState<LandingContent>(DEFAULT_CONTENT);
  const [selectedGrind, setSelectedGrind] = useState<GrindOption>('pepa');

  const currentWhatsAppUrl = buildWhatsAppUrl(
    content.whatsapp.customLink || content.whatsapp.phoneNumber,
    { presentation: selectedGrind }
  );

  return (
    <div className="min-h-screen bg-[#0b0a08] text-[#f2ede4] font-['Outfit',sans-serif] selection:bg-[#c59e5f] selection:text-[#0b0a08] relative">
      <Navbar
        selectedGrind={selectedGrind}
        onSelectGrind={setSelectedGrind}
        whatsappUrl={currentWhatsAppUrl}
      />

      <main>
        <HeroSection
          content={content}
          selectedGrind={selectedGrind}
          onSelectGrind={setSelectedGrind}
          whatsappUrl={currentWhatsAppUrl}
        />

        <VarietiesSection
          content={content}
          selectedGrind={selectedGrind}
          whatsappUrl={currentWhatsAppUrl}
        />
      </main>

      <Footer
        content={content}
        whatsappUrl={currentWhatsAppUrl}
      />

      <FloatingWhatsApp whatsappUrl={currentWhatsAppUrl} />
    </div>
  );
}
