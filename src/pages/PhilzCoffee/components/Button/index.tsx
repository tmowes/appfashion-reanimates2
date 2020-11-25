import React from 'react'

import * as S from './styles'

import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <S.Touchable>
      <S.Container>
        <S.Label>{label}</S.Label>
      </S.Container>
    </S.Touchable>
  )
}

export default Button
