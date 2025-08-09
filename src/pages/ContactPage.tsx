import useScrollFadeIn from '../hooks/useScrollFadeIn';
import { PhoneIcon, MailIcon, ClockIcon, MapPinIcon, InstagramIcon, AlertCircleIcon, CalendarIcon, TruckIcon } from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { useState } from 'react';

const ContactPage = () => {
  // Animaciones para secciones principales
  const funFactAnim = useScrollFadeIn();
  const infoAnim = useScrollFadeIn();
  const horariosAnim = useScrollFadeIn();
  const faqAnim = useScrollFadeIn();
  const pedidosAnim = useScrollFadeIn();
  const ctaAnim = useScrollFadeIn();

  // ✅ AGREGAR ESTE ESTADO PARA EL ACORDEÓN
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white pt-16">
      {/* Hero/Encabezado - MISMO ESTILO QUE FRAGRANCEINFO */}
      <section className="relative bg-gradient-to-br from-[#2C3E50] via-[#34495e] to-[#2C3E50] text-white py-20 overflow-hidden">
        {/* Fondo con pattern SVG */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.3'%3E%3Cpath d='m20 20 20-20v20z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-logo font-bold mb-6 bg-gradient-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent">
            ¡Hablemos de fragancias!
          </h1>
          <p className="text-lg md:text-xl text-[#BDC3C7] max-w-3xl mx-auto mb-8 leading-relaxed">
            ¿Dudas? ¿Recomendaciones? ¿Solo quieres platicar de perfumes? Estoy aquí para ayudarte. Me encanta conectar con gente que comparte mi pasión por los aromas.
          </p>
        </div>
      </section>

      {/* Información de Contacto Principal - TEXTOS MÁS AMIGABLES */}
      <section
        ref={infoAnim.ref}
        className={`py-16 bg-white transition-all duration-700 ${infoAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Instagram - Principal */}
            <div className="text-center section-card p-6 bg-gradient-to-br from-[#F9F9F9] to-white rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-[#D4AF37]/20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <InstagramIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Instagram</h3>
              <p className="text-[#BDC3C7] mb-4">¡Mi canal favorito!</p>
              <Button
                as="a"
                href="https://www.instagram.com/aromaselecto.mx/"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="px-6 py-2 font-medium inline-block"
              >
                @aromaselecto.mx
              </Button>
              <p className="text-sm text-[#BDC3C7] mt-3">Respondo súper rápido aquí</p>
            </div>
            
            {/* WhatsApp */}
            <div className="text-center section-card p-6 bg-gradient-to-br from-[#F9F9F9] to-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">WhatsApp</h3>
              <p className="text-[#BDC3C7] mb-4">Para platicar directo</p>
              <Button
                as="a"
                href="https://wa.me/527208784641?text=¡Hola! Vengo de tu página web, ¿me ayudas con algo sobre fragancias?"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="px-6 py-2 font-medium inline-block"
              >
                720 878 4641
              </Button>
              <p className="text-sm text-[#BDC3C7] mt-3">Mejor para dudas específicas</p>
            </div>
            
            {/* Email */}
            <div className="text-center p-6 section-card bg-gradient-to-br from-[#F9F9F9] to-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <MailIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Email</h3>
              <p className="text-[#BDC3C7] mb-4">Si prefieres escribir más</p>
              <Button
                as="a"
                href="mailto:aromaselecto.mx@gmail.com"
                variant="primary"
                className="px-6 py-2 font-medium inline-block text-sm"
              >
                aromaselecto.mx@gmail.com
              </Button>
              <p className="text-sm text-[#BDC3C7] mt-3">Te respondo en máximo 24 horas</p>
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
            <MailIcon className="h-10 w-10 text-[#D4AF37] mr-4 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-bold text-[#2C3E50] mb-1">Dato Curioso</h4>
              <p className="text-gray-700">¿Sabías que en la antigüedad, las cartas importantes se perfumaban para transmitir emociones y dejar una impresión memorable? ¡Hoy puedes dejar huella con tu mensaje y tu fragancia!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Horarios y Servicios - TEXTOS MÁS AMIGABLES */}
      <section
        ref={horariosAnim.ref}
        className={`py-16 bg-[#F9F9F9] transition-all duration-700 ${horariosAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>¿Cuándo estoy disponible?</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <ClockIcon className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Atención</h3>
              <p className="text-[#BDC3C7] text-sm">Lunes a Viernes</p>
              <p className="text-gray-900 font-medium">9:00 AM - 7:00 PM</p>
              <p className="text-xs text-[#D4AF37] mt-2">¡Respondo súper rápido!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <CalendarIcon className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Consultas</h3>
              <p className="text-[#BDC3C7] text-sm">Miércoles y Viernes</p>
              <p className="text-gray-900 font-medium">Asesoría personalizada</p>
              <p className="text-xs text-[#D4AF37] mt-2">Para elegir tu perfume ideal</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <TruckIcon className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Entregas Locales</h3>
              <p className="text-[#BDC3C7] text-sm">Zonas cercanas: 12:00 AM - 6:00 PM</p>
              <p className="text-[#BDC3C7] text-sm">Zonas lejanas: Antes de las 5:00 PM</p>
              <p className="text-xs text-[#D4AF37] mt-2">¡Mismo día si confirmas temprano!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MapPinIcon className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Mi ubicación</h3>
              <p className="text-[#BDC3C7] text-sm">Gutiérrez Zamora</p>
              <p className="text-gray-900 font-medium">Veracruz, México</p>
              <p className="text-xs text-[#D4AF37] mt-2">¡Entregas en persona disponibles!</p>
            </div>
          </div>
        </div>
      </section>

            {/* Preguntas frecuentes - ACORDEÓN */}
      <section
        ref={faqAnim.ref}
        className={`py-16 bg-white transition-all duration-700 ${faqAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionTitle>Preguntas que me hacen seguido</SectionTitle>
            <p className="text-[#2C3E50] max-w-2xl mx-auto">
              Las dudas más comunes sobre pedidos y fragancias, resueltas de forma clara y directa
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
                  <span className="font-semibold text-gray-900">¿Cuánto se tarda en llegar mi pedido?</span>
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
                    Entre <strong className="text-[#D4AF37]">4-8 días hábiles</strong> en total (yo lo preparo + el envío). ¡Te voy avisando en cada paso del camino! Si vives cerca, podemos hacer entrega personal al día siguiente.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">¿Los decants son originales?</span>
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
                    <strong className="text-[#D4AF37]">¡Obvio que sí!</strong> Todos vienen de perfumes 100% originales. Nada de imitaciones aquí. Te aseguro la misma calidad del frasco original, solo en una presentación más accesible.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">¿Me puedes recomendar algo?</span>
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
                    <strong className="text-[#D4AF37]">¡Claro que sí!</strong> Escríbeme por Instagram o WhatsApp contándome qué te gusta, para qué ocasión lo quieres, y te ayudo a elegir tu próximo favorito. Me encanta hacer recomendaciones personalizadas.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">¿Haces entregas en persona?</span>
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
                    Sí, en <strong className="text-[#D4AF37]">Gutiérrez Zamora y zonas cercanas</strong>. Es mi parte favorita porque puedo platicar contigo del perfume en persona y asegurarme de que te encante. ¡Incluso te puedo contar la historia detrás de la fragancia!
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 5 - Bonus con estilo especial */}
            <div className="bg-gradient-to-r from-[#D4AF37]/10 to-yellow-50 rounded-xl shadow-lg border border-[#D4AF37]/20 overflow-hidden">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#D4AF37]/5 transition-colors group"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#D4AF37]/30 transition-colors">
                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">💡 ¿Qué método de pago aceptas?</span>
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
                    <strong className="text-[#D4AF37]">Transferencia bancaria o efectivo</strong> en entregas personales. Es súper fácil: confirmas tu pedido, haces la transferencia, y yo lo preparo al instante. ¡Todo transparente y seguro! 💳
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Información importante sobre pedidos - MÁS AMIGABLE */}
      <section
        ref={pedidosAnim.ref}
        className={`py-16 bg-[#F9F9F9] transition-all duration-700 ${pedidosAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Todo lo que necesitas saber sobre tus pedidos</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D4AF37]">
              <div className="flex items-center mb-4">
                <AlertCircleIcon className="h-6 w-6 text-[#D4AF37] mr-3" />
                <h3 className="font-semibold text-gray-900">Tiempo de preparación</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Tus decants tardan entre <strong className="text-[#D4AF37]">1-3 días</strong> en estar listos. 
                ¡Los preparo con mucho cuidado para que lleguen perfectos!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D4AF37]">
              <div className="flex items-center mb-4">
                <TruckIcon className="h-6 w-6 text-[#D4AF37] mr-3" />
                <h3 className="font-semibold text-gray-900">Entrega personal</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Si vives en la zona, normalmente entrego <strong className="text-[#D4AF37]">al día siguiente</strong> 
                de confirmar tu pedido. ¡Hasta podemos platicar del perfume en persona!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D4AF37]">
              <div className="flex items-center mb-4">
                <ClockIcon className="h-6 w-6 text-[#D4AF37] mr-3" />
                <h3 className="font-semibold text-gray-900">Envíos nacionales</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Preparación + envío = <strong className="text-[#D4AF37]">4-8 días hábiles</strong> en total. 
                Te voy avisando en cada paso del camino.
              </p>
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
          <SectionTitle>¿Ya tienes ganas de platicar de fragancias?</SectionTitle>
          <p className="text-xl text-[#BDC3C7] mb-8">
            Ve mi catálogo, escoge lo que te guste, y si tienes dudas... ¡escríbeme! Me fascina ayudar a encontrar el aroma perfecto. <strong className="text-[#D4AF37]">¿Prefieres chat rápido? ¡Búscame en Instagram!</strong>
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
              Escríbeme en Insta
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

export default ContactPage;