import { StarIcon } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar: string;
  productName?: string;
}

const TestimonialCard = ({
  name,
  date,
  rating,
  comment,
  avatar,
  productName
}: TestimonialCardProps) => {
  return (
    <div className="group section-card p-6 rounded-lg shadow-sm border border-[#BDC3C7]/30 hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all duration-300 hover:border-[#D4AF37]/50 relative overflow-hidden flex flex-col items-center text-center">
      {/* GRADIENTE 2: Borde superior sutil */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Avatar grande y centrado */}
      <div className="relative mb-3">
        <img 
          src={avatar} 
          alt={name} 
          className="h-16 w-16 rounded-full object-cover ring-2 ring-transparent group-hover:ring-[#D4AF37]/30 transition-all duration-300 mx-auto shadow"
        />
      </div>
      
      {/* Nombre y fecha */}
      <div className="mb-2">
        <h3 className="font-semibold text-[#2C3E50] group-hover:text-[#D4AF37] transition-colors duration-300">{name}</h3>
        <span className="block text-xs text-[#BDC3C7]">{date}</span>
      </div>
      
      {/* Estrellas */}
      <div className="flex items-center justify-center mb-3">
        {[...Array(5)].map((_, i) => (
          <StarIcon 
            key={i} 
            className={`h-4 w-4 transition-all duration-200 ${
              i < rating 
                ? 'text-[#D4AF37] fill-[#D4AF37] drop-shadow-sm group-hover:scale-110' 
                : 'text-[#BDC3C7]'
            }`} 
            fill={i < rating ? '#D4AF37' : 'none'}
          />
        ))}
      </div>

      {/* Producto mencionado */}
      {productName && (
        <div className="mb-3 p-2 bg-gradient-to-r from-[#F9F9F9] to-[#F5F5F5] rounded-md border-l-3 border-[#D4AF37]">
          <div className="text-sm text-[#BDC3C7]">
            Sobre:{' '}
            <span className="font-medium text-[#2C3E50] group-hover:text-[#D4AF37] transition-colors duration-300">{productName}</span>
          </div>
        </div>
      )}

      {/* Comentario con comillas y fondo suave */}
      <div className="relative w-full">
        <div className="absolute -left-2 -top-1 text-6xl text-[#D4AF37]/20 font-serif leading-none select-none">"</div>
        <p className="text-[#2C3E50] text-sm leading-relaxed relative z-10 pl-4 pr-2">{comment}</p>
        <div className="absolute -right-1 -bottom-2 text-6xl text-[#D4AF37]/20 font-serif leading-none transform rotate-180 select-none">"</div>
      </div>

      {/* GRADIENTE 7: Brillo sutil al hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default TestimonialCard;