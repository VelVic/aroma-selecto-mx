import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon, TrashIcon, PlusIcon, MinusIcon, MapPinIcon, CalculatorIcon, GiftIcon, TicketIcon, InstagramIcon, MessageCircleIcon, MailIcon, AlertCircleIcon, CheckCircleIcon, TruckIcon, CreditCardIcon, BuildingIcon, HandIcon } from 'lucide-react';

// Simulando productos en el carrito (después conectarás con tu context/estado global)
interface CartItem {
  id: string;
  name: string;
  brand: string;
  image: string;
  size: string;
  price: number;
  quantity: number;
  stock: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Sauvage Elixir',
      brand: 'Dior',
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      size: '10ml',
      price: 250,
      quantity: 2,
      stock: 15
    },
    {
      id: '2',
      name: 'Black Opium',
      brand: 'Yves Saint Laurent',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      size: '5ml',
      price: 180,
      quantity: 1,
      stock: 8
    }
  ]);

  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    phone: '',
    email: '',
    postalCode: '',
    state: '',
    city: '',
    address: '',
    deliveryType: 'standard' // 'personal', 'standard', 'express'
  });

  const [shippingCost, setShippingCost] = useState(140);
  const [paymentMethod, setPaymentMethod] = useState('transfer'); // 'transfer', 'oxxo', 'cash'
  const [showTicket, setShowTicket] = useState(false);

  // Cálculos
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const includesFreeDecant = subtotal >= 600;
  const includesFreeShipping = subtotal >= 888;
  const finalShippingCost = includesFreeShipping || shippingInfo.deliveryType === 'personal' ? 0 : shippingCost;
  const total = subtotal + finalShippingCost;

  // Funciones del carrito
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: Math.min(newQuantity, item.stock) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const generateTicket = () => {
    const ticketNumber = `AS${Date.now().toString().slice(-6)}`;
    const ticketData = {
      number: ticketNumber,
      customer: shippingInfo,
      items: cartItems,
      subtotal,
      shipping: finalShippingCost,
      total,
      includesFreeDecant,
      paymentMethod,
      date: new Date().toLocaleDateString('es-MX')
    };
    
    console.log('Ticket generado:', ticketData);
    setShowTicket(true);
    // Aquí integrarías con tu API para generar el ticket real
  };

  useEffect(() => {
    // Calcular envío basado en código postal (simulación)
    if (shippingInfo.postalCode.length >= 5) {
      const firstTwoDigits = parseInt(shippingInfo.postalCode.substring(0, 2));
      if (firstTwoDigits >= 90 && firstTwoDigits <= 96) { // Veracruz aprox
        setShippingCost(100); // Más barato si es local
      } else if (firstTwoDigits >= 1 && firstTwoDigits <= 16) { // CDMX/EdoMex
        setShippingCost(189); // Express disponible
      } else {
        setShippingCost(140); // Estándar
      }
    }
  }, [shippingInfo.postalCode]);

  if (cartItems.length === 0) {
    return (
      <div className="bg-white pt-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <ShoppingBagIcon className="h-24 w-24 text-[#BDC3C7] mx-auto mb-6" />
          <h1 className="text-3xl font-logo font-bold text-gray-900 mb-4">Tu carrito está vacío</h1>
          <p className="text-[#BDC3C7] mb-8">¡Descubre nuestras fragancias únicas y encuentra tu aroma perfecto!</p>
          <Link 
            to="/productos"
            className="bg-[#2C3E50] text-[#D4AF37] px-8 py-3 rounded-lg font-medium hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B] hover:text-[#2C3E50] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            Explorar Productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <section className="bg-[#F9F9F9] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-logo font-bold text-gray-900 mb-2">Tu Carrito</h1>
          <p className="text-[#BDC3C7]">Revisa tus productos y completa tu pedido</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Lista de Productos */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <ShoppingBagIcon className="h-5 w-5 text-[#D4AF37] mr-2" />
                Productos ({cartItems.length})
              </h2>
              
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg hover:border-[#D4AF37]/30 transition-colors">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg bg-[#F9F9F9]"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-[#BDC3C7] text-sm">{item.brand} • {item.size}</p>
                      <p className="text-[#D4AF37] font-semibold">${item.price} MXN</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-full bg-gray-100 hover:bg-[#D4AF37] hover:text-white transition-colors"
                      >
                        <MinusIcon className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= item.stock}
                        className="p-1 rounded-full bg-gray-100 hover:bg-[#D4AF37] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <PlusIcon className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(0)} MXN</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors mt-1"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Información de Envío */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <MapPinIcon className="h-5 w-5 text-[#D4AF37] mr-2" />
                Información de Envío
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
                  <input
                    type="text"
                    value={shippingInfo.fullName}
                    onChange={(e) => setShippingInfo(prev => ({...prev, fullName: e.target.value}))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
                  <input
                    type="tel"
                    value={shippingInfo.phone}
                    onChange={(e) => setShippingInfo(prev => ({...prev, phone: e.target.value}))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    placeholder="10 dígitos"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    value={shippingInfo.email}
                    onChange={(e) => setShippingInfo(prev => ({...prev, email: e.target.value}))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Código Postal *</label>
                  <input
                    type="text"
                    value={shippingInfo.postalCode}
                    onChange={(e) => setShippingInfo(prev => ({...prev, postalCode: e.target.value}))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    placeholder="12345"
                    maxLength={5}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Estado *</label>
                  <input
                    type="text"
                    value={shippingInfo.state}
                    onChange={(e) => setShippingInfo(prev => ({...prev, state: e.target.value}))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    placeholder="Tu estado"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad *</label>
                  <input
                    type="text"
                    value={shippingInfo.city}
                    onChange={(e) => setShippingInfo(prev => ({...prev, city: e.target.value}))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    placeholder="Tu ciudad"
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Dirección completa *</label>
                <textarea
                  value={shippingInfo.address}
                  onChange={(e) => setShippingInfo(prev => ({...prev, address: e.target.value}))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                  placeholder="Calle, número, colonia, referencias..."
                />
              </div>

              {/* Tipo de Entrega */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Tipo de Entrega</label>
                <div className="grid md:grid-cols-3 gap-3">
                  <label className="relative">
                    <input
                      type="radio"
                      name="deliveryType"
                      value="personal"
                      checked={shippingInfo.deliveryType === 'personal'}
                      onChange={(e) => setShippingInfo(prev => ({...prev, deliveryType: e.target.value}))}
                      className="sr-only"
                    />
                    <div className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      shippingInfo.deliveryType === 'personal' 
                        ? 'border-[#D4AF37] bg-[#D4AF37]/5' 
                        : 'border-gray-200 hover:border-[#D4AF37]/50'
                    }`}>
                      <HandIcon className="h-6 w-6 text-[#D4AF37] mb-2" />
                      <h4 className="font-medium text-sm">Entrega Personal</h4>
                      <p className="text-xs text-[#BDC3C7]">Gutiérrez Zamora</p>
                      <p className="text-xs font-medium text-green-600 mt-1">GRATIS</p>
                    </div>
                  </label>
                  
                  <label className="relative">
                    <input
                      type="radio"
                      name="deliveryType"
                      value="standard"
                      checked={shippingInfo.deliveryType === 'standard'}
                      onChange={(e) => setShippingInfo(prev => ({...prev, deliveryType: e.target.value}))}
                      className="sr-only"
                    />
                    <div className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      shippingInfo.deliveryType === 'standard' 
                        ? 'border-[#D4AF37] bg-[#D4AF37]/5' 
                        : 'border-gray-200 hover:border-[#D4AF37]/50'
                    }`}>
                      <TruckIcon className="h-6 w-6 text-[#2C3E50] mb-2" />
                      <h4 className="font-medium text-sm">Envío Estándar</h4>
                      <p className="text-xs text-[#BDC3C7]">3-5 días hábiles</p>
                      <p className="text-xs font-medium">${shippingCost} MXN</p>
                    </div>
                  </label>
                  
                  <label className="relative">
                    <input
                      type="radio"
                      name="deliveryType"
                      value="express"
                      checked={shippingInfo.deliveryType === 'express'}
                      onChange={(e) => setShippingInfo(prev => ({...prev, deliveryType: e.target.value}))}
                      className="sr-only"
                    />
                    <div className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      shippingInfo.deliveryType === 'express' 
                        ? 'border-[#D4AF37] bg-[#D4AF37]/5' 
                        : 'border-gray-200 hover:border-[#D4AF37]/50'
                    }`}>
                      <TruckIcon className="h-6 w-6 text-[#D4AF37] mb-2" />
                      <h4 className="font-medium text-sm">Envío Express</h4>
                      <p className="text-xs text-[#BDC3C7]">1-2 días hábiles</p>
                      <p className="text-xs font-medium">$189 MXN</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Resumen del Pedido */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[#F9F9F9] to-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Resumen del Pedido</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-[#BDC3C7]">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(0)} MXN</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-[#BDC3C7]">Envío</span>
                  <span className={`font-medium ${finalShippingCost === 0 ? 'text-green-600' : ''}`}>
                    {finalShippingCost === 0 ? 'GRATIS' : `$${finalShippingCost} MXN`}
                  </span>
                </div>
                
                {includesFreeDecant && (
                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <GiftIcon className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-green-800 text-sm">Decant gratis 5ml</span>
                    </div>
                    <span className="text-green-600 font-medium">¡Incluido!</span>
                  </div>
                )}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-[#D4AF37]">${total.toFixed(0)} MXN</span>
                  </div>
                </div>
              </div>

              {/* Método de Pago */}
              <div className="mt-6">
                <h3 className="font-medium text-gray-900 mb-3">Método de Pago</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="transfer"
                      checked={paymentMethod === 'transfer'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3"
                    />
                    <CreditCardIcon className="h-4 w-4 mr-2 text-[#D4AF37]" />
                    <span className="text-sm">Transferencia bancaria</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="oxxo"
                      checked={paymentMethod === 'oxxo'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-3"
                    />
                    <BuildingIcon className="h-4 w-4 mr-2 text-[#D4AF37]" />
                    <span className="text-sm">Pago en OXXO</span>
                  </label>
                  
                  {shippingInfo.deliveryType === 'personal' && (
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={paymentMethod === 'cash'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-3"
                      />
                      <HandIcon className="h-4 w-4 mr-2 text-[#D4AF37]" />
                      <span className="text-sm">Efectivo contra entrega</span>
                    </label>
                  )}
                </div>
              </div>

              {/* Botón Generar Ticket */}
              <button
                onClick={generateTicket}
                disabled={!shippingInfo.fullName || !shippingInfo.phone || !shippingInfo.email}
                className="w-full mt-6 bg-[#2C3E50] text-[#D4AF37] py-3 rounded-lg font-medium hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B] hover:text-[#2C3E50] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <TicketIcon className="h-5 w-5 mr-2" />
                Generar Ticket de Compra
              </button>
              
              <p className="text-xs text-[#BDC3C7] mt-3 text-center">
                El ticket se enviará por WhatsApp o Instagram para confirmación
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal del Ticket */}
      {showTicket && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-logo font-bold text-gray-900">Ticket Generado</h2>
                <button
                  onClick={() => setShowTicket(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              {/* Contenido del Ticket */}
              <div className="bg-[#F9F9F9] p-6 rounded-lg mb-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-logo font-bold text-[#D4AF37]">AROMA SELECTO</h3>
                  <p className="text-sm text-[#BDC3C7]">Ticket de Compra</p>
                  <p className="text-lg font-bold text-[#2C3E50]">#{`AS${Date.now().toString().slice(-6)}`}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Cliente:</h4>
                    <p className="text-sm text-[#BDC3C7]">{shippingInfo.fullName}</p>
                    <p className="text-sm text-[#BDC3C7]">{shippingInfo.phone}</p>
                    <p className="text-sm text-[#BDC3C7]">{shippingInfo.email}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Productos:</h4>
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>{item.quantity}x {item.name} ({item.size})</span>
                        <span>${(item.price * item.quantity).toFixed(0)}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal:</span>
                      <span>${subtotal.toFixed(0)} MXN</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Envío:</span>
                      <span>{finalShippingCost === 0 ? 'GRATIS' : `$${finalShippingCost} MXN`}</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Total:</span>
                      <span className="text-[#D4AF37]">${total.toFixed(0)} MXN</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Botones de Contacto */}
              <div className="space-y-3">
                <p className="text-center text-sm text-[#BDC3C7] mb-4">
                  Envía este ticket por tu método preferido para confirmar tu pedido:
                </p>
                
                <div className="grid md:grid-cols-3 gap-3">
                  <a
                    href={`https://wa.me/527823185711?text=¡Hola! Aquí está mi ticket de compra: AS${Date.now().toString().slice(-6)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <MessageCircleIcon className="h-4 w-4 mr-2" />
                    WhatsApp
                  </a>
                  
                  <a
                    href="https://www.instagram.com/aromaselecto.mx/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
                  >
                    <InstagramIcon className="h-4 w-4 mr-2" />
                    Instagram
                  </a>
                  
                  <a
                    href={`mailto:aromaselecto.mx@gmail.com?subject=Ticket de Compra AS${Date.now().toString().slice(-6)}&body=Adjunto mi ticket de compra.`}
                    className="flex items-center justify-center bg-[#D4AF37] text-white py-3 rounded-lg hover:bg-[#B8860B] transition-colors"
                  >
                    <MailIcon className="h-4 w-4 mr-2" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Información Adicional */}
      <section className="py-12 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <CheckCircleIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Confirmación Inmediata</h3>
              <p className="text-[#BDC3C7] text-sm">
                Te confirmamos stock y detalles al recibir tu ticket
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <TruckIcon className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Preparación Rápida</h3>
              <p className="text-[#BDC3C7] text-sm">
                Tu pedido se prepara en 1-3 días con el máximo cuidado
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <GiftIcon className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Garantía de Calidad</h3>
              <p className="text-[#BDC3C7] text-sm">
                Decants 100% originales con garantía de satisfacción
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;