export type NavItem = { label: string; href: string }

export const NAV_LEFT: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Cardápio', href: '#cardapio' },
]

export const NAV_RIGHT: NavItem[] = [
  { label: 'Nossa História', href: '#historia' },
  { label: 'Contato', href: '#contato' },
]

export const NAV_ITEMS = [...NAV_LEFT, ...NAV_RIGHT]

/**
 * Ingredient layers of the hero burger, ordered top to bottom.
 * `y` is the vertical center of each layer as a percentage of the hero image height.
 * The future 3D hero consumes the same list to build and label its exploded layers.
 */
export type Ingredient = { id: string; label: string; y: number }

export const HERO_INGREDIENTS: Ingredient[] = [
  { id: 'pao-brioche', label: 'Pão brioche', y: 18 },
  { id: 'alface', label: 'Alface', y: 30 },
  { id: 'tomate', label: 'Tomate', y: 39.5 },
  { id: 'cebola', label: 'Cebola roxa', y: 47 },
  { id: 'cheddar', label: 'Queijo cheddar', y: 54 },
  { id: 'blend', label: 'Blend de carne', y: 62.5 },
  { id: 'pao-base', label: 'Pão inferior', y: 75 },
]

export const TICKER_STATEMENTS = [
  'O sabor que deixa marca.',
  'Feito na brasa',
  'Blend de 180 g',
  'Mais que um hambúrguer',
  'Fogo, fumaça e caráter',
  'Uma mordida. Uma marca.',
]

export type Product = {
  id: string
  name: string
  description: string
  price: string
  image: string
  tag?: string
}

export const BEST_SELLERS: Product[] = [
  {
    id: 'brasa',
    name: 'Brasa Dupla',
    description:
      'Dois smash de 90 g selados na chapa, cheddar derretido e cebola caramelizada no pão brioche.',
    price: 'R$ 42',
    image: '/images/burger-brasa.png',
    tag: 'Assinatura',
  },
  {
    id: 'defumado',
    name: 'Defumado',
    description:
      'Blend de 180 g, bacon crocante, provolone e barbecue defumado da casa.',
    price: 'R$ 46',
    image: '/images/burger-defumado.png',
  },
  {
    id: 'inferno',
    name: 'Inferno',
    description:
      'Pepper jack, jalapeños, molho picante vermelho e alface crocante. Para quem aguenta o calor.',
    price: 'R$ 44',
    image: '/images/burger-picante.png',
    tag: 'Picante',
  },
]

export const SIDES: Product[] = [
  {
    id: 'fritas',
    name: 'Fritas Rústicas',
    description: 'Corte grosso, sal grosso e alecrim.',
    price: 'R$ 22',
    image: '/images/side-fritas.png',
  },
  {
    id: 'onion',
    name: 'Anéis de Cebola',
    description: 'Empanados na hora, servidos com molho da casa.',
    price: 'R$ 24',
    image: '/images/side-onion.png',
  },
  {
    id: 'shake',
    name: 'Shake de Doce de Leite',
    description: 'Cremoso, denso e com calda escorrendo pelo copo.',
    price: 'R$ 26',
    image: '/images/side-shake.png',
  },
]
