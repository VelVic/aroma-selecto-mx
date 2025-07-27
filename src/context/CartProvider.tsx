import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

export interface CartItem {
  id: string;
  name: string;
  brand: string;
  image: string;
  size: string;
  price: number;
  quantity: number;
  stock: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
  clearCart: () => void;
  getCartCount: () => number;
  getCartSubtotal: () => number;
  getShippingCost: (deliveryType: string, subtotal: number) => number;
  cartDrawerOpen: boolean;
  openCartDrawer: () => void;
  closeCartDrawer: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const openCartDrawer = useCallback(() => setCartDrawerOpen(true), []);
  const closeCartDrawer = useCallback(() => setCartDrawerOpen(false), []);

  const addToCart = (product: Omit<CartItem, 'quantity'>, quantity = 1) => {
    setItems(currentItems => {
      const existingItemIndex = currentItems.findIndex(
        item => item.id === product.id && item.size === product.size
      );
      if (existingItemIndex !== -1) {
        const updatedItems = [...currentItems];
        const currentQuantity = updatedItems[existingItemIndex].quantity;
        const newQuantity = Math.min(currentQuantity + quantity, product.stock);
        updatedItems[existingItemIndex].quantity = newQuantity;
        return updatedItems;
      } else {
        return [...currentItems, { ...product, quantity: Math.min(quantity, product.stock) }];
      }
    });
    openCartDrawer(); // Abrir drawer al agregar
  };

  const removeFromCart = (id: string, size: string) => {
    setItems(currentItems => 
      currentItems.filter(item => !(item.id === id && item.size === size))
    );
  };

  const updateQuantity = (id: string, size: string, quantity: number) => {
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

  const value: CartContextType = {
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
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
