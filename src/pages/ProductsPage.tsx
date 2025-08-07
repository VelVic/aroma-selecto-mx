import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDownIcon, FilterIcon } from 'lucide-react';
import { perfumes } from '../data/perfumes';
import { decants } from '../data/decants';
import { sets } from '../data/sets';
import PerfumeCard from '../components/PerfumeCard';
import DecantCard from '../components/DecantCard';
import SetCard from '../components/SetCard';
import ProductFilters from '../components/ProductFilters';

const ProductsPage = () => {
  // Estados para todos los filtros
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedBadge, setSelectedBadge] = useState<string>('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  // ✅ NUEVO: Estado para dropdown de ordenamiento
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  // Leer filtros desde la URL
  const location = useLocation();
  const navigate = useNavigate();
  const [initializedFromUrl, setInitializedFromUrl] = useState(false);

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
    { value: '', label: 'Más relevante' },
    { value: 'priceAsc', label: 'Precio: Menor a Mayor' },
    { value: 'priceDesc', label: 'Precio: Mayor a Menor' },
    { value: 'isSale', label: 'En Oferta' },
    { value: 'isNew', label: 'Nuevos' },
    { value: 'isComingSoon', label: 'Próximamente' },
  ];
  
  // Marcas dinámicas
  const brandOptions = Array.from(new Set(perfumes.map(p => p.brand))).map(brand => ({ value: brand, label: brand }));

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

  const selectedBadgeLabel = badgeOptions.find(option => option.value === selectedBadge)?.label || 'Más relevante';

  return (
    <div className="bg-[#F9F9F9] pt-20 min-h-screen flex flex-col items-center">
      {/* Header principal */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 px-4">
        
        {/* ✅ FILTROS - OCULTOS EN MÓVIL, VISIBLES EN DESKTOP */}
        <div className="hidden lg:block">
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
        </div>
        
        {/* Contenido principal */}
        <main className="flex-1">
          {/* Título y subtítulo */}
          {/* ✅ Título y subtítulo CON DROPDOWN EN DESKTOP */}
          <div className="mb-8 w-full">
            <div className="bg-white rounded-lg shadow px-6 py-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                {/* Texto del título */}
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-[#2C3E50] mb-2">Tu universo de fragancias</h1>
                  <p className="text-gray-600">Encuentra el aroma que te define o la vibra que buscas hoy.</p>
                </div>
                
                {/* ✅ DROPDOWN SOLO EN DESKTOP - AL LADO DEL TÍTULO */}
                <div className="hidden lg:block">
                  <div className="relative">
                    <button
                      onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                      className="flex items-center gap-2 px-4 py-2.5 bg-[#F9F9F9] border border-gray-200 rounded-lg text-[#2C3E50] font-medium hover:bg-gray-50 transition-colors min-w-[200px]"
                    >
                      <span className="text-sm text-gray-500">Ordenar por:</span>
                      <span className="font-semibold">{selectedBadgeLabel}</span>
                      <ChevronDownIcon className={`w-4 h-4 ml-auto transition-transform ${sortDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown menu */}
                    {sortDropdownOpen && (
                      <div className="absolute top-full right-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                        {badgeOptions.map(option => (
                          <button
                            key={option.value}
                            onClick={() => {
                              setSelectedBadge(option.value);
                              setSortDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                              selectedBadge === option.value 
                                ? 'bg-[#D4AF37]/10 text-[#D4AF37] font-semibold' 
                                : 'text-[#2C3E50]'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* ✅ NUEVA SECCIÓN: Controles móvil + ordenamiento */}
          <div className="mb-6 w-full">
            {/* Controles para móvil */}
           {/* Controles para móvil - MISMA LÍNEA */}
            <div className="flex gap-3 mb-4">
              
              {/* ✅ BOTÓN FILTROS MÓVIL */}
              <button
                onClick={() => setFiltersOpen(true)}
                className="lg:hidden flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-lg text-[#2C3E50] font-semibold hover:bg-gray-50 transition-colors flex-shrink-0"
              >
                <FilterIcon className="w-5 h-5" />
                Filtros
                {/* ✅ CONTADOR DE FILTROS ACTIVOS */}
                {(selectedTypes.length + selectedBrands.length + selectedGenders.length + selectedPrices.length) > 0 && (
                  <span className="bg-[#D4AF37] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {selectedTypes.length + selectedBrands.length + selectedGenders.length + selectedPrices.length}
                  </span>
                )}
              </button>
              
              {/* ✅ DROPDOWN ORDENAMIENTO - EN LA MISMA LÍNEA */}
              <div className="relative flex-1">

                <button
                  onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                  className="lg:hidden w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-lg text-[#2C3E50] font-medium hover:bg-gray-50 transition-colors"
                >
                  <span className="truncate">{selectedBadgeLabel}</span>
                  <ChevronDownIcon className={`w-5 h-5 transition-transform ${sortDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* ✅ DROPDOWN MENU */}
                {sortDropdownOpen && (
                  <div className="lg:hidden absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                    {badgeOptions.map(option => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSelectedBadge(option.value);
                          setSortDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                          selectedBadge === option.value 
                            ? 'bg-[#D4AF37]/10 text-[#D4AF37] font-semibold' 
                            : 'text-[#2C3E50]'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* ✅ FILTROS ACTIVOS - CHIPS REMOVIBLES */}
            {(selectedTypes.length > 0 || selectedBrands.length > 0 || selectedGenders.length > 0 || selectedPrices.length > 0) && (
              <div className="flex flex-wrap gap-2">
                {/* Tipos seleccionados */}
                {selectedTypes.map(type => (
                  <span
                    key={type}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-sm rounded-full"
                  >
                    {typeOptions.find(opt => opt.value === type)?.label}
                    <button
                      onClick={() => setSelectedTypes(prev => prev.filter(t => t !== type))}
                      className="hover:bg-[#D4AF37]/30 rounded-full p-0.5"
                    >
                      <span className="text-xs">×</span>
                    </button>
                  </span>
                ))}
                
                {/* Géneros seleccionados */}
                {selectedGenders.map(gender => (
                  <span
                    key={gender}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                  >
                    {gender}
                    <button
                      onClick={() => setSelectedGenders(prev => prev.filter(g => g !== gender))}
                      className="hover:bg-blue-200 rounded-full p-0.5"
                    >
                      <span className="text-xs">×</span>
                    </button>
                  </span>
                ))}
                
                {/* Marcas seleccionadas */}
                {selectedBrands.map(brand => (
                  <span
                    key={brand}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full"
                  >
                    {brand}
                    <button
                      onClick={() => setSelectedBrands(prev => prev.filter(b => b !== brand))}
                      className="hover:bg-green-200 rounded-full p-0.5"
                    >
                      <span className="text-xs">×</span>
                    </button>
                  </span>
                ))}
                
                {/* Precios seleccionados */}
                {selectedPrices.map(price => (
                  <span
                    key={price}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                  >
                    {priceOptions.find(opt => opt.value === price)?.label}
                    <button
                      onClick={() => setSelectedPrices(prev => prev.filter(p => p !== price))}
                      className="hover:bg-purple-200 rounded-full p-0.5"
                    >
                      <span className="text-xs">×</span>
                    </button>
                  </span>
                ))}
                
                {/* Botón limpiar todo */}
                <button
                  onClick={() => {
                    setSelectedTypes([]);
                    setSelectedBrands([]);
                    setSelectedGenders([]);
                    setSelectedPrices([]);
                  }}
                  className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 underline"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
          
          {/* Grid de productos filtrados */}
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
      
      {/* ✅ MODAL FILTROS MÓVIL - ESTILO IDÉNTICO AL CARRITO */}
      {filtersOpen && (
        <>
          {/* Backdrop idéntico al carrito */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-[99] transition-opacity duration-300"
            onClick={() => setFiltersOpen(false)}
            aria-label="Cerrar filtros"
          />
          
          {/* Drawer idéntico al carrito */}
          <div
            className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl z-[100] transition-transform duration-300 border-l border-[#D4AF37] flex flex-col
              ${filtersOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
            style={{ boxShadow: '0 0 32px 0 rgba(44,62,80,0.10)' }}
            role="dialog"
            aria-modal="true"
          >
            {/* Header idéntico al carrito */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#D4AF37] bg-white">
              <h2 className="text-lg font-bold text-[#2C3E50]">Filtros</h2>
              <button 
                onClick={() => setFiltersOpen(false)} 
                aria-label="Cerrar filtros" 
                className="text-[#2C3E50] hover:text-[#D4AF37] transition-colors"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Contenido scrolleable con el mismo padding */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <div className="space-y-6">
                
                {/* Tipos de producto */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-[#2C3E50] flex items-center gap-2">
                    <div className="w-1 h-6 bg-[#D4AF37] rounded-full"></div>
                    Tipo de producto
                  </h4>
                  <div className="space-y-3 pl-3">
                    {typeOptions.map(option => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={selectedTypes.includes(option.value)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedTypes([...selectedTypes, option.value]);
                              } else {
                                setSelectedTypes(selectedTypes.filter(t => t !== option.value));
                              }
                            }}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 border-2 rounded transition-all ${
                            selectedTypes.includes(option.value) 
                              ? 'bg-[#D4AF37] border-[#D4AF37]' 
                              : 'border-gray-300 group-hover:border-[#D4AF37]'
                          }`}>
                            {selectedTypes.includes(option.value) && (
                              <svg className="w-3 h-3 text-white mx-auto mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="text-[#2C3E50] group-hover:text-[#D4AF37] transition-colors font-medium">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Géneros */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-[#2C3E50] flex items-center gap-2">
                    <div className="w-1 h-6 bg-[#D4AF37] rounded-full"></div>
                    Género
                  </h4>
                  <div className="space-y-3 pl-3">
                    {genderOptions.map(option => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={selectedGenders.includes(option.value)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedGenders([...selectedGenders, option.value]);
                              } else {
                                setSelectedGenders(selectedGenders.filter(g => g !== option.value));
                              }
                            }}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 border-2 rounded transition-all ${
                            selectedGenders.includes(option.value) 
                              ? 'bg-[#D4AF37] border-[#D4AF37]' 
                              : 'border-gray-300 group-hover:border-[#D4AF37]'
                          }`}>
                            {selectedGenders.includes(option.value) && (
                              <svg className="w-3 h-3 text-white mx-auto mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="text-[#2C3E50] group-hover:text-[#D4AF37] transition-colors font-medium">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Marcas */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-[#2C3E50] flex items-center gap-2">
                    <div className="w-1 h-6 bg-[#D4AF37] rounded-full"></div>
                    Marca
                  </h4>
                  <div className="space-y-3 pl-3">
                    {brandOptions.map(option => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={selectedBrands.includes(option.value)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedBrands([...selectedBrands, option.value]);
                              } else {
                                setSelectedBrands(selectedBrands.filter(b => b !== option.value));
                              }
                            }}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 border-2 rounded transition-all ${
                            selectedBrands.includes(option.value) 
                              ? 'bg-[#D4AF37] border-[#D4AF37]' 
                              : 'border-gray-300 group-hover:border-[#D4AF37]'
                          }`}>
                            {selectedBrands.includes(option.value) && (
                              <svg className="w-3 h-3 text-white mx-auto mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="text-[#2C3E50] group-hover:text-[#D4AF37] transition-colors font-medium text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Precios */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-[#2C3E50] flex items-center gap-2">
                    <div className="w-1 h-6 bg-[#D4AF37] rounded-full"></div>
                    Precio
                  </h4>
                  <div className="space-y-3 pl-3">
                    {priceOptions.map(option => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={selectedPrices.includes(option.value)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedPrices([...selectedPrices, option.value]);
                              } else {
                                setSelectedPrices(selectedPrices.filter(p => p !== option.value));
                              }
                            }}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 border-2 rounded transition-all ${
                            selectedPrices.includes(option.value) 
                              ? 'bg-[#D4AF37] border-[#D4AF37]' 
                              : 'border-gray-300 group-hover:border-[#D4AF37]'
                          }`}>
                            {selectedPrices.includes(option.value) && (
                              <svg className="w-3 h-3 text-white mx-auto mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="text-[#2C3E50] group-hover:text-[#D4AF37] transition-colors font-medium">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer idéntico al carrito */}
            <div className="px-5 py-4 border-t border-[#D4AF37] bg-[#F9F9F9]">
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setSelectedTypes([]);
                    setSelectedBrands([]);
                    setSelectedGenders([]);
                    setSelectedPrices([]);
                  }}
                  className="w-full py-2 rounded bg-[#D4AF37] text-white font-bold hover:bg-[#B8860B] transition-all duration-200 shadow-md"
                >
                  Limpiar todos los filtros
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      
      {/* ✅ CERRAR DROPDOWN AL HACER CLICK FUERA */}
      {sortDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setSortDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default ProductsPage;