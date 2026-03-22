import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../assets/raw/logo_tr.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Threshold for hero section (95vh on mobile/desktop as defined in Home.tsx)
      const threshold = window.innerHeight * 0.9;
      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Aplicaciones', path: '/aplicaciones' },
    { name: 'Materiales', path: '/materiales' },
    { name: 'Nosotros', path: '/nosotros' },
  ].filter(link => {
    if (link.path === '/' && location.pathname === '/') return false;
    return true;
  });

  return (
    <header className={`py-0 fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
      ? 'backdrop-blur-md shadow-sm'
      : 'bg-transparent'
      }`}
      style={{ backgroundColor: isScrolled ? 'rgb(255, 255, 255)' : 'transparent' }}
    >
      <div className="w-full px-8 md:px-12 flex justify-between items-center pt-2 pb-1.5">
        <Link to="/" className="hover:opacity-70 transition-all duration-500 block">
          <img
            src={logo}
            alt="DECOR REVESTIMIENTOS"
            className="h-6 md:h-7 w-auto transition-all duration-500"
            style={{ filter: isScrolled ? 'brightness(0) saturate(0) drop-shadow(0 0 0 #FFC107)' : 'brightness(1) saturate(1)' }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className={`flex list-none p-0 gap-8 text-sm tracking-wide font-medium font-gidole transition-all duration-500 ${isScrolled || !isHomePage ? 'text-black' : 'text-white'
            }`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:opacity-50 transition-opacity">{link.name}</Link>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/34603143050?text=Hola,%20vengo%20de%20la%20web%20y%20quiero%20pedir%20un%20presupuesto%20personalizado"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium font-gidole bg-white text-black border border-white/20 hover:bg-white/90 transition-all duration-300"
          >
            Quiero mi presupuesto <ArrowRight size={15} />
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 -mr-2 transition-colors duration-500 ${isScrolled || !isHomePage ? 'text-black' : 'text-white'
            }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <nav className="md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-white z-[60] flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300">
          {/* Close Button in Fullscreen Mode */}
          <button
            className="absolute top-6 right-6 p-2"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          <ul className="flex flex-col items-center list-none p-0 gap-8 text-2xl tracking-wide font-bold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:opacity-50 transition-opacity block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
