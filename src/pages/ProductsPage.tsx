  // Opciones de filtro
  const typeOptions = [
    { value: 'perfume', label: 'Perfumes' },
    { value: 'decant', label: 'Decants' },
    { value: 'set', label: 'Sets' },
  ];
  const genderOptions = [
    { value: 'Mujer', label: 'Mujer' },
    { value: 'Hombre', label: 'Hombre' },
    { value: 'Mixto', label: 'Mixto' },
  ];
  const priceOptions = [
    { value: 'Menos de 100', label: 'Menos de $100' },
    { value: '100-200', label: 'Entre $100 y $200' },
    { value: '200-300', label: 'Entre $200 y $300' },
    { value: 'Mas de 300', label: 'Más de $300' },
  ];
  const badgeOptions = [
    { value: 'isNew', label: 'Más relevante' },
    { value: 'priceAsc', label: 'Más barato' },
    { value: 'priceDesc', label: 'Más caro' },
    { value: 'isSale', label: 'Oferta' },
    { value: 'isComingSoon', label: 'Próximamente' },
  ];
  // Marcas dinámicas (solo de perfumes)
  const brandOptions = Array.from(new Set(perfumes.map(p => p.brand))).map(brand => ({ value: brand, label: brand }));

import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import { useNavigate } from 'react-router-dom';
import { perfumes } from '../data/perfumes';
import { decants } from '../data/decants';
import { sets } from '../data/sets';
import PerfumeCard from '../components/PerfumeCard';
import DecantCard from '../components/DecantCard';
import SetCard from '../components/SetCard';
import ProductFilters from '../components/ProductFilters';

const ProductsPage = () => {
  // Estados para todos los filtros
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]); // 'perfume', 'decant', 'set'
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]); // marcas dinámicas
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]); // 'Mujer', 'Hombre', 'Mixto'
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]); // rangos de precio
  const [selectedBadge, setSelectedBadge] = useState<string>(''); // badge general
  const [filtersOpen, setFiltersOpen] = useState(false); // para modal móvil

  // Leer filtros desde la URL
  const location = useLocation();
  const navigate = useNavigate();
  // Flag para saber si es la primera carga
  const [initializedFromUrl, setInitializedFromUrl] = useState(false);
  useEffect(() => {
    if (!initializedFromUrl) {
      const params = new URLSearchParams(location.search);
      // Gender (multi)
      const genders = params.getAll('gender').filter(g => ['Hombre','Mujer','Mixto'].includes(g));
      setSelectedGenders(genders);
      // Type (multi)
      const types = params.getAll('type').filter(t => ['perfume','decant','set'].includes(t));
      setSelectedTypes(types);
      // Price (multi)
      const prices = params.getAll('price').filter(p => ['Menos de 100','100-200','200-300','Mas de 300'].includes(p));
      setSelectedPrices(prices);
      // Brand (multi)
      const brands = params.getAll('brand');
      setSelectedBrands(brands);
      // Badge (single)
      const badge = params.get('badge');
      if (badge && ['isNew','priceAsc','priceDesc','isSale','isComingSoon'].includes(badge)) {
        setSelectedBadge(badge);
      } else {
        setSelectedBadge('');
      }
      setInitializedFromUrl(true);
    }
  }, [location.search, initializedFromUrl]);

  // Sincronizar filtros con la URL
  useEffect(() => {
    if (!initializedFromUrl) return;
    const params = new URLSearchParams();
    selectedGenders.forEach(g => params.append('gender', g));
    selectedTypes.forEach(t => params.append('type', t));
    selectedPrices.forEach(p => params.append('price', p));
    selectedBrands.forEach(b => params.append('brand', b));
    if (selectedBadge) params.set('badge', selectedBadge);
    // Solo actualiza si la URL no coincide
    if (location.search !== `?${params.toString()}`) {
      navigate({ search: params.toString() }, { replace: true });
    }
  }, [selectedGenders, selectedTypes, selectedPrices, selectedBrands, selectedBadge, location.search, navigate, initializedFromUrl]);


  // --- Lógica de filtrado ---
  // Helper para filtrar por precio
  const priceMatch = (price: number) => {
    if (selectedPrices.length === 0) return true;
    return selectedPrices.some(range => {
      if (range === 'Menos de 100') return price < 100;
      if (range === '100-200') return price >= 100 && price < 200;
      if (range === '200-300') return price >= 200 && price < 300;
      if (range === 'Mas de 300') return price >= 300;
      return true;
    });
  };

  // Filtrar perfumes
  let filteredPerfumes = perfumes.filter(p => {
    if (selectedTypes.length && !selectedTypes.includes('perfume')) return false;
    if (selectedBrands.length && !selectedBrands.includes(p.brand)) return false;
    if (selectedGenders.length && !selectedGenders.includes(
      p.category === 'hombre' ? 'Hombre' : p.category === 'mujer' ? 'Mujer' : 'Mixto'
    )) return false;
    if (selectedPrices.length && !(p.prices && p.prices.some(priceMatch))) return false;
    // Badges
    if (selectedBadge === 'isSale' && !p.isSale) return false;
    if (selectedBadge === 'isNew' && !p.isNew) return false;
    return true;
  });
  // Ordenar por badge
  if (selectedBadge === 'priceAsc') filteredPerfumes = [...filteredPerfumes].sort((a, b) => (a.prices?.[0] ?? 0) - (b.prices?.[0] ?? 0));
  if (selectedBadge === 'priceDesc') filteredPerfumes = [...filteredPerfumes].sort((a, b) => (b.prices?.[0] ?? 0) - (a.prices?.[0] ?? 0));

  // Filtrar decants
  let filteredDecants = decants.filter(d => {
    if (selectedTypes.length && !selectedTypes.includes('decant')) return false;
    const relatedPerfume = perfumes.find(p => p.id === d.perfumeId);
    if (!relatedPerfume) return false;
    if (selectedBrands.length && !selectedBrands.includes(relatedPerfume.brand)) return false;
    if (selectedGenders.length && !selectedGenders.includes(
      relatedPerfume.category === 'hombre' ? 'Hombre' : relatedPerfume.category === 'mujer' ? 'Mujer' : 'Mixto'
    )) return false;
    if (selectedPrices.length && !(d.variants && d.variants.some(v => priceMatch(v.price)))) return false;
    // Badges: ahora se buscan en el objeto decant
    if (selectedBadge === 'isSale' && !d.isSale) return false;
    if (selectedBadge === 'isNew' && !d.isNew) return false;
    if (selectedBadge === 'isComingSoon' && !d.isComingSoon) return false;
    return true;
  });
  if (selectedBadge === 'priceAsc') filteredDecants = [...filteredDecants].sort((a, b) => (a.variants?.[0]?.price ?? 0) - (b.variants?.[0]?.price ?? 0));
  if (selectedBadge === 'priceDesc') filteredDecants = [...filteredDecants].sort((a, b) => (b.variants?.[0]?.price ?? 0) - (a.variants?.[0]?.price ?? 0));

  // Filtrar sets
  let filteredSets = sets.filter(s => {
    if (selectedTypes.length && !selectedTypes.includes('set')) return false;
    // Calcular category del set según los items
    let setCategory: 'Hombre' | 'Mujer' | 'Mixto' = 'Mixto';
    const categories = s.items.map(item => {
      if (item.type === 'perfume') {
        const perfume = perfumes.find(p => p.id === item.decantId);
        return perfume?.category;
      }
      if (item.type === 'decant') {
        const decant = decants.find(d => d.id === item.decantId);
        const perfume = decant ? perfumes.find(p => p.id === decant.perfumeId) : undefined;
        return perfume?.category;
      }
      return undefined;
    }).filter(Boolean);
    if (categories.length > 0) {
      const unique = Array.from(new Set(categories));
      if (unique.length === 1) {
        setCategory = unique[0] === 'hombre' ? 'Hombre' : unique[0] === 'mujer' ? 'Mujer' : 'Mixto';
      } else {
        setCategory = 'Mixto';
      }
    }
    if (selectedGenders.length && !selectedGenders.includes(setCategory)) return false;
    if (selectedPrices.length && !(s.variants && s.variants.some(v => priceMatch(v.price)))) return false;
    if (selectedBadge === 'isSale' && !s.isSale) return false;
    if (selectedBadge === 'isNew' && !s.isNew) return false;
    if (selectedBadge === 'isComingSoon' && !s.isComingSoon) return false;
    return true;
  });
  if (selectedBadge === 'priceAsc') filteredSets = [...filteredSets].sort((a, b) => (a.variants?.[0]?.price ?? 0) - (b.variants?.[0]?.price ?? 0));
  if (selectedBadge === 'priceDesc') filteredSets = [...filteredSets].sort((a, b) => (b.variants?.[0]?.price ?? 0) - (a.variants?.[0]?.price ?? 0));

  // Animación de aparición para la sección principal
  const mainAnim = useScrollFadeIn();

  return (
    <div className="bg-[#F9F9F9] pt-20 min-h-screen flex flex-col items-center">
      {/* Header principal */}
      <div
        ref={mainAnim.ref}
        className={`w-full max-w-7xl flex flex-col lg:flex-row gap-8 transition-all duration-700 ${mainAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Filtros como componente modular */}
        <ProductFilters
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          selectedGenders={selectedGenders}
          setSelectedGenders={setSelectedGenders}
          selectedPrices={selectedPrices}
          setSelectedPrices={setSelectedPrices}
          filtersOpen={filtersOpen}
          setFiltersOpen={setFiltersOpen}
          typeOptions={typeOptions}
          brandOptions={brandOptions}
          genderOptions={genderOptions}
          priceOptions={priceOptions}
        />
        {/* Contenido principal */}
        <main className="flex-1">
          {/* Título y subtítulo en contenedor blanco */}
          <div className="mb-8 w-full">
            <div className="bg-white rounded-lg shadow px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-[#2C3E50] mb-2">Catálogo de productos</h1>
                <p className="text-gray-600">Catálogo completo de productos</p>
              </div>
            </div>
          </div>
          {/* Botones flotantes de badges (filtros generales) */}
          <div className="mb-6 w-full">
            <div className="flex gap-3 overflow-x-auto pb-2 lg:overflow-x-visible lg:flex-wrap">
              {badgeOptions.map(option => (
                <button
                  key={option.value}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors duration-200 whitespace-nowrap ${selectedBadge === option.value ? 'bg-[#D4AF37] text-white border-[#D4AF37]' : 'bg-white text-[#2C3E50] border-gray-300 hover:bg-[#D4AF37]/10'}`}
                  onClick={() => {
                    setSelectedBadge(option.value);
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          {/* Grid de productos filtrados en contenedor para evitar que el footer se pegue */}
          <div className="w-full min-h-[400px] flex mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {/* Perfumes filtrados */}
              {filteredPerfumes.map(perfume => (
                <PerfumeCard key={perfume.id} perfume={perfume} />
              ))}
              {/* Decants filtrados */}
              {filteredDecants.map(decant => {
                const relatedPerfume = perfumes.find(p => p.id === decant.perfumeId);
                return (
                  <DecantCard
                    key={decant.id}
                    decant={decant}
                    perfumeName={relatedPerfume?.name}
                    perfumeBrand={relatedPerfume?.brand}
                    image={relatedPerfume?.image}
                    slug={decant.id}
                    rating={relatedPerfume?.rating}
                  />
                );
              })}
              {/* Sets filtrados */}
              {filteredSets.map(set => (
                <SetCard key={set.id} set={set} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductsPage;