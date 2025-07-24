import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '' }) => (
  <div className={`text-center mb-12 relative z-10 ${className}`}>
    <h2 className="text-2xl md:text-3xl font-logo font-bold text-gray-900 mb-3">
      {children}
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] mx-auto rounded-full shadow-sm"></div>
  </div>
);

export default SectionTitle;