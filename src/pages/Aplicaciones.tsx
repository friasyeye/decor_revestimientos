import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { ArrowRight } from 'lucide-react';
import CtaSection from '../components/CtaSection';

const Aplicaciones = () => {
  return (
    <main className="flex flex-col">
      <FadeIn>
        <section className="w-full overflow-hidden border-b border-black/[0.03]">
          {/* Mobile layout: white space → image → text */}
          <div className="flex flex-col md:hidden pt-24">
            <div className="w-full">
              <img
                src="/src/assets/raw/habitacion_lamp.jpg"
                alt="Especialización Técnica"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="px-6 py-12 flex flex-col gap-6">
              <p className="text-xs font-body text-gray-400 uppercase tracking-widest">Aplicaciones</p>
              <h1 className="text-3xl font-instrumental italic tracking-tighter">Especialización técnica aplicada a cada superficie</h1>
              <p className="text-gray-600 text-base leading-relaxed font-body">
                No todos los revestimientos son iguales. Seleccionamos cada material según las exigencias técnicas de tu espacio para garantizar adherencia, resistencia y una estética que perdura. No nos limitamos a aplicar un producto; analizamos el estado de tu soporte, los niveles de humedad y el uso previsto en cada zona de la vivienda para recomendarte la solución técnica exacta. Nuestro compromiso es que la belleza del acabado sea solo el reflejo de una base sólida y bien ejecutada por manos expertas en Barcelona.
              </p>
            </div>
          </div>
          {/* Desktop layout: same structure as Materiales, image flush right */}
          <div className="hidden md:grid md:grid-cols-2 gap-10 md:gap-20 items-start max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-20 w-full">
            <div className="flex flex-col gap-8 order-2 md:order-1">
              <p className="text-sm font-body text-gray-400 uppercase tracking-widest">Aplicaciones</p>
              <h1 className="text-5xl font-instrumental italic tracking-tighter">Especialización técnica aplicada a cada superficie</h1>
              <p className="text-gray-600 text-lg leading-relaxed font-body">
                No todos los revestimientos son iguales. Seleccionamos cada material según las exigencias técnicas de tu espacio para garantizar adherencia, resistencia y una estética que perdura. No nos limitamos a aplicar un producto; analizamos el estado de tu soporte, los niveles de humedad y el uso previsto en cada zona de la vivienda para recomendarte la solución técnica exacta. Nuestro compromiso es que la belleza del acabado sea solo el reflejo de una base sólida y bien ejecutada por manos expertas en Barcelona.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-end">
              <img src="/src/assets/raw/habitacion_lamp.jpg" alt="Especialización Técnica" className="w-[85%] h-auto object-cover" />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ÁREAS DE INTERVENCIÓN TÉCNICA */}
      <FadeIn delay={0.2}>
        <section id="areas" className="w-full border-b border-black/[0.03]" style={{ backgroundColor: '#ffffff' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-32 flex flex-col gap-12 md:gap-16">
            <div className="flex flex-col gap-6 md:gap-8">
              <h2 className="text-3xl md:text-5xl font-instrumental italic tracking-tighter text-black">Áreas de intervención técnica</h2>
              <div className="flex flex-col gap-4 md:gap-6 text-gray-600 text-base md:text-lg leading-relaxed font-body max-w-2xl">
                <p>
                  No nos limitamos a cubrir superficies; resolvemos espacios.
                </p>
              </div>
            </div>

            {/* SERVICIOS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Baños y Zonas Húmedas */}
              <Link to="/aplicaciones/banos-y-zonas-humedas" className="flex flex-col gap-6 group">
                <div className="relative overflow-hidden rounded-[40px] aspect-[4/5]">
                  <img
                    src="/src/assets/raw/servicios_baño.jpg"
                    alt="Baños y Zonas Húmedas"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight size={20} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-instrumental italic tracking-tighter text-black mb-2">Baños y Zonas Húmedas</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-body">
                    Superficies sin cortes ni interrupciones que garantizan higiene absoluta y resistencia total a la humedad. Un diseño de alto impacto visual totalmente adherente sobre cualquier soporte existente.
                  </p>
                </div>
              </Link>

              {/* Card 2: Exteriores y Suelos */}
              <Link to="/aplicaciones/exteriores-y-suelos" className="flex flex-col gap-6 group">
                <div className="relative overflow-hidden rounded-[40px] aspect-[4/5]">
                  <img
                    src="/src/assets/raw/servicios_suelo.jpg"
                    alt="Exteriores y Suelos"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight size={20} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-instrumental italic tracking-tighter text-black mb-2">Exteriores y Suelos</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-body">
                    Suelos que aportan amplitud y resisten el uso diario más exigente. Un acabado continuo y elegante que une tus espacios interiores y exteriores con una durabilidad máxima.
                  </p>
                </div>
              </Link>

              {/* Card 3: Piscinas */}
              <Link to="/aplicaciones/piscinas" className="flex flex-col gap-6 group">
                <div className="relative overflow-hidden rounded-[40px] aspect-[4/5]">
                  <img
                    src="/src/assets/raw/servicios_piscinas.png"
                    alt="Piscinas"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight size={20} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-instrumental italic tracking-tighter text-black mb-2">Piscinas</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-body">
                    El efecto de agua continua que buscas para tu jardín. Un revestimiento de alta pureza que garantiza la seguridad y la estanqueidad de tu piscina con un diseño de vanguardia.
                  </p>
                </div>
              </Link>

              {/* Card 4: Escaleras */}
              <Link to="/aplicaciones/escaleras" className="flex flex-col gap-6 group">
                <div className="relative overflow-hidden rounded-[40px] aspect-[4/5]">
                  <img
                    src="/src/assets/raw/servicios_escalera.jpg"
                    alt="Escaleras"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight size={20} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-instrumental italic tracking-tighter text-black mb-2">Escaleras</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-body">
                    Transforma tus escaleras en una pieza de diseño de una sola pieza. Eliminamos los cortes y juntas del gres tradicional para lograr una estética limpia, ligera y muy fácil de mantener.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      <CtaSection
        title="¿Hablamos de tu proyecto?"
        description="Cuéntanos qué espacios quieres transformar y te daremos una orientación técnica integral para tu vivienda o negocio. Analizamos cada superficie para garantizar que el revestimiento sea, ante todo, una solución definitiva y personalizada."
        buttonText="Pedir presupuesto personalizado"
      />
    </main>
  );
};

export default Aplicaciones;
