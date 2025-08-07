import { useState } from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, FacebookIcon, MapPinIcon, MailIcon, PhoneIcon, GiftIcon, ChevronDownIcon, ChevronUpIcon, ClockIcon } from 'lucide-react';


type SectionKey = 'productos' | 'informacion' | 'contacto' | 'sorteo' | 'redes';

const Footer = () => {
  // Estados para controlar qué sección está desplegada en móvil
  const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>({
    productos: false,
    informacion: false,
    contacto: false,
    sorteo: false,
    redes: false
  });

  const toggleSection = (section: SectionKey) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="bg-[#2C3E50] text-white relative">
<div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">

  {/* Sorteo Especial - Acordeón en móvil */}
  <div className="mb-6">
    <div className="md:hidden">
      <button
        onClick={() => toggleSection('sorteo')}
        className="w-full flex justify-between items-center bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-lg border-2 border-[#D4AF37] text-white px-4 py-3 font-bold"
      >
        <span>🎉 ¡SORTEO ESPECIAL! 🎉</span>
        {openSections.sorteo ? (
          <ChevronUpIcon className="h-5 w-5 text-white" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-white" />
        )}
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${openSections.sorteo ? 'max-h-96 py-4' : 'max-h-0 py-0'}`}>
        <div className="p-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-lg border-2 border-[#D4AF37] text-center shadow-lg">
          <div className="flex items-center justify-center mb-3">
            <GiftIcon className="h-8 w-8 text-white mr-3 animate-pulse" />
            <h2 className="text-lg font-bold text-white">🎉 ¡SORTEO ESPECIAL! 🎉</h2>
            <GiftIcon className="h-8 w-8 text-white ml-3 animate-pulse" />
          </div>
          <p className="text-white text-base font-semibold mb-3">
            ¡Participa y gana decants GRATIS!
          </p>
          <div className="text-white text-xs mb-4 space-y-1">
            <p>✨ <strong>Ariana Grande Cloud</strong> • <strong>Dior Sauvage</strong> • <strong>Nautica Voyage</strong> ✨</p>
          </div>
          <a 
            href="https://forms.gle/hAnqLmPtJycug5U36" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-4 py-2 bg-white text-[#D4AF37] font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-sm"
          >
            <GiftIcon className="h-5 w-5 mr-2" />
            ¡PARTICIPAR AHORA!
          </a>
          <p className="text-white text-xs mt-3 opacity-90">
            📅 Sorteo válido hasta 25/08/2025 • 🚚 Entrega solo en Gtz. Zamora
          </p>
        </div>
      </div>
    </div>
    <div className="hidden md:block">
      <div className="p-6 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-lg border-2 border-[#D4AF37] text-center shadow-lg">
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
          📅 Sorteo válido hasta 25/08/2025 • 🚚 Entrega solo en Gtz. Zamora
        </p>
      </div>
    </div>
  </div>

    {/* Redes Sociales - Acordeón en móvil */}
    <div className="mb-10">
      <div className="md:hidden">
        <button
          aria-label="Mostrar redes sociales"
          onClick={() => toggleSection('redes')}
          className="w-full flex justify-between items-center bg-gradient-to-r from-[#2D3748] to-[#1A202C] rounded-lg border border-[#D4AF37] border-opacity-40 text-[#D4AF37] px-4 py-3 font-semibold"
        >
          <span>¡Sígueme en Redes Sociales!</span>
          {openSections.redes ? (
            <ChevronUpIcon className="h-5 w-5 text-[#D4AF37]" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 text-[#D4AF37]" />
          )}
        </button>
        <div className={`transition-all duration-300 overflow-hidden ${openSections.redes ? 'max-h-96 py-4' : 'max-h-0 py-0'}`}>
          <div className="p-4 bg-gradient-to-r from-[#2D3748] to-[#1A202C] rounded-lg border border-[#D4AF37] border-opacity-40 text-center border-b-2">
            <nav aria-label="Redes sociales">
              <div className="flex flex-col items-center space-y-4 mb-3">
                <a href="https://www.instagram.com/aromaselecto.mx/" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#BDC3C7] hover:text-[#D4AF37] transition-all duration-300 group px-4 py-2 rounded-lg hover:bg-[#1A202C]">
                  <InstagramIcon className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
                  <div className="text-center flex flex-col items-center">
                    <span className="block text-sm font-bold">Instagram</span>
                    <span className="block text-xs text-[#D4AF37]">@aromaselecto.mx</span>
                  </div>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61578601077711" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#BDC3C7] hover:text-[#D4AF37] transition-all duration-300 group px-4 py-2 rounded-lg hover:bg-[#1A202C]">
                  <FacebookIcon className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
                  <div className="text-center flex flex-col items-center">
                    <span className="block text-sm font-bold">Facebook</span>
                    <span className="block text-xs text-[#D4AF37]">Aroma Selecto MX</span>
                  </div>
                </a>
                {/* ✅ AGREGAR EL ENLACE COMPLETO DE TIKTOK */}
                <a href="https://www.tiktok.com/@aromaselectomx" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#BDC3C7] hover:text-[#D4AF37] transition-all duration-300 group px-4 py-2 rounded-lg hover:bg-[#1A202C]">
                  <svg 
                    className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                  <div className="text-center flex flex-col items-center">
                    <span className="block text-sm font-bold">TikTok</span>
                    <span className="block text-xs text-[#D4AF37]">@aromaselectomx</span>
                  </div>
                </a>
              </div>
            </nav>
            <p className="text-xs text-[#D4AF37] font-medium">Haz tu pedido por DM - ¡Te respondo rápido!</p>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="p-6 bg-gradient-to-r from-[#2D3748] to-[#1A202C] rounded-lg border border-[#D4AF37] border-opacity-40 text-center">
          <h3 className="font-semibold text-[#D4AF37] mb-2 text-lg">¡Sígueme en Redes Sociales!</h3>
          <nav aria-label="Redes sociales">
            <div className="flex justify-center space-x-6 mb-3">
              <a href="https://www.instagram.com/aromaselecto.mx/" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#BDC3C7] hover:text-[#D4AF37] transition-all duration-300 group px-4 py-2 rounded-lg hover:bg-[#1A202C]">
                  <InstagramIcon className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
                  <div className="text-center flex flex-col items-center">
                    <span className="block text-sm font-bold">Instagram</span>
                    <span className="block text-xs text-[#D4AF37]">@aromaselecto.mx</span>
                  </div>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61578601077711" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#BDC3C7] hover:text-[#D4AF37] transition-all duration-300 group px-4 py-2 rounded-lg hover:bg-[#1A202C]">
                  <FacebookIcon className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
                  <div className="text-center flex flex-col items-center">
                    <span className="block text-sm font-bold">Facebook</span>
                    <span className="block text-xs text-[#D4AF37]">Aroma Selecto MX</span>
                  </div>
                </a>
                {/* ✅ AGREGAR EL ÍCONO QUE FALTA EN DESKTOP */}
                <a href="https://www.tiktok.com/@aromaselectomx" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#BDC3C7] hover:text-[#D4AF37] transition-all duration-300 group px-4 py-2 rounded-lg hover:bg-[#1A202C]">
                  <svg 
                    className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.10z"/>
                  </svg>
                  <div className="text-center flex flex-col items-center">
                    <span className="block text-sm font-bold">TikTok</span>
                    <span className="block text-xs text-[#D4AF37]">@aromaselectomx</span>
                  </div>
                </a>
            </div>
          </nav>
          <p className="text-sm text-[#D4AF37] font-medium">Haz tu pedido por DM - ¡Te respondo rápido!</p>
        </div>
      </div>
    </div>

      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        {/* Brand Column */}
        <div className="relative pb-6 md:pb-0 border-b md:border-b-0 border-[#D4AF37]">
          <div className="flex items-center mb-4 justify-center">
            <img 
              src="/assets/images/logos/isologo_light.png" 
              alt="Aroma Selecto Logo" 
              className="h-20 w-auto mr-3 transition-transform duration-700 hover:rotate-90"
            />
            <h3 className="text-xl font-logo font-semibold text-[#D4AF37] tracking-widest">
              Aroma Selecto MX
            </h3>
          </div>
          <div className="space-y-3">
            <p className="text-[#BDC3C7] text-sm leading-relaxed text-center md:text-left">
              Aromas que hablan de ti y despiertan emociones únicas. Descubre fragancias exclusivas en formatos accesibles.
            </p>
            <p className="text-[#D4AF37] text-sm font-medium text-center md:text-left">
              Perfumes 100% originales en presentación decant.
            </p>
          </div>
          <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-[#D4AF37] opacity-30"></div>
        </div>
        
        {/* Products Column */}
        <div className="relative pb-6 md:pb-0 border-b md:border-b-0 border-[#D4AF37]">
          <button 
            aria-label="Mostrar productos"
            onClick={() => toggleSection('productos')}
            className="w-full flex justify-between items-center md:cursor-default"
          >
            <h3 className="font-semibold text-[#D4AF37] mb-4 md:mb-4 text-sm uppercase tracking-wider">
              Mis Productos
            </h3>
            <div className="md:hidden">
              {openSections.productos ? 
                <ChevronUpIcon className="h-4 w-4 text-[#D4AF37]" /> : 
                <ChevronDownIcon className="h-4 w-4 text-[#D4AF37]" />
              }
            </div>
          </button>
          <nav aria-label="Productos">
            <ul className={`space-y-3 text-sm transition-all duration-300 overflow-hidden ${
              openSections.productos ? 'max-h-48 md:max-h-none' : 'max-h-0 md:max-h-none'
            }`}>
              <li>
                <Link to="/productos?gender=Mujer" className="text-[#BDC3C7] hover:text-[#D4AF37] transition-colors hover:translate-x-1 transform duration-200 block">
                  Fragancias Femeninas
                </Link>
              </li>
              <li>
                <Link to="/productos?gender=Hombre" className="text-[#BDC3C7] hover:text-[#D4AF37] transition-colors hover:translate-x-1 transform duration-200 block">
                  Fragancias Masculinas
                </Link>
              </li>
              <li>
                <Link to="/productos?type=set" className="text-[#BDC3C7] hover:text-[#D4AF37] transition-colors hover:translate-x-1 transform duration-200 block">
                  Sets Especiales
                </Link>
              </li>
            </ul>
          </nav>
          <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-[#D4AF37] opacity-30"></div>
        </div>
        
        {/* Information Column */}
        <div className="relative pb-6 md:pb-0 border-b md:border-b-0 border-[#D4AF37]">
          <button 
            aria-label="Mostrar información"
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
          <nav aria-label="Información">
            <ul className={`space-y-3 text-sm transition-all duration-300 overflow-hidden ${
              openSections.informacion ? 'max-h-48 md:max-h-none' : 'max-h-0 md:max-h-none'}`}>
              <li>
                <Link to="/sobre-mi" className="text-[#BDC3C7] hover:text-[#D4AF37] transition-colors hover:translate-x-1 transform duration-200 block">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link to="/informacion-fragancias" className="text-[#BDC3C7] hover:text-[#D4AF37] transition-colors hover:translate-x-1 transform duration-200 block">
                  Sobre Fragancias
                </Link>
              </li>
              <li>
                <Link to="/envios-devoluciones" className="text-[#BDC3C7] hover:text-[#D4AF37] transition-colors hover:translate-x-1 transform duration-200 block">
                  Envíos y Devoluciones
                </Link>
              </li>
                <li>
                  <Link to="/terminos-condiciones" className="text-[#BDC3C7] hover:text-[#D4AF37] transition-colors hover:translate-x-1 transform duration-200 block">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link to="/privacidad" className="text-[#BDC3C7] hover:text-[#D4AF37] transition-colors hover:translate-x-1 transform duration-200 block">
                    Privacidad
                  </Link>
                </li>
            </ul>
          </nav>
          <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-[#D4AF37] opacity-30"></div>
        </div>
        
        {/* Contact Column */}
        <div className="relative">
          <button 
            aria-label="Mostrar contacto"
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
          <nav aria-label="Contacto">
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
                  href="https://wa.me/527208784641?text=¡Hola! Me interesa conocer más sobre sus productos." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-[#BDC3C7] hover:text-[#D4AF37] transition-colors group"
                >
                  <PhoneIcon className="h-4 w-4 mr-2 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                  720 878 4641 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center text-[#BDC3C7] mt-1">
                <ClockIcon className="h-4 w-4 mr-2 text-[#D4AF37]" />
                <time dateTime="09:00-18:00">Lun-Vier: 9:00 AM - 6:00 PM</time>
              </li>
            </ul>
          </nav>
        </div>
      </div>
        
      <div className="border-t border-[#D4AF37] border-opacity-30 mt-4 pt-4 text-center text-[#BDC3C7] text-sm">
        <p className="mb-2">
          © {new Date().getFullYear()} Aroma Selecto MX. Todos los derechos reservados.
        </p>
        <p>
          Desarrollado por <a href="https://github.com/VelVic" className="text-[#D4AF37] hover:underline font-medium">Victor V.</a>{/* , con asistencia de IA. */}
        </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;