import React, { useState } from 'react'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import {
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { snapPoint } from 'react-native-redash'
import Background from './Background'
import Color from './Color'
import { COLOR_WIDTH } from './Color/styles'
import { colors } from './data'

import * as S from './styles'

const snapPoints = colors.map((_, i) => -i * COLOR_WIDTH)

const Reflectly: React.FC = () => {
  const [colorSelection, setColorSelection] = useState({
    previous: colors[0],
    current: colors[0],
    position: { x: 0, y: 0 },
  })
  const translateX = useSharedValue(0)
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number }
  >({
    onStart: (_, ctx) => {
      ctx.x = translateX.value
    },
    onActive: ({ translationX }, { x }) => {
      translateX.value = x + translationX
    },
    onEnd: ({ velocityX }) => {
      const dest = snapPoint(translateX.value, velocityX, snapPoints)
      translateX.value = withSpring(dest)
    },
  })
  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <S.Container>
        <Background colorSelection={colorSelection} />
        <S.Placeholder />
        {colors.map((color, index) => (
          <Color
            key={index}
            color={color}
            index={index}
            translateX={translateX}
            onPress={position => {
              translateX.value = withSpring(-index * COLOR_WIDTH)
              setColorSelection({
                position,
                previous: colorSelection.current,
                current: color,
              })
            }}
          />
        ))}
      </S.Container>
    </PanGestureHandler>
  )
}

export default Reflectly
