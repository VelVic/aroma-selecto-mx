import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilterIcon, XIcon } from 'lucide-react';
import ProductCard from '../components/ProductCard';
// ✅ IMPORTAR PRODUCTOS CENTRALIZADOS
import { products, getAvailableBrands, Product } from '../data/products';

// ✅ INTERFACE MOVIDA A products.ts - ELIMINAR DE AQUÍ
// interface Product { ... } ← ELIMINAR

const ProductsPage = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Estados para filtros - TIPADOS CORRECTAMENTE
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  
  // ✅ ESTADO PARA ORDENAMIENTO
  const [sortBy, setSortBy] = useState('relevancia');

  // ✅ FUNCIÓN PARA ACTUALIZAR URL CON TODOS LOS FILTROS
  const updateURLParams = (categories: string[], brands: string[], prices: string[]) => {
    const params = new URLSearchParams();
    
    // Solo agregar parámetros que tengan valores
    if (categories.length > 0) {
      params.set('category', categories.join(','));
    }
    if (brands.length > 0) {
      params.set('brand', brands.join(','));
    }
    if (prices.length > 0) {
      params.set('price', prices.join(','));
    }
    
    // Actualizar URL sin recargar página
    setSearchParams(params);
  };
  
  // ✅ EFECTO CORREGIDO - Con dependencias adecuadas
  useEffect(() => {
    // Scroll automático al cargar la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Leer parámetros de URL
    const categoryParam = searchParams.get('category');
    const brandParam = searchParams.get('brand');
    const priceParam = searchParams.get('price');
    
    // Resetear estados antes de aplicar nuevos filtros
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedPrices([]);
    
    // Mapear categorías desde URL
    const categoryMap: { [key: string]: string } = {
      'mujer': 'Para Mujer',
      'hombre': 'Para Hombre', 
      'premium': 'Decants Premium'
    };
    
    // Aplicar filtros desde URL
    if (categoryParam) {
      const categories = categoryParam.split(',').map(cat => 
        categoryMap[cat] || cat
      );
      setSelectedCategories(categories);
    }
    
    if (brandParam) {
      const brands = brandParam.split(',');
      setSelectedBrands(brands);
    }
    
    if (priceParam) {
      const prices = priceParam.split(',');
      setSelectedPrices(prices);
    }
  }, [searchParams]);

  // ✅ FUNCIÓN ACTUALIZADA PARA MANEJAR CHECKBOXES
  const handleCheckboxChange = (value: string, setter: React.Dispatch<React.SetStateAction<string[]>>, currentValues: string[]) => {
    let newValues: string[];
    
    if (currentValues.includes(value)) {
      newValues = currentValues.filter(item => item !== value);
    } else {
      newValues = [...currentValues, value];
    }
    
    setter(newValues);
    
    // Actualizar URL según el tipo de filtro
    if (setter === setSelectedCategories) {
      updateURLParams(newValues, selectedBrands, selectedPrices);
    } else if (setter === setSelectedBrands) {
      updateURLParams(selectedCategories, newValues, selectedPrices);
    } else if (setter === setSelectedPrices) {
      updateURLParams(selectedCategories, selectedBrands, newValues);
    }
  };

  // ✅ FUNCIÓN PARA LIMPIAR TODOS LOS FILTROS
  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedPrices([]);
    // Limpiar URL también
    setSearchParams(new URLSearchParams());
  };

  // ✅ FUNCIÓN PARA LIMPIAR FILTRO ESPECÍFICO
  const removeFilter = (type: 'category' | 'brand' | 'price', value: string) => {
    if (type === 'category') {
      const newCategories = selectedCategories.filter(cat => cat !== value);
      setSelectedCategories(newCategories);
      updateURLParams(newCategories, selectedBrands, selectedPrices);
    } else if (type === 'brand') {
      const newBrands = selectedBrands.filter(brand => brand !== value);
      setSelectedBrands(newBrands);
      updateURLParams(selectedCategories, newBrands, selectedPrices);
    } else if (type === 'price') {
      const newPrices = selectedPrices.filter(price => price !== value);
      setSelectedPrices(newPrices);
      updateURLParams(selectedCategories, selectedBrands, newPrices);
    }
  };

  // ✅ PRODUCTOS CENTRALIZADOS - ELIMINAR ARRAY LOCAL
  // const products = [...] ← ELIMINAR ESTA LÍNEA COMPLETA

  // ✅ FUNCIÓN PARA ORDENAR PRODUCTOS - TIPADA CORRECTAMENTE
  const getSortedProducts = (products: Product[]): Product[] => {
    const sorted = [...products];
    
    switch (sortBy) {
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price);
      case 'disponibles':
        return sorted.sort((a, b) => {
          // Disponibles primero (sin isComingSoon)
          if (!a.isComingSoon && b.isComingSoon) return -1;
          if (a.isComingSoon && !b.isComingSoon) return 1;
          return 0;
        });
      case 'proximamente':
        return sorted.sort((a, b) => {
          // Próximamente primero (con isComingSoon)
          if (a.isComingSoon && !b.isComingSoon) return -1;
          if (!a.isComingSoon && b.isComingSoon) return 1;
          return 0;
        });
      case 'relevancia':
      default:
        // Orden por defecto: Nuevos primero, luego por rating
        return sorted.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return b.rating - a.rating;
        });
    }
  };

  // ✅ APLICAR FILTROS
  const filteredProducts = products.filter(product => {
    // Filtro por categoría
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }
    
    // Filtro por marca
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }
    
    // Filtro por precio
    if (selectedPrices.length > 0) {
      const price = product.price;
      const matchesPrice = selectedPrices.some(priceRange => {
        switch (priceRange) {
          case 'Menos de $100':
            return price < 100;
          case '$100 - $200':
            return price >= 100 && price <= 200;
          case '$200 - $300':
            return price >= 200 && price <= 300;
          case 'Más de $300':
            return price > 300;
          default:
            return true;
        }
      });
      if (!matchesPrice) return false;
    }
    
    return true;
  });

  // ✅ PRODUCTOS FINALES: FILTRADOS Y ORDENADOS
  const finalProducts = getSortedProducts(filteredProducts);

  // Justo antes del return, calcula el producto más barato:
  const cheapestProduct = finalProducts.reduce(
    (min, p) => (p.price < min.price ? p : min),
    finalProducts[0] || { price: 50 }
  );

  // ✅ USAR FUNCIÓN IMPORTADA PARA MARCAS
  const availableBrands = getAvailableBrands();

  return (
    <div className="bg-[#F9F9F9] pt-20">
      <div>
        {/* Mobile filter dialog */}
        <div className={`fixed inset-0 flex z-40 lg:hidden ${filtersOpen ? 'visible' : 'invisible'}`}>
          <div 
            className={`fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ${filtersOpen ? 'opacity-100' : 'opacity-0'}`} 
            onClick={() => setFiltersOpen(false)} 
          />
          <div className={`relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition-transform duration-300 ${filtersOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* Mobile header con botón limpiar */}
            <div className="flex items-center justify-between px-4 mt-12">
              <h2 className="text-lg font-medium text-gray-900">Filtros</h2>
              <div className="flex items-center space-x-3">
                <button 
                  type="button"
                  className="text-sm text-[#D4AF37] hover:text-[#2C3E50] font-medium transition-colors duration-300"
                  onClick={clearAllFilters}
                >
                  Limpiar
                </button>
                <button 
                  type="button" 
                  className="text-gray-600 hover:text-[#D4AF37] p-2 rounded-lg hover:bg-[#D4AF37]/10 transition-all duration-300" 
                  onClick={() => setFiltersOpen(false)}
                >
                  <XIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Mobile Filters */}
            <div className="border-t border-gray-200">
              <div className="px-4 py-6">
                <h3 className="text-sm font-medium text-gray-900">Categoría</h3>
                <div className="mt-2 space-y-2">
                  {['Para Mujer', 'Para Hombre', 'Decants Premium'].map(category => (
                    <div key={category} className="flex items-center">
                      <input 
                        id={`category-${category}`} 
                        name="category[]" 
                        type="checkbox" 
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCheckboxChange(category, setSelectedCategories, selectedCategories)}
                        className="h-4 w-4 rounded border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37] focus:ring-2" 
                      />
                      <label htmlFor={`category-${category}`} className="ml-3 text-sm text-gray-600">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-4 py-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-900">Marca</h3>
                <div className="mt-2 space-y-2">
                  {availableBrands.map(brand => (
                    <div key={brand} className="flex items-center">
                      <input 
                        id={`brand-${brand}`} 
                        name="brand[]" 
                        type="checkbox" 
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleCheckboxChange(brand, setSelectedBrands, selectedBrands)}
                        className="h-4 w-4 rounded border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37] focus:ring-2" 
                      />
                      <label htmlFor={`brand-${brand}`} className="ml-3 text-sm text-gray-600">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-4 py-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-900">Precio</h3>
                <div className="mt-2 space-y-2">
                  {['Menos de $100', '$100 - $200', '$200 - $300', 'Más de $300'].map(price => (
                    <div key={price} className="flex items-center">
                      <input 
                        id={`price-${price}`} 
                        name="price[]" 
                        type="checkbox" 
                        checked={selectedPrices.includes(price)}
                        onChange={() => handleCheckboxChange(price, setSelectedPrices, selectedPrices)}
                        className="h-4 w-4 rounded border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37] focus:ring-2" 
                      />
                      <label htmlFor={`price-${price}`} className="ml-3 text-sm text-gray-600">
                        {price}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ✅ HEADER CON ORDENAMIENTO */}
          <div className="bg-white rounded-lg px-4 sm:px-6 py-4 sm:py-5 mb-6">
            
            {/* MÓVIL: Layout vertical */}
            <div className="block lg:hidden">
              <div className="text-center mb-3">
                <h1 className="text-3xl font-logo font-bold tracking-tight text-[#2C3E50] mb-0">
                  Catálogo de fragancias
                </h1>
                <p className="text-sm text-gray-600 mb-1">
                  Decants de 3ml, 5ml y 10ml desde $ {finalProducts.length > 0 ? cheapestProduct.price : '50'} MXN
                </p>
              </div>
              
              <div className="flex items-center justify-between px-1">
                <p className="text-xs text-gray-500">
                  {finalProducts.length} productos disponibles
                </p>
                <button 
                  type="button" 
                  className="bg-[#2C3E50] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#2C3E50] px-3 py-2 rounded-lg flex items-center transition-all duration-300 shadow-sm" 
                  onClick={() => setFiltersOpen(true)}
                >
                  <FilterIcon className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Filtros</span>
                </button>
              </div>
            </div>

            {/* DESKTOP: Layout horizontal compacto */}
            <div className="hidden lg:block">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-logo font-bold tracking-tight text-[#2C3E50] mb-1">
                    Catálogo de fragancias
                  </h1>
                  <div className="flex items-center space-x-4 text-sm">
                    <p className="text-gray-600">
                      Decants de 3ml, 5ml y 10ml desde $ {finalProducts.length > 0 ? cheapestProduct.price : '50'} MXN
                    </p>
                    <span className="text-gray-300">•</span>
                    <p className="text-gray-500">
                      {finalProducts.length} productos disponibles
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  {/* ✅ SELECT FUNCIONAL CON ORDENAMIENTO */}
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm font-medium text-gray-700 py-2 pl-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] bg-white"
                  >
                    <option value="relevancia">Más Relevantes</option>
                    <option value="price-asc">Precio: Menor a Mayor</option>
                    <option value="price-desc">Precio: Mayor a Menor</option>
                    <option value="disponibles">Disponibles Primero</option>
                    <option value="proximamente">Próximamente</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ CHIPS - FUNCIONANDO PERFECTAMENTE */}
          {(selectedCategories.length > 0 || selectedBrands.length > 0 || selectedPrices.length > 0) && (
            <div className="mb-6 flex flex-wrap gap-2 px-4 sm:px-0">
              <span className="text-sm text-gray-600 mr-2">Filtros activos:</span>
              
              {selectedCategories.map(category => (
                <span 
                  key={category}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#D4AF37] text-[#2C3E50]"
                >
                  {category}
                  <button 
                    onClick={() => removeFilter('category', category)}
                    className="ml-2 hover:text-red-600 transition-colors"
                    title="Remover este filtro"
                  >
                    <XIcon className="h-3 w-3" />
                  </button>
                </span>
              ))}
              
              {selectedBrands.map(brand => (
                <span 
                  key={brand}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {brand}
                  <button 
                    onClick={() => removeFilter('brand', brand)}
                    className="ml-2 hover:text-red-600 transition-colors"
                    title="Remover este filtro"
                  >
                    <XIcon className="h-3 w-3" />
                  </button>
                </span>
              ))}
              
              {selectedPrices.map(price => (
                <span 
                  key={price}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                >
                  {price}
                  <button 
                    onClick={() => removeFilter('price', price)}
                    className="ml-2 hover:text-red-600 transition-colors"
                    title="Remover este filtro"
                  >
                    <XIcon className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          <section className="pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Desktop Filters con botón limpiar */}
              <div className="hidden lg:block">
                <div className="card-solid p-6 space-y-8">
                  <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/20">
                    <h2 className="text-lg font-medium text-gray-900">Filtros</h2>
                    <button 
                      type="button"
                      className="text-sm text-[#D4AF37] hover:text-[#2C3E50] font-medium transition-colors duration-300"
                      onClick={clearAllFilters}
                    >
                      Limpiar todo
                    </button>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b border-[#D4AF37]/20">
                      Categoría
                    </h3>
                    <div className="space-y-3">
                      {['Para Mujer', 'Para Hombre', 'Decants Premium'].map(category => (
                        <div key={category} className="flex items-center">
                          <input 
                            id={`desktop-category-${category}`} 
                            name="category[]" 
                            type="checkbox" 
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCheckboxChange(category, setSelectedCategories, selectedCategories)}
                            className="h-4 w-4 rounded border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37] focus:ring-2" 
                          />
                          <label htmlFor={`desktop-category-${category}`} className="ml-3 text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b border-[#D4AF37]/20">
                      Marca
                    </h3>
                    <div className="space-y-3">
                      {availableBrands.map(brand => (
                        <div key={brand} className="flex items-center">
                          <input 
                            id={`desktop-brand-${brand}`} 
                            name="brand[]" 
                            type="checkbox" 
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleCheckboxChange(brand, setSelectedBrands, selectedBrands)}
                            className="h-4 w-4 rounded border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37] focus:ring-2" 
                          />
                          <label htmlFor={`desktop-brand-${brand}`} className="ml-3 text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                            {brand}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b border-[#D4AF37]/20">
                      Precio
                    </h3>
                    <div className="space-y-3">
                      {['Menos de $100', '$100 - $200', '$200 - $300', 'Más de $300'].map(price => (
                        <div key={price} className="flex items-center">
                          <input 
                            id={`desktop-price-${price}`} 
                            name="price[]" 
                            type="checkbox" 
                            checked={selectedPrices.includes(price)}
                            onChange={() => handleCheckboxChange(price, setSelectedPrices, selectedPrices)}
                            className="h-4 w-4 rounded border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37] focus:ring-2" 
                          />
                          <label htmlFor={`desktop-price-${price}`} className="ml-3 text-sm text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                            {price}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {finalProducts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No se encontraron productos con los filtros seleccionados.</p>
                    <button 
                      onClick={clearAllFilters}
                      className="mt-4 text-[#D4AF37] hover:text-[#2C3E50] font-medium transition-colors"
                    >
                      Limpiar filtros
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {finalProducts.map(product => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProductsPage;