import { useEffect, useState } from 'react';
import { ShoppingBagIcon, TrashIcon, PlusIcon, MinusIcon, MapPinIcon, GiftIcon, TicketIcon, InstagramIcon, MessageCircleIcon, TruckIcon, CreditCardIcon, BuildingIcon, HandIcon, CheckCircleIcon } from 'lucide-react';
import { useCart } from '../context/useCart';
import Button from '../components/Button';

const CartPage = () => {
  const { 
    items: cartItems, 
    updateQuantity, 
    removeFromCart, 
    getCartSubtotal,
    getShippingCost,
  } = useCart();

  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    phone: '',
    email: '',
    postalCode: '',
    state: '',
    city: '',
    address: '',
    deliveryType: 'standard'
  });

  const [paymentMethod, setPaymentMethod] = useState('transfer');
  const [showTicket, setShowTicket] = useState(false);
  // Estado para acordeón móvil de tipo de entrega
  const [openDeliveryAccordion, setOpenDeliveryAccordion] = useState('personal');

  // ← CONFIGURACIÓN ACTUALIZADA
  const FREE_SHIPPING_MINIMUM = 899; // $899 MXN para envío gratis
  const FREE_DECANT_MINIMUM = 600; // $600 MXN para decant gratis

  // Cálculos dinámicos mejorados
  const subtotal = getCartSubtotal();
  const baseShippingCost = getShippingCost(shippingInfo.deliveryType, subtotal);
  
  // ← LÓGICA DE DESCUENTOS EN ENVÍO CORREGIDA
  const calculateFinalShippingCost = () => {
  if (shippingInfo.deliveryType === 'personal') {
    return 0; // Entrega personal siempre gratis
  }
  
  if (subtotal >= FREE_SHIPPING_MINIMUM) {
    if (shippingInfo.deliveryType === 'standard') {
      return 0; // Envío estándar gratis al alcanzar el mínimo
    } else if (shippingInfo.deliveryType === 'express') {
      return 95; // ← PRECIO FIJO: 50% de descuento ($189/2 = $95)
    }
  }
  
  return baseShippingCost;
};

  const finalShippingCost = calculateFinalShippingCost();
  const total = subtotal + finalShippingCost;
  const freeDecant = subtotal >= FREE_DECANT_MINIMUM;
  const hasShippingDiscount = subtotal >= FREE_SHIPPING_MINIMUM && shippingInfo.deliveryType !== 'personal';

  // ← EFECTO PARA RESETEAR MÉTODO DE PAGO CUANDO CAMBIA TIPO DE ENTREGA
  useEffect(() => {
    // Si cambia a envío (no personal) y tenía "cash", cambiar a transfer
    if (shippingInfo.deliveryType !== 'personal' && paymentMethod === 'cash') {
      setPaymentMethod('transfer');
    }
  }, [shippingInfo.deliveryType, paymentMethod]);

  // Función para manejar cantidad
  const handleUpdateQuantity = (id: string, size: string, newQuantity: number) => {
    updateQuantity(id, size, newQuantity);
  };

  // Función para eliminar item
  const handleRemoveItem = (id: string, size: string) => {
    removeFromCart(id, size);
  };

  const generateTicket = () => {
    const ticketNumber = `AS${Date.now().toString().slice(-6)}`;
    const ticketData = {
      number: ticketNumber,
      customer: shippingInfo,
      items: cartItems,
      subtotal,
      shipping: finalShippingCost,
      shippingDiscount: hasShippingDiscount ? baseShippingCost - finalShippingCost : 0,
      total,
      includesFreeDecant: freeDecant,
      paymentMethod,
      date: new Date().toLocaleDateString('es-MX')
    };
    
    console.log('Ticket generado:', ticketData);
    setShowTicket(true);
  };

  // ← VALIDACIÓN DINÁMICA DE CAMPOS REQUERIDOS
  const getRequiredFieldsForDeliveryType = () => {
  if (shippingInfo.deliveryType === 'personal') {
    return ['fullName', 'phone']; // Solo nombre y teléfono
  } else {
    return ['fullName', 'phone', 'email', 'postalCode', 'state', 'city', 'address'];
  }
};

  const isFormValid = () => {
    const requiredFields = getRequiredFieldsForDeliveryType();
    return requiredFields.every(field => {
      const value = shippingInfo[field as keyof typeof shippingInfo];
      return value && value.trim() !== '';
    });
  };

  // ← FUNCIÓN PARA RENDERIZAR CAMPOS SEGÚN TIPO DE ENTREGA
  const renderShippingFields = () => {
    if (shippingInfo.deliveryType === 'personal') {
      return (
        <div className="grid gap-4">
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

          {/* ← INFORMACIÓN PARA ENTREGA PERSONAL */}
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start">
              <HandIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-blue-900 mb-1">Entrega Personal</h4>
                <p className="text-sm text-blue-700">
                  Te contactaremos para coordinar el lugar y horario de entrega en Gutiérrez Zamora o zonas cercanas.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
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

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Dirección completa *</label>
            <textarea
              value={shippingInfo.address}
              onChange={(e) => setShippingInfo(prev => ({...prev, address: e.target.value}))}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37]"
              placeholder="Calle, número, colonia, referencias..."
            />
          </div>
        </div>
      );
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="bg-white pt-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <ShoppingBagIcon className="h-24 w-24 text-[#BDC3C7] mx-auto mb-6" />
          <h1 className="text-3xl font-logo font-bold text-gray-900 mb-4">Tu carrito está vacío</h1>
          <p className="text-[#BDC3C7] mb-8">¡Descubre nuestras fragancias y encuentra tu aroma perfecto!</p>
          <Button
          as='link'
            to="/fragancias"
            variant="primary"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Explorar Productos
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#F9F9F9] pt-20 min-h-screen">
  {/* Header tipo card */}
  <section className="mb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-sm px-6 py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between border border-gray-100">
        <div>
          <h1 className="text-3xl font-logo font-bold text-gray-900 mb-1">Tu Carrito</h1>
          <p className="text-[#BDC3C7] text-sm">Revisa tus productos y completa tu pedido</p>
        </div>
        <div className="mt-4 lg:mt-0 flex items-center space-x-4">
          <span className="text-sm text-gray-500 font-medium">{cartItems.length} productos</span>
          <span className="hidden lg:inline text-gray-300">•</span>
          <span className="text-sm text-[#D4AF37] font-bold">Subtotal: ${subtotal.toFixed(0)} MXN</span>
        </div>
      </div>
    </div>
  </section>

  {/* Grid principal */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
    {/* Columna 1: Lista de productos */}
    <div className="lg:col-span-2 flex flex-col gap-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center">
            <ShoppingBagIcon className="h-5 w-5 text-[#D4AF37] mr-2" />
            Productos ({cartItems.length})
          </h2>
          <Button
            as="link"
            to="/fragancias"
            variant="outline"
            className="hidden sm:inline-flex border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
          >
            Seguir comprando
          </Button>
        </div>
        <div className="space-y-6 divide-y divide-gray-100">
          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 bg-[#FAFAFA] rounded-lg hover:shadow-md transition-all border border-transparent hover:border-[#D4AF37]/30 relative"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg bg-[#F9F9F9] mx-auto sm:mx-0"
              />
              <div className="flex-1 min-w-0">
                <h3
                  className="font-medium text-gray-900 whitespace-normal break-words text-center sm:text-left sm:truncate sm:max-w-none"
                >
                  {item.name}
                </h3>
                <p
                  className="text-[#BDC3C7] text-sm whitespace-normal break-words text-center sm:text-left sm:truncate sm:max-w-none"
                >
                  {item.brand} • {item.size}
                </p>
                <p className="text-[#D4AF37] font-semibold text-center sm:text-left">$ {item.price} MXN</p>
              </div>
              <div className="flex items-center space-x-3 mt-2 sm:mt-0">
                <button
                  aria-label="Disminuir cantidad"
                  onClick={() => handleUpdateQuantity(item.id, item.size, item.quantity - 1)}
                  className="p-1 rounded-full bg-gray-100 hover:bg-[#D4AF37] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  disabled={item.quantity <= 1}
                >
                  <MinusIcon className="h-4 w-4" />
                </button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <button
                  aria-label="Aumentar cantidad"
                  onClick={() => handleUpdateQuantity(item.id, item.size, item.quantity + 1)}
                  disabled={item.quantity >= item.stock}
                  className="p-1 rounded-full bg-gray-100 hover:bg-[#D4AF37] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <PlusIcon className="h-4 w-4" />
                </button>
              </div>
              <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-end mt-2 sm:mt-0 min-w-[80px]">
                <p className="font-semibold text-gray-900 text-right whitespace-nowrap">$ {(item.price * item.quantity).toFixed(0)} MXN</p>
                <button
                  aria-label="Eliminar producto"
                  onClick={() => handleRemoveItem(item.id, item.size)}
                  className="text-red-500 hover:text-white hover:bg-red-500 transition-colors mt-1 ml-2 sm:ml-0 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <Button
          as="link"
          to="/fragancias"
          variant="outline"
          className="mt-6 w-full sm:hidden border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
        >
          Seguir comprando
        </Button>
      </div>

      {/* Alertas dinámicas y beneficios */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ...alertas según tipo de entrega, igual que antes... */}
        {shippingInfo.deliveryType === 'personal' && subtotal < FREE_DECANT_MINIMUM && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <GiftIcon className="h-5 w-5 text-green-600 mr-3" />
              <div>
                <p className="text-green-900 font-medium text-sm">¡Falta poco para tu decant gratis!</p>
                <p className="text-green-700 text-sm">Agrega <strong>${(FREE_DECANT_MINIMUM - subtotal).toFixed(0)} MXN</strong> más y obtén un decant 5ml gratis</p>
              </div>
            </div>
          </div>
        )}
        {shippingInfo.deliveryType === 'standard' && (
          <>
            {subtotal < FREE_DECANT_MINIMUM && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center">
                  <GiftIcon className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <p className="text-green-900 font-medium text-sm">¡Falta poco para tu decant gratis!</p>
                    <p className="text-green-700 text-sm">Agrega <strong>${(FREE_DECANT_MINIMUM - subtotal).toFixed(0)} MXN</strong> más y obtén un decant 5ml gratis</p>
                  </div>
                </div>
              </div>
            )}
            {subtotal < FREE_SHIPPING_MINIMUM && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center">
                  <TruckIcon className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-blue-900 font-medium text-sm">¡Falta poco para el envío gratis!</p>
                    <p className="text-blue-700 text-sm">Agrega <strong>${(FREE_SHIPPING_MINIMUM - subtotal).toFixed(0)} MXN</strong> más y obtén envío estándar gratis</p>
                  </div>
                </div>
              </div>
            )}
            {subtotal >= FREE_SHIPPING_MINIMUM && subtotal >= FREE_DECANT_MINIMUM && (
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-yellow-600 mr-3" />
                  <div>
                    <p className="text-yellow-900 font-medium text-sm">¡Felicidades! Desbloqueaste todos los beneficios</p>
                    <p className="text-yellow-700 text-sm">🚚 Envío gratis + 🎁 Decant 5ml gratis incluidos</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        {shippingInfo.deliveryType === 'express' && (
          <>
            {subtotal < FREE_DECANT_MINIMUM && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center">
                  <GiftIcon className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <p className="text-green-900 font-medium text-sm">¡Falta poco para tu decant gratis!</p>
                    <p className="text-green-700 text-sm">Agrega <strong>${(FREE_DECANT_MINIMUM - subtotal).toFixed(0)} MXN</strong> más y obtén un decant 5ml gratis</p>
                  </div>
                </div>
              </div>
            )}
            {subtotal < FREE_SHIPPING_MINIMUM && (
              <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center">
                  <TruckIcon className="h-5 w-5 text-orange-600 mr-3" />
                  <div>
                    <p className="text-orange-900 font-medium text-sm">¡Falta poco para 50% descuento en envío express!</p>
                    <p className="text-orange-700 text-sm">Agrega <strong>${(FREE_SHIPPING_MINIMUM - subtotal).toFixed(0)} MXN</strong> más y paga solo $95 MXN (en lugar de $189)</p>
                  </div>
                </div>
              </div>
            )}
            {subtotal >= FREE_SHIPPING_MINIMUM && subtotal >= FREE_DECANT_MINIMUM && (
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-3" />
                  <div>
                    <p className="text-orange-900 font-medium text-sm">¡Felicidades! Desbloqueaste todos los beneficios</p>
                    <p className="text-orange-700 text-sm">🚚 50% descuento en envío express ($95 MXN) + 🎁 Decant 5ml gratis</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Información de Envío y Resumen del Pedido en grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        {/* Información de Envío */}
        <div className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <MapPinIcon className="h-5 w-5 text-[#D4AF37] mr-2" />
            Información de Envío
          </h2>
          {/* Tipo de Entrega */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">Tipo de Entrega</label>
        {/* Mobile: acordeón, Desktop: grid */}
        <div className="block md:hidden">
          {/* Entrega Personal */}
          <div className="mb-2 border rounded-lg overflow-hidden">
            <button
              type="button"
              className={`w-full flex items-center justify-between p-4 focus:outline-none ${openDeliveryAccordion === 'personal' ? 'bg-[#D4AF37]/10' : 'bg-white'}`}
              onClick={() => {
                if (openDeliveryAccordion !== 'personal') {
                  setShippingInfo(prev => ({...prev, deliveryType: 'personal'}));
                  setOpenDeliveryAccordion('personal');
                } else {
                  setOpenDeliveryAccordion('');
                }
              }}
            >
              <span className="flex items-center">
                <HandIcon className="h-6 w-6 text-[#D4AF37] mr-2" />
                <span className="font-medium text-sm">Entrega Personal</span>
              </span>
              <input
                type="radio"
                name="deliveryType"
                value="personal"
                checked={shippingInfo.deliveryType === 'personal'}
                onChange={(e) => {
                  setShippingInfo(prev => ({...prev, deliveryType: e.target.value}));
                  setOpenDeliveryAccordion('personal');
                }}
                className="ml-2 accent-[#D4AF37]"
              />
            </button>
            {openDeliveryAccordion === 'personal' && (
              <div className="px-4 pb-4 animate-fade-in">
                <div className="text-xs text-[#BDC3C7] mb-2">
                  <p>Gutiérrez Zamora</p>
                  <p className="text-green-600 font-medium mt-1">GRATIS</p>
                </div>
                {shippingInfo.deliveryType === 'personal' && renderShippingFields()}
              </div>
            )}
          </div>
          {/* Envío Estándar */}
          <div className="mb-2 border rounded-lg overflow-hidden">
            <button
              type="button"
              className={`w-full flex items-center justify-between p-4 focus:outline-none ${openDeliveryAccordion === 'standard' ? 'bg-[#D4AF37]/10' : 'bg-white'}`}
              onClick={() => {
                if (openDeliveryAccordion !== 'standard') {
                  setShippingInfo(prev => ({...prev, deliveryType: 'standard'}));
                  setOpenDeliveryAccordion('standard');
                } else {
                  setOpenDeliveryAccordion('');
                }
              }}
            >
              <span className="flex items-center">
                <TruckIcon className="h-6 w-6 text-[#2C3E50] mr-2" />
                <span className="font-medium text-sm">Envío Estándar</span>
              </span>
              <input
                type="radio"
                name="deliveryType"
                value="standard"
                checked={shippingInfo.deliveryType === 'standard'}
                onChange={(e) => {
                  setShippingInfo(prev => ({...prev, deliveryType: e.target.value}));
                  setOpenDeliveryAccordion('standard');
                }}
                className="ml-2 accent-[#D4AF37]"
              />
            </button>
            {openDeliveryAccordion === 'standard' && (
              <div className="px-4 pb-4 animate-fade-in">
                <div className="text-xs text-[#BDC3C7] mb-2">
                  <p>3-5 días hábiles</p>
                  <p className="font-medium mt-1">
                    {subtotal >= FREE_SHIPPING_MINIMUM ? (
                      <span className="text-green-600">GRATIS</span>
                    ) : (
                      '$140 MXN'
                    )}
                  </p>
                </div>
                {shippingInfo.deliveryType === 'standard' && renderShippingFields()}
              </div>
            )}
          </div>
          {/* Envío Express */}
          <div className="mb-2 border rounded-lg overflow-hidden">
            <button
              type="button"
              className={`w-full flex items-center justify-between p-4 focus:outline-none ${openDeliveryAccordion === 'express' ? 'bg-[#D4AF37]/10' : 'bg-white'}`}
              onClick={() => {
                if (openDeliveryAccordion !== 'express') {
                  setShippingInfo(prev => ({...prev, deliveryType: 'express'}));
                  setOpenDeliveryAccordion('express');
                } else {
                  setOpenDeliveryAccordion('');
                }
              }}
            >
              <span className="flex items-center">
                <TruckIcon className="h-6 w-6 text-[#D4AF37] mr-2" />
                <span className="font-medium text-sm">Envío Express</span>
              </span>
              <input
                type="radio"
                name="deliveryType"
                value="express"
                checked={shippingInfo.deliveryType === 'express'}
                onChange={(e) => {
                  setShippingInfo(prev => ({...prev, deliveryType: e.target.value}));
                  setOpenDeliveryAccordion('express');
                }}
                className="ml-2 accent-[#D4AF37]"
              />
            </button>
            {openDeliveryAccordion === 'express' && (
              <div className="px-4 pb-4 animate-fade-in">
                <div className="text-xs text-[#BDC3C7] mb-2">
                  <p>1-2 días hábiles</p>
                  <p className="font-medium mt-1">
                    {subtotal >= FREE_SHIPPING_MINIMUM ? (
                      <span className="text-orange-600">$95 MXN</span>
                    ) : (
                      '$189 MXN'
                    )}
                  </p>
                </div>
                {shippingInfo.deliveryType === 'express' && renderShippingFields()}
              </div>
            )}
          </div>
        </div>
        {/* Desktop: grid de opciones como antes */}
        <div className="hidden md:grid md:grid-cols-3 gap-3">
          {/* ...radios igual que antes... */}
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
              <p className="text-xs font-medium">
                {subtotal >= FREE_SHIPPING_MINIMUM ? (
                  <span className="text-green-600">GRATIS</span>
                ) : (
                  '$140 MXN'
                )}
              </p>
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
              <p className="text-xs font-medium">
                {subtotal >= FREE_SHIPPING_MINIMUM ? (
                  <span className="text-orange-600">$95 MXN</span>
                ) : (
                  '$189 MXN'
                )}
              </p>
            </div>
          </label>
        </div>
      </div>
        {/* Solo desktop: mostrar campos según opción seleccionada */}
        <div className="hidden md:block">
          {renderShippingFields()}
        </div>
          {!isFormValid() && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
              Por favor, completa todos los campos obligatorios para continuar.
            </div>
          )}
        </div>
        {/* Resumen del Pedido */}
        <div className="bg-gradient-to-br from-[#F9F9F9] to-white rounded-lg shadow-sm border border-gray-100 p-6 h-fit">
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
            {hasShippingDiscount && finalShippingCost > 0 && shippingInfo.deliveryType === 'express' && (
              <div className="flex justify-between text-orange-600">
                <span className="text-sm">Descuento envío (50%)</span>
                <span className="text-sm font-medium">-$94 MXN</span>
              </div>
            )}
            {hasShippingDiscount && finalShippingCost === 0 && shippingInfo.deliveryType === 'standard' && (
              <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-green-800 text-sm">¡Envío gratis desbloqueado!</span>
                </div>
              </div>
            )}
            {hasShippingDiscount && finalShippingCost > 0 && shippingInfo.deliveryType === 'express' && (
              <div className="flex items-center justify-between p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="flex items-center">
                  <CheckCircleIcon className="h-4 w-4 text-orange-600 mr-2" />
                  <span className="text-orange-800 text-sm">¡50% descuento aplicado!</span>
                </div>
              </div>
            )}
            {freeDecant && (
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
            disabled={!isFormValid()}
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
  </div>

      {/* Modal del Ticket - ← OPTIMIZADO PARA CAPTURAS */}
      {showTicket && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-0 z-50">
          <div className="bg-white rounded-none sm:rounded-lg shadow-xl w-full h-full sm:max-w-lg sm:h-auto overflow-y-auto">
            <div className="p-2 sm:p-4">
              {/* ← HEADER MÁS COMPACTO */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-logo font-bold text-gray-900">Ticket de Compra</h2>
                <button
                  onClick={() => setShowTicket(false)}
                  className="text-gray-400 hover:text-gray-600 p-1"
                >
                  ✕
                </button>
              </div>
              {/* Contenido del Ticket - ← MÁS COMPACTO */}
              <div className="p-4 section-card rounded-lg mb-4 ">
                {/* ← HEADER DEL TICKET SIMPLIFICADO */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-logo font-bold text-[#D4AF37]">AROMA SELECTO MX</h3>
                  <p className="text-sm font-bold text-[#2C3E50]">#{`AS${Date.now().toString().slice(-6)}`}</p>
                  <p className="text-xs text-[#BDC3C7]">{new Date().toLocaleDateString('es-MX', { 
                    day: '2-digit',
                    month: '2-digit', 
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}</p>
                </div>
                {/* ← CONTENIDO MÁS COMPACTO */}
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1 text-sm">Cliente:</h4>
                    <div className="text-xs text-[#BDC3C7] space-y-0.5">
                      <p>{shippingInfo.fullName}</p>
                      <p>{shippingInfo.phone} • {shippingInfo.email}</p>
                      {/* ← DIRECCIÓN EN UNA LÍNEA SI NO ES ENTREGA PERSONAL */}
                      {shippingInfo.deliveryType !== 'personal' && (
                        <p>{shippingInfo.address}, {shippingInfo.city}, {shippingInfo.state} {shippingInfo.postalCode}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 text-sm">Entrega:</h4>
                      <p className="text-xs text-[#BDC3C7]">
                        {shippingInfo.deliveryType === 'personal' ? 'Personal (GZ)' :
                         shippingInfo.deliveryType === 'standard' ? 'Estándar (3-5d)' :
                         'Express (1-2d)'}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 text-sm">Pago:</h4>
                      <p className="text-xs text-[#BDC3C7]">
                        {paymentMethod === 'transfer' ? 'Transferencia' :
                         paymentMethod === 'oxxo' ? 'OXXO' :
                         paymentMethod === 'cash' ? 'Efectivo' :
                         'Transferencia'}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">Productos:</h4>
                    <div className="space-y-1">
                      {cartItems.map((item) => (
                        <div key={`${item.id}-${item.size}`} className="flex justify-between text-xs">
                          <span className="flex-1">{item.quantity}x {item.name} ({item.size})</span>
                          <span className="font-medium ml-2">${(item.price * item.quantity).toFixed(0)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* ← DECANT GRATIS MÁS COMPACTO */}
                  {freeDecant && (
                    <div className="bg-green-50 border border-green-200 rounded p-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <GiftIcon className="h-3 w-3 text-green-600 mr-1" />
                          <span className="text-green-800 text-xs font-medium">Decant gratis (5ml)</span>
                        </div>
                        <span className="text-green-600 text-xs">$0</span>
                      </div>
                      <p className="text-green-700 text-xs mt-1 ml-4">
                        *Fragancia seleccionada por nosotros
                      </p>
                    </div>
                  )}
                  {/* ← TOTALES MÁS COMPACTOS */}
                  <div className="border-t pt-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(0)} MXN</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Envío:</span>
                        <span>{finalShippingCost === 0 ? 'GRATIS' : `$${finalShippingCost} MXN`}</span>
                      </div>
                      {/* ← DESCUENTOS MÁS COMPACTOS */}
                      {hasShippingDiscount && finalShippingCost > 0 && shippingInfo.deliveryType === 'express' && (
                        <div className="flex justify-between text-xs text-orange-600">
                          <span>Desc. envío (50%):</span>
                          <span>-$94 MXN</span>
                        </div>
                      )}
                      {hasShippingDiscount && finalShippingCost === 0 && shippingInfo.deliveryType === 'standard' && (
                        <div className="flex justify-between text-xs text-green-600">
                          <span>Envío gratis:</span>
                          <span>-$140 MXN</span>
                        </div>
                      )}
                      {freeDecant && (
                        <div className="flex justify-between text-xs text-green-600">
                          <span>Decant gratis:</span>
                          <span>$0 MXN</span>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between font-bold text-sm border-t pt-2 mt-2">
                      <span>Total:</span>
                      <span className="text-[#D4AF37]">${total.toFixed(0)} MXN</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* ← MENSAJE DE CAPTURA Y BOTONES DE CONTACTO */}
              <div className="space-y-2">
                <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs rounded p-3 mb-2 text-center font-medium">
                  <span>Por favor, toma una <b>captura de pantalla</b> de este ticket y envíala por WhatsApp o Instagram para procesar tu pedido.</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`https://wa.me/527823185711?text=¡Hola! Aquí está mi ticket: AS${Date.now().toString().slice(-6)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-600 text-white py-2 rounded text-xs hover:bg-green-700 transition-colors"
                  >
                    <MessageCircleIcon className="h-3 w-3 mr-1" />
                    WhatsApp
                  </a>
                  <a
                    href="https://www.instagram.com/aromaselecto.mx/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded text-xs hover:from-purple-600 hover:to-pink-600 transition-colors"
                  >
                    <InstagramIcon className="h-3 w-3 mr-1" />
                    Instagram
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
    </main>
  );
};

export default CartPage;