import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import Animated from 'react-native-reanimated'

const margin = 16
const borderRadius = 5
const width = Dimensions.get('window').width / 2 - margin * 2

export const Container = styled(Animated.View)`
  width: ${width}px;
  height: ${width * 1.77}px;
  margin-top: ${margin}px;
  border-radius: ${borderRadius}px;
`

export const ImageSrc = styled.Image.attrs({
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
