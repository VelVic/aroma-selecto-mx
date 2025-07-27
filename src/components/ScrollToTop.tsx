import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!show) return null;

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        zIndex: 1000,
        padding: '12px 16px',
        borderRadius: '50%',
        background: '#ffa100',
        color: '#fff',
        border: 'none',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        cursor: 'pointer',
        fontSize: 24
      }}
      aria-label="Ir arriba"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;