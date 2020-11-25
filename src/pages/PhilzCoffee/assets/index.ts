import { cards } from '../components/Cards/data'
import { products } from '../data'

export const assets = products
  .map(product => product.picture)
  .concat(cards.map(card => card.picture))
