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
  "id": "nautica_voyage",
  "name": "Nautica Voyage EDT",
  "brand": "Nautica",
  "tipo": "perfume",
  "type": "Eau de Toilette",
  "description": "Si te sientes libre, sin ataduras y siempre buscas el siguiente gran momento, este es tu aroma. Es como el aire fresco del mar un día perfecto, ese que te llena de energía y te dice que todo es posible. Nautica Voyage es la fragancia que te acompaña en tus nuevas aventuras, ya sea en la ciudad o escapando a la playa. Es ligera, fácil de llevar y siempre te hace sentir preparado para lo que venga. ¡Simplemente tú, sin filtros!",
  "notesSalida": ["Manzana Verde", "Hojas verdes"],
  "notesCorazon": ["Loto", "Mimosa", "Acorde acuático"],
  "notesFondo": ["Almizcle", "Cedro", "Ámbar", "Musgo de Roble"],
  "details": ["Eau de Toilette (EDT)"],
  "occasions": [
    "Eventos: Tus escapadas de fin de semana, el festival con amigos, esas tardes en el parque",
    "Diario: Tu fragancia para ir a clases o simplemente para estar listo en tu día a día"
  ],
  "seasons": ["Primavera", "Verano"],
  "image": "/assets/images/fragancias/nautica-voyage/nautica-voyage-detail-1.webp",
  "images": [
    "/assets/images/fragancias/nautica-voyage/nautica-voyage-detail-1.webp",
    "/assets/images/fragancias/nautica-voyage/nautica-voyage-detail-2.webp"
  ],
  "category": "hombre",
  "isAvailableToOrder": true,
  "sizes": [100, 200],
  "prices": [450, 780],
  "rating": 4.5,
  "activo": true,
  "isNew": true,
  "isSale": false
},
  {
  "id": "dior_sauvage",
  "name": "Dior Sauvage EDP",
  "brand": "Christian Dior",
  "tipo": "perfume",
  "type": "Eau de Parfum",
  "description": "No es solo un aroma, es una declaración. Sauvage EDP es para el que sabe lo que quiere y no tiene miedo de mostrarlo. Es esa vibra de seguridad que se siente en cada paso, la que te hace destacar sin esfuerzo. Imagina la inmensidad del cielo abierto y la fuerza de la naturaleza: eso es lo que llevas puesto. Con su combinación intensa y poderosa, dejarás una marca inolvidable en cada lugar, en cada persona. Es el aroma de quien es líder de su propia vida.",
  "notesSalida": ["Bergamota de Reggio", "Pimienta de Sichuan"],
  "notesCorazon": ["Ambroxan"],
  "notesFondo": ["Acordes amaderados"],
  "details": ["Eau de Parfum (EDP)"],
  "occasions": [
    "Eventos: Esa cita que te importa, las fiestas, cualquier noche en la que quieras ser el centro de atención",
    "Diario: Funciona para todo, desde una presentación importante hasta un café con tus amigos"
  ],
  "seasons": ["Primavera", "Verano", "Otoño", "Invierno"],
  "image": "/assets/images/fragancias/dior-sauvage/dior-sauvage-detail-1.webp",
  "images": [
    "/assets/images/fragancias/dior-sauvage/dior-sauvage-detail-1.webp",
    "/assets/images/fragancias/dior-sauvage/dior-sauvage-detail-2.webp"
  ],
  "category": "hombre",
  "isAvailableToOrder": true,
  "sizes": [100, 200],
  "prices": [2800, 4700],
  "rating": 5,
  "activo": true,
  "isNew": true,
  "isSale": false
},
{
  "id": "ariana_grande_cloud",
  "name": "Ariana G. Cloud EDP",
  "brand": "Ariana Grande",
  "tipo": "perfume",
  "type": "Eau de Parfum",
  "description": "Si pudieras envolverte en un abrazo, o sentirte en una nube de sueños, olería a esto. Cloud es esa sensación de felicidad pura y ligera, como si no hubiera nada malo en el mundo. Con sus notas dulces y reconfortantes, es el aroma de la positividad. Es perfecto para cuando quieres sentirte coqueta, segura y súper acogedora. Es tu dosis de dulzura para el día a día. ¿Lista para flotar?",
  "notesSalida": ["Lavanda", "Pera", "Bergamota"],
  "notesCorazon": ["Coco", "Orquídea de Vainilla", "Praliné"],
  "notesFondo": ["Almizcle", "Maderas cremosas"],
  "details": ["Eau de Parfum (EDP)"],
  "occasions": [
    "Eventos: Salidas con tu crush, una fiesta casual, o cuando solo quieres sentirte increíble",
    "Diario: El mejor amigo para tus clases, ir de compras o relajarte con tus amigas"
  ],
  "seasons": ["Otoño", "Invierno", "Primavera", "Verano"],
  "image": "/assets/images/fragancias/ariana-grande-cloud/ariana-grande-cloud-detail-1.webp",
  "images": [
    "/assets/images/fragancias/ariana-grande-cloud/ariana-grande-cloud-detail-1.webp",
    "/assets/images/fragancias/ariana-grande-cloud/ariana-grande-cloud-detail-2.webp"
  ],
  "category": "mujer",
  "isAvailableToOrder": true,
  "sizes": [100],
  "prices": [1500],
  "rating": 5,
  "activo": true,
  "isNew": true,
  "isSale": false
},
{
  "id": "billie_eilish_eilish",
  "name": "Billie E. Eilish EDP",
  "brand": "Billie Eilish",
  "tipo": "perfume",
  "type": "Eau de Parfum",
  "description": "Este no es un perfume, es una experiencia. Eilish es el aroma de un recuerdo cálido, de un abrazo que te envuelve, de sentirte tú misma en tu forma más auténtica y sensual. Con sus notas dulces y poderosas, es como llevar una segunda piel que dice: soy única, soy compleja, soy inolvidable. Es la fragancia para cuando quieres conectar contigo misma, con tus sentimientos más profundos, y dejar una huella que nadie olvidará. Es un secreto que compartes con el mundo.",
  "notesSalida": [
    "Pétalos de azúcar",
    "Bayas rojas",
    "Mandarina"
  ],
  "notesCorazon": [
    "Vainilla cremosa",
    "Cacao",
    "Especias",
    "Rosa"
  ],
  "notesFondo": [
    "Almizcle",
    "Haba tonka",
    "Maderas suaves",
    "Ámbar"
  ],
  "details": [
    "Eau de Parfum (EDP)"
  ],
  "occasions": [
    "Eventos: Citas inolvidables, noches de fiesta, eventos especiales",
    "Diario: Perfecto para las noches o esos días en los que necesitas un extra de confianza"
  ],
  "seasons": [
    "Otoño",
    "Invierno"
  ],
  "image": "/assets/images/fragancias/billie-eilish/billie-eilish-detail-1.webp",
  "images": [
    "/assets/images/fragancias/billie-eilish/billie-eilish-detail-1.webp",
    "/assets/images/fragancias/billie-eilish/billie-eilish-detail-2.webp"
  ],
  "category": "mujer",
  "isAvailableToOrder": true,
  "sizes": [100],
  "prices": [1250],
  "rating": 5,
  "activo": true,
  "isNew": true,
  "isSale": false
}
];
