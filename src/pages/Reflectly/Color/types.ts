import Animated from 'react-native-reanimated'

export interface ColorProps {
  color: {
    start: string
    end: string
  }
  index: number
  translateX: Animated.SharedValue<number>
  onPress: (position: { x: number; y: number }) => void
}
