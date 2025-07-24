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
    id: '10',
    productId: '3', // Ariana Grande Cloud (ajusta según el id real de tu producto)
    name: 'María González',
    date: '15 julio, 2025',
    rating: 5,
    comment: 'Pedí el decant de Cloud de Ariana Grande por Instagram y llegó súper rápido. Huele exactamente igual que el original, 100% recomendado. Ya hice mi segundo pedido!',
    avatar: 'assets/images/avatars/M_avatar.jpg'
  },
  {
    id: '11',
    productId: '2', // Dior Sauvage
    name: 'Carlos Mendoza',
    date: '12 julio, 2025',
    rating: 5,
    comment: 'Excelente servicio! El Dior Sauvage en decant me permitió probarlo antes de comprar el frasco completo. La atención por DM es muy buena y los precios súper accesibles.',
    avatar: 'assets/images/avatars/C_avatar.jpg'
  },
  {
    id: '12',
    productId: '1', // Nautica Voyage
    name: 'Ana Sofía Herrera',
    date: '8 julio, 2025',
    rating: 5,
    comment: 'Me encanta la calidad de los decants! Compré 3 diferentes para probar y todos huelen increíble. El empaque llega muy bien protegido. Definitivamente seguiré comprando aquí.',
    avatar: 'assets/images/avatars/A_avatar.jpg'
  },
  {
    id: '13',
    productId: '1', // Nautica Voyage
    name: 'Diego López',
    date: '5 julio, 2025',
    rating: 4,
    comment: 'Primera vez comprando decants y la experiencia fue genial. El Nautica Voyage tiene una duración excelente y el precio no se compara con otros lugares. Solo mejoraría los tiempos de entrega.',
    avatar: 'assets/images/avatars/D_avatar.jpg'
  },
  {
    id: '14',
    productId: '3', // Ariana Grande Cloud
    name: 'Lucía Ramírez',
    date: '2 julio, 2025',
    rating: 5,  
    comment: 'Participé en el sorteo y gané! Pero antes ya había comprado y la calidad es increíble. Los decants son perfectos para llevar en la bolsa y el aroma dura todo el día.',
    avatar: 'assets/images/avatars/L_avatar.jpg'
  },
  {
    id: '15',
    productId: '2', // Dior Sauvage
    name: 'Sofía Castro',
    date: '28 junio, 2025',
    rating: 5,
    comment: 'La mejor decisión fue encontrar esta página! Los precios son increíbles y la calidad es la misma que en las tiendas departamentales. El CH Good Girl huele divino.',
    avatar: 'assets/images/avatars/S_avatar.jpg'
  }
];