import React from 'react'

import { Dimensions, ScrollView } from 'react-native'
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import { interpolateColor } from 'react-native-redash'
import Cards from './components/Cards'
import Products from './Products'

import { products } from './data'

import * as S from './styles'
import Card from './Card'
import { CARD_HEIGHT } from './Card/styles'

const { width } = Dimensions.get('window')

const snapToOffsets = [0, CARD_HEIGHT]

const PhilzCoffee: React.FC = () => {
  const translateX = useSharedValue(0)

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { x } }) => {
      translateX.value = x
    },
  })

  const animatedStyle = useAnimatedStyle(() => ({
    flex: 1,
    backgroundColor: interpolateColor(
      translateX.value,
      products.map((_, index) => width * index),
      products.map(({ color2 }) => color2),
    ),
  }))

  return (
    <S.Container style={animatedStyle}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        snapToOffsets={snapToOffsets}
        decelerationRate="fast"
        snapToEnd={false}
      >
        <S.Slider>
          <Animated.ScrollView
            onScroll={onScroll}
            scrollEventThrottle={16}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={width}
            decelerationRate="fast"
          >
            {products.map((product, index) => (
              <Card product={product} key={index} />
            ))}
          </Animated.ScrollView>
          <Products x={translateX} />
        </S.Slider>
        <Cards />
      </ScrollView>
    </S.Container>
  )
}

export default PhilzCoffee
