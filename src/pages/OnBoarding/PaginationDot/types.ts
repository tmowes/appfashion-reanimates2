import Animated from 'react-native-reanimated'

export interface PaginationDotProps {
  index: number
  currentIndex: Animated.SharedValue<number>
}
