import { useEffect, useState } from 'react';
// Componente hijo para animar cada producto del carrito
const ProductCartItem = ({ item, onUpdateQuantity, onRemoveItem }: {
  item: {
    id: string;
    name: string;
    brand: string;
    size: number;
    price: number;
    quantity: number;
    stock: number;
    image: string;
  };
  onUpdateQuantity: (id: string, size: number, newQuantity: number) => void;
  onRemoveItem: (id: string, size: number) => void;
}) => {
  const anim = useScrollFadeIn();
  return (
    <div
      ref={anim.ref}
      className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 bg-[#FAFAFA] rounded-lg hover:shadow-md border border-transparent hover:border-[#D4AF37]/30 relative transition-all duration-700 ${anim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
          {item.brand} • {item.size} ml
        </p>
        <p className="text-[#D4AF37] font-semibold text-center sm:text-left">$ {item.price} MXN</p>
      </div>
      <div className="flex items-center space-x-3 mt-2 sm:mt-0">
        <button
          aria-label="Disminuir cantidad"
          onClick={() => onUpdateQuantity(item.id, item.size, item.quantity - 1)}
          className="p-1 rounded-full bg-gray-100 hover:bg-[#D4AF37] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          disabled={item.quantity <= 1}
        >
          <MinusIcon className="h-4 w-4" />
        </button>
        <span className="w-8 text-center font-medium">{item.quantity}</span>
        <button
          aria-label="Aumentar cantidad"
          onClick={() => onUpdateQuantity(item.id, item.size, item.quantity + 1)}
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
          onClick={() => onRemoveItem(item.id, item.size)}
          className="text-red-500 hover:text-white hover:bg-red-500 transition-colors mt-1 ml-2 sm:ml-0 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          <TrashIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import { ShoppingBagIcon, TrashIcon, PlusIcon, MinusIcon, MapPinIcon, GiftIcon, TicketIcon, InstagramIcon, MessageCircleIcon, TruckIcon, CreditCardIcon, BuildingIcon, HandIcon, CheckCircleIcon } from 'lucide-react';
import { useCart } from '../context/cartContext';
import Button from '../components/Button';

const CartPage = () => {
  // Animaciones para secciones principales
  const headerAnim = useScrollFadeIn();
  const gridAnim = useScrollFadeIn();
  const infoAnim = useScrollFadeIn();
  // Animaciones para secciones de envío y pago
  const shippingAnim = useScrollFadeIn();
  const paymentAnim = useScrollFadeIn();
  const { 
    items: cartItems, 
    updateQuantity, 
    removeFromCart, 
    getCartSubtotal
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
  // ...

  // ← CONFIGURACIÓN ACTUALIZADA
  const FREE_SHIPPING_MINIMUM = 899; // $899 MXN para envío gratis
  const FREE_DECANT_MINIMUM = 600; // $600 MXN para decant gratis


  // Cálculos dinámicos mejorados
  const subtotal = getCartSubtotal();
  // Precios fijos
  const STANDARD_SHIPPING = 149;
  const EXPRESS_SHIPPING = 189;
  const EXPRESS_DISCOUNTED = 95;

  // Lógica de costo base según opción
  const getBaseShippingCost = (type: string) => {
    if (type === 'personal') return 0;
    if (type === 'standard') return STANDARD_SHIPPING;
    if (type === 'express') return EXPRESS_SHIPPING;
    return 0;
  };

  // Lógica de descuentos
  const calculateFinalShippingCost = () => {
    if (shippingInfo.deliveryType === 'personal') {
      return 0;
    }
    if (subtotal >= FREE_SHIPPING_MINIMUM) {
      if (shippingInfo.deliveryType === 'standard') return 0;
      if (shippingInfo.deliveryType === 'express') return EXPRESS_DISCOUNTED;
    }
    return getBaseShippingCost(shippingInfo.deliveryType);
  };

  const baseShippingCost = getBaseShippingCost(shippingInfo.deliveryType);
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


  // Función para manejar cantidad (size:number)
  const handleUpdateQuantity = (id: string, size: number, newQuantity: number) => {
    updateQuantity(id, size, newQuantity);
  };

  // Función para eliminar item (size:number)
  const handleRemoveItem = (id: string, size: number) => {
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

  // Tabs de opciones de entrega tipo clásico
  const renderShippingFields = () => {
    const options = [
      {
        value: 'personal',
        label: 'Personal',
        desc: 'Gutiérrez Zamora o zonas cercanas',
        price: 0,
        icon: <BuildingIcon className="h-5 w-5 mr-2 text-blue-600" />, // Casa/local
      },
      {
        value: 'standard',
        label: 'Estándar',
        desc: '3-5 días hábiles',
        price: subtotal >= FREE_SHIPPING_MINIMUM ? 0 : STANDARD_SHIPPING,
        icon: <TruckIcon className="h-5 w-5 mr-2 text-green-600" />, // Carrito verde
      },
      {
        value: 'express',
        label: 'Express',
        desc: '1-2 días hábiles',
        price: subtotal >= FREE_SHIPPING_MINIMUM ? EXPRESS_DISCOUNTED : EXPRESS_SHIPPING,
        icon: <TruckIcon className="h-5 w-5 mr-2 text-[#D4AF37]" />, // Carrito dorado
      },
    ];

    // Opción seleccionada
    const selected = options.find(opt => opt.value === shippingInfo.deliveryType);

    // Cálculos para beneficios
    const faltaDecant = Math.max(0, FREE_DECANT_MINIMUM - subtotal);
    const faltaEnvioGratis = Math.max(0, FREE_SHIPPING_MINIMUM - subtotal);

    return (
      <>
        {/* Tabs de opciones de entrega */}
        <div className="flex mb-4 gap-2">
          {options.map(opt => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setShippingInfo(prev => ({ ...prev, deliveryType: opt.value }))}
              className={`flex-1 flex flex-col items-center justify-center px-2 py-2 rounded-t-lg border-b-2 transition-all focus:outline-none
                ${shippingInfo.deliveryType === opt.value
                  ? 'border-[#D4AF37] bg-[#FFFBEA] text-[#D4AF37] font-bold shadow-sm'
                  : 'border-transparent bg-white text-gray-500 hover:bg-gray-50'}`}
            >
              <span className="flex items-center justify-center mb-1">
                {opt.icon}
                <span>{opt.label}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Info de la opción seleccionada */}
        {selected && (
          <div className="mb-4 flex flex-col items-center justify-center text-center">
            <span className="text-base font-semibold text-gray-900 flex items-center gap-2">
              {selected.icon}
              {selected.label}
            </span>
            <span className="text-xs text-gray-500 mt-1">{selected.desc}</span>
            <span className="text-xs font-bold mt-1 text-[#D4AF37]">
              {selected.price === 0 ? 'GRATIS' : `$${selected.price} MXN`}
            </span>
            {/* Mensajes de progreso y beneficios combinados */}
            {/* Ambos beneficios desbloqueados: contenedor amarillo combinado */}
            {faltaDecant === 0 && faltaEnvioGratis === 0 && (
              <div className="mt-2 px-3 py-2 rounded bg-yellow-50 border border-yellow-200 text-[#D4AF37] text-sm font-semibold flex flex-col items-center gap-1 min-w-[270px] max-w-full">
                <span>¡Decant gratis desbloqueado!</span>
                <span>
                  {selected.value === 'standard'
                    ? '¡Envío estándar gratis desbloqueado!'
                    : selected.value === 'express'
                      ? '¡Envío express al 50% desbloqueado!'
                      : ''}
                </span>
              </div>
            )}
            {/* Solo decant gratis desbloqueado */}
            {faltaDecant === 0 && faltaEnvioGratis > 0 && (
              <div className="mt-2 px-3 py-2 rounded bg-yellow-50 border border-yellow-200 text-[#D4AF37] text-sm font-semibold min-w-[270px] max-w-full">
                ¡Decant gratis desbloqueado!
              </div>
            )}
            {/* Solo envío gratis/express descuento desbloqueado */}
            {faltaEnvioGratis === 0 && faltaDecant > 0 && (
              <div className="mt-2 px-3 py-2 rounded bg-yellow-50 border border-yellow-200 text-[#D4AF37] text-sm font-semibold min-w-[270px] max-w-full">
                {selected.value === 'standard'
                  ? '¡Envío estándar gratis desbloqueado!'
                  : selected.value === 'express'
                    ? '¡Envío express al 50% desbloqueado!'
                    : ''}
              </div>
            )}
            {/* Faltan beneficios: contenedores rojos */}
            {faltaDecant > 0 && (
              <div className="mt-2 px-3 py-2 rounded bg-red-50 border border-red-200 text-red-700 text-sm font-medium min-w-[270px] max-w-full">
                Te faltan <b>${faltaDecant}</b> MXN para decant gratis.
              </div>
            )}
            {faltaEnvioGratis > 0 && selected.value === 'standard' && (
              <div className="mt-2 px-3 py-2 rounded bg-red-50 border border-red-200 text-red-700 text-sm font-medium min-w-[270px] max-w-full">
                Te faltan <b>${faltaEnvioGratis}</b> MXN para envío gratis.
              </div>
            )}
            {faltaEnvioGratis > 0 && selected.value === 'express' && (
              <div className="mt-2 px-3 py-2 rounded bg-red-50 border border-red-200 text-red-700 text-sm font-medium min-w-[270px] max-w-full">
                Te faltan <b>${faltaEnvioGratis}</b> MXN para envío al 50%.
              </div>
            )}
          </div>
        )}

        {/* Mensajes de decant gratis y envío gratis/express descuento eliminados porque ya se muestran en los nuevos contenedores de beneficios */}

        {/* Campos según tipo de entrega */}
        <div className="mt-4">
          {shippingInfo.deliveryType === 'personal' && (
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
          )}
          {(shippingInfo.deliveryType === 'standard' || shippingInfo.deliveryType === 'express') && (
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
          )}
        </div>
      </>
    );
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
            to="/productos"
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
      <section
        ref={headerAnim.ref}
        className={`mb-8 transition-all duration-700 ${headerAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
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
      <section
        ref={gridAnim.ref}
        className={`transition-all duration-700 ${gridAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Columna 1: Lista de productos */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {cartItems.map((item) => (
                <ProductCartItem
                  key={`${item.id}-${item.size}`}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemoveItem={handleRemoveItem}
                />
              ))}
            </div>
            {/* Columna 2: Envío y Pago */}
            <div className="flex flex-col gap-8">
              {/* Sección de Envío animada */}
              <div
                ref={shippingAnim.ref}
                className={`transition-all duration-700 ${shippingAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} bg-white rounded-lg shadow-sm p-6`}
              >
                <h2 className="text-lg font-bold mb-4 text-gray-900 flex items-center gap-2"><MapPinIcon className="h-5 w-5 text-[#D4AF37]" /> Datos de Envío</h2>
                {renderShippingFields()}
              </div>
              {/* Sección de Pago animada */}
              <div
                ref={paymentAnim.ref}
                className={`transition-all duration-700 ${paymentAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} bg-white rounded-lg shadow-sm p-6`}
              >
              <h2 className="text-lg font-bold mb-4 text-gray-900 flex items-center gap-2"><CreditCardIcon className="h-5 w-5 text-[#D4AF37]" /> Pago</h2>
              {/* Métodos de pago según tipo de entrega */}
              <div className="mb-4">
                {shippingInfo.deliveryType === 'personal' ? (
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="transfer"
                        checked={paymentMethod === 'transfer'}
                        onChange={() => setPaymentMethod('transfer')}
                        className="form-radio accent-[#D4AF37]"
                      />
                      <span>Transferencia</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={paymentMethod === 'cash'}
                        onChange={() => setPaymentMethod('cash')}
                        className="form-radio accent-[#D4AF37]"
                      />
                      <span>Pago contra pedido</span>
                    </label>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="transfer"
                        checked={paymentMethod === 'transfer'}
                        onChange={() => setPaymentMethod('transfer')}
                        className="form-radio accent-[#D4AF37]"
                      />
                      <span>Transferencia</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="oxxo"
                        checked={paymentMethod === 'oxxo'}
                        onChange={() => setPaymentMethod('oxxo')}
                        className="form-radio accent-[#D4AF37]"
                      />
                      <span>Depósito</span>
                    </label>
                  </div>
                )}
              </div>
              {/* Resumen de pago debajo de métodos de pago */}
              <div className="mt-4 p-4 bg-[#FFFBEA] rounded-lg border border-[#D4AF37]/30 text-sm">
                <div className="flex justify-between mb-1">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(0)} MXN</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span>Envío:</span>
                  <span>{finalShippingCost === 0 ? 'GRATIS' : `$${finalShippingCost} MXN`}</span>
                </div>
                {hasShippingDiscount && shippingInfo.deliveryType === 'express' && (
                  <div className="flex justify-between mb-1 text-orange-600">
                    <span>Desc. envío (50%):</span>
                    <span>- $ {EXPRESS_SHIPPING - EXPRESS_DISCOUNTED} MXN</span>
                  </div>
                )}
                {hasShippingDiscount && shippingInfo.deliveryType === 'standard' && (
                  <div className="flex justify-between mb-1 text-green-600">
                    <span>Envío gratis:</span>
                    <span>- $ {STANDARD_SHIPPING} MXN</span>
                  </div>
                )}
                {freeDecant && (
                  <div className="flex justify-between mb-1 text-green-600">
                    <span>Decant gratis:</span>
                    <span>$0 MXN</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-base border-t pt-2 mt-2">
                  <span>Total a pagar:</span>
                  <span className="text-[#D4AF37]">${total.toFixed(0)} MXN</span>
                </div>
              </div>
              <Button
                variant="primary"
                className="w-full mt-4 flex items-center justify-center gap-2"
                onClick={generateTicket}
                disabled={!isFormValid()}
              >
                <TicketIcon className="h-5 w-5" />
                Generar Ticket
              </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                         paymentMethod === 'oxxo' ? 'Depósito' :
                         paymentMethod === 'cash' ? 'Pago contra pedido' :
                         'Transferencia'}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">Productos:</h4>
                    <div className="space-y-1">
                      {cartItems.map((item) => (
                        <div key={`${item.id}-${item.size}`} className="flex justify-between text-xs">
                          <span className="flex-1">{item.quantity}x {item.name} ({item.size} ml)</span>
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
                      {hasShippingDiscount && shippingInfo.deliveryType === 'express' && (
                        <div className="flex justify-between text-xs text-orange-600">
                          <span>Desc. envío (50%):</span>
                          <span>- $ {EXPRESS_SHIPPING - EXPRESS_DISCOUNTED} MXN</span>
                        </div>
                      )}
                      {hasShippingDiscount && shippingInfo.deliveryType === 'standard' && (
                        <div className="flex justify-between text-xs text-green-600">
                          <span>Envío gratis:</span>
                          <span>- $ {STANDARD_SHIPPING} MXN</span>
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
      <section
        ref={infoAnim.ref}
        className={`py-12 bg-[#F9F9F9] transition-all duration-700 ${infoAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
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