import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import TestimonialCarousel from '../components/TestimonialCarousel';
// ✅ IMPORTAR DATOS CENTRALIZADOS
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { reviews as allReviews } from '../data/reviews';
import { decants } from '../data/decants';
import DecantCard from '../components/DecantCard';
import PerfumeCard from '../components/PerfumeCard';
import SetCard from '../components/SetCard';
import { perfumes } from '../data/perfumes';
import { sets } from '../data/sets';
import { useState, useEffect } from 'react';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

const reviews = allReviews.map(r => {
  let productNameObj: { name: string; link: string } | undefined = undefined;
  if (r.productType === 'perfume') {
    const prod = perfumes.find(p => p.id === r.productId);
    if (prod) productNameObj = { name: prod.name, link: `/perfume/${prod.id}` };
  } else if (r.productType === 'decant') {
    const prod = decants.find(d => d.id === r.productId);
    let decantName = '';
    if (prod) {
      const perfume = perfumes.find(p => p.id === prod.perfumeId);
      decantName = perfume ? perfume.name : prod.id;
      productNameObj = { name: decantName, link: `/decant/${prod.id}` };
    }
  } else if (r.productType === 'set') {
    const prod = sets.find(s => s.id === r.productId);
    if (prod) productNameObj = { name: prod.name, link: `/set/${prod.id}` };
  }
  return {
    ...r,
    avatar: r.avatar ?? '/images/testimonials/default_avatar.jpg',
    productName: productNameObj
  };
});

const HomePage = () => {
  // Animación de aparición para los botones del hero al cargar
  const [showHeroButtons, setShowHeroButtons] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setShowHeroButtons(true), 300);
    return () => clearTimeout(timeout);
  }, []);
  const infoFraganciasAnim = useScrollFadeIn();
  const testimonialAnim = useScrollFadeIn();
  const decantsAnim = useScrollFadeIn();
  const perfumesAnim = useScrollFadeIn();
  const setsAnim = useScrollFadeIn();
  const categoriesAnim = useScrollFadeIn();

  return (
    <div className="w-full bg-[#F9F9F9] mt-16">
      {/* Hero Section - COLORES ACTUALIZADOS */}
      {/* Animación de aparición para el Hero */}
      <section className="relative bg-[#2C3E50] text-white min-h-[calc(100vh-4rem)] flex items-center mt-10">
        <div className="absolute inset-0 overflow-hidden">
          <picture>
            <source srcSet="https://images.unsplash.com/photo-1615634260167-c8cdede054de?fm=webp&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyZnVtZXN8ZW58MHx8MHx8fDA%3D" type="image/webp" />
            <img
              src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyZnVtZXN8ZW58MHx8MHx8fDA%3D"
              alt="Colección de perfumes Aroma Selecto MX - hero principal"
              loading="lazy"
              className="w-full h-full object-cover opacity-40"
            />
          </picture>
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
                Participa y gana <strong> decants gratis</strong> de nuestros bestsellers valorados en más de $350 MXN
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 ${showHeroButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Button
                as="link"
                to="/productos"
                variant="primary"
                className="px-10 py-4 font-bold text-lg shadow-xl transition-all"
              >
                Explorar Catálogo
              </Button>
              <Button
                as="a"
                href="https://www.instagram.com/aromaselecto.mx/"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="px-10 py-4 font-bold text-lg shadow-xl transition-all"
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

      {/* Decant Info Section - EDUCATIVA */}
      <section
        ref={infoFraganciasAnim.ref}
        className={`py-16 bg-[#F9F9F9] transition-all duration-700 ${infoFraganciasAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <SectionTitle>¿Qué es un Decant?</SectionTitle>
            <p className="text-lg text-[#BDC3C7] max-w-2xl mx-auto mt-4">
              Un decant es un frasco pequeño rellenado con perfume original, ideal para probar nuevas fragancias sin comprar el frasco grande. ¡Misma esencia, menor inversión!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="flex flex-col items-center text-center">
              <span className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-4">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><path d="M12 2v2m0 0a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm0 8v10" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <h4 className="font-semibold text-gray-900 mb-2">Frascos pequeños</h4>
              <p className="text-[#BDC3C7] text-sm">Rellenados con perfume 100% original</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="w-16 h-16 rounded-full bg-[#2C3E50]/20 flex items-center justify-center mb-4">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><path d="M12 17v.01M7.05 7.05a7 7 0 1 1 9.9 9.9a7 7 0 0 1-9.9-9.9Zm0 0L12 12l4.95-4.95" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <h4 className="font-semibold text-gray-900 mb-2">100% Auténtico</h4>
              <p className="text-[#BDC3C7] text-sm">Sin imitaciones, solo fragancias originales</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="w-16 h-16 rounded-full bg-[#B8860B]/20 flex items-center justify-center mb-4">
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <h4 className="font-semibold text-gray-900 mb-2">Ahorra y Prueba Más</h4>
              <p className="text-[#BDC3C7] text-sm">Prueba varias esencias por menos precio</p>
            </div>
          </div>
          <div className="mb-8 max-w-2xl mx-auto">
            <ul className="list-disc list-inside text-[#2C3E50] text-base space-y-2">
              <li>Perfecto para viaje, regalo o uso diario</li>
              <li>Recibes el mismo aroma y duración que el frasco original</li>
              <li>Ideal para descubrir tu fragancia favorita antes de invertir en el grande</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 max-w-2xl mx-auto">
            <h5 className="font-semibold text-[#D4AF37] mb-3 text-lg">Preguntas Frecuentes</h5>
            <div className="space-y-3 text-left">
              <div>
                <span className="font-medium text-gray-900">¿Cuánto dura un decant?</span>
                <p className="text-[#BDC3C7] text-sm">Depende del uso, pero un decant de 5ml rinde entre 60 y 80 atomizaciones.</p>
              </div>
              <div>
                <span className="font-medium text-gray-900">¿Es original el perfume?</span>
                <p className="text-[#BDC3C7] text-sm">Sí, todos los decants se rellenan a partir de frascos originales y sellados.</p>
              </div>
              <div>
                <span className="font-medium text-gray-900">¿Cómo se envía?</span>
                <p className="text-[#BDC3C7] text-sm">En frascos nuevos, sellados y protegidos para que lleguen perfectos.</p>
              </div>
            </div>
          </div>
          {/* Enlace para conocer más sobre decants */}
          <div className="mt-8 flex justify-center">
            <Link
              to="/informacion-fragancias"
              className="text-gray-900 hover:text-[#D4AF37] inline-flex items-center text-sm font-medium transition-colors"
            >
              Conocer más información <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - CARRUSEL CON GRADIENTES */}
      <section
        ref={testimonialAnim.ref}
        className={`py-16 bg-[#F9F9F9] transition-all duration-700 ${testimonialAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialCarousel testimonials={reviews} />
        </div>
      </section>

      {/* Featured Products Section - COLORES ACTUALIZADOS */}
      <section
        ref={decantsAnim.ref}
        className={`py-16 bg-[#F9F9F9] transition-all duration-700 ${decantsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <SectionTitle>Decants Bestseller</SectionTitle>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Mostrar DecantCard para cada decant único (nuevo modelo) */}
            {decants.map(decant => {
              const perfume = perfumes.find(p => p.id === decant.perfumeId);
              return (
                <DecantCard
                  key={decant.perfumeId}
                  decant={decant}
                  perfumeName={perfume?.name}
                  perfumeBrand={perfume?.brand}
                  image={perfume?.image}
                  slug={decant.id}
                  rating={perfume?.rating}
                />
              );
            })}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              to="/productos?type=decant"
              className="text-gray-900 hover:text-[#D4AF37] inline-flex items-center text-sm font-medium transition-colors"
            >
              Ver todos <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Todas las fragancias - SECCIÓN NUEVA */}
      <section
        ref={perfumesAnim.ref}
        className={`py-16 bg-[#F9F9F9] transition-all duration-700 ${perfumesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
        <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Perfumes */}
          <SectionTitle>Perfumes Completos</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-6">
            {perfumes.map(perfume => (
              <PerfumeCard key={perfume.id} perfume={perfume} />
            ))}
          </div>
          {/* Sets */}
        </div>
        <div className="mt-8 flex justify-center">
            <Link
              to="/productos?type=perfume"
              className="text-gray-900 hover:text-[#D4AF37] inline-flex items-center text-sm font-medium transition-colors"
            >
              Ver todos <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section
        ref={setsAnim.ref}
        className={`py-16 bg-[#F9F9F9] transition-all duration-700 ${setsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <SectionTitle>Sets Especiales</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-6">
                {sets.map(set => (
                  <SetCard key={set.id} set={set} />
                ))}
              </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              to="/productos?type=set"
              className="text-gray-900 hover:text-[#D4AF37] inline-flex items-center text-sm font-medium transition-colors"
            >
              Ver todos <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section - COLORES ACTUALIZADOS */}
      <section
        ref={categoriesAnim.ref}
        className={`py-16 bg-[#F9F9F9] transition-all duration-700 ${categoriesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Encuentra tu fragancia perfecta</SectionTitle>
          {/* Categories Section - LINKS CON SCROLL AUTOMÁTICO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-lg overflow-hidden group h-80">
              <img 
                src="https://www.sephora.com.mx/on/demandware.static/-/Sites-masterCatalog_Sephora/es_MX/dwff1e1788/images/hi-res/boletos/Karla%20Nieto/CAROLINA%20HERRERA/8411061055199_5.jpg" 
                alt="Perfumes para mujer Aroma Selecto MX" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-logo font-medium mb-2">
                  Para Ella
                </h3>
                <p className="text-[#BDC3C7] text-sm mb-3">Fragancias femeninas dulces y elegantes</p>
                <Link 
                  to="/productos?gender=Mujer" 
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
                alt="Perfumes para hombre Aroma Selecto MX" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-logo font-medium mb-2">
                  Para Él
                </h3>
                <p className="text-[#BDC3C7] text-sm mb-3">Fragancias masculinas frescas y potentes</p>
                <Link 
                  to="/productos?gender=Hombre" 
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
                alt="Decants especiales Aroma Selecto MX" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-logo font-medium mb-2">
                  Fragancias Mixtas
                </h3>
                <p className="text-[#BDC3C7] text-sm mb-3">Fragancias unisex para todos los gustos</p>
                <Link 
                  to="/productos?gender=Mixto" 
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
    </div>
  );
};

export default HomePage;