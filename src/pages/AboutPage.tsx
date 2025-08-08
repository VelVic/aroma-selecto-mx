import { MapPinIcon, HeartIcon, StarIcon, ShieldCheckIcon, TruckIcon, SparklesIcon, SearchIcon, TargetIcon } from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

const AboutPage = () => {
  // Animaciones para Hero y CTA
  const ctaAnim = useScrollFadeIn();
  const historiaAnim = useScrollFadeIn();
  const misionVisionAnim = useScrollFadeIn();
  const funFactAnim = useScrollFadeIn();
  const equipoAnim = useScrollFadeIn();
  const valoresAnim = useScrollFadeIn();
  const ubicacionAnim = useScrollFadeIn();

  return (
    <div className="bg-[#F9F9F9] pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2C3E50] via-[#34495e] to-[#2C3E50] text-white py-20 overflow-hidden">
        {/* Fondo con pattern SVG */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.3'%3E%3Cpath d='m20 20 20-20v20z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-logo font-bold mb-6 bg-gradient-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent">
            ¡Esta es <span className="text-[#D4AF37]">mi</span> historia!
          </h1>
          <p className="text-lg md:text-xl text-[#BDC3C7] max-w-3xl mx-auto mb-8 leading-relaxed">
            Detrás de cada decant, hay un fanático de los perfumes. Esto no es solo una tienda, es el lugar donde nace tu próxima obsesión.
          </p>
        </div>
      </section>

      {/* Historia/Origen Section */}
      <section
        ref={historiaAnim.ref}
        className={`py-16 bg-white transition-all duration-700 ${historiaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle>¿Cómo empezó esta aventura?</SectionTitle>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Como tú, también soy estudiante y me di cuenta de lo complicado que es probar perfumes top o virales sin gastar una fortuna. No quería elegir a ciegas, y seguro tú tampoco. Así que pensé: ¿por qué no hacer las fragancias más geniales accesibles para todos?
                </p>
                <p>
                  Y así, de esa idea, nació Aroma Selecto MX. Un proyecto hecho para gente que ama los aromas tanto como yo, con la meta de que todos podamos <strong className="text-[#D4AF37]">tener el lujo de los perfumes en nuestras manos, sin romper el cochinito</strong>.
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
      <section
        ref={misionVisionAnim.ref}
        className={`py-16 transition-all duration-700 ${misionVisionAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
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
                Mi meta es que descubras y te enamores de perfumes originales en formatos perfectos para ti. Todo con productos de calidad y un servicio súper honesto que te haga sentir en confianza, como si estuvieras hablando con un amigo.
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
                Sueño con que Aroma Selecto MX sea el lugar donde todos los jóvenes de México se inicien en el mundo de los perfumes. Quiero que esta comunidad sepa más, se atreva a probar y encuentre su aroma más auténtico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Fact Section */}
      <section
        ref={funFactAnim.ref}
        className={`py-8 transition-all duration-700 ${funFactAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
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
      <section
        ref={equipoAnim.ref}
        className={`py-16 bg-white transition-all duration-700 ${equipoAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center mb-12">
            <SectionTitle>Sobre mí</SectionTitle>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 leading-relaxed text-lg">
                Hola, soy el rostro detrás de <strong className="text-[#D4AF37]">Aroma Selecto MX</strong>. Soy un apasionado por los aromas que decidió emprender para que tú, y otras personas como yo, pudieran encontrar fragancias increíbles sin sacrificar la cartera.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mt-4">
                Cada decant que envío es una promesa de calidad y cuidado. Desde la selección del perfume hasta el último detalle del empaque, todo está pensado para que tu experiencia sea tan única como el aroma que elijas.
              </p>
            </div>
          </div>
          
          {/* ✅ NUEVO ESTILO COMO LAS CARDS DE MISIÓN/VISIÓN */}
          <div className="flex justify-center">
            <div className="section-card p-8 rounded-lg shadow-sm max-w-lg mx-auto">
              <div className="flex justify-center mb-6">
                <img 
                  src="/assets/images/avatars/ProfileMe.webp" 
                  alt="Fundador de Aroma Selecto MX" 
                  className="h-40 w-40 rounded-full object-cover border-4 border-[#D4AF37] shadow-lg"
                />
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                Detrás de Aroma Selecto MX estoy yo, apasionado y comprometido con la excelencia en cada detalle. Mi misión es que cada cliente encuentre su fragancia perfecta.
              </p>
            </div>
          </div>
      </section>

      {/* Valores Section */}
      <section
        ref={valoresAnim.ref}
        className={`py-16 transition-all duration-700 ${valoresAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
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

      <section
        ref={ubicacionAnim.ref}
        className={`py-16 transition-all duration-700 ${ubicacionAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
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
      <section
        ref={ctaAnim.ref}
        className={`py-16 bg-[#F9F9F9] border-t border-[#D4AF37] border-opacity-30 transition-all duration-700 ${ctaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle>¿Listo para encontrar tu próximo aroma?</SectionTitle>
          <p className="text-xl text-[#2C3E50] mb-4">
            No estás solo en este viaje olfativo. Si necesitas ayuda para elegir, tienes dudas o solo quieres platicar de perfumes, estoy aquí para ti. ¡Escríbeme!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as="link"
              to="/productos"
              variant="primary"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Explora mi colección
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
            <Button
              as="a"
              href="https://wa.me/527208784641?text=¡Hola! Vengo de la sección 'Acerca de mi' de Aroma Selecto MX MX, ¿Podrías ayudarme?"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 hover:text-white border-2 border-[#C13584] transition-colors"
            >
              ¡Hablemos por WhatsApp!
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;