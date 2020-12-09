/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Dimensions } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import { interpolateColor } from 'react-native-redash'

import Slide from './Slide'
import SubSlide from './SubSlide'
import PaginationDot from './PaginationDot'

import slides from '../../data/slides'
import * as S from './styles'

const { width } = Dimensions.get('window')

const OnBoarding: React.FC = () => {
  const { navigate } = useNavigation()
  const scroll = useAnimatedRef<Animated.ScrollView>()
  const translateX = useSharedValue(0)
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { x } }) => {
      translateX.value = x
    },
  })
  const animatedBackground = useDerivedValue(() =>
    interpolateColor(
      translateX.value,
      slides.map((_, index) => index * width),
      slides.map(slide => slide.color),
    ),
  )
  const animatedSlider = useAnimatedStyle(() => ({
    backgroundColor: animatedBackground.value,
  }))
  const animatedBorderTopLeft = useAnimatedStyle(() => ({
    backgroundColor: animatedBackground.value,
  }))
  const currentIndex = useDerivedValue(() => translateX.value / width)
  const animatedFooter = useAnimatedStyle(() => ({
    width: width * slides.length,
    transform: [{ translateX: -translateX.value }],
  }))

  return (
    <S.Container>
      <S.Slider style={animatedSlider}>
        {slides.map(({ picture }, index) => {
          const animatedSlides = useAnimatedStyle(() => ({
            opacity: interpolate(
              translateX.value,
              [(index - 0.6) * width, index * width, (index + 0.6) * width],
              [0, 1, 0],
              Extrapolate.CLAMP,
            ),
          }))
          return (
            <S.Underlay key={index} style={animatedSlides}>
              <S.ImageContainer
                source={picture.uri}
                style={{
                  width: width - 65,
                  height: ((width - 65) * picture.height) / picture.width,
                  resizeMode: 'cover',
                }}
              />
            </S.Underlay>
          )
        })}
        <S.HorizontalScrollView onScroll={onScroll} ref={scroll}>
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
          ))}
        </S.HorizontalScrollView>
      </S.Slider>
      <S.Footer>
        <S.BorderTopLeft style={animatedBorderTopLeft} />
        <S.FooterWrapper>
          <S.PaginationContainer>
            {slides.map((_, index) => (
              <PaginationDot key={index} {...{ index, currentIndex }} />
            ))}
          </S.PaginationContainer>
          <S.FooterContent style={animatedFooter}>
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1
              return (
                <SubSlide
                  key={index}
                  {...{ subtitle, description, last }}
                  onPress={() => {
                    if (last) {
                      navigate('Welcome')
                    } else {
                      scroll.current?.scrollTo({
                        x: width * (index + 1),
                        animated: true,
                      })
                    }
                  }}
                />
              )
            })}
          </S.FooterContent>
        </S.FooterWrapper>
      </S.Footer>
    </S.Container>
  )
}

export default OnBoarding
