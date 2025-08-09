
import { TruckIcon, ShieldCheckIcon, ClockIcon, AlertCircleIcon, CheckCircleIcon, XCircleIcon, MailIcon, PhoneIcon, InstagramIcon, GiftIcon, MapPinIcon } from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import useScrollFadeIn from '../hooks/useScrollFadeIn';


const ShippingPage = () => {
  // Animaciones para cada sección principal
  const tiposEnvioAnim = useScrollFadeIn();
  const beneficiosAnim = useScrollFadeIn();
  const procesoAnim = useScrollFadeIn();
  const devolucionesAnim = useScrollFadeIn();
  const contactoAnim = useScrollFadeIn();
  const notaAnim = useScrollFadeIn();
  const ctaAnim = useScrollFadeIn();

  return (
    <div className="bg-white pt-16">
      {/* Hero Section - MISMO ESTILO QUE FRAGRANCEINFO */}
      <section className="relative bg-gradient-to-br from-[#2C3E50] via-[#34495e] to-[#2C3E50] text-white py-20 overflow-hidden">
        {/* Fondo con pattern SVG */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.3'%3E%3Cpath d='m20 20 20-20v20z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-logo font-bold mb-6 bg-gradient-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent">
            Envíos seguros y confiables
          </h1>
          <p className="text-lg md:text-xl text-[#BDC3C7] max-w-3xl mx-auto mb-8 leading-relaxed">
            Tu fragancia favorita llega perfecta a tu puerta. Aquí tienes toda la info sobre envíos, tiempos y nuestra garantía de satisfacción.
          </p>
        </div>
      </section>

      {/* Tipos de Envío - TONO MÁS AMIGABLE */}
      <section
        {...tiposEnvioAnim}
        className={`py-16 bg-white transition-all duration-700 ${tiposEnvioAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>¿Cómo quieres recibir tu fragancia?</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Entrega Personal */}
            <div className="text-center section-card p-6 bg-gradient-to-br from-[#F9F9F9] to-white rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-[#D4AF37]/20">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">Entrega Personal</h3>
              <div className="space-y-2 text-[#BDC3C7] text-sm">
                <p><strong>Ubicación:</strong> Gutiérrez Zamora, Veracruz</p>
                <p><strong>Zonas cercanas:</strong> 10:00 AM - 8:00 PM</p>
                <p><strong>Zonas lejanas:</strong> Antes de las 6:00 PM</p>
                <p><strong>Tiempo:</strong> ¡Al día siguiente!</p>
                <p className="text-[#D4AF37] font-medium">GRATIS</p>
              </div>
            </div>

            {/* Envío Estándar */}
            <div className="text-center section-card p-6 bg-gradient-to-br from-[#F9F9F9] to-white rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-[#D4AF37]/20">
              <div className="w-16 h-16 bg-[#2C3E50] rounded-full flex items-center justify-center mx-auto mb-4">
                <TruckIcon className="h-8 w-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">Envío Estándar</h3>
              <div className="space-y-2 text-[#BDC3C7] text-sm">
                <p><strong>Cobertura:</strong> Todo México</p>
                <p><strong>Tiempo:</strong> 3-5 días hábiles + preparación</p>
                <p>
                  <strong>Costo:</strong> 
                  <span className="block">
                    $150 MXN<br />
                    <span className="text-green-600 font-medium">
                      $75 MXN en compras desde $500 MXN<br />
                      GRATIS en compras desde $1300 MXN
                    </span>
                  </span>
                </p>
                <p><strong>Paquetería:</strong> Estafeta, DHL u otros</p>
              </div>
            </div>

            {/* Envío Express */}
            <div className="text-center section-card p-6 bg-gradient-to-br from-[#F9F9F9] to-white rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-[#D4AF37]/20">
              <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
                <TruckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">Envío Express</h3>
              <div className="space-y-2 text-[#BDC3C7] text-sm">
                <p><strong>Cobertura:</strong> Ciudades principales</p>
                <p><strong>Tiempo:</strong> 1-2 días hábiles + preparación</p>
                <p>
                  <strong>Costo:</strong>
                  <span className="block">
                    $200 MXN<br />
                    <span className="text-green-600 font-medium">
                      $100 MXN en compras desde $1300 MXN
                    </span>
                  </span>
                </p>
                <p><strong>Paquetería:</strong> Servicio premium</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios por Compra + Fun Fact */}
      <section 
        {...beneficiosAnim}
        className={`py-16 bg-[#F9F9F9] transition-all duration-700 ${beneficiosAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>¡Mientras más compras, más ganas!</SectionTitle>
          {/* Tarjetas de Beneficios */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Decant Gratis - AZUL */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <GiftIcon className="h-8 w-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-semibold text-gray-900">Decant Gratis</h3>
              </div>
              <p className="text-[#BDC3C7] mb-3">En compras desde <strong className="text-gray-900">$400 MXN</strong></p>
              <p className="text-sm text-gray-600">
                Recibe un decant sorpresa de 3ml como regalo. ¡Perfecto 
                para descubrir tu próxima obsesión olfativa!
              </p>
            </div>
            {/* Envío Estándar con Descuento - VERDE */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <TruckIcon className="h-8 w-8 text-green-600 mr-4" />
                <h3 className="text-2xl font-semibold text-gray-900">Envío Estándar con Descuento</h3>
              </div>
              <p className="text-[#BDC3C7] mb-3">En compras desde <strong className="text-gray-900">$500 MXN</strong></p>
              <p className="text-sm text-gray-600">
                El envío estándar baja a <strong>$75 MXN</strong> en compras desde $500 MXN y es <strong>GRATIS</strong> desde $1300 MXN.
              </p>
            </div>
            {/* Envío Express con Descuento - DORADO */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-[#D4AF37]">
              <div className="flex items-center mb-4">
                <TruckIcon className="h-8 w-8 text-[#D4AF37] mr-4" />
                <h3 className="text-2xl font-semibold text-gray-900">Envío Express con Descuento</h3>
              </div>
              <p className="text-[#BDC3C7] mb-3">En compras desde <strong className="text-gray-900">$1300 MXN</strong></p>
              <p className="text-sm text-gray-600">
                El envío express baja a <strong>$100 MXN</strong> en compras desde $1300 MXN.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Envío - MÁS PERSONAL */}
      <section  
        {...procesoAnim}
        className={`py-16 bg-white transition-all duration-700 ${procesoAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Así es como cuido tu pedido</SectionTitle>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Confirmas tu Pedido</h3>
              <p className="text-[#BDC3C7] text-sm">
                Haces tu compra y te confirmo al instante que todo está bien
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#2C3E50] rounded-full flex items-center justify-center mx-auto mb-4 text-[#D4AF37] font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Preparo tu Decant</h3>
              <p className="text-[#BDC3C7] text-sm">
                1-3 días para preparar cuidadosamente tu fragancia
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Empaque Súper Seguro</h3>
              <p className="text-[#BDC3C7] text-sm">
                Protección especial para que llegue perfecto a tus manos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#2C3E50] rounded-full flex items-center justify-center mx-auto mb-4 text-[#D4AF37] font-bold text-xl">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">¡A disfrutar!</h3>
              <p className="text-[#BDC3C7] text-sm">
                Tu fragancia llega lista para convertirse en tu aroma favorito
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Política de Devoluciones - MÁS AMIGABLE Y HONESTA */}
      <section 
        {...devolucionesAnim}
        className={`py-16 bg-[#F9F9F9] transition-all duration-700 ${devolucionesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>¿Algún problema con tu pedido? ¡Te ayudo!</SectionTitle>
          
          {/* Intro amigable */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-lg text-[#BDC3C7] leading-relaxed">
              Mi prioridad es que ames tu fragancia. Si algo no está bien, hablemos y lo solucionamos juntos. 
            </p>
          </div>
          
          {/* Tiempo y Condiciones - MÁS AMIGABLES */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D4AF37]">
              <div className="flex items-center mb-4">
                <ClockIcon className="h-6 w-6 text-[#D4AF37] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">¿Cuándo contactarme?</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Escríbeme en los primeros <strong className="text-[#D4AF37]">5 días</strong> después de recibir tu pedido. 
                ¡Mientras más pronto me escribas, mejor te puedo ayudar!
              </p>
              <p className="text-[#BDC3C7] text-sm">
                Después de este tiempo se me complica mucho ayudarte porque ya no puedo rastrear bien el envío.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D4AF37]">
              <div className="flex items-center mb-4">
                <ShieldCheckIcon className="h-6 w-6 text-[#D4AF37] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Para poder ayudarte mejor</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Necesito que tu decant esté sin abrir y con el sello intacto. ¡Es por seguridad de ambos!
              </p>
              <ul className="space-y-1 text-[#BDC3C7] text-sm">
                <li>• Foto del producto tal como llegó</li>
                <li>• Empaque original</li>
                <li>• Descripción de qué pasó</li>
              </ul>
            </div>
          </div>
          
          {/* Casos donde SÍ puedo ayudar */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3" />
              ¡Por supuesto que te ayudo en estos casos!
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Llegó dañado</h4>
                <p className="text-gray-700 text-sm">
                  Si tu decant llegó roto o derramado, me hago responsable al 100%. 
                  Mándame fotos y te mando uno nuevo de inmediato.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Me equivoqué</h4>
                <p className="text-gray-700 text-sm">
                  Si te mandé un perfume diferente al que pediste, ¡mi error! 
                  Te cambio el correcto sin costo adicional.
                </p>
              </div>
            </div>
          </div>
          
          {/* Casos donde NO puedo ayudar - MUY AMIGABLE */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
              <AlertCircleIcon className="h-6 w-6 text-amber-600 mr-3" />
              Casos donde no puedo hacer cambios
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
                <h4 className="font-medium text-gray-900 mb-2">"No me gustó el aroma"</h4>
                <p className="text-gray-700 text-sm">
                  Los perfumes son súper personales y reaccionan diferente en cada piel. Por eso recomiendo mucho 
                  leer las notas y reseñas antes de decidir. Una vez abierto, ya no puedo reutilizarlo por higiene.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
                <h4 className="font-medium text-gray-900 mb-2">Productos en oferta</h4>
                <p className="text-gray-700 text-sm">
                  Los decants en promoción o liquidación son precio especial porque necesito rotar inventario rápido. 
                  ¡Son oportunidades únicas pero sin cambios!
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
                <h4 className="font-medium text-gray-900 mb-2">Ya lo probaste</h4>
                <p className="text-gray-700 text-sm">
                  Si el sello está roto o hay señales de uso, ya no puedo hacer cambios por cuestiones de higiene 
                  y calidad para otros clientes.
                </p>
              </div>
            </div>
          </div>
          {/* Mensaje final positivo */}
          <div className="mt-8 text-center bg-[#D4AF37]/10 rounded-lg p-6">
            <p className="text-gray-700 font-medium">
              💛 Mi compromiso: Que tengas la mejor experiencia posible con tu fragancia. 
              Si algo no está bien, lo arreglamos juntos.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ de Envíos - estilo destacado */}
      <section
        {...ctaAnim}
        className={`py-16 bg-white transition-all duration-700 ${ctaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionTitle>¿Dudas sobre envíos?</SectionTitle>
            <p className="text-xl text-[#BDC3C7] max-w-2xl mx-auto">
              ¡Estoy aquí para ayudarte! Si no encuentras lo que buscas, escríbeme por tu canal favorito.
            </p>
          </div>
          <div className="space-y-4">
            {/* Pregunta 1 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="flex items-center px-6 py-5">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <ClockIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">¿Cuánto tarda en llegar mi pedido?</h4>
                  <p className="text-[#BDC3C7] text-sm">
                    Entre <strong className="text-[#D4AF37]">4-8 días</strong> en total (yo lo preparo + el envío). Te voy avisando en cada paso.
                  </p>
                </div>
              </div>
            </div>
            {/* Pregunta 2 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="flex items-center px-6 py-5">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <ShieldCheckIcon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">¿Puedo rastrear mi envío?</h4>
                  <p className="text-[#BDC3C7] text-sm">
                    ¡Claro! Te mando el número de seguimiento por WhatsApp o correo.
                  </p>
                </div>
              </div>
            </div>
            {/* Pregunta 3 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="flex items-center px-6 py-5">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <AlertCircleIcon className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">¿Qué pasa si mi paquete no llega?</h4>
                  <p className="text-[#BDC3C7] text-sm">
                    Escríbeme al instante y lo resolvemos juntos. ¡No te quedes sin tu fragancia!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - MÁS AMIGABLE */}
      <section
        ref={ctaAnim.ref}
        className={`py-16 bg-[#F9F9F9] border-t border-[#D4AF37] border-opacity-30 transition-all duration-700 ${ctaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle>¿Tienes dudas sobre tu envío o devolución?</SectionTitle>
          <p className="text-xl text-[#BDC3C7] mb-8">
            Si tienes alguna pregunta sobre los tiempos, el proceso, o necesitas ayuda con tu pedido, ¡escríbeme! Mi prioridad es que tu fragancia llegue perfecta y que tengas la mejor experiencia posible. <strong className="text-[#D4AF37]">¿Prefieres atención rápida? ¡Contáctame por Instagram o WhatsApp!</strong>
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
              Escríbeme en Instagram
            </Button>
            <Button
              as="a"
              href="https://wa.me/527208784641?text=¡Hola! Tengo una duda sobre mi envío o devolución en Aroma Selecto MX, ¿me ayudas?"
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

export default ShippingPage;