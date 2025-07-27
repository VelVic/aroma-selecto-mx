import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ShoppingBagIcon, HeartIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon, StarIcon, CheckIcon, SnowflakeIcon, LeafIcon, Flower2Icon, SunIcon, CarIcon, PackageIcon, ZapIcon, MessageCircleIcon } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/useCart';
import { getProductById, getSimilarProducts, type Product } from '../data/products';
import { reviews } from '../data/reviews';
import Button from '../components/Button';
import TestimonialCarousel from '../components/TestimonialCarousel';
import SectionTitle from '../components/SectionTitle';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const product = getProductById(id || '1');

  // Filtra los reviews por el producto actual
const productReviews = product
  ? reviews
      .filter(r => r.productId === product.id)
      .map(r => ({
        ...r,
        avatar: r.avatar ?? 'assets/images/avatars/default_avatar.jpg', // <-- aquí aseguras el string
      }))
  : [];
  // Nueva lógica para variantes
  // Selecciona la primera variante con stock > 0, o la primera si todas están agotadas
  const getDefaultVariant = (product: Product | undefined) => {
    if (!product || !product.variants) return null;
    return product.variants.find((v) => v.stock > 0) || product.variants[0] || null;
  };
  const [selectedVariant, setSelectedVariant] = useState(getDefaultVariant(product));
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [showOccasion, setShowOccasion] = useState(false);
  const [showShipping, setShowShipping] = useState(false);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [zoomOpen, setZoomOpen] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(getDefaultVariant(product));
      setQuantity(1);
      setMainImage(product.images?.[0] || product.image);
      setCurrentImageIndex(0);
      setShowDetails(false);
      setShowOccasion(false);
      setShowShipping(false);
      setIsAdding(false);
      setJustAdded(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [id, product]);

  useEffect(() => {
    if (product && product.images && product.images.length > 1 && !isCarouselPaused) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          const images = product.images || [];
          const nextIndex = images.length > 0 ? (prevIndex + 1) % images.length : 0;
          if (images.length > 0) {
            setMainImage(images[nextIndex]);
          }
          return nextIndex;
        });
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [product, isCarouselPaused]);

  const goToPrevImage = () => {
    if (product && product.images) {
      const prevIndex = currentImageIndex === 0 ? product.images.length - 1 : currentImageIndex - 1;
      setCurrentImageIndex(prevIndex);
      setMainImage(product.images[prevIndex]);
    }
  };

  const goToNextImage = () => {
    if (product && product.images) {
      const nextIndex = (currentImageIndex + 1) % product.images.length;
      setCurrentImageIndex(nextIndex);
      setMainImage(product.images[nextIndex]);
    }
  };

  const selectImage = (image: string, index: number) => {
    setMainImage(image);
    setCurrentImageIndex(index);
  };

  // Zoom modal handlers
  const handleMainImageClick = () => {
    setIsCarouselPaused(true);
    setZoomOpen(true);
  };
  const handleCloseZoom = () => {
    setZoomOpen(false);
    setTimeout(() => setIsCarouselPaused(false), 200); // Pequeño delay para evitar conflicto visual
  };

  const handleAddToCart = () => {
    if (!product || !selectedVariant || selectedVariant.stock === 0) return;
    setIsAdding(true);

    const productToAdd = {
      id: product.id,
      name: product.name,
      brand: product.brand,
      image: product.image,
      size: selectedVariant.size,
      price: selectedVariant.price,
      stock: selectedVariant.stock,
      quantity
    };
    addToCart(productToAdd, quantity);

    setTimeout(() => {
      setIsAdding(false);
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 3000);
    }, 200);
  };

  const averageRating =
  productReviews.length > 0
    ? (
        productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length
      ).toFixed(1)
    : null;

  if (!product) {
    return (
      <div className="bg-white pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-logo font-bold text-gray-900 mb-4">
            Producto no encontrado
          </h1>
          <p className="text-[#BDC3C7] mb-8">El producto que buscas no existe o ha sido eliminado.</p>
          <button
            onClick={() => navigate('/productos')}
            className="bg-[#2C3E50] text-[#D4AF37] py-3 px-6 rounded-lg font-medium hover:bg-[#D4AF37] hover:text-[#2C3E50] transition-all duration-300"
          >
            Ver catálogo
          </button>
        </div>
      </div>
    );
  }

  const similarProducts = getSimilarProducts(product.id);

  // Tipar correctamente el handler de variantes
  type ProductVariant = {
    size: string;
    price: number;
    stock: number;
  };
  const handleVariantChange = (variant: ProductVariant) => {
    setSelectedVariant(variant);
    setQuantity(1);
  };
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);
  const increaseQuantity = () => {
    if (selectedVariant && quantity < selectedVariant.stock) setQuantity(quantity + 1);
  };

  const productImages = product.images || [product.image];

  return (
    <div className="bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-6">
          {/* Product images */}
          <div className="lg:col-span-2 flex flex-col items-center">
            <div className="relative group w-full max-w-md">
              <div className="aspect-[5/6] rounded-lg overflow-hidden border-2 border-gray-200 hover:border-[#D4AF37] transition-colors duration-300 shadow-md cursor-zoom-in">
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onClick={handleMainImageClick}
                  style={{ cursor: 'zoom-in' }}
                />
      {/* Zoom Modal */}
      {zoomOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-80 cursor-zoom-out animate-fadeIn"
          onClick={handleCloseZoom}
        >
          <img
            src={mainImage}
            alt={product.name}
            className="max-h-[90vh] max-w-[95vw] rounded-lg shadow-2xl border-4 border-[#D4AF37] object-contain"
            style={{ cursor: 'zoom-out' }}
            onClick={handleCloseZoom}
          />
        </div>
      )}
                {productImages.length > 1 && (
                  <>
                    <button
                      onClick={goToPrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B] text-[#2C3E50] hover:text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/20 transition-all duration-300 hover:scale-110 z-10 group/btn opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeftIcon className="h-5 w-5 group-hover/btn:scale-110 transition-transform duration-200" />
                    </button>
                    <button
                      onClick={goToNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B] text-[#2C3E50] hover:text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/20 transition-all duration-300 hover:scale-110 z-10 group/btn opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRightIcon className="h-5 w-5 group-hover/btn:scale-110 transition-transform duration-200" />
                    </button>
                  </>
                )}
              </div>
              {productImages.length > 1 && (
                <div className="mt-3 w-full">
                  <div className="grid grid-cols-3 gap-2 max-w-[240px] mx-auto">
                    {productImages.map((image, idx) => (
                      <button
                        key={idx}
                        className={`aspect-square rounded-md overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                          currentImageIndex === idx
                            ? 'ring-2 ring-[#D4AF37]/30 border-[#D4AF37] shadow-md'
                            : 'ring-1 ring-gray-200 border-gray-200 hover:border-[#D4AF37]/50'
                        }`}
                        onClick={() => selectImage(image, idx)}
                      >
                        <img
                          src={image}
                          alt={`${product.name} view ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Product info */}
          <div className="mt-8 lg:mt-0 lg:col-span-3">
            {product.isNew && (
              <div className="inline-block bg-[#2C3E50] text-[#D4AF37] text-xs font-medium px-2.5 py-1 rounded-md mb-4">
                Nuevo
              </div>
            )}

            <h1 className="text-3xl lg:text-4xl font-logo font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>
            <h2 className="text-lg text-[#BDC3C7] mt-2">{product.brand}</h2>

            <div className="mt-5">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Tamaños (Variants) */}
            {product.variants && product.variants.length > 0 && (
              <div className="mt-6">
                <h3 className="text-base font-medium text-gray-900 mb-3">Tamaños</h3>
                <div className="grid grid-cols-3 gap-3">
                  {product.variants.map(variant => (
                    <div key={variant.size} className="relative">
                      <button
                        type="button"
                        className={`relative w-full flex flex-col items-center justify-center rounded-lg border-2 py-2 px-2 text-base font-medium transition-all duration-300 ${
                          selectedVariant && selectedVariant.size === variant.size
                            ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] shadow-md'
                            : 'border-gray-300 bg-white text-gray-900 hover:border-[#D4AF37]/50 hover:bg-[#F9F9F9]'
                        } ${variant.stock === 0 ? 'opacity-50' : ''}`}
                        onClick={() => handleVariantChange(variant)}
                        aria-disabled={variant.stock === 0}
                      >
                        <span className="text-lg font-bold">{variant.size}</span>
                        {variant.size === '10ml' && (
                          <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                            Popular
                          </span>
                        )}
                        {variant.stock === 0 && (
                          <span className="absolute bottom-1 left-1 right-1 text-xs text-red-500 font-semibold">Agotado</span>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
                {selectedVariant && selectedVariant.size === '10ml' && (
                  <div className="mt-4 p-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center">
                        <StarIcon className="h-3.5 w-3.5 fill-white" />
                      </div>
                      <span className="text-sm font-medium text-blue-800">
                        <strong>Mejor relación cantidad-precio</strong> - Más producto por tu dinero
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="mt-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-gray-900">$</span>
                  <span className="text-2xl font-bold text-gray-900 mx-2">
                    {selectedVariant ? selectedVariant.price.toFixed(0) : '--'}
                  </span>
                  <span className="text-lg font-medium text-[#BDC3C7]">MXN</span>
                </div>
                <p className="text-base text-[#BDC3C7]">
                  <span className={`mr-2 ${
                    selectedVariant && selectedVariant.stock === 0
                      ? 'text-red-500'
                      : selectedVariant && selectedVariant.stock >= 40
                        ? 'text-green-500'
                        : 'text-orange-500'
                  }`}>●</span>
                  <span className={`font-medium ${
                    selectedVariant && selectedVariant.stock === 0
                      ? 'text-red-500'
                      : selectedVariant && selectedVariant.stock >= 40
                        ? 'text-green-500'
                        : 'text-orange-500'
                  }`}>
                    {selectedVariant && selectedVariant.stock === 0
                      ? 'Agotado'
                      : selectedVariant && selectedVariant.stock >= 40
                        ? 'Disponible'
                        : 'Agotándose'
                    }
                  </span>
                </p>
              </div>

              {/* CONTADOR */}
              <div className="flex justify-center mb-6">
                <div className="flex border-2 border-gray-300 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    className="px-4 py-2 text-base text-[#BDC3C7] hover:text-[#D4AF37] hover:bg-[#F9F9F9] transition-colors"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <span className="px-6 py-2 bg-[#F9F9F9] text-gray-900 font-medium text-base">{quantity}</span>
                  <button
                    type="button"
                    className="px-4 py-2 text-base text-[#BDC3C7] hover:text-[#D4AF37] hover:bg-[#F9F9F9] transition-colors"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* BOTONES */}
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Botón Agregar al carrito */}
                <Button
                  onClick={handleAddToCart}
                  disabled={!selectedVariant || selectedVariant.stock === 0}
                  className="flex-1"
                  style={justAdded ? { backgroundColor: '#16a34a', color: '#fff' } : {}}
                >
                  {isAdding ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Agregando...
                    </>
                  ) : justAdded ? (
                    <>
                      <CheckIcon className="h-5 w-5 mr-2" />
                      ¡Agregado al carrito!
                    </>
                  ) : (
                    <>
                      <ShoppingBagIcon className="h-5 w-5 mr-2" />
                      {selectedVariant && selectedVariant.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
                    </>
                  )}
                </Button>

                {/* Botón Favoritos */}
                <Button
                  variant="outline"
                  className="flex-1"
                >
                  <HeartIcon className="h-5 w-5 mr-2" />
                  Favoritos
                </Button>
              </div>

              {/* MENSAJE DE CONFIRMACIÓN */}
              {justAdded && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-green-800 text-sm font-medium">
                      {quantity > 1 ? `${quantity} productos agregados` : 'Producto agregado'} al carrito ({selectedVariant?.size})
                    </span>
                  </div>
                </div>
              )}

              {/* DETALLES DEL PRODUCTO - ACORDEÓN */}
              {product.details && product.details.length > 0 && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex items-center justify-between w-full text-left mb-3"
                  >
                    <h3 className="text-base font-medium text-gray-900">Detalles del producto</h3>
                    <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 text-gray-900 hover:text-[#D4AF37] ${showDetails ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${showDetails ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className="space-y-2 pb-1">
                      {product.details.map((detail, idx) => (
                        <li key={idx} className="text-[#BDC3C7] flex items-start text-sm">
                          <span className="text-[#D4AF37] mr-2 text-lg">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* OCASIÓN - ACORDEÓN */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button
                  onClick={() => setShowOccasion(!showOccasion)}
                  className="flex items-center justify-between w-full text-left mb-3"
                >
                  <h3 className="text-base font-medium text-gray-900">Ocasión</h3>
                  <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 text-gray-900 hover:text-[#D4AF37] ${showOccasion ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${showOccasion ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-4 pb-1">
                    {/* Ocasiones dinámicas */}
                    <div>
                      <ul className="space-y-1">
                        {product.occasions && product.occasions.length > 0 ? (
                          product.occasions.map((item, idx) => (
                            <li key={idx} className="text-[#BDC3C7] flex items-start text-sm">
                              <span className="text-[#D4AF37] mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))
                        ) : (
                          <li className="text-[#BDC3C7] flex items-start text-sm">
                            <span className="text-[#D4AF37] mr-2">•</span>
                            <span>No especificado</span>
                          </li>
                        )}
                      </ul>
                    </div>
                    {product.seasons && product.seasons.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Temporada:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {product.seasons.map((season, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-sm bg-[#F9F9F9] border border-gray-200 rounded-lg px-3 py-2 hover:border-[#D4AF37] transition-colors"
                            >
                              <span className="text-[#D4AF37] mr-2">
                                {season === 'Invierno' && <SnowflakeIcon className="h-5 w-5" />}
                                {season === 'Otoño' && <LeafIcon className="h-5 w-5" />}
                                {season === 'Primavera' && <Flower2Icon className="h-5 w-5" />}
                                {season === 'Verano' && <SunIcon className="h-5 w-5" />}
                              </span>
                              <span className="text-gray-700 font-medium">{season}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}                  
                  </div>
                </div>
              </div>

              {/* INFORMACIÓN DE ENVÍOS - ACORDEÓN */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button
                  onClick={() => setShowShipping(!showShipping)}
                  className="flex items-center justify-between w-full text-left mb-3"
                >
                  <h3 className="text-base font-medium text-gray-900">Información de envíos</h3>
                  <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 text-gray-900 hover:text-[#D4AF37] ${showShipping ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${showShipping ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-3 pb-1">
                    <div className="flex items-center text-[#BDC3C7] text-sm">
                      <span className="text-[#D4AF37] mr-2"><CarIcon className="h-5 w-5" /></span>
                      <span><strong>Entrega personal</strong> normalmente al día siguiente en Gutiérrez Zamora y zonas cercanas.</span>
                    </div>
                    <div className="flex items-center text-[#BDC3C7] text-sm">
                      <span className="text-[#D4AF37] mr-2"><PackageIcon className="h-5 w-5" /></span>
                      <span><strong>Envío Estándar</strong> a todo México de 3 a 5 días.</span>
                    </div>
                    <div className="flex items-center text-[#BDC3C7] text-sm">
                      <span className="text-[#D4AF37] mr-2"><ZapIcon className="h-5 w-5" /></span>
                      <span><strong>Envío Express</strong> a todo México de 2 a 3 días.</span>
                    </div>
                    <div className="text-sm pt-2">
                      <Link to="/envios-devoluciones" className="text-[#D4AF37] hover:text-[#2C3E50] underline transition-colors">
                        Consulta nuestras políticas de envío aquí
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Comentarios */}
          <section className="py-16 bg-[#F9F9F9] border-t border-[#D4AF37]/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl shadow-sm px-4 py-10 flex flex-col items-center">
                {averageRating && (
                  <div className="flex items-center mb-6 justify-center">
                    <span className="text-2xl font-bold text-[#D4AF37] mr-2">{averageRating}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-5 w-5 ${i < Math.round(Number(averageRating)) ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-[#BDC3C7]'}`}
                          fill={i < Math.round(Number(averageRating)) ? '#D4AF37' : 'none'}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-[#BDC3C7] text-sm">
                      ({productReviews.length} {productReviews.length === 1 ? 'opinión' : 'opiniones'})
                    </span>
                  </div>
                )}
                {productReviews.length > 0 ? (
                  <div className="w-full">
                    <TestimonialCarousel testimonials={productReviews} />
                  </div>
                ) : (
                <div className="mt-6 flex flex-col items-center justify-center bg-[#F9F9F9] border border-[#D4AF37]/30 rounded-xl p-8 shadow-sm">
                  <MessageCircleIcon className="h-12 w-12 mb-4 text-[#D4AF37]" />
                  <span className="text-xl font-semibold text-[#2C3E50] mb-2">Aún sin opiniones para este producto</span>
                  <span className="text-base text-[#BDC3C7] mb-4">¡Sé el primero en dejar tu experiencia!</span>
                  <a
                    href="https://forms.gle/8XvtGT317mgxgQ5T7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] underline hover:text-[#2C3E50] transition-colors text-base font-medium mb-2"
                  >
                    Deja tu opinión aquí
                  </a>
                  <span className="text-xs text-[#BDC3C7]">
                    o envíanos mensaje a <a href="https://instagram.com/aromaselecto.mx" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] underline hover:text-[#2C3E50]">Instagram</a>
                  </span>
                </div>
                )}
              </div>
            </div>
          </section>

          {/* Sección de productos similares */}
          <section className="py-16 bg-white border-t border-[#D4AF37]/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionTitle> También te podrían gustar</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarProducts.map(product => {
                  const hasVariants = Array.isArray(product.variants) && product.variants.length > 0;
                  const safePrice = hasVariants && typeof product.variants[0].price === 'number' && !isNaN(product.variants[0].price)
                    ? product.variants[0].price
                    : 0;
                  return (
                    <ProductCard
                      key={product.id}
                      {...product}
                      price={safePrice}
                      variants={Array.isArray(product.variants) ? product.variants : []}
                    />
                  );
                })}
              </div>
            </div>
          </section>
    </div>
  );
};

export default ProductDetailPage;