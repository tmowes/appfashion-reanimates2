import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { interpolate, useAnimatedStyle } from 'react-native-reanimated'

import * as S from './styles'

import { ProductProps } from './types'

const { width } = Dimensions.get('window')

const Product: React.FC<ProductProps> = ({
  product: { picture, aspectRatio },
  x,
  index,
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [width * (index - 1), width * index, width * (index + 1)]
    const translateX = interpolate(x.value, inputRange, [
      width / 2,
      0,
      -width / 2,
    ])
    const scale = interpolate(x.value, inputRange, [0.7, 1.2, 0.7])
    return {
      transform: [{ translateX }, { scale }],
    }
  })
  return (
    <S.Container style={animatedStyle}>
      <S.ProductImage source={picture} aspectRatio={aspectRatio} />
    </S.Container>
  )
}

export default Product
