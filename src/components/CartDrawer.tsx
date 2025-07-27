import React from 'react';
import { useCart } from '../context/CartProvider';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CartDrawer: React.FC = () => {
  const {
    cartDrawerOpen,
    closeCartDrawer,
    items,
    getCartSubtotal,
    removeFromCart,
    updateQuantity
  } = useCart();
  const navigate = useNavigate();

  const handleGoToCart = () => {
    closeCartDrawer();
    navigate('/carrito');
  };

  return (
    <>
      {/* Backdrop */}
      {cartDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-[99] transition-opacity duration-300"
          onClick={closeCartDrawer}
          aria-label="Cerrar carrito"
        />
      )}
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl z-[100] transition-transform duration-300 border-l border-[#D4AF37] flex flex-col
          ${cartDrawerOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        style={{ boxShadow: '0 0 32px 0 rgba(44,62,80,0.10)' }}
        role="dialog"
        aria-modal="true"
      >
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#D4AF37] bg-white">
        <h2 className="text-lg font-bold text-[#2C3E50]">Tu Carrito</h2>
        <button onClick={closeCartDrawer} aria-label="Cerrar carrito" className="text-[#2C3E50] hover:text-[#D4AF37]">
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-5 py-4">
        {items.length === 0 ? (
          <p className="text-center text-gray-400 mt-8">Tu carrito está vacío.</p>
        ) : (
          <ul className="space-y-4">
            {items.map(item => (
              <li key={item.id + item.size} className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded border border-[#D4AF37] bg-white" />
                <div className="flex-1">
                  <div className="font-semibold text-[#2C3E50]">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.brand} • {item.size}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)} className="px-2 py-0.5 rounded bg-[#F9F9F9] text-[#2C3E50] border border-gray-300 hover:bg-[#D4AF37] hover:text-[#2C3E50] transition-colors">-</button>
                    <span className="px-2 text-[#2C3E50]">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)} className="px-2 py-0.5 rounded bg-[#F9F9F9] text-[#2C3E50] border border-gray-300 hover:bg-[#D4AF37] hover:text-[#2C3E50] transition-colors">+</button>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-bold text-[#2C3E50]">${(item.price * item.quantity).toFixed(2)}</span>
                  <button onClick={() => removeFromCart(item.id, item.size)} className="text-xs text-red-400 hover:underline mt-1">Quitar</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="px-5 py-4 border-t border-[#D4AF37] bg-[#F9F9F9]">
        <div className="flex justify-between items-center mb-3">
          <span className="font-semibold text-[#2C3E50]">Subtotal:</span>
          <span className="font-bold text-[#D4AF37] text-lg">${getCartSubtotal().toFixed(2)}</span>
        </div>
        <button
          className="w-full py-2 rounded bg-[#D4AF37] text-white font-bold hover:bg-[#B8860B] transition-all duration-200 shadow-md"
          disabled={items.length === 0}
          onClick={handleGoToCart}
        >
          Ir al carrito
        </button>
      </div>
      </div>
    </>
  );
};

export default CartDrawer;
