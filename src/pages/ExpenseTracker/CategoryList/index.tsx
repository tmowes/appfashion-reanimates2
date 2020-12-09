import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react'

import * as C from '@components'

import { ScrollView } from 'react-native-gesture-handler'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import * as S from './styles'
import { CategoryListHandles, CategoryListProps } from './types'

const CategoryList: React.ForwardRefRenderFunction<
  CategoryListHandles,
  CategoryListProps
> = ({ categories, loadingExpenses }, ref) => {
  const [loading, setLoading] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [selectedCategoryId, setSelectedCategoryId] = useState<number[]>([])

  const scrollHeight = useSharedValue(120)
  const animatedConfig = {
    duration: 300,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  }

  const animatedScroll = useAnimatedStyle(() => ({
    height: showMore
      ? withTiming(scrollHeight.value, animatedConfig)
      : withTiming(80, animatedConfig),
  }))

  const handleCategorySelection = useCallback(
    (id: number) => {
      setLoading(true)
      const alreadySelected = selectedCategoryId.findIndex(item => item === id)
      if (alreadySelected >= 0) {
        const filteredCategories = selectedCategoryId.filter(
          item => item !== id,
        )
        setSelectedCategoryId(filteredCategories)
      } else {
        setSelectedCategoryId([...selectedCategoryId, id])
      }
      setLoading(false)
    },
    [selectedCategoryId],
  )

  const selectedCategoryIdArray = useCallback(() => {
    if (!loading) {
      console.log('loading')
    } else {
      console.log('Not loading')
    }
    return selectedCategoryId
  }, [selectedCategoryId, loading])

  // useImperativeHandle(ref, () => {
  //   return { selectedCategoryIdArray }
  // })
  useImperativeHandle(ref, () => {
    return { selectedCategoryIdArray }
  })

  return (
    <S.Container>
      <Animated.View style={animatedScroll}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <S.LeftColumn>
            {categories
              .filter((_, index) => index % 2 === 0)
              .map(category => (
                <S.Content key={category.id}>
                  <C.IconLabelButton
                    name={category.icon}
                    size={32}
                    onPress={() => handleCategorySelection(category.id)}
                    color={category.color}
                    backgroundColor="white"
                    label={category.name}
                    labelColor="#194868"
                    selected={selectedCategoryId.includes(category.id)}
                  />
                </S.Content>
              ))}
          </S.LeftColumn>
          <S.RightColumn>
            {categories
              .filter((_, index) => index % 2 !== 0)
              .map(category => (
                <S.Content key={category.id}>
                  <C.IconLabelButton
                    name={category.icon}
                    size={32}
                    onPress={() => handleCategorySelection(category.id)}
                    color={category.color}
                    backgroundColor="white"
                    label={category.name}
                    labelColor="#194868"
                    selected={selectedCategoryId.includes(category.id)}
                  />
                </S.Content>
              ))}
          </S.RightColumn>
        </ScrollView>
      </Animated.View>
      <S.Toggle>
        <C.IconLabelButton
          name={showMore ? 'chevron-up' : 'chevron-down'}
          size={20}
          onPress={() => setShowMore(prev => !prev)}
          color="#194868"
          backgroundColor="transparent"
          label={showMore ? 'LESS' : 'MORE'}
          labelColor="#194868"
        />
      </S.Toggle>
    </S.Container>
  )
}

export default forwardRef(CategoryList)
