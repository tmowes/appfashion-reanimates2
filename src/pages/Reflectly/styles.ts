import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'
import { COLOR_WIDTH } from './Color/styles'

export const Container = styled(Animated.View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background: #000;
`
export const Placeholder = styled.View`
  width: ${COLOR_WIDTH}px;
`

export const Title = styled.Text``
