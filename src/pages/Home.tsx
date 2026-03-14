import FadeIn from '../components/FadeIn';
import OptimizedImage from '../components/OptimizedImage';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <main className="flex flex-col gap-20 py-10">
      {/* 1. HERO SECTION */}
      <FadeIn>
        <section id="hero" className="container mx-auto px-4">
          <div className="flex flex-col gap-4">
            <h1>Especialistas en microcemento y revestimientos continuos en Barcelona</h1>
            <p className="text-xl">Elegancia y durabilidad en cada rincón de tu hogar</p>
            <OptimizedImage srcName="hero" alt="Microcemento en Barcelona" className="w-full h-auto mt-6" />
          </div>
        </section>
      </FadeIn>

      {/* 2. PROYECTOS PREVIEW (Text Left, Image Right) */}
      <FadeIn delay={0.2}>
        <section id="proyectos" className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4 order-2 md:order-1">
            <h2>Transformamos superficies, creamos ambientes</h2>
            <p>
              A menudo, cuando alguien busca microcemento para su casa, se pierde entre marcas, catálogos y tecnicismos. Es fácil abrumarse con muestras y texturas sin saber realmente qué es lo que mejor va a funcionar en un suelo de alto tránsito o en una piscina expuesta al sol.
            </p>
            <p>
              En Decor Revestimientos no vendemos botes de material; ejecutamos tu proyecto de principio a fin. 
            </p>
            <p>
              Nuestra labor comienza mucho antes de aplicar la primera capa. Nos sentamos contigo para entender qué uso tendrá cada espacio y te asesoramos para elegir la solución técnica que realmente necesitas. No aplicamos por aplicar; seleccionamos los materiales de mayor pureza y resistencia para garantizar que ese acabado impecable que buscas hoy, siga igual dentro de muchos años.
            </p>
            <p>
              Nos especializamos en lo que otros consideran difícil. Por eso, además del microcemento tradicional, somos expertos ejecutores de Mortex, pensado para quienes buscan un nivel de exclusividad y durabilidad que va un paso más allá.
            </p>
            <p>
              Al final, nuestro trabajo consiste en que tú solo tengas que imaginar el espacio. De la técnica, la precisión y la ejecución perfecta, nos encargamos nosotros.
            </p>
            <Link to="/materiales" className="flex items-center gap-2 font-bold mt-4">
              ver galeria de trabajos <ArrowRight size={20} />
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <OptimizedImage srcName="proyectos" alt="Nuestros Proyectos" className="w-full h-auto" />
          </div>
        </section>
      </FadeIn>

      {/* 3. SERVICIOS PREVIEW (Text Right, Image Left) */}
      <FadeIn delay={0.4}>
        <section id="servicios" className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <OptimizedImage srcName="aplicaciones" alt="Especialización Técnica" className="w-full h-auto" />
          </div>
          <div className="flex flex-col gap-4">
            <h2>Especialización técnica aplicada a cada superficie</h2>
            <p>
              No todas las superficies sufren el mismo desgaste: suelos, paredes, baños y piscinas tienen exigencias técnicas completamente distintas. Por eso, nuestro trabajo como especialistas consiste en aplicar el material específico que garantiza la máxima adherencia y resistencia en cada ambiente. Entendemos que no tienes por qué conocer las diferencias entre un material para suelos como el Atlantic o la delicadeza técnica de un micro-mortero como el Mortex; nuestro papel es asesorarte y ejecutar la aplicación perfecta para que tú solo disfrutes del acabado final.
            </p>
            <Link to="/aplicaciones" className="flex items-center gap-2 font-bold mt-4">
              ver nuestras especialidades <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* 4. NOSOTROS PREVIEW (Text Left, Image Right) */}
      <FadeIn delay={0.6}>
        <section id="nosotros" className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4 order-2 md:order-1">
            <h2>La maestría de un equipo que conoce el material</h2>
            <p>
              En Decor Revestimientos sumamos más de 7 años de trayectoria especializándonos en la aplicación de microcementos y micro-morteros de alta gama. Como ejecutores certificados en Barcelona, analizamos cada superficie para asegurar resultados impecables que perduran en el tiempo.
            </p>
            <p>
              Entendemos que el éxito de un proyecto en Barcelona reside en la precisión de la mano de obra y en la elección de la solución técnica adecuada para cada proyecto. Gracias a nuestra metodologia aportamos el rigor técnico necesario para que estética y resistencia caminen siempre de la mano.
            </p>
            <Link to="/nosotros" className="flex items-center gap-2 font-bold mt-4">
              ver galeria de trabajos <ArrowRight size={20} />
            </Link>
          </div>
          <div className="order-1 md:order-2">
            {/* Using decor.jpg placeholder as requested - Note: User may need to upload this */}
            <OptimizedImage srcName="decor" alt="Nuestro Equipo Decor Revestimientos" className="w-full h-auto" />
          </div>
        </section>
      </FadeIn>

      {/* 5. WHATSAPP CTA */}
      <FadeIn delay={0.8}>
        <section id="whatsapp" className="container mx-auto px-4 text-center max-w-2xl py-20 border-t border-black mt-10">
          <div className="flex flex-col gap-6">
            <h2>¿Hablamos de tu proyecto ahora mismo?</h2>
            <p>
              Cuéntanos tu idea y te asesoraremos sobre la solución técnica que mejor se adapta a las necesidades de tu espacio. Solicita hoy mismo tu presupuesto personalizado para tu espacio en Barcelona sin compromiso.
            </p>
            <div>
              <a href="https://wa.me/yournumber" className="inline-block p-4 border border-black font-bold">
                ENVIAR MENSAJE POR WHATSAPP
              </a>
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
};

export default Home;
