import { useState } from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, FacebookIcon, MapPinIcon, MailIcon, PhoneIcon, GiftIcon, ChevronDownIcon, ChevronUpIcon, ClockIcon } from 'lucide-react';

type SectionKey = 'productos' | 'informacion' | 'contacto';

const Footer = () => {
  // Estados para controlar qué sección está desplegada en móvil
  const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>({
    productos: false,
    informacion: false,
    contacto: false
  });

  const toggleSection = (section: SectionKey) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="bg-[#2C3E50] text-white"> {/* ✅ ÚNICO CAMBIO NECESARIO */}
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        
        {/* Barra de Sorteo - PERFECTO COMO ESTÁ */}
        <div className="mb-6 p-6 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-lg border-2 border-[#D4AF37] text-center shadow-lg">
          <div className="flex items-center justify-center mb-3">
            <GiftIcon className="h-8 w-8 text-white mr-3 animate-pulse" />
            <h2 className="text-xl font-bold text-white">🎉 ¡SORTEO ESPECIAL! 🎉</h2>
            <GiftIcon className="h-8 w-8 text-white ml-3 animate-pulse" />
          </div>
          <p className="text-white text-lg font-semibold mb-3">
            ¡Participa y gana decants GRATIS!
          </p>
          <div className="text-white text-sm mb-4 space-y-1">
            <p>✨ <strong>Ariana Grande Cloud</strong> • <strong>Dior Sauvage</strong> • <strong>Nautica Voyage</strong> ✨</p>
          </div>
          <a 
            href="https://forms.gle/hAnqLmPtJycug5U36" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 bg-white text-[#D4AF37] font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <GiftIcon className="h-5 w-5 mr-2" />
            ¡PARTICIPAR AHORA!
          </a>
          <p className="text-white text-xs mt-3 opacity-90">
            📅 Sorteo válido hasta 12/08/2025 • 🚚 Entrega solo en Gtz. Zamora
          </p>
        </div>

        {/* Barra de Redes Sociales - MANTENER GRADIENTE ORIGINAL ✅ */}
        <div className="mb-10 p-6 bg-gradient-to-r from-[#2D3748] to-[#1A202C] rounded-lg border border-[#D4AF37] border-opacity-40 text-center">
          <h3 className="font-semibold text-[#D4AF37] mb-2 text-lg">¡Síguenos en Redes Sociales!</h3>
          <div className="flex justify-center space-x-6 mb-3">
            <a href="https://www.instagram.com/aromaselecto.mx/" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#BDC3C7] hover:text-[#D4AF37] transition-all duration-300 group px-4 py-2 rounded-lg hover:bg-[#1A202C]">
              <InstagramIcon className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <span className="block text-sm font-medium">Instagram</span>
                <span className="block text-xs text-[#D4AF37]">@aromaselecto.mx</span>
              </div>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61578601077711" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#BDC3C7] hover:text-[#D4AF37] transition-all duration-300 group px-4 py-2 rounded-lg hover:bg-[#1A202C]">
              <FacebookIcon className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <span className="block text-sm font-medium">Facebook</span>
                <span className="block text-xs text-[#D4AF37]">Aroma Selecto</span>
              </div>
            </a>
          </div>
          <p className="text-sm text-[#D4AF37] font-medium">Haz tu pedido por DM - ¡Te respondemos rápido!</p>
        </div>

        {/* Footer Grid - PERFECTO COMO ESTÁ */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Brand Column - Siempre visible */}
          <div className="relative pb-6 md:pb-0 border-b md:border-b-0 border-[#D4AF37]">
            <div className="flex items-center mb-4">
              <img 
                src="/images/logo.png" 
                alt="Aroma Selecto Logo" 
                className="h-10 w-auto mr-3"
              />
              <h3 className="text-xl font-logo font-semibold text-[#D4AF37] tracking-widest">
                Aroma Selecto
              </h3>
            </div>
            <div className="space-y-3">
              <p className="text-[#BDC3C7] text-sm leading-relaxed">
                Aromas que hablan de ti y despiertan emociones únicas. Descubre esencias exclusivas en formatos accesibles.
              </p>
              <p className="text-[#D4AF37] text-sm font-medium">
                Perfumes 100% originales en presentación decant.
              </p>
            </div>
            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-[#D4AF37] opacity-30"></div>
          </div>
          
          {/* Products Column - Desplegable en móvil */}
          <div className="relative pb-6 md:pb-0 border-b md:border-b-0 border-[#D4AF37]">
            <button 
              onClick={() => toggleSection('productos')}
              className="w-full flex justify-between items-center md:cursor-default"
            >
              <h3 className="font-semibold text-[#D4AF37] mb-4 md:mb-4 text-sm uppercase tracking-wider">
                Productos
              </h3>
              <div className="md:hidden">
                {openSections.productos ? 
                  <ChevronUpIcon className="h-4 w-4 text-[#D4AF37]" /> : 
                  <ChevronDownIcon className="h-4 w-4 text-[#D4AF37]" />
                }
              </div>
            </button>
            
            <ul className={`space-y-3 text-sm transition-all duration-300 overflow-hidden ${
              openSections.productos ? 'max-h-48 md:max-h-none' : 'max-h-0 md:max-h-none'
            }`}>
              <li>
                <Link to="/productos?category=mujer" className="text-[#BDC3C7] hover:text-[#D4AF37] transition-colors hover:translate-x-1 transform duration-200 block">
                  Perfumes Femeninos
                </Link>
              </li>
              <li>
                <Link to="/productos?category=hombre" className="text-[#BDC3C7] hover:text-[#D4AF37] transition-colors hover:translate-x-1 transform duration-200 block">
                  Perfumes Masculinos
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-[#BDC3C7] hover:text-[#D4AF37] transition-colors hover:translate-x-1 transform duration-200 block">
                  Ediciones Limitadas
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-[#BDC3C7] hover:text-[#D4AF37] transition-colors hover:translate-x-1 transform duration-200 block">
                  Sets de Regalo
                </Link>
              </li>
            </ul>
            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-[#D4AF37] opacity-30"></div>
          </div>
          
          {/* Information Column - Desplegable en móvil */}
          <div className="relative pb-6 md:pb-0 border-b md:border-b-0 border-[#D4AF37]">
            <button 
              onClick={() => toggleSection('informacion')}
              className="w-full flex justify-between items-center md:cursor-default"
            >
              <h3 className="font-semibold text-[#D4AF37] mb-4 md:mb-4 text-sm uppercase tracking-wider">
                Información
              </h3>
              <div className="md:hidden">
                {openSections.informacion ? 
                  <ChevronUpIcon className="h-4 w-4 text-[#D4AF37]" /> : 
                  <ChevronDownIcon className="h-4 w-4 text-[#D4AF37]" />
                }
              </div>
            </button>
            
            <ul className={`space-y-3 text-sm transition-all duration-300 overflow-hidden ${
              openSections.informacion ? 'max-h-48 md:max-h-none' : 'max-h-0 md:max-h-none'
            }`}>
              <li>
                <Link to="#" className="text-[#BDC3C7] hover:text-[#D4AF37] transition-colors hover:translate-x-1 transform duration-200 block">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="#" className="text-[#BDC3C7] hover:text-[#D4AF37] transition-colors hover:translate-x-1 transform duration-200 block">
                  Envíos y Devoluciones
                </Link>
              </li>
              <li>
                <Link to="#" className="text-[#BDC3C7] hover:text-[#D4AF37] transition-colors hover:translate-x-1 transform duration-200 block">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to="#" className="text-[#BDC3C7] hover:text-[#D4AF37] transition-colors hover:translate-x-1 transform duration-200 block">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-[#D4AF37] opacity-30"></div>
          </div>
          
          {/* Contact Column - Desplegable en móvil */}
          <div className="relative">
            <button 
              onClick={() => toggleSection('contacto')}
              className="w-full flex justify-between items-center md:cursor-default"
            >
              <h3 className="font-semibold text-[#D4AF37] mb-4 md:mb-4 text-sm uppercase tracking-wider">
                Contacto
              </h3>
              <div className="md:hidden">
                {openSections.contacto ? 
                  <ChevronUpIcon className="h-4 w-4 text-[#D4AF37]" /> : 
                  <ChevronDownIcon className="h-4 w-4 text-[#D4AF37]" />
                }
              </div>
            </button>
            
            <ul className={`space-y-3 text-sm transition-all duration-300 overflow-hidden ${
              openSections.contacto ? 'max-h-48 md:max-h-none' : 'max-h-0 md:max-h-none'
            }`}>
              <li className="flex items-center text-[#BDC3C7]">
                <MapPinIcon className="h-4 w-4 mr-2 text-[#D4AF37]" />
                Gtz. Zamora, Papantla, Poza Rica.
              </li>
              <li className="flex items-center text-[#BDC3C7]">
                <MailIcon className="h-4 w-4 mr-2 text-[#D4AF37]" />
                aromaselecto.mx@gmail.com
              </li>
              <li>
                <a 
                  href="https://wa.me/527823185711?text=¡Hola! Me interesa conocer más sobre sus perfumes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-[#BDC3C7] hover:text-[#D4AF37] transition-colors group"
                >
                  <PhoneIcon className="h-4 w-4 mr-2 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                  +52 782 318 5711 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center text-[#BDC3C7] mt-1">
                <ClockIcon className="h-4 w-4 mr-2 text-[#D4AF37]" />
                Lun-Dom: 9:00 AM - 8:00 PM
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#D4AF37] border-opacity-30 mt-10 pt-8 text-center text-[#BDC3C7] text-sm">
          <p className="mb-2">
            © {new Date().getFullYear()} Aroma Selecto. Todos los derechos reservados.
          </p>
          <p>
            Desarrollado por <a href="https://github.com/VelVic" className="text-[#D4AF37] hover:underline font-medium">Victor Velediaz</a> con asistencia de IA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;