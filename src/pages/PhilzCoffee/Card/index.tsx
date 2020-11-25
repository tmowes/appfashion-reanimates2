import React from 'react'
import { View } from 'react-native'
import Button from '../components/Button'
import CardHeader from '../components/CardHeader'

import * as S from './styles'
import { CardProps } from './types'

const Card: React.FC<CardProps> = ({
  product: { color1, title, subtitle },
}) => {
  return (
    <S.Container>
      <S.Content color1={color1}>
        <View>
          <CardHeader />
          <S.Title>{title}</S.Title>
          <S.SubTitle>{subtitle}</S.SubTitle>
        </View>
        <Button label="I'll try it" />
      </S.Content>
    </S.Container>
  )
}

export default Card
