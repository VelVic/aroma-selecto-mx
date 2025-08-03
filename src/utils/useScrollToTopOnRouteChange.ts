import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook para hacer scroll al inicio cada vez que cambia la ruta.
 * Es el comportamiento más estándar y esperado en tiendas online.
 */
export function useScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
}
