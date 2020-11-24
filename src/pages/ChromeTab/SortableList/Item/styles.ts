import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'
import { SIZE } from '../../config'

export const Container = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  width: ${SIZE}px;
  height: ${SIZE}px;
`
