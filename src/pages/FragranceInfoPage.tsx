import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import { useState } from 'react';

const FragranceInfoPage = () => {
  // Animaciones para secciones principales
  const queEsAnim = useScrollFadeIn();
  const tiposAnim = useScrollFadeIn();
  const notasAnim = useScrollFadeIn();
  const elegirAnim = useScrollFadeIn();
  const cuidadosAnim = useScrollFadeIn();
  const faqAnim = useScrollFadeIn();
  const ctaAnim = useScrollFadeIn();

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white pt-16">
      {/* Hero/Encabezado */}
      <section className="relative bg-gradient-to-br from-[#2C3E50] via-[#34495e] to-[#2C3E50] text-white py-20 overflow-hidden">
        {/* Fondo con pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.3'%3E%3Cpath d='m20 20 20-20v20z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h1 className="text-4xl md:text-6xl font-logo font-bold mb-6 bg-gradient-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent">
            Guía de Aromas: Desbloquea tu próximo nivel
          </h1>
          <p className="text-lg md:text-xl text-[#BDC3C7] max-w-3xl mx-auto mb-8 leading-relaxed">
            ¿Cansado de no entender los términos de los perfumes? Bienvenido a la guía definitiva para encontrar tu aroma ideal. Aquí te explico todo, de forma clara y sin rollos.
          </p>
        </div>
      </section>

      {/* ¿Qué es una fragancia? */}
      <section 
        ref={queEsAnim.ref}
        className={`py-16 bg-gradient-to-r from-gray-50 to-white transition-all duration-700 ${queEsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionTitle>El secreto detrás de un gran aroma</SectionTitle>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Arte + Ciencia</h3>
              <p className="text-gray-600 text-sm">Una mezcla perfecta de creatividad y química que crea magia olfativa.</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tu Identidad</h3>
              <p className="text-gray-600 text-sm">Expresa quién eres sin decir una palabra. Tu aroma habla por ti.</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Emociones</h3>
              <p className="text-gray-600 text-sm">Evoca recuerdos, crea momentos y te hace sentir increíble.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-base md:text-lg text-[#2C3E50] max-w-3xl mx-auto leading-relaxed">
              Piénsalo así: un perfume es una mezcla de arte y ciencia. Son diferentes ingredientes, o <strong className="text-[#D4AF37]">notas</strong>, que se combinan para crear una historia que se cuenta en tu piel. Más que un simple olor, es una herramienta poderosa para expresar quién eres, evocar un recuerdo o simplemente sentirte increíble.
            </p>
          </div>
        </div>
      </section>

      {/* Tipos de fragancias */}
      <section
        ref={tiposAnim.ref}
        className={`py-16 bg-white transition-all duration-700 ${tiposAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionTitle>Eau de Parfum vs. Eau de Toilette</SectionTitle>
            <p className="mb-8 text-[#2C3E50]">
              ¿No sabes qué significan esas siglas? En resumen, se refieren a qué tan concentrado (y duradero) es el aroma. Aquí está la clave para elegir el que mejor se adapte a tu día a día:
            </p>
          </div>
          
          {/* Cards en lugar de tabla para mejor diseño */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Extracto */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-purple-800 text-sm">Extracto</h3>
              </div>
              <p className="text-purple-700 text-sm font-medium mb-2">La versión más intensa. Dura horas y horas.</p>
              <p className="text-purple-600 text-xs">Para una noche especial o cuando quieres que tu aroma destaque todo el día.</p>
            </div>

            {/* Card 2 - EdP */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-bold text-blue-800 text-sm">Eua de Parfum (EdP)</h3>
              </div>
              <p className="text-blue-700 text-sm font-medium mb-2">Fuerte y duradero. Tu mejor opción para casi todo.</p>
              <p className="text-blue-600 text-xs">Ideal para el uso diario, ir a clases o a una cita.</p>
            </div>

            {/* Card 3 - EdT */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-bold text-green-800 text-sm">Eau de Toilette (EdT)</h3>
              </div>
              <p className="text-green-700 text-sm font-medium mb-2">Más ligero y fresco. Genial para no abrumar.</p>
              <p className="text-green-600 text-xs">Perfecto para los días de calor o cuando buscas algo sutil.</p>
            </div>

            {/* Card 4 - EdC */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200 hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-yellow-800 text-sm">Eau de Cologne (EdC)</h3>
              </div>
              <p className="text-yellow-700 text-sm font-medium mb-2">Súper fresco. Te da un boost instantáneo.</p>
              <p className="text-yellow-600 text-xs">Para después de la ducha o en un día súper caluroso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Notas olfativas */}
      <section
        ref={notasAnim.ref}
        className={`py-16 bg-gradient-to-r from-gray-50 to-white transition-all duration-700 ${notasAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionTitle>Notas: El viaje de tu perfume</SectionTitle>
            <p className="mb-8 text-[#2C3E50] max-w-3xl mx-auto">
              Cada fragancia es una pirámide de olores que se revelan con el tiempo. Así es como la magia sucede:
            </p>
          </div>
          
          {/* PIRÁMIDE VISUAL */}
          <div className="relative max-w-3xl mx-auto">
            {/* Líneas de conexión decorativas */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-px h-full bg-gradient-to-b from-orange-400 via-pink-400 to-purple-600"></div>
            </div>
            
            {/* Nivel 1 - SALIDA */}
            <div className="relative mb-8">
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 border-2 border-orange-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-orange-800">Notas de Salida</h3>
                    <span className="text-orange-600 text-sm font-medium">(El inicio - 5-15 minutos)</span>
                  </div>
                </div>
                <p className="text-orange-700 mb-3">
                  <strong>La primera impresión.</strong> Son las más volátiles y las que percibes al instante.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-200 text-orange-800 text-xs rounded-full">Cítricos</span>
                  <span className="px-3 py-1 bg-orange-200 text-orange-800 text-xs rounded-full">Frutas frescas</span>
                  <span className="px-3 py-1 bg-orange-200 text-orange-800 text-xs rounded-full">Hierbas</span>
                  <span className="px-3 py-1 bg-orange-200 text-orange-800 text-xs rounded-full">Aldeídos</span>
                </div>
              </div>
            </div>

            {/* Nivel 2 - CORAZÓN */}
            <div className="relative mb-8 ml-8 mr-8">
              <div className="bg-gradient-to-r from-pink-100 to-rose-100 border-2 border-pink-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pink-800">Notas de Corazón</h3>
                    <span className="text-pink-600 text-sm font-medium">(La personalidad - 2-4 horas)</span>
                  </div>
                </div>
                <p className="text-pink-700 mb-3">
                  <strong>El alma del perfume.</strong> Aparecen cuando las de salida se desvanecen. Definen el carácter.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-pink-200 text-pink-800 text-xs rounded-full">Florales</span>
                  <span className="px-3 py-1 bg-pink-200 text-pink-800 text-xs rounded-full">Especias</span>
                  <span className="px-3 py-1 bg-pink-200 text-pink-800 text-xs rounded-full">Frutas</span>
                  <span className="px-3 py-1 bg-pink-200 text-pink-800 text-xs rounded-full">Hierbas aromáticas</span>
                </div>
              </div>
            </div>

            {/* Nivel 3 - FONDO */}
            <div className="relative ml-16 mr-16">
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 border-2 border-purple-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-800">Notas de Fondo</h3>
                    <span className="text-purple-600 text-sm font-medium">(La memoria - 6+ horas)</span>
                  </div>
                </div>
                <p className="text-purple-700 mb-3">
                  <strong>El final que perdura.</strong> Las moléculas más pesadas que se quedan contigo todo el día.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-200 text-purple-800 text-xs rounded-full">Maderas</span>
                  <span className="px-3 py-1 bg-purple-200 text-purple-800 text-xs rounded-full">Vainilla</span>
                  <span className="px-3 py-1 bg-purple-200 text-purple-800 text-xs rounded-full">Ámbar</span>
                  <span className="px-3 py-1 bg-purple-200 text-purple-800 text-xs rounded-full">Almizcle</span>
                  <span className="px-3 py-1 bg-purple-200 text-purple-800 text-xs rounded-full">Resinas</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dato curioso al final */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full">
              <svg className="w-5 h-5 text-[#D4AF37] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[#D4AF37] font-medium text-sm">
                💡 Dato curioso: Tu perfume cuenta una historia completa en tu piel, desde el "hola" hasta el "me quedo contigo"
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo elegir la fragancia perfecta */}
      <section
        ref={elegirAnim.ref}
        className={`py-16 bg-white transition-all duration-700 ${elegirAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionTitle>Tips para encontrar tu aroma ideal</SectionTitle>
            <p className="text-[#2C3E50] max-w-2xl mx-auto">
              Estos consejos van a cambiar tu forma de elegir perfumes. ¡Créeme, son oro puro!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tip 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-400 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-800 text-sm mb-1">No te guíes por la botella</h3>
                  <span className="text-blue-600 text-xs font-medium">Regla #1</span>
                </div>
              </div>
              <p className="text-blue-700 text-sm">
                Lo más importante es cómo huele <strong className="text-[#D4AF37]">en tu piel</strong>. Una botella bonita no garantiza un buen aroma para ti.
              </p>
            </div>

            {/* Tip 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-l-4 border-green-400 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-green-800 text-sm mb-1">Tómate tu tiempo</h3>
                  <span className="text-green-600 text-xs font-medium">Paciencia</span>
                </div>
              </div>
              <p className="text-green-700 text-sm">
                Espera <strong>15-30 minutos</strong> para sentir las notas de corazón. Los perfumes evolucionan, ¡dale tiempo a la magia!
              </p>
            </div>

            {/* Tip 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-l-4 border-purple-400 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-purple-800 text-sm mb-1">Menos es más</h3>
                  <span className="text-purple-600 text-xs font-medium">Límite inteligente</span>
                </div>
              </div>
              <p className="text-purple-700 text-sm">
                No pruebes más de <strong>3 fragancias</strong> seguidas. Tu nariz se satura y ya no puedes distinguir bien los aromas.
              </p>
            </div>

            {/* Tip 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-l-4 border-orange-400 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-orange-800 text-sm mb-1">Piensa en tu vibe</h3>
                  <span className="text-orange-600 text-xs font-medium">Mood matching</span>
                </div>
              </div>
              <p className="text-orange-700 text-sm">
                ¿Qué ambiente quieres crear? <strong>Fresco para el día</strong>, intenso para la noche. Tu perfume debe ir con tu energía.
              </p>
            </div>

            {/* Tip 5 */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border-l-4 border-pink-400 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-pink-800 text-sm mb-1">Confía en ti</h3>
                  <span className="text-pink-600 text-xs font-medium">La regla de oro</span>
                </div>
              </div>
              <p className="text-pink-700 text-sm">
                Si te hace sentir <strong>bien, seguro y feliz</strong>, es el correcto. ¡Fin de la historia! Tu instinto no miente.
              </p>
            </div>

            {/* Tip Bonus */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border-l-4 border-yellow-400 hover:shadow-lg transition-all duration-300 group md:col-span-2 lg:col-span-1">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-yellow-800 text-sm mb-1">Tip bonus</h3>
                  <span className="text-yellow-600 text-xs font-medium">Pro level</span>
                </div>
              </div>
              <p className="text-yellow-700 text-sm">
                Lleva granos de <strong>café</strong> cuando pruebes perfumes. Huélelos entre fragancias para "resetear" tu nariz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cuidados y almacenamiento */}
      <section
        ref={cuidadosAnim.ref}
        className={`py-16 bg-gradient-to-r from-gray-50 to-white transition-all duration-700 ${cuidadosAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#D4AF37]/20 to-yellow-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <SectionTitle>Haz que tu perfume dure más</SectionTitle>
            <p className="text-[#2C3E50] max-w-3xl mx-auto mb-8">
              Estos consejos simples pueden extender la vida de tus fragancias por años. ¡Tu billetera te lo va a agradecer!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Tip 1 - Almacenamiento */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="font-bold text-blue-800 text-lg">Lugar ideal</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong className="text-[#D4AF37]">Guárdalos en un lugar fresco y oscuro:</strong> No los dejes en el baño ni expuestos al sol.
              </p>
              <div className="text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">
                💡 <strong>Pro tip:</strong> Un cajón o clóset es perfecto. Evita cambios de temperatura.
              </div>
            </div>

            {/* Tip 2 - Cerrar tapa */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-green-800 text-lg">Sella bien</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong className="text-[#D4AF37]">Cierra la tapa:</strong> Es un paso sencillo que evita que se evapore y se eche a perder.
              </p>
              <div className="text-sm text-green-600 bg-green-50 p-3 rounded-lg">
                💡 <strong>Pro tip:</strong> Siempre presiona la tapa hasta escuchar el "click".
              </div>
            </div>

            {/* Tip 3 - No agitar */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-purple-800 text-lg">Manejo suave</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong className="text-[#D4AF37]">No los agites:</strong> Si lo haces, el aire puede oxidar la fórmula y cambiar el aroma.
              </p>
              <div className="text-sm text-purple-600 bg-purple-50 p-3 rounded-lg">
                💡 <strong>Pro tip:</strong> Trátalos como una joya preciosa, con delicadeza.
              </div>
            </div>
          </div>

          {/* Bonus tip centrado */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-[#D4AF37]/10 to-yellow-50 p-8 rounded-2xl border-2 border-[#D4AF37]/20 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#D4AF37] rounded-full mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3">Bonus: Cuándo duran más</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Un perfume bien cuidado puede durar 3-5 años fácilmente.</strong> Si sigues estos consejos, tus fragancias favoritas te acompañarán por mucho tiempo. ¡La inversión vale la pena!
              </p>
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

      {/* CTA final */}
      {/* CTA final */}
      <section
        ref={ctaAnim.ref}
        className={`py-16 bg-gradient-to-r from-gray-50 to-white transition-all duration-700 ${ctaAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#D4AF37]/20 to-yellow-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-logo font-bold mb-6 text-gray-900">
              ¿Listo para encontrar tu próximo aroma favorito?
            </h2>
            <p className="text-lg text-[#2C3E50] leading-relaxed">
              Ahora que eres un experto, es hora de poner a prueba tus conocimientos. ¡Te prometo que valdrá la pena!
            </p>
          </div>

          {/* Botones principales */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              as="link" 
              to="/productos" 
              variant="primary"
              className="px-8 py-3 text-lg font-semibold"
            >
              Explora mi colección
            </Button>
            <Button 
              as="link" 
              to="/sobre-mi" 
              variant="outline"
              className="px-8 py-3 text-lg font-semibold"
            >
              Conóceme mejor
            </Button>
          </div>

          {/* Separador */}
          <div className="flex items-center my-8">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 font-medium">o sígueme en</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Botón de TikTok */}
          <div className="flex justify-center">
            <a
              href="https://www.tiktok.com/@aromaselectomx" // 👈 CAMBIA ESTO POR TU USUARIO
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {/* Ícono de TikTok */}
              <svg 
                className="w-6 h-6 text-white group-hover:scale-110 transition-transform" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
              <span className="font-semibold">Sígueme en TikTok</span>
              <svg className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Texto adicional */}
          <p className="mt-4 text-sm text-gray-600">
            Consejos rápidos de fragancias, reviews y mucho más
          </p>
        </div>
      </section>
    </div>
  );
}

export default FragranceInfoPage;