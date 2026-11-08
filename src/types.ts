export type GrindOption = 'pepa' | 'molido';

export interface CoffeeProduct {
  id: 'castillo-norte' | 'tabi';
  name: string;
  presentationGrams: string;
  priceCOP: string;
  priceNumber: number;
  altitude: string;
  roast: string;
  process: string;
  profileTitle: string;
  notesSummary: string[];
  fullCupProfile?: string[];
  presentationNote: string;
  imageUrl: string;
  imageResourceName?: string;
  badge?: string;
  bestBrewMethods: string[];
}

export interface ProcessBullet {
  id: 'lavado' | 'natural';
  title: string;
  appliedTo: string;
  brief: string;
}

export interface LandingContent {
  whatsapp: {
    phoneNumber: string;
    customLink: string;
    ctaHeroText: string;
    ctaReserveText: string;
  };
  brand: {
    name: string;
    farmSubtitle: string;
    location: string;
    altitude: string;
    city: string;
    department: string;
    country: string;
  };
  hero: {
    eyebrow?: string;
    headline: string;
    ctaText: string;
    metric1Number: string;
    metric1Label: string;
    metric2Number: string;
    metric2Label: string;
    metric3Number: string;
    metric3Label: string;
    heroImage?: string;
  };
  products: {
    sectionTitle: string;
    items: CoffeeProduct[];
    processBullets: ProcessBullet[];
  };
}
