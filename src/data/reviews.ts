export interface Review {
  id: string;
  productType: 'perfume' | 'decant' | 'set';
  productId: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar?: string;
  isVisible?: boolean;
}

export const reviews: Review[] = [
  {
    id: '1',
    productType: 'decant',
    productId: 'decant_ariana_grande_cloud',
    name: 'María González',
    date: '24 julio, 2025',
    rating: 5,
    comment: 'Me encantó la atención. Mandé mi ticket por Instagram y en minutos me confirmaron. La entrega fue rápida y el aroma es muy delicioso. Volvere a comprar sin duda.',
    avatar: '/assets/images/avatars/M_only.jpg',
    isVisible: true
  },
  {
    id: '2',
    productType: 'decant',
    productId: 'decant_nautica_voyage',
    name: 'Carlos Mendoza',
    date: '22 julio, 2025',
    rating: 5,
    comment: 'Excelente servicio! El Nautica Voyage en decant me permitió probarlo antes de comprar el frasco completo. La atención por DM es muy buena y los precios súper accesibles.',
    avatar: '/assets/images/avatars/C_only.jpg',
    isVisible: true
  },
  {
    id: '3',
    productType: 'decant',
    productId: 'decant_ariana_grande_cloud',
    name: 'Ana Sofía',
    date: '18 julio, 2025',
    rating: 5,
    comment: 'Me encanta la calidad de los decants y el diseño! Compré los 2 para probar y huelen increíble. El empaque llega muy bien protegido y con efecto de brillos. Definitivamente seguiré comprando aquí.',
    avatar: '/assets/images/avatars/A_only.jpg',
    isVisible: true
  },
  {
    id: '4',
    productType: 'decant',
    productId: 'decant_nautica_voyage',
    name: 'Diego López',
    date: '16 julio, 2025',
    rating: 4,
    comment: 'Primera vez comprando decants y la experiencia fue genial. El Nautica Voyage tiene una duración excelente y el precio no se compara con otros lugares. Solo mejoraría los tiempos de entrega.',
    avatar: '/assets/images/avatars/D_only.jpg',
    isVisible: true
  },
  {
    id: '5',
    productType: 'perfume',
    productId: 'dior_sauvage',
    name: 'Lucía Ramírez',
    date: '14 julio, 2025',
    rating: 5,
    comment: 'Pedí por WhatsApp, envié la captura de mi ticket y pago y enseguida me respondieron para coordinar la entrega. Todo muy seguro y confiable. El decant de Ariana Grande me fascinó y son perfectos para llevar en la bolsa y el aroma dura todo el día.',
    avatar: '/assets/images/avatars/L_only.jpg',
    isVisible: true
  },
  {
    id: '6',
    productType: 'perfume',
    productId: 'ariana_grande_cloud',
    name: 'Sofía Castro',
    date: '28 junio, 2025',
    rating: 5,
    comment: 'La mejor decisión fue comprar en esta página! Los precios son increíbles y la calidad es la misma que en las tiendas departamentales. Solo que de momento hay pocas opciones de perfumes, pero espero que pronto agreguen más. El servicio al cliente es excelente y si responden rápido.',
    avatar: '/assets/images/avatars/S_only.jpg',
    isVisible: true
  },
  {
    id: '7',
    productType: 'set',
    productId: 'set_frescos_inicial',
    name: 'Paola Pérez',
    date: '30 junio, 2025',
    rating: 4,
    comment: 'Me gustó que pude elegir la entrega en persona. Mandé mi ticket por Instagram y me confirmaron todo al instante. El perfume llegó bien protegido y huele increíble.',
    avatar: '/assets/images/avatars/P_only.jpg',
    isVisible: true
  }
  // ...otros reviews...
];

// ...existing code...
