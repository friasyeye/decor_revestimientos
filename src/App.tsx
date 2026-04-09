import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const Aplicaciones = lazy(() => import('./pages/Aplicaciones'));
const Materiales = lazy(() => import('./pages/Materiales'));
const Nosotros = lazy(() => import('./pages/Nosotros'));
const Contacto = lazy(() => import('./pages/Contacto'));
const AplicacionDetalle = lazy(() => import('./pages/AplicacionDetalle'));
const Proyectos = lazy(() => import('./pages/Proyectos'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-black font-body font-light selection:bg-black selection:text-white antialiased">
        <Header />
        <div className="flex-grow">
          <Suspense fallback={<div className="min-h-screen bg-white" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aplicaciones" element={<Aplicaciones />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/materiales" element={<Materiales />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/aplicaciones/:slug" element={<AplicacionDetalle />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
        <WhatsAppFloating />
      </div>
    </Router>
  );
}

export default App;
