import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Leer el tipo desde la URL
  const typeParam = searchParams.get('type');
  const [isLogin, setIsLogin] = useState(typeParam !== 'register');
  const [showPassword, setShowPassword] = useState(false);

  const toggleForm = () => {
    const newType = isLogin ? 'register' : 'login';
    navigate(`/login?type=${newType}`);
    setIsLogin(!isLogin);
    // Scroll suave al cambiar de formulario
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Actualizar estado cuando cambie la URL
  useEffect(() => {
    const type = searchParams.get('type');
    setIsLogin(type !== 'register');
  }, [searchParams]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="section-white pt-8">
      <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <div>
            {/* ✅ TÍTULO CON PALETA AROMA SELECTO */}
            <h2 className="mt-6 text-center text-3xl font-logo font-bold text-[#2C3E50]">
              {isLogin ? 'Iniciar sesión' : 'Crear cuenta'}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}{' '}
              <button 
                onClick={toggleForm} 
                className="font-medium text-[#D4AF37] hover:text-[#B8860B] transition-colors"
              >
                {isLogin ? 'Regístrate' : 'Inicia sesión'}
              </button>
            </p>
          </div>

          <form className="mt-8 space-y-6">
            {!isLogin && (
              <div className="animate-fadeIn">
                <label htmlFor="name" className="block text-sm font-medium text-[#2C3E50]">
                  Nombre completo
                </label>
                <div className="mt-1">
                  <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    required 
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm" 
                    placeholder="Tu nombre completo" 
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#2C3E50]">
                Correo electrónico
              </label>
              <div className="mt-1">
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  autoComplete="email" 
                  required 
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm" 
                  placeholder="tu@ejemplo.com" 
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#2C3E50]">
                Contraseña
              </label>
              <div className="mt-1 relative">
                <input 
                  id="password" 
                  name="password" 
                  type={showPassword ? 'text' : 'password'} 
                  autoComplete={isLogin ? 'current-password' : 'new-password'} 
                  required 
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm pr-10" 
                  placeholder="********" 
                />
                <button 
                  type="button" 
                  className="absolute inset-y-0 right-0 pr-3 flex items-center" 
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5 text-gray-400 hover:text-[#D4AF37] transition-colors" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400 hover:text-[#D4AF37] transition-colors" />
                  )}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="animate-fadeIn">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#2C3E50]">
                  Confirmar contraseña
                </label>
                <div className="mt-1">
                  <input 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    type={showPassword ? 'text' : 'password'} 
                    required 
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm" 
                    placeholder="********" 
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input 
                    id="remember-me" 
                    name="remember-me" 
                    type="checkbox" 
                    className="h-4 w-4 text-[#D4AF37] focus:ring-[#D4AF37] border-gray-300 rounded" 
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Recordarme
                  </label>
                </div>
                <div className="text-sm">
                  <Link 
                    to="#" 
                    className="font-medium text-[#D4AF37] hover:text-[#B8860B] transition-colors"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>
            )}

            <div>
              {/* ✅ BOTÓN CON GRADIENTE AROMA SELECTO */}
              <button 
                type="submit" 
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#2C3E50] to-[#34495E] hover:from-[#D4AF37] hover:to-[#B8860B] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] shadow-sm hover:shadow-lg"
              >
                {isLogin ? 'Iniciar sesión' : 'Registrarse'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  O continúa con
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button 
                type="button" 
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-[#2C3E50] hover:bg-[#F9F9F9] hover:border-[#D4AF37] transition-all duration-300"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </button>

              <button 
                type="button" 
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-[#2C3E50] hover:bg-[#F9F9F9] hover:border-[#D4AF37] transition-all duration-300"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;