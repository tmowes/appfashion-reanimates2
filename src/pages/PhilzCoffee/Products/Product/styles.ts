import Animated from 'react-native-reanimated'
import styled, { css } from 'styled-components/native'
import { ProductImageProps } from './types'

const SIZE = 200

export const Container = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`
export const ProductImage = styled.Image<ProductImageProps>`
  ${({ aspectRatio }) =>
    aspectRatio &&
    css`
      width: ${SIZE}px;
      height: ${SIZE * aspectRatio}px;
      margin-top: 64px;
    `}
`
