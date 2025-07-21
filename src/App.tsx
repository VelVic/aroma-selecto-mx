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

export function App() {
  return (
    <CartProvider> {/* ← ENVOLVER TODO */}
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/productos" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/acerca" element={<AboutPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path='/envios' element={<ShippingPage />} />
              <Route path='/carrito' element={<CartPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}