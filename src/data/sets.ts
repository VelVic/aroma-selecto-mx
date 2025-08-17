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
  salePrice: number;
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
    id: 'frescura_versatilidad',
    name: 'Frescura y Versatilidad',
    tipo: 'set',
    description: 'Tu dúo dinámico para el día a día. Combina el frescor limpio y acuático de Nautica Voyage, perfecto para las mañanas de clases o el gym, con la sofisticación intensa de Dior Sauvage, ideal para una cita o una salida nocturna. El set que te cubre 24/7.',
    items: [
      { type: 'decant', decantId: 'nautica_voyage' },
      { type: 'decant', decantId: 'dior_sauvage' }
    ],
    variants: [
      { size: 3, price: 200, salePrice: 170, stock: 3 },
      { size: 5, price: 290, salePrice: 250, stock: 3 },
      { size: 10, price: 540, salePrice: 460, stock: 3 }
    ],
    salePrice: 170,
    salePercent: 15,
    isAvailableToOrder: true,
    image: '/assets/images/sets/dior-nautica/set-dior-nautica.webp',
    images: [
      '/assets/images/fragancias/nautica-voyage/nautica-voyage-detail-1.webp', 
      '/assets/images/fragancias/dior-sauvage/dior-sauvage-detail-1.webp', 
      '/assets/images/fragancias/decants-all-size.webp'
    ],
    activo: true,
    isNew: false,
    isSale: true,
    rating: 5,
    seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno'],
    setType: 'decants',
    category: 'hombre', // Este set incluye decants de hombre
  },
  {
    id: 'dulce_acogedor',
    name: 'Dulce y Acogedor',
    tipo: 'set',
    description: 'El abrazo que puedes llevar puesto. ¿Eres fan de los aromas dulces que te hacen sentir cómodo y con un aura irresistible? Este set une el icónico y dulce aroma de malvavisco de Ariana Grande Cloud con la calidez adictiva y misteriosa de Billie Eilish Eilish. Juntos, crean un halo acogedor que atrae todas las miradas.',
    items: [
      { type: 'decant', decantId: 'ariana_grande_cloud' },
      { type: 'decant', decantId: 'billie_eilish_eilish' },
    ],
    variants: [
      { size: 3, price: 190, salePrice:170, stock: 3 },
      { size: 5, price: 290, salePrice:250, stock: 3 },
      { size: 10, price: 530, salePrice:460, stock: 3 }
    ],
    salePrice: 170,
    salePercent: 17,
    isAvailableToOrder: true,
    image: '/assets/images/sets/ariana-billie/set-ariana-billie.webp',
    images: [
      '/assets/images/fragancias/ariana-cloud/ariana-cloud-detail-1.webp', 
      '/assets/images/fragancias/billie-eilish/billie-eilish-detail-1.webp', 
      '/assets/images/fragancias/decants-all-size.webp'
    ],
    activo: true,
    isNew: false,
    isSale: true,
    rating: 5,
    seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno'],
    setType: 'decants',
    category: 'mixto', // Este set incluye decants de mujer
  },
  /* {
    id: 'de_dia_a_noche',
    name: 'De Día a Noche',
    tipo: 'set',
    description: 'La fórmula secreta para cada momento. Con Nautica Voyage obtienes esa frescura vibrante para el día, y con Ariana Grande Cloud, un dulce y distintivo aroma para la noche. La forma más inteligente de tener un perfume para cada ocasión sin gastar de más.',
    items: [
      { type: 'decant', decantId: 'nautica_voyage' },
      { type: 'decant', decantId: 'ariana_grande_cloud' }
    ],
    variants: [
      { size: 3, price: 140, salePrice: 120, stock: 3 },
      { size: 5, price: 220, salePrice: 190, stock: 3 },
      { size: 10, price: 380, salePrice: 330, stock: 3 }
    ],
    salePrice: 200,
    salePercent: 20,
    isAvailableToOrder: true,
    image: '/assets/images/fragancias/decants-all-sizes.webp',
    images: [
      '/assets/images/fragancias/nautica-voyage/nautica-voyage-detail-1.webp', 
      '/assets/images/fragancias/ariana-grande-cloud/ariana-grande-cloud-detail-1.webp', 
      '/assets/images/fragancias/decants-all-sizes.webp'
    ],
    activo: true,
    isNew: false,
    isSale: true,
    isComingSoon: false,
    rating: 4.5,
    seasons: ['Primavera', 'Verano'],
    setType: 'decants',
    category: 'mixto', // Este set incluye decants de hombre y mujer
  }, */
  // ...otros sets...
];
