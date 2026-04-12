import FadeIn from './FadeIn';

interface CtaSectionProps {
  title: string;
  description: string;
  buttonText: string;
}

const CtaSection = ({ title, description, buttonText }: CtaSectionProps) => (
  <FadeIn delay={0.4}>
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center flex flex-col items-center gap-8">
        <h2 className="text-4xl md:text-6xl font-instrumental italic tracking-tighter max-w-3xl">
          {title}
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed font-body max-w-xl">
          {description}
        </p>
        <a
          href="https://wa.me/34603143050?text=Hola,%20vengo%20de%20la%20web%20y%20quiero%20pedir%20un%20presupuesto%20personalizado"
          className="btn-press inline-flex items-center justify-center rounded-full px-8 py-3 border border-black bg-black text-white hover:bg-white hover:text-black"
        >
          {buttonText}
        </a>
      </div>
    </section>
  </FadeIn>
);

export default CtaSection;
