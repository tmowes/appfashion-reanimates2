/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import * as S from './styles'
import { RADIUS } from './styles'
import { BackgroundProps } from './types'

export const { width, height } = Dimensions.get('window')

const Background: React.FC<BackgroundProps> = ({ colorSelection }) => {
  const progress = useSharedValue(0)
  useEffect(() => {
    progress.value = 0
    progress.value = withTiming(1, {
      duration: 650,
      easing: Easing.inOut(Easing.ease),
    })
  }, [colorSelection])
  const MAX_RADIUS =
    (Math.SQRT2 *
      Math.max(
        width + colorSelection.position.x,
        height + colorSelection.position.y,
      )) /
    2
  const animatedStyle = useAnimatedStyle(() => {
    return {
      top: -RADIUS + colorSelection.position.y,
      left: -RADIUS + colorSelection.position.x,
      borderRadius: RADIUS,
      width: RADIUS * 2,
      height: RADIUS * 2,
      backgroundColor: colorSelection.current.start,
      transform: [{ scale: progress.value * (MAX_RADIUS / RADIUS) }],
    }
  })
  return (
    <S.Container
      style={{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colorSelection.previous.start,
      }}
    >
      <Animated.View style={animatedStyle} />
    </S.Container>
  )
}

export default Background
