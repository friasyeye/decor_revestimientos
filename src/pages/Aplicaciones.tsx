import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { ArrowRight } from 'lucide-react';
import CtaSection from '../components/CtaSection';

const Aplicaciones = () => {
  return (
    <main className="flex flex-col">
      <FadeIn>
        <section className="w-full border-b border-black/[0.03]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-20 grid md:grid-cols-2 gap-10 md:gap-20 items-start">
            <div className="flex flex-col gap-6 md:gap-8 order-2 md:order-1 md:-mt-2 md:pl-8">
              <h1 className="text-3xl md:text-5xl font-instrumental italic tracking-tighter">Especialización técnica aplicada a cada superficie</h1>
              <div className="flex flex-col gap-4 md:gap-6 text-gray-600 text-base md:text-lg leading-relaxed font-body">
                <p>
                  Suelos, paredes, baños y piscinas tienen exigencias técnicas completamente distintas. No se trata solo de elegir un color, sino de entender que cada rincón de tu hogar requiere un tratamiento específico para soportar el uso diario, la humedad o el tránsito constante. Como especialistas, nuestro trabajo es aplicar el material exacto que garantiza la máxima adherencia y resistencia según el ambiente, asegurando que el revestimiento sea una solución definitiva y no solo estética.
                </p>
                <p>
                  Aplicamos esta precisión técnica en la renovación de baños y cocinas resistentes a la humedad y en piscinas con estanqueidad total. También ejecutamos suelos y escaleras de alto tránsito, logrando acabados sin juntas que garantizan una estética moderna y de fácil mantenimiento en toda tu vivienda.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img src="/src/assets/raw/habitacion_lamp.jpg" alt="Especialización Técnica" className="w-full max-w-sm h-auto md:ml-16 object-cover" />
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
