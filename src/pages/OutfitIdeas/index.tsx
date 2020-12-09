import React, { useState } from 'react'

import { useNavigation, DrawerActions } from '@react-navigation/native'
import { useTiming } from 'react-native-redash'
import Header from '../../components/Header'
import { cards, step } from './Card/data'
import Background from './Background'
import Card from './Card'
import Categories from './Categories'
import { Container, Content } from './styles'

const OutfitIdeas: React.FC = () => {
  const { dispatch, navigate } = useNavigation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const animatedIndex = useTiming(currentIndex)
  return (
    <Container>
      <Header
        title="Outfit Ideas"
        color="#0c0d34"
        left={{
          icon: 'menu',
          onPress: () => dispatch(DrawerActions.openDrawer()),
        }}
        right={{ icon: 'shopping-bag', onPress: () => navigate('Cart') }}
      />
      <Content>
        <Background />
        <Categories />
        {cards.map(
          ({ index, source }) =>
            currentIndex < index * step + step && (
              <Card
                key={index}
                onSwipe={() => setCurrentIndex(prev => prev + step)}
                {...{ source, step, index, animatedIndex }}
              />
            ),
        )}
      </Content>
    </Container>
  )
}

export default OutfitIdeas
