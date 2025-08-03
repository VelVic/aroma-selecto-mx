export interface DecantVariant {
  size: number;
  price: number;
  stock: number;
  isSale?: boolean;
  isComingSoon?: boolean;
}

export interface Decant {
  id: string; // id único del decant, igual al perfumeId
  perfumeId: string; // id del perfume relacionado
  tipo: 'decant';
  image: string;
  images: string[];
  variants: DecantVariant[];
  isNew?: boolean;
  isSale?: boolean;
  isComingSoon?: boolean;
  salePrice?: number;
  salePercent?: number;
}

export const decants: Decant[] = [
  {
    id: 'decant_nautica_voyage',
    perfumeId: 'nautica_voyage',
    tipo: 'decant',
    image: '/assets/images/fragancias/nautica-voyage/nautica-voyage-decants-group.webp',
    images: [
      '/assets/images/fragancias/nautica-voyage/nautica-voyage-detail-1.webp',
      '/assets/images/fragancias/decants-all-sizes.webp',
      '/assets/images/fragancias/nautica-voyage/nautica-voyage-decants-group.webp'
    ],
    isNew: true,
    variants: [
      { size: 3, price: 40, stock: 0 },
      { size: 5, price: 50, stock: 5 },
      { size: 10, price: 90, stock: 5 }
    ]
  },
  {
    id: 'decant_ariana_grande_cloud',
    perfumeId: 'ariana_grande_cloud',
    tipo: 'decant',
    image: '/assets/images/fragancias/ariana-grande-cloud/ariana-cloud-decants-group.webp',
    images: [
      '/assets/images/fragancias/ariana-grande-cloud/ariana-grande-cloud-detail-1.webp',
      '/assets/images/fragancias/decants-all-sizes.webp',
      '/assets/images/fragancias/ariana-grande-cloud/ariana-cloud-decants-group.webp'
    ],
    isSale: true,
    salePercent: 20,
    salePrice: 40,
    variants: [
      { size: 3, price: 90, stock: 0 },
      { size: 5, price: 130, stock: 5 },
      { size: 10, price: 250, stock: 5 }
    ]
  },
  {
    id: 'decant_dior_sauvage',
    perfumeId: 'dior_sauvage',
    tipo: 'decant',
    image: '/assets/images/fragancias/dior-sauvage/dior-sauvage-decants-group.webp',
    images: [
      '/assets/images/fragancias/dior-sauvage/dior-sauvage-detail-1.webp',
      '/assets/images/fragancias/decants-all-sizes.webp',
      '/assets/images/fragancias/dior-sauvage/dior-sauvage-decants-group.webp'
    ],
    isComingSoon: true,
    variants: [
      { size: 3, price: 130, stock: 0 },
      { size: 5, price: 210, stock: 0 },
      { size: 10, price: 400, stock: 0 }
    ]
  },
  // ...otros decants...
];
