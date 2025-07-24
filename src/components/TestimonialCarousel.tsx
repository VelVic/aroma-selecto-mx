import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

interface TestimonialCarouselProps {
  testimonials: Array<{
    name: string;
    date: string;
    rating: number;
    comment: string;
    avatar: string;
    productName?: string;
  }>;
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play cada 5 segundos - SE PAUSA AUTOMÁTICAMENTE EN HOVER
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Calcula el promedio real
  const averageRating =
    testimonials.length > 0
      ? (
          testimonials.reduce((sum, t) => sum + (Number(t.rating) || 0), 0) /
          testimonials.length
        ).toFixed(1)
      : null;

  if (!testimonials.length) return null;

  return (
    <div className="relative">
      <div 
        className="bg-gradient-to-br from-[#F9F9F9] via-white to-[#F5F5F5] rounded-2xl p-8 relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#D4AF37]/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#D4AF37]/3 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="text-center mb-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-logo font-bold text-gray-900 mb-3">
            Reseñas de la comunidad
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] mx-auto rounded-full shadow-sm"></div>
          <p className="text-[#BDC3C7] text-sm mt-3">Experiencias reales de quienes han confiado en mi proyecto</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <TestimonialCard {...testimonial} avatar={testimonial.avatar ?? 'assets/images/avatars/default_avatar.jpg'} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B] text-[#2C3E50] hover:text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/20 transition-all duration-300 hover:scale-110 z-10 group"
          >
            <ChevronLeftIcon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B] text-[#2C3E50] hover:text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/20 transition-all duration-300 hover:scale-110 z-10 group"
          >
            <ChevronRightIcon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
          </button>
        </div>

        <div className="flex justify-center space-x-3 mt-8 relative z-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 hover:scale-110 ${
                index === currentIndex
                  ? 'w-8 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] shadow-lg shadow-[#D4AF37]/30'
                  : 'w-2 bg-[#BDC3C7] hover:bg-[#D4AF37]/50 hover:w-4'
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-4 relative z-10">
          <div className={`inline-flex items-center space-x-2 transition-opacity duration-300 ${
            isHovered ? 'opacity-60' : 'opacity-40'
          }`}>
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              isHovered ? 'bg-[#D4AF37]' : 'bg-[#D4AF37] animate-pulse'
            }`}></div>
            <span className="text-xs text-[#BDC3C7]">
              {isHovered ? 'Pausado' : 'Rotación automática'}
            </span>
          </div>
        </div>

        <div className="text-center mt-6 relative z-10">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                {averageRating ?? '--'}
              </span>
              <span className="text-sm text-[#BDC3C7] ml-1">/ 5</span>
            </div>
            <div className="w-px h-6 bg-[#D4AF37]/30"></div>
            <div className="text-sm text-[#BDC3C7]">
              Basado en <span className="font-medium text-[#2C3E50]">{testimonials.length}</span> {testimonials.length === 1 ? 'reseña' : 'reseñas'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;