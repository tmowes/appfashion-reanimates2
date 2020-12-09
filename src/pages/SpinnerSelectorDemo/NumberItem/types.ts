import Animated from 'react-native-reanimated'

export interface NumberItemProps {
  number: number | string
  numberHeight: number
  y: Animated.SharedValue<number>
  index: number
}
