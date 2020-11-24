import React from 'react'
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated'

import { COL, Positions, SIZE } from '../config'
import Item from './Item'

import { ListProps } from './types'

const SortableList: React.FC<ListProps> = ({ children }) => {
  const scrollView = useAnimatedRef<Animated.ScrollView>()
  const scrollY = useSharedValue(0)
  const positions = useSharedValue<Positions>(
    Object.assign(
      {},
      ...children.map((child, index) => ({ [child.props.id]: index })),
    ),
  )
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y } }) => {
      scrollY.value = y
    },
  })

  return (
    <Animated.ScrollView
      ref={scrollView}
      contentContainerStyle={{
        height: Math.ceil(children.length / COL) * SIZE,
      }}
      showsVerticalScrollIndicator={false}
      bounces={false}
      scrollEventThrottle={16}
      onScroll={onScroll}
    >
      {children.map(child => {
        return (
          <Item
            key={child.props.id}
            scrollView={scrollView}
            id={child.props.id}
            positions={positions}
            scrollY={scrollY}
          >
            {child}
          </Item>
        )
      })}
    </Animated.ScrollView>
  )
}

export default SortableList
