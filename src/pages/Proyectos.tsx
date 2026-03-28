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
    image: '/images/ap_baño.jpg',
    srcMobile: '/optimized/ap_baño-mobile.webp',
    srcDesktop: '/optimized/ap_baño-desktop.webp',
    alt: 'Baño revestido con microcemento en Barcelona',
    material: 'Microcemento',
    space: 'Baño completo',
    location: 'Eixample, Barcelona',
    aspect: 'vertical',
  },
  {
    image: '/images/ap_suelo.png',
    srcMobile: '/optimized/ap_suelo-mobile.webp',
    srcDesktop: '/optimized/ap_suelo-desktop.webp',
    alt: 'Suelo continuo de microcemento',
    material: 'Microcemento',
    space: 'Suelo interior',
    location: 'Gràcia, Barcelona',
    aspect: 'horizontal',
  },
  {
    image: '/images/ap_piscina.png',
    srcMobile: '/optimized/ap_piscina-mobile.webp',
    srcDesktop: '/optimized/ap_piscina-desktop.webp',
    alt: 'Piscina revestida con Mortex',
    material: 'Mortex',
    space: 'Piscina',
    location: 'Sarrià, Barcelona',
    aspect: 'horizontal',
  },
  {
    image: '/images/ap_escalera.jpg',
    srcMobile: '/optimized/ap_escalera-mobile.webp',
    srcDesktop: '/optimized/ap_escalera-desktop.webp',
    alt: 'Escalera revestida sin juntas',
    material: 'Microcemento',
    space: 'Escalera',
    location: 'Sant Gervasi, Barcelona',
    aspect: 'vertical',
  },
  {
    image: '/images/mc_1.jpg',
    srcMobile: '/optimized/mc_1-mobile.webp',
    srcDesktop: '/optimized/mc_1-desktop.webp',
    alt: 'Aplicación de microcemento en pared',
    material: 'Microcemento',
    space: 'Pared interior',
    location: 'Poblenou, Barcelona',
    aspect: 'vertical',
  },
  {
    image: '/images/mc_2.jpg',
    srcMobile: '/optimized/mc_2-mobile.webp',
    srcDesktop: '/optimized/mc_2-desktop.webp',
    alt: 'Detalle de textura Mortex',
    material: 'Mortex',
    space: 'Superficie de obra',
    location: 'Born, Barcelona',
    aspect: 'horizontal',
  },
  {
    image: '/images/habitacion_lamp.jpg',
    srcMobile: '/optimized/habitacion_lamp-mobile.webp',
    srcDesktop: '/optimized/habitacion_lamp-desktop.webp',
    alt: 'Habitación con acabado continuo',
    material: 'Microcemento',
    space: 'Dormitorio',
    location: 'Les Corts, Barcelona',
    aspect: 'horizontal',
  },
  {
    image: '/images/mesa_mc.png',
    srcMobile: '',
    srcDesktop: '',
    alt: 'Mesa de microcemento a medida',
    material: 'Microcemento',
    space: 'Mobiliario',
    location: 'Eixample, Barcelona',
    aspect: 'vertical',
  },
];

const STAGGER_OFFSETS = [
  'mt-0',
  'mt-16',
  'mt-[-2rem]',
  'mt-12',
  'mt-[-3rem]',
  'mt-20',
  'mt-[-1rem]',
  'mt-8',
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
        <section className="w-full border-b border-black/[0.03] pt-28 pb-20">
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-6 md:gap-8">
            <p className="text-xs md:text-sm font-body text-gray-400 uppercase tracking-widest">Proyectos</p>
            <h1 className="text-4xl md:text-5xl font-instrumental italic tracking-tighter leading-tight max-w-3xl">
              Proyectos reales: la ejecución técnica en detalle
            </h1>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-body max-w-2xl">
              Más allá de la teoría, nuestra maestría se demuestra en el día a día de los espacios que transformamos. En esta sección presentamos una selección de trabajos finalizados en Barcelona donde la precisión en la aplicación y la elección del material correcto han dado lugar a superficies continuas, funcionales y estéticamente impecables. Cada imagen es el resultado de un diagnóstico previo y una ejecución artesanal diseñada para perdurar.
            </p>
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

            {/* DESKTOP — asymmetrical editorial grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-x-10">
              {PROJECTS.map((project, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden cursor-pointer mb-10 ${STAGGER_OFFSETS[index] || 'mt-0'}`}
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
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        project.aspect === 'vertical' ? 'aspect-[3/4]' : 'aspect-[4/3]'
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
              ))}
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
