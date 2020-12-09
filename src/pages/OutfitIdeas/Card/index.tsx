import React from 'react'
import { Dimensions } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'

import { mixColor, mix, snapPoint } from 'react-native-redash'
import {
  interpolate,
  Extrapolate,
  useDerivedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { CardProps } from './types'
import * as S from './styles'

const { width: wWidth } = Dimensions.get('window')
const width = wWidth * 0.8
const height = width * (425 / 294)
const snapPoints = [-wWidth, 0, wWidth]

const Card: React.FC<CardProps> = ({
  onSwipe,
  source,
  step,
  index,
  animatedIndex,
}) => {
  const translateX = useSharedValue(0)
  const position = useDerivedValue(() => index * step - animatedIndex.value)
  const translateY = useSharedValue(mix(position.value, 0, -50))
  const animatedCard = useAnimatedStyle(() => {
    const scale = mix(position.value, 1, 0.9)
    return {
      backgroundColor: mixColor(position.value, 0xccc9e9e7, 0x7774bcb8),
      // backgroundColor: mixColor(position.value, '#c9e9e7ff', '#74bcb8ff'),
      height,
      width,
      transform: [
        { translateY: translateY.value },
        { translateX: translateX.value },
        { scale },
      ],
    }
  })

  const animatedImage = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          position.value,
          [0, step],
          [1.2, 1],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }))

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx: { x: number; y: number }) => {
      ctx.x = translateX.value
      ctx.y = translateY.value
    },
    onActive: ({ translationX, translationY }, ctx) => {
      translateX.value = ctx.x + translationX
      translateY.value = ctx.y + translationY
    },
    onEnd: ({ velocityX, velocityY }) => {
      const dest = snapPoint(translateX.value, velocityX, snapPoints)
      translateY.value = withSpring(mix(position.value, 0, -50), {
        velocity: velocityY,
        overshootClamping: true,
      })
      translateX.value = withSpring(
        dest,
        {
          overshootClamping: dest !== 0,
          restSpeedThreshold: dest === 0 ? 0.01 : 100,
          restDisplacementThreshold: dest === 0 ? 0.01 : 100,
        },
        () => dest !== 0 && onSwipe,
      )
    },
  })

  return (
    <S.Container>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <S.CardContainer style={animatedCard}>
          <S.ImageCard {...{ source }} style={animatedImage} />
        </S.CardContainer>
      </PanGestureHandler>
    </S.Container>
  )
}

export default Card
