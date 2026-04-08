export type Lang = 'pt' | 'es' | 'en';

export interface Translations {
  lang: Lang;
  nav: { home: string; portfolio: string; about: string; contact: string };
  hero: { badge: string; title: string; tagline: string; subtitle: string; cta: string; ctaSecondary: string };
  services: {
    heading: string;
    subheading: string;
    miniEu:      { label: string; description: string };
    laser:       { label: string; description: string };
    tabletop:    { label: string; description: string };
    collectibles:{ label: string; description: string };
    cosplay:     { label: string; description: string };
    custom:      { label: string; description: string };
  };
  marquee: { heading: string; subheading: string };
  portfolio: {
    heading: string; subheading: string; viewAll: string;
    filter: { all: string; miniEu: string; laser: string; tabletop: string; collectibles: string; cosplay: string; custom: string };
  };
  about: { heading: string; label: string; body1: string; body2: string; body3: string; location: string };
  contact: {
    heading: string; subheading: string;
    name: string; email: string; subject: string; message: string; send: string;
    namePlaceholder: string; emailPlaceholder: string;
    subjectPlaceholder: string; messagePlaceholder: string;
    whatsapp: string; emailLabel: string; followUs: string;
    waLabel: string; waNote: string; orContact: string;
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
    subheading: 'O que posso criar para ti.',
    miniEu:       { label: 'Mini-eu',              description: 'Bonecos personalizados estilo Funko que te representam a ti — com a tua profissão, desporto, hobbies ou memórias. Inclusivos por natureza.' },
    laser:        { label: 'Gravação Laser',        description: 'Gravação em madeira, acrílico, couro e muito mais. Porta-chaves, ímanes, quadros e presentes únicos com o teu nome ou mensagem.' },
    tabletop:     { label: 'Tabletop',             description: 'Miniaturas para jogos de mesa impressas e pintadas à mão com detalhe artesanal — desde heróis a monstros.' },
    collectibles: { label: 'Colecionáveis',        description: 'Estatuetas de colecção de personagens icónicas, pintadas à mão com acabamentos de colecionador.' },
    cosplay:      { label: 'Cosplay',              description: 'Adereços e peças impressas em 3D para cosplay — capacetes, armaduras, acessórios e réplicas de personagens feitas com precisão.' },
    custom:       { label: 'Customizáveis',        description: 'Suportes, troféus, molduras e acessórios funcionais feitos à medida. Se tens uma ideia, há uma forma de a tornar real.' },
  },
  marquee: { heading: 'Os meus trabalhos', subheading: 'As histórias que já tomaram forma.' },
  portfolio: {
    heading: 'Portfólio', subheading: 'O teu boneco. A tua história.', viewAll: 'Ver todos os trabalhos',
    filter: { all: 'Todos', miniEu: 'Mini-eu', laser: 'Laser', tabletop: 'Tabletop', collectibles: 'Coleccionáveis', cosplay: 'Cosplay', custom: 'Customizáveis' },
  },
  about: {
    heading: 'Sobre', label: 'A história',
    body1: 'Cresci com uma curiosidade natural pela tecnologia e uma paixão pela cultura pop — miniaturas, anime, jogos, figuras. Pintava miniaturas de jogos de tabuleiro por prazer, como forma de desligar e expressar algo que as palavras não chegavam. Em 2024 descobri a impressão 3D e percebi que podia levar esse gosto a outro nível — não como profissional, mas como alguém que nunca para de aprender.',
    body2: 'O que se seguiu foi uma jornada que não antecipei: modelação 3D, aerógrafo, laser, cada técnica a abrir porta para a seguinte. A cada peça aprendo qualquer coisa nova. A cada peça deixo um pouco de mim.',
    body3: 'O projeto que mudou tudo foram os Mini Eu — dioramas personalizados que representam pessoas reais, com as suas histórias, paixões e personalidade. Foi aqui que percebi que não estava só a criar objetos. Estava a guardar momentos. Hoje cada comissão é um projeto com alma — seja um troféu, um diorama ou uma gravação a laser. O detalhe não é um extra. É a razão de existir.',
    location: 'Portugal',
  },
  contact: {
    heading: 'Contacto', subheading: 'Vamos criar algo juntos',
    name: 'Nome', email: 'Email', subject: 'Assunto', message: 'Mensagem', send: 'Enviar mensagem',
    namePlaceholder: 'O teu nome', emailPlaceholder: 'o.teu@email.com',
    subjectPlaceholder: 'Mini-eu, gravação, coleccionável…', messagePlaceholder: 'Descreve o teu projeto…',
    whatsapp: 'WhatsApp', emailLabel: 'Email', followUs: 'Redes sociais',
    waLabel: 'Fala comigo pelo WhatsApp',
    waNote: 'Respondo normalmente em menos de 24 horas.',
    orContact: 'Ou contacta-me por',
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
    subheading: 'Lo que puedo crear para ti.',
    miniEu:       { label: 'Mini-yo',              description: 'Muñecos personalizados estilo Funko que te representan a ti — con tu profesión, deporte, hobbies o recuerdos. Inclusivos por naturaleza.' },
    laser:        { label: 'Grabado Láser',        description: 'Grabado en madera, acrílico, cuero y mucho más. Llaveros, imanes, cuadros y regalos únicos con tu nombre o mensaje.' },
    tabletop:     { label: 'Tabletop',             description: 'Miniaturas para juegos de mesa impresas y pintadas a mano con detalle artesanal — desde héroes hasta monstruos.' },
    collectibles: { label: 'Coleccionables',       description: 'Figuras de colección de personajes icónicos, pintadas a mano con acabados de coleccionista.' },
    cosplay:      { label: 'Cosplay',              description: 'Accesorios y piezas impresas en 3D para cosplay — cascos, armaduras, accesorios y réplicas de personajes hechas con precisión.' },
    custom:       { label: 'Personalizables',      description: 'Soportes, trofeos, marcos y accesorios funcionales hechos a medida. Si tienes una idea, hay una forma de hacerla realidad.' },
  },
  marquee: { heading: 'Mis trabajos', subheading: 'Las historias que ya tomaron forma.' },
  portfolio: {
    heading: 'Portafolio', subheading: 'Tu muñeco. Tu historia.', viewAll: 'Ver todos los trabajos',
    filter: { all: 'Todos', miniEu: 'Mini-yo', laser: 'Láser', tabletop: 'Tabletop', collectibles: 'Coleccionables', cosplay: 'Cosplay', custom: 'Personalizables' },
  },
  about: {
    heading: 'Sobre mí', label: 'La historia',
    body1: 'Crecí con una curiosidad natural por la tecnología y una pasión por la cultura pop — miniaturas, anime, juegos, figuras. Pintaba miniaturas de juegos de mesa por placer, como forma de desconectar y expresar algo que las palabras no alcanzaban. En 2024 descubrí la impresión 3D y me di cuenta de que podía llevar esa afición a otro nivel — no como profesional, sino como alguien que nunca deja de aprender.',
    body2: 'Lo que siguió fue un viaje que no anticipé: modelado 3D, aerógrafo, láser, cada técnica abriendo la puerta a la siguiente. En cada pieza aprendo algo nuevo. En cada pieza dejo un poco de mí.',
    body3: 'El proyecto que lo cambió todo fueron los Mini Eu — dioramas personalizados que representan personas reales, con sus historias, pasiones y personalidad. Fue aquí donde me di cuenta de que no solo estaba creando objetos. Estaba guardando momentos. Hoy cada encargo es un proyecto con alma — ya sea un trofeo, un diorama o un grabado láser. El detalle no es un extra. Es la razón de existir.',
    location: 'Portugal',
  },
  contact: {
    heading: 'Contacto', subheading: 'Creemos algo juntos',
    name: 'Nombre', email: 'Email', subject: 'Asunto', message: 'Mensaje', send: 'Enviar mensaje',
    namePlaceholder: 'Tu nombre', emailPlaceholder: 'tu@email.com',
    subjectPlaceholder: 'Mini-yo, grabado, coleccionable…', messagePlaceholder: 'Describe tu proyecto…',
    whatsapp: 'WhatsApp', emailLabel: 'Email', followUs: 'Redes sociales',
    waLabel: 'Háblame por WhatsApp',
    waNote: 'Respondo normalmente en menos de 24 horas.',
    orContact: 'O contáctame por',
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
    subheading: 'What I can create for you.',
    miniEu:       { label: 'Mini-me',              description: 'Custom Funko-style figurines that represent you — your profession, sport, hobbies or memories. Inclusive by design.' },
    laser:        { label: 'Laser Engraving',      description: 'Engraving on wood, acrylic, leather and more. Keychains, magnets, artwork and unique gifts with your name or message.' },
    tabletop:     { label: 'Tabletop',             description: 'Tabletop miniatures printed and hand-painted with artisan detail — from heroes to monsters.' },
    collectibles: { label: 'Collectibles',         description: 'Collectible figurines of iconic characters, hand-painted with collector-grade finishes.' },
    cosplay:      { label: 'Cosplay',              description: '3D printed props and parts for cosplay — helmets, armour, accessories and character replicas made with precision.' },
    custom:       { label: 'Customisables',        description: 'Stands, trophies, frames and functional accessories made to order. If you have an idea, there is a way to make it real.' },
  },
  marquee: { heading: 'My work', subheading: 'The stories that have taken shape.' },
  portfolio: {
    heading: 'Portfolio', subheading: 'Your figurine. Your story.', viewAll: 'View all work',
    filter: { all: 'All', miniEu: 'Mini-me', laser: 'Laser', tabletop: 'Tabletop', collectibles: 'Collectibles', cosplay: 'Cosplay', custom: 'Customisables' },
  },
  about: {
    heading: 'About', label: 'The story',
    body1: 'I grew up with a natural curiosity for technology and a passion for pop culture — miniatures, anime, games, figures. I painted tabletop miniatures for fun, as a way to switch off and express something that words couldn\'t quite reach. In 2024 I discovered 3D printing and realised I could take that passion to another level — not as a professional, but as someone who never stops learning.',
    body2: 'What followed was a journey I hadn\'t anticipated: 3D modelling, airbrushing, laser engraving — each technique opening the door to the next. With every piece I learn something new. With every piece I leave a little of myself.',
    body3: 'The project that changed everything was the Mini Eu — personalised dioramas that represent real people, with their stories, passions and personality. It was here that I realised I wasn\'t just creating objects. I was preserving moments. Today every commission is a project with soul — whether it\'s a trophy, a diorama or a laser engraving. The detail isn\'t an extra. It\'s the reason for being.',
    location: 'Portugal',
  },
  contact: {
    heading: 'Contact', subheading: "Let's create something together",
    name: 'Name', email: 'Email', subject: 'Subject', message: 'Message', send: 'Send message',
    namePlaceholder: 'Your name', emailPlaceholder: 'your@email.com',
    subjectPlaceholder: 'Mini-me, engraving, collectible…', messagePlaceholder: 'Describe your project…',
    whatsapp: 'WhatsApp', emailLabel: 'Email', followUs: 'Follow us',
    waLabel: 'Talk to me on WhatsApp',
    waNote: 'I usually reply within 24 hours.',
    orContact: 'Or reach me on',
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
