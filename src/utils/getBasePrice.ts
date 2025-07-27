// src/utils/getBasePrice.ts
import { Product } from '../data/products';

// Devuelve el precio del primer tamaño disponible (stock > 0), si no, el primer precio definido
export function getBasePrice(product: Product): number {
  if (Array.isArray(product.variants) && product.variants.length > 0) {
    const available = product.variants.find(v => typeof v.price === 'number' && v.stock > 0);
    if (available) return available.price;
    const first = product.variants.find(v => typeof v.price === 'number');
    if (first) return first.price;
  }
  return 0;
}
