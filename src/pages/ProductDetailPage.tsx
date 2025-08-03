import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { perfumes } from '../data/perfumes';
import { decants } from '../data/decants';
import { sets } from '../data/sets';
import PerfumeDetail from '../components/PerfumeDetail';
import DecantDetail from '../components/DecantDetail';
import SetDetail from '../components/SetDetail';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { reviews } from '../data/reviews';
import ProductRecommendations from '../components/ProductRecommendations';

const ProductDetailPage: React.FC = () => {
  const { tipo, id } = useParams<{ tipo: string; id: string }>();
  const navigate = useNavigate();

  // Busca el producto según el tipo
  const perfume = tipo === 'perfume' ? perfumes.find(p => p.id === id) : undefined;
  const decant = tipo === 'decant' ? decants.find(d => d.id === id) : undefined;
  const setPromo = tipo === 'set' ? sets.find(s => s.id === id) : undefined;

  // Filtra los testimonios por tipo de producto
  const filteredReviews = reviews
    .filter(r => r.productType === tipo)
    .map(r => {
      let productNameObj: { name: string; link: string } | undefined = undefined;
      if (r.productType === 'perfume') {
        const prod = perfumes.find(p => p.id === r.productId);
        if (prod) productNameObj = { name: prod.name, link: `/perfume/${prod.id}` };
      } else if (r.productType === 'decant') {
        const prod = decants.find(d => d.id === r.productId);
        let decantName = '';
        if (prod) {
          const perfume = perfumes.find(p => p.id === prod.perfumeId);
          decantName = perfume ? perfume.name : prod.id;
          productNameObj = { name: decantName, link: `/decant/${prod.id}` };
        }
      } else if (r.productType === 'set') {
        const prod = sets.find(s => s.id === r.productId);
        if (prod) productNameObj = { name: prod.name, link: `/set/${prod.id}` };
      }
      return {
        ...r,
        avatar: r.avatar ?? '/assets/images/logos/isologo_dark',
        productName: productNameObj
      };
    });
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [showOccasion, setShowOccasion] = useState(false);

  if (!perfume && !decant && !setPromo) {
    return <div className="py-10 text-center text-lg">Producto no encontrado.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <button className="mb-4 text-[#D4AF37] hover:underline" onClick={() => navigate(-1)}>
        ← Volver
      </button>
      {perfume && (
        <PerfumeDetail
          perfume={perfume}
          selectedVariant={selectedVariant}
          setSelectedVariant={setSelectedVariant}
        />
      )}
      {decant && (
        <DecantDetail
          decant={decant}
          perfume={decant.perfumeId ? perfumes.find(p => p.id === decant.perfumeId) : undefined}
          selectedVariant={selectedVariant}
          setSelectedVariant={setSelectedVariant}
          showDetails={showDetails}
          setShowDetails={setShowDetails}
          showOccasion={showOccasion}
          setShowOccasion={setShowOccasion}
        />
      )}
      {setPromo && (
        <SetDetail setPromo={setPromo} />
      )}
      {/* Testimonios: se muestra el carrusel de comentarios debajo del detalle */}
      <div className="mt-8">
        <TestimonialCarousel testimonials={filteredReviews} />
      </div>

      <div>
        <ProductRecommendations productType={tipo as 'perfume' | 'decant' | 'set'} productId={id ?? ''} />
      </div>
    </div>
  );
};

export default ProductDetailPage;