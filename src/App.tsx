import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ShippingPage from './pages/ShippingPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartProvider';
import CartDrawer from './components/CartDrawer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';
import FragranceInfoPage from './pages/FragranceInfoPage';
import PrivacidadPage from './pages/PrivacydadPage';
import TerminosCondicionesPage from './pages/TermsAndConditionsPage';

export function App() {
  return (
    <CartProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <ScrollToTop />
        <ScrollToTopOnNavigate />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <CartDrawer />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/fragancias" element={<ProductsPage />} />
              <Route path="/fragancia/:slug" element={<ProductDetailPage />} /> {/* Recuerde actualizar los enlaces y la lógica de ProductDetailPage */}
              <Route path="/iniciar-sesion" element={<LoginPage />} />
              <Route path="/sobre-mi" element={<AboutPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path='/envios-devoluciones' element={<ShippingPage />} />
              <Route path='/carrito' element={<CartPage />} />
              <Route path='/informacion-fragancias' element={<FragranceInfoPage />} />
              <Route path="/privacidad" element={<PrivacidadPage />} />
              <Route path="/terminos-condiciones" element={<TerminosCondicionesPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}