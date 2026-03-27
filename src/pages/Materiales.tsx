import FadeIn from '../components/FadeIn';
import CtaSection from '../components/CtaSection';

const Materiales = () => {
  return (
    <main className="flex flex-col">

      {/* HERO HEADER */}
      <FadeIn>
        <section className="w-full border-b border-black/[0.03] pt-28 pb-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 md:gap-20 items-start">
            <div className="flex flex-col gap-6 md:gap-8 order-2 md:order-1 md:max-w-3xl">
              <p className="text-xs md:text-sm font-body text-gray-400 uppercase tracking-widest">Materiales</p>
              <h1 className="text-4xl md:text-5xl font-instrumental italic tracking-tighter leading-tight">
                El material correcto es la base de un resultado definitivo
              </h1>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed font-body">
                No todos los revestimientos son iguales. Seleccionamos cada material según las exigencias técnicas de tu espacio para garantizar adherencia, resistencia y una estética que perdura. No nos limitamos a aplicar un producto; analizamos el estado de tu soporte, los niveles de humedad y el uso previsto en cada zona de la vivienda para recomendarte la solución técnica exacta. Nuestro compromiso es que la belleza del acabado sea solo el reflejo de una base sólida y bien ejecutada por manos expertas en Barcelona.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:block">
              <picture>
                <source media="(max-width: 600px)" srcSet="/optimized/mt_escalera-mobile.webp" type="image/webp" />
                <source srcSet="/optimized/mt_escalera-desktop.webp" type="image/webp" />
                <img src="/images/mt_escalera.png" alt="Materiales" className="w-full h-auto md:w-[85%] md:ml-auto md:mr-12 object-contain" fetchPriority="high" loading="eager" />
              </picture>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* BLOQUE 01: MICROCEMENTO */}
      <FadeIn delay={0.1}>
        <section className="w-full border-b border-black/[0.03]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-[1.3fr_0.7fr] gap-8 md:gap-12 items-start">
            {/* Texto */}
            <div className="order-2 md:order-1 flex flex-col gap-6 md:gap-8">
              <h2 className="text-3xl md:text-5xl font-instrumental italic tracking-tighter">
                <span className="text-6xl md:text-7xl font-body text-gray-400 uppercase tracking-widest italic block md:-mb-2">01</span>
                Microcemento
              </h2>
              <p className="text-gray-600 text-base leading-[1.8] font-body">
                Es nuestra solución más versátil para proyectos de reforma y decoración. Se trata de un revestimiento continuo compuesto por una mezcla de cemento y resinas que aplicamos de forma artesanal, logrando superficies sin juntas con un espesor mínimo de apenas 2-3 mm.
              </p>
              {/* Technical Callout */}
              <div className="border-l-2 border-black/10 pl-5 py-1 bg-black/[0.02]">
                <h4 className="text-sm font-body font-semibold text-black mb-2 uppercase tracking-widest">Adherencia universal y versatilidad</h4>
                <p className="text-gray-500 text-sm leading-[1.8] font-body">
                  La gran ventaja de nuestra técnica es la capacidad de aplicarse sobre prácticamente cualquier superficie: madera, cemento, yeso, mármol, cristales o azulejo antiguo (rachola). La única condición crítica es que el soporte original esté libre de humedades y en perfectas condiciones estructurales. Esta adherencia total nos permite renovar espacios sin generar escombros, manteniendo la cota mínima de espesor.
                </p>
              </div>
              {/* Feature grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4 border-t border-black/[0.06] pt-8">
                <div className="flex flex-col gap-2">
                  <h4 className="text-base font-instrumental font-semibold">Suelos de interior y pavimentos</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-body">Es la opción ideal para quienes buscan la estética del cemento pulido pero con una resistencia superior al tránsito diario. Al no tener juntas, aporta una amplitud visual única en salones y pasillos.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-base font-instrumental font-semibold">Revestimiento de paredes y mobiliario</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-body">Gracias a su ligereza y gran adherencia, permite transformar paredes, frentes de cocina o muebles de obra, logrando un acabado sedoso y con sutiles aguas decorativas.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-base font-instrumental font-semibold">Zonas exteriores y terrazas</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-body">Aplicamos variantes específicas con texturas más rugosas que garantizan propiedades antideslizantes y una alta resistencia a la radiación solar y al desgaste climático.</p>
                </div>
              </div>
            </div>
            {/* Imagen */}
            <div className="order-1 md:order-2 overflow-hidden">
              <picture>
                <source media="(max-width: 600px)" srcSet="/optimized/mc_1-mobile.webp" type="image/webp" />
                <source srcSet="/optimized/mc_1-desktop.webp" type="image/webp" />
                <img src="/images/mc_1.jpg" alt="Microcemento de alta gama" loading="lazy" className="w-[90%] h-[320px] md:h-[360px] object-cover md:ml-auto md:mt-[5.5rem]" />
              </picture>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* BLOQUE 02: MORTEX */}
      <FadeIn delay={0.1}>
        <section className="w-full border-b border-black/[0.03]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-[1.3fr_0.7fr] gap-8 md:gap-12 items-start">
            {/* Texto */}
            <div className="order-2 md:order-1 flex flex-col gap-6 md:gap-8">
              <h2 className="text-3xl md:text-5xl font-instrumental italic tracking-tighter">
                <span className="text-6xl md:text-7xl font-body text-gray-400 uppercase tracking-widest italic block md:-mb-2">02</span>
                Mortex
              </h2>
              <p className="text-gray-600 text-base leading-[1.8] font-body">
                Es un revestimiento técnico de mayor densidad y dureza, diseñado para proyectos donde la exigencia es máxima. A diferencia del microcemento convencional, su composición mineral lo hace impermeable por naturaleza, lo que lo convierte en un material "de autor" con prestaciones técnicas inigualables.
              </p>
              {/* Technical Callout */}
              <div className="border-l-2 border-black/10 pl-5 py-1 bg-black/[0.02]">
                <h4 className="text-sm font-body font-semibold text-black mb-2 uppercase tracking-widest">Compatibilidad técnica y flexibilidad</h4>
                <p className="text-gray-500 text-sm leading-[1.8] font-body">
                  Mortex destaca por una adherencia química y mecánica excepcional. Su formulación le permite 'anclarse' con total seguridad sobre soportes que otros materiales no toleran bien, como MDF, gresite de piscina, mármol o incluso cristal. Gracias a su elasticidad residual, absorbe las micro-tensiones del soporte original, convirtiéndolo en la solución definitiva para renovaciones complejas.
                </p>
              </div>
              {/* Key points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4 border-t border-black/[0.06] pt-8">
                <div className="flex flex-col gap-2">
                  <h4 className="text-base font-instrumental font-semibold">Piscinas y zonas sumergidas</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-body">Es el material de referencia para revestir el vaso de una piscina o un jacuzzi. Su estanqueidad absoluta y su resistencia a los productos químicos garantizan un acabado seguro y duradero bajo el agua.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-base font-instrumental font-semibold">Baños y duchas de obra</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-body">Al ser un material estanco, es la solución definitiva para platos de ducha integrados y lavabos, eliminando cualquier riesgo de filtración sin necesidad de juntas de dilatación.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-base font-instrumental font-semibold">Piezas arquitectónicas de alta resistencia</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-body">Su dureza mecánica permite aplicarlo en escaleras de mucho uso o encimeras de cocina, ofreciendo un tacto mineral que recuerda a la piedra natural tallada.</p>
                </div>
              </div>
            </div>
            {/* Imagen */}
            <div className="order-1 md:order-2 overflow-hidden">
              <picture>
                <source media="(max-width: 600px)" srcSet="/optimized/mc_2-mobile.webp" type="image/webp" />
                <source srcSet="/optimized/mc_2-desktop.webp" type="image/webp" />
                <img src="/images/mc_2.jpg" alt="Micromortero Mortex" loading="lazy" className="w-[90%] h-[320px] md:h-[360px] object-cover md:ml-auto md:mt-[5.5rem]" />
              </picture>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* BLOQUE 03: TONOS */}
      <FadeIn delay={0.1}>
        <section className="w-full border-b border-black/[0.03]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 flex flex-col gap-12 md:gap-16">
            <div className="flex flex-col gap-4">
              <p className="text-6xl md:text-7xl font-body text-gray-400 uppercase tracking-widest italic md:-mb-4">03</p>
              <h2 className="text-3xl md:text-5xl font-instrumental italic tracking-tighter max-w-xl">Selección de tonos esenciales</h2>
              <p className="text-gray-500 text-base font-body leading-relaxed max-w-lg">
                Una paleta cuidadosamente seleccionada que garantiza harmonía y atemporalidad en cualquier espacio.
              </p>
            </div>
            {/* Swatches */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {[
                { name: 'Gris Cemento', hex: '#8A8A8A' },
                { name: 'Arena', hex: '#C8B99A' },
                { name: 'Hueso', hex: '#E8E0D0' },
                { name: 'Antracita', hex: '#3A3A3A' },
              ].map((swatch) => (
                <div key={swatch.name} className="flex flex-col items-start gap-4">
                  <div
                    className="w-full aspect-square rounded-full shadow-md transition-transform duration-300 hover:scale-105 cursor-default"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <p className="text-sm font-body font-medium text-gray-700">{swatch.name}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-black/[0.06]">
              <p className="text-gray-600 text-base leading-[1.8] font-body mb-6">
                Nuestra selección de tonos esenciales representa el equilibrio perfecto entre tendencia y atemporalidad. Si buscas una personalización total, puedes consultar los catálogos completos de pigmentos y texturas según el material elegido para tu espacio:
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="/carta-colores-microcemento.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-body text-gray-600 hover:text-black transition-colors border-b border-gray-300 hover:border-black pb-0.5 w-fit"
                >
                  Ver carta de colores Microcemento (PDF)
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
                <p className="text-gray-500 text-sm leading-relaxed font-body">
                  Gamas minerales y texturas suaves para suelos y paredes.
                </p>
                <a
                  href="/carta-colores-mortex.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-body text-gray-600 hover:text-black transition-colors border-b border-gray-300 hover:border-black pb-0.5 w-fit mt-4"
                >
                  Ver carta de colores Mortex (PDF)
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
                <p className="text-gray-500 text-sm leading-relaxed font-body">
                  Tonos orgánicos y acabados de alta resistencia técnica.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* BLOQUE 04: MARCAS CARRUSEL */}
      <FadeIn delay={0.1}>
        <section className="w-full border-b border-black/[0.03] py-16 md:py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
            <h2 className="text-3xl md:text-5xl font-instrumental italic tracking-tighter mb-6">Marcas líderes en nuestra ejecución</h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-body max-w-3xl">
              Nuestra ejecución solo es tan buena como el material que aplicamos. Por eso, trabajamos exclusivamente con fabricantes que certifican la pureza y durabilidad de sus productos, asegurando que cada proyecto en Barcelona cuente con el respaldo técnico de las firmas que lideran el sector.
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 w-64 md:w-96 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
            />
            <div
              className="absolute inset-y-0 right-0 w-64 md:w-96 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
            />
            <div className="flex justify-center gap-16 md:gap-24 px-24 md:px-40" style={{ animation: 'marquee 20s linear infinite' }}>
              {['MORTEX', 'BEALgrounds', 'Mapei', 'Bautech', 'Sopro', 'Sika', 'MORTEX', 'BEALgrounds', 'Mapei', 'Bautech', 'Sopro', 'Sika'].map((brand, i) => (
                <span
                  key={i}
                  className="text-gray-300 hover:text-gray-600 transition-colors duration-300 text-3xl md:text-4xl font-titles font-semibold tracking-tight cursor-default select-none shrink-0"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <CtaSection
        title="¿Hablamos del material ideal para tu proyecto?"
        description="Analizamos cada superficie y te recomendamos el revestimiento con la máxima adherencia y resistencia para tu caso específico. Sin compromiso."
        buttonText="Pedir presupuesto personalizado"
      />

    </main>
  );
};

export default Materiales;
