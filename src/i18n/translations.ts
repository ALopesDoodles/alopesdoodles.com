export type Lang = 'pt' | 'es' | 'en';

export interface Translations {
  lang: Lang;
  nav: { home: string; portfolio: string; about: string; contact: string };
  hero: { badge: string; title: string; tagline: string; subtitle: string; cta: string; ctaSecondary: string };
  services: {
    heading: string;
    subheading: string;
    cta: string;
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
    works: string;
    comingSoon: string;
  };
  about: { heading: string; label: string; subtitle: string; body1: string; body2: string; body3: string; location: string };
  contact: {
    heading: string; subheading: string; subtitle: string;
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
    cta: 'Ver trabalhos realizados',
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
    works: 'trabalhos',
    comingSoon: 'Brevemente',
  },
  about: {
    heading: 'Sobre', label: 'A história',
    subtitle: 'Cada peça começa com uma história. Esta é a minha.',
    body1: 'Cresci com uma curiosidade natural pela tecnologia e uma paixão pela cultura pop — miniaturas, anime, jogos, figuras. Pintava miniaturas de jogos de tabuleiro por prazer, como forma de desligar e expressar algo que as palavras não chegavam. Em 2024 descobri a impressão 3D e percebi que podia levar esse gosto a outro nível — não como profissional, mas como alguém que nunca para de aprender.',
    body2: 'O que se seguiu foi uma jornada que não antecipei: modelação 3D, aerógrafo, laser, cada técnica a abrir porta para a seguinte. A cada peça aprendo qualquer coisa nova. A cada peça deixo um pouco de mim.',
    body3: 'O projeto que mudou tudo foram os Mini Eu — dioramas personalizados que representam pessoas reais, com as suas histórias, paixões e personalidade. Foi aqui que percebi que não estava só a criar objetos. Estava a guardar momentos. Hoje cada comissão é um projeto com alma — seja um troféu, um diorama ou uma gravação a laser. O detalhe não é um extra. É a razão de existir.',
    location: 'Portugal',
  },
  contact: {
    heading: 'Contacto', subheading: 'Vamos criar algo juntos',
    subtitle: 'Cada história começa com uma conversa. A tua tem lugar aqui.',
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
      { q: 'O que é a ALopes Doodles?',                  a: 'É um projeto nascido de uma paixão — criar e pintar figuras. O que começou como hobbie foi crescendo, peça a peça, até se tornar algo com nome próprio.\nNão é uma empresa nem uma fábrica. É o ALopes — o gajo que faz a bonecada fixe — e que gostava que quem vê o que cria se lembrasse dele pelo cuidado que põe em cada peça.\nPor trás de tudo há uma super mulher que acreditou primeiro, dois gatos, um cão, muita tinta e muita aprendizagem.' },
      { q: 'O que é um Mini-eu?',                        a: 'É uma figura personalizada em estilo boneco colecionável, criada de raiz a partir de uma foto tua — ou de quem queres surpreender. Modelo em 3D, imprimo, e pinto com pincel e aerógrafo. Depois há o diorama — o ambiente todo construído à volta da figura para contar a tua história.\nCada detalhe é imaginado por mim, do zero. Não há duas peças iguais. Mas a figura é tua — eu sou quem a transforma em algo real.\nFaço figuras para toda a gente — incluindo quem raramente se vê representado: quem pratica desporto adaptado, quem se move de forma diferente, quem o mercado teima em ignorar. Não é uma concessão, é uma escolha. Cresci rodeado de pessoas e animais que a sociedade tende a tornar invisíveis — e sei o que significa ter algo que te representa, como és.\nE os pets? Claro que sim. Para celebrar aquele companheiro de vida único, ou para guardar a memória de quem já não está — um Mini-eu de pet é uma peça que fica para sempre.' },
      { q: 'A gravação laser funciona em que materiais?', a: 'Trabalho com uma grande variedade de materiais: madeira, MDF e contraplacado, MDF pintado, papel, sacos de papel, metal — tags, porta-chaves, canetas e muito mais. Praticamente tudo o que é sólido e opaco tem potencial.\nA única limitação real é o acrílico transparente — o laser díodo não o consegue gravar. Acrílico opaco ou colorido já funciona. Se tens um material específico em mente, pergunta — gosto de testar.' },
      { q: 'Como funciona o processo de encomenda e orçamento?', a: 'Começa por uma conversa. Podes falar comigo diretamente pelo WhatsApp ou Instagram — é assim que prefiro trabalhar, em tempo real. Para contextos mais formais ou encomendas empresariais, o email também está disponível.\nSou honesto desde o início: nem tudo está ao meu alcance. Sou um apaixonado com muito conhecimento, mas tenho limites — e prefiro dizê-lo antes de começar do que a meio do processo.\nSe avançarmos, acompanhas tudo em tempo real. Envio fotos a cada etapa — após a modelação, depois da impressão, durante a pintura e no embalamento. Só te peço pagamento quando vires o resultado final, por MBway, antes do envio. Se for entrega em mão, pagamos no momento. A confiança é dos dois lados.' },
      { q: 'Como é calculado o valor de uma comissão?',   a: 'Cada peça é criada de raiz, com tempo, materiais e processo criativo próprios. Sem primeiro saber o que pretendes, não consigo definir um valor — e não faria sentido fazê-lo.\nO primeiro passo é sempre uma conversa. Explicas-me a tua ideia, eu avalio se consigo criá-la, e dou-te o meu feedback, os tempos de produção e o valor que considero justo — de forma transparente, sem surpresas.\nSó pagas quando tens prova fotográfica da tua peça concluída. Este é o meu compromisso. Ainda acredito no valor da palavra.\nPara encomendas em maior volume, é pedido um sinal inicial para cobertura de materiais — faz parte de um acordo justo para os dois lados.' },
      { q: 'Qual o prazo de entrega habitual?',           a: 'Cada peça é criada de raiz, a pensar em ti — não há stock, não há atalhos. Todo o processo, da modelação à pintura final, leva o tempo que merece. Por norma conto com cerca de um mês, podendo ser mais em períodos de maior procura.\nA ALopes Doodles não é um comércio nem uma loja — é um projeto nascido de um sonho, que construo com gosto ao lado da minha atividade profissional principal. Faço isto com todo o gosto, no tempo que é meu. E é esse cuidado que presencias desde o primeiro contacto até teres a peça nas mãos — seja quem fores, empresa ou particular, tens sempre uma pessoa real do outro lado.\nPara gravação laser em série o prazo é mais simpático — fala comigo e combinamos.' },
      { q: 'Como funciona a entrega?',                    a: 'Tens duas opções. Envio por CTT para qualquer ponto de Portugal, com portes a cargo do comprador. Ou entrega em mão, disponível nas zonas de Alenquer, Abrigada, Carregado e Torres Vedras.\nO pagamento é sempre confirmado antes do envio — por MBway no caso de envio por CTT, ou no momento da entrega em mão.' },
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
    cta: 'Ver trabajos realizados',
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
    works: 'trabajos',
    comingSoon: 'Próximamente',
  },
  about: {
    heading: 'Sobre mí', label: 'La historia',
    subtitle: 'Cada pieza comienza con una historia. Esta es la mía.',
    body1: 'Crecí con una curiosidad natural por la tecnología y una pasión por la cultura pop — miniaturas, anime, juegos, figuras. Pintaba miniaturas de juegos de mesa por placer, como forma de desconectar y expresar algo que las palabras no alcanzaban. En 2024 descubrí la impresión 3D y me di cuenta de que podía llevar esa afición a otro nivel — no como profesional, sino como alguien que nunca deja de aprender.',
    body2: 'Lo que siguió fue un viaje que no anticipé: modelado 3D, aerógrafo, láser, cada técnica abriendo la puerta a la siguiente. En cada pieza aprendo algo nuevo. En cada pieza dejo un poco de mí.',
    body3: 'El proyecto que lo cambió todo fueron los Mini Eu — dioramas personalizados que representan personas reales, con sus historias, pasiones y personalidad. Fue aquí donde me di cuenta de que no solo estaba creando objetos. Estaba guardando momentos. Hoy cada encargo es un proyecto con alma — ya sea un trofeo, un diorama o un grabado láser. El detalle no es un extra. Es la razón de existir.',
    location: 'Portugal',
  },
  contact: {
    heading: 'Contacto', subheading: 'Creemos algo juntos',
    subtitle: 'Cada historia comienza con una conversación. La tuya tiene lugar aquí.',
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
      { q: '¿Qué es A.Lopes Doodles?',              a: 'Es un proyecto nacido de una pasión — crear y pintar figuras. Lo que empezó como hobbie fue creciendo, pieza a pieza, hasta convertirse en algo con nombre propio.\nNo es una empresa ni una fábrica. Es el ALopes — el tío que hace las figuras chulas — y que le gustaría que quien ve lo que crea se acordara de él por el cuidado que pone en cada pieza.\nDetrás de todo hay una mujer increíble que creyó primero, dos gatos, un perro, mucha pintura y mucho aprendizaje.' },
      { q: '¿Qué es un Mini-yo?',                   a: 'Es una figura personalizada en estilo muñeco coleccionable, creada desde cero a partir de una foto tuya — o de quien quieres sorprender. La modelo en 3D, la imprimo y la pinto con pincel y aerógrafo. Luego está el diorama — el ambiente construido alrededor de la figura para contar tu historia.\nCada detalle lo imagino yo, desde cero. No hay dos piezas iguales. Pero la figura es tuya — yo soy quien la convierte en algo real.\nHago figuras para todo el mundo — incluidas personas que raramente se ven representadas: quienes practican deporte adaptado, quienes se mueven de forma diferente, quienes el mercado se empeña en ignorar. No es una concesión, es una elección. Crecí rodeado de personas y animales que la sociedad tiende a hacer invisibles — y sé lo que significa tener algo que te represente, tal como eres.\n¿Y las mascotas? Por supuesto. Para celebrar a ese compañero de vida único, o para guardar el recuerdo de quien ya no está — un Mini-yo de mascota es una pieza que dura para siempre.' },
      { q: '¿En qué materiales funciona el grabado láser?', a: 'Trabajo con una gran variedad de materiales: madera, MDF y contrachapado, MDF pintado, papel, bolsas de papel, metal — tags, llaveros, bolígrafos y mucho más. Prácticamente todo lo que es sólido y opaco tiene potencial.\nLa única limitación real es el acrílico transparente — el láser de diodo no puede grabarlo. El acrílico opaco o de color sí funciona. Si tienes un material específico en mente, pregunta — me gusta probar.' },
      { q: '¿Cómo funciona el proceso de pedido y presupuesto?', a: 'Empieza por una conversación. Puedes hablar conmigo directamente por WhatsApp o Instagram — así es como prefiero trabajar, en tiempo real. Para contextos más formales o pedidos empresariales, el email también está disponible.\nSoy honesto desde el principio: no todo está a mi alcance. Soy un apasionado con mucho conocimiento, pero tengo límites — y prefiero decirlo antes de empezar que a mitad del proceso.\nSi seguimos adelante, lo acompañas todo en tiempo real. Envío fotos en cada etapa — tras el modelado, después de la impresión, durante la pintura y en el embalaje. Solo te pido el pago cuando veas el resultado final, por Bizum o transferencia, antes del envío. Si es entrega en mano, pagamos en el momento. La confianza es de los dos lados.' },
      { q: '¿Cómo se calcula el valor de una comisión?', a: 'Cada pieza se crea desde cero, con tiempo, materiales y proceso creativo propios. Sin saber primero qué quieres, no puedo definir un valor — y no tendría sentido hacerlo.\nEl primer paso es siempre una conversación. Me explicas tu idea, evalúo si puedo crearla, y te doy mi opinión, los tiempos de producción y el valor que considero justo — de forma transparente, sin sorpresas.\nSolo pagas cuando tienes prueba fotográfica de tu pieza terminada. Este es mi compromiso. Todavía creo en el valor de la palabra.\nPara pedidos en mayor volumen, se pide un anticipo inicial para cobertura de materiales — forma parte de un acuerdo justo para los dos.' },
      { q: '¿Cuál es el plazo de entrega habitual?',  a: 'Cada pieza se crea desde cero, pensando en ti — no hay stock, no hay atajos. Todo el proceso, del modelado a la pintura final, lleva el tiempo que merece. Normalmente cuento con alrededor de un mes, pudiendo ser más en periodos de mayor demanda.\nA.Lopes Doodles no es un comercio ni una tienda — es un proyecto nacido de un sueño, que construyo con gusto junto a mi actividad profesional principal. Hago esto con todo el gusto, en el tiempo que es mío. Y es ese cuidado el que presencias desde el primer contacto hasta tener la pieza en tus manos — seas quien seas, empresa o particular, siempre hay una persona real al otro lado.\nPara grabado láser en serie el plazo es más simpático — habla conmigo y lo acordamos.' },
      { q: '¿Cómo funciona la entrega?',             a: 'Tienes dos opciones. Envío por correo a cualquier punto de Portugal, con portes a cargo del comprador. O entrega en mano, disponible en las zonas de Alenquer, Abrigada, Carregado y Torres Vedras.\nEl pago siempre se confirma antes del envío — por Bizum o transferencia en el caso de envío por correo, o en el momento de la entrega en mano.' },
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
    cta: 'View completed work',
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
    works: 'works',
    comingSoon: 'Coming soon',
  },
  about: {
    heading: 'About', label: 'The story',
    subtitle: 'Every piece begins with a story. This one is mine.',
    body1: 'I grew up with a natural curiosity for technology and a passion for pop culture — miniatures, anime, games, figures. I painted tabletop miniatures for fun, as a way to switch off and express something that words couldn\'t quite reach. In 2024 I discovered 3D printing and realised I could take that passion to another level — not as a professional, but as someone who never stops learning.',
    body2: 'What followed was a journey I hadn\'t anticipated: 3D modelling, airbrushing, laser engraving — each technique opening the door to the next. With every piece I learn something new. With every piece I leave a little of myself.',
    body3: 'The project that changed everything was the Mini Eu — personalised dioramas that represent real people, with their stories, passions and personality. It was here that I realised I wasn\'t just creating objects. I was preserving moments. Today every commission is a project with soul — whether it\'s a trophy, a diorama or a laser engraving. The detail isn\'t an extra. It\'s the reason for being.',
    location: 'Portugal',
  },
  contact: {
    heading: 'Contact', subheading: "Let's create something together",
    subtitle: 'Every story begins with a conversation. Yours has a place here.',
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
      { q: 'What is A.Lopes Doodles?',              a: 'It\'s a project born from a passion — creating and painting figures. What started as a hobby grew, piece by piece, into something with its own name.\nIt\'s not a company or a factory. It\'s ALopes — the guy who makes the cool figurines — and who\'d like people who see what he creates to remember him for the care he puts into every piece.\nBehind it all there\'s an incredible woman who believed first, two cats, a dog, a lot of paint and a lot of learning.' },
      { q: 'What is a Mini-me?',                    a: 'It\'s a custom figurine in collectible style, created from scratch based on a photo of you — or whoever you want to surprise. I model it in 3D, print it, and paint it with a brush and airbrush. Then there\'s the diorama — the whole environment built around the figure to tell your story.\nEvery detail is imagined by me, from scratch. No two pieces are alike. But the figure is yours — I\'m the one who turns it into something real.\nI make figurines for everyone — including people who rarely see themselves represented: those who play adaptive sports, who move differently, who the market keeps ignoring. It\'s not a concession, it\'s a choice. I grew up surrounded by people and animals that society tends to make invisible — and I know what it means to have something that represents you, as you are.\nAnd pets? Of course. To celebrate that one-of-a-kind companion, or to keep the memory of someone no longer here — a pet Mini-me is a piece that lasts forever.' },
      { q: 'What materials can be laser engraved?', a: 'I work with a wide variety of materials: wood, MDF and plywood, painted MDF, paper, paper bags, metal — tags, keychains, pens and much more. Practically anything solid and opaque has potential.\nThe only real limitation is transparent acrylic — a diode laser can\'t engrave it. Opaque or coloured acrylic works fine. If you have a specific material in mind, just ask — I enjoy testing.' },
      { q: 'How does the ordering and quote process work?', a: 'It starts with a conversation. You can talk to me directly on WhatsApp or Instagram — that\'s how I prefer to work, in real time. For more formal contexts or business orders, email is also available.\nI\'m honest from the start: not everything is within my reach. I\'m passionate and knowledgeable, but I have limits — and I\'d rather say so before starting than halfway through.\nIf we move forward, you follow everything in real time. I send photos at every stage — after modelling, after printing, during painting and at packaging. I only ask for payment when you\'ve seen photographic proof of your finished piece, via MBway, before shipping. If it\'s hand delivery, we pay at the moment of handover. Trust works both ways.' },
      { q: 'How is the value of a commission calculated?', a: 'Every piece is created from scratch, with its own time, materials and creative process. Without first knowing what you want, I can\'t define a value — and it wouldn\'t make sense to.\nThe first step is always a conversation. You explain your idea, I assess whether I can create it, and I give you my feedback, the production timelines and the value I consider fair — transparently, no surprises.\nYou only pay when you have photographic proof of your finished piece. This is my commitment. I still believe in the value of one\'s word.\nFor larger volume orders, an initial deposit is requested to cover materials — it\'s part of a fair agreement for both sides.' },
      { q: 'What is the usual delivery time?',      a: 'Every piece is created from scratch, with you in mind — no stock, no shortcuts. The whole process, from modelling to the final coat of paint, takes the time it deserves. I usually count on around a month, possibly longer during busier periods.\nA.Lopes Doodles is not a shop or a business — it\'s a project born from a dream, that I build with pleasure alongside my main professional activity. I do this with all the joy in the world, in the time that is mine. And it\'s that care you witness from the first contact until the piece is in your hands — whoever you are, business or individual, there\'s always a real person on the other side.\nFor laser engraving in series the timeline is much friendlier — talk to me and we\'ll work something out.' },
      { q: 'How does delivery work?',               a: 'You have two options. Shipping via CTT to anywhere in Portugal, with postage at the buyer\'s expense. Or hand delivery, available in the areas of Alenquer, Abrigada, Carregado and Torres Vedras.\nPayment is always confirmed before shipping — via MBway in the case of postal delivery, or at the moment of hand delivery.' },
    ],
  },
};

const dict: Record<string, Translations> = { pt, es, en };

export function t(lang: string): Translations {
  return dict[lang] ?? pt;
}

export const LANGS: Lang[] = ['pt', 'es', 'en'];
export const STATIC_PATHS = LANGS.map(lang => ({ params: { lang } }));
