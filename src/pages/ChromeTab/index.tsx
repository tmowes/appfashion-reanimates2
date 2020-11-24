import React from 'react'

import { tiles } from './data'
import SortableList from './SortableList'

import * as S from './styles'
import Tile from './Tile'

const ChromeTab: React.FC = () => {
  return (
    <S.Container>
      <SortableList>
        {[...tiles, ...tiles].map((tile, index) => (
          <Tile
            onLongPress={() => true}
            key={tile.id + index}
            id={tile.id + index}
            uri={tile.uri}
          />
        ))}
      </SortableList>
    </S.Container>
  )
}
export default ChromeTab
