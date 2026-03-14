import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="container mx-auto flex justify-between items-center py-4">
      <nav>
        <ul className="flex list-none p-0 gap-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aplicaciones">Aplicaciones</Link></li>
          <li><Link to="/materiales">Materiales</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
      <div>
        [LOGO]
      </div>
    </header>
  );
};

export default Header;
