import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'

export const Container = styled(Animated.View)`
  flex: 1;
`
export const ImageSrc = styled(Animated.Image).attrs({
  resizeMode: 'cover',
})`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: undefined;
  height: undefined;
`
