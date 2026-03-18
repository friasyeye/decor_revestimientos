import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { getServicio, servicios } from '../data/servicios';
import CtaSection from '../components/CtaSection';

const ctaContent: Record<string, { title: string; description: string; buttonText: string }> = {
  'banos-y-zonas-humedas': {
    title: '¿Hablamos de tu baño o cocina?',
    description: 'Cuéntanos la reforma que tienes en mente y te daremos una orientación técnica para lograr un espacio estanco, higiénico y sin juntas. Transforma tus zonas húmedas con un acabado moderno y sin necesidad de obras traumáticas.',
    buttonText: 'Pedir presupuesto personalizado',
  },
  'exteriores-y-suelos': {
    title: '¿Hablamos de tu suelo o terraza?',
    description: 'Dinos qué superficie exterior quieres renovar y te asesoraremos sobre el material con mayor resistencia para tu caso particular. Logra un pavimento continuo impecable que soporte el paso del tiempo y el clima de Barcelona.',
    buttonText: 'Pedir presupuesto personalizado',
  },
  'piscinas': {
    title: '¿Hablamos de tu piscina?',
    description: 'Explícanos las dimensiones de tu proyecto y te propondremos el sistema de estanqueidad total que mejor se adapte al diseño de tu jardín. Garantiza la seguridad y estética de tu zona de baño con una ejecución profesional certificada.',
    buttonText: 'Pedir presupuesto personalizado',
  },
  'escaleras': {
    title: '¿Hablamos de tus escaleras?',
    description: 'Cuéntanos cómo es la estructura que quieres transformar y te explicaremos cómo convertirla en una pieza arquitectónica única sin cortes. Logra un acabado continuo y elegante en cada peldaño con nuestra ejecución de precisión.',
    buttonText: 'Pedir presupuesto personalizado',
  },
};

const StickyPoint = ({ num, title, text }: { num: string; title: string; text: string }) => (
  <div className="flex flex-col gap-5 pb-24 border-b border-black/10 last:border-0">
    <span className="text-5xl md:text-6xl font-instrumental italic tracking-tighter text-black/15 leading-none select-none">
      {num}
    </span>
    <h3 className="text-2xl md:text-3xl font-instrumental italic tracking-tighter text-black">{title}</h3>
    <p className="text-gray-600 text-base md:text-lg leading-[1.7] font-body">{text}</p>
  </div>
);

const StickyPointList = ({
  num,
  title,
  items,
}: {
  num: string;
  title: string;
  items: { label: string; desc: string }[];
}) => (
  <div className="flex flex-col gap-5 pb-24 border-b border-black/10 last:border-0">
    <span className="text-5xl md:text-6xl font-instrumental italic tracking-tighter text-black/15 leading-none select-none">
      {num}
    </span>
    <h3 className="text-2xl md:text-3xl font-instrumental italic tracking-tighter text-black">{title}</h3>
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item.label} className="flex flex-col gap-1">
          <span className="text-black font-body font-medium text-sm">{item.label}</span>
          <span className="text-gray-600 font-body text-sm leading-[1.7]">{item.desc}</span>
        </li>
      ))}
    </ul>
  </div>
);

const AplicacionDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const servicio = getServicio(slug ?? '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (servicio) {
      document.title = `${servicio.title} | Decor Revestimientos Barcelona`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute('content', servicio.metaDescription);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.name = 'description';
        newMeta.content = servicio.metaDescription;
        document.head.appendChild(newMeta);
      }
    }
  }, [servicio]);

  if (!servicio) {
    return <Navigate to="/aplicaciones" replace />;
  }

  const paragraphs = servicio.extendedContent.split('\n\n');

  return (
    <main className="flex flex-col">
      {/* HERO */}
      <FadeIn>
        <section className="relative h-[35vh] md:h-[35vh] w-full overflow-hidden bg-black">
          <img
            src={servicio.heroImage}
            alt={servicio.title}
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end pb-6 md:pb-8">
            <div className="max-w-7xl mx-auto px-6 md:px-10 w-full flex flex-col gap-4">
              {/* Breadcrumbs */}
              <nav className="flex items-center gap-2 text-white/70 text-sm font-body">
                <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
                <span>/</span>
                <Link to="/aplicaciones" className="hover:text-white transition-colors">Aplicaciones</Link>
                <span>/</span>
                <span className="text-white">{servicio.title}</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-instrumental italic tracking-tighter text-white max-w-2xl leading-[0.9]">
                {servicio.title}
              </h1>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CONTENIDO TÉCNICO — solo para slugs que no tienen sticky scroll */}
      {servicio.slug !== 'banos-y-zonas-humedas' && servicio.slug !== 'exteriores-y-suelos' && servicio.slug !== 'piscinas' && servicio.slug !== 'escaleras' && (
        <FadeIn delay={0.2}>
          <section className="w-full border-b border-black/[0.05]">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
              {/* Izquierda: Texto */}
              <div className="flex flex-col gap-6 md:gap-8">
                <p className="text-gray-500 text-base md:text-lg leading-relaxed font-body italic">
                  {servicio.description}
                </p>
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-600 text-base md:text-lg leading-relaxed font-body">
                    {p}
                  </p>
                ))}
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 transition-all duration-300 border border-black hover:bg-black hover:text-white self-start mt-4"
                >
                  Solicitar consulta técnica <ArrowRight size={18} />
                </Link>
              </div>

              {/* Derecha: Ficha Técnica */}
              <div className="flex flex-col gap-6">
                <h2 className="text-xl md:text-2xl font-titles font-bold tracking-tight">Ficha técnica</h2>
                <div className="flex flex-col divide-y divide-black/10">
                  {servicio.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between items-center py-4">
                      <span className="text-gray-500 text-sm font-body">{spec.label}</span>
                      <span className="text-black text-sm font-body font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
      )}

      {/* STICKY SCROLL — solo Baños y Zonas Húmedas */}
      {servicio.slug === 'banos-y-zonas-humedas' && (
        <section className="w-full" style={{ backgroundColor: '#f7f6f5' }}>
          {/* Mobile: imagen fija arriba + texto debajo */}
          <div className="block md:hidden">
            <div className="w-full h-[40vh] sticky top-0 z-10 overflow-hidden">
              <img
                src="/src/assets/raw/ap_baño.jpg"
                alt="Baños y Zonas Húmedas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-16 flex flex-col gap-16">
              <StickyPoint num="01" title="Especialización en espacios críticos" text="En la reforma de un baño, la estética debe ir siempre acompañada de un rendimiento técnico impecable. Como ejecutores con más de 7 años de experiencia en Barcelona, entendemos que estos espacios requieren materiales que garanticen impermeabilidad total y una adherencia perfecta. No solo renovamos el aspecto; aplicamos soluciones técnicas que eliminan las juntas, evitando filtraciones y facilitando una higiene absoluta." />
              <StickyPoint num="02" title="Soluciones técnicas de alta gama" text="Seleccionamos el material idóneo según la exigencia del espacio, utilizando desde microcementos técnicos hasta micro-morteros de alta resistencia. Trabajamos con productos de mayor pureza que aseguran un sellado total, lo que resulta ideal para platos de ducha a ras de suelo y lavabos integrados. Nuestra certificación como aplicadores garantiza que el proceso de impermeabilización sea definitivo." />
              <StickyPointList num="03" title="Aplicaciones de alta precisión" items={[
                { label: 'Duchas y Nichos', desc: 'Revestimiento continuo con impermeabilización integrada.' },
                { label: 'Lavabos de Obra', desc: 'Superficies personalizadas sin cortes ni uniones.' },
                { label: 'Paredes y Suelos', desc: 'Acabados aplicables directamente sobre azulejo existente.' },
                { label: 'Mobiliario Técnico', desc: 'Integración de estantes y elementos decorativos.' },
              ]} />
              <StickyPointList num="04" title="Por qué elegir nuestra ejecución" items={[
                { label: 'Sin Obras Traumáticas', desc: 'Adherencia total sobre azulejo, yeso o pladur.' },
                { label: 'Higiene Total', desc: 'Al no tener juntas, desaparece la acumulación de suciedad y moho.' },
                { label: 'Inversión Segura', desc: 'Materiales de alta pureza que no se agrietan.' },
                { label: 'Criterio Profesional', desc: 'Análisis previo del soporte para soluciones definitivas.' },
              ]} />
              <StickyPointList num="05" title="Nuestro proceso en Barcelona" items={[
                { label: 'Evaluación Técnica', desc: 'Análisis de soporte y humedad.' },
                { label: 'Selección de Material', desc: 'Elección entre microcemento técnico o Mortex.' },
                { label: 'Aplicación Certificada', desc: 'Ejecución meticulosa por especialistas.' },
                { label: 'Garantía y Entrega', desc: 'Supervisión de cada detalle final.' },
              ]} />
            </div>
          </div>

          {/* Desktop: sticky left image + scrollable right */}
          <div className="hidden md:flex w-full">
            {/* Imagen sticky */}
            <div className="w-1/2 flex-shrink-0">
              <div className="sticky top-0 h-screen overflow-hidden">
                <img
                  src="/src/assets/raw/ap_baño.jpg"
                  alt="Baños y Zonas Húmedas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Contenido scrollable */}
            <div className="w-1/2 flex flex-col gap-0 py-24 px-12 xl:px-20">
              <StickyPoint num="01" title="Especialización en espacios críticos" text="En la reforma de un baño, la estética debe ir siempre acompañada de un rendimiento técnico impecable. Como ejecutores con más de 7 años de experiencia en Barcelona, entendemos que estos espacios requieren materiales que garanticen impermeabilidad total y una adherencia perfecta. No solo renovamos el aspecto; aplicamos soluciones técnicas que eliminan las juntas, evitando filtraciones y facilitando una higiene absoluta." />
              <StickyPoint num="02" title="Soluciones técnicas de alta gama" text="Seleccionamos el material idóneo según la exigencia del espacio, utilizando desde microcementos técnicos hasta micro-morteros de alta resistencia. Trabajamos con productos de mayor pureza que aseguran un sellado total, lo que resulta ideal para platos de ducha a ras de suelo y lavabos integrados. Nuestra certificación como aplicadores garantiza que el proceso de impermeabilización sea definitivo." />
              <StickyPointList num="03" title="Aplicaciones de alta precisión" items={[
                { label: 'Duchas y Nichos', desc: 'Revestimiento continuo con impermeabilización integrada.' },
                { label: 'Lavabos de Obra', desc: 'Superficies personalizadas sin cortes ni uniones.' },
                { label: 'Paredes y Suelos', desc: 'Acabados aplicables directamente sobre azulejo existente.' },
                { label: 'Mobiliario Técnico', desc: 'Integración de estantes y elementos decorativos.' },
              ]} />
              <StickyPointList num="04" title="Por qué elegir nuestra ejecución" items={[
                { label: 'Sin Obras Traumáticas', desc: 'Adherencia total sobre azulejo, yeso o pladur.' },
                { label: 'Higiene Total', desc: 'Al no tener juntas, desaparece la acumulación de suciedad y moho.' },
                { label: 'Inversión Segura', desc: 'Materiales de alta pureza que no se agrietan.' },
                { label: 'Criterio Profesional', desc: 'Análisis previo del soporte para soluciones definitivas.' },
              ]} />
              <StickyPointList num="05" title="Nuestro proceso en Barcelona" items={[
                { label: 'Evaluación Técnica', desc: 'Análisis de soporte y humedad.' },
                { label: 'Selección de Material', desc: 'Elección entre microcemento técnico o Mortex.' },
                { label: 'Aplicación Certificada', desc: 'Ejecución meticulosa por especialistas.' },
                { label: 'Garantía y Entrega', desc: 'Supervisión de cada detalle final.' },
              ]} />
            </div>
          </div>
        </section>
      )}

      {/* STICKY SCROLL — Exteriores y Suelos */}
      {servicio.slug === 'exteriores-y-suelos' && (
        <section className="w-full" style={{ backgroundColor: '#f7f6f5' }}>
          {/* Mobile */}
          <div className="block md:hidden">
            <div className="w-full h-[40vh] sticky top-0 z-10 overflow-hidden">
              <img
                src="/src/assets/raw/ap_suelo.jpg"
                alt="Exteriores y Suelos"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-16 flex flex-col gap-16">
              <StickyPoint num="01" title="Especialización en superficies exteriores" text="En exteriores, el revestimiento debe resistir mucho más que el paso del tiempo. Como ejecutores con más de 7 años de experiencia en Barcelona, diseñamos suelos y terrazas que eliminan las juntas tradicionales para crear superficies homogéneas y selladas. Nuestro objetivo es garantizar que cada m2 soporte cambios térmicos y uso intensivo sin degradarse ni perder su estética original." />
              <StickyPoint num="02" title="Pavimentos de alta resistencia" text="Trabajamos con revestimientos continuos de última generación que destacan por su extraordinaria flexibilidad y adherencia. Estos materiales permiten adaptarse a superficies irregulares y resistir la acción directa de la lluvia y el sol sin fisuras. Es la solución técnica definitiva para quienes buscan una durabilidad superior frente al gres o la piedra natural, que suelen fallar en las juntas." />
              <StickyPointList num="03" title="Intervenciones de alta resistencia" items={[
                { label: 'Terrazas y Ocio', desc: 'Superficies elegantes, antideslizantes y de muy fácil limpieza.' },
                { label: 'Fachadas y Muros', desc: 'Revestimientos continuos que protegen la estructura con diseño moderno.' },
                { label: 'Pavimentos de Tránsito', desc: 'Suelos preparados para el paso constante sin pérdida de integridad.' },
                { label: 'Zonas de Agua', desc: 'Sellado profesional en áreas expuestas a humedad extrema o riego.' },
              ]} />
              <StickyPointList num="04" title="Ventajas del sistema continuo" items={[
                { label: 'Mantenimiento Mínimo', desc: 'Sin juntas donde se acumule moho, hierbas o suciedad.' },
                { label: 'Resistencia Climática', desc: 'Absorbe tensiones térmicas mejor que los materiales rígidos tradicionales.' },
                { label: 'Estética Duradera', desc: 'Colores con pigmentos de alta calidad que resisten la radiación solar.' },
                { label: 'Sin Demoliciones', desc: 'Adherencia directa sobre hormigón o baldosa antigua, acortando plazos.' },
              ]} />
              <StickyPointList num="05" title="Nuestro proceso técnico" items={[
                { label: 'Inspección de Soporte', desc: 'Análisis de porosidad y estabilidad de la base antes de empezar.' },
                { label: 'Preparación Química', desc: 'Tratamiento previo para asegurar una adherencia mecánica perfecta.' },
                { label: 'Aplicación Certificada', desc: 'Ejecución meticulosa por nuestro equipo técnico especialista.' },
                { label: 'Protección Final', desc: 'Sellado de alta gama para potenciar la resistencia al desgaste y manchas.' },
              ]} />
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex w-full">
            <div className="w-1/2 flex-shrink-0">
              <div className="sticky top-0 h-screen overflow-hidden">
                <img
                  src="/src/assets/raw/ap_suelo.png"
                  alt="Exteriores y Suelos"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-0 py-24 px-12 xl:px-20">
              <StickyPoint num="01" title="Especialización en superficies exteriores" text="En exteriores, el revestimiento debe resistir mucho más que el paso del tiempo. Como ejecutores con más de 7 años de experiencia en Barcelona, diseñamos suelos y terrazas que eliminan las juntas tradicionales para crear superficies homogéneas y selladas. Nuestro objetivo es garantizar que cada metro cuadrado soporte cambios térmicos y uso intensivo sin degradarse ni perder su estética original." />
              <StickyPoint num="02" title="Pavimentos de alta resistencia" text="Trabajamos con revestimientos continuos de última generación que destacan por su extraordinaria flexibilidad y adherencia. Estos materiales permiten adaptarse a superficies irregulares y resistir la acción directa de la lluvia y el sol sin fisuras. Es la solución técnica definitiva para quienes buscan una durabilidad superior frente al gres o la piedra natural, que suelen fallar en las juntas." />
              <StickyPointList num="03" title="Intervenciones de alta resistencia" items={[
                { label: 'Terrazas y Ocio', desc: 'Superficies elegantes, antideslizantes y de muy fácil limpieza.' },
                { label: 'Fachadas y Muros', desc: 'Revestimientos continuos que protegen la estructura con diseño moderno.' },
                { label: 'Pavimentos de Tránsito', desc: 'Suelos preparados para el paso constante sin pérdida de integridad.' },
                { label: 'Zonas de Agua', desc: 'Sellado profesional en áreas expuestas a humedad extrema o riego.' },
              ]} />
              <StickyPointList num="04" title="Ventajas del sistema continuo" items={[
                { label: 'Mantenimiento Mínimo', desc: 'Sin juntas donde se acumule moho, hierbas o suciedad.' },
                { label: 'Resistencia Climática', desc: 'Absorbe tensiones térmicas mejor que los materiales rígidos tradicionales.' },
                { label: 'Estética Duradera', desc: 'Colores con pigmentos de alta calidad que resisten la radiación solar.' },
                { label: 'Sin Demoliciones', desc: 'Adherencia directa sobre hormigón o baldosa antigua, acortando plazos.' },
              ]} />
              <StickyPointList num="05" title="Nuestro proceso técnico" items={[
                { label: 'Inspección de Soporte', desc: 'Análisis de porosidad y estabilidad de la base antes de empezar.' },
                { label: 'Preparación Química', desc: 'Tratamiento previo para asegurar una adherencia mecánica perfecta.' },
                { label: 'Aplicación Certificada', desc: 'Ejecución meticulosa por nuestro equipo técnico especialista.' },
                { label: 'Protección Final', desc: 'Sellado de alta gama para potenciar la resistencia al desgaste y manchas.' },
              ]} />
            </div>
          </div>
        </section>
      )}

      {/* STICKY SCROLL — Escaleras */}
      {servicio.slug === 'escaleras' && (
        <section className="w-full" style={{ backgroundColor: '#f7f6f5' }}>
          {/* Mobile */}
          <div className="block md:hidden">
            <div className="w-full h-[40vh] sticky top-0 z-10 overflow-hidden">
              <img
                src="/src/assets/raw/ap_escalera.jpg"
                alt="Escaleras"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-16 flex flex-col gap-16">
              <StickyPoint num="01" title="Precisión técnica en cada peldaño" text="El revestimiento de escaleras es uno de los trabajos de ejecución más exigentes, ya que requiere una precisión milimétrica en superficies verticales e inclinadas. Como especialistas con más de 7 años de trayectoria en Barcelona, transformamos estructuras convencionales en piezas arquitectónicas monolíticas. Nuestro enfoque elimina las juntas y cortes habituales del gres o la piedra, logrando una continuidad visual que aporta ligereza y modernidad a cualquier espacio." />
              <StickyPoint num="02" title="Soluciones continuas de alta adherencia" text="Para garantizar la durabilidad en aristas y zonas de paso frecuente, seleccionamos materiales de alta gama con una capacidad de adherencia superior. Utilizamos microcementos técnicos y micro-morteros de alta resistencia que permiten revestir huellas y contrahuellas sobre diversos soportes como hormigón, madera o cerámica antigua. Esta versatilidad nos permite renovar escaleras completas sin necesidad de demoliciones complejas, asegurando un acabado sólido y duradero." />
              <StickyPointList num="03" title="Aplicaciones de diseño arquitectónico" items={[
                { label: 'Escaleras de Interior', desc: 'Acabados minimalistas que integran la escalera con el pavimento de la vivienda.' },
                { label: 'Escaleras de Exterior', desc: 'Aplicaciones resistentes a la intemperie con propiedades antideslizantes.' },
                { label: 'Locales y Oficinas', desc: 'Soluciones de alto tránsito que combinan estética profesional y resistencia.' },
                { label: 'Reformas Sin Obra', desc: 'Renovación directa sobre materiales existentes, optimizando plazos y limpieza.' },
              ]} />
              <StickyPointList num="04" title="Aspecto y funcionalidad sin juntas" items={[
                { label: 'Estética Escultórica', desc: 'Al eliminar las uniones, la escalera se percibe como una sola pieza de diseño uniforme.' },
                { label: 'Higiene y Mantenimiento', desc: 'Sin juntas no hay acumulación de suciedad en los rincones, facilitando una limpieza rápida y efectiva.' },
                { label: 'Versatilidad Estética', desc: 'Personalización total en texturas y colores para adaptarse a estilos contemporáneos o clásicos.' },
                { label: 'Seguridad Garantizada', desc: 'Aplicamos acabados técnicos que aseguran el agarre necesario sin comprometer la suavidad al tacto.' },
              ]} />
              <StickyPointList num="05" title="Nuestro proceso de ejecución" items={[
                { label: 'Evaluación de Estructura', desc: 'Estudiamos la estabilidad y el estado de cada peldaño antes de intervenir.' },
                { label: 'Selección del Sistema', desc: 'Elegimos el material técnico adecuado según el uso previsto y el diseño buscado.' },
                { label: 'Aplicación Artesanal', desc: 'Ejecución minuciosa por nuestro equipo técnico para lograr aristas y acabados perfectos.' },
                { label: 'Seguimiento y Garantía', desc: 'Supervisamos la obra finalizada para asegurar una satisfacción total y durabilidad a largo plazo.' },
              ]} />
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex w-full">
            <div className="w-1/2 flex-shrink-0">
              <div className="sticky top-0 h-screen overflow-hidden">
                <img
                  src="/src/assets/raw/ap_escalera.jpg"
                  alt="Escaleras"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-0 py-24 px-12 xl:px-20">
              <StickyPoint num="01" title="Precisión técnica en cada peldaño" text="El revestimiento de escaleras es uno de los trabajos de ejecución más exigentes, ya que requiere una precisión milimétrica en superficies verticales e inclinadas. Como especialistas con más de 7 años de trayectoria en Barcelona, transformamos estructuras convencionales en piezas arquitectónicas monolíticas. Nuestro enfoque elimina las juntas y cortes habituales del gres o la piedra, logrando una continuidad visual que aporta ligereza y modernidad a cualquier espacio." />
              <StickyPoint num="02" title="Soluciones continuas de alta adherencia" text="Para garantizar la durabilidad en aristas y zonas de paso frecuente, seleccionamos materiales de alta gama con una capacidad de adherencia superior. Utilizamos microcementos técnicos y micro-morteros de alta resistencia que permiten revestir huellas y contrahuellas sobre diversos soportes como hormigón, madera o cerámica antigua. Esta versatilidad nos permite renovar escaleras completas sin necesidad de demoliciones complejas, asegurando un acabado sólido y duradero." />
              <StickyPointList num="03" title="Aplicaciones de diseño arquitectónico" items={[
                { label: 'Escaleras de Interior', desc: 'Acabados minimalistas que integran la escalera con el pavimento de la vivienda.' },
                { label: 'Escaleras de Exterior', desc: 'Aplicaciones resistentes a la intemperie con propiedades antideslizantes.' },
                { label: 'Locales y Oficinas', desc: 'Soluciones de alto tránsito que combinan estética profesional y resistencia.' },
                { label: 'Reformas Sin Obra', desc: 'Renovación directa sobre materiales existentes, optimizando plazos y limpieza.' },
              ]} />
              <StickyPointList num="04" title="Aspecto y funcionalidad sin juntas" items={[
                { label: 'Estética Escultórica', desc: 'Al eliminar las uniones, la escalera se percibe como una sola pieza de diseño uniforme.' },
                { label: 'Higiene y Mantenimiento', desc: 'Sin juntas no hay acumulación de suciedad en los rincones, facilitando una limpieza rápida y efectiva.' },
                { label: 'Versatilidad Estética', desc: 'Personalización total en texturas y colores para adaptarse a estilos contemporáneos o clásicos.' },
                { label: 'Seguridad Garantizada', desc: 'Aplicamos acabados técnicos que aseguran el agarre necesario sin comprometer la suavidad al tacto.' },
              ]} />
              <StickyPointList num="05" title="Nuestro proceso de ejecución" items={[
                { label: 'Evaluación de Estructura', desc: 'Estudiamos la estabilidad y el estado de cada peldaño antes de intervenir.' },
                { label: 'Selección del Sistema', desc: 'Elegimos el material técnico adecuado según el uso previsto y el diseño buscado.' },
                { label: 'Aplicación Artesanal', desc: 'Ejecución minuciosa por nuestro equipo técnico para lograr aristas y acabados perfectos.' },
                { label: 'Seguimiento y Garantía', desc: 'Supervisamos la obra finalizada para asegurar una satisfacción total y durabilidad a largo plazo.' },
              ]} />
            </div>
          </div>
        </section>
      )}

      {/* STICKY SCROLL — Piscinas */}
      {servicio.slug === 'piscinas' && (
        <section className="w-full" style={{ backgroundColor: '#f7f6f5' }}>
          {/* Mobile */}
          <div className="block md:hidden">
            <div className="w-full h-[40vh] sticky top-0 z-10 overflow-hidden">
              <img
                src="/src/assets/raw/ap_piscinas.png"
                alt="Piscinas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-16 flex flex-col gap-16">
              <StickyPoint num="01" title="Especialización en entornos acuáticos" text="El revestimiento de una piscina no es un simple acabado decorativo; es una solución de ingeniería que debe garantizar estanqueidad y durabilidad. Como ejecutores con más de 7 años de trayectoria en Barcelona, nos especializamos en sistemas continuos que protegen la estructura del vaso y eliminan las debilidades de los revestimientos tradicionales. Nuestro objetivo es crear una superficie monolítica que resista la presión del agua y los agentes químicos sin perder su integridad." />
              <StickyPoint num="02" title="Estanqueidad y superficies continuas" text="La principal ventaja de nuestra ejecución técnica es la eliminación total de las juntas. Utilizamos micromorteros y revestimientos de alta pureza diseñados específicamente para estar sumergidos, garantizando una impermeabilización superior. Al prescindir de las juntas del gresite o la cerámica, reducimos drásticamente el riesgo de filtraciones y simplificamos el mantenimiento, logrando un vaso estanco y visualmente infinito." />
              <StickyPointList num="03" title="Intervenciones en el área de baño" items={[
                { label: 'Vaso de la Piscina', desc: 'Revestimiento técnico de alta adherencia para una estanqueidad total.' },
                { label: 'Zonas Anexas y Playas', desc: 'Continuidad estética en solariums y duchas exteriores con acabados antideslizantes.' },
                { label: 'Escaleras Integradas', desc: 'Ejecución de peldaños y bancos internos sin cortes ni uniones.' },
                { label: 'Renovaciones Integrales', desc: 'Aplicación directa sobre estructuras existentes para actualizar su técnica y diseño.' },
              ]} />
              <StickyPointList num="04" title="Ventajas del revestimiento técnico" items={[
                { label: 'Seguridad Antideslizante', desc: 'Texturas diseñadas para ofrecer máxima seguridad en zonas húmedas sin ser agresivas al tacto.' },
                { label: 'Resistencia Extrema', desc: 'Sistemas preparados para soportar ciclos de llenado, vaciado y la radiación solar constante.' },
                { label: 'Higiene y Limpieza', desc: 'Sin juntas no hay acumulación de algas ni moho, facilitando un agua más limpia con menos químicos.' },
                { label: 'Estética de Vanguardia', desc: 'Acabados minerales que se integran con el entorno arquitectónico de forma natural.' },
              ]} />
              <StickyPointList num="05" title="Nuestro proceso técnico" items={[
                { label: 'Evaluación del Vaso', desc: 'Inspeccionamos la estructura y el estado del soporte antes de intervenir.' },
                { label: 'Selección de Sistema', desc: 'Elegimos el revestimiento de alta gama idóneo según el uso y dimensiones de la piscina.' },
                { label: 'Aplicación Certificada', desc: 'Ejecución meticulosa asegurando el sellado de cada rincón y punto crítico.' },
                { label: 'Control de Calidad', desc: 'Supervisión final de la estanqueidad y el acabado decorativo personalizado.' },
              ]} />
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex w-full">
            <div className="w-1/2 flex-shrink-0">
              <div className="sticky top-0 h-screen overflow-hidden">
                <img
                  src="/src/assets/raw/ap_piscina.png"
                  alt="Piscinas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-0 py-24 px-12 xl:px-20">
              <StickyPoint num="01" title="Especialización en entornos acuáticos" text="El revestimiento de una piscina no es un simple acabado decorativo; es una solución de ingeniería que debe garantizar estanqueidad y durabilidad. Como ejecutores con más de 7 años de trayectoria en Barcelona, nos especializamos en sistemas continuos que protegen la estructura del vaso y eliminan las debilidades de los revestimientos tradicionales. Nuestro objetivo es crear una superficie monolítica que resista la presión del agua y los agentes químicos sin perder su integridad." />
              <StickyPoint num="02" title="Estanqueidad y superficies continuas" text="La principal ventaja de nuestra ejecución técnica es la eliminación total de las juntas. Utilizamos micromorteros y revestimientos de alta pureza diseñados específicamente para estar sumergidos, garantizando una impermeabilización superior. Al prescindir de las juntas del gresite o la cerámica, reducimos drásticamente el riesgo de filtraciones y simplificamos el mantenimiento, logrando un vaso estanco y visualmente infinito." />
              <StickyPointList num="03" title="Intervenciones en el área de baño" items={[
                { label: 'Vaso de la Piscina', desc: 'Revestimiento técnico de alta adherencia para una estanqueidad total.' },
                { label: 'Zonas Anexas y Playas', desc: 'Continuidad estética en solariums y duchas exteriores con acabados antideslizantes.' },
                { label: 'Escaleras Integradas', desc: 'Ejecución de peldaños y bancos internos sin cortes ni uniones.' },
                { label: 'Renovaciones Integrales', desc: 'Aplicación directa sobre estructuras existentes para actualizar su técnica y diseño.' },
              ]} />
              <StickyPointList num="04" title="Ventajas del revestimiento técnico" items={[
                { label: 'Seguridad Antideslizante', desc: 'Texturas diseñadas para ofrecer máxima seguridad en zonas húmedas sin ser agresivas al tacto.' },
                { label: 'Resistencia Extrema', desc: 'Sistemas preparados para soportar ciclos de llenado, vaciado y la radiación solar constante.' },
                { label: 'Higiene y Limpieza', desc: 'Sin juntas no hay acumulación de algas ni moho, facilitando un agua más limpia con menos químicos.' },
                { label: 'Estética de Vanguardia', desc: 'Acabados minerales que se integran con el entorno arquitectónico de forma natural.' },
              ]} />
              <StickyPointList num="05" title="Nuestro proceso técnico" items={[
                { label: 'Evaluación del Vaso', desc: 'Inspeccionamos la estructura y el estado del soporte antes de intervenir.' },
                { label: 'Selección de Sistema', desc: 'Elegimos el revestimiento de alta gama idóneo según el uso y dimensiones de la piscina.' },
                { label: 'Aplicación Certificada', desc: 'Ejecución meticulosa asegurando el sellado de cada rincón y punto crítico.' },
                { label: 'Control de Calidad', desc: 'Supervisión final de la estanqueidad y el acabado decorativo personalizado.' },
              ]} />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CtaSection {...(ctaContent[servicio.slug] || ctaContent['banos-y-zonas-humedas'])} />

      {/* OTRAS APLICACIONES */}
      <FadeIn delay={0.6}>
        <section className="w-full border-t border-black/[0.05]" style={{ backgroundColor: '#f5f4f4' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 flex flex-col gap-10">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl md:text-3xl font-instrumental italic tracking-tighter">Otras aplicaciones</h3>
              <Link to="/aplicaciones" className="inline-flex items-center gap-2 text-sm font-body hover:opacity-70 transition-opacity">
                <ArrowLeft size={16} /> Ver todas
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {servicios
                .filter((s) => s.slug !== servicio.slug)
                .slice(0, 3)
                .map((s) => (
                  <Link key={s.slug} to={`/aplicaciones/${s.slug}`} className="flex flex-col gap-4 group">
                    <div className="relative overflow-hidden rounded-[32px] aspect-[4/3]">
                      <img
                        src={s.cardImage}
                        alt={s.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="text-lg font-instrumental italic tracking-tighter group-hover:opacity-70 transition-opacity">
                      {s.title}
                    </h4>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
};

export default AplicacionDetalle;
