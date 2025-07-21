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
    name: 'Nautica Voyage',
    brand: 'Nautica',
    price: 35,
    image: 'https://img.ltwebstatic.com/images3_spmp/2023/09/22/66/1695397069153bf092e09d056a0129a86d246b126b_thumbnail_720x.jpg',
    images: [
      'https://img.ltwebstatic.com/images3_spmp/2023/09/22/66/1695397069153bf092e09d056a0129a86d246b126b_thumbnail_720x.jpg',
      'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://img.ltwebstatic.com/images3_spmp/2023/09/22/66/1695397069153bf092e09d056a0129a86d246b126b_thumbnail_720x.jpg'
    ],
    rating: 4.7,
    category: 'Para Hombre',
    description: 'Una fragancia fresca y acuática que evoca la libertad del océano. Perfecta para el hombre aventurero que busca una fragancia duradera y versátil.',
    details: [
      'Notas de salida: Manzana Verde, Hojas',
      'Notas de corazón: Loto, Mimosa',
      'Notas de fondo: Almizcle, Cedro, Ámbar'
    ],
    sizes: ['3ml', '5ml', '10ml'], // ✅ CAMBIO: 8ml → 10ml
    sizesPrices: {
      '3ml': 35,
      '5ml': 50,
      '10ml': 80 // ✅ PRECIO DEL 10ml
    },
    stock: 15,
    reviewCount: 89,
    isNew: true
  },
  {
    id: '2',
    name: 'Dior Sauvage',
    brand: 'Dior',
    price: 100,
    image: 'https://lirp.cdn-website.com/b9414951/dms3rep/multi/opt/Perfume+Dior+Sauvage+Hombre+100+ml+EDP+DIOR+_+falabella_com-640w.jpg',
    images: [
      'https://lirp.cdn-website.com/b9414951/dms3rep/multi/opt/Perfume+Dior+Sauvage+Hombre+100+ml+EDP+DIOR+_+falabella_com-640w.jpg',
      'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://lirp.cdn-website.com/b9414951/dms3rep/multi/opt/Perfume+Dior+Sauvage+Hombre+100+ml+EDP+DIOR+_+falabella_com-640w.jpg'
    ],
    rating: 4.9,
    category: 'Para Hombre',
    description: 'Una fragancia salvaje y noble que combina frescura y sensualidad. La expresión de una naturaleza auténtica en una botella.',
    details: [
      'Notas de salida: Bergamota, Pimienta',
      'Notas de corazón: Sichuan, Lavanda, Rosa',
      'Notas de fondo: Ambroxan, Vainilla'
    ],
    sizes: ['3ml', '5ml', '10ml'], // ✅ CAMBIO: 8ml → 10ml
    sizesPrices: {
      '3ml': 100,
      '5ml': 180,
      '10ml': 280 // ✅ PRECIO DEL 10ml
    },
    stock: 15,
    reviewCount: 156,
    isNew: true
  },
  {
    id: '3',
    name: 'Ariana Grande Cloud',
    brand: 'Ariana Grande',
    price: 80,
    image: 'https://aromatica.cr/cdn/shop/files/Decant-Cloud-Aromatica-CR-451463140.jpg?v=1750279021&width=1445',
    images: [
      'https://aromatica.cr/cdn/shop/files/Decant-Cloud-Aromatica-CR-451463140.jpg?v=1750279021&width=1445',
      'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://aromatica.cr/cdn/shop/files/Decant-Cloud-Aromatica-CR-451463140.jpg?v=1750279021&width=1445'
    ],
    rating: 4.8,
    category: 'Para Mujer',
    description: 'Una fragancia dulce y etérea que te transporta a las nubes. Perfecta para la mujer joven que busca una fragancia única y memorable.',
    details: [
      'Notas de salida: Pera, Bergamota',
      'Notas de corazón: Coco, Vainilla, Praline',
      'Notas de fondo: Almizcle, Madera Cremosa'
    ],
    sizes: ['3ml', '5ml', '10ml'], // ✅ CAMBIO: 8ml → 10ml
    sizesPrices: {
      '3ml': 80,
      '5ml': 130,
      '10ml': 200 // ✅ PRECIO DEL 10ml
    },
    stock: 15,
    reviewCount: 203,
    isNew: true
  },
  {
    id: '4',
    name: 'Good Girl',
    brand: 'Carolina Herrera',
    price: 90,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.8,
    category: 'Para Mujer',
    description: 'Una fragancia floral y sensual que evoca la magia de una noche de verano. Notas de jazmín, rosa y vainilla se combinan para crear una experiencia olfativa única y duradera.',
    details: [
      'Notas de salida: Bergamota, Mandarina, Pimienta Rosa',
      'Notas de corazón: Jazmín, Rosa, Lirio de los Valles',
      'Notas de fondo: Vainilla, Almizcle, Ámbar'
    ],
    sizes: ['3ml', '5ml', '10ml'], // ✅ CAMBIO: 8ml → 10ml
    sizesPrices: {
      '3ml': 90,
      '5ml': 170,
      '10ml': 270 // ✅ PRECIO DEL 10ml
    },
    stock: 0,
    reviewCount: 124,
    isComingSoon: true
  },
  {
    id: '5',
    name: 'Acqua Di Gio',
    brand: 'Giorgio Armani',
    price: 90,
    image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.5,
    category: 'Para Hombre',
    description: 'Una fragancia fresca y marina que te transporta a las profundidades del océano. Notas acuáticas y cítricas que despiertan los sentidos.',
    details: [
      'Notas de salida: Limón, Eucalipto, Menta',
      'Notas de corazón: Agua Marina, Lavanda, Geranio',
      'Notas de fondo: Ámbar Gris, Musgo, Cedro'
    ],
    sizes: ['3ml', '5ml', '10ml'], // ✅ CAMBIO: 8ml → 10ml
    sizesPrices: {
      '3ml': 90,
      '5ml': 160,
      '10ml': 250 // ✅ PRECIO DEL 10ml
    },
    stock: 0,
    reviewCount: 89,
    isComingSoon: true
  },
  {
    id: '6',
    name: 'Born In Roma Coral Fantasy',
    brand: 'Valentino',
    price: 130,
    image: 'https://america-retail.com/wp-content/uploads/2024/04/dior.jpg',
    images: [
      'https://america-retail.com/wp-content/uploads/2024/04/dior.jpg',
      'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    category: 'Decants Premium',
    description: 'Una fragancia misteriosa y seductora que combina orquídea negra con especias exóticas. Lujo en estado puro.',
    details: [
      'Notas de salida: Trufa, Bergamota, Grosella',
      'Notas de corazón: Orquídea, Especias, Gardenia',
      'Notas de fondo: Pachulí, Vainilla, Incienso'
    ],
    sizes: ['3ml', '5ml', '10ml'], // ✅ CAMBIO: 8ml → 10ml
    sizesPrices: {
      '3ml': 130,
      '5ml': 250,
      '10ml': 400 // ✅ PRECIO DEL 10ml
    },
    stock: 0,
    reviewCount: 78,
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