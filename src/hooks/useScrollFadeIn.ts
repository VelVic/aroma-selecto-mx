import { useRef, useState, useEffect } from 'react';

/**
 * Hook para animar la aparición de un elemento al hacer scroll (fade-in/slide-up)
 * Uso: const { ref, isVisible } = useScrollFadeIn();
 * <section ref={ref} className={isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}>...</section>
 */
export default function useScrollFadeIn() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
