export interface Review {
  id: string;
  productId: string; // Relación con el perfume
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar?: string;
}

export const reviews: Review[] = [
  {
    id: '1',
    productId: '3', // Ariana Grande Cloud (ajusta según el id real de tu producto)
    name: 'María González',
    date: '24 julio, 2025',
    rating: 5,
    comment: 'Me encantó la atención. Mandé mi ticket por Instagram y en minutos me confirmaron. La entrega fue rápida y el aroma es muy delicioso. Volvere a comprar sin duda.',
    avatar: '/assets/images/avatars/M_only.jpg'
  },
  {
    id: '2',
    productId: '1', // Dior Sauvage
    name: 'Carlos Mendoza',
    date: '22 julio, 2025',
    rating: 5,
    comment: 'Excelente servicio! El Nautica Voyage en decant me permitió probarlo antes de comprar el frasco completo. La atención por DM es muy buena y los precios súper accesibles.',
    avatar: '/assets/images/avatars/C_only.jpg'
  },
  {
    id: '3',
    productId: '1', // Nautica Voyage
    name: 'Ana Sofía',
    date: '18 julio, 2025',
    rating: 5,
    comment: 'Me encanta la calidad de los decants y el diseño! Compré los 2 para probar y huelen increíble. El empaque llega muy bien protegido y con efecto de brillos. Definitivamente seguiré comprando aquí.',
    avatar: '/assets/images/avatars/A_only.jpg'
  },
  {
    id: '4',
    productId: '1', // Nautica Voyage
    name: 'Diego López',
    date: '16 julio, 2025',
    rating: 4,
    comment: 'Primera vez comprando decants y la experiencia fue genial. El Nautica Voyage tiene una duración excelente y el precio no se compara con otros lugares. Solo mejoraría los tiempos de entrega.',
    avatar: '/assets/images/avatars/D_only.jpg'
  },
  {
    id: '5',
    productId: '3', // Ariana Grande Cloud
    name: 'Lucía Ramírez',
    date: '14 julio, 2025',
    rating: 5,
    comment: 'Pedí por WhatsApp, envié la captura de mi ticket y pago y enseguida me respondieron para coordinar la entrega. Todo muy seguro y confiable. El decant de Ariana Grande me fascinó y son perfectos para llevar en la bolsa y el aroma dura todo el día.',
    avatar: '/assets/images/avatars/L_only.jpg'
  },
  {
    id: '6',
    productId: '3', // Dior Sauvage
    name: 'Sofía Castro',
    date: '28 junio, 2025',
    rating: 5,
    comment: 'La mejor decisión fue comprar en esta página! Los precios son increíbles y la calidad es la misma que en las tiendas departamentales. Solo que de momento hay pocas opciones de perfumes, pero espero que pronto agreguen más. El servicio al cliente es excelente y si responden rápido.',
    avatar: '/assets/images/avatars/S_only.jpg'
  },
  {
    id: '7',
    productId: '3', // Nautica Voyage
    name: 'Paola Pérez',
    date: '30 junio, 2025',
    rating: 4,
    comment: 'Me gustó que pude elegir la entrega en persona. Mandé mi ticket por Instagram y me confirmaron todo al instante. El perfume llegó bien protegido y huele increíble.',
    avatar: '/assets/images/avatars/P_only.jpg'
  }
];