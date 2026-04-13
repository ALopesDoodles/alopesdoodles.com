export interface PortfolioItem {
  id: number;
  slug: string;
  title: string;
  src: string | null;
  hoverSrc: string | null;
  category: string;
  aspect: string;
  alt: string | null;
}

export const portfolioItems: PortfolioItem[] = [
  // Mini-eu
  { id: 1,  slug: 'mini-eu-carocha',       title: 'Mini-eu — Carocha VW',          src: '/gallery/mini-eu-carocha.png',        hoverSrc: null, category: 'miniEu',       aspect: '1/1', alt: 'Diorama em miniatura com Carocha VW, árvore e banco de jardim, pintado à mão' },
  { id: 2,  slug: 'mini-eu-casamento',     title: 'Mini-eu — Casamento',           src: '/gallery/mini-eu-casamento.png',      hoverSrc: null, category: 'miniEu',       aspect: '4/3', alt: 'Mini-eu de casal no bolo de casamento, figuras estilo Funko personalizadas' },
  { id: 3,  slug: 'mini-eu-ciclista-cao',  title: 'Mini-eu — Ciclista e Cão',      src: '/gallery/mini-eu-ciclista-cao.png',   hoverSrc: null, category: 'miniEu',       aspect: '4/3', alt: 'Mini-eu de ciclista MTB com bicicleta laranja e cão em diorama de floresta' },
  { id: 4,  slug: 'mini-eu-ciclista-mtb',  title: 'Mini-eu — Ciclista MTB',        src: '/gallery/mini-eu-ciclista-mtb.png',   hoverSrc: null, category: 'miniEu',       aspect: '3/4', alt: 'Mini-eu de ciclista MTB com capacete escuro e bicicleta em diorama' },
  { id: 5,  slug: 'mini-eu-ciclista-roxo', title: 'Mini-eu — Ciclista Roxo',       src: '/gallery/mini-eu-ciclista-roxo.png',  hoverSrc: null, category: 'miniEu',       aspect: '3/4', alt: 'Mini-eu de ciclista com capacete roxo e bicicleta em diorama' },
  { id: 6,  slug: 'mini-eu-guarda-redes',  title: 'Mini-eu — Guarda-Redes Martim', src: '/gallery/mini-eu-guarda-redes.png',   hoverSrc: null, category: 'miniEu',       aspect: '4/3', alt: 'Mini-eu personalizado de guarda-redes "Martim" com baliza em diorama' },
  { id: 7,  slug: 'mini-eu-trike',         title: 'Mini-eu — Trike Adaptado',      src: '/gallery/mini-eu-trike.png',          hoverSrc: null, category: 'miniEu',       aspect: '3/4', alt: 'Mini-eu de trike de desporto adaptado, ciclismo paralímpico pintado à mão' },
  // Colecionáveis
  { id: 8,  slug: 'col-rei-trono',         title: 'Colecionável — Rei no Trono',   src: '/gallery/col-rei-trono.png',          hoverSrc: null, category: 'collectibles', aspect: '1/1', alt: 'Estatueta coleccionável de rei em trono dourado com detalhes elaborados' },
  { id: 9,  slug: 'col-michael-jackson',   title: 'Colecionável — Michael Jackson',src: '/gallery/col-michael-jackson.png',   hoverSrc: null, category: 'collectibles', aspect: '3/4', alt: 'Estatueta coleccionável de Michael Jackson — Smooth Criminal, pintada à mão' },
  { id: 10, slug: 'col-broly',             title: 'Colecionável — Broly',          src: '/gallery/col-broly.png',              hoverSrc: null, category: 'collectibles', aspect: '3/4', alt: 'Estatueta coleccionável Broly Dragon Ball com base de lava iluminada' },
  { id: 11, slug: 'col-nightwing',         title: 'Colecionável — Nightwing',      src: '/gallery/col-nightwing.png',          hoverSrc: null, category: 'collectibles', aspect: '3/4', alt: 'Estatueta coleccionável Nightwing DC Comics em pose de acção' },
  { id: 12, slug: 'col-moana',             title: 'Colecionável — Moana',          src: '/gallery/col-moana.png',              hoverSrc: null, category: 'collectibles', aspect: '3/4', alt: 'Estatueta chibi de Moana com remo, pintada à mão com detalhes finos' },
  { id: 13, slug: 'col-stitch-lourenco',   title: 'Colecionável — Stitch Lourenço',src: '/gallery/col-stitch-lourenco.png',   hoverSrc: null, category: 'collectibles', aspect: '3/4', alt: 'Stitch personalizado com nome Lourenço, estatueta pintada à mão' },
  { id: 14, slug: 'col-angel-alexa',       title: 'Colecionável — Angel Alexa',    src: '/gallery/col-angel-alexa.png',        hoverSrc: null, category: 'collectibles', aspect: '3/4', alt: 'Angel personalizada com nome Alexa, estatueta pintada à mão em rosa' },
  { id: 15, slug: 'col-conjunto-1',        title: 'Colecionáveis — Conjunto I',    src: '/gallery/col-conjunto-1.png',         hoverSrc: null, category: 'collectibles', aspect: '4/3', alt: 'Conjunto de figuras coleccionáveis estilo chibi em exposição' },
  { id: 16, slug: 'col-conjunto-2',        title: 'Colecionáveis — Conjunto II',   src: '/gallery/col-conjunto-2.png',         hoverSrc: null, category: 'collectibles', aspect: '4/3', alt: 'Conjunto de figuras coleccionáveis Inside Out pintadas à mão' },
  // Placeholders
  { id: 17, slug: 'laser-01',    title: 'Gravação Laser — Em breve',  src: null, hoverSrc: null, category: 'laser',      aspect: '3/4', alt: null },
  { id: 18, slug: 'tabletop-01', title: 'Tabletop — Em breve',        src: null, hoverSrc: null, category: 'tabletop',   aspect: '3/4', alt: null },
  { id: 19, slug: 'cosplay-01',  title: 'Cosplay — Em breve',         src: null, hoverSrc: null, category: 'cosplay',    aspect: '3/4', alt: null },
  { id: 20, slug: 'custom-01',   title: 'Customizável — Em breve',    src: null, hoverSrc: null, category: 'custom',     aspect: '3/4', alt: null },
];
