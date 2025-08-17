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
    productId: 'ariana_grande_cloud',
    name: 'María G.',
    date: '22 julio, 2025',
    rating: 5,
    comment: '¡Súper recomendado! La atención por Instagram fue rapidísima y el decant de Cloud de Ariana Grande huele a gloria. Me fascinó. La entrega fue en tiempo y forma, sin duda vuelvo a comprar. ✨',
    avatar: '/assets/images/avatars/M_only.jpg',
    isVisible: true
  },
  {
    id: '2',
    productType: 'decant',
    productId: 'nautica_voyage',
    name: 'Carlos M.',
    date: '25 julio, 2025',
    rating: 5,
    comment: 'Excelente servicio. Tenía dudas sobre comprar un perfume sin olerlo, pero el decant de Nautica Voyage fue la solución perfecta. La atención por DM es 10/10 y ahora ya sé que quiero el frasco grande. 🤩',
    avatar: '/assets/images/avatars/C_only.jpg',
    isVisible: true
  },
  {
    id: '3',
    productType: 'decant',
    productId: 'dior_sauvage',
    name: 'Ana S.',
    date: '31 julio, 2025',
    rating: 5,
    comment: 'Me encantó la calidad de los decants y el diseño. Compré dos para probar y huelen increíble. El empaque llega muy bien y se ve muy bonito. Seguiré en espera de más aromas.',
    avatar: '/assets/images/avatars/A_only.jpg',
    isVisible: true
  },
  {
    id: '4',
    productType: 'decant',
    productId: 'nautica_voyage',
    name: 'Diego L.',
    date: '31 julio, 2025',
    rating: 4,
    comment: 'Mi primera vez con decants y me encantó la idea. El Nautica Voyage dura poco eso sí aunque por el precio está bien. Solo un detalle con la entrega, pero al final todo bien. Gran atención. 👌',
    avatar: '/assets/images/avatars/D_only.jpg',
    isVisible: true
  },
  {
    id: '5',
    productType: 'decant',
    productId: 'billie_eilish_eilish',
    name: 'Lucía R.',
    date: '3 agosto, 2025',
    rating: 5,
    comment: 'Todo el proceso fue súper seguro. Pedí por instagram y en minutos ya estaba coordinando la entrega. El decant de Billie Eilish me encantó. Es perfecto para llevarlo a todos lados y el aroma me dura todo el día.',
    avatar: '/assets/images/avatars/L_only.jpg',
    isVisible: true
  },
  {
    id: '6',
    productType: 'decant',
    productId: 'ariana_grande_cloud',
    name: 'Sofía C.',
    date: '8 agosto, 2025',
    rating: 5,
    comment: 'La mejor decisión. Los precios son increíbles y sé que es 100% original. Solo hay pocas opciones de aromas para probar, pero me encantó la atención y la paciencia para resolver mis dudas. Muy recomendado.',
    avatar: '/assets/images/avatars/S_only.jpg',
    isVisible: true
  },
  {
    id: '7',
    productType: 'decant',
    productId: 'dior_sauvage',
    name: 'Paola P.',
    date: '10 agosto, 2025',
    rating: 4,
    comment: 'Me encantó la entrega en persona. El repartidor es muy atento y amable, el decant de Dior Sauvage llegó perfecto. Era un regalo y la persona quedó fascinada. Súper confiable',
    avatar: '/assets/images/avatars/P_only.jpg',
    isVisible: true
  }
];

// ...existing code...
