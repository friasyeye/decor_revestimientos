const Footer = () => {
  return (
    <footer className="py-32 border-t border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-4">
            <div className="font-bold text-lg tracking-tighter">DECOR REVESTIMIENTOS</div>
            <p className="text-gray-500 text-sm">Especialistas en microcemento en Barcelona.</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-6 font-bold">Contacto</h3>
            <div className="flex flex-col gap-2 text-gray-600">
              <p>info@decorrevestimientos.com</p>
              <p>+34 600 000 000</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-6 font-bold">Social</h3>
            <ul className="list-none p-0 flex flex-col gap-2 text-gray-600">
              <li className="hover:text-black cursor-pointer transition-colors">Instagram</li>
              <li className="hover:text-black cursor-pointer transition-colors">Facebook</li>
              <li className="hover:text-black cursor-pointer transition-colors">Pinterest</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-6 font-bold">Ubicación</h3>
            <p className="text-gray-600">Barcelona, España</p>
          </div>
        </div>
        <div className="mt-24 pt-8 border-t border-gray-100 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Decor Revestimientos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
