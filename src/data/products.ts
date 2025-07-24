export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  images?: string[];
  rating: number;
  category: string;
  description?: string;
  details?: string[];
  occasions?: string[];
  seasons?: string[];
  sizes?: string[];
  sizesPrices?: { [key: string]: number };
  stock?: number;
  reviewCount?: number;
  isNew?: boolean;
  isComingSoon?: boolean;
  isSale?: boolean;
  salePrice?: number;
}

// ✅ PRODUCTOS ACTUALIZADOS - CAMBIAR 8ml → 10ml EN TODOS
export const products: Product[] = [
  {
    id: '1',
    name: 'Nautica Voyage EDT',
    brand: 'Nautica',
    price: 40,
    image: 'https://img.ltwebstatic.com/images3_spmp/2023/09/22/66/1695397069153bf092e09d056a0129a86d246b126b_thumbnail_720x.jpg',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2023/09/22/66/1695397069153bf092e09d056a0129a86d246b126b_thumbnail_720x.jpg',
      'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://img.ltwebstatic.com/images3_spmp/2023/09/22/66/1695397069153bf092e09d056a0129a86d246b126b_thumbnail_720x.jpg'
    ],
    rating: 4.5,
    category: 'Para Hombre',
    description: 'Nautica Voyage es la fragancia del hombre acenturero y libre. Su aroma fresco y limpio evoca la brisa marina y la energia del océano. Ideal para el dia a dia y para quienes buscan una fragancia ligera, versátil y con un toque de sofisticación informal. ¡Perfecta para cualquier momento!',
    details: [
      'Notas de salida: Manzana Verde, Notas verdes',
      'Notas de corazón: Loto, Mimosa, Acorde acuático',
      'Notas de fondo: Almizcle, Cedro, Ámbar, Musgo de Roble',
      'Concentración: Eau de Toilette (EDT)'
    ],
    occasions: [
      'Eventos: Actividades al aire libre, salidas casuales', 
      'Diario: Excelente para la oficina, escuela o uso cotidiano',
    ],
    seasons: ['Primavera', 'Verano'],
    sizes: ['3ml', '5ml', '10ml'],
    sizesPrices: {
      '3ml': 40,
      '5ml': 60,
      '10ml': 90
    },
    stock: 35,
    isNew: true
  },
  {
    id: '2',
    name: 'Dior Sauvage EDP',
    brand: 'Dior',
    price: 140,
    image: 'https://lirp.cdn-website.com/b9414951/dms3rep/multi/opt/Perfume+Dior+Sauvage+Hombre+100+ml+EDP+DIOR+_+falabella_com-640w.jpg',
    images: [
      'https://lirp.cdn-website.com/b9414951/dms3rep/multi/opt/Perfume+Dior+Sauvage+Hombre+100+ml+EDP+DIOR+_+falabella_com-640w.jpg',
      'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://lirp.cdn-website.com/b9414951/dms3rep/multi/opt/Perfume+Dior+Sauvage+Hombre+100+ml+EDP+DIOR+_+falabella_com-640w.jpg'
    ],
    rating: 5,
    category: 'Para Hombre',
    description: 'Dior Sauvage es un manifiesto de frescura radical y nobleza salvaje. Inspirada en los vastos paisajes bajo un cielo azul intenso, esta fragancia es para el hombre moderno, magnético y seguro de si mismo. Su composición poderosa y carismática deja una estela inolvidable y versátil para cualquier ocación. ¡Un clásico contemporáneo que nunca falla!',
    details: [
      'Notas de salida: Bergamota de Reggio, Pimienta de Sichuan',
      'Notas de corazón: Ambroxan',
      'Notas de fondo: Acordes amaderados',
      'Concentración: Eau de Parfum (EDP)'
    ],
    occasions: [
      'Eventos: Noches elegantes, cenas formales, eventos especiales',
      'Diario: Muy versátil para el uso diario, universidad o salidas casuales',
    ],
    seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno'],
    sizes: ['3ml', '5ml', '10ml'],
    sizesPrices: {
      '3ml': 140,
      '5ml': 220,
      '10ml': 410
    },
    stock: 100,
    isComingSoon: true
  },
  {
    id: '3',
    name: 'Ariana Grande Cloud EDP',
    brand: 'Ariana Grande',
    price: 90,
    image: 'https://aromatica.cr/cdn/shop/files/Decant-Cloud-Aromatica-CR-451463140.jpg?v=1750279021&width=1445',
    images: [
      'https://aromatica.cr/cdn/shop/files/Decant-Cloud-Aromatica-CR-451463140.jpg?v=1750279021&width=1445',
      'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://aromatica.cr/cdn/shop/files/Decant-Cloud-Aromatica-CR-451463140.jpg?v=1750279021&width=1445'
    ],
    rating: 5,
    category: 'Para Mujer',
    description: 'Cloud es una fragancia onírica y encantadora que te envuelve en una nube de dulzura y confort. Inspirada en la positividad y la alegría, su aroma cremoso y adictivo es perfecto para quienes buscan una estela moderna, juvenil y deliciosamente acogedora. ¡Una experiencia dulce y etérea!',
    details: [
      'Notas de salida: Lavanda, Pera, Bergamota',
      'Notas de corazón: Coco, Orquídea Vainilla, Praline',
      'Notas de fondo: Almizcle, Notas amaderadas',
      'Concentración: Eau de Parfum (EDP)'
    ],
    occasions: [
      'Eventos: Reuniones casuales, citas, salidas con amigos',
      'Diario: Ideal para el uso diario o universidad si se aplica moderadamente'
    ],
    seasons: ['Otoño', 'Invierno','Primavera', 'Verano'],
    sizes: ['3ml', '5ml', '10ml'],
    sizesPrices: {
      '3ml': 90,
      '5ml': 140,
      '10ml': 260
    },
    stock: 45,
    reviewCount: 203,
    isNew: true
  },
  {
    id: '4',
    name: 'Good Girl EDP',
    brand: 'Carolina Herrera',
    price: 110,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 0,
    category: 'Para Mujer',
    description: 'Una fragancia floral y sensual que evoca la magia de una noche de verano. Notas de jazmín, rosa y vainilla se combinan para crear una experiencia olfativa única y duradera.',
    details: [
      'Notas de salida: Bergamota, Mandarina, Pimienta Rosa',
      'Notas de corazón: Jazmín, Rosa, Lirio de los Valles',
      'Notas de fondo: Vainilla, Almizcle, Ámbar',
      'Concentración: Eau de Parfum (EDP)'
    ],
    occasions: [
      'Eventos: Nocturnos, citas especiales',
      'Diario: Ideal para el uso diario o universidad si se aplica moderadamente'
    ],
    seasons: ['Primavera', 'Verano', 'Otoño'],
    sizes: ['3ml', '5ml', '10ml'],
    sizesPrices: {
      '3ml': 110,
      '5ml': 170,
      '10ml': 310
    },
    stock: 0,
    isComingSoon: true
  },
  {
    id: '5',
    name: 'Acqua Di Gio EDP',
    brand: 'Giorgio Armani',
    price: 90,
    image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 0,
    category: 'Para Hombre',
    description: 'Una fragancia fresca y marina que te transporta a las profundidades del océano. Notas acuáticas y cítricas que despiertan los sentidos.',
    details: [
      'Notas de salida: Limón, Eucalipto, Menta',
      'Notas de corazón: Agua Marina, Lavanda, Geranio',
      'Notas de fondo: Ámbar Gris, Musgo, Cedro',
      'Concentración: Eau de Parfum (EDP)'
    ],
    occasions: [
      'Eventos: Actividades al aire libre, salidas casuales',
      'Diario: Excelente para la oficina, escuela o uso cotidiano'
    ],
    seasons: ['Verano', 'Otoño', 'Invierno'],
    sizes: ['3ml', '5ml', '10ml'],
    sizesPrices: {
      '3ml': 100,
      '5ml': 160,
      '10ml': 300
    },
    stock: 0,
    isComingSoon: true
  },
  {
    id: '6',
    name: 'Born In Roma Coral Fantasy EDP',
    brand: 'Valentino',
    price: 130,
    image: 'https://america-retail.com/wp-content/uploads/2024/04/dior.jpg',
    images: [
      'https://america-retail.com/wp-content/uploads/2024/04/dior.jpg',
      'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 0,
    category: 'Decants Premium',
    description: 'Una fragancia misteriosa y seductora que combina orquídea negra con especias exóticas. Lujo en estado puro.',
    details: [
      'Notas de salida: Trufa, Bergamota, Grosella',
      'Notas de corazón: Orquídea, Especias, Gardenia',
      'Notas de fondo: Pachulí, Vainilla, Incienso',
      'Concentración: Eau de Parfum (EDP)'
    ],
    occasions: [
      'Eventos: Nocturnos, citas especiales',
      'Diario: Ideal para el uso diario'
    ],
    seasons: ['Primavera', 'Verano', 'Otoño'],
    sizes: ['3ml', '5ml', '10ml'],
    sizesPrices: {
      '3ml': 160,
      '5ml': 250,
      '10ml': 470
    },
    stock: 0,
    isComingSoon: true
  },
];

// ✅ FUNCIONES UTILITARIAS (sin cambios)
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getAvailableProducts = (): Product[] => {
  return products.filter(product => !product.isComingSoon);
};

export const getComingSoonProducts = (): Product[] => {
  return products.filter(product => product.isComingSoon);
};

export const getSimilarProducts = (currentProductId: string, limit = 3): Product[] => {
  return products
    .filter(product => product.id !== currentProductId && !product.isComingSoon)
    .slice(0, limit)
    .map(p => ({
      ...p,
      ...(p.id === '5' && { salePrice: 60, isSale: true })
    }));
};

export const getAvailableBrands = (): string[] => {
  return [...new Set(products.map(product => product.brand))];
};

export const getAvailableCategories = (): string[] => {
  return [...new Set(products.map(product => product.category))];
};