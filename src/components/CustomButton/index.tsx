import React from 'react'

import * as S from './styles'
import { CustomButtonProps } from './types'

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  backgroundColor,
  size,
  label,
}) => (
  <S.Container
    onPress={onPress}
    style={{
      backgroundColor,
      width: size,
      height: size,
      borderRadius: size / 2,
    }}
  >
    <S.Label>{label}</S.Label>
  </S.Container>
)

export default CustomButton
