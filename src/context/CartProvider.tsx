import { useState, useEffect, useCallback, ReactNode } from 'react';
import { CartContext } from './cartContext';

const CART_KEY = 'aroma_cart';

export interface CartItem {
  id: string;
  name: string;
  brand: string;
  image: string;
  size: number;
  price: number;
  quantity: number;
  stock: number;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem(CART_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);

  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const openCartDrawer = useCallback(() => setCartDrawerOpen(true), []);
  const closeCartDrawer = useCallback(() => setCartDrawerOpen(false), []);

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    setItems(currentItems => {
      const existingItemIndex = currentItems.findIndex(
        item => item.id === product.id && item.size === product.size
      );
      if (existingItemIndex !== -1) {
        const updatedItems = [...currentItems];
        const currentQuantity = updatedItems[existingItemIndex].quantity;
        const newQuantity = Math.min(currentQuantity + 1, product.stock);
        updatedItems[existingItemIndex].quantity = newQuantity;
        return updatedItems;
      } else {
        return [...currentItems, { ...product, quantity: 1 }];
      }
    });
    openCartDrawer();
  };

  const removeFromCart = (id: string, size: number) => {
    setItems(currentItems =>
      currentItems.filter(item => !(item.id === id && item.size === size))
    );
  };

  const updateQuantity = (id: string, size: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, size);
      return;
    }
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id && item.size === size
          ? { ...item, quantity: Math.min(quantity, item.stock) }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getCartCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartSubtotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getShippingCost = (deliveryType: string, subtotal: number) => {
    if (deliveryType === 'personal' || subtotal >= 899) {
      return 0;
    }
    return deliveryType === 'express' ? 189 : 149;
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartCount,
      getCartSubtotal,
      getShippingCost,
      cartDrawerOpen,
      openCartDrawer,
      closeCartDrawer
    }}>
      {children}
    </CartContext.Provider>
  );
};