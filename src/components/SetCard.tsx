import React, { useState } from 'react';
import { perfumes } from '../data/perfumes';
import { decants } from '../data/decants';
import type { Perfume } from '../data/perfumes';
import type { Decant } from '../data/decants';
import { useNavigate } from 'react-router-dom';
import { ShoppingBagIcon, CheckIcon, BellIcon, StarIcon, HeartIcon, SparklesIcon, FlameIcon, PackageIcon } from 'lucide-react';
import { useCart } from '../context/cartContext'; // ✅ CORREGIDO: Import correcto
import type { SetPromo } from '../data/sets';

interface SetCardProps {
  set: SetPromo;
  image?: string;
  slug?: string;
  rating?: number;
}

const SetCard: React.FC<SetCardProps> = ({ set, image, slug = '', rating }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // ✅ CORRECTO: Ya tienes esto
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  if (!set || !set.variants) return null;
  const availableVariants = set.variants.filter(v => v.stock > 0);
  const variants = set.variants;
  const minPrice = availableVariants.length > 0 ? availableVariants[0].price : variants[0]?.price ?? 0;
  const totalStock = variants.reduce((sum, v) => sum + v.stock, 0);
  const isNew = !!set.isNew;
  const isSale = !!set.isSale;
  const isComingSoon = !!set.isComingSoon;
  const salePrice = set.salePrice;
  const price = minPrice;
  const name = set.name;
  const brand = '';
  const handleProductClick = () => navigate(`/set/${set.id || slug}`);
  const displayRating = typeof rating === 'number' ? rating : (typeof set.rating === 'number' ? set.rating : 0);

  return (
    <div className="group relative border-2 border-transparent hover:border-[#D4AF37] transition-all duration-300 rounded-lg p-3 sm:p-2 section-card shadow-sm hover:shadow-lg hover:shadow-[#D4AF37]/10">
      {/* Imagen del producto */}
      <div 
        className="aspect-square w-full overflow-hidden rounded-lg bg-[#F9F9F9] cursor-pointer relative" 
        onClick={handleProductClick}
      >
        <picture>
          <source srcSet={(image || set.image)?.replace(/\.(jpg|jpeg|png)$/i, '.webp') ?? ''} type="image/webp" />
          <img
            src={image || set.image}
            alt={`Foto de ${name} Aroma Selecto MX`}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
          />
        </picture>
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
          <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-green-200 mt-1 inline-flex items-center">
            <PackageIcon className="h-3 w-3 mr-1" />
            Set
          </span>
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
            <button onClick={handleProductClick} className="text-left">
              <h2 className="text-lg sm:text-sm font-medium text-gray-900 mt-1 sm:mt-1 hover:text-[#D4AF37] transition-colors duration-300 line-clamp-2">
                {name}
              </h2>
            </button>
            {/* Lista elegante de nombres de productos incluidos */}
            {set.items && set.items.length > 0 && (
              <ul className="mt-2 mb-2 pl-0 flex flex-col gap-1">
                {set.items.map((item, idx) => {
                  let productName = '';
                  if (item.type === 'perfume') {
                    const perfume = perfumes.find((p: Perfume) => p.id === item.decantId || ('slug' in p && p.slug === item.decantId));
                    productName = perfume ? perfume.name : item.decantId;
                  } else if (item.type === 'decant') {
                    const decant = decants.find((d: Decant) => d.id === item.decantId || ('slug' in d && d.slug === item.decantId));
                    if (decant) {
                      const perfume = perfumes.find((p: Perfume) => p.id === decant.perfumeId);
                      productName = perfume ? perfume.name : decant.perfumeId;
                    } else {
                      productName = item.decantId;
                    }
                  }
                  return (
                    <li key={idx} className="flex items-center text-xs text-gray-700">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      <span className="font-medium">
                        {item.type === 'decant' ? 'Decant: ' : 'Perfume: '}
                        {productName}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        {/* ✅ RATING CORREGIDO */}
        <div className="mt-2.5 sm:mt-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center">
              {Array.from({ length: 5 }, (_, index) => (
                <StarIcon
                  key={`star-${index}`}
                  className={`h-4 w-4 transition-all duration-200 ${
                    displayRating > index 
                      ? 'text-[#D4AF37] fill-[#D4AF37] drop-shadow-sm' 
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-base sm:text-xs text-[#BDC3C7] ml-2">({displayRating.toFixed(1)})</span>
          </div>
          {/* ✅ STOCK STATUS */}
          {!isComingSoon && (
            <div className="text-xs">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                totalStock === 0 
                  ? 'bg-red-100 text-red-700'
                  : totalStock >= 15
                    ? 'bg-green-100 text-green-700'
                    : 'bg-orange-100 text-orange-700'
              }`}>
                {totalStock === 0 
                  ? 'Agotado'
                  : totalStock >= 15
                    ? 'Disponible'
                    : 'Agotándose'
                }
              </span>
            </div>
          )}
        </div>
{/* Tamaños disponibles */}
{/* {variants.length > 0 && (
  <div className="mt-2.5 sm:mt-3">
    <div className="flex items-center justify-between mb-1 sm:mb-2">
      <span className="text-base sm:text-xs text-gray-500 font-medium">Tamaños:</span>
    </div>
    <div className="flex space-x-2 sm:space-x-2">
      {variants.map((variant) => (
        <span 
          key={`size-${variant.size}`}
          className={`inline-flex items-center px-3 py-1 sm:px-2 sm:py-1 rounded text-sm sm:text-xs font-medium border ${
            isComingSoon
              ? 'bg-red-50 border-red-200 text-red-400 line-through opacity-60'
              : variant.stock > 0
                ? 'bg-gray-50 border-gray-200 text-gray-600'
                : 'bg-red-50 border-red-200 text-red-400 line-through opacity-60'
          }`}
        >
          {variant.size}ml
        </span>
      ))}
    </div>
  </div>
)} */}
        {/* ...se eliminó la sección de tamaños, solo se muestran en el detalle... */}
        {/* Precio y botón */}
        <div className="mt-4 sm:mt-4 flex justify-between items-center">
          <div>
            {isComingSoon ? (
              <div className="flex items-baseline">
                <span className="text-xl sm:text-lg font-bold text-purple-600">$</span>
                <span className="text-xl sm:text-lg font-bold text-purple-600 mx-1">{price.toFixed(0)}</span>
                <span className="text-base sm:text-sm font-medium text-purple-400">MXN</span>
                <span className="text-xs text-purple-400 ml-1">(Estimado)</span>
              </div>
            ) : isSale && salePrice ? (
              <div className="flex flex-col space-y-1">
                <div className="flex items-baseline">
                  <span className="text-xl sm:text-lg font-bold text-red-600">$</span>
                  <span className="text-xl sm:text-lg font-bold text-red-600 mx-1">
                    {salePrice.toFixed(0)}
                  </span>
                  <span className="text-base sm:text-sm font-medium text-[#BDC3C7]">MXN</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-base sm:text-sm text-[#BDC3C7] line-through">$</span>
                  <span className="text-base sm:text-sm text-[#BDC3C7] line-through mx-1">{price.toFixed(0)}</span>
                  <span className="text-xs text-[#BDC3C7] line-through">MXN</span>
                </div>
              </div>
            ) : isNew ? (
              <div className="flex items-baseline">
                <span className="text-xl sm:text-lg font-bold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">$</span>
                <span className="text-xl sm:text-lg font-bold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent mx-1">
                  {price.toFixed(0)}
                </span>
                <span className="text-base sm:text-sm font-medium text-[#BDC3C7]">MXN</span>
              </div>
            ) : (
              <div className="flex items-baseline">
                <span className="text-xl sm:text-lg font-bold text-gray-900">$</span>
                <span className="text-xl sm:text-lg font-bold text-gray-900 mx-1">
                  {/* Mostrar precio del primer tamaño disponible */}
                  {(() => {
                    const price1 = availableVariants && availableVariants[0] && typeof availableVariants[0].price === 'number' && !isNaN(availableVariants[0].price)
                      ? availableVariants[0].price
                      : undefined;
                    const price2 = !price1 && variants && variants[0] && typeof variants[0].price === 'number' && !isNaN(variants[0].price)
                      ? variants[0].price
                      : undefined;
                    const price3 = !price1 && !price2 && typeof price === 'number' && !isNaN(price)
                      ? price
                      : undefined;
                    if (typeof price1 === 'number') return price1.toFixed(0);
                    if (typeof price2 === 'number') return price2.toFixed(0);
                    if (typeof price3 === 'number') return price3.toFixed(0);
                    return '--';
                  })()}
                </span>
                <span className="text-base sm:text-sm font-medium text-[#BDC3C7]">MXN</span>
              </div>
            )}
          </div>
          {/* ← BOTÓN CON FUNCIONALIDAD PERO MISMO ESTILO */}
          <button 
            onClick={isComingSoon ? (e) => {
              e.stopPropagation();
              console.log('Notificar cuando esté disponible:', name);
            } : () => {
              // ✅ NUEVO: Prevenir múltiples clicks
              if (isAdding || availableVariants.length === 0) return;
              
              setIsAdding(true);

    const firstAvailable = availableVariants[0];
    const priceToAdd =
      firstAvailable.salePrice && firstAvailable.salePrice < firstAvailable.price
        ? firstAvailable.salePrice
        : firstAvailable.price;

    addToCart({
      id: set.id,
      name,
      brand,
      image: image || set.image || '',
      size: firstAvailable.size,
      price: priceToAdd, // ← Ahora sí agrega el precio correcto
      stock: firstAvailable.stock,
    });
              setTimeout(() => {
                setIsAdding(false);
                setJustAdded(true);
                setTimeout(() => setJustAdded(false), 1200);
              }, 800);
            }}
            disabled={isAdding || (availableVariants.length === 0 && !isComingSoon)} // ✅ NUEVO: Deshabilitar mientras procesa
            className={`p-2.5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 group/btn disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${
              justAdded
                ? 'bg-green-600 text-white'
                : isComingSoon 
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700' 
                  : availableVariants.length === 0
                    ? 'bg-gray-300 text-gray-500'
                    : 'bg-[#2C3E50] hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B] text-[#D4AF37] hover:text-white'
            }`}
            aria-label={
              justAdded
                ? 'Producto agregado'
                : isComingSoon 
                  ? 'Notificarme cuando esté disponible' 
                  : availableVariants.length === 0 
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

export default SetCard;
