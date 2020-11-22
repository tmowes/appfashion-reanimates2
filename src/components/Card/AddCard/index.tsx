import React from 'react'

import { AddCardProps } from './types'
import * as S from './styles'

const AddCard: React.FC<AddCardProps> = ({ selected, onSelect }) => {
  return (
    <S.Container selected={selected}>
      <S.CardSelection onPress={onSelect}>
        <S.CardContent>
          <S.AddIcon name="plus" size={48} color="white" />
        </S.CardContent>
      </S.CardSelection>
    </S.Container>
  )
}

export default AddCard
