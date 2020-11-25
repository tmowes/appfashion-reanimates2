import React from 'react'
import { StyleSheet } from 'react-native'

import * as S from './styles'

import { CardItemProps } from './types'

const CardItem: React.FC<CardItemProps> = ({ picture, caption }) => {
  return (
    <>
      <S.Container>
        <S.CardImage source={picture} style={StyleSheet.absoluteFill} />
      </S.Container>
      <S.Content>
        <S.Caption>{caption}</S.Caption>
      </S.Content>
    </>
  )
}

export default CardItem
