import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * Hace scroll al top solo cuando la navegación es PUSH (no POP).
 * Así, si el usuario navega a una nueva página, sube arriba;
 * pero si usa retroceso/adelante, mantiene la posición previa.
 */
const ScrollToTopOnNavigate = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === 'PUSH') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Si es POP (retroceso/adelante), no hace nada (el navegador mantiene la posición)
  }, [location, navigationType]);

  return null;
};

export default ScrollToTopOnNavigate;
