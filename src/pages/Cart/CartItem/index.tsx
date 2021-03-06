import React from 'react'

import SwipealeRow from '../SwipealeRow'

import * as S from './styles'
import { CartItemProps } from './types'

const CartItem: React.FC<CartItemProps> = ({ onDelete, quantity }) => {
  const height = 80 + 8 * 2
  return (
    <SwipealeRow onDelete={onDelete} height={height}>
      <S.Container>
        <S.Box />
        <S.Description>
          <S.SizeRow>
            <S.SizeTitle>Size:</S.SizeTitle>
            <S.SizeType>M</S.SizeType>
          </S.SizeRow>
          <S.ItemTitle>Short Sleeve Organic Top Top Top</S.ItemTitle>
          <S.Price>R$ 1.169,69</S.Price>
        </S.Description>
        <S.QuantityContainer>
          <S.QuantityText>{`x ${quantity}`}</S.QuantityText>
        </S.QuantityContainer>
      </S.Container>
    </SwipealeRow>
  )
}

export default CartItem
