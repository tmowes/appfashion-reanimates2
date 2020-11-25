import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'
import { CARD_HEIGHT } from './Card/styles'

export const Container = styled(Animated.View)`
  flex: 1;
`
export const Slider = styled.View`
  height: ${CARD_HEIGHT}PX;
`
