import React from 'react'
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from 'react-native-reanimated'

import * as S from './styles'
import { COLOR_WIDTH } from './styles'
import { ColorProps } from './types'

const Color: React.FC<ColorProps> = ({ color, index, translateX, onPress }) => {
  const inputRange = [
    -COLOR_WIDTH * (index + 1),
    -COLOR_WIDTH * index,
    -COLOR_WIDTH * (index - 1),
  ]
  const onGestureEvent = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>(
    {
      onActive: ({ absoluteX: x, absoluteY: y }) => {
        'worklet'

        runOnJS(onPress)({ x, y })
      },
    },
  )
  const animatedStyle = useAnimatedStyle(() => {
    const angle = interpolate(
      translateX.value,
      inputRange,
      [0, Math.PI / 2, Math.PI],
      Extrapolate.CLAMP,
    )
    const translateY = 100 * Math.cos(angle)
    const scale = 0.8 + 0.2 * Math.sin(angle)
    return {
      transform: [{ translateX: translateX.value }, { translateY }, { scale }],
    }
  })
  return (
    <S.Container style={animatedStyle}>
      <TapGestureHandler onGestureEvent={onGestureEvent}>
        <S.AnimatedView>
          <S.Gradient colors={[color.start, color.end]} />
        </S.AnimatedView>
      </TapGestureHandler>
    </S.Container>
  )
}

export default Color
