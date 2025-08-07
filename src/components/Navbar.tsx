import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon, UserIcon, MenuIcon, XIcon } from 'lucide-react';
import { useCart } from '../context/cartContext';
import Button from './Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { getCartCount } = useCart();

  const cartCount = getCartCount();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ✅ CONTROL MEJORADO DEL SCROLL - Solo aparece cerca del top
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Solo ejecutar si hay cambio significativo en el scroll
      if (Math.abs(currentScrollY - lastScrollY) < 15) {
        return;
      }

      // ✅ NUEVA LÓGICA: Solo visible en los primeros 300px de la página
      if (currentScrollY <= 300) {
        // Cerca del top - navbar visible
        setIsVisible(true);
      } else {
        // Más abajo de 300px - navbar oculto (forzar uso del botón "ir arriba")
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    // Throttle para mejor performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          controlNavbar();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Agregar el listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header 
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
        bg-white/80 backdrop-blur-lg border-b border-[#D4AF37]/10 shadow-lg
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group transition-all duration-300 relative">
              <div className="relative h-14 w-14 mr-3 flex-shrink-0">
                {/* Logo por defecto */}
                <img 
                  src="/assets/images/logos/isologo_dark.png"
                  alt="Aroma Selecto Logo"
                  className="absolute inset-0 h-14 w-14 transition-all duration-500 ease-in-out
                    opacity-100 group-hover:opacity-0
                    rotate-0 group-hover:rotate-90"
                />
                {/* Logo en hover */}
                <img 
                  src="/assets/images/logos/isologo_light.png"
                  alt="Aroma Selecto Logo Hover"
                  className="absolute inset-0 h-14 w-14 transition-all duration-500 ease-in-out
                    opacity-0 group-hover:opacity-100
                    rotate-[-90deg] group-hover:rotate-0"
                />
              </div>
              <span className="text-xl font-logo font-semibold text-[#2C3E50] group-hover:text-[#D4AF37] transition-colors tracking-widest">
                Aroma Selecto MX
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-900 hover:text-[#D4AF37] font-medium transition-all duration-300 relative group"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/productos" 
              className="text-gray-900 hover:text-[#D4AF37] font-medium transition-all duration-300 relative group"
            >
              Productos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/informacion-fragancias" 
              className="text-gray-900 hover:text-[#D4AF37] font-medium transition-all duration-300 relative group"
            >
              Aprender
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/contacto" 
              className="text-gray-900 hover:text-[#D4AF37] font-medium transition-all duration-300 relative group"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/carrito" 
              className="relative p-2 text-gray-900 hover:text-[#D4AF37] rounded-lg transition-all duration-300 group"
            >
              <div className="relative flex flex-col items-center">
                <ShoppingBagIcon className="h-6 w-6 group-hover:text-[#D4AF37] transition-colors duration-300" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </div>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-[#D4AF37] text-[#2C3E50] text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Link>
            <Link 
              to="/iniciar-sesion" 
              className="relative p-2 text-gray-900 hover:text-[#D4AF37] rounded-lg transition-all duration-300 group"
            >
              <div className="relative flex flex-col items-center">
                <UserIcon className="h-6 w-6 group-hover:text-[#D4AF37] transition-colors duration-300" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </div>
            </Link>
          </div>

          {/* Mobile actions + menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Link 
              to="/carrito"
              className="relative p-2 text-gray-900 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-all duration-300 group"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="relative flex flex-col items-center">
                <ShoppingBagIcon className="h-6 w-6 group-hover:text-[#D4AF37] transition-colors duration-300" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </div>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-[#D4AF37] text-[#2C3E50] text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-900 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-all duration-300"
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-white via-white to-[#F9F9F9] border-t border-[#D4AF37]/20 shadow-lg backdrop-blur-sm">
          <div className="px-4 py-6 space-y-4">
            <Link 
              to="/" 
              className="block text-[#2C3E50] hover:text-[#D4AF37] font-medium py-2 px-3 rounded-lg hover:bg-[#D4AF37]/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/productos" 
              className="block text-[#2C3E50] hover:text-[#D4AF37] font-medium py-2 px-3 rounded-lg hover:bg-[#D4AF37]/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Productos
            </Link>
            <Link 
              to="/sobre-mi" 
              className="block text-[#2C3E50] hover:text-[#D4AF37] font-medium py-2 px-3 rounded-lg hover:bg-[#D4AF37]/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Mí
            </Link>
            <Link 
              to="/contacto" 
              className="block text-[#2C3E50] hover:text-[#D4AF37] font-medium py-2 px-3 rounded-lg hover:bg-[#D4AF37]/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            
            {/* Mobile Actions */}
            <div className="flex space-x-3 pt-4 border-t border-[#D4AF37]/20">
              <Button
                to="/iniciar-sesion"
                as='link'
                variant='outline'
                className="flex items-center w-full justify-center"
                onClick={() => setIsMenuOpen(false)}>
                <UserIcon className="h-4 w-4 mr-2" />
                Iniciar sesión
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;