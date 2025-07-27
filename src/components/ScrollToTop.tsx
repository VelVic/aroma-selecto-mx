



import { useState, useEffect } from 'react';
import { ChevronUpIcon } from 'lucide-react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Ir arriba"
      className={`fixed z-50 bottom-7 right-7 md:bottom-10 md:right-10 transition-all duration-300
        ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        bg-[#2C3E50] shadow-lg hover:shadow-2xl
        rounded-full p-3 md:p-4 flex items-center justify-center
        hover:scale-110 active:scale-95 border-2 border-[#D4AF37]`}
      style={{ boxShadow: '0 4px 24px 0 rgba(44,62,80,0.25)' }}
    >
      <ChevronUpIcon className="h-7 w-7 md:h-8 md:w-8" color="#D4AF37" />
    </button>
  );
};

export default ScrollToTop;