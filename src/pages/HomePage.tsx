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
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (idx: number) => setOpenFaq(openFaq === idx ? null : idx);
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
  const faqAnim = useScrollFadeIn();

  return (
    <div className="w-full bg-[#F9F9F9] mt-16">
      
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
                Participa y gana <strong> decants gratis</strong> de nuestros bestsellers valorados en más de $350 MXN.
                Link en el pie de página para más detalles.
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 ${showHeroButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Button
                as="link"
                to="/productos"
                variant="primary"
              >
                Explorar Catálogo
              </Button>
              <Button
                as="a"
                href="https://www.instagram.com/aromaselecto.mx/"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white border-2 border-[#C13584] transition-colors"
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

      {/* Decant Info Section - EDUCATIVA */}
      <section
        ref={infoFraganciasAnim.ref}
        className={`py-16 bg-[#F9F9F9] transition-all duration-700 ${infoFraganciasAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <SectionTitle>¿Qué es un Decant?</SectionTitle>
            <div className="max-w-3xl mx-auto mt-6 space-y-4 text-lg text-[#2C3E50] leading-relaxed">
              <p>
                Imagínate esto: te enamoras de un perfume, pero el frasco grande cuesta un dineral. O peor, lo compras y después de unos días ya no te gusta.
              </p>
              <p className="font-medium text-[#D4AF37]">
                Ahí es donde entran los decants.
              </p>
              <p>
                Un decant es un mini frasco con perfume <strong>100% original</strong>, extraído directamente del envase de la marca. Es como probar un bocado delicioso antes de pedir el plato completo. Es tu <span className="text-[#D4AF37] font-semibold">pase VIP al mundo de las fragancias sin comprometerte</span>.
              </p>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#D4AF37]">
                <div className="flex items-center mb-4">
                  <span className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mr-4">
                    {/* Icono */}
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <h4 className="font-semibold text-[#2C3E50] text-lg">Prueba antes de comprar</h4>
                </div>
                <p className="text-[#BDC3C7] text-sm leading-relaxed">
                  Descubre si esa fragancia que viste en TikTok realmente va contigo y con tu piel. <strong>No más compras a ciegas</strong>.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#2C3E50]">
                <div className="flex items-center mb-4">
                  <span className="w-12 h-12 rounded-full bg-[#2C3E50]/20 flex items-center justify-center mr-4">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <h4 className="font-semibold text-[#2C3E50] text-lg">Colecciona más, gasta menos</h4>
                </div>
                <p className="text-[#BDC3C7] text-sm leading-relaxed">
                  ¿Por qué tener un solo perfume cuando puedes tener varios? Los decants te permiten armar una <strong>colección de fragancias para cada mood</strong>, evento o temporada.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#B8860B]">
                <div className="flex items-center mb-4">
                  <span className="w-12 h-12 rounded-full bg-[#B8860B]/20 flex items-center justify-center mr-4">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <h4 className="font-semibold text-[#2C3E50] text-lg">El compañero perfecto</h4>
                </div>
                <p className="text-[#BDC3C7] text-sm leading-relaxed">
                  Su tamaño es ideal para llevarlo en el bolsillo, la mochila o el bolso. Siempre tendrás tu aroma favorito a la mano, ya sea en un <strong>festival, en una cita o simplemente en tu día a día</strong>.
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                to="/informacion-fragancias"
                className="text-gray-900 hover:text-[#D4AF37] inline-flex items-center text-sm font-medium transition-colors"
              >
                Aprender más <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
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
      
      {/* Preguntas frecuentes */}
      <section
        ref={faqAnim.ref}
        className={`py-16 bg-[#F9F9F9] transition-all duration-700 ${faqAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionTitle>Preguntas frecuentes</SectionTitle>
            <p className="text-[#2C3E50] max-w-2xl mx-auto">
              Las dudas más comunes sobre fragancias, resueltas de forma clara y directa
            </p>
          </div>
          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">¿Cuánto me dura un perfume?</span>
                </div>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openFaq === 0 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFaq === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    Depende del tipo (EdP, EdT), pero también de tu piel y de cómo lo cuides. Un <strong>EdP</strong>, por ejemplo, puede durar de <strong>6 a 8 horas</strong>. Un EdT más ligero durará unas 4-6 horas, mientras que un EdC será más como 2-3 horas.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 2 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">¿Por qué un perfume huele diferente en cada persona?</span>
                </div>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openFaq === 1 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFaq === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    ¡Es la <strong className="text-[#D4AF37]">magia de tu química corporal</strong>! El pH, la temperatura, tu dieta y hasta tu estado de ánimo hacen que el mismo aroma sea único en cada piel. Por eso es súper importante probarlo en TI antes de comprarlo.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 3 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">¿Mejor en la piel o en la ropa?</span>
                </div>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openFaq === 2 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFaq === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Siempre en la piel.</strong> Así la fragancia evoluciona y se mezcla con tu esencia natural. En la ropa no evoluciona igual y además puede manchar algunos tejidos delicados. Los puntos ideales: muñecas, detrás de las orejas y cuello.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 4 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-orange-200 transition-colors">
                    <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-2 9a2 2 0 002 2h6a2 2 0 002-2l-2-9" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">¿Los perfumes caducan?</span>
                </div>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openFaq === 3 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFaq === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    Sí, aunque si los guardas bien pueden durar <strong>3-5 años</strong> fácilmente. Las señales de que ya no sirve: el color cambia (se pone más oscuro), el olor es raro o la textura es diferente. Guárdalos en un lugar fresco y oscuro para que duren más.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 5 - Bonus */}
            <div className="bg-gradient-to-r from-[#D4AF37]/10 to-yellow-50 rounded-xl shadow-lg border border-[#D4AF37]/20 overflow-hidden">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#D4AF37]/5 transition-colors group"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#D4AF37]/30 transition-colors">
                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">¿Cuántas pulverizaciones necesito?</span>
                </div>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openFaq === 4 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFaq === 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    <strong>4-6 pulverizaciones máximo.</strong> Una en cada muñeca, pecho y una en el cuello es perfecto. Recuerda: tu perfume debe ser descubierto, no anunciado. Si la gente te huele desde lejos, es demasiado. ¡La elegancia está en la sutileza! ✨
                  </p>
                </div>
              </div>
            </div>
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

      {/* Sets Section - COLORES ACTUALIZADOS */}
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

    </div>
  );
};

export default HomePage;