import React from 'react'

import CartContainer from './CartContainer'
import * as C from '../../components'

import * as S from './styles'

const Cart: React.FC = () => {
  return (
    <S.Container>
      <CartContainer>
        <C.Header
          title="Shopping Cart"
          color="#0c0d34"
          left={{ icon: 'arrow-left', onPress: () => true }}
          right={{ icon: 'share', onPress: () => true }}
        />
      </CartContainer>
    </S.Container>
  )
}

export default Cart
