import React from 'react';
import { Perfume, perfumes } from '../data/perfumes';
import { Decant, decants } from '../data/decants';
import { SetPromo, sets } from '../data/sets';
import PerfumeCard from './PerfumeCard';
import DecantCard from './DecantCard';
import SetCard from './SetCard';
import SectionTitle from './SectionTitle';

interface ProductRecommendationsProps {
  productType: 'perfume' | 'decant' | 'set';
  productId: string;
}

const ProductRecommendations: React.FC<ProductRecommendationsProps> = ({ productType, productId }) => {
  let recommended: Perfume[] | Decant[] | SetPromo[] = [];
  if (productType === 'perfume') {
    recommended = perfumes.filter(p => p.id !== productId).slice(0, 4);
  } else if (productType === 'decant') {
    recommended = decants.filter(d => d.id !== productId).slice(0, 4);
  } else if (productType === 'set') {
    recommended = sets.filter(s => s.id !== productId).slice(0, 4);
  }

  if (recommended.length === 0) return null;

  return (
    <div className="mt-10">
      <div className="bg-white rounded-xl shadow-md border border-[#D4AF37]/30 p-6">
        <SectionTitle>También te podría gustar</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {productType === 'perfume' &&
            (recommended as Perfume[]).map(p => <PerfumeCard key={p.id} perfume={p} />)}
          {productType === 'decant' &&
            (recommended as Decant[]).map(d => {
              const perfume = perfumes.find(p => p.id === d.perfumeId);
              return (
                <DecantCard
                  key={d.id}
                  decant={d}
                  perfumeName={perfume?.name}
                  perfumeBrand={perfume?.brand}
                  image={perfume?.image}
                  slug={d.id}
                  rating={perfume?.rating}
                />
              );
            })}
          {productType === 'set' &&
            (recommended as SetPromo[]).map(s => <SetCard key={s.id} set={s} />)}
        </div>
      </div>
    </div>
  );
};

export default ProductRecommendations;