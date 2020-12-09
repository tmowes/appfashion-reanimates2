import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

export const Container = styled(Animated.View)`
  justify-content: center;
  padding: 0 16px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-top-color: orangered;
  border-bottom-color: orangered;
  border-radius: 4px;
`

export const Title = styled.Text`
  color: white;
  font-size: 18px;
  text-align: center;
`
