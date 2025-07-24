import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
// ✅ IMPORTAR DATOS CENTRALIZADOS
import { getAvailableProducts } from '../data/products';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { reviews as allReviews } from '../data/reviews';

const reviews = allReviews.map(r => ({
  ...r,
  avatar: r.avatar ?? '/images/testimonials/default_avatar.jpg',
}));
const featuredProducts = getAvailableProducts().slice(0, 3); // Los primeros 3 disponibles

const HomePage = () => {
  // ...
  return (
    <div className="w-full bg-[#F9F9F9]">
      {/* Hero Section - COLORES ACTUALIZADOS */}
      <section className="relative bg-[#2C3E50] text-white min-h-[calc(100vh-4rem)] flex items-center mt-16">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyZnVtZXN8ZW58MHx8MHx8fDA%3D" 
            alt="Perfume collection" 
            className="w-full h-full object-cover opacity-40" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C3E50]/20 via-[#2C3E50]/40 to-[#2C3E50]/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-logo font-bold mb-8 leading-tight">
              Aromas que <span className="block text-[#D4AF37]">hablan de ti</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-[#BDC3C7] max-w-3xl mx-auto leading-relaxed">
              Perfumes 100% originales en presentación decant. Descubre esencias exclusivas en formatos accesibles.
            </p>
            
            {/* Highlight del sorteo - ACTUALIZADO CON PRECIOS */}
            <div className="mb-12 p-6 bg-gradient-to-r from-[#D4AF37]/20 to-[#B8860B]/20 backdrop-blur-sm rounded-2xl border border-[#D4AF37]/30 max-w-2xl mx-auto">
              <p className="text-[#D4AF37] text-lg font-semibold mb-2">
                ¡SORTEO ESPECIAL ACTIVO!
              </p>
              <p className="text-white text-base">
                Participa y gana <strong>3 decants gratis</strong> de nuestros bestsellers valorados en más de $360 MXN
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                as="link"
                to="/fragancias"
                variant="primary"
                className="px-10 py-4 font-bold text-lg shadow-xl"
              >
                Explorar Catálogo
              </Button>
              <Button
                as="a"
                href="https://www.instagram.com/aromaselecto.mx/"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="px-10 py-4 font-semibold text-lg shadow-xl"
              >
                Sígueme en Instagram
              </Button>
            </div>
          </div>
        </div>

        {/* Indicador de scroll - COLORES ACTUALIZADOS */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center">
          <div className="text-[#BDC3C7] animate-bounce">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2 opacity-80">Desliza para ver más</span>
              <div className="w-6 h-10 border-2 border-[#BDC3C7]/40 rounded-full flex items-center justify-center">
                <div className="w-1 h-3 bg-[#BDC3C7]/60 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - COLORES ACTUALIZADOS */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Encuentra tu fragancia perfecta</SectionTitle>
          {/* Categories Section - LINKS CON SCROLL AUTOMÁTICO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-lg overflow-hidden group h-80">
              <img 
                src="https://www.sephora.com.mx/on/demandware.static/-/Sites-masterCatalog_Sephora/es_MX/dwff1e1788/images/hi-res/boletos/Karla%20Nieto/CAROLINA%20HERRERA/8411061055199_5.jpg" 
                alt="Perfumes para mujer" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-logo font-medium mb-2">
                  Para Ella
                </h3>
                <p className="text-[#BDC3C7] text-sm mb-3">Fragancias femeninas dulces y elegantes</p>
                <Link 
                  to="/fragancias?category=mujer" 
                  className="text-[#D4AF37] text-sm flex items-center hover:text-white transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Ver colección <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden group h-80">
              <img 
                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Perfumes para hombre" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-logo font-medium mb-2">
                  Para Él
                </h3>
                <p className="text-[#BDC3C7] text-sm mb-3">Fragancias masculinas frescas y potentes</p>
                <Link 
                  to="/fragancias?category=hombre" 
                  className="text-[#D4AF37] text-sm flex items-center hover:text-white transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Ver colección <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden group h-80">
              <img 
                src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Decants especiales" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-logo font-medium mb-2">
                  Fragancias Premium
                </h3>
                <p className="text-[#BDC3C7] text-sm mb-3">Fragancias más exclusivas y sofisticadas</p>
                <Link 
                  to="/fragancias?category=premium" 
                  className="text-[#D4AF37] text-sm flex items-center hover:text-white transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Ver colección <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section - COLORES ACTUALIZADOS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <SectionTitle>Más Vendidos</SectionTitle>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              to="/fragancias"
              className="text-gray-900 hover:text-[#D4AF37] inline-flex items-center text-sm font-medium transition-colors"
            >
              Ver todos <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - CARRUSEL CON GRADIENTES */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialCarousel testimonials={reviews} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;