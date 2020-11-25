import { ImageSourcePropType } from 'react-native'
import Animated from 'react-native-reanimated'

export interface ProductProps {
  product: {
    picture: ImageSourcePropType
    aspectRatio: number
  }
  x: Animated.SharedValue<number>
  index: number
}

export interface ProductImageProps {
  aspectRatio: number
}
