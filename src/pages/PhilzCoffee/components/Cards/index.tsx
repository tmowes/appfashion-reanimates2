import React from 'react'

import CardItem from './CardItem'

import { cards } from './data'

import * as S from './styles'

const Cards: React.FC = () => {
  return (
    <S.Container>
      {cards.map(({ picture, caption }, index) => (
        <CardItem key={index} picture={picture} caption={caption} />
      ))}
    </S.Container>
  )
}

export default Cards
