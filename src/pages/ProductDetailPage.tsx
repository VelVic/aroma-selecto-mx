import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingBagIcon, HeartIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon, StarIcon, CheckIcon } from 'lucide-react'; // ← AGREGAR CheckIcon
import TestimonialCard from '../components/TestimonialCard';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext'; // ← AGREGAR useCart
// ✅ IMPORTAR FUNCIONES CENTRALIZADAS
import { getProductById, getSimilarProducts } from '../data/products';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // ← AGREGAR FUNCIONALIDAD DEL CARRITO
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  
  // ✅ USAR FUNCIÓN IMPORTADA EN LUGAR DE FUNCIÓN LOCAL
  const product = getProductById(id || '1');

  // Estados
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [showOccasion, setShowOccasion] = useState(false);
  const [showShipping, setShowShipping] = useState(false);

  // useEffects
  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes?.[0] || '5ml');
      setQuantity(1);
      setMainImage(product.images?.[0] || product.image);
      setCurrentImageIndex(0);
      setShowDetails(false);
      setShowOccasion(false);
      setShowShipping(false);
      // ← RESET ESTADOS DEL CARRITO
      setIsAdding(false);
      setJustAdded(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [id, product]);

  useEffect(() => {
    if (product && product.images && product.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          const images = product.images || [];
          const nextIndex = images.length > 0 ? (prevIndex + 1) % images.length : 0;
          if (images.length > 0) {
            setMainImage(images[nextIndex]);
          }
          return nextIndex;
        });
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [product]);

  // Funciones
  const goToPrevImage = () => {
    if (product && product.images) {
      const prevIndex = currentImageIndex === 0 ? product.images.length - 1 : currentImageIndex - 1;
      setCurrentImageIndex(prevIndex);
      setMainImage(product.images[prevIndex]);
    }
  };

  const goToNextImage = () => {
    if (product && product.images) {
      const nextIndex = (currentImageIndex + 1) % product.images.length;
      setCurrentImageIndex(nextIndex);
      setMainImage(product.images[nextIndex]);
    }
  };

  const selectImage = (image: string, index: number) => {
    setMainImage(image);
    setCurrentImageIndex(index);
  };

  // ← AGREGAR FUNCIÓN PARA CARRITO
  const handleAddToCart = () => {
    if (!product || (product.stock || 0) === 0) return;
    
    setIsAdding(true);
    
    const selectedPrice = selectedSize && product.sizesPrices && product.sizesPrices[selectedSize] 
      ? product.sizesPrices[selectedSize] 
      : product.price;
    
    // Agregar múltiples cantidades si es necesario
    for (let i = 0; i < quantity; i++) {
      const productToAdd = {
        id: product.id,
        name: product.name,
        brand: product.brand,
        image: product.image,
        size: selectedSize,
        price: selectedPrice,
        stock: product.stock || 0
      };
      
      addToCart(productToAdd);
    }
    
    // Feedback visual
    setTimeout(() => {
      setIsAdding(false);
      setJustAdded(true);
      
      // Reset después de 3 segundos
      setTimeout(() => setJustAdded(false), 3000);
    }, 500);
  };

  // Manejo de producto no encontrado
  if (!product) {
    return (
      <div className="bg-white pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-logo font-bold text-gray-900 mb-4">
            Producto no encontrado
          </h1>
          <p className="text-[#BDC3C7] mb-8">El producto que buscas no existe o ha sido eliminado.</p>
          <button 
            onClick={() => navigate('/productos')}
            className="bg-[#2C3E50] text-[#D4AF37] py-3 px-6 rounded-lg font-medium hover:bg-[#D4AF37] hover:text-[#2C3E50] transition-all duration-300"
          >
            Ver catálogo
          </button>
        </div>
      </div>
    );
  }

  // ✅ USAR FUNCIÓN IMPORTADA EN LUGAR DE FUNCIÓN LOCAL
  const similarProducts = getSimilarProducts(product.id);

  // ✅ REVIEWS DINÁMICAS BASADAS EN EL PRODUCTO ACTUAL
  const reviews = [
    {
      name: 'María García',
      date: '15 mayo, 2023',
      rating: 5,
      comment: `Me encanta ${product.name}, tiene una fragancia duradera y el aroma es exactamente lo que buscaba. Definitivamente compraré más productos de esta marca.`,
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
      productName: product.name
    },
    {
      name: 'Carlos Rodríguez',
      date: '3 junio, 2023',
      rating: 4,
      comment: `Gran relación calidad-precio con ${product.name}. La fragancia es sutil pero duradera, perfecta para el día a día. El envío fue rápido y el empaque muy elegante.`,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      productName: product.name
    }
  ];

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < (product.stock || 10)) {
      setQuantity(quantity + 1);
    }
  };

  // ✅ OBTENER IMÁGENES PARA LA GALERÍA
  const productImages = product.images || [product.image];

  return (
    <div className="bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-6">
          
          {/* Product images */}
          <div className="lg:col-span-2 flex flex-col items-center">
            <div className="relative group w-full max-w-md">
              <div className="aspect-[5/6] rounded-lg overflow-hidden border-2 border-gray-200 hover:border-[#D4AF37] transition-colors duration-300 shadow-md">
                <img 
                  src={mainImage} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                
                {/* BOTONES - SOLO SI HAY MÚLTIPLES IMÁGENES */}
                {productImages.length > 1 && (
                  <>
                    <button 
                      onClick={goToPrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B] text-[#2C3E50] hover:text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/20 transition-all duration-300 hover:scale-110 z-10 group/btn opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeftIcon className="h-5 w-5 group-hover/btn:scale-110 transition-transform duration-200" />
                    </button>
                    <button 
                      onClick={goToNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B] text-[#2C3E50] hover:text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/20 transition-all duration-300 hover:scale-110 z-10 group/btn opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRightIcon className="h-5 w-5 group-hover/btn:scale-110 transition-transform duration-200" />
                    </button>
                  </>
                )}
              </div>

              {/* Miniaturas - SOLO SI HAY MÚLTIPLES IMÁGENES */}
              {productImages.length > 1 && (
                <div className="mt-3 w-full">
                  <div className="grid grid-cols-3 gap-2 max-w-[240px] mx-auto">
                    {productImages.map((image, idx) => (
                      <button 
                        key={idx} 
                        className={`aspect-square rounded-md overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                          currentImageIndex === idx 
                            ? 'ring-2 ring-[#D4AF37]/30 border-[#D4AF37] shadow-md' 
                            : 'ring-1 ring-gray-200 border-gray-200 hover:border-[#D4AF37]/50'
                        }`} 
                        onClick={() => selectImage(image, idx)}
                      >
                        <img 
                          src={image} 
                          alt={`${product.name} view ${idx + 1}`} 
                          className="w-full h-full object-cover" 
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Product info */}
          <div className="mt-8 lg:mt-0 lg:col-span-3">
            
            {product.isNew && (
              <div className="inline-block bg-[#2C3E50] text-[#D4AF37] text-xs font-medium px-2.5 py-1 rounded-md mb-4">
                Nuevo
              </div>
            )}
            
            <h1 className="text-3xl lg:text-4xl font-logo font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>
            <h2 className="text-lg text-[#BDC3C7] mt-2">{product.brand}</h2>

            <div className="mt-5">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* ✅ SELECTORES DE TAMAÑO - SIN PRECIOS */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mt-6">
                <h3 className="text-base font-medium text-gray-900 mb-3">Tamaños</h3>
                <div className="grid grid-cols-3 gap-3">
                  {product.sizes.map(size => (
                    <div key={size} className="relative">
                      <button 
                        type="button" 
                        className={`relative w-full flex flex-col items-center justify-center rounded-lg border-2 py-3 px-2 text-base font-medium transition-all duration-300 ${
                          selectedSize === size 
                            ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] shadow-md' 
                            : 'border-gray-300 bg-white text-gray-900 hover:border-[#D4AF37]/50 hover:bg-[#F9F9F9]'
                        }`} 
                        onClick={() => handleSizeChange(size)}
                      >
                        <span className="text-lg font-bold">{size}</span>
                        
                        {/* ✅ BADGE POPULAR SOLO PARA 10ML */}
                        {size === '10ml' && (
                          <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                            Popular
                          </span>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
                
                {/* ✅ INFORMACIÓN ULTRA SIMPLIFICADA PARA 10ML SELECCIONADO */}
                {selectedSize === '10ml' && (
                  <div className="mt-4 p-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center">
                        <StarIcon className="h-3.5 w-3.5 fill-white" />
                      </div>
                      <span className="text-sm font-medium text-blue-800">
                        <strong>Mejor relación cantidad-precio</strong> - Más producto por tu dinero
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="mt-6">
              {/* ✅ PRECIO PRINCIPAL SIN DUPLICAR */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-gray-900">$</span>
                  <span className="text-2xl font-bold text-gray-900 mx-2">
                    {selectedSize && product.sizesPrices && product.sizesPrices[selectedSize] 
                      ? product.sizesPrices[selectedSize].toFixed(0) 
                      : product.price.toFixed(0)
                    }
                  </span>
                  <span className="text-lg font-medium text-[#BDC3C7]">MXN</span>
                </div>
                <p className="text-base text-[#BDC3C7]">
                  <span className={`mr-2 ${
                    (product.stock || 0) === 0 
                      ? 'text-red-500'
                      : (product.stock || 0) >= 15
                        ? 'text-green-500'
                        : 'text-orange-500'
                  }`}>●</span>
                  
                  <span className={`font-medium ${
                    (product.stock || 0) === 0 
                      ? 'text-red-500'
                      : (product.stock || 0) >= 15
                        ? 'text-green-500'
                        : 'text-orange-500'
                  }`}>
                    {(product.stock || 0) === 0 
                      ? 'Agotado'
                      : (product.stock || 0) >= 15
                        ? 'Disponible'
                        : 'Agotándose'
                    }
                  </span>
                </p>
              </div>

              {/* CONTADOR */}
              <div className="flex justify-center mb-6">
                <div className="flex border-2 border-gray-300 rounded-lg overflow-hidden">
                  <button 
                    type="button" 
                    className="px-4 py-2 text-base text-[#BDC3C7] hover:text-[#D4AF37] hover:bg-[#F9F9F9] transition-colors"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <span className="px-6 py-2 bg-[#F9F9F9] text-gray-900 font-medium text-base">{quantity}</span>
                  <button 
                    type="button" 
                    className="px-4 py-2 text-base text-[#BDC3C7] hover:text-[#D4AF37] hover:bg-[#F9F9F9] transition-colors"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* BOTONES - ← AGREGAR FUNCIONALIDAD */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  type="button" 
                  onClick={handleAddToCart}
                  disabled={(product.stock || 0) === 0}
                  className={`flex-1 py-3 px-5 rounded-lg font-medium text-base flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
                    justAdded
                      ? 'bg-green-600 text-white'
                      : 'bg-[#2C3E50] hover:bg-[#D4AF37] hover:text-[#2C3E50] text-[#D4AF37]'
                  }`}
                >
                  {/* ← ICONOS CON FEEDBACK VISUAL */}
                  {isAdding ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Agregando...
                    </>
                  ) : justAdded ? (
                    <>
                      <CheckIcon className="h-5 w-5 mr-2" />
                      ¡Agregado al carrito!
                    </>
                  ) : (
                    <>
                      <ShoppingBagIcon className="h-5 w-5 mr-2" />
                      Agregar al carrito
                    </>
                  )}
                </button>
                <button 
                  type="button" 
                  className="flex-1 bg-transparent border-2 border-[#D4AF37] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#2C3E50] py-3 px-5 rounded-lg font-medium text-base flex items-center justify-center transition-all duration-300"
                >
                  <HeartIcon className="h-5 w-5 mr-2" />
                  Favoritos
                </button>
              </div>

              {/* ← MENSAJE DE CONFIRMACIÓN */}
              {justAdded && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-green-800 text-sm font-medium">
                      {quantity > 1 ? `${quantity} productos agregados` : 'Producto agregado'} al carrito ({selectedSize})
                    </span>
                  </div>
                </div>
              )}

              {/* DETALLES DEL PRODUCTO - ACORDEÓN */}
              {product.details && product.details.length > 0 && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button 
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex items-center justify-between w-full text-left mb-3"
                  >
                    <h3 className="text-base font-medium text-gray-900">Detalles del producto</h3>
                    <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 text-gray-900 hover:text-[#D4AF37] ${showDetails ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${showDetails ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className="space-y-2 pb-1">
                      {product.details.map((detail, idx) => (
                        <li key={idx} className="text-[#BDC3C7] flex items-start text-sm">
                          <span className="text-[#D4AF37] mr-2 text-lg">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* OCASIÓN - ACORDEÓN */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button 
                  onClick={() => setShowOccasion(!showOccasion)}
                  className="flex items-center justify-between w-full text-left mb-3"
                >
                  <h3 className="text-base font-medium text-gray-900">Ocasión</h3>
                  <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 text-gray-900 hover:text-[#D4AF37] ${showOccasion ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${showOccasion ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-4 pb-1">
                    <div>
                      <ul className="space-y-1">
                        <li className="text-[#BDC3C7] flex items-start text-sm">
                          <span className="text-[#D4AF37] mr-2">•</span>
                          <span>Eventos formales y ocasiones especiales</span>
                        </li>
                        <li className="text-[#BDC3C7] flex items-start text-sm">
                          <span className="text-[#D4AF37] mr-2">•</span>
                          <span>Uso en entornos profesionales</span>
                        </li>
                        <li className="text-[#BDC3C7] flex items-start text-sm">
                          <span className="text-[#D4AF37] mr-2">•</span>
                          <span>Bodas</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Temporada:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center text-sm bg-[#F9F9F9] border border-gray-200 rounded-lg px-3 py-2 hover:border-[#D4AF37] transition-colors">
                          <span className="text-[#D4AF37] mr-2">❄️</span>
                          <span className="text-gray-700 font-medium">Invierno</span>
                        </div>
                        <div className="flex items-center text-sm bg-[#F9F9F9] border border-gray-200 rounded-lg px-3 py-2 hover:border-[#D4AF37] transition-colors">
                          <span className="text-[#D4AF37] mr-2">🍂</span>
                          <span className="text-gray-700 font-medium">Otoño</span>
                        </div>
                        <div className="flex items-center text-sm bg-[#F9F9F9] border border-gray-200 rounded-lg px-3 py-2 hover:border-[#D4AF37] transition-colors">
                          <span className="text-[#D4AF37] mr-2">🌸</span>
                          <span className="text-gray-700 font-medium">Primavera</span>
                        </div>
                        <div className="flex items-center text-sm bg-[#F9F9F9] border border-gray-200 rounded-lg px-3 py-2 hover:border-[#D4AF37] transition-colors">
                          <span className="text-[#D4AF37] mr-2">☀️</span>
                          <span className="text-gray-700 font-medium">Verano</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* INFORMACIÓN DE ENVÍOS - ACORDEÓN */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button 
                  onClick={() => setShowShipping(!showShipping)}
                  className="flex items-center justify-between w-full text-left mb-3"
                >
                  <h3 className="text-base font-medium text-gray-900">Información de envíos</h3>
                  <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 text-gray-900 hover:text-[#D4AF37] ${showShipping ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${showShipping ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-3 pb-1">
                    <div className="text-[#BDC3C7] text-sm">
                      <span className="text-[#D4AF37] mr-2">🚗</span>
                      <span><strong>Entrega personal</strong> normalmente al dia siguiente en Gutiérrez Zamora y zonas cercanas.</span>
                    </div>
                    
                    <div className="text-[#BDC3C7] text-sm">
                      <span className="text-[#D4AF37] mr-2">📦</span>
                      <span><strong>Envío Estándar</strong> a todo México de 3 a 5 días.</span>
                    </div>
                    
                    <div className="text-[#BDC3C7] text-sm">
                      <span className="text-[#D4AF37] mr-2">⚡</span>
                      <span><strong>Envío Express</strong> a todo México de 2 a 3 días.</span>
                    </div>
                    
                    <div className="text-sm pt-2">
                      <button className="text-[#D4AF37] hover:text-[#2C3E50] underline transition-colors">
                        Consulta nuestras políticas de envío aquí
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-logo font-bold text-gray-900">
            Valoraciones de clientes
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <TestimonialCard key={index} {...review} />
            ))}
          </div>
        </div>

        {/* Similar products section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-logo font-bold text-gray-900">
            También te puede gustar
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;