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
        <ul className="space-y-2 text-sm text-[#BDC3C7]">
          {seasons && seasons.length > 0 ? (
            seasons.map((season: string, idx: number) => (
              <li key={idx}><span className="text-[#D4AF37] mr-2">•</span>{season}</li>
            ))
          ) : (
            <li>--</li>
          )}
        </ul>
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
