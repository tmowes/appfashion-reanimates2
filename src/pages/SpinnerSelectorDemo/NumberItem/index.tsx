import React from 'react'
import { interpolate, useAnimatedStyle } from 'react-native-reanimated'

import * as S from './styles'
import { NumberItemProps } from './types'

const NumberItem: React.FC<NumberItemProps> = ({
  number,
  numberHeight,
  y,
  index,
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [30 * (index - 1), 30 * index, 30 * (index + 1)]
    const scale = interpolate(y.value, inputRange, [0.7, 1.2, 0.7])
    const opacity = interpolate(y.value, inputRange, [0.2, 1, 0.2])
    return {
      height: numberHeight,
      opacity,
      transform: [{ scale }],
    }
  })
  return (
    <S.Container style={animatedStyle}>
      <S.Title>{number}</S.Title>
    </S.Container>
  )
}

export default NumberItem
