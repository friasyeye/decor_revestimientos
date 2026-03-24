import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import logoLight from '../assets/raw/logo_tr.png';
import logoDark from '../assets/raw/logo_negro.png';

// ─── Route classification ────────────────────────────────────────────────────

type RouteMode = 'static-dark' | 'scroll-light-to-dark' | 'observer-light-to-dark';

function getRouteMode(pathname: string): RouteMode {
  if (
    pathname === '/aplicaciones' ||
    pathname === '/materiales' ||
    pathname === '/contacto' ||
    pathname.startsWith('/aplicaciones/')
  ) {
    return 'static-dark';
  }
  if (pathname === '/nosotros') {
    return 'observer-light-to-dark';
  }
  return 'scroll-light-to-dark';
}

// ─── Component ───────────────────────────────────────────────────────────────

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const mode = getRouteMode(location.pathname);

    if (mode === 'static-dark') {
      setIsDark(true);
      return;
    }

    // Light-starting routes reset state first
    setIsDark(false);

    if (mode === 'scroll-light-to-dark') {
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            setIsDark(window.scrollY > window.innerHeight * 0.9);
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }

    if (mode === 'observer-light-to-dark') {
      const setup = () => {
        observerRef.current = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            if (!entry) return;
            if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
              setIsDark(true);
            } else {
              setIsDark(false);
            }
          },
          { root: null, threshold: 0 }
        );
        const heroEl = document.getElementById('nosotros-hero');
        if (heroEl) observerRef.current.observe(heroEl);
      };

      // Defer by one tick to ensure Framer Motion has committed the DOM
      const timeoutId = setTimeout(setup, 0);

      return () => {
        clearTimeout(timeoutId);
        observerRef.current?.disconnect();
        observerRef.current = null;
      };
    }
  }, [location.pathname]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Aplicaciones', path: '/aplicaciones' },
    { name: 'Materiales', path: '/materiales' },
    { name: 'Nosotros', path: '/nosotros' },
  ].filter(link => !(link.path === '/' && location.pathname === '/'));

  return (
    <header className={`site-header py-0 fixed top-0 left-0 w-full z-50 ${isDark ? 'header--dark' : ''}`}>
      <div className="w-full px-8 md:px-12 flex justify-between items-center pt-2 pb-1.5">

        {/* Dual-logo overlay — no layout reflow on swap */}
        <Link to="/" className="relative hover:opacity-70 transition-opacity duration-300 block">
          <img
            src={logoLight}
            alt="DECOR REVESTIMIENTOS"
            className="header-logo-light h-6 md:h-7 w-auto"
          />
          <img
            src={logoDark}
            alt=""
            aria-hidden="true"
            className="header-logo-dark h-6 md:h-7 w-auto absolute inset-0"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="header-nav-text flex list-none p-0 gap-8 text-sm tracking-wide font-medium font-gidole">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:opacity-50 transition-opacity">{link.name}</Link>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/34603143050?text=Hola,%20vengo%20de%20la%20web%20y%20quiero%20pedir%20un%20presupuesto%20personalizado"
            className="header-cta-btn inline-flex items-center justify-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium font-gidole border hover:opacity-90 transition-opacity duration-300"
          >
            Quiero mi presupuesto <ArrowRight size={15} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="header-mobile-icon md:hidden p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <nav className="md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-white z-[60] flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300">
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
