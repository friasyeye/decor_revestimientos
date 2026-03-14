import FadeIn from '../components/FadeIn';

const Home = () => {
  return (
    <main>
      <FadeIn>
        <section id="hero">
          <h1>[HERO_SECTION]</h1>
          <p>This is the hero section of the home page.</p>
        </section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <section id="proyectos">
          <h2>[PROYECTOS_PREVIEW]</h2>
          <p>Preview of our latest projects.</p>
        </section>
      </FadeIn>

      <FadeIn delay={0.4}>
        <section id="servicios">
          <h2>[SERVICIOS_PREVIEW]</h2>
          <p>Preview of the services we offer.</p>
        </section>
      </FadeIn>

      <FadeIn delay={0.6}>
        <section id="nosotros">
          <h2>[NOSOTROS_PREVIEW]</h2>
          <p>Brief overview about our company.</p>
        </section>
      </FadeIn>

      <FadeIn delay={0.8}>
        <section id="whatsapp">
          <h2>[WHATSAPP_CTA]</h2>
          <p>Call to action for WhatsApp contact.</p>
        </section>
      </FadeIn>
    </main>
  );
};

export default Home;
