import { SetPromo } from '../data/sets';
import { perfumes } from '../data/perfumes';
import { decants } from '../data/decants';
import ProductImageCarousel from './ProductImageCarousel';
import Accordion from './Accordion';
import React, { useState, useEffect } from 'react';
import { useCart } from '../context/cartContext';
import Button from './Button';

interface SetDetailProps {
  setPromo: SetPromo;
}

const SetDetail: React.FC<SetDetailProps> = ({ setPromo }) => {
  const { addToCart } = useCart(); // ✅ SOLO UNA VEZ
  const [selectedVariant, setSelectedVariant] = useState(0); // ✅ SOLO UNA VEZ
  const [showToast, setShowToast] = useState(false); // ✅ SOLO UNA VEZ
  const [isFavorite, setIsFavorite] = useState(false); // ✅ SOLO UNA VEZ
  const [isAdding, setIsAdding] = useState(false); // ✅ NUEVO: Prevenir múltiples clicks

  // Cargar favoritos desde localStorage al montar
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites_sets') || '[]');
    setIsFavorite(favs.includes(setPromo.id));
  }, [setPromo.id]);

  // Función para alternar favorito y persistir
  const handleFavorite = () => {
    const favs = JSON.parse(localStorage.getItem('favorites_sets') || '[]');
    let updated;
    if (isFavorite) {
      updated = favs.filter((id: string) => id !== setPromo.id);
    } else {
      updated = [...favs, setPromo.id];
    }
    localStorage.setItem('favorites_sets', JSON.stringify(updated));
    setIsFavorite(!isFavorite);
  };

  if (!setPromo || !setPromo.items) {
    return (
      <div className="bg-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-xl text-red-600 font-bold">No se encontró información del set.</div>
        </div>
      </div>
    );
  }

  // Solo obtenemos los nombres y descripciones de los productos incluidos
  const setItemsDetails = setPromo.items.map(item => {
    let name = '';
    let description = '';
    if (item.type === 'perfume') {
      const perfume = perfumes.find(p => p.id === item.decantId || ('slug' in p && p.slug === item.decantId));
      if (perfume) {
        name = perfume.name;
        description = perfume.description || '';
      } else {
        name = item.decantId;
      }
    } else if (item.type === 'decant') {
      const decant = decants.find(d => d.id === item.decantId || ('slug' in d && d.slug === item.decantId));
      if (decant) {
        const perfume = perfumes.find(p => p.id === decant.perfumeId);
        if (perfume) {
          name = perfume.name;
          description = perfume.description || '';
        } else {
          name = decant.perfumeId;
        }
      } else {
        name = item.decantId;
      }
    }
    return { name, description };
  });

  // Helper para obtener precio actual
  const getCurrentPrice = () => {
    if (setPromo.setType === 'decants' && setPromo.variants && setPromo.variants[selectedVariant]) {
      return setPromo.variants[selectedVariant].price;
    }
    return setPromo.salePrice ?? setPromo.variants?.[0]?.price ?? 'N/A';
  };

  return (
    <div className="bg-white pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-6">
          <div className="lg:col-span-2 flex flex-col items-center">
            <ProductImageCarousel images={setPromo.images ?? [setPromo.image]} alt={setPromo.name} />
          </div>
          <div className="mt-8 lg:mt-0 lg:col-span-3">
            <h1 className="text-3xl lg:text-4xl font-logo font-bold text-gray-900 leading-tight">{setPromo.name}</h1>
            <h2 className="text-lg text-[#BDC3C7] mt-2">Aroma Selecto MX</h2>
            <div className="mt-5">
              <p className="text-gray-700 leading-relaxed">{setPromo.description}</p>
            </div>
            {/* Tamaños y precio visual estilo DecantDetail */}
            <div className="mt-6">
              {setPromo.setType === 'decants' && setPromo.variants && setPromo.variants.length > 0 ? (
                <>
                  <h3 className="text-base font-medium text-gray-900 mb-3">Tamaños</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {setPromo.variants.map((variant, idx) => (
                      <button
                        key={variant.size + '-' + idx}
                        className={`relative w-full flex flex-col items-center justify-center rounded-lg border-2 py-2 px-2 text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 ${selectedVariant === idx ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] shadow-md' : 'border-gray-300 bg-white text-gray-900 hover:border-[#D4AF37]/50 hover:bg-[#F9F9F9]'} ${variant.stock === 0 ? 'opacity-50' : ''}`}
                        onClick={() => setSelectedVariant(idx)}
                        aria-pressed={selectedVariant === idx}
                        aria-label={`Seleccionar tamaño ${variant.size}ml`}
                        tabIndex={0}
                      >
                        {/* Badge 'Popular' solo para 10ml */}
                        {variant.size === 10 && (
                          <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                            Popular
                          </span>
                        )}
                        <span className="text-lg font-bold">{variant.size}ml</span>
                      </button>
                    ))}
                  </div>
                  {/* Precio único y banner debajo de los botones */}
                  <div className="mt-6 flex flex-col items-center w-full">
                    <span className="font-bold italic text-2xl text-gray-900">
                      $ {getCurrentPrice() !== undefined ? Number(getCurrentPrice()).toFixed(2) : '--'} MXN
                    </span>
                    {/* Banner informativo para 10ml */}
                    {setPromo.variants[selectedVariant]?.size === 10 && (
                      <div className="mt-4 p-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 w-full flex items-center justify-center">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75l-6.172 3.245 1.179-6.88L2.5 9.755l6.9-1.002L12 2.25l2.6 6.503 6.9 1.002-5.507 4.36 1.179 6.88z" />
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-blue-800">
                            <strong>Mejor relación cantidad-precio</strong> - Más producto por tu dinero
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-base font-medium text-gray-900 mb-3">Precio</h3>
                  <div className="grid grid-cols-1 gap-3">
                    <span className="font-bold italic text-2xl text-gray-900">
                      $ {getCurrentPrice() !== undefined ? Number(getCurrentPrice()).toFixed(2) : '--'} MXN
                    </span>
                  </div>
                </>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              {/* Botón agregar para decants */}
              {setPromo.setType === 'decants' && setPromo.variants ? (
                setPromo.variants[selectedVariant]?.stock > 0 ? (
                  <Button
                    className="flex-1 px-6 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B]"
                    disabled={isAdding} // ✅ NUEVO: Deshabilitar mientras procesa
                    onClick={() => {
                      if (isAdding) return; // ✅ NUEVO: Prevenir múltiples clicks
                      
                      setIsAdding(true); // ✅ NUEVO: Marcar como procesando
                      
                      const variant = setPromo.variants[selectedVariant];
                      console.log('CLICK Agregar al carrito - UNA SOLA VEZ', setPromo.id, variant.size);
                      
                      addToCart({
                        id: setPromo.id,
                        name: setPromo.name,
                        brand: 'Set',
                        image: setPromo.image,
                        size: variant.size,
                        price: variant.price,
                        stock: variant.stock,
                      });
                      
                      setShowToast(true);
                      setTimeout(() => {
                        setShowToast(false);
                        setIsAdding(false); // ✅ NUEVO: Rehabilitar después de 2s
                      }, 2000);
                    }}
                  >
                    {isAdding ? 'Agregando...' : 'Agregar al carrito'} {/* ✅ NUEVO: Feedback visual */}
                  </Button>
                ) : (
                  <Button
                    className="flex-1 px-6 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 rounded-lg font-bold text-white bg-[#BDC3C7] cursor-not-allowed"
                    disabled
                  >
                    Sin Stock
                  </Button>
                )
              ) : null}
              
              {/* Botón agregar para híbridos y perfumes */}
              {(setPromo.setType === 'hybrid' || setPromo.setType === 'perfumes') && (
                setPromo.isAvailableToOrder !== false ? (
                  <Button
                    className="flex-1 px-6 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B]"
                    disabled={isAdding} // ✅ NUEVO: Deshabilitar mientras procesa
                    onClick={() => {
                      if (isAdding) return; // ✅ NUEVO: Prevenir múltiples clicks
                      
                      setIsAdding(true); // ✅ NUEVO: Marcar como procesando
                      
                      console.log('CLICK Agregar al carrito - UNA SOLA VEZ', setPromo.id);
                      
                      addToCart({
                        id: setPromo.id,
                        name: setPromo.name,
                        brand: 'Set',
                        image: setPromo.image,
                        size: 0,
                        price: setPromo.salePrice ?? setPromo.variants?.[0]?.price ?? 0,
                        stock: 99,
                      });
                      
                      setShowToast(true);
                      setTimeout(() => {
                        setShowToast(false);
                        setIsAdding(false); // ✅ NUEVO: Rehabilitar después de 2s
                      }, 2000);
                    }}
                  >
                    {isAdding ? 'Agregando...' : 'Agregar al carrito'} {/* ✅ NUEVO: Feedback visual */}
                  </Button>
                ) : (
                  <Button
                    className="flex-1 px-6 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 rounded-lg font-bold text-white bg-[#BDC3C7] cursor-not-allowed"
                    disabled
                  >
                    Sin Stock
                  </Button>
                )
              )}
              
              <Button
                className={`flex-1 px-6 py-3 flex items-center justify-center gap-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 ${isFavorite ? 'text-red-600 border-red-400' : 'text-[#2C3E50] border-[#D4AF37]'} hover:bg-[#F9F9F9]`}
                variant='outline'
                aria-label={isFavorite ? `Quitar ${setPromo.name} de favoritos` : `Agregar ${setPromo.name} a favoritos`}
                onClick={handleFavorite}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill={isFavorite ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                {isFavorite ? 'Favorito' : 'Favoritos'}
              </Button>
            </div>
            
            {/* Toast feedback al agregar al carrito */}
            {showToast && (
              <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-[#2C3E50] text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2 animate-fade-in">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.3h12.2a1 1 0 00.9-1.3L17 13M7 13V6h10v7" />
                </svg>
                <span>Producto añadido al carrito</span>
              </div>
            )}
            
            <div className="mt-10 space-y-4">
              {/* Acordeón único de contenido */}
              <Accordion title="Contenido">
                <ul className="space-y-2 text-sm text-[#BDC3C7]">
                  {setPromo.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      <span>
                        {item.type === 'decant' ? 'Decant: ' : 'Perfume: '}
                        {setItemsDetails[idx].name}
                      </span>
                    </li>
                  ))}
                </ul>
              </Accordion>
              {/* Acordeón de temporadas */}
              {setPromo.seasons && setPromo.seasons.length > 0 && (
                <Accordion title="Temporadas">
                  <div className="flex flex-wrap gap-3">
                    {setPromo.seasons.map((season, i) => {
                      // Función para obtener el estilo de cada temporada
                      const getSeasonStyle = (seasonName: string) => {
                        const lowerSeason = seasonName.toLowerCase();
                        
                        if (lowerSeason.includes('primavera') || lowerSeason.includes('spring')) {
                          return {
                            bg: 'bg-gradient-to-r from-green-100 to-emerald-100',
                            text: 'text-green-700',
                            border: 'border-green-200',
                            shadow: 'shadow-green-200/50',
                            emoji: '🌸',
                            animation: 'animate-pulse'
                          };
                        }
                        if (lowerSeason.includes('verano') || lowerSeason.includes('summer')) {
                          return {
                            bg: 'bg-gradient-to-r from-yellow-100 to-orange-100',
                            text: 'text-orange-700',
                            border: 'border-orange-200',
                            shadow: 'shadow-orange-200/50',
                            emoji: '☀️',
                            animation: 'animate-bounce'
                          };
                        }
                        if (lowerSeason.includes('otoño') || lowerSeason.includes('fall') || lowerSeason.includes('autumn')) {
                          return {
                            bg: 'bg-gradient-to-r from-amber-100 to-red-100',
                            text: 'text-amber-700',
                            border: 'border-amber-200',
                            shadow: 'shadow-amber-200/50',
                            emoji: '🍂',
                            animation: 'animate-pulse'
                          };
                        }
                        if (lowerSeason.includes('invierno') || lowerSeason.includes('winter')) {
                          return {
                            bg: 'bg-gradient-to-r from-blue-100 to-indigo-100',
                            text: 'text-blue-700',
                            border: 'border-blue-200',
                            shadow: 'shadow-blue-200/50',
                            emoji: '❄️',
                            animation: 'animate-pulse'
                          };
                        }
                        // Default para "todo el año" o temporadas no específicas
                        return {
                          bg: 'bg-gradient-to-r from-purple-100 to-pink-100',
                          text: 'text-purple-700',
                          border: 'border-purple-200',
                          shadow: 'shadow-purple-200/50',
                          emoji: '✨',
                          animation: 'animate-ping'
                        };
                      };

                      const style = getSeasonStyle(season);
                      
                      return (
                        <div
                          key={season + i}
                          className={`
                            relative px-3 py-2 rounded-full border-2 font-medium text-sm
                            ${style.bg} ${style.text} ${style.border}
                            shadow-lg ${style.shadow}
                            hover:scale-105 transform transition-all duration-300
                            cursor-default select-none
                            group overflow-hidden
                          `}
                        >
                          {/* Animación de fondo sutil */}
                          <div className={`absolute inset-0 ${style.bg} opacity-30 ${style.animation}`}></div>
                          
                          {/* Contenido */}
                          <div className="relative flex items-center gap-1.5">
                            <span className="text-base">{style.emoji}</span>
                            <span className="font-semibold">{season}</span>
                          </div>
                          
                          {/* Efecto de brillo al hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        </div>
                      );
                    })}
                  </div>
                </Accordion>
              )}
              {/* Acordeón de información de envíos */}
              <Accordion title="Información de envíos">
                <ul className="space-y-2 text-sm text-[#BDC3C7]">
                  <li><span className="text-[#D4AF37] mr-2">•</span>Entrega personal normalmente al día siguiente en Gutiérrez Zamora y zonas cercanas.</li>
                  <li><span className="text-[#D4AF37] mr-2">•</span>Envío Estándar a todo México de 3 a 5 días.</li>
                  <li><span className="text-[#D4AF37] mr-2">•</span>Envío Express a todo México de 2 a 3 días.</li>
                  <li className="pt-2"><a href="/envios-devoluciones" className="text-[#D4AF37] underline hover:text-[#2C3E50]">Consulta nuestras políticas de envío aquí</a></li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetDetail;