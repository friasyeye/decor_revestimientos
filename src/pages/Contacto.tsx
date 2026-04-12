import { motion } from 'framer-motion';

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const Contacto = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-4 py-32 min-h-[60vh]">
      <motion.h1
        className="text-5xl md:text-6xl font-bold font-titles mb-12 tracking-tighter text-black"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: EASE_OUT }}
      >
        Contacto
      </motion.h1>
      <motion.p
        className="text-xl text-gray-600 max-w-3xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: EASE_OUT, delay: 0.15 }}
      >
        ¿Tienes un proyecto en mente? Estamos aquí para asesorarte y convertir tus espacios en ambientes únicos. El mejor momento para empezar es ahora.
      </motion.p>
    </main>
  );
};

export default Contacto;
