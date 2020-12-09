import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { SharedElement } from 'react-navigation-shared-element'

import * as S from './styles'
import { StoryThumbnailProps } from './types'

const StoryThumbnail = ({ story }: StoryThumbnailProps) => {
  const { navigate, isFocused } = useNavigation()
  const [opacity, setOpacity] = useState(1)

  useFocusEffect(() => {
    if (isFocused()) {
      setOpacity(1)
    }
  })

  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      onPress={() => {
        setOpacity(0)
        navigate('Story', { story })
      }}
    >
      <SharedElement id={story.id}>
        <S.Container style={{ opacity }}>
          <S.ImageSrc source={story.source} />
        </S.Container>
      </SharedElement>
    </Pressable>
  )
}

export default StoryThumbnail
