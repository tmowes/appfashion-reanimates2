import React from 'react'

import * as S from './styles'
import { TileProps } from './types'

const Tile: React.FC<TileProps> = ({ uri }) => {
  return (
    <S.Container pointerEvents="none">
      <S.Web source={{ uri }} />
    </S.Container>
  )
}

export default Tile
