import FadeIn from '../components/FadeIn';
import CtaSection from '../components/CtaSection';

const Materiales = () => {
  return (
    <main className="flex flex-col">

      {/* HERO HEADER */}
      <FadeIn>
        <section className="w-full border-b border-black/[0.03] pt-28 pb-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-3xl">
              <p className="text-xs md:text-sm font-body text-gray-400 uppercase tracking-widest mb-6">Materiales</p>
              <h1 className="text-4xl md:text-6xl font-instrumental italic tracking-tighter leading-tight mb-8">
                El material correcto es la base de un resultado definitivo
              </h1>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed font-body">
                No todos los revestimientos son iguales. Seleccionamos cada material según las exigencias técnicas de tu espacio para garantizar adherencia, resistencia y una estética que perdura.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* BLOQUE 01: MICROCEMENTO */}
      <FadeIn delay={0.1}>
        <section className="w-full border-b border-black/[0.03]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Imagen */}
            <div className="order-1 overflow-hidden">
              <img
                src="/src/assets/raw/mc_1.jpg"
                alt="Microcemento de alta gama"
                loading="eager"
                className="w-full h-[420px] md:h-[520px] object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            {/* Texto */}
            <div className="order-2 flex flex-col gap-6 md:gap-8 md:pt-8">
              <p className="text-xs font-body text-gray-400 uppercase tracking-widest">01</p>
              <h2 className="text-3xl md:text-5xl font-instrumental italic tracking-tighter">Microcemento de alta gama</h2>
              <p className="text-gray-400 text-sm md:text-base font-body italic leading-relaxed">
                El equilibrio entre resistencia y estética artesanal.
              </p>
              <p className="text-gray-600 text-base leading-[1.8] font-body">
                Es nuestra solución más versátil para transformar cualquier rincón del hogar. Se trata de un revestimiento mineral que aplicamos de forma artesanal para lograr superficies continuas, sin juntas y con un carácter único.
              </p>
              {/* Feature grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4 border-t border-black/[0.06] pt-8">
                <div className="flex flex-col gap-2">
                  <h4 className="text-sm font-titles font-semibold">Suelos y pavimentos</h4>
                  <p className="text-gray-500 text-xs leading-relaxed font-body">Elegancia del cemento pulido con resistencia superior al tránsito.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-sm font-titles font-semibold">Paredes y detalles</h4>
                  <p className="text-gray-500 text-xs leading-relaxed font-body">Acabado sedoso al tacto que aporta profundidad estética.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-sm font-titles font-semibold">Exteriores</h4>
                  <p className="text-gray-500 text-xs leading-relaxed font-body">Variante técnica antideslizante y resistente a rayos UV y lluvia.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* BLOQUE 02: MORTEX */}
      <FadeIn delay={0.1}>
        <section className="w-full border-b border-black/[0.03]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Texto */}
            <div className="order-2 md:order-1 flex flex-col gap-6 md:gap-8 md:pt-8">
              <p className="text-xs font-body text-gray-400 uppercase tracking-widest">02</p>
              <h2 className="text-3xl md:text-5xl font-instrumental italic tracking-tighter">Micromortero Premium Mortex</h2>
              <p className="text-gray-400 text-sm md:text-base font-body italic leading-relaxed">
                La evolución técnica del revestimiento continuo.
              </p>
              <p className="text-gray-600 text-base leading-[1.8] font-body">
                Cuando el proyecto exige un nivel superior de resistencia y exclusividad, apostamos por este material de autor. Un revestimiento denso e ideal para las zonas más comprometidas.
              </p>
              {/* Key points */}
              <div className="flex flex-col gap-5 mt-4 border-t border-black/[0.06] pt-8">
                <div className="flex gap-4 items-start">
                  <span className="text-black/20 font-body text-xs mt-1">—</span>
                  <div>
                    <h4 className="text-sm font-titles font-semibold mb-1">Impermeabilidad absoluta</h4>
                    <p className="text-gray-500 text-xs leading-relaxed font-body">Naturalmente estanco, infalible para piscinas y duchas.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-black/20 font-body text-xs mt-1">—</span>
                  <div>
                    <h4 className="text-sm font-titles font-semibold mb-1">Dureza extrema</h4>
                    <p className="text-gray-500 text-xs leading-relaxed font-body">Alta resistencia mecánica que evita fisuras en espesores mínimos.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-black/20 font-body text-xs mt-1">—</span>
                  <div>
                    <h4 className="text-sm font-titles font-semibold mb-1">Acabado Mineral de Autor</h4>
                    <p className="text-gray-500 text-xs leading-relaxed font-body">Textura orgánica similar a la piedra natural.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Imagen */}
            <div className="order-1 md:order-2 overflow-hidden">
              <img
                src="/src/assets/raw/mc_2.jpg"
                alt="Micromortero Mortex premium"
                loading="lazy"
                className="w-full h-[420px] md:h-[520px] object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* BLOQUE 03: TONOS */}
      <FadeIn delay={0.1}>
        <section className="w-full border-b border-black/[0.03]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 flex flex-col gap-12 md:gap-16">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-body text-gray-400 uppercase tracking-widest">03</p>
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
            <div className="mt-2">
              <a
                href="/carta-colores.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-body text-gray-500 hover:text-black transition-colors border-b border-gray-300 hover:border-black pb-0.5"
              >
                Ver carta de colores completa (PDF)
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* BLOQUE 04: MARCAS CARRUSEL */}
      <FadeIn delay={0.1}>
        <section className="w-full border-b border-black/[0.03] py-16 md:py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
            <p className="text-xs font-body text-gray-400 uppercase tracking-widest">04</p>
            <h2 className="text-2xl md:text-3xl font-instrumental italic tracking-tighter mt-2">Marcas líderes en nuestra ejecución</h2>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex gap-16 md:gap-24" style={{ animation: 'marquee 20s linear infinite' }}>
              {['MORTEX', 'BEALgrounds', 'Mapei', 'Bautech', 'Sopro', 'Sika', 'MORTEX', 'BEALgrounds', 'Mapei', 'Bautech', 'Sopro', 'Sika'].map((brand, i) => (
                <span
                  key={i}
                  className="text-gray-300 hover:text-gray-600 transition-colors duration-300 text-xl md:text-2xl font-titles font-semibold tracking-tight cursor-default select-none shrink-0"
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
