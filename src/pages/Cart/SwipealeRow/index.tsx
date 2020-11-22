import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { clamp, snapPoint } from 'react-native-redash'

import * as S from './styles'
import { SwipealeRowProps } from './types'

const { width } = Dimensions.get('window')
const aspectRatio = width / 375
const finalDest = width
const snapPoints = [-80 * aspectRatio, 0, finalDest]

const SwipealeRow: React.FC<SwipealeRowProps> = ({ children, onDelete }) => {
  const translateX = useSharedValue(0)
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx: { x: number }) => {
      ctx.x = translateX.value
    },
    onActive: ({ translationX }, ctx) => {
      translateX.value = ctx.x + translationX
    },
    onEnd: ({ velocityX }) => {
      const dest = snapPoint(translateX.value, velocityX, snapPoints)
      translateX.value = withSpring(dest, { overshootClamping: true }, () => {
        'worklet'

        if (dest === finalDest) {
          runOnJS(onDelete)()
        }
      })
    },
  })
  const style = useAnimatedStyle(() => ({
    backgroundColor: 'white',
    transform: [{ translateX: translateX.value }],
  }))
  const deleteStyle = useAnimatedStyle(() => ({
    opacity: translateX.value > 0 ? 1 : 0,
  }))
  const editStyle = useAnimatedStyle(() => ({
    opacity: translateX.value < 0 ? 1 : 0,
  }))

  return (
    <View>
      <Animated.View style={[StyleSheet.absoluteFill, deleteStyle]}>
        <S.DeleteContent>
          <S.DeleteText>Remove Item</S.DeleteText>
        </S.DeleteContent>
        <S.DeleteContainer />
      </Animated.View>
      <Animated.View style={[StyleSheet.absoluteFill, editStyle]}>
        <S.EditContent />
        <S.EditContainer />
      </Animated.View>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={style}>{children}</Animated.View>
      </PanGestureHandler>
    </View>
  )
}

export default SwipealeRow
