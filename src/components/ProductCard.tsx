import { useState } from 'react'; // ← AGREGAR useState
import { useNavigate } from 'react-router-dom';
import { StarIcon, HeartIcon, ShoppingBagIcon, SparklesIcon, BellIcon, FlameIcon, CheckIcon } from 'lucide-react'; // ← AGREGAR CheckIcon
import { useCart } from '../context/CartContext'; // ← AGREGAR useCart

// ✅ INTERFACE COMPLETA Y CORREGIDA
interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  salePrice?: number;
  image: string;
  rating: number;
  category: string;
  stock?: number;
  isNew?: boolean;
  isSale?: boolean;
  isComingSoon?: boolean;
  sizes?: string[];
  sizesPrices?: { [size: string]: number };
  reviewCount?: number;
  description?: string;
  details?: string[];
  images?: string[];
  onAddToCart?: (product: { 
    id: string;
    name: string;
    brand: string;
    image: string;
    size: string;
    price: number;
    stock: number;
  }) => void; // Ajusta el tipo según tu modelo Product

}

const ProductCard = ({ 
  id, 
  name, 
  brand, 
  price, 
  salePrice,
  image, 
  rating, 
  stock = 0,
  isNew = false,
  isSale = false,
  isComingSoon = false,
  sizes = [],
  sizesPrices = {}, // ← AGREGAR default
}: ProductCardProps) => {
  
  const navigate = useNavigate();
  
  // ← AGREGAR FUNCIONALIDAD DEL CARRITO
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleProductClick = () => {
  navigate(`/fragancia/${id}`);
  // window.scrollTo({ top: 0, behavior: 'smooth' }); // ← Ya no es necesario
};

  // ← AGREGAR FUNCIÓN PARA CARRITO
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (isComingSoon || stock === 0) return;
    
    setIsAdding(true);
    
    // Usar primer tamaño disponible como predeterminado
    const defaultSize = sizes[0] || '3ml';
    const defaultPrice = sizesPrices[defaultSize] || price;
    
    const product = {
      id,
      name,
      brand,
      image,
      size: defaultSize,
      price: defaultPrice,
      stock
    };
    
    addToCart(product);
    
    // Feedback visual
    setTimeout(() => {
      setIsAdding(false);
      setJustAdded(true);
      
      // Reset después de 2 segundos
      setTimeout(() => setJustAdded(false), 2000);
    }, 500);
  };

  return (
    <div className="group relative border-2 border-transparent hover:border-[#D4AF37] transition-all duration-300 rounded-lg p-2 section-card shadow-sm hover:shadow-lg hover:shadow-[#D4AF37]/10">
      
      {/* Imagen del producto */}
      <div 
        className="aspect-square w-full overflow-hidden rounded-lg bg-[#F9F9F9] cursor-pointer relative" 
        onClick={handleProductClick}
      >
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-all duration-500" 
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* ✅ OVERLAY PARA PRÓXIMAMENTE */}
        {isComingSoon && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center rounded-lg">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl animate-pulse flex items-center gap-2">
                <SparklesIcon className="h-4 w-4" />
                PRÓXIMAMENTE
              </div>
              <p className="text-white text-xs mt-2 font-medium">¡Muy pronto disponible!</p>
            </div>
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-2 left-2 space-y-1">
          {isNew && !isComingSoon && (
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
              <SparklesIcon className="h-3 w-3" />
              Nuevo
            </span>
          )}
          {isSale && !isComingSoon && (
            <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse flex items-center gap-1">
              <FlameIcon className="h-3 w-3" />
              Oferta
            </span>
          )}
          {isComingSoon && (
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-bounce flex items-center gap-1">
              <SparklesIcon className="h-3 w-3" />
              Próximamente
            </span>
          )}
        </div>

        {/* Heart icon */}
        <button 
          className="absolute top-2 right-2 p-2 rounded-full bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B] hover:scale-110 shadow-lg"
          aria-label="Agregar a favoritos"
        >
          <HeartIcon className="h-4 w-4 text-[#BDC3C7] hover:text-white transition-colors" />
        </button>
      </div>

      {/* Información del producto */}
      <div className="mt-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-sm text-[#BDC3C7]">{brand}</h3>
            <button onClick={handleProductClick} className="text-left">
              <h2 className="text-sm font-medium text-gray-900 mt-1 hover:text-[#D4AF37] transition-colors duration-300 line-clamp-2">
                {name}
              </h2>
            </button>
          </div>
        </div>

        {/* ✅ RATING CORREGIDO */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center">
              {Array.from({ length: 5 }, (_, index) => (
                <StarIcon
                  key={`star-${index}`}
                  className={`h-4 w-4 transition-all duration-200 ${
                    rating > index 
                      ? 'text-[#D4AF37] fill-[#D4AF37] drop-shadow-sm' 
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-[#BDC3C7] ml-2">({rating.toFixed(1)})</span>
          </div>
          
          {/* ✅ STOCK STATUS */}
          {!isComingSoon && (
            <div className="text-xs">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                stock === 0 
                  ? 'bg-red-100 text-red-700'
                  : stock >= 15
                    ? 'bg-green-100 text-green-700'
                    : 'bg-orange-100 text-orange-700'
              }`}>
                {stock === 0 
                  ? 'Agotado'
                  : stock >= 15
                    ? 'Disponible'
                    : 'Agotándose'
                }
              </span>
            </div>
          )}
        </div>

        {/* ✅ TAMAÑOS SIMPLES */}
        {!isComingSoon && sizes.length > 0 && (
          <div className="mt-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500 font-medium">Tamaños:</span>
            </div>
            <div className="flex space-x-2">
              {sizes.map((size) => (
                <span 
                  key={`size-${size}`}
                  className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-50 border border-gray-200 text-gray-600"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Precio y botón */}
        <div className="mt-4 flex justify-between items-center">
          <div>
            {isComingSoon ? (
              <div className="flex items-baseline">
                <span className="text-lg font-bold text-purple-600">$</span>
                <span className="text-lg font-bold text-purple-600 mx-1">{price.toFixed(0)}</span>
                <span className="text-sm font-medium text-purple-400">MXN</span>
                <span className="text-xs text-purple-400 ml-1">(Estimado)</span>
              </div>
            ) : isSale && salePrice ? (
              <div className="flex flex-col space-y-1">
                <div className="flex items-baseline">
                  <span className="text-lg font-bold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">$</span>
                  <span className="text-lg font-bold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent mx-1">
                    {salePrice.toFixed(0)}
                  </span>
                  <span className="text-sm font-medium text-[#BDC3C7]">MXN</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-sm text-[#BDC3C7] line-through">$</span>
                  <span className="text-sm text-[#BDC3C7] line-through mx-1">{price.toFixed(0)}</span>
                  <span className="text-xs text-[#BDC3C7] line-through">MXN</span>
                </div>
              </div>
            ) : (
              <div className="flex items-baseline">
                <span className="text-lg font-bold text-gray-900">$</span>
                <span className="text-lg font-bold text-gray-900 mx-1">
                  {/* ← MOSTRAR PRECIO DEL PRIMER TAMAÑO */}
                  {sizes.length > 0 && sizesPrices[sizes[0]] ? sizesPrices[sizes[0]].toFixed(0) : price.toFixed(0)}
                </span>
                <span className="text-sm font-medium text-[#BDC3C7]">MXN</span>
              </div>
            )}
          </div>
          
          {/* ← BOTÓN CON FUNCIONALIDAD PERO MISMO ESTILO */}
          <button 
            onClick={isComingSoon ? (e) => {
              e.stopPropagation();
              console.log('Notificar cuando esté disponible:', name);
            } : handleAddToCart}
            disabled={stock === 0 && !isComingSoon}
            className={`p-2.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 group/btn disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${
              justAdded
                ? 'bg-green-600 text-white'
                : isComingSoon 
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700' 
                  : stock === 0
                    ? 'bg-gray-300 text-gray-500'
                    : 'bg-[#2C3E50] hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B] text-[#D4AF37] hover:text-white'
            }`}
            aria-label={
              justAdded
                ? 'Producto agregado'
                : isComingSoon 
                  ? 'Notificarme cuando esté disponible' 
                  : stock === 0 
                    ? 'Producto agotado'
                    : 'Agregar al carrito'
            }
          >
            {/* ← ICONOS CON FEEDBACK VISUAL */}
            {isAdding ? (
              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : justAdded ? (
              <CheckIcon className="h-4 w-4" />
            ) : isComingSoon ? (
              <BellIcon className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-200" />
            ) : (
              <ShoppingBagIcon className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-200" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;