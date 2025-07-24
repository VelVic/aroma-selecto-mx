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
import { CartProvider } from './context/CartContext'; // ← IMPORTAR
import ScrollToTop from './components/ScrollToTop'; // ← AGREGA ESTA LÍNEA

export function App() {
  return (
    <CartProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <ScrollToTop /> {/* ← AGREGA ESTA LÍNEA */}
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/fragancias" element={<ProductsPage />} />
              <Route path="/fragancia/:id" element={<ProductDetailPage />} />
              <Route path="/iniciar-sesion" element={<LoginPage />} />
              <Route path="/nosotros" element={<AboutPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path='/envios-devoluciones' element={<ShippingPage />} />
              <Route path='/carrito' element={<CartPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}