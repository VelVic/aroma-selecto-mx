import React from 'react';
import Button from './Button';
import { useCart } from '../context/cartContext';
import type { Perfume } from '../data/perfumes';
import ProductInfoAccordion from './ProductInfoAccordion';
import ProductImageCarousel from './ProductImageCarousel';

interface PerfumeDetailProps {
  perfume: Perfume;
  selectedVariant: number;
  setSelectedVariant: (idx: number) => void;
}

const PerfumeDetail: React.FC<PerfumeDetailProps> = ({ perfume, selectedVariant, setSelectedVariant }) => {
  const { addToCart } = useCart();
  // Estado para favoritos y toast
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);
  const [isAdding, setIsAdding] = React.useState(false); // ✅ Mantener solo este estado

  // Cargar favoritos desde localStorage al montar
  React.useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favs.includes(perfume.id));
  }, [perfume.id]);

  // Función para alternar favorito y persistir
  const handleFavorite = () => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    let updated;
    if (isFavorite) {
      updated = favs.filter((id: string) => id !== perfume.id);
    } else {
      updated = [...favs, perfume.id];
    }
    localStorage.setItem('favorites', JSON.stringify(updated));
    setIsFavorite(!isFavorite);
  };

  const imagesArr = perfume.images && perfume.images.length > 0 ? perfume.images : [perfume.image];

  return (
    <div className="bg-white pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-6">
          <div className="lg:col-span-2 flex flex-col items-center">
            <ProductImageCarousel images={imagesArr} alt={perfume.name} />
          </div>
          <div className="mt-8 lg:mt-0 lg:col-span-3">
            <h1 className="text-3xl lg:text-4xl font-logo font-bold text-gray-900 leading-tight">{perfume.name}</h1>
            <h2 className="text-lg text-[#BDC3C7] mt-2">{perfume.brand}</h2>
            <div className="mt-5">
              <p className="text-gray-700 leading-relaxed">{perfume.description}</p>
            </div>
            {perfume.sizes && perfume.prices && (
              <div className="mt-6">
                <h3 className="text-base font-medium text-gray-900 mb-3">Tamaños</h3>
                <div className="grid grid-cols-3 gap-3">
                  {perfume.sizes.map((size: number, idx: number) => (
                    <button
                      key={size + '-' + idx}
                      className={`relative w-full flex flex-col items-center justify-center rounded-lg border-2 py-2 px-2 text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 ${selectedVariant === idx ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] shadow-md' : 'border-gray-300 bg-white text-gray-900 hover:border-[#D4AF37]/50 hover:bg-[#F9F9F9]'} ${perfume.prices && perfume.prices[idx] === 0 ? 'opacity-50' : ''}`}
                      onClick={() => setSelectedVariant(idx)}
                      aria-pressed={selectedVariant === idx}
                      aria-label={`Seleccionar tamaño ${size}ml`}
                      tabIndex={0}
                    >
                      <span className="text-lg font-bold">{size}ml</span>
                    </button>
                  ))}
                </div>
                {/* Precio único debajo de los botones */}
                <div className="mt-6 flex flex-col items-center w-full">
                  <span className="font-bold italic text-2xl text-gray-900">
                    $ {perfume.prices[selectedVariant] !== undefined ? Number(perfume.prices[selectedVariant]).toFixed(2) : '--'} MXN
                  </span>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              {perfume.prices && perfume.prices[selectedVariant] > 0 ? (
                <Button
                  className="flex-1 px-6 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B]"
                  variant='primary'
                  disabled={isAdding}
                  onClick={() => {
                    if (isAdding) return;
                    
                    setIsAdding(true);
                    
                    // ✅ SIMPLIFICADO: Solo agregar una unidad como las otras vistas
                    addToCart({
                      id: perfume.id,
                      name: perfume.name,
                      brand: perfume.brand,
                      image: perfume.image,
                      size: perfume.sizes && perfume.sizes[selectedVariant] !== undefined ? perfume.sizes[selectedVariant] : 0,
                      price: perfume.prices && perfume.prices[selectedVariant] !== undefined ? perfume.prices[selectedVariant] : 0,
                      stock: 1,
                    });
                    
                    setShowToast(true);
                    setTimeout(() => {
                      setShowToast(false);
                      setIsAdding(false);
                    }, 2000);
                  }}
                >
                  {isAdding ? 'Agregando...' : 'Agregar al carrito'}
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
                aria-label={isFavorite ? `Quitar ${perfume.name} de favoritos` : `Agregar ${perfume.name} a favoritos`}
                onClick={handleFavorite}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill={isFavorite ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                {isFavorite ? 'Favorito' : 'Favoritos'}
              </Button>
            </div>
            {/* ✅ SIMPLIFICADO: Toast sin cantidad */}
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

export default PerfumeDetail;