import { useRef, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import CtaSection from '../components/CtaSection';
import RevealImage from '../components/RevealImage';

const CARDS = [
  {
    to: '/aplicaciones/banos-y-zonas-humedas',
    srcMobile: '/optimized/servicios_baño-mobile.webp',
    srcDesktop: '/optimized/servicios_baño-desktop.webp',
    src: '/images/servicios_baño.jpg',
    alt: 'Baños y Zonas Húmedas',
    title: 'Baños y Zonas Húmedas',
    desc: 'Superficies sin cortes ni interrupciones que garantizan higiene absoluta y resistencia total a la humedad. Un diseño de alto impacto visual totalmente adherente sobre cualquier soporte existente.',
  },
  {
    to: '/aplicaciones/exteriores-y-suelos',
    srcMobile: '/optimized/servicios_suelo-mobile.webp',
    srcDesktop: '/optimized/servicios_suelo-desktop.webp',
    src: '/images/servicios_suelo.jpg',
    alt: 'Exteriores y Suelos',
    title: 'Exteriores y Suelos',
    desc: 'Suelos que aportan amplitud y resisten el uso diario más exigente. Un acabado continuo y elegante que une tus espacios interiores y exteriores con una durabilidad máxima.',
  },
  {
    to: '/aplicaciones/piscinas',
    srcMobile: '/optimized/servicios_piscinas-mobile.webp',
    srcDesktop: '/optimized/servicios_piscinas-desktop.webp',
    src: '/images/servicios_piscinas.png',
    alt: 'Piscinas',
    title: 'Piscinas',
    desc: 'El efecto de agua continua que buscas para tu jardín. Un revestimiento de alta pureza que garantiza la seguridad y la estanqueidad de tu piscina con un diseño de vanguardia.',
  },
  {
    to: '/aplicaciones/escaleras',
    srcMobile: '/optimized/servicios_escalera-mobile.webp',
    srcDesktop: '/optimized/servicios_escalera-desktop.webp',
    src: '/images/servicios_escalera.jpg',
    alt: 'Escaleras',
    title: 'Escaleras',
    desc: 'Transforma tus escaleras en una pieza de diseño de una sola pieza. Eliminamos los cortes y juntas del gres tradicional para lograr una estética limpia, ligera y muy fácil de mantener.',
  },
  {
    to: '/aplicaciones/mobiliario-y-proyectos-especiales',
    srcMobile: '',
    srcDesktop: '',
    src: '/images/mobiliario.png',
    alt: 'Mobiliario de microcemento a medida Barcelona',
    title: 'Mobiliario y Proyectos Especiales',
    desc: 'Diseño continuo sobre mobiliario de autor, encimeras y lavabos de obra con adherencia garantizada sobre cualquier material base.',
  },
];

const SCROLL_AMOUNT = 320;

const Aplicaciones = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLAnchorElement>(null);
  const lastRef = useRef<HTMLAnchorElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows, { passive: true });
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      ro.disconnect();
    };
  }, [updateArrows]);

  const scrollBy = (dir: 1 | -1) => {
    sliderRef.current?.scrollBy({ left: dir * SCROLL_AMOUNT, behavior: 'smooth' });
  };

  return (
    <main className="flex flex-col">
      <FadeIn onMount>
        <section className="w-full overflow-hidden border-b border-black/[0.03]">
          {/* Mobile layout: white space → image → text */}
          <div className="flex flex-col md:hidden pt-24">
            <div className="w-full">
              <RevealImage
                src="/images/tecnica_superficie.png"
                srcMobile="/optimized/tecnica_superficie-mobile.webp"
                srcDesktop="/optimized/tecnica_superficie-desktop.webp"
                alt="Especialización Técnica"
                imgClassName="w-full h-auto object-cover"
                loading="eager"
                onMount
              />
            </div>
            <div className="px-6 py-12 flex flex-col gap-6">
              <p className="text-xs font-body text-gray-400 uppercase tracking-widest">Aplicaciones</p>
              <h1 className="text-3xl font-instrumental italic tracking-tighter">Aplicaciones Técnicas de Microcemento y Mortex</h1>
              <p className="text-gray-600 text-base leading-relaxed font-body">
                No todos los revestimientos son iguales. Seleccionamos cada material según las exigencias técnicas de tu espacio para garantizar adherencia, resistencia y una estética que perdura. No nos limitamos a aplicar un producto; analizamos el estado de tu soporte, los niveles de humedad y el uso previsto en cada zona de la vivienda para recomendarte la solución técnica exacta. Nuestro compromiso es que la belleza del acabado sea solo el reflejo de una base sólida y bien ejecutada por manos expertas en Barcelona.
              </p>
            </div>
          </div>
          {/* Desktop layout: text contained, image flush right at natural size */}
          <div className="hidden md:grid md:grid-cols-2 gap-20 items-start max-w-7xl mx-auto px-6 md:px-10 py-20">
            <div className="flex flex-col gap-8">
              <p className="text-sm font-body text-gray-400 uppercase tracking-widest">Aplicaciones</p>
              <h1 className="text-5xl font-instrumental italic tracking-tighter">Especialización técnica aplicada a cada superficie</h1>
              <p className="text-gray-600 text-lg leading-relaxed font-body">
                No todos los revestimientos son iguales. Seleccionamos cada material según las exigencias técnicas de tu espacio para garantizar adherencia, resistencia y una estética que perdura. No nos limitamos a aplicar un producto; analizamos el estado de tu soporte, los niveles de humedad y el uso previsto en cada zona de la vivienda para recomendarte la solución técnica exacta. Nuestro compromiso es que la belleza del acabado sea solo el reflejo de una base sólida y bien ejecutada por manos expertas en Barcelona.
              </p>
            </div>
            <RevealImage
              src="/images/tecnica_superficie.png"
              srcDesktop="/optimized/tecnica_superficie-desktop.webp"
              alt="Especialización Técnica"
              imgClassName="w-auto max-h-[400px] ml-16 mr-20 mt-9"
              loading="eager"
              onMount
            />
          </div>
        </section>
      </FadeIn>

      {/* ÁREAS DE INTERVENCIÓN TÉCNICA */}
      <FadeIn delay={0.2}>
        <section id="areas" className="w-full border-b border-black/[0.03]" style={{ backgroundColor: '#ffffff' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-32 flex flex-col gap-12 md:gap-16">
            <div className="flex flex-col gap-6 md:gap-8">
              <h2 className="text-3xl md:text-5xl font-instrumental italic tracking-tighter text-black">Áreas de intervención técnica</h2>
              <div className="flex items-center justify-between gap-4">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed font-body">
                  No nos limitamos a cubrir superficies; resolvemos espacios.
                </p>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <button
                    onClick={() => scrollBy(-1)}
                    disabled={!canPrev}
                    aria-label="Anterior"
                    className="btn-press w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:bg-black hover:text-white hover:border-black disabled:opacity-25 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => scrollBy(1)}
                    disabled={!canNext}
                    aria-label="Siguiente"
                    className="btn-press w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:bg-black hover:text-white hover:border-black disabled:opacity-25 disabled:cursor-not-allowed"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* SERVICIOS SLIDER */}
            <div className="relative">
              {/* Scrollbar oculto + slider */}
              <div
                ref={sliderRef}
                className="flex gap-5 overflow-x-auto"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {CARDS.map((card, i) => (
                  <Link
                    key={card.to}
                    ref={i === 0 ? firstRef : i === CARDS.length - 1 ? lastRef : undefined}
                    to={card.to}
                    className="flex flex-col gap-4 group flex-shrink-0 w-[80vw] md:w-[calc(33.333%-14px)]"
                  >
                    <div className="relative overflow-hidden rounded-[40px] aspect-[4/5]">
                      <picture>
                        {card.srcMobile && <source media="(max-width: 600px)" srcSet={card.srcMobile} type="image/webp" />}
                        {card.srcDesktop && <source srcSet={card.srcDesktop} type="image/webp" />}
                        <img src={card.src} alt={card.alt} className="w-full h-full object-cover img-hover-scale" loading="lazy" />
                      </picture>
                      <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <ArrowRight size={20} className="text-black" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg xl:text-xl font-instrumental italic tracking-tighter text-black mb-1">{card.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-body">{card.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>

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
