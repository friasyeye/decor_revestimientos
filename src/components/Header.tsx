import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-6 border-b border-gray-100">
      <div className="container-custom flex justify-between items-center">
        <div className="font-bold text-xl tracking-tighter">
          DECOR REVESTIMIENTOS
        </div>
        <nav>
          <ul className="flex list-none p-0 gap-8 text-sm uppercase tracking-widest font-medium">
            <li><Link to="/" className="hover:opacity-50 transition-opacity">Home</Link></li>
            <li><Link to="/aplicaciones" className="hover:opacity-50 transition-opacity">Aplicaciones</Link></li>
            <li><Link to="/materiales" className="hover:opacity-50 transition-opacity">Materiales</Link></li>
            <li><Link to="/nosotros" className="hover:opacity-50 transition-opacity">Nosotros</Link></li>
            <li><Link to="/contacto" className="hover:opacity-50 transition-opacity">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
