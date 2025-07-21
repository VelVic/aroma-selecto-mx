import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, ClockIcon, MapPinIcon, InstagramIcon, CheckCircleIcon, TruckIcon, CalendarIcon, AlertCircleIcon } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'consulta',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí enviarías el formulario
    console.log('Formulario enviado:', formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({ name: '', email: '', subject: 'consulta', message: '' });
  };

  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <section className="relative bg-[#2C3E50] text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Contacto" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/80 to-[#2C3E50]/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-logo font-bold mb-6">
            ¿Tienes alguna <span className="text-[#D4AF37]">pregunta?</span>
          </h1>
          <p className="text-xl text-[#BDC3C7] max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos y descubre cómo podemos acercarte 
            a la fragancia perfecta que estás buscando.
          </p>
        </div>
      </section>

      {/* Información de Contacto Principal */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Instagram - Principal */}
            <div className="text-center p-6 bg-gradient-to-br from-[#F9F9F9] to-white rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-[#D4AF37]/20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <InstagramIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Instagram</h3>
              <p className="text-[#BDC3C7] mb-4">¡Nuestro canal principal!</p>
              <a 
                href="https://www.instagram.com/aromaselecto.mx/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2C3E50] text-[#D4AF37] px-6 py-2 rounded-lg font-medium hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B] hover:text-[#2C3E50] transition-all duration-300 inline-block"
              >
                @aromaselecto.mx
              </a>
              <p className="text-sm text-[#BDC3C7] mt-3">Respuesta en minutos</p>
            </div>

            {/* WhatsApp */}
            <div className="text-center p-6 bg-gradient-to-br from-[#F9F9F9] to-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">WhatsApp</h3>
              <p className="text-[#BDC3C7] mb-4">Contacto directo</p>
              <a 
                href="https://wa.me/527823185711" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2C3E50] text-[#D4AF37] px-6 py-2 rounded-lg font-medium hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B] hover:text-[#2C3E50] transition-all duration-300 inline-block"
              >
                782 318 5711
              </a>
              <p className="text-sm text-[#BDC3C7] mt-3">Solo consultas urgentes</p>
            </div>

            {/* Email */}
            <div className="text-center p-6 bg-gradient-to-br from-[#F9F9F9] to-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <MailIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Email</h3>
              <p className="text-[#BDC3C7] mb-4">Consultas formales</p>
              <a 
                href="mailto:aromaselecto.mx@gmail.com"
                className="bg-[#2C3E50] text-[#D4AF37] px-6 py-2 rounded-lg font-medium hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B] hover:text-[#2C3E50] transition-all duration-300 inline-block text-sm"
              >
                aromaselecto.mx@gmail.com
              </a>
              <p className="text-sm text-[#BDC3C7] mt-3">Respuesta en 24 horas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Horarios y Servicios */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-logo font-bold text-center text-gray-900 mb-12">
            Horarios y Servicios
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <ClockIcon className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Atención</h3>
              <p className="text-[#BDC3C7] text-sm">Lunes a Viernes</p>
              <p className="text-gray-900 font-medium">9:00 AM - 7:00 PM</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <CalendarIcon className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Consultas</h3>
              <p className="text-[#BDC3C7] text-sm">Miércoles y Viernes</p>
              <p className="text-gray-900 font-medium">Atención especializada</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <TruckIcon className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Entregas Locales</h3>
              <p className="text-[#BDC3C7] text-sm">Zonas cercanas: 2:00 PM - 8:00 PM</p>
              <p className="text-[#BDC3C7] text-sm">Zonas lejanas: desde 4:00 PM</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MapPinIcon className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Ubicación</h3>
              <p className="text-[#BDC3C7] text-sm">Gutiérrez Zamora</p>
              <p className="text-gray-900 font-medium">Veracruz, México</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-logo font-bold text-gray-900 mb-4">
              Envíanos un mensaje
            </h2>
            <p className="text-[#BDC3C7] text-lg">
              ¿Tienes alguna consulta específica? Completa el formulario y te responderemos pronto.
            </p>
          </div>

          {showSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3" />
              <p className="text-green-800">¡Mensaje enviado exitosamente! Te responderemos pronto.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-[#F9F9F9] p-8 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                Tipo de consulta *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-colors"
              >
                <option value="consulta">Consulta general</option>
                <option value="pedido">Información sobre pedidos</option>
                <option value="entrega">Entregas y envíos</option>
                <option value="producto">Consulta sobre productos</option>
                <option value="sugerencia">Sugerencia</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                Mensaje *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-colors resize-none"
                placeholder="Cuéntanos en qué podemos ayudarte..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#2C3E50] text-[#D4AF37] px-8 py-3 rounded-lg font-medium hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B] hover:text-[#2C3E50] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Información importante sobre pedidos */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-logo font-bold text-center text-gray-900 mb-12">
            Información importante sobre pedidos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D4AF37]">
              <div className="flex items-center mb-4">
                <AlertCircleIcon className="h-6 w-6 text-[#D4AF37] mr-3" />
                <h3 className="font-semibold text-gray-900">Tiempo de preparación</h3>
              </div>
              <p className="text-[#BDC3C7] text-sm">
                Los pedidos tardan entre <strong>1-3 días</strong> en ser preparados para envío o entrega personal.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D4AF37]">
              <div className="flex items-center mb-4">
                <TruckIcon className="h-6 w-6 text-[#D4AF37] mr-3" />
                <h3 className="font-semibold text-gray-900">Entrega personal</h3>
              </div>
              <p className="text-[#BDC3C7] text-sm">
                Las entregas personales normalmente se realizan <strong>al día siguiente</strong> de confirmar el pedido.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#D4AF37]">
              <div className="flex items-center mb-4">
                <ClockIcon className="h-6 w-6 text-[#D4AF37] mr-3" />
                <h3 className="font-semibold text-gray-900">Envíos nacionales</h3>
              </div>
              <p className="text-[#BDC3C7] text-sm">
                A los días de preparación se suman los <strong>3-5 días</strong> del servicio de paquetería.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F9F9F9] border-t border-[#D4AF37] border-opacity-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-logo font-bold mb-6 text-[#2C3E50]">
            ¿Prefieres contactarnos directamente?
          </h2>
          <p className="text-xl text-[#BDC3C7] mb-8">
            Síguenos en Instagram para ver nuestros productos más recientes y promociones exclusivas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.instagram.com/aromaselecto.mx/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2C3E50] text-[#D4AF37] px-8 py-3 rounded-lg font-medium hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B] hover:text-[#2C3E50] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              Ver en Instagram
            </a>
            <Link 
              to="/productos" 
              className="border-2 border-[#2C3E50] text-[#2C3E50] px-8 py-3 rounded-lg font-medium hover:bg-[#2C3E50] hover:text-[#D4AF37] transition-all duration-300 hover:scale-105"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Ver Catálogo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;