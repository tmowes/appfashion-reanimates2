import { ReactNode, RefObject } from 'react'
import Animated from 'react-native-reanimated'
import { Positions } from '../../config'

export interface ItemProps {
  children: ReactNode
  id: string
  positions: Animated.SharedValue<Positions>
  scrollView: RefObject<Animated.ScrollView>
  scrollY: Animated.SharedValue<number>
}
