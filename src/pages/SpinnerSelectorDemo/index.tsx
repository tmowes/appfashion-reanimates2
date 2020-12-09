import React from 'react'
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated'
import NumberItem from './NumberItem'
import { arrayNumbers } from './data'

import * as S from './styles'

const numberHeight = 30

const SpinnerSelectorDemo: React.FC = () => {
  const scroll = useAnimatedRef<Animated.ScrollView>()

  const translateY = useSharedValue(0)

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y } }) => {
      translateY.value = y
    },
  })

  console.log(translateY.value / numberHeight + 1)

  return (
    <S.Container>
      <S.Content>
        <S.Button
          onPress={() =>
            scroll.current?.scrollTo({
              y: translateY.value - numberHeight,
              animated: true,
            })
          }
        >
          <S.Chevron name="chevron-up" />
        </S.Button>
        <Animated.ScrollView
          onScroll={onScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          snapToInterval={numberHeight}
          decelerationRate="fast"
          snapToAlignment="center"
          bounces={false}
          ref={scroll}
          contentContainerStyle={{ paddingVertical: numberHeight }}
        >
          {arrayNumbers.map((number, index) => (
            <NumberItem
              key={`${index}+${number}`}
              number={number}
              numberHeight={numberHeight}
              y={translateY}
              index={index}
            />
          ))}
        </Animated.ScrollView>
        <S.Button
          onPress={() =>
            scroll.current?.scrollTo({
              y: translateY.value + numberHeight,
              animated: true,
            })
          }
        >
          <S.Chevron name="chevron-down" />
        </S.Button>
      </S.Content>
    </S.Container>
  )
}

export default SpinnerSelectorDemo
