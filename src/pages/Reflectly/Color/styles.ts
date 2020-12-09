import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Animated from 'react-native-reanimated'

const { width } = Dimensions.get('window')
export const COLOR_WIDTH = width / 3
const RADIUS = 45

export const Container = styled(Animated.View)`
  width: ${COLOR_WIDTH}px;
  align-items: center;
`
export const AnimatedView = styled(Animated.View)``

export const Gradient = styled(LinearGradient).attrs({
  start: { x: 0, y: 0.8 },
  end: { x: 0.4, y: 0.8 },
})`
  width: ${RADIUS * 2}px;
  height: ${RADIUS * 2}px;
  border-radius: ${RADIUS}px;
`
