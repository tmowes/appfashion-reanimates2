import React from 'react'
import { Dimensions } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { snapPoint } from 'react-native-redash'
import { SharedElement } from 'react-navigation-shared-element'

import * as S from './styles'
import { StoryProps } from './types'

const { height } = Dimensions.get('window')

const Story = ({ route, navigation: { goBack } }: StoryProps) => {
  const { story } = route.params
  const isGestureActive = useSharedValue(false)
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: () => {
      isGestureActive.value = true
    },
    onActive: ({ translationX, translationY }) => {
      translateX.value = translationX
      translateY.value = translationY
    },
    onEnd: ({ translationY, velocityX, velocityY }) => {
      const snapBack =
        snapPoint(translationY, velocityY, [0, height]) === height
      if (snapBack) {
        console.log('goBack', goBack)
        goBack()
      } else {
        isGestureActive.value = false
        translateX.value = withSpring(0, { velocity: velocityX })
        translateY.value = withSpring(0, { velocity: velocityY })
      }
    },
  })
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateY.value,
      [0, height],
      [1, 0.5],
      Extrapolate.CLAMP,
    )
    return {
      transform: [
        { translateX: translateX.value * scale },
        { translateY: translateY.value * scale },
        { scale },
      ],
    }
  })
  const borderStyle = useAnimatedStyle(() => {
    return {
      borderRadius: withTiming(isGestureActive.value ? 24 : 0),
    }
  })
  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <S.Container style={animatedStyle}>
        <SharedElement id={story.id} style={{ flex: 1 }}>
          {story && <S.ImageSrc source={story.source} style={borderStyle} />}
        </SharedElement>
      </S.Container>
    </PanGestureHandler>
  )
}

export default Story
