import React, { useState } from 'react';

interface ProductImageCarouselProps {
  images: string[];
  alt?: string;
}

const ProductImageCarousel: React.FC<ProductImageCarouselProps> = ({ images, alt }) => {
  const [current, setCurrent] = useState(0);
  if (!images || images.length === 0) return null;

  const goTo = (idx: number) => {
    if (idx < 0) idx = images.length - 1;
    if (idx >= images.length) idx = 0;
    setCurrent(idx);
  };

  return (
    <div className="w-full flex flex-col items-center mb-6">
      <div className="relative w-full max-w-md aspect-[4/5] flex items-center justify-center overflow-hidden rounded-lg bg-[#F9F9F9] shadow-md">
        <img
          src={images[current]}
          alt={alt || `Imagen ${current + 1}`}
          className="w-full h-full object-cover object-center transition-all duration-300"
          style={{ maxHeight: '100%', maxWidth: '100%' }}
        />
        {images.length > 1 && (
          <>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 shadow transition-all duration-300 bg-white/80 text-black text-lg hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B] hover:text-white focus:bg-gradient-to-r focus:from-[#D4AF37] focus:to-[#B8860B] focus:text-white active:bg-gradient-to-r active:from-[#D4AF37] active:to-[#B8860B] active:text-white hover:scale-105"
              onClick={() => goTo(current - 1)}
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 shadow transition-all duration-300 bg-white/80 text-black text-lg hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B] hover:text-white focus:bg-gradient-to-r focus:from-[#D4AF37] focus:to-[#B8860B] focus:text-white active:bg-gradient-to-r active:from-[#D4AF37] active:to-[#B8860B] active:text-white hover:scale-105"
              onClick={() => goTo(current + 1)}
              aria-label="Siguiente"
            >
              ›
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 mt-4 justify-center">
          {images.map((img, idx) => (
            <button
              key={img + idx}
              onClick={() => setCurrent(idx)}
              className={`border-2 rounded-lg overflow-hidden w-12 h-12 flex items-center justify-center transition-all duration-200 ${current === idx ? 'border-[#D4AF37] shadow-md' : 'border-gray-200'}`}
              style={{ background: '#F9F9F9' }}
              aria-label={`Ver imagen ${idx + 1}`}
            >
              <img
                src={img}
                alt={`Miniatura ${idx + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageCarousel;
