import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cartContext';
import type { Perfume } from '../data/perfumes';
import { SparklesIcon, FlameIcon, HeartIcon, StarIcon, ShoppingBagIcon } from 'lucide-react';

interface PerfumeCardProps {
  perfume: Perfume;
}

const PerfumeCard: React.FC<PerfumeCardProps> = ({ perfume }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const {
    name,
    brand,
    image,
    rating = 0,
    isNew = false,
    isSale = false,
    sizes = [],
    prices = [],
  } = perfume;
  const minPrice = prices && prices.length > 0 ? Math.min(...prices) : undefined;

  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

const handleAddToCart = () => {
    if (isAdding) return; // ✅ NUEVO: Prevenir múltiples clicks
    
    setIsAdding(true);
    console.log('CLICK Agregar al carrito - UNA SOLA VEZ', perfume.id);
    
    addToCart({
      id: perfume.id,
      name: perfume.name,
      brand: perfume.brand,
      image: perfume.image,
      size: sizes[0] || 0,
      price: prices[0] || 0,
      stock: 50 // Bajo pedido, solo 1 por default
    });
    setTimeout(() => {
      setIsAdding(false);
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 1200);
    }, 800);
  };
  return (
    <div
      className="group relative border-2 border-transparent hover:border-[#D4AF37] transition-all duration-300 rounded-lg p-3 sm:p-2 section-card shadow-sm hover:shadow-lg hover:shadow-[#D4AF37]/10"
    >
      {/* Imagen del producto */}
      <div 
        className="aspect-square w-full overflow-hidden rounded-lg bg-[#F9F9F9] cursor-pointer relative" 
        onClick={() => {
          navigate(`/perfume/${perfume.id}`);
        }}
      >
        <picture>
          <source srcSet={image.replace(/\.(jpg|jpeg|png)$/i, '.webp')} type="image/webp" />
          <img
            src={image}
            alt={`Foto de ${name} Aroma Selecto MX`}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {/* Badges */}
        <div className="absolute top-2 left-2 space-y-1">
          {isNew && (
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
              <SparklesIcon className="h-3 w-3" />
              Nuevo
            </span>
          )}
          {isSale && (
            <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse flex items-center gap-1">
              <FlameIcon className="h-3 w-3" />
              Oferta
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
      <div className="mt-3 sm:mt-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-base sm:text-sm text-[#BDC3C7]">{brand}</h3>
            <button onClick={() => navigate(`/perfume/${perfume.id}`)} className="text-left">
              <h2 className="text-lg sm:text-sm font-medium text-gray-900 mt-1 sm:mt-1 hover:text-[#D4AF37] transition-colors duration-300 line-clamp-2">
                {name}
              </h2>
            </button>
          </div>
        </div>
        {/* Rating y stock */}
        <div className="mt-2.5 sm:mt-3 flex items-center justify-between">
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
            <span className="text-base sm:text-xs text-[#BDC3C7] ml-2">({rating.toFixed(1)})</span>
          </div>
          {/* Stock status: siempre 'Bajo pedido' */}
          <div className="text-xs">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
              Bajo pedido
            </span>
          </div>
        </div>
        {/* Tamaños disponibles */}
        {sizes.length > 0 && (
          <div className="mt-2.5 sm:mt-3">
            <div className="flex items-center justify-between mb-1 sm:mb-2">
              <span className="text-base sm:text-xs text-gray-500 font-medium">Tamaños:</span>
            </div>
            <div className="flex space-x-2 sm:space-x-2">
              {sizes.map((size) => (
                <span 
                  key={`size-${size}`}
                  className="inline-flex items-center px-3 py-1 sm:px-2 sm:py-1 rounded text-sm sm:text-xs font-medium border bg-gray-50 border-gray-200 text-gray-600"
                >
                  {size}ml
                </span>
              ))}
            </div>
          </div>
        )}
        {/* Precio estimado */}
        <div className="mt-4 sm:mt-4 flex justify-between items-center">
          <div>
            <div className="flex items-baseline">
              <span className={`text-xl sm:text-lg font-bold ${isNew ? 'text-[#D4AF37]' : isSale ? 'text-red-600' : 'text-[#D4AF37]'}`}>$</span>
              <span className={`text-xl sm:text-lg font-bold mx-1 ${isNew ? 'text-[#D4AF37]' : isSale ? 'text-red-600' : 'text-[#D4AF37]'}`}> 
                {minPrice !== undefined ? minPrice : '--'}
              </span>
              <span className="text-base sm:text-sm font-medium text-[#BDC3C7]">MXN</span>
              <span className="text-xs text-[#BDC3C7] ml-1">(Estimado)</span>
            </div>
          </div>
          {/* Botón agregar al carrito con feedback visual */}
          <button
            onClick={handleAddToCart}
            disabled={isAdding} // ✅ NUEVO: Deshabilitar mientras procesa
            className={`p-2.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 group/btn disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${
              justAdded
                ? 'bg-green-600 text-white'
                : 'bg-[#2C3E50] hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B] text-[#D4AF37] hover:text-white'
            }`}
            aria-label={
              justAdded
                ? 'Producto agregado'
                : 'Agregar al carrito'
            }
          >
            {/* Iconos con feedback visual */}
            {isAdding ? (
              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : justAdded ? (
              <ShoppingBagIcon className="h-4 w-4" />
            ) : (
              <ShoppingBagIcon className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-200" />
            )}
          </button>
        </div>
        {/* ...el resto del card ya tiene el botón con feedback visual... */}
      </div>
    </div>
  );
};

export default React.memo(PerfumeCard);
