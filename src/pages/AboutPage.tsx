import { Link } from 'react-router-dom';
import { MapPinIcon, HeartIcon, StarIcon, ShieldCheckIcon, TruckIcon, SparklesIcon, UsersIcon, SearchIcon, TargetIcon } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <section className="relative bg-[#2C3E50] text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Perfumes collection" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/80 to-[#2C3E50]/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-logo font-bold mb-6">
            Nuestra <span className="text-[#D4AF37]">Historia</span>
          </h1>
          <p className="text-xl text-[#BDC3C7] max-w-3xl mx-auto">
            Descubre la pasión detrás de Aroma Selecto, donde cada fragancia cuenta una historia única 
            y cada decant es una puerta de entrada al mundo de los perfumes premium.
          </p>
        </div>
      </section>

      {/* Historia/Origen Section */}
        <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-logo font-bold text-gray-900 mb-6">
                Acerca de Nosotros
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                    Aroma Selecto nació de la pasión de un joven universitario por el fascinante mundo de las fragancias. 
                    Inspirado por el deseo de acercar perfumes de alta gama a más personas, decidió crear una alternativa 
                    accesible: ofrecer decants (fraccionamientos de perfumes originales) que permiten a los clientes probar 
                    los aromas antes de invertir en una botella completa.
                </p>
                <p>
                    Así, nació un proyecto con propósito: <strong className="text-[#D4AF37]">acercar el lujo de los perfumes a todos</strong>.
                </p>
                </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-80 h-64">
                <img 
                    src="https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Nuestra pasión por las fragancias" 
                    className="w-full h-full object-cover rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#D4AF37] p-3 rounded-lg shadow-lg">
                    <SparklesIcon className="h-6 w-6 text-white" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

      {/* Misión y Visión */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4">
                  <TargetIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-logo font-bold text-gray-900">
                  Nuestra Misión
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Brindar a nuestros clientes la oportunidad de descubrir y disfrutar perfumes originales 
                en presentaciones accesibles, con productos de calidad y un servicio que transmite confianza.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4">
                  <StarIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-logo font-bold text-gray-900">
                  Nuestra Visión
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Convertirnos en una marca referente en el mundo de los decants en México, promoviendo 
                una cultura olfativa más informada, cercana y auténtica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-logo font-bold text-gray-900 mb-6">
              Nuestro Equipo
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 leading-relaxed text-lg">
                Aroma Selecto está conformado por un grupo de amigos apasionados por la perfumería. 
                Detectamos una necesidad en nuestra comunidad: el deseo de probar perfumes exclusivos 
                sin comprometer el bolsillo.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mt-4">
                Hoy, trabajamos juntos para ofrecer <strong className="text-[#D4AF37]">soluciones prácticas, 
                elegantes y seguras</strong> para todos los amantes de las fragancias.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#B8860B]/10 p-8 rounded-lg border border-[#D4AF37]/20">
              <UsersIcon className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
              <p className="text-center text-gray-600 font-medium">
                Un equipo joven, apasionado y comprometido con la excelencia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-logo font-bold text-center text-gray-900 mb-12">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Originalidad</h3>
              <p className="text-gray-600">
                Solo perfumes 100% auténticos, garantizamos la calidad de cada fragancia.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Calidad</h3>
              <p className="text-gray-600">
                Envases resistentes y diseño cuidado en cada detalle de nuestros productos.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Accesibilidad</h3>
              <p className="text-gray-600">
                Fragancias premium a precios justos, para que todos puedan disfrutarlas.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Pasión</h3>
              <p className="text-gray-600">
                Porque creemos que cada aroma cuenta una historia única y especial.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <TruckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Seguridad</h3>
              <p className="text-gray-600">
                Empaque y envío confiables, protegiendo tu compra hasta tu puerta.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <SearchIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Proceso Cuidadoso</h3>
              <p className="text-gray-600">
                Selección basada en encuestas y análisis de preferencias locales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación y Proceso Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-logo font-bold text-gray-900 mb-6">
                Desde Gutiérrez Zamora, Veracruz
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-center">
                  <MapPinIcon className="h-5 w-5 text-[#D4AF37] mr-2" />
                  Gutiérrez Zamora, Veracruz, México
                </p>
                <p>
                  Con base en Gutiérrez Zamora, Veracruz, realizamos envíos seguros y confiables 
                  a todo México, con entregas personales o gratuitas dentro de zonas acordadas.
                </p>
                <div className="bg-[#F9F9F9] p-4 rounded-lg border-l-4 border-[#D4AF37]">
                  <h4 className="font-semibold text-gray-900 mb-2">Nuestro Proceso</h4>
                  <p className="text-sm">
                    Cada fragancia que ofrecemos es seleccionada con base en encuestas, gustos locales 
                    y análisis de preferencias. Queremos que descubras el aroma que habla de ti, por eso 
                    elegimos cuidadosamente cada perfume que llega a tus manos.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#2C3E50] to-[#34495E] rounded-lg p-8 text-white text-center">
              <MapPinIcon className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Gutiérrez Zamora, Veracruz</h3>
              <p className="text-[#BDC3C7] mb-6">
                Desde el corazón de Veracruz hacia todo México
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white/10 p-3 rounded">
                  <p className="font-medium">Entrega Local</p>
                  <p className="text-[#D4AF37]">Gratuita</p>
                </div>
                <div className="bg-white/10 p-3 rounded">
                  <p className="font-medium">Envío Nacional</p>
                  <p className="text-[#D4AF37]">3-5 días</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - SIGUIENDO TU ESTILO EXACTO */}
      <section className="py-16 bg-[#F9F9F9] border-t border-[#D4AF37] border-opacity-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-logo font-bold mb-6 text-[#2C3E50]">
            ¿Listo para descubrir tu fragancia perfecta?
          </h2>
          <p className="text-xl text-[#BDC3C7] mb-8">
            Explora nuestro catálogo de decants originales y encuentra el aroma que habla de ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/productos" 
              className="bg-[#2C3E50] text-[#D4AF37] px-8 py-3 rounded-lg font-medium hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B] hover:text-[#2C3E50] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Ver Catálogo
            </Link>
            <a 
              href="https://www.instagram.com/aromaselecto.mx/" 
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#2C3E50] text-[#2C3E50] px-8 py-3 rounded-lg font-medium hover:bg-[#2C3E50] hover:text-[#D4AF37] transition-all duration-300 hover:scale-105"
            >
              Síguenos en Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;