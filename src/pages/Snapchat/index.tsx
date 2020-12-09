import React from 'react'
import { stories } from './data'
import StoryThumbnail from './StoryThumbnail'

import * as S from './styles'

const Snapchat = () => {
  return (
    <S.Scroll>
      <S.Container>
        {stories.map(story => (
          <StoryThumbnail key={story.id} story={story} />
        ))}
      </S.Container>
    </S.Scroll>
  )
}

export default Snapchat
