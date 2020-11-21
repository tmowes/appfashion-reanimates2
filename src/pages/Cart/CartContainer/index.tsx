import React from 'react'
import { Dimensions, View, Text } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { clamp, snapPoint } from 'react-native-redash'
import { CartContainerProps } from './types'

const { width } = Dimensions.get('window')
const height = (640 * width) / 375
const minHeight = (200 * width) / 375
const snapPoints = [-(height - minHeight), 0]

const CartContainer = ({ children }: CartContainerProps) => {
  const translateY = useSharedValue(0)
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx: { y: number }) => {
      ctx.y = translateY.value
    },
    onActive: ({ translationY }, ctx) => {
      translateY.value = clamp(
        ctx.y + translationY,
        snapPoints[0],
        snapPoints[1],
      )
    },
    onEnd: ({ velocityY }) => {
      const dest = snapPoint(translateY.value, velocityY, snapPoints)
      translateY.value = withSpring(dest, { overshootClamping: true })
    },
  })
  const style = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }))

  return (
    <View style={{ flex: 1, backgroundColor: '#0c0d34' }}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height,
              backgroundColor: 'white',
              borderBottomLeftRadius: 48,
              borderBottomRightRadius: 48,
            },
            style,
          ]}
        >
          {children}
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}

export default CartContainer
