import logo from '../assets/raw/logo_tr.png';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-32 text-white border-t border-gray-700" style={{ backgroundColor: '#575353ff' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24">
          <div className="flex flex-col gap-6 md:col-span-1">
            <img
              src={logo}
              alt="DECOR REVESTIMIENTOS"
              className="h-12 md:h-16 w-auto transition-all duration-500 brightness-100 self-start"
            />
            <p className="text-gray-300 text-sm">Especialistas en microcemento en Barcelona.</p>
          </div>
          <div>
            <h3 className="text-base font-titles italic mb-6 font-semibold">Contacto</h3>
            <div className="flex flex-col gap-3 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <p>info@decorrevestimientos.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <p>+34 603 14 30 50</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-base font-titles italic mb-6 font-semibold">Navegación</h3>
            <ul className="list-none p-0 flex flex-col gap-3 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Inicio</li>
              <li className="hover:text-white cursor-pointer transition-colors">Aplicaciones</li>
              <li className="hover:text-white cursor-pointer transition-colors">Materiales</li>
              <li className="hover:text-white cursor-pointer transition-colors">Nosotros</li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-titles italic mb-6 font-semibold">Ubicación</h3>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <MapPin size={16} />
              <p>Barcelona, España</p>
            </div>
          </div>
        </div>
        <div className="mt-24 pt-8 border-t border-gray-700 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between">
            <p>&copy; {new Date().getFullYear()} Decor Revestimientos. Todos los derechos reservados.</p>
            <p>Diseñado por <a href="https://automatizaya-ia.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Automatiza Ya</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
