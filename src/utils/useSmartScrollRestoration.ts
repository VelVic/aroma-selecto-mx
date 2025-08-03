import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * Hook para controlar el scroll en navegación entre páginas.
 * - Si la navegación es desde el navbar o links principales (REPLACE/PUSH a ruta principal), hace scroll al inicio y limpia el guardado.
 * - Si la navegación es regreso desde detalle (POP), restaura el scroll guardado si existe.
 */
export function useSmartScrollRestoration() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Rutas principales donde SIEMPRE debe ir al inicio
    const mainRoutes = ['/', '/productos', '/contacto', '/about', '/cart'];
    const isMainRoute = mainRoutes.includes(location.pathname);

    if (isMainRoute) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      sessionStorage.removeItem('scrollPosition');
      return;
    }

    // Si la navegación es POP (volver atrás), restaurar scroll guardado
    if (navigationType === 'POP') {
      const saved = sessionStorage.getItem('scrollPosition');
      if (saved) {
        window.scrollTo({ top: Number(saved), behavior: 'auto' });
      }
    } else {
      // En cualquier otra navegación, ir al inicio y limpiar guardado
      window.scrollTo({ top: 0, behavior: 'auto' });
      sessionStorage.removeItem('scrollPosition');
    }
  }, [location, navigationType]);
}
