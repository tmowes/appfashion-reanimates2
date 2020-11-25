import React from 'react'

import * as S from './styles'

const CardHeader: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>RECOMMEND</S.Title>
        <S.Action>
          <S.Edit name="edit" size={16} />
        </S.Action>
      </S.Content>
    </S.Container>
  )
}

export default CardHeader
