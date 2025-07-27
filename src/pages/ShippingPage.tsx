import { TruckIcon, ShieldCheckIcon, ClockIcon, AlertCircleIcon, CheckCircleIcon, XCircleIcon, MailIcon, PhoneIcon, InstagramIcon, GiftIcon, MapPinIcon } from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';

const ShippingPage = () => {
  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <section className="relative bg-[#2C3E50] text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Envíos seguros" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/80 to-[#2C3E50]/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-logo font-bold mb-6">
            Envíos y <span className="text-[#D4AF37]">Devoluciones</span>
          </h1>
          <p className="text-xl text-[#BDC3C7] max-w-3xl mx-auto">
            Tu fragancia favorita llega segura a tu puerta. Aquí puedes consultar las políticas de envío, tiempos de entrega y garantías de satisfacción.
          </p>
        </div>
      </section>

      {/* Tipos de Envío */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Opciones de Envío</SectionTitle>
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
                <p><strong>Tiempo:</strong> Al día siguiente</p>
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
                <p><strong>Costo:</strong> $149 MXN aprox.</p>
                <p><strong>Paquetería:</strong> Estafeta, DHL u otros</p>
                <p className="text-green-600 font-medium">Gratis en compras +$899</p>
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
                <p><strong>Costo:</strong> $189 MXN aprox.</p>
                <p><strong>Paquetería:</strong> Servicio premium</p>
                <p className="text-green-600 font-medium">50% de descuento en compras +$899</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios por Compra + Fun Fact */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Beneficios por Compra</SectionTitle>
          {/* Tarjetas de Beneficios */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <GiftIcon className="h-8 w-8 text-green-600 mr-4" />
                <h3 className="text-2xl font-semibold text-gray-900">Decant Gratis</h3>
              </div>
              <p className="text-[#BDC3C7] mb-3">En compras desde <strong className="text-gray-900">$600 MXN</strong></p>
              <p className="text-sm text-gray-600">
                Recibe un decant aleatorio de 5ml con valor de más de <strong className="text-gray-900">$150 MXN</strong> como regalo. ¡Una oportunidad perfecta 
                para descubrir nuevas fragancias!
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-[#D4AF37]">
              <div className="flex items-center mb-4">
                <TruckIcon className="h-8 w-8 text-[#D4AF37] mr-4" />
                <h3 className="text-2xl font-semibold text-gray-900">Envío Gratis Estándar</h3>
              </div>
              <p className="text-[#BDC3C7] mb-3">En compras desde <strong className="text-gray-900">$899 MXN</strong></p>
              <p className="text-sm text-gray-600">
                Tu pedido llega sin costo adicional a cualquier parte de México. 
                Ahorra y disfruta más fragancias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Envío */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Proceso de Envío</SectionTitle>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Confirmas tu Pedido</h3>
              <p className="text-[#BDC3C7] text-sm">
                Realizas tu compra y recibes confirmación inmediata
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2C3E50] rounded-full flex items-center justify-center mx-auto mb-4 text-[#D4AF37] font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Preparamos tu Decant</h3>
              <p className="text-[#BDC3C7] text-sm">
                1-3 días para preparar cuidadosamente tu fragancia
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Empaque Seguro</h3>
              <p className="text-[#BDC3C7] text-sm">
                Protección especial para que llegue perfecto
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2C3E50] rounded-full flex items-center justify-center mx-auto mb-4 text-[#D4AF37] font-bold text-xl">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">¡Disfruta!</h3>
              <p className="text-[#BDC3C7] text-sm">
                Tu fragancia llega lista para usar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Política de Devoluciones */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Política de Devoluciones</SectionTitle>
          {/* Plazo y Condiciones */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <ClockIcon className="h-6 w-6 text-[#D4AF37] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Periodo de Solicitud</h3>
              </div>
              <p className="text-[#BDC3C7] text-sm mb-3">
                Las solicitudes de reembolso o reposición deben realizarse dentro de los 
                <strong className="text-gray-900"> 5 días naturales</strong> posteriores a la entrega.
              </p>
              <p className="text-red-600 text-sm">
                Fuera de este plazo, no será posible realizar cambios, reposiciones ni reembolsos.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <ShieldCheckIcon className="h-6 w-6 text-[#D4AF37] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Condiciones del Producto</h3>
              </div>
              <ul className="space-y-2 text-[#BDC3C7] text-sm">
                <li>• Sin uso, con sello de seguridad intacto</li>
                <li>• En su empaque original</li>
                <li>• Sin señales de manipulación</li>
                <li>• Evidencia fotográfica en 24 horas</li>
              </ul>
            </div>
          </div>

          {/* Casos Elegibles */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3" />
              Casos Elegibles para Reembolso o Reposición
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-medium text-gray-900 mb-2">Producto Dañado</h4>
                <p className="text-[#BDC3C7] text-sm">
                  El decant llegó completamente roto o con un derrame superior al 10% del contenido.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium text-gray-900 mb-2">Error en el Pedido</h4>
                <p className="text-[#BDC3C7] text-sm">
                  Recibiste un producto distinto al que solicitaste.
                </p>
              </div>
            </div>
          </div>

          {/* Productos No Elegibles */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
              <XCircleIcon className="h-6 w-6 text-red-600 mr-3" />
              Productos NO Elegibles para Devolución
            </h3>
            <ul className="space-y-2 text-red-700 text-sm">
              <li>• Decants en promoción, liquidación o remate</li>
              <li>• Artículos con descuento por temporalidad (Hot Sale, Buen Fin, etc.)</li>
              <li>• Productos abiertos, usados o con señales de manipulación</li>
              <li>• Devoluciones por preferencias personales (no gustó el aroma)</li>
            </ul>
          </div>

          {/* Procedimiento */}
          <div className="bg-gradient-to-br from-[#F9F9F9] to-white rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Procedimiento para Solicitar Reposición o Reembolso
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 min-w-8 min-h-8 aspect-square bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Contacto Inicial</h4>
                  <p className="text-[#BDC3C7] text-sm">
                    Escribe al correo aromaselecto.mx@gmail.com o WhatsApp 782 318 5711
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 min-w-8 min-h-8 aspect-square bg-[#2C3E50] rounded-full flex items-center justify-center text-[#D4AF37] font-bold text-sm mr-4 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Información Requerida</h4>
                  <p className="text-[#BDC3C7] text-sm">
                    Incluye número de pedido, fotos del producto y explicación del problema
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 min-w-8 min-h-8 aspect-square bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Respuesta</h4>
                  <p className="text-[#BDC3C7] text-sm">
                    Recibirás instrucciones en un plazo de 2 días hábiles
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 min-w-8 min-h-8 aspect-square bg-[#2C3E50] rounded-full flex items-center justify-center text-[#D4AF37] font-bold text-sm mr-4 mt-1">
                  4
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Procesamiento</h4>
                  <p className="text-[#BDC3C7] text-sm">
                    Reembolso o reposición en 5-7 días hábiles una vez validada la solicitud
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto para Devoluciones - DISEÑO MEJORADO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Contacto para Devoluciones</SectionTitle>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Instagram - Principal */}
            <div className="text-center section-card p-6 bg-gradient-to-br from-[#F9F9F9] to-white rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-[#D4AF37]/20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <InstagramIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Instagram</h3>
              <p className="text-[#BDC3C7] mb-4">¡Nuestro canal principal!</p>
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
              <p className="text-sm text-[#BDC3C7] mt-3">Respuesta en minutos</p>
            </div>

            {/* Email */}
            <div className="text-center p-6 section-card bg-gradient-to-br from-[#F9F9F9] to-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <MailIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Email</h3>
              <p className="text-[#BDC3C7] mb-4">Consultas formales</p>
              <Button
                as="a"
                href="mailto:aromaselecto.mx@gmail.com"
                variant="primary"
                className="px-6 py-2 font-medium inline-block text-sm"
              >
                aromaselecto.mx@gmail.com
              </Button>
              <p className="text-sm text-[#BDC3C7] mt-3">Respuesta en 24 horas</p>
            </div>

            {/* WhatsApp */}
            <div className="text-center section-card p-6 bg-gradient-to-br from-[#F9F9F9] to-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">WhatsApp</h3>
              <p className="text-[#BDC3C7] mb-4">Contacto directo</p>
              <Button
                as="a"
                href="https://wa.me/527823185711"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="px-6 py-2 font-medium inline-block"
              >
                782 318 5711
              </Button>
              <p className="text-sm text-[#BDC3C7] mt-3">Solo consultas urgentes</p>
            </div>

          </div>
        </div>
      </section>
      

      {/* Nota Importante */}
      <section className="py-8 bg-[#F9F9F9] border-t border-[#D4AF37] border-opacity-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-center mb-3">
              <AlertCircleIcon className="h-6 w-6 text-yellow-600 mr-3" />
              <h3 className="font-semibold text-yellow-800">Nota Importante</h3>
            </div>
            <p className="text-yellow-700 text-sm">
              Esta política puede ser actualizada sin previo aviso. Te recomendamos consultarla 
              antes de realizar tu compra. Los costos de envío son aproximados y se calculan 
              según la ubicación exacta.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Mejorado + Mini FAQ */}
      <section className="py-16 bg-[#F9F9F9] border-t border-[#D4AF37] border-opacity-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle>¿Tienes Dudas Sobre Envíos?</SectionTitle>
          <p className="text-xl text-[#BDC3C7] mb-8">
            ¡Estoy aquí para ayudarte! Consulta las preguntas frecuentes o contáctame directamente por el canal que prefieras.
          </p>
          {/* Mini FAQ */}
          <div className="mb-10 text-left">
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[#D4AF37] mb-4">
              <h4 className="font-semibold text-gray-900 mb-1">¿Cuánto tarda en llegar mi pedido?</h4>
              <p className="text-[#BDC3C7] text-sm">El tiempo de entrega estándar es de 3-5 días hábiles, pero puede variar según tu ubicación y la paquetería.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[#D4AF37] mb-4">
              <h4 className="font-semibold text-gray-900 mb-1">¿Puedo rastrear mi envío?</h4>
              <p className="text-[#BDC3C7] text-sm">Sí, recibirás un número de rastreo por correo o WhatsApp una vez que tu pedido sea enviado.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-[#D4AF37]">
              <h4 className="font-semibold text-gray-900 mb-1">¿Qué hago si mi paquete no llega?</h4>
              <p className="text-[#BDC3C7] text-sm">Contáctame por Instagram o WhatsApp y te ayudaré a resolverlo lo antes posible.</p>
            </div>
          </div>
          {/* CTA Buttons con colores de marca */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as="link"
              to="/contacto"
              variant="primary"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Contáctame
            </Button>
            <Button
              as="link"
              to='/fragrancias'
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              Ver Catálogo de Fragancias
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShippingPage;