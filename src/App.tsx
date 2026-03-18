import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import Home from './pages/Home';
import Aplicaciones from './pages/Aplicaciones';
import Materiales from './pages/Materiales';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import AplicacionDetalle from './pages/AplicacionDetalle';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black font-body font-light selection:bg-black selection:text-white antialiased">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aplicaciones" element={<Aplicaciones />} />
            <Route path="/materiales" element={<Materiales />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/aplicaciones/:slug" element={<AplicacionDetalle />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppFloating />
      </div>
    </Router>
  );
}

export default App;
