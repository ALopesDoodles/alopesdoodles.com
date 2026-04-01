export type Lang = 'pt' | 'es' | 'en';

export interface Translations {
  lang: Lang;
  nav: { home: string; portfolio: string; about: string; contact: string };
  hero: { badge: string; title: string; tagline: string; subtitle: string; cta: string; ctaSecondary: string };
  services: {
    heading: string;
    miniEu:      { label: string; description: string };
    laser:       { label: string; description: string };
    collectibles:{ label: string; description: string };
  };
  portfolio: {
    heading: string; subheading: string; viewAll: string;
    filter: { all: string; miniEu: string; laser: string; tabletop: string; collectibles: string };
  };
  about: { heading: string; label: string; body1: string; body2: string; location: string };
  contact: {
    heading: string; subheading: string;
    name: string; email: string; subject: string; message: string; send: string;
    namePlaceholder: string; emailPlaceholder: string;
    subjectPlaceholder: string; messagePlaceholder: string;
    whatsapp: string; emailLabel: string; followUs: string;
  };
  footer: { tagline: string; rights: string; madeIn: string };
  faq: { heading: string; items: { q: string; a: string }[] };
  seo: {
    siteName: string;
    home:      { title: string; description: string };
    portfolio: { title: string; description: string };
    about:     { title: string; description: string };
    contact:   { title: string; description: string };
  };
}

const pt: Translations = {
  lang: 'pt',
  nav: { home: 'Início', portfolio: 'Portfólio', about: 'Sobre', contact: 'Contacto' },
  hero: {
    badge: 'Feito em Portugal',
    title: 'A.Lopes Doodles',
    tagline: 'O teu boneco. A tua história.',
    subtitle: 'Mini-eu personalizados, gravação laser, tabletop e coleccionáveis. Cada peça é única, feita com atenção ao detalhe e paixão pelo ofício.',
    cta: 'Ver Portfólio',
    ctaSecondary: 'Contactar',
  },
  services: {
    heading: 'Serviços',
    miniEu:       { label: 'Mini-eu',              description: 'Bonecos personalizados estilo Funko que te representam a ti — com a tua profissão, desporto, hobbies ou memórias. Inclusivos por natureza.' },
    laser:        { label: 'Gravação Laser',        description: 'Gravação em madeira, acrílico, couro e muito mais. Porta-chaves, ímanes, quadros e presentes únicos com o teu nome ou mensagem.' },
    collectibles: { label: 'Tabletop & Coleccionáveis', description: 'Miniaturas para jogos de mesa e estatuetas de colecção pintadas à mão com detalhe artesanal.' },
  },
  portfolio: {
    heading: 'Portfólio', subheading: 'O teu boneco. A tua história.', viewAll: 'Ver todos os trabalhos',
    filter: { all: 'Todos', miniEu: 'Mini-eu', laser: 'Laser', tabletop: 'Tabletop', collectibles: 'Coleccionáveis' },
  },
  about: {
    heading: 'Sobre', label: 'A história',
    body1: 'Placeholder — conta aqui a tua história, de onde vens e o que te motivou a criar o A.Lopes Doodles.',
    body2: 'Placeholder — descreve a tua paixão pelos detalhes, o teu processo criativo e o que te distingue dos demais.',
    location: 'Portugal',
  },
  contact: {
    heading: 'Contacto', subheading: 'Vamos criar algo juntos',
    name: 'Nome', email: 'Email', subject: 'Assunto', message: 'Mensagem', send: 'Enviar mensagem',
    namePlaceholder: 'O teu nome', emailPlaceholder: 'o.teu@email.com',
    subjectPlaceholder: 'Mini-eu, gravação, coleccionável…', messagePlaceholder: 'Descreve o teu projeto…',
    whatsapp: 'WhatsApp', emailLabel: 'Email', followUs: 'Redes sociais',
  },
  footer: {
    tagline: 'O teu boneco. A tua história.',
    rights: '© 2026 A.Lopes Doodles. Todos os direitos reservados.',
    madeIn: 'Feito em Portugal',
  },
  seo: {
    siteName: 'A.Lopes Doodles',
    home:      { title: 'A.Lopes Doodles — Mini-eu Personalizados, Gravação Laser e Coleccionáveis em Portugal', description: 'Bonecos mini-eu personalizados estilo Funko, gravação laser e coleccionáveis feitos à mão em Portugal. Inclusivos, únicos e com história. Encomendas personalizadas.' },
    portfolio: { title: 'Portfólio — A.Lopes Doodles', description: 'Galeria de mini-eu personalizados, gravação laser, tabletop e coleccionáveis. Cada peça é única, feita em Portugal.' },
    about:     { title: 'Sobre — A.Lopes Doodles', description: 'Conhece a história por detrás do A.Lopes Doodles. Trabalhos elaborados por quem ama o que faz, feitos em Portugal.' },
    contact:   { title: 'Contacto — A.Lopes Doodles', description: 'Entra em contacto para orçamentos e encomendas personalizadas de mini-eu, gravação laser ou coleccionáveis.' },
  },
  faq: {
    heading: 'Perguntas Frequentes',
    items: [
      { q: 'O que é um Mini-eu?',                                         a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
      { q: 'Consigo ter um Mini-eu com cadeira de rodas ou prótese?',     a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' },
      { q: 'A gravação laser funciona em que materiais?',                 a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.' },
      { q: 'Qual o prazo de entrega habitual?',                          a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.' },
      { q: 'Fazem memoriais de animais de estimação?',                   a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { q: 'Aceitam encomendas personalizadas?',                         a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
      { q: 'Como funciona o processo de orçamento?',                     a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.' },
      { q: 'Existe valor mínimo de encomenda?',                          a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    ],
  },
};

const es: Translations = {
  lang: 'es',
  nav: { home: 'Inicio', portfolio: 'Portafolio', about: 'Sobre mí', contact: 'Contacto' },
  hero: {
    badge: 'Hecho en Portugal',
    title: 'A.Lopes Doodles',
    tagline: 'Tu muñeco. Tu historia.',
    subtitle: 'Mini-yo personalizados, grabado láser, tabletop y coleccionables. Cada pieza es única, hecha con atención al detalle y pasión por el oficio.',
    cta: 'Ver Portafolio',
    ctaSecondary: 'Contactar',
  },
  services: {
    heading: 'Servicios',
    miniEu:       { label: 'Mini-yo',              description: 'Muñecos personalizados estilo Funko que te representan a ti — con tu profesión, deporte, hobbies o recuerdos. Inclusivos por naturaleza.' },
    laser:        { label: 'Grabado Láser',        description: 'Grabado en madera, acrílico, cuero y mucho más. Llaveros, imanes, cuadros y regalos únicos con tu nombre o mensaje.' },
    collectibles: { label: 'Tabletop & Coleccionables', description: 'Miniaturas para juegos de mesa y figuras de colección pintadas a mano con detalle artesanal.' },
  },
  portfolio: {
    heading: 'Portafolio', subheading: 'Tu muñeco. Tu historia.', viewAll: 'Ver todos los trabajos',
    filter: { all: 'Todos', miniEu: 'Mini-yo', laser: 'Láser', tabletop: 'Tabletop', collectibles: 'Coleccionables' },
  },
  about: {
    heading: 'Sobre mí', label: 'La historia',
    body1: 'Placeholder — cuenta aquí tu historia, de dónde vienes y qué te motivó a crear A.Lopes Doodles.',
    body2: 'Placeholder — describe tu pasión por los detalles, tu proceso creativo y lo que te distingue de los demás.',
    location: 'Portugal',
  },
  contact: {
    heading: 'Contacto', subheading: 'Creemos algo juntos',
    name: 'Nombre', email: 'Email', subject: 'Asunto', message: 'Mensaje', send: 'Enviar mensaje',
    namePlaceholder: 'Tu nombre', emailPlaceholder: 'tu@email.com',
    subjectPlaceholder: 'Mini-yo, grabado, coleccionable…', messagePlaceholder: 'Describe tu proyecto…',
    whatsapp: 'WhatsApp', emailLabel: 'Email', followUs: 'Redes sociales',
  },
  footer: {
    tagline: 'Tu muñeco. Tu historia.',
    rights: '© 2026 A.Lopes Doodles. Todos los derechos reservados.',
    madeIn: 'Hecho en Portugal',
  },
  seo: {
    siteName: 'A.Lopes Doodles',
    home:      { title: 'A.Lopes Doodles — Mini-yo Personalizados, Grabado Láser y Coleccionables en Portugal', description: 'Muñecos mini-yo personalizados estilo Funko, grabado láser y coleccionables hechos a mano en Portugal. Inclusivos, únicos y con historia.' },
    portfolio: { title: 'Portafolio — A.Lopes Doodles', description: 'Galería de mini-yo personalizados, grabado láser, tabletop y coleccionables. Cada pieza es única, hecha en Portugal.' },
    about:     { title: 'Sobre mí — A.Lopes Doodles', description: 'Conoce la historia detrás de A.Lopes Doodles. Trabajos elaborados por quien ama lo que hace, hechos en Portugal.' },
    contact:   { title: 'Contacto — A.Lopes Doodles', description: 'Contacta para presupuestos y pedidos personalizados de mini-yo, grabado láser o coleccionables.' },
  },
  faq: {
    heading: 'Preguntas Frecuentes',
    items: [
      { q: '¿Qué es un Mini-yo?',                                              a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
      { q: '¿Puedo tener un Mini-yo con silla de ruedas o prótesis?',          a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
      { q: '¿En qué materiales funciona el grabado láser?',                    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { q: '¿Cuál es el plazo de entrega habitual?',                          a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { q: '¿Hacéis memoriales de mascotas?',                                 a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { q: '¿Aceptáis pedidos personalizados?',                               a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
      { q: '¿Cómo funciona el proceso de presupuesto?',                       a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { q: '¿Existe un pedido mínimo?',                                       a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    ],
  },
};

const en: Translations = {
  lang: 'en',
  nav: { home: 'Home', portfolio: 'Portfolio', about: 'About', contact: 'Contact' },
  hero: {
    badge: 'Made in Portugal',
    title: 'A.Lopes Doodles',
    tagline: 'Your figurine. Your story.',
    subtitle: 'Custom mini-me figurines, laser engraving, tabletop and collectibles. Every piece is unique, made with care and passion for the craft.',
    cta: 'View Portfolio',
    ctaSecondary: 'Get in Touch',
  },
  services: {
    heading: 'Services',
    miniEu:       { label: 'Mini-me',              description: 'Custom Funko-style figurines that represent you — your profession, sport, hobbies or memories. Inclusive by design.' },
    laser:        { label: 'Laser Engraving',      description: 'Engraving on wood, acrylic, leather and more. Keychains, magnets, artwork and unique gifts with your name or message.' },
    collectibles: { label: 'Tabletop & Collectibles', description: 'Hand-painted miniatures for tabletop games and collectible figurines with artisan detail.' },
  },
  portfolio: {
    heading: 'Portfolio', subheading: 'Your figurine. Your story.', viewAll: 'View all work',
    filter: { all: 'All', miniEu: 'Mini-me', laser: 'Laser', tabletop: 'Tabletop', collectibles: 'Collectibles' },
  },
  about: {
    heading: 'About', label: 'The story',
    body1: 'Placeholder — tell your story here, where you come from and what motivated you to create A.Lopes Doodles.',
    body2: 'Placeholder — describe your passion for detail, your creative process and what sets you apart.',
    location: 'Portugal',
  },
  contact: {
    heading: 'Contact', subheading: "Let's create something together",
    name: 'Name', email: 'Email', subject: 'Subject', message: 'Message', send: 'Send message',
    namePlaceholder: 'Your name', emailPlaceholder: 'your@email.com',
    subjectPlaceholder: 'Mini-me, engraving, collectible…', messagePlaceholder: 'Describe your project…',
    whatsapp: 'WhatsApp', emailLabel: 'Email', followUs: 'Follow us',
  },
  footer: {
    tagline: 'Your figurine. Your story.',
    rights: '© 2026 A.Lopes Doodles. All rights reserved.',
    madeIn: 'Made in Portugal',
  },
  seo: {
    siteName: 'A.Lopes Doodles',
    home:      { title: 'A.Lopes Doodles — Custom Mini-me Figurines, Laser Engraving & Collectibles from Portugal', description: 'Custom Funko-style mini-me figurines, laser engraving and hand-painted collectibles made in Portugal. Inclusive, unique and personal. Custom orders welcome.' },
    portfolio: { title: 'Portfolio — A.Lopes Doodles', description: 'Gallery of custom mini-me figurines, laser engraving, tabletop miniatures and collectibles. Each piece is unique, made in Portugal.' },
    about:     { title: 'About — A.Lopes Doodles', description: 'The story behind A.Lopes Doodles. Crafted with care by someone who loves what they do, made in Portugal.' },
    contact:   { title: 'Contact — A.Lopes Doodles', description: 'Get in touch for quotes and custom orders: mini-me figurines, laser engraving or collectibles.' },
  },
  faq: {
    heading: 'Frequently Asked Questions',
    items: [
      { q: 'What is a Mini-me?',                                              a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
      { q: 'Can I have a Mini-me with a wheelchair or prosthesis?',           a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
      { q: 'What materials can be laser engraved?',                          a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { q: 'What is the usual delivery time?',                               a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { q: 'Do you make pet memorials?',                                     a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { q: 'Do you accept custom orders?',                                   a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
      { q: 'How does the quote process work?',                               a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { q: 'Is there a minimum order value?',                                a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    ],
  },
};

const dict: Record<string, Translations> = { pt, es, en };

export function t(lang: string): Translations {
  return dict[lang] ?? pt;
}

export const LANGS: Lang[] = ['pt', 'es', 'en'];
export const STATIC_PATHS = LANGS.map(lang => ({ params: { lang } }));
