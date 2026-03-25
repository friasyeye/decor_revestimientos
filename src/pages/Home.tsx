import FadeIn from '../components/FadeIn';
import OptimizedImage from '../components/OptimizedImage';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <main className="flex flex-col">
      {/* 1. HERO SECTION */}
      <FadeIn>
        <section id="hero" className="relative h-[95vh] md:h-screen w-full overflow-hidden bg-black">
          {/* Imagen Hero - Posicionamiento ajustado: desplazamiento derecha en desktop, izquierda en móvil */}
          <OptimizedImage
            srcName="hero"
            alt="Microcemento en Barcelona"
            className="absolute inset-0 w-full h-full object-cover object-[60%_center] md:object-[0%_bottom] md:scale-110"
            fetchPriority="high"
            loading="eager"
          />

          {/* Overlay para legibilidad */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Titulares alineados a la izquierda y desplazados hacia arriba */}
          <div className="absolute inset-0 flex items-start pt-[18%] md:pt-0 md:items-center">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-10 text-white text-left md:-mt-22">
              <div className="flex flex-col gap-4 md:gap-3 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000 pt-10 md:pt-0">
                <h1 className="text-[10px] md:text-[15px] font-instrumental italic md:font-geist md:not-italic tracking-tighter text-white/90 font-medium drop-shadow-sm -mb-2 md:mb-0">
                  Especialistas en microcemento y revestimientos en Barcelona
                </h1>
                <p className="text-[1.85rem] sm:text-5xl md:text-7xl font-instrumental tracking-[-0.02em] md:tracking-tighter leading-[1.35] md:leading-[0.85] italic drop-shadow-md">
                  Elegancia y durabilidad <br /> en cada rincón de tu hogar
                </p>
                {/* CTA mobile only */}
                <div className="flex flex-col gap-2 mt-12 md:hidden">
                  <a
                    href="https://wa.me/34603143050?text=Hola,%20vengo%20de%20la%20web%20y%20quiero%20pedir%20un%20presupuesto%20personalizado"
                    className="inline-flex items-center gap-2 self-start rounded-lg px-5 py-3 text-sm font-medium font-gidole bg-white text-black hover:bg-white/90 transition-all duration-300"
                  >
                    Calcula tu presupuesto <ArrowRight size={15} />
                  </a>
                  <p className="text-xs text-white/60 font-body mt-6">Te llevará menos de 2 minutos</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 2. PROYECTOS PREVIEW — full-bleed image right */}
      <FadeIn delay={0.2}>
        <section id="proyectos" className="w-full overflow-hidden border-b border-black/[0.03]">
          <div className="flex flex-col md:flex-row min-h-[560px] md:min-h-[680px]">
            {/* TEXT — left column, aligned to site container */}
            <div className="order-2 md:order-1 md:w-1/2 flex items-center py-14 md:py-0">
              <div className="w-full px-6 md:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] md:pr-10 xl:pr-16 flex flex-col gap-6 md:gap-8">
                <h2 className="text-3xl md:text-5xl font-instrumental italic tracking-tighter">Transformamos superficies, creamos ambientes</h2>
                <div className="flex flex-col gap-4 md:gap-6 text-gray-600 text-base md:text-lg leading-relaxed font-body">
                  <p>
                    A menudo, cuando alguien busca microcemento para su casa, se pierde entre marcas, catálogos y tecnicismos. Es fácil abrumarse sin saber qué funcionará mejor en ese baño que quieres impecable o en el suelo del salón donde tu familia hace vida a diario.
                  </p>
                  <p>
                    En Decor Revestimientos no vendemos material; ejecutamos tu proyecto para garantizar una inversión segura y sin sorpresas. Valoramos cada soporte para aplicar la solución técnica de mayor pureza que asegure un acabado impecable y duradero.
                  </p>
                  <p>
                    Somos expertos en aplicaciones complejas y ejecutores certificados de Mortex, un micro-mortero exclusivo para quienes buscan una resistencia superior y un diseño sofisticado. Tú solo imagina el espacio; de la precisión técnica y la ejecución perfecta nos encargamos nosotros.
                  </p>
                </div>
                <Link to="/materiales" className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 transition-all duration-300 border border-black hover:bg-black hover:text-white self-start">
                  Ver galeria de trabajos <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            {/* IMAGE — right column, full-bleed to viewport right edge */}
            <div className="order-1 md:order-2 w-full md:w-1/2 h-[300px] md:h-auto mt-16 md:mt-0 md:py-16">
              <picture>
                <source media="(max-width: 600px)" srcSet="/optimized/terraza_microcemento-mobile.webp" type="image/webp" />
                <source srcSet="/optimized/terraza_microcemento-desktop.webp" type="image/webp" />
                <img src="/images/terraza_microcemento.jpg" alt="Terraza con microcemento" className="w-full h-full object-cover" loading="lazy" />
              </picture>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 3. PRECISIÓN EN CADA DETALLE CON TARJETAS */}
      <FadeIn delay={0.4}>
        <section id="precision" className="w-full border-b border-black/[0.03]" style={{ backgroundColor: '#575353ff' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-32 flex flex-col gap-12 md:gap-16">
            <div className="flex flex-col gap-6 md:gap-8">
              <h2 className="text-3xl md:text-5xl font-instrumental italic tracking-tighter text-white">Precisión en cada detalle y espacio</h2>
              <div className="flex flex-col gap-4 md:gap-6 text-white/90 text-base md:text-lg leading-relaxed font-body max-w-2xl">
                <p>
                  Cada proyecto es único y merece un enfoque personalizado. Por eso, analizamos las condiciones de humedad, tránsito y soporte de cada espacio para garantizar que el revestimiento sea, ante todo, una solución definitiva
                </p>
              </div>
            </div>

            {/* SERVICIOS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Baños y Zonas Húmedas */}
              <Link to="/aplicaciones/banos-y-zonas-humedas" className="flex flex-col gap-6 group">
                <div className="relative overflow-hidden rounded-[40px] aspect-[4/5]">
                  <picture>
                    <source media="(max-width: 600px)" srcSet="/optimized/servicios_baño-mobile.webp" type="image/webp" />
                    <source srcSet="/optimized/servicios_baño-desktop.webp" type="image/webp" />
                    <img src="/images/servicios_baño.jpg" alt="Baños y Zonas Húmedas" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  </picture>
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight size={20} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-instrumental italic tracking-tighter text-white mb-2">Baños y Zonas Húmedas</h3>
                  <p className="text-white/80 text-sm leading-relaxed font-body">
                    Superficies sin cortes ni interrupciones que garantizan higiene absoluta y resistencia total a la humedad. Un diseño de alto impacto visual totalmente adherente sobre cualquier soporte existente.
                  </p>
                </div>
              </Link>

              {/* Card 2: Exteriores y Suelos */}
              <Link to="/aplicaciones/exteriores-y-suelos" className="flex flex-col gap-6 group">
                <div className="relative overflow-hidden rounded-[40px] aspect-[4/5]">
                  <picture>
                    <source media="(max-width: 600px)" srcSet="/optimized/servicios_suelo-mobile.webp" type="image/webp" />
                    <source srcSet="/optimized/servicios_suelo-desktop.webp" type="image/webp" />
                    <img src="/images/servicios_suelo.jpg" alt="Exteriores y Suelos" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  </picture>
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight size={20} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-instrumental italic tracking-tighter text-white mb-2">Exteriores y Suelos</h3>
                  <p className="text-white/80 text-sm leading-relaxed font-body">
                    Suelos que aportan amplitud y resisten el uso diario más exigente. Un acabado continuo y elegante que une tus espacios interiores y exteriores con una durabilidad máxima.
                  </p>
                </div>
              </Link>

              {/* Card 3: Piscinas */}
              <Link to="/aplicaciones/piscinas" className="flex flex-col gap-6 group">
                <div className="relative overflow-hidden rounded-[40px] aspect-[4/5]">
                  <picture>
                    <source media="(max-width: 600px)" srcSet="/optimized/servicios_piscinas-mobile.webp" type="image/webp" />
                    <source srcSet="/optimized/servicios_piscinas-desktop.webp" type="image/webp" />
                    <img src="/images/servicios_piscinas.png" alt="Piscinas" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  </picture>
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight size={20} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-instrumental italic tracking-tighter text-white mb-2">Piscinas</h3>
                  <p className="text-white/80 text-sm leading-relaxed font-body">
                    El efecto de agua continua que buscas para tu jardín. Un revestimiento de alta pureza que garantiza la seguridad y la estanqueidad de tu piscina con un diseño de vanguardia.
                  </p>
                </div>
              </Link>

              {/* Card 4: Escaleras */}
              <Link to="/aplicaciones/escaleras" className="flex flex-col gap-6 group">
                <div className="relative overflow-hidden rounded-[40px] aspect-[4/5]">
                  <picture>
                    <source media="(max-width: 600px)" srcSet="/optimized/servicios_escalera-mobile.webp" type="image/webp" />
                    <source srcSet="/optimized/servicios_escalera-desktop.webp" type="image/webp" />
                    <img src="/images/servicios_escalera.jpg" alt="Escaleras" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  </picture>
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight size={20} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-instrumental italic tracking-tighter text-white mb-2">Escaleras</h3>
                  <p className="text-white/80 text-sm leading-relaxed font-body">
                    Transforma tus escaleras en una pieza de diseño de una sola pieza. Eliminamos los cortes y juntas del gres tradicional para lograr una estética limpia, ligera y muy fácil de mantener.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 4. NOSOTROS PREVIEW (Text Left, Image Right) */}
      <FadeIn delay={0.6}>
        <section id="nosotros" className="w-full border-b border-black/[0.03]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-14 grid md:grid-cols-2 gap-10 md:gap-20 items-start">
            <div className="flex flex-col gap-6 md:gap-8 order-1 md:order-1 md:-mt-2 md:pl-8">
              <h2 className="text-3xl md:text-5xl font-instrumental italic tracking-tighter">La maestría de un equipo que conoce el material</h2>
              <div className="flex flex-col gap-4 md:gap-6 text-gray-600 text-base md:text-lg leading-relaxed font-body">
                <p>
                  En Decor Revestimientos sumamos más de 7 años de trayectoria especializándonos en la aplicación de microcementos y micro-morteros de alta gama. Como ejecutores certificados en Barcelona, analizamos cada superficie para asegurar resultados impecables que perduran en el tiempo.
                </p>
                <p className="hidden sm:block">
                  Entendemos que el éxito de un proyecto en Barcelona reside en la precisión de la mano de obra y en la elección de la solución técnica adecuada para cada proyecto. Gracias a nuestra metodologia aportamos el rigor técnico necesario para que estética y resistencia caminen siempre de la mano.
                </p>
              </div>
              <Link to="/nosotros" className="inline-flex items-center gap-2 text-black hover:opacity-70 transition-opacity font-medium">
                Descubre más sobre el equipo
              </Link>
            </div>
            <div className="order-2 md:order-2 w-full md:flex md:justify-end">
              <div className="w-full md:h-auto md:w-auto md:mr-10">
                <OptimizedImage srcName="nosotros" alt="Nuestro Equipo Decor Revestimientos" className="w-full md:max-h-[460px] h-auto object-contain object-center" />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 5. WHATSAPP CTA */}
      <FadeIn delay={0.8}>
        <section id="whatsapp" className="max-w-7xl mx-auto px-6 md:px-4 py-24 md:py-40 text-center flex flex-col items-center">
          <div className="flex flex-col gap-8 md:gap-10 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-instrumental italic tracking-tighter">¿Hablamos de tu proyecto ahora mismo?</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-body">
              Cuéntanos tu idea y te asesoraremos sobre la solución técnica que mejor se adapta a las necesidades de tu espacio. Solicita hoy mismo tu presupuesto personalizado para tu espacio en Barcelona sin compromiso.
            </p>
            <div className="mt-4">
              <a href="https://wa.me/34603143050?text=Hola,%20vengo%20de%20la%20web%20y%20quiero%20pedir%20un%20presupuesto%20personalizado" className="inline-flex items-center justify-center rounded-full px-5 py-2 md:px-8 md:py-3 text-sm md:text-base transition-all duration-300 border border-black bg-black text-white">
                Pedir presupuesto personalizado
              </a>
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
};

export default Home;
