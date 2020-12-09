import React from 'react'

import {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { Container } from './styles'
import { PaginationDotProps } from './types'

const PaginationDot: React.FC<PaginationDotProps> = ({
  index,
  currentIndex,
}) => {
  const animatedContainer = useAnimatedStyle(() => ({
    opacity: interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [0.3, 1, 0.3],
      Extrapolate.CLAMP,
    ),
    scale: interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [0.75, 1, 0.75],
      Extrapolate.CLAMP,
    ),
  }))
  return <Container style={animatedContainer} />
}

export default PaginationDot
