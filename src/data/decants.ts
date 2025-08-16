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
    image:'/assets/images/fragancias/nautica-voyage/nautica-voyage-detail-1.webp' 
    /* '/assets/images/fragancias/nautica-voyage/nautica-voyage-decants-group.webp' */,
    images: [
      '/assets/images/fragancias/nautica-voyage/nautica-voyage-detail-1.webp',
      '/assets/images/fragancias/decants-all-size.webp',
      '/assets/images/fragancias/nautica-voyage/nautica-voyage-with-decants.webp'
    ],
    isNew: true,
    variants: [
      { size: 3, price: 40, stock: 10 },
      { size: 5, price: 60, stock: 6 },
      { size: 10, price: 100, stock: 6 }
    ]
  },
  {
    id: 'decant_ariana_grande_cloud',
    perfumeId: 'ariana_grande_cloud',
    tipo: 'decant',
    image: '/assets/images/fragancias/ariana-cloud/ariana-cloud-detail-1.webp'
    /* '/assets/images/fragancias/ariana-grande-cloud/ariana-cloud-decants-group.webp' */,
    images: [
      '/assets/images/fragancias/ariana-cloud/ariana-cloud-detail-1.webp',
      '/assets/images/fragancias/decants-all-size.webp',
      '/assets/images/fragancias/ariana-cloud/ariana-cloud-with-decants.webp',
    ],
    isNew: true,
    salePercent: 20,
    salePrice: 40,
    variants: [
      { size: 3, price: 100, stock: 10 },
      { size: 5, price: 150, stock: 6 },
      { size: 10, price: 260, stock: 6 }
    ]
  },
  {
    id: 'decant_dior_sauvage',
    perfumeId: 'dior_sauvage',
    tipo: 'decant',
    image: '/assets/images/fragancias/dior-sauvage/dior-sauvage-detail-1.webp'
    /* '/assets/images/fragancias/dior-sauvage/dior-sauvage-decants-group.webp' */,
    images: [
      '/assets/images/fragancias/dior-sauvage/dior-sauvage-detail-1.webp',
      '/assets/images/fragancias/decants-all-size.webp',
      '/assets/images/fragancias/dior-sauvage/dior-sauvage-with-decants.webp'],
    isNew: true,
    variants: [
      { size: 3, price: 150, stock: 10 },
      { size: 5, price: 220, stock: 6 },
      { size: 10, price: 400, stock: 6 }
    ]
  },
  {
    id: 'decant_billie_eilish_eilish',
    perfumeId: 'billie_eilish_eilish',
    tipo: 'decant',
    image: '/assets/images/fragancias/billie-eilish/billie-eilish-detail-1.webp'
    /* '/assets/images/fragancias/billie-eilish/billie-eilish-decants-group.webp' */,
    images: [
      '/assets/images/fragancias/billie-eilish/billie-eilish-detail-1.webp',
      '/assets/images/fragancias/decants-all-sizes.webp',
      '/assets/images/fragancias/billie-eilish/billie-eilish-with-decants.webp'],
    isNew: true,
    variants: [
      { size: 3, price: 90, stock: 10 },
      { size: 5, price: 140, stock: 6 },
      { size: 10, price: 250, stock: 6 }
    ]
  }
  // ...otros decants...
];
