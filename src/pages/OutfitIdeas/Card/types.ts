import Animated from 'react-native-reanimated'
import {} from 'react-native-gesture-handler'
import { ImageRequireSource } from 'react-native'

export interface CardProps {
  step: number
  onSwipe: () => void
  source: ImageRequireSource
  index: number
  animatedIndex: Animated.SharedValue<number>
}

export interface CtxGestureProps {
  x: number
  y: number
}
