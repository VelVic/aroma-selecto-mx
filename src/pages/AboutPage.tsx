import { MapPinIcon, HeartIcon, StarIcon, ShieldCheckIcon, TruckIcon, SparklesIcon, UsersIcon, SearchIcon, TargetIcon } from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';

const AboutPage = () => {
  return (
    <div className="bg-[#F9F9F9] pt-16">
      {/* Hero Section */}
      <section className="relative bg-[#2C3E50] text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://granaroma.co/wp-content/uploads/2024/03/decants-gran-aroma-perfumes-de-nicho-768x360-1.jpg" 
            alt="Perfumes collection" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/80 to-[#2C3E50]/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-logo font-bold mb-6">
            Mi <span className="text-[#D4AF37]">Historia</span>
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
              <SectionTitle>¿Cómo nació Aroma Selecto?</SectionTitle>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Aroma Selecto nació de mi pasión por el fascinante mundo de las fragancias. Como universitario, descubrí el deseo de acercar perfumes de alta gama a más personas y decidí crear una alternativa accesible: ofrecer decants (fraccionamientos de perfumes originales) que permiten probar los aromas antes de invertir en una botella completa.
                </p>
                <p>
                  Así, surgió este proyecto con un propósito claro: <strong className="text-[#D4AF37]">acercar el lujo de los perfumes a todos</strong>.
                </p>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-80 h-64">
                <img 
                    src="https://m.media-amazon.com/images/I/71E0Bx8CgyL._UF894,1000_QL80_.jpg" 
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="section-card p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4">
                  <TargetIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-logo font-bold text-gray-900">
                  Misión
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Mi misión es brindarte la oportunidad de descubrir y disfrutar perfumes originales en presentaciones accesibles, siempre con productos de calidad y un servicio que transmite confianza y cercanía.
              </p>
            </div>
            <div className="section-card p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4">
                  <StarIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-logo font-bold text-gray-900">
                  Visión
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Mi visión es convertir Aroma Selecto en un referente del mundo de los decants en México, promoviendo una cultura olfativa más informada, cercana y auténtica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Fact Section */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center bg-gradient-to-r from-[#D4AF37]/10 to-[#2C3E50]/10 rounded-lg p-6 shadow-sm">
            <SparklesIcon className="h-10 w-10 text-[#D4AF37] mr-4 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-bold text-[#2C3E50] mb-1">Fun Fact</h4>
              <p className="text-gray-700">¿Sabías que el sentido del olfato está directamente conectado con la memoria y las emociones? Por eso, una fragancia puede transportarte a un momento especial en segundos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionTitle>Sobre mí</SectionTitle>
              <div className="max-w-4xl mx-auto">
                <p className="text-gray-600 leading-relaxed text-lg">
                  Aroma Selecto es un proyecto personal creado por un apasionado de la perfumería, con el objetivo de acercar fragancias originales y especiales a más personas sin comprometer el bolsillo.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mt-4">
                  Trabajo cada día para ofrecer <strong className="text-[#D4AF37]">soluciones prácticas, elegantes y seguras</strong> a quienes aman las fragancias, cuidando cada detalle para que tu experiencia sea única.
                </p>
              </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#B8860B]/10 p-8 rounded-lg border border-[#D4AF37]/20">
              <UsersIcon className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
              <p className="text-center text-gray-600 font-medium">
                Detrás de Aroma Selecto estoy yo, apasionado y comprometido con la excelencia en cada detalle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Mis Valores</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 section-card rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Originalidad</h3>
              <p className="text-gray-600">
                Solo perfumes 100% auténticos. Garantizo la calidad de cada fragancia que ofrezco.
              </p>
            </div>
            <div className="text-center p-6 section-card rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Calidad</h3>
              <p className="text-gray-600">
                Uso envases resistentes y cuido el diseño en cada detalle de mis productos.
              </p>
            </div>
            <div className="text-center p-6 section-card rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Accesibilidad</h3>
              <p className="text-gray-600">
                Fragancias premium a precios justos, para que todos puedan disfrutarlas.
              </p>
            </div>
            <div className="text-center p-6 section-card rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Pasión</h3>
              <p className="text-gray-600">
                Creo que cada aroma cuenta una historia única y especial.
              </p>
            </div>
            <div className="text-center p-6 section-card rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <TruckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Seguridad</h3>
              <p className="text-gray-600">
                Empaque y envío confiables, protegiendo tu compra hasta tu puerta.
              </p>
            </div>
            <div className="text-center p-6 section-card rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <SearchIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Proceso Cuidadoso</h3>
              <p className="text-gray-600">
                Selecciono cada fragancia basándome en encuestas, tendencias y pruebas personales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Mi ubicación y entregas</SectionTitle>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Columna de texto envuelta en tarjeta blanca */}
            <div className="space-y-4 text-gray-600">
              <p className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-[#D4AF37] mr-2" />
                Gutiérrez Zamora, Veracruz, México
              </p>
              <p>
                Realizo entregas personales en la zona y envío a todo México. Si tienes dudas sobre tu pedido o quieres recomendaciones, puedes contactarme directamente.
              </p>
              <p>
                Mi objetivo es que encuentres la fragancia que realmente va contigo, sin complicaciones y con la confianza de que tu compra llegará segura.
              </p>
              <div className="bg-[#F9F9F9] p-4 rounded-lg border-l-4 border-[#D4AF37]">
                <h4 className="font-semibold text-gray-900 mb-2">¿Cómo elijo las fragancias?</h4>
                <p className="text-sm">
                  Escucho a mis clientes, analizo tendencias y pruebo cada aroma antes de ofrecerlo. Así, solo recomiendo lo que realmente vale la pena probar.
                </p>
              </div>
            </div>
            {/* Columna de ubicación (se queda igual) */}
            <div className="bg-gradient-to-br from-[#2C3E50] to-[#34495E] rounded-lg p-8 text-white text-center">
              <MapPinIcon className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Gutiérrez Zamora, Veracruz</h3>
              <p className="text-[#BDC3C7] mb-6">
                Desde mi ciudad, ayudo a personas de todo México a descubrir su próxima fragancia favorita.
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
          <SectionTitle>¿Listo para encontrar tu fragancia ideal?</SectionTitle>
          <p className="text-xl text-[#2C3E50] mb-4">
            ¡Déjame ayudarte a descubrir el aroma que marcará tu historia! Si tienes dudas, buscas una recomendación personalizada o simplemente quieres platicar de perfumes, estoy para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as="link"
              to="/fragancias"
              variant="primary"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Ver catálogo de fragancias
            </Button>
            <Button
              as="a"
              href="https://www.instagram.com/aromaselecto.mx/"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white border-2 border-[#C13584] transition-colors"
            >
              Escríbeme en Instagram
            </Button>
            <Button
              as="a"
              href="https://wa.me/527823185711"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="hover:bg-gradient-to-r hover:from-[#25D366] hover:to-[#128C7E] hover:text-white border-2 border-[#25D366] transition-colors"
            >
              Escríbeme por WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;