export type Lang = 'pt' | 'es' | 'en';

export interface Translations {
  lang: Lang;
  nav: { home: string; portfolio: string; about: string; contact: string };
  hero: { badge: string; title: string; tagline: string; subtitle: string; cta: string; ctaSecondary: string };
  services: {
    heading: string;
    printing: { label: string; description: string };
    laser:    { label: string; description: string };
    painting: { label: string; description: string };
  };
  portfolio: {
    heading: string; subheading: string; viewAll: string;
    filter: { all: string; printing: string; laser: string; painting: string };
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
}

const pt: Translations = {
  lang: 'pt',
  nav: { home: 'Início', portfolio: 'Portfólio', about: 'Sobre', contact: 'Contacto' },
  hero: {
    badge: 'Feito em Portugal',
    title: 'A.Lopes Doodles',
    tagline: 'Impressão 3D · Gravação Laser · Pintura',
    subtitle: 'Trabalhos elaborados por quem ama o que faz.',
    cta: 'Ver Portfólio',
    ctaSecondary: 'Contactar',
  },
  services: {
    heading: 'Serviços',
    printing: { label: 'Impressão 3D',    description: 'Peças personalizadas, protótipos e miniaturas criadas com precisão e detalhe.' },
    laser:    { label: 'Gravação Laser',  description: 'Gravação em madeira, acrílico, couro e muito mais com acabamento impecável.' },
    painting: { label: 'Pintura',         description: 'Arte e pintura de miniaturas com atenção ao detalhe e paixão pelo ofício.' },
  },
  portfolio: {
    heading: 'Portfólio', subheading: 'Uma seleção dos nossos trabalhos', viewAll: 'Ver todos os trabalhos',
    filter: { all: 'Todos', printing: 'Impressão 3D', laser: 'Laser', painting: 'Pintura' },
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
    subjectPlaceholder: 'Projeto personalizado, orçamento…', messagePlaceholder: 'Descreve o teu projeto…',
    whatsapp: 'WhatsApp', emailLabel: 'Email', followUs: 'Redes sociais',
  },
  footer: {
    tagline: 'Trabalhos elaborados por quem ama o que faz.',
    rights: '© 2025 A.Lopes Doodles. Todos os direitos reservados.',
    madeIn: 'Feito em Portugal',
  },
};

const es: Translations = {
  lang: 'es',
  nav: { home: 'Inicio', portfolio: 'Portafolio', about: 'Sobre mí', contact: 'Contacto' },
  hero: {
    badge: 'Hecho en Portugal',
    title: 'A.Lopes Doodles',
    tagline: 'Impresión 3D · Grabado Láser · Pintura',
    subtitle: 'Trabajos elaborados por quien ama lo que hace.',
    cta: 'Ver Portafolio',
    ctaSecondary: 'Contactar',
  },
  services: {
    heading: 'Servicios',
    printing: { label: 'Impresión 3D',   description: 'Piezas personalizadas, prototipos y miniaturas creadas con precisión y detalle.' },
    laser:    { label: 'Grabado Láser',  description: 'Grabado en madera, acrílico, cuero y mucho más con acabado impecable.' },
    painting: { label: 'Pintura',        description: 'Arte y pintura de miniaturas con atención al detalle y pasión por el oficio.' },
  },
  portfolio: {
    heading: 'Portafolio', subheading: 'Una selección de nuestros trabajos', viewAll: 'Ver todos los trabajos',
    filter: { all: 'Todos', printing: 'Impresión 3D', laser: 'Láser', painting: 'Pintura' },
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
    subjectPlaceholder: 'Proyecto personalizado, presupuesto…', messagePlaceholder: 'Describe tu proyecto…',
    whatsapp: 'WhatsApp', emailLabel: 'Email', followUs: 'Redes sociales',
  },
  footer: {
    tagline: 'Trabajos elaborados por quien ama lo que hace.',
    rights: '© 2025 A.Lopes Doodles. Todos los derechos reservados.',
    madeIn: 'Hecho en Portugal',
  },
};

const en: Translations = {
  lang: 'en',
  nav: { home: 'Home', portfolio: 'Portfolio', about: 'About', contact: 'Contact' },
  hero: {
    badge: 'Made in Portugal',
    title: 'A.Lopes Doodles',
    tagline: '3D Printing · Laser Engraving · Painting',
    subtitle: 'Crafted with care by someone who loves what they do.',
    cta: 'View Portfolio',
    ctaSecondary: 'Get in Touch',
  },
  services: {
    heading: 'Services',
    printing: { label: '3D Printing',      description: 'Custom pieces, prototypes and miniatures created with precision and detail.' },
    laser:    { label: 'Laser Engraving',  description: 'Engraving on wood, acrylic, leather and much more with a flawless finish.' },
    painting: { label: 'Painting',         description: 'Miniature art and painting with attention to detail and passion for the craft.' },
  },
  portfolio: {
    heading: 'Portfolio', subheading: 'A selection of our work', viewAll: 'View all work',
    filter: { all: 'All', printing: '3D Printing', laser: 'Laser', painting: 'Painting' },
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
    subjectPlaceholder: 'Custom project, quote…', messagePlaceholder: 'Describe your project…',
    whatsapp: 'WhatsApp', emailLabel: 'Email', followUs: 'Follow us',
  },
  footer: {
    tagline: 'Crafted with care by someone who loves what they do.',
    rights: '© 2025 A.Lopes Doodles. All rights reserved.',
    madeIn: 'Made in Portugal',
  },
};

const dict: Record<string, Translations> = { pt, es, en };

export function t(lang: string): Translations {
  return dict[lang] ?? pt;
}

export const LANGS: Lang[] = ['pt', 'es', 'en'];
export const STATIC_PATHS = LANGS.map(lang => ({ params: { lang } }));
