export interface Set {
  id: string;
  name: string;
  description?: string;
  image: string;
  images: string[];
  price: number;
  // ...otros campos si los tienes
}
export interface SetPromoVariant {
  size: number; // ml
  price: number;
  stock: number;
}

export interface SetPromo {
  id: string;
  name: string;
  tipo: 'set';
  description?: string;
  items: Array<{
    type: 'perfume' | 'decant';
    decantId: string;
    quantity?: number;
  }>;
  variants: SetPromoVariant[]; // Tamaños/precios/stock del set
  salePrice?: number;
  salePercent?: number;
  isAvailableToOrder?: boolean;
  image: string;
  images?: string[];
  activo?: boolean;
  isNew?: boolean;
  isComingSoon?: boolean;
  isSale?: boolean;
  rating?: number;
  seasons?: string[];
  setType?: 'decants' | 'hybrid' | 'perfumes';
  category: 'hombre' | 'mujer' | 'mixto';
}

export const sets: SetPromo[] = [
  {
    id: 'set_frescos_inicial_2',
    name: 'Descubrimiento Frescos',
    tipo: 'set',
    description: 'Un set perfecto para iniciar tu viaje olfativo con aromas limpios. Incluye: Decant Nautica Voyage, Decant Ariana Grande Cloud.',
    items: [
      { type: 'decant', decantId: 'decant_nautica_voyage' },
      { type: 'decant', decantId: 'decant_ariana_grande_cloud' }
    ],
    variants: [
      { size: 3, price: 90, stock: 0 },
      { size: 5, price: 150, stock: 2 },
      { size: 10, price: 270, stock: 1 }
    ],
    salePrice: 150,
    salePercent: 17,
    isAvailableToOrder: true,
    image: '/assets/images/fragancias/decants-all-sizes.webp',
    images: [
      '/assets/images/sets/set_frescos_portada.webp', 
      '/assets/images/sets/set_frescos_detalle1.webp', 
      '/assets/images/sets/set_frescos_detalle2.webp'
    ],
    activo: true,
    isNew: true,
    isSale: false,
    rating: 4.7,
    seasons: ['Primavera', 'Verano'],
    setType: 'decants',
    category: 'mixto', // Este set incluye decants de hombre y mujer
  },
  {
    id: 'set_frescos_inicial',
    name: 'Perfumes Frescos',
    tipo: 'set',
    description: 'Un set perfecto para iniciar tu viaje olfativo con aromas limpios. Incluye: Perfume Nautica Voyage, Perfume Ariana Grande Cloud y Dior Sauvage.',
    items: [
      { type: 'perfume', decantId: 'nautica_voyage' },
      { type: 'perfume', decantId: 'dior_sauvage' },
    ],
    variants: [
      { size: 3, price: 90, stock: 0 },
      { size: 5, price: 150, stock: 2 },
      { size: 10, price: 270, stock: 1 }
    ],
    salePrice: 150,
    salePercent: 17,
    isAvailableToOrder: true,
    image: '/assets/images/fragancias/decants-all-sizes.webp',
    images: [
      '/assets/images/sets/set_frescos_portada.webp', 
      '/assets/images/sets/set_frescos_detalle1.webp', 
      '/assets/images/sets/set_frescos_detalle2.webp'
    ],
    activo: true,
    isNew: false,
    isSale: true,
    rating: 4,
    seasons: ['Primavera', 'Verano'],
    setType: 'perfumes',
    category: 'hombre', // Este set incluye perfumes de hombre y mujer
  },
  {
    id: 'set_florales',
    name: 'Perfumes Florales',
    tipo: 'set',
    description: 'Un set ideal para quienes aman las fragancias florales. Incluye: Perfume Marc Jacobs Daisy, Perfume Chloe Eau de Parfum.',
    items: [
      { type: 'perfume', decantId: 'ariana_grande_cloud' },
      { type: 'perfume', decantId: 'ariana_grande_cloud' }
    ],
    variants: [
      { size: 3, price: 120, stock: 5 },
      { size: 5, price: 200, stock: 3 },
      { size: 10, price: 350, stock: 2 }
    ],
    salePrice: 200,
    salePercent: 20,
    isAvailableToOrder: true,
    image: '/assets/images/fragancias/decants-all-sizes.webp',
    images: [
      '/assets/images/sets/set_florales_portada.webp', 
      '/assets/images/sets/set_florales_detalle1.webp', 
      '/assets/images/sets/set_florales_detalle2.webp'
    ],
    activo: true,
    isNew: false,
    isSale: false,
    isComingSoon: true,
    rating: 4.5,
    seasons: ['Primavera', 'Verano'],
    setType: 'perfumes',
    category: 'mujer',
  },
  // ...otros sets...
];
