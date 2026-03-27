export interface Servicio {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  cardImage: string;
  extendedContent: string;
  specs: { label: string; value: string }[];
  metaDescription: string;
}

export const servicios: Servicio[] = [
  {
    slug: 'banos-y-zonas-humedas',
    title: 'Baños y Zonas Húmedas',
    description: 'Superficies sin cortes ni interrupciones que garantizan higiene absoluta y resistencia total a la humedad. Un diseño de alto impacto visual totalmente adherente sobre cualquier soporte existente.',
    heroImage: '/images/mc_2.jpg',
    cardImage: '/images/servicios_baño.jpg',
    extendedContent: 'El baño es uno de los espacios más exigentes de cualquier vivienda. La humedad constante, los cambios de temperatura y el uso diario requieren un revestimiento que no solo sea bello, sino técnicamente robusto. Nuestro sistema de microcemento para zonas húmedas crea superficies continuas sin juntas donde no se acumula la suciedad ni el moho, garantizando una higiene superior a la del azulejo tradicional.\n\nComo ejecutores certificados, analizamos cada soporte antes de aplicar para asegurar una adherencia perfecta sobre cerámica, hormigón o yeso existente. El resultado es una superficie impermeable, fácil de limpiar y de una estética contemporánea que transforma completamente el espacio.',
    specs: [
      { label: 'Espesor', value: '2 - 3 mm' },
      { label: 'Adherencia', value: 'Sobre soporte existente' },
      { label: 'Secado', value: '24 - 48 h (por capa)' },
      { label: 'Protección final', value: 'Sellador hidrorepelente' },
      { label: 'Resistencia humedad', value: 'Alta' },
      { label: 'Mantenimiento', value: 'Bajo' },
    ],
    metaDescription: 'Microcemento para baños y zonas húmedas en Barcelona. Superficies continuas sin juntas, resistentes a la humedad y de fácil limpieza. Ejecución certificada.',
  },
  {
    slug: 'exteriores-y-suelos',
    title: 'Exteriores y Suelos',
    description: 'Suelos que aportan amplitud y resisten el uso diario más exigente. Un acabado continuo y elegante que une tus espacios interiores y exteriores con una durabilidad máxima.',
    heroImage: '/images/mc_2.jpg',
    cardImage: '/images/servicios_suelo.jpg',
    extendedContent: 'Los suelos son la superficie más castigada de cualquier espacio. Cada pisada, cada mueble, cada gota de agua es un reto para el material. El microcemento para suelos que aplicamos está formulado específicamente para soportar el tránsito más exigente, tanto en interiores como en exteriores, manteniendo su estética impecable con el tiempo.\n\nEliminamos las juntas tradicionales que se ensucian y deterioran, logrando una continuidad visual que amplifica el espacio y aporta una sensación de amplitud sin igual. Nuestros acabados exteriores incorporan aditivos antideslizantes y resistentes a los agentes atmosféricos, garantizando seguridad y durabilidad en terrazas, jardines y piscinas desbordantes.',
    specs: [
      { label: 'Espesor', value: '3 - 5 mm' },
      { label: 'Resistencia tránsito', value: 'Alta intensidad' },
      { label: 'Secado', value: '72 h (uso completo)' },
      { label: 'Protección final', value: 'Poliuretano / Epóxi' },
      { label: 'Antideslizante', value: 'Disponible exterior' },
      { label: 'Temperatura', value: '-20°C a +80°C' },
    ],
    metaDescription: 'Microcemento para suelos y exteriores en Barcelona. Acabados continuos sin juntas de alta resistencia al tránsito. Interior y exterior.',
  },
  {
    slug: 'piscinas',
    title: 'Piscinas',
    description: 'El efecto de agua continua que buscas para tu jardín. Un revestimiento de alta pureza que garantiza la seguridad y la estanqueidad de tu piscina con un diseño de vanguardia.',
    heroImage: '/images/mc_2.jpg',
    cardImage: '/images/servicios_piscinas.png',
    extendedContent: 'Revestir una piscina con microcemento es uno de los trabajos más técnicamente exigentes del sector. La estanqueidad perfecta no admite errores: un fallo en la impermeabilización o en la adherencia puede arruinar toda la inversión. Por eso, en Decor Revestimientos utilizamos sistemas de alta pureza como el Mortex, un micro-mortero específicamente diseñado para aplicaciones en contacto permanente con el agua.\n\nEl resultado es un vaso completamente continuo, sin las juntas visibles del gresite tradicional, que integra la piscina con la arquitectura del jardín de forma natural y elegante. Los colores se mantienen uniformes bajo el agua, y la superficie es fácil de limpiar y mantener temporada tras temporada.',
    specs: [
      { label: 'Sistema', value: 'Mortex BM60 (certificado)' },
      { label: 'Estanqueidad', value: 'Total (vaso y coronación)' },
      { label: 'Espesor', value: '4 - 6 mm' },
      { label: 'Curado', value: '28 días (llenado)' },
      { label: 'Cloro/Sal', value: 'Compatible' },
      { label: 'Garantía aplicación', value: '5 años' },
    ],
    metaDescription: 'Microcemento para piscinas en Barcelona. Sistema Mortex certificado con estanqueidad total. Sin juntas visibles, integración arquitectónica perfecta.',
  },
  {
    slug: 'escaleras',
    title: 'Escaleras',
    description: 'Transforma tus escaleras en una pieza de diseño de una sola pieza. Eliminamos los cortes y juntas del gres tradicional para lograr una estética limpia, ligera y muy fácil de mantener.',
    heroImage: '/images/mc_2.jpg',
    cardImage: '/images/servicios_escalera.jpg',
    extendedContent: 'Las escaleras son el elemento arquitectónico que más transforma visualmente un interior. Una escalera revestida en microcemento fluye de peldaño en peldaño sin interrupciones, convirtiéndose en una pieza escultórica que define el carácter del espacio. Eliminamos la pesadez visual del gresite o la piedra para lograr una ligereza y continuidad que solo el microcemento puede ofrecer.\n\nTécnicamente, trabajamos sobre la estructura existente aplicando capas de armado y nivelación antes del acabado final, asegurándonos de que cada arista y cada tabica queden perfectamente definidas. El resultado resiste el tránsito diario más intenso y se mantiene impecable con un mantenimiento mínimo.',
    specs: [
      { label: 'Aplicación', value: 'Sobre estructura existente' },
      { label: 'Espesor huella/tabica', value: '2 - 4 mm' },
      { label: 'Armado', value: 'Malla de refuerzo incluida' },
      { label: 'Antideslizante', value: 'Tira de seguridad opcional' },
      { label: 'Secado total', value: '5 - 7 días' },
      { label: 'Resistencia abrasión', value: 'Alta' },
    ],
    metaDescription: 'Microcemento para escaleras en Barcelona. Acabado continuo sin juntas sobre estructura existente. Estética escultórica y alta resistencia al tránsito.',
  },
  {
    slug: 'mobiliario-y-proyectos-especiales',
    title: 'Mobiliario y Proyectos Especiales',
    description: 'Transformamos elementos cotidianos en piezas arquitectónicas únicas. Aplicación continua sobre mobiliario de autor, encimeras y volúmenes a medida con adherencia garantizada.',
    heroImage: '/images/mc_1.jpg',
    cardImage: '/images/mc_1.jpg',
    extendedContent: '',
    specs: [
      { label: 'Soporte', value: 'Madera, MDF, metal, piedra' },
      { label: 'Espesor', value: '1.5 - 3 mm' },
      { label: 'Adherencia', value: 'Química y mecánica' },
      { label: 'Sellado', value: 'Alta resistencia' },
      { label: 'Uso', value: 'Interior, piezas únicas' },
      { label: 'Personalización', value: 'Total (forma y color)' },
    ],
    metaDescription: 'Expertos en mobiliario de microcemento y Mortex en Barcelona. Creamos encimeras, lavabos y piezas de autor con acabados continuos y alta resistencia.',
  },
];

export const getServicio = (slug: string): Servicio | undefined =>
  servicios.find((s) => s.slug === slug);
