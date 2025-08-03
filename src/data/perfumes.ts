export interface Perfume {
  prices?: number[];
  id: string;
  name: string;
  brand: string;
  tipo: 'perfume';
  type?: string;
  description?: string;
  notesSalida?: string[];
  notesCorazon?: string[];
  notesFondo?: string[];
  details?: string[];
  occasions?: string[];
  seasons?: string[];
  image: string;
  images?: string[];
  category: 'hombre' | 'mujer' | 'mixto';
  isAvailableToOrder?: boolean;
  sizes?: number[];
  rating?: number;
  activo?: boolean;
  isNew?: boolean;
  isSale?: boolean;
}

export const perfumes: Perfume[] = [
  {
    id: 'nautica_voyage',
    name: 'Nautica Voyage EDT',
    brand: 'Nautica',
    tipo: 'perfume',
    type: 'Eau de Toilette',
    description: 'Nautica Voyage es la fragancia del hombre acenturero y libre. Su aroma fresco y limpio evoca la brisa marina y la energia del océano. Ideal para el dia a dia y para quienes buscan una fragancia ligera, versátil y con un toque de sofisticación informal. ¡Perfecta para cualquier momento!',
    notesSalida: ['Manzana Verde', 'Notas verdes'],
    notesCorazon: ['Loto', 'Mimosa', 'Acorde acuático'],
    notesFondo: ['Almizcle', 'Cedro', 'Ámbar', 'Musgo de Roble'],
    details: ['Eau de Toilette (EDT)'],
    occasions: [
      'Eventos: Actividades al aire libre, salidas casuales',
      'Diario: Excelente para la oficina, escuela o uso cotidiano'
    ],
    seasons: ['Primavera', 'Verano'],
    image: '/assets/images/fragancias/nautica-voyage/nautica-voyage-detail-2.webp',
    images: [
      '/assets/images/fragancias/nautica-voyage/nautica-voyage-detail-1.webp',
      '/assets/images/fragancias/nautica-voyage/nautica-voyage-detail-2.webp'
      // Agrega aquí más imágenes del frasco original si tienes
    ],
    category: 'hombre',
    isAvailableToOrder: true,
    sizes: [100, 200],
    prices: [420, 880],
    rating: 4.5,
    activo: true,
    isNew: true,
    isSale: false,
  },
  {
    id: 'dior_sauvage',
    name: 'Dior Sauvage EDP',
    brand: 'Dior',
    tipo: 'perfume',
    type: 'Eau de Parfum',
    description: 'Dior Sauvage es un manifiesto de frescura radical y nobleza salvaje. Inspirada en los vastos paisajes bajo un cielo azul intenso, esta fragancia es para el hombre moderno, magnético y seguro de si mismo. Su composición poderosa y carismática deja una estela inolvidable y versátil para cualquier ocación. ¡Un clásico contemporáneo que nunca falla!',
    notesSalida: ['Bergamota de Reggio', 'Pimienta de Sichuan'],
    notesCorazon: ['Ambroxan'],
    notesFondo: ['Acordes amaderados'],
    details: ['Eau de Parfum (EDP)'],
    occasions: [
      'Eventos: Noches elegantes, cenas formales, eventos especiales',
      'Diario: Muy versátil para el uso diario, universidad o salidas casuales'
    ],
    seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno'],
    image: '/assets/images/fragancias/dior-sauvage/dior-sauvage-detail-2.webp',
    images: [
      '/assets/images/fragancias/dior-sauvage/dior-sauvage-detail-1.webp',
      '/assets/images/fragancias/dior-sauvage/dior-sauvage-detail-2.webp'
      // Agrega aquí más imágenes del frasco original si tienes
    ],
    category: 'hombre',
    isAvailableToOrder: true,
    sizes: [100, 200],
    prices: [3030, 4950],
    rating: 5,
    activo: true,
    isNew: true,
    isSale: false
  },
  {
    id: 'ariana_grande_cloud',
    name: 'Ariana Grande Cloud EDP',
    brand: 'Ariana Grande',
    tipo: 'perfume',
    type: 'Eau de Parfum',
    description: 'Cloud es una fragancia onírica y encantadora que te envuelve en una nube de dulzura y confort. Inspirada en la positividad y la alegría, su aroma cremoso y adictivo es perfecto para quienes buscan una estela moderna, juvenil y deliciosamente acogedora. ¡Una experiencia dulce y etérea!',
    notesSalida: ['Lavanda', 'Pera', 'Bergamota'],
    notesCorazon: ['Coco', 'Orquídea Vainilla', 'Praline'],
    notesFondo: ['Almizcle', 'Notas amaderadas'],
    details: ['Eau de Parfum (EDP)'],
    occasions: [
      'Eventos: Reuniones casuales, citas, salidas con amigos',
      'Diario: Ideal para el uso diario o universidad si se aplica moderadamente'
    ],
    seasons: ['Otoño', 'Invierno','Primavera', 'Verano'],
    image: '/assets/images/fragancias/ariana-grande-cloud/ariana-grande-cloud-detail-2.webp',
    images: [
      '/assets/images/fragancias/ariana-grande-cloud/ariana-grande-cloud-detail-1.webp',
      '/assets/images/fragancias/ariana-grande-cloud/ariana-grande-cloud-detail-2.webp'
      // Agrega aquí más imágenes del frasco original si tienes
    ],
    category: 'mujer',
    isAvailableToOrder: true,
    sizes: [100],
    prices: [1500],
    rating: 5,
    activo: true,
    isNew: true,
    isSale: false
  }
];
