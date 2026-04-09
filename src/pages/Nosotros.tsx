import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import FadeIn from '../components/FadeIn';
import OptimizedImage from '../components/OptimizedImage';
import CtaSection from '../components/CtaSection';

const cardVariants = {
  hidden: { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
  visible: (i: number) => ({
    clipPath: 'inset(0% 0 0 0)',
    opacity: 1,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.35 },
  }),
};

const stepVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: i * 0.25 },
  }),
};

const cards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Aplicadores Certificados',
    text: 'La maestría técnica es nuestra garantía de éxito. Trabajamos bajo procesos de ejecución certificados que aseguran la estanqueidad y una durabilidad absoluta, independientemente de la complejidad de la superficie.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Adaptación al Espacio',
    text: 'Analizamos cómo incide la luz y la estructura de cada estancia para recomendar la textura y el tono exactos. Logramos que el material se integre de forma natural, elevando la estética final de la vivienda sin juntas ni interrupciones.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Rigor en la Ejecución',
    text: 'Más de 7 años de experiencia técnica en Barcelona. Controlamos minuciosamente cada fase de la aplicación, respetando estrictamente los tiempos de secado y las condiciones ambientales para asegurar un acabado impecable y duradero.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      </svg>
    ),
    title: 'Diagnóstico del Soporte',
    text: 'No aplicamos sin antes analizar la base. Evaluamos la estabilidad, la porosidad y la humedad de cada superficie para decidir la solución técnica más adecuada, garantizando que el revestimiento sea siempre una solución definitiva.',
  },
];

const steps = [
  { num: '01', title: 'Rigor Técnico', text: 'Cada superficie se analiza antes de intervenir. No aplicamos soluciones estándar; diseñamos la ejecución exacta para cada soporte y condición de uso.' },
  { num: '02', title: 'Estética Atemporal', text: 'Seleccionamos materiales y tonos que no seguirán modas pasajeras. El resultado debe verse igual de elegante dentro de diez años que el día de la entrega.' },
  { num: '03', title: 'Compromiso Local', text: 'Operamos en Barcelona y sus alrededores. Conocemos las condiciones climáticas, los soportes más comunes y los proveedores de mayor confianza en la zona.' },
];

const Nosotros = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: '0px 0px -100px 0px' });
  const cardsControls = useAnimation();

  const stepsRef = useRef<HTMLDivElement>(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: '0px 0px -100px 0px' });
  const stepsControls = useAnimation();

  useEffect(() => {
    if (cardsInView) cardsControls.start('visible');
  }, [cardsInView, cardsControls]);

  useEffect(() => {
    if (stepsInView) stepsControls.start('visible');
  }, [stepsInView, stepsControls]);

  return (
    <main className="flex flex-col">

      {/* SECCIÓN 1: HERO */}
      <FadeIn>
        <section id="nosotros-hero" className="relative h-[35vh] md:h-[60vh] w-full overflow-hidden bg-black">
          <picture>
            <source media="(max-width: 600px)" srcSet="/optimized/aplicadores_microcemento-mobile.webp" type="image/webp" />
            <source srcSet="/optimized/aplicadores_microcemento-desktop.webp" type="image/webp" />
            <img 
              src="/images/aplicadores_microcemento.png" 
              alt="Decor Revestimientos Barcelona" 
              className="absolute inset-0 w-full h-full object-cover object-[70%_center] md:object-center opacity-60" 
              fetchPriority="high" 
              loading="eager" 
            />
          </picture>
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="flex flex-col gap-4 md:gap-6 max-w-4xl">
              <p className="text-[10px] md:text-sm font-body text-white/70 uppercase tracking-widest">Nosotros</p>
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-instrumental italic tracking-tighter text-white leading-tight">
                Arquitectura de autor a través del material
              </h1>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* SECCIÓN 2: EL ARTESANO Y LA CIUDAD */}
      <FadeIn delay={0.1}>
        <section className="w-full border-b border-black/[0.03]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="order-1 overflow-hidden">
              <OptimizedImage
                srcName="nosotros"
                alt="Aplicación de microcemento"
                className="w-full h-[420px] md:h-[540px] object-cover grayscale"
              />
            </div>
            <div className="order-2 flex flex-col gap-6 md:gap-8 md:pt-12">
              <h2 className="text-3xl md:text-5xl font-instrumental italic tracking-tighter leading-tight">
                Más de 7 años transformando espacios en Barcelona.
              </h2>
              <div className="flex flex-col gap-4 text-gray-600 text-base md:text-lg leading-[1.8] font-body">
                <p>
                  Nuestra trayectoria no se mide en años, sino en la precisión de cada junta inexistente. Nos hemos especializado en la ejecución de proyectos de alta gama, donde el microcemento y el Mortex dejan de ser materiales para convertirse en piezas de arte habitables.
                </p>
                <p>
                  Cada proyecto comienza con un análisis técnico exhaustivo del soporte, las condiciones de humedad y el uso previsto. Solo entonces seleccionamos el material y la técnica exacta que garantizará un resultado duradero, estético y sin sorpresas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* SECCIÓN 3: AUTORIDAD TÉCNICA */}
      <section className="w-full border-b border-black/[0.03]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 flex flex-col gap-12 md:gap-16">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-instrumental italic tracking-tighter">Autoridad técnica en cada aplicación</h2>
            <p className="text-gray-500 text-base font-body leading-relaxed">
              La maestría no se improvisa. Se construye con certificaciones, experiencia y un criterio exigente que aplica en cada proyecto.
            </p>
          </div>
          <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 md:gap-8">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                animate={cardsControls}
                variants={cardVariants}
                className="border border-black/[0.08] p-8 md:p-10 flex flex-col gap-5"
              >
                <div className="flex items-start gap-4">
                  {card.icon}
                  <h3 className="text-xl md:text-2xl font-instrumental italic tracking-tighter mt-0.5">{card.title}</h3>
                </div>
                <p className="text-gray-500 text-sm md:text-base leading-[1.8] font-body">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: VALORES */}
      <section className="w-full border-b border-black/[0.03]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 flex flex-col gap-12 md:gap-16">
          <h2 className="text-3xl md:text-5xl font-instrumental italic tracking-tighter max-w-2xl">Los principios que guían cada proyecto</h2>
          <div ref={stepsRef} className="grid md:grid-cols-3 gap-10 md:gap-16">
            {steps.map((item, i) => (
              <motion.div
                key={item.num}
                custom={i}
                initial="hidden"
                animate={stepsControls}
                variants={stepVariants}
                className="flex flex-col gap-4 border-t border-black/[0.08] pt-8"
              >
                <span className="text-5xl md:text-6xl font-body text-gray-200 italic font-bold leading-none">{item.num}</span>
                <h3 className="text-xl md:text-2xl font-instrumental italic tracking-tighter">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-[1.8] font-body">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="¿Tienes un proyecto en mente en Barcelona?"
        description="Hablemos de cómo el material puede elevar tu diseño. Te damos una orientación técnica sin compromiso para que tomes la mejor decisión para tu espacio."
        buttonText="Agendar consultoría técnica"
      />

    </main>
  );
};

export default Nosotros;
