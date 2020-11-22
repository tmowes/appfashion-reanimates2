import React from 'react'

import { CardProps, CardType } from './types'
import * as S from './styles'

const assets = [
  { type: CardType.VISA, uri: require('./assets/visa-logo.png') },
  { type: CardType.MASTER, uri: require('./assets/master-logo.png') },
  { type: CardType.AMERICAN, uri: require('./assets/american-logo.png') },
  { type: CardType.DINERS, uri: require('./assets/diners-logo.png') },
]

const Card: React.FC<CardProps> = ({
  card: { expiration, last4Digits, type },
  selected,
  onSelect,
}) => {
  return (
    <S.Container selected={selected}>
      <S.CardSelection onPress={onSelect}>
        <S.CardContent>
          <S.CardImage source={assets[type].uri} />
          <S.CardNumber
            selected={selected}
          >{`**** ${last4Digits}`}</S.CardNumber>
          <S.CardText selected={selected}>Expiration:</S.CardText>
          <S.CardText selected={selected}>{expiration}</S.CardText>
        </S.CardContent>
      </S.CardSelection>
    </S.Container>
  )
}

export default Card
