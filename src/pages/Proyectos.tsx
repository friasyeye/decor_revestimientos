import { useState, useCallback } from 'react';
import FadeIn from '../components/FadeIn';
import CtaSection from '../components/CtaSection';
import Lightbox from '../components/Lightbox';

interface Project {
  image: string;
  srcMobile: string;
  srcDesktop: string;
  alt: string;
  material: string;
  space: string;
  location: string;
  aspect: 'vertical' | 'horizontal';
}

const PROJECTS: Project[] = [
  {
    image: '/images/proy_ducha_negra.jpg',
    srcMobile: '/optimized/proy_ducha_negra-mobile.webp',
    srcDesktop: '/optimized/proy_ducha_negra-desktop.webp',
    alt: 'Ducha de microcemento con grifería negra',
    material: 'Microcemento',
    space: 'Ducha',
    location: 'Barcelona',
    aspect: 'vertical',
  },
  {
    image: '/images/proy_local_comercial.jpg',
    srcMobile: '/optimized/proy_local_comercial-mobile.webp',
    srcDesktop: '/optimized/proy_local_comercial-desktop.webp',
    alt: 'Local comercial revestido con microcemento',
    material: 'Microcemento',
    space: 'Local comercial',
    location: 'Barcelona',
    aspect: 'horizontal',
  },
  {
    image: '/images/proy_cocina.jpg',
    srcMobile: '/optimized/proy_cocina-mobile.webp',
    srcDesktop: '/optimized/proy_cocina-desktop.webp',
    alt: 'Pared de cocina con microcemento',
    material: 'Microcemento',
    space: 'Cocina',
    location: 'Barcelona',
    aspect: 'vertical',
  },
  {
    image: '/images/proy_bano_doble_lavabo.jpg',
    srcMobile: '/optimized/proy_bano_doble_lavabo-mobile.webp',
    srcDesktop: '/optimized/proy_bano_doble_lavabo-desktop.webp',
    alt: 'Baño con doble lavabo y microcemento blanco',
    material: 'Mortex',
    space: 'Baño',
    location: 'Barcelona',
    aspect: 'horizontal',
  },
  {
    image: '/images/proy_ducha_gris.jpg',
    srcMobile: '/optimized/proy_ducha_gris-mobile.webp',
    srcDesktop: '/optimized/proy_ducha_gris-desktop.webp',
    alt: 'Detalle de ducha en microcemento gris',
    material: 'Microcemento',
    space: 'Ducha',
    location: 'Barcelona',
    aspect: 'vertical',
  },
  {
    image: '/images/proy_ducha_dorada.jpg',
    srcMobile: '/optimized/proy_ducha_dorada-mobile.webp',
    srcDesktop: '/optimized/proy_ducha_dorada-desktop.webp',
    alt: 'Detalle de grifería dorada sobre microcemento',
    material: 'Mortex',
    space: 'Baño',
    location: 'Barcelona',
    aspect: 'vertical',
  },
  {
    image: '/images/proy_bano_doble_general.jpg',
    srcMobile: '/optimized/proy_bano_doble_general-mobile.webp',
    srcDesktop: '/optimized/proy_bano_doble_general-desktop.webp',
    alt: 'Baño completo con mueble de obra y doble lavabo',
    material: 'Mortex',
    space: 'Baño completo',
    location: 'Barcelona',
    aspect: 'horizontal',
  },
  {
    image: '/images/proy_piscina.jpg',
    srcMobile: '/optimized/proy_piscina-mobile.webp',
    srcDesktop: '/optimized/proy_piscina-desktop.webp',
    alt: 'Piscina revestida con microcemento',
    material: 'Microcemento',
    space: 'Piscina',
    location: 'Sant Cugat del Vallès',
    aspect: 'horizontal',
  },
  {
    image: '/images/proy_bano_lamparas.jpg',
    srcMobile: '/optimized/proy_bano_lamparas-mobile.webp',
    srcDesktop: '/optimized/proy_bano_lamparas-desktop.webp',
    alt: 'Baño con microcemento gris y lámparas de diseño',
    material: 'Microcemento',
    space: 'Baño completo',
    location: 'Barcelona',
    aspect: 'vertical',
  },
];

// Zig-zag desktop: alternating left/right with slight positional variation
const ZIGZAG: { side: string; width: string; mt: string }[] = [
  { side: 'mr-auto ml-0', width: 'w-[55%]', mt: 'mt-0' },
  { side: 'ml-auto mr-0', width: 'w-[50%]', mt: 'mt-[-4rem]' },
  { side: 'mr-auto ml-[3%]', width: 'w-[52%]', mt: 'mt-10' },
  { side: 'ml-auto mr-[4%]', width: 'w-[48%]', mt: 'mt-[-3rem]' },
  { side: 'mr-auto ml-[1%]', width: 'w-[54%]', mt: 'mt-8' },
  { side: 'ml-auto mr-[2%]', width: 'w-[50%]', mt: 'mt-[-2rem]' },
  { side: 'mr-auto ml-[4%]', width: 'w-[53%]', mt: 'mt-12' },
  { side: 'ml-auto mr-[1%]', width: 'w-[49%]', mt: 'mt-[-3rem]' },
];

const Proyectos = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const navigateLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  return (
    <main className="flex flex-col">

      {/* HERO */}
      <FadeIn>
        <section className="w-full border-b border-black/[0.03] pt-28 pb-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-6 md:gap-8">
            <p className="text-xs md:text-sm font-body text-gray-400 uppercase tracking-widest">Proyectos</p>
            <h1 className="text-4xl md:text-5xl font-instrumental italic tracking-tighter leading-tight max-w-3xl">
              Proyectos reales: la ejecución técnica en detalle
            </h1>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-body max-w-2xl">
              Más allá de la teoría, nuestra maestría se demuestra en el día a día de los espacios que transformamos. En esta sección presentamos una selección de trabajos finalizados donde la precisión en la aplicación y la elección del material correcto han dado lugar a superficies continuas, funcionales y estéticamente impecables. Cada imagen es el resultado de un diagnóstico previo y una ejecución artesanal diseñada para perdurar.
            </p>
          </div>

          {/* Doodle arrow — desktop only, reveal with clipPath animation */}
          <div
            className="hidden md:block absolute right-20 top-[60%] -translate-y-1/2 w-80"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black, black)',
              maskImage: 'linear-gradient(to bottom, black, black)',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'top',
              maskPosition: 'top',
              WebkitMaskSize: '100% 0%',
              maskSize: '100% 0%',
              animation: 'revealArrow 2.2s cubic-bezier(0.25,0.46,0.45,0.94) 0.6s forwards',
            }}
          >
            <style>{`
              @keyframes revealArrow {
                from { -webkit-mask-size: 100% 0%;   mask-size: 100% 0%; }
                to   { -webkit-mask-size: 100% 100%; mask-size: 100% 100%; }
              }
            `}</style>
            <img src="/images/flecha.png" alt="" aria-hidden="true" className="w-80 rotate-180" />
          </div>
        </section>
      </FadeIn>

      {/* PROJECT GRID */}
      <FadeIn delay={0.2}>
        <section className="w-full border-b border-black/[0.03]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

            {/* MOBILE */}
            <div className="flex flex-col gap-6 md:hidden">
              {PROJECTS.map((project, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <picture>
                    {project.srcMobile && (
                      <source media="(max-width: 600px)" srcSet={project.srcMobile} type="image/webp" />
                    )}
                    {project.srcDesktop && (
                      <source srcSet={project.srcDesktop} type="image/webp" />
                    )}
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-auto object-cover"
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                  </picture>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm px-4 py-3 flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-body uppercase tracking-widest text-white/90">{project.material}</span>
                    <span className="text-white/40">—</span>
                    <span className="text-[10px] font-body uppercase tracking-widest text-white/90">{project.space}</span>
                    <span className="text-white/40">—</span>
                    <span className="text-[10px] font-body uppercase tracking-widest text-white/90">{project.location}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* DESKTOP — zig-zag editorial layout */}
            <div className="hidden md:flex md:flex-col">
              {PROJECTS.map((project, index) => {
                const zz = ZIGZAG[index % ZIGZAG.length];
                return (
                  <div
                    key={index}
                    className={`group relative overflow-hidden cursor-pointer mb-10 ${zz.width} ${zz.side} ${zz.mt}`}
                    onClick={() => openLightbox(index)}
                  >
                    <picture>
                      {project.srcMobile && (
                        <source media="(max-width: 600px)" srcSet={project.srcMobile} type="image/webp" />
                      )}
                      {project.srcDesktop && (
                        <source srcSet={project.srcDesktop} type="image/webp" />
                      )}
                      <img
                        src={project.image}
                        alt={project.alt}
                        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${project.aspect === 'vertical' ? 'aspect-[3/4]' : 'aspect-[4/3]'
                          }`}
                        loading={index < 2 ? 'eager' : 'lazy'}
                      />
                    </picture>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-black/60 backdrop-blur-sm px-5 py-4 flex flex-col gap-1">
                      <span className="text-xs font-body uppercase tracking-widest text-white/90">{project.material}</span>
                      <span className="text-xs font-body uppercase tracking-widest text-white/60">{project.space} — {project.location}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <CtaSection
        title="¿Inspirado para tu próximo espacio?"
        description="Cuéntanos la idea que tienes en mente y nosotros nos encargamos de la viabilidad técnica y la ejecución profesional. Transforma tu vivienda o negocio con la garantía de un acabado artesanal, sin juntas y totalmente definitivo."
        buttonText="Pedir presupuesto personalizado"
      />

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <Lightbox
          images={PROJECTS.map((p) => ({
            src: p.image,
            srcMobile: p.srcMobile,
            srcDesktop: p.srcDesktop,
            alt: p.alt,
            material: p.material,
            space: p.space,
            location: p.location,
          }))}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </main>
  );
};

export default Proyectos;
