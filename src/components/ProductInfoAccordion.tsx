import React from 'react';
import Accordion from './Accordion';
import { Perfume } from '../data/perfumes';
import { Decant } from '../data/decants';

interface ProductInfoAccordionProps {
  perfume?: Perfume;
  decant?: Decant;
}

const ProductInfoAccordion: React.FC<ProductInfoAccordionProps> = ({ perfume }) => {
  // Usar solo propiedades de Perfume
  const notesSalida = perfume?.notesSalida;
  const notesCorazon = perfume?.notesCorazon;
  const notesFondo = perfume?.notesFondo;
  const details = perfume?.details;
  const occasions = perfume?.occasions;
  const seasons = perfume?.seasons;

  return (
    <div>
      <Accordion title="Detalles del producto">
        <ul className="space-y-2 text-sm text-[#BDC3C7]">
          <li><span className="text-[#D4AF37] mr-2">•</span>Notas de salida: {notesSalida?.length ? notesSalida.join(', ') : '--'}</li>
          <li><span className="text-[#D4AF37] mr-2">•</span>Notas de corazón: {notesCorazon?.length ? notesCorazon.join(', ') : '--'}</li>
          <li><span className="text-[#D4AF37] mr-2">•</span>Notas de fondo: {notesFondo?.length ? notesFondo.join(', ') : '--'}</li>
          <li><span className="text-[#D4AF37] mr-2">•</span>Concentración: {details?.length ? details.join(', ') : '--'}</li>
        </ul>
      </Accordion>
      <Accordion title="Ocasión">
        <ul className="space-y-2 text-sm text-[#BDC3C7]">
          {occasions && occasions.length > 0 ? (
            occasions.map((occasion: string, idx: number) => (
              <li key={idx}><span className="text-[#D4AF37] mr-2">•</span>{occasion}</li>
            ))
          ) : (
            <li>--</li>
          )}
        </ul>
      </Accordion>
      <Accordion title="Temporadas">
        {seasons && seasons.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {seasons.map((season: string, i: number) => {
              // Función para obtener el estilo de cada temporada
              const getSeasonStyle = (seasonName: string) => {
                const lowerSeason = seasonName.toLowerCase();
                
                if (lowerSeason.includes('primavera') || lowerSeason.includes('spring')) {
                  return {
                    bg: 'bg-gradient-to-r from-green-100 to-emerald-100',
                    text: 'text-green-700',
                    border: 'border-green-200',
                    shadow: 'shadow-green-200/50',
                    emoji: '🌸',
                    animation: 'animate-pulse'
                  };
                }
                if (lowerSeason.includes('verano') || lowerSeason.includes('summer')) {
                  return {
                    bg: 'bg-gradient-to-r from-yellow-100 to-orange-100',
                    text: 'text-orange-700',
                    border: 'border-orange-200',
                    shadow: 'shadow-orange-200/50',
                    emoji: '☀️',
                    animation: 'animate-bounce'
                  };
                }
                if (lowerSeason.includes('otoño') || lowerSeason.includes('fall') || lowerSeason.includes('autumn')) {
                  return {
                    bg: 'bg-gradient-to-r from-amber-100 to-red-100',
                    text: 'text-amber-700',
                    border: 'border-amber-200',
                    shadow: 'shadow-amber-200/50',
                    emoji: '🍂',
                    animation: 'animate-pulse'
                  };
                }
                if (lowerSeason.includes('invierno') || lowerSeason.includes('winter')) {
                  return {
                    bg: 'bg-gradient-to-r from-blue-100 to-indigo-100',
                    text: 'text-blue-700',
                    border: 'border-blue-200',
                    shadow: 'shadow-blue-200/50',
                    emoji: '❄️',
                    animation: 'animate-pulse'
                  };
                }
                // Default para "todo el año" o temporadas no específicas
                return {
                  bg: 'bg-gradient-to-r from-purple-100 to-pink-100',
                  text: 'text-purple-700',
                  border: 'border-purple-200',
                  shadow: 'shadow-purple-200/50',
                  emoji: '✨',
                  animation: 'animate-ping'
                };
              };

              const style = getSeasonStyle(season);
              
              return (
                <div
                  key={season + i}
                  className={`
                    relative px-3 py-2 rounded-full border-2 font-medium text-sm
                    ${style.bg} ${style.text} ${style.border}
                    shadow-lg ${style.shadow}
                    hover:scale-105 transform transition-all duration-300
                    cursor-default select-none
                    group overflow-hidden
                  `}
                >
                  {/* Animación de fondo sutil */}
                  <div className={`absolute inset-0 ${style.bg} opacity-30 ${style.animation}`}></div>
                  
                  {/* Contenido */}
                  <div className="relative flex items-center gap-1.5">
                    <span className="text-base">{style.emoji}</span>
                    <span className="font-semibold">{season}</span>
                  </div>
                  
                  {/* Efecto de brillo al hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-sm text-[#BDC3C7]">--</p>
        )}
      </Accordion>
      <Accordion title="Información de envíos">
        <ul className="space-y-2 text-sm text-[#BDC3C7]">
          <li><span className="text-[#D4AF37] mr-2">•</span>Entrega personal normalmente al día siguiente en Gutiérrez Zamora y zonas cercanas.</li>
          <li><span className="text-[#D4AF37] mr-2">•</span>Envío Estándar a todo México de 3 a 5 días.</li>
          <li><span className="text-[#D4AF37] mr-2">•</span>Envío Express a todo México de 2 a 3 días.</li>
          <li className="pt-2"><a href="/envios-devoluciones" className="text-[#D4AF37] underline hover:text-[#2C3E50]">Consulta nuestras políticas de envío aquí</a></li>
        </ul>
      </Accordion>
    </div>
  );
};

export default ProductInfoAccordion;
