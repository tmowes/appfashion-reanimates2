/* eslint-disable no-shadow */

export interface CardProps {
  card: CardContentProps
  selected: boolean
  onSelect: () => void
}

interface CardContentProps {
  id: number
  type: CardType
  last4Digits: number
  expiration: string
}

export enum CardType {
  'VISA',
  'MASTER',
  'AMERICAN',
  'DINERS',
}

export interface CardSelectedProps {
  selected: boolean
}
