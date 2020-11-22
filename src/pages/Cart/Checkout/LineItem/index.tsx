import React from 'react'

import * as S from './styles'
import { LineItemProps } from './types'

const LineItem: React.FC<LineItemProps> = ({ label, quantity, value }) => {
  return (
    <S.Container>
      <S.LeftColumn>
        <S.Label>{label}</S.Label>
        {quantity && <S.Quantity>{` (${quantity})`}</S.Quantity>}
      </S.LeftColumn>
      <S.RightColumn>
        <S.Value>{`$ ${value}`}</S.Value>
      </S.RightColumn>
    </S.Container>
  )
}

export default LineItem
