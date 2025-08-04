import React from 'react';

interface ProductFiltersProps {
  selectedTypes: string[];
  setSelectedTypes: (types: string[]) => void;
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
  selectedGenders: string[];
  setSelectedGenders: (genders: string[]) => void;
  selectedPrices: string[];
  setSelectedPrices: (prices: string[]) => void;
  filtersOpen: boolean;
  setFiltersOpen: (open: boolean) => void;
  typeOptions: { value: string; label: string }[];
  brandOptions: { value: string; label: string }[];
  genderOptions: { value: string; label: string }[];
  priceOptions: { value: string; label: string }[];
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedTypes,
  setSelectedTypes,
  selectedBrands,
  setSelectedBrands,
  selectedGenders,
  setSelectedGenders,
  selectedPrices,
  setSelectedPrices,
  typeOptions,
  brandOptions,
  genderOptions,
  priceOptions,
}) => {
  // Handlers locales
  const handleTypeChange = (tipo: string) => {
    setSelectedTypes(
      selectedTypes.includes(tipo)
        ? selectedTypes.filter(t => t !== tipo)
        : [...selectedTypes, tipo]
    );
  };
  const handleBrandChange = (brand: string) => {
    setSelectedBrands(
      selectedBrands.includes(brand)
        ? selectedBrands.filter(b => b !== brand)
        : [...selectedBrands, brand]
    );
  };
  const handleGenderChange = (gender: string) => {
    setSelectedGenders(
      selectedGenders.includes(gender)
        ? selectedGenders.filter(g => g !== gender)
        : [...selectedGenders, gender]
    );
  };
  const handlePriceChange = (price: string) => {
    setSelectedPrices(
      selectedPrices.includes(price)
        ? selectedPrices.filter(p => p !== price)
        : [...selectedPrices, price]
    );
  };

  return (
    // ✅ SOLO FILTROS DESKTOP - SIN MODAL
    <aside className="w-full lg:w-64 bg-white rounded-lg shadow p-6 mb-8 lg:mb-0 lg:h-[calc(100vh-5rem)] lg:overflow-auto lg:pr-4 lg:pl-2">
      <h2 className="text-lg font-bold text-[#2C3E50] mb-6">Filtros</h2>
      
      <div className="mb-6">
        <h3 className="text-sm font-semibold mb-2">Tipo de producto</h3>
        <div className="flex flex-col gap-2">
          {typeOptions.map(option => (
            <label key={option.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTypes.includes(option.value)}
                onChange={() => handleTypeChange(option.value)}
                className="accent-[#D4AF37] h-4 w-4"
              />
              <span className="text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-sm font-semibold mb-2">Marca</h3>
        <div className="flex flex-col gap-2">
          {brandOptions.map(option => (
            <label key={option.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedBrands.includes(option.value)}
                onChange={() => handleBrandChange(option.value)}
                className="accent-[#D4AF37] h-4 w-4"
              />
              <span className="text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-sm font-semibold mb-2">Género / Tipo</h3>
        <div className="flex flex-col gap-2">
          {genderOptions.map(option => (
            <label key={option.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedGenders.includes(option.value)}
                onChange={() => handleGenderChange(option.value)}
                className="accent-[#D4AF37] h-4 w-4"
              />
              <span className="text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-sm font-semibold mb-2">Precios</h3>
        <div className="flex flex-col gap-2">
          {priceOptions.map(option => (
            <label key={option.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedPrices.includes(option.value)}
                onChange={() => handlePriceChange(option.value)}
                className="accent-[#D4AF37] h-4 w-4"
              />
              <span className="text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ProductFilters;