import { Decant, DecantVariant } from '../data/decants';
import { Perfume } from '../data/perfumes';
import { useCart } from '../context/cartContext';
import React, { memo } from 'react';
import ProductImageCarousel from './ProductImageCarousel';

interface SizeButtonProps {
  variant: DecantVariant;
  idx: number;
  selectedVariant: number;
  setSelectedVariant: (idx: number) => void;
}

const SizeButton: React.FC<SizeButtonProps> = memo(function SizeButton({ variant, idx, selectedVariant, setSelectedVariant }) {
  return (
    <button
      className={`relative w-full flex flex-col items-center justify-center rounded-lg border-2 py-2 px-2 text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 ${selectedVariant === idx ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] shadow-md' : 'border-gray-300 bg-white text-gray-900 hover:border-[#D4AF37]/50 hover:bg-[#F9F9F9]'} ${variant.stock === 0 ? 'opacity-50' : ''}`}
      onClick={() => setSelectedVariant(idx)}
      aria-pressed={selectedVariant === idx}
      aria-label={`Seleccionar tamaño ${variant.size}ml${variant.size === 10 ? ' (Popular)' : ''}`}
      tabIndex={0}
    >
      {/* Badge 'Popular' solo para 10ml, estilo solicitado */}
      {variant.size === 10 && (
        <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
          Popular
        </span>
      )}
      <span className="text-lg font-bold">{variant.size}ml</span>
    </button>
  );
});
import Button from './Button';
import ProductInfoAccordion from './ProductInfoAccordion';

interface DecantDetailProps {
  decant: Decant;
  perfume?: Perfume;
  selectedVariant: number;
  setSelectedVariant: (idx: number) => void;
  showDetails: boolean;
  setShowDetails: (show: boolean) => void;
  showOccasion: boolean;
  setShowOccasion: (show: boolean) => void;
}

const DecantDetail: React.FC<DecantDetailProps> = ({ decant, perfume, selectedVariant, setSelectedVariant }) => {
  const { addToCart } = useCart();
  // Estado para favoritos y toast
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);
  const [isAdding, setIsAdding] = React.useState(false); // ✅ NUEVO: Prevenir múltiples clicks

  // Cargar favoritos desde localStorage al montar
  React.useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favs.includes(decant.id));
  }, [decant.id]);

  // Función para alternar favorito y persistir
  const handleFavorite = () => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    let updated;
    if (isFavorite) {
      updated = favs.filter((id: string) => id !== decant.id);
    } else {
      updated = [...favs, decant.id];
    }
    localStorage.setItem('favorites', JSON.stringify(updated));
    setIsFavorite(!isFavorite);
  };

  const imagesArr = decant.images && decant.images.length > 0 ? decant.images : [decant.image];

  return (
    <div className="bg-white pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-6">
          <div className="lg:col-span-2 flex flex-col items-center">
            <ProductImageCarousel images={imagesArr} alt={perfume?.name || 'Decant'} />
          </div>
          <div className="mt-8 lg:mt-0 lg:col-span-3">
            <h1 className="text-3xl lg:text-4xl font-logo font-bold text-gray-900 leading-tight">{perfume ? perfume.name : 'Decant'}</h1>
            <h2 className="text-lg text-[#BDC3C7] mt-2">{perfume ? perfume.brand : ''}</h2>
            <div className="mt-5">
              <p className="text-gray-700 leading-relaxed">{perfume ? perfume.description : ''}</p>
            </div>
            {decant.variants && (
              <div className="mt-6">
                <h3 className="text-base font-medium text-gray-900 mb-3">Tamaños</h3>
                <div className="grid grid-cols-3 gap-3">
                  {decant.variants.map((variant: DecantVariant, idx: number) => (
                    <SizeButton
                      key={variant.size + '-' + idx}
                      variant={variant}
                      idx={idx}
                      selectedVariant={selectedVariant}
                      setSelectedVariant={setSelectedVariant}
                    />
                  ))}
                </div>
                {/* Precio único y banner debajo de los botones */}
                <div className="mt-6 flex flex-col items-center w-full">
                  <span className="font-bold italic text-2xl text-gray-900">
                    $ {decant.variants[selectedVariant]?.price !== undefined ? Number(decant.variants[selectedVariant]?.price).toFixed(2) : '--'} MXN
                  </span>
                  {/* Banner informativo para 10ml */}
                  {decant.variants[selectedVariant]?.size === 10 && (
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
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              {decant.variants[selectedVariant]?.stock > 0 ? (
                <Button
                  className="flex-1 px-6 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B]"
                  variant='primary'
                  disabled={isAdding} // ✅ NUEVO: Deshabilitar mientras procesa
                  onClick={() => {
                    if (isAdding) return; // ✅ NUEVO: Prevenir múltiples clicks
                    
                    setIsAdding(true); // ✅ NUEVO: Marcar como procesando
                    
                    const variant = decant.variants[selectedVariant];
                    console.log('CLICK Agregar al carrito - UNA SOLA VEZ', decant.id, variant.size);
                    
                    addToCart({
                      id: decant.id,
                      name: perfume ? perfume.name : 'Decant',
                      brand: perfume ? perfume.brand : '',
                      image: decant.image,
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
              )}
              <Button
                className={`flex-1 px-6 py-3 flex items-center justify-center gap-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 ${isFavorite ? 'text-red-600 border-red-400' : 'text-[#2C3E50] border-[#D4AF37]'} hover:bg-[#F9F9F9]`}
                variant='outline'
                aria-label={isFavorite ? `Quitar ${perfume ? perfume.name : 'Decant'} de favoritos` : `Agregar ${perfume ? perfume.name : 'Decant'} a favoritos`}
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
            {/* ACORDEONES UNIFICADOS */}
            <div className="mt-8">
              <ProductInfoAccordion perfume={perfume} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecantDetail;
